---
title: Note
---

## Data Model

| Field             | Type     | Index | Description                                                                                                                                                 |
|-------------------|----------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string   | PK    | The document Id from the third-party system will be used in the Cloud to determine whether to update an existing record or create a new one.                |
| refEntityType     | string   | FK    | `wks_family`, `wks_case`, `wks_provider`, `wks_claim`,                                                                                                      |
| refDatasourceCode | string   | FK    | `cc-family`, `cc-family-case`, `cc-provider`, `cc-claim`,                                                                                                   |
| refEntityId       | string   | FK    | note related entity Id                                                                                                                                      | |
| actionDescription | string   |       |                                                                                                                                                             |
| actionUser        | string   |       | user logon name or email                                                                                                                                    |
| actionTime        | datetime |       | `yyyy-MM-ddTHH:mm:ss.fffffffZ`,                                                                                                                             |
| action            | string   |       | such as `system`, `comment`, `activity`,                                                                                                                    |
| isInternal        | bool     |       |                                                                                                                                                             |
| data              | object   |       |                                                                                                                                                             |
| disabled          | bool     |       |                                                                                                                                                             |
| tags              | array    |       | string array                                                                                                                                                |
| category          | string   |       |                                                                                                                                                             |
| metadata          | object   |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
