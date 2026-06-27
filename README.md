# Imasha Ilamperuma - Professional Portfolio

![Portfolio Preview](./public/Image.PNG)

A modern, high-performance, responsive portfolio showcasing my background in Systems Engineering and Business Intelligence. Built with React and Vite.

## Live Demo
[View Live Portfolio](https://inkymello.github.io/MyPortfolio/)

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Plain CSS with a custom Design System (CSS Variables for typography, colors, spacing)
- **Animations**: Intersection Observer API for scroll reveals
- **Data Architecture**: Component-driven UI fed by JSON data files

## Project Structure

The project is designed to separate content from logic. All portfolio data (skills, projects, experience, etc.) is managed via JSON files in the `src/data/` directory.

```
src/
├── components/      # React components (Hero, About, Projects, etc.)
├── data/            # JSON data source (profile, skills, experience, etc.)
├── App.jsx          # Main application component
└── App.css          # Global styles and design system tokens
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

To create a production build:
```bash
npm run build
```
This generates the optimized static assets in the `dist/` directory.

## License
This project is open source and available under the [MIT License](LICENSE).
