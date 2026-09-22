# FastLearner Clickable Prototype

## Goal
Build the complete frontend-only study experience with local mock data, polished responsive navigation, and no backend, authentication, accounts, database, or real AI.

## Experience
- Create a shared desktop top navigation and mobile bottom navigation for Home, Learn, Drill, Progress, and Profile.
- Build separate pages for Home, Learn, SKD, TIU materials, material detail, custom drill, question practice, Progress, and Profile.
- Connect the required journeys: Home to drills/review, Learn to SKD/TIU/material practice, custom drill to questions, and Progress to material detail.
- Give unavailable or future actions useful feedback instead of leaving dead controls.

## Interaction
- Keep drill setup selections in local React state: exam, subtest, multiple materials, question count, difficulty, status, and challenge mode.
- Provide realistic local questions with answer feedback, explanations, next-question progression, and a completion state.
- Reflect mock incorrect answers as review candidates within the prototype session.
- Include responsive charts, progress indicators, tabs, toggles, and selection states.

## Visual System
- Use an off-white foundation, near-black type, muted gray supporting text, and one restrained blue accent.
- Use spacious layouts, strong typography, subtle borders and shadows, large-but-controlled corners, and pill-shaped primary actions.
- Keep the dashboard analytical and calm, with restrained motion and reduced-motion support.
- Load a modern display/body font pair through the document head and define all visual values as reusable semantic tokens.

## Data Structure
- Keep typed mock objects for exams, subtests, materials, questions, attempts, progress, review items, and streak outside page components.
- Keep UI primitives and shared layout pieces reusable so the mock data source can later be replaced by an API.
- Preserve exactly the supplied SKD taxonomy; UTBK remains a placeholder without invented categories.

## Validation
- Verify required click paths, selection controls, answer states, and next-question behavior in the running preview.
- Check desktop and mobile layouts for overflow, readability, navigation access, and non-overlapping content.
- Add unique page metadata for every content page.
