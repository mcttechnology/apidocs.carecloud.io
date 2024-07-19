---
title: Uploading Timesheet and EOP
---

## Overview

This chapter extends the principles outlined in the "Uploading Data" section, specifically focusing on the upload process for timesheets and Provider Payments (EOP) data. A critical aspect of this process is the association of these entities with PDF files, which necessitates specific template files for proper formatting and presentation.

The timesheet data is associated with the 'Claim' entity, with detailed information contained within the 'timesheet' field.

The EOP data is associated with the 'Provider Payment' entity, with detailed information contained within the 'items' field.

## Process Overview

The upload process for timesheets and EOP follows the same workflow as described in the "Uploading Data" chapter, with the addition of handling PDF files:

1. **Data Preparation**: Similar to other entities, the external application prepares timesheet and EOP data according to CareCloud's entity data structures.

2. **File Building**: The external system generates files, including the data for timesheets and EOP, formatted according to the required specifications.

3. **Uploading to S3**: These files, along with their corresponding PDF templates, are uploaded to an S3 bucket.

4. **Synchronization with Portal**: The CareCloud Portal then processes these files and synchronizes the data with the Care Connect for Provider (CCN) network.

## PDF Template Files

- **Importance of Templates**: Each timesheet and EOP entity is associated with a PDF file, which requires a specific template to ensure the data is correctly formatted when presented in a PDF format.

- **Using Default Templates**: If no specific template file is provided, the CCN system will utilize a default template. This default template is designed to accommodate the standard data fields and formats as defined in the respective entity models.

- **Custom Template Files**: Users have the option to create custom PDF templates to meet specific formatting needs. These templates should be structured to align with the data fields and structures of the timesheet and EOP models.

- **Data Content for Templates**: The content required for these templates should refer to the data models outlined in previous sections. This includes all necessary fields and data types that are expected to be part of the timesheet and EOP entities.

## Key Points to Consider

- **Accuracy of Data**: Ensure that the data being uploaded matches the structure and requirements of the predefined models for timesheets and EOP.

- **Template Alignment**: The PDF templates should accurately reflect the structure of the data being uploaded to ensure that the generated PDF files are correctly formatted.

- **Regular Updates**: As with other data uploads, adhere to the recommended frequency and timing for synchronization to ensure data consistency and accuracy.

---

By following these guidelines, external systems can effectively manage the upload of timesheets and EOP data to CareCloud, ensuring that the generated PDFs are accurate and well-formatted. This process not only enhances the efficiency of data synchronization but also ensures that the end documents are practical and user-friendly.
