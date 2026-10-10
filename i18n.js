(() => {
  'use strict';

  const english = Object.freeze({
    'meta.description': 'An interactive, visual, vendor-neutral atlas for understanding supply chains, WMS, TMS, and the systems that connect them.',
    'page.title': 'SCKB · Supply Chain Knowledge Base',
    skip: 'Skip to content',
    'brand.home': 'SCKB, return to the top',
    'nav.main': 'Main navigation',
    'nav.map': 'Map',
    'nav.layout': 'Layout',
    'nav.runtime': 'Runtime',
    'nav.systems': 'Systems',
    'nav.architecture': 'Architecture',
    'nav.questions': 'Questions',
    'nav.explore': 'Explore',
    'language.group': 'Site language',
    'hero.eyebrow': 'INTERACTIVE GUIDE',
    'hero.line1': 'How an order',
    'hero.line2': 'moves.',
    'hero.lede': 'Follow an order for 12 lamps. See the inventory, warehouse, and transport decisions at each stage.',
    'hero.start': 'Open maps',
    'hero.how': 'How it works',
    'hero.metricsLabel': 'Atlas contents',
    'hero.modules': 'interactive modules',
    'hero.nodes': 'explorable nodes',
    'hero.languages': 'languages',
    'art.systemView': 'SYSTEM VIEW',
    'art.demand': 'DEMAND',
    'art.flowLine1': 'Full',
    'art.flowLine2': 'flow',
    'art.source': 'Source',
    'art.store': 'Store',
    'art.move': 'Transport',
    'art.return': 'Return',
    'art.goods': 'PRODUCT',
    'art.data': 'DATA',
    'art.decisions': 'DECISIONS',
    'orientation.kicker': 'HOW TO READ THE MAPS',
    'orientation.title': 'What to track at each stage.',
    'orientation.goods': 'Goods',
    'orientation.goodsQuestion': 'Where is it physically?',
    'orientation.signals': 'Signals',
    'orientation.signalsQuestion': 'What does each system know?',
    'orientation.decisions': 'Decisions',
    'orientation.decisionsQuestion': 'What happens if something changes?',
    'flow.kicker': '01 / FLOW MAPS',
    'flow.title': 'Supply chain, WMS, and TMS.',
    'flow.intro': 'Choose a map and open a stage.',
    'flow.annotationLine1': 'INPUTS · ACTIONS · OUTPUTS',
    'flow.annotationLine2': 'DECISIONS · EXCEPTIONS',
    'flow.tablistLabel': 'Map scale',
    'flow.tabNetwork': 'Full supply chain',
    'flow.tabWms': 'WMS operations',
    'flow.tabTms': 'TMS · transportation',
    'flow.progressLabel': 'Journey progress',
    'flow.nodeNote': 'EACH NODE OPENS A DETAIL',
    'flow.viewportLabel': 'Horizontal map of stages. Swipe or use Tab to explore the nodes.',
    'flow.swipe': '← SWIPE TO EXPLORE →',
    'flow.previous': 'Previous stage',
    'flow.next': 'Next stage',
    'flow.modelLead': 'Fictional example:',
    'flow.modelBody': 'sequences and documents vary by operation.',
    'layout.kicker': '02 / WAREHOUSE LAYOUT',
    'layout.title': 'Move through the warehouse.',
    'layout.intro': 'Choose a route and mark the zones in order.',
    'layout.annotationLine1': 'FOUR ROUTES',
    'layout.annotationLine2': 'TEN ZONES',
    'layout.mission': 'CHOOSE A ROUTE',
    'layout.routesLabel': 'Warehouse routes',
    'layout.initialCount': '0 / 0 zones',
    'layout.progressLabel': 'Route progress',
    'layout.hint': 'Hint',
    'layout.reset': 'Reset ↺',
    'layout.swipe': 'Swipe to see all zones →',
    'layout.inboundDock': 'INBOUND DOCK',
    'layout.operations': 'OPERATIONS AREA',
    'layout.outboundDock': 'OUTBOUND DOCK',
    'layout.mapLabel': 'Interactive map of warehouse zones',
    'layout.available': 'Available zone',
    'layout.completed': 'Completed step',
    'layout.varies': 'Routes vary by facility',
    'runtime.kicker': '03 / RUNTIME',
    'runtime.title': 'Run a warehouse shift.',
    'runtime.intro': 'Choose an action at each stage. The board records inventory, orders, and the load.',
    'runtime.annotationLine1': '13 STAGES',
    'runtime.annotationLine2': 'ONE ACTION PER STAGE',
    'runtime.scenarioLabel': 'CASE',
    'runtime.progressLabel': 'Runtime progress',
    'runtime.reset': 'Restart shift ↺',
    'runtime.trackLabel': 'SHIFT STAGES',
    'runtime.trackAria': 'Simulation stages',
    'runtime.activeLabel': 'CURRENT STAGE',
    'runtime.evidenceLabel': 'CASE DATA',
    'runtime.choicesLabel': 'CHOOSE AN ACTION',
    'runtime.next': 'Next stage',
    'runtime.observerLabel': 'Operation status',
    'runtime.boardLabel': 'FLOW PROGRESS',
    'runtime.ledgerLabel': 'SIMULATION STATE',
    'runtime.eventsLabel': 'EVENT LOG',
    'runtime.modelLead': 'Simulation:',
    'runtime.modelBody': 'orders and inventory are fictional; equipment and documents vary by operation.',
    'handoff.kicker': '04 / SYSTEMS',
    'handoff.title': 'System handoffs.',
    'handoff.intro': 'OMS/ERP shares the order; WMS confirms preparation; TMS manages transportation.',
    'handoff.flowLabel': 'Example of handoffs between systems',
    'handoff.promise': '01 · PROMISE',
    'handoff.promiseBody': 'Order, availability, purchasing, and commitment.',
    'handoff.promiseSignal': 'signal: order',
    'handoff.execution': '02 · EXECUTION',
    'handoff.executionBody': 'Inventory, tasks, picking, packing, and dispatch.',
    'handoff.executionSignal': 'signal: ready to ship',
    'handoff.movement': '03 · MOVEMENT',
    'handoff.movementBody': 'Load, carrier, tracking, and delivery.',
    'handoff.movementSignal': 'signal: status / proof of delivery',
    'handoff.footnote': 'Functions may be distributed differently in a specific implementation.',
    'architecture.kicker': '05 / ARCHITECTURE',
    'architecture.title': 'Reference architecture.',
    'architecture.intro': 'Devices, applications, integrations, data, and infrastructure.',
    'architecture.annotationLine1': 'SELECT A CARD',
    'architecture.annotationLine2': 'TO SEE ITS ROLE',
    'architecture.deploymentTitle': 'On-premises or SaaS?',
    'architecture.deploymentBody': 'Both models need clear owners for access, integrations, changes, backup, and recovery. Who operates each layer differs.',
    'questions.kicker': '06 / COMMON QUESTIONS',
    'questions.title': 'Working with these systems.',
    'questions.intro': 'Consulting, SQL, APIs, partners, and deployment.',
    'glossary.kicker': '07 / VOCABULARY',
    'glossary.title': 'Operations glossary.',
    'glossary.intro': 'Terms and acronyms used in the maps.',
    'glossary.filter': 'Filter terms',
    'glossary.placeholder': 'E.g., ASN, inventory, ETA',
    'sources.kicker': 'REFERENCES',
    'sources.title': 'Sources and scope.',
    'sources.intro': 'Topics came from a private conversation; explanations were checked against public sources. The transcript is not published.',
    'footer.tagline': 'Supply chain, warehousing, and transportation.',
    'footer.credit': 'Built with AEKR · Prepared by Codex for edlopezpm-ops.',
    'footer.back': 'Back to top ↑',
    'footer.code': 'View code ↗'
  });

  const requested = new URLSearchParams(window.location.search).get('lang');
  const language = requested === 'en' ? 'en' : 'es';
  window.SCKB_LANG = language;
  document.documentElement.lang = language;
  document.documentElement.dataset.lang = language;

  if (language === 'en') {
    for (const element of document.querySelectorAll('[data-i18n]')) {
      const value = english[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    }
    for (const [attribute, datasetName] of [
      ['aria-label', 'i18nAriaLabel'],
      ['placeholder', 'i18nPlaceholder'],
      ['content', 'i18nContent']
    ]) {
      for (const element of document.querySelectorAll(`[data-${datasetName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`)}]`)) {
        const value = english[element.dataset[datasetName]];
        if (value !== undefined) element.setAttribute(attribute, value);
      }
    }
  }

  function updateLanguageLinks() {
    for (const link of document.querySelectorAll('[data-lang-target]')) {
      const target = link.dataset.langTarget;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', target);
      link.href = `${url.pathname}${url.search}${url.hash}`;
      if (target === language) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  }

  updateLanguageLinks();
  window.addEventListener('hashchange', updateLanguageLinks);
  window.addEventListener('popstate', updateLanguageLinks);
  window.addEventListener('sckb:locationchange', updateLanguageLinks);
  for (const link of document.querySelectorAll('[data-lang-target]')) {
    link.addEventListener('click', updateLanguageLinks);
  }
})();
