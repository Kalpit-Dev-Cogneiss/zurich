#!/usr/bin/env bash
# Pull latest code and restart the app. Run on the EC2 instance from /var/www/zurich.
set -euo pipefail

git pull
npm ci
npm run build
pm2 restart zurich
