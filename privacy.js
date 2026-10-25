(function () {
  "use strict";
  const es = window.SCKB_LANG !== "en";
  const t = (en, spanish) => es ? spanish : en;
  const option = (value, en, spanish) => [value, t(en, spanish)];
  const skip = option("unspecified", "Prefer not to answer", "Prefiero no responder");
  const privacy = window.createAEKRLocalPrivacy({
    id: "sckb", product: "SCKB", lang: es ? "es" : "en", defaultRetention: 90, entryMount: ".footer-credit",
    dataDescription: t("The export contains the current fictional runtime progress, plus the local optional records and choices listed in its manifest. Educational progress expires after 90 days of inactivity by default. No real warehouse or customer data is requested.", "La exportación incluye el progreso actual de la simulación ficticia y los registros opcionales y opciones que declara el manifiesto. El progreso vence tras 90 días de inactividad por defecto. No se solicitan datos reales del almacén ni de clientes."),
    features: ["journey", "runtime", "layout", "architecture"],
    snapshot: () => window.SCKB_LOCAL_DATA.snapshot(),
    hasData: () => window.SCKB_LOCAL_DATA.hasData(),
    clear: () => window.SCKB_LOCAL_DATA.clear(),
    questions: [
      { id: "role", label: t("Learning context", "Contexto de aprendizaje"), options: [skip, option("student", "Student", "Estudiante"), option("operations", "Operations", "Operaciones"), option("consulting", "Consulting", "Consultoría"), option("technology", "Technology", "Tecnología")] },
      { id: "experience", label: t("Experience with these systems", "Experiencia con estos sistemas"), options: [skip, option("new", "New to the topic", "Tema nuevo"), option("under2", "Less than 2 years", "Menos de 2 años"), option("2to5", "2–5 years", "2–5 años"), option("over5", "More than 5 years", "Más de 5 años")] },
      { id: "interest", label: t("Most useful subject", "Tema más útil"), options: [skip, option("wms", "Warehouse / WMS", "Almacén / WMS"), option("tms", "Transport / TMS", "Transporte / TMS"), option("integration", "Integration", "Integración"), option("automation", "Automation", "Automatización")] },
      { id: "format", label: t("Preferred future format", "Formato futuro preferido"), options: [skip, option("maps", "Interactive maps", "Mapas interactivos"), option("simulation", "Practice simulation", "Simulación práctica"), option("reference", "Reference guides", "Guías de referencia"), option("course", "Structured course", "Curso estructurado")] },
      { id: "frequency", label: t("Expected use", "Uso esperado"), options: [skip, option("once", "One visit", "Una visita"), option("monthly", "Monthly", "Mensual"), option("weekly", "Weekly", "Semanal"), option("daily", "Daily", "Diario")] },
      { id: "value", label: t("Usefulness", "Utilidad"), options: [skip, option("low", "Low", "Baja"), option("medium", "Medium", "Media"), option("high", "High", "Alta")] },
      { id: "budget", label: t("Optional interest in a future paid learning resource (no offer or commitment)", "Interés opcional en un recurso futuro de pago (sin oferta ni compromiso)"), options: [skip, option("free", "Free resources only", "Solo recursos gratuitos"), option("under20", "Under USD 20", "Menos de USD 20"), option("20to50", "USD 20–50", "USD 20–50"), option("over50", "Over USD 50", "Más de USD 50")] }
    ]
  });
  window.addEventListener("sckb:productdatachange", privacy.productChanged);
  document.addEventListener("click", event => {
    if (event.target.closest("#runtime-choices button,#runtime-next,#runtime-reset")) privacy.event("runtime");
    else if (event.target.closest(".journey-tab,#prev-step,#next-step")) privacy.event("journey");
    else if (event.target.closest(".architecture-card")) privacy.event("architecture");
    else if (event.target.closest("#route-reset,.route-button")) privacy.event("layout");
  });
})();
