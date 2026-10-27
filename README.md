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
- Project thumbnails currently use CSS mockups in `components/sections/Projects.jsx` and can be replaced with project images.
- Update the testimonial name, role, avatar, and quote in `components/sections/CTA.jsx`.
- The contact form has client-side browser validation and a success state. Connect `submit` in `components/sections/Contact.jsx` to an API route or Formspree before using it to send messages.

## Build

```bash
npm run build
npm run start
```
