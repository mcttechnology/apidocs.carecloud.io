---
title: Family Member
---

## Data Model

| Field          | Type   | Index | Required | Description                                                                                                                                                 |
| -------------- | ------ | ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId       | string | PK    | Y        | The Member Id from the third-party system will be used in the Cloud to determine whether to update an existing Family member record or create a new one.    |
| familyEntityId | string | FK    | Y        | The entityId to family model                                                                                                                                |
| firstName      | string |       | Y        |                                                                                                                                                             |
| lastName       | string |       | Y        |                                                                                                                                                             |
| middleInitial  | string |       | Y        |                                                                                                                                                             |
| dob            | string |       |          | The date of birth, **yyyyMMdd.**                                                                                                                            |
| gender         | string |       | Y        | such as `male`, `female`,                                                                                                                                   |
| email          | string |       |          |                                                                                                                                                             |
| phone          | string |       |          | default cell phone                                                                                                                                          |
| phone2         | string |       |          | default work phone                                                                                                                                          |
| address        | object |       |          | address                                                                                                                                                     |
| mailAddress    | object |       |          | address object                                                                                                                                              |
| sameAddress    | bool   |       |          |                                                                                                                                                             |
| ethnicity      | string |       |          | The ethnicity of the family member is either `hispanic-latino`, `no-hispanic-latino`                                                                        |
| race           | string |       |          | The race of the family member is either `caucasian`, `asian`, `american-indian`, `black`, `pacific-islander`, `other`,                                      |
| citizenInfo    | string |       |          |                                                                                                                                                             |
| includeInSize  | bool   |       |          | indicates whether a family member is included in the calculation of the family size.                                                                        |
| status         | string |       | Y        | The status of the family member is either `new`, `pending`, `active`, `inactive`, `void`.                                                                   |
| isParent       | bool   |       | Y        |                                                                                                                                                             |
| isChild        | bool   |       | Y        |                                                                                                                                                             |
| primaryParent  | bool   |       | Y        | `true` is Parent A                                                                                                                                          |
| minorParent    | bool   |       | Y        |                                                                                                                                                             |
| ssn            | string |       |          |                                                                                                                                                             |
| language       | string |       |          | Supported code is either `en`: English `es`: Spanish `zh`: Chinese.                                                                                         |
| limitedEnglish | bool   |       |          |                                                                                                                                                             |
| relationship   | string |       |          | such as `son`, `daughter`, `father`, `mother`, `foster-child`, `grandparent`, `guardian`,`other`,                                                           |
| comment        | string |       |          |                                                                                                                                                             |
| data           | object |       |          | Custom data objects can include additional Family member attributes, with field definitions adhering to established guidelines.                             |
| disabled       | bool   |       | Y        |                                                                                                                                                             |
| tags           | array  |       |          | string array                                                                                                                                                |
| category       | string |       |          |                                                                                                                                                             |
| metadata       | object |       |          | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## CC4 Data

### Child Data

| Field               | Type   | Description                                                 |
| ------------------- | ------ | ----------------------------------------------------------- |
| isProtectiveService | bool   |                                                             |
| countyChildId       | string |                                                             |
| specialNeed         | string |                                                             |
| cpsAtRisk           | string |                                                             |
| school              | string |                                                             |
| customerFields      | object | Set of **key-value pairs** that you can attach to an object |

### Parent Data

| Field             | Type   | Description                                                 |
| ----------------- | ------ | ----------------------------------------------------------- |
| countyParentId    | string |                                                             |
| familyApp         | bool   | `true` is linked family portal                              |
| portalAccount     | string | logon name                                                  |
| trainingStartDate | string | yyyyMMdd                                                    |
| trainingEndDate   | string | yyyyMMdd                                                    |
| customerFields    | object | Set of **key-value pairs** that you can attach to an object |

## Customer Fields

### CCSF

#### Child

```json
{
  "targetPopulation": "CPS,African American",
  "fCBPlacementDate": "2024-03-08T08:00:00Z",
  "lowIncome": "Below 85% SMI",
  "childwith-1015CONLY": "Relative",
  "caseStatus-1015CONLY": "LTP",
  "incountyFFA": "No",
  "eLSSiblingAdd": "N/A",
  "cAPPSiblingAdd": "N/A"
}
```
