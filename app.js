(() => {
  "use strict";

  const lang = window.SCKB_LANG === "en" ? "en" : "es";
  const labels = {
    es: {
      sources: "Fuentes: ", loadError: "No se pudo cargar el atlas. Recarga la página.",
      decision: "DECISIÓN CLAVE", inputs: "ENTRA", actions: "SE HACE", outputs: "SALE",
      systems: "SISTEMAS POSIBLES", exceptionOpen: "Ver excepción +",
      exceptionClose: "Cerrar excepción −", exceptionTitle: "Excepción",
      checkpoint: "Comprueba · ", stage: (number, title) => `Etapa ${number}: ${title}. Abrir detalle.`,
      layer: "CAPA", inPractice: "EN LA PRÁCTICA", example: "Ejemplo: ",
      glossaryStatus: (count, total) => `${count} de ${total} términos${count ? "" : " · Prueba otra palabra."}`,
      allSources: (count) => `Ver todas las fuentes (${count})`,
      wrongZone: "Esa zona no sigue. Prueba otra o usa Pista.",
      routeDone: "Ruta completada. Elige otra para comparar.",
      routeNext: (step, total) => `Selecciona la zona ${step} de ${total}.`,
      zoneCount: (count, total) => `${count} / ${total} zonas`,
      routeStart: "Empieza seleccionando la primera zona del plano.",
      hint: (title) => `Pista: busca «${title}».`
    },
    en: {
      sources: "Sources: ", loadError: "The atlas could not load. Reload the page.",
      decision: "KEY DECISION", inputs: "INPUTS", actions: "ACTIONS", outputs: "OUTPUTS",
      systems: "POSSIBLE SYSTEMS", exceptionOpen: "View exception +",
      exceptionClose: "Close exception −", exceptionTitle: "Exception",
      checkpoint: "Check · ", stage: (number, title) => `Step ${number}: ${title}. Open details.`,
      layer: "LAYER", inPractice: "IN PRACTICE", example: "Example: ",
      glossaryStatus: (count, total) => `${count} of ${total} terms${count ? "" : " · Try another word."}`,
      allSources: (count) => `View all sources (${count})`,
      wrongZone: "That zone is not next. Try another or use Hint.",
      routeDone: "Route complete. Choose another to compare.",
      routeNext: (step, total) => `Select zone ${step} of ${total}.`,
      zoneCount: (count, total) => `${count} / ${total} zones`,
      routeStart: "Start by selecting the first zone on the layout.",
      hint: (title) => `Hint: look for “${title}”.`
    }
  }[lang];
  const content = lang === "en" ? window.SCKB_CONTENT_EN : window.SCKB_CONTENT;
  const byId = (id) => document.getElementById(id);
  const make = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const safeSource = (id) => {
    const source = content.sources[id];
    if (!source) return null;
    try {
      const url = new URL(source.url);
      return url.protocol === "https:" ? source : null;
    } catch {
      return null;
    }
  };
  const addSourceLinks = (parent, ids, prefix = labels.sources) => {
    const valid = (ids || []).filter((id) => safeSource(id));
    if (!valid.length) return;
    const line = make("p", "detail-sources");
    line.append(make("span", "", prefix));
    valid.forEach((id) => {
      const source = safeSource(id);
      const link = make("a", "", source.label);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      line.append(link);
    });
    parent.append(line);
  };

  if (!content || !Array.isArray(content.journeys)) {
    byId("flow-rail").textContent = labels.loadError;
    return;
  }

  const journeys = content.journeys;
  const tabs = [...document.querySelectorAll(".journey-tab")];
  let currentJourney = journeys[0];
  let currentStep = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const routeHash = () => {
    const parts = window.location.hash.replace(/^#/, "").split("/");
    if (parts[0] !== "mapa") return null;
    const journey = journeys.find((item) => item.id === parts[1]);
    if (!journey) return null;
    const index = Math.max(0, journey.nodes.findIndex((item) => item.id === parts[2]));
    return { journey, index };
  };

  const setHash = () => {
    const node = currentJourney.nodes[currentStep];
    const url = new URL(window.location.href);
    url.hash = `mapa/${currentJourney.id}/${node.id}`;
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event("sckb:locationchange"));
  };

  const listBlock = (title, values) => {
    const block = make("div", "detail-list");
    block.append(make("h5", "", title));
    const list = make("ul");
    (values || []).forEach((value) => list.append(make("li", "", value)));
    block.append(list);
    return block;
  };

  const showNodeDetail = () => {
    const node = currentJourney.nodes[currentStep];
    const detail = byId("node-detail");
    const primary = make("div", "detail-primary");
    const header = make("div", "detail-header");
    header.append(make("span", "detail-number", String(currentStep + 1).padStart(2, "0")));
    header.append(make("span", "detail-tag", node.tag));
    primary.append(header);
    primary.append(make("h4", "", node.title));
    primary.append(make("p", "detail-summary", node.summary));
    const decision = make("div", "decision-box");
    decision.append(make("span", "", labels.decision));
    decision.append(make("p", "", node.decision));
    primary.append(decision);

    const secondary = make("div", "detail-secondary");
    const columns = make("div", "detail-columns");
    columns.append(listBlock(labels.inputs, node.inputs));
    columns.append(listBlock(labels.actions, node.actions));
    columns.append(listBlock(labels.outputs, node.outputs));
    secondary.append(columns);

    const systems = make("div", "detail-system");
    systems.append(make("h5", "", labels.systems));
    (node.systems || []).forEach((system) => systems.append(make("span", "system-pill", system)));
    secondary.append(systems);

    if (node.exception) {
      const actions = make("div", "detail-actions");
      const toggle = make("button", "exception-toggle", labels.exceptionOpen);
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", "exception-content");
      const exception = make("div", "exception-panel");
      exception.id = "exception-content";
      exception.hidden = true;
      exception.append(make("strong", "", labels.exceptionTitle));
      exception.append(make("span", "", node.exception));
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        toggle.textContent = expanded ? labels.exceptionOpen : labels.exceptionClose;
        exception.hidden = expanded;
      });
      actions.append(toggle);
      secondary.append(actions, exception);
    }

    if (node.checkpoint) {
      const checkpoint = make("div", "checkpoint");
      checkpoint.append(make("strong", "", labels.checkpoint));
      checkpoint.append(make("span", "", node.checkpoint));
      secondary.append(checkpoint);
    }
    addSourceLinks(secondary, node.sourceIds);
    detail.replaceChildren(primary, secondary);
  };

  const selectStep = (index, options = {}) => {
    currentStep = Math.min(Math.max(index, 0), currentJourney.nodes.length - 1);
    const buttons = [...byId("flow-rail").querySelectorAll(".flow-node")];
    buttons.forEach((button, position) => {
      const active = position === currentStep;
      button.setAttribute("aria-current", active ? "step" : "false");
      button.setAttribute("aria-expanded", String(active));
    });
    const total = currentJourney.nodes.length;
    byId("step-counter").textContent = `${String(currentStep + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    byId("flow-progress").setAttribute("aria-valuemax", String(total));
    byId("flow-progress").setAttribute("aria-valuenow", String(currentStep + 1));
    byId("progress-fill").style.width = `${((currentStep + 1) / total) * 100}%`;
    byId("prev-step").disabled = currentStep === 0;
    byId("next-step").disabled = currentStep === total - 1;
    showNodeDetail();
    if (options.updateHash !== false) setHash();
    if (options.scroll && buttons[currentStep]) {
      buttons[currentStep].scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "nearest", inline: "center" });
    }
  };

  const selectJourney = (id, options = {}) => {
    const found = journeys.find((journey) => journey.id === id);
    if (!found) return;
    currentJourney = found;
    tabs.forEach((tab) => {
      const active = tab.dataset.journey === id;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    byId("journey-panel").setAttribute("aria-labelledby", `tab-${id}`);
    byId("journey-eyebrow").textContent = found.eyebrow;
    byId("journey-title").textContent = found.title;
    byId("journey-lede").textContent = found.lede;
    byId("journey-scope").textContent = found.scope;
    const rail = byId("flow-rail");
    const buttons = found.nodes.map((node, index) => {
      const button = make("button", "flow-node");
      button.type = "button";
      button.setAttribute("aria-controls", "node-detail");
      button.setAttribute("aria-label", labels.stage(index + 1, node.title));
      button.append(make("span", "node-marker", String(index + 1).padStart(2, "0")));
      const card = make("span", "node-card");
      card.append(make("span", "node-tag", node.tag));
      card.append(make("strong", "", node.title));
      button.append(card);
      button.addEventListener("click", () => selectStep(index, { scroll: true }));
      return button;
    });
    rail.replaceChildren(...buttons);
    selectStep(options.step || 0, { updateHash: options.updateHash });
    byId("flow-viewport").scrollLeft = 0;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectJourney(tab.dataset.journey));
    tab.addEventListener("keydown", (event) => {
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectJourney(tabs[next].dataset.journey);
      tabs[next].focus();
    });
  });
  byId("prev-step").addEventListener("click", () => selectStep(currentStep - 1, { scroll: true }));
  byId("next-step").addEventListener("click", () => selectStep(currentStep + 1, { scroll: true }));
  const initial = routeHash();
  selectJourney(initial?.journey.id || journeys[0].id, { step: initial?.index || 0, updateHash: Boolean(initial) });
  if (initial) window.requestAnimationFrame(() => byId("mapa").scrollIntoView({ behavior: "auto", block: "start" }));
  window.addEventListener("hashchange", () => {
    const state = routeHash();
    if (state) selectJourney(state.journey.id, { step: state.index, updateHash: false });
  });

  const architectureCards = [];
  const architectureDetail = byId("architecture-detail");
  const showArchitecture = (index) => {
    const item = content.architecture[index];
    architectureCards.forEach((card, position) => card.setAttribute("aria-expanded", String(index === position)));
    const kicker = make("span", "detail-kicker", `${labels.layer} ${String(index + 1).padStart(2, "0")} / ${String(content.architecture.length).padStart(2, "0")}`);
    const title = make("h3", "", item.title);
    const subtitle = make("p", "", item.subtitle);
    const description = make("p", "", item.description);
    const example = make("div", "arch-example");
    example.append(make("strong", "", labels.inPractice));
    example.append(make("p", "", item.examples.join(" · ")));
    addSourceLinks(example, item.sourceIds);
    architectureDetail.replaceChildren(kicker, title, subtitle, description, example);
  };
  content.architecture.forEach((item, index) => {
    const card = make("button", "architecture-card");
    card.type = "button";
    card.setAttribute("aria-controls", "architecture-detail");
    card.append(make("span", "arch-index", String(index + 1).padStart(2, "0")));
    card.append(make("strong", "", item.title));
    card.append(make("small", "", item.subtitle));
    card.addEventListener("click", () => showArchitecture(index));
    architectureCards.push(card);
    byId("architecture-grid").append(card);
  });
  showArchitecture(0);

  content.questions.forEach((item) => {
    const detail = make("details", "question");
    detail.append(make("summary", "", item.question));
    const body = make("div", "question-body");
    body.append(make("p", "", item.answer));
    body.append(make("p", "question-example", `${labels.example}${item.example}`));
    addSourceLinks(body, item.sourceIds);
    detail.append(body);
    byId("questions-list").append(detail);
  });

  const normalized = (value) => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const glossaryInput = byId("glossary-query");
  const renderGlossary = () => {
    const query = normalized(glossaryInput.value.trim());
    const matches = content.glossary.filter((item) => normalized(`${item.term} ${item.definition}`).includes(query));
    const cards = matches.map((item) => {
      const card = make("article", "glossary-card");
      card.append(make("strong", "", item.term));
      card.append(make("p", "", item.definition));
      return card;
    });
    byId("glossary-grid").replaceChildren(...cards);
    byId("glossary-status").textContent = labels.glossaryStatus(matches.length, content.glossary.length);
  };
  glossaryInput.addEventListener("input", renderGlossary);
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const typing = target instanceof HTMLElement && (target.matches("input, textarea, select") || target.isContentEditable);
    if (event.key === "/" && !typing && !event.altKey && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      glossaryInput.focus();
      glossaryInput.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "center" });
    }
    if (event.key === "Escape" && document.activeElement === glossaryInput) {
      if (glossaryInput.value) { glossaryInput.value = ""; renderGlossary(); }
      else glossaryInput.blur();
    }
  });
  renderGlossary();

  const featuredSourceIds = ["scor", "cltd", "gs1Systems", "gs1Edi", "epcis", "openapi"];
  const sourceList = byId("source-list");
  const sourceItem = (id) => {
    const source = safeSource(id);
    if (!source) return null;
    const link = make("a", "source-item");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = source.scope;
    link.append(make("span", "", source.label));
    link.append(make("span", "", "↗"));
    return link;
  };
  featuredSourceIds.forEach((id) => { const item = sourceItem(id); if (item) sourceList.append(item); });
  const moreSources = make("details", "more-sources");
  moreSources.append(make("summary", "", labels.allSources(Object.keys(content.sources).length)));
  const moreGrid = make("div", "more-sources-grid");
  Object.keys(content.sources).filter((id) => !featuredSourceIds.includes(id)).forEach((id) => {
    const item = sourceItem(id);
    if (item) moreGrid.append(item);
  });
  moreSources.append(moreGrid);
  sourceList.append(moreSources);

  const layout = content.warehouseLayout;
  if (layout) {
    byId("layout-intro").textContent = layout.intro;
    const map = byId("warehouse-map");
    const path = byId("warehouse-path");
    const zoneButtons = new Map();
    const symbols = { "inbound-dock": "⇥", receiving: "▤", inspection: "◇", reserve: "▦", "pick-face": "▥", packing: "▣", "outbound-dock": "⇤", "crossdock-stage": "↗", returns: "↶", quarantine: "!" };
    let activeRoute = layout.routes[0];
    let completed = 0;

    layout.zones.forEach((zone) => {
      const button = make("button", "warehouse-zone");
      button.type = "button";
      button.dataset.zone = zone.id;
      button.setAttribute("aria-label", `${zone.title}. ${zone.role}`);
      button.title = zone.role;
      button.append(make("span", "warehouse-zone-symbol", symbols[zone.id] || "□"));
      button.append(make("strong", "", zone.title));
      button.addEventListener("click", () => {
        if (completed >= activeRoute.steps.length) return;
        const expected = activeRoute.steps[completed];
        if (zone.id !== expected) {
          button.dataset.wrong = "true";
          window.setTimeout(() => { delete button.dataset.wrong; }, 600);
          setRouteFeedback(labels.wrongZone, "error");
          return;
        }
        completed += 1;
        updateRoute();
        if (completed === activeRoute.steps.length) setRouteFeedback(labels.routeDone, "success");
        else setRouteFeedback(labels.routeNext(completed + 1, activeRoute.steps.length), "neutral");
      });
      zoneButtons.set(zone.id, button);
      map.append(button);
    });

    const setRouteFeedback = (message, state) => {
      const feedback = byId("route-feedback");
      feedback.textContent = message;
      feedback.dataset.state = state;
    };

    const drawPath = () => {
      const rect = map.getBoundingClientRect();
      path.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
      path.replaceChildren();
      if (completed < 2) return;
      const points = activeRoute.steps.slice(0, completed).map((id) => {
        const zoneRect = zoneButtons.get(id).getBoundingClientRect();
        return `${zoneRect.left + zoneRect.width / 2 - rect.left},${zoneRect.top + zoneRect.height / 2 - rect.top}`;
      });
      const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polyline.setAttribute("points", points.join(" "));
      polyline.setAttribute("fill", "none");
      polyline.setAttribute("stroke", "#f27459");
      polyline.setAttribute("stroke-width", "7");
      polyline.setAttribute("stroke-linecap", "round");
      polyline.setAttribute("stroke-linejoin", "round");
      path.append(polyline);
    };

    const updateRoute = () => {
      const total = activeRoute.steps.length;
      zoneButtons.forEach((button) => {
        button.dataset.visited = "false";
        const badge = button.querySelector(".warehouse-zone-step");
        if (badge) badge.remove();
      });
      activeRoute.steps.slice(0, completed).forEach((id, index) => {
        const button = zoneButtons.get(id);
        button.dataset.visited = "true";
        button.append(make("span", "warehouse-zone-step", String(index + 1)));
      });
      byId("route-count").textContent = labels.zoneCount(completed, total);
      byId("route-progress").setAttribute("aria-valuemax", String(total));
      byId("route-progress").setAttribute("aria-valuenow", String(completed));
      byId("route-progress-fill").style.width = `${(completed / total) * 100}%`;
      window.requestAnimationFrame(drawPath);
    };

    const selectRoute = (route) => {
      activeRoute = route;
      completed = 0;
      [...byId("route-picker").children].forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.route === route.id)));
      byId("route-title").textContent = route.title;
      byId("route-goal").textContent = route.goal;
      byId("route-note").textContent = route.note;
      const priorSources = byId("route-brief-sources");
      if (priorSources) priorSources.remove();
      const sourceHolder = make("div", "route-brief-sources");
      sourceHolder.id = "route-brief-sources";
      addSourceLinks(sourceHolder, route.sourceIds);
      byId("route-note").after(sourceHolder);
      updateRoute();
      setRouteFeedback(labels.routeStart, "neutral");
    };

    layout.routes.forEach((route) => {
      const button = make("button", "route-button", route.title);
      button.type = "button";
      button.dataset.route = route.id;
      button.addEventListener("click", () => selectRoute(route));
      byId("route-picker").append(button);
    });
    byId("route-hint").addEventListener("click", () => {
      if (completed >= activeRoute.steps.length) return;
      const zone = layout.zones.find((item) => item.id === activeRoute.steps[completed]);
      setRouteFeedback(labels.hint(zone.title), "neutral");
    });
    byId("route-reset").addEventListener("click", () => selectRoute(activeRoute));
    selectRoute(activeRoute);
    if ("ResizeObserver" in window) new ResizeObserver(drawPath).observe(map);
    window.addEventListener("resize", drawPath);
  }
})();
