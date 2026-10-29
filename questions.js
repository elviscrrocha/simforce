// Auto-gerado por build/parse.py — não editar à mão.
window.QUESTIONS = [
 {
  "simulado": 1,
  "number": 1,
  "statement": "Meridian Telehealth deployed an AI Customer Agent to handle initial patient inquiries. When the agent escalates complex patient cases to live triage nurses, the nurses report that no previous conversation history or context transfers over, forcing patients to repeat their information from the start. Which configuration flaw is the most likely cause of this missing interaction history?",
  "options": [
   {
    "key": "a",
    "text": "Agent instruction guardrails automatically purge conversation logs upon escalation."
   },
   {
    "key": "b",
    "text": "The case page layout assigned to triage nurses is missing the Activity Timeline."
   },
   {
    "key": "c",
    "text": "The handoff process generates a new case record instead of transferring the existing conversation session."
   },
   {
    "key": "d",
    "text": "Triage nurse user profiles are missing the Agentforce Administrator system permission."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When an AI agent escalates an interaction to a human support agent, the active conversation session must be transferred along with the case. If the escalation workflow creates a brand-new case record rather than transferring the live session context, the previous transcript and conversation history are disconnected from the handoff. **Why the other options are incorrect:** A: Missing system admin permissions might prevent users from editing agent setup settings, but it does not cause live conversation context to drop during session transfers. C: The Activity Timeline displays logged tasks, calls, and emails, but live AI conversation transcripts rely on session context handoffs rather than standard activity records. D: Agent instructions guide AI behavior and formatting, but session context persistence during handoff is managed by routing and session transfer settings rather than prompt instructions.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 2,
  "statement": "At Vantage Media, when an opportunity reaches the \"Contract Signed\" stage, the Contract Number field must be mandatory for standard sales users. However, sales directors need the ability to update records in this stage without entering a Contract Number. How should the Platform Administrator configure this conditional requirement?",
  "options": [
   {
    "key": "a",
    "text": "Set the Contract Number field as required on all Page Layouts."
   },
   {
    "key": "b",
    "text": "Build a Validation Rule that enforces field completion while excluding the Sales Director profile."
   },
   {
    "key": "c",
    "text": "Mark Contract Number as universally required on the object field definition."
   },
   {
    "key": "d",
    "text": "Create a Before-Save Screen Flow to mandate field input."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Validation Rules support conditional logic, allowing administrators to require a field based on stage (StageName = 'Contract Signed') while bypassing specific user profiles ($Profile.Name != 'Sales Director'). **Why the other options are incorrect:** A: Universally required fields enforce data entry for all users across all stages without exception, preventing sales directors from bypassing the requirement. C: Page layout requirements apply to everyone using that layout and cannot conditionally exempt users unless separate layouts are maintained, which is harder to manage than a single rule. D: Before-Save Flows handle background data automation, but they do not render interactive UI validation messages during standard page edits like Validation Rules do.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 3,
  "statement": "Sales reps at Starlight Solar are bypassing critical data fields while advancing deals through pipeline stages. Sales management wants to ensure required information is captured at each stage without preventing reps from moving backward to earlier stages if needed. Which three configurations should the Platform Administrator implement to solve this? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Enforce field entry by marking key fields required on the Page Layout."
   },
   {
    "key": "b",
    "text": "Create an Autolaunched Flow that automatically reverts deal stages when fields are empty."
   },
   {
    "key": "c",
    "text": "Configure Opportunity Path to highlight key fields and stage guidance."
   },
   {
    "key": "d",
    "text": "Enable Salesforce CPQ Guided Selling rules across all user profiles."
   },
   {
    "key": "e",
    "text": "Implement Validation Rules that conditionally require specific fields based on current deal stage."
   }
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Page Layout field requirements prevent saving empty critical fields. Opportunity Path highlights stage-specific key fields and actionable guidance at the top of the record. Validation Rules enforce conditional business logic (e.g., requiring field X only when Stage moves to Y) while still allowing reps to edit or regress stages freely. **Why the other options are incorrect:** D: Flow logic that automatically reverts stages creates an frustrating user loop rather than cleanly validating input at save time. E: CPQ Guided Selling is a specialized tool used within CPQ quoting interfaces, not standard opportunity stage management.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 4,
  "statement": "An administrator at Summit Insurance accidentally removed a field from the main Policy page layout while updating layout sections. The administrator needs to restore this field to its original location on the layout. Which two techniques can the administrator use to achieve this? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Drag the field from the fields palette back into the desired layout section."
   },
   {
    "key": "b",
    "text": "Restore the missing field entry from the Organization Recycle Bin within 15 days."
   },
   {
    "key": "c",
    "text": "Re-enable Field-Level Security for the target user profile in Object Manager."
   },
   {
    "key": "d",
    "text": "Deploy or copy the un-modified original page layout file from a sandbox environment."
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Removing a field from a page layout does not delete the field from Salesforce. The administrator can simply drag the field back from the top palette into the page layout section, or redeploy/recopy the original layout from a sandbox environment where it remains intact. **Why the other options are incorrect:** B: The Recycle Bin stores deleted records and soft-deleted fields, not layout component adjustments. D: Field-Level Security controls object field permissions, but modifying it does not add a field back to a page layout canvas.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 5,
  "statement": "Starlight Media maintains a Private Organization-Wide Default (OWD) sharing model for media client accounts. A regional sales executive needs visibility to run reports on account records owned by managers in different branches across the company hierarchy. What should the Platform Administrator configure to grant this visibility?",
  "options": [
   {
    "key": "a",
    "text": "Permission Sets"
   },
   {
    "key": "b",
    "text": "Restriction Rules"
   },
   {
    "key": "c",
    "text": "Sharing Rules"
   },
   {
    "key": "d",
    "text": "Field-Level Security"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When OWD is set to Private, users only see records they own or those shared with them. Sharing Rules allow administrators to grant automatic Read or Read/Write access to records owned by specific roles, role hierarchies, or public groups, enabling cross-branch visibility for reporting. **Why the other options are incorrect:** A: Restriction Rules restrict record access that users already have; they cannot be used to expand access across private sharing models. B: Field-Level Security controls whether individual fields are visible or editable on a record, but it does not grant access to the record itself. C: Permission Sets grant object-level and system-level permissions, but they do not grant access to individual records under a Private OWD model.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 6,
  "statement": "Metric Solutions needs a single sales pipeline dashboard shared across the executive team and regional managers. Management wants each user viewing the dashboard to see data restricted strictly to their own permissions and team access without creating separate dashboard files. How should the Platform Administrator fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Build a Static Dashboard with a fixed System Administrator running user"
   },
   {
    "key": "b",
    "text": "Restrict access using private Custom Report Folders"
   },
   {
    "key": "c",
    "text": "Configure a Dynamic Dashboard set to run as the logged-in user"
   },
   {
    "key": "d",
    "text": "Enable Dashboard Feed Tracking and disable component drilling"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Dynamic Dashboards display data according to the viewing user's permissions and sharing access (\"View dashboard as logged-in user\"). This allows a single dashboard asset to deliver individualized views for every user. **Why the other options are incorrect:** B: Static Dashboards display data based on a fixed running user's permissions, showing all viewers the same data regardless of their individual access levels. C: Report folder sharing controls who can view or edit dashboard and report files, but it does not alter the data displayed inside dashboard components. D: Dashboard feed tracking enables Chatter collaboration on components, but it has no impact on data access or dynamic user views.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 7,
  "statement": "Users at Beacon Healthcare report that available options in the \"Service Category\" picklist on Case records should differ depending on whether the record represents a Clinical Incident or an Administrative Inquiry. Where should the Platform Administrator adjust the available picklist choices for each ticket type?",
  "options": [
   {
    "key": "a",
    "text": "Fields & Relationships"
   },
   {
    "key": "b",
    "text": "Global Value Sets"
   },
   {
    "key": "c",
    "text": "Lookup Filters"
   },
   {
    "key": "d",
    "text": "Record Types"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record Types allow administrators to specify different subsets of picklist values for the same field based on the business context or type of record being created. **Why the other options are incorrect:** A: Lookup Filters restrict which target records can be selected in a lookup field, not which options appear in a picklist field. B: Global Value Sets define a centralized list of picklist values shared across multiple fields/objects, but they do not filter options per record context. C: Fields & Relationships defines the master list of all picklist values on the field definition, but configuring context-specific values is done within Record Types.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 8,
  "statement": "A marketing coordinator has a CSV file containing 450 prospective client contacts along with their associated company accounts that need to be loaded into Salesforce at one time. Which tool should the Platform Administrator recommend for this import volume?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader Application"
   },
   {
    "key": "b",
    "text": "Data Import Wizard"
   },
   {
    "key": "c",
    "text": "Developer Console Bulk API"
   },
   {
    "key": "d",
    "text": "Big Data Engine"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Data Import Wizard is a native web-based tool designed to import up to 50,000 records at a time for standard objects like Accounts and Contacts, making it the most efficient choice for a 450-record dataset. **Why the other options are incorrect:** A: Using the Bulk API via Developer Console requires developer tools and code, which is unnecessary for a simple 450-record upload. B: \"Big Data Engine\" is not a native Salesforce data loading feature. C: Data Loader is designed for complex data operations or high volumes (up to 5 million records); using it for 450 standard records adds unnecessary installation overhead compared to the web-based Wizard.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 9,
  "statement": "Horizon Logistics is building an AI Agent action named registerReturn to initiate customer merchandise return records. Which set of Action Instructions follows Agentforce best practices?",
  "options": [
   {
    "key": "a",
    "text": "\"System execution node: execute APEX controller registerReturn to persist merchandise return objects.\""
   },
   {
    "key": "b",
    "text": "\"Use this action to log a formal merchandise return. Apply this when the customer explicitly requests to send back an item or start a return request.\""
   },
   {
    "key": "c",
    "text": "\"Creates a record in Salesforce. The purpose is to save data to the table so that return statistics remain accurate.\""
   },
   {
    "key": "d",
    "text": "\"This action creates a return record. Use this whenever someone says anything about shipping or products.\""
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce action instructions should be clear, concise, user-focused, and free of technical jargon. Option C clearly states what the action does, specifies the business purpose, and gives clear criteria for when the AI agent should invoke it. **Why the other options are incorrect:** A: Contains internal technical implementation details and code references, which should be avoided in agent instructions. B: Too broad and vague, which risks triggering the action inappropriately when users make general product inquiries. D: Focuses on backend database concepts rather than user intent and agent decision criteria.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 10,
  "statement": "Apex Healthcare uses Case Escalation Rules to manage unaddressed patient support tickets. Which two standard automated actions can the Platform Administrator configure when setting up escalation rule entry actions? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Reopen Closed Cases"
   },
   {
    "key": "b",
    "text": "Send email notifications to key stakeholders"
   },
   {
    "key": "c",
    "text": "Reassign the Case to a designated user or queue"
   },
   {
    "key": "d",
    "text": "Change Case Priority to High"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Case Escalation Rules support two standard automated actions when a case breaches time criteria: reassigning the case (to another user or queue) and sending email notifications (to the owner, manager, or additional recipients). **Why the other options are incorrect:** B: Escalation rules cannot modify field values like Priority directly; field updates require record-triggered flows or Process Builder. D: Escalation rules cannot modify case status or reopen closed cases; status changes must be handled through separate automation tools.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 11,
  "statement": "An administrator at AeroTech Systems needs to establish a many-to-many relationship between standard Accounts and a custom \"Certification\" object. Which two steps are required to implement this relationship? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Configure URL fields to link related records."
   },
   {
    "key": "b",
    "text": "Create two lookup relationships on the Account object."
   },
   {
    "key": "c",
    "text": "Create a custom junction object."
   },
   {
    "key": "d",
    "text": "Add two master-detail relationships on the junction object."
   }
  ],
  "correct": [
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A many-to-many relationship in Salesforce requires creating a custom junction object that contains two Master-Detail relationship fields, each linking to one of the two parent objects being connected. **Why the other options are incorrect:** C: Placing lookup fields on a parent object establishes a simple one-to-many lookup link, not a many-to-many architecture. D: URL fields store website links; they do not construct object relationships or enforce relational data integrity.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 12,
  "statement": "A sales operations manager wants to implement Agentforce SDR to automate initial inbound prospect interactions. How does Agentforce SDR assist the sales organization?",
  "options": [
   {
    "key": "a",
    "text": "It autonomously negotiates pricing parameters and executes final contract documents."
   },
   {
    "key": "b",
    "text": "It generates dynamic cold-call phone scripts for human representatives to read during calls."
   },
   {
    "key": "c",
    "text": "It analyzes recorded sales rep calls and generates weekly performance reviews."
   },
   {
    "key": "d",
    "text": "It responds to prospect inquiries using conversational AI grounded in verified company data."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce SDR acts as an autonomous conversational AI sales representative that engages prospects, answers questions using data grounded in Salesforce, and qualifies leads before handing them over to human reps. **Why the other options are incorrect:** A: Agentforce SDR directly converses with prospects via AI interaction, rather than merely drafting scripts for human reps to read. B: Agentforce SDR handles initial outreach, questions, and lead qualification, not final legal pricing negotiations or deal closing. D: Performance coaching and call analysis are features of Sales Cloud Einstein / Conversation Insights, not Agentforce SDR.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 13,
  "statement": "BioLabs Healthcare captures clinical trial data in a custom object named ClinicalTrial. Compliance rules mandate that the RegulatoryID field must be populated whenever a record is created or updated, regardless of the page layout, API operation, or user profile involved. How should the Platform Administrator enforce this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Create an Approval Process that validates field entry after saving."
   },
   {
    "key": "b",
    "text": "Build a Scheduled Flow to check for missing IDs every night."
   },
   {
    "key": "c",
    "text": "Set the RegulatoryID field as Universally Required on the object field definition."
   },
   {
    "key": "d",
    "text": "Add the field to the standard Search Layout for the object."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Marking a custom field as Universally Required on its field definition level ensures that the field must contain a value upon saving across all page layouts, API imports, integrations, and flows. **Why the other options are incorrect:** B: Scheduled flows evaluate records after they are saved, meaning non-compliant records would already exist in the database. C: Approval processes run after submission and cannot prevent initial record creation when fields are left blank. D: Search layouts control column visibility in search results lists; they do not enforce data entry rules.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 14,
  "statement": "Beacon Insurance is designing an automated approval workflow for policy updates. Which two standard automated actions can the Platform Administrator configure directly within the approval process? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Autolaunched Flow"
   },
   {
    "key": "b",
    "text": "Chatter Post"
   },
   {
    "key": "c",
    "text": "Field Update"
   },
   {
    "key": "d",
    "text": "Email Alert"
   }
  ],
  "correct": [
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Salesforce approval processes natively support four standard automated actions upon submission, approval, rejection, or recall: Field Updates, Email Alerts, Tasks, and Outbound Messages. **Why the other options are incorrect:** A: Chatter Posts cannot be added directly as standard actions within approval process steps; they must be triggered separately via record-triggered flows or Process Builder. D: Approval processes do not natively launch Flows as direct step actions. Separate automation must be triggered post-approval to execute flow logic.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 15,
  "statement": "An administrator deployed an automated Record-Triggered Flow to auto-create follow-up tasks when high-priority cases are logged. However, end users report that no tasks are being generated when new cases are saved. What is the most common administrative cause for this flow failing to execute?",
  "options": [
   {
    "key": "a",
    "text": "The triggering object lacks API access."
   },
   {
    "key": "b",
    "text": "The Flow has been set to Read-Only mode."
   },
   {
    "key": "c",
    "text": "The Flow is currently Inactive in production."
   },
   {
    "key": "d",
    "text": "The Flow endpoint URL has expired."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Flows must be explicitly activated in an environment to run. If a flow is created or deployed in an inactive state, it will not trigger or execute actions when triggering conditions occur. **Why the other options are incorrect:** A: Flows do not have a \"Read-Only\" mode toggle that permits activation while blocking record creation. C: Record-Triggered Flows run automatically in response to database events; they do not rely on external URL endpoints. D: Standard objects (like Cases) natively support API access and automation execution by default.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 16,
  "statement": "Nexus Global has set the Organization-Wide Default for Cases to Private. However, junior support reps notice that they can view every case in the company on their department analytics dashboard. What is causing reps to see data beyond their assigned permissions on the dashboard?",
  "options": [
   {
    "key": "a",
    "text": "The Case object sharing settings inherit access from public group subscriptions."
   },
   {
    "key": "b",
    "text": "Folder sharing settings grant public access to underlying objects."
   },
   {
    "key": "c",
    "text": "The dashboard is configured with a Running User who has organization-wide data access."
   },
   {
    "key": "d",
    "text": "Dashboard Filters are actively broadening user visibility parameters."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard dashboards display data according to the data access permissions of the \"Running User\". If a dashboard is set to run as a user with broad visibility (such as a Manager or Admin), all viewers see the data through that user's access level, overriding the viewer's own OWD and sharing restrictions. **Why the other options are incorrect:** B: Dashboard filters narrow or segment the data being displayed; they cannot expand record access beyond what the running user can see. C: Folder sharing controls who can open or view the dashboard asset itself, not what records are visible inside the dashboard components. D: Public group subscriptions send email snapshots of dashboards; they do not alter Salesforce record-level security models.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 17,
  "statement": "An IT compliance auditor at Velocity Energy must extract a dataset containing specific fields (Site ID, Name, Inspection Date, and Cost) for all completed safety audits created over the past quarter into a CSV file. Which tool should the Platform Administrator use to perform this targeted export?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader"
   },
   {
    "key": "b",
    "text": "Data Export Service"
   },
   {
    "key": "c",
    "text": "Schema Builder"
   },
   {
    "key": "d",
    "text": "Mass Delete Tool"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Loader is a bulk data management application that allows administrators to execute SOQL queries to extract specific fields and records filtered by precise criteria (such as date ranges and status) directly into CSV files. **Why the other options are incorrect:** A: Schema Builder is a visual tool used to view and modify object structures, fields, and relationships; it cannot export data records. B: Data Export Service creates periodic backup files of entire objects or the whole org, but it does not allow filtering exports by specific record criteria (such as date range or field values). D: Mass Delete Tool is used to remove records in bulk from the system, not to export data into external files.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 18,
  "statement": "Apex Financial configured a regional supervisor as a Delegated Administrator to manage team user accounts within their department. Which administrative limitation applies to this delegated user?",
  "options": [
   {
    "key": "a",
    "text": "They cannot create, edit, or modify Permission Sets."
   },
   {
    "key": "b",
    "text": "They cannot assign users to designated Public Groups."
   },
   {
    "key": "c",
    "text": "They are prohibited from unlocking user accounts or resetting passwords."
   },
   {
    "key": "d",
    "text": "They are barred from assigning user profiles within their delegated administration scope."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Delegated Administrators are restricted from creating, editing, or managing Permission Sets because permission sets define system-wide security capabilities and data access rights across the organization. **Why the other options are incorrect:** A: Delegated administrators explicitly can unlock accounts and reset passwords for users within their designated scope. C: Delegated administrators can assign users to specified profiles included in their delegated administration setup. D: Delegated administrators can assign users to specified Public Groups defined in their delegation rules.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 19,
  "statement": "A system administrator at SolarWave is configuring the default mobile experience for field technicians using the classic Mobile Only app container. Which statement accurately describes navigation bar behavior in the Mobile Only app?",
  "options": [
   {
    "key": "a",
    "text": "The initial four items in the navigation menu are anchored directly to the bottom navigation bar."
   },
   {
    "key": "b",
    "text": "Mobile Only navigation automatically alters menu items per profile without setup configuration."
   },
   {
    "key": "c",
    "text": "All custom Lightning Web Components are automatically added to the mobile menu by default."
   },
   {
    "key": "d",
    "text": "Standard object tabs cannot be removed from the Mobile Only navigation menu list."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In the Mobile Only container within the Salesforce mobile app, the first four navigation items defined in the navigation menu setup are pinned to the bottom navigation bar for quick access, while remaining items appear under the menu list. **Why the other options are incorrect:** A: Components must be exposed via custom tabs before they can be added to mobile navigation; they do not appear automatically. C: The Mobile Only navigation menu is uniform for all users across the org; profile-specific navigation requires Lightning Apps. D: Standard object tabs can be customized, added, or removed from the navigation menu in Setup.",
  "module": "productivity"
 },
 {
  "simulado": 1,
  "number": 20,
  "statement": "Horizon Travel wants to implement a guided step-by-step submission process for field reps requesting travel budget approvals. Once the request form is completed, the system must automatically submit the details to department heads for sign-off. Which two tools should a Platform Administrator combine to build this end-to-end solution? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Flow Builder"
   },
   {
    "key": "b",
    "text": "Validation Rule"
   },
   {
    "key": "c",
    "text": "Quick Action"
   },
   {
    "key": "d",
    "text": "Approval Process"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Flow Builder can be used to construct a Screen Flow that guides the user step-by-step through collecting travel request details. Upon completion, the flow can automatically launch an Approval Process to route the record to department managers for formal authorization and tracking. **Why the other options are incorrect:** A: Quick Actions can launch flows or create single records, but they do not provide step-by-step multi-screen guidance or handle complex approval routing. C: Validation Rules prevent records from saving if criteria are violated; they do not guide users through data entry screens or process approvals.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 21,
  "statement": "Apex Logistics, a regional freight handling company, needs a Salesforce report that categorizes cargo records into \"Lightweight\", \"Standard\", and \"Heavyweight\" groupings based on the numeric value in the total weight field. The reporting manager wants this categorization built directly within the report interface without creating a custom formula field in Setup. Which feature should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Group Rows"
   },
   {
    "key": "b",
    "text": "Bucket Column"
   },
   {
    "key": "c",
    "text": "Filter Logic"
   },
   {
    "key": "d",
    "text": "Summary Formula"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Bucket Column allows administrators to group report records into custom categories (such as Lightweight, Standard, and Heavyweight) based on ranges of numeric, picklist, or text fields directly within the report builder. This avoids adding extra custom formula fields to the object schema. **Why the other options are incorrect:** A: Group Rows organizes report output by exact individual field values (e.g., grouping by specific carrier names), but it cannot group continuous numerical values into custom range brackets like weight tiers. B: Filter Logic manages how multiple filter conditions are evaluated (such as using AND/OR statements) to restrict which records appear in the report, but it does not categorize or label data into groups. D: Summary Formulas calculate mathematical aggregates (like averages or totals) across report groupings, but they cannot evaluate record values into text category labels across ranges.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 22,
  "statement": "While testing a generative AI prompt template designed to generate account summaries, an administrator notices that identical test runs produce slightly different phrasing and text outputs each time. Why does the prompt template produce varying responses during testing?",
  "options": [
   {
    "key": "a",
    "text": "Generative AI prompt templates only execute actual LLM calls once deployed to production."
   },
   {
    "key": "b",
    "text": "Prompt Builder executes an actual, unique request to the Large Language Model during each test execution."
   },
   {
    "key": "c",
    "text": "Prompt Builder caches prior outputs to save processing bandwidth, causing output variations."
   },
   {
    "key": "d",
    "text": "The system simulates responses locally without sending requests to the underlying Large Language Model."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Prompt Builder issues dynamic calls to the underlying Large Language Model (LLM) during test runs. Because LLMs are non-deterministic, probabilistic models, each unique execution call evaluates prompt instructions and context dynamically, naturally generating varied phrasing. **Why the other options are incorrect:** A: Prompt Builder does not cache LLM text outputs during execution tests; each test run triggers a fresh request. B: Prompt Builder makes live API calls to the configured LLM during testing, rather than using static local simulations. D: Live LLM calls occur during both builder testing and production execution.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 23,
  "statement": "Crestview Real Estate needs to restrict user login access so that employees can log in only during standard business hours and strictly from authorized corporate IP ranges. Where should the Platform Administrator configure these access restrictions?",
  "options": [
   {
    "key": "a",
    "text": "Custom Permission Sets"
   },
   {
    "key": "b",
    "text": "User Profile"
   },
   {
    "key": "c",
    "text": "Company Settings"
   },
   {
    "key": "d",
    "text": "User Role Hierarchy"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Login Hours and Login IP Ranges are security settings managed directly at the Profile level in Salesforce, ensuring all users assigned to that profile adhere to specified schedule and network limits. **Why the other options are incorrect:** A: Company Settings set global operational defaults (such as currency or fiscal year), but do not manage individual login schedules or IP limits per user group. B: Permission sets grant additional functional capabilities and object access, but cannot enforce profile-level restrictions like Login Hours or restricted IP ranges. D: Role Hierarchy controls data visibility up the management chain, not user login authentication rules or network boundaries.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 24,
  "statement": "Vanguard Health developed a Screen Flow to guide clinic intake representatives through a standardized patient screening script. Intake reps need this interactive flow accessible directly on individual Patient record pages. How should the Platform Administrator expose this Screen Flow to intake reps?",
  "options": [
   {
    "key": "a",
    "text": "Configure a custom Component Visibility filter on the Utility Bar."
   },
   {
    "key": "b",
    "text": "Add a direct link to the Flow inside the standard Object Page Layout section header."
   },
   {
    "key": "c",
    "text": "Embed the Flow component onto the Patient Lightning Record Page using Lightning App Builder."
   },
   {
    "key": "d",
    "text": "Add the Flow directly to the global Mobile Only App Navigation Menu list."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To make a Screen Flow available directly within a record's contextual view, administrators use Lightning App Builder to add the standard Flow component to the object's Lightning Record Page layout. **Why the other options are incorrect:** B: Standard page layouts manage field sections and related lists, but they cannot embed interactive Screen Flow interfaces directly. C: Adding a flow to global navigation makes it accessible everywhere as a standalone utility, but does not display it contextually on specific record pages. D: Utility Bar components float at the bottom of the screen globally across the application, rather than embedding directly within specific record page view layouts.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 25,
  "statement": "Horizon Logistics needs to measure how much business time customer support incidents spend sitting with each specialized department (e.g., Tier 1, Tier 2, Escalations) to evaluate operational bottlenecks against SLA commitments. Which Salesforce feature allows a Platform Administrator to track and report on elapsed duration per handling team relative to standard working hours?",
  "options": [
   {
    "key": "a",
    "text": "Case Escalation Rules paired with standard Business Hours"
   },
   {
    "key": "b",
    "text": "Record-Triggered Scheduled Paths evaluated against Business Hours"
   },
   {
    "key": "c",
    "text": "Milestones configured within Entitlement Management using Business Hours"
   },
   {
    "key": "d",
    "text": "Time-based Workflow Actions operating on operational hours"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Entitlement Management Milestones allow administrators to define specific target steps (such as time spent per team or resolution stage) and measure exact elapsed time within defined Business Hours, providing granular reporting on SLA compliance across teams. **Why the other options are incorrect:** A: Escalation Rules trigger actions (such as emails or reassignment) when a time limit is exceeded, but they do not log or track historical time spent across multiple teams for detailed reporting. C: Time-based Workflow Actions execute single deferred actions; they cannot measure, track, or report on historical duration spent within specific record stages. D: Scheduled Paths in Flow execute automated logic after a time offset, but they lack built-in duration tracking and SLA reporting metrics.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 26,
  "statement": "An administrator at Crestview Logistics needs to design custom, mobile-optimized pages using Lightning App Builder. Which two types of pages can be created and customized using Lightning App Builder for the Salesforce mobile app? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "App Page"
   },
   {
    "key": "b",
    "text": "User Page"
   },
   {
    "key": "c",
    "text": "Record Page"
   },
   {
    "key": "d",
    "text": "Dashboard Page"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Lightning App Builder supports creating three main types of custom Lightning pages: App Pages (custom mobile/desktop landing pages), Record Pages (tailored page views for individual object records), and Home Pages. **Why the other options are incorrect:** C: Salesforce does not feature a customizable \"User Page\" type within Lightning App Builder. D: Dashboards are built using the Dashboard Builder tool, not created as standalone pages in Lightning App Builder.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 27,
  "statement": "Apex Financial's regional underwriting manager receives a validation error when attempting to update a loan application record. When the system administrator attempts the exact same edit, the record saves successfully without any error. How should the administrator troubleshoot why the manager is encountering this error?",
  "options": [
   {
    "key": "a",
    "text": "Elevate the underwriting manager's profile to System Administrator."
   },
   {
    "key": "b",
    "text": "Use the \"Login As\" feature from Setup to impersonate the user's session."
   },
   {
    "key": "c",
    "text": "Install a third-party diagnostic logging tool from AppExchange."
   },
   {
    "key": "d",
    "text": "Request the user's password to log directly into their account."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The \"Login As\" functionality allows administrators to impersonate a user and experience Salesforce under that user's exact profile, roles, permissions, and sharing settings. This makes it easy to reproduce user-specific errors safely without violating security guidelines by asking for passwords. **Why the other options are incorrect:** A: Requesting user passwords violates Salesforce security best practices and company governance policies. C: AppExchange tools are unnecessary when the native \"Login As\" feature provides immediate, contextual troubleshooting capability. D: Elevating the user to System Administrator bypasses security controls and does not diagnose why their standard permissions caused the error.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 28,
  "statement": "Crestview Real Estate encourages cross-functional account management where sales representatives, solutions architects, and legal advisers collaborate on client accounts. Management wants a predefined group of users with specific access rights automatically assigned whenever a sales rep creates a new account. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Default Account Teams configured on user settings"
   },
   {
    "key": "b",
    "text": "Role Hierarchy auto-sharing parameters"
   },
   {
    "key": "c",
    "text": "Criteria-based Sharing Rules targeting Public Groups"
   },
   {
    "key": "d",
    "text": "Dynamic Permission Set Assignment via Flow"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Default Account Teams allow users (or admins) to define a reusable team structure with predefined roles and access permissions (Read Only or Read/Write). When enabled, this team can be automatically added to any newly created account record. **Why the other options are incorrect:** A: Sharing rules grant record access based on field criteria or ownership, but they do not populate account team members or team roles on the account record. B: Role Hierarchy grants vertical access inheritance upward, but it cannot automatically add cross-functional team members with specific team roles to individual records. C: Permission sets grant system-level or object-level permissions to users, but they do not assign users as collaborative team members on specific records.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 29,
  "statement": "A regional operations manager clicks a direct URL link sent by an admin to access a departmental dashboard folder. Instead of opening, Salesforce displays the error message: \"We couldn't find the record you're trying to access.\" What is the most likely cause of this error?",
  "options": [
   {
    "key": "a",
    "text": "The dashboard URL requires single sign-on re-authentication."
   },
   {
    "key": "b",
    "text": "The user profile is missing the \"Run Reports\" permission set."
   },
   {
    "key": "c",
    "text": "The manager's role is located too high in the role hierarchy."
   },
   {
    "key": "d",
    "text": "The operations manager has not been granted View access to the shared Dashboard folder."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Access to dashboards and reports in Salesforce is governed by folder permissions. If a dashboard folder is Private or restricted, users who lack access to the folder receive an authorization error when accessing direct links. **Why the other options are incorrect:** A: Missing system permissions usually present specific privilege errors, but accessing a hidden folder link manifests as an un-found record error. C: Authentication issues redirect users to login screens rather than displaying record access error messages within an active session. D: Being higher in the role hierarchy expands data access permissions; it never restricts folder access.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 30,
  "statement": "Apex Logistics needs an automated process to automatically purge obsolete temporary tracking records from Salesforce whenever their status field is updated to \"Expired\". Which automated solution should the Platform Administrator build?",
  "options": [
   {
    "key": "a",
    "text": "Mass Delete Records tool"
   },
   {
    "key": "b",
    "text": "Marketing Cloud Automation Studio"
   },
   {
    "key": "c",
    "text": "Record-Triggered Flow in Flow Builder"
   },
   {
    "key": "d",
    "text": "Scheduled Flow Orchestration"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Record-Triggered Flow built in Flow Builder can be configured to execute whenever a record is updated to meet specific criteria (e.g., Status = \"Expired\") and automatically perform a Delete Records action without manual user action. **Why the other options are incorrect:** A: Mass Delete Records is a manual administrative utility in Setup, not an automated background process that triggers when field values change. B: Flow Orchestration coordinates multi-user work tasks and complex stage approvals; using it strictly to delete single records adds unnecessary overhead. D: Automation Studio is part of Salesforce Marketing Cloud, not core Salesforce CRM data management.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 31,
  "statement": "An administrator at Titan Industrial is designing a generative AI prompt template to produce automated ticket summaries. The admin needs to dynamically incorporate the customer's account name, equipment serial number, and issue details from the case record into the prompt context. What should the administrator use to pull record data into the prompt template?",
  "options": [
   {
    "key": "a",
    "text": "Global Picklist Value Sets"
   },
   {
    "key": "b",
    "text": "Autolaunched Flow Variables"
   },
   {
    "key": "c",
    "text": "Custom Metadata Types"
   },
   {
    "key": "d",
    "text": "Merge Fields"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Merge Fields in Prompt Builder allow administrators to insert dynamic record data (such as {!$Input:Case.Subject} or custom field values) directly into prompt instructions so the AI model generates grounded responses using real-time Salesforce data. **Why the other options are incorrect:** A: Flow variables pass data within Flow Builder runtime, but they are not the declarative mechanism used within Prompt Builder to insert record fields into prompts. B: Global Picklist Value Sets manage reusable picklist options, not dynamic record values in prompt templates. C: Custom Metadata Types store application configurations and metadata records, not dynamic operational data from individual records.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 32,
  "statement": "BrightPath Education hosts a monthly regional seminar series under a single annual marketing campaign. The marketing director needs to measure return on investment (ROI) both for individual monthly seminars and overall for the annual series. How should the Platform Administrator structure these campaigns?",
  "options": [
   {
    "key": "a",
    "text": "Establish a Campaign Hierarchy with monthly seminars linked as child records to the parent annual campaign"
   },
   {
    "key": "b",
    "text": "Customize Campaign Member Status choices per monthly session"
   },
   {
    "key": "c",
    "text": "Configure Opportunity Record Types tied to campaign lookups"
   },
   {
    "key": "d",
    "text": "Create a custom Junction Object connecting individual Campaign records"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Campaign Hierarchies link related campaigns in a parent-child structure. Salesforce automatically aggregates sub-campaign metrics (such as responses, opportunities, and revenue) up to the parent campaign, enabling ROI reporting by individual event (child) and by overall series (parent). **Why the other options are incorrect:** B: Creating a junction object is unnecessary because Salesforce natively supports parent-child relationships between Campaign records. C: Member Statuses track individual attendee engagement (e.g., Invited, Attended), but they do not roll up financial metrics across multiple campaign assets. D: Opportunity Record Types manage sales processes and layouts, not campaign aggregation or marketing ROI roll-ups.",
  "module": "sales"
 },
 {
  "simulado": 1,
  "number": 33,
  "statement": "BrightPath Learning wants to simplify report creation for standard users by preventing them from selecting irrelevant or legacy report types when launching the report builder. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Joined Reports"
   },
   {
    "key": "b",
    "text": "Report Folder Sharing"
   },
   {
    "key": "c",
    "text": "Custom Metadata Types"
   },
   {
    "key": "d",
    "text": "Hide Report Types"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The \"Hide Report Types\" feature in Setup allows administrators to select which standard and custom report types are hidden from users during report creation, keeping the report wizard streamlined. **Why the other options are incorrect:** B: Report Folder Sharing controls access to existing reports saved within specific folders, but does not limit which report types users can select when creating new reports. C: Joined Reports are a reporting format used to combine multiple report blocks; they do not restrict report type visibility. D: Custom Metadata Types store application metadata and configurations, but do not manage native report builder wizard settings.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 34,
  "statement": "Support representatives at Quantum Robotics report that the Activity Timeline showing emails, tasks, and calls is missing from the Equipment record page layout in Lightning Experience. How should the Platform Administrator restore the Activity Timeline?",
  "options": [
   {
    "key": "a",
    "text": "Add the standard Activities component to the Lightning Record Page in App Builder."
   },
   {
    "key": "b",
    "text": "Create a custom action button on the Equipment Object Manager menu."
   },
   {
    "key": "c",
    "text": "Enable Activity Tracking in Company Information settings."
   },
   {
    "key": "d",
    "text": "Update user profile permissions to grant Edit access to Activity History."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Lightning Experience, the Activity Timeline is displayed via the standard \"Activities\" component. Adding this component to the record page in Lightning App Builder makes the timeline visible to users. **Why the other options are incorrect:** A: There is no global \"Activity Tracking\" toggle in Company Information to fix page layout components. C: Custom buttons trigger actions, but they cannot render the interactive Activity Timeline component on a page layout. D: Activity visibility depends on Lightning page components and object permissions, not a specific \"Activity History\" permission toggle.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 35,
  "statement": "BioHealth Diagnostics assigns new lab technicians the standard \"Minimum Access - Salesforce\" profile. To perform their daily duties, technicians need Read and Edit access to Case records, but the system administrator wants to adhere to security best practices regarding standard profiles. What should the administrator do next?",
  "options": [
   {
    "key": "a",
    "text": "Create and assign a custom Permission Set containing Case object access."
   },
   {
    "key": "b",
    "text": "Adjust the role hierarchy to grant technicians inherited access to Cases."
   },
   {
    "key": "c",
    "text": "Edit the standard Minimum Access profile to grant Case permissions."
   },
   {
    "key": "d",
    "text": "Assign the System Administrator profile to the technicians temporarily."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard profiles cannot be modified, and modifying standard profiles is contrary to best practices. Creating a custom Permission Set with Read and Edit access on the Case object allows administrators to grant additional access to specific users cleanly and scalably. **Why the other options are incorrect:** A: Modifying standard profiles directly is restricted by Salesforce for many permissions and is bad practice for scalable access management. B: The role hierarchy controls record-level sharing visibility upward, not baseline object-level permissions (Read/Edit). D: Assigning the System Administrator profile grants administrative privileges across the entire org, creating a severe security violation.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 36,
  "statement": "Zenith Telecom routes incoming customer inquiries based on contract level. Support tickets for \"Bronze\" and \"Silver\" clients must route to the General Support Queue, while tickets for \"Gold\" clients must route directly to the Priority Support Queue upon creation. Which feature should the Platform Administrator use to implement this routing?",
  "options": [
   {
    "key": "a",
    "text": "Auto-Response Rules"
   },
   {
    "key": "b",
    "text": "Workflow Rules"
   },
   {
    "key": "c",
    "text": "Case Assignment Rules"
   },
   {
    "key": "d",
    "text": "Escalation Rules"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Case Assignment Rules evaluate field criteria (e.g., Account Tier = Gold) when a case is created and automatically assign ownership to the appropriate user or queue. **Why the other options are incorrect:** A: Escalation Rules trigger actions after a case has remained open for a specified duration; they do not perform initial assignment upon record creation. B: Workflow Rules are legacy automation tools that cannot directly route record ownership to queues upon creation as cleanly as Assignment Rules. D: Auto-Response Rules send automatic email responses to customers upon case submission, but they do not assign record ownership to queues.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 37,
  "statement": "An administrator at Aegis Security needs to review organization-wide operating parameters, including multi-currency settings, the company fiscal year calendar, and standard support business hours. Where in Setup should the administrator navigate to access these settings?",
  "options": [
   {
    "key": "a",
    "text": "Custom Settings"
   },
   {
    "key": "b",
    "text": "Feature Settings"
   },
   {
    "key": "c",
    "text": "User Management Settings"
   },
   {
    "key": "d",
    "text": "Company Settings"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Company Settings in Setup contains global organizational configurations, including Company Information, Currencies, Fiscal Year, and Business Hours, which govern operations across the entire Salesforce instance. **Why the other options are incorrect:** A: User Management Settings manage user account behavior, self-registration, and login access policies, not company-wide operational metrics like fiscal years. B: Custom Settings allow developers and admins to create custom sets of data for automation or code, but they do not house core system settings like currency or business hours. D: Feature Settings organize functional configurations for specific Salesforce tools (e.g., Sales, Service, or Marketing), whereas core operational defaults reside under Company Settings.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 38,
  "statement": "A Platform Administrator is notified of an upcoming Salesforce Release Update (formerly Critical Update) that changes security enforcement behavior across custom automation. What is the proper best practice procedure for testing and activating this update?",
  "options": [
   {
    "key": "a",
    "text": "Wait for Salesforce to auto-activate the update in Production without prior intervention."
   },
   {
    "key": "b",
    "text": "Enable the update directly in Production during non-business hours."
   },
   {
    "key": "c",
    "text": "Request a permanent exemption from Salesforce Support to prevent activation."
   },
   {
    "key": "d",
    "text": "Activate and test the update in a Sandbox environment prior to production rollout."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Best practice for managing system-wide release updates is to activate and thoroughly test the update in a Sandbox environment first. This allows administrators to identify and fix any broken automation without impacting production business operations. **Why the other options are incorrect:** A: Enabling updates directly in production without prior testing risks unexpected system downtime and business disruption. B: Relying solely on automatic enforcement dates leaves no buffer to discover and fix breakages prior to production activation. D: Salesforce Release Updates are mandatory updates that cannot be permanently exempted or bypassed.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 39,
  "statement": "Horizon Health, a telemedicine provider, is expanding its virtual care team. Support managers need a dynamic workload distribution tool that automatically routes patient inquiries based on clinician availability and current capacity. Managers also want the ability to adjust capacity thresholds and reassign team queues on the fly without relying on the Salesforce administration team. Which solution allows business managers to control work distribution independently?",
  "options": [
   {
    "key": "a",
    "text": "Case Assignment Rules"
   },
   {
    "key": "b",
    "text": "Flow Orchestration"
   },
   {
    "key": "c",
    "text": "Escalation Rules"
   },
   {
    "key": "d",
    "text": "Omni-Channel"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Omni-Channel provides real-time, dynamic workload routing based on agent capacity, presence status, and skill sets. Supervisors can manage queues, adjust agent workloads, and reassign work items directly from Omni-Channel Supervisor without submitting administrative change requests. **Why the other options are incorrect:** B: Case Assignment Rules route cases only at the precise moment of record creation based on static field criteria. Modifying this routing logic requires administrative changes in Setup. C: Escalation Rules trigger actions (like reassignments or notifications) only after a case has remained unresolved for a specified time period; they do not manage live agent capacity or real-time routing. D: Flow Orchestration coordinates complex, multi-user business processes across extended workflows, but it is an administrative build tool rather than a supervisor-facing real-time work distribution console.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 40,
  "statement": "Sales managers at Helios Energy want to alter the specific fields displayed on the visual card tiles within the Opportunity Kanban pipeline view. Which setting should the Platform Administrator customize to update the card display fields?",
  "options": [
   {
    "key": "a",
    "text": "Page Layout Section"
   },
   {
    "key": "b",
    "text": "Kanban Summary Field Settings"
   },
   {
    "key": "c",
    "text": "Compact Layout"
   },
   {
    "key": "d",
    "text": "Search Layout"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Compact Layouts control the primary fields displayed in record header highlights panels as well as the fields that appear on visual card tiles in Kanban view. **Why the other options are incorrect:** B: Page Layouts dictate the fields and sections shown on the main record detail page, but do not dictate the fields shown on Kanban cards. C: Kanban settings select which field determines the board columns (e.g., Stage) and summary totals (e.g., Amount), but do not select the individual fields displayed on cards. D: Search Layouts determine which fields appear in search results lists, lookup dialogs, and key search views, not Kanban tiles.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 41,
  "statement": "At Nova Health, inbound customer tickets generated through web forms are assigning a system administrator as the default record owner, causing confusion in audit logs. Where should the administrator modify the default fallback case ownership setting?",
  "options": [
   {
    "key": "a",
    "text": "Process Automation Settings"
   },
   {
    "key": "b",
    "text": "Escalation Settings"
   },
   {
    "key": "c",
    "text": "Debug Logs Settings"
   },
   {
    "key": "d",
    "text": "Support Settings"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Support Settings in Setup contains organization-wide case configuration settings, including the Default Case Owner. Updating this setting to an integration user or fallback queue ensures new unassigned cases display the correct ownership. **Why the other options are incorrect:** A: Process Automation Settings manage general workflow, flow execution, and pause settings, not case-specific ownership fallbacks. B: Debug Logs are diagnostic logs used for troubleshooting code and automation, not operational feature configurations. D: Escalation Settings (Rules) govern action timing for aging cases, but do not set the global fallback owner for newly created cases.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 42,
  "statement": "Aegis Security wants high-value service contracts to undergo management review before sign-off. The administrator needs to guarantee that only active contracts valued above $100,000 enter the formal review cycle. How should the administrator restrict which records enter the Approval Process?",
  "options": [
   {
    "key": "a",
    "text": "Set the object-level Organization-Wide Defaults to Private."
   },
   {
    "key": "b",
    "text": "Define Specific Entry Criteria on the approval process definition."
   },
   {
    "key": "c",
    "text": "Add a Validation Rule on the contract object."
   },
   {
    "key": "d",
    "text": "Build a Dynamic Form to display an approval submission button."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Entry Criteria on an Approval Process define the specific field conditions (e.g., Status = 'Active' AND Amount > 100000) that a record must satisfy to enter the approval workflow upon submission. **Why the other options are incorrect:** B: Validation Rules block record saving if data is invalid, but they do not filter which records are eligible to enter an approval workflow. C: Dynamic Forms manage layout visibility; they do not control approval process entry logic. D: Organization-Wide Defaults govern record sharing visibility, not approval process entry rules.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 43,
  "statement": "BioLabs requires high-budget research proposals to undergo structured multi-step reviews and formal authorizations from department leads before project work can commence. Which Salesforce feature should the Platform Administrator implement to handle record routing and decision tracking?",
  "options": [
   {
    "key": "a",
    "text": "Case Escalation Rules"
   },
   {
    "key": "b",
    "text": "Approval Process"
   },
   {
    "key": "c",
    "text": "Schema Builder"
   },
   {
    "key": "d",
    "text": "Lead Assignment Rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Approval Processes automate the step-by-step submission, routing, and sign-off workflow for records requiring formal review, allowing designated approvers to approve or reject requests while executing automated actions at each step. **Why the other options are incorrect:** A: Case Escalation Rules escalate aging cases; they do not manage formal multi-step submission and authorization processes. B: Lead Assignment Rules route new leads to owners upon creation, but do not support approval or rejection workflows. D: Schema Builder is an administrative tool used to view and create objects, fields, and relationships, not to execute business workflows.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 44,
  "statement": "Zenith Solar tracks customer equipment inspections using a custom object called ServiceInspection. Management requires that inspection records remain intact in Salesforce even if the related parent Customer Account record is deleted. Which relationship type should the Platform Administrator configure between ServiceInspection and Account?",
  "options": [
   {
    "key": "a",
    "text": "Construct a many-to-many Junction Object between Account and ServiceInspection."
   },
   {
    "key": "b",
    "text": "Establish a Master-Detail relationship field on ServiceInspection referencing Account."
   },
   {
    "key": "c",
    "text": "Define a Master-Detail relationship on Account pointing to ServiceInspection."
   },
   {
    "key": "d",
    "text": "Create a Lookup relationship field on ServiceInspection referencing Account."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Lookup relationship creates a loose link between child and parent records. If the parent Account record is deleted, child ServiceInspection records remain intact in the system. **Why the other options are incorrect:** A: Master-Detail relationships are defined on the child object, not on the parent object. C: Master-Detail relationships enforce cascade deletion; deleting the parent Account would automatically delete all related ServiceInspection records. D: Junction objects are used to connect two objects in a many-to-many relationship, which adds unnecessary complexity for a simple parent-child link.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 45,
  "statement": "Nexus Financial manages two distinct commercial lending tracks: Micro-Loans, which follow a streamlined 4-stage process, and Commercial Mortgages, which require an 8-stage evaluation. Each track requires different picklist choices for stage progression and unique page field layouts. How should the Platform Administrator configure Salesforce to support these requirements?",
  "options": [
   {
    "key": "a",
    "text": "Configure multiple Page Layouts to directly filter available picklist options for each loan type."
   },
   {
    "key": "b",
    "text": "Create conditional Validation Rules on a unified layout to enforce step entry."
   },
   {
    "key": "c",
    "text": "Utilize Permission Sets to hide unauthorized stage picklist choices for specific user roles."
   },
   {
    "key": "d",
    "text": "Assign separate Record Types paired with custom Business Processes for each loan classification."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce uses Business Processes (Sales/Support Processes) tied to Record Types to display different picklist values for lifecycle stages (e.g., 4 stages vs. 8 stages) and assign tailored Page Layouts to different user profiles. **Why the other options are incorrect:** B: Validation rules can block invalid stage progression, but they cannot alter available picklist selections or present distinct field layouts. C: Permission sets grant object and field access, but they cannot filter picklist choices based on business process stages. D: Page layouts determine field placement and section visibility, but they do not control picklist value availability for stage fields.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 46,
  "statement": "Vanguard Solar notices that field sales representatives often omit vital customer specifications when logging project assets and accounts. Management wants to assess the overall data health and pinpoint which specific records are missing critical attributes. What should the Platform Administrator do to assess data completeness across these objects?",
  "options": [
   {
    "key": "a",
    "text": "Subscribe sales representatives to a scheduled monthly account summary email."
   },
   {
    "key": "b",
    "text": "Install a third-party data governance application from the Salesforce AppExchange."
   },
   {
    "key": "c",
    "text": "Build standard reports with filter logic set to isolate records where critical fields are blank."
   },
   {
    "key": "d",
    "text": "Enforce field entry by making all target attributes universally required on the object definition."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Building standard reports filtered for blank values across critical fields allows the administrator to evaluate existing data quality, identify missing record attributes, and pinpoint non-compliant account owners without disrupting current workflows. **Why the other options are incorrect:** A: Making fields universally required forces future data entry compliance, but it does not help the administrator audit existing records or measure historical data quality gaps. B: While third-party AppExchange tools offer advanced data cleaning, Salesforce native reporting fulfills the requirement to analyze missing data without added cost or package overhead. C: Subscribing reps to emails delivers snapshots of reports, but it does not perform the audit needed for an administrator to evaluate data completeness across the org.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 47,
  "statement": "Crestview Financial wants to track three distinct promotional initiatives using standard Campaign records: Virtual Webinars, On-Site Conferences, and Email Blasts. Each initiative type requires capturing vastly different data fields and layout views. How should the Platform Administrator structure Salesforce to support these different initiatives?",
  "options": [
   {
    "key": "a",
    "text": "Create unique Record Types for each campaign category and pair them with customized Page Layouts."
   },
   {
    "key": "b",
    "text": "Establish a multi-level Campaign Hierarchy to separate field requirements."
   },
   {
    "key": "c",
    "text": "Build a single Campaign page layout and use validation rules to hide irrelevant fields."
   },
   {
    "key": "d",
    "text": "Define Custom Metadata Types for each initiative and link them via lookup fields."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record Types paired with custom Page Layouts allow administrators to present different field layouts, section arrangements, and picklist choices based on the specific type of record being managed. **Why the other options are incorrect:** A: Validation rules enforce data requirements upon saving, but they cannot hide or show fields on a page layout dynamically. C: Custom Metadata Types store application metadata for configuration and automation, not operational user records like marketing campaigns. D: Campaign Hierarchies organize parent-child marketing relationships and roll up financial metrics, but they do not alter page layouts or field requirements.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 48,
  "statement": "Titan Logistics created custom profiles for new users cloned from the standard \"Minimum Access - Salesforce\" profile and assigned appropriate object permission sets. Upon logging in, users are forced into the Classic interface and cannot switch to Lightning Experience. Which setting or permission must the administrator grant to enable the Lightning interface for these users?",
  "options": [
   {
    "key": "a",
    "text": "Add Lightning component pages to the default User layout."
   },
   {
    "key": "b",
    "text": "Enable Enhanced Interface Routing in Setup User Management Settings."
   },
   {
    "key": "c",
    "text": "Enable the \"Lightning Experience User\" permission on their profile or via a permission set."
   },
   {
    "key": "d",
    "text": "Assign the users to the System Administrator role node."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Access to the Lightning Experience interface requires the \"Lightning Experience User\" system permission. Standard base profiles like Minimum Access disable this permission by default, so it must be granted via custom profile editing or a permission set. **Why the other options are incorrect:** B: Page layouts dictate component placement, but do not grant core access to switch to the Lightning interface. C: Assigning administrative roles gives excessive administrative authority and violates basic security practices. D: \"Enhanced Interface Routing\" is not a standard Salesforce setup setting for toggling Lightning UI access.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 49,
  "statement": "Quantum Tech requires any commercial agreement with a total contract value exceeding $500,000 to automatically undergo executive sign-off without requiring sales representatives to manually submit the record. Which configuration should the Platform Administrator build to fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "An Einstein Next Best Action component assigned to the page"
   },
   {
    "key": "b",
    "text": "A Record-Triggered Flow that automatically invokes an Approval Process action"
   },
   {
    "key": "c",
    "text": "A Quick Action configured on the record detail layout"
   },
   {
    "key": "d",
    "text": "A Case Escalation Rule set to execute dynamic ownership updates"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Record-Triggered Flow can evaluate record criteria (e.g., Contract Amount > $500,000 upon creation or update) and automatically trigger the standard \"Submit for Approval\" action, initiating the approval workflow declaratively without user intervention. **Why the other options are incorrect:** B: Quick Actions require manual user interaction (clicking a button), failing the requirement for automatic submission. C: Einstein Next Best Action presents recommendations to users to accept or reject, but it does not enforce automated approval routing. D: Escalation Rules operate strictly on Case records to reassign or notify based on unresolved time, and cannot manage approval workflows for contracts or opportunities.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 50,
  "statement": "Summit Equipment wants to calculate summary metrics directly on parent Account records using native declarative functionality. Which related standard child object supports native Roll-Up Summary fields on the Account object?",
  "options": [
   {
    "key": "a",
    "text": "Contact"
   },
   {
    "key": "b",
    "text": "Opportunity"
   },
   {
    "key": "c",
    "text": "Case"
   },
   {
    "key": "d",
    "text": "Task"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Accounts and Opportunities share a standard relationship that natively supports Roll-Up Summary fields on the Account object (such as calculating Total Opportunity Value or Count of Open Opportunities). **Why the other options are incorrect:** A: Account and Contact have a special lookup relationship, not a master-detail relationship; native roll-up summary fields cannot be built on Account for Contacts. C: Cases are linked to Accounts via lookup relationships, which do not natively support standard roll-up summary fields. D: Tasks are activities linked via lookup fields (WhatId/WhoId) and do not support standard native roll-up summary fields on Account.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 51,
  "statement": "Quantum Solutions needs to present different selectable values in an industry classification picklist for Sales reps versus Marketing personnel working on the same Account object. Which two administration setups accomplish this requirement? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Configure one Record Type shared across two Profiles using a single picklist field."
   },
   {
    "key": "b",
    "text": "Create two separate picklist fields assigned to distinct Page Layouts managed per profile."
   },
   {
    "key": "c",
    "text": "Assign two different Permission Sets to control picklist value visibility on a single field."
   },
   {
    "key": "d",
    "text": "Utilize two distinct Page Layouts assigned via two Record Types with custom picklist value assignments on a single picklist field."
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Option A uses standard record types to filter which picklist values are available on a single picklist field per business function. Option B uses separate custom fields placed on separate page layouts assigned to different user profiles to separate choices. **Why the other options are incorrect:** C: Permission Sets control object and field-level security (Read/Edit access), but cannot filter available picklist values on a field. D: A single record type displays the exact same picklist choices to all users assigned to it, regardless of profile.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 52,
  "statement": "Precision Tech wants customer support emails sent to vipsupport@precisiontech.com to automatically create support cases and immediately assign ownership to the VIP Escalations Queue. How should the Platform Administrator configure Salesforce to satisfy this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Write an Apex trigger on the inbound email service to update owner IDs."
   },
   {
    "key": "b",
    "text": "Create an Escalation Rule to reassign cases to the VIP Escalations Queue post-creation."
   },
   {
    "key": "c",
    "text": "Build an autolaunched flow to update record ownership after creation occurs."
   },
   {
    "key": "d",
    "text": "Configure Email-to-Case routing settings to assign incoming cases directly to the queue."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Email-to-Case allows administrators to establish specific routing addresses and configure default case attributes—including immediate queue ownership—at the moment the case is generated from an incoming email. **Why the other options are incorrect:** A: Escalation rules trigger only after a record has been created and remains unresolved over a time threshold; they do not handle initial routing on creation. C: Custom Apex triggers are unnecessary when standard Email-to-Case settings fulfill direct queue assignment declaratively. D: Using post-creation flow automation adds unnecessary complexity when Email-to-Case handles native assignment during record creation.",
  "module": "service"
 },
 {
  "simulado": 1,
  "number": 53,
  "statement": "Velocity Motors needs a automated capability in Salesforce to generate customer purchase agreements as formatted PDF documents populated with opportunity data. Standard Salesforce functionality does not meet their complex PDF document rendering needs. How should the Platform Administrator deliver this capability?",
  "options": [
   {
    "key": "a",
    "text": "Create a custom managed package in the Developer Console to render PDF files."
   },
   {
    "key": "b",
    "text": "Configure standard Email Alerts with static HTML attachments in Setup."
   },
   {
    "key": "c",
    "text": "Build a Web-to-Lead form to send opportunity data to an external PDF viewer."
   },
   {
    "key": "d",
    "text": "Download and install a document generation application from the AppExchange."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce does not offer advanced native document merging/PDF generation tools out-of-the-box. AppExchange provides market-tested, prebuilt solutions specifically designed for document generation and merging, making installation from AppExchange the standard declarative approach. **Why the other options are incorrect:** A: Standard Email Alerts send basic system templates, but they cannot dynamically compile and merge record fields into custom formatted PDF contracts. C: Creating a managed package is meant for software vendors (ISVs) distributing apps, not for internal admins implementing document generation functionality. D: Web-to-Lead captures external prospect data into Salesforce; it cannot export internal opportunity records into formatted customer contracts.",
  "module": "sales"
 },
 {
  "simulado": 1,
  "number": 54,
  "statement": "Enterprise Software uses the standard \"Rating\" picklist field on Accounts to classify partner engagement. Executives request that the field display label appear as \"Engagement Level\" across page layouts, reports, and views without altering underlying data. How should the Platform Administrator satisfy this request?",
  "options": [
   {
    "key": "a",
    "text": "Create a custom picklist field called \"Engagement Level\" and delete the standard field."
   },
   {
    "key": "b",
    "text": "Modify the API Name of the field in Object Manager."
   },
   {
    "key": "c",
    "text": "Use Rename Tabs and Labels in Setup."
   },
   {
    "key": "d",
    "text": "Create a Global Picklist Value Set."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Rename Tabs and Labels in Setup allows administrators to change the standard UI display labels of standard objects and standard fields across the application without losing existing data or modifying API names. **Why the other options are incorrect:** A: Deleting standard fields is impossible, and creating a redundant custom field requires data migration and breaks standard references. B: Standard field API names cannot be edited. D: Global Picklist Value Sets manage reusable lists of values, not UI field display labels.",
  "module": "objects"
 },
 {
  "simulado": 1,
  "number": 55,
  "statement": "AeroTech Components applies promotional discounts on parent Contract records. When a contract is marked \"Closed Active\", management wants that discount percentage automatically copied down to every child Contract Line Item. Which tool should the Platform Administrator use to achieve this automated update?",
  "options": [
   {
    "key": "a",
    "text": "Approval Process"
   },
   {
    "key": "b",
    "text": "Prebuilt Quick Action"
   },
   {
    "key": "c",
    "text": "Roll-Up Summary Field"
   },
   {
    "key": "d",
    "text": "Record-Triggered Flow"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-Triggered Flows created in Flow Builder can evaluate record status changes on a parent object and update all related child records (such as Contract Line Items) automatically without code. **Why the other options are incorrect:** A: Roll-Up Summary fields aggregate data from child records to display totals on a parent record; they cannot push values down from parent to child records. C: Approval processes manage record locking and sign-off workflows; they do not bulk-update child line items upon record status changes. D: Quick Actions require a user to click a button manually; they cannot perform automatic background data updates on related records upon field changes.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 56,
  "statement": "Leadership at Starlight Energy wants automatic email notifications sent to the executive board whenever a prospective contract exceeds $1,000,000 with a probability over 80%. Which Salesforce feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Similar Opportunities"
   },
   {
    "key": "b",
    "text": "Einstein Next Best Action"
   },
   {
    "key": "c",
    "text": "Guidance for Success"
   },
   {
    "key": "d",
    "text": "Big Deal Alerts"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Big Deal Alerts automatically trigger email notifications to designated users or email addresses when an Opportunity meets or exceeds specified amount and probability thresholds. **Why the other options are incorrect:** A: Guidance for Success provides coaching tips and best practices inside Opportunity Path stages, but does not send external alerts. B: Einstein Next Best Action displays recommended actions to logged-in users on record pages, but does not send automated threshold notifications. D: Similar Opportunities surfaces historical deals that match current deal attributes to help reps close sales, but does not trigger executive alerts.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 57,
  "statement": "A regional director at Velocity Media wants to add executive commentary, quarterly goals, and analytical context directly alongside chart widgets on an operational dashboard. How should the Platform Administrator accomplish this?",
  "options": [
   {
    "key": "a",
    "text": "Add a Rich Text component to the underlying report"
   },
   {
    "key": "b",
    "text": "Add a Text Widget to the dashboard layout"
   },
   {
    "key": "c",
    "text": "Create a custom Task assigned to dashboard viewers"
   },
   {
    "key": "d",
    "text": "Embed a Highlights Panel component"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Text Widgets on Lightning dashboards allow administrators to add titles, text explanations, dynamic context, and narrative storytelling directly onto the dashboard layout next to chart components. **Why the other options are incorrect:** B: Highlights Panels display key field values from individual object records on Lightning Record Pages, not text content on dashboards. C: Assigning tasks creates actionable work items for users, but it does not place narrative text or context onto a dashboard layout. D: Reports do not support embedded Rich Text components; formatting context must be added directly to the dashboard layout using dashboard widgets.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 58,
  "statement": "An administrator at Precision Health is creating a Screen Flow for patient intake. If \"Insurance Type\" is selected as \"Private\", a picklist field for \"Provider Name\" must be displayed and required. If \"Insurance Type\" is anything else, \"Provider Name\" must remain hidden. What is the most efficient way to configure this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Configure Conditional Visibility on the Provider Name screen component."
   },
   {
    "key": "b",
    "text": "Create a conditional display filter rule in Setup User Interface settings."
   },
   {
    "key": "c",
    "text": "Add an Assignment element for each insurance selection branch."
   },
   {
    "key": "d",
    "text": "Use a Validation Rule on the custom object definition."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional Visibility settings on Screen Flow components allow administrators to declaratively show or hide screen fields dynamically based on choices made in other fields on the same screen. **Why the other options are incorrect:** A: Using separate Assignment elements and multiple screens creates unnecessary flow branching and extra user clicks compared to component visibility. C: Validation Rules run when records are saved to the database; they cannot dynamically hide or display UI elements inside a Screen Flow. D: Global UI settings in Setup do not control dynamic visibility logic inside individual Screen Flows.",
  "module": "automation"
 },
 {
  "simulado": 1,
  "number": 59,
  "statement": "Sales representatives at Titan Manufacturing struggle to identify which active deals are most likely to close. Management wants an AI-driven tool that provides predictive deal scoring and key risk insights directly on opportunity records. What should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Einstein Search Personalization"
   },
   {
    "key": "b",
    "text": "Einstein Activity Capture"
   },
   {
    "key": "c",
    "text": "Einstein Opportunity Scoring"
   },
   {
    "key": "d",
    "text": "Einstein Lead Scoring"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Einstein Opportunity Scoring uses machine learning to analyze historical deal data, assigning each opportunity a predictive score (1-99) along with top positive and negative factors to help sales reps prioritize high-probability deals. **Why the other options are incorrect:** A: Einstein Lead Scoring scores incoming Lead records during qualification, not active Opportunity records in the pipeline. C: Einstein Search Personalization tailors global search results based on user activity, but does not score deal viability. D: Einstein Activity Capture automatically syncs emails and calendar events to Salesforce records, but does not provide predictive scoring metrics.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 60,
  "statement": "Zenith Financial wants to grant a small group of internal audit managers \"Modify All\" access to Compliance Audit records without giving them full System Administrator profiles or broad administrative setup privileges. How should the Platform Administrator implement this access?",
  "options": [
   {
    "key": "a",
    "text": "Reassign the audit managers to the top node of the Role Hierarchy."
   },
   {
    "key": "b",
    "text": "Create a custom Permission Set granting Modify All access on the object and assign it to the audit managers."
   },
   {
    "key": "c",
    "text": "Clone the standard System Administrator profile and remove Setup permissions."
   },
   {
    "key": "d",
    "text": "Edit the standard User profile permissions directly in Setup."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Best practice for extending specialized object-level permissions (such as Modify All) to a targeted subset of users is to create a custom Permission Set and assign it to those users while leaving their base profile unchanged. **Why the other options are incorrect:** A: Assigning cloned administrator profiles risks granting excessive administrative permissions and violates the principle of least privilege. B: Standard profiles cannot have object permissions modified directly. D: The Role Hierarchy controls record-level sharing visibility upward, but it does not grant object-level \"Modify All\" administrative capabilities.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 61,
  "statement": "Apex Financial deployed an AI-driven Employee Agent to assist staff with benefits questions. Management requires strict data privacy to ensure the agent never discloses executive healthcare plans or confidential benefits data to general employees. How should the Platform Administrator prevent the agent from accessing this restricted data?",
  "options": [
   {
    "key": "a",
    "text": "Route executive queries using case assignment rules away from the AI agent."
   },
   {
    "key": "b",
    "text": "Add prompt instructions to the AI agent telling it to ignore executive queries."
   },
   {
    "key": "c",
    "text": "Retrain the AI foundational model strictly on public company benefit documents."
   },
   {
    "key": "d",
    "text": "Enforce strict record sharing, object permissions, and field-level security on executive data."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, security controls (Object Permissions, Field-Level Security, and Sharing Rules) strictly enforce data access across all AI features and agents. If an AI agent's running context does not have access to restricted data, it cannot retrieve or expose that information under any circumstances. **Why the other options are incorrect:** A: Prompt instructions are guardrails, not security controls. Prompts can be bypassed via prompt injection or unexpected user phrasing; true security must be enforced at the data layer. B: Assignment rules govern ownership routing, but they do not secure underlying records from search or AI grounding if permissions are open. C: Model training improves context accuracy, but data security boundaries must be handled via Salesforce access controls, not training sets.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 62,
  "statement": "Sales executives at Nova Tech want the ability to post individual visual charts from their sales performance dashboard directly into Chatter feeds to discuss metrics with regional team members. Currently, the option to share components to Chatter is missing. What must the Platform Administrator enable in Setup to grant this functionality?",
  "options": [
   {
    "key": "a",
    "text": "Analytics Folder Viewer Sharing"
   },
   {
    "key": "b",
    "text": "Dashboard Feed Tracking"
   },
   {
    "key": "c",
    "text": "Dynamic Dashboard Running User permissions"
   },
   {
    "key": "d",
    "text": "Reporting Snapshot Subscriptions"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Enabling Dashboard Feed Tracking allows users to post snapshots of individual dashboard components directly into Chatter feeds, enabling contextual collaboration around specific charts and metrics. **Why the other options are incorrect:** B: Reporting Snapshots capture tabular report data over time into custom objects; they do not control Chatter sharing for dashboard components. C: Dynamic Dashboards control data visibility relative to the logged-in user, but do not govern Chatter sharing features. D: Folder sharing controls file access to dashboard files, but does not enable component-level Chatter posting buttons.",
  "module": "data"
 },
 {
  "simulado": 1,
  "number": 63,
  "statement": "Nova Financial uses a Private Organization-Wide Default (OWD) sharing model for Assets. A wealth manager leaves the firm and their user account is deactivated. Months later, the manager returns and is reactivated in the same role. Although re-added to default asset teams, the manager cannot view several client assets they previously accessed. What is the primary cause of this loss of access?",
  "options": [
   {
    "key": "a",
    "text": "Asset stage progression locked the records from historical team members."
   },
   {
    "key": "b",
    "text": "Reactivation automatically resets user permission sets to default values."
   },
   {
    "key": "c",
    "text": "The record type of the asset records was changed during their absence."
   },
   {
    "key": "d",
    "text": "Manual shares granted directly to the user were automatically revoked upon deactivation."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, when a user is deactivated, all manual shares granted directly to that specific user are permanently deleted. Reactivating the user account does not restore previously deleted manual shares. **Why the other options are incorrect:** B: Changing a record type alters layout assignments and picklist availability, but it does not strip individual record visibility permissions. C: Deactivating a user does not delete assigned permission sets; they remain attached to the user record upon reactivation. D: Asset stages do not alter record-level sharing access built via manual sharing.",
  "module": "config"
 },
 {
  "simulado": 1,
  "number": 64,
  "statement": "A business development executive asks how Agentforce can directly assist their inside sales organization. Which operational scenario represents a primary use case for Agentforce in a sales environment?",
  "options": [
   {
    "key": "a",
    "text": "Replacing standard static report generation for executive pipeline metrics."
   },
   {
    "key": "b",
    "text": "Automating initial Lead Qualification through conversational AI interactions."
   },
   {
    "key": "c",
    "text": "Generating physical direct-mail marketing letters for prospective clients."
   },
   {
    "key": "d",
    "text": "Autonomously executing legal contracts and binding price agreements without human oversight."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce in a sales environment excels at autonomously engaging incoming leads in conversational interactions, answering product questions using grounded company data, and qualifying prospects before routing them to human reps. **Why the other options are incorrect:** A: Agentforce assists with outreach, qualification, and context gathering, but does not execute binding legal contracts without oversight. B: Physical direct mail rendering is handled by external print/marketing fulfillment integrations, not AI conversational agents. D: Analytics and reporting tools handle metric tracking; Agentforce focuses on interactive communication workflows.",
  "module": "agentforce"
 },
 {
  "simulado": 1,
  "number": 65,
  "statement": "An administrator at Apex Global Logistics created a new custom text field, \"Special Handling Notes\", on the Asset object. The customer service manager wants this field to appear prominently in the top header summary panel (highlights panel) of the record view so agents see it immediately upon opening any Asset record. How should the Platform Administrator display this custom field in the highlights panel?",
  "options": [
   {
    "key": "a",
    "text": "Set the field as universally required and move it to the top section of the page layout."
   },
   {
    "key": "b",
    "text": "Add the field to the standard Search Layout for the Asset object."
   },
   {
    "key": "c",
    "text": "Drag the field into the Highlights Panel section on the standard Page Layout editor."
   },
   {
    "key": "d",
    "text": "Build a custom Compact Layout containing the field and assign it to the target user profiles."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Lightning Experience, the fields displayed inside the record Highlights Panel at the top of a page are driven exclusively by the assigned Compact Layout for that object. **Why the other options are incorrect:** A: Fields cannot be dragged into a highlights panel section within the standard page layout editor; compact layouts control the highlights panel. C: Making a field universally required forces users to enter data when saving, but it does not place the field in the top highlights header. D: Search layouts control column visibility in search results lists; they do not enforce data entry rules.",
  "module": "objects"
 },
 {
  "simulado": 2,
  "number": 1,
  "statement": "A sales analyst at Velocity Media wants to group multiple individual values from the Lead Industry picklist into three broad regional market categories directly within a summary report. Which reporting feature should the Platform Administrator recommend?",
  "options": [
   {
    "key": "a",
    "text": "Report Cross Filter"
   },
   {
    "key": "b",
    "text": "Bucket Column"
   },
   {
    "key": "c",
    "text": "Field Unique Count"
   },
   {
    "key": "d",
    "text": "Summary Formula"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Bucket Columns allow users to group numeric, picklist, or text values into custom categories (buckets) directly inside the report builder without creating custom fields or formulas in Setup. **Why the other options are incorrect:** B: Summary Formulas calculate numerical aggregates across report groupings, but cannot re-categorize picklist strings into text buckets. C: Cross Filters include or exclude records based on relationships with related objects; they do not group field values. D: Unique Count displays the distinct number of unique values in a column, but does not group or rename picklist choices.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 2,
  "statement": "An administrator at Crestview Logistics is converting an existing custom field on the Asset object from a Text data type to a Picklist data type. Which two impacts should the administrator keep in mind before making this field type change? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Visualforce page references and Apex code are automatically updated by Salesforce to support the new picklist format."
   },
   {
    "key": "b",
    "text": "Active Assignment Rules or Escalation Rules referencing the field may stop functioning as expected."
   },
   {
    "key": "c",
    "text": "All historical field data is automatically erased during conversion."
   },
   {
    "key": "d",
    "text": "Existing custom List Views based on this field may be deleted or invalidated."
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Changing a field data type can invalidate or remove existing List Views that filter on that field. Automation criteria (such as Assignment or Escalation Rules) relying on text string matching may fail or misbehave if field values or data types change. **Why the other options are incorrect:** B: Existing text data that matches defined picklist values is preserved; data is not automatically wiped. D: Salesforce does not automatically refactor custom Apex code or Visualforce pages when field types are modified.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 3,
  "statement": "Marketing reps at Zenith Media have entered inconsistent values in the Lead Source field (such as \"Web\", \"Website\", \"Online Store\"). The administrator needs an automated utility that runs weekly off-hours to clean up and standardize these existing values. Which Flow type should the Platform Administrator build?",
  "options": [
   {
    "key": "a",
    "text": "Record-Triggered Flow"
   },
   {
    "key": "b",
    "text": "Screen Flow"
   },
   {
    "key": "c",
    "text": "Autolaunched Flow"
   },
   {
    "key": "d",
    "text": "Schedule-Triggered Flow"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Schedule-Triggered Flows execute automatically on a defined schedule (e.g., weekly off-hours) to evaluate batches of existing records and update field values without user intervention. **Why the other options are incorrect:** A: Screen Flows require manual user interaction through UI screens. C: Record-Triggered Flows fire only when individual records are created or updated, meaning existing non-compliant data would not be cleaned up until edited. D: Autolaunched Flows without triggers must be invoked by Apex or other flows; they do not execute independently on a recurring schedule.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 4,
  "statement": "Zenith Aerospace is configuring an AI action named scheduleMaintenance that requires two inputs: aircraftID (a 15-character unique equipment identifier) and urgencyRating (a single-digit code from 1 to 5 indicating maintenance priority). According to Agentforce best practices, how should the Platform Administrator configure the input instructions for this action?",
  "options": [
   {
    "key": "a",
    "text": "aircraftID: \"Database primary key string.\" urgencyRating: \"Numeric severity level value.\""
   },
   {
    "key": "b",
    "text": "aircraftID: \"System string parameter.\" urgencyRating: \"Execution priority integer value. Execute APEX script runMaintCheck if value equals 5.\""
   },
   {
    "key": "c",
    "text": "aircraftID: \"The string representation of the tail number.\" urgencyRating: \"Optionally pass a number if available in the payload.\""
   },
   {
    "key": "d",
    "text": "aircraftID: \"The 15-character unique equipment identifier. Extract this value from conversation context or user input.\" urgencyRating: \"The single-digit numeric priority code (1 to 5). Required when aircraftID is present.\""
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Input instructions in Agentforce should clearly describe the purpose, format, and source of the input data (e.g., extracting from conversation context) and specify conditional requirements concisely without cluttering the instructions with backend code or vague placeholders. **Why the other options are incorrect:** B: Too vague; it fails to inform the AI model where to extract the data or what valid input formats look like. C: Includes technical implementation details and code execution syntax, which should be excluded from high-level natural language agent instructions. D: Lacks clear formatting constraints (such as the 1 to 5 range) and lacks explicit guidance on data retrieval.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 5,
  "statement": "Titan Defense needs a private space in Salesforce to discuss sensitive government contracts. Group managers need to invite specific team members, but non-members must be completely unable to see the group name, membership, or posts anywhere in the org. Which Chatter group type should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Private Group"
   },
   {
    "key": "b",
    "text": "Public Group"
   },
   {
    "key": "c",
    "text": "Unlisted Group"
   },
   {
    "key": "d",
    "text": "Broadcast Group"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Unlisted Chatter Groups provide complete privacy. Non-members and standard users cannot view the group in search results, see its membership list, or view any feed posts. Only group members and users with the \"Manage Unlisted Groups\" permission know the group exists. **Why the other options are incorrect:** A: Public Groups allow all internal users to view posts, join the group, and search for group content. B: Private Groups hide feed posts from non-members, but non-members can still see the group name, description, and member list in searches. D: Broadcast Groups restrict posting rights to group owners/managers, but do not hide group existence or feed content from non-members if configured publicly.",
  "module": "productivity"
 },
 {
  "simulado": 2,
  "number": 6,
  "statement": "When an Agentforce agent executes a grounding evaluation prior to generating a response, it evaluates knowledge source records, topic constraints, and functional scope. Which additional security and safety check does the agent perform during this grounding check?",
  "options": [
   {
    "key": "a",
    "text": "Web search domain verification"
   },
   {
    "key": "b",
    "text": "Database data type compatibility"
   },
   {
    "key": "c",
    "text": "Prompt injection risks"
   },
   {
    "key": "d",
    "text": "Encrypted field access validation"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "During grounding checks, Agentforce scans inputs and context for prompt injection risks—malicious or unexpected user phrasing intended to manipulate agent behavior or override safety guardrails. **Why the other options are incorrect:** A: Agentforce relies on grounded internal Salesforce data and specified tools, not live external web search domain verification. C: Schema data type compatibility is checked during flow or API execution, not during AI grounding evaluation. D: Field-level security and data encryption are enforced at the database layer prior to grounding evaluation.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 7,
  "statement": "Vertex Energy maintains an Organization-Wide Default (OWD) set to Private for Opportunity records. The executive team wants cross-functional account reps to collaborate on high-value renewable energy deals, while ensuring regional managers maintain oversight of their direct reports' pipeline. Which two features should the Platform Administrator utilize to expand access to opportunity records for these collaborative sales scenarios? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Role Hierarchy"
   },
   {
    "key": "b",
    "text": "Dynamic Permission Set Groups"
   },
   {
    "key": "c",
    "text": "Sharing Sets"
   },
   {
    "key": "d",
    "text": "Sharing Rules"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Role Hierarchy automatically grants record access upward, allowing managers and higher-level roles to view and edit opportunities owned by their subordinate team members. Sharing Rules grant access horizontally across groups, roles, or territories (e.g., sharing cross-functional deals between distinct teams) when OWD is Private. **Why the other options are incorrect:** A: Permission Sets grant object-level and field-level permissions, but cannot grant record-level sharing access to specific private records. D: Sharing Sets are exclusively used in Experience Cloud (Community) environments to grant portal users access to related records; they do not apply to internal Salesforce users.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 8,
  "statement": "An administrator is developing several custom AI agent actions that query external systems for record data: FetchCustomerProfile, FetchOrderHistory, and FetchInventoryStatus. Which naming convention best practice should the administrator follow for these action names?",
  "options": [
   {
    "key": "a",
    "text": "Prepend the word \"Salesforce\" to every action name to provide context."
   },
   {
    "key": "b",
    "text": "Remove all verbs and use only noun strings."
   },
   {
    "key": "c",
    "text": "Use random synonyms (e.g., Fetch, Get, Retrieve) across similar actions to give the AI maximum flexibility."
   },
   {
    "key": "d",
    "text": "Maintain a standardized, consistent verb prefix across action names."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Using a clear, standardized naming convention with a consistent verb prefix (such as Fetch or Get) makes action intent unambiguous for both administrative maintenance and AI reasoning models. **Why the other options are incorrect:** B: Removing verbs makes it unclear whether an action retrieves, creates, or deletes data. C: Adding redundant words like \"Salesforce\" adds unnecessary clutter without adding functional clarity. D: Mixing inconsistent verbs for identical action types introduces ambiguity and reduces predictability in AI reasoning.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 9,
  "statement": "An executive asks the Platform Administrator to identify tasks best suited for deployment with Agentforce. Which task scenario represents an optimal use case for Agentforce?",
  "options": [
   {
    "key": "a",
    "text": "Rendering static invoice PDF documents from template files"
   },
   {
    "key": "b",
    "text": "Scheduled bulk data purges executing simple criteria filters"
   },
   {
    "key": "c",
    "text": "Single-step, fixed rules-based updates with zero decision-making required"
   },
   {
    "key": "d",
    "text": "Multi-step business processes requiring reasoning and real-time adaptation to changing inputs"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce is designed for autonomous, intelligent automation capable of multi-step reasoning, contextual decision-making, and adapting actions dynamically based on ongoing conversation or data changes. **Why the other options are incorrect:** B: Generating static document templates is best handled by traditional document generation tools or standard templates. C: Simple, single-step background updates are handled more efficiently by standard record-triggered flows. D: Bulk data cleanup tasks are best performed via standard scheduled flows or data management tools.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 10,
  "statement": "An administrator at Aegis Global is reviewing custom object relationship settings. Which three statements describe characteristics of a Master-Detail relationship? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "The master parent object can be either a standard or custom object."
   },
   {
    "key": "b",
    "text": "Roll-Up Summary fields can be created on the master object to aggregate child detail data."
   },
   {
    "key": "c",
    "text": "Detail records inherit the ownership and sharing settings of the parent master record."
   },
   {
    "key": "d",
    "text": "Each custom object can support up to five Master-Detail relationship fields."
   },
   {
    "key": "e",
    "text": "Detail record security permissions are configured completely independently of the master object."
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Master objects can be standard (like Account) or custom objects. Detail records lack an independent Owner field and inherit sharing/security directly from the master record. Master-Detail relationships allow administrators to build native Roll-Up Summary fields on the parent master object. **Why the other options are incorrect:** D: Custom objects are limited to a maximum of two Master-Detail relationships, not five. E: Security access for detail records is tightly coupled to and inherited from the parent master record, not managed independently.",
  "module": "objects"
 },
 {
  "simulado": 2,
  "number": 11,
  "statement": "Vantage Real Estate is rolling out the Salesforce Mobile App to field agents. Executives want reps to immediately see a top-priority \"Hot Listings\" report dashboard as the primary landing screen whenever they open the app. What should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Add a custom Visualforce tab to the App Launcher."
   },
   {
    "key": "b",
    "text": "Add the Reports tab as the first item in the desktop Navigation Bar."
   },
   {
    "key": "c",
    "text": "Enable and customize Mobile Home for the Salesforce Mobile App."
   },
   {
    "key": "d",
    "text": "Configure standard Today View settings."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Mobile Home is the modern, customizable landing page for the Salesforce Mobile App. Administrators can configure Mobile Home cards to feature specific report charts, dynamic metrics, or key records directly on launch. **Why the other options are incorrect:** B: Desktop Navigation Bar arrangements do not automatically set the primary landing home card layout inside the mobile app experience. C: \"Today View\" is an older mobile feature focused primarily on calendar events, superseded by the customizable Mobile Home card interface. D: Custom Visualforce tabs require custom code and do not provide the native Mobile Home card landing page experience.",
  "module": "productivity"
 },
 {
  "simulado": 2,
  "number": 12,
  "statement": "The administrator at BioHealth Diagnostics is preparing a budget report for upcoming license renewals. The executive team needs to know how many total Salesforce Platform user licenses were purchased and how many remain available. Where in Setup should the Platform Administrator locate this information?",
  "options": [
   {
    "key": "a",
    "text": "Usage-Based Entitlements related list"
   },
   {
    "key": "b",
    "text": "User Management Settings"
   },
   {
    "key": "c",
    "text": "User Licenses related list under Company Information"
   },
   {
    "key": "d",
    "text": "Profile Assignment Overview"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Company Information page in Setup features a \"User Licenses\" related list that displays all purchased license types, the total count owned, used licenses, and remaining available licenses. **Why the other options are incorrect:** A: User Management Settings manage user configuration settings (like self-registration), but do not display purchased license counts. B: Usage-Based Entitlements track feature consumption metrics (like API calls or login counts), not user seat license totals. D: Profile assignments show which users hold specific profiles, but do not summarize total purchased vs. available licenses.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 13,
  "statement": "Zenith Manufacturing requires that whenever an Opportunity is updated to \"Closed Won\", all other remaining open Opportunities associated with that same Account must automatically be marked as \"Closed Lost\". Which automation solution should the Platform Administrator build?",
  "options": [
   {
    "key": "a",
    "text": "Outbound Message Action"
   },
   {
    "key": "b",
    "text": "Record-Triggered Flow in Flow Builder"
   },
   {
    "key": "c",
    "text": "Flow Orchestration"
   },
   {
    "key": "d",
    "text": "Custom Quick Action"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-Triggered Flows excel at cross-record data automation. When an Opportunity is updated to Closed Won, the flow can search for related open Opportunities on the same Account and update their status to Closed Lost. **Why the other options are incorrect:** B: Quick Actions require manual user button clicks, failing the requirement for automatic execution. C: Flow Orchestration manages complex, multi-user workflow steps and dynamic human task assignments, which is unnecessary for a straightforward field update on child records. D: Outbound Messages send XML payloads to external endpoint URLs; they do not update internal Salesforce records.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 14,
  "statement": "A sales executive at Apex Logistics complains that the standard \"Log a Call\" button is missing from the header highlights panel on the Opportunity record page in Lightning Experience. What is the reason for this missing action button?",
  "options": [
   {
    "key": "a",
    "text": "The \"Log a Call\" action is missing from the Salesforce Mobile and Lightning Experience Actions section of the assigned Page Layout."
   },
   {
    "key": "b",
    "text": "The user lacks Edit permissions on the Task object."
   },
   {
    "key": "c",
    "text": "\"Log a Call\" actions are restricted strictly to Account and Contact object record pages."
   },
   {
    "key": "d",
    "text": "The custom \"Log a Call\" administrative permission was disabled in Setup."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Lightning Experience, action buttons displayed in the highlights panel and page header are driven directly by the \"Salesforce Mobile and Lightning Experience Actions\" section of the assigned Page Layout. If an action is missing, it must be added to that section in the layout editor. **Why the other options are incorrect:** A: \"Log a Call\" is a standard global quick action, not an org-level toggle permission. C: Task permissions affect task editing, but standard quick action buttons appear on layouts based on page layout configuration. D: \"Log a Call\" is a standard action available across standard objects, including Opportunities.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 15,
  "statement": "AeroTech Systems has two distinct sales groups: Commercial Sales and Defense Sales. Each group has its own role in the Role Hierarchy, and both roles report to the same VP of Sales. The Organization-Wide Default for Accounts is Private. How should the Platform Administrator share Accounts owned by Commercial Sales with Defense Sales?",
  "options": [
   {
    "key": "a",
    "text": "Rely on vertical Role Hierarchy sharing inheritance."
   },
   {
    "key": "b",
    "text": "Instruct users to manually share each account record individually."
   },
   {
    "key": "c",
    "text": "Create an Owner-based Sharing Rule targeting Commercial Sales records and sharing them with Defense Sales."
   },
   {
    "key": "d",
    "text": "Configure a Criteria-based Sharing Rule using dynamic user formulas."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Owner-based Sharing Rules allow administrators to share records owned by users in a specific Role or Public Group with another Role or Group. This grants horizontal access between sibling roles reporting to the same manager. **Why the other options are incorrect:** B: Role Hierarchy inherits visibility upward to managers (the VP of Sales), but does not share records horizontally between peer roles (Commercial vs. Defense). C: Manual sharing is inefficient, error-prone, and unscalable for sharing team-wide account sets. D: Criteria-based sharing rules share records based on field values on the record, whereas this requirement is based on record ownership by a role group.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 16,
  "statement": "Zenith Healthcare has multiple system administrators modifying custom objects, record-triggered flows, and security profiles. Management requires an audit log detailing which administrator made configuration changes in Setup, what exact setting was altered, and when the change occurred. Which tool should the Platform Administrator use to track these administrative updates?",
  "options": [
   {
    "key": "a",
    "text": "Setup Audit Trail"
   },
   {
    "key": "b",
    "text": "Field History Tracking"
   },
   {
    "key": "c",
    "text": "Event Monitoring Logs"
   },
   {
    "key": "d",
    "text": "System Health Check"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Setup Audit Trail tracks metadata and system configuration changes made in Setup by administrators (such as modifying fields, profiles, flows, or sharing settings), recording who made the change, what was changed, and the timestamp. **Why the other options are incorrect:** A: Field History Tracking tracks changes made to field data values on individual object records, not administrative system setup changes. C: Event Monitoring tracks high-level platform usage events (like page views, exports, and logins), but does not serve as the primary audit log for setup configuration edits. D: System Health Check compares security settings against Salesforce baseline recommendations, but does not track historical administrative edits.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 17,
  "statement": "An administrator at Apex Financial is searching the Salesforce AppExchange to extend organizational capabilities without custom Apex development. Which two types of solutions can the administrator acquire and install directly from AppExchange? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Custom User Licenses"
   },
   {
    "key": "b",
    "text": "Production Sandbox Environments"
   },
   {
    "key": "c",
    "text": "Prebuilt UI Components"
   },
   {
    "key": "d",
    "text": "Certified Consulting Partners"
   }
  ],
  "correct": [
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "On AppExchange, administrators can find prebuilt applications and UI Components (such as Lightning Web Components or Flow elements) as well as directory listings for certified Salesforce Consultants. **Why the other options are incorrect:** C: User licenses must be purchased directly through Salesforce account executives or managed under Company Information in Setup; they are not purchased as AppExchange listings. D: Sandboxes are provisioned through Salesforce Setup and org licensing, not downloaded from the AppExchange directory.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 18,
  "statement": "Starlight Media wants a dynamic sales performance report where each logged-in account manager views only the client contracts they own, without requiring separate reports created for each individual manager. Which filter parameter should the Platform Administrator add to the report?",
  "options": [
   {
    "key": "a",
    "text": "Modify the Organization-Wide Default on Contracts to Public Read-Only"
   },
   {
    "key": "b",
    "text": "Store the report in a Private Report Folder for each manager"
   },
   {
    "key": "c",
    "text": "Set filter criteria to Contract Owner equals $USER"
   },
   {
    "key": "d",
    "text": "Apply a Cross Filter linking Contracts with active Users"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Using the dynamic $USER variable in a report filter (e.g., Owner equals $USER) dynamically filters report records to match the currently logged-in user running the report. **Why the other options are incorrect:** B: Saving reports in private folders prevents other users from viewing the report asset, but does not dynamically filter record rows based on ownership. C: Changing OWD alters system-wide record access and would actually broaden record visibility rather than dynamically filtering the report for the logged-in owner. D: Cross Filters evaluate relationships between parent and child objects (e.g., Accounts with Opportunities); they do not perform dynamic user substitution.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 19,
  "statement": "An administrator at AeroTech Systems is troubleshooting an automated Flow that fails to update asset values when records are saved. Which built-in Flow Builder tool should the administrator use to trace variable values, decision paths, and execution errors step-by-step?",
  "options": [
   {
    "key": "a",
    "text": "System Health Check"
   },
   {
    "key": "b",
    "text": "Setup Audit Trail"
   },
   {
    "key": "c",
    "text": "Developer Console Log Inspector"
   },
   {
    "key": "d",
    "text": "Debug button in Flow Builder"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The native Debug tool inside Flow Builder allows administrators to run flows in a test environment, inspect variable values at each node, trace execution paths, and identify exact failure points cleanly. **Why the other options are incorrect:** B: Setup Audit Trail tracks administrative metadata changes (such as creating fields or editing profiles), not runtime flow execution errors. C: System Health Check evaluates security settings against recommended baselines; it does not debug automation execution. D: Developer Console Log Inspector displays raw Apex execution logs, which is much more complex and less intuitive for debugging declarative flows than Flow Builder's built-in Debug feature.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 20,
  "statement": "Horizon Healthcare provides tailored care plans based on service contracts. Patients are assigned to Gold, Silver, or Bronze care support levels upon enrollment. What should the Platform Administrator build to ensure the appropriate Entitlement record is automatically assigned to each Account when an enrollment is finalized?",
  "options": [
   {
    "key": "a",
    "text": "An Assignment Rule targeting the Account owner"
   },
   {
    "key": "b",
    "text": "A Case Escalation Rule set to fire on Account update"
   },
   {
    "key": "c",
    "text": "A Record-Triggered Flow to create and assign Entitlements"
   },
   {
    "key": "d",
    "text": "An Auto-Response Rule linked to patient emails"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Entitlements define the level and terms of support a customer receives. Using a Record-Triggered Flow allows the system to automatically generate or associate the correct Entitlement record with an Account as soon as its contract status updates. **Why the other options are incorrect:** A: Escalation Rules evaluate and reassign aging Case records; they cannot create or assign Entitlements to Account records. B: Assignment Rules assign record ownership (for Leads or Cases), but cannot manage service Entitlement assignments. D: Auto-Response Rules send automated email templates upon lead or case submission; they do not manage Entitlement records.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 21,
  "statement": "Vantage Media requires users to enter a valid \"Campaign Source\" value whenever an Opportunity stage is set to \"Closed Won\". Which configuration should the Platform Administrator implement to enforce this rule?",
  "options": [
   {
    "key": "a",
    "text": "Configure \"Campaign Source\" as a dependent picklist driven by the Stage field."
   },
   {
    "key": "b",
    "text": "Build a Validation Rule requiring \"Campaign Source\" to be populated when stage equals \"Closed Won\"."
   },
   {
    "key": "c",
    "text": "Set the Opportunity Stage field to Read-Only on the page layout."
   },
   {
    "key": "d",
    "text": "Make the Stage field dependent on the \"Campaign Source\" field."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Validation Rules enforce conditional business rules at save time. A formula such as AND(IsWon = TRUE, ISBLANK(Campaign_Source__c)) ensures the record cannot be saved in Closed Won status without a Campaign Source. **Why the other options are incorrect:** B: Dependent picklists limit available picklist selections based on another picklist, but cannot make a field mandatory based on conditional logic. C: Setting the stage field to Read-Only prevents users from changing the stage altogether. D: Making Stage dependent on Campaign Source reverses the desired business logic and does not enforce field entry.",
  "module": "sales"
 },
 {
  "simulado": 2,
  "number": 22,
  "statement": "Wealth advisors at Vanguard Capital must contact their top tier accounts every two weeks. The VP of Client Services wants a dashboard metric displaying compliance for these recurring check-ins. What feature should the Platform Administrator configure to enable advisors to schedule these ongoing reminders easily?",
  "options": [
   {
    "key": "a",
    "text": "Process Automation Email Alerts"
   },
   {
    "key": "b",
    "text": "Time-based Workflow Tasks"
   },
   {
    "key": "c",
    "text": "Scheduled Autolaunched Flows"
   },
   {
    "key": "d",
    "text": "Recurring Tasks functionality"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Enabling Recurring Tasks allows users to create a task that automatically repeats at specified intervals (e.g., every two weeks). Completed instances generate follow-up task records, which can easily be tracked and summarized on dashboards. **Why the other options are incorrect:** A: Workflow tasks are triggered once by specific record events; they cannot create ongoing user-managed recurring calendar task schedules. B: Email alerts send emails, but do not create actionable Task records that reps can check off and track on activity dashboards. D: Autolaunched flows require custom background logic and maintenance, whereas standard Recurring Tasks fulfill the requirement natively out-of-the-box.",
  "module": "productivity"
 },
 {
  "simulado": 2,
  "number": 23,
  "statement": "Zenith Logistics captures shipping regions on incoming prospects using a custom picklist field on the Lead object named Shipping Region. After lead conversion, managers notice that the selected shipping region value is missing from the resulting Contact records. Which two steps should the Platform Administrator take to ensure this value transfers to the Contact record upon lead conversion? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Define a matching custom picklist field on the Contact object."
   },
   {
    "key": "b",
    "text": "Create an Autolaunched Flow to copy the picklist string upon record save."
   },
   {
    "key": "c",
    "text": "Map the Lead picklist field to the Contact picklist field within Lead Conversion Field Mapping."
   },
   {
    "key": "d",
    "text": "Set the Lead picklist field to Universally Required on the object layout."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To transfer custom lead data upon conversion, a target custom field of a compatible data type must exist on the target object (Contact). Once the field exists on Contact, the administrator must configure Lead Conversion Field Mapping in Object Manager to explicitly map the Lead picklist field to the Contact picklist field. **Why the other options are incorrect:** B: Custom lead conversion field mapping handles data transfer natively without needing custom flows or background Apex automation. D: Marking a field required ensures data entry on the Lead record, but does not map or transfer the field value to the Contact object during conversion.",
  "module": "sales"
 },
 {
  "simulado": 2,
  "number": 24,
  "statement": "Vantage Systems must comply with strict financial privacy laws requiring that employee financial records are accessible only to the specific account owner and designated payroll managers. How should the Platform Administrator enforce baseline data security for the custom Financial Record object?",
  "options": [
   {
    "key": "a",
    "text": "Configure the Organization-Wide Default (OWD) to Public Read-Only."
   },
   {
    "key": "b",
    "text": "Set the Organization-Wide Default (OWD) for the object to Private."
   },
   {
    "key": "c",
    "text": "Write an Apex trigger to hide fields on page layouts."
   },
   {
    "key": "d",
    "text": "Build custom reports filtered by Owner equals $USER."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Setting the Organization-Wide Default (OWD) to Private establishes the baseline security model where users can only view records they own (or those explicitly shared via role hierarchy or sharing rules), satisfying privacy requirements. **Why the other options are incorrect:** A: Report filters restrict what data is displayed on a specific report, but do not prevent users from accessing or editing records through global search, list views, or APIs. C: Public Read-Only allows all internal users in the company to view every record, violating the financial data privacy requirement. D: Apex triggers run on database events; hiding layout fields is managed via page layouts or field-level security, but record access must be secured via OWD sharing settings.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 25,
  "statement": "A logistics manager at Nova Global attempted to log in with an incorrect password multiple times and is now locked out of Salesforce. Which two actions can the Platform Administrator perform on the user's record detail page to assist the user? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Click the Reset Password button"
   },
   {
    "key": "b",
    "text": "Log in as the user to bypass password policies"
   },
   {
    "key": "c",
    "text": "Deactivate and immediately reactivate the user account"
   },
   {
    "key": "d",
    "text": "Click the Unlock button"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Clicking Unlock clears the lockout status without changing the password, allowing the user to attempt logging in again with their existing credentials. Clicking Reset Password unlocks the account and sends a password reset link directly to the user's email address. **Why the other options are incorrect:** C: Administrators cannot use the \"Login As\" feature when a user account is locked out. D: Deactivating and reactivating a user account does not clear invalid login attempt counters or reset locked statuses.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 26,
  "statement": "An account executive at Crestview Financial is taking a 3-month sabbatical. Leadership wants to prevent the executive from logging into Salesforce while away, without deactivating the user record or disrupting historical record ownership and processes. What action should the Platform Administrator take?",
  "options": [
   {
    "key": "a",
    "text": "Reassign the user's license to another active user."
   },
   {
    "key": "b",
    "text": "Freeze the user account from the User detail page."
   },
   {
    "key": "c",
    "text": "Deactivate the user account in Setup."
   },
   {
    "key": "d",
    "text": "Set Profile Login Hours to block logins."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Freezing a user account immediately blocks access to Salesforce without deactivating the record, maintaining record ownership, workflow assignments, and team roles during a temporary absence. **Why the other options are incorrect:** A: Deactivating a user revokes access permanently, removes manual sharing, and can disrupt processes where the user is referenced (e.g., default owners or workflow alerts). C: Restricting Login Hours on a profile affects all users assigned to that profile, not just the individual on leave. D: Licenses cannot be reassigned without deactivating the user, which violates the requirement to preserve active ownership and associations.",
  "module": "config"
 },
 {
  "simulado": 2,
  "number": 27,
  "statement": "Apex Health has three distinct patient intake teams using a custom field Intake Team on Cases. The department manager wants a single Case Analytics dashboard that can be dynamically filtered to view metrics for any of the three teams. How should the Platform Administrator fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Create three duplicate dashboards, one for each intake team."
   },
   {
    "key": "b",
    "text": "Enable Dashboard Feed Tracking for team Chatter groups."
   },
   {
    "key": "c",
    "text": "Add Cross Filters to the source report definitions."
   },
   {
    "key": "d",
    "text": "Add a Dashboard Filter based on the custom Intake Team field."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Dashboard Filters allow users to dynamically filter all components on a single dashboard using specific field criteria (such as Intake Team), eliminating the need to build and maintain multiple dashboard assets. **Why the other options are incorrect:** A: Maintaining separate dashboard copies increases administrative maintenance and report clutter. B: Cross Filters are used inside report builders to include or exclude parent records based on child record relationships; they do not filter dashboard components dynamically. D: Dashboard Feed Tracking enables Chatter collaboration on components, but does not provide dynamic data filtering.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 28,
  "statement": "A Platform Administrator deactivates an active AI Agent in Setup to update its prompt instructions while several customers are actively chatting with the agent on the corporate website. What happens to these ongoing active chat sessions upon agent deactivation?",
  "options": [
   {
    "key": "a",
    "text": "Ongoing conversations continue uninterrupted using the agent session version active when the chat began."
   },
   {
    "key": "b",
    "text": "The chat window forcibly closes for all users immediately."
   },
   {
    "key": "c",
    "text": "Ongoing conversations pause automatically until the administrator reactivates the agent."
   },
   {
    "key": "d",
    "text": "An automated system error message is dispatched to active chat users."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Deactivating an agent prevents new chat sessions from starting, but active, ongoing user sessions continue using the active agent version established at session initiation until the conversation concludes. **Why the other options are incorrect:** B: Deactivation does not forcibly disconnect active user sessions in progress. C: Chat sessions do not enter a paused state during setup deactivation. D: Ongoing active sessions do not generate system error alerts simply because the administrative setup toggle was changed.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 29,
  "statement": "Velocity Global operates support call centers in London (GMT) and Tokyo (JST). Representatives in London work from 9:00 AM to 5:00 PM GMT, while Tokyo representatives work from 9:00 AM to 5:00 PM JST. How should the Platform Administrator configure Business Hours to ensure case escalation timers calculate correctly for both regions?",
  "options": [
   {
    "key": "a",
    "text": "Set temporary daily business hours overrides on the Case object."
   },
   {
    "key": "b",
    "text": "Create separate Business Hours definitions for GMT and JST time zones."
   },
   {
    "key": "c",
    "text": "Adjust the default corporate business hours to span a continuous 24-hour window."
   },
   {
    "key": "d",
    "text": "Instruct representatives to set their working hours manually in their personal preferences."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce allows administrators to configure multiple Business Hours definitions in Setup. Creating separate Business Hours records for GMT and JST allows case escalation rules and SLAs to evaluate accurate operational hours based on regional shifts. **Why the other options are incorrect:** B: Setting a single 24-hour schedule forces escalation timers to run continuously overnight when representatives are offline, causing false SLA breaches. C: Personal user settings set display time zones, but do not govern organizational Business Hours used by escalation rules and entitlements. D: Temporary overrides are meant for single-day holidays or special office closures, not standard regional time zone schedules.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 30,
  "statement": "Crestview Media wants sales representatives to track key client stakeholders (such as Executive Sponsor, Technical Evaluator, and Legal Sign-off) on individual deal records to improve deal oversight. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Contact Roles on Opportunities"
   },
   {
    "key": "b",
    "text": "Opportunity Team Members"
   },
   {
    "key": "c",
    "text": "Account Stakeholder Lookups"
   },
   {
    "key": "d",
    "text": "User-Account Junction Object"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Opportunity Contact Roles allow sales reps to associate external Contact records with a specific Opportunity and assign explicit roles (e.g., Decision Maker, Evaluator, Executive Sponsor) to define their involvement in the deal. **Why the other options are incorrect:** B: Opportunity Teams track internal team members (employees) collaborating on a deal, not external client contacts or stakeholders. C: Creating a custom user-account junction object links internal users to accounts, but does not manage deal-specific external contact roles. D: Custom lookups on Account limit relationships to static single fields on the account level, failing to support multiple stakeholder roles per specific opportunity deal.",
  "module": "sales"
 },
 {
  "simulado": 2,
  "number": 31,
  "statement": "Titan Logistics is undergoing a brand refresh. The administrator needs to customize the Salesforce mobile app to align with company branding. Which two elements can the Platform Administrator customize in Mobile App Branding settings? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Header background color"
   },
   {
    "key": "b",
    "text": "Popup modal header color"
   },
   {
    "key": "c",
    "text": "Record page background theme"
   },
   {
    "key": "d",
    "text": "Loading page brand logo"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Mobile App Branding in Setup allows administrators to customize specific visual elements of the mobile app experience, including the Header Background Color and the Loading Page Logo. **Why the other options are incorrect:** C: Popup modal header styling is standardized across the Salesforce mobile app and cannot be customized via branding settings. D: Individual record page canvas colors follow fixed system themes and cannot be assigned custom colors.",
  "module": "productivity"
 },
 {
  "simulado": 2,
  "number": 32,
  "statement": "During an agentic reasoning loop, an AI agent attempts multiple task execution paths to resolve a complex user request, but all attempted tasks produce unsatisfactory or incomplete results. What is the next step the AI agent performs in the agentic loop?",
  "options": [
   {
    "key": "a",
    "text": "Automatically force a complete session termination."
   },
   {
    "key": "b",
    "text": "Display an immediate fatal system crash error."
   },
   {
    "key": "c",
    "text": "Request additional information or clarification from the user."
   },
   {
    "key": "d",
    "text": "Generate a completely fabricated answer to satisfy the query."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When an agentic loop encounters unsatisfactory task execution attempts due to missing context or ambiguous parameters, the agent prompts the user for additional information or clarification to adjust its execution path safely. **Why the other options are incorrect:** A: AI agents are designed to handle unexpected outcomes conversationally rather than throwing system error crashes. C: Terminating the session abruptly destroys customer satisfaction without attempting resolution. D: Grounding guardrails explicitly prevent agents from fabricating ungrounded information when execution tasks fail.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 33,
  "statement": "Sales representatives at Starlight Energy need to launch an interactive, multi-step rebate calculator from a button on Opportunity records to collect client inputs and compute estimated energy savings. Which automation tool should the Platform Administrator use to build this interactive calculator interface?",
  "options": [
   {
    "key": "a",
    "text": "Platform Event"
   },
   {
    "key": "b",
    "text": "Flow Orchestration"
   },
   {
    "key": "c",
    "text": "Flow Builder (Screen Flow)"
   },
   {
    "key": "d",
    "text": "Quick Text"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Screen Flows built in Flow Builder provide interactive user interfaces (screens) capable of collecting user input, executing dynamic calculations, and updating records, which can easily be launched via custom buttons. **Why the other options are incorrect:** B: Platform Events handle event-driven asynchronous messaging between systems; they do not render interactive UI screens. C: Flow Orchestration coordinates complex, multi-user work tasks across departments, which is unnecessary for a single-user interactive UI calculator. D: Quick Text inserts predefined text snippets into messages, emails, and tasks, but cannot execute calculations or host interactive screens.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 34,
  "statement": "A sales manager at Titan Manufacturing wants sales representatives to have an interactive, visual pipeline management view where they can quickly inspect deals closing this month and update deal stages by dragging cards across columns. What should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Enable Sales Console and instruct reps to open separate workspace tabs for each deal."
   },
   {
    "key": "b",
    "text": "Build a custom Sales Dashboard containing interactive gauge widgets."
   },
   {
    "key": "c",
    "text": "Create an Opportunity List View filtered for this month and advise users to switch to the Kanban view."
   },
   {
    "key": "d",
    "text": "Schedule a daily Opportunity pipeline report to be emailed to reps each morning."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Kanban view turns any standard Opportunity List View into an interactive visual board organized by columns (such as Stage). Sales reps can drag and drop record cards between columns to instantly update stages. **Why the other options are incorrect:** B: Dashboards present high-level charts and metrics, but do not allow direct inline editing or drag-and-drop record updates. C: Opening individual tabs in Sales Console allows reps to edit records one by one, but lacks a consolidated visual drag-and-drop pipeline board. D: Emailing static scheduled report snapshots delivers passive data, but does not provide an interactive UI for updating records.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 35,
  "statement": "Meridian Health is deploying Agentforce Service Agents to assist customer service reps with patient case management. What is the most critical architectural prerequisite to ensure the agent has a complete, real-time, unified view of customer data across all touchpoints?",
  "options": [
   {
    "key": "a",
    "text": "Configuring Email-to-Case routing addresses"
   },
   {
    "key": "b",
    "text": "Ensuring Data Cloud is fully implemented and connected"
   },
   {
    "key": "c",
    "text": "Designing custom Utility Bar components"
   },
   {
    "key": "d",
    "text": "Assigning custom user profiles to the agent"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Cloud unifies customer data from disparate systems into a real-time profile, serving as the foundational data layer (grounding data) that allows Agentforce to operate with complete customer context. **Why the other options are incorrect:** A: Email-to-Case ingests email inquiries into case records, but does not aggregate or unify enterprise customer profiles across systems. C: Profile assignments manage permissions, but do not unify customer data across touchpoints. D: Utility Bar components provide UI shortcuts for human users, but have no impact on AI agent data grounding.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 36,
  "statement": "AeroTech Systems needs an approval process feature that allows submitters or administrators to reverse a pending approval submission and unlock the record for further editing prior to manager review. Which approval process action should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Recall Actions"
   },
   {
    "key": "b",
    "text": "Final Rejection Actions"
   },
   {
    "key": "c",
    "text": "Delegation Actions"
   },
   {
    "key": "d",
    "text": "Initial Submission Actions"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Recall Actions are explicitly executed when a user or administrator recalls (withdraws) a submitted approval request. Recalling the request unlocks the record and returns it to an editable state. **Why the other options are incorrect:** A: Initial Submission Actions execute when the record is first submitted into the approval workflow. C: Final Rejection Actions execute only after an approver formally rejects the approval request. D: \"Delegation Actions\" is not a standard approval process action category in Salesforce.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 37,
  "statement": "The sales team at Velocity Media wants a visual interface to manage their active deal pipeline. They need to view all open opportunities grouped into columns by stage, see total value per stage column, and update deal stages by dragging cards across the screen. Which feature should the Platform Administrator recommend?",
  "options": [
   {
    "key": "a",
    "text": "Custom Report with summary groupings"
   },
   {
    "key": "b",
    "text": "Sales Console workspace tabs"
   },
   {
    "key": "c",
    "text": "Opportunity Kanban View"
   },
   {
    "key": "d",
    "text": "Custom Dashboard containing pipeline donut charts"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Kanban View presents list view records as visual card tiles organized into stage columns. Users can see column totals and drag-and-drop cards between columns to update stage values instantly. **Why the other options are incorrect:** A: Dashboards display high-level visual charts, but do not allow inline record editing or drag-and-drop stage progression. C: Sales Console opens multiple record tabs for navigation, but does not provide a visual drag-and-drop column board for pipeline management. D: Reports summarize data and calculate totals, but are read-only views that do not support interactive drag-and-drop stage updates.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 38,
  "statement": "Summit Insurance needs an automated process to change the owner of policy inquiry cases from general support to the High-Priority Queue if the ticket remains unaddressed for longer than 5 business days. Which Salesforce feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Validation Rules"
   },
   {
    "key": "b",
    "text": "Escalation Rules"
   },
   {
    "key": "c",
    "text": "Case Assignment Rules"
   },
   {
    "key": "d",
    "text": "Auto-Response Rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Escalation Rules evaluate open case records against specified time criteria (such as 5 days without resolution or update) and automatically trigger actions, such as reassigning record ownership or sending email notifications. **Why the other options are incorrect:** A: Case Assignment Rules determine ownership only at the exact moment of record creation; they cannot reassign records based on elapsed time. B: Auto-Response Rules automatically send email templates to customers upon ticket creation, but cannot reassign record ownership. C: Validation Rules prevent records from saving if data entry criteria are violated; they do not perform automated ownership reassignments.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 39,
  "statement": "An administrator is configuring an Agentforce action named cancelSubscription to terminate customer streaming plans upon request. Which set of Action Instructions follows Agentforce best practices?",
  "options": [
   {
    "key": "a",
    "text": "\"Cancels everything in the account whenever a user mentions billing or money.\""
   },
   {
    "key": "b",
    "text": "\"Updates subscription status. Used for any user interaction involving account changes.\""
   },
   {
    "key": "c",
    "text": "\"Use this action to cancel a customer's active subscription plan. Execute this action only when the user explicitly requests to terminate or end their subscription.\""
   },
   {
    "key": "d",
    "text": "\"System execution node: execute APEX controller cancelSubscription to update SQL table.\""
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce action instructions should clearly state what the action does, specify its business objective, and provide unambiguous criteria for when the AI agent should invoke it, without using internal code jargon. **Why the other options are incorrect:** A: Includes backend code syntax and developer terminology, which should be avoided in natural language instructions. C: Too broad and aggressive; triggering cancellation whenever \"billing\" is mentioned risks cancelling accounts during routine invoice inquiries. D: Vague and non-specific, giving the model insufficient context regarding when cancellation is appropriate.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 40,
  "statement": "An administrator at Precision Health is writing a prompt template for an AI agent designed to assist support reps in resolving technical equipment issues. Following prompt design best practices, how should the administrator draft the prompt instructions?",
  "options": [
   {
    "key": "a",
    "text": "Write concise instructions using clear, natural language to guide AI generation steps."
   },
   {
    "key": "b",
    "text": "Keep instructions high-level and abstract so the model produces creative interpretations."
   },
   {
    "key": "c",
    "text": "Draft overly complex nested conditional clauses covering every possible system edge case."
   },
   {
    "key": "d",
    "text": "Use dense, non-standard technical abbreviations to minimize character counts."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Best practices for writing prompt templates emphasize clear, concise, natural language instructions that specify the task context, expected output structure, and persona without introducing unnecessary complexity. **Why the other options are incorrect:** B: Highly complex, deeply nested instructions can confuse language models and lead to unpredictable or incomplete outputs. C: Cryptic abbreviations reduce clarity for both the LLM and administrative teams who maintain the prompt templates. D: Abstract or vague prompts encourage hallucination and ungrounded responses rather than accurate instructions.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 41,
  "statement": "When an Approval Process assigns an approval step to a Queue instead of an individual user, how does Salesforce handle the approval decision?",
  "options": [
   {
    "key": "a",
    "text": "Unanimous approval from every single member of the queue is required before the step completes."
   },
   {
    "key": "b",
    "text": "Approval steps assigned to queues can only execute on custom objects."
   },
   {
    "key": "c",
    "text": "Queue members are blocked from taking action until the queue owner approves."
   },
   {
    "key": "d",
    "text": "Any single member of the queue can approve or reject the record on behalf of the queue."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a queue is assigned as an approver in an approval process, any member of that queue can perform the approval or rejection action, and their decision applies to the entire queue entity for that step. **Why the other options are incorrect:** A: Queue approvals do not require unanimous sign-off; the first queue member to act completes the approval step. B: All queue members receive notification and have equal authority to approve or reject the request. C: Queues can act as approvers for any object that supports approval processes, including standard and custom objects.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 42,
  "statement": "A regional manager at Crestview Financial attempts to approve a submitted discount request, but Salesforce throws a system error preventing the sign-off. What should the Platform Administrator check first when troubleshooting this approval failure?",
  "options": [
   {
    "key": "a",
    "text": "Update field-level security for all fields modified during the approval steps to Read-Only."
   },
   {
    "key": "b",
    "text": "Ensure the manager has delegated approver status assigned in their user settings."
   },
   {
    "key": "c",
    "text": "Verify whether the designated next approver user account is inactive or missing."
   },
   {
    "key": "d",
    "text": "Check if the fields updated by the approval process are hidden on the manager's page layout."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Approval processes fail if the workflow attempts to route the record to a next approver who has been deactivated, deleted, or left unassigned in the approval step parameters. **Why the other options are incorrect:** B: Page layout visibility does not prevent backend automated field updates or approval process routing from executing. C: Delegated approvers are optional alternative reviewers; lacking a delegate does not break normal approval steps. D: Approval processes run in system context, meaning field-level security settings do not block approval execution.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 43,
  "statement": "The VP of Sales at Titan Global wants to project expected quarterly revenue for future fiscal quarters and evaluate individual sales representative performance against assigned targets. Which two features should the Platform Administrator configure? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Opportunity Kanban Views"
   },
   {
    "key": "b",
    "text": "Similar Opportunities"
   },
   {
    "key": "c",
    "text": "Collaborative Forecasting"
   },
   {
    "key": "d",
    "text": "Sales Quotas"
   }
  ],
  "correct": [
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Collaborative Forecasting predicts expected revenue based on deal amounts, stages, and close dates across fiscal quarters. Sales Quotas store individual target goals for reps, allowing management to compare predictions against targets. **Why the other options are incorrect:** B: Kanban views provide a visual board for managing active list view records, but do not project future revenue across quarters or benchmark against quota targets. D: Similar Opportunities surface matching historical deals for coaching, but do not calculate financial forecasts or track quota targets.",
  "module": "sales"
 },
 {
  "simulado": 2,
  "number": 44,
  "statement": "Starlight Energy maintains a Private Organization-Wide Default (OWD) model for Opportunities. Management wants to deploy a company-wide dashboard displaying total open pipeline revenue so all sales reps can see corporate progress toward annual goals. How should the Platform Administrator configure the dashboard without modifying OWD settings?",
  "options": [
   {
    "key": "a",
    "text": "Modify folder sharing to grant \"Manage\" permissions to all sales reps"
   },
   {
    "key": "b",
    "text": "Create a Dynamic Dashboard set to \"Run as logged-in user\""
   },
   {
    "key": "c",
    "text": "Add a dashboard filter that overrides record-level security rules"
   },
   {
    "key": "d",
    "text": "Set the dashboard Running User to an executive who has visibility into all opportunities"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Setting a fixed Running User (such as an executive or admin who has access to all opportunities) allows the dashboard component to display aggregated enterprise metrics to all viewers regardless of their individual record-level OWD restrictions. **Why the other options are incorrect:** A: Setting the dashboard to run as the logged-in user restricts each viewer to seeing only the opportunities they personally own, preventing them from seeing company-wide pipeline totals. C: Folder permissions dictate who can open or edit the dashboard file, but do not grant record-level data visibility inside dashboard components. D: Dashboard filters narrow the displayed data set; they cannot override or expand underlying database sharing rules.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 45,
  "statement": "Apex Logistics requires an automated background job to execute every Sunday midnight to count the number of open shipments on each Account and update a custom summary field. Which type of flow should the Platform Administrator build in Flow Builder?",
  "options": [
   {
    "key": "a",
    "text": "Record-Triggered Flow"
   },
   {
    "key": "b",
    "text": "Autolaunched Flow (No Trigger)"
   },
   {
    "key": "c",
    "text": "Screen Flow"
   },
   {
    "key": "d",
    "text": "Schedule-Triggered Flow"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Schedule-Triggered Flows run automatically at specified times and recurring intervals (e.g., weekly on Sundays at midnight) to process batch updates across specified sets of records without user interaction. **Why the other options are incorrect:** A: Record-Triggered Flows execute immediately when individual records are created, updated, or deleted; they do not run on a time-based calendar schedule. C: Autolaunched Flows without triggers must be explicitly called by other automation (such as Apex or another flow); they cannot self-execute on a scheduled calendar timer. D: Screen Flows require interactive human user input through UI screens and cannot execute background batch jobs.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 46,
  "statement": "Beacon Health needs cases automatically reassigned to the Tier 2 Support Queue if they remain unaddressed for longer than 4 hours, to prevent Service-Level Agreement (SLA) breaches. Which standard Salesforce feature fulfills this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Case Assignment Rules"
   },
   {
    "key": "b",
    "text": "Case Escalation Rules"
   },
   {
    "key": "c",
    "text": "Omni-Channel Routing Profiles"
   },
   {
    "key": "d",
    "text": "Auto-Response Rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Case Escalation Rules evaluate open case records against specified time criteria (such as 4 hours of inactivity) and automatically execute reassignment actions to escalate the case to designated queues or managers. **Why the other options are incorrect:** A: Auto-Response Rules send automatic email responses to customers upon case submission; they do not reassign record ownership based on SLA timers. C: Case Assignment Rules route cases upon initial record creation, but do not reassign cases after elapsed time. D: Omni-Channel assigns incoming work items to available online agents based on capacity, but does not manage delayed SLA escalation rules.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 47,
  "statement": "Nova Logistics is onboarding 20 new support representatives assigned to a custom Support Profile. Representatives need access to the Service Console to manage incoming cases, but currently cannot view console functionality. How should the Platform Administrator grant console access to these representatives?",
  "options": [
   {
    "key": "a",
    "text": "Reassign users to the standard Salesforce Platform profile."
   },
   {
    "key": "b",
    "text": "Assign the Service Cloud User feature license on the User detail page."
   },
   {
    "key": "c",
    "text": "Build a new custom App Page in Lightning App Builder."
   },
   {
    "key": "d",
    "text": "Create a Permission Set granting API access to cases."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Access to Service Cloud features—including the Service Console, Knowledge, and Entitlements—requires the \"Service Cloud User\" feature license enabled on the individual user's detail record. **Why the other options are incorrect:** A: Building an App Page creates a custom UI canvas, but does not grant Service Cloud feature rights or console capabilities. B: Permission sets grant functional object/field permissions, but cannot grant feature license entitlements required for Service Console. D: Salesforce Platform profiles do not support standard CRM objects like Cases or Service Console features.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 48,
  "statement": "Aegis Capital requires that all deals valued above $250,000 undergo a strict sign-off process. First, the account executive's direct manager must approve, followed by the finance director, for a total of two sequential approvals. How should the Platform Administrator implement this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Add a validation rule enforcing manual signature updates."
   },
   {
    "key": "b",
    "text": "Configure an Approval Process with specific entry criteria and step-by-step approvers."
   },
   {
    "key": "c",
    "text": "Build a Record-Triggered Flow Orchestration managing multi-user tasks."
   },
   {
    "key": "d",
    "text": "Create a Screen Flow launched from a custom record action button."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Approval Processes are designed for sequential, multi-step review workflows where records are locked, evaluated against entry criteria, and routed to specific approvers (e.g., Manager, then Finance Director). **Why the other options are incorrect:** B: Screen Flows guide users through data entry, but do not provide formal record locking, step sign-off tracking, or approval routing. C: Flow Orchestration coordinates complex multi-stage work across departments, but an Approval Process is the standard, declarative tool for simple sequential record sign-offs. D: Validation Rules enforce data entry during saving; they cannot route records for approval or manage approver notifications.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 49,
  "statement": "Sales leadership at SolarPulse wants sales representatives to receive automated periodic nudges prompting them to review and update their active deals in the pipeline without requiring manual manager follow-ups. Which standard Salesforce feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Subscribe reps to a weekly pipeline report folder."
   },
   {
    "key": "b",
    "text": "Set up Big Deal Alerts for active opportunities."
   },
   {
    "key": "c",
    "text": "Enable Opportunity Update Reminders in Setup."
   },
   {
    "key": "d",
    "text": "Configure a Schedule-Triggered Flow to send Chatter notifications every Monday."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Opportunity Update Reminders automatically send scheduled email notifications to sales representatives prompting them to inspect and update their open opportunities, keeping pipeline data accurate and current. **Why the other options are incorrect:** A: While a flow can be built, Opportunity Update Reminders is an out-of-the-box native feature specifically designed for this purpose without flow maintenance. C: Big Deal Alerts notify managers or reps when an individual deal reaches a specific financial threshold, rather than prompting routine pipeline updates. D: Subscribing users to report folders emails a static data snapshot, but does not provide an automated reminder workflow for deal maintenance.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 50,
  "statement": "Nova Care wants to ensure patient support tickets are not left unattended. If an open ticket receives no response from an assigned agent for more than 3 hours after creation, a notification must immediately be sent to the department supervisor. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Formula Fields with Email Alerts"
   },
   {
    "key": "b",
    "text": "Auto-Response Rules"
   },
   {
    "key": "c",
    "text": "Case Escalation Rules"
   },
   {
    "key": "d",
    "text": "Case Assignment Rules"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Case Escalation Rules monitor open cases against specified time thresholds (e.g., 3 hours without an update) and automatically trigger actions such as notifying managers or reassigning ownership. **Why the other options are incorrect:** B: Case Assignment Rules route cases immediately upon record creation; they do not evaluate elapsed time or send notifications for aging tickets. C: Auto-Response Rules send instant automated emails to ticket submitters upon record creation, not delayed alerts to supervisors. D: Formula fields calculate values dynamically on page render, but cannot independently evaluate time delays or trigger automated email alerts in the background.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 51,
  "statement": "Support representatives at Titan Manufacturing report that the Case record view contains too many irrelevant field sections and components, making it difficult to find critical case details during customer calls. How should the Platform Administrator make the record page cleaner and more contextually dynamic?",
  "options": [
   {
    "key": "a",
    "text": "Configure Component Visibility filters to display components conditionally based on case status or user role."
   },
   {
    "key": "b",
    "text": "Permanently remove all related list components from the page layout."
   },
   {
    "key": "c",
    "text": "Add tab components containing all object fields."
   },
   {
    "key": "d",
    "text": "Delete the Case detail component from the Lightning page canvas."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Component Visibility filters allow administrators to dynamically display components only when specific criteria are met (e.g., showing a technical section only when Case Type = Technical or User Role = Specialist), keeping the page uncluttered. **Why the other options are incorrect:** A: Permanently removing related lists strips necessary functionality for users who rely on those related records. B: Deleting the Record Detail component removes access to record fields entirely. C: Adding tabs organizes components into tabs, but does not dynamically hide or streamline components based on record context or user roles.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 52,
  "statement": "Sales managers at SolarTech want representatives to see stage-specific key fields and operational guidance highlighted at the top of the record as deals progress through the sales pipeline. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Workflow Field Updates"
   },
   {
    "key": "b",
    "text": "Sales Processes picklist assignments"
   },
   {
    "key": "c",
    "text": "Path Key Fields and Guidance for Success"
   },
   {
    "key": "d",
    "text": "Dynamic Forms field sections"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Opportunity Path allows administrators to highlight up to five Key Fields and provide customized \"Guidance for Success\" (tips, links, policy reminders) for each specific stage of the sales pipeline. **Why the other options are incorrect:** A: Dynamic Forms organize fields on record detail pages, but do not provide stage-based guidance banners at the top of the record layout. B: Workflow Field Updates modify field values in the background; they do not display visual guidance to users. D: Sales Processes define which stage picklist choices are available, but do not configure Key Fields or Guidance for Success text.",
  "module": "sales"
 },
 {
  "simulado": 2,
  "number": 53,
  "statement": "A user at Horizon Education cannot log or associate Tasks with records of a custom object called TrainingCourse. What must the Platform Administrator configure in Object Manager to allow task tracking on this custom object?",
  "options": [
   {
    "key": "a",
    "text": "Enable the \"Allow Activities\" checkbox on the TrainingCourse object definition."
   },
   {
    "key": "b",
    "text": "Create a Sharing Rule granting Read/Write access on Tasks."
   },
   {
    "key": "c",
    "text": "Update user profile permissions for the Task object."
   },
   {
    "key": "d",
    "text": "Add the Open Activities related list to the page layout."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, for tasks and events (activities) to be linked to a custom object, the \"Allow Activities\" checkbox must be selected in the custom object's settings within Object Manager. **Why the other options are incorrect:** A: Adding related lists displays existing linked activities, but users cannot create or link new tasks until \"Allow Activities\" is enabled on the object. C: Sharing rules control record-level access; they do not enable activity capabilities on custom object schemas. D: User permissions grant access to the Task object itself, but cannot override object schema settings that disallow activities.",
  "module": "productivity"
 },
 {
  "simulado": 2,
  "number": 54,
  "statement": "Starlight Solar wants unassigned support cases that remain open for longer than 2 hours to automatically transfer to an Urgent Response Queue and send an alert email to the support manager. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Case Assignment Rules"
   },
   {
    "key": "b",
    "text": "Scheduled Report Alerts"
   },
   {
    "key": "c",
    "text": "Auto-Response Rules"
   },
   {
    "key": "d",
    "text": "Case Escalation Rules"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Case Escalation Rules monitor open cases against defined time criteria (e.g., 2 hours unresolved) and automatically execute actions, such as reassigning ownership to a queue and alerting management. **Why the other options are incorrect:** A: Assignment Rules assign records immediately upon initial creation, but do not monitor aging records or reassign them after a time delay. B: Auto-Response Rules send immediate automated emails to ticket submitters upon creation, but cannot reassign cases based on time elapsed. D: Scheduled report alerts notify users via email, but cannot automatically alter case record ownership in the database.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 55,
  "statement": "An administrator at Summit Logistics is converting a custom field's data type from Auto-Number to Text. What will happen to the data stored in existing records after this type conversion?",
  "options": [
   {
    "key": "a",
    "text": "Existing values in the field are permanently erased."
   },
   {
    "key": "b",
    "text": "The system generates an error preventing conversion if data exists."
   },
   {
    "key": "c",
    "text": "Existing values are automatically padded with leading zeroes."
   },
   {
    "key": "d",
    "text": "Existing field values remain unchanged as text strings."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Converting an Auto-Number field to a Text field preserves all existing data values as plain text strings. Future auto-numbering stops, but existing data is retained. **Why the other options are incorrect:** A: Salesforce preserves data during supported field conversions rather than wiping existing values. C: Converting Auto-Number to Text is fully supported by Salesforce even when records contain existing data. D: Salesforce does not retroactively alter or pad existing values during field conversion.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 56,
  "statement": "Horizon Financial maintains a custom object LoanApplication linked to a child custom object LoanDocument via a Master-Detail relationship. The administrator wants to convert this relationship into a Lookup relationship so documents can exist independently without cascading deletion. Which configuration obstacle will prevent the Platform Administrator from changing this relationship type to Lookup?",
  "options": [
   {
    "key": "a",
    "text": "The parent object schema contains active sharing rules."
   },
   {
    "key": "b",
    "text": "Junction objects are referenced by the child LoanDocument object."
   },
   {
    "key": "c",
    "text": "The child object contains more than 5,000 existing records."
   },
   {
    "key": "d",
    "text": "Active Roll-Up Summary fields exist on the parent LoanApplication object."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce prevents converting a Master-Detail relationship into a Lookup relationship if any Roll-Up Summary fields exist on the master object. Because roll-up summaries depend on the master-detail architecture to aggregate child data, all roll-up summary fields must be deleted before the relationship can be converted. **Why the other options are incorrect:** A: Active sharing rules on the parent object do not block relationship conversion from master-detail to lookup. B: High record volume in the child object does not prevent converting master-detail to lookup (though converting lookup to master-detail requires all child records to have parent values). D: The presence of junction objects elsewhere in the schema does not prevent converting a master-detail relationship to a lookup on another object.",
  "module": "objects"
 },
 {
  "simulado": 2,
  "number": 57,
  "statement": "An administrator is defining a new topic for an AI agent handling shipping queries. According to best practices, what should the administrator include in the topic instructions to help the AI agent accurately understand user intent?",
  "options": [
   {
    "key": "a",
    "text": "Keep instructions minimal to minimize processing latency."
   },
   {
    "key": "b",
    "text": "Include a representative list of example user questions."
   },
   {
    "key": "c",
    "text": "Use dense system jargon rather than plain user language."
   },
   {
    "key": "d",
    "text": "Provide high-level generic statements without specific constraints."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Providing a clear set of example user questions within topic instructions helps the language model recognize common phrasing patterns, leading to more accurate topic classification and response generation. **Why the other options are incorrect:** A: Complex jargon confuses language models and makes maintenance difficult; instructions should use plain, clear language. B: Overly minimal instructions lack necessary context and guardrails, leading to unpredictable agent responses. C: Generic statements encourage model hallucination and ungrounded responses; instructions should be specific and goal-oriented.",
  "module": "agentforce"
 },
 {
  "simulado": 2,
  "number": 58,
  "statement": "At Crestview Financial, Account Managers and Client Success Specialists share the same custom user profile. The administrator needs to display a custom \"Risk Score\" component on the Account record page only to the Client Success team, while hiding it from Account Managers. How should the Platform Administrator meet this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Adjust Organization-Wide Sharing Settings for the Risk Score object."
   },
   {
    "key": "b",
    "text": "Modify the standard Page Layout assignment for the shared profile."
   },
   {
    "key": "c",
    "text": "Configure Component Visibility filters on the Lightning Record Page based on User Permission Set."
   },
   {
    "key": "d",
    "text": "Assign separate Record Types to each team."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Component Visibility filters in Lightning App Builder allow administrators to dynamically show or hide individual page components based on field values, user profile, or assigned Permission Sets without needing separate profiles or page layouts. **Why the other options are incorrect:** A: Page layout assignments are assigned at the Profile level. Since both teams share the exact same profile, standard layout assignments cannot differentiate between them. B: Record types differentiate layout fields based on the record's classification, not based on the viewing user's assigned permissions or team role. D: Sharing settings control record-level access in the database, not whether a specific UI component displays on a Lightning Record Page layout.",
  "module": "objects"
 },
 {
  "simulado": 2,
  "number": 59,
  "statement": "Starlight Real Estate needs an automated mortgage pre-qualification calculator that guides users through a multi-screen questionnaire and creates lead records. The project must be completed within two days on a zero-dollar development budget. Which item from the Salesforce AppExchange should the Platform Administrator utilize?",
  "options": [
   {
    "key": "a",
    "text": "Lightning Data Solutions"
   },
   {
    "key": "b",
    "text": "AppExchange Consultants Directory"
   },
   {
    "key": "c",
    "text": "Flow Solutions"
   },
   {
    "key": "d",
    "text": "Bolt Solutions"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Flow Solutions on the AppExchange provide prebuilt, configurable screen flows and automation templates (such as calculators or intake forms) that can be installed and deployed quickly without custom development costs. **Why the other options are incorrect:** A: Lightning Data Solutions connect external data enrichment services (like firmographic data providers) to Salesforce records, rather than offering interactive UI screen flows. C: Bolt Solutions are full industry community portal templates, which are far broader and more complex than a simple embedded intake wizard. D: Hiring consultants involves external service contracts, violating the zero-dollar development budget constraint.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 60,
  "statement": "A marketing analyst at Apex Tech runs a report on event registrations across corporate accounts. Because individual client accounts often register multiple attendees, standard row counts overstate client participation. Which report feature should the Platform Administrator recommend to display the exact number of distinct client accounts represented in the report?",
  "options": [
   {
    "key": "a",
    "text": "Row Grouping by Contact ID"
   },
   {
    "key": "b",
    "text": "Summary Formula using COUNT_DISTINCT"
   },
   {
    "key": "c",
    "text": "Bucket Column aggregating Account IDs"
   },
   {
    "key": "d",
    "text": "Unique Count feature applied to the Account Name field column"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The \"Unique Count\" feature in Salesforce reports allows administrators to display the number of distinct, unique values in a specific column (such as Account Name), preventing duplicate counting when multiple child records exist per parent. **Why the other options are incorrect:** A: Custom Summary Formulas perform calculations across report groupings, but enabling \"Unique Count\" directly on the column layout is the standard declarative tool for distinct counts. C: Bucket Columns group text, numeric, or picklist values into custom category labels; they do not calculate distinct record counts. D: Grouping rows by Contact ID organizes report output by contact, but still results in multiple rows rather than delivering a single total count of distinct accounts.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 61,
  "statement": "Precision Financial needs to streamline expense submissions. Once an employee submits an expense report, department managers and financial directors must review and sign off sequentially. Upon final sign-off, the record details must be sent automatically to an external accounting ERP system. Which two tools should the Platform Administrator configure to fulfill this request? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Approval Process"
   },
   {
    "key": "b",
    "text": "Auto-Response Rule"
   },
   {
    "key": "c",
    "text": "Quick Action"
   },
   {
    "key": "d",
    "text": "Outbound Message Action"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "An Approval Process handles multi-step, sequential authorizations between managers and directors. An Outbound Message action (configured as a final approval action) automatically transmits XML data payloads from Salesforce to an external endpoint URL (the ERP system) upon final approval. **Why the other options are incorrect:** C: Quick Actions allow manual record creation or edits from UI buttons, but cannot automate multi-step approval routing or external system messaging. D: Auto-Response Rules send email templates to external submitters upon lead or case creation; they do not handle internal approval steps or ERP data synchronization.",
  "module": "service"
 },
 {
  "simulado": 2,
  "number": 62,
  "statement": "Horizon Health needs a workflow process for medical equipment requisitions. Based on a combination of 25 potential criteria sets (involving equipment tier, department budget, and facility location), the requisition must be dynamically routed to different clinical directors for approval. How should the Platform Administrator implement this complex routing requirement?",
  "options": [
   {
    "key": "a",
    "text": "Create 25 individual approval processes with distinct entry criteria"
   },
   {
    "key": "b",
    "text": "Add a custom detail button linking to an email template"
   },
   {
    "key": "c",
    "text": "Configure a Screen Flow requiring reps to select the director manually"
   },
   {
    "key": "d",
    "text": "Build a Record-Triggered Flow Orchestration"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-Triggered Flow Orchestration is built specifically to handle complex, multi-step, multi-user business processes that involve branching decision logic and multi-stage routing across multiple criteria sets cleanly. **Why the other options are incorrect:** B: Manual email buttons rely on user memory and manual routing, introducing significant human error and lacking process tracking. C: Requiring reps to select approvers manually via Screen Flow increases data entry mistakes and bypasses automated compliance routing. D: Creating and maintaining 25 separate Approval Processes creates extreme administrative overhead, redundancy, and maintenance complexity compared to Flow Orchestration.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 63,
  "statement": "A senior account executive is departing Apex Global. Management needs to transfer all their active Accounts and open Opportunities to a replacement representative while keeping all existing Account and Opportunity team memberships intact. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader application"
   },
   {
    "key": "b",
    "text": "Schema Builder"
   },
   {
    "key": "c",
    "text": "Data Import Wizard"
   },
   {
    "key": "d",
    "text": "Mass Transfer Records tool"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Mass Transfer Records tool in Setup allows administrators to reassign ownership of Accounts and related Opportunities from one user to another while preserving existing account and opportunity team assignments. **Why the other options are incorrect:** A: Data Import Wizard is used to import or update records from external files, not for built-in ownership transfers that preserve teams. C: Data Loader can update owner IDs via CSV, but it requires manual exports and does not preserve related team assignments automatically. D: Schema Builder is a graphical tool for designing objects and fields, not for executing data ownership transfers.",
  "module": "data"
 },
 {
  "simulado": 2,
  "number": 64,
  "statement": "Titan Construction requires that whenever the ProjectStatus picklist field on a custom object is set to \"Delayed\", a custom text field DelayReason__c must be populated. Which Validation Rule formula should the Platform Administrator configure to enforce this data requirement?",
  "options": [
   {
    "key": "a",
    "text": "AND(ISPICKVAL(ProjectStatus, \"Delayed\"), ISBLANK(DelayReason__c))"
   },
   {
    "key": "b",
    "text": "AND(ProjectStatus == \"Delayed\", NOT(ISBLANK(DelayReason__c)))"
   },
   {
    "key": "c",
    "text": "OR(ProjectStatus = \"Delayed\", DelayReason__c = \"\")"
   },
   {
    "key": "d",
    "text": "AND(NOT(ISPICKVAL(ProjectStatus, \"Delayed\")), ISBLANK(DelayReason__c))"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A validation rule triggers an error when its formula evaluates to TRUE. The formula AND(ISPICKVAL(ProjectStatus, \"Delayed\"), ISBLANK(DelayReason__c)) correctly fires an error whenever ProjectStatus is set to \"Delayed\" AND DelayReason__c is left empty. **Why the other options are incorrect:** A: Fires an error when the status is not Delayed and reason is blank, which is the opposite of the requirement. B: Uses invalid picklist syntax (ProjectStatus = \"Delayed\") and an OR logic structure that would block saves inappropriately. C: Evaluates to TRUE when the field is populated, which would wrongly prevent users from saving valid entries.",
  "module": "automation"
 },
 {
  "simulado": 2,
  "number": 65,
  "statement": "Service agents at Crestview Financial report that the custom Lightning record page for Accounts takes an unusually long time to render. Which tool should the Platform Administrator use to evaluate performance metrics and pinpoint components causing delays?",
  "options": [
   {
    "key": "a",
    "text": "Analyze feature within Lightning App Builder"
   },
   {
    "key": "b",
    "text": "Lightning Usage App"
   },
   {
    "key": "c",
    "text": "System Health Check"
   },
   {
    "key": "d",
    "text": "Developer Console Performance Profiler"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The \"Analyze\" button inside Lightning App Builder evaluates page performance, component count, and layout complexity, providing specific recommendations to reduce page load times for desktop and mobile users. **Why the other options are incorrect:** A: System Health Check evaluates security settings against recommended security baselines; it does not analyze UI page performance. B: The Lightning Usage App tracks overall user adoption, browser types, and general performance trends across the org, but cannot analyze specific page layout components. C: The Developer Console inspects Apex execution logs, which is intended for code debugging rather than Lightning page component analysis.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 1,
  "statement": "Zenith Telecom uses Web-to-Case to capture technical inquiries submitted through their website. When an incoming ticket subject contains the phrases \"router\" and \"reboot\", the support team wants to automatically email a standardized set of hardware troubleshooting steps to the customer. Which two components should the Platform Administrator configure? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Case Assignment Rule with direct queue routing"
   },
   {
    "key": "b",
    "text": "Email Template containing the troubleshooting instructions"
   },
   {
    "key": "c",
    "text": "Auto-Response Rule entry with criteria logic"
   },
   {
    "key": "d",
    "text": "Inbound Email Service with Apex parsing logic"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "An Auto-Response Rule entry evaluates incoming Web-to-Case records against criteria (e.g., Subject contains \"router\" and \"reboot\"). An Email Template containing the troubleshooting instructions is attached to the auto-response rule entry to dispatch the email automatically upon ticket creation. **Why the other options are incorrect:** C: Case Assignment Rules route record ownership to users or queues; they do not send customer response emails. D: Custom Apex email services are unnecessary when standard Web-to-Case auto-response rules fulfill the requirement declaratively.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 2,
  "statement": "Horizon Freight receives support requests through web forms and email. Support management requires that any incoming ticket with a FreightType of \"Hazardous Materials\" automatically assign ownership to the Specialized Risk Queue upon creation. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Case Assignment Rules"
   },
   {
    "key": "b",
    "text": "Auto-Response Rules"
   },
   {
    "key": "c",
    "text": "Case Escalation Rules"
   },
   {
    "key": "d",
    "text": "Flow Orchestration"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Case Assignment Rules evaluate field criteria (e.g., FreightType = 'Hazardous Materials') at the exact moment a record is created and automatically assign record ownership to specified users or queues. **Why the other options are incorrect:** B: Case Escalation Rules monitor aging open cases and execute actions after a specified time delay, rather than routing ownership at initial creation. C: Auto-Response Rules automatically send email templates to ticket submitters upon record creation, but do not assign record ownership to queues. D: Flow Orchestration coordinates complex multi-stage work across departments, which is unnecessary for a standard record-creation assignment rule.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 3,
  "statement": "Account representatives at BioHealth Diagnostics complain that the current Account creation screen is cluttered with too many optional fields, making data entry slow and confusing. Management wants a simplified, guided interface that prompts users only for essential fields during initial record creation. Which automation tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Approval Processes"
   },
   {
    "key": "b",
    "text": "Validation Rules"
   },
   {
    "key": "c",
    "text": "Flow Builder (Screen Flow)"
   },
   {
    "key": "d",
    "text": "Workflow Rules"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Screen Flows built in Flow Builder allow administrators to design streamlined, step-by-step user interfaces. Users are presented only with essential fields in a clean wizard, improving speed and reducing clutter during record creation. **Why the other options are incorrect:** A: Workflow Rules handle background data updates, but cannot alter UI screens or create guided wizards. C: Validation Rules prevent saving invalid data, but do not remove or streamline fields on the creation screen. D: Approval Processes manage record sign-off workflows; they do not provide custom data entry creation screens.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 4,
  "statement": "Enterprise Financial requires an automated workflow for commercial loan applications. When an application is rejected by a credit reviewer during an approval process, the loan status field must update to \"Rejected\" and an automated email notification must be sent to the loan officer. Where in the approval process should the Platform Administrator configure these actions?",
  "options": [
   {
    "key": "a",
    "text": "Escalation Actions"
   },
   {
    "key": "b",
    "text": "Final Rejection Actions"
   },
   {
    "key": "c",
    "text": "Recall Actions"
   },
   {
    "key": "d",
    "text": "Initial Submission Actions"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Final Rejection Actions execute automatically when an approver rejects a record in an approval process. Administrators can configure Field Updates (updating status to \"Rejected\") and Email Alerts within Final Rejection Actions. **Why the other options are incorrect:** B: Initial Submission Actions execute when a record is first submitted into the approval workflow. C: Recall Actions execute when a submitter or admin withdraws a submitted approval request. D: \"Escalation Actions\" belong to Case Escalation Rules, not Approval Processes.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 5,
  "statement": "The compliance team at Crestview Media needs an exported CSV file containing all active contracts signed within the past 60 days. The export must include specific fields: Contract Name, Contract ID, Start Date, and Total Value. Which tool should the Platform Administrator use to filter and extract this specific record set?",
  "options": [
   {
    "key": "a",
    "text": "Schema Builder Export Utility"
   },
   {
    "key": "b",
    "text": "Data Import Wizard"
   },
   {
    "key": "c",
    "text": "Weekly Data Export Service"
   },
   {
    "key": "d",
    "text": "Data Loader"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Loader allows administrators to extract specific fields from an object and filter records using custom criteria queries (e.g., contracts closed within the last 60 days), exporting the target record set directly into a CSV file. **Why the other options are incorrect:** A: The Data Export Service exports entire objects or full database backups, but does not allow filtering records by specific date ranges or criteria. B: The Data Import Wizard is used to import or update records in Salesforce, not export data. D: Schema Builder visualizes object schemas and relationships; it does not export record data.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 6,
  "statement": "Vanguard Solar uses a custom picklist field, PreferredLanguage__c, on Leads. When a lead is converted, the value fails to appear on the resulting Contact record. Which two configuration steps should the Platform Administrator take to ensure this value populates upon lead conversion? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Create a matching custom picklist field PreferredLanguage__c on the Contact object."
   },
   {
    "key": "b",
    "text": "Set the Lead picklist field to Universally Required on the object layout."
   },
   {
    "key": "c",
    "text": "Map the Lead picklist field to the Contact picklist field under Lead Conversion Field Mapping."
   },
   {
    "key": "d",
    "text": "Build a Validation Rule requiring language selection on the Contact object."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Custom lead data does not transfer automatically upon conversion unless a target custom field of a compatible data type exists on the Contact object. Once created, the administrator must map the custom Lead field to the custom Contact field in Map Lead Fields within Object Manager. **Why the other options are incorrect:** C: Validation rules enforce data entry upon save, but do not map or transfer field values across objects during conversion. D: Setting the field required on the Lead ensures data entry on the Lead record, but does not transfer the value to Contact upon conversion.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 7,
  "statement": "A Platform Administrator is setting up the default mobile experience for field service technicians using the Mobile Only app container in the Salesforce Mobile App. Which statement accurately describes navigation bar behavior in the Mobile Only container?",
  "options": [
   {
    "key": "a",
    "text": "The Mobile Only navigation menu automatically presents different items per user profile without configuration."
   },
   {
    "key": "b",
    "text": "Standard object tabs cannot be removed from the Mobile Only navigation menu layout."
   },
   {
    "key": "c",
    "text": "The first four items configured in the Mobile Only navigation menu are pinned directly to the bottom navigation bar."
   },
   {
    "key": "d",
    "text": "Custom Lightning Web Components automatically appear in the mobile navigation menu without requiring custom tabs."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In the Mobile Only container within the Salesforce Mobile App, the first four navigation items defined in the navigation menu setup are pinned to the bottom navigation bar for quick access, while remaining items appear under the menu list. **Why the other options are incorrect:** B: Custom components must be exposed via custom tabs before they can be added to mobile navigation menus. C: The Mobile Only navigation menu is identical for all users across the org; profile-specific mobile navigation requires custom Lightning Apps. D: Standard object tabs can be customized, added, or removed from the mobile navigation menu in Setup.",
  "module": "productivity"
 },
 {
  "simulado": 3,
  "number": 8,
  "statement": "A Platform Administrator at Starlight Energy imported a CSV batch of client records. Several imported records successfully populated the PriorityTier picklist field with the value \"Unassigned\", even though \"Unassigned\" is not an active value in the field's picklist definition. Why did Salesforce accept these records without throwing an import error?",
  "options": [
   {
    "key": "a",
    "text": "The import job automatically added \"Unassigned\" to all active record type picklist assignments."
   },
   {
    "key": "b",
    "text": "The field was configured with the \"Restrict picklist to the values defined in the value set\" checkbox deselected."
   },
   {
    "key": "c",
    "text": "The Administrator profile overrides field-level validation during CSV imports."
   },
   {
    "key": "d",
    "text": "The field value was mapped directly from an active Global Value Set during import."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "If a picklist field has the \"Restrict picklist to the values defined in the value set\" option unchecked, Salesforce permits users and data import tools (like Data Loader or Data Import Wizard) to insert values outside the predefined picklist list without throwing a validation error. **Why the other options are incorrect:** B: CSV import tools do not bypass picklist restrictions simply because the user holds the System Administrator profile. C: Global Value Sets enforce centralized picklist values; they do not allow random undefined values unless unrestricted. D: Data imports do not automatically modify object picklist configurations or record type value assignments.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 9,
  "statement": "An administrator at Zenith Global is configuring an AI agent action named checkInventoryLevel that retrieves stock availability from an external warehouse database. Which set of Action Instructions follows Agentforce best practices?",
  "options": [
   {
    "key": "a",
    "text": "SOQL query: SELECT Stock__c FROM Warehouse__c WHERE SKU = :inputSKU; execute in system context."
   },
   {
    "key": "b",
    "text": "\"Use this action to check inventory. Runs whenever any user mentions products or shopping.\""
   },
   {
    "key": "c",
    "text": "\"Action node for inventory data. Returns string output.\""
   },
   {
    "key": "d",
    "text": "\"Use this action to check the current inventory level of a product. Apply this action when the customer asks about stock availability, product quantities, or item lead times.\""
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Agentforce action instructions should clearly define the action's purpose, business goal, and precise natural-language criteria for when the AI agent should invoke it, without using code or vague statements. **Why the other options are incorrect:** A: Contains backend database code and query syntax, which should be excluded from high-level natural language agent instructions. B: Too broad; triggering inventory checks whenever \"shopping\" is mentioned risks invoking the action inappropriately during general inquiries. D: Too brief and vague, failing to give the AI model clear context regarding when to trigger the action.",
  "module": "agentforce"
 },
 {
  "simulado": 3,
  "number": 10,
  "statement": "Crestview Real Estate wants an automated process on the Lease object. When a lease status is set to \"Active\", the system must immediately assign an onboarding task to the real estate agent, and schedule a second follow-up task 90 days later to check tenant satisfaction. Which automation tool should the Platform Administrator use to handle both immediate and time-delayed task creation?",
  "options": [
   {
    "key": "a",
    "text": "Lead Assignment Rules"
   },
   {
    "key": "b",
    "text": "Flow Builder (Record-Triggered Flow)"
   },
   {
    "key": "c",
    "text": "Quick Action"
   },
   {
    "key": "d",
    "text": "Case Escalation Rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-Triggered Flows in Flow Builder support both immediate execution paths and Scheduled Paths (time-delayed execution). This allows the flow to create an immediate onboarding task upon lease activation and schedule a follow-up task 90 days later. **Why the other options are incorrect:** B: Case Escalation Rules operate strictly on Case records to escalate unresolved tickets after time delays; they do not create scheduled tasks on custom objects like Leases. C: Quick Actions require manual user button clicks and cannot handle time-delayed automation 90 days after record save. D: Assignment Rules automatically route record ownership for Leads or Cases upon initial creation; they cannot create scheduled follow-up tasks.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 11,
  "statement": "Horizon Financial wants a guided, step-by-step intake wizard for customer service representatives to complete whenever a business client cancels their account. The wizard must collect exit survey feedback across multiple interactive screens and save the results to custom fields. Which automation tool should the Platform Administrator use to build this interactive wizard?",
  "options": [
   {
    "key": "a",
    "text": "Outbound Message Action"
   },
   {
    "key": "b",
    "text": "Workflow Rules"
   },
   {
    "key": "c",
    "text": "Flow Builder (Screen Flow)"
   },
   {
    "key": "d",
    "text": "Process Builder"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Screen Flows built in Flow Builder allow administrators to design interactive multi-screen wizards that collect user inputs, guide reps through sequential steps, and save data directly to Salesforce records without code. **Why the other options are incorrect:** A: Workflow Rules automate backend actions (like email alerts or field updates) based on record edits, but cannot render interactive user interface screens or wizards. C: Process Builder automates backend record creation and field updates, but lacks user-facing screen components or wizard capabilities. D: Outbound Messages transmit XML data updates to external system endpoints; they do not collect user input through interactive screens.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 12,
  "statement": "Apex Capital needs to restrict visibility of a sensitive field, TaxID__c, on Contact records. Only members of the Compliance Team should be able to view and edit this field, while standard sales representatives should not see the field at all. Which feature should the Platform Administrator configure to enforce this security requirement?",
  "options": [
   {
    "key": "a",
    "text": "Page Layout Section Visibility set to read-only for Sales profiles."
   },
   {
    "key": "b",
    "text": "Restriction Rules applied to the Contact detail page layout."
   },
   {
    "key": "c",
    "text": "Field-Level Security on TaxID__c set to Visible for Compliance users and hidden for Sales profiles."
   },
   {
    "key": "d",
    "text": "Organization-Wide Defaults (OWD) set to Private on the Contact object."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Field-Level Security (FLS) controls field visibility and editability at the object schema level across all page layouts, reports, search results, and API operations. Setting FLS to hidden for Sales profiles prevents them from viewing or accessing the field anywhere in Salesforce. **Why the other options are incorrect:** B: Organization-Wide Defaults control record-level access (which contact records users can see), not individual field-level visibility on a record. C: Restriction Rules restrict record access for users who already have record access; they do not manage field-level schema visibility. D: Page layout settings remove fields from specific UI layouts, but do not prevent users from accessing field data via reports, list views, global search, or APIs.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 13,
  "statement": "A sales director at Meridian Health notices that total numbers on a pipeline dashboard component do not match the values displayed when clicking into the underlying report. What are two likely reasons for this discrepancy? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The sales director lacks access to the custom report folder."
   },
   {
    "key": "b",
    "text": "The dashboard component has not been refreshed recently."
   },
   {
    "key": "c",
    "text": "The dashboard Running User has different data access permissions than the viewing sales director."
   },
   {
    "key": "d",
    "text": "The underlying report was edited in Classic mode while the dashboard was built in Lightning."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Dashboards display cached data from the last time they were refreshed. If database records changed since the last refresh, report values will differ until the dashboard is refreshed. Dashboards reflect the data permissions of the Running User. If the running user sees more records than the viewing user, the dashboard totals will differ from what the viewer sees when running the report live. **Why the other options are incorrect:** C: If the user lacked access to the report folder, they would receive a folder permission error when clicking the report link, rather than viewing differing metrics. D: Classic and Lightning reporting engines query the exact same underlying database data; interface mode does not cause data value discrepancies.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 14,
  "statement": "Nova Healthcare relies on a Private Organization-Wide Default (OWD) sharing model for Case records. Support reps collaborate in regional public groups. A rep needs to share a complex medical case with the \"Midwest Support Group\" manually. Which setting must be verified to ensure the rep can manually share the record?",
  "options": [
   {
    "key": "a",
    "text": "The rep must be the record owner, an above-node role hierarchy manager, or a System Admin."
   },
   {
    "key": "b",
    "text": "The rep must have the \"Modify All Data\" system permission assigned."
   },
   {
    "key": "c",
    "text": "The Midwest Support Group must be configured as an Unlisted Chatter Group."
   },
   {
    "key": "d",
    "text": "Organization-Wide Defaults must be updated to Public Read-Only."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, manual sharing of a record can be performed by the record owner, users above the owner in the role hierarchy, or System Administrators (and users with \"Modify All\" access for that object). **Why the other options are incorrect:** B: Changing OWD to Public Read-Only removes the need for manual sharing, but defeats the Private sharing model requirement. C: \"Modify All Data\" is an extreme administrative permission not required for an owner to manually share their own record. D: Chatter group types govern Chatter feed visibility, not record-level manual sharing permissions.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 15,
  "statement": "Apex Financial is converting a custom field RiskCategory__c on the ComplianceAudit__c object from a Text data type to a Picklist data type. What risk or operational impact should the Platform Administrator consider prior to executing this field type change?",
  "options": [
   {
    "key": "a",
    "text": "Visualforce pages referencing the field are automatically updated to incorporate the new picklist options."
   },
   {
    "key": "b",
    "text": "Data preservation is guaranteed without loss as long as a global value set is assigned during conversion."
   },
   {
    "key": "c",
    "text": "Formula fields, assignment rules, or escalation rules referencing the previous text values may behave unexpectedly or fail."
   },
   {
    "key": "d",
    "text": "Salesforce automatically deletes all custom list views referencing the modified field."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When changing a field's data type from Text to Picklist, existing automation rules (such as Assignment Rules, Escalation Rules, or Workflow Rules) and formula fields that rely on exact text string matching may fail or misbehave if existing text values do not match newly defined picklist values exactly. **Why the other options are incorrect:** A: List views are not automatically deleted when changing field types, though filters referencing the field may require adjustment. C: Salesforce does not automatically refactor Visualforce pages or Apex code when custom field data types are modified. D: Data loss or truncation can still occur if existing text string values in records do not match the defined picklist options.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 16,
  "statement": "Titan Marketing is running a major annual trade show campaign that includes three smaller sub-campaigns: Keynote Session, Product Expo, and Technical Workshops. The marketing director needs to view aggregate metrics (total responses and won opportunity revenue) for the entire initiative on the parent trade show record. How should the Platform Administrator structure these campaigns?",
  "options": [
   {
    "key": "a",
    "text": "Build a custom Master-Detail junction object connecting the campaign records."
   },
   {
    "key": "b",
    "text": "Create a Roll-Up Summary field on Opportunity referencing Campaign."
   },
   {
    "key": "c",
    "text": "Configure Custom Metadata Types for each event sub-type."
   },
   {
    "key": "d",
    "text": "Establish a Campaign Hierarchy with sub-campaigns linked to the parent Trade Show campaign."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Campaign Hierarchies link related campaigns in a parent-child structure. Salesforce automatically aggregates child campaign metrics (member responses, costs, opportunities, and won value) up to the parent campaign record. **Why the other options are incorrect:** B: Creating custom junction objects adds unnecessary overhead because Salesforce natively supports parent-child relationships between Campaign records. C: Standard Opportunities and Campaigns do not share a Master-Detail relationship, so standard Roll-Up Summary fields cannot be built on Campaign for Opportunities. D: Custom Metadata Types store application configuration settings, not operational marketing campaign records.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 17,
  "statement": "Starlight Energy has a custom Lightning component on Contact record pages that displays external credit risk evaluations. Executives require this component to be visible only to users with the \"Financial Analyst\" profile when they are accessing Salesforce from a mobile phone. Which two Component Visibility filter conditions should the Platform Administrator configure in Lightning App Builder? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Filter: User > Role > Name = Financial Analyst"
   },
   {
    "key": "b",
    "text": "Filter: User > Profile > Name = Financial Analyst"
   },
   {
    "key": "c",
    "text": "Filter: Device View = Mobile/Tablet"
   },
   {
    "key": "d",
    "text": "Filter: Form Factor = Phone"
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Filtering by User > Profile > Name = Financial Analyst restricts component visibility strictly to users assigned to the target profile. Filtering by Form Factor = Phone ensures the component renders only when the user accesses the record via a mobile phone device. **Why the other options are incorrect:** C: Role Hierarchy nodes control record visibility, not profile permissions. Filtering by Role would miss users who hold the profile but have a different role. D: \"Device View = Mobile/Tablet\" is not a valid Salesforce component visibility filter; Form Factor is the standard criteria to evaluate device hardware.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 18,
  "statement": "Customer care representatives at BioHealth Diagnostics report that the Case record page is cluttered with sections and components irrelevant to their daily duties, making it hard to resolve issues quickly. How should the Platform Administrator optimize the page to make it cleaner and contextually dynamic?",
  "options": [
   {
    "key": "a",
    "text": "Remove input fields from the Record Detail component."
   },
   {
    "key": "b",
    "text": "Delete extra components permanently from the page layout canvas."
   },
   {
    "key": "c",
    "text": "Add Component Visibility filters to show or hide page components based on user role or case fields."
   },
   {
    "key": "d",
    "text": "Include additional tab components on all page layouts."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Component Visibility filters in Lightning App Builder allow administrators to dynamically show or hide components based on criteria (such as user role or case status). This creates a clean, streamlined page tailored to specific user roles without removing functionality for others. **Why the other options are incorrect:** B: Permanently deleting components removes functionality for all users across the organization. C: Removing fields from the Record Detail component hides data for everyone rather than delivering dynamic role-based visibility. D: Adding more tab components increases page complexity and visual clutter rather than dynamically streamlining the view.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 19,
  "statement": "A Platform Administrator at Nova Care deployed an automated flow designed to create follow-up task records whenever a new appointment record is logged. However, testing shows that no tasks are being created when new appointments are saved. What is the most likely cause of this issue?",
  "options": [
   {
    "key": "a",
    "text": "The flow trigger API endpoint has been revoked."
   },
   {
    "key": "b",
    "text": "The flow status is currently set to Inactive."
   },
   {
    "key": "c",
    "text": "The flow canvas is set to Read-Only mode."
   },
   {
    "key": "d",
    "text": "The object permissions on tasks are set to Public Read-Only."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Flows must be explicitly activated in an environment to run. If a flow is created or deployed in an inactive state, it will not execute or perform automated actions when database events occur. **Why the other options are incorrect:** B: Record-Triggered Flows run automatically in response to database events; they do not rely on external API endpoints. C: Salesforce flows do not have a \"Read-Only\" mode toggle that prevents record creation while active. D: Object permissions govern user CRUD access; they do not prevent active system flows from running in system context.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 20,
  "statement": "SolarTech support management wants incoming customer cases acknowledged automatically via email. Low-severity cases should receive Email Template 1, while Critical-severity cases should receive Email Template 2. How should the Platform Administrator configure this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Build multiple active Auto-Response Rules, one for each case severity tier."
   },
   {
    "key": "b",
    "text": "Configure Case Assignment Rules to send different email templates based on severity filters."
   },
   {
    "key": "c",
    "text": "Use a Validation Rule to trigger email alerts based on severity."
   },
   {
    "key": "d",
    "text": "Create one Auto-Response Rule with multiple rule entries filtered by case severity, assigning the corresponding email template to each entry."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce permits only one active Auto-Response Rule per object at a time. To send different email templates based on criteria (like severity), administrators add multiple rule entries within that single active rule. **Why the other options are incorrect:** B: Salesforce allows only one active auto-response rule per object; creating multiple active rules is not supported. C: Case Assignment Rules route record ownership; they do not handle auto-response customer email templates. D: Validation Rules prevent invalid record saves; they cannot dispatch automated email notifications.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 21,
  "statement": "An administrator at Horizon Freight created a lookup field on the EquipmentMaintenance__c custom object pointing to the Contact object. The operations manager wants to generate reports on equipment maintenance that include contact phone numbers and email addresses. What should the Platform Administrator do to make these contact fields available in the report builder?",
  "options": [
   {
    "key": "a",
    "text": "Enable Activity History tracking on the Equipment Maintenance schema."
   },
   {
    "key": "b",
    "text": "Create a custom report type selecting Equipment Maintenance as the primary object and Contact as a related object."
   },
   {
    "key": "c",
    "text": "Configure a Dashboard Filter to join contact data with maintenance metrics."
   },
   {
    "key": "d",
    "text": "Build a cross-object formula field on the Contact object pointing to equipment maintenance."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard report types do not always include fields from related objects added via custom lookups. To include fields from a related object (Contact) in reports for a custom object (EquipmentMaintenance__c), the administrator must create a Custom Report Type defining the primary and related objects. **Why the other options are incorrect:** A: Cross-object formula fields on Contact cannot pull data upward from child maintenance records. B: Dashboard filters segment displayed component data; they cannot add missing object fields to report layouts. D: Activity History tracks tasks and events, but does not expose lookup object fields in custom report builders.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 22,
  "statement": "A senior account executive at Meridian Financial has left the company. The administrator needs to reassign all Accounts and Opportunities owned by the former rep to a replacement executive while preserving all existing Account and Opportunity Team assignments. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Mass Transfer Records tool"
   },
   {
    "key": "b",
    "text": "Dataloader.io"
   },
   {
    "key": "c",
    "text": "Data Loader application"
   },
   {
    "key": "d",
    "text": "Data Import Wizard"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Mass Transfer Records tool in Setup is built specifically to reassign record ownership of standard objects (like Accounts and Opportunities) from one user to another while automatically maintaining associated team memberships intact. **Why the other options are incorrect:** A: Data Loader can update owner IDs via CSV, but requires exporting/importing data and does not automatically preserve related team assignments. C: The Data Import Wizard imports or updates records, but is not designed for bulk ownership transfers that preserve team structures. D: Dataloader.io updates record fields, but requires manual file manipulation and lacks built-in team preservation features during transfers.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 23,
  "statement": "A security auditor asks the Platform Administrator to evaluate organizational password policies, session security settings, and login parameters against recommended Salesforce baseline security standards. Which tool should the Platform Administrator run?",
  "options": [
   {
    "key": "a",
    "text": "Setup Audit Trail"
   },
   {
    "key": "b",
    "text": "Field History Tracking"
   },
   {
    "key": "c",
    "text": "Health Check"
   },
   {
    "key": "d",
    "text": "Organization-Wide Defaults"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Health Check in Setup scans an organization's security settings (including session settings, password policies, and network configurations), compares them against Salesforce baseline security standards, and identifies potential vulnerabilities. **Why the other options are incorrect:** A: Setup Audit Trail tracks administrative metadata edits (who changed what in Setup), but does not analyze session vulnerabilities. C: Field History Tracking monitors data edits on individual object fields, not session or security settings. D: Organization-Wide Defaults manage record-level sharing visibility, but do not evaluate session vulnerabilities or security baselines.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 24,
  "statement": "Apex Capital requires an automated background process to delete temporary log records older than 30 days based on their ExpirationStatus field value. Which automation tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Workflow Rules"
   },
   {
    "key": "b",
    "text": "Process Builder"
   },
   {
    "key": "c",
    "text": "Marketing Cloud Automation Studio"
   },
   {
    "key": "d",
    "text": "Flow Builder"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Flow Builder (via a Record-Triggered or Schedule-Triggered Flow) supports deleting records automatically based on specified field criteria. **Why the other options are incorrect:** A: Process Builder can create or update records, but cannot delete records. C: Workflow Rules can execute field updates, email alerts, tasks, or outbound messages, but cannot delete records. D: Automation Studio is a Marketing Cloud automation tool, not part of core Salesforce CRM data management.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 25,
  "statement": "BrightPath Media uses separate sales teams for Commercial Advertising and Non-Profit Sponsors. Management wants to guide reps at each stage of the deal by displaying stage-specific key fields and customized tips at the top of the Opportunity page layout. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Custom Dynamic Forms section visibility"
   },
   {
    "key": "b",
    "text": "Validation Rules paired with Workflow Alerts"
   },
   {
    "key": "c",
    "text": "Compact Layout header field assignments"
   },
   {
    "key": "d",
    "text": "Opportunity Path Key Fields and Guidance for Success"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Opportunity Path allows administrators to display stage progress visually, highlight up to five stage-specific Key Fields, and present customized \"Guidance for Success\" (coaching tips and links) for each deal stage. **Why the other options are incorrect:** B: Dynamic Forms organize field sections on the detail page canvas, but do not create the visual stage path banner with stage-specific guidance text. C: Validation rules enforce data entry upon save; they do not display guidance tips or key field highlights. D: Compact Layouts dictate the fields displayed in the top header summary card, but do not change based on pipeline stage progression.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 26,
  "statement": "An administrator at Vanguard Solar created a custom text field, DiscountCode__c, on the Asset object. Customer service agents submit a ticket stating that the field does not appear on their asset record pages. Which two troubleshooting steps should the Platform Administrator take to resolve this visibility issue? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Confirm that DiscountCode__c has been added to the Page Layout assigned to the agents' profile."
   },
   {
    "key": "b",
    "text": "Inspect the Setup Audit Trail to grant page layout component access."
   },
   {
    "key": "c",
    "text": "Verify Field-Level Security (FLS) settings for DiscountCode__c to ensure Read access is granted for the agents' profile."
   },
   {
    "key": "d",
    "text": "Modify Organization-Wide Defaults (OWD) on the Asset object to Public Read/Write."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Field-Level Security (FLS) controls whether a field is visible or hidden for specific user profiles. If FLS is set to hidden, the field will not appear on record pages regardless of layout settings. Page Layout Assignments determine which fields are displayed on the UI canvas for specific profiles. The field must be placed on the layout assigned to the user's profile to be visible on the page view. **Why the other options are incorrect:** C: Organization-Wide Defaults control record-level sharing visibility (which records users can access), not whether an individual field appears on a page layout. D: Setup Audit Trail records administrative modification history; it cannot be used to edit or grant layout permissions.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 27,
  "statement": "Vantage Logistics wants to establish a many-to-many relationship between two existing custom objects: DeliveryDriver__c and FreightTruck__c. Which two steps must the Platform Administrator perform to configure this relational architecture? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Create two Master-Detail relationship fields on the new custom junction object."
   },
   {
    "key": "b",
    "text": "Create two Lookup relationship fields on the parent objects pointing to each other."
   },
   {
    "key": "c",
    "text": "Create a custom junction object to act as the intermediary bridge."
   },
   {
    "key": "d",
    "text": "Configure URL formula fields to hyperlink related records between objects."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A many-to-many relationship in Salesforce requires creating a custom Junction Object to serve as the bridge between the two parent objects. The administrator must create two Master-Detail relationship fields on the junction object, each linking to one of the two parent objects. **Why the other options are incorrect:** B: Placing lookup fields directly on parent objects creates simple one-to-many links, not a many-to-many junction relationship. D: URL formula fields store hyperlinks; they do not create database object relationships or enforce data integrity.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 28,
  "statement": "Titan Robotics generates prospect records across three business divisions: Medical, Industrial, and Consumer. Management requests that when a user selects a division from the Division__c picklist, only the relevant marketing channels associated with that specific division appear in the AcquisitionChannel__c picklist. How should the Platform Administrator implement this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Implement a Validation Rule to block invalid picklist pairings upon saving."
   },
   {
    "key": "b",
    "text": "Define Field Dependencies between Division__c as the controlling field and AcquisitionChannel__c as the dependent field."
   },
   {
    "key": "c",
    "text": "Build separate Page Layouts for each division and assign them via profile layouts."
   },
   {
    "key": "d",
    "text": "Create three distinct Lead Processes and map them to separate record types."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Field Dependencies allow administrators to dynamically filter the choices displayed in a dependent picklist (AcquisitionChannel__c) based on the value selected in a controlling field (Division__c). **Why the other options are incorrect:** A: Page layouts dictate field placement, but cannot dynamically filter available picklist values on the fly within the same layout. C: Lead Processes define status picklist values for lead progression, not dynamic dependencies between custom fields. D: Validation rules block invalid saves, but do not filter UI picklist drop-down options dynamically for the user.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 29,
  "statement": "AeroTech Logistics wants to restrict user logins so that employees assigned to the \"Warehouse Operations\" profile can log into Salesforce only during designated shifts and strictly from corporate network IP ranges. Where should the Platform Administrator set these login restrictions?",
  "options": [
   {
    "key": "a",
    "text": "On the Warehouse Operations User Profile"
   },
   {
    "key": "b",
    "text": "In Company Settings under Network Access"
   },
   {
    "key": "c",
    "text": "Within Custom Permission Sets assigned to warehouse staff"
   },
   {
    "key": "d",
    "text": "On the Warehouse Operations Role Hierarchy node"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Login Hours and Login IP Ranges are enforced strictly at the Profile level in Salesforce, ensuring that all users assigned to that profile adhere to specified schedule and IP boundaries. **Why the other options are incorrect:** B: Network Access under Company Settings defines org-wide Trusted IP Ranges (which bypass MFA/verification challenges), but cannot enforce strict profile-level login restrictions or login hours. C: Permission Sets can grant additional system permissions, but cannot enforce profile-level restrictions like Login Hours or restricted IP ranges. D: Role Hierarchy governs record sharing visibility up the management chain, not user login authentication rules or network boundaries.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 30,
  "statement": "Apex Financial utilizes the Contact Hierarchy feature to display organizational structures across corporate accounts. What should the Platform Administrator keep in mind regarding how records appear in the Contact Hierarchy view?",
  "options": [
   {
    "key": "a",
    "text": "Contact Hierarchy ignores organization-wide defaults and displays all contacts globally."
   },
   {
    "key": "b",
    "text": "Contacts displayed in the hierarchy respect user record-level sharing permissions."
   },
   {
    "key": "c",
    "text": "The hierarchy is hard-coded to display a maximum of 50 contacts per account."
   },
   {
    "key": "d",
    "text": "Customizing hierarchy columns modifies the default Recently Viewed Contacts list view layout."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Contact Hierarchy respects Salesforce data security and record sharing settings. Users only see contacts within the hierarchy view that they have permission to access based on OWD, sharing rules, or role hierarchy. **Why the other options are incorrect:** B: Contact Hierarchy strictly respects sharing rules and record-level permissions; it does not bypass security. C: There is no hard-coded 50-contact display limit in Contact Hierarchy. D: Customizing Contact Hierarchy display columns alters the hierarchy view, but does not modify standard object list views like Recently Viewed Contacts.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 31,
  "statement": "An administrator at Apex Global is reviewing an upcoming Salesforce Release Update that alters API security context enforcement across record automation. What is the recommended procedure for the Platform Administrator to test and deploy this critical update?",
  "options": [
   {
    "key": "a",
    "text": "Enable the update directly in Production during weekend maintenance hours without sandbox testing."
   },
   {
    "key": "b",
    "text": "Allow the update to auto-activate in Production without prior administrative testing."
   },
   {
    "key": "c",
    "text": "Submit a case to Salesforce Support requesting a permanent exemption from the security release."
   },
   {
    "key": "d",
    "text": "Activate the update in a Sandbox environment first to test automation impacts before production deployment."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Best practice for managing system-wide release updates is to activate and evaluate them in a Sandbox environment first. This allows administrators to verify that custom flows, scripts, and integrations function correctly without impacting production operations. **Why the other options are incorrect:** B: Activating security updates directly in production without prior sandbox testing risks breaking live business automation. C: Relying solely on automatic enforcement dates leaves no buffer to discover and resolve unexpected breaking changes. D: Salesforce Release Updates are mandatory security and architecture enhancements that cannot be permanently exempted.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 32,
  "statement": "Sales reps at Zenith Global frequently collaborate with the same assigned Solutions Engineer and Legal Advisor on client accounts. The sales manager wants these specific individuals automatically added with Read/Write access whenever a sales rep creates a new Account. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Custom Account-User Junction Objects"
   },
   {
    "key": "b",
    "text": "Criteria-Based Sharing Rules"
   },
   {
    "key": "c",
    "text": "Role Hierarchy auto-sharing nodes"
   },
   {
    "key": "d",
    "text": "Default Account Teams on user profile settings"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Default Account Teams allow individual users (or admins) to define a team of colleagues with predefined roles and access rights (e.g., Read/Write) that can be automatically added to any newly created Account record. **Why the other options are incorrect:** A: Sharing Rules grant record access based on field criteria or ownership, but do not add team members or assign specific team roles to records. B: Role Hierarchy grants vertical access upward, but cannot automatically assign horizontal cross-functional team members to individual records. C: Custom junction objects add relational data, but do not integrate natively with standard Account Team collaboration features.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 33,
  "statement": "Horizon Financial wants to enhance the Asset record page view. The customer care manager wants: A prominent, bold text warning message displayed at the top of the page only when an Asset is flagged as \"High Risk\". A quick way for representatives to update the related Account's status field directly from the Asset page layout without navigating away. Which two Lightning components should the Platform Administrator add to the Asset record page? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Rich Text component with component visibility filtering"
   },
   {
    "key": "b",
    "text": "Related List Single component"
   },
   {
    "key": "c",
    "text": "Related Record component"
   },
   {
    "key": "d",
    "text": "Record Detail component"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A Rich Text component allows administrators to format custom text (such as bold warning messages) and apply Component Visibility filters so it displays only when IsHighRisk__c = TRUE. A Related Record component allows users to view and edit fields from a parent record (such as updating Account Status) directly from the child record page. **Why the other options are incorrect:** C: The Record Detail component displays the current record's fields, but does not render formatted conditional warning banners or edit parent Account fields. D: Related List components display lists of child records, not single parent record fields.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 34,
  "statement": "Vanguard Health manages two distinct healthcare client categories: Academic Hospitals (which require 18 specialized fields and a 6-stage sales cycle) and Private Clinics (which require 5 basic fields and a 3-stage sales cycle). How should the Platform Administrator configure Salesforce to support both client categories on the Account object?",
  "options": [
   {
    "key": "a",
    "text": "Assign separate Permission Set Groups to control section visibility on a shared page layout."
   },
   {
    "key": "b",
    "text": "Build conditional Validation Rules on a single page layout to show or hide fields."
   },
   {
    "key": "c",
    "text": "Develop custom Lightning Web Components for each clinic category."
   },
   {
    "key": "d",
    "text": "Create separate Record Types paired with distinct Page Layouts and Sales Processes for each category."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record Types combined with distinct Page Layouts allow administrators to present different field layouts and picklist values (and sales processes) tailored to specific record categories. **Why the other options are incorrect:** A: Validation Rules enforce data input upon save; they cannot dynamically hide or display fields on page layouts. C: Page layout assignments are governed by profile and record type, not permission set groups. D: Creating custom LWC components introduces unnecessary code when standard Record Types and Page Layouts fulfill the requirement declaratively.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 35,
  "statement": "Starlight Solar wants sales reps to view a departmental sales dashboard. Executives require each sales rep viewing the dashboard to see metrics restricted strictly to the records they have permission to access based on their own sharing access. How should the Platform Administrator configure the dashboard?",
  "options": [
   {
    "key": "a",
    "text": "Configure a Dynamic Dashboard set to run as the logged-in user."
   },
   {
    "key": "b",
    "text": "Add a Public Group filter to the source reports."
   },
   {
    "key": "c",
    "text": "Save the dashboard in a Private Folder assigned to each rep."
   },
   {
    "key": "d",
    "text": "Set the dashboard Running User to the VP of Sales."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Dynamic Dashboard configured to run as the logged-in user displays data according to each viewer's individual database permissions and sharing access, delivering a personalized view on a single dashboard asset. **Why the other options are incorrect:** A: Setting a fixed Running User (like the VP of Sales) displays data according to that executive's access level, allowing reps to see records beyond their assigned permissions. C: Saving dashboards in private folders prevents users from accessing the dashboard file, but does not configure dynamic data display settings. D: Public groups manage record sharing and user sets, but cannot be added directly as report filters to dynamically filter per logged-in user.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 36,
  "statement": "Sales leadership at Crestview Media notices that the Expected Revenue field on Opportunity records displays amounts that do not match expected calculations. How should the Platform Administrator fix this issue across pipeline opportunities?",
  "options": [
   {
    "key": "a",
    "text": "Change the Forecast Category mapping on the Account object."
   },
   {
    "key": "b",
    "text": "Modify the Probability percentage associated with the Opportunity Stage in Setup."
   },
   {
    "key": "c",
    "text": "Adjust the Closed Won stage display label."
   },
   {
    "key": "d",
    "text": "Manually override the Expected Revenue formula calculation on individual records."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, Expected Revenue is automatically calculated as: Amount × Probability (%). The default probability is tied directly to the Opportunity Stage. Updating the probability percentage assigned to the stage in Setup recalculates Expected Revenue accurately. **Why the other options are incorrect:** B: Expected Revenue is a standard system-calculated field and cannot be manually overridden with custom text entries on standard record pages. C: Forecast Categories organize pipeline stages for forecasting reports, but do not drive the Expected Revenue mathematical formula. D: Renaming stage display labels does not alter the underlying probability percentage used in expected revenue calculations.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 37,
  "statement": "Precision Logistics wants to ensure that when a customer submits a web inquiry, an automated email acknowledgement is sent immediately. If the inquiry relates to \"Billing\", Email Template A should send; if it relates to \"Technical Support\", Email Template B should send. Which feature should the Platform Administrator configure on Cases?",
  "options": [
   {
    "key": "a",
    "text": "Escalation Rules with notification actions"
   },
   {
    "key": "b",
    "text": "Case Assignment Rules with routing actions"
   },
   {
    "key": "c",
    "text": "Auto-Response Rules with multiple rule entries based on inquiry type"
   },
   {
    "key": "d",
    "text": "Customer Support Process picklist assignments"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Auto-Response Rules automatically send targeted email responses to submitters upon lead or case creation. Administrators can configure multiple rule entries with specific filter criteria (e.g., Type = 'Billing') to send different email templates. **Why the other options are incorrect:** B: Case Assignment Rules route record ownership to users or queues; they do not manage customer auto-response email templates. C: Escalation Rules execute actions when open cases breach time limits, not immediate acknowledgements upon creation. D: Support Processes define which status picklist values are available, but do not send emails.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 38,
  "statement": "Zenith Health built a custom Quick Action on the Account object that generates a new Service Ticket record. Service representatives report that while the action works on desktop screens, it is missing when viewing Accounts inside the Salesforce Mobile App. How should the Platform Administrator make the quick action visible in the Salesforce Mobile App?",
  "options": [
   {
    "key": "a",
    "text": "Add the action to the \"Salesforce Mobile and Lightning Experience Actions\" section of the assigned Page Layout."
   },
   {
    "key": "b",
    "text": "Modify the Compact Layout on the Service Ticket object to include the action button."
   },
   {
    "key": "c",
    "text": "Include the quick action in the global Mobile Only App Navigation menu list."
   },
   {
    "key": "d",
    "text": "Build a custom mobile App Page using Lightning App Builder."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Quick actions appear in the mobile action bar and header highlights panel only if they are added to the \"Salesforce Mobile and Lightning Experience Actions\" section of the object's assigned Page Layout. **Why the other options are incorrect:** B: The mobile navigation menu manages tab navigation (such as Reports, Groups, or Object tabs), but does not place quick actions on record pages. C: Compact layouts determine which field columns appear in highlights panels; they do not govern quick action button visibility. D: Creating an App Page designs custom app landing views, but does not expose quick actions on individual record page layouts.",
  "module": "productivity"
 },
 {
  "simulado": 3,
  "number": 39,
  "statement": "Zenith Aerospace uses a custom object Shipment. Management wants support agents to quickly see the primary contact person for a shipment directly on the Shipment record page layout. When the primary contact changes on the Account, the shipment display must update automatically. What field type should the Platform Administrator create on Shipment?",
  "options": [
   {
    "key": "a",
    "text": "Lookup relationship field referencing Contact"
   },
   {
    "key": "b",
    "text": "Cross-object formula field referencing Account Primary Contact"
   },
   {
    "key": "c",
    "text": "Master-Detail relationship field referencing Contact"
   },
   {
    "key": "d",
    "text": "Text field updated via daily scheduled batch Apex"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Creating a Lookup relationship field on Shipment referencing the Contact object allows users to select and link the primary contact directly, displaying their details on the shipment page view. **Why the other options are incorrect:** B: Cross-object formula fields display read-only text values pulled from a parent lookup, but do not create a selectable record link if one does not exist. C: A Master-Detail relationship would enforce cascade deletion of shipments if a contact is deleted, which is inappropriate for contact-shipment tracking. D: Batch Apex is an unnecessary code-based solution for a standard declarative lookup requirement.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 40,
  "statement": "An administrator at Crestview Financial created a custom picklist field InvestmentTier on the Lead object. During lead conversion, the picklist value must automatically populate a corresponding field on the newly generated Opportunity record. Which two configuration steps must the administrator verify? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "A custom picklist field InvestmentTier exists on the Opportunity object."
   },
   {
    "key": "b",
    "text": "A Record-Triggered Flow is active to handle conversion data transfer."
   },
   {
    "key": "c",
    "text": "The Lead picklist field is mapped to the Opportunity picklist field in Lead Conversion Field Mapping."
   },
   {
    "key": "d",
    "text": "The field is set as Universally Required on the Lead object layout."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To transfer custom lead data to an Opportunity upon conversion, a matching target field of compatible data type must exist on the Opportunity object. The Lead field must be explicitly mapped to the target Opportunity field within Map Lead Fields in Object Manager. **Why the other options are incorrect:** C: Making the field required on the Lead layout forces data entry on the Lead, but does not map the value to the Opportunity during conversion. D: Lead conversion field mapping handles custom field data transfer natively without needing custom flows.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 41,
  "statement": "Titan Systems operates six regional consulting teams. Each team consists of a fixed trio: an Account Executive, a Systems Engineer, and a Legal Specialist. Management wants these three individuals automatically assigned with appropriate access rights whenever a new Account is created by any member of the team. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Create custom queues for each team and assign Account ownership to the queue."
   },
   {
    "key": "b",
    "text": "Configure standard Opportunity Splits across team roles."
   },
   {
    "key": "c",
    "text": "Instruct users to manually share each account record using Manual Sharing."
   },
   {
    "key": "d",
    "text": "Enable Account Teams and instruct users to set up a Default Account Team."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Account Teams support collaborative account management. Configuring Default Account Teams allows individual users (or admins) to define a persistent team structure (AE, Systems Engineer, Legal Specialist) with predefined roles and access levels that are automatically added whenever an Account is created. **Why the other options are incorrect:** B: Queues are supported for records like Cases, Leads, or custom objects, but Account ownership cannot be assigned to a queue. C: Manual sharing is tedious, error-prone, and unscalable for teams that consistently collaborate on every account. D: Opportunity Splits allocate financial credit on Opportunity deals, but do not manage collaborative team access on Account records.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 42,
  "statement": "Sales representatives at Nova Logistics want the CreditTier__c field value from parent Account records to display automatically on child Work Order record page layouts. Which type of field should the Platform Administrator build on the Work Order object?",
  "options": [
   {
    "key": "a",
    "text": "Master-Detail relationship field"
   },
   {
    "key": "b",
    "text": "Cross-object formula field"
   },
   {
    "key": "c",
    "text": "Custom Text field updated via daily scheduled flow"
   },
   {
    "key": "d",
    "text": "Roll-Up Summary field"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A cross-object formula field on a child object (Work Order) can pull and display read-only field data directly from a parent object (Account, e.g., Account.CreditTier__c) on the child page layout in real time. **Why the other options are incorrect:** B: Creating a Master-Detail relationship field establishes a structural link, but does not display specific parent field values on the child layout by itself. C: Building scheduled flows introduces unnecessary automation overhead when a declarative cross-object formula achieves real-time display natively. D: Roll-Up Summary fields aggregate data upward from child records to parent records; they cannot pull parent fields down to child records.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 43,
  "statement": "Vanguard Wealth wants financial advisors to schedule recurring check-in tasks for key clients that repeat automatically every three weeks. What should the Platform Administrator do to satisfy this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Enable Big Deal Alerts on the Task object."
   },
   {
    "key": "b",
    "text": "Build a Scheduled Flow to create task records every three weeks."
   },
   {
    "key": "c",
    "text": "Enable Recurring Activities in Setup."
   },
   {
    "key": "d",
    "text": "Configure an Approval Process for task generation."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Enabling \"Recurring Activities\" (or \"Creation of Recurring Tasks\") in Setup allows users to create tasks that automatically repeat on specified schedules (e.g., every 3 weeks) without custom automation. **Why the other options are incorrect:** B: Custom flows are unnecessary because Salesforce provides native recurring task functionality out-of-the-box. C: Approval processes route records for review and sign-off; they do not schedule recurring activity tasks. D: Big Deal Alerts notify management about high-value opportunities; they do not generate recurring tasks.",
  "module": "productivity"
 },
 {
  "simulado": 3,
  "number": 44,
  "statement": "Horizon Marketing needs to report on the total closed-won opportunity revenue generated across individual marketing initiatives. How should the Platform Administrator display this information?",
  "options": [
   {
    "key": "a",
    "text": "Run a standard Campaign Report and include the Value Won Opportunities in Campaign field column."
   },
   {
    "key": "b",
    "text": "Use a workflow rule to update a custom total field on Campaign whenever a deal is won."
   },
   {
    "key": "c",
    "text": "Create a Roll-Up Summary field on Opportunity referencing Campaign."
   },
   {
    "key": "d",
    "text": "Build a scheduled Apex job to aggregate opportunity amounts into custom campaign fields."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard Campaign Reports include the built-in summary field Value Won Opportunities in Campaign, which automatically sums the total value of all Closed-Won opportunities linked to the campaign in real time. **Why the other options are incorrect:** B: Scheduled Apex jobs add code complexity and maintenance overhead when standard reports fulfill the requirement natively. C: Standard Opportunities and Campaigns do not share a Master-Detail relationship, so Roll-Up Summary fields cannot be built on Campaign for Opportunities. D: Standard Workflow Rules cannot aggregate related record values across objects.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 45,
  "statement": "An administrator is configuring lifecycle stages and guidance banners using the Stage Setup Flow wizard in Setup. Which two standard objects are customizable using the Stage Setup Flow? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Campaign Members"
   },
   {
    "key": "b",
    "text": "Campaigns"
   },
   {
    "key": "c",
    "text": "Opportunities"
   },
   {
    "key": "d",
    "text": "Leads"
   }
  ],
  "correct": [
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The Stage Setup Flow in Salesforce allows administrators to customize lifecycle stages, probabilities, and guidance for Leads (qualification stages) and Opportunities (sales pipeline stages). **Why the other options are incorrect:** C: Campaigns track marketing initiatives and do not utilize stage lifecycle flows. D: Campaign Members track individual lead/contact participation in campaigns and do not have stage setup flows.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 46,
  "statement": "An administrator at Summit Energy wants to grant executive assistants the ability to manage user accounts, reset passwords, and assign specific profiles within their department without granting them full System Administrator profile privileges. Which feature should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Custom Role Hierarchy Nodes"
   },
   {
    "key": "b",
    "text": "Delegated Administration"
   },
   {
    "key": "c",
    "text": "Modify All Data System Permission"
   },
   {
    "key": "d",
    "text": "Permission Set Groups with Muting"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Delegated Administration allows administrators to delegate specific administrative tasks (such as managing users in specified roles, resetting passwords, and assigning specified profiles/permission sets) to non-admin users safely. **Why the other options are incorrect:** B: Permission Set Groups manage object and field permissions for users, but cannot delegate administrative Setup user-management privileges. C: Granting \"Modify All Data\" grants full administrative data access across the entire organization, violating least-privilege security. D: Role Hierarchy controls data visibility up the management chain; it does not grant administrative Setup privileges like resetting user passwords.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 47,
  "statement": "Titan Global wants to track client engagement scores on Accounts. Management wants a dashboard gauge widget to visualize total high-tier accounts relative to the annual corporate target. Where does the dashboard gauge component get its target value thresholds?",
  "options": [
   {
    "key": "a",
    "text": "Extracted from Custom Metadata Types"
   },
   {
    "key": "b",
    "text": "Pulled automatically from Fiscal Year Setup settings"
   },
   {
    "key": "c",
    "text": "Manually specified within the Dashboard Component properties"
   },
   {
    "key": "d",
    "text": "Dynamically calculated from the Role Hierarchy"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When configuring a Gauge or Metric widget on a Salesforce Dashboard, the administrator manually sets the minimum, breakpoint, and maximum target values directly within the component's properties panel. **Why the other options are incorrect:** B: Role hierarchy governs record access, not dashboard component target thresholds. C: Fiscal Year settings define calendar start dates, not custom operational targets for gauge widgets. D: Target thresholds for gauge widgets are set directly in the dashboard editor properties, not pulled from Custom Metadata Types.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 48,
  "statement": "An administrator at BioLabs Healthcare needs to import 85,000 historical inventory tracking records into a custom object from a legacy database CSV file. Which tool should the Platform Administrator use to execute this import?",
  "options": [
   {
    "key": "a",
    "text": "Mass Transfer Records tool"
   },
   {
    "key": "b",
    "text": "Data Loader"
   },
   {
    "key": "c",
    "text": "Data Import Wizard"
   },
   {
    "key": "d",
    "text": "Schema Builder"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Data Loader is designed for bulk data operations supporting up to 5 million records at a time, making it the correct choice for importing 85,000 records into a custom object. **Why the other options are incorrect:** A: The Data Import Wizard is limited to importing a maximum of 50,000 records per operation and cannot handle an 85,000-record file. B: Schema Builder is a graphical tool used to view and edit database objects, fields, and relationships; it cannot import data records. D: Mass Transfer Records is an administrative tool used to reassign ownership of existing standard records, not import new data files.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 49,
  "statement": "Nova Systems requires sales representatives to provide a detailed text explanation in LossReason__c whenever an Opportunity stage is changed to \"Closed Lost\". How should the Platform Administrator enforce this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Build a Workflow Rule to populate default text when stage changes."
   },
   {
    "key": "b",
    "text": "Create a Validation Rule that fires an error if Stage equals \"Closed Lost\" and LossReason__c is blank."
   },
   {
    "key": "c",
    "text": "Make LossReason__c required on the standard Page Layout editor."
   },
   {
    "key": "d",
    "text": "Mark LossReason__c as Universally Required on the field definition."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Validation Rule allows conditional enforcement. Using a formula like AND(ISPICKVAL(StageName, \"Closed Lost\"), ISBLANK(LossReason__c)) prevents saving the record without a loss reason specifically when closed lost. **Why the other options are incorrect:** B: Universally required fields force data entry for all opportunities across all stages, preventing reps from saving open deals without a loss reason. C: Workflow rules execute automated actions, but cannot display validation errors or force user text input. D: Marking a field required on a page layout enforces data entry across all stages for users on that layout, failing the conditional stage requirement.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 50,
  "statement": "Crestview Real Estate maintains a custom object Property__c and a child custom object ListingOffer__c connected via a Master-Detail relationship. Management wants to display the highest offer amount directly on the parent Property record without using code. Which field type should the Platform Administrator create on Property__c?",
  "options": [
   {
    "key": "a",
    "text": "Roll-Up Summary field calculating the MAX value of OfferAmount__c"
   },
   {
    "key": "b",
    "text": "Auto-Number field formatted for currency values"
   },
   {
    "key": "c",
    "text": "Lookup relationship field referencing ListingOffer__c"
   },
   {
    "key": "d",
    "text": "Cross-Object Formula field referencing ListingOffer__c.OfferAmount__c"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Roll-Up Summary fields can be created on the master object in a Master-Detail relationship to calculate aggregate values (SUM, COUNT, MIN, MAX) from related child detail records. **Why the other options are incorrect:** B: Cross-Object Formula fields pull data down from a parent record to display on a child record; they cannot aggregate data up from multiple child records to a parent. C: Auto-Number fields generate sequential numeric identifiers (e.g., PROP-0001); they do not aggregate financial record data. D: Lookup relationships establish record links, but do not calculate or display aggregate metrics like maximum offer amounts.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 51,
  "statement": "Horizon Telecom needs an automated background process that fires whenever a high-value customer Account is updated. If the AccountTier field equals \"Enterprise\", the system must automatically create a renewal task and send an Outbound Message to an external provisioning portal. Which tool should the Platform Administrator build in Flow Builder?",
  "options": [
   {
    "key": "a",
    "text": "Screen Flow"
   },
   {
    "key": "b",
    "text": "Autolaunched Flow (No Trigger)"
   },
   {
    "key": "c",
    "text": "Record-Triggered Flow"
   },
   {
    "key": "d",
    "text": "Schedule-Triggered Flow"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-Triggered Flows execute automatically in the background when a record is created or updated. They can evaluate field conditions (e.g., AccountTier = 'Enterprise'), create child records (Tasks), and trigger Outbound Messages. **Why the other options are incorrect:** A: Autolaunched flows without triggers must be called explicitly by Apex or another flow; they do not trigger automatically on record save. C: Schedule-Triggered Flows execute on a calendar schedule, not immediately when an Account field is updated. D: Screen Flows require human interaction via UI screens and cannot run as background automation upon record updates.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 52,
  "statement": "Titan Defense requires strict network security for all user accounts assigned to the \"Offshore Contractors\" profile. Users must be prevented from logging into Salesforce from unauthorized IP addresses, and login policies must evaluate their IP address on every page request during an active session. Which two configurations must the Platform Administrator verify on the profile? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Multi-Factor Authentication (MFA) is set to bypass external IP challenges."
   },
   {
    "key": "b",
    "text": "The \"Enforce Login IP Ranges on Every Request\" setting is enabled."
   },
   {
    "key": "c",
    "text": "Single Sign-On (SSO) is enabled on a assigned permission set."
   },
   {
    "key": "d",
    "text": "Specific allowed IP ranges are defined in Login IP Ranges on the profile."
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Login IP Ranges defined on a profile restrict authentication strictly to approved network IP addresses. Enabling Enforce Login IP Ranges on Every Request ensures Salesforce verifies the user's IP address continuously throughout their active session, instantly terminating access if their IP changes to an unauthorized address. **Why the other options are incorrect:** C: SSO configures identity provider authentication, but does not enforce continuous profile-level IP session restrictions. D: Bypassing MFA weakens security rather than restricting network access by IP address.",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 53,
  "statement": "A Platform Administrator at Starlight Energy is configuring Case Escalation Rules to manage SLA compliance for unresolved customer tickets. Which two standard automated actions can the administrator configure within an escalation rule entry? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Reopen closed case records automatically"
   },
   {
    "key": "b",
    "text": "Reassign record ownership to a designated user or queue"
   },
   {
    "key": "c",
    "text": "Dispatch automated email notifications to specified users or managers"
   },
   {
    "key": "d",
    "text": "Update the Case Priority picklist field value to Urgent"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Case Escalation Rules support two standard actions when a case breaches time criteria: reassigning the case (to another user or queue) and sending email notifications (to the owner, manager, or additional recipients). **Why the other options are incorrect:** C: Escalation rules cannot directly modify record field values (like Priority); field updates require record-triggered flows. D: Escalation rules cannot alter case status or reopen closed cases.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 54,
  "statement": "Summit Logistics created a custom text field UrgentNotes__c on the Asset object. The support manager wants this field displayed prominently in the top header highlights panel of the Asset record page view. How should the Platform Administrator accomplish this?",
  "options": [
   {
    "key": "a",
    "text": "Drag the field into the top section of the standard Page Layout editor."
   },
   {
    "key": "b",
    "text": "Create a custom Compact Layout containing the field and assign it to the target user profile."
   },
   {
    "key": "c",
    "text": "Create a new page layout section titled \"Highlights Panel\"."
   },
   {
    "key": "d",
    "text": "Set the field as universally required on the field definition."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Fields displayed in the top header Highlights Panel on Lightning record pages are controlled by the assigned Compact Layout for that object. **Why the other options are incorrect:** B: Fields placed on standard page layouts appear in the main record body, not in the top header highlights panel. C: Creating a layout section titled \"Highlights Panel\" does not convert it into the top header panel; header fields are governed exclusively by compact layouts. D: Making a field required forces data input, but does not position the field inside the highlights panel.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 55,
  "statement": "Zenith Manufacturing needs a solution inside Salesforce to collect binding electronic signatures on sales contracts and automatically store signed documents on related Opportunity records. Standard Salesforce functionality does not provide native e-signature capabilities. How should the Platform Administrator implement this functionality?",
  "options": [
   {
    "key": "a",
    "text": "Build a Screen Flow utilizing custom HTML canvas components without external apps."
   },
   {
    "key": "b",
    "text": "Write a custom Apex trigger to render digital signature capture boxes on standard page layouts."
   },
   {
    "key": "c",
    "text": "Configure Outbound Messages to send contract files to an external FTP server."
   },
   {
    "key": "d",
    "text": "Install a prebuilt electronic signature application from the Salesforce AppExchange."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Native Salesforce CRM does not include built-in electronic signature features out-of-the-box. Downloading and installing a prebuilt, supported e-signature package from the AppExchange is the recommended, scalable declarative approach. **Why the other options are incorrect:** A: Writing custom Apex triggers is unnecessary, complex to maintain, and does not natively generate legally binding digital signature infrastructure. C: Standard Flow Builder screen components do not support legally binding e-signature capture without complex custom component coding or third-party integrations. D: Outbound Messages transmit XML data updates to web service endpoints; they do not collect interactive customer e-signatures on contracts.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 56,
  "statement": "An analytics executive at Apex Global notices that a pipeline dashboard component displays 150 total active deals, but when clicking the component to view the underlying source report, the report displays only 120 deals. What are two primary causes for this numerical discrepancy between the dashboard component and the report view? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The underlying report folder permissions are set to Private."
   },
   {
    "key": "b",
    "text": "The dashboard component data has not been refreshed since recent database updates occurred."
   },
   {
    "key": "c",
    "text": "The running user of the dashboard has broader record sharing access than the logged-in user viewing the report."
   },
   {
    "key": "d",
    "text": "The report source query uses a Cross Filter that is automatically disabled in dashboard components."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Dashboards display cached data snapshots from the last time the dashboard was refreshed. If new records were added or modified after the last refresh, the dashboard component metrics will differ from live report metrics until refreshed. Dashboards display data according to the database permissions of the designated Running User. If the running user (e.g., an executive) has permission to view more records than the logged-in user viewing the report, the dashboard component will show a higher count than the live report view. **Why the other options are incorrect:** A: If a user lacks access to the underlying report folder, Salesforce presents an authorization error when the user clicks the dashboard component, rather than loading a filtered report. D: Cross Filters configured in reports are fully supported by dashboard components and do not get automatically disabled.",
  "module": "data"
 },
 {
  "simulado": 3,
  "number": 57,
  "statement": "A support team lead at Zenith Care is going on extended medical leave. The department manager needs to immediately reassign ownership of several dozen open support cases from the departing lead to a replacement representative. Which two user assignments or system permissions allow a user to perform this bulk case reassignment? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "A user assigned the Manage Cases system permission"
   },
   {
    "key": "b",
    "text": "A user assigned the System Administrator profile"
   },
   {
    "key": "c",
    "text": "A user assigned to a higher position in the Role Hierarchy without case edit rights"
   },
   {
    "key": "d",
    "text": "A user assigned Read access to the parent Account object"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The Manage Cases permission allows users to transfer ownership of cases regardless of who owns the records. The System Administrator profile grants full system access, including the ability to transfer ownership of any case record across the organization. **Why the other options are incorrect:** B: Having Read access to parent Account records does not grant permission to reassign child Case ownership. D: Being higher in the Role Hierarchy grants record visibility, but transferring case ownership requires explicit edit rights, case ownership, or the Manage Cases permission.",
  "module": "service"
 },
 {
  "simulado": 3,
  "number": 58,
  "statement": "Starlight Solar wants to track custom engineering designs (EquipmentBlueprint__c) for each product record. Because a single product can have multiple designs across different manufacturing phases, management wants to see the total count of active designs directly on the Product page layout. Which two steps should the Platform Administrator execute to fulfill this requirement? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Create a custom object to represent the individual design records."
   },
   {
    "key": "b",
    "text": "Create a custom Lookup field on the Product object pointing to the Design object."
   },
   {
    "key": "c",
    "text": "Enable standard design tracking in Company Information settings."
   },
   {
    "key": "d",
    "text": "Add a Master-Detail relationship field on the custom Design object pointing to the Product object."
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Creating a custom object (EquipmentBlueprint__c) allows tracking multiple individual design records per product. Adding a Master-Detail relationship field on the custom Design object pointing to Product allows the administrator to build a native Roll-Up Summary field on the Product object to count related design records automatically. **Why the other options are incorrect:** C: Creating a lookup field on Product pointing to Design would only allow linking one design to a product, rather than aggregating multiple designs. D: There is no standard \"design tracking\" setting in Company Information.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 59,
  "statement": "AeroTech Logistics is configuring automated actions within an Approval Process for corporate procurement requests. Which two standard automated actions can the Platform Administrator configure to run upon record approval or rejection? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Chatter Post"
   },
   {
    "key": "b",
    "text": "Field Update"
   },
   {
    "key": "c",
    "text": "Email Alert"
   },
   {
    "key": "d",
    "text": "Autolaunched Flow"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Salesforce approval processes natively support four standard automated actions during submission, approval, rejection, or recall: Field Updates, Email Alerts, Tasks, and Outbound Messages. **Why the other options are incorrect:** C: Approval processes cannot directly execute Autolaunched Flows as standard step actions. D: Chatter Posts cannot be added directly as native approval process actions; posting to Chatter requires triggering external record flows or Process Builder.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 60,
  "statement": "Executive leadership at Crestview Real Estate requests an automated alert whenever a commercial property opportunity reaches a total value of $750,000 or greater. What feature should the Platform Administrator configure to meet this request easily?",
  "options": [
   {
    "key": "a",
    "text": "Big Deal Alerts"
   },
   {
    "key": "b",
    "text": "Kanban Warning Flags"
   },
   {
    "key": "c",
    "text": "Opportunity Update Reminders"
   },
   {
    "key": "d",
    "text": "Guidance for Success"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Big Deal Alerts automatically trigger email notifications to designated users or executives whenever an Opportunity reaches or exceeds a specified amount or probability threshold. **Why the other options are incorrect:** B: Guidance for Success displays stage coaching and tips inside Opportunity Path, but does not send automated executive alerts. C: Opportunity Update Reminders prompt reps to update open pipeline deals, but do not alert management about specific high-value deal thresholds. D: Kanban flags highlight visual warnings on list view cards, but do not send automated system email notifications.",
  "module": "sales"
 },
 {
  "simulado": 3,
  "number": 61,
  "statement": "Apex Financial requires that when an Opportunity reaches the \"Underwriting\" stage, the CreditScore field becomes mandatory for standard users. However, Risk Executives must be able to update opportunities in this stage without entering a CreditScore. How should the Platform Administrator configure this conditional requirement?",
  "options": [
   {
    "key": "a",
    "text": "Set the CreditScore field as required on all Page Layouts."
   },
   {
    "key": "b",
    "text": "Build a Validation Rule requiring CreditScore while excluding the Risk Executive profile."
   },
   {
    "key": "c",
    "text": "Set CreditScore as universally required on the field definition."
   },
   {
    "key": "d",
    "text": "Use a Screen Flow to force field entry for all users."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Validation Rules support conditional criteria, allowing administrators to mandate field entry based on stage (StageName = 'Underwriting') while exempting specific executive profiles ($Profile.Name != 'Risk Executive'). **Why the other options are incorrect:** A: Universally required fields enforce data entry for all users across all stages without exception. C: Page layout field requirements apply to all users assigned to that layout and cannot conditionally exempt specific profiles unless separate layouts are assigned. D: Screen Flows do not enforce validation rules during standard record edits from page layouts.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 62,
  "statement": "Nova Healthcare is creating a Screen Flow for patient intake. If the patient checks a \"Has Food Allergies\" checkbox component on the screen, a text input component for \"Allergy Details\" must appear. If unchecked, the text component should remain hidden. What is the most efficient way for the Platform Administrator to configure this behavior?",
  "options": [
   {
    "key": "a",
    "text": "Use Assignment elements to branch the flow onto separate screens."
   },
   {
    "key": "b",
    "text": "Add an Autolaunched Flow subflow to refresh the screen layout."
   },
   {
    "key": "c",
    "text": "Build a Validation Rule on the patient object definition."
   },
   {
    "key": "d",
    "text": "Configure Conditional Visibility on the \"Allergy Details\" screen component."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional Visibility settings on Screen Flow components allow administrators to declaratively show or hide screen fields dynamically based on user selections made in other fields on the exact same screen. **Why the other options are incorrect:** A: Using separate Assignment elements and multiple screens creates unnecessary flow branching and extra user clicks compared to conditional component visibility. B: Validation Rules enforce data entry rules during database save operations; they cannot dynamically hide UI components on a screen. C: Subflows execute background logic, but are not used to manage dynamic field visibility on an active flow screen.",
  "module": "automation"
 },
 {
  "simulado": 3,
  "number": 63,
  "statement": "Vanguard Logistics needs to track equipment maintenance assets. Each Asset must be linked to a parent Account. If an Account is deleted, all related equipment maintenance asset records must be deleted automatically. Furthermore, summary fields on the Account must calculate total equipment maintenance costs. Which relationship type should the Platform Administrator establish on the custom Asset object?",
  "options": [
   {
    "key": "a",
    "text": "External Lookup relationship to Account"
   },
   {
    "key": "b",
    "text": "Lookup relationship to Account"
   },
   {
    "key": "c",
    "text": "Master-Detail relationship to Account"
   },
   {
    "key": "d",
    "text": "Hierarchical relationship to Account"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Master-Detail relationship enforces cascade deletion (deleting the parent Account deletes child assets) and enables native Roll-Up Summary fields on the parent Account to aggregate child asset values. **Why the other options are incorrect:** A: Lookup relationships do not support native Roll-Up Summary fields and do not enforce cascade deletion by default. C: External Lookups link Salesforce records to external objects stored outside Salesforce, which does not apply here. D: Hierarchical relationships are a specialized lookup type available only on the User object.",
  "module": "objects"
 },
 {
  "simulado": 3,
  "number": 64,
  "statement": "An administrator at BioHealth Diagnostics installed an AppExchange managed package that includes a Permission Set Group. The package grants Delete access on critical Audit Log objects. To comply with security policies, the administrator must prevent users assigned to this group from deleting these records without modifying the managed package directly. How should the Platform Administrator restrict Delete access?",
  "options": [
   {
    "key": "a",
    "text": "Edit user profile permissions to override the permission set group."
   },
   {
    "key": "b",
    "text": "Clone the standard System Administrator profile and remove Delete access."
   },
   {
    "key": "c",
    "text": "Create an owner-based sharing rule blocking Delete operations."
   },
   {
    "key": "d",
    "text": "Add a Muting Permission Set to the Permission Set Group to mute Delete permissions on those objects."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Muting Permission Set is used within a Permission Set Group to explicitly mute (disable) specific permissions granted by permission sets in that group, allowing administrators to customize managed package permissions cleanly. **Why the other options are incorrect:** B: Modifying administrator profiles does not mute permissions granted by assigned permission set groups on standard users. C: Sharing rules govern record visibility, not object-level CRUD permissions like Delete access. D: Profiles cannot selectively override or subtract permissions granted by assigned permission set groups (unless a muting permission set is used within the group).",
  "module": "config"
 },
 {
  "simulado": 3,
  "number": 65,
  "statement": "System administrators at SolarPulse notice that a critical validation rule on the Opportunity object was mysteriously disabled over the weekend, allowing incomplete records to enter the system. Which tool should the Platform Administrator inspect to identify who disabled the rule and when the change occurred?",
  "options": [
   {
    "key": "a",
    "text": "Field History Tracking"
   },
   {
    "key": "b",
    "text": "Setup Audit Trail"
   },
   {
    "key": "c",
    "text": "Event Monitoring Inspector"
   },
   {
    "key": "d",
    "text": "System Health Check"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Setup Audit Trail tracks administrative metadata changes (such as creating, editing, or deactivating validation rules, workflow rules, or fields), recording the administrator's name, the action taken, and the timestamp. **Why the other options are incorrect:** B: Field History Tracking tracks data value changes on individual object records, not administrative configuration changes in Setup. C: Event Monitoring logs high-level user activity (like report exports and logins), but is not the primary audit tool for setup metadata edits. D: System Health Check evaluates security settings against recommended security baselines, but does not track administrative modification histories.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 1,
  "statement": "A field sales representative at Starlight Solar calls the IT help desk complaining that they cannot log into Salesforce from their mobile browser. What should the Platform Administrator inspect first on the user's record detail page to identify why the login attempts failed?",
  "options": [
   {
    "key": "a",
    "text": "The personal Security Token setting"
   },
   {
    "key": "b",
    "text": "The Setup Audit Trail log"
   },
   {
    "key": "c",
    "text": "The Login History related list"
   },
   {
    "key": "d",
    "text": "The Password Policies link under Company Information"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Login History related list on a user's record details every login attempt, including the timestamp, IP address, browser type, and specific failure reason (e.g., Invalid Password, Login Hours Restriction, or Restricted IP). **Why the other options are incorrect:** B: Setup Audit Trail records administrative configuration changes made in Setup, not individual user authentication attempts. C: Security tokens are used for API/desktop tool integrations, not standard mobile browser UI authentication failures. D: Password Policies define global rules, but do not display individual failed authentication event logs for a specific user.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 2,
  "statement": "Horizon Financial wants to allocate proportional financial credit and overlay tracking among multiple deal team members based on their percentage of effort contributed toward closing complex commercial loans. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Opportunity Splits"
   },
   {
    "key": "b",
    "text": "Sales Processes"
   },
   {
    "key": "c",
    "text": "Record Queues"
   },
   {
    "key": "d",
    "text": "Case Assignment Rules"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Opportunity Splits allow administrators to divide deal revenue or overlay credit among members of an Opportunity Team based on their contribution percentage. **Why the other options are incorrect:** A: Case Assignment Rules route ownership of support tickets, not financial credit on sales deals. C: Queues hold unassigned records for groups; they do not allocate deal revenue or percentage credit. D: Sales Processes define pipeline stage picklist options, but do not divide financial deal credit among team members.",
  "module": "sales"
 },
 {
  "simulado": 4,
  "number": 3,
  "statement": "An IT manager at BioHealth Diagnostics has been tracking assigned Salesforce user licenses, feature licenses, and assigned permission sets manually in an external Excel spreadsheet. What standard Salesforce feature should the Platform Administrator recommend to replace the spreadsheet and audit assignments directly in Salesforce?",
  "options": [
   {
    "key": "a",
    "text": "Permission Set Groups Muting Inspector"
   },
   {
    "key": "b",
    "text": "Login History Export"
   },
   {
    "key": "c",
    "text": "User Report"
   },
   {
    "key": "d",
    "text": "Lightning Usage App"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Creating a User Report (using standard report types like Users or User with Permission Sets) allows administrators to audit assigned profiles, active user seats, feature licenses, and permission set assignments dynamically within Salesforce. **Why the other options are incorrect:** B: The Lightning Usage App tracks platform adoption, active user counts, and browser usage trends, but does not produce detailed tabular audits of user permission sets. C: Login History records authentication events (IP, timestamp, status), but does not report on assigned object permissions or user licenses. D: \"Permission Set Groups Muting Inspector\" is not a standard reporting tool for auditing user license assignments.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 4,
  "statement": "Account managers and Customer Care reps need to view different key field summaries on the hover pop-ups and mobile views for related Case records. What should the Platform Administrator configure to assign profile-specific record summary header fields?",
  "options": [
   {
    "key": "a",
    "text": "Search Layouts"
   },
   {
    "key": "b",
    "text": "Compact Layouts"
   },
   {
    "key": "c",
    "text": "Related Lookup Filters"
   },
   {
    "key": "d",
    "text": "Page Layout Sections"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Compact Layouts control the key fields displayed in record header highlights panels, mobile record headers, and related list hover pop-ups. Different compact layouts can be assigned to different user profiles. **Why the other options are incorrect:** A: Search Layouts determine which field columns appear in search results lists and lookup dialogs. C: Page Layout Sections organize fields on the main record detail page view, but do not control hover pop-ups or compact highlights. D: Related Lookup Filters restrict which records appear in lookup drop-down menus; they do not dictate hover summary fields.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 5,
  "statement": "Support representatives at Horizon Healthcare manually email patients whenever a medical inquiry case is closed. To prevent reps from forgetting this step, management wants the closing notification process automated. Which two settings should the Platform Administrator configure? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Enable the \"Notify Contact\" checkbox on the Case Close Page Layout."
   },
   {
    "key": "b",
    "text": "Configure Auto-Response Rules set to trigger on Case Close."
   },
   {
    "key": "c",
    "text": "Add the Knowledge component to the Case Close page layout."
   },
   {
    "key": "d",
    "text": "Select a Case Close Email Template under Support Settings."
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Case Close Email Template: Defines the standard email template sent automatically to customer contacts when a case is marked closed. Notify Contact Checkbox: When included and checked on the Case Close Page Layout, it triggers the automated closing email dispatch to the contact upon record save. **Why the other options are incorrect:** C: Auto-Response Rules trigger automatically upon initial record creation (e.g., Web-to-Case), not upon case closure. D: The Knowledge component provides access to knowledge base articles, but does not send automated closing email notifications to customers.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 6,
  "statement": "An administrator wants to hide the custom Equipment__c object tab from appearing in the App Launcher or navigation bar for sales profiles, while still allowing those users to view Equipment records when navigating through lookup links or related lists on Accounts. Which profile setting should the Platform Administrator modify?",
  "options": [
   {
    "key": "a",
    "text": "Tab Settings (Set to Tab Hidden)"
   },
   {
    "key": "b",
    "text": "Object Permissions (Remove Read)"
   },
   {
    "key": "c",
    "text": "App Permissions (Disable Sales Console)"
   },
   {
    "key": "d",
    "text": "Organization-Wide Sharing Defaults"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Setting a tab to Tab Hidden in a Profile removes the tab from the App Launcher and navigation bar, but still permits users to view and edit records of that object via lookup links or related lists if their Object Permissions grant access. **Why the other options are incorrect:** A: Organization-Wide Defaults govern record-level sharing access, not tab menu visibility in the UI. B: Removing Read Object Permissions revokes all access to the object, preventing users from viewing records anywhere (including lookup links and related lists). D: Disabling app permissions affects app launcher access, but does not specifically configure object tab display behavior.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 7,
  "statement": "Crestview Logistics needs to maintain identical picklist choices for FreightCategory__c across both the Shipment__c and Invoice__c custom objects. Whenever marketing adds a new category value, it must automatically update on both objects without manual duplicate maintenance. Which feature should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Master-Detail Relationship"
   },
   {
    "key": "b",
    "text": "Global Picklist Value Set"
   },
   {
    "key": "c",
    "text": "Custom Metadata Types"
   },
   {
    "key": "d",
    "text": "Dependent Picklist Matrix"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Global Picklist Value Set allows administrators to define a single centralized list of picklist values in Setup and share it across multiple custom picklist fields on different objects, ensuring consistency and centralized management. **Why the other options are incorrect:** B: Custom Metadata Types store application metadata and configuration records, but do not manage standard UI picklist field choices across objects. C: Master-Detail relationships establish parent-child object links, but do not share or synchronize picklist field values between objects. D: Dependent Picklists control which options appear based on another field on the same object; they do not share value sets across different objects.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 8,
  "statement": "Vanguard Energy has a Screen Flow for site inspections. If the boolean checkbox field SafetyAuditRequired__c on the location record is checked, the flow must bypass the initial questionnaire screen and navigate directly to the hazard logging screen. How should the Platform Administrator configure the outcome condition inside the Flow's Decision element?",
  "options": [
   {
    "key": "a",
    "text": "Configure a text comparison operator Contains using the string value \"SafetyAuditRequired\"."
   },
   {
    "key": "b",
    "text": "Set the comparison operator Equals using the plain text string value \"True\"."
   },
   {
    "key": "c",
    "text": "Set the resource SafetyAuditRequired__c to Equals the global constant {!$GlobalConstant.True}."
   },
   {
    "key": "d",
    "text": "Compare the resource SafetyAuditRequired__c to Does Not Equal the global constant {!$GlobalConstant.False} inside a text formula string."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Flow Builder, evaluating whether a boolean checkbox field is checked requires comparing the field resource to the standard system global constant {!$GlobalConstant.True} using the Equals operator. **Why the other options are incorrect:** B: The Contains operator is used to evaluate substring matches within text fields, not boolean checkbox values. C: Using a plain text string \"True\" creates a data type mismatch because boolean fields evaluate against system boolean constants, not text strings. D: While checking != False is logically similar in standard programming, best practice in Flow Builder decisions is to evaluate boolean flags directly against {!$GlobalConstant.True}.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 9,
  "statement": "An administrator at Vanguard Freight attempts to change the relationship field on ShipmentItem__c pointing to Shipment__c from Master-Detail to Lookup. Salesforce blocks the change with a system error. What is preventing the administrator from converting this relationship?",
  "options": [
   {
    "key": "a",
    "text": "The lookup field is set to required on the page layout editor."
   },
   {
    "key": "b",
    "text": "All child ShipmentItem__c records contain values in the lookup field."
   },
   {
    "key": "c",
    "text": "The child object is referenced by a junction object elsewhere in Setup."
   },
   {
    "key": "d",
    "text": "Active Roll-Up Summary fields exist on the parent Shipment__c object."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce prevents converting a Master-Detail relationship into a Lookup relationship if any Roll-Up Summary fields exist on the parent object. Roll-up summary fields rely on master-detail architecture, so they must be deleted before converting the relationship. **Why the other options are incorrect:** B: Having values in all child records is required when converting from Lookup to Master-Detail, but does not prevent converting from Master-Detail to Lookup. C: Junction objects elsewhere in the database schema do not prevent relationship conversion between these two objects. D: Page layout field settings do not block database schema relationship conversions.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 10,
  "statement": "Horizon Healthcare hired seasonal data entry specialists to log temporary patient intake records into Salesforce. Management wants a clear way to differentiate these seasonal intake records from standard clinical patient records, present a simplified field layout, and restrict available status values. How should the Platform Administrator fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Build a Web-to-Lead form for internal data entry staff."
   },
   {
    "key": "b",
    "text": "Create a Scheduled Flow to tag record owners after saving."
   },
   {
    "key": "c",
    "text": "Assign a dedicated Record Type paired with a customized Page Layout to the seasonal team."
   },
   {
    "key": "d",
    "text": "Build an external portal in Experience Cloud for internal staff."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record Types paired with custom Page Layouts allow administrators to offer tailored page views, different section layouts, and filtered picklist choices for specific business processes or user groups. **Why the other options are incorrect:** A: Web-to-Lead forms are designed to capture public web inquiries from external prospects, not for internal staff entering data inside Salesforce. C: Scheduled Flows execute background processing, but cannot present custom field layouts or restrict UI picklist options during record creation. D: Experience Cloud portals provide external access for customers or partners, which adds unnecessary licensing and setup overhead for internal employees.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 11,
  "statement": "What is the correct order of automated execution when a Case record is saved in Salesforce?",
  "options": [
   {
    "key": "a",
    "text": "Assignment Rules -> Auto-Response Rules -> Workflow Rules -> Escalation Rules"
   },
   {
    "key": "b",
    "text": "Validation Rules -> Escalation Rules -> Workflow Rules -> Auto-Response Rules"
   },
   {
    "key": "c",
    "text": "Workflow Rules -> Assignment Rules -> Auto-Response Rules -> Escalation Rules"
   },
   {
    "key": "d",
    "text": "Auto-Response Rules -> Assignment Rules -> Escalation Rules -> Workflow Rules"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a Case record is saved, Salesforce executes automated rules in a specific sequence: Assignment Rules execute first to establish ownership, followed by Auto-Response Rules (sending customer emails), Workflow Rules (or record-triggered flows), and finally Escalation Rules (evaluating aging criteria). **Why the other options are incorrect:** A: Incorrect order; Validation rules execute before database triggers, and Auto-Response rules execute before Escalation rules. C: Incorrect order; Assignment and Auto-Response rules run before background Workflow rules and timed Escalation rules. D: Incorrect order; Assignment rules must run before Auto-Response rules so response context and ownership are established.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 12,
  "statement": "Zenith Financial wants to bolster user account security and mandate strict credential creation guidelines across the organization. Which three settings can the Platform Administrator configure under Password Policies in Setup? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Mandatory password manager app integration"
   },
   {
    "key": "b",
    "text": "Password complexity requirements"
   },
   {
    "key": "c",
    "text": "Number of days until password expiration"
   },
   {
    "key": "d",
    "text": "Prohibited password values"
   },
   {
    "key": "e",
    "text": "Automatic user profile revocation"
   }
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Prohibited Password Values: Restricts users from using common or easily guessed words in their passwords. Number of Days Until Expiration: Determines how frequently users must change their passwords (e.g., every 30, 60, or 90 days). Password Complexity Requirements: Enforces specific combinations of alpha, numeric, and special characters. **Why the other options are incorrect:** D: Salesforce Password Policies enforce credential rules, but cannot mandate third-party password manager app installations on local devices. E: Password policies lock accounts after failed attempts, but do not revoke or delete user profiles.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 13,
  "statement": "An administrator at Zenith Telecom built a custom report for sales directors, but the directors report that they cannot locate or open the report. Which two issues explain why the directors cannot access this report? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The organization has reached its total quota limit for custom reports."
   },
   {
    "key": "b",
    "text": "The report is saved inside the administrator's \"My Private Reports\" folder."
   },
   {
    "key": "c",
    "text": "The Custom Report Type used to build the report is set to \"In Development\"."
   },
   {
    "key": "d",
    "text": "The sales directors lack the \"Modify All Data\" system permission."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Reports stored in private folders (like \"My Private Reports\") are accessible only to the owner; other users cannot view them. While a Custom Report Type status is set to In Development, only System Administrators can view or build reports with it; standard users cannot see or access reports built from it until it is set to Deployed. **Why the other options are incorrect:** C: Reaching report limits prevents creating new report types, but does not hide existing reports from users. D: Users do not need \"Modify All Data\" to view reports; standard report viewing requires basic report permissions and folder access.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 14,
  "statement": "Crestview Financial needs urgent executive dashboards created for their asset management and wealth advisory teams within 48 hours without increasing software budgets. What should the Platform Administrator do to meet this request?",
  "options": [
   {
    "key": "a",
    "text": "Hire an external Salesforce consulting partner to build custom dashboards."
   },
   {
    "key": "b",
    "text": "Install and customize a free prebuilt dashboard package from the AppExchange."
   },
   {
    "key": "c",
    "text": "Purchase CRM Analytics add-on licenses for executive users."
   },
   {
    "key": "d",
    "text": "Train business analysts to build complex custom reports from scratch."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "AppExchange offers prebuilt dashboard packages (such as Salesforce Labs CRM Dashboards) that can be installed for free and customized quickly, allowing administrators to meet tight deadlines without extra budget. **Why the other options are incorrect:** A: Hiring external consultants increases financial costs, violating the budget constraint. C: Training staff and building complex dashboards from scratch takes time and will not meet a 48-hour deadline. D: Purchasing CRM Analytics licenses introduces significant financial cost and complex setup overhead.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 15,
  "statement": "When an employee logs into the Salesforce user interface via a web browser, which two security settings does the system evaluate to determine authentication requirements and login access? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The user's role IP address restrictions"
   },
   {
    "key": "b",
    "text": "The user's \"Multi-Factor Authentication for User Interface Logins\" permission"
   },
   {
    "key": "c",
    "text": "The user's profile Login Hours restrictions"
   },
   {
    "key": "d",
    "text": "The user's \"Multi-Factor Authentication for API Logins\" permission"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Profile Login Hours: Evaluates whether the login attempt falls within allowed operating schedule hours assigned to the user's profile. MFA for User Interface Logins: Evaluates whether the user must complete multi-factor authentication challenges when logging into Salesforce via the web UI. **Why the other options are incorrect:** C: IP address restrictions are enforced at the Profile or Network Access level, not on Role Hierarchy nodes. D: MFA for API Logins applies strictly to developer tool or API integrations (like Data Loader), not standard user interface browser logins.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 16,
  "statement": "An administrator at BioHealth Diagnostics is configuring a Validation Rule on the SampleTest__c custom object. Which two elements must the administrator specify when creating a Validation Rule? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Error Condition Formula"
   },
   {
    "key": "b",
    "text": "Rule Active Date"
   },
   {
    "key": "c",
    "text": "Error Message Location"
   },
   {
    "key": "d",
    "text": "Formula Return Type"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Error Condition Formula: Defines the logical expression that evaluates to TRUE when data is invalid, triggering the rule. Error Message Location: Specifies whether the validation error message appears at the top of the page or directly next to a specific field. **Why the other options are incorrect:** C: Validation rules do not have an \"Active Date\" setting; they are simply toggled Active or Inactive. D: Validation rule formulas implicitly return a Boolean value (TRUE or FALSE); the return type is fixed and not selectable.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 17,
  "statement": "An administrator at Crestview Real Estate accidentally imported 2,000 duplicate lead records into Salesforce during a bulk data load. Which two native tools can the Platform Administrator use to bulk delete these imported records? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Data Import Wizard"
   },
   {
    "key": "b",
    "text": "Data Loader"
   },
   {
    "key": "c",
    "text": "Mass Delete Records"
   },
   {
    "key": "d",
    "text": "Weekly Data Export Service"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Mass Delete Records: Standard Setup utility designed to search for and delete bulk sets of records (like Leads or Accounts) based on specified criteria. Data Loader: Bulk data management tool capable of executing bulk Delete operations using CSV files containing Record IDs. **Why the other options are incorrect:** C: The Data Import Wizard can insert or update records, but cannot perform bulk Delete operations. D: The Data Export Service creates database backup archives, but cannot delete records from Salesforce.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 18,
  "statement": "Titan Manufacturing provides a standard 1-year warranty on equipment assets (Installation_Date__c + 365). However, representatives occasionally grant extended custom warranties to clients during deal negotiations. How should the Platform Administrator configure Salesforce to dynamically calculate and display the standard warranty expiration date while allowing custom adjustments?",
  "options": [
   {
    "key": "a",
    "text": "Build a Scheduled Flow to overwrite expiration dates nightly."
   },
   {
    "key": "b",
    "text": "Create a Formula Field that calculates 365 days from the installation date."
   },
   {
    "key": "c",
    "text": "Use a Validation Rule to mandate manual date entry on all records."
   },
   {
    "key": "d",
    "text": "Make the date field universally required on mobile page layouts."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Formula Field (e.g., Installation_Date__c + 365) dynamically calculates and displays the standard 1-year expiration date automatically, ensuring accuracy across all records without manual calculation errors. **Why the other options are incorrect:** B: Validation rules force users to enter dates manually, which is error-prone compared to automated formula calculations. C: Marking fields required forces manual input, but does not calculate dates dynamically. D: Overwriting dates nightly via flow destroys custom extended warranty dates granted during negotiations.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 19,
  "statement": "Apex Capital requires that whenever an underwriter saves a commercial loan application, they must either select a LoanCategory__c picklist option OR check the RequiresSpecialApproval__c checkbox. If both fields are left empty/false, the record save must be blocked. Which tool should the Platform Administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Universally Required Field setting"
   },
   {
    "key": "b",
    "text": "Validation Rule"
   },
   {
    "key": "c",
    "text": "Workflow Field Update"
   },
   {
    "key": "d",
    "text": "Record-Triggered Flow"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Validation Rule enforces conditional either/or logic at save time. A formula like AND(ISPICKVAL(LoanCategory__c, \"\"), RequiresSpecialApproval__c = FALSE) prevents saving the record if both conditions are violated. **Why the other options are incorrect:** A: Before-save flows can modify values, but Validation Rules are the standard declarative tool to block saves and display error messages. C: Universally Required settings mandate that a specific single field must always contain a value, failing the conditional either/or logic requirement. D: Workflow Field Updates modify field values after save; they cannot evaluate conditional logic to prevent saving invalid records.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 20,
  "statement": "The VP of Sales at Horizon Logistics wants a single visual component on the executive dashboard displaying total quarterly revenue earned so far, alongside a target marker showing progress toward the $10 million annual goal. Which dashboard component type should the Platform Administrator select?",
  "options": [
   {
    "key": "a",
    "text": "Gauge"
   },
   {
    "key": "b",
    "text": "Table"
   },
   {
    "key": "c",
    "text": "Stacked Bar"
   },
   {
    "key": "d",
    "text": "Donut"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Gauge widget displays a single summarized numerical metric (like total revenue) against a visual scale with target ranges, clearly showing proximity to a target goal. **Why the other options are incorrect:** B: Donut charts display proportions of a whole across categories, but do not show progress toward a single numerical target goal. C: Stacked Bar charts compare values across multiple grouping categories. D: Tables display tabular rows and columns of data rather than a visual progress gauge.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 21,
  "statement": "Horizon Healthcare frequently synchronizes patient billing accounts from an external Oracle ERP platform into Salesforce. Which field attribute should the Platform Administrator assign to a unique billing account identifier field to enable seamless record matching and updates during bulk data imports?",
  "options": [
   {
    "key": "a",
    "text": "Formula (Text)"
   },
   {
    "key": "b",
    "text": "Auto-Number"
   },
   {
    "key": "c",
    "text": "External ID"
   },
   {
    "key": "d",
    "text": "Unique Text Area"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Marking a custom field as an External ID allows Salesforce to use unique record identifiers from an external system (such as an Oracle ERP system) to match, update, or upsert records during data imports without needing internal Salesforce Record IDs. **Why the other options are incorrect:** A: Auto-Number fields generate sequential identifiers within Salesforce; they cannot store or match external system keys during imports. C: Formula fields are read-only calculated fields; they cannot store imported external system keys. D: Text Area fields store long text strings and cannot be indexed or designated as External IDs for record matching.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 22,
  "statement": "Nova Care developed an interactive patient check-in Screen Flow. Management wants this flow accessible directly on Case record views so representatives can access it contextually during patient calls. How should the Platform Administrator distribute this Screen Flow?",
  "options": [
   {
    "key": "a",
    "text": "Embed the flow inside a standard Page Layout section."
   },
   {
    "key": "b",
    "text": "Place the flow component on the Case Lightning Record Page."
   },
   {
    "key": "c",
    "text": "Add the flow to the global Utility Bar."
   },
   {
    "key": "d",
    "text": "Add the flow directly to the App Launcher menu."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To make a Screen Flow accessible contextually on specific records, administrators open Lightning App Builder for the object's Lightning Record Page and add the standard Flow component onto the page layout. **Why the other options are incorrect:** A: Standard page layouts manage field placement and sections, but cannot embed interactive Screen Flow components directly. B: Adding a flow to the App Launcher makes it a standalone application, but does not display it contextually on specific Case records. D: Utility Bar flows float globally at the bottom of the screen across the entire application, rather than embedding inside specific Case record views.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 23,
  "statement": "Titan Logistics sets Organization-Wide Defaults for the custom FleetVehicle__c object to Private. A dispatch manager needs to run a report displaying all fleet vehicles owned by dispatchers on their team. Which three items must be configured to grant the manager proper access to view this report and its contents? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Folder Access"
   },
   {
    "key": "b",
    "text": "Custom Metadata Types"
   },
   {
    "key": "c",
    "text": "Report Subscriptions"
   },
   {
    "key": "d",
    "text": "Field-Level Security"
   },
   {
    "key": "e",
    "text": "Role Hierarchy"
   }
  ],
  "correct": [
   "a",
   "d",
   "e"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Role Hierarchy: Because OWD is set to Private, the Role Hierarchy grants managers vertical record access to view records owned by their direct subordinates. Field-Level Security: Grants the user permission to view the specific field columns included in the report layout. Folder Access: Grants the manager at least Viewer access to the report folder where the report is stored so they can open and run the file. **Why the other options are incorrect:** B: Report Subscriptions automate scheduled email delivery of reports, but do not grant underlying database record permissions or report folder access. E: Custom Metadata Types store application configuration data and have no impact on reporting access or object record sharing.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 24,
  "statement": "An administrator at Apex Logistics configured a Case Assignment Rule to route incoming web tickets to the Tier 1 Support Queue. However, support agents report that manually created tickets are also unexpectedly reassigning away from them to the system queue upon saving. What will the administrator discover when troubleshooting this issue?",
  "options": [
   {
    "key": "a",
    "text": "The \"Evaluate Assignment Rules\" checkbox is checked by default on the Case page layout properties."
   },
   {
    "key": "b",
    "text": "The Default Case Owner setting under Support Settings is set to Private."
   },
   {
    "key": "c",
    "text": "An active Escalation Rule is reassigning cases immediately upon record creation."
   },
   {
    "key": "d",
    "text": "The Case Priority field is missing from the webform HTML template."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When the \"Evaluate Assignment Rules\" checkbox is enabled by default in Page Layout Properties, assignment rules execute automatically whenever a record is manually created or saved, overriding the creator's manual ownership assignment. **Why the other options are incorrect:** B: Missing webform fields affect web-submitted cases, but have no impact on manual case creation inside Salesforce. C: Escalation Rules execute actions after specified time delays when cases remain open; they do not trigger immediate reassignment upon record creation. D: Support Settings define default fallback owners for unassigned cases, but do not force manual edits to evaluate assignment rules.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 25,
  "statement": "An administrator at Beacon Logistics imported 500 prospect records via Data Loader. The TierLevel__c picklist field successfully accepted the value \"Silver Priority\", even though \"Silver Priority\" is not an active picklist value defined in Setup. Why were these records imported without throwing a validation error?",
  "options": [
   {
    "key": "a",
    "text": "The Data Loader tool automatically bypasses picklist restrictions for administrator profiles."
   },
   {
    "key": "b",
    "text": "The \"Restrict picklist to the values defined in the value set\" checkbox was deselected on the field definition."
   },
   {
    "key": "c",
    "text": "Field-Level Security was set to Visible for all user profiles."
   },
   {
    "key": "d",
    "text": "The imported field value was mapped from an active Global Value Set."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "If the \"Restrict picklist to the values defined in the value set\" setting is unchecked on a picklist field, Salesforce permits data import tools to insert text values outside the predefined picklist options without throwing an error. **Why the other options are incorrect:** B: Data Loader does not bypass picklist restrictions simply because the user holds the System Administrator profile. C: Global Value Sets enforce centralized values; they do not permit undefined values unless unrestricted. D: Field-Level Security governs field visibility, not whether unlisted picklist values are accepted during data imports.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 26,
  "statement": "Precision Logistics wants sales representatives to identify key client stakeholders (such as Decision Maker or Technical Evaluator) on Opportunity records and run reports on these involvement roles. Which two actions should the Platform Administrator perform to meet this requirement? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Customize Campaign Member Role picklist options."
   },
   {
    "key": "b",
    "text": "Add the Opportunity Contact Role related list to the Opportunity Page Layout."
   },
   {
    "key": "c",
    "text": "Add the Campaign Member related list to the Account Page Layout."
   },
   {
    "key": "d",
    "text": "Customize picklist values on the Opportunity Contact Role object."
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Customize Picklist Values: Updating picklist values on Opportunity Contact Role allows defining specific stakeholder involvement roles (e.g., Decision Maker, Evaluator). Page Layout Setup: Adding the Opportunity Contact Role related list to the Opportunity Page Layout allows reps to associate contacts with deals and assign those roles directly. **Why the other options are incorrect:** C: Campaign Member Roles track marketing campaign participant statuses (like Speaker or Attendee), not deal decision-makers. D: Adding Campaign Members to Account layouts shows marketing history, but does not manage opportunity contact decision-maker roles.",
  "module": "sales"
 },
 {
  "simulado": 4,
  "number": 27,
  "statement": "Zenith Health operates a patient portal built on Experience Cloud. Patients need a guided online wizard to submit medical record requests and update contact details directly from the site. Which component should the Platform Administrator place on the Experience Cloud portal page?",
  "options": [
   {
    "key": "a",
    "text": "Autolaunched Flow"
   },
   {
    "key": "b",
    "text": "Related List"
   },
   {
    "key": "c",
    "text": "Record Detail"
   },
   {
    "key": "d",
    "text": "Screen Flow"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Screen Flow provides an interactive, guided UI form that can be embedded directly onto Experience Cloud site pages to collect user input and create or update Salesforce records. **Why the other options are incorrect:** A: Autolaunched Flows run in the background without user interface screens, making them incapable of hosting interactive user forms. C: Record Detail components display fields from an existing record, but do not provide guided multi-step intake forms. D: Related List components display lists of child records, not guided interactive intake forms.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 28,
  "statement": "Vantage Energy wants to perform regular automated updates of account details in Salesforce using record dumps from their enterprise Data Warehouse. How should the Platform Administrator ensure records in Salesforce match correctly with records from the Data Warehouse?",
  "options": [
   {
    "key": "a",
    "text": "Define an External ID field in Salesforce containing the Data Warehouse system key."
   },
   {
    "key": "b",
    "text": "Create a junction object to map external records manually."
   },
   {
    "key": "c",
    "text": "Configure a Formula field that combines Account Name and Billing Zip Code."
   },
   {
    "key": "d",
    "text": "Use the standard Salesforce Record ID generated during export."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Defining a custom field as an External ID stores unique keys from an external system (such as a Data Warehouse), allowing data loading tools to accurately match and update existing records during automated data syncs. **Why the other options are incorrect:** A: Data warehouses typically generate their own system keys and do not track Salesforce internal 18-character Record IDs natively. C: Matching on text formulas (like Name + Zip) is unreliable because names can contain typos or formatting changes, leading to duplicate records. D: Junction objects handle many-to-many relationships; they do not perform automated key matching during bulk data imports.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 29,
  "statement": "Crestview Logistics built a customer intake Screen Flow. On a single intake screen, a input field asking for \"Hazardous Materials Classification\" must display only if the user checks the \"Is Toxic Payload\" checkbox component on that screen. How should the Platform Administrator implement this dynamic behavior?",
  "options": [
   {
    "key": "a",
    "text": "Configure Conditional Visibility on the \"Hazardous Materials Classification\" screen component."
   },
   {
    "key": "b",
    "text": "Use a Decision element to branch the flow onto a completely new screen."
   },
   {
    "key": "c",
    "text": "Create duplicate flows for each possible payload scenario."
   },
   {
    "key": "d",
    "text": "Add a Fault Connector to hide the component dynamically."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional Visibility on Screen Flow components allows showing or hiding UI fields dynamically on the exact same screen based on user inputs in other fields (e.g., IsToxicPayload = TRUE). **Why the other options are incorrect:** A: Creating duplicate flows increases maintenance overhead and clutters system automation. B: Branching to new screens forces extra screen transitions and user clicks rather than dynamically rendering fields on the current screen. D: Fault Connectors handle unexpected runtime execution errors, not dynamic UI field visibility.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 30,
  "statement": "A junior administrator is reviewing data architecture principles in Salesforce. Which two statements accurately describe characteristics of Salesforce standard and custom objects? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Both standard and custom objects automatically include system standard fields (such as CreatedDate and LastModifiedById)."
   },
   {
    "key": "b",
    "text": "Standard objects are pre-built data structures included out-of-the-box with Salesforce."
   },
   {
    "key": "c",
    "text": "Master-Detail relationships can only be established between custom objects."
   },
   {
    "key": "d",
    "text": "Administrators can create new standard objects using Schema Builder."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Every object in Salesforce (standard or custom) automatically includes system standard fields like CreatedDate, CreatedById, LastModifiedById, and OwnerId. Standard objects (like Account, Contact, Lead, Opportunity) are pre-built data structures provided natively with Salesforce. **Why the other options are incorrect:** C: Administrators can create custom objects, but cannot create new standard objects. D: Master-Detail relationships can be established between standard parent objects and custom child objects (e.g., Account to custom child).",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 31,
  "statement": "Apex Freight configured an automated workflow rule on a custom Shipment__c object. When a shipment's status is set to \"In Transit\", a scheduled background action is queued to send a reminder Chatter post in 14 days if the status remains \"In Transit\". On day 5, the driver updates the shipment status to \"Delivered\". What happens to the pending scheduled Chatter post action?",
  "options": [
   {
    "key": "a",
    "text": "The pending Chatter post is paused until the record is updated again."
   },
   {
    "key": "b",
    "text": "The pending Chatter post is immediately sent on day 5."
   },
   {
    "key": "c",
    "text": "The pending Chatter post executes as scheduled on day 14 regardless of status."
   },
   {
    "key": "d",
    "text": "The pending Chatter post is automatically canceled because the record no longer satisfies the criteria."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Time-based scheduled actions evaluate record entry criteria again at the scheduled execution time. If the record is updated such that it no longer meets the rule criteria (status changed to \"Delivered\"), Salesforce automatically removes and cancels the pending action from the queue. **Why the other options are incorrect:** A: Pending time-based actions do not pause; if criteria fail, they are permanently canceled. B: Changing record criteria does not fast-forward time-based actions to execute immediately. C: Scheduled actions do not execute if the record no longer satisfies the rule evaluation criteria.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 32,
  "statement": "A sales representative at Starlight Solar has a qualified Lead ready for conversion. Which two standard object records can be created during the standard Lead conversion process? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Case"
   },
   {
    "key": "b",
    "text": "Contact"
   },
   {
    "key": "c",
    "text": "Campaign"
   },
   {
    "key": "d",
    "text": "Account"
   }
  ],
  "correct": [
   "b",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "During Lead conversion, Salesforce automatically creates a Contact (representing the person) and an Account (representing the company), and optionally creates an Opportunity (representing the deal). **Why the other options are incorrect:** C: Cases represent customer support issues and are not generated during Lead conversion. D: Campaigns represent marketing initiatives; Leads can be linked to Campaigns, but new Campaigns are not created during Lead conversion.",
  "module": "sales"
 },
 {
  "simulado": 4,
  "number": 33,
  "statement": "Representatives at Crestview Real Estate want a streamlined view of Account records where Account Details, Related Lists, and Chatter Feeds each reside in separate interactive tabs on the page view. Which type of page should the Platform Administrator create and customize in Lightning App Builder?",
  "options": [
   {
    "key": "a",
    "text": "Utility Bar Component Page"
   },
   {
    "key": "b",
    "text": "Lightning Record Page"
   },
   {
    "key": "c",
    "text": "Lightning App Page"
   },
   {
    "key": "d",
    "text": "Lightning Home Page"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Lightning Record Page allows administrators to customize the layout for individual record views (such as Accounts), including adding Tab components to separate record details, related lists, and Chatter feeds into distinct tabbed sections. **Why the other options are incorrect:** A: Lightning Home Pages customize the main landing dashboard screen for users, not individual record detail views. B: Lightning App Pages create custom landing pages for apps, but do not construct record-level object layouts. D: Utility Bar components float at the bottom of the screen across the app; they are not used to organize record detail layouts.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 34,
  "statement": "Starlight Media wants project teams to discuss specific client account records while collaborating inside Chatter groups. Which two administrative considerations or setup requirements apply when enabling record sharing within Chatter groups? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Page layouts for standard objects must include a mandatory Groups related list."
   },
   {
    "key": "b",
    "text": "The Platform Administrator must create a Chatter Collaboration Group to enable team record sharing."
   },
   {
    "key": "c",
    "text": "The \"Add Record\" action must be included in the group publisher layout settings."
   },
   {
    "key": "d",
    "text": "Collaboration groups are automatically created by Salesforce for every active user department."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Group Creation: A Chatter Collaboration Group (Public, Private, or Unlisted) must be created to provide the group workspace where records can be shared and discussed. Publisher Setup: The Add Record action must be present in the group publisher layout so members can link specific Salesforce records to the group feed. **Why the other options are incorrect:** B: Salesforce does not automatically generate collaboration groups for departments; they must be created manually by admins or users. D: Displaying shared records inside Chatter groups does not require adding a \"Groups\" related list onto standard object page layouts.",
  "module": "productivity"
 },
 {
  "simulado": 4,
  "number": 35,
  "statement": "Apex Health configured a Scheduled Flow to send a warranty renewal reminder email 30 days prior to an asset contract's expiration date. A client renews their contract early for three additional years before the 30-day window arrives. What happens when the scheduled flow evaluates the renewed record on the scheduled execution date?",
  "options": [
   {
    "key": "a",
    "text": "The email is locked in the system queue until the new expiration date arrives."
   },
   {
    "key": "b",
    "text": "The reminder email is automatically canceled because the record no longer satisfies the evaluation criteria."
   },
   {
    "key": "c",
    "text": "An administrative execution error is thrown."
   },
   {
    "key": "d",
    "text": "The reminder email is sent anyway based on the original historical date."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Scheduled Flows evaluate record entry criteria again at runtime. Because the contract was renewed, the expiration date changed, and the record no longer satisfies the filter criteria; Salesforce automatically cancels the email execution. **Why the other options are incorrect:** B: Scheduled flows re-evaluate conditions at execution runtime and will not send emails if criteria are no longer met. C: Scheduled paths do not pause indefinitely; if criteria fail at execution time, the action is canceled. D: Non-matching criteria evaluate cleanly to false without generating system execution errors.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 36,
  "statement": "An administrator at Aegis Global deletes an obsolete custom text field on the Account object. What happens to the deleted field and its stored data immediately after deletion?",
  "options": [
   {
    "key": "a",
    "text": "The field and its data enter a 15-day soft-delete state and can be restored from Deleted Fields in Setup."
   },
   {
    "key": "b",
    "text": "The field values are preserved in the Recycle Bin for 30 days before permanent deletion."
   },
   {
    "key": "c",
    "text": "The field and its stored data are permanently erased from the database immediately."
   },
   {
    "key": "d",
    "text": "The field data is automatically exported and emailed as a CSV to system administrators."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Deleted custom fields enter a 15-day soft-delete period. During this window, administrators can access \"Deleted Fields\" in Object Manager to restore the field and its stored record data completely. **Why the other options are incorrect:** A: Fields are soft-deleted for 15 days, not permanently erased immediately. C: Salesforce does not automatically export or email CSV backups when custom fields are deleted. D: Soft-deleted fields reside under \"Deleted Fields\" in Setup for 15 days, not in the standard user Recycle Bin for 30 days.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 37,
  "statement": "An administrator at Starlight Media added a custom Lookup field on Asset__c pointing to Vendor__c. When creating a report on Assets, the administrator wants to include vendor address and support phone number columns. What should the Platform Administrator do to expose these vendor fields in the report builder?",
  "options": [
   {
    "key": "a",
    "text": "Create a Custom Report Type with Asset__c as the primary object and Vendor__c as a related object."
   },
   {
    "key": "b",
    "text": "Build cross-object formula fields on the Vendor object pointing to Asset fields."
   },
   {
    "key": "c",
    "text": "Add a Dashboard Filter to join Asset and Vendor report blocks."
   },
   {
    "key": "d",
    "text": "Enable History Tracking on the Vendor lookup field."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard report types do not always automatically expose fields from newly created custom lookup objects. Creating a Custom Report Type defining Asset__c as the primary object and Vendor__c as a related object makes all vendor fields available in the report builder. **Why the other options are incorrect:** B: Formula fields on Vendor cannot pull data upward from child Asset records. C: Dashboard filters segment displayed component data; they cannot add missing object fields into report layouts. D: Field History Tracking tracks data edits on fields, but does not expose lookup object fields inside report builders.",
  "module": "data"
 },
 {
  "simulado": 4,
  "number": 38,
  "statement": "Marketing specialists at Zenith Solutions need to add a custom status choice, \"Attended Workshop\", to the Campaign Member Status options for an upcoming promotional campaign. Which two actions should the Platform Administrator take? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Create a Validation Rule on Campaign Members to allow the new text string."
   },
   {
    "key": "b",
    "text": "Ensure the Campaign Member Statuses related list is added to the Campaign Page Layout."
   },
   {
    "key": "c",
    "text": "Modify and add the new status value directly within the Campaign Member Statuses related list on the target Campaign record."
   },
   {
    "key": "d",
    "text": "Edit the Campaign Member Status picklist field values directly in Object Manager."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Page Layout Setup: The Campaign Member Statuses related list must be present on the Campaign Page Layout so users can access and manage member statuses. Record Setup: Campaign Member Status values (such as \"Attended Workshop\") are managed per individual campaign record directly within the Campaign Member Statuses related list on that specific Campaign record. **Why the other options are incorrect:** B: Campaign Member Status values are not managed globally in Object Manager; they are customized per campaign record via its related list. D: Validation rules enforce data entry rules; they do not create or expose picklist options in the UI.",
  "module": "sales"
 },
 {
  "simulado": 4,
  "number": 39,
  "statement": "Nova Health captures a custom field PreferredPlan__c on Lead records and requires this data to carry over automatically to newly created Opportunity records when leads are converted. Which two actions must the Platform Administrator complete? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Set the field as universally required on the Lead page layout."
   },
   {
    "key": "b",
    "text": "Create a corresponding custom field PreferredPlan__c on the Opportunity object."
   },
   {
    "key": "c",
    "text": "Map the Lead custom field to the Opportunity custom field under Lead Conversion Field Mapping."
   },
   {
    "key": "d",
    "text": "Build an Autolaunched Flow to transfer values post-conversion."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A target custom field of compatible data type (PreferredPlan__c) must exist on the Opportunity object. The administrator must explicitly map the Lead custom field to the Opportunity custom field in Map Lead Fields within Object Manager. **Why the other options are incorrect:** C: Lead conversion field mapping handles data transfer natively without needing custom flows or post-conversion Apex code. D: Setting the field required on the Lead forces data entry on the Lead, but does not transfer the value to the Opportunity during conversion.",
  "module": "sales"
 },
 {
  "simulado": 4,
  "number": 40,
  "statement": "Meridian Energy wants to enforce that sales representatives cannot advance an Opportunity stage to \"Proposal Accepted\" unless the LegalSignoff__c checkbox is checked. How should the Platform Administrator fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Make LegalSignoff__c a dependent picklist driven by the Stage field."
   },
   {
    "key": "b",
    "text": "Configure a Validation Rule requiring LegalSignoff__c = TRUE when Stage equals \"Proposal Accepted\"."
   },
   {
    "key": "c",
    "text": "Make Stage a dependent picklist driven by LegalSignoff__c."
   },
   {
    "key": "d",
    "text": "Set the Stage field to Read-Only on the page layout."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Validation Rule enforces conditional data entry at save time. Using a formula like AND(ISPICKVAL(StageName, \"Proposal Accepted\"), LegalSignoff__c = FALSE) prevents saving the record if the checkbox is unchecked when entering that stage. **Why the other options are incorrect:** A: Dependent picklists limit drop-down choices based on another picklist, but cannot validate checkbox fields or enforce conditional save rules. B: Setting Stage to Read-Only prevents users from changing stages altogether. D: Picklist dependencies cannot be driven by checkbox fields to enforce stage validation rules.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 41,
  "statement": "Starlight Media is onboarding a business intelligence analyst who requires the ability to view, create, and modify records across several objects, but compliance policies strictly prohibit this user from deleting any records. How should the Platform Administrator grant the required access?",
  "options": [
   {
    "key": "a",
    "text": "Assign the System Administrator profile and disable setup rights."
   },
   {
    "key": "b",
    "text": "Enable \"View All Data\" on the user's assigned base profile."
   },
   {
    "key": "c",
    "text": "Reassign the analyst to the highest node in the Role Hierarchy with Modify All access."
   },
   {
    "key": "d",
    "text": "Create and assign a custom Permission Set containing Read, Create, and Edit object permissions without Delete permissions."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A custom Permission Set allows administrators to grant specific object CRUD permissions (Read, Create, Edit) without granting Delete access, providing granular security control without modifying base user profiles. **Why the other options are incorrect:** A: Assigning the System Administrator profile grants broad administrative authority and Delete access across all objects, violating least-privilege policies. C: The Role Hierarchy controls record sharing visibility up the management chain, but cannot grant object CRUD permissions or block Delete access. D: \"View All Data\" grants read-only visibility to all records across the org, but does not grant Create/Edit access or restrict Delete permissions.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 42,
  "statement": "Management at Titan Manufacturing wants to streamline the record sign-off process so executive approvers can review and respond to pending approval requests as quickly and easily as possible. Which three features should the Platform Administrator configure to optimize the approver experience? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Update Chatter settings to allow approval responses directly within Chatter feeds."
   },
   {
    "key": "b",
    "text": "Build an Autolaunched Flow to automatically approve all submitted records after 24 hours."
   },
   {
    "key": "c",
    "text": "Enable the organization's Email Approval Response setting."
   },
   {
    "key": "d",
    "text": "Create a custom junction object to log approval history."
   },
   {
    "key": "e",
    "text": "Add the \"Items to Approve\" component to the approvers' Home Page layout."
   }
  ],
  "correct": [
   "a",
   "c",
   "e"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Email Approval Response: Allows approvers to approve or reject requests simply by replying to notification emails with text commands (e.g., \"APPROVE\"). Items to Approve Component: Provides a centralized dashboard view on the Home Page where approvers can review and action all pending approval requests in one place. Chatter Approvals: Enables approvers to receive approval notifications and take action directly within their Chatter feed. **Why the other options are incorrect:** D: Automatically approving all records after 24 hours bypasses executive review, defeating the security and governance purpose of an approval process. E: Creating custom junction objects logs data, but does not improve or streamline the UI approval experience for approvers.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 43,
  "statement": "Apex Realty wants an automated confirmation email sent immediately whenever a prospective buyer submits an inquiry form on their website. Management requires different email template messages delivered depending on whether the prospect selected \"Residential\", \"Commercial\", or \"Industrial\" in the PropertyType__c field. What should the Platform Administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Auto-Response Rules with distinct rule entries filtered by PropertyType__c"
   },
   {
    "key": "b",
    "text": "Lead Assignment Rules with automated email routing templates"
   },
   {
    "key": "c",
    "text": "Validation Rules triggering background email workflows"
   },
   {
    "key": "d",
    "text": "Public Groups assigned to Process Builder email alerts"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Auto-Response Rules automatically send targeted email notifications to web submitters upon lead or case creation. Administrators configure a single rule with multiple rule entries filtered by criteria (e.g., PropertyType__c = 'Commercial') to dispatch specific email templates. **Why the other options are incorrect:** B: Lead Assignment Rules route record ownership to users or queues; they do not manage customer auto-response email templates. C: Validation Rules prevent saving invalid records; they cannot dispatch automated email alerts. D: Public Groups organize user sets for sharing; they do not handle auto-response customer email dispatching.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 44,
  "statement": "Nova Global operates on a corporate financial calendar where the fiscal year begins on February 1st and spans 12 calendar months. How should the Platform Administrator configure Fiscal Year settings in Setup?",
  "options": [
   {
    "key": "a",
    "text": "Set Fiscal Year to Custom and define a 12-month duration starting February 1st."
   },
   {
    "key": "b",
    "text": "Set Fiscal Year to Standard and select February as the starting month."
   },
   {
    "key": "c",
    "text": "Enable Custom Fiscal Year with a 13-week quarter structure starting January 1st."
   },
   {
    "key": "d",
    "text": "Create a custom formula field on Opportunity to calculate financial quarters manually."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When an organization's fiscal year starts on the first day of a month other than January (e.g., February 1st) and follows standard calendar month boundaries, configuring a Custom Fiscal Year with a February start date correctly aligns reporting and forecasting tools to the corporate calendar. **Why the other options are incorrect:** B: Standard Fiscal Year defaults to starting on January 1st; configuring a custom start month requires selecting Custom Fiscal Year. C: Creating formula fields calculates text strings, but does not align native Salesforce Forecasting or Financial Reporting tools. D: A 13-week quarter structure creates a 4-4-5 accounting calendar, which is unnecessary for standard calendar month boundaries starting February 1st.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 45,
  "statement": "Titan Systems wants the quick action \"New Call Task\" to automatically populate the Subject field with \"Client Discovery Call\", while the \"New Onsite Event\" action automatically sets the Subject to \"Site Inspection\". How should the Platform Administrator configure these default values?",
  "options": [
   {
    "key": "a",
    "text": "Configure Predefined Field Values directly on the respective Quick Actions."
   },
   {
    "key": "b",
    "text": "Create custom picklist fields on Activity and assign record types."
   },
   {
    "key": "c",
    "text": "Modify the standard Subject field definition in Object Manager."
   },
   {
    "key": "d",
    "text": "Build a Scheduled Flow to overwrite Subject fields upon saving."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Quick Actions support Predefined Field Values, allowing administrators to set automated default values (such as setting Subject = 'Client Discovery Call') for fields whenever that specific action is launched. **Why the other options are incorrect:** A: Creating custom picklist fields replaces standard Subject functionality unnecessarily. C: Scheduled Flows execute background updates long after the creation screen is submitted, rather than pre-populating fields on launch. D: Modifying the standard Subject field definition sets a single global default across all actions, rather than action-specific defaults.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 46,
  "statement": "An administrator at Zenith Energy is converting a custom field RegionCode__c on the Account object from a Text data type to a Picklist data type. What operational impact should the administrator keep in mind regarding automated rules?",
  "options": [
   {
    "key": "a",
    "text": "Visualforce references are automatically updated to prevent runtime errors."
   },
   {
    "key": "b",
    "text": "Converting text to picklists guarantees zero data loss under all conditions."
   },
   {
    "key": "c",
    "text": "Existing Assignment and Escalation rules referencing the field's previous text string values may be affected."
   },
   {
    "key": "d",
    "text": "All custom list views referencing the field are permanently erased."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When changing a field's data type, existing automation rules (like Assignment or Escalation Rules) that evaluate exact text string criteria may fail or misbehave if existing record values do not match newly defined picklist values exactly. **Why the other options are incorrect:** B: List views are not automatically deleted when changing field types, though filters referencing the field may require adjustment. C: Salesforce does not automatically refactor Visualforce pages or Apex code when custom field data types are modified. D: Data truncation or loss can still occur if existing text values in records do not match defined picklist options.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 47,
  "statement": "Quantum Logistics has a field support team assisting regional account managers with customer site inspections. The support team currently lacks permission to view or create records on the custom InspectionReport__c object. How should the Platform Administrator grant object access to the support team without modifying their base user profile?",
  "options": [
   {
    "key": "a",
    "text": "Assign a custom Permission Set granting Read and Create access to the InspectionReport__c object."
   },
   {
    "key": "b",
    "text": "Instruct record owners to enable Manual Sharing on all InspectionReport__c records."
   },
   {
    "key": "c",
    "text": "Create an Owner-based Sharing Rule targeting the InspectionReport__c object."
   },
   {
    "key": "d",
    "text": "Reassign the support team to a lower node in the Role Hierarchy."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Permission Sets allow administrators to grant additional object-level permissions (such as Read and Create) to specific users or teams cleanly without altering their base user profile. **Why the other options are incorrect:** B: Sharing Rules control record-level sharing visibility (which specific records a user can view), but cannot grant baseline object-level CRUD permissions if the user profile/permission set lacks object access. C: Adjusting the Role Hierarchy alters record visibility up the management chain, but does not grant baseline object permissions. D: Manual Sharing grants record-level access to individual records, but cannot grant object-level access to an object the user lacks permissions for.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 48,
  "statement": "An administrator at BioLabs Healthcare is building a Screen Flow for sample logging. If \"Sample Type\" is selected as \"Biological\", the flow must require the technician to select a specific \"Storage Temperature\" picklist. If \"Sample Type\" is anything else, \"Storage Temperature\" should remain hidden. What is the most efficient way to fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Use a Decision element to refresh the entire Lightning page canvas."
   },
   {
    "key": "b",
    "text": "Configure Conditional Visibility on the \"Storage Temperature\" screen picklist component."
   },
   {
    "key": "c",
    "text": "Create separate Assignment elements for every possible selection branch."
   },
   {
    "key": "d",
    "text": "Configure Validation Rules on the object schema to hide the field."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Configuring Conditional Visibility directly on the screen component allows showing or hiding the picklist component dynamically based on the selected value of \"Sample Type\" on the active screen. **Why the other options are incorrect:** A: Validation Rules enforce data rules upon database save; they cannot hide UI components on a flow screen. C: Using separate Assignment elements and multiple screens creates unnecessary branching and extra user clicks. D: Decision elements route flow execution between screens, but do not handle dynamic field display within a single screen.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 49,
  "statement": "Aegis Financial deployed My Domain (https://aegisfinancial.my.salesforce.com). The Security Officer wants all employees to log in using the branded URL, but management requires a smooth transition period so existing browser bookmarks continue working temporarily while notifying users to update their links. How should the Platform Administrator configure My Domain Settings?",
  "options": [
   {
    "key": "a",
    "text": "Enable the login policy that permanently blocks access from https://login.salesforce.com."
   },
   {
    "key": "b",
    "text": "Configure the Redirect Policy to \"Redirect with a warning to the same page within the domain\"."
   },
   {
    "key": "c",
    "text": "Require Single Sign-On (SSO) authentication on all user profiles immediately."
   },
   {
    "key": "d",
    "text": "Set the Redirect Policy to \"Do Not Redirect\" for external requests."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Setting the My Domain Redirect Policy to \"Redirect with a warning to the same page within the domain\" automatically redirects legacy bookmarked requests while displaying a warning message. This provides a grace period for users to update their bookmarks. **Why the other options are incorrect:** A: Blocking access from generic login URLs immediately breaks old bookmarks without providing a transitional grace period. B: Setting \"Do Not Redirect\" prevents users with legacy links from accessing the system, causing login failures. D: Mandating SSO changes authentication mechanisms, but does not configure My Domain bookmark redirection policies.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 50,
  "statement": "BioLabs Healthcare uses a Private sharing model for Opportunities. A sales representative leaves the company and their user record is deactivated. Six months later, the representative is rehired and reactivated in the same role. Although added back to default opportunity teams, the rep cannot view several opportunities they manually accessed before leaving. What is the cause of this missing record access?",
  "options": [
   {
    "key": "a",
    "text": "User account deactivation permanently deletes assigned permission sets."
   },
   {
    "key": "b",
    "text": "Changing opportunity stages locks records from reactivated users."
   },
   {
    "key": "c",
    "text": "Reactivation automatically converts private records to public read-only."
   },
   {
    "key": "d",
    "text": "Manual shares granted specifically to the user were automatically deleted upon account deactivation."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, when a user is deactivated, all manual shares granted directly to that user account are permanently deleted. Reactivating the user account does not restore previously deleted manual shares. **Why the other options are incorrect:** B: Deactivating a user does not delete assigned permission sets; they remain attached upon reactivation. C: Opportunity stages control pipeline progression, but do not alter underlying database manual sharing permissions. D: User account reactivation has no impact on Organization-Wide Sharing Defaults or record sharing models.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 51,
  "statement": "An administrator at Global Cargo is configuring global operational parameters for an international workforce spanning offices in North America, Europe, and Asia. Which two settings are managed under Company Settings in Setup? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Default Language"
   },
   {
    "key": "b",
    "text": "Currency Locale"
   },
   {
    "key": "c",
    "text": "Profile Login Hours"
   },
   {
    "key": "d",
    "text": "Password Expiration Policy"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Company Settings in Setup houses global organizational configurations, including Default Language and Currency Locale, which govern international operations and display formats across the entire org. **Why the other options are incorrect:** A: Password Expiration Policies are configured under Password Policies or Session Settings in Setup, not Company Settings. C: Login Hours are configured directly on individual User Profiles to restrict login times per user group.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 52,
  "statement": "AeroTech Systems is evaluating out-of-the-box Service Cloud capabilities for its support organization. Which three standard objects are natively available in Service Cloud for support use cases? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Request"
   },
   {
    "key": "b",
    "text": "Account"
   },
   {
    "key": "c",
    "text": "Case"
   },
   {
    "key": "d",
    "text": "Contract"
   },
   {
    "key": "e",
    "text": "Ticket"
   }
  ],
  "correct": [
   "b",
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Case: Core standard object for logging, tracking, and resolving customer support issues. Contract: Standard object for managing customer service agreements, warranties, and entitlements. Account: Core standard object for storing customer corporate entities and personal details. **Why the other options are incorrect:** D: \"Request\" is not a standard Salesforce object. E: \"Ticket\" is not a standard Salesforce object; Salesforce uses the Case object to handle support tickets.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 53,
  "statement": "Apex Equipment rents both Standard Machinery and Heavy Mining Rigs. Heavy Mining Rigs require extra compliance inspection steps, specialized approval stages, and unique fields prior to rental agreement creation. How should the Platform Administrator configure Salesforce to ensure these extra steps appear only for Heavy Mining Rig records?",
  "options": [
   {
    "key": "a",
    "text": "Create two Page Layouts and assign separate Record Types and Business Processes for Heavy Mining Rigs versus Standard Machinery."
   },
   {
    "key": "b",
    "text": "Create a custom lookup field on the Account object."
   },
   {
    "key": "c",
    "text": "Create one page layout and use business processes to filter picklists."
   },
   {
    "key": "d",
    "text": "Build a single layout with custom formula fields for compliance steps."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Creating separate Record Types allows administrators to assign distinct Page Layouts (showing extra fields/sections) and dedicated Business Processes (controlling stage picklist values) specific to Heavy Mining Rigs versus Standard Machinery. **Why the other options are incorrect:** A: A single page layout cannot conditionally show or hide distinct layout sections or extra fields based on record classification. C: Formula fields calculate read-only data, but cannot present custom interactive fields or approval steps conditionally on a single layout. D: Creating lookup fields on Account does not manage stage processes or page layouts on rental equipment records.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 54,
  "statement": "Customer service agents at Crestview Media frequently need to inspect live inventory tracking data stored in an external SAP warehouse system without leaving Salesforce. What is the best declarative approach to integrate and display this external data inside the Support application UI?",
  "options": [
   {
    "key": "a",
    "text": "Define an External Object using Salesforce Connect and create a custom tab for the Support App."
   },
   {
    "key": "b",
    "text": "Build a custom Web-to-Lead form to pull inventory records on demand."
   },
   {
    "key": "c",
    "text": "Add custom URL fields on Account page layouts linking to the SAP login page."
   },
   {
    "key": "d",
    "text": "Create an Autolaunched Flow that writes inventory logs into standard Task records."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "External Objects (via Salesforce Connect) allow external data sources (like SAP) to be accessed real-time inside Salesforce without importing the data. Creating a custom tab for the External Object integrates the data seamlessly into the Support App interface. **Why the other options are incorrect:** B: Web-to-Lead forms capture external prospect web submissions; they cannot query or display data from an external SAP warehouse. C: Autolaunched flows writing tasks would copy data into standard records, which adds storage overhead rather than querying live external data declaratively. D: Adding external website links forces agents to leave Salesforce and log into external portals manually, failing the requirement for an integrated UI view.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 55,
  "statement": "Nova Media wants to empower clients to lodge technical support tickets independently, either by filling out an online form on the corporate website or by sending an email directly to support@novamedia.com. Which two standard Salesforce capabilities should the Platform Administrator implement? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Web-to-Case"
   },
   {
    "key": "b",
    "text": "Omni-Channel Routing"
   },
   {
    "key": "c",
    "text": "Case Escalation Rules"
   },
   {
    "key": "d",
    "text": "Email-to-Case"
   }
  ],
  "correct": [
   "a",
   "d"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Web-to-Case: Captures customer support inquiries submitted via web forms on corporate websites and automatically converts them into Case records. Email-to-Case: Automatically converts customer emails sent to support email addresses into Case records. **Why the other options are incorrect:** C: Escalation Rules manage aging open cases after creation, but do not capture incoming customer inquiries from web forms or emails. D: Omni-Channel routes work items to online agents, but does not convert incoming web forms or customer emails into Case records.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 56,
  "statement": "Crestview Media requires Account records to display a streamlined, compact layout when viewed inside the Sales Console app, and a detailed, case-centric layout when viewed inside the Service Console app. How should the Platform Administrator fulfill this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Build separate Record Types for each console application."
   },
   {
    "key": "b",
    "text": "Create separate user profiles for Sales and Service representatives."
   },
   {
    "key": "c",
    "text": "Update Organization-Wide Default sharing settings per application."
   },
   {
    "key": "d",
    "text": "Assign different Lightning Record Pages as the App Default for each respective console application."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Lightning App Builder, administrators can assign custom Lightning Record Pages as the App Default, ensuring users see different page layouts depending on which specific app (e.g., Sales Console vs. Service Console) they are using. **Why the other options are incorrect:** B: Creating separate user profiles differentiates access by user role, but does not change page layouts dynamically based on the active console app being viewed. C: Organization-Wide Defaults manage record sharing permissions, not Lightning page layout views. D: Record types differentiate layouts based on record classification, not based on which application container the user is currently viewing.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 57,
  "statement": "An administrator at Vantage Health attempts to deactivate a former regional director's user account, but Salesforce displays an error preventing deactivation. Which two scenarios will prevent a user account from being deactivated? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The user is the sole designated recipient of a Workflow Email Alert."
   },
   {
    "key": "b",
    "text": "The user belongs to an active public Chatter group."
   },
   {
    "key": "c",
    "text": "The user is referenced in a custom Hierarchy field on other user records."
   },
   {
    "key": "d",
    "text": "The user is assigned to the lowest node in the Role Hierarchy."
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "If a user is referenced in a custom Hierarchy field (such as a custom Manager field), Salesforce blocks deactivation until the reference is updated or removed. If a user is the sole recipient of a Workflow Email Alert, Salesforce prevents deactivation until another active recipient is designated. **Why the other options are incorrect:** B: Being assigned to a low role in the Role Hierarchy does not block user deactivation. D: Membership in Chatter groups (public or private) does not prevent user deactivation.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 58,
  "statement": "Nova Global needs to capture precise GPS latitude and longitude coordinates on field service asset records to enable spatial mapping for technicians. Which custom field data type should the Platform Administrator create?",
  "options": [
   {
    "key": "a",
    "text": "External Lookup"
   },
   {
    "key": "b",
    "text": "Phone / Fax"
   },
   {
    "key": "c",
    "text": "Geolocation"
   },
   {
    "key": "d",
    "text": "Custom Address"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Geolocation field stores spatial location details by capturing separate latitude and longitude coordinates, enabling location calculations and mapping applications. **Why the other options are incorrect:** A: Custom Address fields store standard street address text strings (street, city, zip), not raw numeric GPS coordinates. C: External Lookups link Salesforce records to external object schemas, but do not store geographic coordinates. D: Phone/Fax fields format phone number strings; they have no geographic coordinate functionality.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 59,
  "statement": "Service representatives at Starlight Media receive unhelpful generic red system errors when executing a Screen Flow to process client refunds. The errors occur when underlying account financial fields are incomplete. How should the Platform Administrator handle this error to improve the representative experience?",
  "options": [
   {
    "key": "a",
    "text": "Uncheck the \"Enforce Flow Validation Rules\" setting in Setup."
   },
   {
    "key": "b",
    "text": "Delete object validation rules so missing data does not stop flow execution."
   },
   {
    "key": "c",
    "text": "Add a Fault Connector leading to a Screen element that explains what data is missing and how to fix it."
   },
   {
    "key": "d",
    "text": "Create a Permission Set allowing users to bypass flow exceptions."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Flow Builder, attaching a Fault Connector to an element allows administrators to gracefully handle execution exceptions by directing the user to a custom error screen that clearly explains what went wrong and how to fix it. **Why the other options are incorrect:** A: There is no \"Enforce Flow Validation Rules\" toggle in Setup to remove error messages cleanly. B: Deleting validation rules compromises database integrity and permits corrupt or incomplete data to be saved across the entire org. D: Permissions cannot override runtime flow exceptions caused by missing database values or unhandled logic failures.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 60,
  "statement": "Starlight Consulting frequently contracts independent IT advisors who consult for multiple corporate client accounts over time. Starlight wants to track current and historical account affiliations for each advisor without creating duplicate Contact records. Which feature should the Platform Administrator enable?",
  "options": [
   {
    "key": "a",
    "text": "Create a new Contact record for every new corporate account affiliation."
   },
   {
    "key": "b",
    "text": "Build an Experience Cloud portal for advisors to re-register."
   },
   {
    "key": "c",
    "text": "Create custom text fields on the Account object for historical notes."
   },
   {
    "key": "d",
    "text": "Enable Contacts to Multiple Accounts."
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Enabling Contacts to Multiple Accounts allows a single Contact record to be associated with multiple Account records (with defined relationships such as Direct or Indirect), preserving historical relationships without duplicating contact records. **Why the other options are incorrect:** A: Creating duplicate contact records fragments activity history and violates data hygiene best practices. C: Adding text fields on Account does not establish relational tracking or historical reporting across contacts. D: Portals provide external user access, but do not solve internal many-to-many contact-account data modeling requirements.",
  "module": "service"
 },
 {
  "simulado": 4,
  "number": 61,
  "statement": "Vantage Global wants to prevent users from entering an AnnualRevenue value on Account records that is negative or exceeds $100 billion. How should the Platform Administrator enforce this data entry rule?",
  "options": [
   {
    "key": "a",
    "text": "Build a scheduled report to identify invalid numbers daily."
   },
   {
    "key": "b",
    "text": "Set the AnnualRevenue field as universally required on the page layout."
   },
   {
    "key": "c",
    "text": "Create a Validation Rule that fires an error if AnnualRevenue < 0 OR AnnualRevenue > 100000000000."
   },
   {
    "key": "d",
    "text": "Enable Revenue Limits in Company Information settings."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Validation Rule enforces numeric boundary conditions at save time. A formula like OR(AnnualRevenue < 0, AnnualRevenue > 100000000000) prevents saving the record if the entered value falls outside valid bounds. **Why the other options are incorrect:** B: There is no standard \"Revenue Limits\" toggle in Company Information settings. C: Setting a field required ensures data is entered, but does not restrict minimum or maximum numeric limits. D: Scheduled reports identify invalid data after it has already been saved into the database, rather than preventing invalid input at save time.",
  "module": "automation"
 },
 {
  "simulado": 4,
  "number": 62,
  "statement": "An administrator at Titan Defense accidentally removed the SecurityClearance__c field from the main Employee page layout while updating section layouts. Which two methods can the administrator use to restore this field to the page layout? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Restore the missing field entry from the Organization Recycle Bin within 15 days."
   },
   {
    "key": "b",
    "text": "Deploy or copy the unmodified page layout file from a Sandbox environment."
   },
   {
    "key": "c",
    "text": "Drag the field from the top fields palette back onto the desired page layout section."
   },
   {
    "key": "d",
    "text": "Clone the layout from a user profile that lacks the field and save as new."
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Removing a field from a page layout canvas does not delete the field from Salesforce; the administrator can simply drag it back from the top fields palette onto the layout. If the page layout was deployed from a Sandbox environment where it remains unchanged, redeploying or copying the layout restores the original field arrangement. **Why the other options are incorrect:** C: The Recycle Bin stores deleted database records and soft-deleted fields, not layout component adjustments. D: Cloning a layout from a profile that lacks the field creates another copy without the field, failing to restore it.",
  "module": "objects"
 },
 {
  "simulado": 4,
  "number": 63,
  "statement": "Ten newly hired claims adjusters at Beacon Insurance report that they cannot see the custom Claims__c tab anywhere in the navigation menu or App Launcher. What is the reason these users cannot view the tab?",
  "options": [
   {
    "key": "a",
    "text": "Organization-Wide Defaults for Claims__c are set to Private."
   },
   {
    "key": "b",
    "text": "The adjusters are assigned to a low node in the Role Hierarchy."
   },
   {
    "key": "c",
    "text": "The claims adjusters' user profile lacks at least Read permission on the Claims__c object."
   },
   {
    "key": "d",
    "text": "Sharing rules have not been created for the claims adjusters."
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In Salesforce, for a user to view an object's tab in navigation or the App Launcher, their profile (or assigned permission set) must grant at least baseline Read permission on that object and the tab setting must not be Tab Hidden. **Why the other options are incorrect:** B: Organization-Wide Defaults control record-level access (which specific records are visible), not whether the object tab itself appears in navigation. C: Role Hierarchy placement affects record-level visibility, not object-level permissions or tab menu visibility. D: Sharing rules grant record access, but do not govern object permissions or tab visibility.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 64,
  "statement": "A lead administrator at Precision Logistics needs to audit setup modifications (such as modified custom fields, profile updates, and workflow edits) performed by junior administrators over the past week. Which tool should the administrator inspect?",
  "options": [
   {
    "key": "a",
    "text": "System Health Check"
   },
   {
    "key": "b",
    "text": "Debug Logs Inspector"
   },
   {
    "key": "c",
    "text": "Setup Audit Trail"
   },
   {
    "key": "d",
    "text": "Field History Tracking"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Setup Audit Trail tracks recent administrative setup changes made across the org (such as creating fields, editing profiles, or modifying flows), logging who made the change, what was changed, and the exact timestamp. **Why the other options are incorrect:** A: Field History Tracking tracks data value edits on individual object records, not administrative metadata setup changes. B: Debug Logs track Apex code execution, flow execution steps, and system performance logs, but do not provide a clean audit history of administrative Setup changes. D: System Health Check evaluates security settings against recommended baseline scores; it does not track historical administrative edits.",
  "module": "config"
 },
 {
  "simulado": 4,
  "number": 65,
  "statement": "Titan Systems needs an automated XML payload sent to an external warehouse fulfillment portal whenever a Sales Order record's status changes to \"Ready for Shipping\". Which automation tool should the Platform Administrator build in Flow Builder?",
  "options": [
   {
    "key": "a",
    "text": "Task Assignment Rule"
   },
   {
    "key": "b",
    "text": "Case Escalation Rule"
   },
   {
    "key": "c",
    "text": "Record-Triggered Flow configured with an Outbound Message action"
   },
   {
    "key": "d",
    "text": "Auto-Response Rule with routing entries"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A Record-Triggered Flow can evaluate record field changes (e.g., Status = 'Ready for Shipping') and trigger an Outbound Message action to transmit XML data to an external endpoint URL automatically. **Why the other options are incorrect:** B: Auto-Response Rules send email templates to submitters upon record creation; they do not transmit Outbound Message API payloads upon status updates. C: Task Assignment rules do not exist as a standard tool; assignment rules route record ownership for leads/cases. D: Escalation Rules evaluate aging unresolved cases; they do not manage external outbound messages on Sales Orders.",
  "module": "agentforce"
 }
];
