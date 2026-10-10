# SCKB — Supply Chain Knowledge Base

A visual, interactive atlas for studying supply chain flows, warehouse operations (WMS), transportation (TMS), enterprise architecture, and integrations without relying on a particular software vendor.

**Site:** https://edlopezpm-ops.github.io/SCKB/?lang=en

[Leer esta guía en español](README.md).

## What's inside

- Three explorable maps: the end-to-end supply chain, WMS, and TMS. Each node explains inputs, actions, outputs, decisions, exceptions, and sources.
- A conceptual warehouse layout with four routes visitors complete by selecting zones in order.
- Handoffs among OMS/ERP, WMS, and TMS; architecture cards, consulting and technology questions, and a searchable glossary.
- One fictional example of lamps ties the topics together. It describes no real facility, client, configuration, or outcome.

The site uses static HTML, CSS, and JavaScript, with no runtime dependencies or data services. Open `index.html` or run a static server from this folder:

```powershell
python -m http.server 8765
```

Then open http://127.0.0.1:8765/?lang=en.

## Sources and scope

The learning agenda came from a private conversation. Its transcript and images **are not in this repository**. Detailed steps not explained in the conversation were researched using public primary sources cited in each module: ASCM/SCOR, GS1, X12, OpenAPI, CloudEvents, and NIST. [SCALE Intelligence](https://github.com/edlopezpm-ops/scale-intelligence) informed WMS coverage, but is not treated as a universal standard or copied text source.

The maps are teaching models. Actual configurations, building layouts, integration formats, responsibilities, and sequences vary. Cross-docking, quarantine, replenishment, EDI, and GS1 identifiers are optional or conditional depending on the operation.

## Maintaining the atlas

- `content.js` and `content.en.js`: journeys, warehouse zones and routes, architecture, glossary, questions, and sources in both languages. Keep their IDs in sync.
- `app.js`: accessible navigation, detail panels, filtering, and the layout exercise, with ES/EN interface labels.
- `index.html`, `i18n.js`, and `styles.css`: structure, static text, language toggle, and presentation.
- `AGENTS.md`: brief editorial agreements for future changes.

When changing a claim, update both languages and their `sourceIds`, check the primary source, and test the maps and layout in ES and EN. Do not publish call notes, personal information, screenshots, or third-party material without permission and clear provenance.

GitHub Pages serves the root of `main`; `.nojekyll` allows the static files to be served directly.
