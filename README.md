# SN CodeViz Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — page structure and content
- `style.css` — dark navy visual system and responsive layout
- `script.js` — mobile navigation, current year, and optional GitHub API verification

## Run locally
Open `index.html` in a browser. For the most reliable local preview, run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a new public repository, for example `sncodeviz.github.io`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub Pages will publish the site at `https://sncodeviz.github.io/`.

## Before publishing
- Confirm the preferred public display name and education wording.
- Add a professional headshot if desired.
- Add a resume PDF only if you want it publicly downloadable.
- Review each project description and add screenshots, findings, methods, and links to notebooks or reports.
- Add a professional contact email if you want direct email inquiries.

The project cards intentionally link to the existing public repositories. The JavaScript makes a lightweight public GitHub API check but does not require a token.
