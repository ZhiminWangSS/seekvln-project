# SeekVLN project page

Research announcement website for **Seek Before You Move: Evidence Seeking for Progress Grounding in Vision-Language Navigation**.

Public website: https://zhiminwangss.github.io/seekvln-project/

## Local preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` in this directory and open http://127.0.0.1:4173/. No build step or third-party runtime dependencies are needed.

## Editing

- `index.html`: research narrative, tables, navigation, metadata.
- `styles.css`: responsive layout and visual styling.
- `script.js`: three-step real-world frame viewer and benchmark switch.
- `assets/`: paper figures, extracted rollout frames, and original supplied manuscript.

The page deliberately omits author/affiliation fields because the provided LaTeX author block contains template placeholders. The footer links to the hosting account's existing personal page and is not a paper authorship claim. The paper download preserves the supplied anonymous manuscript. No acceptance claim is made.

The research implementation is not included. The separate SeekVLN repository remains private. “Website source” points only to this website repository.

## Content provenance

All research claims and values come from the supplied manuscript `iclr2027_conference.tex` and PDF, read on 2026-09-29. The downloaded PDF is the original supplied version (2026-09-26); the page uses the latest local LaTeX wording where it differs.

- Table 1: R2R-CE SR 54.8 / 61.0 / 67.5 and SPL 46.9 / 55.9 / 61.4; RxR-CE SR 52.2 / 55.7 / 59.7 and SPL 40.2 / 47.4 / 50.3 (base / FRG-SFT / C2PO-RFT).
- Figure 3 and adaptive-trigger analysis: 100-episode R2R-CE subset; never / periodic / adaptive SR 52 / 62 / 73; seek rates 0 / 50 / 29.8; SPL 48 / 53 / 67.
- `robot-*` and `view-*` are embedded images extracted from `Figures/real-world.pdf`. The interactive viewer shows selected still frames, not a live model or video.
- Framework, Progress Myopia, and simulation figures are rendered from the supplied figure PDFs.
- SR improvements of 12.7 and 7.5 are **percentage points**, not relative percentages. The 100-episode analysis is explicitly separate from the full benchmark results. The physical robot example is qualitative.

Visual references: Physical Intelligence (https://www.physicalintelligence.company/) and Thinking Machines Lab (https://thinkingmachines.ai/). Their brand assets, logos, and copy are not reused.

## Deployment

GitHub Pages serves the `main` branch root. `.nojekyll` enables direct static publishing. Relative asset links support the `/seekvln-project/` project path. If the repo slug changes, update canonical and Open Graph URLs in `index.html` as well as repository links.

Only this directory belongs in the public repository. Do not copy manuscript source directories, review notes, backups, logs, credentials, or training code into it.
