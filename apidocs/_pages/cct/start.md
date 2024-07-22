---
title: Overview
---

## Introduction
CC4 is divided into two deployment methods: AWS deployment and local deployment. For users with local deployment, they can directly access the data for data analysis and processing. For users with AWS deployment, data can be accessed through APIs.


## Tables

### Family

| Table                        | Description                                         |
|------------------------------|-----------------------------------------------------|
| FAM_Family                   | General family information                          |
| Fam_FamilyExtension          | Extended family information                         |
| FAM_Child                    | Child details and information                       |
| Fam_ChildExtension           | Extended information for children                   |
| FAM_Parent                   | Parent information                                  |
| Fam_ParentExtension          | Extended parent information                         |
| FAM_FamilyFee                | Information on fees associated with family services |
| FAM_MemberIncome             | Income details for family members                   |
| FAM_MemberIncomeDetail       | Detailed income information for family members      |
| FAM_MemberNeeds              | Needs assessment for family members                 |
| FAM_MemberSchedule           | Schedules for family members                        |
| FAM_NeedSummary              | Summary of family needs                             |
| FAM_NeedSummarySchedule      | Scheduling for needs assessment                     |
| FAM_NOA                      | Notice of Action documents                          |
| FAM_EnhancedReferral         | Enhanced referral information                       |
| FAM_EnhancedReferralProvider | Provider information for enhanced referrals         |

### Case

| Table             | Description                                         |
|-------------------|-----------------------------------------------------|
| FAM_Case          | Contains primary information about individual cases |
| Fam_CaseExtension | Holds additional extended information for cases     |
| FAM_CaseChild     | Stores data related to children in cases            |
| FAM_CaseParent    | Contains information about parents in cases         |

### Provider

| Table                   | Description                                                   |
|-------------------------|---------------------------------------------------------------|
| PRO_Provider            | Main table for provider information                           |
| PRO_ProviderExtension   | Holds extended information for providers                      |
| PRO_Contact             | Holds contact information for providers                       |
| PRO_Address             | Contains address details for providers and related entities   |
| PRO_Agreement           | Stores agreements made with or between providers              |
| PRO_Garnishment         | Tracks garnishment orders against providers                   |
| PRO_Rate                | Contains rate information related to providers                |
| PRO_Holiday             | Contains information about recognized holidays                |
| PRO_License             | Stores licensing information for providers                    |
| PRO_QRIS                | Manages Quality Rating and Improvement System (QRIS) data     |
| PRO_AccreditationStatus | Tracks the accreditation status of providers                  |
| PRO_RegistrationFee     | Contains information about registration fees for providers    |

### Care

| Table            | Description                                            |
|------------------|--------------------------------------------------------|
| PAY_Care         | Manages care payments and transactions                 |
| PAY_CareCalendar | Tracks care-related events and payment schedules       |
| Pay_CareClaim    | Handles claims for care services rendered              |
| Pay_CareRMC      | Manages records for care-related risk management cases |

### Claim

| Table                      | Description                                                   |
|----------------------------|---------------------------------------------------------------|
| PAY_Claim                  | Manages individual claims for payments                        |
| Pay_ClaimExtension         | Holds information on extensions granted for claim submissions |
| Pay_ClaimAmount            | Tracks the amount associated with each claim                  |
| Pay_ClaimELS               | Manages Early Learning Scholarship (ELS) claims               |
| PAY_ClaimWeek              | Organizes claims by the week they are submitted               |
| Pay_FFAssignment           | Manages assignments for Family Friend and Neighbor (FFN) care |
| PAY_ScheduleDaily          | Manages daily scheduling for payments or services             |
| PAY_ScheduledDate          | Tracks specific dates scheduled for payments or services      |

### Ledger

| Table                      | Description                                                 |
|----------------------------|-------------------------------------------------------------|
| FIN_Export                 | Manages the export of financial data and reports            |
| Fin_ExternalInvoice        | Stores invoices received from external entities             |
| FIN_Ledger                 | Main ledger containing comprehensive financial transactions |
| FIN_SubLedger              | Subsidiary ledger tracking detailed financial transactions  |
| FIN_SubLedgerItem          | Details individual items within a sub-ledger                |
| FIN_Provider               | Stores financial information specific to providers          |
| PAY_RegistrationFee        | Manages registration fees for providers                     |
| PAT_RegistrationFeePayment | Tracks payments made for registration fees                  |
| PAY_GarnishmentPayment     | Tracks payments made for garnishments                       |

## Data Sources

| Code                   | Name                         | View Name        | Description |
|------------------------|------------------------------|------------------|-------------|
| QueryFamilyView        | [Family](/cct/ds-family)     | View_FamilyUDF   |             |
| QueryChildren          | [Child](/cct/ds-child)       | View_ChildUDF    |             |
| QueryProvider          | [Provider](/cct/ds-provider) | View_ProviderUDF |             |
| QueryCaseWithFamilyFee | [Case](/cct/ds-case)         | View_CaseUDF     |             |
| QueryCare              | [Care](/cct/ds-care)         | View_CareUDF     |             |
| ClaimComboQuery        | [Claim](/cct/ds-claim)       | View_ClaimUDF    |             |

