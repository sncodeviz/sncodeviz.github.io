# SN CodeViz Portfolio — Project-first redesign

A responsive dark-mode portfolio built with plain HTML, CSS, and JavaScript.

## Structure
- `index.html` — homepage, profile, featured project gallery, toolkit, education, contact
- `projects/` — standalone project case-study pages, including Healthcare Performance & Patient Experience
- `assets/` — four Power BI dashboard screenshots used in the healthcare case study
- `style.css` — shared responsive design system
- `script.js` — mobile navigation and current-year footer

## Preview locally
Run from this folder:
```bash
python -m http.server 8000
```
Then open http://localhost:8000.

## Publish to GitHub Pages
Upload the contents of this folder to the root of `sncodeviz.github.io` on the `main` branch, preserving the `projects/` directory. In Settings → Pages, use `main` and `/(root)` if Pages is not already configured.

## Before final publication
- Review the wording of your degree titles and graduation date.
- Confirm the LinkedIn profile URL.
- Add selected charts/screenshots from each repository to the matching case study. The healthcare Power BI screenshots are included in `assets/`.
- Confirm whether the LinkedIn Projects page is publicly viewable to visitors who are not signed in.
- Consider adding a downloadable resume PDF.
- Review all project results against the original notebooks and reports before adding numerical model metrics.

All project descriptions intentionally avoid unsupported performance claims. The diabetes project includes an educational-use disclaimer.
