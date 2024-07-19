---
title: Data Sync File
---

This document contains the file format reference for data file uploads in the TXT formats,
with the extension **.cc5txt**, is used for data uploads and has the following format:

```
00|Customer Code|File Type|Create Time|Reference Id
01|Entity Type|Workspace Id|Bucket Id|DataSource Code|Action Code
02|PK - field 1 code|PK - field 2 code
03|field 1 code: type|field 2 code:type|.....|field n code:type
10|field 1|field 2|.....|field n|
10|field 1|field 2|.....|field n|
10|field 1|field 2|.....|field n|
99|rows|validation code|
```

It's similar to CSV but with distinct characteristics. This format is designed to facilitate efficient and accurate data transfer.

The file is structured with rows, each representing different types of data, and uses the pipe symbol `|` as a delimiter. Each row begins with a two-digit number that signifies the row type, playing a crucial role in the data synchronization process. Rows labeled `01` to `09` are used to describe the file's metadata, including headers, configuration details, and field definitions. The `10` prefix indicates a data row, containing the actual information to be synchronized. Finally, a row beginning with `99` serves as the closing line, summarizing the file's content and providing validation information. This structured approach ensures clarity and consistency in data processing.

## File Header

The file header identifies the type of file being parsed and is composed of sections 00 to 09, which are required.

### 00 - Header

The first line of the file, designated by the prefix `00`, serves as the header row and provides essential metadata about the file. This line is structured as follows:

`00|Customer Code|File Type|Create Time|Reference ID`

- **Customer Code**: This field identifies the customer or agency to which the file is related. It is a unique identifier that helps in categorizing and managing the data synchronization specific to each customer.

- **File Type**: This indicates the type of file or the nature of the data contained within. It helps in determining the processing logic that should be applied to the file.

- **Create Time**: This is a timestamp indicating when the file was created. The format is typically in a standard date-time format, which is crucial for maintaining the sequence of file processing and for audit purposes.

- **Reference ID**: The Reference Id is a key element for tracking the file throughout its processing journey. It is used to trace the file in various stages of synchronization, from upload to final integration, and is essential for troubleshooting and ensuring the integrity of the data transfer process.

Each of these fields plays a vital role in the data synchronization process, ensuring that every file is accurately tracked, categorized, and processed according to its specific requirements.

### 01 - Metadata

The second line of the file, beginning with the prefix `01`, is a configuration row that provides critical information for the processing and management of the data file. This line is structured as follows:

`01|Entity Type|Workspace Id|Bucket Id|DataSource Code|Action Code`

- **Entity Type**: This field specifies the type of entity the data represents. The value for the Entity Type is fixed and varies based on the nature of the entity. It is crucial for categorizing the data and determining the appropriate processing logic.

- **Workspace Id**: This is an identifier provided to developers when they register their account for development purposes. The Workspace Id is used to specify the virtual workspace in the cloud where the data will be processed or stored.

- **Bucket Id**: Similar to the Workspace Id, the Bucket Id is also assigned during the developer account registration process. It identifies a specific storage location (or 'bucket') within the cloud workspace, where the data files are to be placed.

- **DataSource Code**: This code is fixed and varies according to the Entity Type. It helps in identifying the source of the data, which is essential for data validation and processing.

- **Action Code**: The Action Code is provided based on the specific business needs of the data. It instructs the cloud service on the actions to be taken once the data is received. This could involve various processes such as data validation, synchronization, transformation, or any other required operation.

Each of these fields is integral to the cloud service's ability to correctly receive and process the data. They ensure that the data is accurately routed, stored, and managed in the cloud environment, facilitating efficient and effective data synchronization.

### 02 - Keys

The third line of the file, marked with the prefix `02`, is designated as the Primary Key (PK) definition row. This line plays a crucial role in data identification and integrity within the file. It is structured as follows:

`02|PK - field 1 code|PK - field 2 code`

The use of primary keys is a fundamental aspect of database management and data synchronization processes. It ensures that each piece of data can be accurately tracked and managed throughout its lifecycle in the system. By defining primary keys in this row, the file format establishes a robust framework for data integrity and efficient data handling.

### 03 - Fields

The fourth line of the file, prefixed with `03`, is known as the field type definition row. This line is critical as it defines the structure and data types of the fields in the data rows (marked with `10`). It is structured as follows:

`03|field 1 code: type|field 2 code: type|...|field n code: type`

- **Field Code and Type**: Each segment in this row follows the format `field code: type`, where `field code` is a unique identifier for the field, and `type` specifies the data type of that field. The data types can be one of the following: `string`, `int`, `number`, `bool`, `date`, `array`, `list`, `object`. The default type is `string` if not specified.

- **Date Format**: For fields of type `date`, the format should be either `"yyyyMMddHHmmss"` or `"yyyyMMdd"`, depending on the level of precision required.

- **Boolean Values**: Fields with the `bool` type accept either `true` / `false` or `0` / `1` as valid values.

- **Array Value**: Fields of the `array` type should be comma-separated strings, such as `a,b,c` or `1,2,3`.

- **Object Value**: Fields of the `object` type should be standard JSON strings, including `"{"` and `"}"`.

- **List Value**: Fields of the `list` type should be standard array JSON strings, including `"["` and `"]"`.

- **Primary Key Fields**: Fields that are designated as primary keys (as defined in the `02` PK row) should be listed first in this row. This prioritization ensures that these critical fields are easily identifiable and processed accordingly.

- **Naming Conventions**: It's important to note that fields ending with `_id` are reserved for system-level use. Therefore, such naming should be avoided to prevent conflicts or confusion with system-defined fields.

This row is essential for ensuring that the data in the `10` Data rows is correctly interpreted and processed. By defining the data types and formats, it provides a blueprint for how the data should be handled, ensuring consistency and accuracy in data synchronization and processing.

## File Content

The file format includes two types of content rows, marked with the prefixes `10` and `90`, each serving a distinct purpose in data management.

### 10 - Data

- **Structure**: `10|field 1|field 2|...|field n|`
- **Purpose**: The `10` rows are the primary data rows, containing the actual entity data to be synchronized with the cloud.
- **Data Handling Based on Primary Key**: The cloud system uses the primary key fields defined in the `02` row to determine whether to insert new data or update existing data. This decision is based on the presence or absence of the primary key values in the cloud database.
- **Field Consistency**: The number and order of fields in a `10` row must match exactly with those defined in the `03` field type definition row. This consistency is crucial for accurate data processing.
- **Handling Empty Values**: Fields can be empty, represented by consecutive delimiters (e.g., `||`). This allows for flexibility in data entry.
- **Special Characters**: If a field value contains the pipe symbol `|`, it should be replaced with `#/#` to avoid delimiter confusion. Similarly, newline characters `\r\n` should be replaced with `#Enter#` to maintain the integrity of the data format.

### 90 - Delete

Please use 'Delete section' cautiously, as it physically removes a row of data, causing difficulties in data synchronization. You can use the 'disabled' field for a soft delete operation, which is safer.
This operation is useful in the event of a physical error, so use it cautiously and only in necessary scenarios.

- **Structure**: `90|PK1|PK2`
- **Purpose**: The `90` row is used for deletion requests. When the cloud system encounters a `90` row, it will delete the data associated with the provided primary key values.
- **Primary Key Requirement**: Only the primary key fields are required in a `90` row. These keys correspond to the records in the cloud database that need to be deleted.

In summary, the `10` rows are used for inserting or updating data based on the primary key logic, while the `90` rows are specifically for deletion requests. The careful structuring of these rows, along with adherence to the defined field formats and special character handling, ensures efficient and error-free data synchronization with the cloud service.

## File Footer

### 99 - Footer

The final line of the file is the footer, marked with the prefix `99`. This line serves as a crucial component for data integrity and validation. It is structured as follows:

`99|total rows`

- **Purpose**: The `99` row acts as the closing line of the file and is primarily used for summarizing the file content.
- **Content**: This row records the total number of data rows in the file. Specifically, it counts the sum of all `10` and `90` rows.
- **Data Validation**: The primary function of the `99` row is to facilitate data validation on the cloud side. When the file is uploaded, the cloud service uses the number in the `99` row to verify that all data rows (both for insertion/update and deletion) have been received correctly. This check helps to ensure the completeness and integrity of the data transfer.
- **Format**: The format is straightforward, with the total number of data rows provided after the delimiter.

By including the total count of the data and deletion rows, the `99` footer provides a simple yet effective way for the receiving system to perform a basic integrity check, ensuring that the file has been transmitted and received in its entirety. This mechanism is vital for maintaining the reliability of the data synchronization process.
