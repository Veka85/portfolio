# Vedran Kovacevic – Personal Website

A clean, professional personal website (online CV) built for recruiters. Presents skills, projects, and experience in a developer-focused, honest format.

## Tech Stack

- **React 18** with Vite
- **Plain CSS** (CSS Modules)
- No UI libraries, Tailwind, or heavy animation libraries
- Lightweight and production-ready

## Project Structure

```
src/
├── components/
│   ├── sections/     # Section components (Hero, About, Skills, etc.)
│   ├── Button.jsx
│   ├── SectionWrapper.jsx
│   ├── ProjectCard.jsx
│   ├── BlogCard.jsx
│   └── Navbar.jsx
├── data/             # Content and navigation data
├── styles/           # Global and component styles
├── App.jsx
└── main.jsx
```

## How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## How to Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## How to Deploy

### Netlify

1. Connect your Git repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your project to Vercel
2. Framework preset: Vite
3. Build command and output directory are auto-detected

## Customization

- **Content**: Edit `src/data/content.js` for site copy, projects, and blog posts
- **Navigation**: Edit `src/data/navLinks.js` for menu items
- **Social links**: Update `socialLinks` in `src/data/content.js`
- **Styles**: CSS Modules in `src/styles/` use BEM-like naming

## Features

- Sticky navbar with active section highlighting
- Smooth scroll navigation
- Responsive layout (mobile-first)
- Accessible (ARIA labels, semantic HTML)
- Contact form with client-side validation
- SEO meta tags in `index.html`
