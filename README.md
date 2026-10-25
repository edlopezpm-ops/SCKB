# SCKB — Supply Chain Knowledge Base

Guía interactiva de flujos de cadena de suministro, WMS, TMS, arquitectura e integraciones. Describe procesos sin asumir un proveedor de software.

**Sitio:** https://edlopezpm-ops.github.io/SCKB/

**English:** https://edlopezpm-ops.github.io/SCKB/?lang=en — el selector ES/EN conserva el nodo del mapa abierto.

[Read this guide in English](README.en.md).

## Qué incluye

- Tres mapas explorables: cadena completa, WMS y TMS. Cada nodo muestra entradas, acciones, salidas, decisión, excepción y fuentes.
- Un layout conceptual de almacén con cuatro rutas para completar zona por zona.
- Un turno simulado de 13 etapas: datos maestros, ASN, pedidos, recibo, ola, picking, MHE, put-to-light, staging, nesting, consolidación, carga y borrador de BOL.
- Traspasos entre OMS/ERP, WMS y TMS; arquitectura, preguntas de trabajo y glosario filtrable.

El sitio es HTML, CSS y JavaScript sin dependencias de ejecución ni servicios de datos. Abre `index.html` o ejecuta un servidor estático desde esta carpeta:

```powershell
python -m http.server 8765
```

Después abre http://127.0.0.1:8765/.

## Fuentes y alcance

Los temas surgieron de una conversación privada; su transcripción e imágenes **no están en este repositorio**. Los procesos se contrastaron con fuentes públicas citadas en los módulos, entre ellas ASCM/SCOR, GS1, X12, NIST y documentación de automatización. [SCALE Intelligence](https://github.com/edlopezpm-ops/scale-intelligence) ayudó a definir la cobertura operativa de WMS; no se copió su contenido.

AEKR guió la estructura y revisión del proyecto; no se copiaron sus archivos privados.

El pedido de lámparas es ficticio. La disposición del almacén, la secuencia, los equipos y los documentos cambian por operación. El BOL del juego es un borrador educativo, no un documento legal emitido.

## Mantener el atlas

- `content.js` y `content.en.js`: mapas, rutas, juego, arquitectura, glosario, preguntas y fuentes en ambos idiomas; conserva los mismos IDs.
- `app.js` y `runtime.js`: navegación, paneles, filtrado, layout y turno simulado con etiquetas ES/EN.
- `index.html`, `i18n.js` y `styles.css`: estructura, textos estáticos, selector de idioma y presentación.
- `AGENTS.md`: acuerdos editoriales breves para cambios futuros.

Al cambiar una afirmación, actualiza ambos idiomas y sus `sourceIds`, revisa la fuente primaria y prueba mapas, layout y juego en ES/EN. No publiques notas de llamadas, datos personales, capturas ni material de terceros sin permiso.

GitHub Pages publica la raíz de `main`; `.nojekyll` permite servir los archivos estáticos directamente.

## Privacidad y datos

El control persistente **Privacidad y datos** funciona en ES/EN. Uso opcional desactivado por defecto, encuesta estructurada independiente guardada localmente, retiro, conservación y descargas JSON reales. No existe receptor central ni envío automático. Rechazar conserva todos los módulos educativos. [Catálogo, límites y verificación](docs/COLLECT_SECURITY.md).

Ejecuta `node tools/privacy-test.mjs` con Node 24+ y Edge o Chrome para probar los controles con fixtures locales y descargas reales. No envía datos al sitio publicado.

Construido con AEKR · Preparado por Codex para edlopezpm-ops.

## Web policies

The existing AEKR footer groups ToS, Privacy and Cookies. Interactive use requests a separate explicit, browser-local policy declaration; Privacy exports and optional choices remain accessible before accepting new Terms. [Scope and verification](docs/WEB_POLICIES_2026-10-25.md).
