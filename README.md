# Villa Number 15 — Angular Frontend (Complete Scaffold)

This is a complete frontend scaffold with UI components, dialogs, and API wiring to the backend at https://api-spritofone.onrender.com/api

## What's included (updated)
- Full Angular project scaffold (components, services, routing).
- UI components: OptionCard, ImageUploader, ImagePopupViewer, PriceEditor, ProgressBar, SummaryWidget.
- Team settings page stub.
- Tailwind + Angular Material integration (styles included).
- Core services: Auth, Project, Floor, Image, Option, Team, Toast.
- Fallback sample data so UI works even if backend endpoints are missing.
- Quick-start and deployment tips in previous README.

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run (dev):
   ```bash
   npm start
   ```
3. The app starts at `http://localhost:4200`.

## Notes
- The scaffold is functional — image uploads call your backend's upload endpoint and pricing calls the option/finalize endpoints.
- If you want signed uploads to Cloudinary/S3, I can add that flow (backend + frontend).
- Next suggested steps (I can implement on request):
  - Add full keyboard and touch accessibility to image viewer.
  - Add NgRx for global state and optimistic updates.
  - Add unit and e2e tests.
  - Add CI (GitHub Actions) and deploy config (Netlify/Vercel) for frontend.
