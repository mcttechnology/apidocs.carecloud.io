---
title: Family
---

## Introduction

This section introduces the structure of the 'family' table and its relationships within the database.
It specifically focuses on the connections between family members, such as the relationship between parents and children.
This documentation aims to provide an overview of how family entities are interconnected.

## FAM_Family                   
General family information    

| Field              | Type           | Index              | Description                                                                |
|--------------------|----------------|--------------------|----------------------------------------------------------------------------|
| FamilyID           | int identity   | PK_FAM_FAMILY      | PK, identity                                                               |
| DisplayAsName      | nvarchar(60)   |                    |                                                                            |
| CaseNo             | nvarchar(30)   |                    |                                                                            |
| CountyNumber       | nvarchar(80)   |                    |                                                                            |
| CountyScreen       | nvarchar(32)   |                    | DICT FG: 1:IPCA 2:MCAP 4:MAOC 8:MSTC 16:ICAC 32:ICAS 64:IPRC               |
| Stage1StarDate     | datetime       |                    |                                                                            |
| Stage1EndDate      | datetime       |                    |                                                                            |
| Stage2StarDate     | datetime       |                    |                                                                            |
| Stage2EndDate      | datetime       |                    |                                                                            |
| Stage3StarDate     | datetime       |                    |                                                                            |
| Stage3EndDate      | datetime       |                    |                                                                            |
| LastName           | nvarchar(30)   |                    |                                                                            |
| FirstName          | nvarchar(30)   |                    |                                                                            |
| MiddleInitial      | nvarchar(10)   |                    |                                                                            |
| FamilyType         | nvarchar(32)   |                    | Dict FA 0:Natural 1: Comparing                                             |
| ParentSize         | nvarchar(32)   |                    | Dict FB 1= Single Parent 2= Parent Family                                  |
| FamilySize         | int            |                    |                                                                            |
| FamilyMonthIncome  | decimal(18, 2) |                    |                                                                            |
| FamilyFeeHourly    | decimal(18, 2) |                    |                                                                            |
| FamilyFeeFT        | decimal(18, 2) |                    |                                                                            |
| FamilyFeePT        | decimal(18, 2) |                    |                                                                            |
| PublicSSNumber     | bit            |                    | Y/ N                                                                       |
| Zip                | nvarchar(10)   |                    |                                                                            |
| Address            | nvarchar(300)  |                    |                                                                            |
| Unit               | nvarchar(300)  |                    |                                                                            |
| City               | nvarchar(30)   |                    |                                                                            |
| County             | nvarchar(50)   |                    |                                                                            |
| State              | nvarchar(30)   |                    |                                                                            |
| CityID             | int            |                    |                                                                            |
| CountyID           | int            |                    |                                                                            |
| StateID            | int            |                    |                                                                            |
| SameAddress        | bit            |                    | 0 No 1 Yes                                                                 |
| MailZip            | nvarchar(10)   |                    |                                                                            |
| MailAddress        | nvarchar(300)  |                    |                                                                            |
| MailUnit           | nvarchar(300)  |                    |                                                                            |
| MailCity           | nvarchar(30)   |                    |                                                                            |
| MailCounty         | nvarchar(50)   |                    |                                                                            |
| MailState          | nvarchar(30)   |                    |                                                                            |
| MailCityID         | int            |                    |                                                                            |
| MailCountyID       | int            |                    |                                                                            |
| MailStateID        | int            |                    |                                                                            |
| EMailAddress       | nvarchar(80)   |                    |                                                                            |
| HomePhone          | nvarchar(35)   |                    |                                                                            |
| WorkPhone          | nvarchar(35)   |                    |                                                                            |
| WorkPhoeType       | nvarchar(32)   |                    | Dict FC - Ext - Direct                                                     |
| Cell               | nvarchar(35)   |                    |                                                                            |
| RcvMsg             | bit            |                    |                                                                            |
| Languange          | int            |                    | Langurage Code 1= English(default) 2= Spanish                              |
| Contract           | int            |                    | ContractID Stage 2; APP                                                    |
| CashAid            | nvarchar(32)   |                    | DICT FH 0 = Never 1 =Currently Receiving Cash Aid 2 = Termed from Cash Aid |
| TermDate           | datetime       |                    |                                                                            |
| CalWorkActivity    | nvarchar(100)  |                    |                                                                            |
| Prohibit           | bit            |                    | 0 No 1 Yes                                                                 |
| ProhibitReson      | nvarchar(32)   |                    | DICT F6                                                                    |
| BestCallNum        | nvarchar(100)  |                    | DICT FE                                                                    |
| BestCallTime       | nvarchar(100)  |                    | DICT FD                                                                    |
| CompanionType      | int            |                    | 0:Normal 1:Companion 2 HasCompanion                                        |
| CompanionFamilyID  | int            |                    |                                                                            |
| Status             | int            |                    |                                                                            |
| Comment            | nvarchar(max)  |                    |                                                                            |
| CaseManager        | int            |                    |                                                                            |
| OwnerId            | int            |                    |                                                                            |
| StartDate          | datetime       |                    |                                                                            |
| EndDate            | datetime       |                    |                                                                            |
| History            | int            |                    | History Version                                                            |
| Disable            | int            | D_dbo_FAM_Family_1 | 0 No 1 Yes                                                                 |
| CreateUserId       | int            |                    |                                                                            |
| UpateUserId        | int            |                    |                                                                            |
| Version            | int            |                    |                                                                            |
| CPS                | nvarchar(32)   |                    |                                                                            |
| FeeWaiver          | bit            |                    |                                                                            |
| FeeWaiverStartDate | datetime       |                    |                                                                            |
| FeeWaiverEndDate   | datetime       |                    |                                                                            |
| CAPPStartDate      | datetime       |                    |                                                                            |
| CAPPEndDate        | datetime       |                    |                                                                            |
| Homeless           | int            |                    |                                                                            |
| CreateTime         | datetimeoffset |                    |                                                                            |
| UpdateTime         | datetimeoffset |                    |                                                                            |

## Fam_FamilyExtension
Extended family information, mainly for future custom extensions.                     

## FAM_Child                    
Child details and information  

| Field               | Type           | Index                                                             | Description     |
|---------------------|----------------|-------------------------------------------------------------------|-----------------|
| ChildID             | int identity   | PK_FAM_CHILD                                                      | PK, identity    |
| FamilyID            | int            | _dta_index_FAM_Child_c_52_914818321__K2, fam_child_familyid_index |                 |
| LastName            | nvarchar(100)  | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| FirstName           | nvarchar(100)  | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| MiddleInitial       | nvarchar(10)   | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| DateOfBirth         | datetime       |                                                                   |                 |
| Gender              | nvarchar(32)   |                                                                   | DICT O F;M      |
| Grade               | decimal(18, 2) |                                                                   |                 |
| SSNumber            | nvarchar(30)   |                                                                   |                 |
| PublicSSNumber      | bit            |                                                                   | Y/ N            |
| Language            | int            |                                                                   | LanguageID      |
| LimitedEnglish      | bit            |                                                                   | Y/ N            |
| Ethnicity           | int            |                                                                   | EthnicityID     |
| Race                | int            |                                                                   | RaceID          |
| CitizenInfo         | nvarchar(20)   |                                                                   | CitizenInfoID   |
| Zip                 | nvarchar(10)   |                                                                   |                 |
| Address             | nvarchar(300)  |                                                                   |                 |
| Unit                | nvarchar(300)  |                                                                   |                 |
| City                | nvarchar(30)   |                                                                   |                 |
| CityID              | int            |                                                                   |                 |
| County              | nvarchar(30)   |                                                                   |                 |
| CountyID            | int            |                                                                   |                 |
| State               | nvarchar(30)   |                                                                   |                 |
| StateID             | int            |                                                                   |                 |
| Relationship        | int            |                                                                   | RelationshipID  |
| IncludeInSize       | bit            |                                                                   | Y/ N            |
| AdjustFactor        | decimal(18, 2) |                                                                   |                 |
| MinorParent         | bit            |                                                                   |                 |
| IEPLastMeeting      | datetime       |                                                                   |                 |
| IEPNextMeeting      | datetime       |                                                                   |                 |
| Status              | int            |                                                                   |                 |
| Comments            | nvarchar(max)  |                                                                   |                 |
| StartDate           | datetime       |                                                                   |                 |
| EndDate             | datetime       |                                                                   |                 |
| History             | int            |                                                                   | History Version |
| Disable             | bit            |                                                                   | 0 No 1 Yes      |
| CreateUserId        | int            |                                                                   |                 |
| UpateUserId         | int            |                                                                   |                 |
| Version             | int            |                                                                   |                 |
| IsProtectiveService | bit            |                                                                   |                 |
| CID                 | nvarchar(100)  |                                                                   |                 |
| MultipleRace        | varchar(100)   |                                                                   |                 |
| CreateTime          | datetimeoffset |                                                                   |                 |
| UpdateTime          | datetimeoffset |                                                                   |                 ||

## Fam_ChildExtension           
Extended child information, mainly for future custom extensions.                  

## FAM_Parent

| Field               | Type           | Index  | Description                       |
|---------------------|----------------|--------|-----------------------------------|
| ParentID            | int identity   | PK     | Primary key, unique identifier    |
| FamilyID            | int            | IX, CL | Foreign key to family             |
| LastName            | nvarchar(30)   |        | Last name of the parent           |
| FirstName           | nvarchar(30)   |        | First name of the parent          |
| MiddleInitial       | nvarchar(10)   |        | Middle initial of the parent      |
| DateOfBirth         | datetime       |        | Date of birth                     |
| Gender              | nvarchar(32)   |        | Gender of the parent              |
| SSNumber            | nvarchar(30)   |        | Social Security Number            |
| PublicSSNumber      | bit            |        | Is SSN public (Y/N)               |
| Language            | int            |        | Language ID                       |
| LimitedEnglish      | bit            |        | Limited English proficiency (Y/N) |
| Ethnicity           | int            |        | Ethnicity ID                      |
| Race                | int            |        | Race ID                           |
| CitizenInfo         | int            |        | Citizen Information ID            |
| Zip                 | nvarchar(10)   |        | Zip code                          |
| Address             | nvarchar(300)  |        | Home address                      |
| Unit                | nvarchar(300)  |        | Unit number                       |
| City                | nvarchar(30)   |        | City name                         |
| CityID              | int            |        | City ID                           |
| County              | nvarchar(30)   |        | County name                       |
| CountyID            | int            |        | County ID                         |
| State               | nvarchar(30)   |        | State name                        |
| StateID             | int            |        | State ID                          |
| HomePhone           | nvarchar(35)   |        | Home phone number                 |
| WorkPhone           | nvarchar(35)   |        | Work phone number                 |
| WorkPhoneType       | nvarchar(32)   |        | Work phone type                   |
| Cell                | nvarchar(35)   |        | Cell phone number                 |
| RcvMsg              | bit            |        | Receive messages (Y/N)            |
| Email               | nvarchar(50)   |        | Email address                     |
| Relationship        | int            |        | Relationship ID                   |
| MaritalStatus       | nvarchar(32)   |        | Marital status                    |
| Responsibility      | nvarchar(32)   |        | Responsibility description        |
| IncludeInSize       | bit            |        | Include in family size (Y/N)      |
| MonthlyIncome       | decimal(18, 2) |        | Monthly income                    |
| TrainingStartDate   | datetime       |        | Training start date               |
| TrainingEndDate     | datetime       |        | Training end date                 |
| Status              | int            |        | Status                            |
| Comments            | nvarchar(max)  |        | Comments                          |
| StartDate           | datetime       |        | Start date                        |
| EndDate             | datetime       |        | End date                          |
| History             | int            |        | History version                   |
| Disable             | int            |        | Disabled status                   |
| CreateUserID        | int            |        | ID of the user who created        |
| UpdateUserID        | int            |        | ID of the user who updated        |
| Version             | int            |        | Version                           |
| BestCallNum         | nvarchar(100)  |        | Best call number                  |
| BestCallTime        | nvarchar(100)  |        | Best call time                    |
| PID                 | nvarchar(100)  |        | Parent ID                         |
| CommunicationMethod | nvarchar(100)  |        | Preferred communication method    |
| MultipleRace        | varchar(100)   |        | Multiple races description        |
| CreateTime          | datetimeoffset |        | Record creation time              |
| UpdateTime          | datetimeoffset |        | Record update time                |
 

## Fam_ParentExtension
Extended parent information, mainly for future custom extensions.

## FAM_FamilyFee

| Field                | Type           | Index    | Description                        |
|----------------------|----------------|----------|------------------------------------|
| Id                   | int identity   | PK       | Primary key, unique identifier     |
| FamilyId             | int            | IX       | Foreign key to family              |
| StartDate            | datetime       |          | Start date of the fee period       |
| EndDate              | datetime       |          | End date of the fee period         |
| IsEffective          | bit            | IX       | Whether the fee is effective (Y/N) |
| FamilySize           | int            |          | Size of the family                 |
| MonthlyIncome        | decimal(18, 3) |          | Monthly income of the family       |
| HourlyFee            | decimal(18, 3) |          | Hourly fee                         |
| FullTimeDailyFee     | decimal(18, 3) |          | Full-time daily fee                |
| PartTimeDailyFee     | decimal(18, 3) |          | Part-time daily fee                |
| Status               | int            |          | Status                             |
| Comment              | nvarchar(max)  |          | Comments                           |
| Disable              | bit            |          | Disabled status (0 No, 1 Yes)      |
| CreateUserID         | int            |          | ID of the user who created         |
| UpateUserID          | int            |          | ID of the user who updated         |
| Version              | int            |          | Version                            |
| CaseId               | int            | IX, _dta | Case ID                            |
| IncomeSource         | nvarchar(max)  |          | Source of income                   |
| SendMode             | int default 0  |          | Mode of sending                    |
| UserDefined          | bit            |          | User-defined flag                  |
| SMIMode              | int            |          | SMI mode                           |
| CeilingMonthlyIncome | decimal(38, 6) |          | Ceiling monthly income, default 0  |
| Eligible             | bit default 0  |          | Eligibility flag                   |
| CalculateExpression  | nvarchar(2048) |          | Expression for calculation         |
| ContractId           | int default 0  |          | Contract ID                        |
| CreateTime           | datetimeoffset |          | Record creation time               |
| UpdateTime           | datetimeoffset |          | Record update time                 |


## FAM_MemberIncome

| Field                | Type                  | Index   | Description                                |
|----------------------|-----------------------|---------|--------------------------------------------|
| IncomeID             | int identity          | PK      | Primary key, unique identifier             |
| FamilyID             | int                   |         | Foreign key to family                      |
| ParentID             | int                   | CL, IX  | Foreign key to parent                      |
| ChildID              | int                   |         | Foreign key to child                       |
| IncomeType           | nvarchar(32)          |         | Type of income                             |
| IncomeSource         | nvarchar(32)          |         | Source of income                           |
| PayType              | nvarchar(32)          |         | Type of pay                                |
| PayScheduleType      | nvarchar(32)          |         | Pay schedule type                          |
| RateType             | nvarchar(32)          |         | Rate type                                  |
| Rate                 | decimal(18, 2)        |         | Rate of pay                                |
| PayRateNumber        | decimal(18, 2)        |         | Number of pay rates                        |
| Fluctuate            | bit                   |         | Fluctuate (Y/N)                            |
| YTD                  | bit                   |         | Year to date (Y/N)                         |
| YTDNum               | decimal(18, 2)        |         | Year to date number                        |
| YTDStartDate         | datetime              |         | Year to date start date                    |
| YTDEndDate           | datetime              |         | Year to date end date                      |
| MonthlyIncome        | decimal(18, 2)        |         | Monthly income                             |
| TenMonthFormula      | bit                   |         | Ten month formula (Y/N)                    |
| Total                | decimal(18, 2)        |         | Total income                               |
| BizExp               | decimal(18, 2)        |         | Business expenses                          |
| Month                | decimal(18, 2)        |         | Month                                      |
| StartDate            | datetime              |         | Start date                                 |
| EndDate              | datetime              |         | End date                                   |
| Status               | int                   |         | Status                                     |
| Comment              | nvarchar(max)         |         | Comments                                   |
| History              | int                   |         | History version                            |
| Disable              | int                   |         | Disabled status                            |
| CreateUserID         | int                   |         | ID of the user who created                 |
| UpateUserID          | int                   |         | ID of the user who updated                 |
| Version              | int                   |         | Version                                    |
| EDocID               | nvarchar(50)          |         | Electronic document ID                     |
| IsEffective          | bit                   |         | Effective status (Y/N)                     |
| NeedID               | int                   |         | Need ID                                    |
| CalculateExpression  | nvarchar(300)         |         | Expression for calculation                 |
| Amount               | decimal(18, 2)        |         | Amount                                     |
| Frequency            | nvarchar(32)          |         | Frequency                                  |
| IsWages              | bit                   |         | Is wages (Y/N)                             |
| Days                 | int                   |         | Number of days                             |
| Hours                | int                   |         | Number of hours                            |
| ManualAdjust         | decimal(18, 2)        |         | Manual adjustment                          |
| PayTypeDetailId      | int                   |         | Pay type detail ID                         |
| CreateTime           | datetimeoffset        |         | Record creation time                       |
| UpdateTime           | datetimeoffset        |         | Record update time                         |

## FAM_MemberIncomeDetail

| Field           | Type             | Index   | Description                                |
|-----------------|------------------|---------|--------------------------------------------|
| IncomeDetailID  | int identity     | PK      | Primary key, unique identifier             |
| IncomeID        | int              | CL, IX  | Foreign key to income                      |
| Name            | nvarchar(100)    |         | Name                                       |
| Income          | decimal(18, 2)   |         | Income amount                              |
| PayDate         | nvarchar(100)    |         | Pay date                                   |
| Comment         | nvarchar(max)    |         | Comments                                   |
| Disable         | int              |         | Disabled status (0 No, 1 Yes)              |
| CreateUserID    | int              |         | ID of the user who created                 |
| UpateUserID     | int              |         | ID of the user who updated                 |
| Version         | int              |         | Version                                    |
| Hours           | decimal(18, 4)   |         | Number of hours                            |
| PayeeNo         | nvarchar(100)    |         | Payee number                               |
| CreateTime      | datetimeoffset   |         | Record creation time                       |
| UpdateTime      | datetimeoffset   |         | Record update time                         |


## FAM_MemberNeeds

| Field              | Type                | Index   | Description                                     |
|--------------------|---------------------|---------|-------------------------------------------------|
| NeedID             | int identity        | PK      | Primary key, unique identifier                  |
| FamilyID           | int                 |         | Foreign key to family                           |
| ParentID           | int                 | CL, IX  | Foreign key to parent                           |
| IncomeID           | int                 |         | Foreign key to income                           |
| Name               | nvarchar(100)       |         | Employer/School Name                            |
| Type               | int                 |         | Need type                                       |
| IsVariable         | bit                 |         | Is variable (Y/N)                               |
| IsOnlineClass      | bit                 |         | Is online class (Y/N)                           |
| Address            | nvarchar(300)       |         | Address                                         |
| Unit               | nvarchar(300)       |         | Unit number                                     |
| Zip                | nvarchar(30)        |         | Zip code                                        |
| City               | nvarchar(30)        |         | City name                                       |
| CityID             | int                 |         | City ID                                         |
| County             | nvarchar(30)        |         | County name                                     |
| CountyID           | int                 |         | County ID                                       |
| State              | nvarchar(30)        |         | State name                                      |
| StateID            | int                 |         | State ID                                        |
| CompanyAddress     | nvarchar(200)       |         | Company address                                 |
| CompanyUnit        | nvarchar(300)       |         | Company unit number                             |
| CompanyZip         | nvarchar(30)        |         | Company zip code                                |
| CompanyCity        | nvarchar(30)        |         | Company city name                               |
| CompanyCityID      | int                 |         | Company city ID                                 |
| CompanyCounty      | nvarchar(30)        |         | Company county name                             |
| CompanyCountyID    | int                 |         | Company county ID                               |
| ContactTitle       | nvarchar(100)       |         | Contact title                                   |
| ContactName        | nvarchar(100)       |         | Contact name                                    |
| ContactPhone       | nvarchar(35)        |         | Contact phone number                            |
| ContactPhoeType    | nvarchar(32)        |         | Contact phone type                              |
| ContactEmail       | nvarchar(50)        |         | Contact email                                   |
| ContactFax         | nvarchar(35)        |         | Contact fax                                     |
| TravelTimeBefore   | decimal(18, 2)      |         | Travel time before                              |
| TraverTimeAfter    | decimal(18, 2)      |         | Travel time after                               |
| NonPaidLunchTime   | decimal(18, 2)      |         | Non-paid lunch time                             |
| UseDays            | decimal(18, 2)      |         | Number of use days                              |
| Units              | decimal(18, 2)      |         | Units for training need                         |
| CompleteVariable   | bit                 |         | Complete variable (Y/N)                         |
| Status             | int                 |         | Status                                          |
| EDocID             | nvarchar(50)        |         | Electronic document ID                          |
| Comment            | nvarchar(max)       |         | Comments                                        |
| StartDate          | datetime            |         | Start date                                      |
| EndDate            | datetime            |         | End date                                        |
| TrainingGrade      | int                 |         | Training grade for training need                |
| History            | int                 |         | History version                                 |
| Disable            | bit                 |         | Disabled status (0 No, 1 Yes)                   |
| CreateUserID       | int                 |         | ID of the user who created                      |
| UpateUserID        | int                 |         | ID of the user who updated                      |
| Version            | int                 |         | Version                                         |
| SameAddress        | bit                 |         | Same address flag (Y/N)                         |
| IsEffective        | bit                 |         | Effective status (Y/N)                          |
| Patient            | nvarchar(32)        |         | Patient                                         |
| Title              | nvarchar(200)       |         | Title                                           |
| CalWorkActivity    | nvarchar(100)       |         | Work activity calculation                       |
| DateOfHire         | datetime            |         | Date of hire                                    |
| Meta               | nvarchar(max)       |         | Metadata                                        |
| Schedule           | nvarchar(max)       |         | Schedule                                        |
| MaxHoursPerWeek    | decimal(38, 6)      |         | Maximum hours per week                          |
| MaxDaysPerWeek     | decimal(38, 6)      |         | Maximum days per week                           |
| CreateTime         | datetimeoffset      |         | Record creation time                            |
| UpdateTime         | datetimeoffset      |         | Record update time                              |


## FAM_MemberSchedule

| Field            | Type           | Index  | Description                                                     |
|------------------|----------------|--------|-----------------------------------------------------------------|
| ScheduleID       | int identity   | PK     | Primary key, unique identifier                                  |
| NeedID           | int            | CL, IX | Foreign key to need                                             |
| NeedScheduleType | nvarchar(32)   |        | Schedule type (0:NormalTime, 1:SleepTime/Study time, 2:Summary) |
| MaxHoursPerWeek  | decimal(18, 2) |        | Maximum hours per week                                          |
| MaxDaysPerWeek   | decimal(18, 2) |        | Maximum days per week                                           |
| MaxHoursPerDay   | decimal(18, 2) |        | Maximum hours per day                                           |
| MonIn            | datetime       |        | Monday in time                                                  |
| MonOut           | datetime       |        | Monday out time                                                 |
| TueIn            | datetime       |        | Tuesday in time                                                 |
| TueOut           | datetime       |        | Tuesday out time                                                |
| WedIn            | datetime       |        | Wednesday in time                                               |
| WedOut           | datetime       |        | Wednesday out time                                              |
| ThuIn            | datetime       |        | Thursday in time                                                |
| ThuOut           | datetime       |        | Thursday out time                                               |
| FriIn            | datetime       |        | Friday in time                                                  |
| FriOut           | datetime       |        | Friday out time                                                 |
| SatIn            | datetime       |        | Saturday in time                                                |
| SatOut           | datetime       |        | Saturday out time                                               |
| SunIn            | datetime       |        | Sunday in time                                                  |
| SunOut           | datetime       |        | Sunday out time                                                 |
| Comment          | nvarchar(max)  |        | Comments                                                        |
| Disable          | bit            |        | Disabled status (0 No, 1 Yes)                                   |
| CreateUserID     | int            |        | ID of the user who created                                      |
| UpateUserID      | int            |        | ID of the user who updated                                      |
| Version          | int            |        | Version                                                         |
| IsManual         | bit            |        | Is manual (Y/N)                                                 |
| IsVariable       | bit default 0  |        | Is variable (Y/N)                                               |
| CreateTime       | datetimeoffset |        | Record creation time                                            |
| UpdateTime       | datetimeoffset |        | Record update time                                              |

## FAM_NeedSummary

| Field            | Type             | Index | Description                      |
|------------------|------------------|-------|----------------------------------|
| Id               | int identity     | PK    | Primary key, unique identifier   |
| FamilyId         | int              |       | Foreign key to family            |
| CaseId           | int              |       | Case ID                          |
| Description      | nvarchar(2048)   |       | Description                      |
| Meta             | nvarchar(max)    |       | Metadata                         |
| IsVariable       | bit              |       | Is variable (Y/N)                |
| StartDate        | datetime         |       | Start date                       |
| EndDate          | datetime         |       | End date                         |
| Disable          | bit              |       | Disabled status (Y/N)            |
| CreateUserId     | bigint           |       | ID of the user who created       |
| UpdateUserId     | bigint           |       | ID of the user who updated       |
| Version          | bigint           |       | Version                          |
| Schedule         | nvarchar(max)    |       | Schedule                         |
| MaxHoursPerWeek  | decimal(38, 6)   |       | Maximum hours per week           |
| MaxDaysPerWeek   | decimal(38, 6)   |       | Maximum days per week            |
| CreateTime       | datetimeoffset   |       | Record creation time             |
| UpdateTime       | datetimeoffset   |       | Record update time               |


## FAM_NeedSummarySchedule

| Field             | Type              | Index | Description                                              |
|-------------------|-------------------|-------|----------------------------------------------------------|
| ScheduleID        | int identity      | PK    | Primary key, unique identifier                           |
| NeedSummaryId     | int               |       | Foreign key to need summary                              |
| NeedScheduleType  | nvarchar(2048)    |       | Schedule type                                            |
| MaxHoursPerWeek   | decimal(38, 6)    |       | Maximum hours per week                                   |
| MaxDaysPerWeek    | decimal(38, 6)    |       | Maximum days per week                                    |
| MaxHoursPerDay    | decimal(38, 6)    |       | Maximum hours per day                                    |
| MonIn             | datetime          |       | Monday in time                                           |
| MonOut            | datetime          |       | Monday out time                                          |
| TueIn             | datetime          |       | Tuesday in time                                          |
| TueOut            | datetime          |       | Tuesday out time                                         |
| WedIn             | datetime          |       | Wednesday in time                                        |
| WedOut            | datetime          |       | Wednesday out time                                       |
| ThuIn             | datetime          |       | Thursday in time                                         |
| ThuOut            | datetime          |       | Thursday out time                                        |
| FriIn             | datetime          |       | Friday in time                                           |
| FriOut            | datetime          |       | Friday out time                                          |
| SatIn             | datetime          |       | Saturday in time                                         |
| SatOut            | datetime          |       | Saturday out time                                        |
| SunIn             | datetime          |       | Sunday in time                                           |
| SunOut            | datetime          |       | Sunday out time                                          |
| Comment           | nvarchar(2048)    |       | Comments                                                 |
| IsManual          | bit               |       | Is manual (Y/N)                                          |
| Disable           | bit               |       | Disabled status (Y/N)                                    |
| CreateUserId      | bigint            |       | ID of the user who created                               |
| UpateUserId       | bigint            |       | ID of the user who updated                               |
| Version           | bigint            |       | Version                                                  |
| IsVariable        | bit default 0     |       | Is variable (Y/N)                                        |
| CreateTime        | datetimeoffset    |       | Record creation time                                     |
| UpdateTime        | datetimeoffset    |       | Record update time                                       |


## FAM_NOA

| Field         | Type           | Index | Description                                                                                                                                             |
|---------------|----------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| NOAID         | int identity   | PK    | Primary key, unique identifier                                                                                                                          |
| FamilyID      | int            |       | Foreign key to family                                                                                                                                   |
| DocumentID    | int            |       | Document ID                                                                                                                                             |
| Action        | nvarchar(32)   |       | Action taken (1: Services Approved, 2: Services Denied, 3: Change in Service, 4: Termination of Service, 5: Termination of Service for Delinquent Fees) |
| ReasonCode    | nvarchar(300)  |       | Reason code                                                                                                                                             |
| Reason        | nvarchar(1024) |       | Reason                                                                                                                                                  |
| Distribution  | int            |       | Distribution method (0: GivenToParent, 1: MailedFirstClass, 2: MailedOther)                                                                             |
| MailOtherTxt  | nvarchar(max)  |       | Other mail text                                                                                                                                         |
| Eligiblity    | int            |       | NOA Eligibility                                                                                                                                         |
| NeedType      | int            |       | NOA NeedType                                                                                                                                            |
| IssueDate     | datetime       |       | Issue date                                                                                                                                              |
| EffectiveDate | datetime       |       | Effective date                                                                                                                                          |
| AppealDate    | datetime       |       | Appeal date                                                                                                                                             |
| Status        | int            |       | Status (0: Issued, 1: OnAppeal, 2: Rescinded, 3: Void)                                                                                                  |
| Disable       | bit            |       | Disabled status (0 No, 1 Yes)                                                                                                                           |
| CreateUserId  | int            |       | ID of the user who created                                                                                                                              |
| UpateUserId   | int            |       | ID of the user who updated                                                                                                                              |
| Version       | int            |       | Version                                                                                                                                                 |
| CaseId        | int            | IX    | Case ID                                                                                                                                                 |
| CareID        | nvarchar(1024) |       | Care ID                                                                                                                                                 |
| CertOnly      | bit            |       | Certification only flag                                                                                                                                 |
| BatchCode     | nvarchar(2048) |       | Batch code                                                                                                                                              |
| CreateTime    | datetimeoffset |       | Record creation time                                                                                                                                    |
| UpdateTime    | datetimeoffset |       | Record update time                                                                                                                                      |
