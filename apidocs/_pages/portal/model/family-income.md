---
title: Family Income
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | Income Id                                                                                                                                                   |
| refEntityType     | string | FK    | `wks_family`,                                                                                                                                               |
| refDatasourceCode | string | FK    | `cc-family`,                                                                                                                                                |
| refEntityId       | string | FK    | family related entity Id                                                                                                                                    | |
| data              | object |       |                                                                                                                                                             |
| comment           | string |       |                                                                                                                                                             |
| disabled          | bool   |       |                                                                                                                                                             |
| tags              | array  |       | string array                                                                                                                                                |
| category          | string |       |                                                                                                                                                             |
| metadata          | object |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## CC4 Data

| Field          | Type   | Description                                                 |
|----------------|--------|-------------------------------------------------------------|
| incomeSource   | string |                                                             |
| parentId       | string |                                                             |
| childId        | string |                                                             |
| incomeType     | string |                                                             |
| countable      | bool   |                                                             |
| startDate      | string |                                                             |
| endDate        | string |                                                             |
| monthlyIncome  | number |                                                             | 
| customerFields | object | Set of **key-value pairs** that you can attach to an object |
