---
title: Authentication
group: API
---

To ensure the security and integrity of the data, all API requests must be authenticated using your unique API key.

## API Key:

**Include API Key in Header**:

Every API request should have the API key included in the request header.

```
x-api-key: [x-api-key]

```

For example,

```
x-api-key: LXdFOv3-IN87xIkJMlhG9bDr8T

```

**Handle Expired Keys**:

API keys have a lifespan. If you encounter authentication errors and suspect that your key might have expired, please reach out to MCT for a renewed key.

## Workspace

**Include Workspace Id and Bucket Id in Header**:

```
X-Param-Override-WorkspaceId: [Workspace Id]
X-Param-Override-BucketId: [Bucket Id]
```
