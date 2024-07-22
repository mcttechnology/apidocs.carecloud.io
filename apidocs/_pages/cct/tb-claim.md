---
title: Claim
---

## Introduction
This section introduces the structure of the 'claim' table and its relationships within the database. It specifically focuses on the connections between family members, such as the relationship between parents and children. This documentation aims to provide an overview of how family entities are interconnected.

## PAY_Claim

| Field                   | Type           | Index | Description                                                  |
|-------------------------|----------------|-------|--------------------------------------------------------------|
| ActualAmount            | decimal(18, 2) |       | Actual amount                                                |
| ActualFamilyFee         | decimal(18, 2) |       | Actual family fee                                            |
| AdjustmentAmount        | decimal(18, 2) |       | Adjustment amount                                            |
| AdjustmentComment       | nvarchar(max)  |       | Adjustment comment                                           |
| AdjustmentReason        | varchar(max)   |       | Adjustment reason                                            |
| AdjustmentSeq           | int            |       | Adjustment sequence                                          |
| Amount                  | decimal(18, 2) |       | Amount                                                       |
| CalculateUser           | int            |       | User who calculated                                          |
| CaseID                  | int            |       | Case ID                                                      |
| CheckUser               | int            |       | User who checked                                             |
| ChildID                 | int            | IX    | Child ID                                                     |
| ClaimCode               | nvarchar(100)  | IX    | Claim code (yyyymmdd+ID(5))                                  |
| ClaimID                 | int identity   | PK    | Primary key, unique identifier                               |
| Comment                 | nvarchar(max)  |       | Comment                                                      |
| ContractID              | int            | IX    | Contract ID                                                  |
| CreateUserID            | int            |       | ID of the user who created                                   |
| Disable                 | bit            | IX    | Disabled status (0 No, 1 Yes)                                |
| EndDate                 | datetime       | IX    | End date                                                     |
| FamilyFee               | decimal(18, 2) |       | Family fee                                                   |
| FamilyID                | int            |       | Family ID                                                    |
| FFCollected             | decimal(18, 2) |       | Family fee collected                                         |
| FFOverPayment           | bit            |       | Family fee overpayment                                       |
| FFPlan                  | bit            |       | Family fee plan                                              |
| HasAdjustment           | bit            |       | Has adjustment (0 No, 1 Yes)                                 |
| IsPay2Parent            | bit            |       | Is pay to parent (0 No, 1 Yes)                               |
| IsReplaced              | bit            |       | Is replaced                                                  |
| IsSDM                   | bit            |       | Is SDM (0 No, 1 Yes)                                         |
| Month                   | int            |       | Month                                                        |
| OwnerId                 | int            |       | Owner ID                                                     |
| ProviderID              | int            | IX    | Provider ID                                                  |
| Quarter                 | int            |       | Quarter                                                      |
| SDMComment              | nvarchar(max)  |       | SDM comment                                                  |
| SDMDays                 | int            |       | SDM days                                                     |
| StartDate               | datetime       | IX    | Start date                                                   |
| Status                  | int            | IX    | Status (0 New, 1 Request Adjustment, 2 Calculated, 3 Return) |
| TotalDays               | int            |       | Total days                                                   |
| UpateUserID             | int            |       | ID of the user who updated                                   |
| Version                 | int            |       | Version                                                      |
| WeekNo                  | int            |       | Week number                                                  |
| Year                    | int            |       | Year                                                         |
| RegistrationFee         | decimal(18, 4) |       | Registration fee                                             |
| FullTimePlusFee         | decimal(18, 4) |       | Full-time plus fee                                           |
| DropInCareFee           | decimal(18, 4) |       | Drop-in care fee                                             |
| FTPlusAmount            | decimal(18, 2) |       | Full-time plus amount                                        |
| ActualFTPlusAmount      | decimal(18, 2) |       | Actual full-time plus amount                                 |
| DropInAmount            | decimal(18, 2) |       | Drop-in amount                                               |
| ActualDropInAmount      | decimal(18, 2) |       | Actual drop-in amount                                        |
| CareID                  | varchar(50)    |       | Care ID                                                      |
| AuthType                | int            |       | Authorization type                                           |
| SDMIsSys                | bit            |       | SDM is system                                                |
| AdjustmentSeqNew        | int            |       | New adjustment sequence                                      |
| IsCap                   | bit            |       | Is capped                                                    |
| PeriodStart             | datetime       | IX    | Period start                                                 |
| PeriodEnd               | datetime       | IX    | Period end                                                   |
| ClaimInfo               | nvarchar(max)  |       | Claim information                                            |
| FFReciptNo              | nvarchar(100)  |       | Family fee receipt number                                    |
| IsLicense               | bit            |       | Is licensed                                                  |
| PvFullTimePlusHours     | decimal(18, 4) |       | Provider full-time plus hours                                |
| HasChange               | bit            |       | Has change                                                   |
| ManualAdjustAmount      | decimal(18, 2) |       | Manual adjustment amount                                     |
| PayDate                 | datetime       | IX    | Payment date                                                 |
| RegistrationFee_Sys     | decimal(18, 2) |       | System registration fee                                      |
| RegistrationFee_Manual  | decimal(18, 2) |       | Manual registration fee                                      |
| PVTotalAdjustmentAmount | decimal(18, 2) |       | Provider total adjustment amount                             |
| FFAdjustmentAmount      | decimal(18, 2) |       | Family fee adjustment amount                                 |
| IsUDF                   | int            |       | Is user-defined field                                        |
| ClassroomId             | int            |       | Classroom ID                                                 |
| TotalAdjustDay          | decimal(18, 4) |       | Total adjustment days                                        |
| ActualAdjustDay         | decimal(18, 4) |       | Actual adjustment days                                       |
| OriginalAmount          | decimal(18, 4) |       | Original amount                                              |
| SpecialNeedFactor       | decimal(18, 4) |       | Special need factor                                          |
| HoldReason              | nvarchar(max)  |       | Hold reason                                                  |
| TotalAttHours           | decimal(18, 2) |       | Total attendance hours                                       |
| DigitalSubmission       | bit            | IX    | Digital submission                                           |
| SubmitDate              | datetime       | IX    | Submission date                                              |
| MissingDailySiguature   | int            |       | Missing daily signature                                      |
| MissingConfirmSiguature | int            |       | Missing confirmation signature                               |
| AttendanceSource        | int            |       | Attendance source (1: System, 2: Manual Input, 3: Import)    |
| ChildCareAmount         | decimal(18, 2) |       | Childcare amount                                             |
| QAOwnerId               | int            |       | QA owner ID                                                  |
| RowVersion              | timestamp      |       | Row version                                                  |
| ClaimVersion            | int default 1  |       | Claim version                                                |
| CreateTime              | datetimeoffset |       | Record creation time                                         |
| UpdateTime              | datetimeoffset |       | Record update time                                           |
| Meta                    | nvarchar(max)  |       | Metadata                                                     |
| InvoiceAmount           | decimal(38, 6) |       | Invoice amount                                               |
| ContractCode            | nvarchar(200)  | IX    | Contract code                                                |
| ReturnDate              | datetimeoffset |       | Return date                                                  |
| OtherAmount             | decimal(38, 6) |       | Other amount                                                 |
| OtherAmountDescription  | nvarchar(max)  |       | Other amount description                                     |
| ReturnReason            | nvarchar(2048) |       | Return reason                                                |
| OtherReason             | nvarchar(max)  |       | Other reason                                                 |


## Pay_ClaimExtension   
Extends claim information for custom fields

## Pay_ClaimAmount

| Field                | Type             | Index   | Description                          |
|----------------------|------------------|---------|--------------------------------------|
| ClaimAmountId        | int identity     | PK      | Primary key, unique identifier       |
| ClaimId              | int              |         | Foreign key to claim                 |
| ChildId              | int              |         | Foreign key to child                 |
| ProviderId           | int              |         | Foreign key to provider              |
| IsSystem             | bit              |         | Is system generated (Y/N)            |
| RateCategory         | int              |         | Rate category                        |
| RateType             | int              |         | Rate type                            |
| TotalAmount          | decimal(18, 2)   |         | Total amount                         |
| IsPreferred          | bit              |         | Is preferred rate (Y/N)              |
| Disable              | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID         | int              |         | ID of the user who created           |
| UpdateUserID         | int              |         | ID of the user who updated           |
| Version              | int              |         | Version                              |
| RateCategoryDisplay  | nvarchar(50)     |         | Display name for rate category       |
| RateTypeDisplay      | nvarchar(50)     |         | Display name for rate type           |
| CreateTime           | datetimeoffset   |         | Record creation time                 |
| UpdateTime           | datetimeoffset   |         | Record update time                   |
| CareId               | int              |         | Foreign key to care                  |

## PAY_ClaimWeek

| Field                 | Type               | Index   | Description                          |
|-----------------------|--------------------|---------|--------------------------------------|
| ClaimWeekId           | int identity       | PK      | Primary key, unique identifier       |
| ClaimItemId           | int                | IX      | Foreign key to claim item            |
| ClaimID               | int                | IX      | Foreign key to claim                 |
| ChildID               | int                |         | Foreign key to child                 |
| ProviderID            | int                |         | Foreign key to provider              |
| StartDate             | datetime           |         | Start date                           |
| EndDate               | datetime           |         | End date                             |
| RMREW                 | int                |         | RMR EW                               |
| RMRAgeGroup           | int                |         | RMR age group                        |
| RMRRateType           | nvarchar(32)       |         | RMR rate type                        |
| RMRRate               | decimal(18, 10)    |         | RMR rate                             |
| RMRQty                | decimal(18, 10)    |         | RMR quantity                         |
| RMRFee                | decimal(18, 2)     |         | RMR fee                              |
| PVEW                  | int                |         | PV EW                                |
| PVAgeGroup            | int                |         | PV age group                         |
| PVRateType            | nvarchar(32)       |         | PV rate type                         |
| PVRate                | decimal(18, 10)    |         | PV rate                              |
| PVQty                 | decimal(18, 10)    |         | PV quantity                          |
| PVFee                 | decimal(18, 2)     |         | PV fee                               |
| UsePV                 | int                |         | Use PV                               |
| EW                    | int                |         | EW                                   |
| AgeGroup              | int                |         | Age group                            |
| RateType              | nvarchar(32)       |         | Rate type                            |
| Rate                  | decimal(18, 10)    |         | Rate                                 |
| Qty                   | decimal(18, 10)    |         | Quantity                             |
| Amount                | decimal(18, 10)    |         | Amount                               |
| ActualUsePV           | int                |         | Actual use PV                        |
| ActualEW              | int                |         | Actual EW                            |
| ActualAgeGroup        | int                |         | Actual age group                     |
| ActualRateType        | nvarchar(500)      |         | Actual rate type                     |
| ActualRate            | decimal(18, 10)    |         | Actual rate                          |
| ActualQty             | decimal(18, 10)    |         | Actual quantity                      |
| ActualAmount          | decimal(18, 10)    |         | Actual amount                        |
| Proration             | decimal(18, 4)     |         | Proration                            |
| EWFactor              | decimal(18, 4)     |         | EW factor                            |
| Disable               | bit                |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID          | int                |         | ID of the user who created           |
| UpateUserID           | int                |         | ID of the user who updated           |
| Version               | int                |         | Version                              |
| ClaimAmountId         | int                | IX      | Foreign key to claim amount          |
| IsSystem              | int                |         | Is system                            |
| Discount              | decimal(18, 4)     |         | Discount                             |
| Adjustment            | decimal(18, 2)     |         | Adjustment                           |
| AgeGroupDisplay       | varchar(500)       |         | Age group display name               |
| RMRAgeGroupDisplay    | varchar(500)       |         | RMR age group display name           |
| CreateTime            | datetimeoffset     |         | Record creation time                 |
| UpdateTime            | datetimeoffset     |         | Record update time                   |
| CareId                | int                |         | Foreign key to care                  |
| RateCategory          | nvarchar(2048)     |         | Rate category                        |

## PAY_ScheduledDate

| Field                | Type                | Index   | Description                          |
|----------------------|---------------------|---------|--------------------------------------|
| ScheduleDayID        | uniqueidentifier    | PK      | Primary key, unique identifier       |
| CareID               | int                 | IX      | Foreign key to care                  |
| ChildID              | int                 | IX      | Foreign key to child                 |
| ProviderID           | int                 | IX      | Foreign key to provider              |
| Date                 | datetime            | IX      | Date                                 |
| Scheduled            | bit                 |         | Scheduled status (Y/N)               |
| NormalHours          | decimal(18, 2)      |         | Normal hours                         |
| AfterHours           | decimal(18, 2)      |         | After hours                          |
| TotalHours           | decimal(18, 2)      |         | Total hours                          |
| TimeStamp            | datetime            |         | Timestamp                            |
| DayAttendanceType    | nvarchar(32)        |         | Day attendance type                  |
| Status               | int                 |         | Status                               |
| Comment              | nvarchar(max)       |         | Comment                              |
| Disable              | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID         | int                 |         | ID of the user who created           |
| UpateUserID          | int                 |         | ID of the user who updated           |
| Version              | int                 |         | Version                              |
| ClaimID              | int                 | IX      | Foreign key to claim                 |
| ClassroomId          | int                 |         | Classroom ID                         |
| CreateTime           | datetimeoffset      |         | Record creation time                 |
| UpdateTime           | datetimeoffset      |         | Record update time                   |


## PAY_ScheduleDaily

| Field                | Type                | Index   | Description                          |
|----------------------|---------------------|---------|--------------------------------------|
| ScheduleDailyID      | uniqueidentifier    | PK      | Primary key, unique identifier       |
| CareID               | int                 | IX      | Foreign key to care                  |
| ChildID              | int                 | IX      | Foreign key to child                 |
| ProviderID           | int                 | IX      | Foreign key to provider              |
| Date                 | datetime            | IX      | Date                                 |
| WeekyNo              | int                 |         | Weekly number                        |
| DayOfWeek            | int                 |         | Day of the week                      |
| SignIn               | datetime            | IX      | Sign in time                         |
| SignOut              | datetime            | IX      | Sign out time                        |
| Status               | int                 |         | Status                               |
| NormalHours          | decimal(18, 2)      |         | Normal hours                         |
| AfterHours           | decimal(18, 2)      |         | After hours                          |
| DayAttendanceType    | nvarchar(32)        |         | Day attendance type                  |
| Comment              | nvarchar(max)       |         | Comment                              |
| Disable              | bit                 |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID         | int                 |         | ID of the user who created           |
| UpateUserID          | int                 |         | ID of the user who updated           |
| Version              | int                 |         | Version                              |
| ClaimID              | int                 | IX      | Foreign key to claim                 |
| ClassroomId          | int                 |         | Classroom ID                         |
| IsDropInCare         | bit                 |         | Is drop-in care                      |
| DropInHours          | decimal(18, 2)      |         | Drop-in hours                        |
| CreateTime           | datetimeoffset      |         | Record creation time                 |
| UpdateTime           | datetimeoffset      |         | Record update time                   |

## Pay_ClaimELS

| Field            | Type             | Index   | Description                          |
|------------------|------------------|---------|--------------------------------------|
| ClaimELSId       | int identity     | PK      | Primary key, unique identifier       |
| ClaimId          | int              |         | Foreign key to claim                 |
| FundType         | int              |         | Fund type                            |
| Description      | nvarchar(500)    |         | Description                          |
| OtherAmount      | decimal(18, 2)   |         | Other amount                         |
| PostAmount       | decimal(18, 2)   |         | Post amount                          |
| OrderNo          | int              |         | Order number                         |
| Disable          | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID     | int              |         | ID of the user who created           |
| UpdateUserID     | int              |         | ID of the user who updated           |
| Version          | int              |         | Version                              |
| CreateTime       | datetimeoffset   |         | Record creation time                 |
| UpdateTime       | datetimeoffset   |         | Record update time                   |
| OriginalAmount   | decimal(38, 6)   |         | Original amount                      |

## Pay_FFAssignment

| Field         | Type             | Index   | Description                          |
|---------------|------------------|---------|--------------------------------------|
| FFAId         | int identity     | PK      | Primary key, unique identifier       |
| CaseId        | int default 0    |         | Foreign key to case                  |
| ChildId       | int              |         | Foreign key to child                 |
| CareId        | int              | IX      | Foreign key to care                  |
| Month         | date             | IX      | Month of assignment                  |
| FF            | varchar(2)       |         | Family fee                           |
| TotalHours    | int              |         | Total hours                          |
| Disable       | bit              | IX      | Disabled status (0 No, 1 Yes)        |
| CreateUserID  | int              |         | ID of the user who created           |
| UpdateUserID  | int              |         | ID of the user who updated           |
| Version       | int              |         | Version                              |
| FamilyId      | int default 0    |         | Foreign key to family                |
| CreateTime    | datetimeoffset   |         | Record creation time                 |
| UpdateTime    | datetimeoffset   |         | Record update time                   |



      

