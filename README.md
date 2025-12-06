
# Payment Form (Static QR) — Netlify-ready

This is a simple static site that shows a static QR, lets users upload a payment screenshot and enter a transaction number, and submits the data to Netlify Forms. It also shows a client-side modal confirming receipt.

## What is included
- `index.html` — the main page with the form (Netlify Forms enabled)
- `assets/style.css` — styles
- `assets/main.js` — client-side JS to submit the form and show modal
- `netlify.toml` — (optional) sample Netlify config
- `README.md` — this file

## How it works
- The form uses `data-netlify="true"` and `enctype="multipart/form-data"`. When deployed to Netlify, submissions (including uploaded files) are captured in the Netlify Forms dashboard.
- The client-side JS prevents default navigation, posts the form via `fetch()` to `/`, and displays a modal on successful submission. This allows the user to remain on the page and see the confirmation immediately.
- To send users an email update automatically, you can either:
  - Enable **Notifications** for the form in Netlify dashboard (Settings → Forms → Notifications)
  - Or connect the form to a Zapier/Integromat/Make workflow to send email (recommended if you want formatted emails)
  - Or use a Netlify Function / external server to send emails (requires API keys like SendGrid / Mailgun).

## Deploy to Netlify — Step by step (fastest)
1. If you don't have one, create a free account on Netlify: https://app.netlify.com/signup
2. Create a new site from Git — or drag & drop this zip folder into Netlify's "Sites" area:
   - For drag & drop: Go to https://app.netlify.com/sites, click **Add new site → Deploy manually** and upload the zip.
   - For Git deploy: Push this project to GitHub, then choose **New site from Git** in Netlify and connect the repository.
3. After deploying, open **Site settings → Forms** to see submissions. Uploaded files will be attached to each submission.
4. To send email updates automatically, choose one of these options:
   - Use Netlify form notifications (simple): https://docs.netlify.com/forms/notifications/
   - Use Zapier to send emails when a form is submitted: https://zapier.com/apps/netlify/integrations
   - Or create a Netlify Function using SendGrid / Mailgun. See sample docs: https://docs.netlify.com/functions/build-with-javascript/

## Useful links
- Netlify forms quick start: https://docs.netlify.com/forms/overview/
- Handling file uploads with Netlify forms: https://docs.netlify.com/forms/notifications/#file-upload
- Netlify deploy docs: https://docs.netlify.com/site-deploys/create-deploys/
- How to send emails (SendGrid): https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs
- Zapier + Netlify Forms integration: https://zapier.com/apps/netlify/integrations

## Customize
- Replace the QR image in `index.html` with your real static QR (change the `img src`).
- Change the email recipient or add additional fields to the form as needed.

---
If you'd like, I can:
- Add a success `success.html` page and redirect after submit instead of showing a modal.
- Add example Netlify Function code to send emails via SendGrid (you'll need to add API keys as environment variables in Netlify).
- Convert this to a React app or improve styling with Tailwind.
