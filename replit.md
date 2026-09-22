# FastLearner

FastLearner is a React/TanStack Start frontend for focused exam study and question practice.

## Run locally on Replit

The project uses Bun and Vite. The `Start application` workflow runs the development server on port 5000:

```bash
bun run dev
```

## Current scope

- Local typed exam, material, and question collections live in `src/data/mock-data.ts`.
- The question flow filters by the selected material and shows a clear empty state when content is not available yet.
- Theme preference supports Light, Dark, and System modes and is persisted in local storage.
- The app remains frontend-only with mock data; authentication, external services, and a real database are intentionally not configured.

## Validation

```bash
bun run build
bun run lint
```

The production build is expected to pass. The imported repository currently contains existing Prettier formatting findings in several compact route files; lint reports those findings until the codebase is formatted consistently.