# VCF Converter

Convert your contact spreadsheets to standard vCard format in seconds. Upload CSV or Excel files, map columns to contact properties, and download ready-to-import vCard files for Gmail, Outlook, Apple Contacts, and more.

**Live Demo:** https://vcf-converter.vercel.app

## Features

- **File Upload** — CSV, XLSX, and XLS format support
- **Column Mapping** — Map spreadsheet columns to vCard properties
- **Data Transformation** — Add prefixes/postfixes to contact fields
- **One-Click Download** — Get standardized vCard files for any contacts app
- **Responsive Design** — Works on desktop and mobile
- **Fast Processing** — Handles large contact lists efficiently

## Built With

- **Frontend** — React 19 with Vite and Tailwind CSS
- **Backend** — FastAPI with Pandas for data processing
- **Deployment** — Vercel

## Project Structure

```
vcf-converter/
├── frontend/                    # React + Vite SPA
│   ├── src/
│   │   ├── components/          # UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx         # Main conversion component
│   │   │   ├── Features.jsx
│   │   │   ├── About.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
├── backend/
│   └── app/
│       ├── main.py              # FastAPI application
│       └── requirements.txt
├── vercel.json                  # Deployment configuration
└── README.md
```

## How to Use

1. **Upload** — Select a CSV or Excel file with your contacts
2. **Map Columns** — Match spreadsheet columns to vCard properties (Name, Email, Phone, etc.)
3. **Customize** (Optional) — Add prefixes or postfixes to any field
4. **Download** — Get your vCard file ready to import
5. **Import** — Open the file in Gmail, Outlook, Apple Contacts, or any contacts app

## Supported Contact Fields

Map your spreadsheet columns to any of these vCard properties:

- **Name** — FN (Full Name), N (Structured Name)
- **Contact** — EMAIL, TEL (with TYPE modifiers: WORK, HOME, MOBILE)
- **Organization** — ORG (Company), TITLE (Job Title)
- **Location** — ADR (Address with TYPE: WORK, HOME)
- **Web** — URL, IMPP
- **Personal** — BDAY (Birthday), ANNIVERSARY, GENDER, PHOTO
- **Other** — NOTE, CATEGORIES, and more

## Details

- Empty rows are automatically removed during processing
- Unknown values (null, undefined, etc.) are treated as empty fields
- Full Name field is auto-generated if not explicitly mapped
- Supports contact lists up to 100 MB

## Local Development

### Prerequisites
- Node.js 18+
- Python 3.8+
- Git

### Setup

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/vcf-converter.git
cd vcf-converter
```

**2. Backend Setup**
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate           # Windows: .venv\Scripts\activate
pip install -r app/requirements.txt
uvicorn app.main:app --reload       # Runs on http://localhost:8000
```

**3. Frontend Setup** (in a new terminal)
```bash
cd frontend
npm install
npm run dev                         # Runs on http://localhost:5173
```

The frontend automatically proxies API calls to the backend. Visit `http://localhost:5173` to test.

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build                       # Creates dist/ folder
npm run preview                     # Preview production build
```

## Deploy to Vercel

This project is configured for Vercel deployment with a monorepo setup.

### Option 1: Deploy via Vercel Dashboard
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects the monorepo configuration from `vercel.json`
3. Push to main branch — automatic deployment begins

### Option 2: Deploy via Vercel CLI
```bash
npm install -g vercel              # Install Vercel CLI globally
vercel login                        # Authenticate with Vercel
vercel deploy                       # Deploy the entire project
```

**Deployment Details:**
- Frontend builds to `dist/` folder and serves as static site
- Backend runs as serverless functions at `/api/*` routes
- Both `/upload` and `/api/upload` endpoints are supported
- Environment: https://vcf-converter.vercel.app

## Troubleshooting

**File upload failed**  
Ensure your file is CSV, XLSX, or XLS format and not corrupted.

**Columns not appearing**  
Make sure your spreadsheet has headers in the first row and contains data.

**vCard won't import**  
Try importing the downloaded file into a different contacts app to verify compatibility. Check that all columns are properly mapped.

**Other issues**  
Clear your browser cache and try again. If problems persist, refresh the page.

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

## License

MIT License
