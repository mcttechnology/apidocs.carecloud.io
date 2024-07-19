---
title: Import Data
---

## Overview

The Data Sync API is designed for efficient synchronization of small to moderate batches of data.
While the previous chapter emphasized large-scale data upload via TXT files, this chapter introduces a more flexible API model that is essentially aligned with the TXT file model but leverages the convenience of API for data operations.

## Request

> ENDPOINTS <br/> > **POST** /appfile/file/import/data

Below is an example of a JSON request for importing application data:

```json
{
  "ImportData": {
    "header": {
      "customer": "CustomerName",
      "fileType": "FileType",
      "metadata": {
        "keys": ["pkfield1"],
        "entityType": "EntityType",
        "workspaceId": "WorkspaceID",
        "bucketId": "BucketID",
        "dataSource": "DataSource",
        "fileCreateTime": "FileCreateTime",
        "flowType": "FlowType"
      },
      "FieldMappings": {
        "pkfield1": {
          "code": "pkfield1",
          "name": "pk",
          "type": "string"
        },
        "field2": {
          "code": "field2",
          "name": "Name1",
          "type": "string",
          "dictionary": {
            "key1": "value1",
            "key2": "value2"
          }
        }
      }
    },
    "data": [
      {
        "pkfield1": "value1",
        "field2": "value2"
      }
    ],
    "delete": [
      {
        "pkfield1": "value1"
      }
    ],
    "footer": {
      "total": 10
    },
    "InstanceId": "InstanceID"
  }
}
```

### JSON Schema

The JSON schema for the request is detailed in the following table:

| Field Name         | Type               | Description                                                                             |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------- |
| ImportData         | Object             | Container for import data                                                               |
| - header           | Object             | Contains file mapping information                                                       |
| -- customer        | String             | Name of the customer                                                                    |
| -- fileType        | String             | Type of the file                                                                        |
| -- metadata        | Object             | Metadata related to the file                                                            |
| --- keys           | Array of Strings   | List of keys for identifying records                                                    |
| --- entityType     | String             | Type of the entity                                                                      |
| --- workspaceId    | String             | Identifier of the workspace                                                             |
| --- bucketId       | String             | Identifier of the bucket                                                                |
| --- dataSource     | String             | Source of the data                                                                      |
| --- fileCreateTime | String             | Creation time of the file                                                               |
| --- flowType       | String             | Type of the data flow                                                                   |
| -- fieldMappings   | Object             | Mapping of file columns to entity fields                                                |
| --- [code]         | Object             | Mapping details for each filed                                                          |
| ---- code          | String             | Code associated with the filed                                                          |
| ---- name          | String             | Name of the filed                                                                       |
| ---- type          | String             | Data type of the filed (`string`, `number`, `date`, `bool`, `array`, `object`, `list`,) |
| ---- dictionary    | Object             | Transformation rules for filed values                                                   |
| - data             | Array of Objects   | Data to be inserted or updated                                                          |
| - delete           | Array of PK fields | Data to be deleted                                                                      |
| - footer           | Object             | Additional information in the footer                                                    |
| -- total           | number             | total data count                                                                        |
| - InstanceId       | String             | Unique identifier for the instance                                                      |

Please refer to the data models in the following sections to determine the structure of the data object.

<warning>
Please use 'delete' cautiously, as it physically removes a row of data, causing difficulties in data synchronization. You can use the 'disabled' field for a soft delete operation, which is safer.
This operation is useful in the event of a physical error, so use it cautiously and only in necessary scenarios.
</warning>

## Response

By returning a file object in the response, the Data Sync API ensures that users receive detailed, actionable information about their data synchronization requests.

```json
{
  "IsSuccess": true,
  "ResponseStatus": {
    "ErrorCode": "ErrorCodeValue",
    "Message": "StatusMessage",
    "StackTrace": "StackTraceDetails",
    "Errors": []
  },
  "Data": {
    "ActionId": "ActionID",
    "File": {
      "FileId": "FileID",
      "FilePath": "FilePath",
      "Url": "FileURL"
    }
  }
}
```

| Field Name | Type   | Description                                |
| ---------- | ------ | ------------------------------------------ |
| ActionId   | String | Unique identifier for the performed action |
| File       | Object | Container for the file details             |
| - FileId   | String | Unique identifier of the file              |
| - FilePath | String | Path where the file is stored              |
| - Url      | String | URL to access or download the file         |

<seealso>
    <category ref="api">
        <a href="https://documenter.getpostman.com/view/6575661/2s9YeHbBMH#fedeae74-0265-4d73-9b9b-9f7768c83c49"> Import data API</a>
    </category>
</seealso>
