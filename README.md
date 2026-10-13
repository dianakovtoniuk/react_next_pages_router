# Next.js Feedback App

A small Next.js app that shows how API routes work. Users can submit feedback through a form, load all feedback, and view details for a single item.

## Features

- Feedback form that sends data to an API route
- `GET /api/feedback` returns all feedback
- `POST /api/feedback` saves a new entry
- `GET /api/feedback/:id` returns a single entry
- Feedback page statically generated with `getStaticProps`

## Tech Stack

- Next.js 13 (Pages Router)
- React 18
- TypeScript

## Getting Started

```bash
git clone <repo-url>
cd <project-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
data/feedback.json            # file-based storage
pages/
  index.tsx                   # feedback form
  feedback/index.tsx          # feedback list page
  api/feedback/index.ts       # list and create
  api/feedback/[feedbackId].ts # single item
```
