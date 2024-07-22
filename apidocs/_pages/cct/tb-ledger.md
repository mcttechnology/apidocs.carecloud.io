---
title: Ledger
---

## Introduction
This section introduces the structure of the 'ledger' table and its relationships within the database. It specifically focuses on the connections between family members, such as the relationship between parents and children. This documentation aims to provide an overview of how family entities are interconnected.

## FIN_Export

| Field                      | Type                | Index   | Description                          |
|----------------------------|---------------------|---------|--------------------------------------|
| Id                         | int identity        | PK      | Primary key, unique identifier       |
| PayDate                    | datetime            |         | Payment date                         |
| UserId                     | int                 |         | User ID                              |
| LedgerCount                | int                 |         | Ledger count                         |
| ProviderCount              | int                 |         | Provider count                       |
| ClaimCount                 | int                 |         | Claim count                          |
| TotalAmount                | decimal(18, 4)      |         | Total amount                         |
| CareAmount                 | decimal(18, 4)      |         | Care amount                          |
| GarnishmentAmount          | decimal(18, 4)      |         | Garnishment amount                   |
| AdjustmentAmount           | decimal(18, 4)      |         | Adjustment amount                    |
| Memo                       | nvarchar(max)       |         | Memo                                 |
| Programe                   | int                 |         | Program (0: CDE, 1: Stage 1)         |
| Status                     | int                 |         | Status                               |
| Disable                    | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId               | int                 |         | ID of the user who created           |
| UpateUserId                | int                 |         | ID of the user who updated           |
| Version                    | int                 |         | Version                              |
| FundingSource              | nvarchar(1024)      |         | Funding source                       |
| CreateTime                 | datetimeoffset      |         | Record creation time                 |
| UpdateTime                 | datetimeoffset      |         | Record update time                   |
| ExportDate                 | datetimeoffset      |         | Export date                          |
| ExportParam                | nvarchar(max)       |         | Export parameters                    |
| Entities                   | nvarchar(max)       |         | Entities                             |
| FamilyFeeAmount            | decimal(38, 6)      |         | Family fee amount                    |
| RegisterFeeAmount          | decimal(38, 6)      |         | Register fee amount                  |
| ProviderAmountZeroCount    | int                 |         | Provider amount zero count           |
| Meta                       | nvarchar(max)       |         | Metadata                             |
| Steps                      | nvarchar(max)       |         | Steps                                |
| SummaryAmount              | nvarchar(max)       |         | Summary amount                       |
| ExportVersion              | nvarchar(2048)      |         | Export version                       |

## FIN_Ledger

| Field                | Type                | Index   | Description                          |
|----------------------|---------------------|---------|--------------------------------------|
| LegerId              | int identity        | PK      | Primary key, unique identifier       |
| ProviderID           | int                 | IX      | Foreign key to provider              |
| LedgerCode           | nvarchar(100)       | IX      | Ledger code                          |
| CustomerName         | nvarchar(200)       |         | Customer name                        |
| CustomerCode         | nvarchar(100)       |         | Customer code                        |
| CreateDate           | datetime            |         | Create date                          |
| PayMethod            | nvarchar(32)        |         | Payment method                       |
| Amount               | decimal(18, 2)      |         | Amount                               |
| Memo                 | nvarchar(max)       |         | Memo                                 |
| PayDate              | datetime            | IX      | Payment date                         |
| Status               | int                 |         | Status                               |
| Disable              | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId         | int                 |         | ID of the user who created           |
| UpateUserId          | int                 |         | ID of the user who updated           |
| Version              | int                 |         | Version                              |
| CustomerType         | int                 |         | Customer type                        |
| ContractID           | int                 |         | Contract ID                          |
| ExportId             | int                 | IX      | Export ID                            |
| EdocId               | int                 |         | Edoc ID                              |
| CreateTime           | datetimeoffset      |         | Record creation time                 |
| UpdateTime           | datetimeoffset      |         | Record update time                   |
| FamilyFeeAmount      | decimal(38, 6)      |         | Family fee amount                    |
| RegisterFeeAmount    | decimal(38, 6)      |         | Register fee amount                  |
| AdjustmentAmount     | decimal(38, 6)      |         | Adjustment amount                    |
| ClaimZeroCount       | int                 |         | Claim zero count                     |
| Meta                 | nvarchar(max)       |         | Metadata                             |
| PaymentAmount        | decimal(38, 6)      |         | Payment amount                       |
| ExportDate           | datetimeoffset      | IX      | Export date                          |
| SummaryAmount        | nvarchar(max)       |         | Summary amount                       |
| ProviderName         | nvarchar(2048)      |         | Provider name                        |
| ContractCode         | nvarchar(2048)      |         | Contract code                        |


## FIN_SubLedger

| Field              | Type           | Index | Description                                    |
|--------------------|----------------|-------|------------------------------------------------|
| SubLedgerId        | int identity   | PK    | Primary key, unique identifier                 |
| LegerID            | int            | IX    | Foreign key to ledger                          |
| ExportId           | int            | IX    | Foreign key to export                          |
| Type               | int            | IX    | Type (0: Claim, 1: Adjustment, 2: Garnishment) |
| ClaimId            | int            | IX    | Foreign key to claim                           |
| ChildID            | int            |       | Foreign key to child                           |
| ProviderID         | int            |       | Foreign key to provider                        |
| CaseID             | int            | IX    | Foreign key to case                            |
| ClaimCode          | nvarchar(100)  |       | Claim code                                     |
| ClaimStartDate     | datetime       |       | Claim start date                               |
| ClaimEndDate       | datetime       |       | Claim end date                                 |
| Title              | nvarchar(200)  |       | Title                                          |
| Price              | decimal(18, 4) |       | Price                                          |
| Quantity           | decimal(18, 4) |       | Quantity                                       |
| Amount             | decimal(18, 4) |       | Amount                                         |
| Memo               | nvarchar(200)  |       | Memo                                           |
| Status             | int            |       | Status                                         |
| Disable            | bit            |       | Disabled status (0 No, 1 Yes)                  |
| CreateUserId       | int            |       | ID of the user who created                     |
| UpateUserId        | int            |       | ID of the user who updated                     |
| Version            | int            |       | Version                                        |
| ContractID         | int            |       | Contract ID                                    |
| IsPay2Parent       | bit            |       | Is pay to parent (Y/N)                         |
| FamilyFee          | decimal(18, 4) |       | Family fee                                     |
| PVTotalAmount      | decimal(18, 4) | IX    | PV total amount                                |
| Familyid           | int            |       | Foreign key to family                          |
| CreateTime         | datetimeoffset |       | Record creation time                           |
| UpdateTime         | datetimeoffset |       | Record update time                             |
| ContractCode       | nvarchar(100)  |       | Contract code                                  |
| FamilyName         | nvarchar(2048) |       | Family name                                    |
| ChildName          | nvarchar(2048) |       | Child name                                     |
| ContractName       | nvarchar(2048) |       | Contract name                                  |
| ProviderName       | nvarchar(2048) |       | Provider name                                  |
| TypeName           | nvarchar(2048) |       | Type name                                      |
| Meta               | nvarchar(max)  |       | Metadata                                       |
| Source             | nvarchar(2048) |       | Source                                         |
| ExportDate         | datetimeoffset | IX    | Export date                                    |
| ItemCode           | nvarchar(2048) |       | Item code                                      |
| RegistrationFee    | decimal(38, 6) |       | Registration fee                               |
| ClaimExternalId    | nvarchar(2048) |       | Claim external ID                              |
| FamilyExternalId   | nvarchar(2048) |       | Family external ID                             |
| ChildExternalId    | nvarchar(2048) |       | Child external ID                              |
| ProviderExternalId | nvarchar(2048) |       | Provider external ID                           |
| ExportExternalId   | nvarchar(2048) |       | Export external ID                             |
| ClaimContractID    | int            |       | Claim contract ID                              |
| ClaimContractCode  | nvarchar(100)  |       | Claim contract code                            |
| ClaimContractName  | nvarchar(2048) |       | Claim contract name                            |
| OtherAmount        | decimal(38, 6) |       | Other amount                                   |
| PayDate            | datetime       | IX    | Payment date                                   |


## FIN_SubLedgerItem

| Field             | Type                | Index   | Description                          |
|-------------------|---------------------|---------|--------------------------------------|
| Id                | int identity        | PK      | Primary key, unique identifier       |
| ExportId          | int                 |         | Foreign key to export                |
| Source            | nvarchar(2048)      |         | Source                               |
| ClaimId           | nvarchar(2048)      |         | Claim ID                             |
| StartDate         | datetime            |         | Start date                           |
| EndDate           | datetime            |         | End date                             |
| ActualAgeGroup    | int                 |         | Actual age group                     |
| ActualRateType    | nvarchar(2048)      |         | Actual rate type                     |
| ActualRate        | decimal(38, 6)      |         | Actual rate                          |
| ActualQty         | decimal(38, 6)      |         | Actual quantity                      |
| ActualAmount      | decimal(38, 6)      |         | Actual amount                        |
| EwFactor          | decimal(38, 6)      |         | EW factor                            |
| Discount          | decimal(38, 6)      |         | Discount                             |
| AgeGroupDisplay   | nvarchar(2048)      |         | Age group display                    |
| Disable           | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId      | bigint              |         | ID of the user who created           |
| CreateTime        | datetimeoffset      |         | Record creation time                 |
| UpdateUserId      | bigint              |         | ID of the user who updated           |
| UpdateTime        | datetimeoffset      |         | Record update time                   |
| Version           | bigint              |         | Version                              |


## FIN_Provider

| Field                | Type           | Index | Description                                                          |
|----------------------|----------------|-------|----------------------------------------------------------------------|
| ProviderID           | int            | PK    | Primary key, unique identifier                                       |
| LastExportDate       | datetimeoffset |       | Last export date                                                     |
| EffectiveDate        | datetimeoffset |       | Effective date                                                       |
| ProviderNO           | nvarchar(30)   |       | Provider number                                                      |
| VenderNO             | nvarchar(500)  |       | Vendor number                                                        |
| ProviderName         | nvarchar(1000) |       | Provider name                                                        |
| ProviderCategory     | nvarchar(32)   |       | Provider category (DICT PC Individual;Corporation)                   |
| ProviderType         | int            |       | Provider type                                                        |
| FirstName            | nvarchar(500)  |       | First name                                                           |
| LastName             | nvarchar(500)  |       | Last name                                                            |
| MiddleInitial        | nvarchar(10)   |       | Middle initial                                                       |
| MailZip              | nvarchar(10)   |       | Mailing zip code                                                     |
| MailAddress          | nvarchar(300)  |       | Mailing address                                                      |
| MailUnit             | nvarchar(300)  |       | Mailing unit                                                         |
| MailCity             | nvarchar(30)   |       | Mailing city                                                         |
| MailCounty           | nvarchar(30)   |       | Mailing county                                                       |
| MailState            | nvarchar(30)   |       | Mailing state                                                        |
| MailCityID           | int            |       | Mailing city ID                                                      |
| MailCountyID         | int            |       | Mailing county ID                                                    |
| MailStateID          | int            |       | Mailing state ID                                                     |
| EMailAddress         | nvarchar(80)   |       | Email address                                                        |
| Phone1               | nvarchar(35)   |       | Primary phone                                                        |
| Phone2               | nvarchar(35)   |       | Secondary phone                                                      |
| Cell                 | nvarchar(35)   |       | Cell phone                                                           |
| Fax                  | nvarchar(20)   |       | Fax                                                                  |
| SSN                  | nvarchar(32)   |       | Social Security Number                                               |
| TaxID                | nvarchar(20)   |       | Tax ID                                                               |
| OtherIDType          | nvarchar(32)   |       | Other ID type (DICT PE :0:Driver Lic)                                |
| OtherID              | nvarchar(100)  |       | Other ID                                                             |
| TaxLegalFirstName    | nvarchar(50)   |       | Tax legal first name                                                 |
| TaxLegalMI           | nvarchar(50)   |       | Tax legal middle initial                                             |
| TaxLegalName         | nvarchar(300)  |       | Tax legal name                                                       |
| TrustLineStatus      | nvarchar(32)   |       | Trust line status                                                    |
| PaymentMethod        | nvarchar(32)   |       | Payment method (DICT PL: 0: Check, 1: Debit Card, 2: Direct Deposit) |
| ProviderManager      | int            |       | Provider manager                                                     |
| History              | int            |       | History (version)                                                    |
| Disable              | bit            |       | Disabled status (0 No, 1 Yes)                                        |
| CreateUserID         | int            |       | ID of the user who created                                           |
| UpateUserID          | int            |       | ID of the user who updated                                           |
| Version              | int            |       | Version                                                              |
| IRSExportDate        | datetime       |       | IRS export date                                                      |
| LastProviderCategory | nvarchar(32)   |       | Last provider category                                               |
| AddressChangeDate    | datetimeoffset |       | Address change date                                                  |
| CreateTime           | datetimeoffset |       | Record creation time                                                 |
| UpdateTime           | datetimeoffset |       | Record update time                                                   |


## Fin_ExternalInvoice

| Field                      | Type                | Index   | Description                          |
|----------------------------|---------------------|---------|--------------------------------------|
| ExternalInvoiceId          | char(36)            | PK      | Primary key, unique identifier       |
| TransId                    | char(36)            | IX      | Transaction ID                       |
| SequenceNo                 | bigint              |         | Sequence number                      |
| PaymentEntityId            | int                 | IX      | Payment entity ID                    |
| CollectionAccountId        | char(36)            |         | Collection account ID                |
| PostDate                   | varchar(8)          | IX      | Post date                            |
| DueDate                    | varchar(8)          |         | Due date                             |
| PeriodStart                | varchar(8)          |         | Period start                         |
| PeriodEnd                  | varchar(8)          |         | Period end                           |
| ParentId                   | int                 |         | Parent ID                            |
| InvoiceComment             | varchar(1024)       |         | Invoice comment                      |
| Status                     | int default '0'     |         | Status                               |
| BatchNo                    | int                 | IX      | Batch number                         |
| PaidOutOfBand              | bit                 |         | Paid out of band                     |
| Amount                     | decimal(18, 2)      |         | Amount                               |
| OnlinePay                  | bit                 |         | Online payment                       |
| ToEmail                    | varchar(300)        |         | To email                             |
| CollectionAccountCode      | varchar(300)        |         | Collection account code              |
| Disable                    | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId               | int                 |         | ID of the user who created           |
| UpdateUserId               | int                 |         | ID of the user who updated           |
| CreateTime                 | datetimeoffset      | IX      | Record creation time                 |
| UpdateTime                 | datetimeoffset      | IX      | Record update time                   |
| Version                    | int default '1'     |         | Version                              |
| PortalInvoiceIdentityId    | varchar(500)        | IX      | Portal invoice identity ID           |
| PaymentReceiptNo           | varchar(500)        | IX      | Payment receipt number               |
| LastPullFromPortalTime     | datetimeoffset      |         | Last pull from portal time           |
| LastSyncToPortalTime       | datetimeoffset      |         | Last sync to portal time             |


## Pay_RegistrationFee

| Field                 | Type                | Index   | Description                          |
|-----------------------|---------------------|---------|--------------------------------------|
| Id                    | int identity        | PK      | Primary key, unique identifier       |
| ProviderId            | int                 |         | Foreign key to provider              |
| ChildId               | int                 | IX      | Foreign key to child                 |
| FamilyId              | int                 |         | Foreign key to family                |
| Amount                | decimal(18, 4)      |         | Registration fee amount              |
| Balance               | decimal(18, 4)      |         | Balance amount                       |
| StartDate             | datetime            |         | Start date                           |
| EndDate               | datetime            |         | End date                             |
| Disable               | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID          | int                 |         | ID of the user who created           |
| UpateUserID           | int                 |         | ID of the user who updated           |
| Version               | int                 |         | Version                              |
| RegistrationFeeType   | nvarchar(2048)      |         | Registration fee type                |
| CreateTime            | datetimeoffset      |         | Record creation time                 |
| UpdateTime            | datetimeoffset      |         | Record update time                   |

## Pay_RegistrationFeePayment

| Field              | Type                | Index   | Description                          |
|--------------------|---------------------|---------|--------------------------------------|
| Id                 | int identity        | PK      | Primary key, unique identifier       |
| RegistrationFeeId  | int                 | IX      | Foreign key to registration fee      |
| ClaimId            | int                 |         | Foreign key to claim                 |
| ClaimCode          | int                 |         | Claim code                           |
| ClaimDate          | datetime            |         | Claim date                           |
| Amount             | decimal(18, 4)      |         | Payment amount                       |
| Balance            | decimal(18, 4)      |         | Balance amount                       |
| Disable            | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID       | int                 |         | ID of the user who created           |
| UpateUserID        | int                 |         | ID of the user who updated           |
| Version            | int                 |         | Version                              |
| Comment            | nvarchar(2048)      |         | Comment                              |
| CreateTime         | datetimeoffset      |         | Record creation time                 |
| UpdateTime         | datetimeoffset      |         | Record update time                   |
| ExportId           | int                 |         | Export ID                            |
| ProviderId         | int                 |         | Foreign key to provider              |
| ChildId            | int                 |         | Foreign key to child                 |
| FamilyId           | int                 |         | Foreign key to family                |

## PRO_GarnishmentPayment

| Field          | Type                | Index   | Description                          |
|----------------|---------------------|---------|--------------------------------------|
| Id             | int identity        | PK      | Primary key, unique identifier       |
| ProviderId     | int                 | IX      | Foreign key to provider              |
| GarnishmentId  | int                 | IX      | Foreign key to garnishment           |
| ExportDate     | datetime            |         | Export date                          |
| ProcessingFee  | decimal(18, 4)      |         | Processing fee                       |
| Amount         | decimal(18, 4)      |         | Amount                               |
| Payment        | decimal(18, 4)      |         | Payment                              |
| Balance        | decimal(18, 4)      |         | Balance                              |
| CreateUserId   | int                 |         | ID of the user who created           |
| UpateUserId    | int                 |         | ID of the user who updated           |
| Version        | int                 |         | Version                              |
| CreateTime     | datetimeoffset      |         | Record creation time                 |
| UpdateTime     | datetimeoffset      |         | Record update time                   |
| ExportId       | int                 |         | Export ID                            |
| Disable        | bit                 |         | Disabled status (0 No, 1 Yes)        |
| LedgerId       | int                 |         | Foreign key to ledger                |
