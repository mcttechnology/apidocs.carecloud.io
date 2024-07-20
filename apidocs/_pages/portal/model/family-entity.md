---
title: Family
---

## Data Model

| Field               | Type   | Index | Required | Description                                                                                                                                                 |
| ------------------- | ------ | ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId            | string | PK    | Y        | The Family Id from the third-party system will be used in the Cloud to determine whether to update an existing Family record or create a new one.           |
| name                | string |       | Y        |                                                                                                                                                             |
| email               | string |       |          |                                                                                                                                                             |
| phone               | string |       |          |                                                                                                                                                             |
| phone2              | string |       |          |                                                                                                                                                             |
| address             | object |       |          | [Address Model](core-resources#address)                                                                                                                     |
| mailAddress         | object |       |          | [Address Model](Core-Resources.md#core-address)                                                                                                             |
| sameAddress         | bool   |       |          |                                                                                                                                                             |
| singleParent        | bool   |       |          |                                                                                                                                                             |
| familySize          | number |       |          |                                                                                                                                                             |
| familyMonthlyIncome | number |       |          |                                                                                                                                                             |
| familyType          | string |       |          | such as `biological`, `foster`, `guardianship`,                                                                                                             |
| status              | string |       |          | The status of the family is either `new`, `pending`, `active`, `inactive`, `void`.                                                                          |
| homeless            | bool   |       |          |                                                                                                                                                             |
| language            | string |       |          | Supported code is either `en`: English `es`: Spanish `zh`: Chinese [Language](Core-Resources.md#core-language)                                              |
| comment             | string |       |          |                                                                                                                                                             |
| data                | object |       |          | Custom data objects can include additional Family attributes, with field definitions adhering to established guidelines. see default [cc4 data](#cc4-data)  |
| disabled            | bool   |       | Y        | soft delete                                                                                                                                                 |
| tags                | array  |       |          | string array,                                                                                                                                               |
| category            | string |       |          |                                                                                                                                                             |
| metadata            | object |       |          | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## CC4 Data

| Field           | Type   | Description                                                 |
| --------------- | ------ | ----------------------------------------------------------- |
| firstName       | string |                                                             |
| lastName        | string |                                                             |
| middleInitial   | string |                                                             |
| countyFamilyId  | string |                                                             |
| prohibit        | bool   |                                                             |
| prohibitReason  | string |                                                             |
| cashAidStatus   | string |                                                             |
| cashAidTermDate | string |                                                             |
| customerFields  | object | Set of **key-value pairs** that you can attach to an object |
