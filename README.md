# Marie-Grâce — Frontend Developer Portfolio

A responsive single-page portfolio built with Next.js App Router, React, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use Node.js 20.9 or newer (required by this Next.js version).

## Customize

- Personal details and profile/social links: `config/site.js`
- Skills, experience, stats, projects, and articles: `data/`
- Portrait image: replace `app/assets/profile.jpg` with your preferred portrait (keep the import path and update the file extension if it changes).
- CV: add `public/marie-grace-cv.pdf`.
- Project screenshots are imported from `app/assets/yetuqahwah.png`, `app/assets/evogym.png`, and `app/assets/lkrecruitment.png` in `components/sections/Projects.jsx`.
- Update the testimonial name, role, avatar, and quote in `components/sections/CTA.jsx`.
- The contact form validates fields, submits to Formspree, and shows a success popup after a successful response.

### Connect the contact form to Formspree

1. Confirm in [Formspree](https://formspree.io/) that this form sends notifications to `mariegracebmg@gmail.com` and that the address is verified.
2. The site is configured with form ID `mljjbbwd`; it shows its success popup only after Formspree confirms a successful submission.

## Build

```bash
npm run build
npm run start
```
