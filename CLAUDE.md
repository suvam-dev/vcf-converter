# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VCF Converter** is a full-stack application that transforms contact data from CSV/Excel files into standard vCard (.vcf) format. Users upload spreadsheets, map columns to vCard fields, apply transformations (prefixes/postfixes), and download the converted vCard file.

## Architecture

### Tech Stack
- **Frontend**: React 19 with Vite, Tailwind CSS (v4), react-hot-toast
- **Backend**: FastAPI, Pandas, openpyxl (Excel support)
- **Deployment**: Vercel (monorepo with separate frontend/backend builds)

### Directory Structure
```
vcf-converter/
├── frontend/                 # React + Vite SPA
│   ├── src/
│   │   ├── components/      # UI components (Navbar, Hero, Features, About, Footer)
│   │   ├── main.jsx         # React DOM entry point
│   │   ├── App.jsx          # Main layout component
│   │   └── index.css        # Global Tailwind directives
│   ├── vite.config.js       # Vite + React + Tailwind config
│   └── package.json
├── backend/
│   └── app/
│       └── main.py          # Single-file FastAPI app (all endpoints)
├── vercel.json              # Deployment config
└── requirements.txt         # Python dependencies
```

### Data Flow
1. **Upload** (`POST /upload` or `/api/upload`): User uploads CSV/XLSX/XLS → Pandas reads and cleans → Returns column list
2. **Mapping**: Frontend UI lets user map spreadsheet columns to vCard properties (FN, EMAIL, TEL, etc.) with optional prefix/postfix
3. **Convert** (`POST /convert` or `/api/convert`): Re-read file with mappings applied → Generate VCF rows → Return downloadable .vcf file

### Backend Logic (main.py)
- **CORS**: Enabled for all origins (suitable for development; tighten for production)
- **File types**: CSV, XLSX, XLS (via Pandas)
- **VCF generation**:
  - Drops entirely empty rows before processing
  - Filters null/undefined/NaN values at cell level
  - Auto-generates FN (Full Name) field if user didn't map one
  - Auto-generates N (Name) field if FN exists but N doesn't
  - Returns only mapped columns in final VCF
  - Response: `PlainTextResponse` with vCard MIME type and attachment header

### Frontend Logic (Hero.jsx - Main Component)
- File upload with validation (accepts .csv, .xlsx, .xls)
- Fetches columns from backend on file selection
- Maps columns to vCard properties via input + datalist (lines 252–278)
- Prefix/postfix editor available per column (toggle with Pencil icon)
- Generates VCF by POSTing formData with file, mappings, prefixes, postfixes
- Downloads via blob URL and synthetic anchor element
- Toast notifications for user feedback

### API Environment
- **Frontend**: Uses `VITE_API_URL` env var or defaults to `http://localhost:8000` in dev, `/api` in prod
- **Backend**: Listens on both `/convert` and `/api/convert` (same for `/upload`, `/api/upload`)

## Development Commands

### Frontend
```bash
cd frontend
npm install                    # Install dependencies
npm run dev                    # Start Vite dev server (http://localhost:5173)
npm run build                  # Build to dist/ for production
npm run lint                   # Run ESLint
npm run preview                # Preview production build locally
```

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r app/requirements.txt
uvicorn app.main:app --reload  # Dev server (http://localhost:8000)
```

### Full Stack Local Development
```bash
# Terminal 1: Backend
cd backend && source .venv/bin/activate && uvicorn app.main:app --reload

# Terminal 2: Frontend (will proxy /api calls to http://localhost:8000 automatically)
cd frontend && npm run dev
```

**Note**: No test suite is currently configured. Testing is manual via the UI.

## Key Implementation Details

### VCF Properties Supported
Hardcoded in `Hero.jsx` datalist (lines 252–278). Most common:
- `FN` → Full Name
- `N` → Name (structured: last;first;middle;prefix;suffix)
- `EMAIL`, `EMAIL;TYPE=WORK`, `EMAIL;TYPE=HOME`
- `TEL`, `TEL;TYPE=MOBILE`, `TEL;TYPE=WORK`, `TEL;TYPE=HOME`
- `ORG` → Organization
- `TITLE` → Job title
- `ADR`, `ADR;TYPE=WORK`, `ADR;TYPE=HOME` → Address
- `URL` → Website
- `NOTE` → Notes
- `BDAY` → Birthday
- `ANNIVERSARY`, `GENDER`, `PHOTO`, `CATEGORIES`, `IMPP`, etc.

### File Processing Details
- Pandas `read_csv()` and `read_excel()` handle encoding/dialect detection automatically
- **Empty row handling**: `df.dropna(how='all')` removes rows where every cell is NaN
- **Value filtering**: Cell values matching patterns `"undefined"`, `"null"`, `"nan"` (case-insensitive) are treated as empty
- **Column list**: Returned to frontend after cleaning; frontend UI renders a card per column

### Vercel Deployment
Uses `vercel.json` v2 config:
- Python runtime for backend at `/api/*` routes
- Static build (Vite dist) for frontend `/*` routes
- Frontend build hook runs `vite build` → outputs to `dist/`

## Styling & UI Patterns

- **Framework**: Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Responsive**: Mobile-first design with `max-sm:`, `max-md:` breakpoints
- **Icons**: Lucide React (Upload, CheckCircle2, X, Pencil, ChevronDown)
- **Notifications**: react-hot-toast with `position="top-right"`
- **Color scheme**: Blue/violet/indigo gradients; gray neutrals

## Common Modifications

**Add vCard property**:
1. Add `<option>` to datalist in `Hero.jsx` (lines 252–278)
2. Ensure backend's `main.py` doesn't need changes (it's format-agnostic)

**Change file size limit**:
- UI text at `Hero.jsx:115` says "Limit 25MB per upload files"
- Actual limit is Vercel's default (100 MB for serverless functions)
- To enforce smaller, middleware in `main.py` would be needed

**Styling tweaks**:
- All styling is inline Tailwind classes
- No CSS modules or separate stylesheets (except `index.css` for globals)
- Theme is customizable via Tailwind config (currently using defaults + `@tailwindcss/vite`)

**Error handling**:
- Backend: Returns 400 with error message on parse failure (e.g., unsupported file type)
- Frontend: Catches errors and displays via `toast.error()`