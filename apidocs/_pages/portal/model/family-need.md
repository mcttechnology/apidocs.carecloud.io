---
title: Family Need
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | Need Id                                                                                                                                                     |
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

| Field             | Type   | Description                                                 |
|-------------------|--------|-------------------------------------------------------------|
| needType          | string |                                                             |
| parentId          | string |                                                             |
| incomeType        | string |                                                             |
| isVariable        | bool   |                                                             |
| startDate         | string |                                                             |
| endDate           | number |                                                             |
| totalDays         | number |                                                             |
| totalHours        | number |                                                             |
| afterHours        | number |                                                             |
| summaryTotalDays  | number |                                                             |
| summaryTotalHours | number |                                                             |
| summaryAfterHours | number |                                                             |
| customerFields    | object | Set of **key-value pairs** that you can attach to an object |

