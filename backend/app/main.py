from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse
import pandas as pd
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Connected": "True"}


#step 1 Importing the uploaded file and returnin the coloums to be mapped
@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    try:
        df=readfile(file)
        print(df.head())
        cleaned_df_all = df.dropna(how='all')
        print(cleaned_df_all.columns)
        return {"message": "File uploaded successfully", "columns": cleaned_df_all.columns.tolist()}
    except Exception as e:
        return {"message": str(e)}


# maing logic of converting
@app.post("/convert")
async def convert(file: UploadFile = File(...), mappings: str = Form(...), prefixes: str = Form("{}"), postfixes: str = Form("{}")):
    try:
        df = readfile(file)
        mapping_dict = json.loads(mappings)
        prefix_dict = json.loads(prefixes)
        postfix_dict = json.loads(postfixes)
    except Exception as e:
        return PlainTextResponse(content=f"Error parsing input: {str(e)}", status_code=400)
    
    vcf_strings = []
    df=df.dropna(how='all')
    for _, row in df.iterrows():
        vcf_content = ["BEGIN:VCARD", "VERSION:3.0"]
        
        has_n = False
        fn_value = None
        
        for df_col, vcf_prop in mapping_dict.items():
            if df_col in df.columns:
                val = str(row[df_col]).strip()
                if pd.notna(row[df_col]) and val != "" and val.lower() not in ["undefined", "null", "nan"]:
                    prefix = prefix_dict.get(df_col, "")
                    postfix = postfix_dict.get(df_col, "")
                    final_val = f"{prefix}{val}{postfix}"
                    vcf_content.append(f"{vcf_prop}:{final_val}")
                    
                    if vcf_prop.upper() == "N":
                        has_n = True
                    elif vcf_prop.upper() == "FN":
                        fn_value = final_val

        if not has_n and fn_value:
            vcf_content.append(f"N:;{fn_value};;;")

        if not fn_value and not any(line.startswith("FN:") for line in vcf_content):
            vcf_content.append("FN:Unnamed Contact")
            if not has_n:
                vcf_content.append("N:;Unnamed;;;")

        if len(vcf_content) > 2:
            vcf_content.append("END:VCARD")
            vcf_strings.append("\n".join(vcf_content))

    final_vcf = "\n".join(vcf_strings)
    filename = f"{file.filename.rsplit('.', 1)[0]}_converted.vcf"
    
    return PlainTextResponse(
        content=final_vcf,
        media_type="text/vcard",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )

def readfile(file):
    try:
        if file.filename.endswith('.vcf'):
            raise ValueError(".vcf parsing is currently unsupported. Please convert via a third-party tool first.")
        elif file.filename.endswith('.xls') or file.filename.endswith('.xlsx'):
            df=pd.read_excel(file.file)
        elif file.filename.endswith('.csv'):
            df = pd.read_csv(file.file)
        else:
            raise ValueError("Please upload a .vcf, .csv or .xlsx file.")
        return df
    except Exception as e:
        print("Error details:", e)
        raise ValueError(f"Failed to read file: {str(e)}")