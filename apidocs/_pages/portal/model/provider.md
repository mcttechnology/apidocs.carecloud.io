---
title: Provider
---

## Data Model

| Field          | Type   | Index | Required | Description                                                                                                                                                 |
|----------------|--------|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId       | string | PK    | Y        | The Provider Id from the third-party system will be used in the Cloud to determine whether to update an existing Family record or create a new one.         |
| name           | string |       | Y        |                                                                                                                                                             |
| legalName      | string |       |          |                                                                                                                                                             |
| firstName      | string |       |          |                                                                                                                                                             |
| lastName       | string |       |          |                                                                                                                                                             |
| middleInitial  | string |       |          |                                                                                                                                                             |
| dob            | string |       |          | The date of birth, **yyyyMMdd.**                                                                                                                            |
| gender         | string |       |          | such as `male`, `female`,                                                                                                                                   |
| email          | string |       | Y        |                                                                                                                                                             |
| phone          | string |       |          |                                                                                                                                                             |
| phone2         | string |       |          |                                                                                                                                                             |
| address        | object |       | Y        | [address](Core-Resources.md#core-address)                                                                                                                   |
| mailAddress    | object |       |          | [address](Core-Resources.md#core-address)                                                                                                                   |
| sameAddress    | bool   |       |          |                                                                                                                                                             |
| ethnicity      | string |       |          | The ethnicity of the family member is either  `hispanic-latino`, `no-hispanic-latino`                                                                       |
| race           | string |       |          | The race of the family member is either `caucasian`, `asian`, `american-indian`, `black`, `pacific-islander`, `other`,                                      |
| citizenInfo    | string |       |          |                                                                                                                                                             |
| providerType   | string |       |          | The type of the provider is either `licensed-center`, `infant-center`, `school`,`family`,                                                                   |
| isExempt       | bool   |       |          |                                                                                                                                                             |
| status         | string |       |          | The status of the provider is either `new`, `pending`, `active`, `inactive`, `void`,                                                                        |
| ssn            | string |       |          |                                                                                                                                                             |
| taxId          | string |       | Y        |                                                                                                                                                             |
| language       | string |       |          | [language](Core-Resources.md#core-language) Supported code is either `en`: English `es`: Spanish `zh`: Chinese.                                             |
| limitedEnglish | bool   |       |          |                                                                                                                                                             |
| license        | list   |       |          | see [license](#provider-license)                                                                                                                            |
| rate           | list   |       |          | see [rate](#provider-rate)                                                                                                                                  |
| comment        | string |       |          |                                                                                                                                                             |
| data           | object |       |          | Custom data objects can include additional Provider attributes, with field definitions adhering to established guidelines.                                  |
| disabled       | bool   |       | Y        |                                                                                                                                                             |
| tags           | array  |       |          | string array                                                                                                                                                |
| category       | string |       |          |                                                                                                                                                             |
| metadata       | object |       |          | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

### Provider License

| Field              | Type   | Index | Description                 |
|--------------------|--------|-------|-----------------------------|
| number             | string |       | The Provider license number |
| name               | string |       | provider license name       |
| capacity           | number |       |                             |
| startDate          | string |       | format `yyyyMMdd`           |
| closeDate          | string |       | format `yyyyMMdd`           |
| status             | string |       | `licensed`, `closed`        |
| insuranceAffidavit | string |       |                             |
| minAge             | string |       |                             |
| maxAge             | string |       |                             |
| comment            | string |       |                             |
| data               | object |       |                             |


### Provider Rate
| Field         | Type   | Index | Description                                                |
|---------------|--------|-------|------------------------------------------------------------|
| name          | string |       |                                                            |
| childCategory | string |       | provider rate child category, such as `infant`,`2-5`, `6+` |
| rateCategory  | string |       | such as `full-time`, `part-time`                           |
| startDate     | string |       |                                                            |
| endDate       | string |       |                                                            |
| hourly        | number |       |                                                            |
| daily         | number |       |                                                            |
| weekly        | number |       |                                                            |
| monthly       | number |       |                                                            |
| status        | string |       | `new`, `pending`, `active`, `inactive`, `void`             |
| comment       | string |       |                                                            |
| data          | object |       |                                                            |

## CC4 Data
| Field               | Type   | Description                                                 |
|---------------------|--------|-------------------------------------------------------------|
| vendorNO            | string |                                                             |
| driversLicense      | string |                                                             |
| pvCountyID          | string |                                                             |
| ftHours             | number |                                                             |
| payAbsence          | string |                                                             |
| prohibit            | bool   |                                                             |
| prohibitReason      | string |                                                             |
| cell                | string |                                                             |
| communicationMethod | string |                                                             |
| fax                 | string |                                                             |
| providerApp         | bool   |                                                             |
| portalAccount       | string |                                                             |
| PaymentMethod       | string |                                                             |
| taxLegalFirstName   | string |                                                             |
| taxLegalMI          | string |                                                             |
| taxLegalLastName    | string |                                                             |
| transitionFlag      | string |                                                             |
| rcvMsg              | bool   |                                                             |
| rmrProviderType     | string |                                                             |
| customerFields      | object | Set of **key-value pairs** that you can attach to an object |


## Example

```json
{
  "entityId": "prov123",
  "name": "Provider Name",
  "legalName": "Legal Provider Name",
  "firstName": "John",
  "lastName": "Doe",
  "middleInitial": "A",
  "dob": "19800101",
  "gender": "male",
  "email": "provider@example.com",
  "phone": "123-456-7890",
  "phone2": "098-765-4321",
  "address": {
    "zip": "12345",
    "state": "CA",
    "city": "Some City",
    "address1": "123 Main St",
    "address2": "Apt 4",
    "county": "Some County",
    "fullZipCode": "12345-6789",
    "longitude": -120.00,
    "latitude": 37.00,
    "fips": "06075"
  },
  "mailAddress": {
    "zip": "12345",
    "state": "CA",
    "city": "Other City",
    "address1": "456 Another St",
    "address2": "",
    "county": "Other County",
    "fullZipCode": "12345-6789",
    "longitude": -121.00,
    "latitude": 36.00
  },
  "sameAddress": false,
  "ethnicity": "Ethnicity",
  "race": "Race",
  "citizenInfo": "Citizen Info",
  "providerType": "family",
  "isExempt": false,
  "status": "active",
  "ssn": "123-45-6789",
  "taxId": "98-7654321",
  "language": "en",
  "limitedEnglish": false,
  "comment": "Provider comment",
  "data": {
    "externalId": 1025,
    "venderNO": "1025",
    "driversLicense": "",
    "reportLanguage": 1,
    "pvCountyID": "",
    "ftHours": 0,
    "payAbsence": "3",
    "prohibit": false,
    "prohibitReason": "",
    "cell": "(415) 599-9928",
    "communicationMethod": "",
    "fax": "",
    "providerApp": false,
    "PaymentMethod": "Check",
    "taxLegalFirstName": "",
    "taxLegalMI": "",
    "transitionFlag": false,
    "rcvMsg": false,
    "rmrProviderType": "Licensed Center"
  },
  "disabled": false,
  "tags": ["tag1", "tag2"],
  "category": "Category A"
}

```