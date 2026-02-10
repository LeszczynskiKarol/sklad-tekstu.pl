#!/bin/bash
S3_BUCKET="www.sklad-tekstu.pl"
CLOUDFRONT_ID="EZH7ALPCBUX72"

cd /d/sklad-tekstu.pl
npm run build
aws s3 sync dist/ s3://${S3_BUCKET} --delete
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_ID} --paths "/*"
echo "✅ Deployed to https://www.sklad-tekstu.pl"