(() => {
  "use strict";

  const lang = window.SCKB_LANG === "en" ? "en" : "es";
  const content = lang === "en" ? window.SCKB_CONTENT_EN : window.SCKB_CONTENT;
  const game = content?.runtimeGame;
  const byId = (id) => document.getElementById(id);
  const ids = ["master", "asn", "order", "receiving", "wave", "picking", "sortation", "putlight", "staging", "nesting", "consolidation", "load", "bol"];
  const ui = {
    es: {
      unavailable: "La simulación no está disponible. Recarga la página.",
      step: "ETAPA", done: "Completada", active: "Disponible", locked: "Pendiente",
      next: "Siguiente etapa", finish: "Ver resultado", review: "Revisar etapa",
      initial: "Elige una acción para continuar.",
      waiting: "Aún no hay eventos. Empieza con el item master.",
      completeTitle: "Turno simulado completado",
      completeBody: "Se preparó un BOL para 1 pallet, 3 cartones y 12 EA. El escaneo de carga y el documento quedan registrados por separado; la firma y entrega al transportista siguen pendientes.",
      completeDetail: "13 decisiones correctas · 2 pedidos · 1 carga",
      sources: "Fuentes", caveat: "En esta operación", boardDetail: "Estado físico y lógico",
      noValue: "—", stageNumber: (n) => `Etapa ${String(n).padStart(2, "0")}`,
      progress: (done, total) => `${done} / ${total} etapas`,
      zones: ["Datos", "Recibo", "Ola", "Picking", "Clasificación", "Stage y pallet", "Carga", "Documento"],
      signals: ["Maestro · ASN · pedidos", "24 EA; 1 en cuarentena", "12 EA asignadas", "12 EA confirmadas", "7 + 5 EA", "3 cartones · P-01", "1 pallet escaneado", "BOL preparado"],
      boardNotes: [
        "Sin transacciones: configura el artículo antes de procesar mensajes o pedidos.",
        "LMP-42 tiene 6 EA por caja; aún no hay stock recibido.",
        "ASN: 24 EA esperadas; recibo físico: 0.",
        "Dos pedidos suman 12 EA; esperan stock apto.",
        "24 EA recibidas: 23 aptas en R-01 y 1 en cuarentena.",
        "Ola liberada: 12 EA asignadas y 11 aptas sin asignar.",
        "Picking confirmado: 7 EA para ORD-07 y 5 para ORD-05.",
        "MHE desvió 7 y 5 EA a dos estaciones; el depósito final sigue pendiente.",
        "Put-to-light confirmó 7 y 5 EA en los compartimentos de cada pedido.",
        "Tres cartones identificados están en staging.",
        "P-01 contiene los tres cartones y conserva sus pedidos.",
        "L-01 agrupa P-01 y dos pedidos; aún no se confirmó la carga física.",
        "P-01 fue escaneado a L-01; el BOL sigue pendiente.",
        "BOL preparado para 1 pallet, 3 cartones y 12 EA; la firma queda aparte."
      ],
      metrics: ["ASN esperado", "Aptas sin asignar", "Cuarentena", "Asignadas", "Cartones", "Pallets"],
      resetMessage: "Operación reiniciada."
    },
    en: {
      unavailable: "The simulation is unavailable. Reload the page.",
      step: "STEP", done: "Complete", active: "Available", locked: "Pending",
      next: "Next step", finish: "View result", review: "Review step",
      initial: "Choose an action to continue.",
      waiting: "No events yet. Start with the item master.",
      completeTitle: "Simulated shift complete",
      completeBody: "A BOL was prepared for 1 pallet, 3 cartons, and 12 EA. The load scan and document are recorded separately; signature and carrier handoff remain pending.",
      completeDetail: "13 correct decisions · 2 orders · 1 load",
      sources: "Sources", caveat: "In this operation", boardDetail: "Physical and logical state",
      noValue: "—", stageNumber: (n) => `Step ${String(n).padStart(2, "0")}`,
      progress: (done, total) => `${done} / ${total} steps`,
      zones: ["Data", "Receiving", "Wave", "Picking", "Sortation", "Stage and pallet", "Load", "Document"],
      signals: ["Master · ASN · orders", "24 EA; 1 held", "12 EA allocated", "12 EA confirmed", "7 + 5 EA", "3 cartons · P-01", "1 pallet scanned", "BOL prepared"],
      boardNotes: [
        "No transactions yet: set up the item before processing notices or orders.",
        "LMP-42 has 6 EA per case; no stock has been received.",
        "ASN: 24 EA expected; physical receipt: 0.",
        "Two orders total 12 EA; they await eligible stock.",
        "24 EA received: 23 eligible in R-01 and 1 held in quarantine.",
        "Wave released: 12 EA allocated and 11 eligible EA unallocated.",
        "Picking confirmed: 7 EA for ORD-07 and 5 for ORD-05.",
        "MHE diverted 7 and 5 EA to two work cells; final placement is still pending.",
        "Put-to-light confirmed 7 and 5 EA in the orders' final slots.",
        "Three identified cartons are in staging.",
        "P-01 contains the three cartons and retains their order links.",
        "L-01 groups P-01 and two orders; physical loading is not confirmed yet.",
        "P-01 was scanned onto L-01; the BOL is still pending.",
        "BOL prepared for 1 pallet, 3 cartons, and 12 EA; signature is separate."
      ],
      metrics: ["ASN expected", "Eligible unallocated", "Quarantine", "Allocated", "Cartons", "Pallets"],
      resetMessage: "Operation reset."
    }
  }[lang];

  if (!game || !Array.isArray(game.stages) || game.stages.length !== ids.length ||
      !ids.every((id, index) => game.stages[index]?.id === id)) {
    if (byId("runtime-stage")) byId("runtime-stage").textContent = ui.unavailable;
    return;
  }

  const storageKey = "sckb-runtime-v1";
  const total = game.stages.length;
  const el = Object.fromEntries([
    "runtime-scenario", "runtime-progress", "runtime-progress-fill", "runtime-progress-text",
    "runtime-reset", "runtime-track", "runtime-stage", "runtime-evidence",
    "runtime-choices", "runtime-feedback", "runtime-next", "runtime-board",
    "runtime-ledger", "runtime-events", "runtime-complete"
  ].map((id) => [id, byId(id)]));
  if (Object.values(el).some((node) => !node)) return;

  const make = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const appendText = (parent, tag, className, value) => parent.append(make(tag, className, value));
  const readProgress = () => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || "null");
      return value?.version === 1 && Number.isInteger(value.completed) &&
        value.completed >= 0 && value.completed <= total ? value : { completed: 0, viewIndex: 0 };
    } catch {
      return { completed: 0, viewIndex: 0 };
    }
  };
  const saved = readProgress();
  let completed = saved.completed;
  let viewIndex = Number.isInteger(saved.viewIndex) && saved.viewIndex >= 0 &&
    saved.viewIndex <= completed ? Math.min(saved.viewIndex, total - 1) : Math.min(completed, total - 1);
  let message = null;
  let wrongChoice = -1;
  const persist = () => {
    try { localStorage.setItem(storageKey, JSON.stringify({ version: 1, completed, viewIndex })); } catch { /* Private browsing may block storage. */ }
  };

  const setScenario = () => {
    el["runtime-scenario"].replaceChildren();
    appendText(el["runtime-scenario"], "strong", "runtime-scenario-title", game.scenario.title);
    el["runtime-scenario"].append(document.createTextNode(" "));
    appendText(el["runtime-scenario"], "span", "runtime-scenario-summary", game.scenario.summary);
  };

  el["runtime-choices"].setAttribute("role", "group");
  el["runtime-choices"].setAttribute("aria-label", lang === "en" ? "Choose an action" : "Elige una acción");
  el["runtime-track"].setAttribute("role", "group");

  const renderProgress = () => {
    el["runtime-progress-text"].textContent = ui.progress(completed, total);
    el["runtime-progress"].setAttribute("aria-valuemax", String(total));
    el["runtime-progress"].setAttribute("aria-valuenow", String(completed));
    el["runtime-progress-fill"].style.width = `${100 * completed / total}%`;
  };

  const renderTrack = () => {
    const track = el["runtime-track"];
    track.replaceChildren();
    game.stages.forEach((stage, index) => {
      const status = index < completed ? "done" : index === completed ? "active" : "locked";
      const button = make("button", `runtime-track-step is-${status}${index === viewIndex ? " is-selected" : ""}`);
      button.type = "button";
      button.disabled = index > completed;
      button.setAttribute("aria-current", index === viewIndex ? "step" : "false");
      button.setAttribute("aria-label", `${ui.stageNumber(index + 1)}: ${stage.title}. ${ui[status]}.`);
      appendText(button, "span", "runtime-track-number", String(index + 1).padStart(2, "0"));
      appendText(button, "span", "runtime-track-title", stage.title);
      appendText(button, "span", "runtime-track-status", status === "done" ? "✓" : status === "active" ? "●" : "○");
      button.addEventListener("click", () => {
        viewIndex = index;
        message = null;
        wrongChoice = -1;
        persist();
        render();
        el["runtime-stage"].focus();
      });
      track.append(button);
    });
    const selected = track.querySelector(".is-selected");
    if (selected) {
      const left = selected.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollLeft += left - (track.clientWidth - selected.clientWidth) / 2;
    }
  };

  const renderStage = () => {
    const stage = game.stages[viewIndex];
    const alreadyDone = viewIndex < completed;
    const stageEl = el["runtime-stage"];
    stageEl.replaceChildren();
    const meta = make("p", "runtime-stage-meta");
    appendText(meta, "span", "runtime-stage-number", ui.stageNumber(viewIndex + 1));
    appendText(meta, "span", "runtime-stage-phase", stage.phase);
    stageEl.append(meta);
    appendText(stageEl, "h3", "runtime-stage-title", stage.title);
    appendText(stageEl, "p", "runtime-stage-brief", stage.brief);
    appendText(stageEl, "p", "runtime-stage-task", stage.task);

    const evidenceList = make("ul", "runtime-evidence-list");
    stage.evidence.forEach((item) => appendText(evidenceList, "li", "", item));
    el["runtime-evidence"].replaceChildren(evidenceList);

    const choices = el["runtime-choices"];
    choices.replaceChildren();
    stage.choices.forEach((choice, index) => {
      const button = make("button", `runtime-choice${alreadyDone && choice.correct ? " is-correct" : ""}${index === wrongChoice ? " is-wrong" : ""}`);
      button.type = "button";
      button.disabled = alreadyDone;
      button.setAttribute("aria-label", `${String.fromCharCode(65 + index)}. ${choice.label}`);
      appendText(button, "span", "runtime-choice-letter", String.fromCharCode(65 + index));
      appendText(button, "span", "runtime-choice-text", choice.label);
      appendText(button, "span", "runtime-choice-mark", alreadyDone && choice.correct ? "✓" : "→");
      button.addEventListener("click", () => choose(index));
      choices.append(button);
    });

    const feedback = el["runtime-feedback"];
    feedback.className = "runtime-feedback";
    if (message?.stageId === stage.id) {
      feedback.textContent = message.text;
      feedback.classList.add(message.kind === "wrong" ? "is-wrong" : "is-correct");
    } else if (alreadyDone) {
      feedback.textContent = stage.success;
      feedback.classList.add("is-correct");
    } else {
      feedback.textContent = ui.initial;
    }

    const sources = make("div", "runtime-stage-references");
    appendText(sources, "p", "runtime-caveat", `${ui.caveat}: ${stage.caveat}`);
    const sourceLine = make("p", "runtime-source-links");
    appendText(sourceLine, "span", "", `${ui.sources}: `);
    let sourceCount = 0;
    (stage.sourceIds || []).forEach((id) => {
      const source = content.sources?.[id];
      if (!source) return;
      try {
        const url = new URL(source.url);
        if (url.protocol !== "https:") return;
        const link = make("a", "", source.label);
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        if (sourceCount) sourceLine.append(document.createTextNode(" · "));
        sourceLine.append(link);
        sourceCount += 1;
      } catch { /* Ignore invalid source URLs. */ }
    });
    sources.append(sourceLine);
    stageEl.append(sources);

    const next = el["runtime-next"];
    next.disabled = !alreadyDone;
    const nextText = next.querySelector("span");
    if (nextText) nextText.textContent = completed === total && viewIndex === total - 1 ? ui.finish : ui.next;
  };

  const zoneThresholds = [3, 4, 5, 6, 8, 11, 12, 13];
  const zoneActive = [0, 3, 4, 5, 6, 8, 11, 12];
  const renderBoard = () => {
    const board = el["runtime-board"];
    board.replaceChildren();
    const zones = make("ol", "runtime-board-stream");
    zoneThresholds.forEach((threshold, index) => {
      const status = completed >= threshold ? "done" :
        (completed >= zoneActive[index] && completed < threshold ? "active" : "pending");
      const item = make("li", `runtime-board-node is-${status}`);
      appendText(item, "span", "runtime-board-index", String(index + 1).padStart(2, "0"));
      const copy = make("span", "runtime-board-copy");
      appendText(copy, "strong", "", ui.zones[index]);
      appendText(copy, "small", "", status === "done" ? ui.signals[index] : ui.noValue);
      item.append(copy);
      appendText(item, "span", "runtime-board-indicator", status === "done" ? "✓" : status === "active" ? "●" : "○");
      zones.append(item);
    });
    board.append(zones);
    const note = make("div", "runtime-board-note");
    appendText(note, "strong", "", ui.boardDetail);
    appendText(note, "p", "", ui.boardNotes[completed]);
    board.append(note);
  };

  const renderLedger = () => {
    const values = [
      completed >= 2 ? "24 EA" : ui.noValue,
      completed >= 5 ? "11 EA" : completed >= 4 ? "23 EA" : ui.noValue,
      completed >= 4 ? "1 EA" : ui.noValue,
      completed >= 5 ? "12 EA" : ui.noValue,
      completed >= 9 ? "3" : ui.noValue,
      completed >= 10 ? "1" : ui.noValue
    ];
    const ledger = el["runtime-ledger"];
    ledger.replaceChildren();
    values.forEach((value, index) => {
      const row = make("div", `runtime-ledger-row${value === ui.noValue ? " is-pending" : ""}`);
      appendText(row, "span", "", ui.metrics[index]);
      appendText(row, "strong", "", value);
      ledger.append(row);
    });
  };

  const renderEvents = () => {
    const events = el["runtime-events"];
    events.replaceChildren();
    if (!completed) {
      appendText(events, "p", "runtime-events-empty", ui.waiting);
      return;
    }
    const list = make("ol", "runtime-events-list");
    for (let index = completed - 1; index >= Math.max(0, completed - 4); index -= 1) {
      const item = make("li", "runtime-event");
      appendText(item, "span", "", String(index + 1).padStart(2, "0"));
      appendText(item, "p", "", game.stages[index].event);
      list.append(item);
    }
    events.append(list);
  };

  const renderComplete = () => {
    const panel = el["runtime-complete"];
    panel.hidden = completed !== total;
    if (panel.hidden) return;
    panel.replaceChildren();
    appendText(panel, "span", "runtime-complete-mark", "✓");
    const copy = make("div", "runtime-complete-copy");
    appendText(copy, "h3", "", ui.completeTitle);
    appendText(copy, "p", "", ui.completeBody);
    appendText(copy, "small", "", ui.completeDetail);
    panel.append(copy);
  };

  const render = () => {
    renderProgress();
    renderTrack();
    renderStage();
    renderBoard();
    renderLedger();
    renderEvents();
    renderComplete();
  };

  const choose = (index) => {
    if (viewIndex !== completed) return;
    const stage = game.stages[viewIndex];
    const choice = stage.choices[index];
    if (!choice) return;
    if (!choice.correct) {
      wrongChoice = index;
      message = { stageId: stage.id, kind: "wrong", text: choice.feedback };
      renderStage();
      el["runtime-choices"].children[index]?.focus();
      return;
    }
    wrongChoice = -1;
    message = { stageId: stage.id, kind: "correct", text: choice.feedback };
    completed += 1;
    persist();
    render();
    el["runtime-next"].focus();
  };

  el["runtime-next"].addEventListener("click", () => {
    if (viewIndex >= completed) return;
    if (completed === total && viewIndex === total - 1) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el["runtime-complete"].scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
      return;
    }
    viewIndex = Math.min(viewIndex + 1, completed);
    message = null;
    wrongChoice = -1;
    persist();
    render();
    el["runtime-stage"].focus();
  });
  el["runtime-reset"].addEventListener("click", () => {
    completed = 0;
    viewIndex = 0;
    message = { stageId: game.stages[0].id, kind: "correct", text: ui.resetMessage };
    wrongChoice = -1;
    persist();
    render();
    el["runtime-stage"].focus();
  });

  setScenario();
  render();
  const restoreRuntimeAnchor = () => {
    if (window.location.hash === "#runtime") {
      const root = document.documentElement;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      byId("runtime").scrollIntoView({ block: "start", behavior: "auto" });
      root.style.scrollBehavior = previous;
    }
  };
  if (document.readyState === "complete") restoreRuntimeAnchor();
  else window.addEventListener("load", restoreRuntimeAnchor, { once: true });
})();
