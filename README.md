# Gallery

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Tech stack

Main technologies

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **File Uploads:** [uploadthing](https://uploadthing.com)
- **Database:** [Vercel postgres](https://vercel.com)
- **Error Handling:** [Sentry](https://sentry.io)
- **Ratelimiting:** [Upstash](https://upstash.com/)

## Features to be implemented

- [x] Authentication with **Clerk**
- [x] File uploads with **uploadthing**
- [x] ORM using **Drizzle ORM**
- [x] Database on **Vercel postgres**
- [x] Error management with **Sentry**
- [x] Parallel routes on images click
- [x] Delete Button (w/ Server Actions)
- [x] Ratelimtting the api with **Upstash**
- [ ] Analytics with **Vercel**

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/sadmann7/skateshop.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
