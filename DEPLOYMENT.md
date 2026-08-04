# Deploying to AWS EC2 with an Elastic IP

Runtime: Node + PM2 + Nginx reverse proxy. IP-only access (no domain yet).

Deploy configs live in `deploy/`:
- `deploy/ecosystem.config.js` — PM2 process config
- `deploy/nginx.conf` — Nginx reverse proxy config
- `deploy/setup-ec2.sh` — one-time server setup
- `deploy/redeploy.sh` — pull latest + rebuild + restart

## 1. Launch the EC2 instance (AWS Console)

1. **EC2 → Launch Instance**
2. Name: `zurich-web`
3. AMI: **Ubuntu Server 22.04 LTS** (or 24.04), 64-bit x86
4. Instance type: `t3.micro` (free-tier eligible; bump to `t3.small` if the build is slow/OOMs)
5. Key pair: create a new one (e.g. `zurich-key.pem`), download it — needed to SSH in. Keep it private.
6. Network settings → **Security group**: allow
   - SSH (22) from **My IP** only (not 0.0.0.0/0)
   - HTTP (80) from Anywhere (0.0.0.0/0)
   - Leave 3000 closed — Nginx is the only public entry point, proxying to the app internally
7. Storage: default 8GB gp3 is fine
8. Launch instance

## 2. Allocate and associate the Elastic IP

1. **EC2 → Elastic IPs → Allocate Elastic IP address** → Allocate
2. Select it → **Actions → Associate Elastic IP address** → choose the `zurich-web` instance → Associate

This gives a fixed public IP that survives instance stop/start. Note: AWS charges a small hourly fee for an Elastic IP that's *not* attached to a running instance.

## 3. SSH in and run the setup script

```bash
chmod 400 zurich-key.pem
ssh -i zurich-key.pem ubuntu@<elastic-ip>
```

Once connected, pull down and run `deploy/setup-ec2.sh` (installs Node 20, Nginx, PM2, clones the repo, builds, and starts everything):

```bash
curl -fsSL https://raw.githubusercontent.com/kalpitoctikailab/zurich/main/deploy/setup-ec2.sh -o setup-ec2.sh
chmod +x setup-ec2.sh
./setup-ec2.sh
```

The `curl` step only works once `deploy/setup-ec2.sh` is committed and pushed to `main`. Otherwise `scp` the `deploy/` folder up first, or paste the script contents directly.

## 4. Verify

Visit `http://<elastic-ip>/` — the site should load.

## Future deploys

```bash
ssh -i zurich-key.pem ubuntu@<elastic-ip>
cd /var/www/zurich
bash deploy/redeploy.sh
```

## Connecting a domain: zurichgraphics.com → 3.6.54.224 (GoDaddy)

`app/layout.tsx` already sets `metadataBase` to `https://zurichgraphics.com`, so no code change is needed there — this is purely DNS + server config. `deploy/nginx.conf`'s `server_name` has already been updated from the catch-all `_` to `zurichgraphics.com www.zurichgraphics.com`; the steps below get that onto the server and add HTTPS.

### 1. GoDaddy DNS

1. Log into GoDaddy → **My Products** → find `zurichgraphics.com` → **DNS** (or **Manage DNS**).
2. GoDaddy typically ships a domain with a default parked-page **A record** (`@` → GoDaddy's parking IP) and sometimes a **Forwarding** rule. Delete/disable both — they'll otherwise keep serving GoDaddy's placeholder page instead of the site.
3. Add/edit these records:

   | Type | Name | Value         | TTL          |
   |------|------|---------------|--------------|
   | A    | @    | 3.6.54.224    | 600 (10 min) |
   | A    | www  | 3.6.54.224    | 600 (10 min) |

   (A record for `www` rather than a CNAME — GoDaddy is fine with either, but an A record is simpler here since both point at the same IP.)
4. Remove any other conflicting `A`/`CNAME` records on `@` or `www` (GoDaddy sometimes has both a parking `A` and a `CNAME` for `www` by default — only one record per name/type should remain).
5. Save. Propagation is usually live within 10–60 minutes (GoDaddy's default TTLs), but can take up to a few hours. Check with `nslookup zurichgraphics.com` or https://www.whatsmydns.net/#A/zurichgraphics.com — it should resolve to `3.6.54.224` everywhere before moving on to HTTPS (certbot's domain-validation step will fail otherwise).

### 2. EC2 security group

Open port 443 (currently only 22 and 80 are open, per the launch step above):

**EC2 → Instances → `zurich-web` → Security tab → security group → Edit inbound rules → Add rule**
- Type: HTTPS, Port 443, Source: Anywhere (0.0.0.0/0)

### 3. Push the nginx `server_name` change to the server

```bash
ssh -i zurich-key.pem ubuntu@3.6.54.224
cd /var/www/zurich
git pull
sudo cp deploy/nginx.conf /etc/nginx/sites-available/zurich
sudo nginx -t
sudo systemctl reload nginx
```

Visit `http://zurichgraphics.com/` once DNS has propagated — it should now load the site over plain HTTP before HTTPS is set up.

### 4. HTTPS via Certbot

Still on the server:

```bash
sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d zurichgraphics.com -d www.zurichgraphics.com
```

Certbot will ask for an email (renewal/expiry notices) and whether to redirect HTTP → HTTPS — choose **yes**, redirect. It edits `/etc/nginx/sites-available/zurich` directly to add the SSL server block and the redirect, and installs a systemd timer for auto-renewal.

Note this means the *live* server config will diverge from the repo's `deploy/nginx.conf` (which intentionally stays as the plain-HTTP baseline — useful if the server ever needs to be rebuilt from scratch with `setup-ec2.sh`; just rerun the `certbot --nginx` command afterward).

Verify auto-renewal works:
```bash
sudo certbot renew --dry-run
```

### 5. Verify

- `https://zurichgraphics.com/` and `https://www.zurichgraphics.com/` both load with a valid cert.
- `http://zurichgraphics.com/` redirects to `https://`.
