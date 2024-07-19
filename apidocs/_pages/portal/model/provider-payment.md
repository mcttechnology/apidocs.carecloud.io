---
title: Provider Payment
---

## Data Model

| Field                    | Type     | Index | Description                                                                                                                                                 |
|--------------------------|----------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId                 | string   | PK    | The Provider EOP Id from the third-party system will be used in the Cloud to determine whether to update an existing record or create a new one.            |
| refEntityType            | string   | FK    | `wks_provider`,                                                                                                                                             |
| refDatasourceCode        | string   | FK    | `cc-provider`,                                                                                                                                              |
| refEntityId              | string   | FK    | provider related entity Id                                                                                                                                  |
| providerId               | string   |       |                                                                                                                                                             |
| providerName             | string   |       |                                                                                                                                                             |
| address                  | object   |       | Address                                                                                                                                                     |
| email                    | string   |       |                                                                                                                                                             |
| eopCode                  | string   |       |                                                                                                                                                             |
| payDate                  | string   |       | `yyyyMMdd`                                                                                                                                                  |
| amount                   | number   |       |                                                                                                                                                             |
| status                   | string   |       | The status of the provider is either `new`, `pending`,`active`, `processed`, `void`,                                                                        |
| items                    | list     |       | list of [item](#payment-items)                                                                                                                              |
| data                     | object   |       | Custom data objects can include additional attributes, with field definitions adhering to established guidelines.                                           |
| disabled                 | bool     |       |                                                                                                                                                             |
| tags                     | array    |       | string array                                                                                                                                                |
| category                 | string   |       |                                                                                                                                                             |
| metadata                 | object   |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## Payment Items

| Field       | Type   | Description                                          |
|-------------|--------|------------------------------------------------------|
| category    | string |                                                      |
| price       | number |                                                      |
| quantity    | number |                                                      |
| amount      | number |                                                      |
| data        | object |                                                      |
| description | string |                                                      |

## CC4 Data
| Field Name      | Type   | Description                                                 |
|-----------------|--------|-------------------------------------------------------------|
| contractCode    | string |                                                             |
| claimZeroCount  | string |                                                             |
| exportId        | string |                                                             |
| exportDate      | string | yyyyMMdd                                                    |
| familyFeeAmount | number |                                                             |
| paymentAmount   | number |                                                             |
| customerFields  | object | Set of **key-value pairs** that you can attach to an object |

## CareConnect metadata

| Field Name   | Type   | Description      |
|--------------|--------|------------------|
| customerId   | string | CCN CustomerId   |
| customerName | string | CCN customerName |

## Example

```json
{
  "entityId": "eop12345",
  "providerId": "provider123",
  "providerName": "Provider ABC",
  "customerId": "customer456",
  "customerName": "Customer XYZ",
  "address": {
    "zip": "90001",
    "state": "CA",
    "city": "City Name",
    "address1": "1234 Street Lane",
    "address2": "Suite 100",
    "county": "County Name",
    "fullZipCode": "90001-1234",
    "longitude": -118.00,
    "latitude": 34.00
  },
  "email": "provider@example.com",
  "eopCode": "EOP789",
  "payDate": "20230101",
  "amount": 1500.00,
  "items": [
    {
      "itemCode": "item001",
      "description": "Item Description 1",
      "quantity": 10,
      "unitPrice": 100.00
    },
    {
      "itemCode": "item002",
      "description": "Item Description 2",
      "quantity": 5,
      "unitPrice": 200.00
    }
  ],
  "data": {
    "additionalField1": "value1",
    "additionalField2": "value2"
  },
  "disabled": false,
  "tags": ["Tag1", "Tag2"],
  "category": "Payment Category"
}

```