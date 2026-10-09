# SCKB — Supply Chain Knowledge Base

Atlas visual e interactivo para estudiar flujos de cadena de suministro, operación de almacén (WMS), transporte (TMS), arquitectura empresarial e integraciones, sin depender de una marca de software.

**Sitio:** https://edlopezpm-ops.github.io/SCKB/

## Qué incluye

- Tres mapas explorables: cadena completa, WMS y TMS. Cada nodo muestra entradas, acciones, salidas, decisión, excepción y fuentes.
- Un layout conceptual de almacén con cuatro rutas que el visitante completa seleccionando zonas.
- Traspasos entre OMS/ERP, WMS y TMS; capas de arquitectura, preguntas de consultoría/tecnología y glosario filtrable.
- Un solo ejemplo ficticio de lámparas para conectar los temas. No describe instalaciones, clientes, configuraciones ni resultados reales.

El sitio es HTML, CSS y JavaScript sin dependencias de ejecución ni servicios de datos. Abre `index.html` o ejecuta un servidor estático desde esta carpeta:

```powershell
python -m http.server 8765
```

Después abre http://127.0.0.1:8765/.

## Fuentes y alcance

La agenda de aprendizaje procede de una conversación privada. La transcripción y las imágenes de esa llamada **no están en este repositorio**. Los pasos detallados que no quedaron explicados en la llamada se investigaron con fuentes públicas primarias, citadas dentro de cada módulo: ASCM/SCOR, GS1, X12, OpenAPI, CloudEvents y NIST. [SCALE Intelligence](https://github.com/edlopezpm-ops/scale-intelligence) sirvió como referencia de cobertura operativa de WMS, no como regla universal ni fuente de texto copiado.

Los mapas son modelos didácticos. Las decisiones de configuración, instalaciones físicas, formatos de integración, responsabilidades y secuencias reales varían. En particular, cross-dock, cuarentena, reposición, EDI y los identificadores GS1 son opciones o pasos condicionales según el caso.

## Mantener el atlas

- `content.js`: recorridos, zonas/rutas, arquitectura, glosario, preguntas y bibliografía.
- `app.js`: navegación accesible, paneles, filtrado y ejercicio de layout.
- `index.html` y `styles.css`: estructura y presentación.
- `AGENTS.md`: acuerdos editoriales breves para cambios futuros.

Al cambiar una afirmación, actualiza sus `sourceIds`, revisa la fuente primaria y prueba el mapa y el layout. Evita publicar notas de llamadas, datos personales, capturas o materiales de terceros sin permiso y procedencia clara.

GitHub Pages publica la raíz de `main`; `.nojekyll` permite servir los archivos estáticos directamente.
