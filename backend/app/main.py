from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    try:
        if file.filename.endswith('.vcf'):
            df=pd.read_vcard(file.file)
        elif file.filename.endswith('.xls') or file.filename.endswith('.xlsx'):
            df=pd.read_excel(file.file)
        elif file.filename.endswith('.csv'):
            df = pd.read_csv(file.file)
        else:
            return {"message": "Please upload a .vcf, .csv or .xlsx file."}
        print(df.head())
        print(df.columns)
        
        return {"message": "File uploaded successfully", "columns": df.columns.tolist()}
    except Exception as e:
        print("Error details:", e)
        return {"message": "Failed to read file. It might be corrupt or not a valid CSV."}