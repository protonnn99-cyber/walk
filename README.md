# Stride — Walk & Run Tracker PWA

A minimal, GitHub-Pages-ready Progressive Web App for logging walks and runs.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `stride`)
2. Upload all files in this folder to the repo root
3. Go to **Settings → Pages** → Source: `main` branch, `/ (root)` folder
4. Your app will be live at `https://yourusername.github.io/stride/`

## Install on iPhone (Safari)

1. Open your GitHub Pages URL in **Safari**
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add** — Stride is now installed like a native app

## Features

- Username + password login (no email required, data stored locally)
- Log runs and walks with: title, date, steps, distance, duration, elevation, notes
- Monthly stats overview
- Full activity history with type filter
- Activity detail modal
- Delete activities
- Offline support via Service Worker
- Clean, minimal GitHub-inspired UI

## Technical Notes

- All data stored in `localStorage` — 100% client-side, no server needed
- Passwords are hashed client-side (non-cryptographic, local-only)
- PWA manifest + service worker for installability and offline use
- Fonts: DM Sans + DM Mono (loaded from Google Fonts)
