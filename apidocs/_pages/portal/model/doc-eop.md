---
title: EOP
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | The document Id from the third-party system will be used in the Cloud to determine whether to update an existing record or create a new one.                |
| refEntityType     | string | FK    | `wks_billing`                                                                                                                                               |
| refDatasourceCode | string | FK    | `cc-provider-payment`                                                                                                                                       |
| refEntityId       | string | FK    | document related provider payment entity Id                                                                                                                 | |
| data              | object |       | document JSON data object                                                                                                                                   |
| templateCode      | string |       | portal template code                                                                                                                                        |
| language          | string |       | Supported code is either `en`: English `es`: Spanish `zh`: Chinese.                                                                                         |
| disabled          | bool   |       |                                                                                                                                                             |
| tags              | array  |       | string array                                                                                                                                                |
| category          | string |       |                                                                                                                                                             |
| metadata          | object |       | set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## Default EOP data model {id="eop-data-model"}

### For CareControl

| Field Name              | Type   | Description                                |
|-------------------------|--------|--------------------------------------------|
| EOPCode                 | string | EOP Code                                   |
| PayDate                 | string | Payment Date                               |
| ProviderID              | string | Unique Identifier for the Provider         |
| ProviderName            | string | Name of the Provider                       |
| ProviderAddress         | string | Address of the Provider                    |
| MailAddress             | string | Mailing Address                            |
| MailUnit                | string | Mailing Address Unit                       |
| MailCity                | string | City of Mailing Address                    |
| MailState               | string | State of Mailing Address                   |
| MailZip                 | string | ZIP Code of Mailing Address                |
| PaymentTotal            | number | Total Amount of Payment                    |
| ChildCarePaymentAmount  | number | Amount Paid for Child Care                 |
| AdjustmentAmount        | number | Amount of Adjustments                      |
| GarnishmentsAmount      | number | Amount of Garnishments                     |
| PreviousBalance         | number | Previous Balance Amount                    |
| Balance                 | number | Current Balance Amount                     |
| BalanceText             | string | Textual Representation of Balance          |
| PaymentCategory         | string | Category of Payment                        |
| ClaimMonth              | string | Month of the Claim                         |
| ClaimID                 | string | Unique Identifier for the Claim            |
| ClaimStartDate          | string | Start Date of the Claim                    |
| ClaimEndDate            | string | End Date of the Claim                      |
| FundingSource           | string | Source of Funding                          |
| ChildID                 | string | Unique Identifier for the Child            |
| ChildName               | string | Name of the Child                          |
| FamilyID                | string | Unique Identifier for the Family           |
| FamilyName              | string | Name of the Family                         |
| ClaimWeekStart          | string | Start Date of the Claim Week               |
| ClaimWeekEnd            | string | End Date of the Claim Week                 |
| ClaimWeekRateType       | string | Type of Rate for the Claim Week            |
| ClaimWeekRate           | number | Rate for the Claim Week                    |
| ClaimWeekQty            | number | Quantity for the Claim Week                |
| ClaimWeekAmount         | number | Amount for the Claim Week                  |
| ClaimSubTotal           | number | Subtotal for the Claim                     |
| ClaimFTPlus             | number | Additional Claim Amount for Full Time      |
| ClaimDropIn             | number | Drop-in Claim Amount                       |
| ClaimFamilyFee          | number | Claim Amount for Family Fee                |
| ClaimRegistrationFee    | number | Registration Fee Amount in the Claim       |
| ClaimTotal              | number | Total Claim Amount                         |
| AdjustedTotal           | number | Total Adjusted Claim Amount                |
| OriginalTotal           | number | Original Total Claim Amount                |
| PrintDate               | string | Date of Printing                           |
| HasAdjustment           | string | Indicator if There is an Adjustment        |
| LegerId                 | string | Ledger Identifier                          |
| VendorNo                | string | Vendor Number                              |
| PvsortName              | string | Sorted Name of the Provider/Vendor         |
| PVCountyID              | string | County Identifier for the Provider/Vendor  |
| RowNumber               | number | Row Number in a Table or Dataset           |
| FundType1               | string | Type of the First Funding                  |
| OtherAmount1            | number | Amount Associated with First Funding Type  |
| FundType2               | string | Type of the Second Funding                 |
| OtherAmount2            | number | Amount Associated with Second Funding Type |
| FundType3               | string | Type of the Third Funding                  |
| OtherAmount3            | number | Amount Associated with Third Funding Type  |
| FundType4               | string | Type of the Fourth Funding                 |
| OtherAmount4            | number | Amount Associated with Fourth Funding Type |
| FundType5               | string | Type of the Fifth Funding                  |
| OtherAmount5            | number | Amount Associated with Fifth Funding Type  |
| SumFundType1            | string | Summarized Type of the First Funding       |
| SumOtherAmount1         | number | Summarized Amount for First Funding Type   |
| SumFundType2            | string | Summarized Type of the Second Funding      |
| SumOtherAmount2         | number | Summarized Amount for Second Funding Type  |
| SumFundType3            | string | Summarized Type of the Third Funding       |
| SumOtherAmount3         | number | Summarized Amount for Third Funding Type   |
| SumFundType4            | string | Summarized Type of the Fourth Funding      |
| SumOtherAmount4         | number | Summarized Amount for Fourth Funding Type  |
| SumFundType5            | string | Summarized Type of the Fifth Funding       |
| SumOtherAmount5         | number | Summarized Amount for Fifth Funding Type   |



