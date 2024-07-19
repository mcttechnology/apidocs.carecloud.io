---
title: Importing File Through API
---

This chapter outlines the process of importing files into the system using an API, providing an alternative to the standard method of generating sync files and uploading them via SFTP to the portal's S3 directory.

## Overview

While the typical approach involves creating sync files and uploading them to an S3 directory via SFTP, there's also the option to directly upload a file to S3 and initiate the import process using an API. This method consists of three main steps:

### Step 1: Obtaining a Signed URL via API

The first step in this process involves using an API to obtain a signed URL. This URL is unique and specifically generated to allow the secure uploading of your file to the S3 bucket. The API request for obtaining this URL should contain necessary identifiers and metadata about the file being uploaded.

### Step 2: Uploading the File Using the Signed URL

Once you have the signed URL, the next step is to upload the file to this URL. This process is done outside the API and involves directly uploading the file to the S3 bucket using the provided URL. It's crucial to ensure that the upload process is completed successfully before proceeding to the next step.

### Step 3: Triggering Data Synchronization via API

After the file has been successfully uploaded to S3, the final step is to notify the system to begin the data synchronization process. This is done through an API call that typically includes the file identifier or path in S3 and any other necessary parameters for the import process. Once this API call is made, the system begins to process the file and integrate its data.

## Get File Url

### Request

> ENDPOINTS <br/> > **POST** /appfile/file/path

```json
{
  "WorkspaceId": "example-workspace-id",
  "BucketId": "example-bucket-id",
  "EntityType": "example-entity-type",
  "FileName": "example-file-name.txt",
  "Folder": "example-folder",
  "Category": "example-category",
  "Tags": ["tag1", "tag2", "tag3"],
  "Metadata": {
    "key1": "value1",
    "key2": "value2"
  },
  "ActionId": "Track Id",
  "Description": "Track description"
}
```

#### Request Schema

| Field Name  | Type                     | Description                            |
| ----------- | ------------------------ | -------------------------------------- |
| WorkspaceId | string                   | Identifier for the workspace           |
| BucketId    | string                   | Identifier for the storage bucket      |
| FileName    | string                   | Name of the file                       |
| EntityType  | string                   | Type of the entity                     |
| Folder      | string                   | Name of the folder                     |
| Category    | string                   | Category of the file                   |
| Tags        | array of strings         | List of tags associated with the file  |
| Metadata    | dictionary (string, obj) | Key-value pairs of additional metadata |

### Response

```json
{
  "IsSuccess": true,
  "ResponseStatus": {
    "ErrorCode": "ErrorCodeValue",
    "Message": "StatusMessage",
    "StackTrace": "StackTraceDetails",
    "Errors": []
  },
  "Data": {
    "ActionId": "example-action-id",
    "File": {},
    "FileId": "example-file-id",
    "FilePath": "//s3_bucket_name/path/to/file",
    "Url": "https://example.com/file/s3_signed_url"
  }
}
```

#### Response Schema

| Field Name | Type   | Description                          |
| ---------- | ------ | ------------------------------------ |
| ActionId   | string | Identifier for the action taken      |
| File       | object | Object representing the file details |
| FileId     | string | Unique identifier for the file       |
| FilePath   | string | Path where the file is stored        |
| Url        | string | Singed URL to upload the file        |

## Uploading Files Using AWS S3 Signed URL

To upload a file to AWS S3 using a signed URL, you need to perform an HTTP PUT request to the URL with the file content. Below are examples of how you can do this in C# and Node.js.

```javascript
const fs = require("fs");
const axios = require("axios");

async function uploadFile(signedUrl, filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);
    const response = await axios.put(signedUrl, fileStream, {
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });

    console.log("File uploaded successfully:", response.status);
  } catch (error) {
    console.error("Failed to upload file:", error);
  }
}

// Usage
uploadFile("your-signed-url-here", "path-to-your-file");
```

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.IO;

public class S3Uploader
{
    public async Task UploadFileAsync(string signedUrl, string filePath)
    {
        using (var client = new HttpClient())
        {
            using (var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
            {
                var content = new StreamContent(fileStream);
                var response = await client.PutAsync(signedUrl, content);
                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("File uploaded successfully.");
                }
                else
                {
                    Console.WriteLine($"Failed to upload. Status: {response.StatusCode}");
                }
            }
        }
    }
}

// Usage
var uploader = new S3Uploader();
await uploader.UploadFileAsync("your-signed-url-here", "path-to-your-file");

```

## Import File

> ENDPOINTS <br/> > **POST** /appfile/file/import <br/>

### Asynchronous API

In scenarios where file synchronization involves large files or a significant amount of data, the process can be time-consuming. To efficiently manage such operations, the `/appdata/import/file/async` API is utilized. This asynchronous API is designed to handle lengthy data synchronization tasks without requiring the user to wait for the process to complete.

When you initiate a synchronization request using this API, it promptly returns a success flag, indicating that the file has been successfully received for processing. The actual synchronization, however, continues in the background. This approach is particularly advantageous for large files where the synchronization time can be substantial.

The progress of this background synchronization can be monitored through the Portal. This offers a convenient way to track the status of the data import without having to keep the API call open. Users can continue with other tasks and check back on the Portal to see the updated status of their file synchronization, making the entire process more efficient and user-friendly.

### Request {id="sync-data-request"}

```json
{
  "ActionId": "example-action-id",
  "Description": "Track description",
  "FileType": "cc5",
  "FileId": "example-file-id",
  "FilePath": "//s3_bucket_name/path/to/file"
}
```

**Schema**

| Field Name  | Type   | Description                                                     |
| ----------- | ------ | --------------------------------------------------------------- |
| ActionId    | string | Identifier for the action, can be new or from previous API call |
| Description | string | Description of the tracking action                              |
| FileType    | string | **Fixed value 'cc5' representing the type of file**             |
| FileId      | string | Identifier of the file, returned from the get signed URL API    |
| FilePath    | string | Path to the file in the S3 bucket, returned from the signed URL |

### Response {id="sync-data-response"}

The same response

```json
{
  "IsSuccess": true,
  "ResponseStatus": {
    "ErrorCode": "ErrorCodeValue",
    "Message": "StatusMessage",
    "StackTrace": "StackTraceDetails",
    "Errors": []
  },
  "Data": {
    "ActionId": "example-action-id",
    "File": {},
    "FileId": "example-file-id",
    "FilePath": "//s3_bucket_name/path/to/file",
    "Url": "https://example.com/file/s3_signed_url"
  }
}
```

## Check File Status

> ENDPOINTS <br/> > **GET** /appfile/file/{{ File Id }} <br/>

When the import file API is called above, you should not wait for the API to return results, but if you need to check whether the file has been imported successfully, you can use this API to check the file status.

## Conclusion

Using the API to upload files directly to S3 and trigger synchronization offers a flexible alternative to the traditional SFTP upload method. It can be particularly useful for scenarios where real-time or on-demand data import is needed. However, it's important to handle each step carefully to ensure data integrity and successful synchronization.

<seealso>
    <category ref="api">
        <a href="https://documenter.getpostman.com/view/6575661/2s9YeHbBMH#43eb76fa-88ff-4b71-9d8b-17acfa776095"> 
            Get File Path API
        </a>
        <a href="https://documenter.getpostman.com/view/6575661/2s9YeHbBMH#5cea6323-f16a-4a3d-a4a6-654c01b1b3d3"> 
            Import File API
        </a>
    </category>
</seealso>
