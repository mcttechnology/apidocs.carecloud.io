---
title: Uploading Data to CareCloud
---

## Overview

Once you obtain a developer account and the corresponding API Key, you're set to start uploading your data to CareCloud.
There are two main methods for uploading data: utilizing the API or employing specific text formats. If you're
proficient with APIs, I recommend beginning with API data uploads. This approach often facilitates a quicker
understanding of the mapping between your application's entities and CareCloud's entities.

As depicted in the accompanying diagram, importing external system data into CareCloud typically involves two key steps.
The first step involves the external system uploading data to the Portal. The second step sees the CareConnect system (
or other CareCloud product systems) retrieving this data from the Portal to update its records. This two-step process is
essential due to the often complex associations between various entities. Before the CareConnect system can update its
data, it needs to perform a certain level of normalization and processing to ensure that the data conforms to its
standards and structure. This method helps maintain data integrity and consistency across different systems within the
CareCloud ecosystem.

```js
graph TD
  subgraph External Environment
		App[External Application] --> Sync[Build Files]
  end
  Sync -- SFTP, API --> S3
	App --> OpenAPI --> Portal
	S3 --> Portal --> Family <--> CCN[Care Connect for Provider]
	Portal --> FamilyMember <--> CCN
  Portal --> Provider <--> CCN
  Portal --> Care <--> CCN
  Portal --> Claim <--> CCN
  Portal --> EOP <--> CCN
```

## Process Overview

Based on the flowchart, the data upload process involves the following steps:

1. **External Application Prepares Data**: The external system (External Application) is responsible for compiling and
   structuring the data in accordance with CareCloud's required entity data structures.

2. **Building Files**: The External Application then builds files that are ready to be synced with CareCloud.

3. **Uploading to S3 Bucket**: These files are uploaded to an S3 storage bucket, which acts as an intermediary storage
   point.

4. **OpenAPI to Portal**: Concurrently, the External Application may interact with the CareCloud Portal via OpenAPI for
   other data operations.

5. **Portal Synchronization**: The CareCloud Portal then synchronizes this data across various entities such as Family,
   FamilyMember, Provider, Care, Claim, and EOP, ensuring consistency across the Care Connect for Provider (CCN).

## Key Considerations for Data Upload

- **Entity Data Structure**: External systems must transform their data to match CareCloud's specific entity data
  structures. Refer to previous chapters for detailed data models.

- **Primary Keys for Entities**: Each entity must have its unique Primary Key (PK), and it’s crucial to maintain the
  same EntityId for each entity across updates to ensure continuity and data integrity.

- **Handling Large Data Volumes**: If an entity update involves a large volume of data (e.g., more than 5000 records),
  it is advisable to use file uploads. For API usage, it is recommended to split the data into batches, each containing
  no more than 1000 records.

- **Synchronization Frequency**: Ideally, data synchronization should occur once a day. Given that CCN updates its
  system data typically between 3-5 AM PST, external systems should aim to complete their data uploads before this
  maintenance window to ensure the latest data is incorporated.

- **Restriction on Direct API Uploads**: Direct API uploads of single entities by external systems are not permitted.
  This policy is in place to safeguard data integrity, as uploading individual entities via API can lead to incomplete
  or inconsistent data sets.

Following these best practices will ensure that external systems can efficiently and accurately synchronize their data
with CareCloud, maintaining high data quality and consistency across both platforms.

```js
<seealso>
    <category ref="related">
        <a href="Data-Sync.md">Data Model</a>
   </category>
</seealso>
```
