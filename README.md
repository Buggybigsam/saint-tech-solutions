# Saint Tech Solutions

The official website for **Saint Tech Solutions** — a premium web design and digital engineering studio based in Accra, Ghana, serving clients worldwide.

Built with bespoke dark luxury aesthetics, subtle glows, smooth micro-animations, and full mobile responsiveness.

---

## 🌟 Key Features

- **Modern Architecture**: Pure HTML5, Vanilla CSS3 design system, and vanilla JavaScript for maximum speed and zero bloated framework overhead.
- **Direct Email Forwarding**: Integrated with Web3Forms to deliver client inquiries directly to `sainttechn@gmail.com` with zero server required.
- **Full-Stack Node.js Option**: Optional local Node.js server with Nodemailer SMTP and local JSON storage (`data/enquiries.json`).
- **Interactive Project Calculator**: Clients can dynamically estimate budgets and timelines across multiple currencies (GHC, USD, GBP).
- **SEO & Social Optimization**: Pre-configured OpenGraph cards, Twitter preview banners (`og-banner.png`), `sitemap.xml`, and `robots.txt`.
- **One-Click Deploy**: Pre-configured for zero-config deployment on Vercel (`vercel.json`) and Netlify (`netlify.toml`).

---

## 🚀 Quick Start

### 1. Configuration (Local Setup)

Copy the configuration templates:

```bash
# Frontend Web3Forms access key
cp config.example.js config.js

# Optional backend SMTP setup
cp .env.example .env
```

Open `config.js` and paste your free Web3Forms access key from [web3forms.com](https://web3forms.com):
```javascript
window.STS_CONFIG = {
  WEB3FORMS_ACCESS_KEY: "your-access-key-here"
};
```

### 2. Run Locally

You can run the project in any of the following ways:

```bash
# Option A: With the full-stack server
node server.js

# Option B: With live static server
npx serve . -l 3000

# Option C: Direct browser
Double-click index.html
```

---

## 📦 Deployment

The website is 100% static and serverless-ready:

- **Vercel**: Import the GitHub repository or run `npx vercel`.
- **Netlify**: Drag and drop the project folder or connect via Git.
- **GitHub Pages**: Go to Repository Settings → Pages → Deploy from branch `main`.
- **cPanel / Apache / Nginx**: Upload files directly to `public_html`.

---

## 🔒 Security & Privacy

All sensitive API keys, email passwords, and client inquiry databases are strictly excluded from version control via `.gitignore`:
- `config.js` (Web3Forms private key)
- `.env` (Gmail SMTP credentials)
- `data/` (Local inquiry records)

---

&copy; 2026 Saint Tech Solutions. All rights reserved.
