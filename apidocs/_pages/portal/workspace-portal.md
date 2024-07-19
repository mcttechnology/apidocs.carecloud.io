---
title: Workspace Portal
---

## Overview

The Workspace Portal serves as a comprehensive platform for customers to monitor and manage various aspects of their
data
synchronization processes. It provides a user-friendly interface where customers can check the status of data
synchronization, observe file upload activities, and review essential configuration details. One of the critical
features of the Portal is the ability to view and manage API keys, which are crucial for integrating external systems
with the Portal's services. This access to real-time information and administrative controls ensures that customers have
the necessary tools to maintain efficient and seamless data operations.

![Workspace Portal](/img/portal/portal.png)

## Setting

### API Key

To access the necessary API keys and IDs for data upload, users can navigate to the 'Settings' section within the
Portal. Once there, select the 'Basic' option, where you will find the 'API Key' subsection. This area provides all the
essential details required for API usage, including the API keys and IDs. These credentials are crucial for establishing
a secure and effective connection between your external systems and the Portal's services, ensuring smooth data
integration and management. It's important for users to keep these details secure and use them appropriately to maintain
the integrity of their data synchronization processes.

![portal setting](/img/portal/portal_setting.png)

### Users and User Groups

The 'Users and User Groups' feature within the portal is designed to facilitate the addition and invitation of new users
to access the portal. This feature is instrumental in setting up varying levels of access and permissions through
different user groups. It allows for the customization of user experiences based on their specific roles and needs.

Administrators can assign users to different groups, each with distinct access privileges to various menus and
functionalities within the portal. This setup ensures a tailored and secure user experience, where access is granted
based on the relevance and necessity of information for each role.

In addition to group-based permissions, the portal also provides the flexibility to assign or modify permissions for
individual users. This granular level of control ensures that each user has access to exactly what they need, nothing
more and nothing less.

At the top of the permission hierarchy is the 'Workspace Admin' role. Users with this designation have the highest level
of access and control within the portal. They are empowered to manage and oversee the entire range of portal
functionalities, ensuring smooth operation and effective management of all portal activities.

![portal user](/img/portal/portal_user.png)

## Data

The 'Data' section of the portal is a comprehensive hub for managing all entities involved in the upload and download
processes. Users can engage in a full range of CRUD (Create, Read, Update, Delete) operations for any listed entity.
This section is crucial for maintaining the integrity and accuracy of data flowing into and out of the CareCloud system.

One of the key features of the 'Data' section is the ability to view logs of data updates. These logs provide users with
a transparent and detailed view of all changes, uploads, and downloads, enabling them to track data movements and
identify any issues promptly.

For handling complex data objects, the portal offers direct access to manipulate the raw JSON data objects. This feature
is particularly useful for advanced users who need to work closely with the data's structural details, ensuring precise
and custom adjustments as needed.

Overall, the 'Data' section serves as a vital tool for users to quickly verify the correctness of data uploads and
downloads, ensuring smooth and efficient data management in the CareCloud ecosystem.

![portal data](/img/portal/portal_data_edit.jpeg)

## Files

The 'Files' section of the portal is dedicated to managing various files associated with a Workspace, encompassing both
imported and generated files. This area becomes particularly useful when the import data process involves SFTP (Secure
File Transfer Protocol). All files transferred through SFTP are conveniently displayed here, simplifying management and
tracking.

A key functionality in this section is the ability to download files. Users can effortlessly access any file they need,
whether for review, backup, or further processing. Additionally, there's the option to re-import files. This feature is
crucial for instances where the initial import might need adjustments or in scenarios where data needs to be reprocessed
due to changes in requirements or corrections.

Overall, the 'Files' section enhances the user experience by providing a centralized location for file management,
ensuring efficient and effective handling of all file-related tasks within the CareCloud portal.

![portal files](/img/portal/portal_files.png)

### Import Data

The Import file functionality within the portal supports two distinct formats, catering to different data
synchronization needs. The first format is the [Data Sync File](Data-Sync-File.md) in a text format. This format is
particularly beneficial
for bulk data uploads or when dealing with large datasets, where a text-based file can be more manageable and
straightforward to compile.

The second format supported is the [Data Sync API's](Import-Data.md) Json format. This format is ideal for more dynamic
and programmable
data interchange. It allows for greater flexibility and complexity in the data being imported, catering to scenarios
where data structures are more intricate or require more detailed specification.

Both formats offer users the ability to choose the most suitable method for their data import needs. Whether dealing
with large volumes of data in a more static format or requiring the versatility and complexity offered by Json, the
portal provides an accommodating environment for diverse data synchronization requirements.

![portal files](portal_files_import.png)

## Reports

### Workspace Tasks

Report, Workspace Tasks, serves as a crucial tool for monitoring and troubleshooting the data import process. This
feature records and displays a comprehensive log of all import jobs, providing detailed insights into each file import
operation. The logs include key information such as the timestamp of the import, the status of the job (whether
successful, failed, or pending), and any error messages or warnings generated during the process.

![portal_tasks](portal_tasks.png)
