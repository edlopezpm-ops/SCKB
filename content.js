// SCKB: contenido original para estudio. El pedido de lámparas es ficticio.
// Las fuentes describen procesos y estándares; la secuencia visual es didáctica.
window.SCKB_CONTENT = {
  sources: {
    scor: {
      label: "ASCM · SCOR Digital Standard",
      url: "https://scor.ascm.org/processes/introduction",
      scope: "Marco agnóstico: Orchestrate, Plan, Order, Source, Transform, Fulfill y Return."
    },
    cltd: {
      label: "ASCM · CLTD Exam Content Manual",
      url: "https://gnj.ascm.org/downloads/cltd_content_manual_2023.pdf",
      scope: "Temario profesional de almacenes y transporte; orienta los pasos, no prescribe software."
    },
    ascmTms: {
      label: "ASCM · Supply Chain Dictionary",
      url: "https://learn.ascm.org/sfc/servlet.shepherd/document/download/069R3000006PlDHIA0?operationContext=S1",
      scope: "Definición de gestión de transporte y de TMS."
    },
    ascmDictionary: {
      label: "ASCM · Supply Chain Dictionary, 18.ª edición",
      url: "https://learn.ascm.org/sfc/servlet.shepherd/document/download/069R3000006PlDHIA0?operationContext=S1",
      scope: "Definiciones de CRM, YMS, planificación avanzada y ejecución de manufactura; vocabulario, no módulos obligatorios."
    },
    ascmWarehouseOps: {
      label: "ASCM · Warehouse Operations: systems and roles",
      url: "https://jobs.ascm.org/career-resources/find-the-job-1/warehouse-operations-careers-2026-49",
      scope: "Descripción profesional de WMS y sistemas adyacentes de patio y gestión del trabajo; no estándar de arquitectura."
    },
    gs1Systems: {
      label: "GS1 · Retail POS and Backend Systems Guide",
      url: "https://ref.gs1.org/sme-guidance/2d-retail-systems-playbook/",
      scope: "Ejemplo sectorial de ERP, inventario, fulfillment, WMS, captura y retornos; no arquitectura universal."
    },
    gs1Label: {
      label: "GS1 · Logistic Label Guideline",
      url: "https://www.gs1.org/standards/gs1-logistic-label-guideline/1-3",
      scope: "Relación entre aviso de despacho, etiqueta SSCC, recibo y confirmación física."
    },
    gs1Delivery: {
      label: "GS1 · Standards for Delivery Management",
      url: "https://www.gs1.org/docs/tl/GS1Standards_DeliveryManagement.pdf",
      scope: "Alineación de datos maestros, aviso de despacho/ASN y comparación con lo realmente recibido."
    },
    x856: {
      label: "X12 · 856 Ship Notice/Manifest",
      url: "https://x12.org/node/4398",
      scope: "Ejemplo EDI de contenido y estructura de una notificación anticipada de embarque."
    },
    oracleAutomation: {
      label: "Oracle · Warehouse automation flows",
      url: "https://docs.oracle.com/en/cloud/saas/warehouse-management/26a/owmol/wms-apis-that-support-mhe-configuration.html",
      scope: "Ejemplo de mensajes WMS↔MHE para ola, desvío, confirmación física y distribución; no especificación de SCALE."
    },
    usBol: {
      label: "U.S. Customs and Border Protection · Bill of Lading",
      url: "https://www.help.cbp.gov/s/article/Article-1216?language=en_US",
      scope: "Ejemplo estadounidense del propósito y campos de un BOL; obligaciones y formato dependen del transporte y jurisdicción."
    },
    gs1Keys: {
      label: "GS1 · Identification Keys",
      url: "https://www.gs1.org/standards/id-keys",
      scope: "Identificadores posibles para artículo, lugar, unidad logística y envío."
    },
    gs1Edi: {
      label: "GS1 · Electronic Data Interchange",
      url: "https://www.gs1.org/standards/edi",
      scope: "Mensajes de negocio como orden, aviso de despacho e invoice; una familia de integración."
    },
    epcis: {
      label: "GS1 · EPCIS y CBV",
      url: "https://ref.gs1.org/guidelines/epcis-cbv/",
      scope: "Eventos de visibilidad y agregación padre-hijo, como cartones dentro de un pallet."
    },
    x940: {
      label: "X12 · 940 Warehouse Shipping Order",
      url: "https://x12.org/node/4444",
      scope: "Ejemplo EDI de instrucción de embarque al almacén."
    },
    x945: {
      label: "X12 · 945 Warehouse Shipping Advice",
      url: "https://x12.org/node/4447",
      scope: "Ejemplo EDI de confirmación de lo realmente embarcado."
    },
    x204: {
      label: "X12 · 204 Motor Carrier Load Tender",
      url: "https://x12.org/node/4207",
      scope: "Ejemplo EDI de ofrecimiento de una carga completa a un transportista por carretera."
    },
    x214: {
      label: "X12 · 214 Shipment Status Message",
      url: "https://x12.org/node/4214",
      scope: "Ejemplo EDI de estado de transporte comunicado por el transportista."
    },
    x210: {
      label: "X12 · 210 Motor Carrier Freight Details and Invoice",
      url: "https://x12.org/node/4210",
      scope: "Ejemplo EDI de cargos y factura del flete por carretera."
    },
    openapi: {
      label: "OpenAPI Initiative · OpenAPI Specification",
      url: "https://spec.openapis.org/oas/latest.html",
      scope: "Formato agnóstico para describir interfaces HTTP; opción de integración."
    },
    cloudEvents: {
      label: "CNCF · CloudEvents Specification",
      url: "https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md",
      scope: "Formato interoperable de eventos, con identificador y fuente; opción de integración."
    },
    nistCloud: {
      label: "NIST · Definition of Cloud Computing",
      url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      scope: "Definición de nube y modelos de servicio, entre ellos SaaS."
    },
    nistCsf: {
      label: "NIST · Cybersecurity Framework 2.0",
      url: "https://www.nist.gov/cyberframework",
      scope: "Funciones de gobierno, identificación, protección, detección, respuesta y recuperación."
    },
    postgres: {
      label: "PostgreSQL · Querying a Table",
      url: "https://www.postgresql.org/docs/current/tutorial-select.html",
      scope: "Ejemplo de consulta SQL; SQL no implica una marca ni acceso directo a producción."
    },
    javascript: {
      label: "MDN · JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      scope: "Lenguaje usado en interfaces web y otros entornos."
    },
    scale: {
      label: "SCALE Intelligence · repositorio de referencia",
      url: "https://github.com/edlopezpm-ops/scale-intelligence",
      scope: "Referencia de cobertura y vocabulario de estudio; no es un estándar de la industria."
    }
  },

  journeys: [
    {
      id: "network",
      title: "La cadena completa",
      eyebrow: "01 · Proceso general",
      lede: "Un pedido de 12 lámparas conecta abastecimiento, almacén, transporte y devoluciones.",
      scope: "SCOR describe capacidades, no una secuencia obligatoria. Una distribuidora puede omitir Transform; los sistemas y responsables varían.",
      nodes: [
        {
          id: "net-plan",
          title: "Planear demanda y capacidad",
          tag: "PLAN",
          summary: "La demanda esperada se contrasta con inventario, suministro, tiempo y capacidad.",
          inputs: ["Pronóstico y pedidos", "Inventario y capacidad disponibles"],
          actions: ["Estimar necesidad", "Resolver faltantes o excedentes"],
          outputs: ["Plan de compra, producción o distribución"],
          decision: "¿Se pueden servir 12 lámparas en la fecha pedida?",
          exception: "Si faltan materiales o capacidad, se ajusta el plan y la fecha prometible.",
          systems: ["Planificación", "ERP"],
          sourceIds: ["scor", "cltd"],
          checkpoint: "¿Qué cambia primero: la demanda, el inventario o el compromiso de fecha?"
        },
        {
          id: "net-order",
          title: "Recibir y prometer el pedido",
          tag: "ORDER",
          summary: "El cliente solicita 12 lámparas; se valida qué, cuánto, dónde y cuándo.",
          inputs: ["Pedido del cliente", "Disponibilidad y reglas comerciales"],
          actions: ["Validar datos", "Confirmar o renegociar la promesa"],
          outputs: ["Pedido aceptado", "Fecha y destino comprometidos"],
          decision: "¿Cuántas unidades están libres de reservas o bloqueos?",
          exception: "Una unidad reservada o retenida no debe prometerse otra vez.",
          systems: ["OMS o capa de fulfillment", "ERP"],
          sourceIds: ["scor", "gs1Systems"],
          checkpoint: "¿Por qué «en existencia» y «disponible para este pedido» pueden diferir?"
        },
        {
          id: "net-source",
          title: "Abastecer",
          tag: "SOURCE",
          summary: "Se compran o transfieren las unidades necesarias desde un proveedor o instalación.",
          inputs: ["Plan de suministro", "Datos de proveedor y artículo"],
          actions: ["Emitir orden", "Coordinar llegada", "Recibir y verificar"],
          outputs: ["Producto recibido", "Diferencias registradas"],
          decision: "¿Llegaron las 24 lámparas anunciadas y cumplen lo acordado?",
          exception: "Un faltante, daño o artículo incorrecto exige conciliación antes de liberar stock.",
          systems: ["ERP", "WMS", "Proveedor"],
          sourceIds: ["scor", "gs1Label"],
          checkpoint: "¿Cuál es la diferencia entre lo anunciado y lo efectivamente recibido?"
        },
        {
          id: "net-transform",
          title: "Transformar, si aplica",
          tag: "TRANSFORM",
          summary: "Fabricación, ensamble o acondicionamiento cambia el producto antes de venderlo.",
          inputs: ["Materiales", "Orden de fabricación o servicio"],
          actions: ["Producir o ensamblar", "Inspeccionar y liberar"],
          outputs: ["Lámparas terminadas y liberadas"],
          decision: "¿Este negocio fabrica, ensambla o solo distribuye?",
          exception: "Si una prueba falla, la unidad no pasa a stock vendible.",
          systems: ["ERP", "MES o control de planta, si aplica"],
          sourceIds: ["scor"],
          checkpoint: "¿Qué tramo desaparece si las lámparas llegan terminadas?"
        },
        {
          id: "net-fulfill",
          title: "Preparar el pedido",
          tag: "FULFILL",
          summary: "Se asignan, localizan, toman, empacan y preparan 12 lámparas para salida.",
          inputs: ["Pedido liberado", "Stock elegible"],
          actions: ["Asignar inventario", "Hacer pick y pack", "Confirmar carga"],
          outputs: ["Bulto o pallet listo", "Cantidad real embarcada"],
          decision: "¿Se prepararon exactamente las 12 unidades correctas?",
          exception: "Un faltante de picking dispara búsqueda, sustitución autorizada o pedido parcial.",
          systems: ["WMS", "OMS", "ERP"],
          sourceIds: ["scor", "gs1Systems", "x940", "x945"],
          checkpoint: "¿Qué confirma un escaneo físico que el pedido digital por sí solo no confirma?"
        },
        {
          id: "net-deliver",
          title: "Transportar y entregar",
          tag: "DELIVERY",
          summary: "La carga sale del muelle, se monitorea y se cierra con evidencia de entrega.",
          inputs: ["Carga lista", "Destino y ventana de entrega"],
          actions: ["Planear transporte", "Asignar transportista", "Seguir hitos"],
          outputs: ["Entrega o incidencia", "Prueba de entrega"],
          decision: "¿Se entregó completo y dentro del compromiso?",
          exception: "Una demora activa aviso, nueva ETA y gestión de la incidencia.",
          systems: ["TMS", "Transportista", "OMS"],
          sourceIds: ["cltd", "x214", "scor"],
          checkpoint: "¿Quién conoce el estado físico después de que sale del almacén?"
        },
        {
          id: "net-return",
          title: "Resolver el retorno",
          tag: "RETURN",
          summary: "Una lámpara devuelta se autoriza, recibe, inspecciona y destina.",
          inputs: ["Solicitud de devolución", "Pedido y producto originales"],
          actions: ["Validar", "Recibir", "Decidir reponer, reparar, reciclar o descartar"],
          outputs: ["Disposición trazada", "Inventario y finanzas ajustados"],
          decision: "¿Puede volver al stock vendible?",
          exception: "La unidad dañada o no verificable se separa hasta decidir su destino.",
          systems: ["OMS", "WMS", "ERP", "TMS, si hay transporte inverso"],
          sourceIds: ["scor", "gs1Systems"],
          checkpoint: "¿Por qué «devuelto» no significa automáticamente «disponible»?"
        },
        {
          id: "net-orchestrate",
          title: "Gobernar y mejorar",
          tag: "ORCHESTRATE",
          summary: "Reglas, datos, riesgos y métricas conectan todos los tramos.",
          inputs: ["Resultados de pedidos", "Incidencias y costos"],
          actions: ["Revisar desempeño", "Corregir reglas y datos maestros"],
          outputs: ["Mejoras en promesa, inventario y servicio"],
          decision: "¿El problema nace en la operación o en un dato compartido incorrecto?",
          exception: "La misma unidad de medida mal configurada puede distorsionar compra, stock y flete.",
          systems: ["ERP", "BI", "Gobierno de datos"],
          sourceIds: ["scor", "gs1Systems"],
          checkpoint: "¿Qué evidencia necesitas antes de cambiar una regla?"
        }
      ]
    },
    {
      id: "wms",
      title: "Dentro del almacén · WMS",
      eyebrow: "02 · Operación de almacén",
      lede: "El WMS dirige movimientos y registra dónde está cada unidad elegible. La mercancía anunciada aún no es mercancía recibida.",
      scope: "Recibo, inventario y salida; los controles y sistemas varían por operación.",
      nodes: [
        {
          id: "wms-prep",
          title: "Preparar el recibo",
          tag: "INBOUND",
          summary: "El aviso anticipado permite esperar 24 lámparas y preparar recursos de entrada.",
          inputs: ["Orden de compra o transferencia", "Aviso de despacho / ASN"],
          actions: ["Validar artículo y cantidades esperadas", "Organizar muelle y turno"],
          outputs: ["Recibo esperado"],
          decision: "¿Coinciden artículos, unidad de medida y destino?",
          exception: "Sin datos confiables, el equipo recibe con verificación adicional.",
          systems: ["ERP", "WMS", "YMS/citas, si existe"],
          sourceIds: ["gs1Label", "gs1Systems"],
          checkpoint: "¿Un ASN prueba que la mercancía ya llegó?"
        },
        {
          id: "wms-receive",
          title: "Descargar y registrar",
          tag: "RECEIPT",
          summary: "Operadores cuentan o escanean lo que realmente llega al muelle.",
          inputs: ["24 lámparas anunciadas", "Etiquetas o identificadores"],
          actions: ["Descargar", "Escanear", "Conciliar unidades físicas con aviso"],
          outputs: ["Recibo real con hora, cantidad y referencia"],
          decision: "¿Llegaron las 24 unidades correctas?",
          exception: "Si llegan 23, se registra 23 y se abre una diferencia; no se inventa la unidad faltante.",
          systems: ["WMS", "Terminal RF o escáner"],
          sourceIds: ["gs1Label", "gs1Systems", "gs1Keys"],
          checkpoint: "¿Qué número queda en el sistema si llegaron 23 de 24?"
        },
        {
          id: "wms-quality",
          title: "Verificar y separar",
          tag: "CONTROL",
          summary: "Daño, lote, serie o restricciones pueden bloquear parte del recibo.",
          inputs: ["Recibo real", "Reglas de calidad y elegibilidad"],
          actions: ["Inspeccionar", "Clasificar disponible, retenido o rechazado"],
          outputs: ["Stock elegible", "Excepciones trazadas"],
          decision: "¿Las 12 lámparas para el pedido están en condición vendible?",
          exception: "Una unidad dañada va a cuarentena y no entra en la promesa de venta.",
          systems: ["WMS", "Calidad", "ERP"],
          sourceIds: ["gs1Systems", "cltd"],
          checkpoint: "¿Por qué recibido y disponible no son el mismo estado?"
        },
        {
          id: "wms-putaway",
          title: "Ubicar",
          tag: "PUT-AWAY",
          summary: "El sistema asigna una ubicación y confirma que la mercancía llegó allí.",
          inputs: ["Stock aceptado", "Capacidad y reglas de ubicación"],
          actions: ["Elegir destino", "Mover", "Confirmar artículo y ubicación"],
          outputs: ["Inventario localizado"],
          decision: "¿Dónde cabe y se puede recuperar con seguridad?",
          exception: "Un escaneo en ubicación equivocada requiere corrección antes del picking.",
          systems: ["WMS", "Terminal RF"],
          sourceIds: ["gs1Systems", "cltd"],
          checkpoint: "¿Qué dato permite encontrar la lámpara más tarde?"
        },
        {
          id: "wms-control",
          title: "Mantener inventario confiable",
          tag: "INVENTORY",
          summary: "Movimientos, conteos y reposición mantienen el stock operativo alineado con la realidad.",
          inputs: ["Saldo por ubicación", "Conteo físico y demanda"],
          actions: ["Reponer zona de picking", "Contar selectivamente", "Investigar diferencias"],
          outputs: ["Stock corregido con trazabilidad"],
          decision: "¿La ubicación contiene lo que muestra el WMS?",
          exception: "Una diferencia requiere investigación y ajuste autorizado, no una cifra silenciosa.",
          systems: ["WMS", "ERP, para conciliación"],
          sourceIds: ["cltd", "gs1Systems"],
          checkpoint: "¿Por qué un conteo útil necesita causa de la diferencia?"
        },
        {
          id: "wms-release",
          title: "Liberar trabajo",
          tag: "FULFILL",
          summary: "El pedido de 12 lámparas se traduce en tareas de almacén.",
          inputs: ["Pedido aceptado", "Stock elegible y reglas de prioridad"],
          actions: ["Asignar unidades", "Secuenciar tareas", "Reponer si hace falta"],
          outputs: ["Instrucción de picking"],
          decision: "¿Hay 12 unidades elegibles accesibles en la zona correcta?",
          exception: "Si la ubicación está vacía, se busca, repone o informa un faltante.",
          systems: ["OMS/ERP", "WMS"],
          sourceIds: ["gs1Systems", "x940", "cltd"],
          checkpoint: "¿Qué diferencia una orden de cliente de una tarea de picking?"
        },
        {
          id: "wms-pick",
          title: "Tomar y confirmar",
          tag: "PICK",
          summary: "El operador toma las 12 lámparas correctas y confirma artículo, cantidad y ubicación.",
          inputs: ["Tarea de picking", "Unidades físicas"],
          actions: ["Ir a ubicación", "Tomar", "Escanear y confirmar"],
          outputs: ["12 unidades preparadas o faltante explícito"],
          decision: "¿Coinciden producto y cantidad con la tarea?",
          exception: "Un faltante en picking no se confirma como 12 unidades sin evidencia física.",
          systems: ["WMS", "Terminal RF"],
          sourceIds: ["gs1Systems", "cltd"],
          checkpoint: "¿Qué se debe registrar si solo se encuentran 11?"
        },
        {
          id: "wms-pack",
          title: "Empacar y preparar muelle",
          tag: "PACK / STAGE",
          summary: "Se verifica el contenido, se etiqueta la unidad logística y se coloca en staging.",
          inputs: ["12 lámparas tomadas", "Destino y requisitos de empaque"],
          actions: ["Comprobar", "Empacar", "Etiquetar", "Mover al muelle asignado"],
          outputs: ["Bulto listo", "Identificador de unidad logística, si se usa"],
          decision: "¿El bulto y la etiqueta representan el contenido real?",
          exception: "Una etiqueta de otro pedido puede enviar las lámparas al destino equivocado.",
          systems: ["WMS", "Impresora/escáner", "TMS, para cita o carga"],
          sourceIds: ["gs1Label", "gs1Keys", "cltd"],
          checkpoint: "¿Qué identifica un SSCC: el tipo de lámpara o el bulto concreto?"
        },
        {
          id: "wms-ship",
          title: "Cargar y confirmar salida",
          tag: "SHIP",
          summary: "Se comprueba qué bulto entra al vehículo y se publica lo realmente despachado.",
          inputs: ["Bulto en staging", "Vehículo/carga asignados"],
          actions: ["Escanear carga", "Cerrar embarque", "Informar cantidad real"],
          outputs: ["Confirmación de embarque", "Handoff al transporte"],
          decision: "¿Las 12 lámparas quedaron en el vehículo correcto?",
          exception: "Una salida parcial se informa como parcial; el pedido se concilia con lo embarcado.",
          systems: ["WMS", "TMS", "ERP/OMS"],
          sourceIds: ["scor", "x945", "gs1Label"],
          checkpoint: "¿Qué cambia de dueño operativo cuando el vehículo sale?"
        }
      ]
    },
    {
      id: "tms",
      title: "Entre ubicaciones · TMS",
      eyebrow: "03 · Transporte",
      lede: "El TMS organiza el traslado de las 12 lámparas: costo, capacidad, servicio, estado y liquidación.",
      scope: "El ejemplo usa carretera. Documentos y mensajes cambian en paquetería, marítimo, ferrocarril o aéreo.",
      nodes: [
        {
          id: "tms-demand",
          title: "Recibir necesidad de transporte",
          tag: "REQUEST",
          summary: "La orden de entrega se convierte en una necesidad logística con origen, destino y ventana.",
          inputs: ["Pedido listo o previsto", "Origen, destino, volumen y fecha"],
          actions: ["Validar restricciones", "Crear demanda de transporte"],
          outputs: ["Envío planificable"],
          decision: "¿Las 12 lámparas estarán listas antes de la ventana de recogida?",
          exception: "Si el almacén no llega, la cita y la promesa deben revisarse.",
          systems: ["OMS/ERP", "WMS", "TMS"],
          sourceIds: ["cltd", "scor"],
          checkpoint: "¿Puede reservarse transporte antes de terminar el picking?"
        },
        {
          id: "tms-plan",
          title: "Diseñar la carga y la ruta",
          tag: "PLAN",
          summary: "Se evalúan consolidación, modo, trayecto, capacidad, costo y servicio.",
          inputs: ["Envío", "Tarifas, capacidad y ventanas"],
          actions: ["Consolidar si conviene", "Comparar alternativas", "Elegir plan"],
          outputs: ["Ruta, modo y carga propuestos"],
          decision: "¿Conviene mover las 12 lámparas solas o junto a otros pedidos?",
          exception: "La opción más barata puede incumplir la fecha o un requisito de manejo.",
          systems: ["TMS", "Datos de transportistas"],
          sourceIds: ["cltd", "ascmTms"],
          checkpoint: "¿Qué cambia cuando priorizas tiempo sobre costo?"
        },
        {
          id: "tms-tender",
          title: "Ofrecer y confirmar",
          tag: "TENDER",
          summary: "Se solicita capacidad al transportista y se confirma quién tomará la carga.",
          inputs: ["Plan de carga", "Condiciones de servicio"],
          actions: ["Enviar oferta", "Registrar aceptación o rechazo", "Reasignar si hace falta"],
          outputs: ["Transportista y capacidad confirmados"],
          decision: "¿Aceptó el transportista en tiempo y condiciones?",
          exception: "Si se rechaza la oferta de carga, se busca otro transportista; aún no hay vehículo confirmado.",
          systems: ["TMS", "Transportista"],
          sourceIds: ["cltd", "x204"],
          checkpoint: "¿Es lo mismo planear una carga que tenerla aceptada?"
        },
        {
          id: "tms-pickup",
          title: "Coordinar recogida",
          tag: "PICKUP",
          summary: "Almacén y transportista sincronizan muelle, vehículo, documentos y carga real.",
          inputs: ["Cita y vehículo", "Bulto físico y confirmación WMS"],
          actions: ["Verificar carga", "Documentar", "Registrar salida"],
          outputs: ["Carga en tránsito", "Hora real de salida"],
          decision: "¿Se cargó exactamente la unidad asignada?",
          exception: "Una diferencia entre manifiesto y carga física se resuelve antes de cerrar la salida.",
          systems: ["TMS", "WMS", "Transportista", "YMS, si existe"],
          sourceIds: ["cltd", "gs1Label"],
          checkpoint: "¿Cuál es el punto de contacto entre WMS y TMS?"
        },
        {
          id: "tms-track",
          title: "Seguir y gestionar excepciones",
          tag: "IN TRANSIT",
          summary: "Los hitos del trayecto actualizan estado y ETA; una desviación requiere acción.",
          inputs: ["Salida confirmada", "Hitos del transportista"],
          actions: ["Monitorear", "Comparar con plan", "Avisar y replanear"],
          outputs: ["Estado y ETA", "Incidencias con responsable"],
          decision: "¿La entrega sigue dentro del compromiso?",
          exception: "Un retraso informa nueva ETA y motivo; no cambia por sí solo el stock del almacén.",
          systems: ["TMS", "Transportista", "OMS/atención al cliente"],
          sourceIds: ["cltd", "x214", "epcis"],
          checkpoint: "¿Qué evento distinguiría «salió» de «ya se entregó»?"
        },
        {
          id: "tms-deliver",
          title: "Confirmar entrega",
          tag: "POD",
          summary: "El destinatario recibe; se documentan hora, cantidad, condición y aceptación.",
          inputs: ["Llegada al destino", "Bulto y documentos"],
          actions: ["Entregar", "Capturar prueba de entrega", "Registrar diferencia"],
          outputs: ["Entrega confirmada o reclamo"],
          decision: "¿Recibió el cliente las 12 lámparas sin daño?",
          exception: "Una firma con 11 recibidas no equivale a entrega completa de 12.",
          systems: ["Transportista", "TMS", "OMS/ERP"],
          sourceIds: ["cltd", "scor", "x214"],
          checkpoint: "¿Qué evidencia cerraría el compromiso de entrega?"
        },
        {
          id: "tms-settle",
          title: "Conciliar costo y cerrar",
          tag: "SETTLEMENT",
          summary: "Se comparan servicio contratado, viaje realizado, cargos y excepciones.",
          inputs: ["Tarifa acordada", "Hitos/POD", "Factura de flete"],
          actions: ["Auditar cargos", "Resolver discrepancias", "Autorizar pago"],
          outputs: ["Flete conciliado", "Costo para análisis"],
          decision: "¿Coincide el cobro con el servicio prestado y el acuerdo?",
          exception: "Un recargo no previsto se investiga antes de aprobarlo.",
          systems: ["TMS", "ERP/finanzas", "Transportista"],
          sourceIds: ["cltd", "x210"],
          checkpoint: "¿Por qué el viaje puede terminar antes que el proceso administrativo?"
        }
      ]
    }
  ],

  architecture: [
    {
      id: "master-data",
      title: "Datos compartidos",
      subtitle: "Identificadores y reglas compartidas",
      description: "Artículo, unidad de medida, ubicación, socio, lote y estado deben significar lo mismo entre sistemas. GTIN, GLN y SSCC son identificadores GS1 cuando se adoptan; un ID interno también puede existir.",
      examples: ["12 lámparas ≠ 12 cajas", "Una ubicación de almacén ≠ dirección de entrega"],
      sourceIds: ["gs1Keys", "gs1Systems"]
    },
    {
      id: "erp",
      title: "ERP",
      subtitle: "Compromisos y registro empresarial",
      description: "Coordina compras, finanzas, datos maestros y registros de negocio. La titularidad exacta de pedido e inventario depende de la empresa.",
      examples: ["Orden de compra", "Factura", "Valor del inventario"],
      sourceIds: ["gs1Systems", "cltd"]
    },
    {
      id: "oms",
      title: "OMS / fulfillment",
      subtitle: "Decidir desde dónde cumplir",
      description: "Recibe la demanda y decide promesa, reserva y origen cuando hay varias ubicaciones o canales. Puede ser módulo de otro sistema.",
      examples: ["¿Qué sitio surtirá las 12 lámparas?", "Disponible para prometer vs. reservado"],
      sourceIds: ["gs1Systems", "scor"]
    },
    {
      id: "wms",
      title: "WMS",
      subtitle: "Ejecutar dentro del edificio",
      description: "Dirige recibo, ubicación, almacenamiento, picking, empaque y salida; confirma cada movimiento físico y sus excepciones.",
      examples: ["Escaneo de recibo", "Tarea de picking", "Confirmación de embarque"],
      sourceIds: ["gs1Systems", "cltd"]
    },
    {
      id: "tms",
      title: "TMS",
      subtitle: "Mover entre ubicaciones",
      description: "Planifica transporte, selecciona opciones, coordina transportistas, monitorea hitos y concilia costos. Puede abarcar entrada y salida.",
      examples: ["Ruta y carga", "Tender", "ETA", "Factura de flete"],
      sourceIds: ["ascmTms", "cltd"]
    },
    {
      id: "integration",
      title: "Integración",
      subtitle: "Contratos entre sistemas",
      description: "EDI, API HTTP y eventos son patrones posibles para intercambiar órdenes, confirmaciones y estados. Definir campos, dueño, frecuencia, errores y reintentos importa más que el formato elegido.",
      examples: ["X12 940/945", "API descrita con OpenAPI", "Evento con fuente e ID"],
      sourceIds: ["gs1Edi", "x940", "x945", "openapi", "cloudEvents"]
    },
    {
      id: "capture",
      title: "Captura física",
      subtitle: "Registrar movimientos físicos",
      description: "Escáneres, terminales RF, etiquetas o automatización registran qué se manipuló y dónde. La tecnología exacta depende de volumen, proceso y costo.",
      examples: ["GTIN para el artículo", "SSCC para la unidad logística", "Escaneo de ubicación"],
      sourceIds: ["gs1Systems", "gs1Label", "gs1Keys"]
    },
    {
      id: "analytics",
      title: "Datos y análisis",
      subtitle: "Medición y conciliación",
      description: "Los registros de órdenes, stock y transporte alimentan conciliaciones, trazabilidad y métricas. Un tablero es tan confiable como sus definiciones y eventos de origen.",
      examples: ["Pedido completo y a tiempo", "Exactitud de inventario", "Desvío de flete"],
      sourceIds: ["scor", "gs1Systems", "epcis"]
    },
    {
      id: "crm",
      title: "CRM y atención comercial",
      subtitle: "Contexto del cliente, si aplica",
      description: "Puede reunir cuentas, solicitudes, catálogo y señales de venta que alimentan la gestión de pedidos. Su alcance varía; no reemplaza la confirmación física del WMS ni el seguimiento del TMS.",
      examples: ["Registrar la cuenta del cliente", "Capturar la solicitud de 12 lámparas"],
      sourceIds: ["ascmDictionary", "scor"]
    },
    {
      id: "yard-labor",
      title: "Patio y trabajo",
      subtitle: "YMS y gestión de labor, opcionales",
      description: "Un YMS puede coordinar vehículos en el patio; una herramienta de gestión de labor puede comparar trabajo ejecutado con estándares y reportar desempeño del almacén. Pueden ser funciones integradas o sistemas separados.",
      examples: ["Ubicar el camión antes del muelle", "Revisar el desempeño de tareas de picking"],
      sourceIds: ["ascmDictionary", "ascmWarehouseOps"]
    },
    {
      id: "planning-production",
      title: "Planificación y producción",
      subtitle: "APS y MES, cuando hay necesidad",
      description: "La planificación avanzada puede evaluar demanda, capacidad y escenarios; la ejecución de manufactura puede controlar y registrar operaciones de planta. Una distribuidora de lámparas terminadas puede no usar la parte de producción.",
      examples: ["Evaluar si habrá 12 lámparas a tiempo", "Registrar ensamble y liberación si se fabrican"],
      sourceIds: ["ascmDictionary", "scor"]
    },
    {
      id: "platform",
      title: "Operación de la plataforma",
      subtitle: "Local, SaaS o híbrida",
      description: "Alojamiento, acceso, monitoreo, respaldo y recuperación sostienen el flujo. La nube describe un modelo de servicio; no cambia por sí sola el significado de recibir, embarcar o entregar.",
      examples: ["Gestión de identidad", "Monitoreo de interfaces", "Plan de recuperación"],
      sourceIds: ["nistCloud", "nistCsf"]
    }
  ],

  glossary: [
    { term: "Cadena de suministro", definition: "Red de decisiones y movimientos desde el suministro hasta el cliente y, cuando aplica, el retorno." },
    { term: "SCOR", definition: "Marco de ASCM para describir procesos, desempeño y mejora de cadenas de suministro." },
    { term: "ERP", definition: "Sistema que coordina procesos y registros empresariales como compras, datos maestros y finanzas." },
    { term: "OMS", definition: "Gestión de pedidos: captura, promesa y orquestación de cómo se cumplirán." },
    { term: "WMS", definition: "Gestión de operaciones y stock dentro de un almacén." },
    { term: "TMS", definition: "Gestión de planificación y ejecución del transporte." },
    { term: "SKU", definition: "Código interno de una variante de producto que una organización mantiene en inventario." },
    { term: "GTIN", definition: "Identificador GS1 de un tipo de artículo comercial; no identifica por sí solo una unidad individual." },
    { term: "GLN", definition: "Identificador GS1 que puede representar una entidad, función o ubicación." },
    { term: "SSCC", definition: "Identificador GS1 de una unidad logística concreta, como un pallet o paquete." },
    { term: "Orden de compra", definition: "Instrucción comercial para adquirir bienes o servicios bajo condiciones acordadas." },
    { term: "ASN", definition: "Aviso anticipado de despacho: informa lo que se espera que llegue; se valida contra el recibo real." },
    { term: "On-hand", definition: "Cantidad física registrada en una ubicación o red en un momento dado." },
    { term: "Disponible para prometer", definition: "Cantidad que puede comprometerse a una demanda según reservas y reglas; no equivale siempre a on-hand." },
    { term: "Reservado", definition: "Inventario apartado para una necesidad concreta antes de su salida física." },
    { term: "Put-away", definition: "Movimiento desde recibo a la ubicación de almacenamiento confirmada." },
    { term: "Replenishment", definition: "Reposición de una zona de picking u otra ubicación operativa desde stock de reserva." },
    { term: "Cycle count", definition: "Conteo periódico de una parte del inventario para detectar y explicar diferencias." },
    { term: "Picking", definition: "Tomar y confirmar unidades específicas para cumplir una orden." },
    { term: "Packing", definition: "Verificar y empacar lo tomado para un envío." },
    { term: "Staging", definition: "Área temporal donde se agrupa la carga antes de salir." },
    { term: "FIFO", definition: "Regla primero en entrar, primero en salir, si corresponde al producto y al proceso." },
    { term: "FEFO", definition: "Regla primero en vencer, primero en salir, útil cuando existe control de caducidad." },
    { term: "Tender", definition: "Oferta de una carga a un transportista para que acepte realizar el traslado." },
    { term: "ETA", definition: "Hora estimada de llegada; una predicción que debe actualizarse ante cambios." },
    { term: "POD", definition: "Prueba de entrega: evidencia de recepción y posibles diferencias o daños." },
    { term: "Freight audit", definition: "Revisión de cargos de transporte contra acuerdo, viaje y evidencia." },
    { term: "EDI", definition: "Intercambio electrónico estructurado de documentos de negocio entre socios." },
    { term: "API", definition: "Interfaz con contrato para que un sistema solicite o entregue información a otro." },
    { term: "Evento", definition: "Registro de algo que ocurrió, como recibido, cargado o entregado." },
    { term: "EPCIS", definition: "Estándar GS1 para compartir eventos de visibilidad de objetos en la cadena." },
    { term: "3PL", definition: "Tercero que presta servicios logísticos, como almacenaje o transporte, según contrato." },
    { term: "SQL", definition: "Lenguaje de consulta y operación de datos relacionales; el acceso depende de permisos y controles." },
    { term: "JavaScript", definition: "Lenguaje de programación usado, entre otros entornos, para crear interfaces web interactivas." }
  ],

  questions: [
    {
      question: "¿Qué hace un consultor o integrador en supply chain?",
      answer: "Traduce un proceso real a reglas, datos, interfaces y pruebas. Aclara quién decide, quién ejecuta y qué evidencia confirma cada paso; adapta el sistema sin confundir una configuración con el proceso de negocio.",
      example: "Define cómo un pedido de 12 lámparas pasa de OMS a WMS y cómo la cantidad realmente embarcada vuelve al ERP.",
      sourceIds: ["scor", "gs1Systems", "scale"]
    },
    {
      question: "¿Para qué sirve SQL en este trabajo?",
      answer: "Sirve para consultar y reconciliar registros: pedidos, movimientos, estados y diferencias. La estructura depende de cada producto y el acceso a producción debe seguir permisos y controles; saber SQL no significa editar datos libremente.",
      example: "Comparar 12 lámparas pedidas con 11 confirmadas en picking y localizar el evento que explica la diferencia.",
      sourceIds: ["postgres", "gs1Systems"]
    },
    {
      question: "¿Dónde entra JavaScript?",
      answer: "Puede construir una interfaz web, validar entradas o coordinar llamadas a servicios. No es requisito del WMS o TMS: las implementaciones usan muchos lenguajes y plataformas.",
      example: "Una pantalla muestra el estado recibido → ubicado → tomado → embarcado a partir de datos del servicio.",
      sourceIds: ["javascript", "openapi"]
    },
    {
      question: "¿Qué es una API y cuándo se usa?",
      answer: "Es un contrato para intercambiar capacidades o datos entre sistemas. Se puede usar para crear una solicitud, consultar estado o confirmar un resultado; un API HTTP documentada con OpenAPI es una opción, junto a EDI y eventos.",
      example: "El OMS consulta disponibilidad antes de prometer las 12 lámparas; el WMS comunica la salida real después.",
      sourceIds: ["openapi", "gs1Edi", "cloudEvents"]
    },
    {
      question: "¿Qué hacen los terceros?",
      answer: "Proveedor, operador 3PL y transportista pueden ejecutar tramos distintos. Los acuerdos especifican datos, tiempos y responsabilidades; un mensaje recibido no reemplaza la confirmación física.",
      example: "El proveedor anuncia 24 lámparas, el 3PL recibe 23 y el transportista entrega un bulto al cliente.",
      sourceIds: ["scor", "gs1Label", "cltd"]
    },
    {
      question: "¿Qué cambia entre on-premises y SaaS?",
      answer: "Cambia quién opera infraestructura y aplicación, cómo se integra y cómo se gestionan acceso, continuidad y datos. El proceso de recibo, picking o transporte conserva sus preguntas de negocio.",
      example: "En ambos modelos se debe saber si las 12 lámparas se embarcaron; cambian los mecanismos de alojamiento y operación.",
      sourceIds: ["nistCloud", "nistCsf"]
    },
    {
      question: "¿Por qué importan tanto los datos maestros y los eventos?",
      answer: "Los datos maestros definen artículos, unidades y ubicaciones. Los eventos registran qué ocurrió y cuándo. Si alguno falla, inventario, promesa, trazabilidad y flete pueden mostrar resultados incompatibles.",
      example: "Doce «cajas» cargadas como doce «unidades» alteran la promesa; un escaneo de salida faltante deja el envío sin evidencia.",
      sourceIds: ["gs1Keys", "epcis", "gs1Systems"]
    }
  ],

  runtimeGame: {
    scenario: {
      title: "Turno de almacén: 12 lámparas para una tienda",
      summary: "Un proveedor anuncia cuatro cajas de LMP-42. Dos pedidos esperan preparación para Tienda Centro. Valida los datos, recibe la mercancía y confirma qué sale.",
      footnote: "Ejercicio ficticio; no registra transacciones reales. Reglas, equipos y documentos varían por operación."
    },
    stages: [
      {
        id: "master",
        phase: "Preparación",
        title: "Datos maestros del artículo",
        brief: "El WMS necesita identificar el artículo y convertir cajas a unidades.",
        task: "¿Qué dato maestro habilita la lectura correcta del ASN?",
        evidence: ["SKU: LMP-42", "Unidad base: EA (unidad)", "1 caja = 6 EA"],
        choices: [
          { label: "Registrar 1 caja como 1 EA.", correct: false, feedback: "Esa conversión reduciría cuatro cajas a cuatro unidades y distorsionaría recibo y pedidos." },
          { label: "Guardar LMP-42 con EA como base y 6 EA por caja.", correct: true, feedback: "La conversión permite interpretar correctamente las cajas del ASN." },
          { label: "Aceptar el ASN antes de identificar el SKU.", correct: false, feedback: "Falta el identificador y la conversión para validar sus cantidades." }
        ],
        success: "LMP-42 listo · 1 caja = 6 EA.",
        event: "ITEM_MASTER_READY · LMP-42 · 1 caja = 6 EA",
        caveat: "Los atributos requeridos dependen del producto y la operación.",
        sourceIds: ["gs1Delivery", "gs1Keys"]
      },
      {
        id: "asn",
        phase: "Entrada",
        title: "Procesar ASN",
        brief: "El aviso anticipa lo que el proveedor afirma haber enviado; aún no acredita recibo físico.",
        task: "¿Cómo registras el ASN de cuatro cajas?",
        evidence: ["ASN: 4 cajas LMP-42", "Conversión: 6 EA/caja", "Esperadas: 24 EA; recibidas: 0"],
        choices: [
          { label: "Validar 24 EA esperadas y dejar el recibo pendiente.", correct: true, feedback: "El ASN fija la cantidad esperada; el stock disponible sigue en cero." },
          { label: "Agregar 24 EA disponibles de inmediato.", correct: false, feedback: "El ASN es información anticipada; falta confirmar mercancía física y condición." },
          { label: "Cambiar cuatro cajas por cuatro EA.", correct: false, feedback: "Contradice el item master, que define seis EA por caja." }
        ],
        success: "ASN validado · 24 EA esperadas; 0 recibidas.",
        event: "ASN_VALIDATED · 4 cajas · 24 EA esperadas",
        caveat: "El ASN puede viajar por EDI u otra integración; algunas operaciones reciben contra una orden sin ASN.",
        sourceIds: ["gs1Delivery", "x856", "gs1Label"]
      },
      {
        id: "order",
        phase: "Demanda",
        title: "Procesar pedidos",
        brief: "Dos pedidos para la misma tienda solicitan 7 y 5 EA. La demanda se registra antes de asignar stock.",
        task: "¿Qué estado deben tener antes del recibo?",
        evidence: ["ORD-07: 7 EA", "ORD-05: 5 EA", "Destino común: Tienda Centro"],
        choices: [
          { label: "Declarar ambos pedidos surtidos.", correct: false, feedback: "Surtir requiere inventario elegible y confirmaciones físicas posteriores." },
          { label: "Reservar las 24 EA anunciadas por ASN.", correct: false, feedback: "El aviso no demuestra que haya 24 EA aptas en el almacén." },
          { label: "Registrar demanda total de 12 EA, pendiente de inventario elegible.", correct: true, feedback: "Los pedidos quedan pendientes; el ASN no equivale a stock asignable." }
        ],
        success: "Pedidos aceptados · 12 EA pendientes.",
        event: "ORDERS_ACCEPTED · ORD-07=7 · ORD-05=5 · pendiente",
        caveat: "La promesa y la reserva pueden ocurrir en sistemas y momentos distintos; aquí se separan para estudiar el flujo.",
        sourceIds: ["scor", "gs1Delivery", "x940"]
      },
      {
        id: "receiving",
        phase: "Entrada",
        title: "Recibir y ubicar",
        brief: "Se cuentan 24 EA físicas. Una está dañada y requiere segregación.",
        task: "¿Qué resultado de recibo conservas?",
        evidence: ["ASN: 24 EA esperadas", "Conteo: 24 EA físicas", "Daño: 1 EA → cuarentena", "Reserva: ubicación R-01"],
        choices: [
          { label: "Poner las 24 EA disponibles porque coinciden con el ASN.", correct: false, feedback: "Una unidad dañada no debe entrar al stock elegible para estos pedidos." },
          { label: "Registrar 24 recibidas; 1 en cuarentena y 23 aptas ubicadas en R-01.", correct: true, feedback: "La unidad dañada queda trazada; las 23 aptas se confirman en R-01." },
          { label: "Registrar solo 23 recibidas y borrar la unidad dañada.", correct: false, feedback: "La unidad dañada llegó físicamente y debe seguir siendo trazable en cuarentena." }
        ],
        success: "24 recibidas · 1 en cuarentena · 23 aptas en R-01.",
        event: "RECEIPT_POSTED · físico=24 · cuarentena=1 · R-01=23 aptas",
        caveat: "La disposición de daño depende de reglas de calidad; el juego no decide si se devuelve, repara o descarta.",
        sourceIds: ["gs1Delivery", "gs1Label", "epcis"]
      },
      {
        id: "wave",
        phase: "Salida",
        title: "Liberar ola",
        brief: "Una ola reúne demanda elegible y crea asignaciones y tareas para preparar pedidos.",
        task: "¿Cuánto debe liberar la ola para estos dos pedidos?",
        evidence: ["Stock elegible: 23 EA", "ORD-07 + ORD-05: 12 EA", "Cuarentena: 1 EA no asignable"],
        choices: [
          { label: "Asignar 12 EA y crear tareas por pedido; quedan 11 EA elegibles.", correct: true, feedback: "La ola asigna solo la demanda elegible; el resto queda en reserva." },
          { label: "Asignar las 24 EA del ASN.", correct: false, feedback: "El ASN no es stock; solo 23 EA son elegibles y la demanda es 12." },
          { label: "Asignar 23 EA porque todas están aptas.", correct: false, feedback: "La ola atiende 12 EA de demanda, no todo el stock disponible." }
        ],
        success: "Ola liberada · 12 asignadas · 11 en reserva.",
        event: "WAVE_RELEASED · asignadas=12 · remanente=11",
        caveat: "Las olas son una estrategia, no un requisito universal; también existe asignación directa o continua.",
        sourceIds: ["cltd", "gs1Systems"]
      },
      {
        id: "picking",
        phase: "Salida",
        title: "Confirmar picking",
        brief: "El operador debe confirmar lo que tomó físicamente para las tareas liberadas.",
        task: "¿Qué confirma el picking de esta ola?",
        evidence: ["Tareas: 7 EA para ORD-07 y 5 para ORD-05", "Ubicación elegible: R-01", "Total solicitado: 12 EA"],
        choices: [
          { label: "Confirmar las 24 EA del ASN como pickeadas.", correct: false, feedback: "El ASN describe entrada; el pick debe seguir las tareas y cantidad física tomada." },
          { label: "Cerrar tareas sin escanear o verificar unidades.", correct: false, feedback: "Falta evidencia de ejecución para pasar a clasificación." },
          { label: "Tomar y confirmar 7 + 5 EA; quedan 11 EA elegibles en R-01.", correct: true, feedback: "La confirmación física mantiene la cantidad de cada pedido." }
        ],
        success: "12 tomadas · 11 EA en reserva.",
        event: "PICK_CONFIRMED · ORD-07=7 · ORD-05=5",
        caveat: "Picking por unidad, caja o pallet y sus escaneos dependen del diseño operativo.",
        sourceIds: ["cltd", "gs1Systems"]
      },
      {
        id: "sortation",
        phase: "Salida",
        title: "Clasificar con MHE",
        brief: "Un sorter desvía las unidades a dos carriles de trabajo y confirma cuántas llegaron a cada uno.",
        task: "¿Qué señal permite continuar?",
        evidence: ["Entrada al MHE: 12 EA", "Carril A → estación ORD-07: 7 EA", "Carril B → estación ORD-05: 5 EA"],
        choices: [
          { label: "Un acuse de recepción del mensaje, sin conteo físico.", correct: false, feedback: "El ACK solo acredita el mensaje; no prueba que 7 y 5 EA llegaron a los carriles." },
          { label: "Confirmar físicamente 7 EA en A y 5 EA en B.", correct: true, feedback: "El conteo confirma el desvío a ambas estaciones de trabajo." },
          { label: "Enviar las 12 EA al carril A.", correct: false, feedback: "ORD-05 quedaría sin sus cinco unidades separadas." }
        ],
        success: "Carril A: 7 EA · Carril B: 5 EA.",
        event: "SORT_CONFIRMED · A=7 · B=5",
        caveat: "MHE es opcional; el mismo control puede realizarse manualmente. Los mensajes dependen de cada integración.",
        sourceIds: ["oracleAutomation", "cltd"]
      },
      {
        id: "putlight",
        phase: "Salida",
        title: "Distribuir con put-to-light",
        brief: "En cada estación, una luz señala el compartimento final del pedido; el operador deposita y confirma.",
        task: "¿Qué confirma el depósito final de cada pedido?",
        evidence: ["Compartimento iluminado ORD-07: 7 EA", "Compartimento iluminado ORD-05: 5 EA", "Desde los carriles MHE: 12 EA"],
        choices: [
          { label: "Depositar y confirmar 7 EA para ORD-07 y 5 para ORD-05.", correct: true, feedback: "La luz guía cada depósito; la confirmación cierra los compartimentos." },
          { label: "Tomar la luz encendida como confirmación automática.", correct: false, feedback: "La instrucción visual no sustituye el depósito y su confirmación." },
          { label: "Mezclar 12 EA en un único destino porque la tienda es la misma.", correct: false, feedback: "Se perdería el vínculo de cantidad con cada pedido." }
        ],
        success: "Compartimento ORD-07: 7 EA · ORD-05: 5 EA.",
        event: "PUT_CONFIRMED · ORD-07=7 · ORD-05=5",
        caveat: "Put-to-light es opcional y distinto de pick-to-light; aquí distribuye mercancía ya tomada.",
        sourceIds: ["oracleAutomation", "cltd"]
      },
      {
        id: "staging",
        phase: "Despacho",
        title: "Empacar y llevar a staging",
        brief: "Se etiquetan tres cartones y se mueven a una posición de salida para la misma tienda.",
        task: "¿Qué cartones mueves a ST-01?",
        evidence: ["ORD-07 → C-01: 4 EA + C-02: 3 EA", "ORD-05 → C-03: 5 EA", "Carril de salida: ST-01"],
        choices: [
          { label: "Dos cartones sin desglose por pedido.", correct: false, feedback: "Este caso usa tres cartones identificados y debe conservar su relación con cada orden." },
          { label: "Cuatro cajas del ASN con 24 EA.", correct: false, feedback: "Staging de salida contiene las 12 EA pickeadas, no todo el recibo." },
          { label: "Etiquetar C-01=4, C-02=3, C-03=5 y confirmar los tres en ST-01.", correct: true, feedback: "Cada cartón conserva su pedido y queda localizado en ST-01." }
        ],
        success: "3 cartones · 12 EA en ST-01.",
        event: "STAGED · C-01=4 · C-02=3 · C-03=5 · ST-01",
        caveat: "La secuencia de empaque depende del proceso de picking.",
        sourceIds: ["gs1Label", "cltd", "epcis"]
      },
      {
        id: "nesting",
        phase: "Despacho",
        title: "Anidar cartones en pallet",
        brief: "Se crea una relación padre-hijo para mover tres cartones como una unidad logística.",
        task: "¿Qué relación conserva el contenido real?",
        evidence: ["Pallet padre: P-01", "Hijos: C-01 (4), C-02 (3), C-03 (5)", "Total contenido: 12 EA"],
        choices: [
          { label: "P-01 contiene cuatro cajas y 24 EA del ASN.", correct: false, feedback: "Ese total describe la entrada; el pallet saliente tiene tres cartones y 12 EA." },
          { label: "Anidar los tres cartones bajo P-01 sin borrar sus IDs ni sus pedidos.", correct: true, feedback: "La relación padre-hijo conserva cada cartón y su pedido." },
          { label: "Sustituir los IDs de los cartones por P-01 y perder el detalle.", correct: false, feedback: "El vínculo padre-hijo requiere conservar la identidad de cada cartón." }
        ],
        success: "P-01 contiene 3 cartones · 12 EA.",
        event: "NESTED · P-01 ← C-01,C-02,C-03 · 12 EA",
        caveat: "El pallet y la jerarquía padre-hijo son opcionales; GS1 describe agregaciones de unidades logísticas cuando se usan.",
        sourceIds: ["epcis", "gs1Label"]
      },
      {
        id: "consolidation",
        phase: "Despacho",
        title: "Consolidar pedidos",
        brief: "Los dos pedidos van a la misma tienda y pueden compartir un envío sin perder su identidad.",
        task: "¿Cómo consolidas el pallet para esta salida?",
        evidence: ["ORD-07: 7 EA en dos cartones", "ORD-05: 5 EA en un cartón", "P-01: 3 cartones, 12 EA"],
        choices: [
          { label: "Asignar P-01 a un envío/carga L-01 y mantener ambas órdenes vinculadas.", correct: true, feedback: "La carga agrupa ambos pedidos sin fusionarlos." },
          { label: "Fusionar ORD-07 y ORD-05 en una orden nueva sin detalle original.", correct: false, feedback: "Compartir carga no obliga a borrar la trazabilidad de las órdenes." },
          { label: "Sumar la unidad en cuarentena para completar el pallet.", correct: false, feedback: "La unidad dañada sigue segregada y nunca se asignó al envío." }
        ],
        success: "L-01 incluye P-01 y 2 pedidos; carga pendiente.",
        event: "LOAD_PLANNED · L-01 · P-01 · ORD-07+ORD-05",
        caveat: "La consolidación depende de destino, servicio y capacidad.",
        sourceIds: ["gs1Label", "cltd", "epcis"]
      },
      {
        id: "load",
        phase: "Despacho",
        title: "Confirmar carga",
        brief: "La carga planeada solo se vuelve cargada cuando se confirma la unidad logística real.",
        task: "¿Qué acción acredita la carga física?",
        evidence: ["Carga L-01 espera P-01", "P-01 contiene 3 cartones y 12 EA", "Vehículo en muelle de salida"],
        choices: [
          { label: "Generar BOL desde el ASN sin escanear el pallet.", correct: false, feedback: "El ASN era entrada prevista y no acredita qué salió en el vehículo." },
          { label: "Marcar L-01 como cargada porque P-01 estaba en staging.", correct: false, feedback: "Staging no confirma entrada física al vehículo." },
          { label: "Escanear y confirmar P-01 dentro de L-01; verificar 3 cartones y 12 EA.", correct: true, feedback: "El escaneo confirma el paso al vehículo; el cierre del envío se registra aparte." }
        ],
        success: "L-01 cargada · P-01 · 12 EA.",
        event: "LOAD_CONFIRMED · L-01 · P-01 · 3 cartones · 12 EA",
        caveat: "Confirmación de carga, cierre de carga, ship confirm y entrega al transportista son eventos distintos según operación.",
        sourceIds: ["gs1Label", "epcis", "x945"]
      },
      {
        id: "bol",
        phase: "Despacho",
        title: "Preparar BOL",
        brief: "El borrador de bill of lading (BOL) resume la carga confirmada, no el ASN de entrada.",
        task: "¿Qué debe mostrar el borrador de BOL?",
        evidence: ["Remitente → Tienda Centro", "L-01 cargada: P-01", "Contenido: 3 cartones, 12 EA"],
        choices: [
          { label: "4 cajas y 24 EA, tomadas del ASN de entrada.", correct: false, feedback: "El ASN de proveedor no describe la carga de salida confirmada." },
          { label: "1 pallet, 3 cartones, 12 EA, origen/destino y carga L-01.", correct: true, feedback: "El borrador coincide con la carga; firma y traspaso al transportista quedan aparte." },
          { label: "23 EA aptas y 1 dañada porque ese fue el recibo.", correct: false, feedback: "El BOL debe resumir la mercancía cargada, no el inventario de entrada." }
        ],
        success: "Borrador de BOL · 1 pallet · 3 cartones · 12 EA.",
        event: "BOL_DRAFTED · L-01 · 1 pallet · 3 cartones · 12 EA",
        caveat: "Es un resumen educativo, no un BOL legal emitido. Formato, términos, firma y obligación dependen de modo, transportista y jurisdicción.",
        sourceIds: ["usBol", "gs1Label"]
      }
    ]
  },

  warehouseLayout: {
    intro: "Plano conceptual. Zonas y controles cambian por instalación; cross-dock y cuarentena son condicionales.",
    zones: [
      {
        id: "inbound-dock",
        title: "Muelle de entrada",
        role: "Punto de descarga: llega la unidad física anunciada por proveedor o transportista.",
        sourceIds: ["cltd", "gs1Label"]
      },
      {
        id: "receiving",
        title: "Recibo",
        role: "Se cuentan o escanean las unidades reales y se concilian con la orden o el ASN.",
        sourceIds: ["gs1Label", "gs1Systems"]
      },
      {
        id: "inspection",
        title: "Verificación",
        role: "Se revisan identificación, condición y restricciones; la profundidad del control depende del riesgo.",
        sourceIds: ["gs1Systems", "cltd"]
      },
      {
        id: "reserve",
        title: "Almacenamiento de reserva",
        role: "Inventario elegible queda localizado y disponible para reposición o preparación futura.",
        sourceIds: ["gs1Systems", "cltd"]
      },
      {
        id: "pick-face",
        title: "Zona de picking",
        role: "Ubicaciones de acceso operativo de donde se toman y confirman las unidades pedidas.",
        sourceIds: ["cltd", "gs1Systems"]
      },
      {
        id: "packing",
        title: "Empaque",
        role: "Se verifica el pedido tomado, se protege y se etiqueta la unidad que saldrá.",
        sourceIds: ["cltd", "gs1Label"]
      },
      {
        id: "outbound-dock",
        title: "Muelle de salida",
        role: "Se agrupa y confirma la carga que entra al vehículo antes de registrar el embarque.",
        sourceIds: ["cltd", "gs1Label"]
      },
      {
        id: "crossdock-stage",
        title: "Transferencia directa",
        role: "Zona temporal para clasificar un recibo destinado a salida próxima sin almacenarlo en reserva; solo cuando el flujo lo permite.",
        sourceIds: ["ascmTms", "cltd"]
      },
      {
        id: "returns",
        title: "Devoluciones",
        role: "Se identifica y registra el producto que regresa antes de decidir su destino.",
        sourceIds: ["scor", "gs1Systems"]
      },
      {
        id: "quarantine",
        title: "Cuarentena",
        role: "Separación temporal de inventario retenido por daño, calidad, recall o falta de validación; no es paso universal.",
        sourceIds: ["gs1Systems"]
      }
    ],
    routes: [
      {
        id: "inbound",
        title: "Entrada a stock",
        goal: "Recibir lámparas y dejarlas localizadas para pedidos futuros.",
        steps: ["inbound-dock", "receiving", "inspection", "reserve"],
        note: "Se confirma lo realmente recibido antes de ubicar. Si una unidad falla la revisión, se separa en cuarentena en vez de pasar a reserva.",
        sourceIds: ["gs1Label", "gs1Systems", "cltd"]
      },
      {
        id: "outbound",
        title: "Salida de pedido",
        goal: "Preparar y embarcar las 12 lámparas del pedido ficticio.",
        steps: ["reserve", "pick-face", "packing", "outbound-dock"],
        note: "El paso de reserva a picking representa reposición cuando se necesita; si el stock ya está en la zona de picking, comienza allí.",
        sourceIds: ["cltd", "gs1Systems", "gs1Label"]
      },
      {
        id: "cross-dock",
        title: "Cross-dock opcional",
        goal: "Transferir una carga ya asignada a salida sin almacenarla en inventario de reserva.",
        steps: ["inbound-dock", "receiving", "crossdock-stage", "outbound-dock"],
        note: "Ruta condicional: solo funciona si destino, capacidad, identificación y tiempos están coordinados. Puede requerir controles adicionales; no sustituye la confirmación física.",
        sourceIds: ["ascmTms", "gs1Label"]
      },
      {
        id: "returns",
        title: "Retorno con daño",
        goal: "Registrar y aislar una lámpara devuelta que necesita decisión de calidad.",
        steps: ["inbound-dock", "returns", "inspection", "quarantine"],
        note: "Este caso termina en cuarentena porque hay daño. Una devolución verificada y apta podría pasar a reserva; otra podría repararse, reciclarse o descartarse.",
        sourceIds: ["scor", "gs1Systems"]
      }
    ]
  }
};
