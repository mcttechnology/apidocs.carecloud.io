---
title: Query Data
---

## Overview

This interface allows users to fetch data based on various criteria, such as entity type, sorting, filtering, and pagination. The API endpoints and their functionalities are defined through a JSON object structure.

## Request

> ENDPOINTS <br/>
> POST /appdata/`{Entity}`/query

Entity please see [Entity Model](Data-Sync.md)

An example JSON request for querying application data might look like this:

```json
{
  "WorkspaceId": "",
  "BucketId": "",
  "Skip": 0,
  "Take": 10,
  "Query": {
    "field1": { "$gt": 100 },
    "field2": { "$in": ["value1", "value2"] }
  },
  "Sort": {
    "field1": 1,
    "field2": -1
  },
  "Fields": ["field1", "field2", "field3"],
  "WithoutTotal": false,
  "Distinct": true
}
```

### JSON Schema

The schema for the query request is as follows:

| Field Name   | Type    | Description                                       |
| ------------ | ------- | ------------------------------------------------- |
| Skip         | Integer | Number of records to skip (for pagination)        |
| Take         | Integer | Number of records to take (for pagination)        |
| Query        | object  | Defines the filter criteria (MongoDB style query) |
| Sort         | object  | Specifies sorting order of the result fields      |
| Fields       | array   | Specifies which fields to include in the response |
| WithoutTotal | bool    | If true, does not include total count of records  |
| Distinct     | bool    | If true, returns only distinct records            |

### Filter and Sort

- **Query**: The `Query` field uses a MongoDB-like syntax for filtering. For instance, `{"field1": {"$gt": 100}}` filters records where `field1` is greater than 100.

- **Sort**: The `Sort` field determines the sorting order of the fields. A value of `1` indicates ascending order, and `-1` indicates descending order. For example, `{"field1": 1, "field2": -1}` sorts by `field1` in ascending and `field2` in descending order.

## Response

Return object list

```json
{
  "IsSuccess": true,
  "ResponseStatus": {
    "ErrorCode": "ErrorCodeValue",
    "Message": "StatusMessage",
    "StackTrace": "StackTraceDetails"
  },
  "Data": []
}
```
