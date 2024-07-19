---
title: Family Case
---

## Data Model

| Field             | Type   | Index | Required | Description                                                                                                                                                 |
|-------------------|--------|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | Y        | The document Id from the third-party system will be used in the Cloud to determine whether to update an existing record or create a new one.                |
| name              | string |       |          | case name                                                                                                                                                   |
| refEntityType     | string |       |          | `wks_family`,                                                                                                                                               |
| refDatasourceCode | string |       |          | `cc-family`,                                                                                                                                                |
| refEntityId       | string |       |          | family related entity Id                                                                                                                                    |
| status            | string |       |          | The status of the family is either `new`, `pending`, `active`, `inactive`, `void`,                                                                          |
| data              | object |       |          |                                                                                                                                                             |
| comment           | string |       |          |                                                                                                                                                             |                                                                                                                                                                  |
| disabled          | bool   |       |          |                                                                                                                                                             |
| tags              | array  |       |          | string array                                                                                                                                                |
| category          | string |       |          | `fundingsource` for family case                                                                                                                             |
| metadata          | object |       |          | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## CC4 Data

| Field                        | Type   | Description                                                 |
|------------------------------|--------|-------------------------------------------------------------|
| specialist                   | string |                                                             |
| source                       | string |                                                             |
| reportCounty                 | string |                                                             |
| feeWaiver                    | bool   |                                                             |
| cps                          | bool   |                                                             |
| familySize                   | number |                                                             |
| requestDate                  | string |                                                             |
| reCertifyDate                | string |                                                             |
| noaEligibilityType           | string |                                                             |
| noaNeedType                  | string |                                                             |
| contractCode                 | string |                                                             |
| eligibility                  | string |                                                             |
| divisionNo                   | string |                                                             |
| trustLinePending             | bool   |                                                             |
| calWorkActivity              | string |                                                             |
| signDate                     | string |                                                             |
| initialSubsidy               | string |                                                             |
| firstDateOfSubsidizedService | string |                                                             |
| stage1EndDate                | string |                                                             |
| stage2StarDate               | string |                                                             |
| stage2EndDate                | string |                                                             |
| stage3StarDate               | string |                                                             |
| customerFields               | object | Set of **key-value pairs** that you can attach to an object |

