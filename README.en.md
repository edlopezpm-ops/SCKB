# SCKB — Supply Chain Knowledge Base

An interactive guide to supply chain flows, WMS, TMS, architecture, and integrations. It describes processes without assuming a software vendor.

**Site:** https://edlopezpm-ops.github.io/SCKB/?lang=en

[Leer esta guía en español](README.md).

## What's inside

- Three explorable maps: the end-to-end supply chain, WMS, and TMS. Each node explains inputs, actions, outputs, decisions, exceptions, and sources.
- A conceptual warehouse layout with four routes to complete zone by zone.
- A 13-stage simulated shift: item master, ASN, orders, receiving, wave, picking, MHE, put-to-light, staging, nesting, consolidation, loading, and a BOL draft.
- Handoffs among OMS/ERP, WMS, and TMS; architecture, work questions, and a searchable glossary.

The site uses static HTML, CSS, and JavaScript, with no runtime dependencies or data services. Open `index.html` or run a static server from this folder:

```powershell
python -m http.server 8765
```

Then open http://127.0.0.1:8765/?lang=en.

## Sources and scope

Topics came from a private conversation; its transcript and images **are not in this repository**. Processes were checked against public sources cited in the modules, including ASCM/SCOR, GS1, X12, NIST, and automation documentation. [SCALE Intelligence](https://github.com/edlopezpm-ops/scale-intelligence) helped define WMS coverage; its content was not copied.

AEKR guided the project's structure and review; no private AEKR files were copied.

The lamp order is fictional. Warehouse layout, sequence, equipment, and documents vary by operation. The game's BOL is an educational draft, not an issued legal document.

## Maintaining the atlas

- `content.js` and `content.en.js`: maps, routes, game, architecture, glossary, questions, and sources in both languages. Keep their IDs in sync.
- `app.js` and `runtime.js`: navigation, panels, filtering, layout, and simulated shift with ES/EN labels.
- `index.html`, `i18n.js`, and `styles.css`: structure, static text, language toggle, and presentation.
- `AGENTS.md`: brief editorial agreements for future changes.

When changing a claim, update both languages and their `sourceIds`, check the primary source, and test maps, layout, and game in ES and EN. Do not publish call notes, personal information, screenshots, or third-party material without permission.

GitHub Pages serves the root of `main`; `.nojekyll` allows the static files to be served directly.

## Privacy and data

The persistent **Privacy and data** control works in English and Spanish. Optional usage is off by default; an independent structured survey is saved locally. Withdrawal, retention and real JSON downloads are available. There is no central receiver or automatic sending. Rejection preserves every educational module. [Catalogue, limits and verification](docs/COLLECT_SECURITY.md).

Run `node tools/privacy-test.mjs` with Node 24+ and Edge or Chrome to exercise the controls with local fixtures and real downloads. It sends no data to the published site.

Built with AEKR · Prepared by Codex for edlopezpm-ops.
