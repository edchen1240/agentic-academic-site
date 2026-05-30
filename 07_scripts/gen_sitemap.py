#!/usr/bin/env python3
"""
gen_sitemap.py — regenerate 01_www/sitemap.xml from the HTML files present.

Set BASE_URL to your deployed site root, then run:
    python 07_scripts/gen_sitemap.py
"""
from pathlib import Path

# EDIT: your deployed site root (no trailing slash).
BASE_URL = "https://your-domain.example"

WWW = Path(__file__).resolve().parents[1] / "01_www"


def url_for(html_path: Path) -> str:
    rel = html_path.relative_to(WWW).as_posix()
    # index.html -> directory URL; keep second-language and leaf pages explicit
    if rel == "index.html":
        return f"{BASE_URL}/"
    if rel.endswith("/index.html"):
        return f"{BASE_URL}/{rel[:-len('index.html')]}"
    return f"{BASE_URL}/{rel}"


def main() -> None:
    pages = sorted(WWW.rglob("*.html"))
    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for p in pages:
        lines.append(f"  <url><loc>{url_for(p)}</loc></url>")
    lines.append("</urlset>\n")
    (WWW / "sitemap.xml").write_text("\n".join(lines), encoding="utf-8")
    print(f"gen_sitemap: wrote {len(pages)} URLs to 01_www/sitemap.xml (base {BASE_URL}).")


if __name__ == "__main__":
    main()
