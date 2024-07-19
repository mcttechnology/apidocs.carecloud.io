---
title: Downloading Data from CareCloud
---

## Overview

The process for downloading data operates in reverse to the uploading sequence previously described. In this scenario,
CareConnect uploads the updated data to the Portal, and the external systems then retrieve this updated data via
OpenAPI.

For those requiring real-time data updates, external systems must subscribe to CareCloud's submission events (details to
be determined). To effectively subscribe to these events, it's essential for the external system to have an API capable
of receiving calls from AWS SNS (Amazon Simple Notification Service). This setup ensures that the external system is
promptly notified of any data changes or updates, allowing for immediate action or synchronization. This subscription to
real-time events is crucial for maintaining up-to-date information, ensuring that the external system and CareCloud
remain aligned in their data management.

```
graph LR
  CCN -->  Attendance <--> Portal -. "Submission Event(TBD)" ..-> SNS --> Event
	subgraph External Environment
		direction LR
		Event[External Event Receiver] --> ExternalSystem
  end
	ExternalSystem <--> OpenAPI --> Portal
```

## Process Overview

1. **Query Data via API**:

   - External systems can access this attendance data through the 'Query Data API' provided by CareCloud.
   - The API enables a structured and efficient method for querying and extracting the required attendance information.

2. **Pagination in Queries**:

   - Queries for attendance data should always be executed using a paginated approach.
   - It is recommended to limit the data retrieved in each page of the query to a maximum of 1000 records to ensure
     optimal performance and manageability.

3. **Incremental Querying**:

   - To obtain updated or recent attendance data, external systems can use the 'modified' field as part of the query
     criteria.
   - The 'modified' field is a system-maintained timestamp that indicates the last update time of the data, making it
     ideal for incremental data retrieval.

4. **Querying by Date Range**:
   - Attendance data can also be queried based on specific timeframes using 'startDate' and 'endDate' fields.
   - This approach allows for fetching attendance data for a specific month or spanning multiple months, providing
     flexibility in data retrieval based on time-related requirements.

<seealso>
    <category ref="related">
        <a href="Query-Data.md">Query API</a>
   </category>
</seealso>
