---
title: Data Synchronization Model
---

## Entity Metadata

| Name                                    | Entity           | Entity Type             | DataSource Code     | Description               |
|-----------------------------------------|------------------|-------------------------|---------------------|---------------------------|
| [Family](family.html)                   | family           | wks_family              | cc-family           | Family Entity             |
| [Family Member](Family-Member.md)       | family_member    | wks_family_member       | cc-family-member    | Parent, Child, Contact    |
| [Family Income](Family-Income.md)       | family_income    | wks_family_extensions   | cc-family-income    |                           |
| [Family Need](Family-Need.md)           | family_need      | wks_family_extensions   | cc-family-need      |                           |
| [Family Case](Case.md)                  | family_case      | wks_case                | cc-family-case      | Family case               |
| [Family Invoice](Family-Billing.md)     | family_invoice   | wks_billing             | cc-family-invoice   | Family Fee                |
| [Provider](Provider.md)                 | provider         | wks_provider            | cc-provider         | Site, FCCH, School        |
| Provider Holiday                        | provider_holiday | wks_provider_extensions | cc-provider-holiday |                           |
| [Provider Payment](Provider-Billing.md) | provider_payment | wks_billing             | cc-provider-payment | Provider payment          |
| [Care Service](Care-Service.md)         | care             | wks_service             | cc-service-care     | Care and Schedule         |
| [Claim](Claim.md)                       | claim            | wks_claim               | cc-claim            | Claim                     |
| [Claim Attendance](Claim-Attendance.md) | claim_attendance | wks_attendance          | cc-claim-attendance | Attendance and Submission |
| Document                                | document         | wks_document            | cc-document         | Timesheet  ,EOP           |
| Note                                    | note             | wks_note                | cc-note             | Note                      |


## Key Standards for Field Naming:

1. **Case Sensitivity**: MongoDB field names are case-sensitive. It's important to maintain consistent casing (like camelCase or snake_case) throughout the data model to avoid discrepancies.

2. **Special Characters**: Avoid using special characters in field names. Characters like `$` and `.` are reserved and have specific uses in MongoDB. Including them in field names can lead to unexpected behavior or errors.

3. **Leading Underscores**: While MongoDB allows field names to start with an underscore (`_`), it's generally reserved for system fields. It's advisable to use underscores cautiously and avoid them as leading characters unless for system-specific purposes.

4. **Length Limitation**: There's no strict length limit for MongoDB field names. However, considering the overall size limitations for BSON documents, it's practical to keep field names concise to optimize storage and query performance.

5. **Clarity and Descriptiveness**: Field names should be clear and descriptive, accurately reflecting the data they represent. This practice aids in understanding the data model and ensures easier maintenance and scalability.

6. **Avoid Reserved Words**: While MongoDB doesn't restrict the use of reserved words, it's a good practice to avoid using them as field names. This helps in preventing conflicts and confusion, especially when integrating with other systems or technologies.

By following these basic standards, the data model will be well-structured, compliant with MongoDB's conventions, and more likely to integrate seamlessly with CareCloud and other systems. This approach not only enhances data integrity but also facilitates easier data management and querying.