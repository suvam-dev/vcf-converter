from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse, JSONResponse
import pandas as pd
import json

app = FastAPI()
EMPTY_VALUE_PATTERNS = ["undefined", "null", "nan"]
MIN_VCF_LINES = 2

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_empty_value(val):
    return pd.isna(val) or str(val).strip() == "" or str(val).lower() in EMPTY_VALUE_PATTERNS

@app.get("/api/health")
@app.get("/api")
def read_root():
    return {"status": "ok", "Connected": "True"}

@app.post("/api/upload")
async def upload(file: UploadFile = File(...)):
    try:
        df = readfile(file)
        df = df.dropna(how='all')
        return {"message": "File uploaded successfully", "columns": df.columns.tolist()}
    except Exception as e:
        return JSONResponse(status_code=400, content={"message": str(e)})


@app.post("/api/convert")
async def convert(file: UploadFile = File(...), mappings: str = Form(...), prefixes: str = Form("{}"), postfixes: str = Form("{}")):
    try:
        df = readfile(file)
        mapping_dict = json.loads(mappings)
        prefix_dict = json.loads(prefixes)
        postfix_dict = json.loads(postfixes)
    except Exception as e:
        return JSONResponse(status_code=400, content={"message": f"Error parsing input: {str(e)}"})

    vcf_strings = []
    df = df.dropna(how='all')
    for _, row in df.iterrows():
        vcf_content = ["BEGIN:VCARD", "VERSION:3.0"]

        has_n = False
        fn_value = None

        for df_col, vcf_prop in mapping_dict.items():
            if df_col in df.columns:
                val = str(row[df_col]).strip()
                if not is_empty_value(row[df_col]):
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

        if len(vcf_content) > MIN_VCF_LINES:
            vcf_content.append("END:VCARD")
            vcf_strings.append("\n".join(vcf_content))

    final_vcf = "\n".join(vcf_strings)
    filename = f"{file.filename.rsplit('.', 1)[0]}_converted.vcf"

    return PlainTextResponse(
        content=final_vcf,
        status_code=200,
        media_type="text/vcard",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )

def readfile(file):
    if file.filename.endswith('.vcf'):
        raise ValueError(".vcf parsing is currently unsupported. Please convert via a third-party tool first.")
    elif file.filename.endswith('.xls') or file.filename.endswith('.xlsx'):
        return pd.read_excel(file.file)
    elif file.filename.endswith('.csv'):
        return pd.read_csv(file.file)
    else:
        raise ValueError("Please upload a .vcf, .csv or .xlsx file.")