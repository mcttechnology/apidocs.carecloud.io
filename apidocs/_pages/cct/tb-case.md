---
title: Case
---

## Introduction
This section introduces the structure of the 'family' table and its relationships within the database. It specifically focuses on the connections between family members, such as the relationship between parents and children. This documentation aims to provide an overview of how family entities are interconnected.

## FAM_Case

| Field                        | Type           | Index | Description                      |
|------------------------------|----------------|-------|----------------------------------|
| CaseID                       | int identity   | PK    | Primary key, unique identifier   |
| FamilyID                     | int            | IX    | Foreign key to family            |
| CaseNo                       | nvarchar(30)   | IX    | Case number                      |
| ContractID                   | int            | IX    | Contract ID                      |
| Name                         | nvarchar(30)   |       | Name                             |
| RequestDate                  | datetime       |       | Request date                     |
| SignDate                     | datetime       |       | Sign date                        |
| CertifyDate                  | datetime       |       | Certify date                     |
| AuthorizationDate            | datetime       |       | Authorization date               |
| RecertifyDate                | datetime       |       | Recertify date                   |
| TerminateDate                | datetime       |       | Terminate date                   |
| ValidStatus                  | int            |       | Valid status                     |
| Source                       | nvarchar(32)   |       | Source                           |
| OtherSource                  | nvarchar(100)  |       | Other source                     |
| EligibilityType              | int            |       | Eligibility type                 |
| Need                         | int            |       | Need                             |
| OtherNeed                    | nvarchar(100)  |       | Other need                       |
| IsGroupEnrollment            | bit            |       | Is group enrollment (Y/N)        |
| GroupenrollmentDate          | datetime       |       | Group enrollment date            |
| CaseManager                  | int            |       | Case manager                     |
| OwnerId                      | int            |       | Owner ID                         |
| OrgID                        | int            |       | Organization ID                  |
| Weight                       | decimal(8, 3)  |       | Weight                           |
| CompanionType                | int            |       | Companion type                   |
| FamilySize                   | int            |       | Family size                      |
| FamilyMonthIncome            | decimal(18, 2) |       | Family monthly income            |
| Status                       | int            |       | Status                           |
| CurrentHistory               | int            |       | Current history                  |
| StartDate                    | datetime       |       | Start date                       |
| EndDate                      | datetime       |       | End date                         |
| IsEffective                  | bit            |       | Is effective (Y/N)               |
| MCCRRequestDate              | datetime       |       | MCCR request date                |
| MCCRUserCode                 | nvarchar(100)  |       | MCCR user code                   |
| MCCRUserName                 | nvarchar(500)  |       | MCCR user name                   |
| MCCRStatus                   | nvarchar(100)  |       | MCCR status                      |
| DPSSDistrictOffice           | nvarchar(500)  |       | DPSS district office             |
| DPSSRegionalOffice           | nvarchar(500)  |       | DPSS regional office             |
| CPS                          | nvarchar(200)  |       | CPS                              |
| FeeWaiver                    | bit            |       | Fee waiver (Y/N)                 |
| FeeWaiverStartDate           | datetime       |       | Fee waiver start date            |
| FeeWaiverEndDate             | datetime       |       | Fee waiver end date              |
| CreateUserID                 | int            |       | ID of the user who created       |
| UpateUserID                  | int            |       | ID of the user who updated       |
| Version                      | int            |       | Version                          |
| FamilyType                   | nvarchar(32)   |       | Family type                      |
| NOANeedType                  | nvarchar(32)   |       | NOA need type                    |
| NOAEligibilityType           | nvarchar(32)   |       | NOA eligibility type             |
| CD9600NeedType               | nvarchar(32)   |       | CD9600 need type                 |
| CD9600EligibilityType        | nvarchar(32)   |       | CD9600 eligibility type          |
| CalWorkActivity              | nvarchar(256)  |       | CalWork activity                 |
| CD9600IncomeSource           | nvarchar(32)   |       | CD9600 income source             |
| CD9600NeedType2              | nvarchar(32)   |       | CD9600 need type 2               |
| RetroRequested               | nvarchar(500)  |       | Retro requested                  |
| ReceiveDate                  | datetime       |       | Receive date                     |
| DenyReason                   | nvarchar(100)  |       | Deny reason                      |
| CountyNumber                 | nvarchar(80)   |       | County number                    |
| CashAid                      | nvarchar(32)   |       | Cash aid                         |
| TermDate                     | datetime       |       | Termination date                 |
| InitialSubsidy               | datetime       |       | Initial subsidy date             |
| TrustlinePending             | bit            |       | Trustline pending (Y/N)          |
| FirstDateOfSubsidizedService | datetime       |       | First date of subsidized service |
| Stage1StarDate               | datetime       |       | Stage 1 start date               |
| Stage1EndDate                | datetime       |       | Stage 1 end date                 |
| Stage2StarDate               | datetime       |       | Stage 2 start date               |
| Stage2EndDate                | datetime       |       | Stage 2 end date                 |
| Stage3StarDate               | datetime       |       | Stage 3 start date               |
| Stage3EndDate                | datetime       |       | Stage 3 end date                 |
| CAPPStartDate                | datetime       |       | CAPP start date                  |
| CAPPEndDate                  | datetime       |       | CAPP end date                    |
| DivisionNo                   | nvarchar(10)   |       | Division number                  |
| CountyID                     | int            |       | County ID                        |
| CW115Type                    | nvarchar(20)   |       | CW115 type                       |
| ReasonInSTG1                 | nvarchar(20)   |       | Reason in stage 1                |
| ContractType                 | int            |       | Contract type                    |
| Eligibility                  | nvarchar(32)   |       | Eligibility                      |
| Cd9600SignDate               | datetime       |       | CD9600 sign date                 |
| Disable                      | bit            |       | Disabled status (0 No, 1 Yes)    |
| ActionReason                 | nvarchar(2048) |       | Action reason                    |
| ActionComment                | nvarchar(max)  |       | Action comment                   |
| CreateTime                   | datetimeoffset |       | Record creation time             |
| UpdateTime                   | datetimeoffset |       | Record update time               |
| ActionDate                   | datetimeoffset |       | Action date                      |
| ContractCode                 | nvarchar(100)  | IX    | Contract code                    |
| ReportCountyCode             | nvarchar(100)  | IX    | Report county code               |


## Fam_CaseExtension
Case extension information, for custom extensions.

## FAM_CaseChild

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| CaseId         | int              | IK      | Foreign key to case                  |
| ChildId        | int              |         | Foreign key to child                 |
| CID            | nvarchar(100)    |         | Child identifier                     |
| CreateUserID   | int              |         | ID of the user who created           |
| UpateUserID    | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| IsTerminated   | bit              |         | Is terminated (0 No, 1 Yes)          |
| Status         | int default 1    |         | Status (default 1)                   |
| TerminateDate  | datetime         |         | Termination date                     |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |

## FAM_CaseParent

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| CaseId         | int              | IX      | Foreign key to case                  |
| ParentId       | int              |         | Foreign key to parent                |
| PID            | nvarchar(100)    |         | Parent identifier                    |
| CreateUserID   | int              |         | ID of the user who created           |
| UpateUserID    | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |


