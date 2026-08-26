# 🎬 Netflix Clone (Production Ready)

A modern, responsive, pixel-perfect **Netflix Landing Page & Streaming Showcase** built with Vanilla HTML5, CSS3, and JavaScript. Optimized for speed, rich user interactivity, and seamless deployment on **Vercel** or **GitHub Pages**.

---

## ✨ Features

- 🌟 **Authentic Netflix Branding**: Features official dark theme, Netflix red accents (`#E50914`), glowing curved red arch separator, and glassmorphic navbar with scroll-blur effect.
- 🔟 **Top 10 Trending Carousel**:
  - Outlined 3D rank numbers (1–10) matching Netflix UI.
  - Smooth left/right scroll controls with auto-fade arrow boundaries.
  - Category filters: **All**, **Movies**, and **TV Shows** with dynamic rank recalculation.
  - Hover zoom animations and "Top 10", "Recently Added", "New Season" badges.
- 🎥 **Interactive Movie Preview Modal**: Click any trending poster to open rich trailer details including match percentage, age certification (U/A 18+), audio specs (4K Ultra HD, 5.1 Surround), synopsis, genre tags, and interactive action buttons (*Play Trailer*, *Add to My List*, *Like*).
- 🔐 **Interactive Sign In Modal**: Netflix sign-in popup dialog with floating labels, remember-me check, and form validation.
- 📱 **Netflix Floating Labels**: Hero and footer email signup inputs featuring animated floating labels, client-side regex email validation, and toast feedback.
- ❓ **Animated FAQ Accordion**: Smooth accordion with animated plus/cross rotation and single-expanded-card UX.
- 🌐 **Multi-Language Selector**: Synced language dropdown for English, हिन्दी, and বাংলা.
- 🔔 **Toast Notification System**: Instant visual feedback for email signups, list additions, trailer playback, and language selection.
- 📱 **Fully Responsive**: Flawlessly optimized across mobile devices (320px+), tablets, laptops, and ultra-wide screens.
- 🚀 **1-Click Vercel Deployment Ready**: Preconfigured `vercel.json` with clean URLs, security headers, and asset caching rules.

---

## 📁 Project Structure

```text
netflix-clone/
├── index.html        # Main landing page (Vercel entry point)
├── netflix.html      # Canonical redirect to index.html
├── net_style.css     # Netflix design system, layout, & responsive styling
├── nscript.js        # Carousel, modals, accordion, toasts & interactions
├── vercel.json       # Vercel deployment & routing configuration
├── package.json      # Project metadata & npm dev scripts
├── .gitignore        # Clean git ignore configuration
└── README.md         # Documentation & guide
```

---

## 🚀 How to Deploy on Vercel

### Option 1: Via Vercel Web Dashboard (Recommended)

1. Push this repository to your **GitHub** / **GitLab** / **Bitbucket** account:
   ```bash
   git add .
   git commit -m "feat: professional netflix clone ready for vercel"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and log in.
3. Import your `netflix-clone` repository.
4. Keep the default settings (**Framework Preset: Other**, **Root Directory: `./`**).
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain in seconds!

### Option 2: Via Vercel CLI

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Deploy directly from your project directory
vercel

# 3. Deploy to production
vercel --prod
```

---

## 💻 Local Development

You can preview the project locally using any static web server:

```bash
# Using VS Code Live Server extension or npm:
npm start

# Or using Python's built-in HTTP server:
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 🛠️ Built With

- **HTML5**: Semantic tags, accessibility (ARIA), and SEO meta configuration.
- **CSS3**: CSS Custom Properties (variables), Flexbox, CSS Grid, glassmorphism, keyframe animations, and radial gradient curves.
- **JavaScript (ES6+)**: Event delegation, DOM manipulation, smooth scrolling, modal overlays, and toast notifications.
- **Vercel**: Edge-optimized static hosting with custom headers.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
