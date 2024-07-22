---
title: Care
---

## Introduction
This section introduces the structure of the 'care' table and its relationships within the database. It specifically focuses on the connections between family members, such as the relationship between parents and children. This documentation aims to provide an overview of how family entities are interconnected.

## PAY_Care

| Field                | Type               | Index   | Description                                                        |
|----------------------|--------------------|---------|--------------------------------------------------------------------|
| CareID               | int identity       | PK, CL  | Primary key, unique identifier                                     |
| CaseID               | int                | IX      | Case ID                                                            |
| ChildID              | int                | IX      | Foreign key to child                                               |
| FamilyID             | int                | IX      | Foreign key to family                                              |
| ChildDOB             | datetime           |         | Child date of birth                                                |
| FamilyIncome         | decimal(18, 2)     |         | Family income                                                      |
| FamilySize           | int                |         | Family size                                                        |
| FamilyFeeHourly      | decimal(18, 2)     |         | Family fee per hour                                                |
| FamilyFeeFT          | decimal(18, 2)     |         | Family fee full time                                               |
| FamilyFeePT          | decimal(18, 2)     |         | Family fee part time                                               |
| CareType             | nvarchar(32)       |         | Type of care (Interim Provider, Licensed Center-Based, etc.)       |
| RmrProviderType      | nvarchar(32)       |         | RMR provider type                                                  |
| ProviderID           | int                | IX      | Foreign key to provider                                            |
| ProviderCountyID     | int                |         | Provider county ID                                                 |
| ProviderFTP          | decimal(18, 2)     |         | Full time plus                                                     |
| StartDate            | datetime           | IX, CL  | Start date                                                         |
| EndDate              | datetime           | IX      | End date                                                           |
| Contract             | int                |         | Contract                                                           |
| HasFamilyFee         | bit                |         | Has family fee (0 No, 1 Yes)                                       |
| IsPay2Parent         | bit                |         | Is pay to parent (0 No, 1 Yes)                                     |
| IsVariable           | bit                |         | Is variable (0 No, 1 Yes)                                          |
| IsLicensed           | bit                |         | Is licensed (0 No, 1 Yes)                                          |
| Comments             | nvarchar(max)      |         | Comments                                                           |
| MaxHoursPerWeek      | decimal(18, 2)     |         | Maximum hours per week                                             |
| MaxDaysPerWeek       | decimal(18, 2)     |         | Maximum days per week                                              |
| MaxHoursPerDay       | decimal(18, 2)     |         | Maximum hours per day                                              |
| VMaxHoursPerWeek     | decimal(18, 2)     |         | Variable maximum hours per week                                    |
| VMaxDaysPerWeek      | decimal(18, 2)     |         | Variable maximum days per week                                     |
| VMaxHoursPerDay      | decimal(18, 2)     |         | Variable maximum hours per day                                     |
| FTMAC                | decimal(18, 2)     |         | Full-time monthly allowable cost                                   |
| PTMAC                | decimal(18, 2)     |         | Part-time monthly allowable cost                                   |
| IsBackup             | bit                |         | Is backup care (0 No, 1 Yes)                                       |
| RelativeID           | nvarchar(60)       |         | Relative care ID if backup                                         |
| IsInHome             | bit                |         | Is in-home care (0 No, 1 Yes)                                      |
| SpecialNeedFactor    | decimal(18, 5)     |         | Special need factor                                                |
| Status               | int                |         | Status                                                             |
| Comment              | nvarchar(max)      |         | Comment                                                            |
| Disable              | bit                | IX      | Disabled status (0 No, 1 Yes)                                      |
| CreateUserID         | int                |         | ID of the user who created                                         |
| UpateUserID          | int                |         | ID of the user who updated                                         |
| Version              | int                |         | Version                                                            |
| IsCombo              | bit                |         | Is combo care (0 No, 1 Yes)                                        |
| UserDefined          | int                |         | User-defined field                                                 |
| OldEndDate           | datetime           |         | Old end date                                                       |
| Grade                | decimal(18, 2)     |         | Grade                                                              |
| UseSchoolRate        | bit                |         | Use school rate (0 No, 1 Yes)                                      |
| AgreementId          | int                |         | Agreement ID                                                       |
| TrackID              | int                |         | Track ID                                                           |
| CareVersion          | int default 0      |         | Care version                                                       |
| UDFRMC               | int default 0      |         | User-defined field related to care                                 |
| PatternedVariable    | bit                |         | Patterned variable care (0 No, 1 Yes)                              |
| CreateTime           | datetimeoffset     |         | Record creation time                                               |
| UpdateTime           | datetimeoffset     |         | Record update time                                                 |
| ContractCode         | nvarchar(100)      |         | Contract code                                                      |

## PAY_CareCalendar

| Field             | Type           | Index  | Description                                |
|-------------------|----------------|--------|--------------------------------------------|
| CareCalendarID    | int identity   | PK     | Primary key, unique identifier             |
| CareID            | int            | IX, CL | Foreign key to care                        |
| DayAttendanceType | nvarchar(32)   |        | Attendance type (School day, vacation day) |
| MonIn             | datetime       |        | Monday in time                             |
| MonOut            | datetime       |        | Monday out time                            |
| TueIn             | datetime       |        | Tuesday in time                            |
| TueOut            | datetime       |        | Tuesday out time                           |
| WedIn             | datetime       |        | Wednesday in time                          |
| WedOut            | datetime       |        | Wednesday out time                         |
| ThuIn             | datetime       |        | Thursday in time                           |
| ThuOut            | datetime       |        | Thursday out time                          |
| FriIn             | datetime       |        | Friday in time                             |
| FriOut            | datetime       |        | Friday out time                            |
| SatIn             | datetime       |        | Saturday in time                           |
| SatOut            | datetime       |        | Saturday out time                          |
| SunIn             | datetime       |        | Sunday in time                             |
| SunOut            | datetime       |        | Sunday out time                            |
| MonNH             | decimal(18, 8) |        | Monday normal hours                        |
| MonAH             | decimal(18, 8) |        | Monday additional hours                    |
| TueNH             | decimal(18, 8) |        | Tuesday normal hours                       |
| TueAH             | decimal(18, 8) |        | Tuesday additional hours                   |
| WedNH             | decimal(18, 8) |        | Wednesday normal hours                     |
| WedAH             | decimal(18, 8) |        | Wednesday additional hours                 |
| ThuNH             | decimal(18, 8) |        | Thursday normal hours                      |
| ThuAH             | decimal(18, 8) |        | Thursday additional hours                  |
| FriNH             | decimal(18, 8) |        | Friday normal hours                        |
| FriAH             | decimal(18, 8) |        | Friday additional hours                    |
| SatNH             | decimal(18, 8) |        | Saturday normal hours                      |
| SatAH             | decimal(18, 8) |        | Saturday additional hours                  |
| SunNH             | decimal(18, 8) |        | Sunday normal hours                        |
| SunAH             | decimal(18, 8) |        | Sunday additional hours                    |
| Version           | int            |        | Version                                    |


## Pay_CareClaim

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| CareID         | nvarchar(64)     | IX      | Foreign key to care                  |
| ClaimID        | int              | IX      | Claim ID                             |
| Disable        | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID   | int              |         | ID of the user who created           |
| UpdateUserID   | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |


## Pay_CareRMC

| Field          | Type             | Index   | Description                          |
|----------------|------------------|---------|--------------------------------------|
| Id             | int identity     | PK      | Primary key, unique identifier       |
| CareID         | int              |         | Foreign key to care                  |
| StartDate      | datetime         |         | Start date                           |
| AgeGroupID     | int              |         | Age group ID                         |
| ProviderRate   | varchar(32)      |         | Provider rate                        |
| FT             | varchar(32)      |         | Full-time                            |
| PT             | varchar(32)      |         | Part-time                            |
| Disable        | bit              |         | Disabled status (0 No, 1 Yes)        |
| CreateUserID   | int              |         | ID of the user who created           |
| UpdateUserID   | int              |         | ID of the user who updated           |
| Version        | int              |         | Version                              |
| EndDate        | datetime         |         | End date                             |
| CreateTime     | datetimeoffset   |         | Record creation time                 |
| UpdateTime     | datetimeoffset   |         | Record update time                   |
