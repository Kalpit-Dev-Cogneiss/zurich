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

## Later: domain + HTTPS

Once a domain is available:
1. Point an A record at the Elastic IP.
2. `sudo apt-get install -y certbot python3-certbot-nginx`
3. `sudo certbot --nginx -d yourdomain.com`
4. Open port 443 in the security group.
