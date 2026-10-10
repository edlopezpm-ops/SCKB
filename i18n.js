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
    'nav.systems': 'Systems',
    'nav.architecture': 'Architecture',
    'nav.questions': 'Questions',
    'nav.explore': 'Explore',
    'language.group': 'Site language',
    'hero.eyebrow': 'INTERACTIVE ATLAS · EDITION 01',
    'hero.line1': 'One chain.',
    'hero.line2': 'Many decisions.',
    'hero.lede': 'Follow a fictional order from the initial need to delivery. Open each node to see what moves the product, what information travels, and where a WMS or TMS comes in.',
    'hero.start': 'Start the journey',
    'hero.how': 'How to use the atlas',
    'hero.metricsLabel': 'Atlas contents',
    'hero.modules': 'interactive modules',
    'hero.nodes': 'explorable nodes',
    'hero.plainLanguage': 'plain language',
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
    'orientation.kicker': 'BEFORE YOU BEGIN',
    'orientation.title': 'Three lenses for the same order.',
    'orientation.goods': 'Goods',
    'orientation.goodsQuestion': 'Where is it physically?',
    'orientation.signals': 'Signals',
    'orientation.signalsQuestion': 'What does each system know?',
    'orientation.decisions': 'Decisions',
    'orientation.decisionsQuestion': 'What happens if something changes?',
    'flow.kicker': '01 / FLOW MAPS',
    'flow.title': 'Learn by following the movement.',
    'flow.intro': 'Choose a scale: the full supply chain, the inside of a warehouse, or the transportation journey.',
    'flow.annotationLine1': 'Click any station',
    'flow.annotationLine2': 'to open its key decision',
    'flow.tablistLabel': 'Map scale',
    'flow.tabNetwork': 'Full supply chain',
    'flow.tabWms': 'Inside the WMS',
    'flow.tabTms': 'TMS journey',
    'flow.progressLabel': 'Journey progress',
    'flow.nodeNote': 'EACH NODE OPENS A DETAIL',
    'flow.viewportLabel': 'Horizontal map of stages. Swipe or use Tab to explore the nodes.',
    'flow.swipe': '← SWIPE TO EXPLORE →',
    'flow.previous': 'Previous stage',
    'flow.next': 'Next stage',
    'flow.modelLead': 'Teaching model:',
    'flow.modelBody': 'the lamp example is fictional. Actual sequences and documents vary by product, network, contract, and configuration.',
    'layout.kicker': '02 / WAREHOUSE LAYOUT',
    'layout.title': 'Now, walk the flow.',
    'layout.intro': 'Choose a route and tap the zones in the order the product would travel. The path appears as you progress.',
    'layout.annotationLine1': 'A TEACHING FLOOR PLAN',
    'layout.annotationLine2': 'NOT AN ENGINEERING DESIGN',
    'layout.mission': 'CHOOSE YOUR MISSION',
    'layout.routesLabel': 'Warehouse routes',
    'layout.initialCount': '0 / 0 zones',
    'layout.progressLabel': 'Route progress',
    'layout.hint': 'Hint',
    'layout.reset': 'Reset ↺',
    'layout.swipe': 'Swipe the floor plan right to see all zones →',
    'layout.inboundDock': 'INBOUND DOCK',
    'layout.operations': 'OPERATIONS AREA',
    'layout.outboundDock': 'OUTBOUND DOCK',
    'layout.mapLabel': 'Interactive map of warehouse zones',
    'layout.available': 'Available zone',
    'layout.completed': 'Completed step',
    'layout.varies': 'Routes vary by facility',
    'handoff.kicker': '03 / THE HANDOFF',
    'handoff.title': 'No system works alone.',
    'handoff.intro': 'Execution changes hands, while the order keeps its context.',
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
    'handoff.footnote': 'These boundaries are a reference pattern. In a specific implementation, some functions may live in another system or be integrated differently.',
    'architecture.kicker': '04 / CLASSIC ARCHITECTURE',
    'architecture.title': 'From scanner to decision.',
    'architecture.intro': 'Explore the layers that commonly connect operations, applications, data, and infrastructure.',
    'architecture.annotationLine1': 'A REFERENCE ARCHITECTURE',
    'architecture.annotationLine2': 'NOT A REQUIRED DESIGN',
    'architecture.deploymentTitle': 'On-premises or SaaS?',
    'architecture.deploymentBody': 'This is an operational and contractual decision: infrastructure ownership, change cycles, integrations, security, backup, and recovery need clear owners in either model. The business flow does not change based on where the software runs.',
    'questions.kicker': '05 / REAL QUESTIONS',
    'questions.title': 'The human side of the stack.',
    'questions.intro': 'Questions that often come up when someone first enters supply chain systems, answered without depending on a brand.',
    'glossary.kicker': '06 / VOCABULARY',
    'glossary.title': 'Speak the language of operations.',
    'glossary.intro': 'Short definitions to make the map clearer on your next pass.',
    'glossary.filter': 'Filter terms',
    'glossary.placeholder': 'E.g., ASN, inventory, ETA',
    'sources.kicker': 'TRACEABILITY',
    'sources.title': 'Where each idea comes from.',
    'sources.intro': 'The atlas grew out of questions from a learning conversation. The original conversation remains private. Detailed flows were checked against public industry references; the diagrams are teaching syntheses.',
    'footer.tagline': 'Supply Chain Knowledge Base · Learn the full system.',
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
