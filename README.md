# Public Technical Blog

A lightweight, zero-framework static blog built with [Eleventy (11ty)](https://www.11ty.dev/), rendered with static HTML/CSS, and automatically deployed to GitHub Pages.


## 🚀 Quickstart for Local Development

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* Git

### Local Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
   cd YOUR-REPO-NAME

```

2. Install dependencies:
```bash
npm install

```


3. Start the live-reloading local server:
```bash
npm start

```


4. Open **`http://localhost:8080`** in your browser.

---

## ✍️ How to Publish a Writeup (Guest Author Guide)

We welcome contributions! To write a post for this publication, follow these steps:

### 1. Add Your Author Profile (First-time authors only)

Open `src/_data/authors.json` and add your author key and details:

```json
"yourhandle": {
  "name": "Your Name",
  "bio": "A short 1-2 sentence bio about what you do.",
  "avatar": "/assets/avatars/yourhandle.jpg",
  "github": "your-github-username"
}

```

*Place your avatar image in `src/assets/avatars/`.*

### 2. Create Your Post

Add a new Markdown file inside `src/posts/`. Name it using the `YYYY-MM-DD-title.md` convention:

`src/posts/2026-07-20-my-first-post.md`

Add your post title and your author handle to the top frontmatter:

```markdown
---
title: "Understanding Database Indexes"
author: "yourhandle"
---

Your post content starts here in standard Markdown...

```

### 3. Formatting Features

* **Images / GIFs:** Put your images in `src/assets/images/` and reference them in Markdown:
`![Description](/assets/images/my-diagram.png)`
* **Inline Code:** Use single backticks: ``code``
* **Code Blocks:** Use triple backticks with language tags (e.g. ````js`)
* **Math Formulas (KaTeX):**
* Inline math: `$E = mc^2$`
* Block math: `$$ \int_{0}^{\infty} e^{-x^2} dx $$`



### 4. Submit Your Post

1. Push your changes to a new branch on your fork or repository.
2. Open a **Pull Request (PR)** against the `main` branch.
3. Once reviewed and merged, the post will automatically build and go live via GitHub Actions.

---

## 📁 Project Structure

```text
.
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions auto-deployment pipeline
├── src/
│   ├── _data/
│   │   └── authors.json    # Author profile metadata
│   ├── _includes/
│   │   ├── base.njk         # Root HTML layout skeleton
│   │   └── post.njk         # Single article layout template
│   ├── assets/              # Static images, avatars, and GIFs
│   ├── css/                 # Global stylesheets
│   ├── posts/               # Article markdown files
│   │   └── posts.json       # Directory data (assigns default layout & tags)
│   └── index.njk            # Homepage template listing recent posts
├── .eleventy.js             # 11ty config (filters, plugins, passthroughs)
└── package.json

```

---

## 🛠️ Build & Deployment

* **Manual Build:** Run `npm run build` to compile the site static files into `_site/`.
* **Automatic Deploy:** Any merge or push to the `main` branch triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages.
