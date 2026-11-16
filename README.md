# Guy O. — Print design portfolio

One-page portfolio for a freelance print designer. Plain HTML, CSS and JavaScript, no framework.

## Structure

- `index.html` page markup
- `css/style.css` styles
- `js/app.js` work data and the file viewer
- `assets/img/` photos and work previews (front, back, mockup)
- `tools/build.py` builds one self-contained HTML file (`dist/portfolio-standalone.html`)

## Run locally

    python3 -m http.server 8000

Then open http://localhost:8000

## Build the single-file version

    python3 tools/build.py

Postcard mockups from [MediaLoot](https://medialoot.com).
