#!/usr/bin/env python3
"""
version_bump.py — cache-busting for CSS/JS.

Appends (or updates) a ?v=YYYYMMDD-HHMM query string on local css/js <link>/<script>
references in 01_www/*.html so browsers fetch fresh assets after you deploy.

Usage:
    python 07_scripts/version_bump.py
"""
import re
from datetime import datetime
from pathlib import Path

WWW = Path(__file__).resolve().parents[1] / "01_www"
VERSION = datetime.now().strftime("%Y%m%d-%H%M")

# match href/src to a local .css or .js, with or without an existing ?v=...
PATTERN = re.compile(r'((?:href|src)=")([^"]+?\.(?:css|js))(?:\?v=[^"]*)?(")')


def bump(html: str) -> str:
    return PATTERN.sub(lambda m: f'{m.group(1)}{m.group(2)}?v={VERSION}{m.group(3)}', html)


def main() -> None:
    files = list(WWW.rglob("*.html"))
    changed = 0
    for f in files:
        text = f.read_text(encoding="utf-8")
        new = bump(text)
        if new != text:
            f.write_text(new, encoding="utf-8")
            changed += 1
    print(f"version_bump: set ?v={VERSION} on {changed}/{len(files)} HTML files.")


if __name__ == "__main__":
    main()
