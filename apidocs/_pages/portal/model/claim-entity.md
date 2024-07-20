---
title: Claim
---

## Data Model

| Field         | Type   | Index | Required | Description                                                                                                                                                 |
|---------------|--------|-------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId      | string | PK    | Y        | The Claim Id from the third-party system will be used in the Cloud to determine whether to update an existing Claim record or create a new one.             |
| childId       | string | FK    | Y        | child entity Id                                                                                                                                             |
| childName     | string |       |          |                                                                                                                                                             |
| childDOB      | string |       |          | yyyyMMdd                                                                                                                                                    |
| providerId    | string | FK    | Y        | provider entity Id                                                                                                                                          |
| providerName  | string |       |          |                                                                                                                                                             |
| providerType  | string |       | Y        | The type of the provider is either `licensed-center`, `infant-center`, `school`,`family`,                                                                   |
| startDate     | string |       | Y        | yyyyMMdd                                                                                                                                                    |
| endDate       | string |       | y        | yyyyMMdd                                                                                                                                                    |
| careType      | string |       |          | such as `interim`, `day-care`, `fcch`,                                                                                                                      |
| fundingSource | string |       | Y        |                                                                                                                                                             |
| isAdjustment  | bool   |       | Y        |                                                                                                                                                             |
| familyId      | string | FK    | Y        |                                                                                                                                                             |
| claimType     | string |       |          | The type of the claim is either `normal`, `adjustment`,                                                                                                     |
| amount        | number |       |          |                                                                                                                                                             |
| items         | list   |       |          | [Claim Items](#claim-items)                                                                                                                                 |
| familyFee     | number |       |          | Family Fee Amount                                                                                                                                           |
| status        | string |       |          | The status of the claim is either `new`, `pending`,`active`, `received`, `processed`,`returned`, `void`,                                                    |
| comment       | string |       |          |                                                                                                                                                             |
| data          | object |       |          | Custom data objects can include additional Claim attributes, with field definitions adhering to established guidelines.                                     |
| disabled      | bool   |       | Y        |                                                                                                                                                             |
| tags          | array  |       |          | string array                                                                                                                                                |
| category      | string |       |          |                                                                                                                                                             |
| metadata      | object |       |          | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## Claim Items

| Field        | Type   | Description                                          |
|--------------|--------|------------------------------------------------------|
| startDate    | string | `yyyyMMdd`                                           |
| endDate      | string | `yyyyMMdd`,                                          |
| rateType     | string | such as `hourly`, `daily`, `weekly`, `monthly`, etc. |
| rateCategory | string | such as `infant`, `2-5`, `6+`,                       |
| price        | number |                                                      |
| quantity     | number |                                                      |
| amount       | number |                                                      |
| description  | string |                                                      |

## CC4 Data
| Field Name         | Type   | Description                                                 |
|--------------------|--------|-------------------------------------------------------------|
| childCareAmount    | number |                                                             |
| actualFTPlusAmount | number |                                                             |
| actualDropInAmount | number |                                                             |
| manualAdjustAmount | number |                                                             |
| specialNeedFactor  | number |                                                             |
| ffCollected        | number |                                                             |
| contractCode       | string |                                                             |
| payDate            | string | yyyyMMdd                                                    |
| exportId           | string |                                                             |
| periodStart        | string | yyyyMMdd                                                    |
| periodEnd          | string | yyyyMMdd                                                    |
| ownerName          | string |                                                             |
| ffReceiptNo        | string |                                                             |
| digitalSubmission  | bool   |                                                             |
| isSDM              | bool   |                                                             |
| sdmIsSys           | bool   |                                                             |
| child              | object |                                                             |
| - firstName        | string |                                                             |
| - lastName         | string |                                                             |
| - gender           | string |                                                             |
| - dob              | string |                                                             |
| - age              | string |                                                             |
| - school           | string |                                                             |
| - grade            | string |                                                             |
| - ssn              | string | last 4 digits                                               |
| - parentEmail      | string |                                                             |
| - parentPhone      | string |                                                             |
| - parentAddress    | object | [address](Core-Resources.md#core-address)                   |
| provider           | object |                                                             |
| - name             | string |                                                             |
| - email            | string |                                                             |
| - phone            | string |                                                             |
| - address          | object | [address](Core-Resources.md#core-address)                   |
| - taxId            | string | last 4 digits                                               |
| - isExempt         | bool   |                                                             |
| - rmrType          | string |                                                             |
| - providerType     | string |                                                             |
| agency             | object |                                                             |
| - name             | string |                                                             |
| - claimOwner       | string |                                                             |
| - email            | string |                                                             |
| - phone            | string |                                                             |
| - organization     | string |                                                             |
| careIds            | array  |                                                             |
| customerFields     | object | Set of **key-value pairs** that you can attach to an object |