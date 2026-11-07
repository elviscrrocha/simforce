// Data Cloud (Data 360) — 3 simulados (parseados dos .docx do usuário).
window.QUESTIONS = (window.QUESTIONS || []).concat([
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 1,
  "statement": "A retail chain, OmniStyle Apparel, ingests customer data from a custom Salesforce object. Each record contains two separate store credit balances — \"In-Store Credit\" and \"Online Credit\" — stored together in the same record. The marketing team needs these two credit types separated into distinct records for targeted promotions and expiration tracking. What should the Data 360 Consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Create two separate custom objects in the source Salesforce system and migrate the data manually."
   },
   {
    "key": "b",
    "text": "Configure a batch transform to split each incoming record into two separate data lake objects during ingestion."
   },
   {
    "key": "c",
    "text": "Schedule a daily data kit deployment to duplicate the records after ingestion."
   },
   {
    "key": "d",
    "text": "Build a formula field in the semantic layer to display each credit balance independently."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct solution is to configure a batch transform to split each incoming record into two separate data lake objects during ingestion (Option 2). Batch transforms in Data 360 allow data manipulation at ingestion time, enabling you to take a single source record containing both \"In-Store Credit\" and \"Online Credit\" balances and produce two distinct DLOs — one for each credit type. This approach achieves the required separation without modifying the source Salesforce CRM schema, avoids manual data migration, and creates separate objects that can be independently tracked for targeted promotions and expiration management. **Why the other options are incorrect:** - **Option 1:** Creating two separate custom objects in the source CRM requires altering production schema and performing manual data migration, which is disruptive, time‑consuming, and unnecessary when Data 360 can handle the separation within its ingestion layer. - **Option 3:** A data kit is designed for packaging and promoting configurations between environments, not for performing record‑splitting transformations during ingestion. Duplicating records after ingestion does not separate the two credit types into distinct, independently processable objects. - **Option 4:** A formula field in the semantic layer is evaluated at query time for display or calculation purposes; it cannot physically split ingested records into separate storage objects needed for downstream activations like expiration tracking. Thus, using a batch transform is the most efficient, maintainable, and correct approach.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 2,
  "statement": "A data engineer at Summit Financial deploys a change set containing a data kit from a sandbox into a new production Salesforce organization. The deployment log shows \"Success,\" but the data mapping configurations and custom dashboards inside the kit are missing from the Data 360 interface. What is the required next step?",
  "options": [
   {
    "key": "a",
    "text": "Navigate to the Data 360 Setup menu and run the Install action on the data kit to materialize its components."
   },
   {
    "key": "b",
    "text": "Redeploy the same change set from the sandbox with the \"Include All Dependencies\" checkbox selected."
   },
   {
    "key": "c",
    "text": "Perform a hard refresh of all data streams listed in the change set manifest."
   },
   {
    "key": "d",
    "text": "Open the Salesforce Setup menu and verify the Installed Packages list for the kit name."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct next step is to navigate to the Data 360 Setup menu and run the Install action on the data kit (Option 1). Deploying a change set that contains a data kit only transfers the metadata of the kit; it does not automatically materialize or activate its components. The installation step is required to create the actual data mappings, custom dashboards, and other configured objects in the target Data 360 environment. Without this explicit installation, the kit's contents remain inactive and invisible. **Why the other options are incorrect:** - **Option 2:** Redeploying the same change set with additional options does not initiate the installation process. The deployment only moves metadata; installation is a separate, required step that cannot be bypassed by deployment settings. - **Option 3:** Hard refreshing data streams is only applicable after the kit has been installed and the data streams are configured. Since the kit is not yet installed, there are no active streams to refresh. - **Option 4:** The Salesforce Setup Installed Packages list is for AppExchange managed packages, not for Data 360 data kits. Checking this list will not help locate or activate the kit. Thus, running the Install action in the Data 360 Setup menu is the mandatory next step to make the kit's contents available and functional.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 3,
  "statement": "A Data 360 Consultant is working with a logistics firm, Redwood Freight. They need to provide a live-calculated metric called \"Delivery Efficiency Ratio\" to Tableau Next. Business users must be able to filter this metric dynamically by carrier, regional hub, and driver shift. The metric must reflect the most recent shipment statuses without batch delays. Which method should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Schedule an overnight batch aggregation job that writes to a summary table."
   },
   {
    "key": "b",
    "text": "Create a calculated field directly within the Data 360 semantic layer for query-time evaluation."
   },
   {
    "key": "c",
    "text": "Configure a streaming pipeline that materializes the ratio into a separate table every 5 minutes."
   },
   {
    "key": "d",
    "text": "Build a custom API endpoint that calculates the ratio on each request and feeds Tableau."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct method is to create a calculated field directly within the Data 360 semantic layer for query‑time evaluation (Option 2). This approach ensures that the Delivery Efficiency Ratio is computed on the fly using the most recent shipment data, with no batch delays. The semantic layer also fully supports dynamic, multi‑dimensional filtering by carrier, regional hub, and driver shift, which Tableau Next can directly consume without pre‑aggregation or custom development. **Why the other options are incorrect:** - **Option 1:** An overnight batch aggregation job would produce data that is up to 24 hours old, failing the real‑time requirement. Users would not see the impact of recent shipment status changes on the delivery efficiency metric. - **Option 3:** A streaming pipeline that materializes the ratio every 5 minutes reduces latency but still introduces up to 5 minutes of delay. Additionally, it requires managing an extra table and does not provide true query‑time freshness. - **Option 4:** Building a custom API endpoint is far outside Data 360's native functionality, introduces significant custom code and infrastructure, and does not leverage the platform's built‑in semantic layer capabilities. Thus, a calculated field in the semantic layer is the most direct, performant, and maintainable solution for live, filterable metrics in Tableau Next.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 4,
  "statement": "A manufacturing company, Atlas Industrial, stores production sensor data in an external Databricks environment. The Data 360 Consultant needs to make this sensor data available for analytics without creating any additional storage costs in Data 360. Which capability should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "External data federation that reads the Databricks tables directly at query time."
   },
   {
    "key": "b",
    "text": "A scheduled batch job that copies the sensor data into Data 360 every 6 hours."
   },
   {
    "key": "c",
    "text": "A streaming pipeline that duplicatively writes all records into Data 360 managed storage."
   },
   {
    "key": "d",
    "text": "A CSV export from Databricks followed by manual upload into Data 360."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct capability is external data federation that reads the Databricks tables directly at query time (Option 1). Also known as zero‑copy federation, this feature allows Data 360 to query external data without moving or copying it, thereby incurring no additional storage costs. The data remains in its original Databricks environment, satisfying both the analytics requirement and the cost constraint. **Why the other options are incorrect:** - **Option 2:** A scheduled batch job copies the data into Data 360, creating a duplicate and incurring storage costs. This defeats the purpose of avoiding extra storage expenses. - **Option 3:** A streaming pipeline that writes data into Data 360 managed storage also creates duplicates and incurs storage costs, directly violating the requirement. - **Option 4:** Manual CSV export and upload is a manual, error‑prone process that also creates a duplicate copy in Data 360 storage, failing the cost‑avoidance goal. Thus, external data federation is the only approach that provides access for analytics without duplicating data or adding storage costs.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 5,
  "statement": "A Data 360 Consultant is configuring data streams for a student loan provider. The stakeholder requests that \"marital status\" and \"number of dependents\" be included in the unified profile even though these fields are never used in any current or planned calculation. What should the consultant do?",
  "options": [
   {
    "key": "a",
    "text": "Collect the fields anyway in case a future business requirement emerges."
   },
   {
    "key": "b",
    "text": "Grant the stakeholder's manager access to override the decision."
   },
   {
    "key": "c",
    "text": "Store the fields in a hidden attribute table for potential future use."
   },
   {
    "key": "d",
    "text": "Challenge whether these fields are necessary and recommend excluding them unless a specific use case is identified."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct action is to challenge whether these fields are necessary and recommend excluding them unless a specific use case is identified (Option 4). Data minimization is a fundamental ethical and regulatory principle, especially in financial services where collecting unnecessary personally identifiable information (PII) increases privacy risk, compliance exposure (e.g., under GLBA or FCRA), and system complexity. Collecting fields without a legitimate business need is never justified by a vague \"future use\" scenario. **Why the other options are incorrect:** - **Option 1:** Collecting fields \"just in case\" violates data minimization principles, increases unnecessary risk, and may create regulatory compliance issues. Future requirements can be addressed when they emerge, not proactively. - **Option 2:** Granting override access does not resolve the ethical dilemma; it simply passes the decision to someone else without addressing whether the data should be collected at all. - **Option 3:** Storing fields in a hidden table still constitutes data collection, with the same privacy and compliance risks as storing them visibly. Hidden does not equal compliant. Thus, the consultant has an ethical obligation to push back and require documented justification for collecting sensitive or personal data.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 6,
  "statement": "A healthcare network, Lifecore Health, ingests patient admission records from an SFTP server every morning. A calculated insight named \"Patient Risk Score\" depends on unified patient profiles that span admissions, lab results, and pharmacy records. Each morning, after new files arrive, the team runs a workflow. In which order should the workflow steps execute so that the Patient Risk Score reflects all available data?",
  "options": [
   {
    "key": "a",
    "text": "Pull new admission files → Run patient identity matching → Recalculate Patient Risk Score"
   },
   {
    "key": "b",
    "text": "Recalculate Patient Risk Score → Pull new admission files → Run patient identity matching"
   },
   {
    "key": "c",
    "text": "Run patient identity matching → Pull new admission files → Recalculate Patient Risk Score"
   },
   {
    "key": "d",
    "text": "Pull new admission files → Recalculate Patient Risk Score → Run patient identity matching"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct order is: Pull new admission files → Run patient identity matching → Recalculate Patient Risk Score (Option 1). First, new admission files must be ingested (Refresh Data Stream) to bring fresh data into Data 360. Second, identity resolution runs to unify records belonging to the same patient across admissions, lab results, and pharmacy records. Third, the Patient Risk Score calculated insight is recomputed using the now‑unified profiles. Identity resolution must happen before the calculated insight so that the score aggregates data correctly across all records of each patient, reflecting the complete picture. **Why the other options are incorrect:** - **Option 2:** Recalculating the risk score before pulling new files is impossible because the fresh data does not yet exist in Data 360. Identity matching also cannot run before ingestion. - **Option 3:** Running identity matching before pulling new files means that newly arrived admission records are excluded from the matching process, resulting in fragmented profiles and incomplete risk scores. - **Option 4:** Recalculating the risk score before identity matching would compute scores on raw, un‑unified records, leading to overcounting because the same patient might appear as multiple separate records. Thus, the sequence described in Option 1 is the only one that ensures the Patient Risk Score reflects all available unified data.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 7,
  "statement": "Which scenario represents a valid Data 360 application for improving member outcomes in the health insurance sector?",
  "options": [
   {
    "key": "a",
    "text": "Processing provider reimbursement payments through an automated accounts payable system."
   },
   {
    "key": "b",
    "text": "Predicting optimal locations for new urgent care centers based on real estate prices."
   },
   {
    "key": "c",
    "text": "Automating prescription refill reminders through a pharmacy point-of-sale system."
   },
   {
    "key": "d",
    "text": "Building a holistic \"Member Wellness Index\" that combines claims data, digital engagement, and preventive care history."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The valid scenario is building a holistic \"Member Wellness Index\" that combines claims data, digital engagement, and preventive care history (Option 4). This directly leverages Data 360's core capabilities of data unification, identity resolution, and derived insights to improve member outcomes. By identifying at‑risk members through a unified view, health insurers can personalize outreach, encourage preventive care, and ultimately improve member health. **Why the other options are incorrect:** - **Option 1:** Processing provider reimbursements is a back‑office financial function, not a member health outcome improvement use case. It does not leverage Data 360's customer data unification strengths. - **Option 2:** Predicting locations for urgent care centers is a real estate and capacity planning exercise, requiring geospatial modeling that is outside Data 360's primary healthcare member outcome focus. - **Option 3:** Prescription refill reminders at a point‑of‑sale system is a transactional automation task, not an analytics‑driven member outcome initiative, and does not require unified customer profiles. Thus, Option 4 is the only scenario that directly uses Data 360 to improve member health outcomes through unified data and insights.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 8,
  "statement": "A customer submits a formal request to \"erase all personal data\" under privacy regulations. The Data 360 system receives this request. What data within Data 360 is removed when processing this request?",
  "options": [
   {
    "key": "a",
    "text": "The Individual record and every associated record in any data model object or data lake object tied to that Individual."
   },
   {
    "key": "b",
    "text": "The Individual record only from the data lake, leaving all downstream model objects unchanged."
   },
   {
    "key": "c",
    "text": "The source system records in the original CRM, plus any copies in Data 360."
   },
   {
    "key": "d",
    "text": "The Individual record and all related audit logs, but not engagement history records."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When processing a Right to Be Forgotten request, Data 360 removes the specified Individual record and every associated record in any data model object (DMO) or data lake object (DLO) tied to that Individual (Option 1). This includes unified profiles, engagement history, calculated insights, and any other derived or stored records that are linked to that individual. The deletion is comprehensive across Data 360's managed storage. **Why the other options are incorrect:** - **Option 2:** Deleting only the Individual record from the data lake leaves downstream DMO records intact, which means unified profiles and calculated insights would still contain the individual's data, violating the erasure requirement. - **Option 3:** Data 360 cannot delete records from external source systems like the original CRM. Source system deletion must be handled separately. Data 360 only controls data within its own environment. - **Option 4:** Selectively keeping engagement history records would violate the Right to Be Forgotten. All data tied to the individual must be erased, not just the core profile and audit logs. Thus, Option 1 accurately describes the full scope of deletion within Data 360.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 9,
  "statement": "A Data 360 project has a user named Priya. Her job requires her to build and publish audience segments and send those segments to destination platforms (e.g., Google Ads, Braze). She must not be allowed to edit the underlying data model mappings or identity resolution configuration. Following least privilege, which standard permission set should Priya receive?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 System Administrator"
   },
   {
    "key": "b",
    "text": "Data 360 Data Modeler"
   },
   {
    "key": "c",
    "text": "Data 360 Read Only"
   },
   {
    "key": "d",
    "text": "Data 360 Segment Publisher"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct permission set is Data 360 Segment Publisher (Option 4). This permission set is designed for users who need to build, view, and publish audience segments and send those segments to destination platforms (e.g., Google Ads, Braze). It explicitly restricts access to data model mappings and identity resolution configurations, aligning with the principle of least privilege. **Why the other options are incorrect:** - **Option 1:** Data 360 System Administrator grants full administrative access, including the ability to modify data model mappings and identity rules, which is far beyond Priya's required permissions and violates least privilege. - **Option 2:** Data 360 Data Modeler is focused on designing and modifying data model mappings and relationships — exactly what Priya must not be allowed to do. - **Option 3:** Data 360 Read Only only provides view access; it does not allow building segments or publishing activations, so Priya could not perform her job. Thus, Data 360 Segment Publisher is the appropriate least‑privilege permission set for Priya's role.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 10,
  "statement": "A subscription box company, CrateJoy, has unified customer profiles in Data 360. They have created a calculated insight called \"Churn Probability Score\" (0-100). They need to send this score to Iterable (a cross-channel marketing platform) to suppress high-risk customers from expensive acquisition campaigns. What is the most direct method to make this score available in Iterable?",
  "options": [
   {
    "key": "a",
    "text": "Select the Churn Probability Score calculated insight field as an attribute when configuring the audience activation to Iterable."
   },
   {
    "key": "b",
    "text": "Write a daily SQL query to export the score to a CSV file and upload it manually to Iterable."
   },
   {
    "key": "c",
    "text": "Create a custom formula field in the source order management system and recalculate it nightly."
   },
   {
    "key": "d",
    "text": "Build a middleware REST API that polls Data 360 every hour and pushes score changes to Iterable."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most direct method is to select the Churn Probability Score calculated insight field as an attribute when configuring the audience activation to Iterable (Option 1). Once the calculated insight is defined on unified customer profiles, it becomes an available attribute in activation configuration. When the activation runs, the score is automatically included in the audience payload — no manual exports, custom middleware, or external scripts are required. **Why the other options are incorrect:** - **Option 2:** Manual CSV exports introduce operational overhead, latency, and human error, breaking automation. This approach is inefficient and error‑prone. - **Option 3:** A formula field in the source order management system does not use Data 360's unified profiles or calculated insight engine, and it does not automatically send data to Iterable. - **Option 4:** Building a custom REST API middleware adds significant engineering complexity, ongoing maintenance costs, and latency. Data 360's native activation eliminates this need entirely. Thus, selecting the calculated insight attribute directly in the activation configuration is the simplest, most maintainable, and correct method.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 11,
  "statement": "A consumer goods company, FreshBev, needs to report on total case volume and wholesale revenue per product category (e.g., \"Sparkling Water,\" \"Cold Brew\") for each sales deal. Which subject area within the Data 360 data model contains this transactional information?",
  "options": [
   {
    "key": "a",
    "text": "Product Catalog"
   },
   {
    "key": "b",
    "text": "Transaction Line"
   },
   {
    "key": "c",
    "text": "Interaction History"
   },
   {
    "key": "d",
    "text": "Account Profile"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct subject area is Transaction Line (Option 2). The Transaction Line subject area in the Data 360 data model stores detailed line‑item information for sales transactions, including product identifiers, quantities sold (case volume), and monetary amounts (wholesale revenue), each associated with a specific deal or opportunity. This makes it the appropriate source for reporting volume and revenue broken down by product category. **Why the other options are incorrect:** - **Option 1:** The Product Catalog subject area defines product attributes and hierarchies but does not contain deal‑specific transactional quantities or revenue figures. - **Option 3:** The Interaction History subject area captures behavioral events (page views, clicks, email opens) — not transactional revenue or volume. - **Option 4:** The Account Profile subject area describes the parties involved in transactions (organizations, households) but does not store the revenue or quantity metrics themselves. Thus, the Transaction Line subject area is the correct source for the required transactional reports.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 12,
  "statement": "A Data 360 administrator adds a custom field called \"Loyalty_Tier__c\" to a Salesforce CRM object that is currently being ingested. What behavior does the CRM Connector exhibit after this schema change?",
  "options": [
   {
    "key": "a",
    "text": "The connector executes a complete re-ingestion to align the data lake object with the updated source structure."
   },
   {
    "key": "b",
    "text": "The connector automatically maps the new field but waits for the next scheduled sync to populate values."
   },
   {
    "key": "c",
    "text": "The connector ignores schema changes and continues ingesting only the original columns."
   },
   {
    "key": "d",
    "text": "The connector requires manual deletion and recreation of the data stream to recognize the new column."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a column is added to or removed from a source Salesforce CRM object, the CRM Connector executes a complete re‑ingestion (full refresh) to align the data lake object (DLO) with the updated source structure (Option 1). This automatic behavior ensures that the target DLO schema matches the source schema, preventing mismatches, missing data, or ingestion errors. **Why the other options are incorrect:** - **Option 2:** The connector does not automatically map the new field without a full refresh; the schema must be reconciled before data can be populated. - **Option 3:** The connector does not ignore schema changes; it actively detects them and triggers a full refresh to maintain consistency. - **Option 4:** Manual deletion and recreation of the data stream is unnecessary and overly disruptive. The connector handles schema changes automatically without manual intervention. Thus, Option 1 correctly describes the CRM Connector's behavior after a schema change.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 13,
  "statement": "A developer at Harbor Health is ingesting patient prescription records from a legacy mainframe into Data 360. The source system has no single primary key column. However, combining the \"PatientID\" and \"PrescriptionDate\" and \"DrugCode\" fields uniquely identifies each row. What should the developer configure as the unique identifier for this data stream?",
  "options": [
   {
    "key": "a",
    "text": "System-generated auto-number field"
   },
   {
    "key": "b",
    "text": "External ID field populated by a transform"
   },
   {
    "key": "c",
    "text": "Data lake object partition key"
   },
   {
    "key": "d",
    "text": "Multi-column composite key"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The developer should configure a multi‑column composite key (Option 4). Since the source system lacks a single primary key column, combining PatientID, PrescriptionDate, and DrugCode uniquely identifies each row. A composite key is the standard and supported approach in Data 360 for such scenarios, ensuring each record has a unique identifier based on the combination of source fields. **Why the other options are incorrect:** - **Option 1:** A system‑generated auto‑number field would create artificial uniqueness but would not help with deduplication or matching against source records when incremental updates occur; the source does not have that auto‑number value. - **Option 2:** An External ID field requires an existing unique field from the source system, which the legacy system does not have. Creating one via transform is unreliable without a guaranteed unique source value. - **Option 3:** A partition key is for storage organization and query performance, not for providing a row‑level unique identifier for record identity. Thus, a composite key is the correct solution.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 14,
  "statement": "A Data 360 Consultant creates a new workspace to query a data model object (DMO) named \"Customer_360_Profile.\" They select the first data space listed without checking its contents. When attempting to write a query, the DMO is not available. What is the solution?",
  "options": [
   {
    "key": "a",
    "text": "Delete the workspace and recreate it, this time selecting the data space that contains the Customer_360_Profile DMO."
   },
   {
    "key": "b",
    "text": "Add the Customer_360_Profile DMO to the data space that was selected during workspace creation."
   },
   {
    "key": "c",
    "text": "Modify the existing workspace's data space assignment using the workspace settings panel."
   },
   {
    "key": "d",
    "text": "Reference the DMO using a fully qualified name including the correct data space in the SQL query."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The solution is to delete the workspace and recreate it, this time selecting the data space that contains the Customer_360_Profile DMO (Option 1). Workspaces in Data 360 are permanently bound to a specific data space at creation time; this assignment cannot be changed after creation. If the consultant selected the wrong data space, the DMO will not be visible because the workspace is scoped to an empty or incorrect space. Recreating the workspace with the correct data space is the only way to access the DMO. **Why the other options are incorrect:** - **Option 2:** DMOs cannot be moved to a different data space after creation; data space membership is defined at DMO creation time and is not editable. - **Option 3:** Workspace data space assignment cannot be modified after creation; this is a deliberate design constraint in Data 360. - **Option 4:** Using a fully qualified name does not override the workspace's data space binding; the DMO remains inaccessible because the workspace's scope is fixed. Thus, recreating the workspace with the correct data space is the required action.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 15,
  "statement": "A retail marketer at Urban Outfitters is building a segment to target customers who purchased a \"red sweater\" (product color = red, product category = sweater) from the Order Line Item object. How should the consultant structure the segment criteria?",
  "options": [
   {
    "key": "a",
    "text": "Place color = red in one container and category = sweater in a separate container."
   },
   {
    "key": "b",
    "text": "Create a calculated insight for \"red sweater\" and place that single attribute in the segment."
   },
   {
    "key": "c",
    "text": "Place both attributes as direct filters without any container grouping."
   },
   {
    "key": "d",
    "text": "Place both attribute conditions (color = red AND category = sweater) inside one container."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should place both attribute conditions (color = red AND category = sweater) inside one container (Option 4). To correctly identify customers who purchased a red sweater, both conditions must be applied to the same order line item record. A single container ensures that the segment evaluates both conditions together on the same line item, requiring the purchased item to be both red and a sweater. This is the accurate way to build such a segment. **Why the other options are incorrect:** - **Option 1:** Separate containers would evaluate conditions independently across potentially different line items, incorrectly including customers who bought a red hat in one order and a blue sweater in another. - **Option 2:** A calculated insight is unnecessary when the source attributes are directly available and can be combined in a container; adding a calculated insight introduces complexity without additional benefit. - **Option 3:** Direct attributes without a container do not enforce that both conditions apply to the same Order Line Item record, leading to incorrect segmentation results. Thus, Option 4 is the correct segmentation approach.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 16,
  "statement": "A media company has two Data 360 environments — a development org and a production org. A consultant has completed and tested an Azure Blob Storage data stream with custom field mappings in the development org. What is the recommended method to move this configuration to the production org?",
  "options": [
   {
    "key": "a",
    "text": "Export the configuration as a data kit from development and install it in production."
   },
   {
    "key": "b",
    "text": "Manually recreate the data stream and mappings in production using screenshots."
   },
   {
    "key": "c",
    "text": "Use the Salesforce Change Set tool to migrate the data stream metadata."
   },
   {
    "key": "d",
    "text": "Package the configuration as an unmanaged Salesforce package."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The recommended method is to export the configuration as a data kit from the development org and install it in the production org (Option 1). A data kit is the purpose‑built mechanism for packaging and promoting Data 360 configurations — including data streams, field mappings, calculated insights, and other metadata — across environments. This approach ensures consistency, reduces errors, and is the standard deployment practice for Data 360. **Why the other options are incorrect:** - **Option 2:** Manually recreating the data stream and mappings using screenshots is error‑prone, time‑consuming, and not scalable, especially for complex configurations. It violates deployment best practices. - **Option 3:** Salesforce Change Set does not natively package Data 360 data stream configurations; it is designed for traditional CRM metadata. Data kits are the correct tool for Data 360. - **Option 4:** Unmanaged Salesforce packages are for Apex, Visualforce, and Lightning components — not for Data 360 metadata like data streams and mappings. Thus, using a data kit is the correct and standard approach.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 17,
  "statement": "A Data 360 Consultant has deployed a churn prediction model using Einstein Studio. The business wants to automatically flag high-risk customer records in Service Cloud whenever the model runs. What is the standard method to apply these predictions to a Salesforce business process?",
  "options": [
   {
    "key": "a",
    "text": "Export prediction results to a CSV file and schedule a Data Loader job to update Service Cloud records."
   },
   {
    "key": "b",
    "text": "Embed the Einstein Studio model URL in a Service Cloud Lightning page for agents to check manually."
   },
   {
    "key": "c",
    "text": "Use Identity Resolution to merge prediction scores into Individual records automatically."
   },
   {
    "key": "d",
    "text": "Invoke the model using Flow Builder or configure a predict job that writes results back to Data 360 or CRM objects."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The standard method is to invoke the model using Flow Builder or configure a predict job that writes results back to Data 360 or CRM objects (Option 4). Einstein Studio models can be operationalized by creating a predict job (batch) that writes prediction scores to specified Data 360 objects or Salesforce CRM objects, or by calling the model directly via Flow Builder for real‑time automation. This allows automatic flagging of high‑risk customer records in Service Cloud whenever the model runs. **Why the other options are incorrect:** - **Option 1:** Manual CSV export and Data Loader jobs are error‑prone, introduce latency, and are not a standard or supported integration method for Einstein predictions. - **Option 2:** Embedding the model URL provides a link for manual viewing but does not automate predictions or update records in Service Cloud. - **Option 3:** Identity Resolution is for merging customer profiles across sources; it does not apply model predictions to business processes or trigger automated actions. Thus, Option 4 describes the correct standard method.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 18,
  "statement": "A Data 360 Consultant needs to set up an automated email notification whenever an audience activation to Google Ads fails for a specific high-value segment. Which capability should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Salesforce Flow configured to monitor activation failure events and send email alerts."
   },
   {
    "key": "b",
    "text": "A scheduled report subscription that sends a daily list of failed activations."
   },
   {
    "key": "c",
    "text": "The native Activation Alert setting within the activation configuration screen."
   },
   {
    "key": "d",
    "text": "A dashboard component that highlights failed activations in red."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use Salesforce Flow configured to monitor activation failure events and send email alerts (Option 1). By creating a flow that listens for activation failure events (or monitors activation status records), the consultant can trigger an automated email notification whenever a failure occurs for the specific high‑value segment. This provides real‑time, proactive alerting. **Why the other options are incorrect:** - **Option 2:** A scheduled report subscription only sends at fixed intervals (e.g., daily), not in real time, and it sends a list of failures rather than a targeted alert for a specific segment failure. - **Option 3:** There is no native \"Activation Alert\" feature within the activation configuration screen for real‑time failure notification. - **Option 4:** A dashboard component passively displays information; it does not proactively send email or push notifications to users. Thus, Salesforce Flow is the appropriate tool for automated, real‑time failure alerting.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 19,
  "statement": "A Data 360 Consultant is configuring identity resolution rules and encounters the \"Ignore Empty Value\" checkbox on a match rule field. What is the function of this setting?",
  "options": [
   {
    "key": "a",
    "text": "Entire records with any empty fields are excluded from the identity resolution process."
   },
   {
    "key": "b",
    "text": "Empty field values are automatically populated with default placeholders before matching."
   },
   {
    "key": "c",
    "text": "Reconciliation rules skip records that have empty values in critical fields."
   },
   {
    "key": "d",
    "text": "When a field used in a match rule contains no value, that field is excluded from matching consideration for that record."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The function of the \"Ignore Empty Value\" checkbox is that when a field used in a match rule contains no value, that field is excluded from matching consideration for that record (Option 4). This prevents empty values from incorrectly preventing potential matches. For example, if a matching rule uses both email and phone, but a record has a phone number but no email, ignoring the empty email field allows the phone number to be considered for matching. **Why the other options are incorrect:** - **Option 1:** The option does not exclude entire records; it only affects how individual empty field values are treated within match rules. - **Option 2:** The option ignores empty values; it does not populate them with default values or placeholders. - **Option 3:** The option applies to match rules, not reconciliation rules; reconciliation rules handle field value conflicts after a match is made. Thus, Option 4 accurately describes the function of the Ignore Empty Value setting.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 20,
  "statement": "A Data 360 Consultant needs to create a derived field that calculates \"discounted price\" as (list price * 0.85) for every row in a product catalog data model object. When would a formula be preferred over a transform for this task?",
  "options": [
   {
    "key": "a",
    "text": "When the logic is a simple, row-level calculation that does not require joins or multi-row operations."
   },
   {
    "key": "b",
    "text": "When the transformation logic must be reused across 15 different data streams from different sources."
   },
   {
    "key": "c",
    "text": "When the dataset exceeds 10 billion rows and requires distributed processing."
   },
   {
    "key": "d",
    "text": "When the calculation depends on aggregated values from a separate related table."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A formula is preferred over a transform when the logic is a simple, row‑level calculation that does not require joins or multi‑row operations (Option 1). Formulas are easier to configure, require no code or scripting, execute efficiently directly within the data model, and are ideal for derived fields like the discounted price calculation. They are the declarative, best‑practice choice for such straightforward transformations. **Why the other options are incorrect:** - **Option 2:** Reusable logic across many data streams can be handled by formulas, but this is not the primary scenario where formulas are \"preferred\" over transforms; transforms or data kits are often better for reuse across heterogeneous sources. - **Option 3:** Massive datasets requiring distributed processing typically require more complex transform logic (batch transforms, Spark‑based transforms), not simple row‑level formulas. - **Option 4:** Calculations that depend on aggregated values from a separate related table cannot be accomplished with row‑level formulas; they require transforms that perform joins and aggregations. Thus, Option 1 correctly identifies the scenario where a formula is the preferred approach.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 21,
  "statement": "A business analyst needs to perform a quick validation of records inside a newly configured data model object (DMO) called \"Product_Inventory_DMO.\" They open the Query Editor panel within Data 360. Which language must the analyst use to retrieve and examine rows from this DMO?",
  "options": [
   {
    "key": "a",
    "text": "Salesforce Object Query Language (SOQL)"
   },
   {
    "key": "b",
    "text": "JavaScript Expression Notation (JSON)"
   },
   {
    "key": "c",
    "text": "Apex Record Manipulation Language"
   },
   {
    "key": "d",
    "text": "Structured Query Language (SQL)"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The analyst must use Structured Query Language (SQL) (Option 4). The Query Editor in Data 360 uses SQL to retrieve and examine rows from data model objects (DMOs). Data 360 stores data in a SQL‑compatible query engine, allowing analysts to run standard SELECT statements, WHERE clauses, and JOIN operations directly against DMOs for ad‑hoc inspection and validation. **Why the other options are incorrect:** - **Option 1:** SOQL is designed for querying Salesforce CRM objects (e.g., Accounts, Contacts) and is not used in the Data 360 Query Editor for DMOs. - **Option 2:** JSON is a data interchange format, not a query language; it cannot be used to retrieve records from a DMO. - **Option 3:** Apex DML is used for record manipulation within Apex code, not for ad‑hoc queries in the Query Editor. Thus, SQL is the correct language.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 22,
  "statement": "A telecommunications provider, WaveTel, ingests real-time customer call drop events from a streaming source into Data 360. The business requires that an automated network repair workflow in the core Salesforce CRM org be triggered immediately whenever a call drop event occurs, with no noticeable delay. Which Data 360 capability should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Automation event-triggered flow using real-time data actions"
   },
   {
    "key": "b",
    "text": "Batch segment refresh scheduled every 5 minutes"
   },
   {
    "key": "c",
    "text": "Manual activation to a Salesforce CRM target"
   },
   {
    "key": "d",
    "text": "Calculated insight with streaming output to an external queue"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use automation event‑triggered flow using real‑time data actions (Option 1). Real‑time data actions in Data 360 can be configured to immediately fire an event‑triggered flow in Salesforce CRM whenever a call drop event is ingested from a streaming source. This triggers the automated network repair workflow with minimal latency, meeting the requirement for immediate response without noticeable delay. **Why the other options are incorrect:** - **Option 2:** A batch segment refresh scheduled every 5 minutes introduces up to 5 minutes of latency, which fails the \"no noticeable delay\" requirement for real‑time or near‑real‑time triggers. - **Option 3:** Manual activation requires human intervention and cannot achieve automated, immediate triggers. - **Option 4:** A calculated insight with streaming output processes data but does not natively trigger Salesforce CRM workflows in real time; additional custom integration would be required, introducing latency and complexity. Thus, Option 1 is the correct real‑time capability.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 23,
  "statement": "A subscription box company, TreatMonthly, wants to create an audience where each individual subscription shipment generates a separate record in the published segment. If a customer has three active subscriptions (e.g., snacks, beauty, pet), the segment should contain three distinct entries for that customer to enable shipment-specific tracking. All shipments are stored in the Shipment Order DMO, and Identity Resolution unifies customers on the Unified Individual DMO. Which configuration should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Build the segment on the Unified Individual DMO with a calculated insight."
   },
   {
    "key": "b",
    "text": "Build the segment on the Individual DMO with a filter on shipment count."
   },
   {
    "key": "c",
    "text": "Build the segment on a custom DMO that aggregates shipments by customer."
   },
   {
    "key": "d",
    "text": "Build the segment directly on the Shipment Order DMO."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should build the segment directly on the Shipment Order DMO (Option 4). Because each Shipment Order DMO record corresponds to one subscription shipment, segmenting on this DMO produces one audience record per shipment. This ensures that a customer with three active subscriptions will have three distinct entries in the published segment, enabling shipment‑specific tracking and messaging. Identity Resolution can still be used to link shipments to unified individuals, but the segment itself is built on the shipment entity. **Why the other options are incorrect:** - **Option 1:** Segmenting on the Unified Individual DMO produces one record per unified customer, regardless of how many shipments that customer has, failing the requirement. - **Option 2:** Segmenting on the Individual DMO also produces one record per source individual, not per shipment. - **Option 3:** A custom aggregated DMO that collapses multiple shipments by customer would also produce one record per customer, defeating the purpose. Thus, building the segment on the Shipment Order DMO is the correct configuration.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 24,
  "statement": "During a GDPR compliance discussion, a customer states they must honor Right to Be Forgotten requests. The Data 360 Consultant confirms that Consent API can address this requirement. What important detail should the consultant communicate to the customer?",
  "options": [
   {
    "key": "a",
    "text": "Deletion requests are tied to Individual profiles and require identification of the corresponding Individual record."
   },
   {
    "key": "b",
    "text": "Deletion requests are automatically propagated to all connected third-party marketing systems."
   },
   {
    "key": "c",
    "text": "All related records across all DMOs are deleted instantly upon request submission."
   },
   {
    "key": "d",
    "text": "Deletion processing completes within 30 minutes for all Individual profiles."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The important detail is that deletion requests are tied to Individual profiles and require identification of the corresponding Individual record (Option 1). The Consent API processes deletion requests at the Individual level. Therefore, the customer must have a reliable way to map a person's identity (e.g., email address, user ID) to the specific Individual record in Data 360 before submitting the deletion request. **Why the other options are incorrect:** - **Option 2:** Deletion requests are not automatically propagated to third‑party marketing systems; each external system must independently handle deletion as required by regulations. - **Option 3:** Related records may not be automatically deleted without proper configuration. Deletion scope depends on how relationships and cascading rules are set up; it is not instant for all DMOs by default. - **Option 4:** Deletion processing times vary based on data volume and system load; there is no guaranteed 30‑minute completion window. Thus, Option 1 highlights the critical prerequisite for using Consent API effectively.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 25,
  "statement": "A furniture retailer, ModernHome, has a custom object called \"Preferred_Contact_Email__c\" that stores alternate email addresses for customers, related to the standard Contact object in Salesforce CRM. The marketing team wants to use these email addresses for activation campaigns. Which data model object (DMO) should the consultant map this custom object to?",
  "options": [
   {
    "key": "a",
    "text": "Individual"
   },
   {
    "key": "b",
    "text": "Contact"
   },
   {
    "key": "c",
    "text": "Custom Object"
   },
   {
    "key": "d",
    "text": "Contact Point Email"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should map this custom object to the Contact Point Email DMO (Option 4). The Contact Point Email DMO is the standard Data 360 object designed to store email contact points, regardless of whether they originate from a standard Contact email field or a custom object like Preferred_Contact_Email__c. This mapping ensures that the email addresses are properly recognized as contact points, enabling activation campaigns, identity resolution, and other downstream processes. **Why the other options are incorrect:** - **Option 1:** Individual DMO stores person‑level identity attributes (name, birth date, etc.) — not email addresses. - **Option 2:** Contact DMO stores contact attributes like job title and department, but email addresses should be stored in Contact Point Email for proper contact point management. - **Option 3:** \"Custom Object\" is not a standard target DMO; custom objects are source objects, not mapping targets. Thus, Contact Point Email is the correct target DMO.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 26,
  "statement": "A Data 360 Consultant is explaining sandbox behavior to a stakeholder at a financial services firm. The stakeholder asks what data is included in a standard Data 360 sandbox environment. What should the consultant say?",
  "options": [
   {
    "key": "a",
    "text": "Only metadata such as DMO definitions, mappings, calculated insight configurations, and segment rules."
   },
   {
    "key": "b",
    "text": "A complete copy of all production data including sensitive customer financial records."
   },
   {
    "key": "c",
    "text": "A sample of 10,000 random records from each production data lake object."
   },
   {
    "key": "d",
    "text": "A real-time read-only connection to the production data lake for live querying."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should explain that a standard Data 360 sandbox includes only metadata — such as DMO definitions, field mappings, calculated insight configurations, segment definitions, and activation settings — but does not include production data (Option 1). This metadata‑only approach allows teams to test configurations, develop new segments, and validate calculated insights without copying sensitive customer data into the sandbox environment, which reduces storage costs and privacy exposure. **Why the other options are incorrect:** - **Option 2:** Standard sandboxes do not copy production data; this would create unnecessary privacy and security risks, especially for financial services. - **Option 3:** Data sampling is not a standard feature of Data 360 sandboxes; sandboxes are metadata‑only unless explicitly configured with data. - **Option 4:** Sandboxes do not have real‑time, live querying access to production data lakes; they are isolated environments. Thus, Option 1 accurately describes a standard Data 360 sandbox.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 27,
  "statement": "A data analyst needs to build a calculated insight that computes \"Customer Lifetime Value\" (CLV) at the unified customer level. Transaction amounts are stored in the Transaction DMO, source customer records are in the Source Contact DMO, and resolved profiles are in the Unified Customer DMO. Which join sequence is required within the calculated insight?",
  "options": [
   {
    "key": "a",
    "text": "Unified Customer → Source Contact → Transaction"
   },
   {
    "key": "b",
    "text": "Transaction → Unified Customer"
   },
   {
    "key": "c",
    "text": "Source Contact → Transaction → Unified Customer"
   },
   {
    "key": "d",
    "text": "Transaction → Source Contact → Unified Customer"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The required join sequence is Transaction → Source Contact → Unified Customer (Option 4). The Transaction DMO contains revenue amounts and joins to the Source Contact DMO (the originating CRM record), which then joins to the Unified Customer DMO (the resolved unified profile). This path allows the calculated insight to accurately compute Customer Lifetime Value at the unified level while preserving transactional detail and correctly handling cases where multiple source contacts resolve to one unified customer. **Why the other options are incorrect:** - **Option 1:** Starting with Unified Customer and going backward is less efficient and may not correctly handle cases where multiple source contacts map to one unified customer. - **Option 2:** Joining Transaction directly to Unified Customer skips the Source Contact layer, potentially causing incorrect aggregation or missing relationships when multiple source records resolve to one unified profile. - **Option 3:** Starting with Source Contact before Transaction works, but the sequence Transaction → Source Contact → Unified Customer is the standard and most efficient pattern for CLV calculations. Thus, Option 4 is the correct join sequence.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 28,
  "statement": "A Data 360 Consultant is configuring ingestion of clickstream data from a retail website. The legal team requires that the raw, unaltered data be preserved exactly as received from the source system to maintain an audit trail of the original transmission. Which object type in Data 360 serves this purpose?",
  "options": [
   {
    "key": "a",
    "text": "Data Lake Object (DLO)"
   },
   {
    "key": "b",
    "text": "Data Model Object (DMO)"
   },
   {
    "key": "c",
    "text": "Calculated Insight Object"
   },
   {
    "key": "d",
    "text": "Source Reference Object"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The object type that serves this purpose is the Data Lake Object (DLO) (Option 1). A DLO is the container for raw, unmodified source data exactly as it appears in the source system. It preserves the original payload before any mapping, transformations, enrichment, or normalization, providing a historical audit trail of the original transmission as required by legal and compliance teams. **Why the other options are incorrect:** - **Option 2:** Data Model Objects (DMOs) store mapped, transformed, and enriched data ready for analytics and activation — not the raw unmodified source data. - **Option 3:** Calculated Insight Objects store derived metrics and aggregated results, not raw source payloads. - **Option 4:** \"Source Reference Object\" is not a standard object type in Data 360 for storing raw source data. Thus, DLOs are the correct choice for preserving raw data for audit trails.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 29,
  "statement": "A source system feeding into Data 360 does not contain any single field that can serve as a unique identifier for its records. The data can be uniquely identified only by combining three fields together. What should the Data 360 Consultant do?",
  "options": [
   {
    "key": "a",
    "text": "Ask the source system owner to add a new unique identifier field."
   },
   {
    "key": "b",
    "text": "Use the Data 360 system-generated row ID as the primary key."
   },
   {
    "key": "c",
    "text": "Accept that the data cannot be properly ingested without a primary key."
   },
   {
    "key": "d",
    "text": "Create a composite key by concatenating the three source fields using a formula field."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should create a composite key by concatenating the three source fields using a formula field (Option 4). When a source system lacks a single‑field primary key, combining multiple fields through concatenation creates a composite key that uniquely identifies each row. This is a standard, supported approach in Data 360 for such scenarios. **Why the other options are incorrect:** - **Option 1:** Asking the source system owner to add a new field may be impossible, time‑consuming, or outside project scope. Data 360 provides a native solution via composite keys, making this unnecessary. - **Option 2:** System‑generated row IDs are not based on source data values and cannot be used for matching, deduplication, or incremental updates against source records. - **Option 3:** Data can be properly ingested using a composite key. This is a standard approach, and accepting otherwise would be incorrect. Thus, creating a composite key is the correct solution.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 30,
  "statement": "A Data 360 Consultant is configuring an activation for a segment built on the Unified Customer DMO to be sent to a CDP destination. The activation payload needs to include \"Rewards Tier\" from the Loyalty Member DMO, even though this DMO was not used in the segment's filtering criteria. How can the consultant include this field during activation setup?",
  "options": [
   {
    "key": "a",
    "text": "Use Activation Membership to select the Loyalty Member DMO and add the Rewards Tier field to the payload."
   },
   {
    "key": "b",
    "text": "Rebuild the segment to include the Loyalty Member DMO in the segment definition."
   },
   {
    "key": "c",
    "text": "Create a calculated insight that joins Loyalty Tier to Unified Customer before activation."
   },
   {
    "key": "d",
    "text": "Add the Rewards Tier field as a direct attribute from the Unified Customer DMO."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use Activation Membership to select the Loyalty Member DMO and add the Rewards Tier field to the payload (Option 1). Activation Membership allows inclusion of fields from additional DMOs without modifying the original segment definition. This is the standard, non‑disruptive approach for adding related attributes to an activation payload. **Why the other options are incorrect:** - **Option 2:** Rebuilding the segment adds unnecessary complexity and may require revalidating all segment logic. Activation Membership is the cleaner approach. - **Option 3:** Creating a calculated insight solely to bring in one field adds unnecessary processing overhead, storage, and maintenance complexity. - **Option 4:** Rewards Tier does not exist on the Unified Customer DMO; it resides on the Loyalty Member DMO and cannot be added as a direct attribute. Thus, Activation Membership is the correct method.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 31,
  "statement": "A Data 360 Consultant is setting up a new data stream from a Salesforce CRM source. A custom object called \"Warehouse_Inventory__c\" does not appear in the list of available objects during configuration. Which permission should the consultant verify in the source Salesforce CRM organization?",
  "options": [
   {
    "key": "a",
    "text": "The \"Read\" field-level permission is enabled for all fields on the custom object."
   },
   {
    "key": "b",
    "text": "The \"Modify All Data\" system permission is assigned to the integration user."
   },
   {
    "key": "c",
    "text": "The \"API Enabled\" permission is active on the integration user's profile."
   },
   {
    "key": "d",
    "text": "The \"View All\" object-level permission is enabled for the connected integration user."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should verify that the \"View All\" object‑level permission is enabled for the connected integration user in the source Salesforce CRM org (Option 4). Data 360 requires this permission to discover and access custom object metadata. Without it, the object will not appear in the data stream configuration list. **Why the other options are incorrect:** - **Option 1:** Read field‑level permissions control access to field values but do not affect whether the object itself appears in the configuration list. - **Option 2:** \"Modify All Data\" is a powerful permission not required for object discovery. \"View All\" is the appropriate minimal permission. - **Option 3:** \"API Enabled\" allows API calls but does not control custom object visibility in Data 360 configuration. Thus, Option 4 is the correct permission to verify.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 32,
  "statement": "A marketing analyst is creating Salesforce reports based on calculated insights in Data 360. What important data freshness limitation should the Data 360 Consultant communicate to the analyst?",
  "options": [
   {
    "key": "a",
    "text": "The data in reports reflects the state at the time of the most recent batch calculation of the insight."
   },
   {
    "key": "b",
    "text": "Calculated insights cannot be included in reports unless they are first activated to an external system."
   },
   {
    "key": "c",
    "text": "Reports on calculated insights are limited to a maximum of 5,000 rows per report."
   },
   {
    "key": "d",
    "text": "Calculated insights refresh automatically every hour with no option to change the schedule."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The important limitation is that calculated insights are batch‑processed, so the data in reports reflects the state at the time of the most recent batch calculation (Option 1). There is no real‑time or near‑real‑time freshness for calculated insight reporting. Even if source data is updated, the report will not show changes until the next batch processing run. **Why the other options are incorrect:** - **Option 2:** Calculated insights are available for reporting without any activation to external systems. - **Option 3:** There is no fixed row limit of 5,000 for reporting on calculated insights; limits depend on the reporting tool. - **Option 4:** Calculated insight refresh frequency is configurable, not fixed at hourly intervals, but the batch nature remains. Thus, Option 1 correctly communicates the data freshness limitation.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 33,
  "statement": "A wealth management firm, OakBridge Capital, wants to identify high-net-worth clients who visit the \"market volatility\" page more than twice within a 15-minute window and immediately trigger a personalized SMS offering a portfolio review. Which Data 360 feature should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Calculated insight with a scheduled batch export to the SMS system every 30 minutes."
   },
   {
    "key": "b",
    "text": "Standard segment with daily publish to the marketing automation platform."
   },
   {
    "key": "c",
    "text": "Rapid publish segment refreshing every 5 minutes to an external webhook."
   },
   {
    "key": "d",
    "text": "Streaming insight configured with a real-time data action to the SMS delivery system."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should recommend a streaming insight configured with a real‑time data action to the SMS delivery system (Option 4). Streaming insights evaluate streaming data continuously and can detect time‑bound patterns (e.g., >2 page visits in 15 minutes) in near real time. When the pattern is detected, a real‑time data action can immediately trigger an SMS, meeting the requirement for immediate response. **Why the other options are incorrect:** - **Option 1:** Calculated insights are batch‑based and introduce latency (every 30 minutes), failing the immediate requirement. - **Option 2:** Daily publish is far too slow for a real‑time trigger. - **Option 3:** Rapid publish every 5 minutes still introduces up to 5 minutes of latency, which is not immediate. Thus, streaming insight with a real‑time data action is the correct feature.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 34,
  "statement": "A multinational retailer, GlobeStyle, uses Data 360 to unify customer profiles across Salesforce CRM, Service Cloud, and a Redshift data warehouse. The analytics team needs read-only access to unified customer data in Redshift with updates available within minutes, while minimizing data duplication and operational overhead. Which approach should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Configure Data 360 Data Sharing to expose unified customer data directly to Redshift."
   },
   {
    "key": "b",
    "text": "Build custom REST APIs to stream data from Data 360 to Redshift via Kafka."
   },
   {
    "key": "c",
    "text": "Schedule hourly CSV exports from Data 360 to S3 and load into Redshift using COPY commands."
   },
   {
    "key": "d",
    "text": "Replicate Data 360 data into Salesforce standard objects and sync using third-party ETL tools."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should recommend configuring Data 360 Data Sharing to expose unified customer data directly to Redshift (Option 1). Data Sharing provides zero‑copy, read‑only access to Data 360 objects from external platforms like Redshift, with updates available within minutes, minimal data duplication, and low operational overhead. **Why the other options are incorrect:** - **Option 2:** Custom REST APIs with Kafka add significant engineering complexity and maintenance costs without providing benefit over native Data Sharing. - **Option 3:** Hourly CSV exports do not meet the \"within minutes\" near‑real‑time requirement and add manual pipeline overhead. - **Option 4:** Replicating to Salesforce standard objects then syncing creates unnecessary duplication, latency, and multiple points of failure. Thus, Data 360 Data Sharing is the optimal solution.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 35,
  "statement": "A healthcare organization, CareNet, has multiple regional marketing teams, each managing their own patient segments. All segments must exclude patients who have opted out of email communication, and this exclusion list is updated weekly. What is the most efficient way to maintain this common exclusion logic across all segments?",
  "options": [
   {
    "key": "a",
    "text": "Duplicate the exclusion criteria manually into each regional segment and update them individually each week."
   },
   {
    "key": "b",
    "text": "Build a master segment for opt-out patients and use nested segment exclusion in every regional segment."
   },
   {
    "key": "c",
    "text": "Publish a data kit containing the exclusion logic and deploy it weekly to each regional team's workspace."
   },
   {
    "key": "d",
    "text": "Create a reusable criteria container containing the email opt-out exclusion and reference it in all segments."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient way is to create a reusable criteria container containing the email opt‑out exclusion and reference it in all segments (Option 4). A reusable container block can be saved and referenced across multiple segments. When the exclusion list is updated weekly, the consultant updates the container once, and all segments using it automatically inherit the change, eliminating manual duplication and reducing maintenance overhead. **Why the other options are incorrect:** - **Option 1:** Manual duplication is error‑prone, time‑consuming, and creates maintenance overhead. - **Option 2:** A nested segment referencing an opt‑out segment works but is less flexible than a reusable container. - **Option 3:** A data kit is designed for packaging configurations across orgs, not for sharing logic within the same org weekly. Thus, a reusable container is the best approach.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 36,
  "statement": "A Data 360 Consultant is building a model in Einstein Studio to predict the number of days between a lead's first website visit and their first purchase. Based on the target variable type, which model type is appropriate?",
  "options": [
   {
    "key": "a",
    "text": "Regression, because the target outcome is a continuous numeric value."
   },
   {
    "key": "b",
    "text": "Binary Classification, because the outcome can be categorized as \"fast\" or \"slow.\""
   },
   {
    "key": "c",
    "text": "Multiclass Classification, because days can be bucketed into week-long ranges."
   },
   {
    "key": "d",
    "text": "Time Series Forecasting, because the data involves time-based sequences."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The appropriate model type is regression (Option 1). The number of days between a lead's first website visit and first purchase is a continuous numeric value. Regression models are specifically designed to predict continuous numeric outcomes, making them the correct choice for this prediction task. **Why the other options are incorrect:** - **Option 2:** Binary classification reduces a continuous measure to two arbitrary categories, losing precision. - **Option 3:** Bucketing a continuous value into ranges changes the problem from regression to classification, but regression is more appropriate when the exact numeric value is valuable. - **Option 4:** Time series forecasting predicts future values based on historical patterns over time, not the relationship between two events for individual leads. Thus, regression is the correct model type.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 37,
  "statement": "A user has built a segment on the Unified Individual DMO. During activation configuration, they cannot select a specific set of attributes that they know exist in the data model and are related to individuals. What is the most likely reason?",
  "options": [
   {
    "key": "a",
    "text": "The attributes are currently locked because another user is editing a different activation."
   },
   {
    "key": "b",
    "text": "The activation target does not support custom attributes beyond standard fields."
   },
   {
    "key": "c",
    "text": "The segment contains a filter that automatically excludes those attributes from selection."
   },
   {
    "key": "d",
    "text": "The attributes reside on different related paths from the segment's base object with no single unambiguous join path."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most likely reason is that the attributes reside on different related paths from the segment's base object with no single unambiguous join path (Option 4). During activation configuration, the system only shows attributes that are reachable via a single, unambiguous relationship path from the base object. If desired attributes come from different related paths, they cannot be selected together. **Why the other options are incorrect:** - **Option 1:** Attributes are not locked because they are used in another activation; multiple activations can reference the same attributes. - **Option 2:** Most activation targets support custom attributes; this is not the likely reason. - **Option 3:** Segment filters do not hide related attributes from activation attribute selection. Thus, Option 4 correctly identifies the cause.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 38,
  "statement": "Which statement accurately describes how query federation operates in Data 360?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 pushes the SQL query execution to the external system's own compute resources."
   },
   {
    "key": "b",
    "text": "Data 360 copies all external data into its local storage before executing any query."
   },
   {
    "key": "c",
    "text": "Query federation requires all external data to be converted to Apache Iceberg format first."
   },
   {
    "key": "d",
    "text": "Data 360 executes all federated queries using its internal compute engine exclusively."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Query federation in Data 360 pushes SQL query execution to the external system's own compute resources (Option 1). This pushdown optimization leverages the external system's processing power, minimizes data movement, and avoids copying data into Data 360 storage. **Why the other options are incorrect:** - **Option 2:** Query federation avoids copying data; it reads only results. - **Option 3:** Iceberg conversion is not required; query federation works with various external formats. - **Option 4:** Data 360 delegates execution to the external system; it does not execute federated queries with its own engine. Thus, Option 1 accurately describes how query federation operates.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 39,
  "statement": "A large enterprise, Harbor Group, has three divisions: Retail Banking, Wealth Management, and Insurance. Each division must operate within the same Data 360 home org but keep their customer data and metadata fully separated for compliance reasons. Which mechanism should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Assign different permission sets to users from each division within a single data space."
   },
   {
    "key": "b",
    "text": "Build separate companion connections for each division pointing to different source systems."
   },
   {
    "key": "c",
    "text": "Use record-type filtering on all DMOs to restrict access based on division."
   },
   {
    "key": "d",
    "text": "Create a separate data space for each division to isolate their data and configurations."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should create a separate data space for each division (Option 4). Data spaces provide logical separation of data and metadata within a single Data 360 home org, allowing each division to operate independently with fully isolated customer data and configurations, meeting compliance requirements. **Why the other options are incorrect:** - **Option 1:** Permission sets control user access but do not provide logical data separation; users could potentially see other divisions' configurations. - **Option 2:** Companion connections connect external systems but do not isolate data and metadata within Data 360. - **Option 3:** Record‑type filtering is error‑prone and complex for maintaining true logical separation. Thus, data spaces are the appropriate mechanism.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 40,
  "statement": "The support team at CloudServe wants to identify customers who have opened the \"contact support\" page more than three times within the last 10 minutes. These customers should be instantly added to a high-touch segment and automatically routed to a priority queue in the service platform. Which feature should the Data 360 Consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Streaming insight that evaluates the rolling 10-minute window on incoming web events."
   },
   {
    "key": "b",
    "text": "Calculated insight running every 15 minutes to evaluate page view counts."
   },
   {
    "key": "c",
    "text": "Batch transform scheduled every 10 minutes to aggregate event data."
   },
   {
    "key": "d",
    "text": "Standard segment refreshed hourly and exported to the service platform."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should recommend a streaming insight that evaluates the rolling 10‑minute window on incoming web events (Option 1). Streaming insights are designed for near‑real‑time evaluation of streaming data, including rolling time windows. They can detect the pattern (>3 page opens in 10 minutes) continuously and immediately make the customers available for segmentation and downstream actions like queue routing. **Why the other options are incorrect:** - **Option 2:** A calculated insight running every 15 minutes introduces latency and cannot achieve a 10‑minute rolling window with low latency. - **Option 3:** A batch transform processes data in batches but does not evaluate multi‑event patterns over a rolling time window. - **Option 4:** A standard segment refreshed hourly is far too slow for near‑real‑time requirement. Thus, streaming insight is the correct feature.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 41,
  "statement": "A Data 360 Consultant is building an audience segment for a retail client. Which types of criteria can be used to define the segment membership?",
  "options": [
   {
    "key": "a",
    "text": "Precomputed metric values and streaming event patterns only"
   },
   {
    "key": "b",
    "text": "Fields from the base object, fields from linked objects, and precomputed metric values"
   },
   {
    "key": "c",
    "text": "Only fields that exist directly on the primary data model object"
   },
   {
    "key": "d",
    "text": "Fields from the base object and fields from linked objects only"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Segment membership criteria can be defined using fields from the base object (direct attributes), fields from linked objects (related attributes), and precomputed metric values (calculated insights) (Option 2). These three types provide the flexibility to build sophisticated audience segments based on both raw attributes and derived metrics. **Why the other options are incorrect:** - **Option 1:** Streaming patterns are not available as segmentation criteria; precomputed metrics are available, but streaming patterns are not. - **Option 3:** Segmentation is not limited to direct attributes only; related attributes and calculated insights are also available. - **Option 4:** Calculated insights are also supported and commonly used for segmentation based on aggregated customer behavior and metrics. Thus, Option 2 correctly lists the three criteria types.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 42,
  "statement": "A direct-to-consumer brand, Velvet & Twine, uses Salesforce B2C Commerce and wants to bring 3 years of purchase history into Data 360 for customer lifetime value modeling. What should the company use to accomplish this?",
  "options": [
   {
    "key": "a",
    "text": "Standard Sales Order object ingestion configured with a 3-year lookback window"
   },
   {
    "key": "b",
    "text": "A custom API integration built specifically for historical order data"
   },
   {
    "key": "c",
    "text": "B2C Commerce Starter Bundles only, with no additional configuration"
   },
   {
    "key": "d",
    "text": "B2C Commerce Starter Bundles combined with a custom data extract for historical transactions"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The company should use B2C Commerce Starter Bundles combined with a custom data extract for historical transactions (Option 4). The Starter Bundles provide pre‑built mappings and data streams for ongoing data, but they typically do not include multi‑year historical data. A custom extract is necessary to bring the full 3‑year purchase history into Data 360. **Why the other options are incorrect:** - **Option 1:** Standard Sales Order ingestion is not specifically designed for B2C Commerce historical transaction data. - **Option 2:** A custom API integration is possible but unnecessarily complex when Starter Bundles plus custom extract provides a standard, supported approach. - **Option 3:** Starter Bundles alone do not include multi‑year historical data without a custom extract. Thus, Option 4 is the correct solution.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 43,
  "statement": "A financial analytics team has developed a custom credit risk scoring model using Google Vertex AI. The organization wants to apply this model to Unified Profiles in Data 360 and use the scores in a compliance segment, without exporting or duplicating customer data. Which feature should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Streaming Transform with HTTP Callout"
   },
   {
    "key": "b",
    "text": "Einstein Studio Bring Your Own Model (BYOM)"
   },
   {
    "key": "c",
    "text": "Data Kit with Embedded Python Logic"
   },
   {
    "key": "d",
    "text": "External Model Connector for Vertex AI"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use Einstein Studio Bring Your Own Model (BYOM) (Option 2). BYOM allows importing custom models built in external platforms like Google Vertex AI into Salesforce Einstein Studio and applying them directly to Data 360 Unified Profiles without moving or duplicating customer data out of Data 360. **Why the other options are incorrect:** - **Option 1:** Streaming transforms do not natively integrate external custom models for scoring Unified Profiles. - **Option 3:** Data kits package configurations but do not execute external machine learning models. - **Option 4:** \"External Model Connector\" is not a standard Data 360 feature for this purpose. Thus, BYOM is the correct feature.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 44,
  "statement": "A healthcare system, WellBridge Health, stores patient data in three different systems: an EHR platform, a patient portal, and a billing system. Each system uses a different internal patient ID. However, all three systems consistently capture the same \"National Patient ID\" for every individual. Which identity resolution feature should the consultant use to unify these records?",
  "options": [
   {
    "key": "a",
    "text": "Exact Name and Date of Birth match rule"
   },
   {
    "key": "b",
    "text": "Fuzzy Email Address match rule"
   },
   {
    "key": "c",
    "text": "Party Identification match rule configured on the National Patient ID field"
   },
   {
    "key": "d",
    "text": "Internal System ID match rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use a Party Identification match rule configured on the National Patient ID field (Option 3). Party Identification match rules are specifically designed to match records based on a common external identifier that is consistent across systems, regardless of internal IDs. This is the most reliable way to unify records using the National Patient ID. **Why the other options are incorrect:** - **Option 1:** Exact Name and Date of Birth is less reliable than using the available unique identifier. - **Option 2:** Fuzzy Email match rule is for email fields, not for a precise identifier like National Patient ID. - **Option 4:** Internal System ID match rule would not find matches because each system uses different internal IDs. Thus, Party Identification is the correct feature.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 45,
  "statement": "A Data 360 Consultant is helping a regional bank identify their first implementation use case. Which scenario aligns with Salesforce best practices for an initial Data 360 deployment?",
  "options": [
   {
    "key": "a",
    "text": "Redefining global identity resolution rules across 50 million records in all 50 states without a pilot"
   },
   {
    "key": "b",
    "text": "Building a real-time fraud detection system integrating 20 external data sources in the first sprint"
   },
   {
    "key": "c",
    "text": "Migrating 25 years of archived loan documents into Data 360 for long-term storage cost savings"
   },
   {
    "key": "d",
    "text": "Unifying customer data from the bank's checking, savings, and loan platforms to provide a complete customer view to branch managers"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The scenario that aligns with Salesforce best practices for an initial Data 360 deployment is unifying customer data from the bank's checking, savings, and loan platforms to provide a complete customer view to branch managers (Option 4). This use case has clear business value, manageable scope (three related systems, one department), and follows the best practice of starting with a focused, high‑impact pilot before scaling. **Why the other options are incorrect:** - **Option 1:** Redefining global identity resolution for 50 million records without a pilot is too large and risky for an initial deployment. - **Option 2:** Building a real‑time fraud detection system with 20 external sources is far too ambitious for a first implementation. - **Option 3:** Migrating archived documents for storage cost reduction is a migration project, not a customer experience improvement, and carries high data volume risk. Thus, Option 4 is the appropriate initial use case.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 46,
  "statement": "A customer support director wants to deploy generative AI to help agents answer technical product questions. They are concerned the AI will produce generic or incorrect answers without access to the company's internal knowledge base, product manuals, and previous support ticket resolutions. Which Data 360 feature ensures the AI uses this internal data to generate accurate, context-specific responses?",
  "options": [
   {
    "key": "a",
    "text": "Vector embedding optimization to compress internal data into smaller representations"
   },
   {
    "key": "b",
    "text": "Prompt caching to store frequently asked questions and their answers locally"
   },
   {
    "key": "c",
    "text": "Structured data conversion to transform all knowledge base articles into Salesforce records"
   },
   {
    "key": "d",
    "text": "Retrieval Augmented Generation (RAG) to inject relevant internal content into the AI prompt"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The feature that ensures the AI uses internal data to generate accurate, context‑specific responses is Retrieval Augmented Generation (RAG) (Option 4). RAG retrieves relevant internal content from Data 360 (knowledge base, product manuals, support tickets) and injects it into the AI prompt, grounding the response in trusted company data. **Why the other options are incorrect:** - **Option 1:** Vector embedding optimization improves RAG but does not itself ground prompts. - **Option 2:** Prompt caching stores previous responses but does not retrieve current, relevant internal content for each query. - **Option 3:** Converting unstructured data to structured data is helpful but does not alone provide the retrieval mechanism needed for grounding. Thus, RAG is the correct feature.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 47,
  "statement": "A luxury hotel chain (data provider) and an airline (data consumer) are collaborating in a Data 360 clean room using the segment overlap template. They want to identify how many of the hotel's \"Platinum Elite\" members are also frequent flyers of the airline, and then filter results by \"Travel Region\" and \"Season.\" To enable filtering by these demographics in the final output, what must the hotel chain do?",
  "options": [
   {
    "key": "a",
    "text": "Create a shared calculated insight that joins Travel Region and Season across both parties."
   },
   {
    "key": "b",
    "text": "Include Travel Region and Season as segmentation attributes when configuring the use case template."
   },
   {
    "key": "c",
    "text": "Configure a many-to-many relationship between the two search index data model objects."
   },
   {
    "key": "d",
    "text": "Map Travel Region and Season as foreign keys in both organizations' data model objects."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To enable filtering by demographics like Travel Region and Season in the segment overlap output, the hotel chain must include Travel Region and Season as segmentation attributes when configuring the use case template (Option 2). This makes these fields available for filtering while preserving privacy through the clean room's mechanisms. **Why the other options are incorrect:** - **Option 1:** Shared calculated insights are not necessary for including demographic fields as segmentation attributes. - **Option 3:** Many‑to‑many relationships are not relevant to demographic filtering in segment overlap outputs. - **Option 4:** Foreign key configuration is not the requirement for making demographic fields available as filters. Thus, Option 2 is correct.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 48,
  "statement": "A logistics company, FreightPath, is ingesting shipment data from a legacy system that lacks a primary key. The combination of \"Shipment Origin\" and \"Shipment Reference Number\" uniquely identifies each row. Which formula function should the consultant use to create a composite key from these two fields?",
  "options": [
   {
    "key": "a",
    "text": "UNION"
   },
   {
    "key": "b",
    "text": "APPEND"
   },
   {
    "key": "c",
    "text": "CONCAT"
   },
   {
    "key": "d",
    "text": "MERGE"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use the CONCAT function (Option 3). CONCAT concatenates two or more string fields into a single value. By concatenating Shipment Origin and Shipment Reference Number, a unique composite key is created for each row. **Why the other options are incorrect:** - **Option 1:** UNION is a SQL set operation, not a string concatenation function. - **Option 2:** APPEND is not a standard formula function for this purpose. - **Option 4:** MERGE is not a standard function for concatenation in Data 360. Thus, CONCAT is the correct function.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 49,
  "statement": "A media company's marketing team is new to Data 360 and struggles to remember exact values for fields like \"Content Genre\" (e.g., \"Documentary,\" \"Reality TV,\" \"Drama\") when building segments. This causes delays as team members repeatedly ask the data team for valid values. Which configuration should the consultant enable on the Content Genre field to help users see available values directly in the segment builder?",
  "options": [
   {
    "key": "a",
    "text": "A report exported to CSV with all distinct genre values"
   },
   {
    "key": "b",
    "text": "Value Suggestion on the text field to display existing values from the data"
   },
   {
    "key": "c",
    "text": "A data kit containing a lookup table of genre values"
   },
   {
    "key": "d",
    "text": "A calculated insight that lists all unique genre values"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should enable Value Suggestion on the text field (Option 2). Value Suggestion provides auto‑suggestions of existing data values directly within the segment builder UI, allowing users to see and select from valid values without leaving the interface or asking the data team. **Why the other options are incorrect:** - **Option 1:** A CSV report requires users to leave the segment builder, causing inefficiency. - **Option 3:** A data kit does not provide inline value suggestions during segment building. - **Option 4:** A calculated insight listing unique values does not integrate into the segment builder interface for inline selection. Thus, Value Suggestion is the correct configuration.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 50,
  "statement": "A manufacturing company, SteelPeak Industries, wants to track \"Average Machine Downtime\" across their factories. They need near-real-time reporting that allows different teams (maintenance, operations, quality) to view the metric across their relevant dimensions (factory location, machine type, shift, product line) using data from ERP, MES, IoT sensors, and CRM. Which solution best meets this need?",
  "options": [
   {
    "key": "a",
    "text": "DMO formula fields calculated at ingestion time"
   },
   {
    "key": "b",
    "text": "Factory-specific reports built directly in the ERP system"
   },
   {
    "key": "c",
    "text": "Calculated Insights with batch processing every 6 hours"
   },
   {
    "key": "d",
    "text": "Semantic Model Metrics for flexible, near-real-time multidimensional analysis"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The solution that best meets the need is Semantic Model Metrics (Option 4). Semantic Model Metrics provide near‑real‑time, multidimensional analysis across data from multiple sources, allowing business users to explore metrics like Average Machine Downtime across dimensions (factory location, machine type, shift, product line) without technical intervention. **Why the other options are incorrect:** - **Option 1:** DMO formula fields are row‑level and cannot compute aggregates like averages. - **Option 2:** Factory‑specific reports would not incorporate data from all required sources (MES, IoT sensors, CRM). - **Option 3:** Calculated Insights with batch processing every 6 hours would not meet near‑real‑time requirements. Thus, Semantic Model Metrics are the best fit.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 51,
  "statement": "A data engineer at Summit Logistics observes that their daily identity resolution job processes only 15,000 records, even though the source system contains 200,000 customer records. The engineer confirms no errors or failures occurred. What explains this behavior?",
  "options": [
   {
    "key": "a",
    "text": "The identity resolution job only processes records that have been created or modified since the last successful run."
   },
   {
    "key": "b",
    "text": "The source system connection timed out during the job, causing most records to be skipped."
   },
   {
    "key": "c",
    "text": "The job hit a system limit of 15,000 records per batch execution."
   },
   {
    "key": "d",
    "text": "Only records with a minimum confidence score above 80% are eligible for processing."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The behavior is explained by the fact that identity resolution uses incremental change detection (Option 1). Only records that have been created or modified since the last successful run are processed. The remaining 185,000 records had no changes and were intelligently skipped, optimizing performance. **Why the other options are incorrect:** - **Option 2:** There is no timeout indication; the job completed successfully. - **Option 3:** There is no fixed limit of 15,000 records per batch. - **Option 4:** Confidence scores determine merging, not whether records are processed at all. Thus, Option 1 correctly explains the behavior.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 52,
  "statement": "A marketing manager needs an audience called \"VIP Engagement Target.\" The definition is: customers already in the \"High LTV\" segment OR customers who have opened more than 5 emails in the last week. The \"High LTV\" segment already exists and is maintained by the analytics team. What is the simplest way to build this new audience?",
  "options": [
   {
    "key": "a",
    "text": "Duplicate the \"High LTV\" segment and manually add the email engagement condition to the copy."
   },
   {
    "key": "b",
    "text": "Create a new segment that references the existing \"High LTV\" segment as a nested component and adds a separate container for the email engagement condition using OR logic."
   },
   {
    "key": "c",
    "text": "Export both conditions to a CSV file and upload them as a new audience."
   },
   {
    "key": "d",
    "text": "Build a calculated insight that flags both conditions and filter the segment on that insight."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The simplest way is to create a new segment that references the existing \"High LTV\" segment as a nested component and adds a separate container for the email engagement condition using OR logic (Option 2). This approach reuses the existing segment, avoids duplication, and is straightforward to implement and maintain. **Why the other options are incorrect:** - **Option 1:** Duplicating the segment creates maintenance overhead; updates to the original would not propagate. - **Option 3:** Exporting to CSV breaks automation and requires manual intervention. - **Option 4:** Building a calculated insight is over‑engineering for a simple OR condition. Thus, Option 2 is the simplest and most efficient approach.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 53,
  "statement": "A data architect needs to allow an external analytics team working in Amazon Redshift to query customer profiles stored in Data 360. The requirement specifies no data copying and no ETL pipelines. Which mechanism should the architect configure?",
  "options": [
   {
    "key": "a",
    "text": "A nightly batch export from Data 360 to S3, then load into Redshift."
   },
   {
    "key": "b",
    "text": "A REST API that streams data on demand from Data 360 to Redshift."
   },
   {
    "key": "c",
    "text": "A Data 360 Data Share that grants Redshift read-only access to the customer profile objects."
   },
   {
    "key": "d",
    "text": "A materialized view in Data 360 that replicates data to an external database."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The architect should configure a Data 360 Data Share that grants Redshift read‑only access to the customer profile objects (Option 3). Data Share enables zero‑copy, direct access to Data 360 objects from external platforms like Redshift, satisfying the requirements of no data copying and no ETL pipelines. **Why the other options are incorrect:** - **Option 1:** Nightly batch exports involve data copying and introduce latency. - **Option 2:** A REST API requires custom development and does not provide native query capabilities. - **Option 4:** A materialized view does not push data to external systems. Thus, Data Share is the correct mechanism.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 54,
  "statement": "After configuring identity resolution rules, a consultant needs to verify that source records are correctly merging into unified profiles. Which two tools should the consultant use together to both visually inspect individual unified records and programmatically validate large sets of unified data?",
  "options": [
   {
    "key": "a",
    "text": "Segment Builder and Activation Logs"
   },
   {
    "key": "b",
    "text": "Profile Viewer and SQL Query Editor"
   },
   {
    "key": "c",
    "text": "Data Stream Dashboard and Ingestion Metrics"
   },
   {
    "key": "d",
    "text": "Calculated Insight Explorer and Formula Tester"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use Profile Viewer and SQL Query Editor together (Option 2). Profile Viewer (Profile Explorer) provides visual inspection of individual unified profiles, showing which source records contributed. SQL Query Editor allows programmatic validation across large datasets using structured queries. Together, they enable both visual and scalable validation. **Why the other options are incorrect:** - **Option 1:** Segment Builder builds audiences, not validation; Activation Logs show delivery status. - **Option 3:** Data Stream Dashboard shows ingestion health; Ingestion Metrics show data volume, not unification quality. - **Option 4:** Calculated Insight Explorer and Formula Tester are for derived metrics, not identity resolution validation. Thus, Option 2 is correct.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 55,
  "statement": "A financial firm stores 10 years of transaction history in Snowflake. A team runs complex risk analysis queries on this data every Monday morning. The queries require fast response times but do not need sub-second freshness. What federation strategy should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Live federation without caching, querying Snowflake directly each time."
   },
   {
    "key": "b",
    "text": "Full data ingestion into Data 360 DLOs before each Monday analysis."
   },
   {
    "key": "c",
    "text": "Federated queries with result caching enabled, refreshed weekly before the analysis runs."
   },
   {
    "key": "d",
    "text": "Manual CSV exports from Snowflake uploaded to Data 360 on demand."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should recommend federated queries with result caching enabled, refreshed weekly before the analysis runs (Option 3). This strategy caches pre‑computed results or intermediate data, enabling fast response times for the weekly Monday morning analysis, while the weekly refresh balances performance with the non‑real‑time requirement. **Why the other options are incorrect:** - **Option 1:** Live federation without caching may be too slow for complex analytics on large datasets. - **Option 2:** Full data ingestion creates unnecessary duplication and storage costs. - **Option 4:** Manual CSV exports are error‑prone, labor‑intensive, and break automation. Thus, cached federation is the optimal strategy.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 56,
  "statement": "A segment called \"Promotion Eligible\" includes all customers who made a purchase in the last 90 days. When sending a special offer via email, the marketing team must exclude customers who have unsubscribed from email marketing. However, those same customers should still receive the offer via push notification. Where should the email exclusion logic be applied?",
  "options": [
   {
    "key": "a",
    "text": "Modify the \"Promotion Eligible\" segment to filter out email-unsubscribed customers."
   },
   {
    "key": "b",
    "text": "Apply email opt-out filtering at the activation level when configuring the email channel."
   },
   {
    "key": "c",
    "text": "Delete the email addresses of unsubscribed customers from the source CRM."
   },
   {
    "key": "d",
    "text": "Create a separate segment for email-unsubscribed customers and use a suppression list."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The email exclusion logic should be applied at the activation level when configuring the email channel (Option 2). Contact point filtering should be channel‑specific. The segment remains inclusive for all qualifying customers; only when activating to email do you apply email opt‑out filtering. The same segment can be activated to push notifications without that filter. **Why the other options are incorrect:** - **Option 1:** Modifying the segment would exclude email‑unsubscribed customers from all channels, including push notifications where they should be included. - **Option 3:** Deleting email addresses from the source CRM is destructive and affects other systems. - **Option 4:** A separate suppression segment adds complexity but still requires activation‑level filtering to apply it only to email sends. Thus, activation‑level filtering is the correct approach.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 57,
  "statement": "Two different marketing platforms send customer interaction events to Data 360. Both platforms use the same numeric string \"CUST-12345\" to identify the same person. Without additional qualification, events from Platform A could be mistakenly associated with Platform B's profile. What should the consultant configure to prevent this?",
  "options": [
   {
    "key": "a",
    "text": "A match rule that ignores the identifier and uses email address instead."
   },
   {
    "key": "b",
    "text": "A source-qualified key that prefixes each identifier with the originating platform name."
   },
   {
    "key": "c",
    "text": "A calculated insight that deduplicates events based on timestamp."
   },
   {
    "key": "d",
    "text": "A data stream filter that only accepts events from one platform."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should configure a source‑qualified key that prefixes each identifier with the originating platform name (Option 2). This creates unique composite identifiers (e.g., \"PlatformA|CUST-12345\") that prevent cross‑platform confusion while still allowing identity resolution to link the same person across platforms. **Why the other options are incorrect:** - **Option 1:** Ignoring the identifier loses valuable matching data and may not be sufficient. - **Option 3:** Timestamp deduplication does not solve source attribution. - **Option 4:** Filtering out one platform loses valuable data and defeats unification. Thus, a source‑qualified key is the correct solution.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 58,
  "statement": "Before a consultant can run federated queries against a Google BigQuery dataset from within Data 360, what must be configured first?",
  "options": [
   {
    "key": "a",
    "text": "The specific BigQuery table schemas mapped to Data 360 DMOs."
   },
   {
    "key": "b",
    "text": "The identity resolution rules for BigQuery records."
   },
   {
    "key": "c",
    "text": "A connection object in Data 360 containing BigQuery authentication credentials and endpoint details."
   },
   {
    "key": "d",
    "text": "A data stream with the Bulk API category selected."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Before running federated queries against Google BigQuery, a connection object in Data 360 containing BigQuery authentication credentials and endpoint details must be configured first (Option 3). This connection is the foundational prerequisite for any federation query; without it, Data 360 cannot authenticate or communicate with BigQuery. **Why the other options are incorrect:** - **Option 1:** Table schema mapping occurs after the connection is established. - **Option 2:** Identity resolution rules are unrelated to establishing the federation connection. - **Option 4:** Bulk API data streams are for ingestion, not for zero‑copy federation setup. Thus, Option 3 is correct.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 59,
  "statement": "A Data 360 administrator notices that the monthly \"profile consolidation ratio\" (unified profiles divided by source profiles) jumped from 0.35 to 0.52 after a recent update. Which change most likely caused this increase?",
  "options": [
   {
    "key": "a",
    "text": "The administrator lowered the match confidence threshold from 90% to 70% on several matching rules."
   },
   {
    "key": "b",
    "text": "The administrator removed three matching rules from the active ruleset."
   },
   {
    "key": "c",
    "text": "The administrator added a new source system with completely non-overlapping customer data."
   },
   {
    "key": "d",
    "text": "The administrator disabled change detection, forcing all profiles to reprocess."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most likely cause is that the administrator lowered the match confidence threshold from 90% to 70% on several matching rules (Option 1). Lowering thresholds makes matching rules less strict, increasing the number of source profiles that are considered matches and merged, thereby increasing the consolidation ratio. **Why the other options are incorrect:** - **Option 2:** Removing matching rules would likely decrease matches, reducing the consolidation ratio. - **Option 3:** Adding a non‑overlapping source system adds new profiles that cannot match existing ones, decreasing the ratio. - **Option 4:** Disabling change detection increases processing volume but does not directly increase match rates. Thus, Option 1 is the correct explanation.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 60,
  "statement": "During a data mapping exercise for a car dealership, the consultant finds that the standard \"Individual\" DMO lacks fields for \"Preferred Service Advisor\" and \"Lease Renewal Date\" — both critical for the business. What is the recommended approach?",
  "options": [
   {
    "key": "a",
    "text": "Create two new custom DMOs, one for each missing field, and relate them to the Individual DMO."
   },
   {
    "key": "b",
    "text": "Extend the Individual DMO by adding custom fields for \"Preferred Service Advisor\" and \"Lease Renewal Date.\""
   },
   {
    "key": "c",
    "text": "Store these fields in an external lookup table and join at query time."
   },
   {
    "key": "d",
    "text": "Ignore these fields and use only standard DMO fields to maintain data model purity."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The recommended approach is to extend the Individual DMO by adding custom fields for \"Preferred Service Advisor\" and \"Lease Renewal Date\" (Option 2). Data 360 supports adding custom fields to standard DMOs, allowing organizations to capture business‑specific data while maintaining the standard model's structure and relationships. **Why the other options are incorrect:** - **Option 1:** Creating separate DMOs fragments the data model unnecessarily. - **Option 3:** Storing fields in an external lookup table adds query complexity and performance overhead. - **Option 4:** Ignoring critical business fields fails to meet requirements. Thus, extending the standard DMO with custom fields is the best practice.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 1,
  "number": 61,
  "statement": "A sales manager wants account executives to see a timeline of a lead's recent case submissions and knowledge article views directly on the Lead record page. These events are stored as Interaction DMOs in Data 360. What is the most efficient way to display this timeline without custom development?",
  "options": [
   {
    "key": "a",
    "text": "Build a Flow that copies Interaction records to a custom object daily and add a related list."
   },
   {
    "key": "b",
    "text": "Use the Data 360 Enriched Related List Lightning component, configured to show Interaction DMO records for the lead."
   },
   {
    "key": "c",
    "text": "Create a report chart filtered by Lead ID and embed it on the record page."
   },
   {
    "key": "d",
    "text": "Write an Apex trigger that queries Data 360 APIs and displays results in a custom Visualforce page."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient way is to use the Data 360 Enriched Related List Lightning component, configured to show Interaction DMO records for the lead (Option 2). This native Lightning component can be dragged onto any record page and configured to display related records from Data 360 DMOs without custom code, batch jobs, or complex reporting. **Why the other options are incorrect:** - **Option 1:** Copying records creates data duplication, latency, and maintenance overhead. - **Option 3:** Report charts are static snapshots and parameterization may be complex. - **Option 4:** Writing custom Apex and Visualforce introduces significant development and maintenance when a native component exists. Thus, the Enriched Related List is the correct solution.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 1,
  "statement": "A consumer goods company has unified customer profiles from six different source systems in Data 360. The marketing analytics team needs an interactive tool to explore customer segments, identify purchasing patterns, and build executive dashboards. Which tool integrates natively with Data 360 for this purpose?",
  "options": [
   {
    "key": "a",
    "text": "Tableau"
   },
   {
    "key": "b",
    "text": "Einstein Analytics Legacy"
   },
   {
    "key": "c",
    "text": "Workbench"
   },
   {
    "key": "d",
    "text": "Data Loader"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct tool is Tableau (Option 1). Tableau provides native integration with Data 360, allowing marketing analysts to explore unified customer profiles, uncover purchasing patterns, and build executive dashboards. It is the recommended visualization platform for Data 360, whereas Workbench, Data Loader, and legacy Einstein Analytics are not suitable for this interactive, visual analysis. **Why the other options are incorrect:** - **Option 2 (Einstein Analytics Legacy):** This is an older tool that has been superseded by Tableau for Data 360 integrations. - **Option 3 (Workbench):** Used for Salesforce CRM data operations, not for visualization. - **Option 4 (Data Loader):** Bulk data import/export tool, not for dashboards or visual exploration.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 2,
  "statement": "A telecommunications company uses Data 360 with data flowing from Service Cloud and Marketing Cloud. A customer submits a formal privacy request to have all their personal data erased. Through which mechanism should this request be submitted to ensure proper handling across both Data 360 and the source clouds?",
  "options": [
   {
    "key": "a",
    "text": "The Data Deletion Wizard within Data 360 Setup"
   },
   {
    "key": "b",
    "text": "The Consent API"
   },
   {
    "key": "c",
    "text": "A manual deletion form submitted to the Data 360 administrator"
   },
   {
    "key": "d",
    "text": "The Marketing Cloud Privacy Center only"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct mechanism is the Consent API (Option 2). It provides a standardized, auditable channel for submitting Right to Be Forgotten requests across Salesforce products, ensuring that deletion is propagated to Data 360, Service Cloud, and Marketing Cloud uniformly. Manual forms or single-system tools leave other systems non-compliant. **Why the other options are incorrect:** - **Option 1 (Data Deletion Wizard):** Not a user-facing deletion request endpoint. - **Option 3 (Manual form):** Lacks audit trail and automation, and does not guarantee cross-system propagation. - **Option 4 (Marketing Cloud Privacy Center):** Only affects Marketing Cloud data, leaving Data 360 and Service Cloud untouched.",
  "module": "dc-governance"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 3,
  "statement": "A product team at a streaming media company needs to power a real-time \"For You\" recommendation panel on their website. The panel must display the user's recent viewing history and their calculated engagement score, retrieved from Data 360 with minimal latency. Which API is specifically optimized for this high-speed retrieval of unified profile attributes?",
  "options": [
   {
    "key": "a",
    "text": "Bulk API"
   },
   {
    "key": "b",
    "text": "SOAP API"
   },
   {
    "key": "c",
    "text": "Profile API"
   },
   {
    "key": "d",
    "text": "REST API (standard)"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct API is the Profile API (Option 3). It is purpose-built for low-latency retrieval of unified profile attributes and calculated insights, making it ideal for real-time recommendation engines. Bulk, SOAP, and standard REST APIs are not optimized for this high-speed, per‑profile access pattern. **Why the other options are incorrect:** - **Option 1 (Bulk API):** Asynchronous batch processing, not real-time. - **Option 2 (SOAP API):** Legacy protocol with higher overhead. - **Option 4 (REST API standard):** Lacks the specific optimizations of the Profile API.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 4,
  "statement": "A customer service team wants an automated workflow to trigger within seconds whenever a high-risk customer segment is updated in Data 360. The workflow must send an alert to the service desk. Which technical dependency must be in place for a Salesforce Flow to react to this data action in near real time?",
  "options": [
   {
    "key": "a",
    "text": "The Flow must be a scheduled Flow running every minute."
   },
   {
    "key": "b",
    "text": "The data action must publish a platform event that the Flow subscribes to."
   },
   {
    "key": "c",
    "text": "The Data 360 instance must be colocated with the Flow's Salesforce org."
   },
   {
    "key": "d",
    "text": "The Flow must be triggered by a user clicking a button on a record page."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct dependency is that the data action must publish a platform event to which the Flow subscribes (Option 2). This event‑driven pattern enables near‑real‑time triggering. Scheduled flows, user‑initiated flows, or colocation do not provide the required immediacy. **Why the other options are incorrect:** - **Option 1:** Scheduled flows introduce latency (up to 60 seconds). - **Option 3:** Colocation is irrelevant; platform events work across orgs. - **Option 4:** User‑initiated flows cannot react automatically to data changes.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 5,
  "statement": "A loyalty program manager has built a foundational segment called \"Gold Status Members.\" The marketing team will create multiple specialized segments based on this group (e.g., \"Gold Members Who Travel Internationally,\" \"Gold Members With High Engagement\"). How should the consultant ensure that future changes to the Gold Status criteria automatically apply to all dependent segments?",
  "options": [
   {
    "key": "a",
    "text": "Package the Gold Status Members segment in a data kit and redeploy monthly."
   },
   {
    "key": "b",
    "text": "Instruct each marketer to manually update their segments whenever the criteria change."
   },
   {
    "key": "c",
    "text": "Create new segments using nested segments that reference the Gold Status Members segment as a building block."
   },
   {
    "key": "d",
    "text": "Clone the Gold Status Members segment for each marketing use case."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use nested segments referencing the foundational segment (Option 3). This ensures any future changes to the Gold Status criteria automatically propagate to all dependent segments. Data kits, manual updates, or cloning do not provide this automatic inheritance. **Why the other options are incorrect:** - **Option 1:** Data kits are for cross‑org migration, not in‑org reuse. - **Option 2:** Manual updates are error‑prone and inconsistent. - **Option 4:** Cloning creates static copies that do not inherit changes.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 6,
  "statement": "A data architect is modeling a relationship between a custom \"Property\" DMO and the standard \"Household\" DMO. A single household can own multiple properties. Each property is owned by exactly one household. When configuring the relationship from Property to Household, which cardinality should the architect select?",
  "options": [
   {
    "key": "a",
    "text": "Many-to-One (N:1)"
   },
   {
    "key": "b",
    "text": "One-to-One (1:1)"
   },
   {
    "key": "c",
    "text": "Many-to-Many (N:N)"
   },
   {
    "key": "d",
    "text": "One-to-Many (1:N)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct cardinality from Property to Household is Many‑to‑One (N:1) (Option 1). This reflects that many properties can belong to one household, and each property has a single household. One‑to‑One, Many‑to‑Many, or reverse One‑to‑Many would not correctly model the business requirement. **Why the other options are incorrect:** - **Option 2 (1:1):** Restricts households to one property. - **Option 3 (N:N):** Allows a property to have multiple owners. - **Option 4 (1:N):** Reverses the direction incorrectly.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 7,
  "statement": "A fitness company ingests workout event data from two separate mobile apps. Both apps use identical numeric user IDs (e.g., both use \"1001\" for different users). Without additional qualification, events could be incorrectly attributed to the wrong user profile. What should the consultant configure to ensure events are associated with the correct source profile?",
  "options": [
   {
    "key": "a",
    "text": "Identity Resolution Reconciliation Rules"
   },
   {
    "key": "b",
    "text": "Fully Qualified Keys (FQKs)"
   },
   {
    "key": "c",
    "text": "Match Rule confidence thresholds"
   },
   {
    "key": "d",
    "text": "Source-specific data streams with separate mappings"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should configure Fully Qualified Keys (FQKs) (Option 2). By prefixing each identifier with its source system name, FQKs eliminate collisions caused by identical IDs from different apps. Reconciliation rules, match thresholds, or separate streams do not solve this specific problem. **Why the other options are incorrect:** - **Option 1:** Reconciliation rules handle attribute conflicts, not ID collisions. - **Option 3:** Match thresholds affect matching decisions, not event association. - **Option 4:** Separate streams do not qualify IDs automatically.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 8,
  "statement": "A unified customer profile in Data 360 may receive the same attribute (e.g., \"Phone Number\") from multiple source systems. The business has decided that the CRM system should always be the authoritative source for phone numbers, overriding values from marketing or support systems. Which Identity Resolution rule enforces this source priority?",
  "options": [
   {
    "key": "a",
    "text": "Match Rule with confidence scoring"
   },
   {
    "key": "b",
    "text": "Source Sequence reconciliation rule"
   },
   {
    "key": "c",
    "text": "Field-level encryption rule"
   },
   {
    "key": "d",
    "text": "Data Quality validation rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Source Sequence reconciliation rule (Option 2) enforces source priority by defining an ordered list of trusted sources for each attribute. When multiple sources provide a phone number, the highest‑priority source (CRM) wins. Match rules, encryption, or validation rules do not provide this capability. **Why the other options are incorrect:** - **Option 1:** Match rules are for identifying matching records. - **Option 3:** Encryption protects data, not priority. - **Option 4:** Validation ensures format, not source preference.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 9,
  "statement": "A regional bank has customer information stored across loan processing, checking accounts, credit cards, and a separate wealth management platform. Leadership wants to eventually deliver personalized offers and proactive fraud alerts. What is the foundational Data 360 capability that must be implemented before these advanced use cases can be effective?",
  "options": [
   {
    "key": "a",
    "text": "Real-time streaming of all transaction events"
   },
   {
    "key": "b",
    "text": "AI-driven next-best-action recommendations"
   },
   {
    "key": "c",
    "text": "Unification of fragmented customer data into a single comprehensive profile"
   },
   {
    "key": "d",
    "text": "Cross-channel journey orchestration"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The foundational capability is unification of fragmented customer data into a single comprehensive profile (Option 3). Only after unifying data from all sources can personalized offers, fraud alerts, and journey orchestration be effective. Real‑time streaming, AI recommendations, and cross‑channel orchestration depend on a unified view. **Why the other options are incorrect:** - **Option 1:** Streaming depends on knowing which customer is involved. - **Option 2:** AI recommendations require unified data to be accurate. - **Option 4:** Journey orchestration needs a unified customer view.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 10,
  "statement": "A warehouse management system sends inventory data to Data 360, including a \"Bin Location Code\" that contains values like \"001A,\" \"045B,\" and \"102C.\" The leading zeros in codes like \"001A\" must be preserved exactly as received. Which field type should the consultant select for this attribute in the target DMO?",
  "options": [
   {
    "key": "a",
    "text": "Integer"
   },
   {
    "key": "b",
    "text": "Decimal"
   },
   {
    "key": "c",
    "text": "Text"
   },
   {
    "key": "d",
    "text": "Currency"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct field type is Text (Option 3). Text fields preserve leading zeros and accept alphanumeric characters, which is essential for codes like \"001A\". Integer, Decimal, and Currency fields strip leading zeros and cannot store letters. **Why the other options are incorrect:** - **Option 1 (Integer):** Strips zeros and rejects letters. - **Option 2 (Decimal):** Same as Integer. - **Option 4 (Currency):** Also strips zeros and rejects letters.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 11,
  "statement": "A sports retailer collects customer information from online orders, in-store purchases, and loyalty app activity. Each channel stores customer data differently. Which Data 360 capability should the consultant use to match these disparate records and create a single, comprehensive customer profile?",
  "options": [
   {
    "key": "a",
    "text": "Record Deduplication Engine"
   },
   {
    "key": "b",
    "text": "Identity Resolution"
   },
   {
    "key": "c",
    "text": "Source Harmonization"
   },
   {
    "key": "d",
    "text": "Profile Merging Service"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct capability is Identity Resolution (Option 2). It matches records from disparate channels using configurable match rules and reconciles attribute conflicts, creating a unified customer profile. Other terms like \"Record Deduplication Engine\" or \"Profile Merging Service\" are not official Data 360 features. **Why the other options are incorrect:** - **Option 1:** Not a specific Data 360 feature. - **Option 3:** Harmonization standardizes schema, not matching. - **Option 4:** Not a standard feature name.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 12,
  "statement": "A logistics company is ingesting shipment tracking data that includes a \"Last_Updated\" field stored as a full timestamp (e.g., \"2025-01-15 14:23:45\"). For daily reporting, the analytics team only needs the date portion (e.g., \"2025-01-15\") without the time. At which point should the consultant apply this transformation using a formula?",
  "options": [
   {
    "key": "a",
    "text": "After the data is written to the data lake object, using a batch transform"
   },
   {
    "key": "b",
    "text": "Within the data stream ingestion mapping, using a formula field"
   },
   {
    "key": "c",
    "text": "In the semantic layer, using a calculated metric"
   },
   {
    "key": "d",
    "text": "In Tableau, using a calculated field during visualization"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The formula should be applied within the data stream ingestion mapping (Option 2). This transforms the timestamp to a date during ingestion, making the date field available for all downstream use cases without extra processing. Post‑ingestion transforms, semantic layer metrics, or visualization‑only transforms are less efficient or limit reusability. **Why the other options are incorrect:** - **Option 1:** Adds extra processing and overhead. - **Option 3:** Semantic layer metrics are for aggregation, not row‑level transformation. - **Option 4:** Only affects visualization, not other Data 360 features.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 13,
  "statement": "A social media analytics firm needs to display the \"Top 10 Most Shared Articles\" from the last 6 hours. The underlying clickstream data exceeds 200 million events per day. The dashboard can tolerate up to 10 minutes of latency and must load quickly. Which architectural component should process this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Streaming Insight with continuous evaluation"
   },
   {
    "key": "b",
    "text": "Calculated Insight with periodic batch refresh"
   },
   {
    "key": "c",
    "text": "Real-time Data Graph with live queries"
   },
   {
    "key": "d",
    "text": "Direct DMO query with no pre-processing"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A calculated insight with periodic batch refresh (Option 2) is ideal for pre‑aggregating high‑volume data into a top‑10 list with up to 10 minutes of latency, ensuring fast dashboard performance. Streaming insights, live queries, or direct DMO queries would be inefficient or too slow. **Why the other options are incorrect:** - **Option 1:** Streaming insights are for real‑time patterns, not batch pre‑aggregation. - **Option 3:** Data Graph is for relationship exploration, not trending aggregates. - **Option 4:** Direct queries would be too slow on 200M+ events.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 14,
  "statement": "A beverage distributor is ingesting order data and needs to calculate a \"Discounted Total\" by multiplying \"Unit Price\" by \"Quantity\" by \"0.90\" (a 10% promotion) for every row. No joins, aggregations, or multi-row logic are required. When should the consultant use a formula instead of a transform for this calculation?",
  "options": [
   {
    "key": "a",
    "text": "When the calculation requires joining data from three separate source tables"
   },
   {
    "key": "b",
    "text": "When the logic is a simple, per-row arithmetic operation that can be defined directly in the field mapping"
   },
   {
    "key": "c",
    "text": "When the same calculation must be reused across 20 different data streams from different source systems"
   },
   {
    "key": "d",
    "text": "When the dataset exceeds 5 billion rows and requires distributed parallel processing"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A formula is preferred over a transform for simple, per‑row arithmetic operations (Option 2) because it is lightweight, defined directly in the field mapping, and executes efficiently. Formulas are not suitable for joins, cross‑stream reuse, or massive distributed processing. **Why the other options are incorrect:** - **Option 1:** Joins require transforms. - **Option 3:** Reuse across many streams is better handled by transforms. - **Option 4:** Massive distributed processing is a strength of transforms.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 15,
  "statement": "A customer support team uses Data 360 to build segments based on \"Product Category\" (values like \"Laptop,\" \"Tablet,\" \"Monitor\"). Team members often mistype or use variations (\"laptop,\" \"LapTop\"), causing segments to miss valid customers. Which feature should the consultant enable to provide a picklist of valid values directly within the segment builder?",
  "options": [
   {
    "key": "a",
    "text": "Global Value Sets"
   },
   {
    "key": "b",
    "text": "Value Suggestion"
   },
   {
    "key": "c",
    "text": "Formula-based Validation"
   },
   {
    "key": "d",
    "text": "Dynamic Picklist Mapping"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should enable Value Suggestion (Option 2). This feature presents a picklist of existing valid values directly in the segment builder, preventing typos and inconsistent casing. Global Value Sets, formula validation, or dynamic picklists are not appropriate for this inline suggestion use case. **Why the other options are incorrect:** - **Option 1:** Global Value Sets are CRM metadata, not Data 360 inline suggestions. - **Option 3:** Formula validation is post‑entry. - **Option 4:** Not a standard Data 360 feature.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 16,
  "statement": "A healthcare data integration project receives patient information from three different systems. One system calls the patient identifier \"PatientID,\" another uses \"MedicalRecordNumber,\" and the third uses \"MRN.\" All represent the same concept. Which process aligns these disparate field names to a common, standard representation?",
  "options": [
   {
    "key": "a",
    "text": "Unification"
   },
   {
    "key": "b",
    "text": "Harmonization"
   },
   {
    "key": "c",
    "text": "Deduplication"
   },
   {
    "key": "d",
    "text": "Transformation"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Harmonization (Option 2) aligns disparate field names to a common standard representation. Unification merges records, deduplication removes duplicates, and transformation changes values, but only harmonization standardizes field names. **Why the other options are incorrect:** - **Option 1:** Unification merges records, not field names. - **Option 3:** Deduplication removes duplicate records. - **Option 4:** Transformation changes values, not field names.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 17,
  "statement": "A consultant recently refreshed a Developer Pro sandbox from production. The refresh occurred before the organization purchased Data 360 licenses. After the refresh, the consultant cannot see the Data 360 Setup menu or access any data space configurations. What is the most efficient resolution?",
  "options": [
   {
    "key": "a",
    "text": "Wait 72 hours for automatic license synchronization to complete"
   },
   {
    "key": "b",
    "text": "Navigate to Company Information and click \"Match Production Licenses\""
   },
   {
    "key": "c",
    "text": "Submit a support case to Salesforce to provision licenses to the sandbox"
   },
   {
    "key": "d",
    "text": "Refresh the sandbox again with the \"Include Licenses\" checkbox selected"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient resolution is to navigate to Company Information and click \"Match Production Licenses\" (Option 2). This syncs license entitlements from production to the sandbox. Waiting, submitting a support case, or refreshing again are unnecessary or ineffective. **Why the other options are incorrect:** - **Option 1:** No automatic synchronization. - **Option 3:** Support case is unnecessary. - **Option 4:** No such checkbox exists.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 18,
  "statement": "A furniture retailer notices that Identity Resolution is incorrectly merging two different customers who happen to share the same phone number (a former family member's number). The consultant needs to fix this without disrupting active production segments. Which approach should the consultant take?",
  "options": [
   {
    "key": "a",
    "text": "Create a new ruleset with stricter matching criteria, test it against the current ruleset, then activate the improved version"
   },
   {
    "key": "b",
    "text": "Immediately delete the phone number match rule from the production ruleset"
   },
   {
    "key": "c",
    "text": "Add more data sources to the existing ruleset to dilute the phone number match weight"
   },
   {
    "key": "d",
    "text": "Reduce the match confidence threshold to make matching less strict"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should create a new ruleset with stricter matching criteria, test it against the current ruleset, and then activate the improved version (Option 1). This avoids disrupting production while fixing false positives. Deleting rules, adding data sources, or lowering thresholds would either break production or worsen the issue. **Why the other options are incorrect:** - **Option 2:** Disrupts production without testing. - **Option 3:** Does not solve the root cause. - **Option 4:** Increases false positives, not decreases.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 19,
  "statement": "A beauty brand captures customer interactions from their ecommerce website, mobile app, and physical store POS systems. The same customer may use different email addresses or phone numbers across channels. Which configuration should the consultant use to programmatically link these disparate records to a single individual?",
  "options": [
   {
    "key": "a",
    "text": "Matching rules configured within Identity Resolution settings"
   },
   {
    "key": "b",
    "text": "A calculated insight that unions email and phone across sources"
   },
   {
    "key": "c",
    "text": "Streaming transforms that tag records with session identifiers"
   },
   {
    "key": "d",
    "text": "Data harmonization rules that standardize name formats"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Matching rules within Identity Resolution (Option 1) are the correct configuration to link disparate records across channels. Calculated insights, streaming transforms, or harmonization rules do not perform cross‑source identity resolution. **Why the other options are incorrect:** - **Option 2:** Calculated insights do not perform record linking. - **Option 3:** Streaming transforms are for event processing, not identity resolution. - **Option 4:** Harmonization standardizes formats, not matches records.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 20,
  "statement": "A luxury automaker and a premium credit card company want to jointly analyze customer overlap for a co-marketing campaign without sharing raw customer lists or PII. Which statement accurately describes how Data 360 Clean Rooms protect each party's data?",
  "options": [
   {
    "key": "a",
    "text": "Both parties export their data to a neutral cloud storage bucket managed by a third party"
   },
   {
    "key": "b",
    "text": "Each party's data remains in its original secure location; only aggregated or non-sensitive query results are shared"
   },
   {
    "key": "c",
    "text": "Each party grants the other party read-only access to their data lake objects for the duration of the analysis"
   },
   {
    "key": "d",
    "text": "All PII is automatically hashed and decrypted for both parties to view during the analysis session"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360 Clean Rooms keep each party's data in its original location and share only aggregated or non‑sensitive results (Option 2). Data is not moved to neutral storage, nor are raw data lakes exposed or PII decrypted. **Why the other options are incorrect:** - **Option 1:** Data stays in place, not moved to neutral storage. - **Option 3:** Granting read access would expose raw PII. - **Option 4:** Clean rooms prevent raw PII exposure.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 21,
  "statement": "A telecommunications provider and a streaming media company want to identify shared customers for a bundled service offer without exposing individual subscriber lists. Which security principle governs how Data 360 Clean Rooms protect each organization's sensitive data during this collaboration?",
  "options": [
   {
    "key": "a",
    "text": "Each party grants the other full read access to their data lake objects for the duration of the analysis"
   },
   {
    "key": "b",
    "text": "All customer identifiers are automatically converted to plain text for the consumer to review"
   },
   {
    "key": "c",
    "text": "Each party's data remains within their own environment; only non-sensitive aggregated results are exchanged"
   },
   {
    "key": "d",
    "text": "Both parties must upload encrypted copies of their data to a neutral third-party server"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The governing principle is that each party's data remains in its own environment and only non‑sensitive aggregated results are exchanged (Option 3). This preserves privacy while enabling collaborative analysis. Full access, plain‑text conversion, or moving data to a neutral server would violate clean‑room principles. **Why the other options are incorrect:** - **Option 1:** Exposes raw PII. - **Option 2:** PII is never converted to plain text. - **Option 4:** Data stays in place, not moved to a neutral server.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 22,
  "statement": "A financial analyst needs to build a live dashboard in Tableau that shows \"Gross Margin Percentage\" with the ability to drill down by product line, sales region, and quarter. The underlying data changes continuously throughout the day. Which Data 360 capability provides this real-time, multidimensional query capability?",
  "options": [
   {
    "key": "a",
    "text": "A pre-calculated summary table refreshed nightly"
   },
   {
    "key": "b",
    "text": "A real-time data graph with a live connection to unified data"
   },
   {
    "key": "c",
    "text": "A batch transform that writes aggregated results every hour"
   },
   {
    "key": "d",
    "text": "A static CSV export imported into Tableau Desktop"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A real‑time data graph with a live connection (Option 2) provides the real‑time, multidimensional query capability needed for a live Tableau dashboard. Nightly summaries, hourly batches, or static CSV exports cannot support real‑time drilling. **Why the other options are incorrect:** - **Option 1:** Nightly refresh is too slow. - **Option 3:** Hourly batches introduce latency. - **Option 4:** Static CSV has no real-time capability.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 23,
  "statement": "A retail chain activates a churn prediction model in Data 360. The marketing team needs to build segments based on the model's output scores (e.g., \"High Risk,\" \"Medium Risk,\" \"Low Risk\"). Where are these prediction scores stored after model activation?",
  "options": [
   {
    "key": "a",
    "text": "In a separate CSV file accessible via the Data 360 file browser"
   },
   {
    "key": "b",
    "text": "As new attributes on the relevant data model object (DMO) for each customer"
   },
   {
    "key": "c",
    "text": "Only within the Einstein Studio model training logs"
   },
   {
    "key": "d",
    "text": "In a temporary cache that expires after 7 days"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Prediction scores are stored as new attributes on the relevant DMO for each customer (Option 2). This makes them queryable and available for segmentation. CSV files, training logs, or temporary caches do not provide this persistent, queryable storage. **Why the other options are incorrect:** - **Option 1:** CSV is not queryable in real time. - **Option 3:** Training logs contain model metadata, not scores. - **Option 4:** Scores are permanent, not temporary.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 24,
  "statement": "A support manager wants service agents to see a list of all warranty claims associated with a customer directly on the Contact record page in Salesforce. The warranty claims are stored in a custom \"Warranty_Claim_DMO\" in Data 360. Which feature should the consultant use to display these related records?",
  "options": [
   {
    "key": "a",
    "text": "Data Action triggered from a flow"
   },
   {
    "key": "b",
    "text": "Segment Activation published to the contact record"
   },
   {
    "key": "c",
    "text": "Related List Enrichment configured for the Warranty_Claim_DMO"
   },
   {
    "key": "d",
    "text": "Calculated Insight displayed via a formula field"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use Related List Enrichment (Option 3) to display warranty claims on the Contact record page. Data Actions, Segment Activation, or Calculated Insights do not provide a persistent list of related child records. **Why the other options are incorrect:** - **Option 1:** Data Actions trigger processes, not display lists. - **Option 2:** Segment Activation is for marketing audiences. - **Option 4:** Calculated Insights are for aggregated metrics.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 25,
  "statement": "A logistics company has deployed a delivery delay prediction model using Einstein Studio. The operations team wants to automatically escalate high-risk shipments to a priority queue in Service Cloud whenever the model runs. What is the standard method to apply these predictions to the business process?",
  "options": [
   {
    "key": "a",
    "text": "Manually export prediction scores to CSV and import into Service Cloud"
   },
   {
    "key": "b",
    "text": "Configure a predict job that writes scores back to Data 360, then trigger a Flow Builder automation"
   },
   {
    "key": "c",
    "text": "Embed the Einstein Studio training dashboard in a Service Cloud Lightning page"
   },
   {
    "key": "d",
    "text": "Use Identity Resolution to merge prediction scores into individual records"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The standard method is to configure a predict job to write scores back to Data 360 and then use Flow Builder to trigger automations (Option 2). Manual exports, embedding dashboards, or Identity Resolution do not provide this integrated, automated escalation. **Why the other options are incorrect:** - **Option 1:** Manual export is not scalable or automated. - **Option 3:** Dashboard embedding provides visibility only. - **Option 4:** Identity Resolution does not apply model scores.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 26,
  "statement": "A consultant needs to display a list of product review submissions (stored in a \"Review_DMO\") on the Account record page in Salesforce. Before configuring the related list, what must be established in the data model?",
  "options": [
   {
    "key": "a",
    "text": "A relationship between the Account DMO (mapped to Salesforce Account) and the Review_DMO"
   },
   {
    "key": "b",
    "text": "A calculated insight that aggregates reviews by account ID"
   },
   {
    "key": "c",
    "text": "A data stream that ingests reviews as streaming data"
   },
   {
    "key": "d",
    "text": "A segment that filters reviews by account"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A relationship must be established between the Account DMO and the Review_DMO (Option 1). This is the prerequisite for displaying external records as a related list on a Salesforce record page. Calculated insights, data streams, or segments do not fulfill this requirement. **Why the other options are incorrect:** - **Option 2:** Calculated insights are for aggregates, not relationships. - **Option 3:** Ingestion method is irrelevant; relationship is key. - **Option 4:** Segments filter individuals, not define DMO relationships.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 27,
  "statement": "A marketing operations user needs to build and publish audience segments and send those segments to email service providers. This user must not have access to modify data model mappings or identity resolution configurations. Which standard permission set should the consultant assign following least privilege?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 Segment Publisher"
   },
   {
    "key": "b",
    "text": "Data 360 Model Administrator"
   },
   {
    "key": "c",
    "text": "Data 360 System Viewer"
   },
   {
    "key": "d",
    "text": "Data 360 Full Access"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Data 360 Segment Publisher permission set (Option 1) grants segment and activation management without data model modification rights, following least privilege. Model Administrator, System Viewer, and Full Access either give too much or insufficient permissions. **Why the other options are incorrect:** - **Option 2:** Grants mapping modification rights. - **Option 3:** May not allow publishing. - **Option 4:** Grants full access, violating least privilege.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 28,
  "statement": "A data quality analyst needs to investigate a discrepancy between raw source data and the final unified customer profile. Which three object types can the analyst examine within Data Explorer to trace the data through the pipeline?",
  "options": [
   {
    "key": "a",
    "text": "Data lake objects, data model objects, calculated insights"
   },
   {
    "key": "b",
    "text": "Activation logs, segment definitions, data actions"
   },
   {
    "key": "c",
    "text": "Identity resolution rulesets, match rules, reconciliation rules"
   },
   {
    "key": "d",
    "text": "Data kits, change sets, deployment statuses"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Explorer can examine data lake objects, data model objects, and calculated insights (Option 1). Activation logs, segment definitions, rulesets, data kits, and change sets are metadata or artifacts, not suitable for tracing raw data to unified profiles. **Why the other options are incorrect:** - **Option 2:** Activation logs and segment definitions are metadata. - **Option 3:** Rulesets are configuration metadata. - **Option 4:** Data kits and change sets are deployment artifacts.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 29,
  "statement": "A utility company has customer records in a legacy billing system (using \"Account_Number\") and a CRM system (using \"Customer_ID\"). Both systems store the same \"National Utility ID\" for each customer. How should the consultant configure Identity Resolution to match records using this common identifier?",
  "options": [
   {
    "key": "a",
    "text": "Map National Utility ID from both systems to the Party Identification object with a shared Identification Name like \"NUID\""
   },
   {
    "key": "b",
    "text": "Create a fuzzy match rule on the Individual object using the National Utility ID"
   },
   {
    "key": "c",
    "text": "Map both Account_Number and Customer_ID directly to the Individual Primary Key field"
   },
   {
    "key": "d",
    "text": "Configure a reconciliation rule that gives billing system priority over CRM"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should map the National Utility ID to the Party Identification object with a shared Identification Name (Option 1). This creates a standardized identifier for matching. Fuzzy matching on Individual, mapping internal IDs to Primary Key, or using reconciliation rules are incorrect approaches. **Why the other options are incorrect:** - **Option 2:** Fuzzy matching is less reliable for exact identifiers. - **Option 3:** Different internal IDs cannot map to the same Primary Key. - **Option 4:** Reconciliation rules are for after matching, not the match itself.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 30,
  "statement": "A newly hired Data 360 leader needs to demonstrate value quickly to secure continued investment and drive broader adoption. Which business outcome should they prioritize as an initial quick win?",
  "options": [
   {
    "key": "a",
    "text": "Reducing customer support handle time by providing agents with complete customer history across all touchpoints"
   },
   {
    "key": "b",
    "text": "Building a real-time recommendation engine integrating 25 different data sources"
   },
   {
    "key": "c",
    "text": "Migrating 15 years of archived data into Data 360 for long-term storage cost savings"
   },
   {
    "key": "d",
    "text": "Implementing global data lineage and governance for all 200 data sources"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Reducing customer support handle time by providing a complete customer history (Option 1) is a tangible, high‑value quick win. Complex recommendation engines, archival migrations, or global governance projects are too large or lack immediate business impact for an initial win. **Why the other options are incorrect:** - **Option 2:** Too complex for a quick win. - **Option 3:** Infrastructure project without immediate business value. - **Option 4:** Governance is often seen as a cost center, not a win.",
  "module": "dc-governance"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 31,
  "statement": "A nonprofit organization has a segment of \"Monthly Donors.\" For a specific fundraising campaign, they want to exclude any donor whose primary email address is from a competitor's domain (e.g., \"@competingorg.org\"). Where should this domain-based exclusion be applied?",
  "options": [
   {
    "key": "a",
    "text": "During activation configuration for the email channel only"
   },
   {
    "key": "b",
    "text": "At data ingestion, filtering out those email addresses permanently"
   },
   {
    "key": "c",
    "text": "Within the segment definition, using a condition on the email address domain"
   },
   {
    "key": "d",
    "text": "In a calculated insight that flags competitor email domains"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The domain‑based exclusion should be applied within the segment definition (Option 3). This ensures the segment itself excludes donors with competitor email domains. Activation filtering, ingestion filtering, or calculated insights are less efficient or do not directly filter segment membership. **Why the other options are incorrect:** - **Option 1:** Activation filtering does not remove individuals from the segment. - **Option 2:** Permanent ingestion filtering may remove needed contact points. - **Option 4:** Calculated insights flag conditions but do not directly filter segments.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 32,
  "statement": "A consultant is enabling value suggestions on a \"Product_SKU\" text field that contains approximately 8,000 distinct product codes. What limitation should the consultant communicate to the business before enabling this feature?",
  "options": [
   {
    "key": "a",
    "text": "Value suggestions only work for fields with fewer than 500 unique values; otherwise the feature fails to load."
   },
   {
    "key": "b",
    "text": "The feature only displays the first 1,000 distinct values alphabetically, so users may not see all valid options."
   },
   {
    "key": "c",
    "text": "Value suggestions cannot be enabled on fields with high cardinality without a custom streaming transform."
   },
   {
    "key": "d",
    "text": "The feature is disabled by default for fields exceeding 2,000 unique values for performance reasons."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The limitation is that value suggestions only display the first 1,000 distinct values alphabetically (Option 2). Users may not see all valid options. The feature does not fail, require custom transforms, or auto‑disable. **Why the other options are incorrect:** - **Option 1:** Incorrect limit (500) and incorrect failure behavior. - **Option 3:** No custom transform required. - **Option 4:** Feature is not auto‑disabled.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 33,
  "statement": "A marketing analyst is building a customer segment in Data 360 and needs to reference fields from the base customer object, fields from a linked purchase history object, and a pre-computed customer lifetime value metric. Which types of criteria are available for this segment definition?",
  "options": [
   {
    "key": "a",
    "text": "Direct attributes from the base object only"
   },
   {
    "key": "b",
    "text": "Direct attributes, related attributes, and pre-computed metrics"
   },
   {
    "key": "c",
    "text": "Related attributes and calculated insights only"
   },
   {
    "key": "d",
    "text": "Direct attributes and streaming event patterns only"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Segment criteria can include direct attributes, related attributes, and calculated insights (Option 2). Direct attributes alone, or only related/calculated, or streaming patterns are incorrect or incomplete. **Why the other options are incorrect:** - **Option 1:** Omits related and calculated attributes. - **Option 3:** Omits direct attributes. - **Option 4:** Streaming patterns are not direct criteria and omits related attributes.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 34,
  "statement": "A Data 360 Consultant is designing a customer profile for a financial services client. The marketing team requests inclusion of \"Religious Affiliation\" and \"Political Party\" fields for personalization purposes. Which ethical principle should guide the consultant's response?",
  "options": [
   {
    "key": "a",
    "text": "Collect all available data points to maximize personalization potential."
   },
   {
    "key": "b",
    "text": "Grant senior executives access to sensitive fields for compliance auditing."
   },
   {
    "key": "c",
    "text": "Carefully evaluate whether sensitive attributes are truly necessary before collecting them."
   },
   {
    "key": "d",
    "text": "Map all sensitive data to a single DMO for simplified future deletion."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should carefully evaluate whether sensitive attributes are truly necessary (Option 3). Collecting all data, granting broad access, or mapping to a single DMO do not address the ethical principle of data minimization and justified collection. **Why the other options are incorrect:** - **Option 1:** Violates data minimization. - **Option 2:** Violates least privilege. - **Option 4:** Does not address ethical justification.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 35,
  "statement": "A consultant is configuring file federation to read parquet files from a Google Cloud Storage bucket. The files are updated daily, and Data 360 needs to identify only new or changed files since the last read. Which component defines which files to read and tracks their update status?",
  "options": [
   {
    "key": "a",
    "text": "A manifest file containing metadata and file paths for incremental processing"
   },
   {
    "key": "b",
    "text": "A data stream filter that excludes files older than 24 hours"
   },
   {
    "key": "c",
    "text": "A scheduled transform that compares file checksums before ingestion"
   },
   {
    "key": "d",
    "text": "A lookup table stored in a separate DMO with file names and timestamps"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The manifest file (Option 1) defines which files to read and tracks update status. Data stream filters, scheduled transforms, or lookup tables are not the standard mechanism for this purpose in file federation. **Why the other options are incorrect:** - **Option 2:** Filters cannot track change status. - **Option 3:** Transforms add unnecessary overhead. - **Option 4:** Separate lookup table duplicates native functionality.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 36,
  "statement": "A business analyst needs to report on total revenue and unit volume per product category for each closed sales opportunity. Which subject area within the Data 360 data model contains these transactional details linked to opportunities?",
  "options": [
   {
    "key": "a",
    "text": "Transaction Line Item"
   },
   {
    "key": "b",
    "text": "Interaction Activity"
   },
   {
    "key": "c",
    "text": "Product Catalog"
   },
   {
    "key": "d",
    "text": "Organization Party"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Transaction Line Item subject area (Option 1) contains revenue and unit volume per product category linked to opportunities. Interaction Activity, Product Catalog, and Organization Party do not contain these transactional details. **Why the other options are incorrect:** - **Option 2:** Interaction Activity is for behavioral events. - **Option 3:** Product Catalog defines attributes, not transaction values. - **Option 4:** Organization Party defines parties, not transaction metrics.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 37,
  "statement": "A direct-to-consumer brand struggles with customer data spread across Shopify, Zendesk, and a mobile app. Customers receive inconsistent experiences across channels because each system holds a partial view. How does Data 360 primarily solve this problem?",
  "options": [
   {
    "key": "a",
    "text": "It unifies fragmented data into a single customer profile enabling consistent personalization across all touchpoints."
   },
   {
    "key": "b",
    "text": "It automatically migrates all historical data to a cold storage archive for cost savings."
   },
   {
    "key": "c",
    "text": "It generates weekly PDF reports comparing channel performance metrics."
   },
   {
    "key": "d",
    "text": "It applies GDPR-compliant encryption to all customer data at rest."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360 primarily solves fragmentation by unifying data into a single customer profile (Option 1). Archiving, PDF reports, or encryption do not address the root problem of fragmented partial views. **Why the other options are incorrect:** - **Option 2:** Archiving is not the primary solution. - **Option 3:** Reports are a downstream benefit. - **Option 4:** Security does not solve fragmentation.",
  "module": "dc-governance"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 38,
  "statement": "A mobile developer is configuring the Web and Mobile Application Connector in Data 360 to send in-app user events. What is automatically generated during connector setup that the developer must use as the data ingestion destination?",
  "options": [
   {
    "key": "a",
    "text": "A tenant-specific HTTPS endpoint unique to this Data 360 instance"
   },
   {
    "key": "b",
    "text": "A shared API key that works across all tenants"
   },
   {
    "key": "c",
    "text": "A pre-configured data stream with default field mappings"
   },
   {
    "key": "d",
    "text": "A PostgreSQL connection string for direct database writes"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The connector automatically generates a tenant‑specific HTTPS endpoint (Option 1) which the developer must use as the ingestion destination. Shared API keys, pre‑configured streams, or PostgreSQL strings are not generated. **Why the other options are incorrect:** - **Option 2:** Endpoint is tenant‑specific, not a shared key. - **Option 3:** Connector does not pre‑configure full data streams. - **Option 4:** Uses HTTPS, not PostgreSQL.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 39,
  "statement": "A loyalty manager needs a segment called \"Premium Access\" defined as: customers already in the \"Tier 3\" segment OR customers who have placed more than 10 orders in the past 90 days. Which approach is most efficient and maintainable?",
  "options": [
   {
    "key": "a",
    "text": "Reference the existing \"Tier 3\" segment as a nested component and add a separate container for the order count condition with OR logic"
   },
   {
    "key": "b",
    "text": "Create a calculated insight that flags both conditions and filter the segment on that insight"
   },
   {
    "key": "c",
    "text": "Build a waterfall segment that processes Tier 3 first, then order count second"
   },
   {
    "key": "d",
    "text": "Export both criteria to an external tool, combine, and re-import the audience"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient approach is to use a nested segment referencing Tier 3 with a separate OR container for order count (Option 1). Calculated insights, waterfall segmentation, or external exports are less efficient or over‑engineered. **Why the other options are incorrect:** - **Option 2:** Calculated insight adds unnecessary complexity. - **Option 3:** Waterfall is less transparent. - **Option 4:** External tools break automation.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 40,
  "statement": "A data architect is comparing two approaches for accessing customer data stored in an external Snowflake database. One approach copies data into Data 360 storage; the other queries data directly in Snowflake. Which statement accurately describes zero-copy data federation?",
  "options": [
   {
    "key": "a",
    "text": "Data federation queries external data directly without physically moving or duplicating it into Data 360 storage."
   },
   {
    "key": "b",
    "text": "Data federation automatically replicates external data into Data 360 every 5 minutes for low-latency access."
   },
   {
    "key": "c",
    "text": "Data federation requires converting all external data to CSV format before any query can execute."
   },
   {
    "key": "d",
    "text": "Data federation only supports reading data from other Salesforce CRM instances, not third-party databases."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Zero‑copy data federation queries external data directly without moving or duplicating it (Option 1). It does not replicate periodically, require CSV conversion, or limit to Salesforce‑only sources. **Why the other options are incorrect:** - **Option 2:** Federation does not replicate data periodically. - **Option 3:** Works with native formats, not CSV required. - **Option 4:** Supports many third‑party databases.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 41,
  "statement": "A developer is preparing an outbound change set to move Data 360 artifacts (including two data streams and one identity resolution ruleset) from a sandbox to production. Which component type should be added to the change set to capture these configurations?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 Deployment Bundle"
   },
   {
    "key": "b",
    "text": "Identity Resolution Component"
   },
   {
    "key": "c",
    "text": "Data 360 Metadata Definition"
   },
   {
    "key": "d",
    "text": "Data Stream Configuration Set"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct component type is Data 360 Metadata Definition (Option 3). Deployment Bundle, Identity Resolution Component, or Data Stream Configuration Set are either non‑standard or too specific. **Why the other options are incorrect:** - **Option 1:** Not a standard component type. - **Option 2:** Only covers identity resolution, not data streams. - **Option 4:** Only covers data streams, not identity resolution.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 42,
  "statement": "A business intelligence team runs complex analytical queries against an external Databricks table every 30 minutes for a recurring operational report. The queries do not require sub-second freshness, but must complete quickly and minimize external compute costs. Which federation approach should the consultant implement?",
  "options": [
   {
    "key": "a",
    "text": "Live query federation that executes directly on Databricks for each request"
   },
   {
    "key": "b",
    "text": "Cached acceleration that stores a local copy refreshed on a defined schedule"
   },
   {
    "key": "c",
    "text": "Full data ingestion of the Databricks table into Data 360 storage"
   },
   {
    "key": "d",
    "text": "File federation using periodic exports from Databricks to cloud storage"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Cached acceleration (Option 2) is optimal for periodic analytical queries, providing fast performance and controlled compute costs. Live federation, full ingestion, or file federation are less suitable. **Why the other options are incorrect:** - **Option 1:** Higher latency and cost for each query. - **Option 3:** Increases storage costs and maintenance. - **Option 4:** Adds complexity and latency.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 43,
  "statement": "A travel booking platform wants to identify users who have searched for the same destination more than five times within a 15-minute window. These users should be immediately added to a \"High Intent\" segment and receive a push notification. Which Data 360 feature should process this real-time pattern?",
  "options": [
   {
    "key": "a",
    "text": "Streaming insight with a sliding window count aggregation"
   },
   {
    "key": "b",
    "text": "Calculated insight refreshed every 15 minutes"
   },
   {
    "key": "c",
    "text": "Batch transform scheduled every 5 minutes"
   },
   {
    "key": "d",
    "text": "Streaming data transform that processes events individually"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A streaming insight with a sliding window (Option 1) is designed for real‑time pattern detection. Calculated insights, batch transforms, or individual event transforms cannot achieve the required rolling window with low latency. **Why the other options are incorrect:** - **Option 2:** Batch latency misses real‑time detection. - **Option 3:** Same as above. - **Option 4:** Cannot perform windowed aggregations.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 44,
  "statement": "An ecommerce company wants to build a predictive model in Einstein Studio that estimates the exact dollar amount a customer will spend during the upcoming holiday season. The output must be a continuous numeric value (e.g., $47.50, $312.00). Which native model type should the consultant select?",
  "options": [
   {
    "key": "a",
    "text": "Regression"
   },
   {
    "key": "b",
    "text": "Binary Classification"
   },
   {
    "key": "c",
    "text": "Multiclass Classification"
   },
   {
    "key": "d",
    "text": "Clustering"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Regression (Option 1) is the correct model type for predicting a continuous numeric value. Binary or multiclass classification and clustering are not suitable for exact dollar amount prediction. **Why the other options are incorrect:** - **Option 2:** Predicts binary classes, not exact amounts. - **Option 3:** Predicts categories, not exact amounts. - **Option 4:** Clustering groups, does not predict values.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 45,
  "statement": "A telecommunications company runs multiple promotional campaigns simultaneously. A customer who qualifies for both a \"High Value\" discount and a \"New Customer\" offer should only receive the High Value discount. Which segmentation approach ensures each customer is assigned to exactly one segment based on a strict priority order?",
  "options": [
   {
    "key": "a",
    "text": "Waterfall segmentation with segments evaluated in priority sequence"
   },
   {
    "key": "b",
    "text": "Exclusion rules that remove customers from lower-priority segments"
   },
   {
    "key": "c",
    "text": "Nested segments that build upon each other hierarchically"
   },
   {
    "key": "d",
    "text": "Segmented activation with priority-based delivery rules"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Waterfall segmentation (Option 1) enforces priority order, assigning each customer to exactly one segment. Exclusion rules, nested segments, or activation‑level priority do not guarantee this. **Why the other options are incorrect:** - **Option 2:** Exclusion rules lack automatic priority enforcement. - **Option 3:** Nested segments do not prevent multiple qualification. - **Option 4:** Activation priority does not solve segment overlap.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 46,
  "statement": "A marketing user has successfully ingested a custom \"Subscription_Plan_DMO\" and can see it in Data Explorer. However, when building a segment on the Individual DMO, the Subscription_Plan_DMO does not appear in the related objects list. What is the most likely cause?",
  "options": [
   {
    "key": "a",
    "text": "The Subscription_Plan_DMO was not enabled for segmentation after ingestion"
   },
   {
    "key": "b",
    "text": "No relationship exists between Subscription_Plan_DMO and the Individual DMO"
   },
   {
    "key": "c",
    "text": "The DMO contains only aggregated data, which cannot be used for segmentation"
   },
   {
    "key": "d",
    "text": "The user lacks read permissions on the Subscription_Plan_DMO"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The DMO was likely not enabled for segmentation (Option 1). Lack of relationship, aggregated data, or permission issues are less likely given the user can see it in Data Explorer. **Why the other options are incorrect:** - **Option 2:** If no relationship, it wouldn't appear even if enabled. - **Option 3:** Aggregated DMOs can be used. - **Option 4:** Permissions would also affect Data Explorer.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 47,
  "statement": "A food delivery company needs to capture a \"Peak Hour Surcharge\" on each order. The standard \"Order_Transaction_DMO\" already contains all core order fields. The surcharge does not exist in the standard data model. What is the recommended modeling approach?",
  "options": [
   {
    "key": "a",
    "text": "Extend the Order_Transaction_DMO by adding a custom numeric field for the surcharge"
   },
   {
    "key": "b",
    "text": "Create a new custom DMO exclusively for the surcharge and join it to orders"
   },
   {
    "key": "c",
    "text": "Store the surcharge in a free-text notes field on the transaction"
   },
   {
    "key": "d",
    "text": "Map the surcharge to an unrelated standard field like \"Discount_Amount\""
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The recommended approach is to extend the standard DMO with a custom field (Option 1). Creating a separate DMO, using a notes field, or misusing an existing field are all anti‑patterns. **Why the other options are incorrect:** - **Option 2:** Fragments the data model. - **Option 3:** Loses analytical capability. - **Option 4:** Corrupts field meaning.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 48,
  "statement": "A retailer receives a nightly inventory file at 2:00 AM. A calculated insight aggregates inventory data, and a segment depends on that insight. An activation sending low-inventory alerts runs at 3:00 AM. How should the consultant ensure the activation uses the most recent inventory data?",
  "options": [
   {
    "key": "a",
    "text": "Configure a Flow that triggers insight and segment refreshes after file ingestion completes"
   },
   {
    "key": "b",
    "text": "Set the calculated insight to refresh every 15 minutes throughout the night"
   },
   {
    "key": "c",
    "text": "Schedule the activation for 4:00 AM to allow ample processing time"
   },
   {
    "key": "d",
    "text": "Enable incremental activation so segments update automatically"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should use a Flow to trigger insight and segment refreshes after file ingestion (Option 1). Fixed‑time delays, frequent refreshes, or incremental activation do not ensure the activation uses the most recent data. **Why the other options are incorrect:** - **Option 2:** Inefficient and not guaranteed. - **Option 3:** Brittle fixed delay. - **Option 4:** Does not refresh insights and segments.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 49,
  "statement": "A consultant is building a new calculated insight to analyze sales by product category. When defining the insight, they receive an error that the configuration is incomplete. What two components must a calculated insight include to be valid?",
  "options": [
   {
    "key": "a",
    "text": "At least one grouping field (dimension) and one aggregated numeric field (measure)"
   },
   {
    "key": "b",
    "text": "A filter condition and a sorting specification"
   },
   {
    "key": "c",
    "text": "A source data stream and a target DMO for output"
   },
   {
    "key": "d",
    "text": "A time-based window and a count aggregation function"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A calculated insight must include at least one dimension and one measure (Option 1). Filters, sorting, source streams, target DMOs, time windows, or specific aggregations are optional or use‑case specific. **Why the other options are incorrect:** - **Option 2:** Optional, not required. - **Option 3:** Not required; insights query existing DMOs. - **Option 4:** Not universally required.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 50,
  "statement": "A consultant is mapping a source field from an ERP system that contains values like \"2025-03-15 14:30:00\" (datetime) and \"2025-03-16\" (date only) into a target field of type Date in a Data 360 DMO. What will happen to the datetime values?",
  "options": [
   {
    "key": "a",
    "text": "The target field will store only the date portion and discard the time component"
   },
   {
    "key": "b",
    "text": "The target field will reject datetime values and store NULL for those rows"
   },
   {
    "key": "c",
    "text": "The target field will convert datetime values to a string and store them as text"
   },
   {
    "key": "d",
    "text": "The target field will throw a schema validation error and fail the ingestion"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The target field will store only the date portion, discarding the time (Option 1). It will not reject values, convert to string, or cause an error. **Why the other options are incorrect:** - **Option 2:** No rejection or NULL. - **Option 3:** Does not convert to string. - **Option 4:** No validation error.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 51,
  "statement": "A data analyst is working in Data Explorer and cannot locate a specific DMO that they know exists. They realize they selected the \"Marketing\" data space when creating the workspace, but the DMO resides in the \"Sales\" data space. How can the analyst access the DMO?",
  "options": [
   {
    "key": "a",
    "text": "Add the Sales data space to the existing Marketing workspace"
   },
   {
    "key": "b",
    "text": "Move the DMO from Sales data space to Marketing data space"
   },
   {
    "key": "c",
    "text": "Create a new workspace and select the Sales data space"
   },
   {
    "key": "d",
    "text": "Reference the DMO using a fully qualified name with the Sales data space prefix"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The analyst must create a new workspace and select the Sales data space (Option 3). Workspaces cannot be modified to add data spaces, DMOs cannot be moved, and cross‑space references are not supported. **Why the other options are incorrect:** - **Option 1:** Cannot add data spaces to existing workspace. - **Option 2:** Cannot move DMOs between data spaces. - **Option 4:** Cross‑space references not supported.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 52,
  "statement": "A property management company has multiple residents sharing the same apartment address and building intercom phone number. Each resident has unique preferences and lease terms. Which Identity Resolution strategy prevents incorrectly merging different residents into a single profile?",
  "options": [
   {
    "key": "a",
    "text": "Configure match rules that combine individual identifiers (e.g., full name, birth date) with shared contact points"
   },
   {
    "key": "b",
    "text": "Use a single match rule based only on the apartment address"
   },
   {
    "key": "c",
    "text": "Exclude all contact point attributes from matching and rely solely on government ID"
   },
   {
    "key": "d",
    "text": "Configure a single match rule based on the intercom phone number"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct strategy is to combine individual identifiers with shared contact points in match rules (Option 1). Single‑rule approaches based on address or phone number would cause over‑merging, while excluding contact points entirely may cause under‑merging. **Why the other options are incorrect:** - **Option 2:** Single address rule would over‑merge. - **Option 3:** Excluding contact points may miss legitimate matches. - **Option 4:** Single phone rule would over‑merge.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 53,
  "statement": "A campaign manager is configuring an activation from a segment built on the \"Individual\" DMO. They want to include \"Policy_Type\" from a related Insurance DMO and \"Last_Support_Chat_Date\" from a related Support DMO. The Insurance and Support DMOs are not directly related to each other. Why might one of these attributes be unavailable?",
  "options": [
   {
    "key": "a",
    "text": "The segment was not published before activation configuration began"
   },
   {
    "key": "b",
    "text": "The desired attributes reside on different relationship paths from the Individual DMO"
   },
   {
    "key": "c",
    "text": "Activations can only include attributes from DMOs with value suggestions enabled"
   },
   {
    "key": "d",
    "text": "Both DMOs have conflicting field names that must be aliased first"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Attributes may be unavailable because they reside on different relationship paths from the base object (Option 2). Publication status, value suggestions, or field name conflicts are less likely causes. **Why the other options are incorrect:** - **Option 1:** Publication status does not affect availability. - **Option 3:** Value suggestions not required. - **Option 4:** Name conflicts would cause ambiguity, not unavailability.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 54,
  "statement": "A rideshare company detects a surge pricing event from its streaming telemetry feed. When this event occurs, a high-priority driver bonus flow must execute within seconds. Which Data 360 capability enables this immediate reaction?",
  "options": [
   {
    "key": "a",
    "text": "Scheduled batch transform running every 5 minutes"
   },
   {
    "key": "b",
    "text": "Calculated insight refreshed on a 1-minute interval"
   },
   {
    "key": "c",
    "text": "Real-time data action mapped to an event-triggered Salesforce Flow"
   },
   {
    "key": "d",
    "text": "Manual activation triggered by an operations team member"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Real‑time data action mapped to an event‑triggered Flow (Option 3) enables immediate reaction within seconds. Batch transforms, calculated insights, or manual activation are too slow. **Why the other options are incorrect:** - **Option 1:** Too slow (minutes). - **Option 2:** Too slow (up to 60 seconds). - **Option 4:** Human intervention is not immediate or automated.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 55,
  "statement": "An administrator refreshes a Developer Sandbox from production to get the latest metadata. The sandbox previously had several test data streams and ingested records. What happens to the Data 360 configuration and data in the sandbox after refresh?",
  "options": [
   {
    "key": "a",
    "text": "All Data 360 metadata is overwritten with production metadata, and previously ingested records are cleared"
   },
   {
    "key": "b",
    "text": "The sandbox Data 360 instance is completely deleted and must be re-provisioned manually"
   },
   {
    "key": "c",
    "text": "Data streams remain active but all mapping configurations revert to draft status"
   },
   {
    "key": "d",
    "text": "Identity resolution rules are preserved but data streams are removed"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "After a sandbox refresh, all Data 360 metadata is overwritten from production, and previously ingested records are cleared (Option 1). The instance is not deleted, nor are any sandbox‑specific configurations preserved. **Why the other options are incorrect:** - **Option 2:** Instance is not deleted. - **Option 3:** No metadata is preserved. - **Option 4:** All metadata is overwritten.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 56,
  "statement": "A data architect wants to configure zero-copy query federation to read from an external Google BigQuery dataset. What is the first action required in Data 360 before any federated queries can be executed?",
  "options": [
   {
    "key": "a",
    "text": "Create a data stream using the Bulk API with BigQuery selected as the source"
   },
   {
    "key": "b",
    "text": "Establish a connection in Data 360 Setup with BigQuery service account credentials"
   },
   {
    "key": "c",
    "text": "Map the external BigQuery tables directly to the Unified Individual DMO"
   },
   {
    "key": "d",
    "text": "Configure identity resolution match rules for the BigQuery dataset"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The first action is to establish a connection in Data 360 Setup (Option 2). Data streams, mapping to DMOs, or identity resolution rules come later. **Why the other options are incorrect:** - **Option 1:** Bulk API is for ingestion, not federation setup. - **Option 3:** Connection must come before mapping. - **Option 4:** Identity resolution is unrelated.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 57,
  "statement": "A marketing team needs to send customer data from Data 360 to an external CRM that requires snake_case field names (e.g., \"loyalty_tier\"), while Data 360 uses PascalCase (\"LoyaltyTier\"). How can the consultant change the attribute names without altering the source DMO?",
  "options": [
   {
    "key": "a",
    "text": "Update the field names directly in the source data model object"
   },
   {
    "key": "b",
    "text": "Set preferred attribute names during activation configuration"
   },
   {
    "key": "c",
    "text": "Create a calculated insight that aliases each field name"
   },
   {
    "key": "d",
    "text": "Modify the data stream mapping to rename fields before ingestion"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Set preferred attribute names during activation configuration (Option 2). This changes names only in the output payload. Updating DMO fields, calculated insights, or data stream mappings would have broader, unwanted effects. **Why the other options are incorrect:** - **Option 1:** Affects all downstream uses. - **Option 3:** Calculated insights compute values, not rename. - **Option 4:** Changes names for all uses, not just one activation.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 58,
  "statement": "A consultant is implementing Right to Be Forgotten compliance using the Consent API. What key detail should the consultant communicate to the customer about how deletion requests are structured?",
  "options": [
   {
    "key": "a",
    "text": "Deletion requests are submitted for Individual profiles and apply to data linked to that profile"
   },
   {
    "key": "b",
    "text": "Deletion requests automatically cascade to all connected third-party marketing systems"
   },
   {
    "key": "c",
    "text": "Deletion requests must specify each related DMO individually to be processed"
   },
   {
    "key": "d",
    "text": "Deletion requests are processed instantly upon submission with no latency"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Deletion requests are submitted for Individual profiles and apply to data linked to that profile (Option 1). They are not auto‑propagated to third‑party systems, do not require per‑DMO specification, and are not guaranteed to process instantly. **Why the other options are incorrect:** - **Option 2:** Not automatically propagated. - **Option 3:** Profile‑centric, not per‑DMO. - **Option 4:** Processing time varies.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 59,
  "statement": "A customer submits a formal request to have all their personal data erased from Data 360 in compliance with privacy regulations. Which mechanism provides an auditable, standardized way to submit this deletion request?",
  "options": [
   {
    "key": "a",
    "text": "Direct SQL DELETE command executed in Data Explorer"
   },
   {
    "key": "b",
    "text": "Manual deletion of records using Profile Explorer"
   },
   {
    "key": "c",
    "text": "Consent API with the deletion request type specified"
   },
   {
    "key": "d",
    "text": "Metadata API call to remove the individual's records"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Consent API (Option 3) is the standardized, auditable mechanism for submitting Right to Be Forgotten requests. Direct SQL, manual deletion, or Metadata API are not appropriate. **Why the other options are incorrect:** - **Option 1:** Lacks governance and audit trails. - **Option 2:** Not for initiating deletion requests. - **Option 4:** Metadata API is for configuration, not record deletion.",
  "module": "dc-governance"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 60,
  "statement": "A promotional segment is designed to target customers who have not made a purchase in the last 60 days. The marketing team wants to ensure that customers who purchased within the last 7 days are removed from this segment. How should the consultant implement this suppression?",
  "options": [
   {
    "key": "a",
    "text": "Add an exclude rule to the segment for customers with purchase date within last 7 days"
   },
   {
    "key": "b",
    "text": "Filter out recent purchasers in the email marketing platform after activation"
   },
   {
    "key": "c",
    "text": "Create a separate segment for recent purchasers and use a suppression list"
   },
   {
    "key": "d",
    "text": "Apply a streaming insight to dynamically remove recent purchasers"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should add an exclude rule to the segment (Option 1). Exclude rules are the most direct and efficient way to suppress specific customers from a segment. Post‑activation filtering, separate suppression segments, or streaming insights are less suitable. **Why the other options are incorrect:** - **Option 2:** Inefficient and may miss suppression. - **Option 3:** Adds complexity. - **Option 4:** Streaming insights not for static exclude rules.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 61,
  "statement": "A segment of \"Active Subscribers\" should include only customers who have placed an order in the last 30 days. After activating the segment, the marketing team notices that customers with orders older than 30 days are included. What is the correct way to resolve this?",
  "options": [
   {
    "key": "a",
    "text": "Define the segment on the Order DMO with a filter on order date for the last 30 days"
   },
   {
    "key": "b",
    "text": "Apply a date filter within the activation configuration to exclude older orders"
   },
   {
    "key": "c",
    "text": "Add a secondary index on order date to improve segment accuracy"
   },
   {
    "key": "d",
    "text": "Filter out older orders using a calculated insight after segment creation"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The segment should be defined on the Order DMO with a date filter for the last 30 days (Option 1). Activation‑level filters, secondary indexes, or calculated insights do not correctly constrain segment membership. **Why the other options are incorrect:** - **Option 2:** Activation filters do not change segment membership. - **Option 3:** Indexes improve performance, not logic. - **Option 4:** Calculated insights are for aggregations.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 62,
  "statement": "A mobile app team using the Interactions SDK wants to calculate the number of screen views per user within rolling 10-minute windows for a real-time engagement dashboard. Which Data 360 feature should process this windowed aggregation?",
  "options": [
   {
    "key": "a",
    "text": "Batch transform scheduled every 10 minutes"
   },
   {
    "key": "b",
    "text": "Calculated insight refreshed on a 10-minute interval"
   },
   {
    "key": "c",
    "text": "Streaming insight with a tumbling or sliding window"
   },
   {
    "key": "d",
    "text": "Formula field on the incoming event stream"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A streaming insight with a tumbling or sliding window (Option 3) is the correct feature for real‑time windowed aggregations. Batch transforms, calculated insights, or formula fields cannot provide the required rolling windows with low latency. **Why the other options are incorrect:** - **Option 1:** Batch cannot provide real-time rolling windows. - **Option 2:** Batch orientation, too slow. - **Option 4:** Formula fields are row‑level only.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 63,
  "statement": "A data analyst needs to verify that the join keys between the \"Unified_Individual_DMO\" and a custom \"Subscription_History_DMO\" are correctly configured before building a segment. Which tool allows the analyst to run a manual SQL query to inspect the joined results?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 Data Explorer"
   },
   {
    "key": "b",
    "text": "Data 360 Activation Tester"
   },
   {
    "key": "c",
    "text": "Data 360 Metadata Importer"
   },
   {
    "key": "d",
    "text": "Data 360 Segment Validator"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Explorer (Option 1) allows manual SQL queries to inspect joined results. Activation Tester, Metadata Importer, and Segment Validator do not provide this ad‑hoc SQL query capability. **Why the other options are incorrect:** - **Option 2:** Activation Tester is for activation testing. - **Option 3:** Metadata Importer is for schema import. - **Option 4:** Segment Validator is for segment logic.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 64,
  "statement": "A customer support team frequently queries the \"Transaction_DMO\" filtering on \"Support_Ticket_ID\" — a field that is not the primary key. These queries are becoming slow as the table grows. What database object should the consultant create to improve query performance?",
  "options": [
   {
    "key": "a",
    "text": "A materialized view pre-aggregating support tickets"
   },
   {
    "key": "b",
    "text": "A secondary index on the Support_Ticket_ID field"
   },
   {
    "key": "c",
    "text": "A calculated insight that caches ticket lookups"
   },
   {
    "key": "d",
    "text": "A partitioned table based on transaction date"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A secondary index on Support_Ticket_ID (Option 2) is the correct solution to improve query performance. Materialized views, calculated insights, or partitioning are not appropriate for this simple non‑key field lookup optimization. **Why the other options are incorrect:** - **Option 1:** Materialized view adds unnecessary overhead. - **Option 3:** Calculated insights are for aggregations. - **Option 4:** Partitioning helps range scans on partition key, not arbitrary lookups.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 65,
  "statement": "A data science team has trained a fraud detection model using Azure Machine Learning. They want to score customer profiles inside Data 360 without exporting or duplicating the customer data. Which capability should the consultant use to run this external model's inference within Data 360?",
  "options": [
   {
    "key": "a",
    "text": "Export predictions as CSV and re-ingest as a data lake object"
   },
   {
    "key": "b",
    "text": "Bring Your Own Model (BYOM) to connect the Azure ML endpoint"
   },
   {
    "key": "c",
    "text": "Build an equivalent model using Einstein Studio's native regression"
   },
   {
    "key": "d",
    "text": "Use calculated insights to approximate the model's scoring logic"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Bring Your Own Model (BYOM) (Option 2) enables external model inference without data duplication. CSV export, rebuilding natively, or using calculated insights are inefficient or infeasible. **Why the other options are incorrect:** - **Option 1:** Creates data duplication and latency. - **Option 3:** Duplicates effort and may not match logic. - **Option 4:** Cannot replicate complex ML inference.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 2,
  "number": 66,
  "statement": "A loyalty program manager needs to segment customers by \"Total Lifetime Points\" — a sum of points earned from ecommerce purchases, in-store transactions, and referral bonuses stored across three separate DMOs. Which feature should create this aggregated metric for segmentation?",
  "options": [
   {
    "key": "a",
    "text": "A calculated insight that joins and sums points across the three source DMOs"
   },
   {
    "key": "b",
    "text": "A streaming insight that processes points in real time"
   },
   {
    "key": "c",
    "text": "A secondary index on the points field in each source DMO"
   },
   {
    "key": "d",
    "text": "A batch transform that writes the sum to a lookup table daily"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A calculated insight (Option 1) is the correct feature to sum points across multiple DMOs for segmentation. Streaming insights, secondary indexes, or batch transforms are not ideal for this aggregated metric. **Why the other options are incorrect:** - **Option 2:** Streaming insights are for real-time, not lifetime totals. - **Option 3:** Indexes improve query speed, not compute sums. - **Option 4:** Batch transforms are less maintainable than calculated insights.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 1,
  "statement": "A healthcare provider ingests patient appointment records from both a legacy scheduling system and a new patient portal. Both systems use identical numeric patient IDs (e.g., both use \"P12345\" for different patients). Without additional qualification, appointment records could be attributed to the wrong patient. Which feature prevents this misattribution?",
  "options": [
   {
    "key": "a",
    "text": "Patient Unification Rules"
   },
   {
    "key": "b",
    "text": "Source-Qualified Composite Keys"
   },
   {
    "key": "c",
    "text": "Identity Resolution Confidence Scoring"
   },
   {
    "key": "d",
    "text": "Cross-System Reconciliation Rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Source-Qualified Composite Keys (Fully Qualified Keys) combine the source system identifier with the patient ID (e.g., \"Legacy|P12345\" vs \"Portal|P12345\"), creating a unique key per source. This prevents appointment records from being incorrectly associated with the wrong source profile, as each record's origin is preserved. It is the only option that directly addresses cross‑source uniqueness. **Why the other options are incorrect:** A: Patient Unification Rules govern how profiles are merged, not how records are associated with source profiles. C: Confidence scoring affects match likelihood, not source attribution for engagement records. D: Cross-System Reconciliation Rules determine attribute precedence, not engagement-to-source association.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 2,
  "statement": "A retail bank is planning its first Data 360 implementation. Leadership wants a project that demonstrates value quickly, has manageable scope, and solves an immediate business pain point. Which initiative aligns with Salesforce implementation best practices?",
  "options": [
   {
    "key": "a",
    "text": "Unifying customer data from checking, savings, and credit card systems to give branch managers a complete customer view"
   },
   {
    "key": "b",
    "text": "Building a real-time fraud detection engine integrating 12 external credit bureau feeds"
   },
   {
    "key": "c",
    "text": "Migrating 30 years of loan document images to reduce legacy storage costs"
   },
   {
    "key": "d",
    "text": "Redesigning global identity resolution for 200 million customers across 25 countries without a pilot"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Unifying customer data from three related systems (checking, savings, credit cards) to provide branch managers with a complete customer view follows best practices: manageable scope, clear business value (improved service), high visibility, and measurable outcomes. This is an ideal initial use case that delivers quick wins without excessive complexity. **Why the other options are incorrect:** B: A real-time fraud detection engine with 12 external feeds is overly ambitious for an initial implementation and introduces high risk. C: Migrating 30 years of loan document images reduces storage costs but does not demonstrate tangible business value to end users; initial projects should solve a visible pain point. D: Redesigning identity resolution at global scale without a pilot violates iterative, phased deployment best practices and is far too large for a first project.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 3,
  "statement": "A travel company wants to target customers who booked a \"business class flight to London\" from the Booking Line Item object. The segment requires both \"class = business\" AND \"destination = London\" on the same booking. How should the consultant structure these criteria in Segment Builder?",
  "options": [
   {
    "key": "a",
    "text": "Place both attribute conditions in separate containers with AND logic between containers"
   },
   {
    "key": "b",
    "text": "Place both attribute conditions in a single container that applies to one booking line item"
   },
   {
    "key": "c",
    "text": "Place the destination condition as a direct attribute and the class condition as a related attribute"
   },
   {
    "key": "d",
    "text": "Create a calculated insight for \"business to London\" and use that as the only filter"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When filtering on multiple attributes from the same related object (Booking Line Item) that must both be true for the same record (class = business AND destination = London), the attributes should be placed in a single container. A container groups conditions that apply to the same instance of a related object, ensuring both conditions are evaluated on the identical booking line item. **Why the other options are incorrect:** A: Separate containers would evaluate conditions independently, potentially matching one booking with business class to Tokyo and another with economy class to London, thus violating the \"same booking\" requirement. C: Direct attributes refer to fields on the primary object (Customer), not related object attributes; you cannot filter on a related object’s field as a direct attribute. D: A calculated insight adds unnecessary complexity and maintenance overhead; the segment can be built directly with existing attributes without extra processing.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 4,
  "statement": "A subscription box service has calculated a \"Customer Loyalty Index\" (CLI) score for each unified customer. The marketing team needs to use this score in Braze to personalize email content. What is the most efficient way to make the CLI score available to Braze?",
  "options": [
   {
    "key": "a",
    "text": "Include the calculated insight attribute as a field in the audience activation payload"
   },
   {
    "key": "b",
    "text": "Export the CLI scores to a CSV file and upload manually to Braze each week"
   },
   {
    "key": "c",
    "text": "Copy the CLI score to a custom field on the source CRM Contact object"
   },
   {
    "key": "d",
    "text": "Add the CLI score to a related list on the customer profile page"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient way is to compute the CLI score as a calculated insight in Data 360, then include that calculated insight attribute as a field when configuring the segment activation to Braze. Braze receives the score as part of the audience payload, enabling personalized content without manual exports or intermediate storage. **Why the other options are incorrect:** B: Manual CSV export introduces latency (up to a week), operational overhead, and breaks the goal of automated, real‑time personalization. C: Copying to a source CRM field duplicates data and does not automatically send scores to Braze; you would still need additional integration. D: Related lists display data within Salesforce CRM only and do not activate scores to external marketing platforms like Braze.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 5,
  "statement": "A data architect compares two approaches for accessing customer data stored in an external Databricks environment. One approach copies data into Data 360 storage; the other queries data directly where it resides. Which statement accurately describes the zero-copy approach?",
  "options": [
   {
    "key": "a",
    "text": "Data federation queries external data directly without physically moving or duplicating it into Data 360 storage"
   },
   {
    "key": "b",
    "text": "Data federation automatically replicates external data into Data 360 every 15 minutes"
   },
   {
    "key": "c",
    "text": "Data federation requires converting all external data to CSV format before any query can execute"
   },
   {
    "key": "d",
    "text": "Data federation only supports reading data from Salesforce CRM instances"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data federation (zero-copy data federation) reads data directly from the external provider (e.g., Databricks) without physically moving or copying the data into Data 360's storage. Traditional data ingestion copies data into Data 360's data lake, incurring storage costs and potential data duplication. Zero‑copy avoids both. **Why the other options are incorrect:** B: Federation does not copy or replicate data periodically; it queries data in place. No automatic replication occurs. C: Federation works with native formats (Parquet, Delta, etc.); no CSV conversion is required. It pushes queries down to the external engine. D: Federation supports multiple external data platforms including Databricks, Snowflake, BigQuery, and Redshift, not just Salesforce CRM instances.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 6,
  "statement": "A developer is integrating customer data from a CRM and a support ticketing system into Data 360. The CRM calls the customer's name \"Customer_Name\" while the ticketing system uses \"Requester_Name.\" Both represent the same concept. Which component provides a standardized structure to map both fields to a common attribute?",
  "options": [
   {
    "key": "a",
    "text": "A data model object (DMO) with a unified \"Customer Full Name\" attribute"
   },
   {
    "key": "b",
    "text": "An identity resolution ruleset to merge duplicate name records"
   },
   {
    "key": "c",
    "text": "A segmentation canvas for selecting name attributes in audiences"
   },
   {
    "key": "d",
    "text": "An encryption key to secure name fields during transfer"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Data Model Object (DMO) provides a standardized schema for harmonizing fields from different sources. The developer maps \"Customer_Name\" from CRM and \"Requester_Name\" from the ticketing system to the same attribute (e.g., \"Customer Full Name\") in the DMO, ensuring they are recognized as the same field across the unified model. **Why the other options are incorrect:** B: Identity resolution merges records but requires fields to already be harmonized into the same DMO attributes. It cannot map different field names to a common attribute. C: Segmentation canvas is for building audiences, not for defining data structure. It consumes harmonized fields but does not create them. D: Encryption secures data during transfer but does not provide any structural standardization or field mapping.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 7,
  "statement": "A consultant is configuring a new data stream to ingest a custom object called \"Equipment_Asset__c\" from Salesforce CRM. However, this object does not appear in the available objects list. Which permission should the consultant verify in the source Salesforce CRM org?",
  "options": [
   {
    "key": "a",
    "text": "The connected user has \"View All\" permission on Equipment_Asset__c"
   },
   {
    "key": "b",
    "text": "The connected user has \"Create\" permission on Equipment_Asset__c"
   },
   {
    "key": "c",
    "text": "The connected user has \"Modify All Data\" system permission"
   },
   {
    "key": "d",
    "text": "The Data 360 org has \"Ingest Object\" permission enabled"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To see a custom object from Salesforce CRM in Data 360's New Data Stream configuration, the connected user must have the 'View All' object permission on that custom object in the source Salesforce CRM org. This permission allows Data 360 to read the object's metadata and data during data stream setup. **Why the other options are incorrect:** B: Create permission is for creating new records, not for reading existing object metadata or making the object visible in the available objects list. C: Modify All Data is a broad system permission that is not required; View All is the minimal needed permission for discovering the object. D: \"Ingest Object permission\" is not a standard Salesforce permission; View All is the correct and documented permission.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 8,
  "statement": "An analytics team needs to run complex aggregate queries on a large dataset stored in Snowflake. The queries run every 2 hours for a recurring executive report. The team requires fast response times but does not need sub-second freshness. Which Data 360 pattern is most appropriate?",
  "options": [
   {
    "key": "a",
    "text": "Query federation with result caching, refreshed on a 2-hour schedule"
   },
   {
    "key": "b",
    "text": "Live query federation executing directly on Snowflake for each report"
   },
   {
    "key": "c",
    "text": "Full data ingestion of the Snowflake dataset into Data 360 storage"
   },
   {
    "key": "d",
    "text": "File federation using periodic exports from Snowflake to cloud storage"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For periodic heavy analytics (every 2 hours) with high throughput but no real-time requirement, query federation with acceleration (caching) is most appropriate. Data 360 caches the external data locally and refreshes on schedule, providing fast query performance without repeatedly hitting Snowflake for every report execution. **Why the other options are incorrect:** B: Live query federation queries Snowflake in real time for each report, which may be slower (network latency) and incur higher costs due to repeated full scans. C: Full ingestion copies all data, increasing storage costs and requiring ongoing sync management, which is overkill for a 2‑hour report. D: File federation adds complexity (exports, file management) and is less efficient than direct query federation with caching.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 9,
  "statement": "A logistics company is ingesting shipment data from a legacy system that lacks a primary key. The combination of \"Warehouse_Code\" and \"Shipment_Reference_Number\" uniquely identifies each row. Which formula function should the consultant use to create a single composite key field from these two source fields?",
  "options": [
   {
    "key": "a",
    "text": "CONCAT"
   },
   {
    "key": "b",
    "text": "MERGE"
   },
   {
    "key": "c",
    "text": "APPEND"
   },
   {
    "key": "d",
    "text": "UNION"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The CONCAT function is used to combine two or more strings into one. To create a composite key from Warehouse_Code and Shipment_Reference_Number, CONCAT joins them into a single unique identifier, e.g., CONCAT(Warehouse_Code, '-', Shipment_Reference_Number). This creates a reliable primary surrogate key. **Why the other options are incorrect:** B: MERGE is not a standard Data 360 formula function for string concatenation; it is typically used for merging records or data sets. C: APPEND is not a standard formula function for this purpose; CONCAT is the correct and documented function. D: UNION is a set operation in SQL for combining result sets, not a string concatenation function.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 10,
  "statement": "A financial trading platform wants to detect when a premium-tier user views the \"margin call\" page more than twice within a 10-minute period and immediately trigger a risk alert notification. Which Data 360 capability should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "A streaming insight that detects the page view pattern and triggers a data action"
   },
   {
    "key": "b",
    "text": "A calculated insight refreshed every 10 minutes to evaluate page view counts"
   },
   {
    "key": "c",
    "text": "A segment with rapid publish refreshing every 5 minutes to an alert system"
   },
   {
    "key": "d",
    "text": "A batch transform scheduled every 10 minutes to aggregate page view events"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement specifies immediate detection of a pattern (>2 page views within 10 minutes). A streaming insight processes events in real time, maintains the rolling 10-minute window, detects the pattern when it occurs, and triggers a data action (risk alert) instantly, meeting the low-latency requirement. **Why the other options are incorrect:** B: A calculated insight refreshed every 10 minutes introduces up to 10 minutes of latency and cannot provide true real-time detection; the window is not sliding. C: Rapid publish segments are batch-oriented (even with short intervals) and cannot react within a rolling 10-minute window in real time. D: A batch transform processes data in bulk and cannot provide immediate event pattern detection; it would miss the real-time trigger.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 11,
  "statement": "A large insurance company has regional marketing teams in North America, Europe, and Asia. Each team manages their own customer segments, but all segments must exclude customers who have opted out of SMS communication. This opt-out list is updated weekly. How can the consultant ensure consistent exclusion across all segments without manual duplication?",
  "options": [
   {
    "key": "a",
    "text": "Instruct each regional team to copy the exclusion criteria into their segments every week"
   },
   {
    "key": "b",
    "text": "Export the exclusion list to a CSV and have each team import it into their segments"
   },
   {
    "key": "c",
    "text": "Define the SMS opt-out criteria once in a reusable rule container and reference it in all segments"
   },
   {
    "key": "d",
    "text": "Package the exclusion criteria in a data kit and deploy it to each region weekly"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A reusable rule container (reusable container block) allows common exclusion criteria (SMS opt-out) to be defined once and referenced across multiple segments. When the opt-out list is updated weekly, all segments using that container automatically inherit the change, ensuring consistency across all regional teams with minimal maintenance effort. **Why the other options are incorrect:** A: Manual duplication each week is error-prone, inefficient, and guarantees inconsistency over time as teams may copy differently. B: CSV imports add manual steps and break automation; segments would not automatically update when the exclusion list changes. D: Data kits package configuration for deployment across orgs, not for live synchronization of criteria within the same org; they are not designed for weekly criteria updates.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 12,
  "statement": "A consultant needs to derive a \"FullName\" field by concatenating \"FirstName\" and \"LastName\" from a source system, and also calculate \"DiscountedPrice\" as (ListPrice * 0.85). No other transformations involve joins, aggregations, or multi-row logic. When is a formula more appropriate than a transform for these operations?",
  "options": [
   {
    "key": "a",
    "text": "When the logic involves joining customer data from three separate source tables"
   },
   {
    "key": "b",
    "text": "When performing simple, per-record string concatenation and arithmetic calculations"
   },
   {
    "key": "c",
    "text": "When the same transformation must be reused across 15 different data streams"
   },
   {
    "key": "d",
    "text": "When processing 10 billion records requiring distributed parallel execution"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Formulas are ideal for simple, row-level transformations such as string concatenation (FirstName + LastName) and basic arithmetic (ListPrice * 0.85). They are lightweight, execute per row during data stream mapping, and require no separate transform job, making them the preferred choice for these operations. **Why the other options are incorrect:** A: Joining three separate tables requires a transform, which supports set-based operations; formulas cannot perform joins across tables. C: Reusable logic across multiple streams is better handled by transforms or shared components, as formulas are tied to a specific stream mapping and not easily reusable. D: Parallel processing of massive datasets is a strength of transforms, not formulas, which operate row-by-row without distributed execution.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 13,
  "statement": "A marketing automation platform exports campaign interaction data to Data 360. The export files do not contain a unique row identifier. However, the combination of \"Campaign_ID,\" \"Contact_Email,\" and \"Interaction_Timestamp\" uniquely identifies each row. What should the consultant do to create a unique identifier for this data stream?",
  "options": [
   {
    "key": "a",
    "text": "Generate a random unique ID for each row using a formula"
   },
   {
    "key": "b",
    "text": "Create a composite key by concatenating the three fields using a formula"
   },
   {
    "key": "c",
    "text": "Ask the source system owner to add a primary key field"
   },
   {
    "key": "d",
    "text": "Use the Data 360 system-generated row ID as the primary key"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a data source lacks a single-field primary key, the consultant should create a composite key by combining two or more source fields (Campaign_ID, Contact_Email, Interaction_Timestamp) using a formula field. This composite key becomes a unique identifier for each row during ingestion and enables incremental updates. **Why the other options are incorrect:** A: A random generated ID has no relationship to source data and cannot be used for incremental updates or matching against source records. C: Asking the source owner is a valid long-term solution but may be impossible or delayed; Data 360 provides a native, immediate solution. D: System-generated row IDs are not based on source data values and cannot be used for identifying specific source records for update or deduplication.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 14,
  "statement": "A data analyst needs to compute \"Customer Lifetime Spend\" at the unified customer level for a retail client. Transaction amounts are stored in the \"Order_Transaction_DMO,\" source customer records are in \"Source_Contact_DMO,\" and resolved profiles are in \"Unified_Customer_DMO.\" Which join sequence should the calculated insight use?",
  "options": [
   {
    "key": "a",
    "text": "Order_Transaction_DMO → Source_Contact_DMO → Unified_Customer_DMO"
   },
   {
    "key": "b",
    "text": "Unified_Customer_DMO → Source_Contact_DMO → Order_Transaction_DMO"
   },
   {
    "key": "c",
    "text": "Order_Transaction_DMO → Unified_Customer_DMO"
   },
   {
    "key": "d",
    "text": "Source_Contact_DMO → Order_Transaction_DMO → Unified_Customer_DMO"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To calculate Customer Lifetime Spend at the unified customer level, the calculated insight must join from Order_Transaction_DMO (transaction data) to Source_Contact_DMO (source profile) to Unified_Customer_DMO (merged profile). This path allows aggregating transaction amounts per unified customer because transactions link to source contacts, which link to unified profiles. **Why the other options are incorrect:** B: Starting from Unified_Customer_DMO works but the standard efficient sequence starts from the transaction object to leverage its foreign keys and avoid scanning all unified profiles. C: A direct join from Order_Transaction_DMO to Unified_Customer_DMO is typically not possible as there is no direct foreign key relationship; the link goes through Source_Contact_DMO. D: Starting from Source_Contact_DMO works but the conventional and more efficient sequence starts from the transaction object for LTV calculations to reduce data movement.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 15,
  "statement": "A Data 360 Consultant is configuring data ingestion for a job recruitment platform. The hiring team requests to include \"Religious Affiliation\" and \"Veteran Status\" fields to improve diversity tracking. Which ethical principle should guide the consultant's response to this request?",
  "options": [
   {
    "key": "a",
    "text": "Collect all requested fields to maximize the platform's personalization capabilities"
   },
   {
    "key": "b",
    "text": "Grant the hiring team full access to sensitive fields for compliance auditing"
   },
   {
    "key": "c",
    "text": "Evaluate whether these sensitive attributes are truly necessary for legitimate business purposes"
   },
   {
    "key": "d",
    "text": "Map all sensitive data to a single DMO to simplify future deletion requests"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Ethical handling of customer data requires carefully evaluating whether sensitive data (religious affiliation, veteran status, etc.) is truly necessary for legitimate business purposes. Such data carries privacy risks, potential for discrimination, and regulatory requirements (special category data under GDPR). Collect only when necessary with proper consent and safeguards. **Why the other options are incorrect:** A: Collecting all data without justification violates data minimization principles and may breach privacy regulations (e.g., GDPR). B: Granting broad access to sensitive data violates least privilege and need-to-know principles; access should be restricted. D: Mapping sensitive data to a single DMO relates to data organization, not ethical collection justification; it does not address whether collection is ethical.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 16,
  "statement": "A multinational retailer uses Data 360 to unify customer profiles across ecommerce, point-of-sale, and customer service systems. The data science team needs read-only access to unified customer data in Snowflake with updates available within minutes, minimal operational complexity, and no data duplication. Which approach should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Configure Data 360 Data Sharing to expose unified customer profiles directly to Snowflake"
   },
   {
    "key": "b",
    "text": "Schedule hourly CSV exports from Data 360 to S3 and load into Snowflake via COPY"
   },
   {
    "key": "c",
    "text": "Build custom REST APIs to stream data from Data 360 to Snowflake"
   },
   {
    "key": "d",
    "text": "Replicate Data 360 data to Salesforce standard objects and sync using ETL tools"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360 Data Sharing (zero-copy data sharing) allows direct, read-only sharing of unified customer data from Data 360 to Snowflake without moving or copying data. This provides near-real-time updates (within minutes), minimizes complexity (no ETL), and avoids data duplication, perfectly meeting all requirements. **Why the other options are incorrect:** B: Hourly CSV exports introduce up to 60 minutes of latency and require data duplication and additional pipeline management. C: Custom REST APIs introduce significant engineering complexity, rate limits, and maintenance overhead; not minimal complexity. D: Replication to standard objects and ETL adds complexity, latency, and data duplication with no benefit over Data Sharing.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 17,
  "statement": "A campaign manager is building an activation from a segment on the \"Customer_DMO.\" They want to include \"Product_Category\" from a Purchases DMO and \"Support_Tier\" from a Membership DMO. These two DMOs are not directly related to each other. When selecting related attributes, only one of them appears. Why?",
  "options": [
   {
    "key": "a",
    "text": "The Customer_DMO is not enabled for segmentation"
   },
   {
    "key": "b",
    "text": "The desired attributes reside on different relationship paths from the base DMO"
   },
   {
    "key": "c",
    "text": "Activations can only include attributes from the base DMO, not related DMOs"
   },
   {
    "key": "d",
    "text": "The attributes are currently locked because another activation is using them"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When creating an activation from a segment, the activation can only include attributes from a single relationship path from the base object (Customer_DMO). If the desired attributes reside on different relationship paths (Purchases DMO vs Membership DMO), they cannot be selected together in the same activation. **Why the other options are incorrect:** A: The Customer_DMO must be enabled for segmentation for the segment to exist at all, so this cannot be the reason only one attribute appears. C: Activations can include attributes from related DMOs, but only from a single relationship path; the statement that they cannot include related DMOs is false. D: Attributes are not locked when used in other activations; they remain available for selection.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 18,
  "statement": "A luxury hotel chain (data provider) and an airline (data consumer) are using a Data 360 clean room segment overlap template. They want to identify overlapping customers and filter results by \"Travel Season\" (Summer, Winter) and \"Booking Channel\" (Direct, OTA). What must the hotel chain do to enable these demographic filters?",
  "options": [
   {
    "key": "a",
    "text": "Configure a many-to-many relationship between the hotel and airline DMOs"
   },
   {
    "key": "b",
    "text": "Include Travel Season and Booking Channel as segmentation attributes in the use case template"
   },
   {
    "key": "c",
    "text": "Create a shared calculated insight that joins Travel Season and Booking Channel across both parties"
   },
   {
    "key": "d",
    "text": "Set Travel Season and Booking Channel as foreign keys in both organizations' DMOs"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In a Data 360 clean room segment overlap template, the data provider defines which fields are available for filtering and output. To allow filtering by Travel Season or Booking Channel, the provider must include these additional fields as segmentation attributes within the use case template configuration. The consumer can then filter results using those attributes. **Why the other options are incorrect:** A: Many-to-many relationships are not required for demographic filtering; the provider simply exposes attributes as segmentation fields. C: Shared calculated insights are not required; the provider can directly expose the fields from their data without joining. D: Foreign key relationships are not relevant to demographic filtering in overlap analysis; filtering uses attribute values, not keys.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 19,
  "statement": "A loyalty manager needs a segment called \"Elite Access\" defined as: customers already in the \"Gold Tier\" segment OR customers who have made more than 5 purchases in the last 60 days. The \"Gold Tier\" segment is maintained by a different team. Which approach is most efficient and maintainable?",
  "options": [
   {
    "key": "a",
    "text": "Build a calculated insight that flags both conditions and filter the segment on that insight"
   },
   {
    "key": "b",
    "text": "Create a waterfall segment that processes Gold Tier first, then purchase count second"
   },
   {
    "key": "c",
    "text": "Reference the existing \"Gold Tier\" segment as a nested component and add a separate container for the purchase condition with OR logic"
   },
   {
    "key": "d",
    "text": "Duplicate the \"Gold Tier\" segment logic and add the purchase condition to the copy"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The most efficient approach is to reference the existing \"Gold Tier\" segment as a nested segment and add a separate container for the purchase count condition using OR logic between the two containers. This directly implements the logical OR condition, reuses the existing segment, and keeps the definition maintainable. **Why the other options are incorrect:** A: A calculated insight adds unnecessary complexity for a simple OR condition and requires additional maintenance; it is over‑engineering. B: Waterfall segmentation implies priority ordering, which is not needed for OR logic; it also may exclude customers who meet both conditions from proper treatment. D: Duplicating the logic creates maintenance overhead; changes to \"Gold Tier\" would not automatically apply to the copy, leading to divergence.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 20,
  "statement": "A Data 360 administrator adds a new custom field called \"Preferred_Store_Location__c\" to a Salesforce CRM object that is actively being ingested. What happens to the data stream on the next synchronization after this schema change?",
  "options": [
   {
    "key": "a",
    "text": "The data stream ignores the new field and continues ingesting only the original columns"
   },
   {
    "key": "b",
    "text": "The CRM Connector performs a full refresh to reconcile the schema with the updated source object"
   },
   {
    "key": "c",
    "text": "The data stream automatically maps the new field but requires a manual refresh to populate values"
   },
   {
    "key": "d",
    "text": "The data stream fails and must be manually recreated with the updated schema"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a column is added to or removed from a Salesforce CRM object, the CRM Connector performs a full refresh (re-ingests all data) to synchronize the schema change. This ensures the data stream's target schema matches the updated source object structure. **Why the other options are incorrect:** A: The connector does not ignore schema changes; it detects them and triggers a full refresh to maintain consistency. C: The field is not automatically mapped; the full refresh allows the schema to realign, but mapping may need configuration depending on the field. D: Manual recreation is unnecessary; the connector handles schema changes automatically via full refresh, though the stream may need reactivation.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 21,
  "statement": "A media company has a development Data 360 org and a production Data 360 org. A consultant has completed and tested an Azure Event Hub data stream with custom field transformations in the development org. What is the recommended method to move this configuration to the production org?",
  "options": [
   {
    "key": "a",
    "text": "Export the configuration as a deployment bundle and install it in production"
   },
   {
    "key": "b",
    "text": "Use the Salesforce Metadata API to migrate the stream definition"
   },
   {
    "key": "c",
    "text": "Manually recreate the data stream and mappings in production using documentation"
   },
   {
    "key": "d",
    "text": "Package the configuration as an AppExchange managed package"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A data kit (deployment bundle) is the recommended mechanism for packaging and promoting Data 360 configurations (data streams, mappings, DMOs, calculated insights, etc.) from one Data 360 org to another. It captures all relevant metadata and can be installed in the target org with minimal effort. **Why the other options are incorrect:** B: Metadata API can be used but requires custom scripting and does not handle Data 360-specific artifacts as seamlessly as data kits. C: Manual recreation is error-prone, time-consuming, and not scalable for complex configurations. D: AppExchange is for public distribution of applications to external customers, not for internal promotion between two owned orgs.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 22,
  "statement": "A marketing coordinator at a retail company needs to build customer segments and send those segments to email and SMS activation targets. This user must not have access to modify identity resolution rules or data model mappings. Which standard permission set should the consultant assign following least privilege?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 Segment Manager"
   },
   {
    "key": "b",
    "text": "Data 360 System Administrator"
   },
   {
    "key": "c",
    "text": "Data 360 Activation Publisher"
   },
   {
    "key": "d",
    "text": "Data 360 Model Designer"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Data 360 Activation Publisher (equivalent to Activation Specialist) permission set grants the ability to view, create, and publish segments and activations while restricting access to data model mappings and identity resolution rules. This follows least privilege by providing only the permissions needed for segment and activation management. **Why the other options are incorrect:** A: Data 360 Segment Manager may have broader permissions than needed for activation publishing, possibly including mapping access. B: System Administrator has extensive permissions including modifying mappings and identity rules, exceeding the requirement. D: Model Designer has permissions to modify data model mappings, which the user should not have.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 23,
  "statement": "A data quality analyst needs to verify that records in a newly created \"Customer_Profile_DMO\" match expected values. They open the query interface in Data 360 to run ad-hoc checks. Which language must the analyst use to retrieve records from this DMO?",
  "options": [
   {
    "key": "a",
    "text": "Structured Query Language (SQL)"
   },
   {
    "key": "b",
    "text": "Data 360 Query Language (DQL)"
   },
   {
    "key": "c",
    "text": "Salesforce Object Query Language (SOQL)"
   },
   {
    "key": "d",
    "text": "JavaScript Object Notation (JSON)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360's query interface (Data Explorer/Query Editor) uses standard SQL (Structured Query Language) to query data model objects (DMOs) and data lake objects (DLOs). Analysts write SQL SELECT statements with WHERE clauses, JOINs, and aggregations to retrieve and examine records. **Why the other options are incorrect:** B: \"Data 360 Query Language\" is not a standard language; Data 360 uses standard SQL. C: SOQL is for querying standard Salesforce CRM objects (Accounts, Contacts), not Data 360 DMOs. D: JSON is a data interchange format, not a query language for retrieving records from DMOs.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 24,
  "statement": "A hotel booking platform wants to identify users who have searched for the same city more than three times within a 10-minute window. These users should be instantly added to a \"High Intent\" segment and receive a push notification. Which Data 360 feature should process this real-time pattern?",
  "options": [
   {
    "key": "a",
    "text": "A streaming insight with a sliding window count aggregation"
   },
   {
    "key": "b",
    "text": "A calculated insight refreshed every 10 minutes"
   },
   {
    "key": "c",
    "text": "A batch transform scheduled every 5 minutes"
   },
   {
    "key": "d",
    "text": "A streaming data transform that processes each event individually"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A streaming insight continuously processes event streams and can detect patterns like \"more than three searches within 10 minutes\" using windowed aggregations (sliding or tumbling windows). Results are immediately available for segmentation and can trigger data actions, meeting the near-real-time requirement. **Why the other options are incorrect:** B: A calculated insight refreshed every 10 minutes cannot detect a rolling 10-minute window in real time; it would have up to 10 minutes of latency. C: A batch transform scheduled every 5 minutes still introduces latency (up to 5 minutes) and cannot maintain a true rolling 10-minute window. D: A streaming data transform processes individual events but does not perform windowed aggregations like counting over a time window.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 25,
  "statement": "A technical support director wants to deploy a generative AI chatbot to help customers troubleshoot product issues. They are concerned the AI will give generic or incorrect answers without access to the company's internal product manuals, troubleshooting guides, and known issue databases. Which Data 360 feature ensures the AI uses this internal content to generate accurate, context-specific responses?",
  "options": [
   {
    "key": "a",
    "text": "Retrieval Augmented Generation (RAG) to inject relevant internal documents into the AI prompt"
   },
   {
    "key": "b",
    "text": "Vector embedding compression to reduce the size of internal knowledge bases"
   },
   {
    "key": "c",
    "text": "Automated conversion of all internal documents to Salesforce Knowledge articles"
   },
   {
    "key": "d",
    "text": "Generative fine-tuning of the base model on internal support transcripts"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Retrieval Augmented Generation (RAG) grounds AI prompts with relevant internal data from Data 360. RAG retrieves contextually relevant information from product manuals, troubleshooting guides, and known issue databases, then augments the prompt to the LLM. This ensures the AI generates accurate, contextually relevant responses based on internal data. **Why the other options are incorrect:** B: Vector embedding compression is an optimization technique but does not itself retrieve or ground AI responses; it only reduces storage/compute. C: Converting documents to Knowledge articles is helpful but does not automatically enable RAG-based contextual retrieval; you still need a retrieval mechanism. D: Fine-tuning on transcripts can improve domain adaptation but does not retrieve current internal documentation for each query; it is static after training.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 26,
  "statement": "A financial services firm wants its external analytics team working in Google BigQuery to query unified customer profiles stored in Data 360. The solution must provide read-only access with minimal latency and no data duplication. Which capability should the consultant use to expose Data 360 objects to BigQuery?",
  "options": [
   {
    "key": "a",
    "text": "Data 360 Data Shares with zero-copy sharing"
   },
   {
    "key": "b",
    "text": "Scheduled batch exports from Data 360 to Cloud Storage"
   },
   {
    "key": "c",
    "text": "REST API endpoints with paginated customer data"
   },
   {
    "key": "d",
    "text": "Custom ODBC connector configured for cross-platform queries"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360 Data Shares (zero-copy data sharing) allow Data 360 objects to be securely shared with external platforms like Google BigQuery. This provides direct, read-only access without data movement, ETL pipelines, or data duplication, enabling low-latency analytics on unified customer data. **Why the other options are incorrect:** B: Scheduled batch exports introduce latency (minutes to hours) and create data duplication, violating the no‑duplication and minimal latency requirements. C: REST API endpoints are not designed for bulk analytics queries and may have rate limits and pagination overhead, making them unsuitable for large‑scale analytics. D: Custom ODBC connectors would require complex setup and ongoing maintenance; Data Shares provide a native, zero‑copy solution.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 27,
  "statement": "A sales operations manager wants account executives to see a timeline of a lead's recent webinar attendance and whitepaper downloads directly on the Lead record page in Salesforce. These activities are stored as \"Interaction_DMO\" records in Data 360. What is the most efficient way to display this timeline without custom development?",
  "options": [
   {
    "key": "a",
    "text": "Drag the Data 360 External Related List component onto the Lead Lightning page and configure it for Interaction_DMO"
   },
   {
    "key": "b",
    "text": "Build a Flow to sync Interaction_DMO records to a custom object and add a standard related list"
   },
   {
    "key": "c",
    "text": "Create a report chart filtered by Lead ID and embed it on the record page"
   },
   {
    "key": "d",
    "text": "Use Apex to query Data 360 APIs and render results in a custom Visualforce component"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360 External Related List (Related List Enrichment) is a native Lightning component that displays related external records from Data 360 DMOs directly on a Salesforce record page. The consultant can drag this component onto the Lead Lightning page and configure it to show Interaction_DMO records, requiring no custom code or data synchronization. **Why the other options are incorrect:** B: Syncing to a custom object creates data duplication, introduces latency, and requires ongoing maintenance, violating the “most efficient” requirement. C: Embedded report charts can query Data 360 but may have performance limitations and require report creation for each use case, and are not a native related list. D: Apex with custom Visualforce adds significant development effort and maintenance overhead when a native component exists.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 28,
  "statement": "A consultant has configured identity resolution rules to merge customer records from three source systems. Before deploying to production, they need to confirm that the rules are correctly merging expected records. Which two tools should the consultant use to validate the unified profile results?",
  "options": [
   {
    "key": "a",
    "text": "Profile Viewer and SQL Query Interface"
   },
   {
    "key": "b",
    "text": "Data Stream Dashboard and Activation Logs"
   },
   {
    "key": "c",
    "text": "Segment Builder and Calculated Insight Tester"
   },
   {
    "key": "d",
    "text": "Match Rule Simulator and Reconciliation Preview"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Profile Viewer (Profile Explorer) allows consultants to search for and inspect unified profiles, showing which source records were merged and what attribute values were reconciled. SQL Query Interface (Query Editor/Data Explorer) enables running queries against DMOs to programmatically verify that identity resolution results are correctly stored and accessible. Together, they provide both visual and programmatic validation. **Why the other options are incorrect:** B: Data Stream Dashboard shows ingestion health, not identity resolution results. Activation Logs show audience delivery status, not unification details. C: Segment Builder builds audiences, not validation of unification. Calculated Insight Tester tests derived metrics, not identity resolution. D: Match Rule Simulator tests rules in isolation but does not validate actual processed data results; Reconciliation Preview is not a standard tool for this purpose.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 29,
  "statement": "A data analyst creates a new workspace in Data Explorer but selects the \"Marketing\" data space because they were uncertain which data space to choose. When attempting to write a query, the \"Customer_Transaction_DMO\" is not available. The analyst knows this DMO exists in the \"Sales\" data space. What should the analyst do?",
  "options": [
   {
    "key": "a",
    "text": "Add the Sales data space to the existing Marketing workspace"
   },
   {
    "key": "b",
    "text": "Create a new workspace and select the Sales data space"
   },
   {
    "key": "c",
    "text": "Move the Customer_Transaction_DMO to the Marketing data space"
   },
   {
    "key": "d",
    "text": "Reference the DMO with a fully qualified name including the Sales data space prefix"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A workspace in Data 360 is permanently tied to a single data space at creation time and cannot be changed. If the required DMO is in the Sales data space, the analyst must create a new workspace and select the Sales data space as the binding. The DMO will then be available for queries. **Why the other options are incorrect:** A: Data spaces cannot be added to an existing workspace after creation; the binding is immutable. C: DMOs cannot be moved between data spaces through workspace configuration; data spaces are defined in metadata and moving would require re‑ingesting. D: Cross-data-space references are not supported in queries; the DMO must be in the selected data space of the workspace.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 30,
  "statement": "A telecommunications company has a custom Salesforce object called \"Alternate_Email__c\" that stores secondary email addresses for contacts. The marketing team needs to use these email addresses for activation campaigns. To which Data 360 DMO should the consultant map this custom object?",
  "options": [
   {
    "key": "a",
    "text": "Contact Point Email DMO"
   },
   {
    "key": "b",
    "text": "Individual DMO"
   },
   {
    "key": "c",
    "text": "Contact DMO"
   },
   {
    "key": "d",
    "text": "Alternate_Email__c DMO"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Data 360's standard data model, email addresses should be mapped to the Contact Point Email DMO. This harmonizes email data from various sources (standard Contact email, custom Alternate_Email__c, etc.) into a common structure, enabling consistent segmentation, activation, and identity resolution based on email addresses. **Why the other options are incorrect:** B: Individual DMO represents a person's identity attributes but does not directly store email addresses; email is stored in Contact Point Email. C: Contact DMO stores contact attributes but email addresses belong in Contact Point Email for proper contact point management and standard activation. D: Keeping it as a custom DMO would not harmonize the data with standard email attributes, limiting functionality and requiring custom logic for activation.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 31,
  "statement": "A financial institution is preparing to build a loan approval prediction model using Einstein Studio with customer data from Data 360. Which essential step helps ensure the model produces fair and unbiased outcomes across different demographic groups?",
  "options": [
   {
    "key": "a",
    "text": "Reviewing the training dataset to identify and address demographic segments that are underrepresented"
   },
   {
    "key": "b",
    "text": "Disabling all calculated insights to prevent model overfitting"
   },
   {
    "key": "c",
    "text": "Ensuring the training dataset contains at least 50 million transaction records"
   },
   {
    "key": "d",
    "text": "Using only structured numeric data and excluding text fields from the training set"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Auditing training data for underrepresented segments is essential to prevent algorithmic bias. If certain demographic or behavioral segments are underrepresented, the model may perform poorly or unfairly on those groups. Identifying and addressing these gaps through data augmentation or reweighting is a key ethical AI practice. **Why the other options are incorrect:** B: Disabling calculated insights does not relate to bias prevention; calculated insights are derived metrics, not a source of bias. C: Dataset size does not guarantee ethical outcomes; a large dataset can still be biased. Quality and representativeness matter more than quantity. D: Excluding text fields does not prevent bias; bias can exist in numeric fields as well (e.g., zip code proxies for race).",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 32,
  "statement": "A consultant configures identity resolution match rules for a customer database where many records have missing email addresses. The consultant wants to ensure that a missing email address in one record does not prevent it from matching with another record that has a valid email. Which setting should the consultant enable?",
  "options": [
   {
    "key": "a",
    "text": "Skip empty field evaluation in match conditions"
   },
   {
    "key": "b",
    "text": "Exclude null records from identity processing"
   },
   {
    "key": "c",
    "text": "Default empty values to a placeholder string"
   },
   {
    "key": "d",
    "text": "Require all match fields to be populated before processing"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The \"Ignore Empty Value\" option (skip empty field evaluation) determines whether empty (null or blank) fields are considered when evaluating a match condition. When enabled, empty values are ignored, meaning the rule does not require a match on that field if it is empty in either record. This prevents false mismatches due to missing data. **Why the other options are incorrect:** B: Excluding null records would lose valuable data; the goal is to include records while handling missing values intelligently, not discard them. C: Defaulting to placeholders would create false matches (e.g., all missing emails become \"UNKNOWN\"), leading to incorrect merges. D: Requiring all fields to be populated would exclude many valid records that have incomplete data, reducing match coverage.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 33,
  "statement": "A data architect configures query federation to access a large dataset stored in Amazon Redshift. When a SQL query is executed from Data 360 against this federated source, where does the actual query execution occur?",
  "options": [
   {
    "key": "a",
    "text": "The query is pushed down to Redshift's compute layer, and only results are returned to Data 360"
   },
   {
    "key": "b",
    "text": "Data 360 downloads the entire Redshift table to its local storage before executing the query"
   },
   {
    "key": "c",
    "text": "The query executes in Data 360's internal compute engine after converting Redshift data to Parquet"
   },
   {
    "key": "d",
    "text": "Redshift exports the data to CSV, which Data 360 then queries locally"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Query federation pushes SQL queries down to the external system's compute layer (pushdown optimization). The external system (Redshift) executes the query using its own compute resources, and only the result set is returned to Data 360. This minimizes data movement and leverages the external system's processing power. **Why the other options are incorrect:** B: Data 360 does not download entire tables; this would defeat the purpose of federation and cause data duplication and high network costs. C: Data 360 does not execute federated queries with its own engine; it delegates execution to the external system for pushdown. D: CSV export would be inefficient and is not how federation works; queries execute natively in the source system without intermediate exports.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 34,
  "statement": "A consultant needs to configure zero-copy query federation to read customer data from an external Amazon Redshift database. After gathering the Redshift hostname, database name, and service account credentials, what is the first action the consultant must take in Data 360?",
  "options": [
   {
    "key": "a",
    "text": "Register the Redshift instance as a federated source by creating a connection with the provided credentials"
   },
   {
    "key": "b",
    "text": "Create a data stream using the Bulk API with Redshift as the source type"
   },
   {
    "key": "c",
    "text": "Map the external Redshift tables directly to the Unified Individual DMO"
   },
   {
    "key": "d",
    "text": "Run a test query to validate that Redshift is accessible from Data 360"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The first step in setting up zero-copy data federation is to establish a connection in Data 360 Setup using the provider's (Redshift) credentials. This defines the connection parameters (hostname, database, authentication). Only after the connection is established can the consultant configure data streams or run federated queries. **Why the other options are incorrect:** B: Bulk API is for traditional data ingestion, not for zero-copy federation setup; federation uses a different configuration path. C: Mapping external tables to DMOs comes after the connection and data stream are created; you cannot map before connection exists. D: A test query cannot run before the connection is established; the connection is the prerequisite for any federated operation.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 35,
  "statement": "A retail company receives daily inventory files in a Google Cloud Storage bucket. A calculated insight computes \"Low Stock Alert\" based on unified product data, and a segment uses this insight for out-of-stock notifications. To ensure the most recent inventory data is reflected in the segment, what is the correct execution order?",
  "options": [
   {
    "key": "a",
    "text": "Ingest inventory files → Run product identity resolution → Refresh low stock calculated insight"
   },
   {
    "key": "b",
    "text": "Refresh low stock calculated insight → Ingest inventory files → Run product identity resolution"
   },
   {
    "key": "c",
    "text": "Run product identity resolution → Refresh low stock calculated insight → Ingest inventory files"
   },
   {
    "key": "d",
    "text": "Ingest inventory files → Refresh low stock calculated insight → Run product identity resolution"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct sequence is: (1) Ingest inventory files (Refresh Data Stream) to bring new data into Data 360; (2) Run product identity resolution to match and unify product records across sources; (3) Refresh the calculated insight (Low Stock Alert) to recompute aggregates based on the updated unified data. This ensures segments using the insight reflect the latest inventory. **Why the other options are incorrect:** B: The calculated insight cannot refresh before data is ingested; it would compute stale results. C: Identity resolution cannot run before data is ingested; no new data to resolve. D: The calculated insight should run after identity resolution, not before, to ensure the unified view is used for aggregation.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 36,
  "statement": "A Data 360 Consultant is explaining sandbox behavior to a stakeholder. The stakeholder asks what happens to Data 360 configurations and data when a sandbox is refreshed from production. What is copied during a standard sandbox refresh?",
  "options": [
   {
    "key": "a",
    "text": "DMO definitions, data stream mappings, identity resolution rulesets, and calculated insight configurations"
   },
   {
    "key": "b",
    "text": "Complete copies of all production data lake objects and data model objects"
   },
   {
    "key": "c",
    "text": "A sample of 5,000 random customer records from each production DMO"
   },
   {
    "key": "d",
    "text": "Real-time query access to production data without any local storage"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a sandbox is refreshed, only metadata is copied from production, including DMO definitions, data stream configurations, identity resolution rulesets, calculated insights, segment definitions, and activation configurations. Source data (the actual customer records) is not copied; the sandbox does not contain production data. **Why the other options are incorrect:** B: Production data is not copied to sandboxes for security, privacy, and storage reasons. C: Data sampling is not a standard feature of sandbox refreshes; sandboxes are metadata-only unless explicitly configured otherwise. D: Sandboxes do not have real-time query access to production data lakes; they operate as isolated environments without production data.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 37,
  "statement": "A segment built on the \"Customer_DMO\" identifies high-value shoppers. The marketing team needs to include \"Membership_Tier\" from a separate \"Loyalty_DMO\" in the activation payload to personalize messaging, but the segment filters did not use this DMO. How can the consultant include this field without modifying the segment definition?",
  "options": [
   {
    "key": "a",
    "text": "During activation setup, add the Loyalty_DMO and select Membership_Tier as an additional field using Activation Membership"
   },
   {
    "key": "b",
    "text": "Create a calculated insight that joins Membership_Tier to Customer_DMO and rebuild the segment"
   },
   {
    "key": "c",
    "text": "Modify the data stream mapping to add Membership_Tier as a field on Customer_DMO"
   },
   {
    "key": "d",
    "text": "Add a contact point priority rule that copies Membership_Tier to the activation output"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "During activation setup, the consultant can use Activation Membership to include fields from related DMOs that were not used in the segment filters. By selecting the Loyalty_DMO and its Membership_Tier attribute, the exported payload will include those fields for each segment member without modifying the underlying segment definition. **Why the other options are incorrect:** B: Adding a calculated insight and rebuilding the segment adds unnecessary complexity and maintenance overhead, and changes the segment definition. C: Data stream mappings define ingestion, not activation output; modifying them would affect all downstream uses and is not scoped to this activation. D: Contact point priority rules are for identity resolution, not for including fields in activation payloads.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 38,
  "statement": "A Data 360 Consultant is building a model in Einstein Studio to predict the \"Estimated Repair Cost\" for warranty claims, which is a dollar amount (e.g., $47.50, $312.00, $1,250.00). Based on the target variable's data type, which model type is appropriate?",
  "options": [
   {
    "key": "a",
    "text": "Regression, because the target is a continuous numeric value"
   },
   {
    "key": "b",
    "text": "Binary Classification, because the outcome can be categorized as \"high cost\" vs \"low cost\""
   },
   {
    "key": "c",
    "text": "Multiclass Classification, because dollar amounts can be bucketed into ranges"
   },
   {
    "key": "d",
    "text": "Clustering, because repair costs naturally form groups"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Estimated Repair Cost is a continuous numeric value (dollar amount). Regression models are designed to predict continuous numerical outcomes, making them the correct choice. Classification models predict discrete categories and would lose precision. **Why the other options are incorrect:** B: Binary classification reduces a continuous measure to two arbitrary categories, losing precision and requiring subjective threshold definition. C: Bucketing into ranges changes the problem from regression to classification, but regression is more appropriate when the exact numeric value is valuable for cost estimation. D: Clustering is unsupervised and does not predict a specific numeric value for each individual; it groups similar instances without a target variable.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 39,
  "statement": "A subscription box service wants to send a personalized follow-up survey for every product shipment. If a customer receives three separate shipments, the audience should contain three distinct entries for that customer. Shipments are stored in the \"Shipment_Order_DMO,\" and identity resolution unifies customers on \"Unified_Customer_DMO.\" Which configuration produces one audience entry per shipment?",
  "options": [
   {
    "key": "a",
    "text": "Build the segment directly on the Shipment_Order_DMO"
   },
   {
    "key": "b",
    "text": "Build the segment on the Unified_Customer_DMO with a calculated insight"
   },
   {
    "key": "c",
    "text": "Build the segment on the Individual DMO with a filter on shipment count"
   },
   {
    "key": "d",
    "text": "Build the segment on a calculated insight that aggregates shipments by customer"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To create one audience entry per shipment, the segment must be built on the Shipment_Order_DMO (the transaction object). Each Shipment_Order record becomes a distinct member in the segment. If segmented on Unified_Customer_DMO, each customer would appear only once regardless of shipment count. **Why the other options are incorrect:** B: Segmenting on Unified_Customer_DMO groups all shipments under one profile, producing one entry per customer, not per shipment. C: Individual DMO similarly groups shipments; it would not produce per-shipment entries. D: A calculated insight aggregates data; it would collapse multiple shipments into one aggregated value, not produce per-shipment entries.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 40,
  "statement": "A Data 360 Consultant reviews identity resolution metrics after a daily batch run. The source system contains 500,000 customer records, but only 12,000 profiles were processed. All runs completed successfully with no errors. What is the most likely reason for the low processed count?",
  "options": [
   {
    "key": "a",
    "text": "Only profiles with detected data changes since the last run were submitted for processing"
   },
   {
    "key": "b",
    "text": "The identity resolution match confidence threshold was set too high, excluding most profiles"
   },
   {
    "key": "c",
    "text": "The data stream frequency is configured to run at minimum frequency, limiting profile volume"
   },
   {
    "key": "d",
    "text": "A data quality filter excluded profiles with incomplete address fields"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Identity Resolution uses incremental processing: only source profiles that have changed since the last processing run are submitted for unification. Unchanged profiles are skipped to optimize compute resources. After the initial full run, subsequent batches typically process only a small percentage of changed records, explaining why 12,000 out of 500,000 were processed. **Why the other options are incorrect:** B: Match confidence thresholds determine if profiles are merged, not whether they are processed at all. All profiles are processed regardless of confidence. C: Data stream frequency affects ingestion timing but not which profiles are sent to identity resolution; all ingested profiles are candidates. D: Data quality filters might exclude some records but would not explain a drop from 500,000 to 12,000 consistently, and the run completed successfully with no errors.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 41,
  "statement": "A logistics company detects package damage events from IoT sensors on delivery trucks. When a damage event occurs, an immediate warehouse inspection workflow must be triggered in Salesforce CRM with minimal delay. Which Data 360 capability should the architect use?",
  "options": [
   {
    "key": "a",
    "text": "A calculated insight refreshed every 30 seconds that evaluates damage event patterns"
   },
   {
    "key": "b",
    "text": "A manual activation triggered by a warehouse supervisor who monitors the event stream"
   },
   {
    "key": "c",
    "text": "A real-time data action configured to fire an event-triggered Salesforce Flow upon event ingestion"
   },
   {
    "key": "d",
    "text": "A scheduled batch transform running every 60 seconds to check for new damage events"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Real-time data actions via automation event-triggered Flow provide the lowest latency for triggering a workflow in Salesforce CRM immediately upon event ingestion. The streaming event (package damage detection) triggers an automation directly, enabling sub-second reaction times for critical warehouse inspection workflows. **Why the other options are incorrect:** A: A calculated insight refreshed every 30 seconds still introduces latency (up to 30 seconds) and is not designed for sub-second event triggering. B: Manual activation requires human intervention, which is neither immediate nor automated, and introduces delays. D: A scheduled batch transform running every 60 seconds introduces up to 60 seconds of latency, failing the \"immediate\" requirement.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 42,
  "statement": "A consultant creates a calculated insight called \"Customer_Profitability_Score\" that appears as an option when building segments on the \"Individual\" DMO. However, the same insight does not appear when segmenting on the \"Unified_Individual\" DMO. What is the most likely cause?",
  "options": [
   {
    "key": "a",
    "text": "The consultant lacks \"View\" permissions on the Unified_Individual DMO"
   },
   {
    "key": "b",
    "text": "The calculated insight lacks a direct relationship path to the Unified_Individual DMO"
   },
   {
    "key": "c",
    "text": "The data space containing the calculated insight is different from the Unified_Individual data space"
   },
   {
    "key": "d",
    "text": "Calculated insights cannot be used for segmentation on unified profiles"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For a calculated insight to be available when segmenting on Unified_Individual, the calculated insight must have a defined relationship path to the Unified_Individual DMO. If it only relates to Individual DMO (the source profile), it will appear only when segmenting on Individual, not Unified_Individual. **Why the other options are incorrect:** A: Permission issues would block access entirely, not make the insight appear for one DMO but not another. C: Data spaces do not affect visibility of calculated insights in segmentation in this manner; the issue is missing relationship. D: Calculated insights can be used for segmentation on unified profiles; the consultant must ensure the relationship is correctly configured.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 43,
  "statement": "During a data mapping exercise for an insurance client, a consultant finds that the standard \"Policy_DMO\" lacks fields for \"Underwriting_Notes\" and \"Risk_Assessment_Score\" — both critical for the claims team. Following best practices, what should the consultant do?",
  "options": [
   {
    "key": "a",
    "text": "Create two new custom DMOs, one for each missing field, and relate them to Policy_DMO"
   },
   {
    "key": "b",
    "text": "Ignore these fields since they are not part of the standard data model"
   },
   {
    "key": "c",
    "text": "Store these fields in a separate JSON blob within an existing DMO field"
   },
   {
    "key": "d",
    "text": "Add custom fields to the standard Policy_DMO to store Underwriting_Notes and Risk_Assessment_Score"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Best practice is to extend the relevant standard DMO (Policy_DMO) by adding custom fields to accommodate business-specific attributes. This preserves relationship context, maintains standard functionality (calculated insights, segments, activations), and avoids fragmenting the data model. **Why the other options are incorrect:** A: Creating separate custom DMOs per field fragments the data model, complicates queries, and loses relationship context. B: Ignoring critical business fields fails to meet the client's requirements and defeats the purpose of the implementation. C: Storing fields in a JSON blob within an existing field makes the data difficult to query and index, and is not a best practice.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 44,
  "statement": "A telecommunications provider ingests customer account data from a legacy system. Each record contains both \"Home_Phone_Plan_Data\" and \"Mobile_Phone_Plan_Data\" in separate fields within the same record. The billing team needs to process each phone plan as an independent record. What should the consultant recommend?",
  "options": [
   {
    "key": "a",
    "text": "Ask the source system owner to modify the legacy system to split the records before export"
   },
   {
    "key": "b",
    "text": "Clone the source data object and manually delete irrelevant fields from each clone"
   },
   {
    "key": "c",
    "text": "Configure a batch transform that reads each source record and writes two separate output records"
   },
   {
    "key": "d",
    "text": "Create two separate data streams, one for home phone data and one for mobile phone data"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A batch transform can take a single input record (with both home and mobile phone plan data) and output two separate records (one for each plan type) into a target DLO. This splits the data without modifying the source system, enabling independent tracking and processing. **Why the other options are incorrect:** A: Modifying the source system adds unnecessary complexity and may be outside the project scope; Data 360 can handle the split natively. B: Manual cloning and deletion is inefficient, error-prone, and not scalable for large datasets. D: Creating separate data streams does not solve the problem; the source data still arrives as single records containing both plan types, so each stream would still get the combined record.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 45,
  "statement": "A manufacturing company wants to track \"Average Production Downtime\" across factories, using data from ERP, IoT sensors, and Service Cloud. Different teams need to view this metric by factory location, machine type, and shift. The solution must provide near-real-time updates. Which Data 360 feature meets this requirement?",
  "options": [
   {
    "key": "a",
    "text": "A Salesforce report that queries Service Cloud data only"
   },
   {
    "key": "b",
    "text": "A formula field on the IoT sensor DMO that computes per-record downtime"
   },
   {
    "key": "c",
    "text": "A static dashboard exported from the ERP system monthly"
   },
   {
    "key": "d",
    "text": "A calculated insight that aggregates downtime events and can be refreshed on a schedule"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A calculated insight can aggregate data from multiple sources (ERP, IoT sensors, Service Cloud) to compute Average Production Downtime. It can be refreshed near-real-time (on a configurable schedule) and supports multi-dimensional grouping, allowing teams to view the metric by factory location, machine type, or shift. **Why the other options are incorrect:** A: A Salesforce report limited to Service Cloud data would miss ERP and IoT sensor data, providing an incomplete picture. B: Formula fields perform row-level calculations, not aggregations like averages across many records from multiple sources. C: A monthly static dashboard does not provide near-real-time updates and would be stale, failing the requirement.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 46,
  "statement": "A media streaming company has deployed a \"Churn Risk\" prediction model using Einstein Studio. The retention team wants to automatically add high-risk customers to a priority outreach segment within minutes of the model scoring. How should predictions be applied to this business process?",
  "options": [
   {
    "key": "a",
    "text": "Use Identity Resolution to merge predictions into existing customer profiles without automation"
   },
   {
    "key": "b",
    "text": "Export prediction scores to CSV and have the retention team import them weekly"
   },
   {
    "key": "c",
    "text": "Schedule a predict job that writes risk scores to Data 360 DMOs, then use Flow Builder to add high-risk customers to the segment"
   },
   {
    "key": "d",
    "text": "Embed the Einstein Studio model URL in a Service Cloud Lightning page for manual review"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The standard method is to use Einstein Studio's predict jobs (scheduled or on-demand) to write prediction scores to Data 360 DMOs, then use Flow Builder (or segment logic referencing the scores) to automatically add high-risk customers to the priority outreach segment. This integrates predictions directly into automated business processes. **Why the other options are incorrect:** A: Identity Resolution merges profiles but does not apply predictions or trigger automated segmentation; it is a separate process. B: Manual CSV export/import is not scalable, introduces latency, and requires manual intervention each cycle, violating the “within minutes” requirement. D: Embedding a URL provides UI access but does not automatically apply predictions to business processes; it requires human action.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 47,
  "statement": "A direct-to-consumer brand collects customer information from its website, mobile app, call center, and physical retail stores. Each channel stores data differently, leading to fragmented customer views and inconsistent messaging. What is Data 360's primary purpose in addressing this challenge?",
  "options": [
   {
    "key": "a",
    "text": "To generate automated email marketing campaigns based on browsing behavior"
   },
   {
    "key": "b",
    "text": "To replace all existing source systems with a single unified database"
   },
   {
    "key": "c",
    "text": "To unify and harmonize data from all channels into a single, complete customer profile"
   },
   {
    "key": "d",
    "text": "To archive historical customer data for long-term storage cost reduction"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data 360's primary purpose is to unify and harmonize data from multiple disparate sources (website, mobile app, call center, retail stores) into a single, complete customer profile. This unified view enables consistent personalization, analytics, segmentation, and activation across all customer touchpoints. **Why the other options are incorrect:** A: Email campaign automation is an application built on top of unified data, not the core purpose of Data 360. B: Data 360 does not replace source systems; it ingests and unifies data from them while they continue to operate. D: Data archiving for cost reduction is a potential benefit but not the primary purpose of Data 360.",
  "module": "dc-overview"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 48,
  "statement": "A global financial institution has three divisions: Retail Banking, Wealth Management, and Commercial Lending. All divisions must use the same Data 360 home org but keep their customer data, DMOs, and segments fully separated for regulatory compliance. Which mechanism provides this logical isolation?",
  "options": [
   {
    "key": "a",
    "text": "Assign different permission sets to users from each division within a single data space"
   },
   {
    "key": "b",
    "text": "Create a separate data space for each division within the same home org"
   },
   {
    "key": "c",
    "text": "Use record-type filtering on all DMOs to restrict access based on division"
   },
   {
    "key": "d",
    "text": "Build separate companion connections for each division pointing to different source systems"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data spaces in Data 360 provide logical separation of data and metadata within a single home org. Each division (Retail Banking, Wealth Management, Commercial Lending) can have its own data space, ensuring that data, DMOs, calculated insights, and segments are isolated from others, meeting regulatory compliance requirements. **Why the other options are incorrect:** A: Permission sets control user access but do not separate data or metadata; cross-division data could still be visible at the object level. C: Record-type filtering does not separate metadata (DMOs, insights, etc.); data would still be co-mingled at the schema level. D: Companion connections connect to external systems, not isolate data within Data 360; they do not provide logical separation inside Data 360.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 49,
  "statement": "A healthcare organization is ingesting patient vitals data from wearable devices. Compliance requires that the exact raw data as received from the device be preserved for audit purposes before any cleaning or transformation. Which Data 360 object type stores this raw, unmodified source data?",
  "options": [
   {
    "key": "a",
    "text": "Data Model Object (DMO)"
   },
   {
    "key": "b",
    "text": "Reference Data Object (RDO)"
   },
   {
    "key": "c",
    "text": "Calculated Insight Object"
   },
   {
    "key": "d",
    "text": "Data Lake Object (DLO)"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Data Lake Object (DLO) stores raw, unmodified source data exactly as ingested, preserving the original structure and values. DLOs serve as the immutable historical record before any mapping, transformation, or harmonization into Data Model Objects (DMOs), making them ideal for compliance audit trails. **Why the other options are incorrect:** A: Data Model Objects (DMOs) store harmonized, transformed, and enriched data, not raw source data. B: Reference Data Object is not a standard Data 360 object type for storing raw source data. C: Calculated Insight Objects store aggregated results and derived metrics, not raw source data.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 50,
  "statement": "A marketing analyst creates a Salesforce report based on a calculated insight that shows \"Daily Active Users.\" The analyst notices that the report does not reflect user activity from the last hour. What is the critical limitation the consultant should have communicated?",
  "options": [
   {
    "key": "a",
    "text": "Calculated insights cannot be included in Salesforce reports; they are only available in Tableau"
   },
   {
    "key": "b",
    "text": "The Daily Active Users insight must be manually refreshed by an administrator each hour"
   },
   {
    "key": "c",
    "text": "The calculated insight data reflects the state at the time of the most recent batch refresh, not real-time activity"
   },
   {
    "key": "d",
    "text": "Calculated insights have a maximum of 5,000 rows, and the report exceeded this limit"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Calculated insights are batch-processed; they are refreshed on a defined schedule (e.g., hourly, daily). When reporting on a calculated insight, the data reflects the state at the time of the most recent batch processing run, not real-time data. This is a critical limitation for use cases requiring up-to-the-second freshness. **Why the other options are incorrect:** A: Calculated insights can be included in Salesforce reports; this statement is false. B: Calculated insight refresh can be scheduled (e.g., every hour); manual refresh is not required. D: There is no fixed row limit of 5,000 for calculated insights in reports; the issue is batch latency, not row limits.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 51,
  "statement": "A retail bank has developed a custom credit risk scoring model using Databricks. The bank wants to score customer profiles in Data 360 and use the scores for a priority segment, without exporting or duplicating customer data. Which feature should the consultant use?",
  "options": [
   {
    "key": "a",
    "text": "Einstein Studio Bring Your Own Model (BYOM)"
   },
   {
    "key": "b",
    "text": "Streaming Data Transforms with HTTP Callout"
   },
   {
    "key": "c",
    "text": "Data Kit with Embedded Model Logic"
   },
   {
    "key": "d",
    "text": "Ingestion API for model results"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Einstein Studio Bring Your Own Model (BYOM) allows a custom model trained externally (e.g., Databricks) to be registered and used within Data 360. The model can score Unified Profiles directly without moving or duplicating data, as the scoring process runs within Data 360's environment. **Why the other options are incorrect:** B: Streaming Data Transforms process event streams but do not invoke external ML models for batch scoring of profiles. C: Data kits package configurations for deployment across orgs, not for executing external ML models. D: Ingestion API brings data into Data 360, not for applying predictions to existing profiles.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 52,
  "statement": "A healthcare network stores patient records in an EHR system, a lab results platform, and a billing system. Each system uses a different internal patient ID. However, all three systems consistently capture the same \"State Health ID\" for every patient. Which identity resolution feature should link these records using this common external identifier?",
  "options": [
   {
    "key": "a",
    "text": "Exact Name and Date of Birth match rule"
   },
   {
    "key": "b",
    "text": "Party Identification match rule configured on State Health ID"
   },
   {
    "key": "c",
    "text": "Internal System ID match rule"
   },
   {
    "key": "d",
    "text": "Fuzzy Address match rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Party Identification is a standard DMO for storing external identifiers (State Health ID). By mapping the State Health ID from each source system to the Party Identification object with a consistent Identification Name, Identity Resolution can use a match rule on Party Identification to link records across systems, ignoring their different internal IDs. **Why the other options are incorrect:** A: Name and date of birth may have inconsistencies (nicknames, data entry errors) and does not leverage the reliable State Health ID. C: Internal System ID match rule would not find matches because each system uses a different internal ID. D: Fuzzy address matching is unreliable for precise patient identification and does not use the available State Health ID.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 53,
  "statement": "A marketing team is new to Data 360 and struggles to remember exact values for fields like \"Product_Category\" (e.g., \"Kitchen Appliances,\" \"Outdoor Gear\") when building segments. This causes delays as users constantly ask the data team for valid values. Which configuration helps users see available values directly in the segment builder?",
  "options": [
   {
    "key": "a",
    "text": "Enable Value Suggestion on the Product_Category text field"
   },
   {
    "key": "b",
    "text": "Create a calculated insight that lists all unique category values"
   },
   {
    "key": "c",
    "text": "Publish a data kit with a lookup table of category values"
   },
   {
    "key": "d",
    "text": "Export a CSV of valid values and distribute it to the team weekly"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Enabling Value Suggestion on text fields of DMOs allows users to see a picklist of actual data values when building segments. This reduces errors and speeds up segment creation by helping users select from existing values rather than typing free text. **Why the other options are incorrect:** B: A calculated insight listing values does not integrate into the segment builder interface for inline selection; users would have to switch contexts. C: A data kit packages configuration but does not provide dynamic value suggestions within the segment canvas. D: A weekly CSV export is manual, quickly becomes stale, and does not provide an interactive picklist.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 54,
  "statement": "A developer deploys an outbound change set containing a data kit from a sandbox to production. The deployment status shows \"Succeeded,\" but the data stream configurations and calculated insights are not visible or functional in the production Data 360 interface. What is the next required action?",
  "options": [
   {
    "key": "a",
    "text": "Re-upload the change set from the source org with the \"Full Deployment\" option"
   },
   {
    "key": "b",
    "text": "Install the data kit from the Data 360 Setup menu to activate its components"
   },
   {
    "key": "c",
    "text": "Run a metadata refresh on all production data streams"
   },
   {
    "key": "d",
    "text": "Validate the kit using Salesforce Package Manager"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "After a data kit is successfully deployed via change set, the next step is to install the data kit from the Data 360 Setup menu. This installation process maps the kit's components (data streams, DMOs, calculated insights) to the target environment and activates them. Deployment alone does not activate the components. **Why the other options are incorrect:** A: Re-uploading is unnecessary; the deployment succeeded, but installation is required for activation. C: A metadata refresh does not activate the kit's components; installation is required. D: Package Manager is for managed AppExchange packages, not for data kit installation and activation.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 55,
  "statement": "A customer submits a Right to Be Forgotten request to a retail company using Data 360. When the request is processed via Consent API, what data within Data 360 is removed?",
  "options": [
   {
    "key": "a",
    "text": "The Individual record and all associated records in any DMO or DLO linked to that Individual"
   },
   {
    "key": "b",
    "text": "The Individual record only, leaving all transaction and engagement history intact"
   },
   {
    "key": "c",
    "text": "Records from source systems only, but not from Data 360 managed storage"
   },
   {
    "key": "d",
    "text": "The Individual record and its Unified Individual Link, but not related transaction records"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a Right to Be Forgotten request is processed via Consent API, Data 360 deletes the specified Individual record and all related records from any Data Model Object (DMO) and Data Lake Object (DLO) that are associated with that Individual. This ensures complete removal of the individual's data from Data 360. **Why the other options are incorrect:** B: Leaving transaction and engagement history intact violates the request for complete data erasure. C: Data 360 does not delete from source systems; it only deletes from its own managed storage (DLOs/DMOs). D: Deleting only the Individual and Unified Individual Link leaves related records intact, violating the request.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 56,
  "statement": "A Data 360 administrator notices that the monthly \"profile consolidation rate\" (unified profiles divided by source profiles) has increased from 0.42 to 0.61 after a recent update. Which change most likely caused this increase?",
  "options": [
   {
    "key": "a",
    "text": "Removing three match rules from the active ruleset"
   },
   {
    "key": "b",
    "text": "Adding a new source system with completely non-overlapping customer data"
   },
   {
    "key": "c",
    "text": "Modifying match rules to lower confidence thresholds, increasing the number of matched profiles"
   },
   {
    "key": "d",
    "text": "Disabling change detection so all profiles reprocess"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consolidation rate measures how many source profiles are linked into unified profiles. Modifying match rules to make criteria less strict (e.g., lowering confidence thresholds or adding fuzzy matching) increases the number of matched profiles, thereby increasing the consolidation rate. **Why the other options are incorrect:** A: Removing match rules would make matching less aggressive, decreasing the consolidation rate. B: Adding a non-overlapping source system adds new profiles that cannot match existing ones, decreasing the consolidation rate. D: Disabling change detection increases processing volume but does not directly increase match rates or consolidation ratio; it would reprocess unchanged profiles but not create new matches unless rules changed.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 57,
  "statement": "A business analyst needs to report on total revenue and unit volume for each product family (e.g., \"Electronics,\" \"Apparel\") across all sales opportunities. Which subject area within the Data 360 data model contains product family attributes and related revenue metrics?",
  "options": [
   {
    "key": "a",
    "text": "Product Catalog"
   },
   {
    "key": "b",
    "text": "Transaction Header"
   },
   {
    "key": "c",
    "text": "Party Relationship"
   },
   {
    "key": "d",
    "text": "Engagement Activity"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Product Catalog subject area (Product DMO) defines product-related attributes including product family, category, pricing, and sales metrics. When joined with transaction data, it enables reporting on revenue and unit volume grouped by product family. **Why the other options are incorrect:** B: Transaction Header contains order-level information but not product family attributes; product details are in the Product Catalog. C: Party Relationship defines relationships between individuals and organizations, not product revenue. D: Engagement Activity captures behavioral events (clicks, views), not product revenue metrics.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 58,
  "statement": "A segment called \"Promotion Eligible\" should exclude any customer whose primary email domain is a competitor's domain (e.g., \"@rival.com\"). These customers should not be included in the segment at all. Where should this domain-based exclusion be applied?",
  "options": [
   {
    "key": "a",
    "text": "During activation configuration for the email channel only"
   },
   {
    "key": "b",
    "text": "At data ingestion, filtering out those email addresses permanently"
   },
   {
    "key": "c",
    "text": "Within the segment definition, using a condition on the email address domain"
   },
   {
    "key": "d",
    "text": "In a calculated insight that flags competitor email domains"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Filtering out specific contact points (email domains) should be applied during segment creation. Segment criteria determine which individuals are included based on their contact point attributes. This ensures individuals with excluded email domains are never part of the segment. **Why the other options are incorrect:** A: Activation filtering would still include individuals in the segment but not activate them to email, wasting segment resources and causing potential confusion. B: Data ingestion filtering is permanent and could remove valid contact points needed for other campaigns or channels; it is too broad. D: A calculated insight flags conditions but does not directly filter segment membership; additional segment logic would still be required, making it indirect.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 59,
  "statement": "A consultant is implementing Right to Be Forgotten compliance for a customer using Consent API. What key detail should the consultant communicate about how deletion requests are structured in Data 360?",
  "options": [
   {
    "key": "a",
    "text": "Deletion requests must specify each DMO individually to be processed"
   },
   {
    "key": "b",
    "text": "Deletion requests are submitted for Individual profiles and apply to data linked to that profile"
   },
   {
    "key": "c",
    "text": "Deletion requests are automatically passed to all connected third-party systems"
   },
   {
    "key": "d",
    "text": "Deletion requests are processed instantly with no latency"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The consultant should inform the customer that Data Deletion requests submitted via Consent API target Individual profiles. The request triggers deletion of the specified Individual record and related data within Data 360 that is linked to that profile. This is the correct scope. **Why the other options are incorrect:** A: The request is profile-centric; individual DMOs do not need to be specified separately. C: Deletion requests are not automatically passed to third-party systems; each external system may require separate handling. D: Processing time varies based on data volume and system load; instant processing is not guaranteed.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 60,
  "statement": "A consultant needs to activate a segment on the Unified Individual object. What is the complete sequence of steps from raw data ingestion to activation?",
  "options": [
   {
    "key": "a",
    "text": "Data → Data Lake Object → Data Model Object → Identity Resolution → Segmentation → Activation"
   },
   {
    "key": "b",
    "text": "Data → Data Lake Object → Segmentation → Identity Resolution → Activation"
   },
   {
    "key": "c",
    "text": "Data → Identity Resolution → Data Model Object → Segmentation → Activation"
   },
   {
    "key": "d",
    "text": "Data → Data Lake Object → Segmentation → Data Model Object → Activation"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The complete sequence is: (1) Ingest raw data into Data Lake Objects (DLOs); (2) Map DLOs to Data Model Objects (DMOs) for harmonization; (3) Run Identity Resolution and Unification to create Unified Individual profiles; (4) Create a segment based on Unified Individual; (5) Activate the segment to a target. All steps are required. **Why the other options are incorrect:** B: Missing DMO mapping and Identity Resolution occurs after DLO but before segmentation, not after. C: Identity Resolution cannot run before data is mapped to DMOs; raw DLO data is not structured for resolution. D: Segmentation cannot occur before Identity Resolution creates Unified Individual profiles.",
  "module": "dc-ingestion"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 61,
  "statement": "A healthcare system wants to improve patient outcomes by identifying at-risk individuals and proactively scheduling follow-up appointments. Which Data 360 use case directly supports this goal?",
  "options": [
   {
    "key": "a",
    "text": "Deploying a Unified Wellness Indicator that combines clinical, behavioral, and engagement data"
   },
   {
    "key": "b",
    "text": "Automating insurance claim processing for faster reimbursements"
   },
   {
    "key": "c",
    "text": "Predicting optimal locations for new urgent care centers based on population data"
   },
   {
    "key": "d",
    "text": "Managing physician shift scheduling through a mobile application"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Healthcare and Life Sciences, Data 360 can unify patient data from multiple sources (EHRs, wearables, patient portals) to create a Unified Wellness Indicator. This holistic view of patient health enables proactive identification of at-risk individuals and timely follow-up appointments, directly improving patient outcomes. **Why the other options are incorrect:** B: Insurance claim processing is an administrative function, not a patient outcome improvement use case. C: Predicting urgent care locations is a real estate and capacity planning exercise, not a patient health outcome improvement. D: Physician shift scheduling is workforce management, not patient experience or outcome improvement.",
  "module": "dc-identity"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 62,
  "statement": "A marketing operations manager needs to receive an immediate email alert whenever a high-priority segment activation fails to deliver to Salesforce Marketing Cloud. Which Data 360 feature should the consultant use to implement this notification?",
  "options": [
   {
    "key": "a",
    "text": "A scheduled Flow that checks activation status and sends email alerts on failure"
   },
   {
    "key": "b",
    "text": "A Dashboard component that highlights failed activations in red"
   },
   {
    "key": "c",
    "text": "A Report subscription that emails a daily summary of activation failures"
   },
   {
    "key": "d",
    "text": "The native Activation Alert setting in the activation configuration"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Flow (Salesforce Flow) can be used to monitor activation status and send notifications (email, custom alert) when an activation fails. The consultant can create a scheduled or event-triggered flow that checks activation logs and sends immediate alerts on failure. **Why the other options are incorrect:** B: Dashboards display metrics but do not proactively send real-time email alerts; they require active viewing. C: Report subscriptions send at scheduled intervals (e.g., daily), not immediately when a failure occurs. D: \"Activation Alert\" is not a standard out-of-the-box native feature for real-time failure notification.",
  "module": "dc-activation"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 63,
  "statement": "A financial analyst needs to build a Tableau dashboard showing \"Gross Margin\" with the ability to drill down by product line, region, and salesperson. The data changes continuously throughout the trading day. Which Data 360 capability provides this real-time, multidimensional query capability?",
  "options": [
   {
    "key": "a",
    "text": "A real-time data graph with a live connection to unified data"
   },
   {
    "key": "b",
    "text": "A calculated insight refreshed every 15 minutes"
   },
   {
    "key": "c",
    "text": "A batch transform that writes aggregated results to a CSV file"
   },
   {
    "key": "d",
    "text": "A static data extract imported into Tableau Desktop daily"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A real-time data graph provides a live connection to Data 360 data, enabling real-time, multidimensional analytics in Tableau. It supports dynamic filtering and immediate updates, making it ideal for derived insights like Gross Margin that require up-to-the-second accuracy. **Why the other options are incorrect:** B: A calculated insight refreshed every 15 minutes introduces up to 15 minutes of latency, failing the real-time requirement. C: A batch transform writing to CSV adds latency and does not provide live query capability. D: A daily static extract is a point-in-time snapshot with no real-time capability.",
  "module": "dc-segment"
 },
 {
  "trilha": "datacloud",
  "simulado": 3,
  "number": 64,
  "statement": "A direct-to-consumer brand uses Salesforce B2C Commerce and wants to bring three years of customer order history into Data 360 for lifetime value modeling. What should the company use to efficiently ingest this data?",
  "options": [
   {
    "key": "a",
    "text": "B2C Commerce Starter Bundles with pre-built data streams and mappings"
   },
   {
    "key": "b",
    "text": "A custom API integration built specifically for order history"
   },
   {
    "key": "c",
    "text": "Standard Sales Order object ingestion with manual field mapping"
   },
   {
    "key": "d",
    "text": "CSV exports from B2C Commerce imported via Data Loader"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce B2C Commerce Starter Bundles provide pre-built data streams and mappings to bring B2C Commerce data (including order history) into Data 360. They are designed to handle the specific data model of B2C Commerce and can import historical data up to the required timeframe. **Why the other options are incorrect:** B: A custom API integration is possible but unnecessarily complex when Starter Bundles provide a standard, supported solution. C: Standard Sales Order ingestion does not leverage B2C Commerce-specific optimizations and relationships available in Starter Bundles. D: CSV exports and Data Loader are manual, error-prone, and not scalable for ongoing ingestion of three years of history.",
  "module": "dc-ingestion"
 }
]);
