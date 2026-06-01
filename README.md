# AppGlobal Group Website

Marketing website for AppGlobal Group and its subsidiaries. The site presents the group's services, leadership, partners, insights, and contact information in a responsive single-page React application.

## Tech Stack

- React 19
- Create React App
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm start`

Runs the development server.

### `npm test`

Runs the test suite in watch mode. To run tests once in CI mode:

```bash
npm test -- --watchAll=false
```

### `npm run build`

Creates an optimized production build in `build/`.

## Project Structure

```text
src/
  assets/       Images and video assets
  components/   Page sections and shared UI components
  config/       Shared application configuration
  contexts/     React context providers
  data/         Structured content for services, subsidiaries, and team members
  hooks/        Reusable React hooks
  theme/        Shared theme constants
```

## Notes

- Navigation is configured in `src/config/navigation.js`.
- Tailwind dynamically selected color classes are safelisted in `tailwind.config.js`.
- The contact and newsletter forms currently use simulated submission behavior and require backend integration before production use.
