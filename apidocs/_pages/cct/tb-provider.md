---
title: Provider
---

## Introduction
This section introduces the structure of the 'provider' table and its relationships within the database. It specifically focuses on the connections between family members, such as the relationship between parents and children. This documentation aims to provide an overview of how family entities are interconnected.

## PRO_Provider

| Field                 | Type           | Index | Description                                              |
|-----------------------|----------------|-------|----------------------------------------------------------|
| ProviderID            | int identity   | PK    | Primary key, unique identifier                           |
| ProviderNO            | nvarchar(30)   | IX    | Provider number                                          |
| VenderNO              | nvarchar(500)  | IX    | Vendor number                                            |
| ProviderName          | nvarchar(1000) | _dta  | Provider name                                            |
| ProviderCategory      | nvarchar(32)   |       | Provider category                                        |
| ProviderType          | int            | IX    | Provider type                                            |
| FirstName             | nvarchar(500)  | IX    | First name                                               |
| LastName              | nvarchar(500)  | IX    | Last name                                                |
| MiddleInitial         | nvarchar(10)   |       | Middle initial                                           |
| Gender                | nvarchar(32)   |       | Gender                                                   |
| DateOfBirth           | datetime       |       | Date of birth                                            |
| Zip                   | nvarchar(10)   |       | Zip code                                                 |
| Address               | nvarchar(300)  |       | Address                                                  |
| Unit                  | nvarchar(300)  |       | Unit number                                              |
| City                  | nvarchar(30)   |       | City name                                                |
| County                | nvarchar(50)   |       | County name                                              |
| State                 | nvarchar(30)   |       | State name                                               |
| CityID                | int            |       | City ID                                                  |
| CountyID              | int            |       | County ID                                                |
| StateID               | int            |       | State ID                                                 |
| SameAddress           | bit            |       | Same address flag (Y/N)                                  |
| MailZip               | nvarchar(10)   |       | Mailing zip code                                         |
| MailAddress           | nvarchar(300)  |       | Mailing address                                          |
| MailUnit              | nvarchar(300)  |       | Mailing unit number                                      |
| MailCity              | nvarchar(30)   |       | Mailing city name                                        |
| MailCounty            | nvarchar(50)   |       | Mailing county name                                      |
| MailState             | nvarchar(30)   |       | Mailing state name                                       |
| MailCityID            | int            |       | Mailing city ID                                          |
| MailCountyID          | int            |       | Mailing county ID                                        |
| MailStateID           | int            |       | Mailing state ID                                         |
| EMailAddress          | nvarchar(80)   |       | Email address                                            |
| Phone1                | nvarchar(35)   |       | Primary phone number                                     |
| Phone2                | nvarchar(35)   |       | Secondary phone number                                   |
| Cell                  | nvarchar(35)   |       | Cell phone number                                        |
| Fax                   | nvarchar(20)   |       | Fax number                                               |
| RcvMsg                | bit            |       | Receive messages (Y/N)                                   |
| RegistrationFeeType   | nvarchar(32)   |       | Registration fee type                                    |
| SSN                   | nvarchar(32)   |       | Social Security Number                                   |
| TaxID                 | nvarchar(20)   |       | Tax ID                                                   |
| OtherIDType           | nvarchar(32)   |       | Other ID type                                            |
| OtherID               | nvarchar(100)  |       | Other ID                                                 |
| TaxLegalName          | nvarchar(300)  |       | Tax legal name                                           |
| ExceptionalNeeds      | bit            |       | Exceptional needs (Y/N)                                  |
| SeverelyHandicapped   | bit            |       | Severely handicapped (Y/N)                               |
| PayAbsence            | varchar(50)    |       | Pay absence                                              |
| FTHours               | decimal(18, 2) |       | Full-time hours                                          |
| FollwAgencyHoliday    | bit            |       | Follow agency holiday (Y/N)                              |
| ResidentChildren      | int            |       | Number of resident children                              |
| TrustLineStatus       | nvarchar(32)   |       | TrustLine status                                         |
| TrustLineComment      | nvarchar(200)  |       | TrustLine comment                                        |
| TrustLineRegDate      | datetime       |       | TrustLine registration date                              |
| TrustLineLiveScanDate | datetime       |       | TrustLine live scan date                                 |
| TrustLineRRDate       | datetime       |       | TrustLine RR date                                        |
| TrustLineResultDate   | datetime       |       | TrustLine result date                                    |
| TransitionFlag        | bit            |       | Transition flag (Y/N)                                    |
| SameFamilyID          | int            | IX    | Same family ID                                           |
| Prohibit              | bit            |       | Prohibit (Y/N)                                           |
| ProhibitReson         | nvarchar(32)   |       | Prohibit reason                                          |
| IsOnProbation         | bit            |       | Is on probation (Y/N)                                    |
| ProviderManager       | int            |       | Provider manager                                         |
| Language              | int            |       | Language ID                                              |
| OwnerID               | int            | _dta  | Owner ID                                                 |
| OrgID                 | int            |       | Organization ID                                          |
| Status                | int            |       | Status                                                   |
| Comments              | nvarchar(max)  |       | Comments                                                 |
| StartDate             | datetime       |       | Start date                                               |
| EndDate               | datetime       |       | End date                                                 |
| History               | int            |       | History version                                          |
| Disable               | bit            | IX    | Disabled status (0 No, 1 Yes)                            |
| CreateUserID          | int            |       | ID of the user who created                               |
| UpateUserID           | int            |       | ID of the user who updated                               |
| Version               | int            |       | Version                                                  |
| TaxLegalFirstName     | nvarchar(50)   |       | Tax legal first name                                     |
| TaxLegalMI            | nvarchar(50)   |       | Tax legal middle initial                                 |
| PaymentMethod         | nvarchar(50)   |       | Payment method                                           |
| PVCountyID            | nvarchar(100)  | IX    | Provider county ID                                       |
| IsAffiadvit           | bit            |       | Is affidavit (Y/N)                                       |
| AffiadvitDate         | datetime       |       | Affidavit date                                           |
| TrustLineReceiveDate  | datetime       |       | TrustLine receive date                                   |
| DriversLicense        | nvarchar(20)   |       | Driver's license number                                  |
| DriversExpDate        | datetime       |       | Driver's license expiration date                         |
| HoldStatus            | int            |       | Hold status (0 release, 1 hold new cares, 2 hold export) |
| HoldReleaseDate       | datetime       |       | Hold release date                                        |
| ProviderModel         | int            |       | Provider model                                           |
| CommunicationMethod   | nvarchar(100)  |       | Communication method                                     |
| IsFTHours             | bit            |       | Is full-time hours (Y/N)                                 |
| CreateTime            | datetimeoffset |       | Record creation time                                     |
| UpdateTime            | datetimeoffset |       | Record update time                                       |
| SpokenLanguage        | varchar(500)   |       | Spoken language                                          |
| SSNEncrypted          | nvarchar(100)  |       | Encrypted Social Security Number                         |
| TaxIDEncrypted        | nvarchar(100)  |       | Encrypted Tax ID                                         |

## PRO_ProviderExtension
Provider extension fields, for custom fields and additional information.

## PRO_Contact

| Field            | Type             | Index   | Description                          |
|------------------|------------------|---------|--------------------------------------|
| ContactID        | int identity     | PK      | Primary key, unique identifier       |
| ProviderID       | int              | IX      | Foreign key to provider              |
| Title            | nvarchar(200)    |         | Title                                |
| LastName         | nvarchar(30)     |         | Last name                            |
| FirstName        | nvarchar(30)     |         | First name                           |
| MiddleInitial    | nvarchar(10)     |         | Middle initial                       |
| DateOfBirth      | datetime         |         | Date of birth                        |
| Gender           | nvarchar(32)     |         | Gender                               |
| SSNumber         | nvarchar(30)     |         | Social Security Number               |
| PublicSSNumber   | bit              |         | Is SSN public (Y/N)                  |
| Language         | int              |         | Language ID                          |
| LimitedEnglish   | bit              |         | Limited English proficiency (Y/N)    |
| HomePhone        | nvarchar(35)     |         | Home phone number                    |
| WorkPhone        | nvarchar(35)     |         | Work phone number                    |
| Cell             | nvarchar(35)     |         | Cell phone number                    |
| Email            | nvarchar(50)     |         | Email address                        |
| OtherIDType      | nvarchar(32)     |         | Other ID type (e.g., Driver Lic)     |
| OtherID          | nvarchar(100)    |         | Other ID                             |
| Status           | int              |         | Status                               |
| Comments         | nvarchar(max)    |         | Comments                             |
| StartDate        | datetime         |         | Start date                           |
| EndDate          | datetime         |         | End date                             |
| History          | int              |         | History version                      |
| Disable          | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID     | int              |         | ID of the user who created           |
| UpateUserID      | int              |         | ID of the user who updated           |
| Version          | int              |         | Version                              |
| CreateTime       | datetimeoffset   |         | Record creation time                 |
| UpdateTime       | datetimeoffset   |         | Record update time                   |


## PRO_Address

| Field             | Type              | Index   | Description                          |
|-------------------|-------------------|---------|--------------------------------------|
| Id                | int identity      | PK      | Primary key, unique identifier       |
| ProviderId        | int               | IX      | Foreign key to provider              |
| StartDate         | datetime          |         | Start date                           |
| EndDate           | datetime          |         | End date                             |
| IsEffective       | bit               |         | Is effective (Y/N)                   |
| Zip               | nvarchar(10)      |         | Zip code                             |
| Address           | nvarchar(300)     |         | Address                              |
| Unit              | nvarchar(300)     |         | Unit number                          |
| City              | nvarchar(30)      |         | City name                            |
| County            | nvarchar(30)      |         | County name                          |
| State             | nvarchar(30)      |         | State name                           |
| CityID            | int               |         | City ID                              |
| CountyID          | int               |         | County ID                            |
| StateID           | int               |         | State ID                             |
| SameAddress       | bit               |         | Same address flag (0 No, 1 Yes)      |
| MailZip           | nvarchar(10)      |         | Mailing zip code                     |
| MailAddress       | nvarchar(300)     |         | Mailing address                      |
| MailUnit          | nvarchar(300)     |         | Mailing unit number                  |
| MailCity          | nvarchar(30)      |         | Mailing city name                    |
| MailCounty        | nvarchar(30)      |         | Mailing county name                  |
| MailState         | nvarchar(30)      |         | Mailing state name                   |
| MailCityID        | int               |         | Mailing city ID                      |
| MailCountyID      | int               |         | Mailing county ID                    |
| MailStateID       | int               |         | Mailing state ID                     |
| EMailAddress      | nvarchar(80)      |         | Email address                        |
| Status            | int               |         | Status                               |
| Comment           | nvarchar(max)     |         | Comments                             |
| Disable           | bit               |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID      | int               |         | ID of the user who created           |
| UpateUserID       | int               |         | ID of the user who updated           |
| Version           | int               |         | Version                              |
| FullAddress       | nvarchar(1024)    |         | Full address                         |
| FullMailAddress   | nvarchar(1024)    |         | Full mailing address                 |
| CreateTime        | datetimeoffset    |         | Record creation time                 |
| UpdateTime        | datetimeoffset    |         | Record update time                   |


## PRO_Agreement

| Field              | Type              | Index   | Description                                                                     |
|--------------------|-------------------|---------|---------------------------------------------------------------------------------|
| AgreementID        | int identity      | PK      | Primary key, unique identifier                                                  |
| EntityRequestID    | uniqueidentifier  |         | Entity request ID                                                               |
| RequestDate        | datetime          |         | Request date                                                                    |
| RequestReason      | nvarchar(32)      |         | Request reason                                                                  |
| TerminateDate      | datetime          |         | Termination date                                                                |
| ValidStatus        | int               |         | Valid status (0 No, 1 Yes)                                                      |
| ProviderType       | int               |         | Provider type (Interim Provider, Licensed Center-Based, etc.)                   |
| ProviderManager    | int               |         | Provider manager                                                                |
| RequestUser        | int               |         | Request user                                                                    |
| FamilyID           | int               | IX      | Foreign key to family                                                           |
| ProviderID         | int               | IX      | Foreign key to provider                                                         |
| ContractID         | nvarchar(max)     |         | Contract ID                                                                     |
| CareType           | nvarchar(32)      |         | Care type (Interim Provider, Licensed Center-Based, etc.)                       |
| TrustLineStatus    | nvarchar(32)      |         | TrustLine status                                                                |
| TrustLineComment   | nvarchar(max)     |         | TrustLine comment                                                               |
| IsInHome           | bit               |         | Is in home (0 No, 1 Yes)                                                        |
| IsRelative         | bit               |         | Is relative (0 No, 1 Yes)                                                       |
| Relationship       | int               |         | Relationship                                                                    |
| OrientationDate    | datetime          |         | Orientation date                                                                |
| OrientationConfirm | bit               |         | Orientation confirmed (0 No, 1 Yes)                                             |
| OrientationResult  | nvarchar(max)     |         | Orientation result                                                              |
| PayTo              | int               |         | Pay to (0: Family, 1: Provider For In Home)                                     |
| Status             | int               |         | Status (0: New, 9: Terminate)                                                   |
| CKAgeGroup         | bit               |         | Check age group (0 No, 1 Yes)                                                   |
| CKCapacity         | bit               |         | Check capacity (0 No, 1 Yes)                                                    |
| CKPvAge            | bit               |         | Check provider age (0 No, 1 Yes)                                                |
| CKInPvHome         | bit               |         | Check care in provider home (0 No, 1 Yes)                                       |
| CKAnotherChild     | bit               |         | Check provider has another child (0 No, 1 Yes)                                  |
| CKSSN              | bit               |         | Check provider has SSN (0 No, 1 Yes)                                            |
| Comments           | nvarchar(max)     |         | Comments                                                                        |
| StartDate          | datetime          |         | Start date                                                                      |
| EndDate            | datetime          |         | End date                                                                        |
| ProviderHistory    | int               |         | Provider history version                                                        |
| Disable            | bit               |         | Disabled status (0 No, 1 Yes)                                                   |
| CreateUserID       | int               |         | ID of the user who created                                                      |
| UpateUserID        | int               |         | ID of the user who updated                                                      |
| Version            | int               |         | Version                                                                         |
| IsOOA              | bit               |         | Is out of area (0 No, 1 Yes)                                                    |
| PVCountyID         | nvarchar(100)     |         | Provider county ID                                                              |
| CKWithPT           | bit               |         | Check with provider (0 No, 1 Yes)                                               |
| TrustLineRetro     | int               |         | TrustLine retro                                                                 |
| DenyReason         | nvarchar(max)     |         | Deny reason                                                                     |
| RealProviderType   | int               |         | Real provider type                                                              |
| CreateTime         | datetimeoffset    |         | Record creation time                                                            |
| UpdateTime         | datetimeoffset    |         | Record update time                                                              |

## PRO_Garnishment

| Field               | Type           | Index | Description                                        |
|---------------------|----------------|-------|----------------------------------------------------|
| GarnishmentId       | int identity   | PK    | Primary key, unique identifier                     |
| ProviderId          | int            | IX    | Foreign key to provider                            |
| Name                | nvarchar(500)  |       | Name                                               |
| GarnishmentEntityId | int            |       | Garnishment entity ID                              |
| OriginalAmount      | decimal(18, 4) |       | Original amount                                    |
| Balance             | decimal(18, 4) |       | Balance                                            |
| StartDate           | datetime       |       | Start date                                         |
| EndDate             | datetime       |       | End date                                           |
| Status              | int            |       | Status (New; Active; Hold; Terminated)             |
| ReactivateDate      | datetime       |       | Reactivate date                                    |
| ProcessingFee       | decimal(18, 4) |       | Processing fee                                     |
| PaymentMethod       | nvarchar(32)   |       | Payment method (Set Amount, Set Percentage, etc.)  |
| SetAmount           | decimal(18, 4) |       | Set amount                                         |
| SetPercentage       | decimal(18, 4) |       | Set percentage                                     |
| PaymentFrequency    | nvarchar(32)   |       | Payment frequency (Per Month, Per Check Run, etc.) |
| LastExportDate      | datetime       |       | Last export date                                   |
| TerminateDate       | datetime       |       | Termination date                                   |
| TerminateReason     | nvarchar(32)   |       | Termination reason (Paid in Full, Expired, etc.)   |
| Comment             | nvarchar(max)  |       | Comments                                           |
| Disable             | bit            |       | Disabled status (0 No, 1 Yes)                      |
| CreateUserId        | int            |       | ID of the user who created                         |
| UpateUserId         | int            |       | ID of the user who updated                         |
| Version             | int            |       | Version                                            |
| Agency              | nvarchar(100)  |       | Agency                                             |
| Code                | nvarchar(100)  |       | Code                                               |
| Orderby             | int            |       | Order by                                           |
| SetHigherAmount     | decimal(18, 4) |       | Set higher amount                                  |
| CreateTime          | datetimeoffset |       | Record creation time                               |
| UpdateTime          | datetimeoffset |       | Record update time                                 |

## PRO_RateMain

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| MainRateId     | int identity     | PK      | Primary key, unique identifier       |
| ProviderID     | int              |         | Foreign key to provider              |
| StartDate      | datetime         |         | Start date                           |
| EndDate        | datetime         |         | End date                             |
| Comments       | nvarchar(max)    |         | Comments                             |
| Disable        | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID   | int              |         | ID of the user who created           |
| UpdateUserID   | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| IsFTHours      | bit              |         | Is full-time hours (Y/N)             |
| FTHours        | decimal(18, 2)   |         | Full-time hours                      |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |


## PRO_Holiday

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| HolidayID      | int identity     | PK      | Primary key, unique identifier       |
| ProviderID     | int              | IX      | Foreign key to provider              |
| ProviderRuleID | int              |         | Foreign key to provider rule         |
| Date           | datetime         |         | Holiday date                         |
| HolidayType    | nvarchar(200)    |         | Type of holiday                      |
| IsPaid         | bit              |         | Is paid holiday (Y/N)                |
| UpdateTime     | datetimeoffset   |         | Record update time                   |


## PRO_License

| Field                  | Type             | Index   | Description                          |
|------------------------|------------------|---------|--------------------------------------|
| LicenseID              | int identity     | PK      | Primary key, unique identifier       |
| ProviderID             | int              |         | Foreign key to provider              |
| LicenseNo              | nvarchar(50)     |         | License number                       |
| LicenseExpirationDate  | datetime         |         | License expiration date              |
| LicenseIssueDate       | datetime         |         | License issue date                   |
| InsuranceAffidavit     | nvarchar(50)     |         | Insurance affidavit                  |
| MinAge                 | decimal(18, 2)   |         | Minimum age                          |
| MaxAge                 | decimal(18, 2)   |         | Maximum age                          |
| Capacity               | int              |         | Capacity                             |
| Status                 | int              |         | Status                               |
| Comments               | nvarchar(max)    |         | Comments                             |
| History                | int              |         | History version                      |
| Disable                | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID           | int              |         | ID of the user who created           |
| UpateUserID            | int              |         | ID of the user who updated           |
| Version                | int              |         | Version                              |
| EDocID                 | nvarchar(20)     |         | Electronic document ID               |
| CreateTime             | datetimeoffset   |         | Record creation time                 |
| UpdateTime             | datetimeoffset   |         | Record update time                   |


## PRO_QRIS

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| ProviderId     | int              | IX      | Foreign key to provider              |
| Code           | nvarchar(30)     |         | QRIS code                            |
| StartDate      | datetime         |         | Start date                           |
| EndDate        | datetime         |         | End date                             |
| Disable        | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId   | int              |         | ID of the user who created           |
| UpdateUserId   | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |


## PRO_AccreditationStatus

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| ProviderId     | int              | IX      | Foreign key to provider              |
| Code           | nvarchar(30)     |         | Accreditation status code            |
| StartDate      | datetime         |         | Start date                           |
| EndDate        | datetime         |         | End date                             |
| Disable        | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserId   | int              |         | ID of the user who created           |
| UpdateUserId   | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |

## PRO_RegistrationFee

| Field                | Type                | Index   | Description                          |
|----------------------|---------------------|---------|--------------------------------------|
| RegistrationFeeID    | int identity        | PK      | Primary key, unique identifier       |
| ProviderID           | int                 | IX      | Foreign key to provider              |
| MinAge               | decimal(18, 2)      |         | Minimum age                          |
| MaxAge               | decimal(18, 2)      |         | Maximum age                          |
| RegistrationFee      | decimal(18, 2)      |         | Registration fee                     |
| Status               | int                 |         | Status                               |
| Comments             | nvarchar(max)       |         | Comments                             |
| StartDate            | datetime            |         | Start date                           |
| EndDate              | datetime            |         | End date                             |
| History              | int                 |         | History version                      |
| Disable              | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID         | int                 |         | ID of the user who created           |
| UpateUserID          | int                 |         | ID of the user who updated           |
| Version              | int                 |         | Version                              |
| IsEffective          | bit                 |         | Is effective                         |
| RegistrationFeeType  | nvarchar(2048)      |         | Registration fee type                |
| CreateTime           | datetimeoffset      |         | Record creation time                 |
| UpdateTime           | datetimeoffset      |         | Record update time                   |

