// Simulado 5 — questões originais balanceadas pelos pesos oficiais do exame.
window.QUESTIONS = (window.QUESTIONS || []).concat([
 {
  "simulado": 5,
  "number": 1,
  "statement": "Northwind Outfitters runs its accounting from February 1 to January 31 and wants forecasts, quotas, and report date groupings (FY2026, Q1, etc.) to align with that calendar. A standard fiscal year cannot represent this period. What should the administrator do?",
  "options": [
   {
    "key": "a",
    "text": "Enable and define a custom fiscal year, then set February as the starting month of the fiscal year."
   },
   {
    "key": "b",
    "text": "Change the organization's default locale to one whose calendar starts in February."
   },
   {
    "key": "c",
    "text": "Edit the Company Information page and change the fiscal year start month without enabling anything."
   },
   {
    "key": "d",
    "text": "Create a custom date field on Opportunity and build reports that group by that field."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **custom fiscal year** lets you define fiscal periods that do not follow the Gregorian calendar, including a start month such as February and custom quarter/period structures. Once enabled, forecasting, quotas, and fiscal-period report groupings honor the custom definition. **Why the other options are incorrect:** (b) The default locale controls date/number/name formatting, not the fiscal calendar. (c) In Company Information you can only set the fiscal year START MONTH for a STANDARD fiscal year; a standard year must still be a 12-month period aligned to standard quarters and cannot model arbitrary custom periods described here, and enabling the custom fiscal year feature is required first. (d) A custom field with manual reports does not drive forecasting, quotas, or native fiscal-period logic.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 2,
  "statement": "BlueHarborLogistics tracks shipments using a custom object. An administrator created a text field called Carrier_Code__c that stores values such as '12345' and now wants to convert it to a Number field so users can run calculations. What should the administrator keep in mind before changing the field type?",
  "options": [
   {
    "key": "a",
    "text": "Converting Text to Number is always lossless because both store the same characters."
   },
   {
    "key": "b",
    "text": "Data may be lost or truncated for any existing values that are not valid numbers, so the conversion should be tested carefully."
   },
   {
    "key": "c",
    "text": "Salesforce blocks any change of field type once the field contains data."
   },
   {
    "key": "d",
    "text": "The field type can only be changed by a developer using the Metadata API."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When you change a custom field's data type, Salesforce warns that **data can be lost or truncated**. Converting a Text field to a Number field will drop or clear values that are not valid numeric data (for example 'C-12345' or values with leading zeros). Salesforce recommends testing the change, ideally in a sandbox, before applying it in production.\n\n**Why the other options are incorrect:**\n- **a** is wrong because the conversion is not always lossless; non-numeric or improperly formatted values can be lost.\n- **c** is wrong because Salesforce allows many field type changes even when data exists; it simply warns about possible data loss.\n- **d** is wrong because an administrator can change the field type directly in the Object Manager UI; no developer or Metadata API is required.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 3,
  "statement": "At Nordwind Lumber, administrators want a single field on the Account object called Account_Health__c to be recalculated every time an Account record is saved. The calculation only uses fields that already exist on the same Account record being saved, and it must run with the best possible performance and lowest processing cost. Which automation approach should the administrator choose?",
  "options": [
   {
    "key": "a",
    "text": "A before-save record-triggered flow that updates the Account_Health__c field on the triggering record."
   },
   {
    "key": "b",
    "text": "An after-save record-triggered flow with an Update Records element pointing back to the same Account."
   },
   {
    "key": "c",
    "text": "A scheduled-triggered flow that runs nightly to recalculate the field."
   },
   {
    "key": "d",
    "text": "A screen flow launched from a quick action on the Account page layout."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "When a flow needs to update the **same record that triggered it** using only fields already available on that record, a **before-save record-triggered flow** is the most efficient option. Before-save flows modify the record in memory before it is committed to the database, so no additional DML is needed—this makes them significantly faster and lower-cost than after-save automations.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because an after-save flow updating the triggering record requires an extra DML/save operation, which is far less performant than a before-save flow for same-record updates.\n- **c** is incorrect because a scheduled flow runs on a batch schedule (e.g., nightly) and would not keep the field current each time the record is saved.\n- **d** is incorrect because a screen flow requires manual user interaction and would not run automatically on every save.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 4,
  "statement": "BrightLeaf Organics received a spreadsheet of 180,000 new Lead records from a trade-show vendor and must load them into Salesforce as quickly as possible. The administrator wants to use a client tool that can process this volume in a single job and also schedule the load to run overnight. Which tool should the administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Data Import Wizard, because it supports Leads and handles unlimited record volumes"
   },
   {
    "key": "b",
    "text": "Data Loader, because it supports up to approximately 5 million records and can be scheduled via the command-line interface"
   },
   {
    "key": "c",
    "text": "Data Export Service, because it can import large data sets on a weekly schedule"
   },
   {
    "key": "d",
    "text": "Mass Transfer Records, because it can reassign and create large volumes of Leads"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Data Loader** is the correct choice. It handles large volumes (up to approximately 5 million records per job) and supports insert, update, upsert, delete, and export. Because 180,000 records far exceeds the Data Import Wizard limit of ~50,000, Data Loader is required. Data Loader can also be automated and scheduled through its command-line interface (CLI), satisfying the overnight-run requirement.\n\n**Why the other options are incorrect:**\n- (a) The **Data Import Wizard** is limited to approximately **50,000 records** per import, so it cannot handle 180,000 records; it also offers no scheduling.\n- (c) The **Data Export Service** only *exports* data on a weekly or monthly basis; it cannot import records.\n- (d) **Mass Transfer Records** reassigns ownership of existing records; it does not create or load new records.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 5,
  "statement": "At Marlow Outdoor Gear, a sales rep converts a Lead for a prospect named Dana Reyes. The Lead has values populated in several standard fields as well as two custom fields the administrator created on the Lead object. After conversion, the rep notices that the two custom Lead field values did not appear on the resulting Contact record. What is the most likely reason?",
  "options": [
   {
    "key": "a",
    "text": "Custom Lead fields can never be transferred to Contacts; only standard fields convert automatically."
   },
   {
    "key": "b",
    "text": "The administrator did not map the custom Lead fields to the corresponding Contact fields in the Lead field mapping setup."
   },
   {
    "key": "c",
    "text": "The custom fields must be marked as Required on the Contact object before they can receive mapped values."
   },
   {
    "key": "d",
    "text": "Lead conversion only maps fields when an Account already exists for the company name on the Lead."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "During Lead conversion, standard fields have predefined mappings to Account, Contact, and Opportunity fields, but **custom Lead fields must be explicitly mapped** by the administrator in Lead field mapping (Setup > Object Manager > Lead > Fields & Relationships > Map Lead Fields). If the mapping is not configured, the data entered in those custom Lead fields is simply lost at conversion. Mapping requires the source and target custom fields to be of compatible data types.\n\n**Why the other options are incorrect:**\n- (a) is false because custom Lead fields can absolutely be carried over to Contact, Account, or Opportunity when a valid mapping is defined.\n- (c) is incorrect; the target field does not need to be Required to receive a mapped value, and marking it Required would not fix a missing mapping.\n- (d) is wrong because field mapping behavior does not depend on whether a matching Account already exists; conversion can create a new Account while still mapping fields.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 6,
  "statement": "NovaBright Appliances wants customers to submit support requests directly from the company's public website without logging in. The support manager also wants a maximum limit on how many cases can be created this way per day to protect against spam. Which feature should the administrator configure to meet both requirements?",
  "options": [
   {
    "key": "a",
    "text": "Email-to-Case, enabling the daily processing limit"
   },
   {
    "key": "b",
    "text": "Web-to-Case, setting the default case origin and the daily case limit"
   },
   {
    "key": "c",
    "text": "Omni-Channel routing with a capacity model"
   },
   {
    "key": "d",
    "text": "An Auto-Response Rule tied to a public Experience Cloud site"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Web-to-Case** lets an administrator generate an HTML form that captures information from a company's website and creates a Case from an unauthenticated visitor. In Support Settings, Web-to-Case includes a **daily case limit** setting that caps the number of cases Salesforce accepts from the web form each day, which directly protects against spam. **Why the other options are incorrect:** (a) Email-to-Case creates cases from inbound emails, not from a website form, and its limits relate to email processing, not web submissions. (c) Omni-Channel routes existing work items to agents based on capacity or skill; it does not create cases from a website. (d) Auto-Response Rules send automatic acknowledgement emails when a case is created; they neither create the case nor enforce a daily submission cap.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 7,
  "statement": "At Lumio Furnishings, a sales rep needs to call the same key account for a status check on the first Monday of every month for the next twelve months. She wants each call to appear as a separate item she can mark complete individually, without creating twelve records by hand. Which activity option should she use?",
  "options": [
   {
    "key": "a",
    "text": "Create a single Task with a reminder set to repeat monthly"
   },
   {
    "key": "b",
    "text": "Create a Recurring Task configured to repeat monthly"
   },
   {
    "key": "c",
    "text": "Create a Recurring Event configured to repeat monthly"
   },
   {
    "key": "d",
    "text": "Log twelve separate Tasks using the To Do list"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Recurring Task** generates a series of individual Task records on the schedule you define (for example, monthly), and each occurrence can be completed independently. This matches the need for a repeating to-do item that produces separate, individually completable records without manual duplication.\n\n**Why the other options are incorrect:**\n- (a) is wrong because a reminder on a single Task only triggers a notification; it does not create multiple records, so there would be nothing separate to complete each month.\n- (c) is wrong because an Event represents a scheduled block of time (a meeting/appointment), not a to-do item to be marked complete; a status-check call tracked as a completable item belongs on a Task.\n- (d) is wrong because logging twelve Tasks by hand is exactly the manual effort she wants to avoid, and the To Do list only surfaces existing Tasks rather than generating a recurring series.",
  "module": "productivity"
 },
 {
  "simulado": 5,
  "number": 8,
  "statement": "Cascade Freight provides phone support only on weekdays from 08:00 to 18:00 in the America/Chicago time zone. The support manager wants case escalation rules and milestone timers to pause overnight and on weekends so agents are not penalized for time when the office is closed. What should the administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Set up Business Hours for the 08:00-18:00 weekday window and reference them in the escalation rule and entitlement milestones."
   },
   {
    "key": "b",
    "text": "Change the organization's default time zone in Company Information to America/Chicago."
   },
   {
    "key": "c",
    "text": "Create Login Hours that only allow agents to log in between 08:00 and 18:00."
   },
   {
    "key": "d",
    "text": "Build a flow that deactivates escalation rules every evening and reactivates them each morning."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Business Hours** define when support operates, and escalation rules and entitlement/milestone timers can be set to run only during Business Hours, so the clock pauses outside the defined window and on holidays. **Why the other options are incorrect:** (b) The org default time zone affects display defaults for new users, not whether timers pause after hours. (c) Login Hours restrict when a user can log in; they do not pause case timers or escalations. (d) A nightly flow to toggle rules is unnecessary, fragile, and not how escalation timing is meant to be controlled.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 9,
  "statement": "At NimbusHealth, each Patient__c record must belong to exactly one Clinic__c record, and when a clinic is deleted all of its patient records should be deleted automatically. The administrator also wants the clinic's sharing settings to control access to the patient records. Which relationship type should be used?",
  "options": [
   {
    "key": "a",
    "text": "Lookup relationship from Patient__c to Clinic__c"
   },
   {
    "key": "b",
    "text": "Master-Detail relationship with Clinic__c as the master"
   },
   {
    "key": "c",
    "text": "Hierarchical relationship on Patient__c"
   },
   {
    "key": "d",
    "text": "External lookup relationship to Clinic__c"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Master-Detail relationship** makes the detail record (Patient__c) tightly dependent on the master (Clinic__c): the detail is required to have a master, deleting the master **cascade-deletes the details**, and the detail inherits the master's **sharing and security settings**. This matches every requirement.\n\n**Why the other options are incorrect:**\n- **a** is wrong because a Lookup relationship is optional by default, does not cascade-delete, and does not share security from the parent.\n- **c** is wrong because a Hierarchical relationship is a special lookup available only on the User object, linking users to other users.\n- **d** is wrong because an external lookup relates a child to an external object whose data lives outside Salesforce, which is not the scenario described.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 10,
  "statement": "Lumina Travel wants to send a follow-up email to a Contact exactly 3 days after a related Case is closed, but only if the Case remains closed at that time. The administrator is building a record-triggered flow that runs when a Case is updated and its Status becomes 'Closed'. Which flow feature should be used to delay the email action by 3 days?",
  "options": [
   {
    "key": "a",
    "text": "A Scheduled Path configured to run 3 days after the Closed Date field value."
   },
   {
    "key": "b",
    "text": "A Pause element that waits for a platform event to fire after 3 days."
   },
   {
    "key": "c",
    "text": "A Loop element that iterates until 3 days have passed."
   },
   {
    "key": "d",
    "text": "A separate schedule-triggered flow that runs every 3 days on all Cases."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Scheduled Path** in a record-triggered flow lets you execute actions at a specific time relative to a date/time field on the record (or relative to when the flow runs). Configuring a scheduled path to run **3 days after the Closed Date** allows the email action to be delayed and placed on that path, and you can add entry conditions to re-check that the Case is still closed.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because a Pause element waits for an event or resume time but is more complex than needed; scheduled paths are the standard, purpose-built way to delay actions in record-triggered flows relative to a date field.\n- **c** is incorrect because a Loop iterates over a collection of records, not time—it cannot pause execution for days.\n- **d** is incorrect because a schedule-triggered flow running every 3 days on all Cases is inefficient and would not tie the delay precisely to each Case's closed date.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 11,
  "statement": "At Nimbus Travel Co., the administrator needs to update the Billing Country field on 12,000 existing Account records using the account's unique external ID that came from the legacy ERP system. The import file does not contain Salesforce record IDs. Which Data Loader operation should be used?",
  "options": [
   {
    "key": "a",
    "text": "Insert, matching on the external ID"
   },
   {
    "key": "b",
    "text": "Update, matching on the Billing Country"
   },
   {
    "key": "c",
    "text": "Upsert, using the external ID field as the match key"
   },
   {
    "key": "d",
    "text": "Export, then re-import with a Delete operation"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Upsert** using the external ID field as the match key is correct. Upsert combines insert and update: Salesforce uses the **external ID** to find matching records and updates them, or creates them if no match exists. Because the file lacks Salesforce record IDs but has a unique external ID, upsert is the right operation to update existing Accounts without the internal ID.\n\n**Why the other options are incorrect:**\n- (a) **Insert** only creates new records; it would duplicate the 12,000 Accounts rather than update them.\n- (b) **Update** requires the Salesforce record ID to identify records (it cannot match on an arbitrary field like Billing Country), and that ID is not in the file.\n- (d) **Delete** removes records and does not update field values; exporting and deleting would destroy data, not update Billing Country.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 12,
  "statement": "Brightline Software receives leads through a public form on its marketing website. Leadership wants new web leads automatically routed to the correct sales queue based on the country entered, and wants prospects to immediately receive a branded confirmation email after they submit the form. Which TWO Salesforce features should the administrator configure to meet these requirements? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Lead Assignment Rules with criteria based on the Country field"
   },
   {
    "key": "b",
    "text": "An Auto-Response Rule that sends an email template when leads match specified criteria"
   },
   {
    "key": "c",
    "text": "Escalation Rules tied to the Lead object's Country field"
   },
   {
    "key": "d",
    "text": "A validation rule that blocks leads without a Country value"
   },
   {
    "key": "e",
    "text": "Opportunity Path configured for the Lead lifecycle"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Lead Assignment Rules** evaluate incoming leads (including those from Web-to-Lead) against ordered rule entries and route each lead to the appropriate user or queue, so country-based routing is handled here. **Auto-Response Rules** send a templated email to the lead based on matching criteria, which delivers the immediate branded confirmation. Both are standard features designed for exactly this Web-to-Lead scenario.\n\n**Why the other options are incorrect:**\n- (c) Escalation Rules apply to Cases, not Leads, so they cannot route leads by country.\n- (d) A validation rule could enforce that Country is populated, but it does not route leads or send confirmation emails, so it does not meet either stated requirement.\n- (e) Opportunity Path (Sales Path) guides users through stages on records like Opportunities and Leads in the UI; it does not route records or send confirmation emails.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 13,
  "statement": "At Harborline Logistics, support cases that remain unresolved for more than 8 business hours must be reassigned to the senior support queue and an email must be sent to the support director. The administrator is concerned that configuring this will overwrite the Priority field on affected cases. What is the correct expectation of what a Case Escalation Rule does?",
  "options": [
   {
    "key": "a",
    "text": "It reassigns the case owner and/or sends notification emails, but does not change field values like Priority"
   },
   {
    "key": "b",
    "text": "It automatically raises the Priority field to High and notifies the owner"
   },
   {
    "key": "c",
    "text": "It closes the case and reopens a child case assigned to the queue"
   },
   {
    "key": "d",
    "text": "It changes the case Status to Escalated and recalculates the entitlement milestone"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Case Escalation Rule** fires when a case has been open beyond a defined age and performs escalation actions: it can **reassign the case to a new owner (user or queue)** and **send escalation notification emails**. It does not modify data fields on the case such as Priority or Status (aside from marking the case as escalated on the activity/field flag). So the administrator's concern is unfounded, the Priority field is not overwritten. **Why the other options are incorrect:** (b) Escalation rules do not set the Priority field value. (c) Escalation rules never close the original case or spawn child cases. (d) Escalation rules do not change the Status field to a custom value or recalculate entitlement milestones; milestones are driven by the Entitlement Process, a separate feature.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 14,
  "statement": "A Lightning Experience administrator at Brightfern Logistics wants the Chatter feed on the Opportunity record page to automatically post an update whenever the Stage or Amount changes, so the team can see these changes directly in the record's feed. Which feature must the administrator enable and configure?",
  "options": [
   {
    "key": "a",
    "text": "Feed Tracking for the Opportunity object, selecting the Stage and Amount fields"
   },
   {
    "key": "b",
    "text": "A Chatter public group that the whole sales team follows"
   },
   {
    "key": "c",
    "text": "Email notifications on the Opportunity object for Stage and Amount"
   },
   {
    "key": "d",
    "text": "An Activity Timeline filter on the Opportunity record page"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Feed Tracking** is the feature that posts automatic updates to a record's Chatter feed when tracked fields change. The admin enables Feed Tracking on the Opportunity object and selects which fields to track (up to 20 per object), so changes to Stage and Amount generate feed posts on the record.\n\n**Why the other options are incorrect:**\n- (b) is wrong because a Chatter group is a space for people to collaborate; following a group does not cause field-level changes on a record to post to that record's feed.\n- (c) is wrong because email notifications are not a native \"on field change\" setting configured this way, and even if built with automation they would send email rather than post updates into the record's Chatter feed.\n- (d) is wrong because the Activity Timeline displays tasks, events, emails, and logged calls, not automatic posts about field value changes; filtering it does not create those updates.",
  "module": "productivity"
 },
 {
  "simulado": 5,
  "number": 15,
  "statement": "At Larkspur Media, a new group of marketing coordinators needs the combined access of three existing permission sets, but one of those permission sets grants \"Export Reports,\" which must NOT apply to this group. The administrator wants a reusable, maintainable way to assign the bundle while suppressing that single permission. What should the administrator do?",
  "options": [
   {
    "key": "a",
    "text": "Create a permission set group that includes the three permission sets, then add a muting permission set that mutes the Export Reports permission."
   },
   {
    "key": "b",
    "text": "Clone the permission set that grants Export Reports, remove the permission, and assign the clone individually."
   },
   {
    "key": "c",
    "text": "Assign the three permission sets, then edit the coordinators' profile to remove Export Reports."
   },
   {
    "key": "d",
    "text": "Create a restriction rule that blocks Export Reports for the marketing coordinators."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **permission set group** bundles multiple permission sets for a group of users, and a **muting permission set** within that group suppresses specific permissions that would otherwise be granted, without altering the underlying permission sets. This is the maintainable, reusable approach. **Why the other options are incorrect:** (b) Cloning creates a divergent copy that must be maintained separately and defeats reuse. (c) Removing a permission on the profile does not override a permission granted by a permission set, because permissions are additive (the most permissive wins). (d) Restriction rules control which RECORDS a user can access for an object, not feature permissions like exporting reports.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 16,
  "statement": "GreenLeaf University needs to model a many-to-many relationship between Course__c and Student__c so that one course has many students and one student takes many courses. The administrator creates a junction object called Enrollment__c. How should the two relationships on the junction object be configured?",
  "options": [
   {
    "key": "a",
    "text": "Two Lookup relationships, one to Course__c and one to Student__c"
   },
   {
    "key": "b",
    "text": "Two Master-Detail relationships, one to Course__c and one to Student__c"
   },
   {
    "key": "c",
    "text": "One Master-Detail relationship to Course__c and one Hierarchical relationship to Student__c"
   },
   {
    "key": "d",
    "text": "One Master-Detail relationship to Course__c and one External Lookup to Student__c"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **junction object** implements a many-to-many relationship by having **two Master-Detail relationships**, each pointing to one of the two objects being related. The first master-detail created becomes the primary master and controls the detail's record ownership and sharing.\n\n**Why the other options are incorrect:**\n- **a** is wrong because two lookups do not create a true many-to-many junction with cascade behavior and are not the standard approach for the exam's definition of a junction object.\n- **c** is wrong because Hierarchical relationships exist only on the User object and cannot be used on a custom junction object.\n- **d** is wrong because an External Lookup points to an external object, which is not appropriate for relating two standard/custom Salesforce objects in a junction.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 17,
  "statement": "At Cascade Outfitters, a business rule requires that whenever the Opportunity Stage is set to 'Closed Won', the Description field must not be empty. If a user tries to save a Closed Won Opportunity with a blank Description, the save should be blocked and an error message shown next to the field. Which tool is the most appropriate and declarative choice?",
  "options": [
   {
    "key": "a",
    "text": "A Validation Rule using ISPICKVAL and ISBLANK functions."
   },
   {
    "key": "b",
    "text": "An after-save record-triggered flow that displays an error screen."
   },
   {
    "key": "c",
    "text": "An Approval Process with rejection criteria."
   },
   {
    "key": "d",
    "text": "A scheduled-triggered flow that checks Opportunities daily."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Validation Rule** is the correct declarative tool to enforce data quality by blocking a save when a condition is not met. The formula `AND(ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Description))` evaluates to TRUE when the record is invalid, triggering the error message and preventing the save.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because an after-save flow runs after the record is committed, and while flows can throw errors, validation rules are the standard, lighter-weight tool for required-when-conditional field enforcement. Screen elements also cannot be used in a record-triggered flow.\n- **c** is incorrect because an Approval Process routes records for approval; it does not block a save based on a blank field.\n- **d** is incorrect because a scheduled flow runs on a schedule and cannot prevent a save in real time.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 18,
  "statement": "The compliance team at Harborview Financial wants an automated, native Salesforce backup of all their data every month, delivered as a set of downloadable CSV files that includes attachments and content. They do not want to install any external application. Which feature should the administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Data Loader scheduled export via the CLI"
   },
   {
    "key": "b",
    "text": "Data Export Service, scheduling a monthly export"
   },
   {
    "key": "c",
    "text": "A Weekly report subscription emailed to the compliance team"
   },
   {
    "key": "d",
    "text": "A Dashboard subscription with a static running user"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Data Export Service** is the native, built-in Salesforce feature (Setup > Data Export) that generates backup files as CSVs and can be scheduled to run on a **weekly or monthly** basis, with the option to include attachments, documents, and Salesforce CRM Content. It requires no external tool, which matches the requirement exactly.\n\n**Why the other options are incorrect:**\n- (a) **Data Loader** is an external client application that must be installed, violating the \"no external application\" requirement.\n- (c) A **report subscription** sends a single report's results, not a full backup of all data, and cannot include attachments or content files.\n- (d) A **dashboard subscription** delivers dashboard refresh notifications, not data backups.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 19,
  "statement": "The marketing team at Vantage Fitness runs a national brand campaign that contains several regional sub-campaigns, each of which has its own smaller tactics beneath it. An executive wants a single rolled-up view of total opportunities and revenue influenced across the entire structure. Which Salesforce capability allows the parent campaign to display aggregated statistics from all campaigns below it?",
  "options": [
   {
    "key": "a",
    "text": "Campaign Hierarchy, which rolls up statistics from child campaigns to the parent"
   },
   {
    "key": "b",
    "text": "Campaign Members, which automatically summarize revenue to the parent record"
   },
   {
    "key": "c",
    "text": "Account Hierarchy applied to the Campaign object"
   },
   {
    "key": "d",
    "text": "Opportunity Splits configured across related campaigns"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Campaign Hierarchy** lets you associate campaigns through the Parent Campaign field and provides Hierarchy statistics fields (for example, Total Responses in Hierarchy and Total Value Opportunities in Hierarchy) that aggregate data from a parent campaign and all of its child campaigns, up to five levels. This gives the executive the single rolled-up view requested.\n\n**Why the other options are incorrect:**\n- (b) Campaign Members link individual leads/contacts to a campaign and track their status; they do not roll revenue up to a parent campaign.\n- (c) Account Hierarchy visualizes parent-child relationships between Accounts, not Campaigns, and does not aggregate campaign statistics.\n- (d) Opportunity Splits distribute credit for an opportunity's revenue among team members; they are unrelated to aggregating campaign statistics across a hierarchy.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 20,
  "statement": "Cedar Peak Software offers three support plans: Bronze, Silver, and Gold. Gold customers are guaranteed a first response within 1 hour and a resolution within 24 hours, with timers that must pause during non-business hours and trigger reminders as deadlines approach. Which combination of features should the administrator use to enforce and track these service-level commitments?",
  "options": [
   {
    "key": "a",
    "text": "Assignment Rules with Business Hours and workflow email alerts"
   },
   {
    "key": "b",
    "text": "Entitlements with an Entitlement Process containing Milestones, plus Business Hours and Milestone Actions"
   },
   {
    "key": "c",
    "text": "Case Teams with escalation rules set to 1 and 24 hours"
   },
   {
    "key": "d",
    "text": "Omni-Channel skills-based routing with capacity limits per plan"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Entitlements** verify that a customer is eligible for support. An **Entitlement Process** defines the timeline, including one or more **Milestones** (such as First Response and Resolution Time) that represent required steps with target times. **Business Hours** make the milestone timers pause outside working hours, and **Milestone Actions** (warning, success, violation) can send reminder emails as deadlines approach. Together these model and track an SLA. **Why the other options are incorrect:** (a) Assignment Rules route cases to owners; they cannot track response or resolution time targets. (c) Case Teams define groups of users collaborating on a case and have no timing mechanism; escalation rules reassign/notify but do not track dual SLA milestones. (d) Omni-Channel routes work to agents by capacity or skill and does not measure or enforce SLA target times.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 21,
  "statement": "A sales manager at Cedarline Software created a list view on the Opportunity object that filters to \"My open opportunities\" and wants to drag opportunities between stages visually while seeing the total Amount rolled up per stage column. Which Lightning Experience feature delivers this, and what is a key requirement for it to work on this list view?",
  "options": [
   {
    "key": "a",
    "text": "Kanban view, which requires the list view to be based on an object that supports Kanban and to include a picklist or status-type grouping field"
   },
   {
    "key": "b",
    "text": "Split View, which requires the list view to be pinned as the default"
   },
   {
    "key": "c",
    "text": "Path, which requires Chatter Feed Tracking to be enabled first"
   },
   {
    "key": "d",
    "text": "The Activity Timeline, which requires the Amount field to be added to the compact layout"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Kanban view** lets users visualize a list view as columns and drag records between stages or statuses, and it can display summary values (such as the sum of Amount) per column. To group the board, Kanban requires a grouping field such as a picklist (for example, Opportunity Stage), so the list view must be on a supported object with an appropriate grouping field.\n\n**Why the other options are incorrect:**\n- (b) is wrong because Split View shows a list alongside a record pane for quick navigation; it does not provide drag-and-drop columns or per-column amount rollups.\n- (c) is wrong because Path guides users through stages on a record's page via a visual bar, not by dragging records across columns in a list view, and it does not depend on Feed Tracking.\n- (d) is wrong because the Activity Timeline shows activities on a record, not a draggable multi-column board of records grouped by stage.",
  "module": "productivity"
 },
 {
  "simulado": 5,
  "number": 22,
  "statement": "Ironwood Realty wants the most restrictive baseline for the custom object Listing__c: by default, users should only see Listing records they own, and selective access will be opened up later through other mechanisms. What should the administrator set first?",
  "options": [
   {
    "key": "a",
    "text": "Set the Organization-Wide Default for Listing__c to Private."
   },
   {
    "key": "b",
    "text": "Set the Organization-Wide Default for Listing__c to Public Read Only."
   },
   {
    "key": "c",
    "text": "Remove the Read permission for Listing__c from all profiles."
   },
   {
    "key": "d",
    "text": "Create a sharing rule that shares Listings only with owners."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Organization-Wide Defaults (OWD)** set the baseline level of record access, and **Private** means users can access only the records they own (plus records shared up the role hierarchy or via other sharing). OWD is the correct foundation to lock access down before selectively opening it. **Why the other options are incorrect:** (b) Public Read Only lets everyone view all records, which is the opposite of the restrictive baseline requested. (c) Removing object Read permission denies the object entirely rather than limiting record visibility to owned records. (d) A sharing rule only grants additional access; it cannot restrict the baseline, and sharing records \"only with owners\" is meaningless since owners already have access.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 23,
  "statement": "An administrator at PeakVentures wants a field on the Account record that automatically displays the total value of all related Opportunities with a Stage of 'Closed Won'. Which requirements must be true for a Roll-Up Summary field to accomplish this? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "The Roll-Up Summary field must be created on the master object of a Master-Detail relationship."
   },
   {
    "key": "b",
    "text": "The Roll-Up Summary field must be created on the detail (child) object."
   },
   {
    "key": "c",
    "text": "Account and Opportunity are already related by a standard Master-Detail-style relationship, so a Roll-Up Summary can be created on Account."
   },
   {
    "key": "d",
    "text": "A Roll-Up Summary works across any Lookup relationship without additional configuration."
   },
   {
    "key": "e",
    "text": "Filter criteria can be applied so that only Opportunities with Stage 'Closed Won' are included in the total."
   }
  ],
  "correct": [
   "c",
   "e"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A **Roll-Up Summary** field is created on the **master/parent** side of a master-detail relationship and summarizes (SUM, COUNT, MIN, MAX) values from the detail records. The Account-to-Opportunity relationship behaves like a master-detail for roll-up purposes, so you can build the field on **Account** (option c). You can also add **filter criteria** so only records that match a condition such as Stage equals 'Closed Won' are rolled up (option e).\n\n**Why the other options are incorrect:**\n- **a** states the direction incorrectly in this context by implying the field goes elsewhere; the specific correct placement for this scenario is captured by option c (on Account).\n- **b** is wrong because Roll-Up Summary fields go on the master/parent, not on the detail/child object.\n- **d** is wrong because standard Roll-Up Summary fields require a master-detail (or the Account-Opportunity equivalent) relationship, not an ordinary Lookup.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 24,
  "statement": "An administrator at Brightline Logistics is building an autolaunched flow that uses a Get Records element to retrieve an Account, followed by an Update Records element. During testing, the flow occasionally fails with an unhandled error when the DML operation hits a validation rule. What should the administrator add to gracefully handle these runtime errors?",
  "options": [
   {
    "key": "a",
    "text": "A Fault Connector from the Update Records element to a dedicated error-handling path."
   },
   {
    "key": "b",
    "text": "A Decision element that checks whether the error occurred."
   },
   {
    "key": "c",
    "text": "A Scheduled Path that retries the DML after one hour."
   },
   {
    "key": "d",
    "text": "A Loop element that repeats the Update Records element until it succeeds."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Fault Connector** (fault path) routes flow execution to a designated element when an element such as Get/Create/Update Records fails at runtime. This lets the administrator display or log a meaningful error, roll back gracefully, or notify someone, rather than letting the flow fail with an unhandled fault.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because a Decision element evaluates data values and cannot catch runtime DML faults; only a fault connector handles execution errors.\n- **c** is incorrect because a Scheduled Path is used in record-triggered flows to run actions at a future time, not to retry failed DML in an autolaunched flow.\n- **d** is incorrect because a Loop iterates over a collection of records and cannot catch or retry a failed DML operation.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 25,
  "statement": "Cedar & Pine Realty is implementing Duplicate Rules to stop sales reps from creating duplicate Contacts. The administrator wants reps to still be able to save a record flagged as a potential duplicate, but wants a report of how often duplicates are created. Which combination correctly describes how Matching Rules and Duplicate Rules work together to meet this need? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "A Matching Rule defines the criteria used to identify which records are duplicates"
   },
   {
    "key": "b",
    "text": "The Duplicate Rule must be set to the Block action so reps cannot save at all"
   },
   {
    "key": "c",
    "text": "The Duplicate Rule's Alert action allows saving while still warning the user, and enabling the Report option logs duplicate record sets"
   },
   {
    "key": "d",
    "text": "Matching Rules automatically merge duplicate records when a match is found"
   },
   {
    "key": "e",
    "text": "A Matching Rule must be activated before the Duplicate Rule that references it can be activated"
   }
  ],
  "correct": [
   "a",
   "c"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Option (a)** is correct: a **Matching Rule** specifies the field comparison logic (exact/fuzzy) that determines whether two records are considered duplicates. **Option (c)** is correct: setting the Duplicate Rule action to **Alert** warns the user but still lets them save, and checking the **Report** option creates Duplicate Record Sets that can be reported on to measure how often duplicates occur. (Note: option (e) is a true statement about activation order, but the question asks which two describe how the rules work together to meet the stated need — alerting-with-save and reporting — so (a) and (c) are the best answers.)\n\n**Why the other options are incorrect:**\n- (b) The **Block** action prevents saving entirely, contradicting the requirement that reps still be able to save flagged records.\n- (d) **Matching Rules** only identify potential duplicates; they never automatically merge records.\n- (e) While a matching rule must indeed be active, this describes a setup dependency, not how the rules meet the business need of alerting and reporting.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 26,
  "statement": "At Cedarpoint Consulting, the VP of Sales wants to credit the primary sales rep with 100% of each opportunity's amount while also giving a sales engineer credit for the same opportunities to measure their contribution, without reducing the rep's credited amount. Which Opportunity Splits configuration meets this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Use revenue splits for both the rep and the sales engineer so the total always equals 100%."
   },
   {
    "key": "b",
    "text": "Use a revenue split for the rep and an overlay split for the sales engineer."
   },
   {
    "key": "c",
    "text": "Use overlay splits for both the rep and the sales engineer."
   },
   {
    "key": "d",
    "text": "Use Opportunity Contact Roles instead of splits to credit the sales engineer."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Revenue splits** must total 100% of the opportunity amount and are typically given to team members directly responsible for the revenue, so the primary rep receives a 100% revenue split. **Overlay splits** can total any percentage (including more than 100%) and are used to credit supporting team members, such as sales engineers, without reducing the revenue credited to others. Combining a revenue split for the rep with an overlay split for the engineer satisfies both goals.\n\n**Why the other options are incorrect:**\n- (a) Revenue splits for both would force the two shares to sum to 100%, reducing the rep's credited amount below 100%.\n- (c) Overlay splits for both would leave no revenue split assigned, and the rep should hold the 100% revenue credit.\n- (d) Opportunity Contact Roles identify the roles of contacts (people external to your company) on an opportunity; they do not credit internal team members with amounts.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 27,
  "statement": "The administrator at Willowfield Telecom is setting up case routing. When a new case is created, the system should immediately send the customer a tailored acknowledgement email: product-related cases get a product template, and billing cases get a billing template. Which feature evaluates the case and sends the matching template, and what determines which rule entry is used?",
  "options": [
   {
    "key": "a",
    "text": "Assignment Rule; the last matching entry is applied"
   },
   {
    "key": "b",
    "text": "Auto-Response Rule; the first matching rule entry determines the template sent"
   },
   {
    "key": "c",
    "text": "Escalation Rule; all matching entries fire in sequence"
   },
   {
    "key": "d",
    "text": "Workflow Rule; entries are evaluated in random order"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "An **Auto-Response Rule** sends an automatic email to the contact when a case is created, using an email template. A rule can contain multiple entries with different criteria and templates; Salesforce evaluates the entries in order and applies the **first entry whose conditions the case matches**, then stops. This lets product cases receive the product template and billing cases the billing template. **Why the other options are incorrect:** (a) Assignment Rules route case ownership and use the first matching entry, but they do not send acknowledgement emails to customers. (c) Escalation Rules reassign and notify on aging cases; they do not send a creation-time acknowledgement, and they use the first applicable entry, not all in sequence. (d) Workflow Rules do not evaluate entries in random order and are not the standard mechanism for case auto-acknowledgement based on first-match rule entries.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 28,
  "statement": "An administrator at Marisol Travel Co. is preparing the Salesforce mobile app experience for field reps. The reps need to quickly create a follow-up Task and log a call from a Contact record while on their phones. Which TWO statements about actions and the Salesforce mobile app are correct? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Quick Actions added to the \"Salesforce Mobile and Lightning Experience Actions\" section of a page layout appear in both the mobile app and Lightning Experience"
   },
   {
    "key": "b",
    "text": "A global quick action can be configured to let reps create a Task from almost anywhere in the mobile app"
   },
   {
    "key": "c",
    "text": "Actions in the \"Salesforce Mobile and Lightning Experience Actions\" section only work in the mobile app and are hidden in Lightning Experience on desktop"
   },
   {
    "key": "d",
    "text": "Reps must use the browser, not the mobile app, to log a call because Log a Call is unavailable on mobile"
   },
   {
    "key": "e",
    "text": "The only way to add actions to mobile is to enable Feed Tracking on the object"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Quick Actions placed in the \"Salesforce Mobile and Lightning Experience Actions\" section of a page layout surface in both the Salesforce mobile app and Lightning Experience** (option a), which is exactly why that unified section exists. **Global quick actions** (option b) are object-independent and can be invoked from many places, including the mobile action bar, making them ideal for letting reps create a Task from almost anywhere.\n\n**Why the other options are incorrect:**\n- (c) is wrong because the whole point of the \"Salesforce Mobile and Lightning Experience Actions\" section is that its actions work in both mobile and Lightning Experience, not mobile only.\n- (d) is wrong because Log a Call is a standard action fully available in the mobile app; reps do not need a browser for it.\n- (e) is wrong because Feed Tracking controls automatic feed posts on field changes and is unrelated to adding actions to mobile layouts.",
  "module": "productivity"
 },
 {
  "simulado": 5,
  "number": 29,
  "statement": "At Vireo Consulting, the OWD for Opportunity is Private. Two needs arise: (1) every Regional Manager must automatically see the Opportunities owned by the Sales Reps who report to them, and (2) all members of the \"Deal Desk\" public group must get Read/Write access to Opportunities where the Stage is \"Negotiation.\" Which two tools should the administrator use? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Role Hierarchy to give Regional Managers access to records owned by subordinate Sales Reps."
   },
   {
    "key": "b",
    "text": "A criteria-based sharing rule granting the Deal Desk group Read/Write access to Opportunities where Stage equals Negotiation."
   },
   {
    "key": "c",
    "text": "Manual Sharing on each Negotiation-stage Opportunity record for every Deal Desk member."
   },
   {
    "key": "d",
    "text": "Change the Opportunity OWD to Public Read/Write."
   },
   {
    "key": "e",
    "text": "A restriction rule that limits Regional Managers to records owned by their Sales Reps."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "The **Role Hierarchy** automatically grants users access to records owned by (or shared to) users below them in the hierarchy, which covers Regional Managers seeing their Sales Reps' Opportunities. A **criteria-based sharing rule** opens access to records that meet field conditions (Stage = Negotiation) for a group such as the Deal Desk, with a specified access level. **Why the other options are incorrect:** (c) Manual Sharing would require record-by-record action and does not scale or stay current as records change stage. (d) Public Read/Write would expose all Opportunities to everyone, defeating the Private baseline. (e) Restriction rules only further LIMIT access to records a user can already see; they never grant the new access the managers need.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 30,
  "statement": "SwiftParcel wants a field on the Contact object that displays the Account's industry so that reps don't have to click into the parent record. The value must always reflect the related Account and must not be editable. What is the best way to implement this?",
  "options": [
   {
    "key": "a",
    "text": "A cross-object formula field on Contact that references Account.Industry"
   },
   {
    "key": "b",
    "text": "A Roll-Up Summary field on Contact"
   },
   {
    "key": "c",
    "text": "A text field on Contact updated manually by reps"
   },
   {
    "key": "d",
    "text": "A global picklist shared between Account and Contact"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **cross-object formula field** can reference fields on a parent record through the relationship (for example Account.Industry from Contact). Formula fields are **read-only** and always recalculate to show the current parent value, satisfying both requirements.\n\n**Why the other options are incorrect:**\n- **b** is wrong because Roll-Up Summary fields aggregate child records on a master object; they do not pull a single value down from a parent, and Contact is the child of Account.\n- **c** is wrong because a manually updated text field is editable and quickly becomes stale, not reflecting the parent automatically.\n- **d** is wrong because a global value set standardizes picklist values across fields but does not copy or display a related record's value.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 31,
  "statement": "Meridian Finance has an Approval Process on the Expense_Report__c object. A submitter realizes they entered the wrong amount after submitting a report that is pending approval. The company wants submitters to be able to withdraw their own pending requests so they can correct and resubmit them. Which standard Approval Process capability allows this?",
  "options": [
   {
    "key": "a",
    "text": "Enabling the Recall feature so the submitter can recall the pending approval request."
   },
   {
    "key": "b",
    "text": "Configuring a Final Rejection action to reset the record."
   },
   {
    "key": "c",
    "text": "Adding the submitter as an approver in the first step."
   },
   {
    "key": "d",
    "text": "Reassigning the request to a queue the submitter owns."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Recall** feature (enabled via 'Allow submitters to recall approval requests' in the approval process settings) lets the original submitter (and administrators) withdraw a pending approval request. When recalled, the recall actions run and the record returns to an unlocked state so it can be edited and resubmitted.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because Final Rejection actions run when an approver rejects the request at the final step—they do not allow the submitter to proactively withdraw a pending request.\n- **c** is incorrect because adding the submitter as an approver would let them approve their own request, not recall it, and does not provide a withdrawal mechanism.\n- **d** is incorrect because reassigning to a queue changes who can act on the request but does not let the submitter withdraw it.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 32,
  "statement": "An administrator at Summit Gear needs a report that lists all Accounts, including those that do NOT have any related Opportunities, so leadership can identify accounts with no pipeline. The standard \"Accounts with Opportunities\" report type excludes accounts that have none. What should the administrator do?",
  "options": [
   {
    "key": "a",
    "text": "Create a Custom Report Type where Accounts are the primary object and Opportunities are related with the \"with or without\" (outer join) relationship"
   },
   {
    "key": "b",
    "text": "Add a cross filter \"Accounts without Opportunities\" to the standard Accounts with Opportunities report type"
   },
   {
    "key": "c",
    "text": "Use the standard report type and add a Bucket column to group accounts by pipeline"
   },
   {
    "key": "d",
    "text": "Change the report format from summary to matrix"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "Creating a **Custom Report Type** with Accounts as the primary object and Opportunities set to \"A records may or may not have related B records\" (the **\"with or without\"** / outer-join relationship) is correct. This report type includes every Account whether or not it has Opportunities, allowing leadership to see accounts with no pipeline.\n\n**Why the other options are incorrect:**\n- (b) The standard \"Accounts with Opportunities\" report type uses an inner join that already excludes account-less records; a cross filter operates on an existing report type's result set but cannot change its underlying inner-join relationship to show accounts that the report type never returns. The supported solution is a custom report type with the outer join.\n- (c) A **Bucket column** only categorizes records already in the report; it cannot add accounts the report type excludes.\n- (d) Changing the **report format** (summary vs matrix) changes layout only, not which records are returned.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 33,
  "statement": "Northwind Instruments sells both physical devices and annual support plans. The administrator needs each product's price to vary depending on whether it is sold through the direct sales team or the partner channel, while keeping a single master list of all products. Which approach correctly uses Products and Price Books to achieve this?",
  "options": [
   {
    "key": "a",
    "text": "Create duplicate products, one set for direct sales and one for partners, each added to the standard price book."
   },
   {
    "key": "b",
    "text": "Add each product to the standard price book, then create two custom price books (Direct and Partner) and add the products with channel-specific list prices to each."
   },
   {
    "key": "c",
    "text": "Create one custom price book and enter two list prices on each product record."
   },
   {
    "key": "d",
    "text": "Use Opportunity Splits to apply different prices for the direct and partner channels."
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **standard price book** holds the master list of all products and their standard prices. To support different prices per sales channel, the administrator creates **custom price books** (one for Direct, one for Partner) and adds the same products to each with channel-specific list prices. A single product can appear in multiple price books at different prices, so there is no need to duplicate products. Sales users then select the appropriate price book on the opportunity.\n\n**Why the other options are incorrect:**\n- (a) Duplicating products fragments the master list and creates reporting and maintenance problems; the same product should be reused across price books instead.\n- (c) A product cannot store two list prices on a single record within one price book; list prices are defined per price book entry.\n- (d) Opportunity Splits allocate revenue credit among team members and have nothing to do with setting channel-specific pricing.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 34,
  "statement": "Brightwater Bank routes support work through Omni-Channel. Mortgage inquiries require agents certified in lending, and the operations lead wants work pushed only to agents who have availability rather than piling onto anyone. Additionally, cases created by email that match no assignment rule entry must still land with a responsible owner. Which THREE statements correctly describe how to configure this? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Use Omni-Channel skills-based routing so mortgage work goes only to agents with the lending skill"
   },
   {
    "key": "b",
    "text": "Configure the agent capacity (via Presence Configuration / routing configuration) so work is routed based on available capacity"
   },
   {
    "key": "c",
    "text": "Set a Default Case Owner in Support Settings so cases that match no assignment rule entry are still owned"
   },
   {
    "key": "d",
    "text": "Set the Default Case Owner by adding a final 'catch-all' entry to the Auto-Response Rule"
   },
   {
    "key": "e",
    "text": "Rely on escalation rules to assign skills to agents in real time"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "**Skills-based routing** in Omni-Channel directs a work item only to agents who possess the required skill, so lending-certified agents receive mortgage inquiries (a). Omni-Channel **capacity-based routing**, set through the routing configuration and the agent's presence/capacity settings, pushes work only to agents who have remaining capacity rather than overloading one person (b). The **Default Case Owner** in Support Settings is the user or queue that receives a case when no assignment rule entry applies, ensuring ownership (c). **Why the other options are incorrect:** (d) The Default Case Owner is configured in Support Settings, not as an entry on an Auto-Response Rule, and auto-response rules only send emails. (e) Escalation rules reassign aging cases and notify; they do not assign skills to agents, and skills are defined as part of Omni-Channel/service setup, not in real time by escalation rules.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 35,
  "statement": "A rep at Novaleaf Consulting is drafting an email to a prospect in Lightning Experience and wants a reusable message that automatically inserts the recipient's first name and the related Account name when sent. Which combination correctly describes what the rep should use?",
  "options": [
   {
    "key": "a",
    "text": "A Lightning email template that includes merge fields, which pull values from the recipient and related records at send time"
   },
   {
    "key": "b",
    "text": "A Chatter post with @mentions, which notifies the recipient with their name filled in"
   },
   {
    "key": "c",
    "text": "A Note attached to the Contact, which auto-sends personalized text to the prospect"
   },
   {
    "key": "d",
    "text": "A public calendar invite, which merges the Account name into the event description"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Lightning email template with merge fields** is the correct tool: the template is reusable, and merge fields (such as the Contact's first name and the related Account name) are resolved dynamically from the record data when the email is sent, producing a personalized message without retyping.\n\n**Why the other options are incorrect:**\n- (b) is wrong because a Chatter post is internal collaboration, not an email to an external prospect, and @mentions notify Salesforce users rather than personalizing an outbound email.\n- (c) is wrong because Notes are for capturing information on records; they do not send email or perform merge-field personalization.\n- (d) is wrong because a public calendar is for sharing schedules/availability internally and does not send personalized marketing emails to prospects.",
  "module": "productivity"
 },
 {
  "simulado": 5,
  "number": 36,
  "statement": "Compliance at Sterling Bank requires that the Social Security Number field on the Applicant object remain fully hidden from the entire Call Center Agent profile on every page layout, report, list view, and API, while remaining visible to Underwriters. What should the administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Set Field-Level Security for the SSN field to not visible for the Call Center Agent profile."
   },
   {
    "key": "b",
    "text": "Remove the SSN field from the page layout assigned to Call Center Agents."
   },
   {
    "key": "c",
    "text": "Create a validation rule that blocks Call Center Agents from viewing the SSN."
   },
   {
    "key": "d",
    "text": "Set the Applicant OWD to Private so agents cannot see the SSN."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Field-Level Security (FLS)** controls field visibility and editability per profile/permission set and is enforced everywhere: page layouts, list views, reports, search, and the API. Hiding SSN via FLS for the Call Center Agent profile meets the compliance requirement while leaving it visible to Underwriters. **Why the other options are incorrect:** (b) Removing a field from a page layout only hides it on that layout; the field is still accessible via reports, list views, and API. (c) Validation rules enforce data-entry conditions on save; they cannot hide a field. (d) OWD controls record-level access to whole records, not visibility of an individual field.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 37,
  "statement": "At OrbitMedia, the administrator maintains the same 'Region' picklist values on several objects. Leadership wants a single master list of Region values that can be reused everywhere and updated in one place, and they want to prevent users from adding values via the API that are not in the list. Which two steps achieve this? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Create a Global Value Set and base each Region picklist field on it."
   },
   {
    "key": "b",
    "text": "Enable 'Restrict picklist to the values defined in the value set' on the picklist fields."
   },
   {
    "key": "c",
    "text": "Create a separate custom picklist on each object and copy the values manually."
   },
   {
    "key": "d",
    "text": "Convert the Region field to a Text field so any value is allowed."
   },
   {
    "key": "e",
    "text": "Create a Record Type for each Region value."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A **Global Value Set** is a master list of picklist values that can be shared by many picklist fields; updating the set updates every field that uses it (option a). Enabling **'Restrict picklist to the values defined in the value set'** blocks users and integrations from saving values not in the list, including through the API (option b).\n\n**Why the other options are incorrect:**\n- **c** is wrong because copying values manually to separate picklists creates duplication and defeats the single-source-of-truth goal.\n- **d** is wrong because converting to a Text field removes all value control, allowing any value, which is the opposite of the requirement.\n- **e** is wrong because Record Types control business processes and available picklist subsets per record, not a reusable master list of values.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 38,
  "statement": "An administrator at Aurora Health Systems needs an automation that runs once every night at 2:00 AM to find all Patient_Visit__c records with a Status of 'Pending Review' that are older than 30 days and update them to 'Expired'. No user interaction is involved. Which type of flow is designed for this requirement?",
  "options": [
   {
    "key": "a",
    "text": "A Schedule-Triggered Flow."
   },
   {
    "key": "b",
    "text": "A before-save Record-Triggered Flow."
   },
   {
    "key": "c",
    "text": "A Screen Flow."
   },
   {
    "key": "d",
    "text": "An after-save Record-Triggered Flow."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Schedule-Triggered Flow** runs automatically at a set time and frequency (e.g., nightly at 2:00 AM) and can be configured to run for a defined set of records matching filter conditions. This is exactly suited to batch-processing records like updating stale Patient_Visit__c records each night.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because a before-save record-triggered flow only runs when an individual record is created or updated, not on a time schedule.\n- **c** is incorrect because a Screen Flow requires a user to interact with it and is not scheduled or unattended.\n- **d** is incorrect because an after-save record-triggered flow also runs on record save events, not on a nightly schedule.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 39,
  "statement": "A sales operations analyst at Vertex Logistics built a summary report of Opportunities grouped by Stage. They want to display, for each Stage group, the percentage that each stage's total amount represents of the overall grand total amount. Which report feature should they use?",
  "options": [
   {
    "key": "a",
    "text": "A Row-Level Formula"
   },
   {
    "key": "b",
    "text": "A Bucket column"
   },
   {
    "key": "c",
    "text": "A Summary Formula using the PARENTGROUPVAL or RowCount functions at the grouping level"
   },
   {
    "key": "d",
    "text": "A cross filter"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Summary Formula** is correct. Summary formulas calculate on grouped (aggregate) values, and functions like **PARENTGROUPVAL** let you compare a group's subtotal against a higher-level grouping or the grand total—exactly what is needed to show each Stage's percentage of the overall amount. Summary formulas display at summary/grouping levels in summary and matrix reports.\n\n**Why the other options are incorrect:**\n- (a) A **Row-Level Formula** calculates a value for each individual detail row, not across grouped subtotals, so it cannot reference the grand total.\n- (b) A **Bucket column** only categorizes field values into buckets; it performs no percentage-of-total math.\n- (d) A **cross filter** filters records based on the presence/absence of related records; it does not compute percentages.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 40,
  "statement": "A customer service representative at Harborview Logistics works at a company that partners with several of Harborview's client accounts. The administrator needs this single contact to be associated with three different accounts so the contact appears in the related lists of all three, without creating duplicate contact records. Which feature should the administrator enable and use?",
  "options": [
   {
    "key": "a",
    "text": "Account Teams"
   },
   {
    "key": "b",
    "text": "Account Hierarchy"
   },
   {
    "key": "c",
    "text": "Contacts to Multiple Accounts"
   },
   {
    "key": "d",
    "text": "Opportunity Contact Roles"
   }
  ],
  "correct": [
   "c"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Contacts to Multiple Accounts** lets a single contact be related to more than one account through direct and indirect account relationships, without duplicating the contact record. Each contact still has one primary (direct) account, but can be linked to additional accounts, appearing in the Related Contacts list of each. This exactly matches the requirement.\n\n**Why the other options are incorrect:**\n- (a) Account Teams grant a group of users specific access to an account; they associate users (internal people), not contacts, with accounts.\n- (b) Account Hierarchy shows parent-child relationships between accounts and does not relate a contact to multiple accounts.\n- (d) Opportunity Contact Roles link contacts to opportunities and define their role in a deal, not a contact to multiple accounts.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 41,
  "statement": "A support agent at Grovemark Retail types the same three steps over and over when handling return requests: setting the case Status to 'In Progress', inserting a quick-text acknowledgement into the email composer, and selecting the 'Returns' email template. The team lead wants to let agents run all these UI actions in the Service Console with a single click. Which tool should the administrator create?",
  "options": [
   {
    "key": "a",
    "text": "A Macro that performs the repetitive console actions in one click"
   },
   {
    "key": "b",
    "text": "An Assignment Rule that updates Status and sends the template"
   },
   {
    "key": "c",
    "text": "An Entitlement Process with a milestone that inserts quick text"
   },
   {
    "key": "d",
    "text": "A Validation Rule that enforces the three steps"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Macro** automates repetitive, multi-step tasks that agents perform on records in the Lightning Service Console, such as updating a field, inserting quick text, and selecting an email template, so an agent can execute them all with a single click. This is exactly the use case described. **Why the other options are incorrect:** (b) Assignment Rules route case ownership; they cannot insert quick text in the composer or select a template as an agent-driven console action. (c) An Entitlement Process tracks SLA milestones and timelines; it does not perform console UI actions like inserting quick text on demand. (d) A Validation Rule blocks records that fail a condition from being saved; it does not perform actions or automate console steps.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 42,
  "statement": "Meridian Health has an Account OWD of Public Read/Write, but a new regulation requires that users in the \"Clinic Staff\" role be able to access ONLY Account records where the Region field equals their assigned region, even though the broad OWD and sharing rules would otherwise grant them more. What should the administrator use to enforce this tighter limit?",
  "options": [
   {
    "key": "a",
    "text": "A restriction rule on Account for the Clinic Staff role that filters records to those matching the user's region."
   },
   {
    "key": "b",
    "text": "Lower the Account OWD to Private for the whole organization."
   },
   {
    "key": "c",
    "text": "A sharing rule that shares only matching-region Accounts with Clinic Staff."
   },
   {
    "key": "d",
    "text": "Field-Level Security that hides the Region field from Clinic Staff."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Restriction rules** narrow the records a specified set of users can access to only those meeting the rule's criteria, even when OWD, role hierarchy, or sharing rules would otherwise grant broader access. They are the correct tool to enforce an exception that is MORE restrictive than the baseline. **Why the other options are incorrect:** (b) Lowering the org-wide OWD to Private affects all users and breaks the broad access everyone else requires. (c) Sharing rules only ADD access; they cannot remove access already granted by a Public Read/Write OWD. (d) Hiding the Region field does not prevent access to the Account records themselves.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 43,
  "statement": "LumaFinance wants the 'Product Line' picklist to filter the available 'Product Model' values on the same record, so that choosing 'Laptops' only shows laptop models. Which Object Manager feature should the administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Field Dependency with Product Line as the controlling field and Product Model as the dependent field"
   },
   {
    "key": "b",
    "text": "A Validation Rule comparing the two fields"
   },
   {
    "key": "c",
    "text": "A Roll-Up Summary field on Product Line"
   },
   {
    "key": "d",
    "text": "A Record Type for each Product Line"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Field Dependency** links a **controlling field** (Product Line) to a **dependent picklist** (Product Model), so the values shown in the dependent field change based on the controlling field's selection. This is exactly the filtering behavior described.\n\n**Why the other options are incorrect:**\n- **b** is wrong because a Validation Rule can block an invalid combination on save but does not dynamically filter the picklist choices as the user selects.\n- **c** is wrong because a Roll-Up Summary aggregates child records and has nothing to do with filtering picklist values.\n- **d** is wrong because Record Types determine which picklist values are available per record type but do not create the dynamic controlling/dependent filtering between two picklists on the same record.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 44,
  "statement": "Pinecrest Realty uses an Approval Process on the Property_Listing__c object. Management wants listings over $1,000,000 to require approval, but all other listings should skip the process entirely. Where in the Approval Process should the administrator define the $1,000,000 threshold so that only qualifying records can be submitted into the process?",
  "options": [
   {
    "key": "a",
    "text": "In the Entry Criteria of the approval process."
   },
   {
    "key": "b",
    "text": "In the Final Approval Actions."
   },
   {
    "key": "c",
    "text": "In a Validation Rule on the record."
   },
   {
    "key": "d",
    "text": "In the Record Lock settings of the approval step."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Entry Criteria** of an approval process determines which records are eligible to enter the process. Setting entry criteria such as `Amount > 1000000` ensures that only listings over $1,000,000 can be submitted for approval; records not meeting the criteria cannot be submitted.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because Final Approval Actions run after a record is fully approved and have nothing to do with controlling which records enter the process.\n- **c** is incorrect because a Validation Rule blocks saves based on conditions but does not control approval process entry eligibility.\n- **d** is incorrect because Record Lock settings control whether a record can be edited while in the process, not which records can enter it.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 45,
  "statement": "Meridian Health has a dashboard that executive VPs across different regions view. Leadership requires that each VP, when opening the dashboard, sees only the data for their own region based on their personal access, without the administrator building a separate dashboard per region. Which dashboard setting meets this requirement?",
  "options": [
   {
    "key": "a",
    "text": "Set the dashboard to use a static running user set to a system administrator"
   },
   {
    "key": "b",
    "text": "Configure the dashboard as a dynamic dashboard, where it runs as the logged-in user viewing it"
   },
   {
    "key": "c",
    "text": "Add a dashboard filter for Region and ask each VP to select their own filter value"
   },
   {
    "key": "d",
    "text": "Schedule a dashboard subscription for each VP"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **dynamic dashboard** is correct. A dynamic dashboard runs with the security context of **\"The dashboard viewer\"** (the logged-in user), so each VP automatically sees only the data their own sharing access allows—regional data in this case—from a single dashboard, eliminating the need for one dashboard per region.\n\n**Why the other options are incorrect:**\n- (a) A **static running user** shows every viewer the same data as that fixed user; setting it to an admin would expose all regions to everyone.\n- (c) A **dashboard filter** lets users narrow results, but it does not enforce security—any VP could pick any region, and filters do not restrict access by the viewer's own permissions.\n- (d) A **subscription** schedules refresh/delivery; it does not control whose data context the dashboard runs under.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 46,
  "statement": "The sales leadership at Summit Payments wants to improve forecast accuracy and rep productivity on the Opportunity object. They ask the administrator to configure capabilities so that: (1) reps see guidance and key fields for each stage directly on the opportunity, (2) managers are notified by email when an opportunity above a defined amount reaches a late stage, and (3) each rep is held to a monthly revenue target they are measured against in the forecast. Which THREE features should the administrator use to meet these needs, one per requirement? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Sales Path (Opportunity Path) with guidance for success on each stage"
   },
   {
    "key": "b",
    "text": "Big Deal Alerts configured for a minimum amount and probability"
   },
   {
    "key": "c",
    "text": "Forecasting Quotas assigned to each rep"
   },
   {
    "key": "d",
    "text": "Lead Assignment Rules based on opportunity amount"
   },
   {
    "key": "e",
    "text": "Campaign Hierarchy statistics on the opportunity"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "**Sales Path (Opportunity Path)** displays the stages along the top of the record and lets admins add Guidance for Success and key fields for each stage, satisfying requirement 1. **Big Deal Alerts** send an automatic email notification when an opportunity meets a defined amount and probability threshold, which covers notifying managers about large, late-stage deals (requirement 2). **Forecasting Quotas** let admins assign each rep a periodic revenue target that appears in the forecast for comparison against projected amounts, meeting requirement 3.\n\n**Why the other options are incorrect:**\n- (d) Lead Assignment Rules route Leads, not Opportunities, and are unrelated to forecasting, guidance, or deal alerts.\n- (e) Campaign Hierarchy statistics aggregate campaign data; they do not provide stage guidance, large-deal alerts, or rep quotas.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 47,
  "statement": "Marsh & Vale Consulting wants to reduce repetitive case volume by letting both customers and agents find answers in a centralized article repository. Agents should also be able to attach relevant articles to a case while working it. Which TWO statements about Salesforce Knowledge are correct? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Knowledge lets agents search and attach articles to cases to help resolve them"
   },
   {
    "key": "b",
    "text": "Data categories can be used to organize and control access to articles"
   },
   {
    "key": "c",
    "text": "Knowledge articles automatically become the Default Case Owner for unrouted cases"
   },
   {
    "key": "d",
    "text": "Each Knowledge article can be assigned as a case escalation target"
   },
   {
    "key": "e",
    "text": "Publishing an article automatically closes all cases that reference it"
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Salesforce Knowledge** is a knowledge base where articles can be created, published, and searched. Agents can **search for and attach articles to a case** from the console to help resolve it (a). **Data categories** organize articles into logical groups and can be used together with category group visibility to **control which users can see which articles** (b). **Why the other options are incorrect:** (c) The Default Case Owner is a Support Settings value (a user or queue); Knowledge articles play no role in case ownership routing. (d) Escalation targets are users or queues defined in escalation rules, not Knowledge articles. (e) Publishing an article makes it available in the knowledge base; it does not close any cases automatically.",
  "module": "service"
 },
 {
  "simulado": 5,
  "number": 48,
  "statement": "Granite Logistics wants its back-office team to be able to log in to Salesforce only from the company's office network, identified by a fixed public IP range. Any login attempt from outside that range for those users must be blocked entirely (not merely challenged). What should the administrator configure?",
  "options": [
   {
    "key": "a",
    "text": "Set Login IP Ranges on the back-office team's profile to the office IP range."
   },
   {
    "key": "b",
    "text": "Add the office IP range to the org's Trusted IP Ranges (Network Access)."
   },
   {
    "key": "c",
    "text": "Set Login Hours on the profile to restrict when users can log in."
   },
   {
    "key": "d",
    "text": "Enable a session setting to lock sessions to the IP address from which they originated."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Login IP Ranges** defined on a profile restrict login so that users with that profile can ONLY log in from the specified IP addresses; attempts from outside are denied. This enforces the hard block requested. **Why the other options are incorrect:** (b) Trusted IP Ranges (Network Access) only exempt logins from identity verification/challenge when inside the range; logins from outside are still allowed (just challenged), so they do not block access. (c) Login Hours restrict the times of day a user may log in, not the source IP. (d) Locking sessions to the originating IP affects an existing session's continuity, not where a user is allowed to initiate login.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 49,
  "statement": "CedarBank uses the Case object for both 'Retail Support' and 'Wealth Management' processes. Each process needs a different set of picklist values for the Status field, a different page layout, and a different set of stages in its support process. What should the administrator configure to support both business processes on the same object?",
  "options": [
   {
    "key": "a",
    "text": "Two separate custom objects, one per process"
   },
   {
    "key": "b",
    "text": "Record Types, each assigned a page layout and its own picklist value subsets"
   },
   {
    "key": "c",
    "text": "A single page layout with all fields and all picklist values"
   },
   {
    "key": "d",
    "text": "Field-Level Security to hide fields per profile"
   }
  ],
  "correct": [
   "b"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Record Types** let you offer different business processes, picklist value subsets, and page layouts to different users on the same object. The administrator can create one record type per process, assign each a page layout, and control which Status values appear for each, which covers all stated needs.\n\n**Why the other options are incorrect:**\n- **a** is wrong because splitting into two objects is unnecessary and fragments reporting and automation when a single object with record types does the job.\n- **c** is wrong because a single layout with all values cannot present different picklist subsets or different layouts per process.\n- **d** is wrong because Field-Level Security controls field access but cannot provide different picklist value subsets or different support processes.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 50,
  "statement": "An administrator at Vertex Manufacturing is designing a record-triggered flow on the Order object that must, for each line item related to the order, check whether the quantity exceeds available inventory and build a collection of flagged line items. Which combination of flow elements should be used to process each related line item individually? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "A Loop element to iterate over the collection of related line item records."
   },
   {
    "key": "b",
    "text": "A Decision element inside the loop to check the quantity against available inventory."
   },
   {
    "key": "c",
    "text": "A single Update Records element placed inside the loop to commit each change immediately."
   },
   {
    "key": "d",
    "text": "A Scheduled Path to process the line items the next day."
   },
   {
    "key": "e",
    "text": "A Pause element to stop processing between each line item."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "To process each related record individually, you use a **Loop element** to iterate over the collection of line item records, and inside the loop a **Decision element** to evaluate each item's quantity against available inventory and route logic accordingly (e.g., adding it to a flagged collection).\n\n**Why the other options are incorrect:**\n- **c** is incorrect because placing an Update/DML element inside a loop is a well-known anti-pattern that can quickly hit governor limits; DML should be performed once after the loop on the whole collection.\n- **d** is incorrect because a Scheduled Path delays actions to a future time and is unrelated to iterating over related records in real time.\n- **e** is incorrect because a Pause element suspends the flow waiting for a resume condition and is not used to iterate over a collection.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 51,
  "statement": "After a large data migration, the administrator at Orchard Supply discovered 40,000 obsolete Lead records that were never converted and must be permanently removed. The administrator wants a tool that can delete these records and also send them to the Recycle Bin so they can be restored if needed. Which approaches are valid for mass-deleting these records? (Select 3)",
  "options": [
   {
    "key": "a",
    "text": "Use Data Loader's Delete operation with a CSV of the record IDs"
   },
   {
    "key": "b",
    "text": "Use the Mass Delete Records tool in Setup for supported standard objects like Leads"
   },
   {
    "key": "c",
    "text": "Use Data Loader's Hard Delete operation, knowing it bypasses the Recycle Bin"
   },
   {
    "key": "d",
    "text": "Use the Data Export Service to remove the records on a weekly schedule"
   },
   {
    "key": "e",
    "text": "Use a Duplicate Rule set to Block to automatically delete the obsolete records"
   }
  ],
  "correct": [
   "a",
   "b",
   "c"
  ],
  "multi": true,
  "selectCount": 3,
  "explanation": "**Option (a)** is valid: Data Loader's **Delete** operation removes records (by ID) and sends them to the **Recycle Bin**, matching the restore requirement. **Option (b)** is valid: the native **Mass Delete Records** tool (Setup) deletes supported standard objects such as Leads, Accounts, Contacts, Cases, etc., and also routes them to the Recycle Bin. **Option (c)** is valid as a deletion approach: Data Loader's **Hard Delete** also mass-deletes the records; the question asks for valid mass-delete approaches, and hard delete is one—though it bypasses the Recycle Bin (no restore), which is a trade-off the admin must accept.\n\n**Why the other options are incorrect:**\n- (d) The **Data Export Service** only exports/backs up data; it cannot delete records.\n- (e) A **Duplicate Rule** set to Block prevents saving potential duplicates during record creation; it never deletes existing records.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 52,
  "statement": "At Rivermark Media, the administrator wants to grant three colleagues different levels of access to a strategic account: a sales engineer needs Read Only access, a renewals specialist needs Read/Write access, and the account owner remains unchanged. The access should apply only to this account and its related opportunities and cases, not to all accounts. Which feature should the administrator use?",
  "options": [
   {
    "key": "a",
    "text": "Account Teams, adding each colleague with a defined role and account access level"
   },
   {
    "key": "b",
    "text": "Contacts to Multiple Accounts to link the colleagues to the account"
   },
   {
    "key": "c",
    "text": "An Account Hierarchy that places the colleagues under the account"
   },
   {
    "key": "d",
    "text": "A sharing rule that opens all accounts to the two colleagues"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Account Teams** let the account owner (or admin) add specific users to an individual account, each with a team role and a defined access level (Read Only or Read/Write) to the account and, optionally, its related opportunities and cases. This grants targeted, per-account access exactly as described without affecting other accounts.\n\n**Why the other options are incorrect:**\n- (b) Contacts to Multiple Accounts relates contacts (external people) to accounts; it does not grant internal users record access.\n- (c) Account Hierarchy shows parent-child relationships between accounts and does not grant users differentiated access, nor do colleagues belong 'under' an account.\n- (d) A sharing rule that opens all accounts would over-share, violating the requirement to limit access to just this one account, and would not easily provide per-user differing access levels for a single record.",
  "module": "sales"
 },
 {
  "simulado": 5,
  "number": 53,
  "statement": "Security leadership at Quillfeather Insurance wants to strengthen authentication and session handling org-wide. They want (1) all users to satisfy multi-factor authentication when logging in to the Salesforce UI, and (2) users to be automatically logged out after a defined period of inactivity. Which two actions should the administrator take? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Require multi-factor authentication (MFA) for user interface logins (for example, via a permission set or the MFA requirement) so users verify with a second factor."
   },
   {
    "key": "b",
    "text": "Configure the session timeout value in Session Settings so inactive sessions expire after the chosen period."
   },
   {
    "key": "c",
    "text": "Add every user's home IP address to Login IP Ranges."
   },
   {
    "key": "d",
    "text": "Shorten the password expiration interval in Password Policies to force frequent password changes."
   },
   {
    "key": "e",
    "text": "Set restrictive Login Hours so users cannot log in overnight."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "Requiring **multi-factor authentication (MFA)** adds a verification step beyond the password for UI logins, directly satisfying requirement (1). The **session timeout** value in **Session Settings** automatically ends a session after a defined period of inactivity, satisfying requirement (2). **Why the other options are incorrect:** (c) Managing individual home IPs via Login IP Ranges is impractical and addresses network source, not MFA or inactivity timeout. (d) Password expiration in Password Policies strengthens passwords but is neither MFA nor an inactivity timeout. (e) Login Hours control permitted login times, not second-factor verification or idle-session expiration.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 54,
  "statement": "An administrator at TideWorks wants the Account record's highlights panel at the top of the Lightning record page to show Account Name, Phone, Industry, and Owner, and wants these same key fields to appear when the record is viewed on the Salesforce mobile app. Which tool should be used?",
  "options": [
   {
    "key": "a",
    "text": "Compact Layout"
   },
   {
    "key": "b",
    "text": "Page Layout field section"
   },
   {
    "key": "c",
    "text": "Search Layout"
   },
   {
    "key": "d",
    "text": "List View columns"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A **Compact Layout** controls which fields appear in the **highlights panel** at the top of a Lightning record page and the key fields shown in the Salesforce mobile app header. It is the correct tool for choosing the handful of fields displayed prominently.\n\n**Why the other options are incorrect:**\n- **b** is wrong because the Page Layout controls the overall arrangement of fields and related lists on the detail area, not the highlights panel fields.\n- **c** is wrong because Search Layouts define columns in search results and lookup dialogs, not the record highlights.\n- **d** is wrong because List View columns define the fields shown in list views, which is unrelated to the record's highlights panel or mobile header.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 55,
  "statement": "A Salesforce administrator at Coastline Insurance is evaluating which declarative tools fit different requirements. For which of the following scenarios is a Record-Triggered Flow the most appropriate tool? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Automatically creating a related Task record whenever a Claim is submitted."
   },
   {
    "key": "b",
    "text": "Updating a field on a child Policy record when the parent Account's status changes."
   },
   {
    "key": "c",
    "text": "Preventing a user from saving a record when two date fields are in the wrong order."
   },
   {
    "key": "d",
    "text": "Routing a high-value discount request to a manager for sign-off before it takes effect."
   },
   {
    "key": "e",
    "text": "Blocking a record save when a required text field is left blank for a specific record type."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "A **Record-Triggered Flow** is ideal for automating actions that occur in response to record changes—such as creating related records (a Task when a Claim is submitted) or updating related/child records (a Policy field when the Account status changes). These cross-object and record-creation actions are core use cases for flows.\n\n**Why the other options are incorrect:**\n- **c** is incorrect because preventing a save when two date fields are out of order is a classic **Validation Rule** use case, not a flow.\n- **d** is incorrect because routing a request to a manager for sign-off before it takes effect is the purpose of an **Approval Process**.\n- **e** is incorrect because blocking a save when a required field is blank for a record type is best handled by a **Validation Rule**.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 56,
  "statement": "A business analyst at Lakeside Manufacturing needs a single report that shows Cases and Opportunities for each Account side by side in separate blocks, each block with its own columns, filters, and groupings, sharing the common Account grouping. Which report format supports displaying multiple related report blocks together?",
  "options": [
   {
    "key": "a",
    "text": "Tabular format"
   },
   {
    "key": "b",
    "text": "Summary format"
   },
   {
    "key": "c",
    "text": "Matrix format"
   },
   {
    "key": "d",
    "text": "Joined format"
   }
  ],
  "correct": [
   "d"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Joined report** format is correct. A joined report lets you create multiple **report blocks**—each with its own report type, columns, filters, and groupings—displayed side by side and sharing common groupings (such as Account). This is the only format designed to combine data from different report types/objects in one report.\n\n**Why the other options are incorrect:**\n- (a) **Tabular** reports are simple row-and-column lists with no groupings or blocks.\n- (b) **Summary** reports support groupings and subtotals but only a single block from one report type.\n- (c) **Matrix** reports group data by both rows and columns but, like summary, use a single report type and cannot show separate blocks for Cases and Opportunities.",
  "module": "data"
 },
 {
  "simulado": 5,
  "number": 57,
  "statement": "Bluepeak Software is about to deploy Lightning components and wants a permanent, branded login URL like bluepeak.my.salesforce.com, which is also a prerequisite for several modern features and single sign-on. What should the administrator set up?",
  "options": [
   {
    "key": "a",
    "text": "Configure My Domain, register the subdomain, and deploy it to users."
   },
   {
    "key": "b",
    "text": "Create a Site in Experience Cloud with the desired URL."
   },
   {
    "key": "c",
    "text": "Update the organization name in Company Information to Bluepeak."
   },
   {
    "key": "d",
    "text": "Purchase a custom domain and point a CNAME record to login.salesforce.com."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**My Domain** gives the org a unique, branded subdomain (yourcompany.my.salesforce.com), enabling a custom login page, support for Lightning components, and SSO configuration. The workflow is to register the subdomain, test, and then deploy it to users. **Why the other options are incorrect:** (b) An Experience Cloud site creates a public/community site, not the org's internal login domain. (c) Changing the org name in Company Information is cosmetic and does not create a login URL. (d) Manually buying a domain and pointing a CNAME is not how Salesforce provisions the branded login host; My Domain is the supported feature.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 58,
  "statement": "At VistaRealty, an administrator is building a Lightning record page for Opportunity in the Lightning App Builder and wants the 'Discount Approval' component to appear only for users with the 'Sales Manager' profile and only when the viewport is a desktop. Which Lightning App Builder capability should be used?",
  "options": [
   {
    "key": "a",
    "text": "Component Visibility filters based on profile and form factor"
   },
   {
    "key": "b",
    "text": "Field-Level Security on the component"
   },
   {
    "key": "c",
    "text": "A separate page layout assignment"
   },
   {
    "key": "d",
    "text": "A sharing rule on the Opportunity object"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Component Visibility** in the Lightning App Builder lets you set filter conditions that show or hide a component based on criteria such as the user's profile, permissions, record field values, device **form factor** (desktop vs phone), and more. This matches the requirement to show the component only for a profile and only on desktop.\n\n**Why the other options are incorrect:**\n- **b** is wrong because Field-Level Security controls access to fields, not visibility of a component in App Builder, and cannot filter by form factor.\n- **c** is wrong because page layout assignment does not provide profile-plus-form-factor conditional visibility for an individual component on a Lightning page.\n- **d** is wrong because sharing rules control record access, not whether a component is displayed.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 59,
  "statement": "At Silverleaf Nonprofit, the administrator created a Validation Rule on the Donation__c object: donors who select a Payment_Method__c picklist value of 'Check' must also populate the Check_Number__c field. The rule must fire only when 'Check' is selected and the check number is empty. Which formula correctly implements this requirement?",
  "options": [
   {
    "key": "a",
    "text": "AND(ISPICKVAL(Payment_Method__c, \"Check\"), ISBLANK(Check_Number__c))"
   },
   {
    "key": "b",
    "text": "OR(ISPICKVAL(Payment_Method__c, \"Check\"), ISBLANK(Check_Number__c))"
   },
   {
    "key": "c",
    "text": "AND(Payment_Method__c = \"Check\", NOT(ISBLANK(Check_Number__c)))"
   },
   {
    "key": "d",
    "text": "ISCHANGED(Payment_Method__c) && ISBLANK(Check_Number__c)"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "A validation rule fires (blocks the save) when its formula evaluates to TRUE. `AND(ISPICKVAL(Payment_Method__c, \"Check\"), ISBLANK(Check_Number__c))` is TRUE only when the payment method equals 'Check' AND the check number is blank—exactly the invalid condition to block. Note that **ISPICKVAL** must be used to compare picklist values.\n\n**Why the other options are incorrect:**\n- **b** is incorrect because OR would fire the rule if either condition is true—for example blocking any record with a blank check number even when the method isn't 'Check'.\n- **c** is incorrect because it uses `Payment_Method__c = \"Check\"` (picklists require ISPICKVAL, not a direct equality in a standard comparison) and its logic requires the check number to be populated (NOT ISBLANK) to fire, which is backwards.\n- **d** is incorrect because ISCHANGED checks whether the field was edited, which does not enforce that 'Check' specifically is selected.",
  "module": "automation"
 },
 {
  "simulado": 5,
  "number": 60,
  "statement": "After a configuration change broke a critical automation at Ambergate Retail, leadership wants to know exactly which administrator changed what setup setting and when, over the past several months. What should the administrator use to find this information?",
  "options": [
   {
    "key": "a",
    "text": "Review the Setup Audit Trail, which logs recent setup changes with the user, action, and date."
   },
   {
    "key": "b",
    "text": "Open the Debug Logs for each administrator user."
   },
   {
    "key": "c",
    "text": "Run a report on the Login History object."
   },
   {
    "key": "d",
    "text": "Check the Field History Tracking related list on the affected records."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "The **Setup Audit Trail** records administrative/setup changes, showing who made each change, the action taken, and the date, and recent entries can be downloaded for a longer window. This is purpose-built for auditing configuration changes. **Why the other options are incorrect:** (b) Debug Logs capture runtime execution details for troubleshooting code/automation, not a historical log of setup changes. (c) Login History shows authentication events, not setup modifications. (d) Field History Tracking records changes to field values on data records, not changes to org configuration.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 61,
  "statement": "HelioSoft wants to place individual fields and field sections directly onto a Lightning record page so they can apply Component Visibility rules to specific fields and reduce reliance on the traditional page layout's Details tab. Which Lightning App Builder feature enables placing fields individually on the page?",
  "options": [
   {
    "key": "a",
    "text": "Dynamic Forms"
   },
   {
    "key": "b",
    "text": "Dynamic Actions"
   },
   {
    "key": "c",
    "text": "Compact Layout"
   },
   {
    "key": "d",
    "text": "Global Value Sets"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Dynamic Forms** lets administrators add individual fields and field sections as components on a Lightning record page, so visibility rules can be applied field-by-field (or section-by-section) instead of relying on the single Record Detail component driven by the page layout.\n\n**Why the other options are incorrect:**\n- **b** is wrong because Dynamic Actions control which buttons/actions appear in the highlights panel, not the placement of individual fields.\n- **c** is wrong because a Compact Layout only defines the small set of highlight fields, not full field placement across the page.\n- **d** is wrong because Global Value Sets manage reusable picklist values and have nothing to do with placing fields on a page.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 62,
  "statement": "At Thornbury University, the central admin team is overloaded. The College of Engineering wants its own staff member, who is NOT a full System Administrator, to be able to reset passwords and manage users only within specified roles, and to manage a short list of custom objects. What should the administrator set up?",
  "options": [
   {
    "key": "a",
    "text": "Configure Delegated Administration, defining a delegated group with the roles, user management tasks, and custom objects the delegate may administer."
   },
   {
    "key": "b",
    "text": "Assign the College of Engineering staff member the System Administrator profile."
   },
   {
    "key": "c",
    "text": "Grant the staff member the \"Modify All Data\" permission via a permission set."
   },
   {
    "key": "d",
    "text": "Add the staff member to the role hierarchy above the Engineering roles."
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "**Delegated Administration** lets you grant limited admin capabilities to non-administrators: a delegated admin group can be scoped to manage users in specified roles (including password resets), assign specified profiles/permission sets, and administer specified custom objects, without full admin rights. **Why the other options are incorrect:** (b) The System Administrator profile grants far more power than intended, violating least privilege. (c) \"Modify All Data\" grants org-wide access to all records and is not scoped user administration. (d) Placing the person higher in the role hierarchy only affects record visibility, not the ability to manage users or reset passwords.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 63,
  "statement": "DataBridge integrates Salesforce with an external ERP system. When records are upserted from the ERP, the administrator needs a field on the Account object that stores the ERP's unique record identifier and can be used to match records during integration without creating duplicates. Which field setting should be enabled on that custom field?",
  "options": [
   {
    "key": "a",
    "text": "Mark the field as an External ID (and optionally Unique)"
   },
   {
    "key": "b",
    "text": "Mark the field as a Roll-Up Summary"
   },
   {
    "key": "c",
    "text": "Enable Field History Tracking on the field"
   },
   {
    "key": "d",
    "text": "Set the field as a dependent picklist"
   }
  ],
  "correct": [
   "a"
  ],
  "multi": false,
  "selectCount": 1,
  "explanation": "An **External ID** is a custom field attribute that marks a field as containing a record's unique identifier from an outside system. External ID fields are indexed and can be used in upsert operations and API matching to prevent duplicates. Marking it **Unique** further enforces that no two records share the same value.\n\n**Why the other options are incorrect:**\n- **b** is wrong because a Roll-Up Summary aggregates child records and cannot store or match an external identifier.\n- **c** is wrong because Field History Tracking only logs changes to a field's value; it does not enable record matching during integration.\n- **d** is wrong because a dependent picklist filters values based on a controlling field and is unrelated to external record matching.",
  "module": "objects"
 },
 {
  "simulado": 5,
  "number": 64,
  "statement": "A Sales Director at Halcyon Media is leaving the company at the end of the week, but her open Opportunities will be reassigned next Monday and her license should not be freed up until then. Effective immediately, though, she must be unable to log in. The administrator also wants to avoid consuming extra license capacity for a brand-new hire. Which two statements correctly describe how to handle the departing director and the licensing concern? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Freeze the departing director's user account now to block her login immediately while keeping the record data and ownership intact for Monday's reassignment."
   },
   {
    "key": "b",
    "text": "Freezing a user does not free up that user's license; to free the license the administrator must deactivate the user."
   },
   {
    "key": "c",
    "text": "Deleting the user account is the only way to stop the director from logging in."
   },
   {
    "key": "d",
    "text": "Freezing a user automatically reassigns all of that user's open records to the role hierarchy manager."
   },
   {
    "key": "e",
    "text": "Deactivating the user immediately releases her Opportunities to the queue so no reassignment step is needed."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Freezing** a user immediately prevents login while leaving the user active, so record ownership and data stay intact until Monday's reassignment, satisfying the immediate-block need (a). **Freezing does not free a license**; only **deactivating** the user frees the license, which is the correct statement about licensing (b). **Why the other options are incorrect:** (c) Users cannot be deleted in Salesforce; freezing or deactivating is how you stop logins. (d) Freezing does not reassign any records; it only blocks login. (e) Deactivating does not automatically send a user's Opportunities to a queue; open records remain owned by the deactivated user until manually reassigned.",
  "module": "config"
 },
 {
  "simulado": 5,
  "number": 65,
  "statement": "ApexAutoParts wants to audit changes to the Amount and Stage fields on Opportunity records, seeing the old and new values, who made the change, and when. Additionally, the administrator wants to visually design and view object relationships and create new objects and fields on a canvas. Which two features address these needs? (Select 2)",
  "options": [
   {
    "key": "a",
    "text": "Enable Field History Tracking for the Amount and Stage fields on Opportunity."
   },
   {
    "key": "b",
    "text": "Use Schema Builder to visualize relationships and create objects and fields on a canvas."
   },
   {
    "key": "c",
    "text": "Create a Roll-Up Summary of Amount on the Account."
   },
   {
    "key": "d",
    "text": "Enable Component Visibility on the Opportunity record page."
   },
   {
    "key": "e",
    "text": "Create a cross-object formula field to display historical values."
   }
  ],
  "correct": [
   "a",
   "b"
  ],
  "multi": true,
  "selectCount": 2,
  "explanation": "**Field History Tracking** records old and new values, the user, and the timestamp for up to 20 selected fields per object, shown in the History related list; enabling it for Amount and Stage meets the audit requirement (option a). **Schema Builder** provides a visual canvas to view object relationships and to create objects, fields, and relationships interactively (option b).\n\n**Why the other options are incorrect:**\n- **c** is wrong because a Roll-Up Summary aggregates values but does not track historical changes to a field.\n- **d** is wrong because Component Visibility controls display of components on a Lightning page, not field auditing or schema visualization.\n- **e** is wrong because a cross-object formula shows a current related value and cannot display a field's historical values.",
  "module": "objects"
 }
]);
window.EXPLANATION_PT = Object.assign(window.EXPLANATION_PT || {}, {
 "s5q1": "Um **custom fiscal year** permite definir períodos fiscais que não seguem o calendário gregoriano, incluindo um mês inicial como fevereiro e estruturas personalizadas de trimestre/período. Uma vez ativado, forecasting, quotas e agrupamentos de relatórios por período fiscal respeitam a definição personalizada. **Why the other options are incorrect:** (b) O default locale controla a formatação de data/número/nome, não o calendário fiscal. (c) Em Company Information você só pode definir o MÊS INICIAL do fiscal year para um fiscal year PADRÃO; um ano padrão continua sendo um período de 12 meses alinhado a trimestres padrão e não modela períodos personalizados arbitrários como os descritos, sendo necessário ativar o recurso custom fiscal year primeiro. (d) Um campo personalizado com relatórios manuais não alimenta forecasting, quotas ou a lógica nativa de período fiscal.",
 "s5q2": "Ao alterar o tipo de dado de um custom field, o Salesforce avisa que **dados podem ser perdidos ou truncados**. Converter um campo Text em Number descartará ou limpará valores que não sejam dados numéricos válidos (por exemplo 'C-12345' ou valores com zeros à esquerda). O Salesforce recomenda testar a mudança, de preferência em uma sandbox, antes de aplicá-la em produção.\n\n**Why the other options are incorrect:**\n- **a** está errada porque a conversão nem sempre é sem perdas; valores não numéricos ou mal formatados podem ser perdidos.\n- **c** está errada porque o Salesforce permite muitas mudanças de tipo mesmo quando há dados; ele apenas avisa sobre possível perda de dados.\n- **d** está errada porque um administrator pode mudar o tipo de campo diretamente na UI do Object Manager; nenhum developer ou Metadata API é necessário.",
 "s5q3": "Quando um flow precisa atualizar o **mesmo registro que o disparou** usando apenas campos já disponíveis nesse registro, um **before-save record-triggered flow** é a opção mais eficiente. Before-save flows modificam o registro em memória antes de ser gravado no banco de dados, portanto nenhum DML adicional é necessário—isso os torna significativamente mais rápidos e de menor custo do que automações after-save.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque um after-save flow atualizando o registro de disparo exige uma operação DML/save extra, que é muito menos performática do que um before-save flow para atualizações no mesmo registro.\n- **c** está incorreta porque um scheduled flow roda em um agendamento em lote (ex.: à noite) e não manteria o campo atualizado a cada salvamento do registro.\n- **d** está incorreta porque um screen flow exige interação manual do usuário e não rodaria automaticamente a cada salvamento.",
 "s5q4": "A BrightLeaf Organics recebeu uma planilha com 180.000 novos registros de Lead de um fornecedor de feira e precisa carregá-los no Salesforce o mais rápido possível. O administrador quer usar uma ferramenta cliente que processe esse volume em um único job e também agende a carga para rodar durante a noite. Qual ferramenta o administrador deve usar?\n\na) Data Import Wizard, porque suporta Leads e lida com volumes ilimitados de registros\nb) Data Loader, porque suporta até aproximadamente 5 milhões de registros e pode ser agendado via command-line interface\nc) Data Export Service, porque pode importar grandes conjuntos de dados em agenda semanal\nd) Mass Transfer Records, porque pode reatribuir e criar grandes volumes de Leads\n\n**Data Loader** é a escolha correta. Ele lida com grandes volumes (até cerca de 5 milhões de registros por job) e suporta insert, update, upsert, delete e export. Como 180.000 registros excedem muito o limite do Data Import Wizard de ~50.000, o Data Loader é necessário. O Data Loader também pode ser automatizado e agendado através de sua command-line interface (CLI), atendendo ao requisito de execução noturna.\n\n**Why the other options are incorrect:**\n- (a) O **Data Import Wizard** é limitado a aproximadamente **50.000 registros** por importação, então não consegue lidar com 180.000 registros; também não oferece agendamento.\n- (c) O **Data Export Service** apenas *exporta* dados semanal ou mensalmente; não pode importar registros.\n- (d) **Mass Transfer Records** reatribui a propriedade de registros existentes; não cria nem carrega novos registros.",
 "s5q5": "Na Marlow Outdoor Gear, um sales rep converte um Lead de um prospect chamado Dana Reyes. O Lead tem valores preenchidos em vários campos padrão e em dois campos personalizados que o administrador criou no objeto Lead. Após a conversão, o rep percebe que os valores dos dois campos personalizados do Lead não apareceram no Contact resultante. Qual é a causa mais provável?\n\nOpções:\n(a) Campos personalizados de Lead nunca podem ser transferidos para Contacts; apenas campos padrão convertem automaticamente.\n(b) O administrador não mapeou os campos personalizados do Lead para os campos correspondentes do Contact na configuração de Lead field mapping.\n(c) Os campos personalizados precisam estar marcados como Required no objeto Contact antes de poderem receber valores mapeados.\n(d) A Lead conversion só mapeia campos quando já existe um Account para o nome da empresa no Lead.\n\nDurante a Lead conversion, os campos padrão têm mapeamentos predefinidos para os campos de Account, Contact e Opportunity, mas **os campos personalizados do Lead precisam ser explicitamente mapeados** pelo administrador em Lead field mapping (Setup > Object Manager > Lead > Fields & Relationships > Map Lead Fields). Se o mapeamento não for configurado, os dados inseridos nesses campos personalizados são simplesmente perdidos na conversão. O mapeamento exige que os campos de origem e destino sejam de tipos de dados compatíveis.\n\n**Why the other options are incorrect:**\n- (a) é falso porque campos personalizados do Lead podem sim ser transferidos para Contact, Account ou Opportunity quando um mapeamento válido é definido.\n- (c) está incorreto; o campo de destino não precisa ser Required para receber um valor mapeado, e marcá-lo como Required não resolveria um mapeamento ausente.\n- (d) está errado porque o comportamento de mapeamento de campos não depende de já existir um Account correspondente; a conversão pode criar um novo Account e ainda assim mapear os campos.",
 "s5q6": "O **Web-to-Case** permite ao administrador gerar um formulário HTML que captura informações do site da empresa e cria um Case a partir de um visitante não autenticado. Nas Support Settings, o Web-to-Case inclui uma configuração de **daily case limit** que limita o número de cases que o Salesforce aceita do formulário web por dia, protegendo diretamente contra spam. **Why the other options are incorrect:** (a) O Email-to-Case cria cases a partir de e-mails recebidos, não de um formulário de site, e seus limites referem-se ao processamento de e-mail, não a envios web. (c) O Omni-Channel roteia itens de trabalho existentes para agentes com base em capacidade ou skill; não cria cases a partir de um site. (d) As Auto-Response Rules enviam e-mails de confirmação automática quando um case é criado; não criam o case nem impõem um limite diário de envio.",
 "s5q7": "Na Lumio Furnishings, uma sales rep precisa ligar para a mesma key account para uma verificação de status na primeira segunda-feira de cada mês durante os próximos doze meses. Ela quer que cada ligação apareça como um item separado que possa marcar como concluído individualmente, sem criar doze registros manualmente. Qual opção de Activity ela deve usar?\n\nUma **Recurring Task** gera uma série de registros individuais de Task no cronograma definido (por exemplo, mensal), e cada ocorrência pode ser concluída de forma independente. Isso atende à necessidade de um item de tarefa recorrente que produz registros separados e individualmente concluíveis sem duplicação manual.\n\n**Why the other options are incorrect:**\n- (a) está errada porque um lembrete em uma única Task apenas dispara uma notificação; não cria múltiplos registros, então não haveria nada separado para concluir a cada mês.\n- (c) está errada porque um Event representa um bloco de tempo agendado (uma reunião/compromisso), não um item de tarefa a ser marcado como concluído; uma ligação de verificação de status rastreada como item concluível pertence a uma Task.\n- (d) está errada porque registrar doze Tasks manualmente é exatamente o esforço manual que ela quer evitar, e a To Do list apenas exibe Tasks já existentes em vez de gerar uma série recorrente.",
 "s5q8": "**Business Hours** definem quando o suporte opera, e escalation rules e timers de entitlement/milestone podem ser configurados para rodar apenas durante Business Hours, de modo que o relógio pausa fora da janela definida e em feriados. **Why the other options are incorrect:** (b) O time zone padrão da org afeta os padrões de exibição para novos usuários, não se os timers pausam fora do expediente. (c) Login Hours restringem quando um usuário pode logar; não pausam timers de casos nem escalations. (d) Um flow noturno para alternar regras é desnecessário, frágil e não é a forma correta de controlar o tempo de escalation.",
 "s5q9": "Um **Master-Detail relationship** torna o registro de detalhe (Patient__c) fortemente dependente do master (Clinic__c): o detalhe é obrigado a ter um master, excluir o master faz **cascade-delete dos detalhes**, e o detalhe herda as configurações de **sharing e segurança** do master. Isso atende a todos os requisitos.\n\n**Why the other options are incorrect:**\n- **a** está errada porque um Lookup relationship é opcional por padrão, não faz cascade-delete e não compartilha segurança do pai.\n- **c** está errada porque um Hierarchical relationship é um lookup especial disponível apenas no objeto User, ligando usuários a outros usuários.\n- **d** está errada porque um external lookup relaciona um filho a um external object cujos dados ficam fora do Salesforce, o que não é o cenário descrito.",
 "s5q10": "Um **Scheduled Path** em um record-triggered flow permite executar ações em um momento específico relativo a um campo de data/hora no registro (ou relativo a quando o flow roda). Configurar um scheduled path para rodar **3 dias após o Closed Date** permite atrasar a ação de e-mail e colocá-la nesse caminho, e você pode adicionar entry conditions para reverificar que o Case ainda está fechado.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque um Pause element aguarda um evento ou horário de retomada, mas é mais complexo do que o necessário; scheduled paths são a forma padrão e dedicada de atrasar ações em record-triggered flows relativa a um campo de data.\n- **c** está incorreta porque um Loop itera sobre uma coleção de registros, não sobre tempo—ele não pode pausar a execução por dias.\n- **d** está incorreta porque um schedule-triggered flow rodando a cada 3 dias em todos os Cases é ineficiente e não vincularia o atraso precisamente ao closed date de cada Case.",
 "s5q11": "Na Nimbus Travel Co., o administrador precisa atualizar o campo Billing Country em 12.000 registros de Account existentes usando o external ID exclusivo da conta que veio do sistema ERP legado. O arquivo de importação não contém os IDs de registro do Salesforce. Qual operação do Data Loader deve ser usada?\n\na) Insert, combinando pelo external ID\nb) Update, combinando pelo Billing Country\nc) Upsert, usando o campo external ID como chave de correspondência\nd) Export, depois reimportar com uma operação Delete\n\n**Upsert** usando o campo external ID como chave de correspondência é o correto. O Upsert combina insert e update: o Salesforce usa o **external ID** para encontrar registros correspondentes e atualizá-los, ou criá-los se nenhuma correspondência existir. Como o arquivo não tem os IDs de registro do Salesforce mas tem um external ID exclusivo, o upsert é a operação certa para atualizar Accounts existentes sem o ID interno.\n\n**Why the other options are incorrect:**\n- (a) **Insert** apenas cria novos registros; duplicaria as 12.000 Accounts em vez de atualizá-las.\n- (b) **Update** requer o ID de registro do Salesforce para identificar registros (não pode combinar por um campo arbitrário como Billing Country), e esse ID não está no arquivo.\n- (d) **Delete** remove registros e não atualiza valores de campo; exportar e deletar destruiria dados, não atualizaria Billing Country.",
 "s5q12": "A Brightline Software recebe leads por um formulário público no site de marketing. A liderança quer que novos web leads sejam roteados automaticamente para a fila de vendas correta com base no país informado, e quer que os prospects recebam imediatamente um e-mail de confirmação com a marca após enviarem o formulário. Quais DUAS features do Salesforce o administrador deve configurar para atender a esses requisitos? (Select 2)\n\nOpções:\n(a) Lead Assignment Rules com critérios baseados no campo Country\n(b) Uma Auto-Response Rule que envia um email template quando os leads atendem a critérios especificados\n(c) Escalation Rules vinculadas ao campo Country do objeto Lead\n(d) Uma validation rule que bloqueia leads sem valor em Country\n(e) Opportunity Path configurado para o ciclo de vida do Lead\n\nAs **Lead Assignment Rules** avaliam os leads recebidos (inclusive os vindos de Web-to-Lead) contra entradas de regra ordenadas e roteiam cada lead para o usuário ou fila apropriado, portanto o roteamento por país é tratado aqui. As **Auto-Response Rules** enviam um e-mail baseado em template ao lead conforme critérios correspondentes, entregando a confirmação imediata com a marca. Ambas são features padrão desenhadas exatamente para este cenário de Web-to-Lead.\n\n**Why the other options are incorrect:**\n- (c) Escalation Rules se aplicam a Cases, não a Leads, então não podem rotear leads por país.\n- (d) Uma validation rule poderia exigir que Country seja preenchido, mas não roteia leads nem envia e-mails de confirmação, então não atende a nenhum dos requisitos.\n- (e) Opportunity Path (Sales Path) guia os usuários pelos stages em registros como Opportunities e Leads na interface; não roteia registros nem envia e-mails de confirmação.",
 "s5q13": "Uma **Case Escalation Rule** dispara quando um case fica aberto além de uma idade definida e executa ações de escalonamento: pode **reatribuir o case a um novo owner (usuário ou queue)** e **enviar e-mails de notificação de escalonamento**. Ela não modifica campos de dados do case, como Priority ou Status (além de sinalizar o case como escalado). Portanto a preocupação do administrador é infundada: o campo Priority não é sobrescrito. **Why the other options are incorrect:** (b) As escalation rules não definem o valor do campo Priority. (c) As escalation rules nunca fecham o case original nem geram cases filhos. (d) As escalation rules não alteram o campo Status para um valor personalizado nem recalculam entitlement milestones; os milestones são conduzidos pelo Entitlement Process, um recurso separado.",
 "s5q14": "Um administrador de Lightning Experience na Brightfern Logistics quer que o Chatter feed na página de registro de Opportunity publique automaticamente uma atualização sempre que o Stage ou o Amount mudar, para que a equipe veja essas mudanças diretamente no feed do registro. Qual recurso o administrador deve habilitar e configurar?\n\nO **Feed Tracking** é o recurso que publica atualizações automáticas no Chatter feed de um registro quando campos rastreados mudam. O admin habilita o Feed Tracking no objeto Opportunity e seleciona quais campos rastrear (até 20 por objeto), de modo que mudanças em Stage e Amount geram posts no feed do registro.\n\n**Why the other options are incorrect:**\n- (b) está errada porque um Chatter group é um espaço para pessoas colaborarem; seguir um grupo não faz com que mudanças de campo em um registro sejam publicadas no feed desse registro.\n- (c) está errada porque notificações por email não são uma configuração nativa de \"ao mudar o campo\" feita dessa forma, e mesmo que construídas com automação, enviariam email em vez de publicar atualizações no Chatter feed do registro.\n- (d) está errada porque a Activity Timeline exibe tasks, events, emails e ligações registradas, não posts automáticos sobre mudanças de valor de campo; filtrá-la não cria essas atualizações.",
 "s5q15": "Um **permission set group** agrupa múltiplos permission sets para um grupo de usuários, e um **muting permission set** dentro desse grupo suprime permissões específicas que de outra forma seriam concedidas, sem alterar os permission sets subjacentes. Essa é a abordagem reutilizável e sustentável. **Why the other options are incorrect:** (b) Clonar cria uma cópia divergente que precisa ser mantida separadamente e anula a reutilização. (c) Remover uma permissão no profile não anula uma permissão concedida por um permission set, pois permissões são aditivas (a mais permissiva prevalece). (d) Restriction rules controlam quais REGISTROS um usuário pode acessar em um objeto, não permissões de funcionalidade como exportar relatórios.",
 "s5q16": "Um **junction object** implementa um many-to-many relationship tendo **dois Master-Detail relationships**, cada um apontando para um dos dois objetos sendo relacionados. O primeiro master-detail criado torna-se o master primário e controla ownership e sharing do detalhe.\n\n**Why the other options are incorrect:**\n- **a** está errada porque dois lookups não criam um verdadeiro junction many-to-many com comportamento de cascade e não são a abordagem padrão para a definição de junction object na prova.\n- **c** está errada porque Hierarchical relationships existem apenas no objeto User e não podem ser usados em um junction object custom.\n- **d** está errada porque um External Lookup aponta para um external object, o que não é apropriado para relacionar dois objetos Salesforce em um junction.",
 "s5q17": "Uma **Validation Rule** é a ferramenta declarativa correta para garantir qualidade de dados bloqueando um salvamento quando uma condição não é atendida. A fórmula `AND(ISPICKVAL(StageName, \"Closed Won\"), ISBLANK(Description))` avalia como TRUE quando o registro é inválido, disparando a mensagem de erro e impedindo o salvamento.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque um after-save flow roda após o registro ser gravado, e embora flows possam lançar erros, validation rules são a ferramenta padrão e mais leve para exigência condicional de campos. Além disso, elementos de tela não podem ser usados em um record-triggered flow.\n- **c** está incorreta porque um Approval Process encaminha registros para aprovação; não bloqueia um salvamento com base em um campo em branco.\n- **d** está incorreta porque um scheduled flow roda em um agendamento e não pode impedir um salvamento em tempo real.",
 "s5q18": "A equipe de compliance da Harborview Financial quer um backup nativo e automatizado de todos os seus dados todos os meses, entregue como um conjunto de arquivos CSV baixáveis que inclua anexos e conteúdo. Eles não querem instalar nenhum aplicativo externo. Qual recurso o administrador deve configurar?\n\na) Export agendado do Data Loader via CLI\nb) Data Export Service, agendando um export mensal\nc) Uma assinatura de report semanal enviada por email à equipe de compliance\nd) Uma assinatura de Dashboard com um running user estático\n\nO **Data Export Service** é o recurso nativo e integrado do Salesforce (Setup > Data Export) que gera arquivos de backup como CSVs e pode ser agendado para rodar em base **semanal ou mensal**, com a opção de incluir anexos, documentos e Salesforce CRM Content. Não requer ferramenta externa, o que corresponde exatamente ao requisito.\n\n**Why the other options are incorrect:**\n- (a) O **Data Loader** é um aplicativo cliente externo que deve ser instalado, violando o requisito de \"nenhum aplicativo externo\".\n- (c) Uma **assinatura de report** envia os resultados de um único report, não um backup completo de todos os dados, e não pode incluir anexos ou arquivos de conteúdo.\n- (d) Uma **assinatura de dashboard** entrega notificações de atualização de dashboard, não backups de dados.",
 "s5q19": "O time de marketing da Vantage Fitness executa uma campanha de marca nacional que contém várias sub-campanhas regionais, cada uma com táticas menores abaixo dela. Um executivo quer uma visão única consolidada do total de opportunities e da receita influenciada em toda a estrutura. Qual capacidade do Salesforce permite que a campanha pai exiba estatísticas agregadas de todas as campanhas abaixo dela?\n\nOpções:\n(a) Campaign Hierarchy, que consolida estatísticas das campanhas filhas para a campanha pai\n(b) Campaign Members, que resumem automaticamente a receita para o registro pai\n(c) Account Hierarchy aplicada ao objeto Campaign\n(d) Opportunity Splits configurados entre campanhas relacionadas\n\nA **Campaign Hierarchy** permite associar campanhas por meio do campo Parent Campaign e fornece campos de Hierarchy statistics (por exemplo, Total Responses in Hierarchy e Total Value Opportunities in Hierarchy) que agregam dados de uma campanha pai e de todas as suas campanhas filhas, em até cinco níveis. Isso dá ao executivo a visão consolidada única solicitada.\n\n**Why the other options are incorrect:**\n- (b) Campaign Members vinculam leads/contacts individuais a uma campanha e rastreiam seu status; não consolidam receita para uma campanha pai.\n- (c) Account Hierarchy visualiza relações pai-filho entre Accounts, não entre Campaigns, e não agrega estatísticas de campanha.\n- (d) Opportunity Splits distribuem o crédito da receita de uma opportunity entre membros da equipe; não têm relação com agregar estatísticas de campanha em uma hierarquia.",
 "s5q20": "Os **Entitlements** verificam se um cliente é elegível para suporte. Um **Entitlement Process** define a linha do tempo, incluindo um ou mais **Milestones** (como First Response e Resolution Time) que representam etapas obrigatórias com tempos-alvo. As **Business Hours** fazem os temporizadores dos milestones pausarem fora do horário de trabalho, e as **Milestone Actions** (warning, success, violation) podem enviar e-mails de lembrete à medida que os prazos se aproximam. Juntos, modelam e acompanham um SLA. **Why the other options are incorrect:** (a) As Assignment Rules roteiam cases para owners; não conseguem acompanhar metas de tempo de resposta ou resolução. (c) Os Case Teams definem grupos de usuários colaborando em um case e não têm mecanismo de tempo; as escalation rules reatribuem/notificam mas não acompanham milestones duplos de SLA. (d) O Omni-Channel roteia trabalho para agentes por capacidade ou skill e não mede nem impõe tempos-alvo de SLA.",
 "s5q21": "Um sales manager na Cedarline Software criou uma list view no objeto Opportunity que filtra para \"My open opportunities\" e quer arrastar oportunidades entre stages visualmente enquanto vê o Amount total somado por coluna de stage. Qual recurso do Lightning Experience oferece isso, e qual é um requisito-chave para que funcione nessa list view?\n\nO **Kanban view** permite que os usuários visualizem uma list view como colunas e arrastem registros entre stages ou status, e pode exibir valores de resumo (como a soma de Amount) por coluna. Para agrupar o quadro, o Kanban requer um campo de agrupamento como um picklist (por exemplo, Opportunity Stage), portanto a list view deve estar em um objeto suportado com um campo de agrupamento apropriado.\n\n**Why the other options are incorrect:**\n- (b) está errada porque o Split View mostra uma lista ao lado de um painel de registro para navegação rápida; não oferece colunas com drag-and-drop nem somas de amount por coluna.\n- (c) está errada porque o Path guia os usuários pelos stages na página de um registro por meio de uma barra visual, não arrastando registros entre colunas em uma list view, e não depende de Feed Tracking.\n- (d) está errada porque a Activity Timeline mostra atividades em um registro, não um quadro de múltiplas colunas arrastável de registros agrupados por stage.",
 "s5q22": "**Organization-Wide Defaults (OWD)** definem o nível base de acesso a registros, e **Private** significa que os usuários acessam apenas os registros que possuem (mais os compartilhados pela role hierarchy ou por outro sharing). O OWD é a base correta para restringir o acesso antes de abri-lo seletivamente. **Why the other options are incorrect:** (b) Public Read Only permite que todos vejam todos os registros, o oposto da base restritiva solicitada. (c) Remover a permissão Read do objeto nega o objeto inteiro em vez de limitar a visibilidade aos registros próprios. (d) Uma sharing rule só concede acesso adicional; não restringe a base, e compartilhar registros \"apenas com os owners\" não faz sentido, pois owners já têm acesso.",
 "s5q23": "Um **Roll-Up Summary** field é criado no lado **master/pai** de um master-detail relationship e sumariza (SUM, COUNT, MIN, MAX) valores dos registros de detalhe. O relacionamento Account-Opportunity comporta-se como master-detail para fins de roll-up, então você pode criar o campo em **Account** (opção c). Você também pode adicionar **filter criteria** para que apenas registros que atendam a uma condição como Stage igual a 'Closed Won' sejam somados (opção e).\n\n**Why the other options are incorrect:**\n- **a** indica a direção incorretamente neste contexto ao sugerir que o campo vai para outro lugar; a colocação correta para este cenário é a opção c (em Account).\n- **b** está errada porque Roll-Up Summary fields ficam no master/pai, não no objeto de detalhe/filho.\n- **d** está errada porque Roll-Up Summary fields padrão exigem um master-detail (ou o equivalente Account-Opportunity), não um Lookup comum.",
 "s5q24": "Um **Fault Connector** (fault path) direciona a execução do flow para um elemento designado quando um elemento como Get/Create/Update Records falha em tempo de execução. Isso permite ao administrador exibir ou registrar um erro significativo, reverter graciosamente ou notificar alguém, em vez de deixar o flow falhar com uma falha não tratada.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque um Decision element avalia valores de dados e não pode capturar falhas de DML em tempo de execução; apenas um fault connector lida com erros de execução.\n- **c** está incorreta porque um Scheduled Path é usado em record-triggered flows para rodar ações em um momento futuro, não para repetir DML com falha em um autolaunched flow.\n- **d** está incorreta porque um Loop itera sobre uma coleção de registros e não pode capturar ou repetir uma operação DML com falha.",
 "s5q25": "A Cedar & Pine Realty está implementando Duplicate Rules para impedir que representantes de vendas criem Contacts duplicados. O administrador quer que os reps ainda possam salvar um registro sinalizado como potencial duplicata, mas quer um report de com que frequência duplicatas são criadas. Qual combinação descreve corretamente como Matching Rules e Duplicate Rules trabalham juntas para atender a essa necessidade? (Select 2)\n\na) Uma Matching Rule define os critérios usados para identificar quais registros são duplicatas\nb) A Duplicate Rule deve ser definida com a ação Block para que os reps não possam salvar de forma alguma\nc) A ação Alert da Duplicate Rule permite salvar enquanto ainda avisa o usuário, e habilitar a opção Report registra duplicate record sets\nd) Matching Rules mesclam automaticamente registros duplicados quando uma correspondência é encontrada\ne) Uma Matching Rule deve ser ativada antes que a Duplicate Rule que a referencia possa ser ativada\n\n**Opção (a)** está correta: uma **Matching Rule** especifica a lógica de comparação de campos (exata/fuzzy) que determina se dois registros são considerados duplicatas. **Opção (c)** está correta: definir a ação da Duplicate Rule como **Alert** avisa o usuário mas ainda permite salvar, e marcar a opção **Report** cria Duplicate Record Sets que podem ser reportados para medir a frequência de duplicatas. (Observação: a opção (e) é uma afirmação verdadeira sobre a ordem de ativação, mas a questão pergunta quais duas descrevem como as regras trabalham juntas para atender à necessidade declarada — alertar-com-salvamento e reportar — então (a) e (c) são as melhores respostas.)\n\n**Why the other options are incorrect:**\n- (b) A ação **Block** impede o salvamento totalmente, contradizendo o requisito de que os reps ainda possam salvar registros sinalizados.\n- (d) **Matching Rules** apenas identificam potenciais duplicatas; nunca mesclam registros automaticamente.\n- (e) Embora uma matching rule precise de fato estar ativa, isso descreve uma dependência de configuração, não como as regras atendem à necessidade de negócio de alertar e reportar.",
 "s5q26": "Na Cedarpoint Consulting, o VP de Sales quer creditar ao sales rep principal 100% do valor de cada opportunity e, ao mesmo tempo, dar crédito a um sales engineer pelas mesmas opportunities para medir sua contribuição, sem reduzir o valor creditado ao rep. Qual configuração de Opportunity Splits atende a esse requisito?\n\nOpções:\n(a) Usar revenue splits para o rep e para o sales engineer de forma que o total seja sempre 100%.\n(b) Usar um revenue split para o rep e um overlay split para o sales engineer.\n(c) Usar overlay splits para o rep e para o sales engineer.\n(d) Usar Opportunity Contact Roles em vez de splits para creditar o sales engineer.\n\nOs **revenue splits** devem somar 100% do valor da opportunity e normalmente são atribuídos a membros da equipe diretamente responsáveis pela receita, então o rep principal recebe um revenue split de 100%. Os **overlay splits** podem somar qualquer percentual (inclusive mais de 100%) e são usados para creditar membros de apoio, como sales engineers, sem reduzir a receita creditada a outros. Combinar um revenue split para o rep com um overlay split para o engineer satisfaz ambos os objetivos.\n\n**Why the other options are incorrect:**\n- (a) Revenue splits para ambos forçariam as duas parcelas a somar 100%, reduzindo o valor creditado ao rep para menos de 100%.\n- (c) Overlay splits para ambos deixariam sem nenhum revenue split atribuído, e o rep deveria deter o crédito de 100% de receita.\n- (d) Opportunity Contact Roles identificam os papéis dos contatos (pessoas externas à sua empresa) em uma opportunity; não creditam membros internos da equipe com valores.",
 "s5q27": "Uma **Auto-Response Rule** envia um e-mail automático ao contato quando um case é criado, usando um email template. Uma regra pode conter várias entradas com critérios e templates diferentes; o Salesforce avalia as entradas em ordem e aplica a **primeira entrada cujas condições o case satisfaz**, e então para. Isso permite que cases de produto recebam o template de produto e cases de billing o template de billing. **Why the other options are incorrect:** (a) As Assignment Rules roteiam a propriedade do case e usam a primeira entrada correspondente, mas não enviam e-mails de confirmação aos clientes. (c) As Escalation Rules reatribuem e notificam em cases envelhecidos; não enviam uma confirmação no momento da criação, e usam a primeira entrada aplicável, não todas em sequência. (d) As Workflow Rules não avaliam entradas em ordem aleatória e não são o mecanismo padrão para confirmação automática de case baseada na primeira entrada correspondente.",
 "s5q28": "Um administrador na Marisol Travel Co. está preparando a experiência do Salesforce mobile app para field reps. Os reps precisam criar rapidamente uma Task de follow-up e registrar uma ligação a partir de um registro de Contact enquanto estão no celular. Quais DUAS afirmações sobre actions e o Salesforce mobile app estão corretas? (Select 2)\n\n**Quick Actions colocadas na seção \"Salesforce Mobile and Lightning Experience Actions\" de um page layout aparecem tanto no Salesforce mobile app quanto no Lightning Experience** (opção a), que é exatamente a razão pela qual essa seção unificada existe. **Global quick actions** (opção b) são independentes de objeto e podem ser invocadas de muitos lugares, incluindo a action bar do mobile, tornando-as ideais para permitir que reps criem uma Task de quase qualquer lugar.\n\n**Why the other options are incorrect:**\n- (c) está errada porque todo o propósito da seção \"Salesforce Mobile and Lightning Experience Actions\" é que suas actions funcionem tanto no mobile quanto no Lightning Experience, não apenas no mobile.\n- (d) está errada porque Log a Call é uma standard action totalmente disponível no mobile app; os reps não precisam de um browser para isso.\n- (e) está errada porque o Feed Tracking controla posts automáticos no feed em mudanças de campo e não tem relação com adicionar actions a layouts de mobile.",
 "s5q29": "A **Role Hierarchy** concede automaticamente aos usuários acesso aos registros possuídos por (ou compartilhados com) usuários abaixo deles na hierarquia, o que cobre os Regional Managers vendo as Opportunities de seus Sales Reps. Uma **criteria-based sharing rule** abre acesso a registros que atendem a condições de campo (Stage = Negotiation) para um grupo como o Deal Desk, com um nível de acesso definido. **Why the other options are incorrect:** (c) Manual Sharing exigiria ação registro a registro e não escala nem se mantém atualizado conforme os registros mudam de stage. (d) Public Read/Write exporia todas as Opportunities a todos, anulando a base Private. (e) Restriction rules apenas LIMITAM ainda mais o acesso a registros que o usuário já pode ver; nunca concedem o novo acesso que os gerentes precisam.",
 "s5q30": "Um **cross-object formula field** pode referenciar campos de um registro pai através do relacionamento (por exemplo Account.Industry a partir de Contact). Formula fields são **read-only** e sempre recalculam para mostrar o valor atual do pai, atendendo a ambos os requisitos.\n\n**Why the other options are incorrect:**\n- **b** está errada porque Roll-Up Summary fields agregam registros filhos em um master object; não puxam um único valor do pai, e Contact é filho de Account.\n- **c** está errada porque um text field atualizado manualmente é editável e rapidamente fica desatualizado, não refletindo o pai automaticamente.\n- **d** está errada porque um global value set padroniza valores de picklist entre campos, mas não copia nem exibe o valor de um registro relacionado.",
 "s5q31": "O recurso **Recall** (habilitado via 'Allow submitters to recall approval requests' nas configurações do approval process) permite ao submitter original (e a administradores) retirar uma solicitação de aprovação pendente. Quando feito o recall, as recall actions rodam e o registro volta a um estado desbloqueado para que possa ser editado e reenviado.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque Final Rejection actions rodam quando um aprovador rejeita a solicitação na etapa final—elas não permitem ao submitter retirar proativamente uma solicitação pendente.\n- **c** está incorreta porque adicionar o submitter como aprovador permitiria que ele aprovasse a própria solicitação, não o recall, e não fornece um mecanismo de retirada.\n- **d** está incorreta porque reatribuir a uma fila muda quem pode agir sobre a solicitação, mas não permite ao submitter retirá-la.",
 "s5q32": "Um administrador na Summit Gear precisa de um report que liste todas as Accounts, incluindo aquelas que NÃO têm nenhuma Opportunity relacionada, para que a liderança possa identificar contas sem pipeline. O report type padrão \"Accounts with Opportunities\" exclui contas que não têm nenhuma. O que o administrador deve fazer?\n\na) Criar um Custom Report Type onde Accounts é o objeto primário e Opportunities é relacionado com o relacionamento \"with or without\" (outer join)\nb) Adicionar um cross filter \"Accounts without Opportunities\" ao report type padrão Accounts with Opportunities\nc) Usar o report type padrão e adicionar uma Bucket column para agrupar contas por pipeline\nd) Mudar o formato do report de summary para matrix\n\nCriar um **Custom Report Type** com Accounts como objeto primário e Opportunities definido como \"A records may or may not have related B records\" (o relacionamento **\"with or without\"** / outer join) é o correto. Esse report type inclui toda Account, tenha ela Opportunities ou não, permitindo que a liderança veja contas sem pipeline.\n\n**Why the other options are incorrect:**\n- (b) O report type padrão \"Accounts with Opportunities\" usa um inner join que já exclui registros sem contas; um cross filter opera sobre o conjunto de resultados de um report type existente mas não pode mudar seu relacionamento de inner join subjacente para mostrar contas que o report type nunca retorna. A solução suportada é um custom report type com o outer join.\n- (c) Uma **Bucket column** apenas categoriza registros já presentes no report; não pode adicionar contas que o report type exclui.\n- (d) Mudar o **formato do report** (summary vs matrix) altera apenas o layout, não quais registros são retornados.",
 "s5q33": "A Northwind Instruments vende dispositivos físicos e planos de suporte anuais. O administrador precisa que o preço de cada produto varie conforme seja vendido pela equipe de vendas direta ou pelo canal de parceiros, mantendo uma única lista mestre de todos os produtos. Qual abordagem usa corretamente Products e Price Books para alcançar isso?\n\nOpções:\n(a) Criar produtos duplicados, um conjunto para vendas diretas e outro para parceiros, cada um adicionado ao standard price book.\n(b) Adicionar cada produto ao standard price book e, em seguida, criar dois custom price books (Direct e Partner) e adicionar os produtos com list prices específicas do canal em cada um.\n(c) Criar um custom price book e inserir dois list prices em cada registro de produto.\n(d) Usar Opportunity Splits para aplicar preços diferentes para os canais direto e de parceiros.\n\nO **standard price book** mantém a lista mestre de todos os produtos e seus preços padrão. Para suportar preços diferentes por canal de vendas, o administrador cria **custom price books** (um para Direct, outro para Partner) e adiciona os mesmos produtos a cada um com list prices específicas do canal. Um único produto pode aparecer em múltiplos price books com preços diferentes, então não há necessidade de duplicar produtos. Os usuários de vendas então selecionam o price book apropriado na opportunity.\n\n**Why the other options are incorrect:**\n- (a) Duplicar produtos fragmenta a lista mestre e gera problemas de relatório e manutenção; o mesmo produto deve ser reutilizado entre price books.\n- (c) Um produto não pode armazenar dois list prices em um único registro dentro de um mesmo price book; as list prices são definidas por entrada de price book.\n- (d) Opportunity Splits alocam crédito de receita entre membros da equipe e não têm relação com definir preços específicos por canal.",
 "s5q34": "O **skills-based routing** no Omni-Channel direciona um item de trabalho apenas para agentes que possuem a skill exigida, de modo que agentes certificados em lending recebam as consultas de mortgage (a). O **capacity-based routing** do Omni-Channel, definido através da routing configuration e das configurações de presence/capacidade do agente, envia trabalho apenas para agentes que têm capacidade restante, em vez de sobrecarregar uma pessoa (b). O **Default Case Owner** nas Support Settings é o usuário ou queue que recebe um case quando nenhuma entrada de assignment rule se aplica, garantindo a propriedade (c). **Why the other options are incorrect:** (d) O Default Case Owner é configurado nas Support Settings, não como uma entrada em uma Auto-Response Rule, e as auto-response rules apenas enviam e-mails. (e) As escalation rules reatribuem cases envelhecidos e notificam; não atribuem skills a agentes, e as skills são definidas como parte do setup do Omni-Channel/serviço, não em tempo real pelas escalation rules.",
 "s5q35": "Um rep na Novaleaf Consulting está redigindo um email para um prospect no Lightning Experience e quer uma mensagem reutilizável que insira automaticamente o primeiro nome do destinatário e o nome da Account relacionada ao enviar. Qual combinação descreve corretamente o que o rep deve usar?\n\nUm **Lightning email template com merge fields** é a ferramenta correta: o template é reutilizável, e os merge fields (como o primeiro nome do Contact e o nome da Account relacionada) são resolvidos dinamicamente a partir dos dados do registro quando o email é enviado, produzindo uma mensagem personalizada sem redigitar.\n\n**Why the other options are incorrect:**\n- (b) está errada porque um Chatter post é colaboração interna, não um email para um prospect externo, e @mentions notificam usuários do Salesforce em vez de personalizar um email de saída.\n- (c) está errada porque Notes servem para capturar informações em registros; não enviam email nem fazem personalização com merge fields.\n- (d) está errada porque um public calendar serve para compartilhar agendas/disponibilidade internamente e não envia emails personalizados de marketing a prospects.",
 "s5q36": "**Field-Level Security (FLS)** controla a visibilidade e editabilidade de campos por profile/permission set e é imposta em todos os lugares: page layouts, list views, relatórios, pesquisa e API. Ocultar o SSN via FLS para o profile Call Center Agent atende ao requisito de compliance, mantendo-o visível para os Underwriters. **Why the other options are incorrect:** (b) Remover um campo de um page layout só o oculta naquele layout; o campo ainda é acessível via relatórios, list views e API. (c) Validation rules impõem condições de entrada de dados no save; não podem ocultar um campo. (d) OWD controla o acesso em nível de registro a registros inteiros, não a visibilidade de um campo individual.",
 "s5q37": "Um **Global Value Set** é uma lista master de valores de picklist que pode ser compartilhada por muitos picklist fields; atualizar o conjunto atualiza todos os campos que o usam (opção a). Habilitar **'Restrict picklist to the values defined in the value set'** impede usuários e integrações de salvar valores fora da lista, inclusive via API (opção b).\n\n**Why the other options are incorrect:**\n- **c** está errada porque copiar valores manualmente para picklists separadas cria duplicação e anula o objetivo de fonte única de verdade.\n- **d** está errada porque converter para Text field remove todo controle de valores, permitindo qualquer valor, o oposto do requisito.\n- **e** está errada porque Record Types controlam processos de negócio e subconjuntos de picklist por registro, não uma lista master reutilizável de valores.",
 "s5q38": "Um **Schedule-Triggered Flow** roda automaticamente em um horário e frequência definidos (ex.: todas as noites às 2h) e pode ser configurado para rodar sobre um conjunto definido de registros que atendem a condições de filtro. Isso é exatamente adequado para processar registros em lote, como atualizar registros Patient_Visit__c desatualizados a cada noite.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque um before-save record-triggered flow só roda quando um registro individual é criado ou atualizado, não em um agendamento.\n- **c** está incorreta porque um Screen Flow exige que um usuário interaja com ele e não é agendado nem autônomo.\n- **d** está incorreta porque um after-save record-triggered flow também roda em eventos de salvamento de registro, não em um agendamento noturno.",
 "s5q39": "Um analista de operações de vendas na Vertex Logistics criou um summary report de Opportunities agrupado por Stage. Ele quer exibir, para cada grupo de Stage, a porcentagem que o valor total de cada estágio representa do grand total geral. Qual recurso de report ele deve usar?\n\na) Uma Row-Level Formula\nb) Uma Bucket column\nc) Uma Summary Formula usando as funções PARENTGROUPVAL ou RowCount no nível de agrupamento\nd) Um cross filter\n\nUma **Summary Formula** é o correto. Summary formulas calculam sobre valores agrupados (agregados), e funções como **PARENTGROUPVAL** permitem comparar o subtotal de um grupo com um agrupamento de nível superior ou o grand total — exatamente o necessário para mostrar a porcentagem de cada Stage em relação ao valor geral. Summary formulas são exibidas nos níveis de summary/agrupamento em summary e matrix reports.\n\n**Why the other options are incorrect:**\n- (a) Uma **Row-Level Formula** calcula um valor para cada linha de detalhe individual, não sobre subtotais agrupados, então não pode referenciar o grand total.\n- (b) Uma **Bucket column** apenas categoriza valores de campo em buckets; não faz nenhum cálculo de porcentagem do total.\n- (d) Um **cross filter** filtra registros com base na presença/ausência de registros relacionados; não calcula porcentagens.",
 "s5q40": "Um representante de atendimento ao cliente na Harborview Logistics trabalha em uma empresa que é parceira de vários accounts clientes da Harborview. O administrador precisa que esse único contato seja associado a três accounts diferentes para que ele apareça nas related lists de todos os três, sem criar registros de contato duplicados. Qual feature o administrador deve habilitar e usar?\n\nOpções:\n(a) Account Teams\n(b) Account Hierarchy\n(c) Contacts to Multiple Accounts\n(d) Opportunity Contact Roles\n\n**Contacts to Multiple Accounts** permite que um único contato seja relacionado a mais de um account por meio de relações de account diretas e indiretas, sem duplicar o registro do contato. Cada contato ainda tem um account primário (direto), mas pode ser vinculado a accounts adicionais, aparecendo na lista Related Contacts de cada um. Isso corresponde exatamente ao requisito.\n\n**Why the other options are incorrect:**\n- (a) Account Teams concedem a um grupo de usuários acesso específico a um account; associam usuários (pessoas internas), não contatos, aos accounts.\n- (b) Account Hierarchy mostra relações pai-filho entre accounts e não relaciona um contato a múltiplos accounts.\n- (d) Opportunity Contact Roles vinculam contatos a opportunities e definem seu papel em um negócio, não um contato a múltiplos accounts.",
 "s5q41": "Uma **Macro** automatiza tarefas repetitivas de várias etapas que os agentes executam em registros no Lightning Service Console, como atualizar um campo, inserir quick text e selecionar um email template, de modo que o agente possa executá-las todas com um único clique. Esse é exatamente o caso de uso descrito. **Why the other options are incorrect:** (b) As Assignment Rules roteiam a propriedade do case; não conseguem inserir quick text no composer nem selecionar um template como ação de console conduzida pelo agente. (c) Um Entitlement Process acompanha milestones e cronogramas de SLA; não executa ações de UI do console como inserir quick text sob demanda. (d) Uma Validation Rule impede que registros que falham em uma condição sejam salvos; não executa ações nem automatiza etapas do console.",
 "s5q42": "**Restriction rules** reduzem os registros que um conjunto específico de usuários pode acessar apenas àqueles que atendem aos critérios da regra, mesmo quando OWD, role hierarchy ou sharing rules concederiam acesso mais amplo. São a ferramenta correta para impor uma exceção MAIS restritiva do que a base. **Why the other options are incorrect:** (b) Baixar o OWD de toda a org para Private afeta todos os usuários e quebra o acesso amplo que os demais precisam. (c) Sharing rules apenas ADICIONAM acesso; não podem remover o acesso já concedido por um OWD Public Read/Write. (d) Ocultar o campo Region não impede o acesso aos próprios registros de Account.",
 "s5q43": "Uma **Field Dependency** liga um **controlling field** (Product Line) a um **dependent picklist** (Product Model), de modo que os valores exibidos no campo dependente mudam conforme a seleção do controlling field. Esse é exatamente o comportamento de filtragem descrito.\n\n**Why the other options are incorrect:**\n- **b** está errada porque uma Validation Rule pode bloquear uma combinação inválida ao salvar, mas não filtra dinamicamente as opções de picklist conforme o usuário seleciona.\n- **c** está errada porque um Roll-Up Summary agrega registros filhos e nada tem a ver com filtragem de valores de picklist.\n- **d** está errada porque Record Types determinam quais valores de picklist ficam disponíveis por record type, mas não criam a filtragem dinâmica controlling/dependent entre dois picklists no mesmo registro.",
 "s5q44": "O **Entry Criteria** de um approval process determina quais registros são elegíveis para entrar no processo. Definir entry criteria como `Amount > 1000000` garante que apenas listings acima de $1.000.000 possam ser submetidos para aprovação; registros que não atendem ao critério não podem ser submetidos.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque Final Approval Actions rodam após um registro ser totalmente aprovado e não têm relação com controlar quais registros entram no processo.\n- **c** está incorreta porque uma Validation Rule bloqueia salvamentos com base em condições, mas não controla a elegibilidade de entrada no approval process.\n- **d** está incorreta porque as configurações de Record Lock controlam se um registro pode ser editado enquanto está no processo, não quais registros podem entrar nele.",
 "s5q45": "A Meridian Health tem um dashboard que VPs executivos de diferentes regiões visualizam. A liderança exige que cada VP, ao abrir o dashboard, veja apenas os dados de sua própria região com base em seu acesso pessoal, sem que o administrador construa um dashboard separado por região. Qual configuração de dashboard atende a esse requisito?\n\na) Definir o dashboard para usar um running user estático configurado como administrador do sistema\nb) Configurar o dashboard como dynamic dashboard, onde ele roda como o usuário logado que o visualiza\nc) Adicionar um dashboard filter de Region e pedir a cada VP que selecione seu próprio valor de filtro\nd) Agendar uma assinatura de dashboard para cada VP\n\nUm **dynamic dashboard** é o correto. Um dynamic dashboard roda com o contexto de segurança de **\"The dashboard viewer\"** (o usuário logado), então cada VP automaticamente vê apenas os dados que seu próprio acesso de compartilhamento permite — dados regionais neste caso — a partir de um único dashboard, eliminando a necessidade de um dashboard por região.\n\n**Why the other options are incorrect:**\n- (a) Um **running user estático** mostra a todo visualizador os mesmos dados daquele usuário fixo; defini-lo como admin exporia todas as regiões a todos.\n- (c) Um **dashboard filter** permite aos usuários restringir resultados, mas não impõe segurança — qualquer VP poderia escolher qualquer região, e filtros não restringem o acesso pelas permissões do próprio visualizador.\n- (d) Uma **assinatura** agenda atualização/entrega; não controla sob qual contexto de dados o dashboard roda.",
 "s5q46": "A liderança de vendas da Summit Payments quer melhorar a precisão do forecast e a produtividade dos reps no objeto Opportunity. Pedem que o administrador configure capacidades para que: (1) os reps vejam orientações e campos-chave de cada stage diretamente na opportunity, (2) os gerentes sejam notificados por e-mail quando uma opportunity acima de um valor definido atingir um stage avançado, e (3) cada rep tenha uma meta mensal de receita contra a qual é medido no forecast. Quais TRÊS features o administrador deve usar para atender a essas necessidades, uma por requisito? (Select 3)\n\nOpções:\n(a) Sales Path (Opportunity Path) com guidance for success em cada stage\n(b) Big Deal Alerts configurados para um valor e probabilidade mínimos\n(c) Forecasting Quotas atribuídas a cada rep\n(d) Lead Assignment Rules baseadas no valor da opportunity\n(e) Estatísticas de Campaign Hierarchy na opportunity\n\nO **Sales Path (Opportunity Path)** exibe os stages na parte superior do registro e permite que os admins adicionem Guidance for Success e campos-chave para cada stage, atendendo ao requisito 1. Os **Big Deal Alerts** enviam uma notificação automática por e-mail quando uma opportunity atende a um limite definido de valor e probabilidade, cobrindo a notificação dos gerentes sobre grandes negócios em stage avançado (requisito 2). As **Forecasting Quotas** permitem que os admins atribuam a cada rep uma meta de receita periódica que aparece no forecast para comparação com os valores projetados, atendendo ao requisito 3.\n\n**Why the other options are incorrect:**\n- (d) Lead Assignment Rules roteiam Leads, não Opportunities, e não têm relação com forecasting, guidance ou alertas de negócio.\n- (e) As estatísticas de Campaign Hierarchy agregam dados de campanha; não fornecem guidance de stage, alertas de grandes negócios ou quotas de reps.",
 "s5q47": "O **Salesforce Knowledge** é uma base de conhecimento onde artigos podem ser criados, publicados e pesquisados. Os agentes podem **pesquisar e anexar artigos a um case** a partir do console para ajudar a resolvê-lo (a). As **data categories** organizam os artigos em grupos lógicos e podem ser usadas, junto com a category group visibility, para **controlar quais usuários podem ver quais artigos** (b). **Why the other options are incorrect:** (c) O Default Case Owner é um valor das Support Settings (um usuário ou queue); os artigos do Knowledge não têm papel no roteamento de propriedade de cases. (d) Os alvos de escalonamento são usuários ou queues definidos nas escalation rules, não artigos do Knowledge. (e) Publicar um artigo o torna disponível na base de conhecimento; não fecha nenhum case automaticamente.",
 "s5q48": "**Login IP Ranges** definidos em um profile restringem o login para que os usuários com aquele profile só possam logar a partir dos endereços IP especificados; tentativas de fora são negadas. Isso impõe o bloqueio rígido solicitado. **Why the other options are incorrect:** (b) Trusted IP Ranges (Network Access) apenas isentam logins da verificação de identidade/challenge quando dentro da faixa; logins de fora ainda são permitidos (só com challenge), então não bloqueiam o acesso. (c) Login Hours restringem os horários em que o usuário pode logar, não o IP de origem. (d) Travar sessões ao IP de origem afeta a continuidade de uma sessão existente, não onde o usuário pode iniciar o login.",
 "s5q49": "**Record Types** permitem oferecer diferentes processos de negócio, subconjuntos de valores de picklist e page layouts a diferentes usuários no mesmo objeto. O administrator pode criar um record type por processo, atribuir a cada um um page layout e controlar quais valores de Status aparecem em cada um, cobrindo todas as necessidades.\n\n**Why the other options are incorrect:**\n- **a** está errada porque dividir em dois objetos é desnecessário e fragmenta relatórios e automação quando um único objeto com record types resolve.\n- **c** está errada porque um único layout com todos os valores não consegue apresentar subconjuntos de picklist diferentes nem layouts diferentes por processo.\n- **d** está errada porque Field-Level Security controla acesso a campos, mas não fornece subconjuntos de valores de picklist diferentes nem processos de suporte diferentes.",
 "s5q50": "Para processar cada registro relacionado individualmente, você usa um **Loop element** para iterar sobre a coleção de registros de line item e, dentro do loop, um **Decision element** para avaliar a quantidade de cada item contra o inventário disponível e rotear a lógica adequadamente (ex.: adicionando-o a uma coleção de itens sinalizados).\n\n**Why the other options are incorrect:**\n- **c** está incorreta porque colocar um elemento Update/DML dentro de um loop é um anti-padrão conhecido que pode rapidamente atingir governor limits; o DML deve ser feito uma vez após o loop sobre toda a coleção.\n- **d** está incorreta porque um Scheduled Path atrasa ações para um momento futuro e não tem relação com iterar sobre registros relacionados em tempo real.\n- **e** está incorreta porque um Pause element suspende o flow aguardando uma condição de retomada e não é usado para iterar sobre uma coleção.",
 "s5q51": "Após uma grande migração de dados, o administrador na Orchard Supply descobriu 40.000 registros de Lead obsoletos que nunca foram convertidos e devem ser removidos permanentemente. O administrador quer uma ferramenta que possa deletar esses registros e também enviá-los para a Recycle Bin para que possam ser restaurados se necessário. Quais abordagens são válidas para deletar em massa esses registros? (Select 3)\n\na) Usar a operação Delete do Data Loader com um CSV dos record IDs\nb) Usar a ferramenta Mass Delete Records em Setup para objetos padrão suportados como Leads\nc) Usar a operação Hard Delete do Data Loader, sabendo que ela ignora a Recycle Bin\nd) Usar o Data Export Service para remover os registros em agenda semanal\ne) Usar uma Duplicate Rule definida como Block para deletar automaticamente os registros obsoletos\n\n**Opção (a)** é válida: a operação **Delete** do Data Loader remove registros (por ID) e os envia para a **Recycle Bin**, atendendo ao requisito de restauração. **Opção (b)** é válida: a ferramenta nativa **Mass Delete Records** (Setup) deleta objetos padrão suportados como Leads, Accounts, Contacts, Cases, etc., e também os encaminha para a Recycle Bin. **Opção (c)** é válida como abordagem de deleção: o **Hard Delete** do Data Loader também deleta os registros em massa; a questão pede abordagens válidas de deleção em massa, e o hard delete é uma delas — embora ignore a Recycle Bin (sem restauração), o que é um trade-off que o admin deve aceitar.\n\n**Why the other options are incorrect:**\n- (d) O **Data Export Service** apenas exporta/faz backup de dados; não pode deletar registros.\n- (e) Uma **Duplicate Rule** definida como Block impede o salvamento de potenciais duplicatas durante a criação de registros; nunca deleta registros existentes.",
 "s5q52": "Na Rivermark Media, o administrador quer conceder a três colegas níveis diferentes de acesso a um account estratégico: um sales engineer precisa de acesso Read Only, um renewals specialist precisa de acesso Read/Write e o account owner permanece inalterado. O acesso deve se aplicar apenas a este account e suas opportunities e cases relacionados, não a todos os accounts. Qual feature o administrador deve usar?\n\nOpções:\n(a) Account Teams, adicionando cada colega com um role definido e um nível de acesso ao account\n(b) Contacts to Multiple Accounts para vincular os colegas ao account\n(c) Uma Account Hierarchy que coloque os colegas abaixo do account\n(d) Uma sharing rule que abra todos os accounts para os dois colegas\n\nAs **Account Teams** permitem que o account owner (ou admin) adicione usuários específicos a um account individual, cada um com um team role e um nível de acesso definido (Read Only ou Read/Write) ao account e, opcionalmente, às suas opportunities e cases relacionados. Isso concede acesso direcionado, por account, exatamente como descrito, sem afetar outros accounts.\n\n**Why the other options are incorrect:**\n- (b) Contacts to Multiple Accounts relaciona contatos (pessoas externas) a accounts; não concede acesso a registros para usuários internos.\n- (c) Account Hierarchy mostra relações pai-filho entre accounts e não concede acesso diferenciado a usuários, nem colegas ficam 'abaixo' de um account.\n- (d) Uma sharing rule que abra todos os accounts compartilharia em excesso, violando o requisito de limitar o acesso apenas a este account, e não forneceria facilmente níveis de acesso diferentes por usuário para um único registro.",
 "s5q53": "Exigir **multi-factor authentication (MFA)** adiciona uma etapa de verificação além da senha para logins na UI, atendendo diretamente ao requisito (1). O valor de **session timeout** em **Session Settings** encerra automaticamente uma sessão após um período definido de inatividade, atendendo ao requisito (2). **Why the other options are incorrect:** (c) Gerenciar IPs residenciais individuais via Login IP Ranges é impraticável e trata da origem de rede, não de MFA ou timeout de inatividade. (d) A expiração de senha em Password Policies fortalece senhas, mas não é MFA nem timeout de inatividade. (e) Login Hours controlam os horários permitidos de login, não a verificação de segundo fator nem a expiração de sessão ociosa.",
 "s5q54": "Um **Compact Layout** controla quais campos aparecem no **highlights panel** no topo de uma Lightning record page e os campos-chave exibidos no cabeçalho do app Salesforce mobile. É a ferramenta correta para escolher os poucos campos exibidos em destaque.\n\n**Why the other options are incorrect:**\n- **b** está errada porque o Page Layout controla o arranjo geral de campos e related lists na área de detalhe, não os campos do highlights panel.\n- **c** está errada porque Search Layouts definem colunas em resultados de busca e diálogos de lookup, não os highlights do registro.\n- **d** está errada porque List View columns definem os campos exibidos em list views, o que não tem relação com o highlights panel ou o cabeçalho mobile.",
 "s5q55": "Um **Record-Triggered Flow** é ideal para automatizar ações que ocorrem em resposta a mudanças de registro—como criar registros relacionados (uma Task quando um Claim é submetido) ou atualizar registros relacionados/filhos (um campo de Policy quando o status do Account muda). Essas ações cross-object e de criação de registros são casos de uso centrais para flows.\n\n**Why the other options are incorrect:**\n- **c** está incorreta porque impedir um salvamento quando dois campos de data estão fora de ordem é um caso de uso clássico de **Validation Rule**, não de flow.\n- **d** está incorreta porque encaminhar uma solicitação a um gerente para aprovação antes de entrar em vigor é o propósito de um **Approval Process**.\n- **e** está incorreta porque bloquear um salvamento quando um campo obrigatório está em branco para um record type é melhor tratado por uma **Validation Rule**.",
 "s5q56": "Um analista de negócios na Lakeside Manufacturing precisa de um único report que mostre Cases e Opportunities de cada Account lado a lado em blocos separados, cada bloco com suas próprias colunas, filtros e agrupamentos, compartilhando o agrupamento comum de Account. Qual formato de report suporta a exibição de múltiplos blocos de report relacionados juntos?\n\na) Formato Tabular\nb) Formato Summary\nc) Formato Matrix\nd) Formato Joined\n\nO formato **Joined report** é o correto. Um joined report permite criar múltiplos **report blocks** — cada um com seu próprio report type, colunas, filtros e agrupamentos — exibidos lado a lado e compartilhando agrupamentos comuns (como Account). Este é o único formato projetado para combinar dados de diferentes report types/objetos em um único report.\n\n**Why the other options are incorrect:**\n- (a) Reports **Tabular** são listas simples de linhas e colunas sem agrupamentos ou blocos.\n- (b) Reports **Summary** suportam agrupamentos e subtotais mas apenas um único bloco de um report type.\n- (c) Reports **Matrix** agrupam dados por linhas e colunas mas, como summary, usam um único report type e não podem mostrar blocos separados para Cases e Opportunities.",
 "s5q57": "**My Domain** dá à org um subdomínio único e com marca (suaempresa.my.salesforce.com), habilitando uma página de login personalizada, suporte a Lightning components e configuração de SSO. O fluxo é registrar o subdomínio, testar e depois implantá-lo para os usuários. **Why the other options are incorrect:** (b) Um site do Experience Cloud cria um site público/comunidade, não o domínio de login interno da org. (c) Alterar o nome da org em Company Information é cosmético e não cria uma URL de login. (d) Comprar manualmente um domínio e apontar um CNAME não é como o Salesforce provisiona o host de login com marca; My Domain é o recurso suportado.",
 "s5q58": "**Component Visibility** no Lightning App Builder permite definir condições de filtro que exibem ou ocultam um componente com base em critérios como o profile do usuário, permissões, valores de campo do registro, **form factor** do dispositivo (desktop vs phone), entre outros. Isso atende ao requisito de mostrar o componente apenas para um profile e apenas no desktop.\n\n**Why the other options are incorrect:**\n- **b** está errada porque Field-Level Security controla acesso a campos, não a visibilidade de um componente no App Builder, e não filtra por form factor.\n- **c** está errada porque a atribuição de page layout não fornece visibilidade condicional por profile mais form factor para um componente individual em uma Lightning page.\n- **d** está errada porque sharing rules controlam acesso a registros, não se um componente é exibido.",
 "s5q59": "Uma validation rule dispara (bloqueia o salvamento) quando sua fórmula avalia como TRUE. `AND(ISPICKVAL(Payment_Method__c, \"Check\"), ISBLANK(Check_Number__c))` é TRUE somente quando o payment method é igual a 'Check' E o check number está em branco—exatamente a condição inválida a ser bloqueada. Observe que **ISPICKVAL** deve ser usado para comparar valores de picklist.\n\n**Why the other options are incorrect:**\n- **b** está incorreta porque OR dispararia a regra se qualquer uma das condições fosse verdadeira—por exemplo, bloqueando qualquer registro com check number em branco mesmo quando o método não é 'Check'.\n- **c** está incorreta porque usa `Payment_Method__c = \"Check\"` (picklists exigem ISPICKVAL, não uma igualdade direta em comparação padrão) e sua lógica exige que o check number esteja preenchido (NOT ISBLANK) para disparar, o que está invertido.\n- **d** está incorreta porque ISCHANGED verifica se o campo foi editado, o que não garante que 'Check' especificamente esteja selecionado.",
 "s5q60": "O **Setup Audit Trail** registra alterações administrativas/de setup, mostrando quem fez cada mudança, a ação realizada e a data, e as entradas recentes podem ser baixadas para uma janela maior. É feito sob medida para auditar alterações de configuração. **Why the other options are incorrect:** (b) Debug Logs capturam detalhes de execução em tempo de execução para troubleshooting de código/automação, não um histórico de alterações de setup. (c) Login History mostra eventos de autenticação, não modificações de setup. (d) Field History Tracking registra mudanças em valores de campo em registros de dados, não mudanças na configuração da org.",
 "s5q61": "**Dynamic Forms** permite aos administrators adicionar campos individuais e seções de campos como componentes em uma Lightning record page, de modo que regras de visibilidade possam ser aplicadas campo a campo (ou seção a seção) em vez de depender do único componente Record Detail controlado pelo page layout.\n\n**Why the other options are incorrect:**\n- **b** está errada porque Dynamic Actions controlam quais botões/ações aparecem no highlights panel, não o posicionamento de campos individuais.\n- **c** está errada porque um Compact Layout apenas define o pequeno conjunto de campos de destaque, não o posicionamento completo de campos na página.\n- **d** está errada porque Global Value Sets gerenciam valores de picklist reutilizáveis e nada têm a ver com posicionar campos em uma página.",
 "s5q62": "**Delegated Administration** permite conceder capacidades administrativas limitadas a não-administradores: um grupo de delegated admin pode ser restrito a gerenciar usuários em roles específicas (incluindo resets de senha), atribuir profiles/permission sets específicos e administrar custom objects específicos, sem direitos de admin completos. **Why the other options are incorrect:** (b) O profile System Administrator concede muito mais poder do que o pretendido, violando o menor privilégio. (c) \"Modify All Data\" concede acesso a todos os registros da org e não é administração de usuários com escopo. (d) Colocar a pessoa mais acima na role hierarchy afeta apenas a visibilidade de registros, não a capacidade de gerenciar usuários ou resetar senhas.",
 "s5q63": "Um **External ID** é um atributo de custom field que marca um campo como contendo o identificador único de um registro de um sistema externo. Campos External ID são indexados e podem ser usados em operações de upsert e matching via API para evitar duplicatas. Marcá-lo como **Unique** garante ainda que dois registros não compartilhem o mesmo valor.\n\n**Why the other options are incorrect:**\n- **b** está errada porque um Roll-Up Summary agrega registros filhos e não pode armazenar nem casar um identificador externo.\n- **c** está errada porque Field History Tracking apenas registra alterações no valor de um campo; não habilita matching de registros durante a integração.\n- **d** está errada porque um dependent picklist filtra valores com base em um controlling field e não tem relação com matching de registros externos.",
 "s5q64": "**Freezing** um usuário impede o login imediatamente mantendo o usuário ativo, então a propriedade de registros e os dados permanecem intactos até a reatribuição de segunda, atendendo à necessidade de bloqueio imediato (a). **Freezing não libera a licença**; apenas **deactivating** o usuário libera a licença, que é a afirmação correta sobre licenciamento (b). **Why the other options are incorrect:** (c) Usuários não podem ser excluídos no Salesforce; freeze ou deactivate é como se impede logins. (d) Freezing não reatribui nenhum registro; apenas bloqueia o login. (e) Deactivating não envia automaticamente as Opportunities de um usuário para uma queue; registros abertos permanecem de propriedade do usuário desativado até serem reatribuídos manualmente.",
 "s5q65": "**Field History Tracking** registra valores antigos e novos, o usuário e o timestamp para até 20 campos selecionados por objeto, exibidos na related list History; habilitá-lo para Amount e Stage atende ao requisito de auditoria (opção a). **Schema Builder** fornece um canvas visual para ver relacionamentos de objetos e criar objetos, campos e relacionamentos de forma interativa (opção b).\n\n**Why the other options are incorrect:**\n- **c** está errada porque um Roll-Up Summary agrega valores, mas não rastreia alterações históricas de um campo.\n- **d** está errada porque Component Visibility controla a exibição de componentes em uma Lightning page, não a auditoria de campos nem a visualização de schema.\n- **e** está errada porque uma cross-object formula mostra um valor relacionado atual e não pode exibir os valores históricos de um campo."
});
