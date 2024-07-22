---
title: Family
---

## Introduction

This section introduces the structure of the 'family' table and its relationships within the database.
It specifically focuses on the connections between family members, such as the relationship between parents and children.
This documentation aims to provide an overview of how family entities are interconnected.

## FAM_Family                   
General family information    

| Field              | Type           | Index              | Description                                                                |
|--------------------|----------------|--------------------|----------------------------------------------------------------------------|
| FamilyID           | int identity   | PK_FAM_FAMILY      | PK, identity                                                               |
| DisplayAsName      | nvarchar(60)   |                    |                                                                            |
| CaseNo             | nvarchar(30)   |                    |                                                                            |
| CountyNumber       | nvarchar(80)   |                    |                                                                            |
| CountyScreen       | nvarchar(32)   |                    | DICT FG: 1:IPCA 2:MCAP 4:MAOC 8:MSTC 16:ICAC 32:ICAS 64:IPRC               |
| Stage1StarDate     | datetime       |                    |                                                                            |
| Stage1EndDate      | datetime       |                    |                                                                            |
| Stage2StarDate     | datetime       |                    |                                                                            |
| Stage2EndDate      | datetime       |                    |                                                                            |
| Stage3StarDate     | datetime       |                    |                                                                            |
| Stage3EndDate      | datetime       |                    |                                                                            |
| LastName           | nvarchar(30)   |                    |                                                                            |
| FirstName          | nvarchar(30)   |                    |                                                                            |
| MiddleInitial      | nvarchar(10)   |                    |                                                                            |
| FamilyType         | nvarchar(32)   |                    | Dict FA 0:Natural 1: Comparing                                             |
| ParentSize         | nvarchar(32)   |                    | Dict FB 1= Single Parent 2= Parent Family                                  |
| FamilySize         | int            |                    |                                                                            |
| FamilyMonthIncome  | decimal(18, 2) |                    |                                                                            |
| FamilyFeeHourly    | decimal(18, 2) |                    |                                                                            |
| FamilyFeeFT        | decimal(18, 2) |                    |                                                                            |
| FamilyFeePT        | decimal(18, 2) |                    |                                                                            |
| PublicSSNumber     | bit            |                    | Y/ N                                                                       |
| Zip                | nvarchar(10)   |                    |                                                                            |
| Address            | nvarchar(300)  |                    |                                                                            |
| Unit               | nvarchar(300)  |                    |                                                                            |
| City               | nvarchar(30)   |                    |                                                                            |
| County             | nvarchar(50)   |                    |                                                                            |
| State              | nvarchar(30)   |                    |                                                                            |
| CityID             | int            |                    |                                                                            |
| CountyID           | int            |                    |                                                                            |
| StateID            | int            |                    |                                                                            |
| SameAddress        | bit            |                    | 0 No 1 Yes                                                                 |
| MailZip            | nvarchar(10)   |                    |                                                                            |
| MailAddress        | nvarchar(300)  |                    |                                                                            |
| MailUnit           | nvarchar(300)  |                    |                                                                            |
| MailCity           | nvarchar(30)   |                    |                                                                            |
| MailCounty         | nvarchar(50)   |                    |                                                                            |
| MailState          | nvarchar(30)   |                    |                                                                            |
| MailCityID         | int            |                    |                                                                            |
| MailCountyID       | int            |                    |                                                                            |
| MailStateID        | int            |                    |                                                                            |
| EMailAddress       | nvarchar(80)   |                    |                                                                            |
| HomePhone          | nvarchar(35)   |                    |                                                                            |
| WorkPhone          | nvarchar(35)   |                    |                                                                            |
| WorkPhoeType       | nvarchar(32)   |                    | Dict FC - Ext - Direct                                                     |
| Cell               | nvarchar(35)   |                    |                                                                            |
| RcvMsg             | bit            |                    |                                                                            |
| Languange          | int            |                    | Langurage Code 1= English(default) 2= Spanish                              |
| Contract           | int            |                    | ContractID Stage 2; APP                                                    |
| CashAid            | nvarchar(32)   |                    | DICT FH 0 = Never 1 =Currently Receiving Cash Aid 2 = Termed from Cash Aid |
| TermDate           | datetime       |                    |                                                                            |
| CalWorkActivity    | nvarchar(100)  |                    |                                                                            |
| Prohibit           | bit            |                    | 0 No 1 Yes                                                                 |
| ProhibitReson      | nvarchar(32)   |                    | DICT F6                                                                    |
| BestCallNum        | nvarchar(100)  |                    | DICT FE                                                                    |
| BestCallTime       | nvarchar(100)  |                    | DICT FD                                                                    |
| CompanionType      | int            |                    | 0:Normal 1:Companion 2 HasCompanion                                        |
| CompanionFamilyID  | int            |                    |                                                                            |
| Status             | int            |                    |                                                                            |
| Comment            | nvarchar(max)  |                    |                                                                            |
| CaseManager        | int            |                    |                                                                            |
| OwnerId            | int            |                    |                                                                            |
| StartDate          | datetime       |                    |                                                                            |
| EndDate            | datetime       |                    |                                                                            |
| History            | int            |                    | History Version                                                            |
| Disable            | int            | D_dbo_FAM_Family_1 | 0 No 1 Yes                                                                 |
| CreateUserId       | int            |                    |                                                                            |
| UpateUserId        | int            |                    |                                                                            |
| Version            | int            |                    |                                                                            |
| CPS                | nvarchar(32)   |                    |                                                                            |
| FeeWaiver          | bit            |                    |                                                                            |
| FeeWaiverStartDate | datetime       |                    |                                                                            |
| FeeWaiverEndDate   | datetime       |                    |                                                                            |
| CAPPStartDate      | datetime       |                    |                                                                            |
| CAPPEndDate        | datetime       |                    |                                                                            |
| Homeless           | int            |                    |                                                                            |
| CreateTime         | datetimeoffset |                    |                                                                            |
| UpdateTime         | datetimeoffset |                    |                                                                            |

## Fam_FamilyExtension
Extended family information, mainly for future custom extensions.                     

## FAM_Child                    
Child details and information  

| Field               | Type           | Index                                                             | Description     |
|---------------------|----------------|-------------------------------------------------------------------|-----------------|
| ChildID             | int identity   | PK_FAM_CHILD                                                      | PK, identity    |
| FamilyID            | int            | _dta_index_FAM_Child_c_52_914818321__K2, fam_child_familyid_index |                 |
| LastName            | nvarchar(100)  | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| FirstName           | nvarchar(100)  | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| MiddleInitial       | nvarchar(10)   | _dta_index_FAM_Child_11_914818321__K1_3_4_5                       |                 |
| DateOfBirth         | datetime       |                                                                   |                 |
| Gender              | nvarchar(32)   |                                                                   | DICT O F;M      |
| Grade               | decimal(18, 2) |                                                                   |                 |
| SSNumber            | nvarchar(30)   |                                                                   |                 |
| PublicSSNumber      | bit            |                                                                   | Y/ N            |
| Language            | int            |                                                                   | LanguageID      |
| LimitedEnglish      | bit            |                                                                   | Y/ N            |
| Ethnicity           | int            |                                                                   | EthnicityID     |
| Race                | int            |                                                                   | RaceID          |
| CitizenInfo         | nvarchar(20)   |                                                                   | CitizenInfoID   |
| Zip                 | nvarchar(10)   |                                                                   |                 |
| Address             | nvarchar(300)  |                                                                   |                 |
| Unit                | nvarchar(300)  |                                                                   |                 |
| City                | nvarchar(30)   |                                                                   |                 |
| CityID              | int            |                                                                   |                 |
| County              | nvarchar(30)   |                                                                   |                 |
| CountyID            | int            |                                                                   |                 |
| State               | nvarchar(30)   |                                                                   |                 |
| StateID             | int            |                                                                   |                 |
| Relationship        | int            |                                                                   | RelationshipID  |
| IncludeInSize       | bit            |                                                                   | Y/ N            |
| AdjustFactor        | decimal(18, 2) |                                                                   |                 |
| MinorParent         | bit            |                                                                   |                 |
| IEPLastMeeting      | datetime       |                                                                   |                 |
| IEPNextMeeting      | datetime       |                                                                   |                 |
| Status              | int            |                                                                   |                 |
| Comments            | nvarchar(max)  |                                                                   |                 |
| StartDate           | datetime       |                                                                   |                 |
| EndDate             | datetime       |                                                                   |                 |
| History             | int            |                                                                   | History Version |
| Disable             | bit            |                                                                   | 0 No 1 Yes      |
| CreateUserId        | int            |                                                                   |                 |
| UpateUserId         | int            |                                                                   |                 |
| Version             | int            |                                                                   |                 |
| IsProtectiveService | bit            |                                                                   |                 |
| CID                 | nvarchar(100)  |                                                                   |                 |
| MultipleRace        | varchar(100)   |                                                                   |                 |
| CreateTime          | datetimeoffset |                                                                   |                 |
| UpdateTime          | datetimeoffset |                                                                   |                 ||

## Fam_ChildExtension           
Extended child information, mainly for future custom extensions.                  

## FAM_Parent 
 Parent information                                  

## Fam_ParentExtension
Extended parent information, mainly for future custom extensions.

## FAM_FamilyFee
 Information on fees associated with family services |

## FAM_MemberIncome
 Income details for family members                   


## FAM_MemberIncomeDetail       
Detailed income information for family members      |

## FAM_MemberNeeds              
Needs assessment for family members                 |

## FAM_MemberSchedule           
Schedules for family members                        |

## FAM_NeedSummary              
Summary of family needs                             |

## FAM_NeedSummarySchedule      
Scheduling for needs assessment                     |

## FAM_NOA 