// SCKB English study content. The lamp order is fictional.
// Source material informs the concepts; the visual sequence is didactic.
window.SCKB_CONTENT_EN = {
  "sources": {
    "scor": {
      "label": "ASCM · SCOR Digital Standard",
      "url": "https://scor.ascm.org/processes/introduction",
      "scope": "Vendor-neutral framework: Orchestrate, Plan, Order, Source, Transform, Fulfill, and Return."
    },
    "cltd": {
      "label": "ASCM · CLTD Exam Content Manual",
      "url": "https://gnj.ascm.org/downloads/cltd_content_manual_2023.pdf",
      "scope": "Professional body of knowledge for warehousing and transportation. It informs the steps; it does not prescribe software."
    },
    "ascmTms": {
      "label": "ASCM · Supply Chain Dictionary",
      "url": "https://learn.ascm.org/sfc/servlet.shepherd/document/download/069R3000006PlDHIA0?operationContext=S1",
      "scope": "Definitions of transportation management and TMS."
    },
    "ascmDictionary": {
      "label": "ASCM · Supply Chain Dictionary, 18th edition",
      "url": "https://learn.ascm.org/sfc/servlet.shepherd/document/download/069R3000006PlDHIA0?operationContext=S1",
      "scope": "Definitions of CRM, YMS, advanced planning, and manufacturing execution; vocabulary, not mandatory modules."
    },
    "ascmWarehouseOps": {
      "label": "ASCM · Warehouse Operations: systems and roles",
      "url": "https://jobs.ascm.org/career-resources/find-the-job-1/warehouse-operations-careers-2026-49",
      "scope": "Professional overview of WMS and adjacent yard and labor systems; not an architecture standard."
    },
    "gs1Systems": {
      "label": "GS1 · Retail POS and Backend Systems Guide",
      "url": "https://ref.gs1.org/sme-guidance/2d-retail-systems-playbook/",
      "scope": "Retail-sector example covering ERP, inventory, fulfillment, WMS, data capture, and returns; not a universal architecture."
    },
    "gs1Label": {
      "label": "GS1 · Logistic Label Guideline",
      "url": "https://www.gs1.org/standards/gs1-logistic-label-guideline/1-3",
      "scope": "Relationship among the dispatch advice, SSCC label, receipt, and physical confirmation."
    },
    "gs1Delivery": {
      "label": "GS1 · Standards for Delivery Management",
      "url": "https://www.gs1.org/docs/tl/GS1Standards_DeliveryManagement.pdf",
      "scope": "Master-data alignment, dispatch advice/ASN, and comparison with what was physically received."
    },
    "x856": {
      "label": "X12 · 856 Ship Notice/Manifest",
      "url": "https://x12.org/node/4398",
      "scope": "EDI example for the content and hierarchy of an advance shipping notice."
    },
    "oracleAutomation": {
      "label": "Oracle · Warehouse automation flows",
      "url": "https://docs.oracle.com/en/cloud/saas/warehouse-management/26a/owmol/wms-apis-that-support-mhe-configuration.html",
      "scope": "Illustrative WMS-to-MHE messages for waves, diversion, physical confirmation, and distribution; not a SCALE specification."
    },
    "usBol": {
      "label": "U.S. Customs and Border Protection · Bill of Lading",
      "url": "https://www.help.cbp.gov/s/article/Article-1216?language=en_US",
      "scope": "U.S. example of BOL purpose and fields; obligations and format depend on mode and jurisdiction."
    },
    "gs1Keys": {
      "label": "GS1 · Identification Keys",
      "url": "https://www.gs1.org/standards/id-keys",
      "scope": "Possible identifiers for items, places, logistic units, and shipments."
    },
    "gs1Edi": {
      "label": "GS1 · Electronic Data Interchange",
      "url": "https://www.gs1.org/standards/edi",
      "scope": "Business messages such as orders, dispatch advice, and invoices; one integration family."
    },
    "epcis": {
      "label": "GS1 · EPCIS and CBV",
      "url": "https://ref.gs1.org/guidelines/epcis-cbv/",
      "scope": "Visibility and parent-child aggregation events, such as cartons grouped onto a pallet."
    },
    "x940": {
      "label": "X12 · 940 Warehouse Shipping Order",
      "url": "https://x12.org/node/4444",
      "scope": "EDI example of a warehouse shipping instruction."
    },
    "x945": {
      "label": "X12 · 945 Warehouse Shipping Advice",
      "url": "https://x12.org/node/4447",
      "scope": "EDI example confirming what was actually shipped."
    },
    "x204": {
      "label": "X12 · 204 Motor Carrier Load Tender",
      "url": "https://x12.org/node/4207",
      "scope": "EDI example of tendering a truckload to a road carrier."
    },
    "x214": {
      "label": "X12 · 214 Shipment Status Message",
      "url": "https://x12.org/node/4214",
      "scope": "EDI example of shipment status reported by a carrier."
    },
    "x210": {
      "label": "X12 · 210 Motor Carrier Freight Details and Invoice",
      "url": "https://x12.org/node/4210",
      "scope": "EDI example of road freight charges and invoicing."
    },
    "openapi": {
      "label": "OpenAPI Initiative · OpenAPI Specification",
      "url": "https://spec.openapis.org/oas/latest.html",
      "scope": "Vendor-neutral format for describing HTTP interfaces; one integration option."
    },
    "cloudEvents": {
      "label": "CNCF · CloudEvents Specification",
      "url": "https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md",
      "scope": "Interoperable event format with an identifier and source; one integration option."
    },
    "nistCloud": {
      "label": "NIST · Definition of Cloud Computing",
      "url": "https://csrc.nist.gov/pubs/sp/800/145/final",
      "scope": "Definition of cloud computing and service models, including SaaS."
    },
    "nistCsf": {
      "label": "NIST · Cybersecurity Framework 2.0",
      "url": "https://www.nist.gov/cyberframework",
      "scope": "Functions for governance, identification, protection, detection, response, and recovery."
    },
    "postgres": {
      "label": "PostgreSQL · Querying a Table",
      "url": "https://www.postgresql.org/docs/current/tutorial-select.html",
      "scope": "Example of an SQL query. SQL does not imply a specific vendor or direct production access."
    },
    "javascript": {
      "label": "MDN · JavaScript",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "scope": "Language used in web interfaces and other environments."
    },
    "scale": {
      "label": "SCALE Intelligence · reference repository",
      "url": "https://github.com/edlopezpm-ops/scale-intelligence",
      "scope": "Reference for study coverage and vocabulary; not an industry standard."
    }
  },
  "journeys": [
    {
      "id": "network",
      "title": "The end-to-end chain",
      "eyebrow": "01 · End-to-end process",
      "lede": "An order for 12 lamps connects sourcing, warehousing, transportation, and returns.",
      "scope": "SCOR describes capabilities, not a required sequence. A distributor may omit Transform; systems and owners vary.",
      "nodes": [
        {
          "id": "net-plan",
          "title": "Plan demand and capacity",
          "tag": "PLAN",
          "summary": "Expected demand is compared with inventory, supply, time, and capacity.",
          "inputs": [
            "Forecast and orders",
            "Available inventory and capacity"
          ],
          "actions": [
            "Estimate requirements",
            "Resolve shortages or surpluses"
          ],
          "outputs": [
            "Purchasing, production, or distribution plan"
          ],
          "decision": "Can we serve 12 lamps by the requested date?",
          "exception": "If material or capacity is short, revise the plan and the promise date.",
          "systems": [
            "Planning",
            "ERP"
          ],
          "sourceIds": [
            "scor",
            "cltd"
          ],
          "checkpoint": "What changes first: demand, inventory, or the date commitment?"
        },
        {
          "id": "net-order",
          "title": "Receive and promise the order",
          "tag": "ORDER",
          "summary": "The customer asks for 12 lamps; validate what, how many, where, and when.",
          "inputs": [
            "Customer order",
            "Availability and commercial rules"
          ],
          "actions": [
            "Validate details",
            "Confirm or renegotiate the promise"
          ],
          "outputs": [
            "Accepted order",
            "Committed date and destination"
          ],
          "decision": "How many units are free of reservations or holds?",
          "exception": "A reserved or held unit must not be promised again.",
          "systems": [
            "OMS or fulfillment layer",
            "ERP"
          ],
          "sourceIds": [
            "scor",
            "gs1Systems"
          ],
          "checkpoint": "Why can “in stock” and “available for this order” differ?"
        },
        {
          "id": "net-source",
          "title": "Source supply",
          "tag": "SOURCE",
          "summary": "Buy or transfer the needed units from a supplier or another facility.",
          "inputs": [
            "Supply plan",
            "Supplier and item data"
          ],
          "actions": [
            "Issue an order",
            "Coordinate arrival",
            "Receive and verify"
          ],
          "outputs": [
            "Received product",
            "Recorded discrepancies"
          ],
          "decision": "Did all 24 announced lamps arrive and meet the agreed requirements?",
          "exception": "A shortage, damage, or wrong item requires reconciliation before stock is released.",
          "systems": [
            "ERP",
            "WMS",
            "Supplier"
          ],
          "sourceIds": [
            "scor",
            "gs1Label"
          ],
          "checkpoint": "What is the difference between announced and actually received quantity?"
        },
        {
          "id": "net-transform",
          "title": "Transform, if applicable",
          "tag": "TRANSFORM",
          "summary": "Manufacturing, assembly, or finishing changes a product before sale.",
          "inputs": [
            "Materials",
            "Manufacturing or service order"
          ],
          "actions": [
            "Produce or assemble",
            "Inspect and release"
          ],
          "outputs": [
            "Finished, released lamps"
          ],
          "decision": "Does this business manufacture, assemble, or only distribute?",
          "exception": "A unit that fails inspection does not enter sellable stock.",
          "systems": [
            "ERP",
            "MES or shop-floor control, if applicable"
          ],
          "sourceIds": [
            "scor"
          ],
          "checkpoint": "Which stage disappears if the lamps arrive finished?"
        },
        {
          "id": "net-fulfill",
          "title": "Fulfill the order",
          "tag": "FULFILL",
          "summary": "Allocate, locate, pick, pack, and prepare 12 lamps for dispatch.",
          "inputs": [
            "Released order",
            "Eligible stock"
          ],
          "actions": [
            "Allocate inventory",
            "Pick and pack",
            "Confirm loading"
          ],
          "outputs": [
            "Parcel or pallet ready",
            "Actual quantity shipped"
          ],
          "decision": "Were exactly 12 correct units prepared?",
          "exception": "A picking shortage triggers a search, authorized substitution, or partial order.",
          "systems": [
            "WMS",
            "OMS",
            "ERP"
          ],
          "sourceIds": [
            "scor",
            "gs1Systems",
            "x940",
            "x945"
          ],
          "checkpoint": "What does a physical scan confirm that the digital order alone cannot?"
        },
        {
          "id": "net-deliver",
          "title": "Transport and deliver",
          "tag": "DELIVERY",
          "summary": "The load leaves the dock, its progress is monitored, and delivery closes with evidence.",
          "inputs": [
            "Ready load",
            "Destination and delivery window"
          ],
          "actions": [
            "Plan transportation",
            "Assign a carrier",
            "Track milestones"
          ],
          "outputs": [
            "Delivery or exception",
            "Proof of delivery"
          ],
          "decision": "Was the full order delivered within the commitment?",
          "exception": "A delay triggers a notice, revised ETA, and exception handling.",
          "systems": [
            "TMS",
            "Carrier",
            "OMS"
          ],
          "sourceIds": [
            "cltd",
            "x214",
            "scor"
          ],
          "checkpoint": "Who knows the physical status after the load leaves the warehouse?"
        },
        {
          "id": "net-return",
          "title": "Resolve a return",
          "tag": "RETURN",
          "summary": "A returned lamp is authorized, received, inspected, and dispositioned.",
          "inputs": [
            "Return request",
            "Original order and product"
          ],
          "actions": [
            "Validate",
            "Receive",
            "Decide whether to restock, repair, recycle, or discard"
          ],
          "outputs": [
            "Tracked disposition",
            "Adjusted inventory and financial records"
          ],
          "decision": "Can the unit return to sellable stock?",
          "exception": "Keep a damaged or unverified unit separate until its disposition is decided.",
          "systems": [
            "OMS",
            "WMS",
            "ERP",
            "TMS, if reverse transport is needed"
          ],
          "sourceIds": [
            "scor",
            "gs1Systems"
          ],
          "checkpoint": "Why does “returned” not automatically mean “available”?"
        },
        {
          "id": "net-orchestrate",
          "title": "Govern and improve",
          "tag": "ORCHESTRATE",
          "summary": "Rules, data, risks, and measures connect every stage.",
          "inputs": [
            "Order outcomes",
            "Exceptions and costs"
          ],
          "actions": [
            "Review performance",
            "Correct rules and master data"
          ],
          "outputs": [
            "Better promises, inventory, and service"
          ],
          "decision": "Does the problem originate in operations or in incorrect shared data?",
          "exception": "A wrongly configured unit of measure can distort purchasing, stock, and freight alike.",
          "systems": [
            "ERP",
            "BI",
            "Data governance"
          ],
          "sourceIds": [
            "scor",
            "gs1Systems"
          ],
          "checkpoint": "What evidence do you need before changing a rule?"
        }
      ]
    },
    {
      "id": "wms",
      "title": "Inside the warehouse · WMS",
      "eyebrow": "02 · Warehouse operations",
      "lede": "A WMS directs movements and records where each eligible unit is. Goods announced for delivery have not yet been received.",
      "scope": "Receiving, inventory, and shipping; controls and system boundaries vary by operation.",
      "nodes": [
        {
          "id": "wms-prep",
          "title": "Prepare for receiving",
          "tag": "INBOUND",
          "summary": "Advance notice lets the team expect 24 lamps and plan inbound resources.",
          "inputs": [
            "Purchase or transfer order",
            "Dispatch advice / ASN"
          ],
          "actions": [
            "Validate expected items and quantities",
            "Schedule dock and shift"
          ],
          "outputs": [
            "Expected receipt"
          ],
          "decision": "Do the items, units of measure, and destination match?",
          "exception": "With unreliable data, the team receives with additional verification.",
          "systems": [
            "ERP",
            "WMS",
            "YMS/appointments, if present"
          ],
          "sourceIds": [
            "gs1Label",
            "gs1Systems"
          ],
          "checkpoint": "Does an ASN prove the goods have arrived?"
        },
        {
          "id": "wms-receive",
          "title": "Unload and record",
          "tag": "RECEIPT",
          "summary": "Operators count or scan what actually reaches the dock.",
          "inputs": [
            "24 announced lamps",
            "Labels or identifiers"
          ],
          "actions": [
            "Unload",
            "Scan",
            "Reconcile physical units against the notice"
          ],
          "outputs": [
            "Actual receipt with time, quantity, and reference"
          ],
          "decision": "Did all 24 correct units arrive?",
          "exception": "If 23 arrive, record 23 and open a discrepancy; do not invent the missing unit.",
          "systems": [
            "WMS",
            "RF handheld or scanner"
          ],
          "sourceIds": [
            "gs1Label",
            "gs1Systems",
            "gs1Keys"
          ],
          "checkpoint": "What number belongs in the system if 23 of 24 arrive?"
        },
        {
          "id": "wms-quality",
          "title": "Inspect and segregate",
          "tag": "CONTROL",
          "summary": "Damage, lot, serial number, or restrictions may block part of a receipt.",
          "inputs": [
            "Actual receipt",
            "Quality and eligibility rules"
          ],
          "actions": [
            "Inspect",
            "Classify as available, held, or rejected"
          ],
          "outputs": [
            "Eligible stock",
            "Tracked exceptions"
          ],
          "decision": "Are the 12 lamps for this order in sellable condition?",
          "exception": "A damaged unit goes to quarantine and is excluded from the sales promise.",
          "systems": [
            "WMS",
            "Quality",
            "ERP"
          ],
          "sourceIds": [
            "gs1Systems",
            "cltd"
          ],
          "checkpoint": "Why are “received” and “available” different states?"
        },
        {
          "id": "wms-putaway",
          "title": "Put away",
          "tag": "PUT-AWAY",
          "summary": "The system assigns a location and confirms that the goods reached it.",
          "inputs": [
            "Accepted stock",
            "Capacity and slotting rules"
          ],
          "actions": [
            "Choose a destination",
            "Move",
            "Confirm item and location"
          ],
          "outputs": [
            "Located inventory"
          ],
          "decision": "Where will it fit and remain safe to retrieve?",
          "exception": "A scan at the wrong location needs correction before picking.",
          "systems": [
            "WMS",
            "RF handheld"
          ],
          "sourceIds": [
            "gs1Systems",
            "cltd"
          ],
          "checkpoint": "What data lets you find the lamp later?"
        },
        {
          "id": "wms-control",
          "title": "Keep inventory trustworthy",
          "tag": "INVENTORY",
          "summary": "Movements, counts, and replenishment keep operational stock aligned with reality.",
          "inputs": [
            "Balance by location",
            "Physical count and demand"
          ],
          "actions": [
            "Replenish the pick face",
            "Cycle count",
            "Investigate discrepancies"
          ],
          "outputs": [
            "Corrected stock with an audit trail"
          ],
          "decision": "Does the location hold what the WMS says it holds?",
          "exception": "Investigate a discrepancy and make an authorized adjustment; never change a figure silently.",
          "systems": [
            "WMS",
            "ERP for reconciliation"
          ],
          "sourceIds": [
            "cltd",
            "gs1Systems"
          ],
          "checkpoint": "Why does a useful count need the cause of a discrepancy?"
        },
        {
          "id": "wms-release",
          "title": "Release work",
          "tag": "FULFILL",
          "summary": "The 12-lamp order becomes warehouse tasks.",
          "inputs": [
            "Accepted order",
            "Eligible stock and priority rules"
          ],
          "actions": [
            "Allocate units",
            "Sequence tasks",
            "Replenish if needed"
          ],
          "outputs": [
            "Picking instruction"
          ],
          "decision": "Are 12 eligible units accessible in the right zone?",
          "exception": "If the location is empty, search, replenish, or report a shortage.",
          "systems": [
            "OMS/ERP",
            "WMS"
          ],
          "sourceIds": [
            "gs1Systems",
            "x940",
            "cltd"
          ],
          "checkpoint": "How is a customer order different from a picking task?"
        },
        {
          "id": "wms-pick",
          "title": "Pick and confirm",
          "tag": "PICK",
          "summary": "The operator picks 12 correct lamps and confirms item, quantity, and location.",
          "inputs": [
            "Picking task",
            "Physical units"
          ],
          "actions": [
            "Go to location",
            "Pick",
            "Scan and confirm"
          ],
          "outputs": [
            "12 picked units or an explicit shortage"
          ],
          "decision": "Do the product and quantity match the task?",
          "exception": "A short pick cannot be confirmed as 12 units without physical evidence.",
          "systems": [
            "WMS",
            "RF handheld"
          ],
          "sourceIds": [
            "gs1Systems",
            "cltd"
          ],
          "checkpoint": "What should be recorded if only 11 are found?"
        },
        {
          "id": "wms-pack",
          "title": "Pack and stage",
          "tag": "PACK / STAGE",
          "summary": "Verify contents, label the logistic unit, and move it to outbound staging.",
          "inputs": [
            "12 picked lamps",
            "Destination and packing requirements"
          ],
          "actions": [
            "Check",
            "Pack",
            "Label",
            "Move to the assigned dock"
          ],
          "outputs": [
            "Ready parcel",
            "Logistic-unit identifier, if used"
          ],
          "decision": "Do the parcel and label represent the actual contents?",
          "exception": "A label for another order could send the lamps to the wrong destination.",
          "systems": [
            "WMS",
            "Printer/scanner",
            "TMS for appointment or load"
          ],
          "sourceIds": [
            "gs1Label",
            "gs1Keys",
            "cltd"
          ],
          "checkpoint": "Does an SSCC identify a lamp type or this specific parcel?"
        },
        {
          "id": "wms-ship",
          "title": "Load and confirm dispatch",
          "tag": "SHIP",
          "summary": "Check which parcel enters the vehicle and publish what actually shipped.",
          "inputs": [
            "Staged parcel",
            "Assigned vehicle/load"
          ],
          "actions": [
            "Scan at loading",
            "Close the shipment",
            "Report actual quantity"
          ],
          "outputs": [
            "Shipping confirmation",
            "Handoff to transportation"
          ],
          "decision": "Did the 12 lamps go into the correct vehicle?",
          "exception": "Report a partial dispatch as partial; reconcile the order with what shipped.",
          "systems": [
            "WMS",
            "TMS",
            "ERP/OMS"
          ],
          "sourceIds": [
            "scor",
            "x945",
            "gs1Label"
          ],
          "checkpoint": "What operational responsibility changes when the vehicle leaves?"
        }
      ]
    },
    {
      "id": "tms",
      "title": "Between locations · TMS",
      "eyebrow": "03 · Transportation",
      "lede": "A TMS organizes transportation for the 12 lamps: cost, capacity, service, status, and settlement.",
      "scope": "This example uses road freight. Documents and messages differ for parcel, ocean, rail, and air.",
      "nodes": [
        {
          "id": "tms-demand",
          "title": "Receive transportation demand",
          "tag": "REQUEST",
          "summary": "A delivery order becomes a transportation need with origin, destination, and time window.",
          "inputs": [
            "Ready or planned order",
            "Origin, destination, volume, and date"
          ],
          "actions": [
            "Validate constraints",
            "Create transportation demand"
          ],
          "outputs": [
            "Shipment ready to plan"
          ],
          "decision": "Will the 12 lamps be ready before the pickup window?",
          "exception": "If the warehouse cannot meet it, revisit the appointment and customer promise.",
          "systems": [
            "OMS/ERP",
            "WMS",
            "TMS"
          ],
          "sourceIds": [
            "cltd",
            "scor"
          ],
          "checkpoint": "Can transportation be booked before picking is finished?"
        },
        {
          "id": "tms-plan",
          "title": "Plan load and route",
          "tag": "PLAN",
          "summary": "Evaluate consolidation, mode, route, capacity, cost, and service.",
          "inputs": [
            "Shipment",
            "Rates, capacity, and time windows"
          ],
          "actions": [
            "Consolidate where useful",
            "Compare options",
            "Select a plan"
          ],
          "outputs": [
            "Proposed route, mode, and load"
          ],
          "decision": "Should the 12 lamps travel alone or with other orders?",
          "exception": "The cheapest option may miss the date or a handling requirement.",
          "systems": [
            "TMS",
            "Carrier data"
          ],
          "sourceIds": [
            "cltd",
            "ascmTms"
          ],
          "checkpoint": "What changes when you prioritize speed over cost?"
        },
        {
          "id": "tms-tender",
          "title": "Tender and confirm",
          "tag": "TENDER",
          "summary": "Request capacity from a carrier and confirm who will move the load.",
          "inputs": [
            "Load plan",
            "Service terms"
          ],
          "actions": [
            "Send a tender",
            "Record acceptance or rejection",
            "Reassign if needed"
          ],
          "outputs": [
            "Confirmed carrier and capacity"
          ],
          "decision": "Did the carrier accept within the required time and terms?",
          "exception": "If the carrier rejects the load, select another; no vehicle is confirmed yet.",
          "systems": [
            "TMS",
            "Carrier"
          ],
          "sourceIds": [
            "cltd",
            "x204"
          ],
          "checkpoint": "Is planning a load the same as having it accepted?"
        },
        {
          "id": "tms-pickup",
          "title": "Coordinate pickup",
          "tag": "PICKUP",
          "summary": "Warehouse and carrier align dock, vehicle, documents, and actual load.",
          "inputs": [
            "Appointment and vehicle",
            "Physical parcel and WMS confirmation"
          ],
          "actions": [
            "Verify load",
            "Document",
            "Record departure"
          ],
          "outputs": [
            "Load in transit",
            "Actual departure time"
          ],
          "decision": "Was the assigned logistic unit actually loaded?",
          "exception": "Resolve any manifest-versus-physical-load difference before closing departure.",
          "systems": [
            "TMS",
            "WMS",
            "Carrier",
            "YMS, if present"
          ],
          "sourceIds": [
            "cltd",
            "gs1Label"
          ],
          "checkpoint": "Where do WMS and TMS meet?"
        },
        {
          "id": "tms-track",
          "title": "Track and manage exceptions",
          "tag": "IN TRANSIT",
          "summary": "Transit milestones update status and ETA; a deviation calls for action.",
          "inputs": [
            "Confirmed departure",
            "Carrier milestones"
          ],
          "actions": [
            "Monitor",
            "Compare with plan",
            "Notify and replan"
          ],
          "outputs": [
            "Status and ETA",
            "Assigned exceptions"
          ],
          "decision": "Is delivery still within the commitment?",
          "exception": "A delay brings a new ETA and reason; it does not itself change warehouse stock.",
          "systems": [
            "TMS",
            "Carrier",
            "OMS/customer service"
          ],
          "sourceIds": [
            "cltd",
            "x214",
            "epcis"
          ],
          "checkpoint": "Which event distinguishes “departed” from “delivered”?"
        },
        {
          "id": "tms-deliver",
          "title": "Confirm delivery",
          "tag": "POD",
          "summary": "The recipient takes delivery; record time, quantity, condition, and acceptance.",
          "inputs": [
            "Arrival at destination",
            "Parcel and documents"
          ],
          "actions": [
            "Deliver",
            "Capture proof of delivery",
            "Record discrepancy"
          ],
          "outputs": [
            "Confirmed delivery or claim"
          ],
          "decision": "Did the customer receive all 12 lamps without damage?",
          "exception": "A signature for 11 received units is not complete delivery of 12.",
          "systems": [
            "Carrier",
            "TMS",
            "OMS/ERP"
          ],
          "sourceIds": [
            "cltd",
            "scor",
            "x214"
          ],
          "checkpoint": "What evidence closes the delivery commitment?"
        },
        {
          "id": "tms-settle",
          "title": "Reconcile cost and close",
          "tag": "SETTLEMENT",
          "summary": "Compare contracted service, actual trip, charges, and exceptions.",
          "inputs": [
            "Agreed rate",
            "Milestones/POD",
            "Freight invoice"
          ],
          "actions": [
            "Audit charges",
            "Resolve discrepancies",
            "Authorize payment"
          ],
          "outputs": [
            "Reconciled freight",
            "Cost data for analysis"
          ],
          "decision": "Does the charge match the service delivered and the agreement?",
          "exception": "Investigate an unexpected surcharge before approving it.",
          "systems": [
            "TMS",
            "ERP/finance",
            "Carrier"
          ],
          "sourceIds": [
            "cltd",
            "x210"
          ],
          "checkpoint": "Why might the trip end before the administrative process does?"
        }
      ]
    }
  ],
  "architecture": [
    {
      "id": "master-data",
      "title": "Shared data",
      "subtitle": "Shared identifiers and rules",
      "description": "Item, unit of measure, location, trading partner, lot, and status must mean the same thing across systems. GTIN, GLN, and SSCC are GS1 identifiers when adopted; internal IDs may also exist.",
      "examples": [
        "12 lamps ≠ 12 boxes",
        "A warehouse bin ≠ a delivery address"
      ],
      "sourceIds": [
        "gs1Keys",
        "gs1Systems"
      ]
    },
    {
      "id": "erp",
      "title": "ERP",
      "subtitle": "Enterprise commitments and records",
      "description": "Coordinates purchasing, finance, master data, and business records. Exact ownership of orders and inventory depends on the company.",
      "examples": [
        "Purchase order",
        "Invoice",
        "Inventory value"
      ],
      "sourceIds": [
        "gs1Systems",
        "cltd"
      ]
    },
    {
      "id": "oms",
      "title": "OMS / fulfillment",
      "subtitle": "Decide where fulfillment happens",
      "description": "Receives demand and decides promise, reservation, and fulfillment location when multiple sites or channels exist. It may be a module within another system.",
      "examples": [
        "Which site will fulfill the 12 lamps?",
        "Available to promise vs. reserved"
      ],
      "sourceIds": [
        "gs1Systems",
        "scor"
      ]
    },
    {
      "id": "wms",
      "title": "WMS",
      "subtitle": "Execute inside the building",
      "description": "Directs receiving, put-away, storage, picking, packing, and shipping; confirms physical movements and exceptions.",
      "examples": [
        "Receipt scan",
        "Picking task",
        "Shipping confirmation"
      ],
      "sourceIds": [
        "gs1Systems",
        "cltd"
      ]
    },
    {
      "id": "tms",
      "title": "TMS",
      "subtitle": "Move between locations",
      "description": "Plans transportation, evaluates options, coordinates carriers, tracks milestones, and reconciles costs. It may cover inbound and outbound moves.",
      "examples": [
        "Route and load",
        "Tender",
        "ETA",
        "Freight invoice"
      ],
      "sourceIds": [
        "ascmTms",
        "cltd"
      ]
    },
    {
      "id": "integration",
      "title": "Integration",
      "subtitle": "Contracts between systems",
      "description": "EDI, HTTP APIs, and events are possible patterns for exchanging orders, confirmations, and status. Defining fields, ownership, timing, errors, and retries matters more than the chosen format.",
      "examples": [
        "X12 940/945",
        "API described with OpenAPI",
        "Event with source and ID"
      ],
      "sourceIds": [
        "gs1Edi",
        "x940",
        "x945",
        "openapi",
        "cloudEvents"
      ]
    },
    {
      "id": "capture",
      "title": "Physical data capture",
      "subtitle": "Record physical movements",
      "description": "Scanners, RF handhelds, labels, or automation record what was handled and where. The right technology depends on volume, process, and cost.",
      "examples": [
        "GTIN for the item",
        "SSCC for the logistic unit",
        "Location scan"
      ],
      "sourceIds": [
        "gs1Systems",
        "gs1Label",
        "gs1Keys"
      ]
    },
    {
      "id": "analytics",
      "title": "Data and analytics",
      "subtitle": "Metrics and reconciliation",
      "description": "Order, inventory, and transportation records feed reconciliation, traceability, and metrics. A dashboard is only as reliable as its definitions and source events.",
      "examples": [
        "On-time, in-full orders",
        "Inventory accuracy",
        "Freight variance"
      ],
      "sourceIds": [
        "scor",
        "gs1Systems",
        "epcis"
      ]
    },
    {
      "id": "crm",
      "title": "CRM and customer service",
      "subtitle": "Customer context, where relevant",
      "description": "May bring together accounts, inquiries, catalog information, and sales signals that feed order management. Its scope varies; it does not replace WMS physical confirmation or TMS tracking.",
      "examples": [
        "Record the customer account",
        "Capture the request for 12 lamps"
      ],
      "sourceIds": [
        "ascmDictionary",
        "scor"
      ]
    },
    {
      "id": "yard-labor",
      "title": "Yard and labor",
      "subtitle": "Optional YMS and labor management",
      "description": "A YMS can coordinate vehicles in the yard. A labor management tool can compare completed work with standards and report warehouse performance. These may be embedded functions or separate systems.",
      "examples": [
        "Locate the truck before docking",
        "Review picking-task performance"
      ],
      "sourceIds": [
        "ascmDictionary",
        "ascmWarehouseOps"
      ]
    },
    {
      "id": "planning-production",
      "title": "Planning and production",
      "subtitle": "APS and MES when needed",
      "description": "Advanced planning can assess demand, capacity, and scenarios. Manufacturing execution can control and record plant operations. A distributor of finished lamps may not use the production portion.",
      "examples": [
        "Assess whether 12 lamps will be available on time",
        "Record assembly and release if manufactured"
      ],
      "sourceIds": [
        "ascmDictionary",
        "scor"
      ]
    },
    {
      "id": "platform",
      "title": "Platform operations",
      "subtitle": "On premises, SaaS, or hybrid",
      "description": "Hosting, access, monitoring, backup, and recovery support the flow. Cloud describes a service model; it does not by itself change the meaning of receiving, shipping, or delivering.",
      "examples": [
        "Identity management",
        "Interface monitoring",
        "Recovery plan"
      ],
      "sourceIds": [
        "nistCloud",
        "nistCsf"
      ]
    }
  ],
  "glossary": [
    {
      "term": "Supply chain",
      "definition": "A network of decisions and movements from supply to the customer and, when relevant, returns."
    },
    {
      "term": "SCOR",
      "definition": "An ASCM framework for describing supply-chain processes, performance, and improvement."
    },
    {
      "term": "ERP",
      "definition": "A system coordinating enterprise processes and records such as purchasing, master data, and finance."
    },
    {
      "term": "OMS",
      "definition": "Order management: capture, promising, and orchestration of fulfillment."
    },
    {
      "term": "WMS",
      "definition": "Management of operations and inventory inside a warehouse."
    },
    {
      "term": "TMS",
      "definition": "Management of transportation planning and execution."
    },
    {
      "term": "SKU",
      "definition": "An internal code for a product variant an organization holds in inventory."
    },
    {
      "term": "GTIN",
      "definition": "A GS1 identifier for a trade-item type; by itself it does not identify an individual unit."
    },
    {
      "term": "GLN",
      "definition": "A GS1 identifier that can represent an entity, function, or location."
    },
    {
      "term": "SSCC",
      "definition": "A GS1 identifier for a specific logistic unit, such as a pallet or parcel."
    },
    {
      "term": "Purchase order",
      "definition": "A commercial instruction to buy goods or services under agreed terms."
    },
    {
      "term": "ASN",
      "definition": "Advance shipping notice: describes what is expected to arrive; validate it against actual receipt."
    },
    {
      "term": "On-hand",
      "definition": "Physical quantity recorded at a location or across a network at a given time."
    },
    {
      "term": "Available to promise",
      "definition": "Quantity that can be committed to demand under reservations and business rules; not always equal to on-hand."
    },
    {
      "term": "Reserved",
      "definition": "Inventory set aside for a specific need before physical dispatch."
    },
    {
      "term": "Put-away",
      "definition": "Movement from receiving to a confirmed storage location."
    },
    {
      "term": "Replenishment",
      "definition": "Restocking a pick face or another operating location from reserve inventory."
    },
    {
      "term": "Cycle count",
      "definition": "Periodic counting of a subset of inventory to find and explain discrepancies."
    },
    {
      "term": "Picking",
      "definition": "Taking and confirming specific units to fulfill an order."
    },
    {
      "term": "Packing",
      "definition": "Verifying and packing picked units for shipment."
    },
    {
      "term": "Staging",
      "definition": "Temporary area where a load is assembled before departure."
    },
    {
      "term": "FIFO",
      "definition": "First in, first out: a stock-rotation rule when appropriate for the product and process."
    },
    {
      "term": "FEFO",
      "definition": "First expiring, first out: useful when expiration dates are controlled."
    },
    {
      "term": "Tender",
      "definition": "Offering a load to a carrier for acceptance and transportation."
    },
    {
      "term": "ETA",
      "definition": "Estimated time of arrival; a prediction that should be updated as conditions change."
    },
    {
      "term": "POD",
      "definition": "Proof of delivery: evidence of receipt and any discrepancies or damage."
    },
    {
      "term": "Freight audit",
      "definition": "Review of transportation charges against the agreement, trip, and evidence."
    },
    {
      "term": "EDI",
      "definition": "Structured electronic exchange of business documents between trading partners."
    },
    {
      "term": "API",
      "definition": "A contract through which one system requests or provides information to another."
    },
    {
      "term": "Event",
      "definition": "A record of something that happened, such as received, loaded, or delivered."
    },
    {
      "term": "EPCIS",
      "definition": "A GS1 standard for sharing object-visibility events across the supply chain."
    },
    {
      "term": "3PL",
      "definition": "A third party providing contracted logistics services, such as warehousing or transportation."
    },
    {
      "term": "SQL",
      "definition": "A language for querying and working with relational data; access is governed by permissions and controls."
    },
    {
      "term": "JavaScript",
      "definition": "A programming language used, among other things, to create interactive web interfaces."
    }
  ],
  "questions": [
    {
      "question": "What does a supply-chain consultant or systems integrator do?",
      "answer": "Translates a real process into rules, data, interfaces, and tests. Clarifies who decides, who executes, and what evidence confirms each step; adapts a system without mistaking its configuration for the business process.",
      "example": "Defines how an order for 12 lamps moves from OMS to WMS and how the quantity actually shipped returns to ERP.",
      "sourceIds": [
        "scor",
        "gs1Systems",
        "scale"
      ]
    },
    {
      "question": "What is SQL useful for in this work?",
      "answer": "It helps query and reconcile orders, movements, statuses, and discrepancies. Data structures vary by product, and production access must follow permissions and controls; knowing SQL does not mean freely editing data.",
      "example": "Compare 12 ordered lamps with 11 confirmed picks and find the event explaining the difference.",
      "sourceIds": [
        "postgres",
        "gs1Systems"
      ]
    },
    {
      "question": "Where does JavaScript fit?",
      "answer": "It can build a web interface, validate inputs, or coordinate service calls. It is not a WMS or TMS requirement; implementations use many languages and platforms.",
      "example": "A screen shows received → put away → picked → shipped using data from a service.",
      "sourceIds": [
        "javascript",
        "openapi"
      ]
    },
    {
      "question": "What is an API, and when is it used?",
      "answer": "An API is a contract for exchanging capabilities or data between systems. It can create a request, check status, or confirm an outcome. An HTTP API documented with OpenAPI is one option alongside EDI and events.",
      "example": "The OMS checks availability before promising 12 lamps; the WMS later reports what actually shipped.",
      "sourceIds": [
        "openapi",
        "gs1Edi",
        "cloudEvents"
      ]
    },
    {
      "question": "What do third parties do?",
      "answer": "A supplier, 3PL, and carrier may each execute different stages. Agreements define data, timing, and responsibilities; receiving a message does not replace physical confirmation.",
      "example": "The supplier announces 24 lamps, the 3PL receives 23, and the carrier delivers a parcel to the customer.",
      "sourceIds": [
        "scor",
        "gs1Label",
        "cltd"
      ]
    },
    {
      "question": "What changes between on-premises systems and SaaS?",
      "answer": "Ownership of infrastructure and application operations, integration mechanisms, and management of access, continuity, and data may change. Receiving, picking, and transporting still pose the same business questions.",
      "example": "Both models must establish whether all 12 lamps shipped; hosting and operating mechanisms differ.",
      "sourceIds": [
        "nistCloud",
        "nistCsf"
      ]
    },
    {
      "question": "Why do master data and events matter so much?",
      "answer": "Master data defines items, units, and locations. Events record what happened and when. If either fails, inventory, promises, traceability, and freight may produce conflicting results.",
      "example": "Twelve “boxes” entered as twelve “units” distort the promise; a missing departure scan leaves the shipment without evidence.",
      "sourceIds": [
        "gs1Keys",
        "epcis",
        "gs1Systems"
      ]
    }
  ],
  "runtimeGame": {
    "scenario": {
      "title": "Warehouse shift: 12 lamps for one store",
      "summary": "A supplier announces four cases of LMP-42. Two orders await fulfillment for Central Store. Check the data, receive the goods, and confirm what ships.",
      "footnote": "Fictional exercise; no real transactions are recorded. Rules, equipment, and documents vary by operation."
    },
    "stages": [
      {
        "id": "master",
        "phase": "Preparation",
        "title": "Set up item master",
        "brief": "The WMS needs to identify the item and convert cases into eaches.",
        "task": "Which master-data record supports a correct ASN read?",
        "evidence": ["SKU: LMP-42", "Base unit: EA (each)", "1 case = 6 EA"],
        "choices": [
          { "label": "Record 1 case as 1 EA.", "correct": false, "feedback": "That conversion would turn four cases into four units and distort receipt and orders." },
          { "label": "Save LMP-42 with EA as the base unit and 6 EA per case.", "correct": true, "feedback": "The conversion lets the ASN interpret case quantities correctly." },
          { "label": "Accept the ASN before identifying the SKU.", "correct": false, "feedback": "The identifier and conversion are missing, so quantities cannot be validated." }
        ],
        "success": "LMP-42 ready · 1 case = 6 EA.",
        "event": "ITEM_MASTER_READY · LMP-42 · 1 case = 6 EA",
        "caveat": "Required attributes depend on the product and operation.",
        "sourceIds": ["gs1Delivery", "gs1Keys"]
      },
      {
        "id": "asn",
        "phase": "Inbound",
        "title": "Process ASN",
        "brief": "The notice describes what the supplier says it shipped; it does not prove physical receipt.",
        "task": "How do you record the four-case ASN?",
        "evidence": ["ASN: 4 cases of LMP-42", "Conversion: 6 EA/case", "Expected: 24 EA; received: 0"],
        "choices": [
          { "label": "Validate 24 expected EA and leave receipt pending.", "correct": true, "feedback": "The ASN sets the expected quantity; available stock remains zero." },
          { "label": "Make 24 EA available immediately.", "correct": false, "feedback": "The ASN is advance information; physical goods and condition still need confirmation." },
          { "label": "Change four cases to four EA.", "correct": false, "feedback": "The item master defines six EA per case." }
        ],
        "success": "ASN validated · 24 EA expected; 0 received.",
        "event": "ASN_VALIDATED · 4 cases · 24 EA expected",
        "caveat": "An ASN may travel via EDI or another integration; some operations receive against an order without an ASN.",
        "sourceIds": ["gs1Delivery", "x856", "gs1Label"]
      },
      {
        "id": "order",
        "phase": "Demand",
        "title": "Process orders",
        "brief": "Two orders for the same store request 7 and 5 EA. Demand is recorded before stock is allocated.",
        "task": "What should their status be before receipt?",
        "evidence": ["ORD-07: 7 EA", "ORD-05: 5 EA", "Shared destination: Central Store"],
        "choices": [
          { "label": "Mark both orders fulfilled.", "correct": false, "feedback": "Fulfillment needs eligible inventory and later physical confirmations." },
          { "label": "Reserve the 24 EA announced by the ASN.", "correct": false, "feedback": "The notice does not show that 24 eligible EA are inside the warehouse." },
          { "label": "Record 12 EA of total demand, pending eligible inventory.", "correct": true, "feedback": "The orders remain pending; an ASN is not allocatable stock." }
        ],
        "success": "Orders accepted · 12 EA pending.",
        "event": "ORDERS_ACCEPTED · ORD-07=7 · ORD-05=5 · pending",
        "caveat": "Promise and reservation may happen in different systems and at different times; this exercise separates them for learning.",
        "sourceIds": ["scor", "gs1Delivery", "x940"]
      },
      {
        "id": "receiving",
        "phase": "Inbound",
        "title": "Receive and put away",
        "brief": "The team counts 24 physical EA. One is damaged and must be segregated.",
        "task": "Which receipt result do you retain?",
        "evidence": ["ASN: 24 EA expected", "Count: 24 physical EA", "Damage: 1 EA → quarantine", "Reserve location: R-01"],
        "choices": [
          { "label": "Make all 24 EA available because the count matches the ASN.", "correct": false, "feedback": "The damaged unit is not eligible for these orders." },
          { "label": "Record 24 received; quarantine 1 and locate 23 eligible EA at R-01.", "correct": true, "feedback": "The damaged unit remains traceable; 23 eligible EA are confirmed at R-01." },
          { "label": "Record only 23 received and erase the damaged unit.", "correct": false, "feedback": "The damaged unit arrived physically and must remain traceable in quarantine." }
        ],
        "success": "24 received · 1 quarantined · 23 eligible at R-01.",
        "event": "RECEIPT_POSTED · physical=24 · quarantine=1 · R-01=23 eligible",
        "caveat": "Damage disposition follows quality rules; the game does not decide whether to return, repair, or discard the unit.",
        "sourceIds": ["gs1Delivery", "gs1Label", "epcis"]
      },
      {
        "id": "wave",
        "phase": "Outbound",
        "title": "Release wave",
        "brief": "A wave groups eligible demand and creates allocations and picking tasks.",
        "task": "How much should the wave release for these two orders?",
        "evidence": ["Eligible stock: 23 EA", "ORD-07 + ORD-05: 12 EA", "Quarantine: 1 EA cannot be allocated"],
        "choices": [
          { "label": "Allocate 12 EA and create order tasks; 11 eligible EA remain.", "correct": true, "feedback": "The wave allocates only eligible demand; the balance stays in reserve." },
          { "label": "Allocate all 24 EA from the ASN.", "correct": false, "feedback": "An ASN is not stock; only 23 EA are eligible, and demand is 12." },
          { "label": "Allocate 23 EA because all are eligible.", "correct": false, "feedback": "The wave serves 12 EA of demand, not the entire available balance." }
        ],
        "success": "Wave released · 12 allocated · 11 in reserve.",
        "event": "WAVE_RELEASED · allocated=12 · remaining=11",
        "caveat": "Waves are a strategy, not a universal requirement; direct or continuous allocation also exists.",
        "sourceIds": ["cltd", "gs1Systems"]
      },
      {
        "id": "picking",
        "phase": "Outbound",
        "title": "Pick and confirm",
        "brief": "The operator must confirm what was physically picked for the released tasks.",
        "task": "What does this wave's picking confirmation record?",
        "evidence": ["Tasks: 7 EA for ORD-07 and 5 for ORD-05", "Eligible location: R-01", "Total required: 12 EA"],
        "choices": [
          { "label": "Confirm all 24 EA from the ASN as picked.", "correct": false, "feedback": "The ASN describes inbound goods; the pick must match tasks and physical quantity taken." },
          { "label": "Close the tasks without scanning or checking units.", "correct": false, "feedback": "There is no execution evidence to move into sorting." },
          { "label": "Pick and confirm 7 + 5 EA; 11 eligible EA remain at R-01.", "correct": true, "feedback": "Physical confirmation preserves each order's quantity." }
        ],
        "success": "12 picked · 11 EA in reserve.",
        "event": "PICK_CONFIRMED · ORD-07=7 · ORD-05=5",
        "caveat": "Unit, case, or pallet picking and scan rules depend on the facility design.",
        "sourceIds": ["cltd", "gs1Systems"]
      },
      {
        "id": "sortation",
        "phase": "Outbound",
        "title": "Sort with MHE",
        "brief": "A sorter diverts units to two work lanes and confirms how many reach each one.",
        "task": "Which signal allows the flow to continue?",
        "evidence": ["MHE input: 12 EA", "Lane A → ORD-07 station: 7 EA", "Lane B → ORD-05 station: 5 EA"],
        "choices": [
          { "label": "A message acknowledgment with no physical count.", "correct": false, "feedback": "An ACK confirms message receipt, not that 7 and 5 EA reached the correct lanes." },
          { "label": "Physically confirm 7 EA in A and 5 EA in B.", "correct": true, "feedback": "The count confirms diversion to both workstations." },
          { "label": "Route all 12 EA to lane A.", "correct": false, "feedback": "ORD-05 would be missing its five sorted units." }
        ],
        "success": "Lane A: 7 EA · Lane B: 5 EA.",
        "event": "SORT_CONFIRMED · A=7 · B=5",
        "caveat": "MHE is optional; the same control can be performed manually. Messages depend on each integration.",
        "sourceIds": ["oracleAutomation", "cltd"]
      },
      {
        "id": "putlight",
        "phase": "Outbound",
        "title": "Use put-to-light",
        "brief": "At each station, a light marks the order's final compartment; the operator places and confirms the units.",
        "task": "What confirms final placement for each order?",
        "evidence": ["Lit compartment ORD-07: 7 EA", "Lit compartment ORD-05: 5 EA", "From MHE lanes: 12 EA"],
        "choices": [
          { "label": "Place and confirm 7 EA for ORD-07 and 5 for ORD-05.", "correct": true, "feedback": "The light guides placement; confirmation closes both compartments." },
          { "label": "Treat a lit indicator as automatic confirmation.", "correct": false, "feedback": "The visual instruction does not replace physical placement and confirmation." },
          { "label": "Mix all 12 EA in one destination because the store is the same.", "correct": false, "feedback": "Quantity would lose its link to each order." }
        ],
        "success": "Compartment ORD-07: 7 EA · ORD-05: 5 EA.",
        "event": "PUT_CONFIRMED · ORD-07=7 · ORD-05=5",
        "caveat": "Put-to-light is optional and differs from pick-to-light; here it distributes already picked goods.",
        "sourceIds": ["oracleAutomation", "cltd"]
      },
      {
        "id": "staging",
        "phase": "Dispatch",
        "title": "Pack and stage",
        "brief": "Three cartons are labeled and moved to an outbound position for the same store.",
        "task": "Which cartons belong in outbound staging?",
        "evidence": ["ORD-07 → C-01: 4 EA + C-02: 3 EA", "ORD-05 → C-03: 5 EA", "Outbound lane: ST-01"],
        "choices": [
          { "label": "Two cartons with no order breakdown.", "correct": false, "feedback": "This scenario has three identified cartons, each linked to an order." },
          { "label": "Four ASN cases with 24 EA.", "correct": false, "feedback": "Outbound staging contains the 12 picked EA, not the entire receipt." },
          { "label": "Label C-01=4, C-02=3, C-03=5 and confirm all three at ST-01.", "correct": true, "feedback": "Each carton keeps its order link and a confirmed position at ST-01." }
        ],
        "success": "3 cartons · 12 EA at ST-01.",
        "event": "STAGED · C-01=4 · C-02=3 · C-03=5 · ST-01",
        "caveat": "Packing sequence depends on the picking process.",
        "sourceIds": ["gs1Label", "cltd", "epcis"]
      },
      {
        "id": "nesting",
        "phase": "Dispatch",
        "title": "Nest cartons on a pallet",
        "brief": "A parent-child link lets three cartons move as one logistic unit.",
        "task": "Which relationship preserves the actual contents?",
        "evidence": ["Parent pallet: P-01", "Children: C-01 (4), C-02 (3), C-03 (5)", "Contained total: 12 EA"],
        "choices": [
          { "label": "P-01 contains four cases and 24 EA from the ASN.", "correct": false, "feedback": "That inbound total is different from this outbound pallet's three cartons and 12 EA." },
          { "label": "Nest the three cartons under P-01 while retaining their IDs and orders.", "correct": true, "feedback": "The parent-child link retains each carton's identity and order." },
          { "label": "Replace carton IDs with P-01 and discard the detail.", "correct": false, "feedback": "A parent-child link must retain each carton's identity." }
        ],
        "success": "P-01 contains 3 cartons · 12 EA.",
        "event": "NESTED · P-01 ← C-01,C-02,C-03 · 12 EA",
        "caveat": "Pallets and parent-child hierarchies are optional; GS1 describes logistic-unit aggregation when used.",
        "sourceIds": ["epcis", "gs1Label"]
      },
      {
        "id": "consolidation",
        "phase": "Dispatch",
        "title": "Consolidate orders",
        "brief": "The two orders go to the same store and can share a shipment while retaining their identities.",
        "task": "How do you consolidate the pallet for outbound?",
        "evidence": ["ORD-07: 7 EA in two cartons", "ORD-05: 5 EA in one carton", "P-01: 3 cartons, 12 EA"],
        "choices": [
          { "label": "Assign P-01 to shipment/load L-01 and retain both order links.", "correct": true, "feedback": "The load groups both orders without merging them." },
          { "label": "Merge ORD-07 and ORD-05 into a new order with no original detail.", "correct": false, "feedback": "Sharing a load does not require erasing order traceability." },
          { "label": "Add the quarantined unit to complete the pallet.", "correct": false, "feedback": "The damaged unit remains segregated and was never assigned to this shipment." }
        ],
        "success": "L-01 includes P-01 and 2 orders; loading pending.",
        "event": "LOAD_PLANNED · L-01 · P-01 · ORD-07+ORD-05",
        "caveat": "Consolidation depends on destination, service, and capacity.",
        "sourceIds": ["gs1Label", "cltd", "epcis"]
      },
      {
        "id": "load",
        "phase": "Dispatch",
        "title": "Confirm load",
        "brief": "A planned load becomes physically loaded only after confirming the actual logistic unit.",
        "task": "Which action proves physical loading?",
        "evidence": ["Load L-01 awaits P-01", "P-01 contains 3 cartons and 12 EA", "Vehicle at outbound dock"],
        "choices": [
          { "label": "Generate the BOL from the ASN without scanning the pallet.", "correct": false, "feedback": "The ASN described expected inbound goods, not what entered the outbound vehicle." },
          { "label": "Mark L-01 loaded because P-01 was staged.", "correct": false, "feedback": "Staging does not confirm physical entry into the vehicle." },
          { "label": "Scan and confirm P-01 into L-01; verify 3 cartons and 12 EA.", "correct": true, "feedback": "The scan confirms entry into the vehicle; final shipment close remains separate." }
        ],
        "success": "L-01 loaded · P-01 · 12 EA.",
        "event": "LOAD_CONFIRMED · L-01 · P-01 · 3 cartons · 12 EA",
        "caveat": "Load confirmation, load close, ship confirmation, and carrier handoff are distinct events depending on operation.",
        "sourceIds": ["gs1Label", "epcis", "x945"]
      },
      {
        "id": "bol",
        "phase": "Dispatch",
        "title": "Draft bill of lading",
        "brief": "The bill of lading (BOL) draft summarizes the confirmed load, not the inbound ASN.",
        "task": "What should the BOL draft show?",
        "evidence": ["Shipper → Central Store", "Loaded L-01: P-01", "Contents: 3 cartons, 12 EA"],
        "choices": [
          { "label": "4 cases and 24 EA from the inbound ASN.", "correct": false, "feedback": "The supplier ASN does not describe the confirmed outbound load." },
          { "label": "1 pallet, 3 cartons, 12 EA, origin/destination, and load L-01.", "correct": true, "feedback": "The draft matches the load; signature and carrier handoff remain separate." },
          { "label": "23 eligible EA and 1 damaged EA from receiving.", "correct": false, "feedback": "The BOL should summarize loaded freight, not all inbound inventory." }
        ],
        "success": "BOL draft · 1 pallet · 3 cartons · 12 EA.",
        "event": "BOL_DRAFTED · L-01 · 1 pallet · 3 cartons · 12 EA",
        "caveat": "This is a teaching summary, not an issued legal BOL. Format, terms, signature, and obligations vary by mode, carrier, and jurisdiction.",
        "sourceIds": ["usBol", "gs1Label"]
      }
    ]
  },

  "warehouseLayout": {
    "intro": "Conceptual floor plan. Zones and controls vary by facility; cross-docking and quarantine are conditional.",
    "zones": [
      {
        "id": "inbound-dock",
        "title": "Inbound dock",
        "role": "Unloading point: the physical unit announced by a supplier or carrier arrives here.",
        "sourceIds": [
          "cltd",
          "gs1Label"
        ]
      },
      {
        "id": "receiving",
        "title": "Receiving",
        "role": "Count or scan actual units and reconcile them with the order or ASN.",
        "sourceIds": [
          "gs1Label",
          "gs1Systems"
        ]
      },
      {
        "id": "inspection",
        "title": "Inspection",
        "role": "Check identity, condition, and restrictions; the depth of inspection depends on risk.",
        "sourceIds": [
          "gs1Systems",
          "cltd"
        ]
      },
      {
        "id": "reserve",
        "title": "Reserve storage",
        "role": "Eligible inventory is located and available for replenishment or future fulfillment.",
        "sourceIds": [
          "gs1Systems",
          "cltd"
        ]
      },
      {
        "id": "pick-face",
        "title": "Pick face",
        "role": "Accessible operating locations where ordered units are picked and confirmed.",
        "sourceIds": [
          "cltd",
          "gs1Systems"
        ]
      },
      {
        "id": "packing",
        "title": "Packing",
        "role": "Check the picked order, protect it, and label the outbound logistic unit.",
        "sourceIds": [
          "cltd",
          "gs1Label"
        ]
      },
      {
        "id": "outbound-dock",
        "title": "Outbound dock",
        "role": "Stage and confirm the load entering the vehicle before recording shipment.",
        "sourceIds": [
          "cltd",
          "gs1Label"
        ]
      },
      {
        "id": "crossdock-stage",
        "title": "Cross-dock staging",
        "role": "Temporary zone for sorting an inbound unit assigned to near-term dispatch without reserve storage; only when the flow allows.",
        "sourceIds": [
          "ascmTms",
          "cltd"
        ]
      },
      {
        "id": "returns",
        "title": "Returns",
        "role": "Identify and record a returned product before deciding its disposition.",
        "sourceIds": [
          "scor",
          "gs1Systems"
        ]
      },
      {
        "id": "quarantine",
        "title": "Quarantine",
        "role": "Temporary separation of inventory held for damage, quality, recall, or missing validation; not a universal step.",
        "sourceIds": [
          "gs1Systems"
        ]
      }
    ],
    "routes": [
      {
        "id": "inbound",
        "title": "Inbound to stock",
        "goal": "Receive lamps and locate them for future orders.",
        "steps": [
          "inbound-dock",
          "receiving",
          "inspection",
          "reserve"
        ],
        "note": "Confirm what actually arrived before put-away. If a unit fails inspection, segregate it in quarantine instead of moving it to reserve.",
        "sourceIds": [
          "gs1Label",
          "gs1Systems",
          "cltd"
        ]
      },
      {
        "id": "outbound",
        "title": "Ship an order",
        "goal": "Prepare and ship the fictional order for 12 lamps.",
        "steps": [
          "reserve",
          "pick-face",
          "packing",
          "outbound-dock"
        ],
        "note": "Reserve to pick face represents replenishment when needed. If stock is already in the pick face, the route begins there.",
        "sourceIds": [
          "cltd",
          "gs1Systems",
          "gs1Label"
        ]
      },
      {
        "id": "cross-dock",
        "title": "Optional cross-dock",
        "goal": "Transfer a load already assigned to outbound without holding it in reserve inventory.",
        "steps": [
          "inbound-dock",
          "receiving",
          "crossdock-stage",
          "outbound-dock"
        ],
        "note": "Conditional route: destination, capacity, identification, and timing must align. Extra controls may apply; it never replaces physical confirmation.",
        "sourceIds": [
          "ascmTms",
          "gs1Label"
        ]
      },
      {
        "id": "returns",
        "title": "Damaged return",
        "goal": "Record and isolate a returned lamp that needs a quality decision.",
        "steps": [
          "inbound-dock",
          "returns",
          "inspection",
          "quarantine"
        ],
        "note": "This case ends in quarantine because the lamp is damaged. A verified, sellable return may move to reserve; another may be repaired, recycled, or discarded.",
        "sourceIds": [
          "scor",
          "gs1Systems"
        ]
      }
    ]
  }
};
