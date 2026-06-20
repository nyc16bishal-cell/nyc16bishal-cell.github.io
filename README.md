# Bishal Gupta — Portfolio Website

A multi-page personal portfolio website showcasing experience, skills, education, and projects. Built with plain HTML, CSS, and JavaScript — no build step, no dependencies, ready to deploy anywhere static sites are hosted.

**Live demo:** https://nyc16bishal-cell.github.io/index.html

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero intro, quick stats, and a snapshot of core skill areas |
| About | `about.html` | Bio, profile photo, resume download, and working principles |
| Experience | `experience.html` | Timeline of professional roles with tech tags |
| Skills | `skills.html` | Animated proficiency bars and full tech badge cloud |
| Education | `education.html` | Degrees and academic background |
| Projects | `projects.html` | Side projects with descriptions and tags |
| Contact | `contact.html` | Working contact form (via Formspree) + direct contact links |

## 📁 Project Structure

```
portfolio/
├── index.html
├── about.html
├── experience.html
├── skills.html
├── education.html
├── projects.html
├── contact.html
└── assets/
    ├── style.css           # All site styling
    ├── portfolio.js        # Nav, animations, form handling
    ├── images/
    │   └── profile.jpg     # Profile photo (About page)
    └── files/
        └── Bishal_Gupta_Resume.pdf   # Downloadable resume
```

## ✨ Features

- Fully responsive layout (mobile nav menu included)
- Scroll-reveal animations and animated skill bars
- Animated stat counters on the homepage
- Downloadable resume PDF, linked from the nav on every page
- Working contact form powered by [Formspree](https://formspree.io) — no backend required
- No frameworks, no build tools — just static files

## 🚀 Getting Started Locally

Clone the repo and open `index.html` directly in your browser:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
open index.html      # macOS
# or just double-click index.html in your file explorer
```

No installation or build step is required.

## 🌐 Deployment

This site is static, so it can be hosted for free on any of the following:

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## 📬 Contact Form Setup

The contact form on `contact.html` submits to Formspree. To activate it for your own inbox:

1. Create a free form at [formspree.io](https://formspree.io)
2. Copy your form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in this line:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```

Formspree's free tier allows 50 submissions/month.

## ✏️ Customization

- **Colors & fonts:** edit CSS variables at the top of `assets/style.css` (`:root` block)
- **Content:** edit the HTML directly in each page — content is plain markup, no templating
- **Resume:** replace `assets/files/Bishal_Gupta_Resume.pdf` with an updated PDF (keep the same filename, or update the `href` references across all pages)
- **Profile photo:** replace `assets/images/profile.jpg` with a new image (keep the same filename, or update the `src` in `about.html`)

## 📝 License

Free to use and adapt for personal portfolio purposes.
