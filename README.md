# mood eats — web

Marketing splash page and legal documents for the [mood eats](https://moodeats.io) iOS app.

## Pages

| Path       | File           | Purpose              |
| ---------- | -------------- | -------------------- |
| `/`        | `index.html`   | Splash / coming soon |
| `/privacy` | `privacy.html` | Privacy Policy       |
| `/terms`   | `terms.html`   | Terms & Conditions   |

## Stack

Plain HTML + CSS. No build step. Designed to be deployed on Vercel with clean URLs (`/privacy` instead of `/privacy.html`).

## Deploy

```bash
# Option 1: Vercel CLI
npm install -g vercel
vercel

# Option 2: Connect this repo to Vercel via GitHub
# vercel.com → Add New Project → Import from GitHub
```

After deploy, connect custom domain `moodeats.io` via Vercel Dashboard → Settings → Domains.

## Updating legal documents

1. Edit `privacy.html` or `terms.html`
2. Update the "Effective" date in both the header meta tag and the body content
3. Commit and push — Vercel auto-deploys

## Contact

- General / support: [support@moodeats.io](mailto:support@moodeats.io)
- Privacy / data requests: [privacy@moodeats.io](mailto:privacy@moodeats.io)
