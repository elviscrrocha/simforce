// App Builder — 3 simulados (parseados dos .docx do usuário).
window.QUESTIONS = (window.QUESTIONS || []).concat([
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 1,
  "statement": "A \"Create Follow-up Task\" action was added to the Mobile & Lightning Actions section for Deal__c page layouts. Which Lightning component is needed to show that action?",
  "options": [
   {
    "key": "a",
    "text": "Highlights Panel"
   },
   {
    "key": "b",
    "text": "Activities"
   },
   {
    "key": "c",
    "text": "Related Lists"
   },
   {
    "key": "d",
    "text": "Tabs"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Activities component is the central place on a Lightning record page for managing and creating tasks and events. Custom actions that are of type 'Create a Record' and related to activities are typically surfaced within this component. Therefore, after adding the action to the page layout, the admin must ensure the Activities component is present on the Lightning page to display the new 'Create Follow-up Task' button.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 2,
  "statement": "A call center rep needs guided question prompts to capture customer details step-by-step. Which solution should be used?",
  "options": [
   {
    "key": "a",
    "text": "Path"
   },
   {
    "key": "b",
    "text": "Validation rule"
   },
   {
    "key": "c",
    "text": "Screen flow"
   },
   {
    "key": "d",
    "text": "Dashboard"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Screen flows are Salesforce's primary tool for creating guided, wizard-like experiences. They allow you to build a sequence of screens, each collecting specific information from the user. You can add logic, validation, and branching. At the end, the flow can create or update records. This is the perfect solution for a call center rep who needs to be walked through a data capture process, ensuring consistency and completeness.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 3,
  "statement": "A Case page should display a text alert only when the related Account's Tier = \"Gold.\" What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Clone page per tier"
   },
   {
    "key": "b",
    "text": "Rich text component with visibility filter"
   },
   {
    "key": "c",
    "text": "Custom Apex component"
   },
   {
    "key": "d",
    "text": "Sharing rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Lightning App Builder provides powerful declarative tools for conditional UI. By adding a Rich Text component (for the alert message) and then configuring its visibility with an advanced filter that references a field from a related record (Account.Tier__c), you create a dynamic page element that appears exactly when needed. This approach is clean, maintainable, and requires no code. It's the standard pattern for conditionally displaying content based on related data.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 4,
  "statement": "A Case record must display the current Support Level from its related Account in real time. What should be created?",
  "options": [
   {
    "key": "a",
    "text": "Workflow field update"
   },
   {
    "key": "b",
    "text": "Formula field on Case"
   },
   {
    "key": "c",
    "text": "Roll-up summary"
   },
   {
    "key": "d",
    "text": "Text field with flow"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For displaying a parent field value on a child record in real-time, a cross-object formula field is the ideal solution. It creates a read-only field that dynamically calculates its value based on the parent field each time the record is accessed. This ensures the displayed information is always current, without any need for automation or data copying. The formula `Account.Support_Level__c` on the Case object directly meets the requirement.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 5,
  "statement": "A company has a custom object called Billing_Record and another called Billing_Line. Billing_Line currently has a lookup to Billing_Record. The admin wants to convert it to master-detail but cannot. Which two conditions could block this change? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Billing_Line already has two master-detail relationships"
   },
   {
    "key": "b",
    "text": "Some Billing_Line records do not reference a Billing_Record"
   },
   {
    "key": "c",
    "text": "Billing_Record contains validation rules"
   },
   {
    "key": "d",
    "text": "Billing_Line has field history tracking enabled"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Converting a lookup to master-detail has specific prerequisites and limitations. The child object cannot already have two master-detail relationships (option 1), as that's the platform limit. Also, all existing child records must have a parent (option 2); master-detail relationships cannot have null parent values. Options 3 and 4 are not blockers. Therefore, the admin must check these two conditions first.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 6,
  "statement": "A company migrating from Classic to Lightning wants prebuilt adoption dashboards and utilities to assist with transition. Where should the app builder look?",
  "options": [
   {
    "key": "a",
    "text": "Setup Audit Trail"
   },
   {
    "key": "b",
    "text": "AppExchange"
   },
   {
    "key": "c",
    "text": "Developer Console"
   },
   {
    "key": "d",
    "text": "Object Manager"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When seeking prebuilt solutions, the AppExchange is always the primary destination. It contains thousands of apps and components, including those specifically designed for Lightning adoption and migration. These can include dashboards to track user readiness, utilities to identify Classic features not yet available in Lightning, and tools to simplify the transition. The other options (Audit Trail, Developer Console, Object Manager) are all internal Salesforce tools for different purposes and do not offer such prebuilt adoption resources.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 7,
  "statement": "A company must clear values in several fields for 5,000 Lead records using a CSV containing Ids. What two steps are required? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Use Import Wizard and map blank values"
   },
   {
    "key": "b",
    "text": "Use Data Loader to update"
   },
   {
    "key": "c",
    "text": "Enable \"Insert Null Values\" in Data Loader settings"
   },
   {
    "key": "d",
    "text": "Create a new record type and re-import"
   }
  ],
  "correct": [
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To clear field values in bulk using a CSV, you need to use Data Loader (option 2) because it's designed for large data operations. The critical additional step is to enable the 'Insert Null Values' option (option 3) in the Data Loader settings. This ensures that the blank cells in your CSV are interpreted as commands to set the corresponding fields to null/blank in Salesforce, rather than being ignored. The Import Wizard is not ideal for this, and creating a new record type is unrelated.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 8,
  "statement": "A company needs a Status picklist reused across multiple custom objects. Which feature should be used?",
  "options": [
   {
    "key": "a",
    "text": "Dependent picklist"
   },
   {
    "key": "b",
    "text": "Global value set"
   },
   {
    "key": "c",
    "text": "Workflow rule"
   },
   {
    "key": "d",
    "text": "Record type"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When you need the same picklist values on multiple fields (potentially on multiple objects), a global value set is the perfect solution. It acts as a master list of values. Any picklist field that uses that global value set will automatically reflect the master list. If you need to add a new status value, you add it once to the global value set, and all fields using it are updated automatically. This ensures consistency and simplifies maintenance dramatically compared to managing separate picklist definitions.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 9,
  "statement": "A company needs to count child records without code. What two steps are required? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Create master-detail relationship"
   },
   {
    "key": "b",
    "text": "Use roll-up summary field"
   },
   {
    "key": "c",
    "text": "Create cross-object formula"
   },
   {
    "key": "d",
    "text": "Use lookup relationship"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The declarative path to counting child records is a two-step process involving data modeling and field creation. First, you must establish a master-detail relationship (option 1) between the parent and child objects. Second, you create a roll-up summary field on the parent object (option 2), setting its summary type to COUNT. This combination enables automatic, code-free counting of child records.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 10,
  "statement": "A company needs to upgrade an unmanaged package in production. What must be done?",
  "options": [
   {
    "key": "a",
    "text": "Click upgrade link"
   },
   {
    "key": "b",
    "text": "Uninstall and reinstall new version"
   },
   {
    "key": "c",
    "text": "Deploy through change set"
   },
   {
    "key": "d",
    "text": "Activate package in Setup"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The distinction between managed and unmanaged packages is crucial. Managed packages support versioning and upgrades; unmanaged packages do not. Once an unmanaged package is installed, it becomes part of your org's metadata, editable by your admins. There is no upgrade path. To get a new version of an unmanaged package, you must uninstall the old one (losing all its data and components) and install the new one. This is a significant limitation, which is why managed packages are preferred for solutions intended to be updated over time.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 11,
  "statement": "A company now runs many parallel development tracks and wants 20+ sandboxes that all start with the same configuration and include a subset of production data. What sandbox type best fits?",
  "options": [
   {
    "key": "a",
    "text": "Developer sandbox"
   },
   {
    "key": "b",
    "text": "Partial Copy sandbox"
   },
   {
    "key": "c",
    "text": "Full Copy sandbox"
   },
   {
    "key": "d",
    "text": "Sandbox cloning only"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For multiple development environments requiring a consistent metadata baseline and a representative set of data, Partial Copy sandboxes are the ideal choice. They provide the necessary data subset (unlike Developer sandboxes) without the overhead of full production data (unlike Full Copy sandboxes). Using a sandbox template, you can control which objects' data is included, making them perfect for parallel development tracks.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 12,
  "statement": "A company wants a \"Log Support Call\" action available from multiple objects and accessible anywhere in the Salesforce mobile app (record pages, feed, groups). Why use a Global Action?",
  "options": [
   {
    "key": "a",
    "text": "It is only available on a single object's record pages"
   },
   {
    "key": "b",
    "text": "It automatically copies the object page layout"
   },
   {
    "key": "c",
    "text": "It can be launched broadly across mobile locations"
   },
   {
    "key": "d",
    "text": "It only works inside Lightning App Builder pages"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Global actions are specifically built for broad accessibility. Unlike object-specific actions that are tied to a particular record type, global actions can be placed in the global publisher, on the navigation bar, and in other common locations across the entire app. This makes them the perfect choice for a 'Log Support Call' action that needs to be available from anywhere, on any object, and in various contexts like feeds and groups.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 13,
  "statement": "A company wants employees to openly discuss Supplier records so that everyone internally can see the conversations. Which two Chatter features meet this need? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Public Chatter groups"
   },
   {
    "key": "b",
    "text": "Record feed posts on Supplier records"
   },
   {
    "key": "c",
    "text": "Private collaboration groups"
   },
   {
    "key": "d",
    "text": "Approval notifications"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Chatter provides two primary avenues for open, internal discussion. Public groups (option 1) allow for topic-based conversations visible to everyone. Record feeds (option 2) allow for discussions directly tied to a specific record, also visible to anyone with access. Both satisfy the requirement for open, internal discussion about Suppliers. Private groups (option 3) would restrict visibility, and approval notifications (option 4) are not a discussion feature.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 14,
  "statement": "A company wants to display the number of Completed Projects within the last 12 months on the Client record. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Cross-object formula"
   },
   {
    "key": "b",
    "text": "Roll-up summary field"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Screen flow"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Roll-up summary fields are the standard tool for displaying aggregated child data on a parent. The requirement adds a filter (Completed Projects in the last 12 months). Modern roll-up summary fields support filters directly, or you can create a formula field on the child object (Project) that returns 1 if it's completed and within the date range, and then create a roll-up summary that SUMs that formula field. This provides the precise, automatically updating count needed.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 15,
  "statement": "A company wants to prevent status rollback and enforce conditional required fields. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Dependent picklists"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Validation rules"
   },
   {
    "key": "d",
    "text": "Required page layout fields"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Validation rules are the standard, server-side mechanism for enforcing data quality rules at save time. They have access to prior field values (via `PRIORVALUE`), allowing them to detect and prevent status rollback. They also support complex boolean logic to conditionally require fields. Therefore, a single validation rule (or a set of them) can handle both requirements declaratively.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 16,
  "statement": "A company wants to roll up child records to parent only when Status = \"Active.\" What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Lookup relationship"
   },
   {
    "key": "b",
    "text": "Master-detail with filtered roll-up"
   },
   {
    "key": "c",
    "text": "Assignment rule"
   },
   {
    "key": "d",
    "text": "Approval process"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Standard roll-up summary fields aggregate all related child records. The 'filtered roll-up' feature (available in newer Salesforce releases or via techniques like using a formula field on the child to flag active records and rolling up that flag) allows for conditional aggregation. By creating a roll-up summary field on the parent that only counts child records where Status = 'Active', you meet the requirement exactly. This is the most efficient and declarative solution.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 17,
  "statement": "A company wants visitors on a public website to submit support requests that automatically create Case records. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Email-to-Case"
   },
   {
    "key": "b",
    "text": "Web-to-Case"
   },
   {
    "key": "c",
    "text": "Outbound Message"
   },
   {
    "key": "d",
    "text": "Screen Flow"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Web-to-Case is the classic Salesforce feature for capturing support requests from external websites. It provides a simple HTML form code that you can paste into any webpage. When the form is submitted, a Case is created in Salesforce, often with auto-response rules to acknowledge the submission. This is the most direct and straightforward way to meet the requirement.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 18,
  "statement": "A component on the Account page should display only if a related Contact's Role equals \"Primary.\" What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Role hierarchy"
   },
   {
    "key": "b",
    "text": "Advanced component visibility filter"
   },
   {
    "key": "c",
    "text": "Manual sharing"
   },
   {
    "key": "d",
    "text": "Approval process"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Lightning App Builder provides powerful dynamic page configuration through component visibility filters. The 'Advanced' filter option allows you to write formulas that can reference not only fields on the current record but also fields from related records via lookup relationships. In this case, you can create a filter like `RelatedContact__r.Role__c = \"Primary\"` and set the component to be visible only when this condition is true. This gives you precise, condition-based control over the page UI based on related data.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 19,
  "statement": "A custom Installation object should inherit sharing and ownership from Opportunity. Which relationship type should be created?",
  "options": [
   {
    "key": "a",
    "text": "Lookup"
   },
   {
    "key": "b",
    "text": "Master-detail"
   },
   {
    "key": "c",
    "text": "External lookup"
   },
   {
    "key": "d",
    "text": "Hierarchical"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement to have a child record inherit sharing and ownership from a parent is the defining characteristic of a master-detail relationship. This tight coupling ensures that the child's security is managed entirely through the parent. If the Installation record is tightly dependent on the Opportunity (e.g., it cannot exist without it and should be deleted if the Opportunity is deleted), master-detail is the appropriate choice. Lookup relationships (option 1) would create a link but not the required inheritance.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 20,
  "statement": "A custom Lightning component is not visible on Home page. Which two reasons could apply? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "My Domain not deployed"
   },
   {
    "key": "b",
    "text": "Component configured for record pages only"
   },
   {
    "key": "c",
    "text": "Profile lacks login hours"
   },
   {
    "key": "d",
    "text": "Sharing rule missing"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Troubleshooting component visibility involves checking both configuration and platform requirements. The component's own design-time settings (option 2) determine which page types it supports; if it's not enabled for Home pages, it won't appear. Additionally, some components, particularly those relying on certain APIs or frameworks, may require a My Domain (option 1) to function correctly on the Home page. Login hours (option 3) and sharing rules (option 4) are unrelated to component visibility on the page layout.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 21,
  "statement": "A custom object contains over 120 fields. Users want collapsible sections on the Lightning page to improve usability. Which component should be added?",
  "options": [
   {
    "key": "a",
    "text": "Highlights Panel"
   },
   {
    "key": "b",
    "text": "Accordion"
   },
   {
    "key": "c",
    "text": "Path"
   },
   {
    "key": "d",
    "text": "Related List"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When facing a record page with an overwhelming number of fields (120+), the Accordion component is the ideal solution. It allows you to group fields into logical categories (e.g., 'Basic Information,' 'Financial Details,' 'Technical Specs') and make each group collapsible. This dramatically improves the user experience by reducing visual clutter and allowing users to focus on the section relevant to their current task. The other components serve different purposes entirely.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 22,
  "statement": "A custom object has two lookup relationships. Reports must show records with and without related records. What is required?",
  "options": [
   {
    "key": "a",
    "text": "Custom report type"
   },
   {
    "key": "b",
    "text": "Bucket field"
   },
   {
    "key": "c",
    "text": "Joined report"
   },
   {
    "key": "d",
    "text": "Field history tracking"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The key to this requirement is the report type's relationship setting. Standard report types often default to 'with related records only,' which would exclude records without related data. By creating a custom report type for your custom object, you can explicitly set the relationship options to 'with or without' for each lookup. This ensures that all records from the primary object are included in the report, regardless of whether they have related records in the lookup objects. This is the precise tool for the job.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 23,
  "statement": "A custom object must delete when Account is deleted but remain if Contact is deleted. What design works?",
  "options": [
   {
    "key": "a",
    "text": "Master-detail to Account, lookup to Contact"
   },
   {
    "key": "b",
    "text": "Lookup to both"
   },
   {
    "key": "c",
    "text": "Master-detail to both"
   },
   {
    "key": "d",
    "text": "Lookup to Account, master-detail to Contact"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This is a classic data modeling problem requiring different behaviors for two parent objects. The solution is to use a master-detail relationship for the parent that should cause cascade delete (Account), and a lookup relationship for the parent that should not (Contact). This gives you the desired cascade behavior with Account and the independence with Contact. This combination is a common and valid design pattern.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 24,
  "statement": "A custom object Shipment__c should not be deletable by warehouse users. What two actions help prevent deletion? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Remove Delete permission via permission set"
   },
   {
    "key": "b",
    "text": "Remove Delete permission from profile"
   },
   {
    "key": "c",
    "text": "Change OWD to Private"
   },
   {
    "key": "d",
    "text": "Remove Delete button from layout"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To prevent deletion, you must remove the user's permission to delete records of that object. This is done by modifying the source of their permissions: either their profile (option 2) or any permission sets they have (option 1). OWD (option 3) and removing the UI button (option 4) are ineffective for true security. OWD controls visibility, not deletion rights, and UI hiding is not a security control.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 25,
  "statement": "A custom object Supplier__c has fields: AddressLine__c, Metro__c, Region__c, Country__c. Leadership wants a formula that displays on two lines: Line 1 = AddressLine, Line 2 = Metro, Region Country. Which formula works?",
  "options": [
   {
    "key": "a",
    "text": "AddressLine__c & BR() & Metro__c & \", \" & Region__c & \" \" & Country__c"
   },
   {
    "key": "b",
    "text": "AddressLine__r & BR() & Metro__r & \", \" & Region__r & \" \" & Country__r"
   },
   {
    "key": "c",
    "text": "AddressLine__c & \"\\n\" & Metro__c & \", \" & Region__c & \" \" & Country__c"
   },
   {
    "key": "d",
    "text": "BR(AddressLine__c) & Metro__c & \", \" & Region__c & \" \" & Country__c"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Building multi-line formulas in Salesforce requires the correct use of concatenation operators and the `BR()` function. `&` concatenates strings. `BR()` inserts an HTML line break. Option 1 correctly uses these to build the first line, add a break, and build the second line with proper punctuation. The other options use incorrect suffixes, invalid syntax, or wrong line break methods.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 26,
  "statement": "A custom picklist field on Account must appear on related Contact records and always reflect the current Account value. What should the app builder create?",
  "options": [
   {
    "key": "a",
    "text": "Text field with scheduled batch job"
   },
   {
    "key": "b",
    "text": "Roll-up summary field"
   },
   {
    "key": "c",
    "text": "Formula field using TEXT(Account.Field__c)"
   },
   {
    "key": "d",
    "text": "Duplicate rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The need is to display a parent's field value on a child record in real-time. Formula fields with cross-object references are the perfect declarative solution for this. They provide real-time, read-only access to parent field values without any data duplication or synchronization logic. The formula `TEXT(Account.Field__c)` on Contact will always show the current value of the Account's picklist, meeting the requirement exactly. The other options either don't work in real-time, work in the wrong direction, or are for unrelated purposes.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 27,
  "statement": "A custom report type is built for Orders with or without Deliveries. The business wants to include Customer Satisfaction Rating stored on the related Customer__c record. What should the admin do?",
  "options": [
   {
    "key": "a",
    "text": "Add fields via lookup (from Customer__c) to the report type"
   },
   {
    "key": "b",
    "text": "Convert the relationship to master-detail"
   },
   {
    "key": "c",
    "text": "Rebuild the report type with Customer__c as the primary object"
   },
   {
    "key": "d",
    "text": "Add the rating field onto Order__c page layout"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Custom report types are flexible. When you create a report type with a primary object, you can add fields from related objects by traversing lookup relationships. In this case, the admin should edit the existing 'Orders with or without Deliveries' report type and use the 'Add fields related via lookup' option to include the Customer Satisfaction Rating field from the related Customer__c record. This makes the field available for reporting without altering the data model.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 28,
  "statement": "A custom tab deployed without profile settings will be:",
  "options": [
   {
    "key": "a",
    "text": "Hidden"
   },
   {
    "key": "b",
    "text": "Default On"
   },
   {
    "key": "c",
    "text": "Default Off"
   },
   {
    "key": "d",
    "text": "Unavailable"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When deploying tabs, it's important to understand that profile visibility settings are separate metadata. If you don't include them, the tab is deployed but is not turned on for any profile. The default state is 'Off'. This is a security measure, ensuring that new tabs are not automatically exposed to all users. An admin must explicitly assign the tab's visibility to the desired profiles post-deployment.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 29,
  "statement": "A developer finished Apex code in sandbox. The admin wants to ensure deployment to production will succeed before the release window. What should be done?",
  "options": [
   {
    "key": "a",
    "text": "Deploy immediately"
   },
   {
    "key": "b",
    "text": "Validate outbound change set"
   },
   {
    "key": "c",
    "text": "Activate debug logs"
   },
   {
    "key": "d",
    "text": "Create custom metadata type"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce provides a critical feature for deployment risk mitigation: validation. When you upload an outbound change set, you can click the 'Validate' button. This performs a dry run of the deployment against the target org, running all tests and checks, and reporting any errors. It does not, however, commit the changes. This allows the admin to confirm that the Apex code and all other components will deploy successfully, well ahead of the actual release window, enabling any necessary fixes to be made calmly and deliberately.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 30,
  "statement": "A formula must calculate the number of days since a Marketing Email Date. Only whole days are needed. Which function should be used?",
  "options": [
   {
    "key": "a",
    "text": "TODAY()"
   },
   {
    "key": "b",
    "text": "TOMORROW()"
   },
   {
    "key": "c",
    "text": "DATE()"
   },
   {
    "key": "d",
    "text": "DATETIMEVALUE()"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The simplest and most direct way to calculate the number of whole days between two dates in Salesforce is to subtract one Date field from another. The `TODAY()` function returns the current date as a Date value. Therefore, `TODAY() - Marketing_Email_Date__c` performs a date subtraction, yielding an integer representing the number of days. This is efficient, accurate, and meets the requirement perfectly. The other functions are either invalid or would produce incorrect or overly complex results.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 31,
  "statement": "A formula must display address fields on two lines. Which formula works?",
  "options": [
   {
    "key": "a",
    "text": "Street__c & BR() & City__c & \", \" & Country__c"
   },
   {
    "key": "b",
    "text": "CONCAT(Street__c, City__c)"
   },
   {
    "key": "c",
    "text": "Street__c + City__c"
   },
   {
    "key": "d",
    "text": "TEXT(Street__c)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Building multi-line text in Salesforce formulas requires the `BR()` function for line breaks and the `&` operator for concatenation. Option 1 correctly combines these elements with the necessary punctuation (comma and space) to produce a properly formatted two-line address. The other options either lack line breaks, lack punctuation, or do not combine all the fields.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 32,
  "statement": "A junction object connects Inventory and Order. What access is required to view junction records?",
  "options": [
   {
    "key": "a",
    "text": "Access to one parent"
   },
   {
    "key": "b",
    "text": "Sharing rule on junction object"
   },
   {
    "key": "c",
    "text": "Access to both parent objects"
   },
   {
    "key": "d",
    "text": "Apex sharing"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Junction objects exist to link two other objects. The data they contain is most meaningful when you can see the details of both linked records. Therefore, to effectively view and understand a junction record, a user typically needs read access to both parent objects. This is a key consideration in designing security for many-to-many relationships.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 33,
  "statement": "A junction object links Clients and Services. A user lacks Read access to the Service object. What is the impact?",
  "options": [
   {
    "key": "a",
    "text": "Cannot see Client records"
   },
   {
    "key": "b",
    "text": "Cannot see junction record"
   },
   {
    "key": "c",
    "text": "Can see junction record but not Service details"
   },
   {
    "key": "d",
    "text": "Gains implicit read access"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This question illustrates an important point about related-object access in Salesforce. Object permissions are independent. A user can have access to a junction object record. However, if that junction object has fields that lookup to another object (Service), and the user lacks Read access to that other object, they will not be able to see the data from that related object. The junction record will appear, but the information from Service will be hidden. This is a common scenario that highlights the need to grant appropriate access to all objects in a relationship chain.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 34,
  "statement": "A Lightning component installed from AppExchange appears on desktop but not in the Salesforce mobile app. What is the most likely cause?",
  "options": [
   {
    "key": "a",
    "text": "The page layout was not assigned"
   },
   {
    "key": "b",
    "text": "The Lightning page is inactive"
   },
   {
    "key": "c",
    "text": "The component was built only for desktop usage"
   },
   {
    "key": "d",
    "text": "The compact layout is missing fields"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Component availability across desktop and mobile is not automatic. Component developers must explicitly design and enable their components for mobile. If an AppExchange component works on desktop but not mobile, the most common reason is that the component was built for desktop only and has not been enabled or optimized for the Salesforce mobile app. This is a key consideration when selecting AppExchange components for mobile users.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 35,
  "statement": "A Lightning component should appear in the Utility Bar. How must it be configured?",
  "options": [
   {
    "key": "a",
    "text": "Mark as available for utility bar"
   },
   {
    "key": "b",
    "text": "Mark for record page use"
   },
   {
    "key": "c",
    "text": "Enable for mobile"
   },
   {
    "key": "d",
    "text": "Assign to profile"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The utility bar is a special container in Lightning apps. For a custom component to be eligible to be added there, it must be explicitly designed to support that location. This is done by setting the appropriate 'isExposed' or 'targets' property in the component's metadata (e.g., `targets: ['lightning__UtilityBar']`). Marking it as available for the utility bar is the essential first step; then it can be added via the App Manager.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 36,
  "statement": "A long text field is converted to Rich Text. What must be considered? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "History tracking stores only first 255 characters"
   },
   {
    "key": "b",
    "text": "Reports always show full formatting"
   },
   {
    "key": "c",
    "text": "Data loss may occur"
   },
   {
    "key": "d",
    "text": "Audit trail auto-expands field history"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "When converting a long text area to rich text, you must be aware of platform limitations. History tracking will still only capture the first 255 characters (option 1), which might be insufficient for audit purposes. Also, while rare, there is a potential risk of data loss (option 3) during the conversion process, making a backup a prudent step. Reporting limitations (option 2) and audit trail expansion (option 4) are not accurate or relevant considerations.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 37,
  "statement": "A lookup field is added on a custom object Parcel__c pointing to Account. Which report type is automatically created?",
  "options": [
   {
    "key": "a",
    "text": "Parcels with Accounts"
   },
   {
    "key": "b",
    "text": "Accounts with Parcels"
   },
   {
    "key": "c",
    "text": "Parcels with or without Accounts"
   },
   {
    "key": "d",
    "text": "Accounts without Parcels"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce automatically creates a parent-child custom report type when you establish a relationship from a child to a parent. The primary object is the parent, and the related object is the child. In this case, with Parcel__c looking up to Account, the auto-generated report type is 'Accounts with Parcels'. This provides a ready-to-use report type that shows all Accounts and their related Parcels.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 38,
  "statement": "A manager wants to ensure cases cannot move backward to earlier statuses and wants certain fields required based on criteria. What should be implemented?",
  "options": [
   {
    "key": "a",
    "text": "Approval process"
   },
   {
    "key": "b",
    "text": "Validation rules"
   },
   {
    "key": "c",
    "text": "Dependent picklists"
   },
   {
    "key": "d",
    "text": "Case assignment rules"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Validation rules are the Swiss Army knife of declarative data integrity. They can evaluate field changes (using `PRIORVALUE`), check field values, and conditionally require fields. This makes them ideal for both preventing status regression and enforcing conditional field requirements. The other tools are designed for different purposes (approvals, picklist filtering, routing) and cannot handle these validation tasks.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 39,
  "statement": "A mentorship program requires each Junior Consultant to report to exactly one Senior Consultant, while a Senior may mentor multiple Juniors. Which relationship type is appropriate?",
  "options": [
   {
    "key": "a",
    "text": "Master-detail"
   },
   {
    "key": "b",
    "text": "Lookup"
   },
   {
    "key": "c",
    "text": "Many-to-many junction"
   },
   {
    "key": "d",
    "text": "External lookup"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The relationship described is a classic one-to-many: one Senior can have many Juniors, and each Junior has one Senior. A lookup relationship is the appropriate tool for this. It establishes the link without the tight coupling of master-detail, which is important in a mentorship context where a Senior leaving should not automatically delete all their Juniors. Lookups provide the necessary flexibility and data integrity.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 40,
  "statement": "A mobile user wants to quickly update a record's Status and a custom DueDate__c directly from the record feed. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Custom action"
   },
   {
    "key": "b",
    "text": "Custom URL formula field"
   },
   {
    "key": "c",
    "text": "Web link"
   },
   {
    "key": "d",
    "text": "Custom button (Classic)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Custom actions, especially those of type 'Update a Record', are designed for quick, inline edits. They present a simple form to the user with the specified fields, allowing them to make changes without leaving the current page. This is exactly the experience needed for a mobile user who wants to quickly update Status and DueDate from the record feed. They are declarative, mobile-optimized, and easy to configure.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 41,
  "statement": "A new admin at Summit Analytics wants to visually explore how standard and custom objects relate to each other in the org. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Fields & Relationships page"
   },
   {
    "key": "b",
    "text": "Object Manager"
   },
   {
    "key": "c",
    "text": "Schema Builder"
   },
   {
    "key": "d",
    "text": "Setup Audit Trail"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Schema Builder is the dedicated tool for visualizing an org's data model. It provides a drag-and-drop canvas where you can add objects and instantly see all their fields and, most importantly, the lines representing relationships between them. This gives a new admin an immediate, intuitive understanding of how standard and custom objects interconnect, far surpassing the piecemeal information available in Object Manager or the Fields & Relationships page.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 42,
  "statement": "A new field doesn't appear in a custom report type. What should be updated?",
  "options": [
   {
    "key": "a",
    "text": "Field-level security"
   },
   {
    "key": "b",
    "text": "Custom report type layout"
   },
   {
    "key": "c",
    "text": "Page layout"
   },
   {
    "key": "d",
    "text": "Profile permission"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Custom report types have a field layout that is independent of the object's page layout. When a new field is created, it is not automatically added to all existing custom report types (unless the 'Auto add to custom report types' setting was enabled during field creation). If it wasn't, the field must be manually added by editing the custom report type and including the new field in its selected fields.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 43,
  "statement": "A new field should not appear in existing custom report types. What setting should be disabled?",
  "options": [
   {
    "key": "a",
    "text": "Add to page layouts"
   },
   {
    "key": "b",
    "text": "Auto add to custom report types"
   },
   {
    "key": "c",
    "text": "Field-level security"
   },
   {
    "key": "d",
    "text": "Report visibility"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The 'Auto add to custom report types' setting on a new custom field determines whether that field is automatically included in the layouts of all existing custom report types for that object. To keep a new field out of existing report types, you must explicitly disable this setting when you create the field. This gives you control over which report types the field appears in.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 44,
  "statement": "A new object called Equipment_Log should appear as a related list on Equipment. What must be configured?",
  "options": [
   {
    "key": "a",
    "text": "Create a lookup field from Equipment_Log to Equipment"
   },
   {
    "key": "b",
    "text": "Create a roll-up summary on Equipment"
   },
   {
    "key": "c",
    "text": "Create a junction object"
   },
   {
    "key": "d",
    "text": "Enable feed tracking"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The fundamental requirement for a related list is a relationship. By creating a lookup field on the child object (Equipment_Log) pointing to the parent object (Equipment), you establish that relationship. Once the relationship exists, you can add the Equipment_Log related list to the Equipment page layout via the Related List component in Lightning App Builder. The lookup field is the essential first step.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 45,
  "statement": "A nonprofit wants Salesforce to automatically export its data every night for backup purposes. Which built-in feature should be used?",
  "options": [
   {
    "key": "a",
    "text": "Sandbox refresh"
   },
   {
    "key": "b",
    "text": "Data Export Service"
   },
   {
    "key": "c",
    "text": "Report subscription"
   },
   {
    "key": "d",
    "text": "Change Data Capture"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For automated, scheduled data backups, the Data Export Service is the correct built-in tool. It can be configured to export all data or specific objects on a weekly or monthly basis, and the exports are available for download. Sandbox refreshes are for creating test environments, report subscriptions are for report distribution, and Change Data Capture is for real-time integration. Only the Data Export Service meets the backup requirement.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 46,
  "statement": "A partial sandbox was refreshed, but Order_Shipment__c has no rows. Production has millions of rows. What is the most likely reason?",
  "options": [
   {
    "key": "a",
    "text": "Refresh was run too soon after a deployment"
   },
   {
    "key": "b",
    "text": "The sandbox is still populating data"
   },
   {
    "key": "c",
    "text": "The object wasn't selected in the partial sandbox template"
   },
   {
    "key": "d",
    "text": "The sandbox automatically excludes all objects over 1 million rows"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Partial Copy sandboxes are configured using sandbox templates. These templates determine which standard and custom objects will have their data copied. If an object is not selected in the template, the sandbox will contain its metadata (fields, relationships) but will have zero data rows. Given that Order_Shipment__c has no data, the most probable cause is that it was simply not selected in the sandbox template used for the refresh.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 47,
  "statement": "A recruiting system needs Candidates to apply for multiple Jobs, and Jobs to have multiple Candidates. What should be created?",
  "options": [
   {
    "key": "a",
    "text": "Two lookup fields"
   },
   {
    "key": "b",
    "text": "Junction object with two master-detail fields"
   },
   {
    "key": "c",
    "text": "Roll-up summary"
   },
   {
    "key": "d",
    "text": "Approval process"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Many-to-many relationships are a common data modeling challenge in Salesforce. The solution is always a junction object. This custom object sits between the two entities and contains two master-detail relationships (one to each entity). Each record in the junction object represents a single link between one instance of the first entity and one instance of the second. In this case, the 'Application' junction object would link a specific Candidate to a specific Job, allowing Candidates to have multiple Applications (to different Jobs) and Jobs to have multiple Applications (from different Candidates).",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 48,
  "statement": "A Review__c object must be visible only to HR and the submitting employee. What three steps help enforce this? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Set OWD to Private"
   },
   {
    "key": "b",
    "text": "Remove Read access from other profiles"
   },
   {
    "key": "c",
    "text": "Create criteria-based sharing for HR"
   },
   {
    "key": "d",
    "text": "Enable manual sharing"
   },
   {
    "key": "e",
    "text": "Disable role hierarchy"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Restricting object visibility to specific users involves a layered approach. Private OWD (option 1) is the foundation. Removing object permissions from unauthorized profiles (option 2) prevents any access. Then, granting access to the authorized group (HR) via a sharing rule (option 3) provides the necessary visibility. Manual sharing is for exceptions, and disabling the role hierarchy is not a standard step for this requirement.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 49,
  "statement": "A sales user reports that a Contact record is not visible to several colleagues. Which three areas should the administrator review to troubleshoot? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Object-level permissions for Contact"
   },
   {
    "key": "b",
    "text": "Whether the Contact is associated to an Account"
   },
   {
    "key": "c",
    "text": "Organization-Wide Defaults for Account"
   },
   {
    "key": "d",
    "text": "The number of related Opportunities"
   },
   {
    "key": "e",
    "text": "Email deliverability settings"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Troubleshooting record visibility involves checking a hierarchy of access controls. Start with object-level permissions (option 1). Then, examine the relationship with the Account, as Contact visibility is often inherited (option 2). Finally, check the Account's Organization-Wide Defaults (option 3), as this baseline sharing setting determines the starting point for Account (and thus Contact) visibility. The number of Opportunities and email settings are irrelevant.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 50,
  "statement": "A Salesforce admin needs to update a field on a parent record when a child record (lookup relationship) is deleted. Which automation should be used?",
  "options": [
   {
    "key": "a",
    "text": "Scheduled flow"
   },
   {
    "key": "b",
    "text": "Record-triggered flow"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Quick action"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When you need to react to a system event like record deletion, a record-triggered flow is the appropriate declarative tool. It can be configured with a 'Delete' trigger and can perform actions such as updating a parent record. Scheduled flows run on a timer, validation rules don't run on delete, and quick actions require user clicks. Therefore, the record-triggered flow is the correct solution.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 51,
  "statement": "A sandbox is on a newer release than production. A change set includes a feature introduced in the newer release. What should be considered?",
  "options": [
   {
    "key": "a",
    "text": "Deployment auto-upgrades production"
   },
   {
    "key": "b",
    "text": "Deployment will fail"
   },
   {
    "key": "c",
    "text": "Change set upgrades automatically"
   },
   {
    "key": "d",
    "text": "No impact"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A fundamental rule of Salesforce deployments is that you cannot deploy metadata from a higher release version to a lower release version. The target org must be on the same or higher release to accept the metadata. Since the sandbox is on a newer release and contains a feature not yet available in production, the deployment will fail with errors about invalid components. This highlights the importance of keeping sandboxes and production on the same release version for successful deployments.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 52,
  "statement": "A service team wants a red/yellow/green icon displayed based on Case Priority. Which two formulas accomplish this? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "IMAGE(CASE(Priority,\"Low\",\"/img/flag_green.gif\",\"Medium\",\"/img/flag_yellow.gif\",\"High\",\"/img/flag_red.gif\",\"/s.gif\"),\"Priority\")"
   },
   {
    "key": "b",
    "text": "CASE(Priority,\"Low\",\"/img/flag_green.gif\",\"Medium\",\"/img/flag_yellow.gif\",\"High\",\"/img/flag_red.gif\",\"/s.gif\")"
   },
   {
    "key": "c",
    "text": "IF(ISPICKVAL(Priority,\"Low\"),\"/img/flag_green.gif\",\"/s.gif\")"
   },
   {
    "key": "d",
    "text": "IMAGE(\"/img/flag_red.gif\",\"Priority\")"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To display a dynamic icon, you need both the logic to select the correct image and the mechanism to display it. Option 2 provides the selection logic, returning the correct URL string. Option 1 provides both the logic (via `CASE`) and the display (via `IMAGE`). Both are valid formulas that accomplish the task; option 1 is more self-contained for rendering the image directly. The other options lack the complete logic or are static.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 53,
  "statement": "A software partner is creating managed packages and wants to prevent naming conflicts with customers' metadata. What should they use?",
  "options": [
   {
    "key": "a",
    "text": "Namespace"
   },
   {
    "key": "b",
    "text": "Help Text"
   },
   {
    "key": "c",
    "text": "Record Type"
   },
   {
    "key": "d",
    "text": "Sharing Setting"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When developing managed packages for distribution, a namespace is essential. It is a unique prefix (e.g., 'abc__') that you register with Salesforce and apply to your package. All custom metadata in the package (like CustomObject__c, CustomField__c) gets this prefix. This guarantees that your component names will not collide with components the subscriber org creates themselves, as their components will lack your specific prefix.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 54,
  "statement": "A team built a Lightning app and wants to add custom UI components beyond standard ones. Where can they obtain them? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "AppExchange"
   },
   {
    "key": "b",
    "text": "Lightning Components (custom Aura/LWC)"
   },
   {
    "key": "c",
    "text": "Data Import Wizard"
   },
   {
    "key": "d",
    "text": "Reports tab"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "When you need custom UI beyond the standard components, you have two primary sources: you can build them yourself using Salesforce's development frameworks (Aura or LWC), or you can install pre-built components from the AppExchange. These are the only two ways to obtain custom Lightning components. The Data Import Wizard and Reports tab are unrelated to UI component acquisition.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 55,
  "statement": "A team must import 20,000 records into a custom object while preventing duplicates during upload. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader"
   },
   {
    "key": "b",
    "text": "Data Import Wizard"
   },
   {
    "key": "c",
    "text": "Web-to-Lead"
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
  "explanation": "For imports up to 50,000 records, the Data Import Wizard is often the preferred choice due to its user-friendly interface and built-in features. It handles the volume easily (20,000 is well under the limit) and includes native duplicate prevention logic that can be configured during the import setup. While Data Loader (option 1) can also do this, it requires more technical setup with External IDs and upsert operations, making the Import Wizard the simpler and more appropriate recommendation.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 56,
  "statement": "A technology company introduced structured release cycles in its deployment model. Which release category is typically used to deliver small defect corrections and minor technical adjustments?",
  "options": [
   {
    "key": "a",
    "text": "Enhancement"
   },
   {
    "key": "b",
    "text": "Maintenance"
   },
   {
    "key": "c",
    "text": "Patch"
   },
   {
    "key": "d",
    "text": "Milestone"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "In structured release cycles, different categories of releases serve different purposes. 'Patch' releases are the standard category for delivering small, targeted fixes and minor technical adjustments with minimal impact and risk. They are distinct from 'Enhancement' releases, which introduce new features, and 'Maintenance' releases, which might be broader. 'Milestone' is a project management term, not a release type.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 57,
  "statement": "A user's Chatter feed is too noisy. They want to filter to posts only from a set of important Account and Opportunity records. What should they use?",
  "options": [
   {
    "key": "a",
    "text": "Chatter group"
   },
   {
    "key": "b",
    "text": "Chatter stream"
   },
   {
    "key": "c",
    "text": "Chatter notifications"
   },
   {
    "key": "d",
    "text": "Chatter bookmarks"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Chatter streams are the feature designed for feed customization. A user can create a stream, add specific records (or people, or groups) to it, and then view only the posts from those sources. This provides a focused, filtered view of Chatter activity, perfect for a user who wants to monitor only a set of important records without the noise of the main feed.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 58,
  "statement": "A warehouse system sends Delivery records into Salesforce daily. The company must prevent duplicates and update existing records when matches are found. What should the app builder configure?",
  "options": [
   {
    "key": "a",
    "text": "Matching rule only"
   },
   {
    "key": "b",
    "text": "Upsert using an External ID via Data Loader"
   },
   {
    "key": "c",
    "text": "Manual review process"
   },
   {
    "key": "d",
    "text": "Validation rule on Delivery object"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement describes a classic 'upsert' scenario: insert new records, update existing ones. This is exactly what the upsert operation does. By marking a unique identifier field as an External ID, Data Loader (or any API-based tool) can use that field to determine whether a record already exists in Salesforce. This provides an automated, scalable solution that handles both duplicate prevention (by not creating duplicates) and data freshness (by updating matching records).",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 59,
  "statement": "A Weather Map component should display only when a Property is marked \"Open House Scheduled.\" What feature should be used?",
  "options": [
   {
    "key": "a",
    "text": "Sharing rule"
   },
   {
    "key": "b",
    "text": "Formula field"
   },
   {
    "key": "c",
    "text": "Component visibility"
   },
   {
    "key": "d",
    "text": "Record type"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional display of page components is handled by the 'Component Visibility' feature in Lightning App Builder. This feature allows you to write a formula that references fields on the record or related records. When the formula evaluates to true, the component is shown; when false, it is hidden. For this requirement, a visibility formula checking the Property's 'Open House Scheduled' field is the perfect declarative solution, requiring no code and keeping the page management simple and centralized.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 60,
  "statement": "After a Candidate accepts a job offer, the Hire Date must not be changed. Which validation formula is correct?",
  "options": [
   {
    "key": "a",
    "text": "ISCHANGED(Hire_Date__c)"
   },
   {
    "key": "b",
    "text": "NOT(ISBLANK(Job_Accepted__c)) && ISCHANGED(Hire_Date__c)"
   },
   {
    "key": "c",
    "text": "ISBLANK(Job_Accepted__c)"
   },
   {
    "key": "d",
    "text": "PRIORVALUE(Hire_Date__c)"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This validation rule requires checking two conditions simultaneously: that the offer has been accepted (Job_Accepted__c is not blank) and that the Hire Date is being changed. The `&&` (AND) operator ensures both must be true for the rule to fire. `ISBLANK()` checks for emptiness, so `NOT(ISBLANK())` checks that it is filled. `ISCHANGED()` detects if the field is being modified in the current update. Option 2 correctly combines these elements to create the precise restriction: only block Hire Date changes when the job has already been accepted.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 61,
  "statement": "After deploying a change set to a QA sandbox, additional updates are required. The original change set was already deployed. What should the admin do?",
  "options": [
   {
    "key": "a",
    "text": "Modify the deployed change set"
   },
   {
    "key": "b",
    "text": "Refresh the QA sandbox"
   },
   {
    "key": "c",
    "text": "Clone the change set and redeploy"
   },
   {
    "key": "d",
    "text": "Rename the original change set"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Change sets are immutable once deployed. To add more updates, you must create a new change set in the source org (or clone the original, which copies its components) containing the additional components or modifications. This new change set can then be uploaded and deployed to the target QA sandbox. This is the standard, supported workflow for iterative change set deployments.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 62,
  "statement": "After installing a Lightning component from AppExchange, where is it added to record pages?",
  "options": [
   {
    "key": "a",
    "text": "Page Layout Editor"
   },
   {
    "key": "b",
    "text": "Lightning App Builder"
   },
   {
    "key": "c",
    "text": "App Manager"
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
  "explanation": "Lightning App Builder is the central tool for all Lightning page customization. When you install a new Lightning component from AppExchange, it gets added to the pool of available components. To place it on a record page, you must open the relevant page in Lightning App Builder, find the component in the palette, and drag it to the desired location on the page.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 63,
  "statement": "After onboarding a new customer, the company wants to assign a Customer Advocate (a Salesforce User) to the Account and report on it. What field type should be used?",
  "options": [
   {
    "key": "a",
    "text": "Picklist"
   },
   {
    "key": "b",
    "text": "Lookup (User)"
   },
   {
    "key": "c",
    "text": "Text"
   },
   {
    "key": "d",
    "text": "Multi-select picklist"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When you need to associate a record with a specific User, a lookup field to the User object is the standard and correct approach. It creates a true relationship, ensuring data integrity and enabling all the benefits of a related record, such as reporting, cross-object formulas, and dynamic updates. Picklists and text fields are static and require manual upkeep, making them unsuitable for this purpose.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 64,
  "statement": "After Opportunity closes, most fields become read-only except two for Sales Ops. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Record types with different page layouts"
   },
   {
    "key": "b",
    "text": "Sharing rule"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Compact layout"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is to change field editability based on record stage. This is achieved by using different record types and page layouts. The 'Open' layout has fields editable. The 'Closed' layout has most fields set to read-only, with the two Sales Ops fields left editable. A record-triggered flow updates the record type when the stage changes to 'Closed'. This is the standard design pattern for this scenario.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 1,
  "number": 65,
  "statement": "An admin deploys updates to a permission set from sandbox to production using a change set. What should they expect?",
  "options": [
   {
    "key": "a",
    "text": "The permission set in production will be fully overwritten"
   },
   {
    "key": "b",
    "text": "Only the changes included in the change set are deployed"
   },
   {
    "key": "c",
    "text": "Field-level security changes won't deploy"
   },
   {
    "key": "d",
    "text": "The permission set will merge and re-apply all sandbox settings automatically"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Change sets operate on a delta principle. You select the permission set component to deploy, and the change set captures the current state of that permission set in the sandbox. When deployed, it updates the production permission set to match that state, but it does so by applying the changes. It will not, for example, remove permissions from the production set that were not in the sandbox set unless that removal was part of the change. The expectation is that the production set will be updated to reflect the specific modifications you made in the sandbox.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 1,
  "statement": "An admin is trying to convert a master-detail relationship from Client__c (parent) to Visit__c (child) into a lookup relationship, but Salesforce prevents it. What is the most likely reason?",
  "options": [
   {
    "key": "a",
    "text": "Visit__c is referenced by an approval process"
   },
   {
    "key": "b",
    "text": "Visit__c has a formula referencing Client__c"
   },
   {
    "key": "c",
    "text": "Client__c has roll-up summary fields from Visit__c"
   },
   {
    "key": "d",
    "text": "Visit__c has validation rules"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Roll-up summary fields are a key feature that depends on the existence of a master-detail relationship. They cannot function with a lookup. Therefore, if the parent object has any roll-up summary fields that summarize data from the child, you must delete those roll-up fields before you can convert the master-detail relationship to a lookup. This is a common and expected limitation.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 2,
  "statement": "An admin needs to add a Chatter feed to a custom object record page in Lightning. What should they add?",
  "options": [
   {
    "key": "a",
    "text": "A custom-built chatter component"
   },
   {
    "key": "b",
    "text": "Standard Chatter Feed component"
   },
   {
    "key": "c",
    "text": "Related Lists component"
   },
   {
    "key": "d",
    "text": "A Chatter component from AppExchange"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce provides standard components for common platform features. The Chatter Feed is one such feature, and the corresponding standard component is available in the Lightning App Builder component palette. The admin simply needs to edit the record page, find the Chatter Feed component (often under the 'Custom' or 'Platform Services' section), and add it to the desired location on the page. No custom development or AppExchange installation is required.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 3,
  "statement": "An admin wants to aggregate numeric child fields on a parent object using roll-up summary fields. Which three field types can be summarized? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Currency"
   },
   {
    "key": "b",
    "text": "Percent"
   },
   {
    "key": "c",
    "text": "Number"
   },
   {
    "key": "d",
    "text": "Encrypted Text"
   },
   {
    "key": "e",
    "text": "Long Text"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Roll-up summary fields perform calculations like SUM, AVG, MIN, and MAX. To perform these operations, the field on the child record must be numeric. Currency, Percent, and Number are all numeric field types and are supported for roll-up summaries. Encrypted Text and Long Text are text-based and not numeric, so they cannot be used in roll-up calculations.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 4,
  "statement": "An admin wants to create a new object with multiple fields and relationships quickly in one interface. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Object Manager"
   },
   {
    "key": "b",
    "text": "Developer Console"
   },
   {
    "key": "c",
    "text": "Schema Builder"
   },
   {
    "key": "d",
    "text": "Setup Wizard"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For rapid, visual creation of objects, fields, and relationships, Schema Builder is the best tool. It allows an admin to see the entire data model as it's being built, add fields by clicking on the object, and create relationships by drawing lines between objects. This visual, drag-and-drop approach is much faster and more intuitive for designing a new object structure than the sequential, form-based process in Object Manager.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 5,
  "statement": "An app builder must deploy a modified Opportunity page layout from sandbox to production. The layout contains new custom fields and custom actions. Which components must be included in the change set? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Page layout"
   },
   {
    "key": "b",
    "text": "Custom fields"
   },
   {
    "key": "c",
    "text": "Custom actions"
   },
   {
    "key": "d",
    "text": "Login IP ranges"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "When deploying a modified page layout, you must include all dependent metadata components for the deployment to succeed. The page layout (option 1) is the main component. Any custom fields (option 2) placed on that layout must be deployed first or simultaneously. Any custom actions (option 3) referenced by the layout must also be deployed. Login IP ranges (option 4) are unrelated and not part of this metadata dependency chain. Including all three required components ensures a successful deployment.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 6,
  "statement": "An Opportunity must be approved by the Manager. The Manager will be on leave next week. What ensures approvals continue uninterrupted?",
  "options": [
   {
    "key": "a",
    "text": "Reassign ownership"
   },
   {
    "key": "b",
    "text": "Delegated approver"
   },
   {
    "key": "c",
    "text": "Sharing rule"
   },
   {
    "key": "d",
    "text": "Territory assignment"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce approval processes include a feature specifically for this scenario: delegated approvers. It allows a user to designate another user to approve on their behalf for a specified period. This ensures that when the primary approver (the Manager) is unavailable, pending approvals can still be processed by the delegated approver, preventing workflow bottlenecks. This is the standard, supported way to handle approver absence.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 7,
  "statement": "Apex Biologics has several custom objects that store regulated lab data. The company needs a sandbox that: • Includes selected production records • Excludes regulated objects • Can be refreshed weekly Which option meets these requirements?",
  "options": [
   {
    "key": "a",
    "text": "Full Copy sandbox"
   },
   {
    "key": "b",
    "text": "Developer sandbox with weekly export/import"
   },
   {
    "key": "c",
    "text": "Partial Copy sandbox configured with a sandbox template"
   },
   {
    "key": "d",
    "text": "Scratch org created from Dev Hub"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirements point specifically to a Partial Copy sandbox with a sandbox template. Full Copy sandboxes (option 1) include everything, including regulated data. Developer sandboxes (option 2) lack data entirely and require manual effort. Scratch orgs (option 4) are for development, not data-inclusive testing environments. Only Partial Copy sandboxes offer the combination of selective data inclusion, object exclusion capabilities through templates, and regular refresh options needed for this regulated data scenario.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 8,
  "statement": "At Horizon Motors, if an Opportunity's Close Date is pushed out more than 45 days, both the Regional Director and VP of Sales must review the change. Which two solutions meet this requirement? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Approval process requiring both approvers"
   },
   {
    "key": "b",
    "text": "Validation rule blocking save"
   },
   {
    "key": "c",
    "text": "Record-triggered flow that submits for approval"
   },
   {
    "key": "d",
    "text": "Auto-response rule"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "This requirement combines automation (detecting the change) and workflow (requiring approval). An approval process (option 1) is the standard way to require review by multiple approvers. A record-triggered flow (option 3) is the modern way to automatically submit the record to that approval process when the condition is met. Together, they form a complete solution. A validation rule (option 2) would block the change, not allow it after review. An auto-response rule (option 4) is unrelated.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 9,
  "statement": "Before an Opportunity can be marked Closed Won, a vendor must formally accept contract terms. Which feature enforces this?",
  "options": [
   {
    "key": "a",
    "text": "Dynamic action"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Report subscription"
   },
   {
    "key": "d",
    "text": "Dashboard filter"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is to prevent a stage change until an external acceptance occurs. This is a classic approval process scenario. Approval processes are designed to lock records, route them to designated approvers (which could be a vendor user), and only allow the record to proceed (e.g., to Closed Won) after all approvals are obtained. This provides a formal, auditable trail of the acceptance and enforces the business rule declaratively.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 10,
  "statement": "Before closing an Opportunity as Closed Won, users must indicate whether the Contract was Sent. Which field type is most appropriate?",
  "options": [
   {
    "key": "a",
    "text": "Text"
   },
   {
    "key": "b",
    "text": "Picklist"
   },
   {
    "key": "c",
    "text": "Checkbox"
   },
   {
    "key": "d",
    "text": "Long text"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When the requirement is to capture a simple yes/no, true/false piece of information, the Checkbox field type is the most appropriate choice. It provides a clear, intuitive, and space-efficient user interface element. It also makes reporting straightforward, as you can easily filter and report on checked vs. unchecked records. For a binary indicator like 'Contract Sent,' a checkbox is the standard and best practice.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 11,
  "statement": "BrightWave Consulting is designing a new Lightning record page. What should the app builder consider when choosing a template?",
  "options": [
   {
    "key": "a",
    "text": "Separate templates are required for mobile"
   },
   {
    "key": "b",
    "text": "Templates determine field-level security"
   },
   {
    "key": "c",
    "text": "Templates automatically adapt to screen size"
   },
   {
    "key": "d",
    "text": "Templates cannot be modified later"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When choosing a Lightning page template, the key consideration is how the layout will present information. The most important built-in feature is responsiveness—templates automatically adapt to different screen sizes, eliminating the need for separate desktop and mobile designs. Templates do not affect security (option 2), are not device-specific (option 1), and can be changed later (option 4). Understanding this responsiveness helps app builders create efficient, device-agnostic pages.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 12,
  "statement": "Canyon Retail wants to display the total number of Open Deals and Closed Deals on each Client record. Deals are related to Client. Where should the roll-up fields be created?",
  "options": [
   {
    "key": "a",
    "text": "Deal object"
   },
   {
    "key": "b",
    "text": "Client object"
   },
   {
    "key": "c",
    "text": "Lightning App Builder"
   },
   {
    "key": "d",
    "text": "Custom report type"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Roll-up summary fields are always created on the *parent* object in a relationship. They are designed to show aggregated data from child records directly on the parent. Here, Client is the parent, Deal is the child. Therefore, the roll-up fields to count Open and Closed Deals must be created on the Client object. Once created, these fields can be added to the Client page layout to display the counts. Options 1, 3, and 4 are incorrect locations for creating such fields.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 13,
  "statement": "CloudFit tracks Memberships under Gym Location using master-detail. They want to count memberships per location. What field type should be created?",
  "options": [
   {
    "key": "a",
    "text": "Lookup field"
   },
   {
    "key": "b",
    "text": "Roll-up summary"
   },
   {
    "key": "c",
    "text": "Cross-object formula"
   },
   {
    "key": "d",
    "text": "Number field"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Counting related child records on a parent is the textbook use case for a roll-up summary field, especially when a master-detail relationship exists. The roll-up summary on Gym Location, configured to COUNT the related Membership records, will provide an accurate, real-time membership count for each location automatically, with no code or manual effort required. This is the most efficient and reliable solution.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 14,
  "statement": "Converting Long Text to Text (255 chars) will:",
  "options": [
   {
    "key": "a",
    "text": "Block conversion"
   },
   {
    "key": "b",
    "text": "Delete all data"
   },
   {
    "key": "c",
    "text": "Truncate beyond 255"
   },
   {
    "key": "d",
    "text": "Preserve all content"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Field type conversions have data implications. Reducing the storage capacity of a field from Long Text (large) to Text (255 chars) means data that exceeds the new limit cannot be kept. Salesforce handles this by truncating the data to fit the new field's maximum length. This is a critical consideration before performing such a conversion; data backup is highly recommended.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 15,
  "statement": "Create a checkbox formula true when Stage = \"Negotiation\" and Close Date is within 7 days. Which formula is correct?",
  "options": [
   {
    "key": "a",
    "text": "AND(ISPICKVAL(StageName,\"Negotiation\"), CloseDate-TODAY()<=7)"
   },
   {
    "key": "b",
    "text": "CloseDate < 7"
   },
   {
    "key": "c",
    "text": "TODAY()-CloseDate"
   },
   {
    "key": "d",
    "text": "TEXT(StageName)=\"Negotiation\""
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This formula requires combining two conditions: a picklist value check and a date calculation. `ISPICKVAL()` is the standard function for comparing picklist values. `CloseDate - TODAY()` correctly calculates the days until the Close Date (with future dates yielding positive numbers). The `<=7` condition checks if it's within the next week. Wrapping both in `AND()` ensures both conditions must be true. This is the precise and correct syntax for this requirement.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 16,
  "statement": "Creating a master-detail between Parent__c and Child__c automatically creates:",
  "options": [
   {
    "key": "a",
    "text": "Parent with Child report type"
   },
   {
    "key": "b",
    "text": "Child standalone report"
   },
   {
    "key": "c",
    "text": "Custom report type only"
   },
   {
    "key": "d",
    "text": "Matrix report"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A useful feature of master-detail relationships is the automatic creation of a corresponding custom report type. This report type is set up with the parent as the primary object and the child as a related object, making it immediately available for reporting. This saves time and provides a solid foundation for creating reports that need to show parent and child data together.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 17,
  "statement": "Display number of open cases on Account:",
  "options": [
   {
    "key": "a",
    "text": "Flow"
   },
   {
    "key": "b",
    "text": "Roll-up summary"
   },
   {
    "key": "c",
    "text": "Approval"
   },
   {
    "key": "d",
    "text": "Report"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For displaying an aggregate of child records directly on a parent record, a roll-up summary field is the ideal declarative solution. It requires a master-detail relationship, but if that exists (or can be created), a roll-up summary with a filter for 'Open' cases provides an automatic, real-time count directly on the Account record. This is far simpler and more efficient than a flow or a separate report.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 18,
  "statement": "Field reps using mobile need a fast way to create Contacts from anywhere in the app. What should be implemented?",
  "options": [
   {
    "key": "a",
    "text": "Global action"
   },
   {
    "key": "b",
    "text": "Compact layout"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Related list"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Global actions are specifically built for omnipresent access. When you create a global action for Contact creation and add it to the mobile navigation bar, it becomes a single tap available from any screen in the mobile app. This provides the fastest possible way for field reps to capture a new Contact without interrupting their workflow to navigate to a specific tab or record. This is the exact solution for the stated requirement.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 19,
  "statement": "For small individual development projects before shared testing:",
  "options": [
   {
    "key": "a",
    "text": "Developer sandbox"
   },
   {
    "key": "b",
    "text": "Full sandbox"
   },
   {
    "key": "c",
    "text": "Partial copy"
   },
   {
    "key": "d",
    "text": "Production clone"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Developer sandboxes are the right tool for individual development. They are lightweight, quick to create, and designed for a single developer to work on metadata changes. Once the development is complete and unit-tested, the changes can be deployed to a shared sandbox (like Partial Copy) for integration testing with other developers' work and with data.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 20,
  "statement": "Grant one user read-only access to restricted field:",
  "options": [
   {
    "key": "a",
    "text": "Modify profile"
   },
   {
    "key": "b",
    "text": "Create new profile"
   },
   {
    "key": "c",
    "text": "Permission set"
   },
   {
    "key": "d",
    "text": "Sharing rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Permission sets are the ideal tool for granting additional permissions, including field-level access, to individual users or groups of users without altering their profile's baseline permissions. By creating a permission set with read-only FLS on the restricted field and assigning it to the single user, you meet the requirement precisely without impacting other users. This is the standard and recommended approach.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 21,
  "statement": "GreenPeak Advisors requires the following Account visibility: • Consultants should only see Accounts they own • Territory marketing teams should see Accounts in their region • Executives must see all Accounts How should access be configured?",
  "options": [
   {
    "key": "a",
    "text": "Set OWD to Private and create criteria-based sharing rules"
   },
   {
    "key": "b",
    "text": "Set OWD to Public Read Only"
   },
   {
    "key": "c",
    "text": "Use manual sharing for each Account"
   },
   {
    "key": "d",
    "text": "Enable field history tracking"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirements demand a classic data access hierarchy. Private OWD establishes the baseline where users see only their own records. Criteria-based sharing rules provide automated, scalable access to marketing teams based on region. Executive access can be granted via 'View All' permissions on their profiles. This combination uses Salesforce's native sharing capabilities effectively, meeting all three access needs without over-provisioning or requiring manual effort.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 22,
  "statement": "HelioTech has three custom objects related to Account. Only one uses a master-detail relationship. The business wants to summarize multiple fields from all three objects onto Account. Which two limitations must be considered? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Roll-up summaries require master-detail"
   },
   {
    "key": "b",
    "text": "A maximum of 25 roll-up summaries per object"
   },
   {
    "key": "c",
    "text": "Lookup fields cannot be reported"
   },
   {
    "key": "d",
    "text": "Formula fields cannot reference parent fields"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "When planning to summarize data on a parent object, two key technical limitations must be considered. First, roll-up summaries only work with master-detail relationships (option 1), so objects with lookup relationships cannot be summarized this way. Second, even for master-detail objects, there is a hard limit of 25 roll-up summary fields per object (option 2). Options 3 and 4 are factually incorrect statements about Salesforce capabilities and are not valid limitations.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 23,
  "statement": "Hide a Lightning component from one profile:",
  "options": [
   {
    "key": "a",
    "text": "Page layout"
   },
   {
    "key": "b",
    "text": "FLS"
   },
   {
    "key": "c",
    "text": "Component visibility filter"
   },
   {
    "key": "d",
    "text": "Sharing rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Lightning App Builder provides powerful component-level visibility controls. Using the 'Advanced' visibility filter, you can write formulas that reference user attributes like profile, role, or permissions. To hide a component from a specific profile, you would add a visibility filter with a condition such as `$Profile.Name != \"Profile Name\"`. This ensures the component is rendered for all users except those with that specific profile.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 24,
  "statement": "HR at NovaCorp wants a Salary Notes field on Employee Review records visible only to HR users. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Record-level sharing rule"
   },
   {
    "key": "b",
    "text": "Field-level security"
   },
   {
    "key": "c",
    "text": "Profile login hours"
   },
   {
    "key": "d",
    "text": "Page layout assignment only"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Controlling visibility of a specific field to specific users is the exact purpose of Field-Level Security (FLS). FLS is configured per profile or permission set and determines read and edit access to individual fields. This provides data security at the field level, ensuring sensitive information like Salary Notes is only exposed to authorized HR users. Page layouts alone (option 4) are insufficient for security, and sharing rules (option 1) work at the record level, not field level.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 25,
  "statement": "In a master-detail relationship, what determines access and ownership of the detail record?",
  "options": [
   {
    "key": "a",
    "text": "Detail object profile"
   },
   {
    "key": "b",
    "text": "Parent record owner"
   },
   {
    "key": "c",
    "text": "Sharing rule"
   },
   {
    "key": "d",
    "text": "Field-level security"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Master-detail relationships create a tight parent-child bond. A key characteristic of this bond is that the child record's ownership and access are controlled by the parent. The detail record does not have an independent Owner field; its owner is effectively the parent record's owner. The parent's sharing settings propagate to the child. This is fundamental to understanding master-detail relationships and distinguishes them from lookups.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 26,
  "statement": "Inline editing is unavailable in a list view. What should be checked?",
  "options": [
   {
    "key": "a",
    "text": "Record locking"
   },
   {
    "key": "b",
    "text": "Multiple record types in view"
   },
   {
    "key": "c",
    "text": "Sharing rules"
   },
   {
    "key": "d",
    "text": "List view ownership"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Inline editing in list views is a convenient feature, but it has limitations. One key limitation is that it is not supported when the list view contains records of multiple record types. This is a platform restriction to prevent confusion, as different record types may have different editable fields. Therefore, if inline editing is unexpectedly unavailable, checking for multiple record types in the view is a primary troubleshooting step.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 27,
  "statement": "Internal users have Public Read/Write for Account OWD. Community users report they can see all accounts. The company wants community users to see only their own account. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Create a new record type for community accounts"
   },
   {
    "key": "b",
    "text": "Set External OWD for Account to Private"
   },
   {
    "key": "c",
    "text": "Create an owner-based sharing rule granting access to all community users"
   },
   {
    "key": "d",
    "text": "Use a permission set to restrict account visibility"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce distinguishes between internal and external sharing models. The internal OWD for Account might be Public Read/Write, but that does not have to apply to external users. To restrict community users, you must configure the External OWD for Account to Private. This ensures that external users only see records they own or have been explicitly granted access to, while internal users can retain their broader Public Read/Write access. This is the standard and correct solution.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 28,
  "statement": "Invited customers in Chatter groups can:",
  "options": [
   {
    "key": "a",
    "text": "Invite others"
   },
   {
    "key": "b",
    "text": "Interact within the group"
   },
   {
    "key": "c",
    "text": "Edit records"
   },
   {
    "key": "d",
    "text": "Access public groups"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Chatter groups can be used to collaborate with external users like customers. When invited, these external users (often with 'Customer Community' or similar licenses) can interact within the group by posting and commenting, but their permissions are restricted. They cannot invite others, edit records, or access other groups. Their primary capability is to participate in the group's conversations.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 29,
  "statement": "Leads are placed in a queue. However, Campaign Members must always have a User owner, not a queue. Which validation rule approach meets this requirement?",
  "options": [
   {
    "key": "a",
    "text": "AND(ISNEW(), ISBLANK(Owner:User.Id))"
   },
   {
    "key": "b",
    "text": "ISCHANGED(OwnerId)"
   },
   {
    "key": "c",
    "text": "Owner:Queue.Id <> NULL"
   },
   {
    "key": "d",
    "text": "PRIORVALUE(OwnerId)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This validation rule needs to prevent new Campaign Member records from being owned by a queue. `ISNEW()` ensures the rule applies only at creation. Checking `ISBLANK(Owner:User.Id)` is the key technique: Salesforce uses a polymorphic Owner field. `Owner:User.Id` is only populated if the owner is a User. If it's blank, the owner is not a User (it's a queue). Therefore, `AND(ISNEW(), ISBLANK(Owner:User.Id))` correctly identifies and blocks the creation of a Campaign Member with a queue owner.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 30,
  "statement": "Leads are still duplicating in a private sharing model. Which two actions prevent duplicate Leads? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Enable duplicate rule with Block action"
   },
   {
    "key": "b",
    "text": "Bypass sharing rules in duplicate rule"
   },
   {
    "key": "c",
    "text": "Create assignment rule"
   },
   {
    "key": "d",
    "text": "Change OWD to Public"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Preventing duplicates in a private sharing model requires a two-pronged approach using duplicate rules. First, you need an active duplicate rule with the 'Block' action (option 1) to stop duplicates from being saved. Second, because of the private model, you must configure that duplicate rule to 'Bypass sharing rules' (option 2) so it can scan all Lead records, not just the ones the current user can see. Together, these settings provide comprehensive duplicate prevention while maintaining the private sharing model.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 31,
  "statement": "Managers must approve high-value Opportunities via the mobile app. Which two methods allow approval responses? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "In-app notification"
   },
   {
    "key": "b",
    "text": "Record detail page"
   },
   {
    "key": "c",
    "text": "Dashboard"
   },
   {
    "key": "d",
    "text": "App Launcher"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The Salesforce mobile app provides multiple ways for users to handle approvals. They can respond directly from in-app notifications (option 1), which provide a quick entry point. They can also navigate to the record itself and use the approval actions on the record detail page (option 2). These are the two primary methods for interacting with approvals in the mobile app. Dashboards and the App Launcher do not support approval actions.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 32,
  "statement": "Managers want to create child Accounts with five prefilled fields from the parent. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Global quick action"
   },
   {
    "key": "b",
    "text": "Custom link"
   },
   {
    "key": "c",
    "text": "Related list button"
   },
   {
    "key": "d",
    "text": "Path"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Quick actions, especially global quick actions placed on the parent record's page, are the ideal tool for creating related records with prefilled data. They provide a simple button, launch a clean modal for data entry, and allow for extensive predefined field values using merge fields from the source record. This meets the requirement exactly: managers can create a child Account with five fields already populated from the parent.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 33,
  "statement": "Marketing uploads 500 Leads and wants to prevent duplicates during import. Which two steps are required? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Configure matching rule"
   },
   {
    "key": "b",
    "text": "Activate duplicate rule with Block action"
   },
   {
    "key": "c",
    "text": "Create validation rule"
   },
   {
    "key": "d",
    "text": "Change Lead OWD"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To prevent duplicates during import, you need the full duplicate rule infrastructure in place. First, you need a matching rule (option 1) that defines what constitutes a duplicate. Second, you need an active duplicate rule (option 2) that uses that matching rule and specifies the 'Block' action to prevent duplicates from being saved. With these two configured, the Data Import Wizard will automatically check for and block duplicates during the 500-record upload.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 34,
  "statement": "Marketing uploads 700 Leads daily and wants to prevent duplicates. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader"
   },
   {
    "key": "b",
    "text": "Data Import Wizard"
   },
   {
    "key": "c",
    "text": "Manual entry"
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
  "explanation": "For a marketing team performing regular, sizable imports, the Data Import Wizard is the ideal tool. It balances capacity (handling 700 records easily) with usability (wizard-based interface) and, crucially, integrates with Salesforce's native duplicate management. By leveraging configured duplicate rules, the Import Wizard can automatically prevent duplicate Leads during the upload process, providing the required duplicate prevention in a user-friendly, declarative manner.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 35,
  "statement": "Marketing wants a chart of related Opportunities grouped by Stage on the Account page. What report type is required?",
  "options": [
   {
    "key": "a",
    "text": "Tabular on Account"
   },
   {
    "key": "b",
    "text": "Summary on Opportunity"
   },
   {
    "key": "c",
    "text": "Matrix on Account"
   },
   {
    "key": "d",
    "text": "Joined report"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Creating a chart of child data on a parent page is a common requirement. The best practice is to create a summary report on the child object (Opportunity) that groups by the desired field (Stage). Then, on the Account page layout in Lightning App Builder, add a Report Chart component and configure it to use that summary report, filtering it to show only Opportunities related to the current Account. This approach leverages standard reporting and UI components cleanly and effectively.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 36,
  "statement": "MetroBuild uses a custom object called Work Orders. Supervisors enter Estimated Cost. Once saved, users may reduce the amount but must never increase it. What should the app builder implement?",
  "options": [
   {
    "key": "a",
    "text": "Before-save flow"
   },
   {
    "key": "b",
    "text": "Validation rule using PRIORVALUE()"
   },
   {
    "key": "c",
    "text": "Field-level security restriction"
   },
   {
    "key": "d",
    "text": "Roll-up summary field"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is a classic validation scenario: prevent a field from being changed in a specific way. Validation rules are the simplest, most efficient declarative tool for this. The PRIORVALUE() function is specifically designed to compare a field's new value against its old value during an update. This provides a lightweight, server-side enforcement that requires no code and minimal configuration, making it the ideal solution.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 37,
  "statement": "Mobile users need access to a Contact's Twitter feed on the Lightning record page. What should be added?",
  "options": [
   {
    "key": "a",
    "text": "URL formula field"
   },
   {
    "key": "b",
    "text": "Twitter component on Lightning page"
   },
   {
    "key": "c",
    "text": "Quick action"
   },
   {
    "key": "d",
    "text": "Related list"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Embedding external web content, like a Twitter feed, on a Salesforce record page typically requires a custom component or an AppExchange solution. While a URL formula (option 1) provides a link, it doesn't give users an 'access' experience within the app. A dedicated Lightning component (option 2) can be designed to securely embed the feed, providing a seamless user experience on mobile. The other options are not capable of displaying external content.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 38,
  "statement": "Mobile users need to see key Contact fields at the very top without scrolling. What should the admin configure?",
  "options": [
   {
    "key": "a",
    "text": "Mobile navigation menu"
   },
   {
    "key": "b",
    "text": "Compact layout"
   },
   {
    "key": "c",
    "text": "Record Detail component"
   },
   {
    "key": "d",
    "text": "Object-specific actions"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The 'top of the record' area, often called the highlights panel, is governed by the compact layout. This is a separate layout from the main page layout. By configuring the compact layout for the Contact object, an admin can select the most important fields (e.g., Name, Phone, Email, Title) to appear in this prominent, fixed position. This ensures mobile users see these key fields immediately without any scrolling, greatly improving usability.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 39,
  "statement": "Multiple picklists on Account share similar values and have many inactive entries. What improves management and performance?",
  "options": [
   {
    "key": "a",
    "text": "Global value set"
   },
   {
    "key": "b",
    "text": "Validation rule"
   },
   {
    "key": "c",
    "text": "Remove picklist"
   },
   {
    "key": "d",
    "text": "Workflow rule"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The problem described—multiple picklists with overlapping values and many inactive entries—is a classic case for global value sets. By creating a global value set for, say, 'Account Status' containing all possible values (active and inactive), and then having all Account picklist fields reference that global value set, you achieve several benefits: 1) Centralized value management (update once, update all). 2) Consistent values across fields. 3) Potentially reduced metadata and improved performance. This is the intended solution for picklist value reuse.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 40,
  "statement": "New sales reps need stage guidance inside Opportunity records. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Flow"
   },
   {
    "key": "b",
    "text": "Path"
   },
   {
    "key": "c",
    "text": "Email alert"
   },
   {
    "key": "d",
    "text": "Dynamic forms"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For guiding users through a standard sales process on a record page, the Path component is the ideal, out-of-the-box solution. It can be configured for the Opportunity object, linked to the Stage field, and displays a visual path with key fields and recommendations for each stage. This provides the exact stage guidance new sales reps need, without any custom development.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 41,
  "statement": "NovaSpace needs a field where users can enter formatted text, include images, and add hyperlinks. Which field type should be created?",
  "options": [
   {
    "key": "a",
    "text": "Long Text Area"
   },
   {
    "key": "b",
    "text": "Rich Text Area"
   },
   {
    "key": "c",
    "text": "URL"
   },
   {
    "key": "d",
    "text": "Text"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When users need to create rich, formatted content that includes images and links, the Rich Text Area field is the native Salesforce solution. It provides a familiar word-processor-like interface for data entry and stores the content with HTML formatting. This makes it ideal for fields like 'Notes,' 'Descriptions,' or any scenario where plain text is insufficient. The other field types lack one or more of the required features.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 42,
  "statement": "On a custom Line Item object, which capability can be achieved using a formula field?",
  "options": [
   {
    "key": "a",
    "text": "Display formatted text using HTML tags"
   },
   {
    "key": "b",
    "text": "Allow inline editing of calculated fields"
   },
   {
    "key": "c",
    "text": "Automatically update parent records"
   },
   {
    "key": "d",
    "text": "Create new related records"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Formula fields are powerful for displaying calculated data, and one of their key capabilities is the ability to output rich text. By setting the formula return type to 'Text' and enabling rich text, you can use HTML tags to format the output. This allows for visually enhanced field displays. The other options (inline editing, updating parents, creating records) are all actions that modify data, which formula fields cannot do—they are read-only by nature.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 43,
  "statement": "Only users with the \"Research Team\" profile should be able to see the Confidential Notes field on the Experiment__c object. What should the admin configure?",
  "options": [
   {
    "key": "a",
    "text": "Sharing rule"
   },
   {
    "key": "b",
    "text": "Permission set group"
   },
   {
    "key": "c",
    "text": "Field-level security"
   },
   {
    "key": "d",
    "text": "Role hierarchy"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Field visibility is controlled by Field-Level Security (FLS). This setting, managed via profiles or permission sets, determines which fields a user can see and edit. Sharing rules and role hierarchy manage record access, not field access. Therefore, to restrict the Confidential Notes field to the Research Team profile, the admin must configure FLS accordingly.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 44,
  "statement": "Opportunities must auto-submit for approval when Close Date moves out 30 days. What should be implemented?",
  "options": [
   {
    "key": "a",
    "text": "Validation rule"
   },
   {
    "key": "b",
    "text": "Automated submission via flow"
   },
   {
    "key": "c",
    "text": "Manual approval reminder"
   },
   {
    "key": "d",
    "text": "Assignment rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This requirement calls for an event-triggered action: when a specific field change occurs (Close Date moves out), automatically initiate an approval process. Record-triggered flows are designed for this. They can detect the field change, evaluate the new value against a condition, and then perform an action—in this case, submitting the record for approval using a core action. This provides the necessary automation without code.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 45,
  "statement": "Opportunities should automatically be submitted for approval when moved to a specific stage. Which automation should be used?",
  "options": [
   {
    "key": "a",
    "text": "Fast field update flow"
   },
   {
    "key": "b",
    "text": "Record-triggered flow (Actions & Related Records)"
   },
   {
    "key": "c",
    "text": "Screen flow"
   },
   {
    "key": "d",
    "text": "Scheduled flow"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For event-driven automation based on record changes, record-triggered flows are the ideal tool. They can detect the specific change (Stage update), evaluate conditions, and perform actions, including submitting records for approval via a core action. This provides immediate, automatic submission exactly when the stage change occurs.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 46,
  "statement": "Orion Logistics needs a custom \"Transmit\" button on the Shipment record page. The button should only be visible when the Status field equals \"Ready for Dispatch.\" The button must launch a Lightning Web Component. What should the app builder configure?",
  "options": [
   {
    "key": "a",
    "text": "Custom URL button"
   },
   {
    "key": "b",
    "text": "Lightning App Builder tab component"
   },
   {
    "key": "c",
    "text": "Dynamic action with visibility rule"
   },
   {
    "key": "d",
    "text": "Custom report chart"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Lightning Experience provides dynamic actions specifically for this use case. When editing a record page in Lightning App Builder, you can add actions to the page and configure them with visibility formulas that reference record fields. This ensures the \"Transmit\" button only appears when the Status is \"Ready for Dispatch.\" The action can then be configured to launch a Lightning Web Component, creating a seamless, conditional, and modern user interface element.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 47,
  "statement": "Peak Realty wants changes to Listing Price and Assigned Agent fields to automatically appear in Chatter. Which feature should be enabled?",
  "options": [
   {
    "key": "a",
    "text": "Topics"
   },
   {
    "key": "b",
    "text": "Feed tracking"
   },
   {
    "key": "c",
    "text": "Publisher actions"
   },
   {
    "key": "d",
    "text": "Report snapshot"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is to automatically broadcast field changes in Chatter. This is the exact purpose of Feed Tracking. In Setup, an administrator can enable feed tracking for an object and then select specific fields to track. Whenever one of those tracked fields is changed, a post is automatically created in the record's Chatter feed, detailing the old and new values. This provides automatic, built-in change communication without any custom code or manual effort.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 48,
  "statement": "Pioneer Events collects Leads from conferences, social media ads, and referrals. Each source requires unique fields, but all Leads should remain on the same object. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Separate custom objects for each source"
   },
   {
    "key": "b",
    "text": "Multiple record types with distinct page layouts"
   },
   {
    "key": "c",
    "text": "One page layout with collapsible sections"
   },
   {
    "key": "d",
    "text": "Separate Salesforce apps per source"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record types are the standard solution for this exact scenario: keeping data in one object while providing different user experiences based on a record's category. By assigning different record types to Leads from different sources, you can show each team only the fields they need, maintain different picklist values, and even have different sales processes, all while keeping all Lead data centralized and reportable together. This is the perfect balance of separation and unity.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 49,
  "statement": "PreferredName__c is an optional text field on Contact. If it's filled in, use it; otherwise use FirstName. Which formula works?",
  "options": [
   {
    "key": "a",
    "text": "IF(NOT(ISBLANK(PreferredName__c)), PreferredName__c, FirstName)"
   },
   {
    "key": "b",
    "text": "IF(ISNULL(PreferredName__c), PreferredName__c, FirstName)"
   },
   {
    "key": "c",
    "text": "IF(TEXT(PreferredName__c), PreferredName__c, FirstName)"
   },
   {
    "key": "d",
    "text": "BLANKVALUE(PreferredName__c, FirstName) = PreferredName__c"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The correct formula uses `ISBLANK()` to check for an empty text field. `NOT(ISBLANK(PreferredName__c))` creates a condition that is true when the field has a value. The `IF()` then returns the preferred name when true, and the fallback FirstName when false. This is the standard, reliable pattern for this scenario in Salesforce formulas.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 50,
  "statement": "Prevent non-Marketing users from changing a picklist to Yes:",
  "options": [
   {
    "key": "a",
    "text": "Validation using ISCHANGED and ISPICKVAL"
   },
   {
    "key": "b",
    "text": "Sharing rule"
   },
   {
    "key": "c",
    "text": "Approval process"
   },
   {
    "key": "d",
    "text": "Field-level security"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional field-level restrictions based on user and field value are implemented with validation rules. The rule can use global variables like `$Profile.Name` to identify the user's profile. `ISCHANGED(Picklist_Field__c)` detects if the field is being modified, and `ISPICKVAL(Picklist_Field__c, \"Yes\")` checks the new value. Combining these allows the rule to precisely block non-Marketing users from changing the picklist to 'Yes'.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 51,
  "statement": "Sales Managers must approve Opportunities discounted between 15% and 25% directly from the record page. Which two features should be used? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Dynamic actions"
   },
   {
    "key": "b",
    "text": "Workflow rule"
   },
   {
    "key": "c",
    "text": "Approval process"
   },
   {
    "key": "d",
    "text": "Duplicate rule"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "This requirement needs two features working together. An approval process (option 3) provides the backend workflow for routing the Opportunity to the Sales Manager and tracking the approval decision. Dynamic actions (option 1) enhance the user interface by conditionally showing the approval submission button on the record page only when the discount falls within the specified range. This combination creates a seamless and intuitive approval experience directly from the record page.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 52,
  "statement": "Sales reps create contacts on their phones but not in Salesforce. The company wants those contacts synced into Salesforce. What should be enabled?",
  "options": [
   {
    "key": "a",
    "text": "Mobile contact import sync"
   },
   {
    "key": "b",
    "text": "Duplicate rule"
   },
   {
    "key": "c",
    "text": "Compact layout"
   },
   {
    "key": "d",
    "text": "Assignment rule"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Salesforce mobile app includes a built-in feature specifically for this purpose: mobile contact sync. When enabled, it allows users to import contacts from their device's address book into Salesforce as Contact records, often with options for matching and preventing duplicates. This provides a seamless way for sales reps to capture contacts on their phones and have them automatically appear in Salesforce, exactly as the company wants.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 53,
  "statement": "Sales reps need to create Opportunities from the Account page with some fields auto-filled. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Custom URL button"
   },
   {
    "key": "b",
    "text": "Quick action"
   },
   {
    "key": "c",
    "text": "Global search layout"
   },
   {
    "key": "d",
    "text": "Record type"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Quick actions with predefined field values are the standard, declarative way to provide one-click creation of related records with auto-populated fields. They are available in Lightning and mobile, easy to configure, and provide an excellent user experience. The ability to use merge fields from the source record makes them perfect for this requirement.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 54,
  "statement": "Sales reps want to see who has access to their Account records and why. Which button should be added?",
  "options": [
   {
    "key": "a",
    "text": "Modify All"
   },
   {
    "key": "b",
    "text": "Sharing"
   },
   {
    "key": "c",
    "text": "Change Owner"
   },
   {
    "key": "d",
    "text": "Clone"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce provides a standard button specifically for viewing record access details: the Sharing button. When added to the page layout, it appears on the record detail page. Clicking it opens the record's sharing overview, showing all users and groups with access and the reason for that access (e.g., 'Owner,' 'Sharing Rule: Sales Team'). This gives sales reps complete transparency into record visibility, exactly as requested.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 55,
  "statement": "SalesRegion__c and DiscountBand__c are picklists. Require DiscountBand__c only when SalesRegion__c = \"EMEA\". Which validation rule is correct?",
  "options": [
   {
    "key": "a",
    "text": "AND(ISPICKVAL(SalesRegion__c,\"EMEA\"), ISBLANK(TEXT(DiscountBand__c)))"
   },
   {
    "key": "b",
    "text": "OR(ISPICKVAL(SalesRegion__c,\"EMEA\"), ISBLANK(TEXT(DiscountBand__c)))"
   },
   {
    "key": "c",
    "text": "ISPICKVAL(SalesRegion__c,\"EMEA\") & ISNULL(DiscountBand__c)"
   },
   {
    "key": "d",
    "text": "IF(ISPICKVAL(SalesRegion__c,\"EMEA\"), TRUE, ISBLANK(TEXT(DiscountBand__c)))"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional requirements with picklists require careful formula construction. The correct pattern uses `AND` to combine the condition that triggers the requirement (region is EMEA) with the condition that fails the requirement (discount band is blank). `ISPICKVAL` is used for picklist comparison, and `ISBLANK(TEXT())` is the reliable way to check if a picklist has no value selected. Option 1 correctly implements this pattern.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 56,
  "statement": "Send welcome email with survey quickly and declaratively:",
  "options": [
   {
    "key": "a",
    "text": "Flow"
   },
   {
    "key": "b",
    "text": "Apex"
   },
   {
    "key": "c",
    "text": "Managed package"
   },
   {
    "key": "d",
    "text": "Custom LWC"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For straightforward, event-triggered automations like sending a welcome email, record-triggered flows are the perfect declarative tool. They are easy to build, require no code, and can be configured to send emails with dynamic content using templates. This meets the 'quickly and declaratively' requirement perfectly.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 57,
  "statement": "Service agents must follow identity verification steps before assisting customers. What should be added?",
  "options": [
   {
    "key": "a",
    "text": "Approval process"
   },
   {
    "key": "b",
    "text": "Path"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Case assignment rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Path is a visual guidance tool that helps users complete a multi-step process. It can be configured to show the current step, display key fields for that step, and provide guidance text. For service agents needing to follow identity verification steps, adding a Path to the Case page layout would provide clear, step-by-step instructions, ensuring consistency and compliance.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 58,
  "statement": "Silverline Medical requires that when the \"Do Not Contact\" checkbox is selected on a Patient record, the Contact Number field must immediately be erased. This enforcement must occur automatically upon save without relying on user interaction. Which solution should the app builder implement?",
  "options": [
   {
    "key": "a",
    "text": "Create a workflow rule with an email alert"
   },
   {
    "key": "b",
    "text": "Configure a record-triggered flow that updates the Phone field"
   },
   {
    "key": "c",
    "text": "Enable field-level security on the Phone field"
   },
   {
    "key": "d",
    "text": "Create a duplicate rule for the Patient object"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement calls for automatic, condition-based field clearing upon record save. Record-triggered flows are the ideal declarative tool for this scenario because they can evaluate field values and perform updates without user intervention. Workflow rules (option 1) could theoretically update fields, but the specific option given is for email alerts. Field-level security (option 3) only controls access, not data changes. Duplicate rules (option 4) address entirely different concerns. Therefore, a record-triggered flow is the correct and most efficient solution.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 59,
  "statement": "Skyline Support wants to track the number of Active and Closed Tickets per Customer and categorize engagement levels. Custom number fields already exist. Which two solutions can implement this? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Scheduled Flow updating counts"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Apex trigger calculating totals"
   },
   {
    "key": "d",
    "text": "Einstein Activity Capture"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The requirement is to keep summary counts on a parent record updated. This can be achieved in two ways: real-time updates via Apex triggers (option 3) or near-real-time updates via scheduled flows (option 1). Both are valid approaches, with the choice depending on whether real-time accuracy is required or if periodic updates are acceptable. Approval processes and Einstein Activity Capture are unrelated to this task.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 60,
  "statement": "Support agents want a compact Case page and the ability to edit related Account fields directly from the Case page. Which two components should be used? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Tabs"
   },
   {
    "key": "b",
    "text": "Related Record"
   },
   {
    "key": "c",
    "text": "Rich Text"
   },
   {
    "key": "d",
    "text": "Dashboard"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To meet both requirements, two different components are needed. Tabs (option 1) help achieve a compact layout by allowing information to be organized into separate, selectable views. The Related Record component (option 2) is the key to displaying and, crucially, editing parent Account fields directly from the Case page. Together, they provide a streamlined, efficient interface for support agents. The other components do not address either requirement.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 61,
  "statement": "SupportCo uses Ticket__c, Problem__c, and a junction object Ticket_Problem__c. Auditors must view Ticket_Problem__c records. What access is required?",
  "options": [
   {
    "key": "a",
    "text": "Read on Ticket__c only"
   },
   {
    "key": "b",
    "text": "Read on Ticket__c and Problem__c only"
   },
   {
    "key": "c",
    "text": "Read on Ticket_Problem__c only"
   },
   {
    "key": "d",
    "text": "Read on Problem__c and Ticket_Problem__c"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Access in a many-to-many relationship requires permissions on multiple objects. To see a junction record, you need access to the junction object. To see the details of what that junction record connects to, you need access to the related parent objects. In this case, auditors need Read on Ticket_Problem__c to see the existence of the link, and Read on Problem__c to see which problem is linked. Access to Ticket__c might not be strictly necessary if they are only auditing problem linkages.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 62,
  "statement": "The Account object has an OWD of Private. The Marketing team needs visibility into Accounts owned by the Sales team, and both teams are in separate role branches. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Assignment rules"
   },
   {
    "key": "b",
    "text": "Sharing rules"
   },
   {
    "key": "c",
    "text": "Public group only"
   },
   {
    "key": "d",
    "text": "Territory management"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When OWD is Private, the baseline is that users only see records they own. To grant access to a specific group of users (Marketing team) to a specific set of records (Accounts owned by Sales team), you need a sharing rule. The sharing rule defines the source of the records (e.g., Accounts owned by users in the Sales role) and the target users (e.g., users in the Marketing role), and grants them a specified level of access (e.g., Read/Write).",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 63,
  "statement": "The Operations Director wants approval before any Asset record marked as \"Free Replacement\" is finalized. Which feature enforces this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Chatter feed moderation"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Escalation rule"
   },
   {
    "key": "d",
    "text": "Email-to-Case"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is a classic approval workflow: certain records (Free Replacement Assets) need managerial approval before they can be finalized. Salesforce's native approval process feature is designed exactly for this. It allows you to define entry criteria (e.g., 'Free Replacement' = true), specify approvers (the Operations Director), and lock the record during the approval process. This provides a formal, auditable, and automated way to enforce the business rule.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 64,
  "statement": "Titan Freight delivers equipment to remote coordinates provided by customers. The system must store latitude and longitude values for delivery locations. Which field type should be used?",
  "options": [
   {
    "key": "a",
    "text": "Number"
   },
   {
    "key": "b",
    "text": "Geolocation"
   },
   {
    "key": "c",
    "text": "Text"
   },
   {
    "key": "d",
    "text": "Lookup"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When the requirement specifically involves storing latitude and longitude for mapping and location-based functionality, the Geolocation field type is the clear choice. It stores both coordinates in a structured way that the Salesforce platform understands. This enables native features like distance formulas (`DISTANCE()`) and address geocoding. While you could hack a solution with separate number fields (option 1), you would lose all the built-in geolocation capabilities, making option 2 the superior and correct answer.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 2,
  "number": 65,
  "statement": "Titan Rail Systems wants managers to approve deletion requests for Warranty records. Employees must not be able to permanently delete a Warranty without supervisor authorization. Which configuration should the app builder use?",
  "options": [
   {
    "key": "a",
    "text": "Approval process combined with a record-triggered flow"
   },
   {
    "key": "b",
    "text": "Escalation rule on the Warranty object"
   },
   {
    "key": "c",
    "text": "Cross-object formula field"
   },
   {
    "key": "d",
    "text": "Case assignment rule"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Since Salesforce does not provide a native 'approve delete' feature, a creative solution using platform tools is required. A Before Delete record-triggered flow can detect the deletion attempt and, instead of allowing it, submit the record to an approval process. The approval process manages manager authorization. Upon approval, a separate process (another flow or a scheduled action) can perform the actual deletion. This combination of flow and approval process fulfills the requirement without custom code.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 1,
  "statement": "To archive large data volumes while keeping reporting capability, which two options work? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Big Objects"
   },
   {
    "key": "b",
    "text": "External Objects"
   },
   {
    "key": "c",
    "text": "Custom Objects"
   },
   {
    "key": "d",
    "text": "Related Lists"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "When you need to archive large data volumes but retain reporting capability, you have two primary Salesforce-native options. Big Objects (option 1) store data within Salesforce at a lower cost and with query capabilities. External Objects (option 2) allow you to leave data in an external system but access and report on it from within Salesforce. Custom objects and related lists are not suitable for large-scale archiving.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 2,
  "statement": "To automate review of travel requests:",
  "options": [
   {
    "key": "a",
    "text": "Validation rule"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Assignment rule"
   },
   {
    "key": "d",
    "text": "Apex"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Automating a review workflow with designated approvers is the exact purpose of Salesforce's approval process feature. It provides a declarative way to define the steps, approvers, and actions for records like travel requests. This is far simpler and more maintainable than custom code, and it's the correct tool for this requirement.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 3,
  "statement": "To display all fields from page layout on Lightning record page, which component is required?",
  "options": [
   {
    "key": "a",
    "text": "Highlights Panel"
   },
   {
    "key": "b",
    "text": "Path"
   },
   {
    "key": "c",
    "text": "Record Detail"
   },
   {
    "key": "d",
    "text": "Related List"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The transition from Classic to Lightning involves understanding that page layouts still exist and are used, but they are rendered by the Record Detail component in Lightning. To see all the fields as arranged in the classic page layout, you must add the Record Detail component to the Lightning record page. This component respects all layout configurations, including field order, sections, and visibility based on profile and record type.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 4,
  "statement": "To display first five characters of parent Zip__c:",
  "options": [
   {
    "key": "a",
    "text": "LEFT(Account.Zip__c, 5)"
   },
   {
    "key": "b",
    "text": "RIGHT(Account.Zip__c, 5)"
   },
   {
    "key": "c",
    "text": "TEXT(Account.Zip__c)"
   },
   {
    "key": "d",
    "text": "MID(Account.Zip__c)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To extract the first few characters of a text field, the `LEFT()` function is the correct and simplest choice. In a formula field on a child object, you can reference the parent's field using the relationship name (e.g., `Account__r.Zip__c` or `Account.Zip__c` depending on the exact syntax). Combining these, `LEFT(Account__r.Zip__c, 5)` will display the first five characters of the parent's Zip code.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 5,
  "statement": "To enforce required fields based on record type, what is best?",
  "options": [
   {
    "key": "a",
    "text": "Validation rule"
   },
   {
    "key": "b",
    "text": "Flow"
   },
   {
    "key": "c",
    "text": "Required layout field"
   },
   {
    "key": "d",
    "text": "Formula field"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For strong, server-side enforcement of conditional field requirements based on record type, validation rules are the best and most direct tool. They have access to the record type information and can evaluate whether fields are blank under specific conditions. This ensures data integrity regardless of how the record is created or updated (UI, API, etc.).",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 6,
  "statement": "To gather quick feedback and know availability in Chatter: (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Polls"
   },
   {
    "key": "b",
    "text": "Out of Office"
   },
   {
    "key": "c",
    "text": "Topics"
   },
   {
    "key": "d",
    "text": "Streams"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Chatter provides specific features for collaboration. Polls (option 1) are designed for gathering quick feedback and opinions. Out of Office (option 2) is designed for indicating user availability. Topics and Streams are for content organization and feed management, not for feedback or availability. Therefore, options 1 and 2 are correct.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 7,
  "statement": "To import 1 million records, use:",
  "options": [
   {
    "key": "a",
    "text": "Data Loader"
   },
   {
    "key": "b",
    "text": "Import Wizard"
   },
   {
    "key": "c",
    "text": "Report export"
   },
   {
    "key": "d",
    "text": "Schema Builder"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For large data volumes (LDV), Data Loader is the standard tool. It is a client application that can handle millions of records in a single operation, providing robust error handling and batch controls. The Import Wizard has a 50,000 record limit, and the other tools are not for data loading. Therefore, Data Loader is the correct choice for 1 million records.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 8,
  "statement": "To minimize maintenance effort, use:",
  "options": [
   {
    "key": "a",
    "text": "Managed package"
   },
   {
    "key": "b",
    "text": "Unmanaged package"
   },
   {
    "key": "c",
    "text": "Custom code"
   },
   {
    "key": "d",
    "text": "Open-source fork"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Managed packages are the preferred distribution method for solutions intended to be maintained over time. The provider handles upgrades, bug fixes, and new features, which are then easily installed by subscribers. This shifts the maintenance burden to the package provider, minimizing the effort required by the subscriber organization. Unmanaged packages and custom code place the full maintenance responsibility on the subscriber.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 9,
  "statement": "To notify managers and track Close Date changes: (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Record-triggered flow with notification"
   },
   {
    "key": "b",
    "text": "Enable feed tracking"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Outbound message"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "This requirement has two parts: notification and tracking. A record-triggered flow (option 1) can handle the real-time notification to managers when the Close Date changes. Enabling feed tracking (option 2) on the Close Date field provides the automatic, auditable log of changes in Chatter. Together, they fulfill both needs declaratively.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 10,
  "statement": "To notify managers when Cases remain New for four business hours: (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Escalation rule"
   },
   {
    "key": "b",
    "text": "Scheduled Apex"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Compact layout"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Time-based notifications require either a declarative tool (escalation rules) or a programmatic one (scheduled Apex). Escalation rules (option 1) are the native, declarative solution for Cases. Scheduled Apex (option 2) provides a more flexible, code-based alternative. Validation rules and compact layouts are not applicable.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 11,
  "statement": "To optimize Salesforce Mobile experience, which three actions are recommended? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Minimize formula/lookup complexity"
   },
   {
    "key": "b",
    "text": "Use compact layouts"
   },
   {
    "key": "c",
    "text": "Add global actions"
   },
   {
    "key": "d",
    "text": "Create separate OS layouts"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Optimizing for mobile focuses on performance, information density, and ease of access. Minimizing complex formulas and lookups (option 1) improves performance on constrained networks. Using compact layouts (option 2) ensures key information is front and center on small screens. Adding global actions (option 3) enables quick, anywhere access to common tasks. Creating separate OS layouts (option 4) is unnecessary and not a standard practice, making options 1, 2, and 3 the correct set.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 12,
  "statement": "To provide different mobile navigation menus for Sales and Marketing:",
  "options": [
   {
    "key": "a",
    "text": "Create separate apps"
   },
   {
    "key": "b",
    "text": "Create different roles"
   },
   {
    "key": "c",
    "text": "Create public groups"
   },
   {
    "key": "d",
    "text": "Modify home pages"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Mobile navigation in Salesforce is determined by the Lightning app the user is currently in. Each app has its own navigation menu configuration. Therefore, to give Sales and Marketing different mobile navigation, you would create (or configure) separate apps for each team, assign the appropriate profiles to those apps, and customize each app's navigation menu to include the relevant tabs and items.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 13,
  "statement": "To require manager approval for free items:",
  "options": [
   {
    "key": "a",
    "text": "Approval process"
   },
   {
    "key": "b",
    "text": "Validation rule"
   },
   {
    "key": "c",
    "text": "Discount schedule"
   },
   {
    "key": "d",
    "text": "Task rule"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a business process requires a review step before a transaction can be completed, an approval process is the appropriate declarative tool. It allows you to define entry criteria (e.g., 'free item'), specify approvers (e.g., manager), and lock the record during the review. This provides the necessary control and audit trail.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 14,
  "statement": "To restrict scorecards to rep, manager, and executives while hiding executive comments from rep:",
  "options": [
   {
    "key": "a",
    "text": "Private OWD + hierarchy + FLS"
   },
   {
    "key": "b",
    "text": "Public OWD + page layouts"
   },
   {
    "key": "c",
    "text": "Sharing rule only"
   },
   {
    "key": "d",
    "text": "Manual sharing"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Complex visibility requirements often require combining multiple security features. Private OWD establishes the baseline. Role hierarchy grants upward visibility to managers and executives. Field-Level Security (FLS) provides the final layer of control over specific fields (Executive Comments). This combination of record-level and field-level security is the standard way to achieve such nuanced access.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 15,
  "statement": "To show 12 key fields at top of record:",
  "options": [
   {
    "key": "a",
    "text": "Path"
   },
   {
    "key": "b",
    "text": "Highlights Panel"
   },
   {
    "key": "c",
    "text": "Accordion"
   },
   {
    "key": "d",
    "text": "Related List"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The top section of a Lightning record page is called the highlights panel. This area is controlled by the Highlights Panel component, which displays fields from the compact layout and can also show additional fields configured in the component itself. To show 12 key fields at the top, an admin would configure the Highlights Panel component on the page, selecting the desired fields to be displayed in this prominent location.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 16,
  "statement": "To show a component only in Salesforce Mobile:",
  "options": [
   {
    "key": "a",
    "text": "Component visibility filter"
   },
   {
    "key": "b",
    "text": "Form factor setting"
   },
   {
    "key": "c",
    "text": "Page layout assignment"
   },
   {
    "key": "d",
    "text": "Field-level security"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Lightning App Builder provides a direct and simple way to control component visibility by device. The 'Form Factor' setting in the component's visibility options allows you to specify whether the component should appear on Desktop, Phone, or both. By selecting 'Phone', you ensure the component is rendered only in the Salesforce mobile app, meeting the requirement precisely.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 17,
  "statement": "To show Component__c as related list on Product:",
  "options": [
   {
    "key": "a",
    "text": "Lookup from Component to Product"
   },
   {
    "key": "b",
    "text": "Roll-up summary"
   },
   {
    "key": "c",
    "text": "Junction object"
   },
   {
    "key": "d",
    "text": "Master-detail from Product"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The fundamental requirement for a related list is a relationship where the child object (Component__c) has a field pointing to the parent (Product). A lookup field creates exactly that relationship. Once the lookup exists, the Related List component on the Product page will automatically be able to display the child records. This is the standard way to create a one-to-many related list.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 18,
  "statement": "To show latest maintenance date from child Work Orders on Asset:",
  "options": [
   {
    "key": "a",
    "text": "Flow"
   },
   {
    "key": "b",
    "text": "Roll-up summary (MAX)"
   },
   {
    "key": "c",
    "text": "Apex class"
   },
   {
    "key": "d",
    "text": "Einstein Recommendation"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For displaying an aggregated value (like the maximum date) from child records on a parent, a roll-up summary field with the MAX function is the ideal declarative solution. It requires a master-detail relationship. If that exists between Asset and Work Order, this provides an automatic, real-time display of the latest maintenance date with no code or complex flow required.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 19,
  "statement": "To show total Opportunities per Account, what should be used?",
  "options": [
   {
    "key": "a",
    "text": "Lookup field"
   },
   {
    "key": "b",
    "text": "Roll-up summary field"
   },
   {
    "key": "c",
    "text": "Text formula"
   },
   {
    "key": "d",
    "text": "Workflow rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For displaying an aggregated count of child records on a parent, a roll-up summary field is the standard declarative solution. It requires a master-detail relationship. If that exists between Account and Opportunity, a roll-up summary with the COUNT function provides an automatic, real-time total of Opportunities per Account, with no code or additional automation required.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 20,
  "statement": "To test against subset of production data under 5GB:",
  "options": [
   {
    "key": "a",
    "text": "Partial Copy"
   },
   {
    "key": "b",
    "text": "Developer"
   },
   {
    "key": "c",
    "text": "Full"
   },
   {
    "key": "d",
    "text": "Developer Pro"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Partial Copy sandboxes are the only sandbox type that combines metadata with a configurable subset of production data, and they have a data storage limit that matches the 'under 5GB' requirement. They are designed for testing, QA, and user acceptance testing with realistic data. Therefore, Partial Copy is the correct choice.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 21,
  "statement": "To test flows using a subset of production data under 5GB, refreshed regularly:",
  "options": [
   {
    "key": "a",
    "text": "Developer sandbox"
   },
   {
    "key": "b",
    "text": "Partial Copy sandbox"
   },
   {
    "key": "c",
    "text": "Full sandbox"
   },
   {
    "key": "d",
    "text": "Scratch org"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Partial Copy sandboxes are the ideal environment for testing that requires a representative set of production data but not the full production dataset. They are designed for exactly this purpose: they include metadata and a configurable subset of data (under 5GB/10GB) and support regular refreshes. This makes them perfect for testing flows with realistic data.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 22,
  "statement": "To total Closed Won Opportunity Amount on Account, use which summary type?",
  "options": [
   {
    "key": "a",
    "text": "Count"
   },
   {
    "key": "b",
    "text": "Sum"
   },
   {
    "key": "c",
    "text": "Max"
   },
   {
    "key": "d",
    "text": "Average"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "To calculate a total (sum) of a numeric field from child records, the correct roll-up summary operation is SUM. Combined with a filter to include only 'Closed Won' Opportunities, this would provide the exact total the business needs, displayed directly on the Account record. The other operations (Count, Max, Avg) produce different statistical values.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 23,
  "statement": "To track number of times a Case is reopened:",
  "options": [
   {
    "key": "a",
    "text": "Record-triggered flow"
   },
   {
    "key": "b",
    "text": "Screen flow"
   },
   {
    "key": "c",
    "text": "Scheduled flow"
   },
   {
    "key": "d",
    "text": "Apex class only"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Counting events (like a Case being reopened) is a perfect use case for a record-triggered flow. It reacts to the specific field change (Status), evaluates the condition, and performs an action (incrementing a counter). This is a clean, declarative solution that requires no code and provides real-time accuracy.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 24,
  "statement": "TrailWorks wants automatic Chatter posts when a Permit record's Status changes to Approved. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Auto-response rule"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Feed tracking"
   },
   {
    "key": "d",
    "text": "Assignment rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For automatically posting to Chatter when a field value changes, Feed Tracking is the native, purpose-built feature. Enabling feed tracking on the Status field of the Permit object will cause a Chatter post to be created every time the Status field is updated, including when it changes to 'Approved'. This meets the requirement directly without any additional configuration or workflow. Approval processes (option 2) could be misused to achieve this, but they add unnecessary complexity.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 25,
  "statement": "UrbanCore Real Estate tracks Offers under Property records using a master-detail relationship. They want to display the highest Offer Amount on each Property. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Cross-object formula"
   },
   {
    "key": "b",
    "text": "Roll-up summary field with MAX"
   },
   {
    "key": "c",
    "text": "Auto-launched flow"
   },
   {
    "key": "d",
    "text": "Lookup relationship"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Since the relationship is already master-detail, roll-up summary fields are the native, optimal solution. They automatically calculate and display aggregated values from child records directly on the parent in real-time. The MAX function specifically returns the maximum value among the child records, which perfectly matches the requirement to display the highest offer. This is declarative, efficient, and requires no code or complex automation.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 26,
  "statement": "Users cannot change parent record in master-detail. Why?",
  "options": [
   {
    "key": "a",
    "text": "Allow reparenting unchecked"
   },
   {
    "key": "b",
    "text": "Sharing rule missing"
   },
   {
    "key": "c",
    "text": "Validation rule exists"
   },
   {
    "key": "d",
    "text": "FLS restricted"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A key characteristic of master-detail relationships is that by default, once a child record is created, its parent cannot be changed. This is controlled by the 'Allow reparenting' checkbox on the relationship definition. If this box is unchecked, the parent field is locked. If the business requires that child records can be moved to a new parent, this setting must be enabled. This is the most direct and likely reason users cannot change the parent.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 27,
  "statement": "Users cannot select a custom report type when creating reports. What could cause this?",
  "options": [
   {
    "key": "a",
    "text": "Report type is In Development"
   },
   {
    "key": "b",
    "text": "OWD is Private"
   },
   {
    "key": "c",
    "text": "Field history disabled"
   },
   {
    "key": "d",
    "text": "Sharing rule missing"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Custom report types go through a development lifecycle. Until they are explicitly deployed, they remain 'In Development' and are hidden from standard users. This allows creators to test and refine the report type without impacting users. If users cannot see a custom report type, the most common reason is that it has not yet been deployed. Deploying it makes it available in the report type picker for all users with appropriate permissions.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 28,
  "statement": "Users need quick document access from Contract. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Custom link on Contract"
   },
   {
    "key": "b",
    "text": "Global action"
   },
   {
    "key": "c",
    "text": "Custom button"
   },
   {
    "key": "d",
    "text": "Related list"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "For providing quick access to external documents or URLs directly from a record page, a custom link is the standard solution. It's easy to configure, can be added to the page layout, and provides a simple clickable link for users. While related lists work for internal files, custom links are ideal for pointing to external document repositories.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 29,
  "statement": "Users need to edit Account fields directly from the Opportunity page. What should be added?",
  "options": [
   {
    "key": "a",
    "text": "Record detail component"
   },
   {
    "key": "b",
    "text": "Related Record component"
   },
   {
    "key": "c",
    "text": "Path"
   },
   {
    "key": "d",
    "text": "Compact layout"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Related Record component is a powerful tool in Lightning App Builder that enables exactly this scenario. It creates a mini-view of a parent record on the child record's page. You can select specific fields to display, and importantly, you can enable inline editing, allowing users to modify those parent fields without navigating away from the child record. This provides a highly efficient user experience, exactly as requested.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 30,
  "statement": "Users often leave Territory__c blank on Person__c records. The data steward wants Territory__c required only when the related Company__c has Tier__c = \"Strategic\". What should be done?",
  "options": [
   {
    "key": "a",
    "text": "Make Territory__c required at the field level"
   },
   {
    "key": "b",
    "text": "Create a validation rule on Person__c"
   },
   {
    "key": "c",
    "text": "Create a validation rule on Company__c"
   },
   {
    "key": "d",
    "text": "Make Tier__c required on Company__c"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Conditional requirements based on related records are enforced using validation rules on the object being saved. The rule can traverse a lookup relationship to access fields on the parent record. In this case, a validation rule on Person__c with the logic `AND( Company__r.Tier__c = \"Strategic\", ISBLANK(Territory__c) )` will correctly enforce that Territory__c is provided only when the related Company is Strategic.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 31,
  "statement": "Users should see a minimal set of fields when creating a new Opportunity-like record. After saving, the record should switch to a layout showing additional fields based on the selected Type. How can this be accomplished?",
  "options": [
   {
    "key": "a",
    "text": "Make Type required on the initial layout and use automation to set Record Type after save"
   },
   {
    "key": "b",
    "text": "Use one page layout per profile"
   },
   {
    "key": "c",
    "text": "Use sharing rules to reveal more fields after save"
   },
   {
    "key": "d",
    "text": "Hide sections and tell users to expand them manually"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This requirement calls for a dynamic page layout based on a field value. Since page layouts are assigned via Record Type, the solution involves changing the Record Type after the initial save. By capturing the Type on a minimal initial layout and using a record-triggered flow to update the Record Type accordingly, you can achieve the desired behavior: a simple creation screen followed by a richer, context-appropriate detail page. This is a common and effective pattern.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 32,
  "statement": "Users want to create a new Opportunity directly from an Account and prepopulate fields based on Account data. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Quick action on Account"
   },
   {
    "key": "b",
    "text": "Assignment rule"
   },
   {
    "key": "c",
    "text": "Record-triggered flow"
   },
   {
    "key": "d",
    "text": "Approval process"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Quick actions with predefined field values are the ideal solution for this 'create related record with prepopulated fields' requirement. They provide a user-friendly button on the Account page, launch a modal for data entry, and automatically fill in fields using values from the Account. This gives users a fast, efficient way to create Opportunities without re-entering data and without requiring any code. It's a powerful and declarative feature.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 33,
  "statement": "Vertex BioTech needs a customer-facing analytics widget built within 30 days. Their internal development team is booked for the next quarter and cannot take on additional work. What should the app builder recommend?",
  "options": [
   {
    "key": "a",
    "text": "Develop a custom Lightning Web Component internally"
   },
   {
    "key": "b",
    "text": "Install a prebuilt solution from AppExchange"
   },
   {
    "key": "c",
    "text": "Configure Dynamic Forms to simulate the widget"
   },
   {
    "key": "d",
    "text": "Create a custom report dashboard"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When internal resources are constrained and a tight deadline exists, leveraging prebuilt solutions is the most pragmatic approach. The AppExchange is Salesforce's marketplace for such solutions. By searching for an analytics widget or dashboard component, the app builder can likely find a prebuilt option that can be installed and configured quickly, meeting the 30-day deadline without requiring any internal development. This is a classic 'buy vs. build' scenario where 'buy' is the clear winner.",
  "module": "ab-fundamentals"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 34,
  "statement": "Vertex Construction allows multiple Quotes per Project. When a Quote is marked \"Rejected,\" it should be automatically removed from the system. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Record-triggered flow"
   },
   {
    "key": "b",
    "text": "Report subscription"
   },
   {
    "key": "c",
    "text": "Path configuration"
   },
   {
    "key": "d",
    "text": "Web-to-Lead"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The requirement is a straightforward automation scenario: when a record's status changes to a specific value, delete it. Record-triggered flows are designed exactly for such event-driven automation. They can be triggered on update, evaluate the new field values, and perform actions including record deletion. This provides a clean, declarative solution without code. The other options either don't modify data (report subscriptions, path) or are for entirely different purposes (Web-to-Lead).",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 35,
  "statement": "What can be deployed via change set? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Apex class"
   },
   {
    "key": "b",
    "text": "Custom object"
   },
   {
    "key": "c",
    "text": "Custom field"
   },
   {
    "key": "d",
    "text": "Standard field"
   },
   {
    "key": "e",
    "text": "Web-to-lead"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Change sets can deploy a wide range of custom metadata, including Apex classes, custom objects, and custom fields. However, they have limitations. Standard fields and certain platform features like Web-to-Lead settings are not supported. Therefore, from the given options, Apex classes, custom objects, and custom fields are the correct choices for change set deployment.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 36,
  "statement": "What happens after record submission for approval?",
  "options": [
   {
    "key": "a",
    "text": "Owner changes"
   },
   {
    "key": "b",
    "text": "Record locks"
   },
   {
    "key": "c",
    "text": "Stage auto updates"
   },
   {
    "key": "d",
    "text": "Comments editable"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A key feature of approval processes is record locking. Upon submission, the record is locked to prevent further modifications while it is being reviewed. This ensures the approver is reviewing the exact data that was submitted, and no changes can be made mid-process. This locking mechanism is fundamental to the integrity of the approval workflow.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 37,
  "statement": "What is a limitation of Schema Builder when creating fields?",
  "options": [
   {
    "key": "a",
    "text": "Cannot create roll-up summary fields"
   },
   {
    "key": "b",
    "text": "Cannot create lookup relationships"
   },
   {
    "key": "c",
    "text": "Cannot delete fields"
   },
   {
    "key": "d",
    "text": "Cannot create number fields"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "While Schema Builder is a powerful visual tool for data modeling, it doesn't support every field creation operation. Roll-up summary fields are notably absent from its capabilities. This is because roll-up summaries have complex dependencies and settings (like the summarized field, filter criteria, etc.) that are better handled in a wizard interface. Therefore, to create a roll-up summary field, you must use the standard field creation process in Object Manager. This is a known limitation of Schema Builder.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 38,
  "statement": "What is a limitation of Schema Builder?",
  "options": [
   {
    "key": "a",
    "text": "Cannot create relationships"
   },
   {
    "key": "b",
    "text": "Cannot create formula fields"
   },
   {
    "key": "c",
    "text": "Cannot add fields to layout from canvas"
   },
   {
    "key": "d",
    "text": "Cannot edit labels"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Schema Builder is a powerful visual tool for managing the data model, but it has a clear boundary: it stops at data definition. Once fields are created, you must use other tools (Page Layout Editor, Lightning App Builder) to place them on user interfaces. This inability to directly add fields to layouts from the Schema Builder canvas is a key limitation to understand.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 39,
  "statement": "When a Deal is marked Closed Won, finance must receive an email and onboarding must create a Task unless the client is Premium Tier. Which automation should be used?",
  "options": [
   {
    "key": "a",
    "text": "Record-triggered flow"
   },
   {
    "key": "b",
    "text": "Escalation rule"
   },
   {
    "key": "c",
    "text": "Path"
   },
   {
    "key": "d",
    "text": "Compact layout"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-triggered flows are the most versatile declarative automation tool for this scenario. They can be triggered by a field update (Stage to Closed Won). They support complex logic via decision elements (checking Premium Tier). They can perform multiple actions in sequence (send email, create Task). This makes them the perfect single tool to handle both the conditional task creation and the unconditional email notification in one unified automation.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 40,
  "statement": "When a Service Agreement record is created, it should copy the parent Account's Billing Country into a custom field. The copied value must remain unchanged even if the Account changes later. What is the recommended solution?",
  "options": [
   {
    "key": "a",
    "text": "Cross-object formula field"
   },
   {
    "key": "b",
    "text": "Apex trigger"
   },
   {
    "key": "c",
    "text": "Record-triggered flow that runs on create"
   },
   {
    "key": "d",
    "text": "Roll-up summary"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The key requirement is a one-time copy at creation that does not update later. Formula fields (option 1) update dynamically, violating this. Roll-up summaries (option 4) work in the wrong direction. Apex (option 2) works but is overkill. A record-triggered flow on creation (option 3) is the ideal declarative solution: it runs exactly once when the record is created, copies the value, and stores it statically, ensuring it remains unchanged even if the source data changes later.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 41,
  "statement": "When activating a custom Lightning Home page, which activation options are available? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Assign to specific apps and profiles"
   },
   {
    "key": "b",
    "text": "Assign using permission sets"
   },
   {
    "key": "c",
    "text": "Set as org default"
   },
   {
    "key": "d",
    "text": "Assign by role"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Lightning page activation offers specific targeting methods. You can assign a page to one or more app/profile combinations (option 1), which gives you granular control over who sees what. You can also set a page as the org default (option 3), which acts as the baseline for all users. Permission sets (option 2) and roles (option 4) are not valid targeting criteria for page assignments, making options 1 and 3 the correct choices.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 42,
  "statement": "When an Account Type changes to \"Inactive,\" all related Contacts should update their Status to \"Dormant.\" Which automation should be used?",
  "options": [
   {
    "key": "a",
    "text": "Screen flow"
   },
   {
    "key": "b",
    "text": "Record-triggered flow"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Sharing rule"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This is a classic 'parent change updates children' scenario. Record-triggered flows are perfectly suited for this. You create a flow on the parent object (Account) triggered by an update to a specific field (Type). The flow includes a Get Records element to find all related child records (Contacts) and a Loop and Update element to change their Status. This provides an automated, declarative solution that runs whenever the condition is met.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 43,
  "statement": "When an Opportunity is Closed Won, create a renewal Opportunity and notify Contracts team. What automation handles both actions?",
  "options": [
   {
    "key": "a",
    "text": "Approval process"
   },
   {
    "key": "b",
    "text": "Validation rule"
   },
   {
    "key": "c",
    "text": "Record-triggered flow"
   },
   {
    "key": "d",
    "text": "Escalation rule"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-triggered flows are the most versatile declarative automation tool for multi-step processes triggered by record changes. They can evaluate conditions, create records, send emails, post to Chatter, and much more, all in a single automation. This makes them the perfect solution for the requirement: one flow, triggered by the stage change, that both creates the renewal Opportunity and notifies the Contracts team. The other options either can't perform both actions or are for entirely different purposes.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 44,
  "statement": "When deploying a change set from sandbox to production, which two considerations apply? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Deployment is transactional"
   },
   {
    "key": "b",
    "text": "Users must log out"
   },
   {
    "key": "c",
    "text": "Some settings require manual configuration"
   },
   {
    "key": "d",
    "text": "Salesforce Connect links environments"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Understanding change set behavior is crucial for successful deployments. Knowing that deployments are transactional (option 1) helps in planning and testing, as a single failure means no changes are applied. Awareness that some settings may need manual configuration (option 3) prevents surprises after deployment, ensuring administrators verify and complete any necessary post-deployment steps. Options 2 and 4 are factually incorrect regarding change sets.",
  "module": "ab-deploy"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 45,
  "statement": "When Equipment is sold, a checkbox should be selected and an external system notified the next day. Which automation tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Escalation rule"
   },
   {
    "key": "b",
    "text": "Approval process"
   },
   {
    "key": "c",
    "text": "Validation rule"
   },
   {
    "key": "d",
    "text": "Record-triggered flow"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Record-triggered flows are uniquely suited for this multi-step requirement. They can perform immediate actions (checking the box) and also incorporate time-based delays using the 'Scheduled Paths' feature. After the 1-day wait, the flow can then execute an action like an outbound message or callout to notify an external system. This all happens within a single automation, declaratively, without code. No other listed tool can combine immediate field updates with delayed external notifications.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 46,
  "statement": "When Opportunity Stage = Closed Won, Scheduled Delivery Date must be within 14 days of Close Date and cannot be blank. Which validation logic meets this?",
  "options": [
   {
    "key": "a",
    "text": "ISPICKVAL(StageName,\"Closed Won\") && (Delivery_Date__c-CloseDate)>14"
   },
   {
    "key": "b",
    "text": "OR(ISPICKVAL(StageName,\"Closed Won\") && (Delivery_Date__c-CloseDate)>14, ISBLANK(Delivery_Date__c))"
   },
   {
    "key": "c",
    "text": "Delivery_Date__c > TODAY()"
   },
   {
    "key": "d",
    "text": "CloseDate > Delivery_Date__c"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "This validation rule has two criteria that must be enforced when the Stage is Closed Won: Delivery Date must not be blank, and it must be within 14 days after the Close Date. The correct formula uses OR to treat both failure conditions (blank OR >14 days) as triggers for the validation error. Option 2 correctly implements this logic. Option 1 misses the blank check. Options 3 and 4 are unrelated or incorrect.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 47,
  "statement": "When submitting a Project for approval, users must answer additional questions in a popup. What should be used?",
  "options": [
   {
    "key": "a",
    "text": "Screen flow launched from custom button"
   },
   {
    "key": "b",
    "text": "Validation rule"
   },
   {
    "key": "c",
    "text": "Email alert"
   },
   {
    "key": "d",
    "text": "Duplicate rule"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Screen flows are Salesforce's tool for creating guided, interactive experiences with popups and data collection screens. By building a screen flow that asks the required questions and then using a custom button or action to launch it before submitting for approval, you create exactly the user experience described. The flow can gather the information, potentially store it, and then trigger the standard approval submission. This is a powerful and flexible declarative solution.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 48,
  "statement": "Where can an admin view available custom Lightning components for use in pages? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Lightning App Builder"
   },
   {
    "key": "b",
    "text": "Setup → Lightning Components"
   },
   {
    "key": "c",
    "text": "Setup → Visualforce Pages"
   },
   {
    "key": "d",
    "text": "Schema Builder"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To see available Lightning components, an admin has two main places. The Lightning App Builder provides a contextual view of components ready to be dropped onto a page. The Setup 'Lightning Components' page provides a comprehensive, non-contextual list of all custom components in the org for management and review. The other options are for different purposes (Visualforce pages and data modeling).",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 49,
  "statement": "Where does an admin edit an existing Lightning app to add items to the Utility Bar?",
  "options": [
   {
    "key": "a",
    "text": "Lightning App Builder"
   },
   {
    "key": "b",
    "text": "Object Manager"
   },
   {
    "key": "c",
    "text": "App Manager"
   },
   {
    "key": "d",
    "text": "Setup → Home"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The Utility Bar is a feature of a Lightning app, not of individual pages. Therefore, it is configured at the app level. The App Manager is the central place to manage all aspects of a Lightning app, including its utility bar items. An admin would go to Setup, enter App Manager, find the app, click Edit, and then navigate to the Utility Bar section to add or modify items.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 50,
  "statement": "Which formula ensures exporting the 18-character ID?",
  "options": [
   {
    "key": "a",
    "text": "TEXT(Id)"
   },
   {
    "key": "b",
    "text": "VALUE(Id)"
   },
   {
    "key": "c",
    "text": "LEFT(Id, 15)"
   },
   {
    "key": "d",
    "text": "ISNUMBER(Id)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Salesforce record IDs have two forms: a 15-character case-sensitive ID and an 18-character case-insensitive ID. The 18-character version is preferred for exports and integrations because it is not case-sensitive, avoiding issues with systems that might change case. Using `TEXT(Id)` in a formula field or export ensures that you get the 18-character, case-insensitive ID.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 51,
  "statement": "Which report formats support Reporting Snapshots? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Tabular"
   },
   {
    "key": "b",
    "text": "Summary"
   },
   {
    "key": "c",
    "text": "Joined"
   },
   {
    "key": "d",
    "text": "Matrix"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Reporting Snapshots are used to capture report data at a point in time and store it in custom objects for historical analysis. However, they are limited to using Tabular and Summary reports as data sources. Joined and Matrix reports are not supported. Therefore, options 1 and 2 are correct.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 52,
  "statement": "Which three actions are available in Approval Processes? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Email alert"
   },
   {
    "key": "b",
    "text": "Task"
   },
   {
    "key": "c",
    "text": "Outbound message"
   },
   {
    "key": "d",
    "text": "Screen flow"
   },
   {
    "key": "e",
    "text": "Decision logic"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Approval processes support a set of immediate actions that can be triggered when the process starts, when it's approved, when it's rejected, or when it's recalled. The standard immediate actions are Email Alerts, Tasks, and Outbound Messages. Screen flows and decision logic are not actions in this context. Therefore, options 1, 2, and 3 are correct.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 53,
  "statement": "Which three standard components are available in Lightning App Builder? (Choose three.)",
  "options": [
   {
    "key": "a",
    "text": "Recent Items"
   },
   {
    "key": "b",
    "text": "Visualforce Page"
   },
   {
    "key": "c",
    "text": "Rich Text"
   },
   {
    "key": "d",
    "text": "Report Chart"
   }
  ],
  "correct": [
   "a",
   "c",
   "d"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "Lightning App Builder comes with a palette of standard components that you can drag and drop onto pages. Recent Items (option 1), Rich Text (option 3), and Report Chart (option 4) are all standard components found in that palette. Visualforce Page (option 2) is available but is not considered a 'standard component' in the same sense; it's a mechanism to embed legacy Visualforce content. Therefore, options 1, 3, and 4 are the correct choices.",
  "module": "ab-ui"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 54,
  "statement": "Which two features allow users to launch flows from the UI? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Flow Launcher"
   },
   {
    "key": "b",
    "text": "Approval Process"
   },
   {
    "key": "c",
    "text": "Quick Action"
   },
   {
    "key": "d",
    "text": "Outbound Message"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Users can initiate flows through two primary declarative methods: the Flow Launcher, which is a dedicated app for running flows, and Quick Actions, which can be configured to start a flow and are placed in convenient locations on pages or in the mobile app. Approval processes and outbound messages are not mechanisms for user-initiated flow launching.",
  "module": "ab-logic"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 55,
  "statement": "Which two field types can be marked as External ID? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Text"
   },
   {
    "key": "b",
    "text": "Number"
   },
   {
    "key": "c",
    "text": "Phone"
   },
   {
    "key": "d",
    "text": "URL"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Salesforce restricts the External ID attribute to field types that are suitable for storing unique, indexable identifiers. Text and Number fields are the main types that support this feature. Auto-Number fields also support External ID, but it is less commonly used. Phone and URL fields are not eligible. Therefore, Text and Number are the correct choices from the given options.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 56,
  "statement": "Which two limitations apply when changing a field's data type? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "Formula field types cannot be converted"
   },
   {
    "key": "b",
    "text": "Fields referenced in Apex cannot be changed without updates"
   },
   {
    "key": "c",
    "text": "Picklists cannot change"
   },
   {
    "key": "d",
    "text": "Text fields cannot convert to number"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Changing a field's data type is a significant metadata operation with important limitations. Formula fields are immutable in type (option 1) — you cannot convert a formula to a different field type. Dependencies in Apex code (option 2) must be resolved before or during the type change, or the operation will fail. Options 3 and 4 are factually incorrect as picklists can be changed and text fields can convert to numbers under the right conditions, making options 1 and 2 the correct limitations.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 57,
  "statement": "Which two statements about External ID fields are correct? (Choose two.)",
  "options": [
   {
    "key": "a",
    "text": "They can be Auto-Number fields"
   },
   {
    "key": "b",
    "text": "Each object can have up to 25"
   },
   {
    "key": "c",
    "text": "They can be URL fields"
   },
   {
    "key": "d",
    "text": "Each org is limited to 25 total"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "External ID fields have specific characteristics. They can be of type Auto-Number, Text, or Number. There is also a platform limit of 25 External ID fields per object. Options 1 and 2 correctly state these facts. Options 3 and 4 are incorrect because URL fields are not supported and the limit is per object, not per org.",
  "module": "ab-datamodel"
 },
 {
  "trilha": "appbuilder",
  "simulado": 3,
  "number": 58,
  "statement": "With OWD set to Private, Opportunities of type \"Subscription\" must be visible to all users in the Renewal Manager role. What should be configured?",
  "options": [
   {
    "key": "a",
    "text": "Owner-based sharing rule"
   },
   {
    "key": "b",
    "text": "Criteria-based sharing rule"
   },
   {
    "key": "c",
    "text": "Manual sharing"
   },
   {
    "key": "d",
    "text": "Permission set"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When OWD is Private, and you need to grant access to a subset of records based on a field value, criteria-based sharing rules are the standard solution. You define the criteria (Type = \"Subscription\") and the target users (the Renewal Manager role). The sharing engine then automatically grants access to all current and future records that meet the criteria. This is automated, scalable, and exactly matches the requirement.",
  "module": "ab-fundamentals"
 }
]);
