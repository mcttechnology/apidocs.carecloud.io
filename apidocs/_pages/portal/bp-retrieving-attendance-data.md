---
title: Retrieving Attendance Data
---

## Overview

This chapter focuses on the process of retrieving attendance data from CareCloud. The attendance data, crucial for
various operational and analytical purposes, is managed through the **'Claim Attendance'** entity in CareCloud. This section
provides guidance on how external systems can efficiently query and retrieve this data.

## Process Overview

1. **Submission of Attendance Data**:

   - Providers organize and submit their attendance data at the end of each month and the beginning of the following
     month.
   - The submitted data is associated with the 'Claim Attendance' entity, with detailed information contained within
     the 'Attendance' field.

2. **Query Data via API**:

   - External systems can access this attendance data through the 'Query Data API' provided by CareCloud.
   - The API enables a structured and efficient method for querying and extracting the required attendance information.

3. **Pagination in Queries**:

   - Queries for attendance data should always be executed using a paginated approach.
   - It is recommended to limit the data retrieved in each page of the query to a maximum of 1000 records to ensure
     optimal performance and manageability.

4. **Incremental Querying**:

   - To obtain updated or recent attendance data, external systems can use the 'modified' field as part of the query
     criteria.
   - The 'modified' field is a system-maintained timestamp that indicates the last update time of the data, making it
     ideal for incremental data retrieval.

5. **Querying by Date Range**:
   - Attendance data can also be queried based on specific timeframes using 'startDate' and 'endDate' fields.
   - This approach allows for fetching attendance data for a specific month or spanning multiple months, providing
     flexibility in data retrieval based on time-related requirements.

## Best Practices for Querying Attendance Data

- **Timely Retrieval**: Align data retrieval schedules to coincide with the submission patterns of the providers,
  ensuring that the most current and comprehensive data is obtained.

- **Efficient Data Handling**: Utilize the pagination feature to manage data volume effectively, especially when dealing
  with large datasets.

- **Utilizing System Fields**: Leverage system fields like 'modified' for incremental updates, ensuring that your system
  stays synchronized with the latest data without the need to retrieve the entire dataset.

- **Adapting to Time-Based Queries**: Use date-based querying for targeted data retrieval, which is particularly useful
  for generating attendance reports or conducting analyses based on specific periods.

---

Through these guidelines, external systems can effectively access and utilize attendance data from CareCloud, enabling
them to maintain updated records and perform timely analyses based on accurate and comprehensive data.
