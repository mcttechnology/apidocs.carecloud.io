---
title: Claim Attendance
---

## Data Model

| Field             | Type   | Index | Description                                                                                                                                                 |
|-------------------|--------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId          | string | PK    | The Claim Id from the third-party system will be used in the Cloud to determine whether to update an existing Claim record or create a new one.             |
| claimId           | string | FK    | claim entity Id                                                                                                                                             |
| childId           | string | FK    | child entity Id                                                                                                                                             |
| childName         | string |       |                                                                                                                                                             |
| childDOB          | string |       | yyyyMMdd                                                                                                                                                    |
| providerId        | string | FK    | provider entity Id                                                                                                                                          |
| providerName      | string |       |                                                                                                                                                             |
| providerType      | string |       | The type of the provider is either `licensed-center`, `infant-center`, `school`,`family`,                                                                   |
| startDate         | string |       | yyyyMMdd                                                                                                                                                    |
| endDate           | string |       | yyyyMMdd                                                                                                                                                    | |
| familyId          | string | FK    | family entity id                                                                                                                                            |
| **attendance**    | object |       | [Attendance submission Model](#attendance-submission-model)                                                                                                 |
| parentSignDate    | string |       | yyyyMMddHHmmss                                                                                                                                              |
| parentSignature   | string |       | Base64 image                                                                                                                                                |
| providerSignDate  | string |       | yyyyMMddHHmmss                                                                                                                                              |
| providerSignature | string |       | Base64 image                                                                                                                                                |
| status            | string |       | The status of the care is either `new`, `pending`, `active`, `inactive`, `void`,                                                                            |
| comment           | string |       |                                                                                                                                                             |
| data              | object |       | Custom data objects can include additional Submission attributes, with field definitions adhering to established guidelines.                                |
| disabled          | bool   |       |                                                                                                                                                             |
| tags              | array  |       | string array                                                                                                                                                |
| category          | string |       |                                                                                                                                                             |
| metadata          | object |       | Set of **key-value pairs** that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |

## Attendance submission Model

| Field Name                              | Type    | Description                                                |
|-----------------------------------------|---------|------------------------------------------------------------|
| header                                  | object  | Container for header information                           |
| - agencycode                            | string  | Agency code                                                |
| - type                                  | string  | Type of the document (e.g., attendance)                    |
| - createtime                            | string  | Creation time of the document                              |
| body                                    | object  | Container for the body of the document                     |
| - claimid                               | string  | Unique claim identifier                                    |
| - invoiceamount                         | number  | Invoice amount (null indicates potentially a number)       |
| - familyfee                             | number  | Family fee (null indicates potentially a number)           |
| - comment                               | string  | Comment (null indicates a string type)                     |
| - attendanceinfo                        | array   | Array of attendance information objects                    |
| --- attendancedate                      | string  | Date of attendance                                         |
| --- isabsence                           | boolean | Indicates if there was an absence                          |
| --- absencetype                         | string  | Type of absence (null indicates a string type)             |
| --- signinout                           | array   | Array of sign-in and sign-out information                  |
| ----- signin                            | string  | Sign-in time                                               |
| ----- signout                           | string  | Sign-out time                                              |
| ----- signInId                          | string  | Unique sign-in identifier                                  |
| ----- signOutId                         | string  | Unique sign-out identifier                                 |
| ----- comment                           | string  | Comment related to sign-in/out                             |
| --- dailysummary                        | object  | Summary of daily attendance information                    |
| ----- totaldays                         | string  | Total days attended                                        |
| ----- nhtotaldays                       | number  | Total non-holiday days attended (null indicates number)    |
| ----- ahtotaldays                       | number  | Total holiday days attended (null indicates number)        |
| ----- thtotalhours                      | number  | Total hours attended                                       |
| ----- nhtotalhours                      | number  | Total non-holiday hours attended                           |
| ----- ahtotalhours                      | number  | Total holiday hours attended                               |
| ----- satotalhours                      | number  | Total Saturday hours attended (null indicates number)      |
| ----- sutotalhours                      | number  | Total Sunday hours attended (null indicates number)        |
| ----- totalabsence                      | string  | Total days of absence                                      |
| summary                                 | object  | Container for summary of attendance                        |
| - [wk1, wk2, wk3, wk4, wk5, wk6, month] | object  | Weekly and monthly attendance summaries                    |
| --- totaldays                           | string  | Total days in the period                                   |
| --- nhtotaldays                         | string  | Total non-holiday days in the period                       |
| --- ahtotaldays                         | string  | Total holiday days in the period                           |
| --- thtotalhours                        | number  | Total hours in the period                                  |
| --- nhtotalhours                        | number  | Total non-holiday hours in the period                      |
| --- ahtotalhours                        | number  | Total holiday hours in the period                          |
| --- satotalhours                        | number  | Total Saturday hours in the period (null indicates number) |
| --- sutotalhours                        | number  | Total Sunday hours in the period (null indicates number)   |
| --- totalabsence                        | string  | Total days of absence in the period                        |
| version                                 | string  | Document version                                           |
| versiondate                             | string  | Date of the version                                        |
| DigitalSubmission                       | string  | Digital submission indicator                               |
| SubmitDate                              | string  | Date of submission                                         |
| MissingDailySignature                   | string  | Indicator for missing daily signature                      |
| MissingConfirmSignature                 | string  | Indicator for missing confirmation signature               |
| footer                                  | object  | Container for footer information                           |
| - crc                                   | string  | CRC checksum value                                         |

## For CareConnect metadata

| Field Name   | Type   | Description      |
|--------------|--------|------------------|
| customerId   | string | CCN CustomerId   |
| customerName | string | CCN customerName |


### Example

```json
{
  "header": {
    "agencycode": "RBUSD",
    "type": "attendance",
    "createtime": "20170419"
  },
  "body": {
    "claimid": "35293",
    "invocieamount": null,
    "familyfee": null,
    "comment": null,
    "attendanceinfo": [
      {
        "attendancedate": "20170103",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170103 02:44 PM",
            "signout": "20170103 05:05 PM",
            "signInId": "a8a87698-7b80-425e-835c-8caf41d95736",
            "signOutId": "5122e453-eb79-4ec7-ad80-6e75d6cb26ee",
            "comment": "Sync from EAttendanceTime :a8a87698-7b80-425e-835c-8caf41d95736"
          },
          {
            "signin": "20170103 07:00 AM",
            "signout": "20170103 07:56 AM",
            "signInId": "51d17406-8889-45a0-b0fb-08457ca97774",
            "signOutId": "20c28ac0-2dd4-4d9b-9565-e9b6d9d7c6f7",
            "comment": "Sync from EAttendanceTime :51d17406-8889-45a0-b0fb-08457ca97774"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.28",
          "nhtotalhours": "3.28",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170104",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170104 01:46 PM",
            "signout": "20170104 05:03 PM",
            "signInId": "67268325-898b-48e6-abf0-26d01f28e816",
            "signOutId": "500c0d5d-a52e-4e58-ad92-608796b7b95f",
            "comment": "Sync from EAttendanceTime :67268325-898b-48e6-abf0-26d01f28e816"
          },
          {
            "signin": "20170104 06:33 AM",
            "signout": "20170104 07:57 AM",
            "signInId": "e8b9a9bb-6d0a-433d-bb91-f669f0315f5a",
            "signOutId": "be577498-4dce-4010-826c-3682cc0ec776",
            "comment": "Sync from EAttendanceTime :e8b9a9bb-6d0a-433d-bb91-f669f0315f5a"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "4.68",
          "nhtotalhours": "4.68",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170105",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170105 02:49 PM",
            "signout": "20170105 05:01 PM",
            "signInId": "57e5c359-150b-45d1-a4f1-ec53042d5e9e",
            "signOutId": "d60370e0-be9a-468b-af57-8a0a6edae256",
            "comment": "Sync from EAttendanceTime :57e5c359-150b-45d1-a4f1-ec53042d5e9e"
          },
          {
            "signin": "20170105 06:31 AM",
            "signout": "20170105 07:58 AM",
            "signInId": "950c2594-df97-42c3-ae1f-41989b05ab2d",
            "signOutId": "95fcdd49-8bf8-4e91-97e1-f759e9e9a849",
            "comment": "Sync from EAttendanceTime :950c2594-df97-42c3-ae1f-41989b05ab2d"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.65",
          "nhtotalhours": "3.65",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170106",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170106 03:02 PM",
            "signout": "20170106 05:07 PM",
            "signInId": "ae8f1d12-2364-40be-8892-58ceae8a7f33",
            "signOutId": "9c820371-a387-460e-bda0-395fefca6ac8",
            "comment": "Sync from EAttendanceTime :ae8f1d12-2364-40be-8892-58ceae8a7f33"
          },
          {
            "signin": "20170106 06:34 AM",
            "signout": "20170106 08:02 AM",
            "signInId": "8d5deac8-10bf-11e7-a38e-06a4938c473d",
            "signOutId": "8d60621f-10bf-11e7-a38e-06a4938c473d",
            "comment": "Sync from EAttendanceTime :811653e6-4a21-4995-9f69-fa937277d722"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.55",
          "nhtotalhours": "3.55",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170109",
        "isabsence": true,
        "absencetype": null,
        "signinout": null,
        "dailysummary": {
          "totaldays": "0",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": null,
          "nhtotalhours": null,
          "ahtotalhours": null,
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "1"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170110",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170110 02:45 PM",
            "signout": "20170110 04:28 PM",
            "signInId": "0ccddae2-b12e-467a-b009-9160cf44015a",
            "signOutId": "28a27cb6-49dc-41f2-97b5-b53251fb51f6",
            "comment": "Sync from EAttendanceTime :0ccddae2-b12e-467a-b009-9160cf44015a"
          },
          {
            "signin": "20170110 06:34 AM",
            "signout": "20170110 07:59 AM",
            "signInId": "5c05879e-9173-4f5c-9859-0847817766be",
            "signOutId": "93c4a792-08d1-4d85-8ad6-9cb1540618e6",
            "comment": "Sync from EAttendanceTime :5c05879e-9173-4f5c-9859-0847817766be"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.13",
          "nhtotalhours": "3.13",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170111",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170111 01:45 PM",
            "signout": "20170111 04:09 PM",
            "signInId": "70ec5db3-57b7-4678-8755-c28c6a39802a",
            "signOutId": "c5c2efd3-44c0-4380-b807-86285be15a9c",
            "comment": "Sync from EAttendanceTime :70ec5db3-57b7-4678-8755-c28c6a39802a"
          },
          {
            "signin": "20170111 06:32 AM",
            "signout": "20170111 07:59 AM",
            "signInId": "ec6663dd-a362-42ce-84c5-8d0218bce653",
            "signOutId": "faa30f24-8cec-406a-93f5-8d24a421732a",
            "comment": "Sync from EAttendanceTime :ec6663dd-a362-42ce-84c5-8d0218bce653"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.85",
          "nhtotalhours": "3.85",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170112",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170112 06:40 AM",
            "signout": "20170112 08:10 AM",
            "signInId": "93081aeb-10bf-11e7-a38e-06a4938c473d",
            "signOutId": "930a628a-10bf-11e7-a38e-06a4938c473d",
            "comment": "Sync from EAttendanceTime :b6fe6228-ae6e-47fc-a99b-e175b4a9d0a0"
          },
          {
            "signin": "20170112 02:41 PM",
            "signout": "20170112 04:29 PM",
            "signInId": "150ba19b-da5a-49cf-a43d-4d0478a86741",
            "signOutId": "dac942c7-1754-4bc4-897e-34edeb27a7d9",
            "comment": "Sync from EAttendanceTime :150ba19b-da5a-49cf-a43d-4d0478a86741"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.30",
          "nhtotalhours": "3.30",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170113",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170113 06:34 AM",
            "signout": "20170113 07:59 AM",
            "signInId": "2a846bb2-1b5f-49ea-acc1-93728291df03",
            "signOutId": "9fc79301-0961-40f2-92a1-1224c7799b65",
            "comment": "Sync from EAttendanceTime :2a846bb2-1b5f-49ea-acc1-93728291df03"
          },
          {
            "signin": "20170113 02:48 PM",
            "signout": "20170113 03:13 PM",
            "signInId": "3a6ec2cd-1f7e-4416-a1c5-0daa17990e3c",
            "signOutId": "ea105d7e-fdc9-48e4-a5bf-1069c9e6be14",
            "comment": "Sync from EAttendanceTime :3a6ec2cd-1f7e-4416-a1c5-0daa17990e3c"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "1.83",
          "nhtotalhours": "1.83",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170117",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170117 06:33 AM",
            "signout": "20170117 05:23 PM",
            "signInId": "b7b77725-a51c-4f90-b5f4-c50be437aae6",
            "signOutId": "119438e1-defc-43c6-96ac-75c0d110ad05",
            "comment": "Sync from EAttendanceTime :b7b77725-a51c-4f90-b5f4-c50be437aae6"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "10.83",
          "nhtotalhours": "10.83",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170118",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170118 06:33 AM",
            "signout": "20170118 08:07 AM",
            "signInId": "bbc87575-0b5f-48eb-9b8d-0099913017c1",
            "signOutId": "9106ecf9-f9da-4955-ad15-94302eb70bf4",
            "comment": "Sync from EAttendanceTime :bbc87575-0b5f-48eb-9b8d-0099913017c1"
          },
          {
            "signin": "20170118 01:44 PM",
            "signout": "20170118 05:11 PM",
            "signInId": "5cc46cc4-d7ec-4b53-bce7-cccb1c80209a",
            "signOutId": "54f39b14-6521-4b66-8c7e-67233e1c54f7",
            "comment": "Sync from EAttendanceTime :5cc46cc4-d7ec-4b53-bce7-cccb1c80209a"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "5.02",
          "nhtotalhours": "5.02",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170119",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170119 06:32 AM",
            "signout": "20170119 07:59 AM",
            "signInId": "8c6af318-66a1-4758-8588-0b180227bee0",
            "signOutId": "19e9c4a4-cbf7-4465-88dc-6f6d1c24e8e6",
            "comment": "Sync from EAttendanceTime :8c6af318-66a1-4758-8588-0b180227bee0"
          },
          {
            "signin": "20170119 02:51 PM",
            "signout": "20170119 04:51 PM",
            "signInId": "2014bb46-f423-483d-a675-94d8f891494d",
            "signOutId": "020523a8-d4b9-4811-a1f5-262b26759890",
            "comment": "Sync from EAttendanceTime :2014bb46-f423-483d-a675-94d8f891494d"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.45",
          "nhtotalhours": "3.45",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170120",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170120 06:34 AM",
            "signout": "20170120 07:56 AM",
            "signInId": "2eddac98-62bf-4f74-9ef5-24b278fee0eb",
            "signOutId": "aa5ea2f2-6886-4bb9-bd0e-81179cdecefc",
            "comment": "Sync from EAttendanceTime :2eddac98-62bf-4f74-9ef5-24b278fee0eb"
          },
          {
            "signin": "20170120 02:51 PM",
            "signout": "20170120 03:00 PM",
            "signInId": "d9d25b0f-1660-4311-b54d-88b84a0877e4",
            "signOutId": "fdbc0239-6944-4ce4-ab45-a2dc550aaf41",
            "comment": "Sync from EAttendanceTime :d9d25b0f-1660-4311-b54d-88b84a0877e4"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "1.52",
          "nhtotalhours": "1.52",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170123",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170123 06:51 AM",
            "signout": "20170123 07:58 AM",
            "signInId": "28842737-a4b4-4fa4-b8df-16ac0db5213d",
            "signOutId": "f431ecd0-d136-4057-aa2b-6cc7c355993a",
            "comment": "Sync from EAttendanceTime :28842737-a4b4-4fa4-b8df-16ac0db5213d"
          },
          {
            "signin": "20170123 02:47 PM",
            "signout": "20170123 05:08 PM",
            "signInId": "96b92bca-de4a-4a75-8f5e-ca29b1f51287",
            "signOutId": "d00df900-05a1-4412-b631-cfe57f1f4a01",
            "comment": "Sync from EAttendanceTime :96b92bca-de4a-4a75-8f5e-ca29b1f51287"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.47",
          "nhtotalhours": "3.47",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170124",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170124 06:33 AM",
            "signout": "20170124 07:59 AM",
            "signInId": "a3ce6ad4-39c1-4ba6-a0ae-ae6cc7b4da4d",
            "signOutId": "96628daa-3b2a-4e44-97fd-1f53c83a6e5b",
            "comment": "Sync from EAttendanceTime :a3ce6ad4-39c1-4ba6-a0ae-ae6cc7b4da4d"
          },
          {
            "signin": "20170124 02:52 PM",
            "signout": "20170124 05:09 PM",
            "signInId": "c4d7cd30-9c89-4082-8b76-0d1d883a17cf",
            "signOutId": "e16a1c1f-cac1-4f01-9f1f-09278321d427",
            "comment": "Sync from EAttendanceTime :c4d7cd30-9c89-4082-8b76-0d1d883a17cf"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "3.72",
          "nhtotalhours": "3.72",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170125",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170125 01:52 PM",
            "signout": "20170125 05:19 PM",
            "signInId": "2eb18722-b5f8-4fa6-a1aa-f8433deb104d",
            "signOutId": "147ec109-7bd4-4fc1-8605-caf6fd01e474",
            "comment": "Sync from EAttendanceTime :2eb18722-b5f8-4fa6-a1aa-f8433deb104d"
          },
          {
            "signin": "20170125 06:59 AM",
            "signout": "20170125 07:59 AM",
            "signInId": "eb96d51b-d071-4f25-becd-77b928757cb1",
            "signOutId": "800bb668-c1af-4c23-97a7-d1ef16139028",
            "comment": "Sync from EAttendanceTime :eb96d51b-d071-4f25-becd-77b928757cb1"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "4.45",
          "nhtotalhours": "4.45",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170126",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170126 02:47 PM",
            "signout": "20170126 04:04 PM",
            "signInId": "bbd0e035-80c0-417f-b18f-af7da81f8e24",
            "signOutId": "f63f9529-7695-43a1-a234-6599cb53bfc2",
            "comment": "Sync from EAttendanceTime :bbd0e035-80c0-417f-b18f-af7da81f8e24"
          },
          {
            "signin": "20170126 06:35 AM",
            "signout": "20170126 07:58 AM",
            "signInId": "7875cdd2-1d5d-43a0-8964-35d954d30859",
            "signOutId": "cbdecfe2-72e7-4ec0-8a83-50f26677f1bd",
            "comment": "Sync from EAttendanceTime :7875cdd2-1d5d-43a0-8964-35d954d30859"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "2.67",
          "nhtotalhours": "2.67",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170127",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170127 02:58 PM",
            "signout": "20170127 04:20 PM",
            "signInId": "f830ed04-38e4-48fe-8e47-05e710b73867",
            "signOutId": "fe261a53-7f3f-4dda-968b-632f2f28b760",
            "comment": "Sync from EAttendanceTime :f830ed04-38e4-48fe-8e47-05e710b73867"
          },
          {
            "signin": "20170127 06:31 AM",
            "signout": "20170127 07:59 AM",
            "signInId": "c416e1d1-ea59-44ac-949d-ca623056dcb9",
            "signOutId": "9db4c6f7-e4c5-4ad4-b2bb-670af2ee59ef",
            "comment": "Sync from EAttendanceTime :c416e1d1-ea59-44ac-949d-ca623056dcb9"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "2.83",
          "nhtotalhours": "2.83",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      },
      {
        "attendancedate": "20170130",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170130 02:30 PM",
            "signout": "20170130 02:55 PM",
            "signInId": "ae6d9189-10bf-11e7-a38e-06a4938c473d",
            "signOutId": "ae6fce27-10bf-11e7-a38e-06a4938c473d",
            "comment": "Sync from EAttendanceTime :57e6b6e4-984a-41f3-aec4-d2c767a588fc"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "0.42",
          "nhtotalhours": "0.42",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": " "
      },
      {
        "attendancedate": "20170131",
        "isabsence": false,
        "absencetype": null,
        "signinout": [
          {
            "signin": "20170131 06:34 AM",
            "signout": "20170131 07:59 AM",
            "signInId": "86565200-4678-4dc0-b947-76615147134a",
            "signOutId": "c35ee2b9-c784-489b-ac8f-c13f2327c464",
            "comment": "Sync from EAttendanceTime :86565200-4678-4dc0-b947-76615147134a"
          },
          {
            "signin": "20170131 03:04 PM",
            "signout": "20170131 04:27 PM",
            "signInId": "99f36e5d-294e-4ddb-b390-30070b45c4f4",
            "signOutId": "bbc1add5-8df3-455d-b4ca-6bcedd477f63",
            "comment": "Sync from EAttendanceTime :99f36e5d-294e-4ddb-b390-30070b45c4f4"
          }
        ],
        "dailysummary": {
          "totaldays": "1",
          "nhtotaldays": null,
          "ahtotaldays": null,
          "thtotalhours": "2.80",
          "nhtotalhours": "2.80",
          "ahtotalhours": "0.00",
          "satotalhours": null,
          "sutotalhours": null,
          "totalabsence": "0"
        },
        "comment": ""
      }
    ],
    "summary": {
      "wk1": {
        "totaldays": "4",
        "nhtotaldays": "4",
        "ahtotaldays": "0",
        "thtotalhours": "15.16",
        "nhtotalhours": "15.16",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "0"
      },
      "wk2": {
        "totaldays": "4",
        "nhtotaldays": "4",
        "ahtotaldays": "0",
        "thtotalhours": "12.11",
        "nhtotalhours": "12.11",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "1"
      },
      "wk3": {
        "totaldays": "4",
        "nhtotaldays": "4",
        "ahtotaldays": "0",
        "thtotalhours": "20.82",
        "nhtotalhours": "20.82",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "0"
      },
      "wk4": {
        "totaldays": "5",
        "nhtotaldays": "5",
        "ahtotaldays": "0",
        "thtotalhours": "17.14",
        "nhtotalhours": "17.14",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "0"
      },
      "wk5": {
        "totaldays": "2",
        "nhtotaldays": "2",
        "ahtotaldays": "0",
        "thtotalhours": "3.22",
        "nhtotalhours": "3.22",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "0"
      },
      "wk6": {
        "totaldays": "0",
        "nhtotaldays": "0",
        "ahtotaldays": "0",
        "thtotalhours": "0.00",
        "nhtotalhours": "0.00",
        "ahtotalhours": "0.00",
        "satotalhours": "0.00",
        "sutotalhours": "0.00",
        "totalabsence": "0"
      },
      "month": {
        "totaldays": "19",
        "nhtotaldays": "19",
        "ahtotaldays": null,
        "thtotalhours": "68.45",
        "nhtotalhours": "68.45",
        "ahtotalhours": "0.00",
        "satotalhours": null,
        "sutotalhours": null,
        "totalabsence": "1"
      }
    },
    "version": "v1",
    "versiondate": "20170419183242",
    "DigitalSubmission": "1",
    "SubmitDate": "20170419112822",
    "MissingDailySiguature": "1",
    "MissingConfirmSiguature": "0"
  },
  "footer": {
    "crc": ""
  }
}
```
{collapsible = "true" collapsed-title = "Attendance submission"}