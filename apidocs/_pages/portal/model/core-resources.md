---
title: Core Resources
---

Core resources are the basic building blocks of the MCT CareCloud API. They are used to represent the most fundamental entities in the system, such as patients, providers, and appointments.

## Address

| Field       | Type   | Description                                                   |
| ----------- | ------ | ------------------------------------------------------------- |
| zip         | string |                                                               |
| state       | string | Use two-letter codes for states, instead of their full names. |
| city        | string |                                                               |
| address1    | string |                                                               |
| address2    | string |                                                               |
| county      | string |                                                               |
| fullZipCode | string |                                                               |
| longitude   | number |                                                               |
| latitude    | number |                                                               |
| fips        | string | FIPS code                                                     |

## Language Enum

| Code | Name    | Description |
| ---- | ------- | ----------- |
| en   | English |             |
| es   | Spanish |             |
| zh   | Chinese |             |
