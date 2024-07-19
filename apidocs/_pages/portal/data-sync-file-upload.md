---
title: Uploading Sync File
---

There are two primary methods for uploading files to CareConnect: using SFTP (Secure File Transfer Protocol) and via API. Each method caters to different needs and offers distinct advantages.

## SFTP Upload

### Steps for SFTP Upload:

1. **Obtain Credentials**: First, you need to apply to MCT (Management and Configuration Tool) to obtain the necessary SFTP credentials, including a key file and a username.

2. **Using an FTP Tool**: Once you have your credentials, use an FTP tool of your choice to connect to the SFTP server. This tool will facilitate the file transfer process.

3. **Manual or Automated**: The upload process can be done manually or can be automated as part of a system process, depending on your requirements and setup.

## API Upload

API-based uploading involves a two-step process, primarily used for system-level automated uploads.

### Steps for API Upload:

1. **Obtain a Signed URL**:

   - **Request**: Initiate a request to the CareConnect API to obtain a signed URL for uploading your file. This URL is S3-based and comes with a signature for security.
   - **Validity**: The obtained URL is valid for a 15-minute window, ensuring that the upload process is secure and time-bound.

2. **Upload Using the URL**:
   - **File Transfer**: Utilize the provided signed URL to upload your file. This step is typically integrated into an automated system process, allowing for seamless and efficient file uploads.
   - **Security**: The use of a signed URL ensures that the upload process is secure and that the files are transferred directly to the designated cloud storage location.

Both methods, SFTP and API, provide secure and efficient ways to upload files to CareConnect. The choice between them depends on the specific needs of your project, such as the level of automation required, the volume of data, and your operational preferences.
