#!/usr/bin/env bash
# One-time EC2 server setup for the Zurich Next.js app.
# Run this on a fresh Ubuntu 22.04/24.04 instance as the ubuntu user (sudo required).
set -euo pipefail

REPO_URL="https://github.com/kalpitoctikailab/zurich.git"
APP_DIR="/var/www/zurich"

sudo apt-get update
sudo apt-get install -y curl git nginx

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo npm install -g pm2

sudo mkdir -p "$APP_DIR"
sudo chown "$USER":"$USER" "$APP_DIR"

if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" pull
else
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"
npm ci
npm run build

pm2 start deploy/ecosystem.config.js
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u "$USER" --hp "$HOME"

sudo cp deploy/nginx.conf /etc/nginx/sites-available/zurich
sudo ln -sf /etc/nginx/sites-available/zurich /etc/nginx/sites-enabled/zurich
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

echo "Deployed. Visit http://<elastic-ip>/"
