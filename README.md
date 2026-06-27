# Imasha Portfolio (React + Vite)

This project recreates your portfolio using React and JSON-driven content.

## Tech Stack

- React (Vite)
- Plain CSS with centralized design tokens
- JSON data files for content sections

## Data-Driven Structure

All portfolio content is separated into JSON files in `src/data`:

- `profile.json`
- `skills.json`
- `experience.json`
- `education.json`
- `certifications.json`
- `projects.json`

Update these files to change text/content without editing React component logic.

## Profile Photo

Your profile photo path is set to `/Image.PNG`.

Add your image file here:

- `public/Image.PNG`

If the file is missing, the app shows an initials fallback (`II`).

## Run Locally

```bash
npm.cmd install
npm.cmd run dev
```

## Build

```bash
npm.cmd run build
npm.cmd run preview
```
