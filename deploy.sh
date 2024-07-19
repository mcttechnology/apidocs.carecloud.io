#!/bin/bash

# Delete a local folder
# rm -rf ./apidocs/dist


# Upload all files from the folder to a specified S3 directory
aws s3 cp ./apidocs/dist/ s3://docs.carecloud.io/v2/ --recursive  --profile prod

# Create a CloudFront invalidation to update the website with the newly uploaded files
aws cloudfront create-invalidation --distribution-id ER80FQW6ED4PH --paths "/*" --profile prod
