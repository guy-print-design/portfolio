#!/usr/bin/env python3
"""Build a single self-contained HTML file from the source files.

    python3 tools/build.py            ->  dist/portfolio-standalone.html

Inlines css/style.css, js/app.js and every image under assets/ (as base64),
so the result opens offline and can be published as a claude.ai artifact.
"""
import base64, mimetypes, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "dist" / "portfolio-standalone.html"

html = (ROOT / "index.html").read_text(encoding="utf-8")

css = (ROOT / "css" / "style.css").read_text(encoding="utf-8")
html = re.sub(r'<link rel="stylesheet" href="css/style\.css[^"]*">', lambda m: f"<style>\n{css}</style>", html)

js = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
html = re.sub(r'<script src="js/app\.js[^"]*"></script>', lambda m: f"<script>\n{js}</script>", html)

ASSET = re.compile(r'(?<![\w/])assets/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp|svg|gif)')
missing = []

def inline(m):
    p = ROOT / m.group(0)
    if not p.is_file():
        missing.append(m.group(0))
        return m.group(0)
    mime = mimetypes.guess_type(p.name)[0] or "application/octet-stream"
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()

html = ASSET.sub(inline, html)
if missing:
    sys.exit("Missing asset files: " + ", ".join(sorted(set(missing))))

OUT.parent.mkdir(exist_ok=True)
OUT.write_text(html, encoding="utf-8")
print(f"{OUT.relative_to(ROOT)}  {OUT.stat().st_size/1e6:.2f} MB")
