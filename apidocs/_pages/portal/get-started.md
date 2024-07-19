---
title: Get started
---

Before integrating with CareCloud's API and data synchronization services, there are several key preparation steps that need to be completed. This chapter outlines the initial requirements for accessing the API, uploading data, and using SFTP for file transfers.

## Register for a Developer's Account

### API Key

To access the CareCloud API, you must first obtain an API Key. This key is essential for authenticating and authorizing your requests.

### Cloud Workspace ID and Bucket ID

For uploading data, you need to obtain a Cloud Workspace ID and a Bucket ID. These identifiers are used as parameters in data file upload operations.

### SFTP Access

If you prefer to upload files via SFTP, you must first obtain SFTP credentials, including a username and a key file.

## Error Handling

If your request is unsuccessful, the API will return an error message detailing the reason for the failure. Common errors include invalid API keys, expired keys, or requesting data that you don't have access to. Always check the error message for guidance on how to rectify the issue.

### API Rate and Quota Limits

To ensure the stability and reliability of our services, the CareCloud API, hosted on AWS API Gateway, has specific rate and quota limits for each API key. These limits are designed to prevent any unintentional or malicious overuse of the system, which could degrade the experience for all users.

### Rate Limits

- **Per Second Limit**: Each API key is limited to a specific number of requests per second (RPS). This rate limit ensures that the system remains responsive and can serve all incoming requests without delay.
- **Burst Limit**: Apart from the steady RPS, there's a burst rate limit, which allows for a sudden influx of requests but only up to a specified limit.


### Monthly Quota

Every API key has a monthly request quota. Once this quota is reached, the API key will not be able to make further requests until the start of the next month or until the quota is adjusted.

### Monitoring Your Usage

Developers are encouraged to monitor their API usage to ensure they don't unexpectedly hit these limits. AWS provides monitoring tools that can alert you when you're approaching your rate or quota limits.

### Adjusting Your Limits

If you find that the default rate or quota limits do not meet your application's needs, or if you anticipate a temporary spike in traffic, please contact MCT. We can review your requirements and adjust the limits accordingly. Ensure you provide a valid reason for the adjustment to expedite the review process.

### Support

For any technical difficulties, questions, or to obtain a new API key, please contact the MCT support team. Ensure you have your developer account details on hand to expedite the support process.