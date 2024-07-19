---
title:Timesheet
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | The document Id from the third-party system will be used in the Cloud to determine whether to update an existing record or create a new one.                |
| refEntityType     | string | FK    | `wks_claim`                                                                                                                                                 |
| refDatasourceCode | string | FK    | `cc-claim`                                                                                                                                                  |
| refEntityId       | string | FK    | document related claim entity Id                                                                                                                            | |
| data              | object |       | document JSON data object                                                                                                                                   |
| templateCode      | string |       | portal template code                                                                                                                                        |
| language          | string |       | Supported code is either `en`: English `es`: Spanish `zh`: Chinese.                                                                                         |
| disabled          | bool   |       |                                                                                                                                                             |
| tags              | array  |       | string array                                                                                                                                                |
| category          | string |       |                                                                                                                                                             |
| metadata          | object |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |


## Default timesheet model

### For CareControl

```Text
10|ProviderId|ClaimId|StartDate|EndDate|Status|Program|ChildName|Language|BarCode|FormCode|ChildId|FormLanguage|Year|Month|FamilyId|CaseId|ChildId
20|ClaimId|ProviderName|ProviderID|AttendanceMonth|AttendenceYear|ChildName|DOB|Age|ParentName|ParentID|SpecialistName|FundingSource|ReportProviderName|AttendanceMonthCaps|AttendanceMonthShort|MailAddress|City|State|Zip|ProviderType|ProviderPhone|Program|VenderNO|VMaxDaysPerWeek|VMaxHoursPerWeek|MaxDaysPerWeek|MaxHoursPerWeek|IsSet|IsCombo|CareIsVariable|Licensed|LicenseExempt|IsBackup|PhysicalAddress|PhysicalCity|PhysicalState|PhysicalZip|OwnerLogonName|OwnerDisplayName|OwnerOfficePhone|OwnerEmail|LocationPhone|LocationCounty|LocationAddress|LocationCity|LocationCityLower|LocationState|LocationZip|LocationMailCounty|LocationMailAddress|LocationMailCity|LocationMailState|LocationMailZip|LocationName|CMAddress|CMCity|CMState|CMZip|CMPhone|CMCityLower|SpecialistPhone|ProviderOwnerName|SchoolScheduleWithoutEnter|CareIsVariableName|SchoolSchedule|NonSchoolSchedule|PurchaseOrderNumber|ScheduleTypeSV|PvAlternateType|ChildUDFAid
30|ClaimId|StartDate|FullTimeDailyFee|PartTimeDailyFee|EffectiveDate|PartTimeFee|FullTimeFee|FFSingleDisplay|FEffective|tFamilyFee|tRateType
40|ClaimId|DayNo|DayName|Schedule1|Schedule2|Schedule3|Schedule4|Schedule5|Schedule6
50|ClaimId|DayNo|DayName|Schedule1|Schedule2|Schedule3|Schedule4|Schedule5|Schedule6
60|ClaimId|DayNo|WeekName|weekno|DayId
70|ClaimId|CareID|ScheduleType|DayAttendanceType|Sun|Mon|Tue|Wed|Thu|Fri|Sat|IsVariable|VariableName|CalendarID
80|CompanyName|Fax|CompanyAddress|CityStateZip|State|City|Web|WorkPhone|PageFooterValue|FormCode
```
| Field Name                 | Type    | Description                                            |
|----------------------------|---------|--------------------------------------------------------|
| ProviderId                 | string  | Unique identifier for the provider                     |
| ClaimId                    | string  | Unique identifier for the claim                        |
| StartDate                  | string  | Start date of the timesheet period                     |
| EndDate                    | string  | End date of the timesheet period                       |
| Status                     | string  | Status of the timesheet                                |
| Program                    | string  | Name of the program                                    |
| ChildName                  | string  | Name of the child                                      |
| Language                   | string  | Language preference                                    |
| BarCode                    | string  | Barcode identifier                                     |
| FormCode                   | string  | Form code identifier                                   |
| ChildId                    | string  | Unique identifier for the child                        |
| FormLanguage               | string  | Language of the form                                   |
| Year                       | number  | Year of the timesheet                                  |
| Month                      | number  | Month of the timesheet                                 |
| FamilyId                   | string  | Unique identifier for the family                       |
| CaseId                     | string  | Unique identifier for the case                         |
| ProviderName               | string  | Name of the provider                                   |
| AttendanceMonth            | string  | Month for which attendance is recorded                 |
| AttendanceYear             | number  | Year for which attendance is recorded                  |
| ChildName                  | string  | Name of the child                                      |
| DOB                        | string  | Date of birth of the child                             |
| Age                        | string  | Age of the child                                       |
| ParentName                 | string  | Name of the parent                                     |
| ParentID                   | string  | Unique identifier for the parent                       |
| SpecialistName             | string  | Name of the specialist                                 |
| FundingSource              | string  | Source of funding                                      |
| ReportProviderName         | string  | Name of the provider as reported                       |
| AttendanceMonthCaps        | string  | Month of attendance in uppercase                       |
| AttendanceMonthShort       | string  | Abbreviated month of attendance                        |
| MailAddress                | string  | Mailing address                                        |
| City                       | string  | City                                                   |
| State                      | string  | State                                                  |
| Zip                        | string  | Zip code                                               |
| ProviderType               | string  | Type of provider                                       |
| ProviderPhone              | string  | Phone number of the provider                           |
| Program                    | string  | Program name                                           |
| VenderNO                   | string  | Vendor number                                          |
| VMaxDaysPerWeek            | number  | Maximum days per week allowed                          |
| VMaxHoursPerWeek           | number  | Maximum hours per week allowed                         |
| MaxDaysPerWeek             | number  | Maximum days per week                                  |
| MaxHoursPerWeek            | number  | Maximum hours per week                                 |
| IsSet                      | boolean | Indicates if the setting is fixed                      |
| IsCombo                    | boolean | Indicates if there is a combination                    |
| CareIsVariable             | boolean | Indicates if care is variable                          |
| Licensed                   | boolean | Indicates if licensed                                  |
| LicenseExempt              | boolean | Indicates if license exempt                            |
| IsBackup                   | boolean | Indicates if it is a backup                            |
| PhysicalAddress            | string  | Physical address of the provider                       |
| PhysicalCity               | string  | Physical city of the provider                          |
| PhysicalState              | string  | Physical state of the provider                         |
| PhysicalZip                | string  | Physical ZIP code of the provider                      |
| OwnerLogonName             | string  | Logon name of the owner                                |
| OwnerDisplayName           | string  | Display name of the owner                              |
| OwnerOfficePhone           | string  | Office phone number of the owner                       |
| OwnerEmail                 | string  | Email of the owner                                     |
| LocationPhone              | string  | Phone number of the location                           |
| LocationCounty             | string  | County of the location                                 |
| LocationAddress            | string  | Address of the location                                |
| LocationCity               | string  | City of the location                                   |
| LocationCityLower          | string  | Lowercase city name of the location                    |
| LocationState              | string  | State of the location                                  |
| LocationZip                | string  | ZIP code of the location                               |
| LocationMailCounty         | string  | Mailing county of the location                         |
| LocationMailAddress        | string  | Mailing address of the location                        |
| LocationMailCity           | string  | Mailing city of the location                           |
| LocationMailState          | string  | Mailing state of the location                          |
| LocationMailZip            | string  | Mailing ZIP code of the location                       |
| LocationName               | string  | Name of the location                                   |
| CMAddress                  | string  | Address of the case manager                            |
| CMCity                     | string  | City of the case manager                               |
| CMState                    | string  | State of the case manager                              |
| CMZip                      | string  | ZIP code of the case manager                           |
| CMPhone                    | string  | Phone number of the case manager                       |
| CMCityLower                | string  | Lowercase city name of the case manager                |
| SpecialistPhone            | string  | Phone number of the specialist                         |
| ProviderOwnerName          | string  | Name of the provider owner                             |
| SchoolScheduleWithoutEnter | string  | School schedule without entry                          |
| CareIsVariableName         | string  | Name indicating if care is variable                    |
| SchoolSchedule             | string  | School schedule                                        |
| NonSchoolSchedule          | string  | Non-school schedule                                    |
| PurchaseOrderNumber        | string  | Purchase order number                                  |
| ScheduleTypeSV             | string  | Schedule type                                          |
| PvAlternateType            | string  | Alternate type of provider                             |
| ChildUDFAid                | string  | Unique identifier for the child in an alternate format |
| FamilyFee                  | array   |                                                        |
| --ClaimId                  | string  | Unique identifier for the claim                        |
| --StartDate                | string  | Start date related to the fee                          |
| --FullTimeDailyFee         | number  | Daily fee for full-time care                           |
| --PartTimeDailyFee         | number  | Daily fee for part-time care                           |
| --EffectiveDate            | string  | Date when the fee rates become effective               |
| --PartTimeFee              | number  | Total part-time fee                                    |
| --FullTimeFee              | number  | Total full-time fee                                    |
| --FFSingleDisplay          | string  | Display string for family fee                          |
| --FEffective               | string  | Indicates if the fee is currently effective            |
| --tFamilyFee               | number  | Total family fee                                       |
| --tRateType                | string  | Type of rate applied (full-time/part-time)             |
| CompanyInfo                | object  |                                                        |
| --CompanyName              | string  | Name of the company                                    |
| --Fax                      | string  | Fax number of the company                              |
| --CompanyAddress           | string  | Address of the company                                 |
| --CityStateZip             | string  | Combined city, state, and ZIP code                     |
| --State                    | string  | State where the company is located                     |
| --City                     | string  | City where the company is located                      |
| --Web                      | string  | Website URL of the company                             |
| --WorkPhone                | string  | Work phone number of the company                       |
| --PageFooterValue          | string  | Footer value for documents/pages                       |
| --FormCode                 | string  | Code identifying the form or document                  |

```json
{
  "ProviderId": "200141",
  "ClaimId": "154777",
  "StartDate": "2023-08-01",
  "EndDate": "2023-08-31",
  "Status": "0",
  "Program": "CAPP",
  "ChildName": "ROMAN [TRAINING] PINEDA",
  "Language": "en",
  "BarCode": "0011300154777",
  "FormCode": "Timesheet",
  "ChildId": "103017",
  "FormLanguage": "en",
  "Year": 2023,
  "Month": 8,
  "FamilyId": "624354",
  "CaseId": "254511",
  "ProviderDetails": {
    "ProviderName": "[Training] CAMINO AL FUTURO EARLY BILINGUAL AC",
    "ProviderID": "200141",
    "AttendanceMonth": "August",
    "AttendanceYear": 2023,
    "DOB": "03/10/2022",
    "Age": "1 - 4",
    "ParentName": "MARYLOU [TRAINING] CRUZ",
    "ParentID": "624354",
    "SpecialistName": "Cynthia Guerrero",
    "FundingSource": "CDSS"
  },
  "DailySchedules": [
    {
      "DayNo": 1,
      "DayName": "Sunday",
      "Schedule1": "No Care"
    }
  ],
  "WeeklyDetails": [
    {
      "Date": "2023-08-01",
      "DayName": "Tuesday",
      "WeekNo": 31,
      "DayId": "01"
    }
  ],
  "SpecialDetails": {
    "CareID": "560829",
    "ScheduleType": "Vacation",
    "DayAttendanceType": "2",
    "Sun": "8:00AM - 5:30PM",
    "Mon": "8:00AM - 5:30PM"
  }
}
```
{ collapsible="true" collapsed-title="Timesheet"}

