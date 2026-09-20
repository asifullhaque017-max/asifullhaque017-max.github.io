# Asif Ull Haque Portfolio

This project is a Vite + React + TypeScript single-page portfolio built from the uploaded CV and the public LinkedIn profile. The source intentionally omits unverified projects, certifications, achievements, and experience details.

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

## Publish free with Netlify

1. Create a free account at [Netlify](https://www.netlify.com/).
2. Push the project to a GitHub repository, or use Netlify's drag-and-drop deployment for the built `dist/public` folder after running `pnpm build`.
3. For a GitHub-connected deployment, use `pnpm build` as the build command and `dist/public` as the publish directory.
4. After deploying, open the live site and test the CV download, email link, phone link, LinkedIn link, blog link, and section navigation.

## Publish free with GitHub Pages

1. Create a GitHub repository and upload the project files.
2. Run `pnpm install` and `pnpm build` locally.
3. Publish the generated `dist/public` folder with GitHub Pages, or connect the repository to a free static host such as Netlify or Vercel.
4. If deploying somewhere other than the Manus WebDev preview, replace the two `/manus-storage/...` paths in `client/src/pages/Home.tsx` with the matching public paths from `portable-assets/` (or upload those files to the host's public asset storage):
   - `/manus-storage/image1_78af4ea1.png` → your hosted profile image path
   - `/manus-storage/ASIF_ULLLHAQUE_Resume(3)_3225d389.docx` → your hosted CV path

## Portable assets

The `portable-assets/` folder contains the original CV and the authentic profile photo extracted from it. The hosted WebDev version uses its managed `/manus-storage/` paths so the live preview and CV download remain functional.

## Verified source notes

The CV verifies the name, summary, location, contact details, education, one role at Natai Clothing Brand, core skills, languages, blog, Facebook profile, and the profile photo. The public LinkedIn page verifies the headline, location, additional skill language, and the course “A Crash Course in Data Science” from United Latino Students Association. No unverified project cards or achievement claims were added.
