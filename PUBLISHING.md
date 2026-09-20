# Asif Ull Haque Portfolio

This is a Vite + React + TypeScript single-page portfolio built from the uploaded CV and public LinkedIn profile. The source intentionally omits unverified projects, certifications, achievements, and experience details.

## Live website

The portfolio is published free with GitHub Pages at:

`https://asifullhaque017-max.github.io/`

Open that HTTPS link in any browser to view the website. Copy and share the same link in applications, email, WhatsApp, Facebook, LinkedIn, or a CV.

## Repository

The source repository is:

`https://github.com/asifullhaque017-max/asifullhaque017-max.github.io`

The repository is configured to deploy automatically with GitHub Actions whenever changes are pushed to the `main` branch.

## Run locally

```bash
pnpm install
pnpm dev
```

For a production check:

```bash
pnpm check
pnpm build
pnpm preview
```

## How GitHub Pages deployment works

The workflow at `.github/workflows/deploy.yml` installs dependencies, builds the Vite site into `dist/public`, uploads the build as a Pages artifact, and deploys it to the free GitHub Pages environment. No paid domain, server, or hosting subscription is required.

The live site uses the default GitHub Pages HTTPS domain. A custom domain was not added, and HTTPS is enforced by GitHub.

## Assets

The authentic CV and profile photo are included in `client/public/assets/` and are therefore available to GitHub Pages at `/assets/Asif-Ull-Haque-CV.docx` and `/assets/Asif-Ull-Haque-profile.png`. The portfolio’s CV buttons use the hosted CV asset directly.

## Verified source notes

The CV verifies the name, summary, location, contact details, BSc (Honours) education, one role at Natai Clothing Brand, core skills, languages, blog, Facebook profile, and profile photo. The public LinkedIn page verifies the headline, location, additional skill language, and the course “A Crash Course in Data Science” from United Latino Students Association. No unverified project cards or achievement claims were added.
