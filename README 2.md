# KOGO Dispatchers - Truck Dispatch Service App

This is a modern, high-performance web application tailored for a truck dispatching service. It's built with a full-stack architecture using a React frontend and an Express backend, designed to be highly interactive, responsive, and visually appealing.

## About the Project

KOGO Dispatchers provides a digital storefront for truck dispatching services. The site highlights the services offered, reasons to choose them, the different truck types supported, and allows potential clients to get in touch easily via a fully functional contact form. The design features a dark mode/red accent aesthetic tailored for the trucking industry.

## Tech Stack & Project Template

This template utilizes the following modern web technologies:

*   **Frontend Framework:** React 18+ with TypeScript
*   **Build Tool & Development Server:** Vite
*   **Routing:** TanStack Router (`@tanstack/react-router`)
*   **Styling:** Tailwind CSS with custom variables for theming (`oklch` colors) and Shadcn UI components.
*   **Animations:** Framer Motion for smooth scroll and interaction effects.
*   **Backend Server:** Express.js running on Node.js (used for serving API routes and static frontend assets).
*   **Email Delivery:** Resend API for handling contact form submissions.

## File Structure

Here's an overview of the key directories and files:

```text
├── src/
│   ├── assets/          # Static images and icons used in the UI
│   ├── components/      # Reusable React components
│   │   ├── site/        # High-level layout and section components
│   │   └── ui/          # Generic, reusable UI parts (buttons, cards, etc. from Shadcn)
│   ├── lib/             # Utility functions
│   ├── routes/          # TanStack Router page definitions
│   │   ├── __root.tsx     # The root layout wrapper
│   │   ├── index.tsx      # Home page
│   │   ├── about.tsx      # About Us page
│   │   ├── services.tsx   # Services page
│   │   ├── truck-types.tsx# Supported Truck Types page
│   │   ├── faq.tsx        # Frequently Asked Questions
│   │   └── contact.tsx    # Contact form page
│   ├── index.css        # Global CSS, Tailwind setup, and theme variables
│   └── styles.css       # Additional global styles or overrides
├── server.ts            # Express backend server (handles /api routes and serves Vite)
├── package.json         # Project dependencies and npm scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── .env.example         # Example environment variables file
```

## Configuring the Contact Page (Email Integration)

The contact page (`/contact`) is wired up to an Express backend (`server.ts`) which uses [Resend](https://resend.com) to actually send the emails to your specified inbox.

**To make the contact form work:**

1.  **Get a Resend API Key:** Sign up at [resend.com](https://resend.com) and generate an API key.
2.  **Add Domain (Optional but recommended):** Verify your own domain in Resend for better deliverability, though Resend provides a testing domain (`onboarding@resend.dev`) that works initially.
3.  **Local Development (.env):** Create a file named `.env` in the root of your project (same folder as `package.json`). Add your Resend key:
    ```env
    RESEND_API_KEY=re_your_api_key_here
    ```
4.  **Change the Destination Email:** Open `server.ts`, locate the `/api/contact` POST route, and change the `to: 'ateeqwrk1@gmail.com'` address to wherever you want the contact forms delivered.
5.  **Production Deployment (Vercel/Cloud Run):** When deploying your app (e.g., to Vercel, Railway, or Google Cloud Run), make sure to add `RESEND_API_KEY` to the environment variables section of your hosting provider's dashboard.

## Adding SEO Tags

Since this project uses TanStack Router, you have a few options for adding SEO meta tags (like Title, Description, OpenGraph tags, etc.):

**Option 1: Using React Helmet (Recommended for standard usage)**
1.  Install it: `npm install react-helmet-async`
2.  Wrap your app in `HelmetProvider` inside `src/routes/__root.tsx`.
3.  Add the `<Helmet>` component inside individual route files (e.g., `src/routes/index.tsx`) to set specific titles and meta descriptions for each page.

**Option 2: Native HTML/Dynamic Updates**
You can dynamically update `document.title` and meta tags inside a `useEffect` hook whenever a route component mounts.

## How to Run in VS Code

To run this project locally on your machine using VS Code:

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).
2.  **Open the project:** Open the project folder in VS Code.
3.  **Open the Terminal:** Go to `View > Terminal` (`Ctrl+` `~`).
4.  **Install Dependencies:** Run the following command to download all required packages:
    ```bash
    npm install
    ```
5.  **Set up Environment Variables:** Copy `.env.example` to `.env` and fill in your keys (like `RESEND_API_KEY`).
6.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
7.  **View the App:** The terminal will show a local URL (usually `http://localhost:3000`). `Ctrl+Click` (or `Cmd+Click` on Mac) that link to open the app in your browser. The Express server will handle both your `/api/*` routes and serve the React development environment.

### Building for Production

To build the optimized static files and the bundled Express server for deployment:
```bash
npm run build
npm run start
```
