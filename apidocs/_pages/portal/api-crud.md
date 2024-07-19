---
title: Data CRUD
---

The Entity CRUD (Create, Read, Update, Delete) API is a set of RESTful endpoints designed to perform basic operations on
the entities within the CareCloud system. These APIs are structured to handle specific tasks related to each entity
type, providing a straightforward way to manage data programmatically. Below are the primary methods:

## Create (POST)

- Endpoint: `POST /appdata/{Entity}/create`
- Description: This endpoint is used to create a new record of the specified entity. The data for the new entity is
  provided in the request body.

## Update (PUT)

- Endpoint: `PUT /appdata/{Entity}/update by id`
- Description: Updates an existing entity record identified by its unique ID. The updated data is sent in the
  request body.

## Retrieve (GET)

- Endpoint: `GET /appdata/{Entity}/retrieve by id`
- Description: Retrieves the details of a specific entity record using its unique ID.

## Delete (DELETE)

- Endpoint: `DELETE /appdata/{Entity}/delete by id`
- Description: Deletes a specific entity record identified by its unique ID.

Additionally, there are more complex operations that use the POST method:

## Batch Update (POST)

- Endpoint: `POST /appdata/{Entity}/update`
- Description: Allows for batch updating of multiple records based on a set of conditions specified in the 'filter'
  parameter.

## Retrieve Unique Record (POST)

- Endpoint: `POST /appdata/{Entity}/retrieve`
- Description: Retrieves a unique record that matches the specified conditions in the 'filter' parameter.

## Batch Delete (POST)

- Endpoint: `POST /appdata/{Entity}/delete`
- Description: Enables batch deletion of records that meet certain conditions defined in the 'filter' parameter.

The `retrieve` method is specifically designed for fetching single records. For queries that require retrieving multiple
records based on various criteria, the [Query Data API](Query-Data.md) should be used. This API is particularly effective for more complex
data retrieval scenarios where specific filtering, sorting, and pagination may be necessary.
