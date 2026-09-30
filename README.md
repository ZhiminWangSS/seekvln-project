# SeekVLN project page

Academic project page for **Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation**.

Public website: https://zhiminwangss.github.io/seekvln-project/

## Local preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` in this directory and open http://127.0.0.1:4173/. No build step or third-party runtime dependencies are needed.

## Content and editing

- `index.html`: paper title, author list, affiliations, manuscript narrative, original figures and table, arXiv paper links, and BibTeX.
- `styles.css`: base layout and responsive behavior.
- `editorial.css`: compact black-on-white academic presentation with paper-figure colors in the title and method labels, Newsreader reading text, DM Sans interface text, a lightly softened demo perimeter, and image blending for paper figures. Both fonts are locally hosted WOFF2 files with OFL licenses in `assets/fonts/`. Responsive layouts preserve the original table’s horizontal scrolling.
- `script.js`: related-project rendering, the three-step real-world frame viewer, and BibTeX copy. No benchmark switches, custom result charts, or data cards.
- `research-projects.js`: related lab projects in the top strip. Replace eVTA for VLA's `url: null` with the confirmed public project URL when available. Add more objects for additional projects. Missing URLs render non-clickable “Coming soon” items.
- `assets/seekvln.bib`: arXiv citation. Keep this synchronized with `#bibtex-code` in the HTML.
- `assets/results-table.png`: original Table 1, rendered directly from page 7 of the supplied PDF at 360 dpi. Crop in rendered pixels: x=525, y=395, width=2010, height=1430. PDF hyperlink annotation outlines are hidden; table content, references, numbers, row shading, and formatting are preserved.
- `assets/deep-dive.webp`: rendered original `Figures/deep-dive.pdf`.

The main narrative follows the requested order: Contributions, Real-world rollout, Introduction, Methodology, and Results. Copy is condensed from the public arXiv submission TeX while preserving its claims and qualifiers. All narrative sections use a single text column except the two-stage Methodology explanation. The original results table and paper figures remain visible, and the three-step real-world viewer sits before the Introduction. The title's resource row contains Paper, Code (planned), and Models (planned); BibTeX remains at the bottom of the page.

## Authorship

The 11 authors, their order, six affiliations, and correspondence designations were supplied explicitly by the owner in this task. They appear below the title and in the downloadable citation. Only Yaowei Wang and Zhi Wang are marked corresponding authors; no equal-contribution designations were supplied.

Paper links point to the owner-provided arXiv preprint at https://arxiv.org/pdf/2609.37353. The local PDF is the original supplied anonymous manuscript, unchanged and retained as an asset. No conference acceptance has been invented. The research implementation is not included; the separate SeekVLN repository remains private.

## Research provenance

Research content comes from `paper-writing/arxiv-submission/seekvln.tex`, reviewed on 2026-09-30, with figures and the original results table reproduced from the manuscript assets. The local PDF is the original supplied anonymous manuscript and is retained unchanged.

- Table 1: R2R-CE SR 54.8 / 61.0 / 67.5 and SPL 46.9 / 55.9 / 61.4; RxR-CE SR 52.2 / 55.7 / 59.7 and SPL 40.2 / 47.4 / 50.3 (base / FRG-SFT / C2PO-RFT).
- The adaptive-trigger analysis uses a separate 100-episode subset: never / periodic / adaptive SR 52 / 62 / 73, seek rates 0 / 50 / 29.8, SPL 48 / 53 / 67.
- `robot-*` and `view-*` are images extracted from `Figures/real-world.pdf`. The viewer shows selected still frames, not a live model or video.
- Framework, Progress Myopia, deep-dive, and simulation figures are rendered from the original figure PDFs.
- SR gains of 12.7 and 7.5 are percentage points. The physical-robot rollout is qualitative.

Academic structure references: [IGen](https://chenghaogu.github.io/IGen/) and [Progress-Think](https://horizonrobotics.github.io/robot_lab/progress-think/). Visual direction references: [Physical Intelligence](https://www.pi.website/) and [Thinking Machines Lab](https://thinkingmachines.ai/). Their logos, brand assets, and text are not reused. Scientific figures remain unedited; CSS blends their light backgrounds with the page.

## Deployment

GitHub Pages serves the `main` branch root. `.nojekyll` enables static publishing. Relative asset paths support `/seekvln-project/`. If the repository slug changes, update canonical, Open Graph, citation, and repository URLs. When changing styles or scripts, update their version query strings in HTML to invalidate previously cached assets.

Only this directory belongs in the public repository. Do not copy manuscript sources, private reviews, backups, logs, credentials, or training code into it.
