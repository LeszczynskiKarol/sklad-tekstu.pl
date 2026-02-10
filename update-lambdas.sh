#!/bin/bash
# Szybka aktualizacja kodu Lambda po zmianach
# Użycie: ./update-lambdas.sh [presign|contact|all]

set -e
REGION="eu-north-1"
TARGET=${1:-all}
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

update_presign() {
  echo ">>> Aktualizacja: sklad-tekstu-presign"
  cd "$SCRIPT_DIR/aws-lambdas/presign-upload"
  npm install --production --silent
  zip -r /tmp/presign-upload.zip . -x "*.git*" > /dev/null
  aws lambda update-function-code \
    --function-name "sklad-tekstu-presign" \
    --zip-file "fileb:///tmp/presign-upload.zip" \
    --region "$REGION" > /dev/null
  echo "    ✅ Gotowe"
}

update_contact() {
  echo ">>> Aktualizacja: sklad-tekstu-contact"
  cd "$SCRIPT_DIR/aws-lambdas/contact-form"
  npm install --production --silent
  zip -r /tmp/contact-form.zip . -x "*.git*" > /dev/null
  aws lambda update-function-code \
    --function-name "sklad-tekstu-contact" \
    --zip-file "fileb:///tmp/contact-form.zip" \
    --region "$REGION" > /dev/null
  echo "    ✅ Gotowe"
}

case "$TARGET" in
  presign) update_presign ;;
  contact) update_contact ;;
  all)     update_presign; update_contact ;;
  *)       echo "Użycie: $0 [presign|contact|all]"; exit 1 ;;
esac