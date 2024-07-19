---
title: Provider Holiday
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | Holiday Id                                                                                                                                                  |
| refEntityType     | string | FK    | `wks_provider`,                                                                                                                                             |
| refDatasourceCode | string | FK    | `cc-provider`,                                                                                                                                              |
| refEntityId       | string | FK    | provider related entity Id                                                                                                                                  | |
| data              | object |       |                                                                                                                                                             |
| comment           | string |       |                                                                                                                                                             |
| disabled          | bool   |       |                                                                                                                                                             |
| tags              | array  |       | string array                                                                                                                                                |
| category          | string |       |                                                                                                                                                             |
| metadata          | object |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## CC4 Data

| Field    | Type         | Description |
|----------|--------------|-------------|
| year     | string       |             |
| holidays | object array |             |
| --name   | string       |             |
| --date   | string       | yyyyMMdd    |
| --isPaid | bool         |             |