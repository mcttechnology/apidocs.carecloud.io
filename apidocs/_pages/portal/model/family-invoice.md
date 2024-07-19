---
title: Family Invoice
---

## Data Model

| Field                    | Type     | Index | Description                                                                                                                                                 |
|--------------------------|----------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId                 | string   | PK    | Primary Key, Entity Identifier                                                                                                                              |
| refEntityType            | string   | FK    | `wks_family`,                                                                                                                                               |
| refDatasourceCode        | string   | FK    | `cc-family`,                                                                                                                                                |
| refEntityId              | string   | FK    | family related entity Id                                                                                                                                    |
| external_billing_account | string   |       | External Billing Account Id                                                                                                                                 |
| subject                  | string   |       | Subject                                                                                                                                                     |
| description              | string   |       | Description                                                                                                                                                 |
| post_date                | datetime |       | Post Date                                                                                                                                                   |
| due_date                 | datetime |       | Due Date                                                                                                                                                    |
| paid_date                | datetime |       | Paid Date                                                                                                                                                   |
| from_email               | string   |       | From Email                                                                                                                                                  |
| from_name                | string   |       | From Name                                                                                                                                                   |
| to_email                 | string   |       | To Email                                                                                                                                                    |
| to_name                  | string   |       | To Name                                                                                                                                                     |
| amount                   | decimal  |       | Amount                                                                                                                                                      |
| status                   | string   |       | Status                                                                                                                                                      |
| stripe_customer          | string   |       | Stripe Customer Id                                                                                                                                          |
| stripe_invoice           | string   |       | Stripe Invoice  Id                                                                                                                                          |
| data                     | object   |       | Data                                                                                                                                                        |
| items                    | list     |       | Items object list                                                                                                                                           |
| metadata                 | object   |       | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |


### Item Model

## Example

```json
{
        "entityId": "12345",
        "external_billing_account": "account123",
        "subject": "Invoice Subject",
        "description": "Description of the invoice",
        "post_date": "2023-01-01T00:00:00",
        "due_date": "2023-01-31T00:00:00",
        "paid_date": "2023-02-01T00:00:00",
        "from_email": "sender@example.com",
        "from_name": "Sender Name",
        "to_email": "recipient@example.com",
        "to_name": "Recipient Name",
        "amount": 150.00,
        "status": "Pending",
        "stripe_customer": "cust_123456789",
        "stripe_invoice": "inv_123456789",
        "data": {
            "additionalField1": "value1",
            "additionalField2": "value2"
        },
        "items": [
            {
                "itemCode": "item1",
                "quantity": 1,
                "price": 100.00
            },
            {
                "itemCode": "item2",
                "quantity": 2,
                "price": 25.00
            }
        ],
        "metadata": {
            "metaField1": "metaValue1",
            "metaField2": "metaValue2"
        }
}
```