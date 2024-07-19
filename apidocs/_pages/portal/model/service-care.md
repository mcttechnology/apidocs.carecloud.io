---
title: Care Service
---

## Data Model

| Field         | Type   | Index | Description                                                                                                                                                 |
|---------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId      | string | PK    | The Care Id from the third-party system will be used in the Cloud to determine whether to update an existing Care Service record or create a new one.       |
| childId       | string | FK    | child entity Id                                                                                                                                             |
| childName     | string |       |                                                                                                                                                             |
| childDOB      | string |       | yyyyMMdd                                                                                                                                                    |
| providerId    | string | FK    | provider entity Id                                                                                                                                          |
| providerName  | string |       |                                                                                                                                                             |
| startDate     | string |       | yyyyMMdd                                                                                                                                                    |
| endDate       | string |       | yyyyMMdd                                                                                                                                                    |
| careType      | string |       | such as `interim`, `day-care`, `fcch`                                                                                                                       |
| fundingSource | string |       |                                                                                                                                                             |
| schedules     | list   |       | [schedule](#schedule-model) object list                                                                                                                     |
| isVariable    | bool   |       |                                                                                                                                                             |
| IsAlternative | bool   |       |                                                                                                                                                             |
| providerRates | list   |       | [Rate](#rate-model) object list                                                                                                                             |
| rmcRates      | list   |       | [Rate](#rate-model) object list                                                                                                                             |
| familyFee     | list   |       | family fee assignment, [FamilyFee](#family-fee-model) object list                                                                                           |
| status        | string |       | The status of the care is either `new`, `pending`, `active`, `inactive`, `void`,                                                                            |
| comment       | string |       |                                                                                                                                                             |
| data          | object |       | Custom data objects can include additional Family attributes, with field definitions adhering to established guidelines.                                    |
| disabled      | bool   |       |                                                                                                                                                             |
| tags          | array  |       | string array                                                                                                                                                |
| category      | string |       |                                                                                                                                                             |
| metadata      | object |       | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

### Schedule Model
| Field       | Type   | Description                            |
|-------------|--------|----------------------------------------|
| type        | string | such as `normal`, `school`             |
| category    | string |                                        |
| schedule    | Object | The container for the weekly schedule  |
| - Sunday    | Array  | Array of time slots for Sunday         |
| -- timeIn   | String | Start time of a time slot on Sunday    |
| -- timeOut  | String | End time of a time slot on Sunday      |
| - Monday    | Array  | Array of time slots for Monday         |
| -- timeIn   | String | Start time of a time slot on Monday    |
| -- timeOut  | String | End time of a time slot on Monday      |
| - Tuesday   | Array  | Array of time slots for Tuesday        |
| -- timeIn   | String | Start time of a time slot on Tuesday   |
| -- timeOut  | String | End time of a time slot on Tuesday     |
| - Wednesday | Array  | Array of time slots for Wednesday      |
| -- timeIn   | String | Start time of a time slot on Wednesday |
| -- timeOut  | String | End time of a time slot on Wednesday   |
| - Thursday  | Array  | Array of time slots for Thursday       |
| -- timeIn   | String | Start time of a time slot on Thursday  |
| -- timeOut  | String | End time of a time slot on Thursday    |
| - Friday    | Array  | Array of time slots for Friday         |
| -- timeIn   | String | Start time of a time slot on Friday    |
| -- timeOut  | String | End time of a time slot on Friday      |
| - Saturday  | Array  | Array of time slots for Saturday       |
| -- timeIn   | String | Start time of a time slot on Saturday  |
| -- timeOut  | String | End time of a time slot on Saturday    |
| description | string |                                        |

```json
{
  "type": "normal",
  "category": "",
  "description": "",
  "schedule": {
    "Sunday": [
      {"timeIn": "08:00", "timeOut": "12:00"},
      {"timeIn": "13:00", "timeOut": "17:00"}
    ],
    "Monday": [
      {"timeIn": "09:00", "timeOut": "12:00"},
      {"timeIn": "14:00", "timeOut": "18:00"}
    ],
    "Tuesday": [
      {"timeIn": "09:00", "timeOut": "12:00"},
      {"timeIn": "14:00", "timeOut": "18:00"}
    ],
    "Wednesday": [
      {"timeIn": "09:00", "timeOut": "12:00"},
      {"timeIn": "14:00", "timeOut": "18:00"}
    ],
    "Thursday": [
      {"timeIn": "09:00", "timeOut": "12:00"},
      {"timeIn": "14:00", "timeOut": "18:00"}
    ],
    "Friday": [
      {"timeIn": "09:00", "timeOut": "12:00"},
      {"timeIn": "14:00", "timeOut": "18:00"}
    ],
    "Saturday": [
      {"timeIn": "10:00", "timeOut": "14:00"},
      {"timeIn": "15:00", "timeOut": "19:00"}
    ]
  }
}

```
{ collapsible="true" collapsed-title="Schedule Model Example"}

### Rate Model
| Field         | Type   | Description                                          |
|---------------|--------|------------------------------------------------------|
| startDate     | string | effective date                                       |
| endDate       | string |                                                      |
| childCategory | string | such as `infant`, `2-5`, `6+`                        |
| typeFT        | string | such as `hourly`, `daily`, `weekly`, `monthly`, etc. |
| rateFT        | number |                                                      |
| typePT        | string | such as `hourly`, `daily`, `weekly`, `monthly`, etc. |
| ratePT        | number |                                                      |
| description   | string |                                                      |
| metadata      | object |                                                      |

### Family Fee {id=family-fee-model}
| Field       | Type   | Description                           |
|-------------|--------|---------------------------------------|
| startDate   | string | yyyyMMdd 20230101                     |
| endDate     | string |                                       |
| type        | string | such as `full-time`, `part-time` etc. |
| quantity    | number | monthly hours                         |
| description | string |                                       |

## CC4 Data
| Field Name        | Type   | Description                                                 |
|-------------------|--------|-------------------------------------------------------------|
| contractCode      | string |                                                             |
| contractName      | string |                                                             |
| specialNeedFactor | string |                                                             |
| IsSecondary       | bool   |                                                             |
| customerFields    | object | Set of **key-value pairs** that you can attach to an object |

## Example

```json
{
  "entityId": "care12345",
  "childId": "child67890",
  "childName": "John Doe",
  "childDOB": "20100101",
  "providerId": "provider12345",
  "providerName": "Provider ABC",
  "startDate": "20230101",
  "endDate": "20231231",
  "careType": "Day Care",
  "fundingSource": "Government",
  "schedules": [
    {
      "type": "normal",
      "category": "",
      "description": "",
      "schedule": {
        "Sunday": [
          {"timeIn": "08:00", "timeOut": "12:00"},
          {"timeIn": "13:00", "timeOut": "17:00"}
        ],
        "Monday": [
          {"timeIn": "09:00", "timeOut": "12:00"},
          {"timeIn": "14:00", "timeOut": "18:00"}
        ],
        "Tuesday": [
          {"timeIn": "09:00", "timeOut": "12:00"},
          {"timeIn": "14:00", "timeOut": "18:00"}
        ],
        "Wednesday": [
          {"timeIn": "09:00", "timeOut": "12:00"},
          {"timeIn": "14:00", "timeOut": "18:00"}
        ],
        "Thursday": [
          {"timeIn": "09:00", "timeOut": "12:00"},
          {"timeIn": "14:00", "timeOut": "18:00"}
        ],
        "Friday": [
          {"timeIn": "09:00", "timeOut": "12:00"},
          {"timeIn": "14:00", "timeOut": "18:00"}
        ],
        "Saturday": [
          {"timeIn": "10:00", "timeOut": "14:00"},
          {"timeIn": "15:00", "timeOut": "19:00"}
        ]
      }
    }
  ],
  "isVariable": false,
  "IsAlternative": false,
  "providerRates": [
    {
      "rateType": "Hourly",
      "amount": 15.00
    }
  ],
  "rmcRates": [
    {
      "rateType": "Daily",
      "amount": 100.00
    }
  ],
  "familyFee": {
    "feeAmount": 50.00
  },
  "status": "Active",
  "comment": "Regular daycare service",
  "data": {
    "additionalInfo1": "value1",
    "additionalInfo2": "value2"
  },
  "disabled": false,
  "tags": ["Tag1", "Tag2"],
  "category": "Child Care"
}

```