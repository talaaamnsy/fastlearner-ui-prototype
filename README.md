# FastLearner UI Prototype

Build a clickable frontend-only UI/UX prototype for a personal study and drill web app called "FastLearner".

IMPORTANT:

- This is ONLY a UI/UX prototype for now.

- Do NOT build a real backend.

- Do NOT build authentication.

- Do NOT connect Supabase or any external database.

- Do NOT implement real user accounts.

- Do NOT implement real AI functionality.

- Use local/mock data only.

- The main goal is to let me experience and evaluate the complete navigation and visual design before we build the real application.

- All data structures should be easy to replace with a real database later.

- Do not hardcode the architecture in a way that makes future database integration difficult.

==================================================

PRODUCT CONCEPT

==================================================

App name:

FastLearner

FastLearner is a lightweight personal study and question-drilling web app for myself and my friends.

The main focus is:

Learn → Practice → Review → Master

The app focuses on two exam systems:

1. SKD

2. UTBK

For this prototype, SKD should use the real content structure provided below.

UTBK should only be a placeholder because its detailed content taxonomy will be added later.

==================================================

DESIGN DIRECTION

==================================================

Create a premium, minimal, Apple-inspired educational interface.

IMPORTANT:

Do NOT copy Apple's website or any specific Apple product UI.

Use only the general design principles:

- clean

- minimal

- spacious

- strong typography

- excellent hierarchy

- subtle animations

- large rounded corners

- pill-shaped buttons

- restrained use of color

- lots of whitespace

- subtle borders

- very subtle shadows

- calm and premium

- modern typography

Avoid:

- childish gamification

- excessive gradients

- excessive colorful cards

- excessive badges

- overly rounded cartoon-like UI

- cluttered dashboards

- "SUPER LEGENDARY" style gamification

- generic edtech templates

The application should feel lightweight, fast, calm, and premium.

Use an off-white / very light neutral background, near-black primary text, muted gray secondary text, and ONE restrained accent color.

Make the interface responsive for:

- desktop

- tablet

- mobile

==================================================

GLOBAL NAVIGATION

==================================================

Use a clean top navigation on desktop and an appropriate bottom navigation on mobile.

Main navigation:

1. Home

2. Learn

3. Drill

4. Progress

5. Profile

Do not create a large complicated sidebar.

The interface should remain visually clean.

==================================================

PAGE 1 — HOME

==================================================

Create a polished dashboard.

Top section:

"Good afternoon, Nao."

Below it, show a subtle streak indicator:

"🔥 7 day streak"

Main feature:

"Today's Drill"

Show:

- 15 questions

- based on weak areas

- estimated time

- Start Drill button

Example:

Today's Drill

15 Questions

Based on your weak areas

~12 min

[ Start Drill ]

Next section:

"Continue Learning"

Example:

SKD · TIU

Numerik Berhitung

Mastery 72%

Show a subtle progress indicator.

Next section:

"Needs Review"

Example:

12 questions

4 topics need review

[ Review Now ]

Next section:

"This Week"

Show:

- Accuracy

- Questions

- Study time

Use a simple clean mini chart.

The Home page should NOT feel crowded.

==================================================

PAGE 2 — LEARN

==================================================

Create a clean exam selection page.

Title:

"Learn"

Subtitle:

"Choose what you want to study."

Show two large but minimal exam options:

SKD

Seleksi Kompetensi Dasar

UTBK

Ujian Tulis Berbasis Komputer

SKD should be fully clickable.

UTBK can be clickable but should currently show a subtle "Content coming soon" state or placeholder.

==================================================

PAGE 3 — SKD

==================================================

Title:

"SKD"

Show the three subtests:

TWK

TIU

TKP

Each should show:

- name

- number of materials

- subtle progress/mastery indicator

Example:

TWK

5 Materials

TIU

10 Materials

TKP

6 Materials

Clicking TIU must navigate to the TIU material selection page.

==================================================

PAGE 4 — TIU MATERIALS

==================================================

Title:

"TIU"

Subtitle:

"Choose a material to practice."

Show the 10 TIU materials as clean selectable rows/cards.

IMPORTANT:

These are FINAL MATERIALS.

There is NO additional sub-material level beneath them.

Use exactly these names:

1. Verbal Analogi

2. Verbal Silogisme

3. Verbal Analitis

4. Numerik Berhitung

5. Numerik Deret Angka

6. Numerik Perbandingan Kuantitatif

7. Numerik Soal Cerita

8. Figural Analogi

9. Figural Ketidaksamaan

10. Figural Serial

Each material should show:

- material name

- number of questions

- mastery percentage

- progress indicator

Clicking a material should navigate to its Material Detail page.

==================================================

PAGE 5 — MATERIAL DETAIL

==================================================

Create a focused material page.

Example:

"Numerik Berhitung"

Show:

Mastery

72%

Questions

42

Accuracy

76%

Then provide three primary actions:

[ Learn ]

[ Practice ]

[ Review ]

Also show:

"Recent Performance"

with a simple chart.

Show:

"Your Progress"

- Questions attempted

- Correct

- Incorrect

- Average time

- Last practiced

The page should feel calm and analytical.

==================================================

PAGE 6 — CUSTOM DRILL

==================================================

Create a custom drill setup page inspired by the reference UI concept I provided.

Title:

"Custom Drill"

Step 1:

Choose Exam

[ SKD ] [ UTBK ]

Step 2:

Choose Subtest

For SKD:

[ TWK ] [ TIU ] [ TKP ]

Step 3:

Choose Materials

Allow MULTI-SELECT.

For TIU show:

☐ Verbal Analogi

☐ Verbal Silogisme

☐ Verbal Analitis

☐ Numerik Berhitung

☐ Numerik Deret Angka

☐ Numerik Perbandingan Kuantitatif

☐ Numerik Soal Cerita

☐ Figural Analogi

☐ Figural Ketidaksamaan

☐ Figural Serial

Selected items should have a clear but subtle selected state.

Step 4:

Number of Questions

[ 10 ] [ 15 ] [ 20 ] [ 30 ]

Step 5:

Difficulty

[ All ] [ Easy ] [ Medium ] [ Hard ]

Step 6:

Question Status

[ All ]

[ Unanswered ]

[ Incorrect ]

[ Needs Review ]

[ Mastered ]

Step 7:

Challenge Mode

Toggle:

"60 sec / question"

Explain subtly:

"Questions that exceed the time limit are counted as incorrect."

Bottom CTA:

[ Start Drill ]

The page should be very clean and easy to scan.

==================================================

PAGE 7 — QUESTION SCREEN

==================================================

Create the actual question-drilling experience.

Example:

TIU · Numerik Berhitung

Question 04 / 15

Show a realistic placeholder math question.

Example:

"Jika 25% dari suatu bilangan adalah 40, maka bilangan tersebut adalah..."

Answer options:

A. 100

B. 120

C. 140

D. 160

E. 180

Use large, comfortable answer buttons.

Before answering:

show:

[ A ]

[ B ]

[ C ]

[ D ]

[ E ]

After selecting an answer:

show subtle correct/incorrect feedback.

Example correct state:

✓ Correct

Then show:

"Explanation"

with a short explanation.

Button:

[ Next Question → ]

For incorrect state:

✕ Incorrect

Correct answer: D

Then explanation.

Automatically treat incorrect questions as candidates for the Review system in the mock data.

==================================================

PAGE 8 — PROGRESS

==================================================

Create a clean analytics page.

Title:

"Progress"

Tabs:

Day

Week

Month

All Time

Show:

Accuracy

Questions

Study Time

Current Streak

Create a clean line chart for accuracy.

Then:

"Performance by Exam"

SKD

TWK

TIU

TKP

Then:

"Weak Areas"

Example:

Numerik Berhitung — 61%

Verbal Analogi — 67%

Then:

"Needs Review"

12 questions

Use a clean analytical layout, not a gamified dashboard.

==================================================

PAGE 9 — PROFILE

==================================================

Create a minimal profile page.

Show:

Nao

Stats:

- Questions Answered

- Accuracy

- Study Time

- Longest Streak

Settings:

- Appearance

- Notifications

- Data

Keep it simple.

==================================================

INTERACTION REQUIREMENTS

==================================================

The prototype MUST be clickable.

Implement navigation between:

Home

→ Learn

→ SKD

→ TIU

→ Material

→ Practice

→ Question

Also:

Home

→ Today's Drill

→ Question

Home

→ Needs Review

→ Question

Drill

→ Custom Drill

→ Question

Progress

→ Material detail

All buttons that are not implemented should still have sensible placeholder interactions rather than dead UI.

Use mock/local state to demonstrate:

- selecting materials

- changing question count

- selecting difficulty

- selecting question status

- toggling challenge mode

- answering questions

- moving to the next question

- progress changes

==================================================

DATA / ARCHITECTURE

==================================================

Even though this is frontend-only, structure the mock data cleanly.

Create mock objects for:

exams

subtests

materials

questions

attempts

progress

reviewItems

streak

Do NOT put all data directly inside UI components.

Keep the data layer separated so it can later be replaced by an API/database.

==================================================

IMPORTANT CONTENT RULE

==================================================

Do NOT invent additional SKD material categories beyond the ones provided.

SKD structure:

TWK:

- Nasionalisme

- Integritas

- Bela Negara

- Pilar Negara

- Bahasa Negara

TIU:

- Verbal Analogi

- Verbal Silogisme

- Verbal Analitis

- Numerik Berhitung

- Numerik Deret Angka

- Numerik Perbandingan Kuantitatif

- Numerik Soal Cerita

- Figural Analogi

- Figural Ketidaksamaan

- Figural Serial

TKP:

- Pelayanan Publik

- Jejaring Kerja

- Sosial Budaya

- Teknologi Informasi dan Komunikasi

- Profesionalisme

- Anti Radikalisme

UTBK:

Do not create detailed material categories yet.

Use placeholder content only.

==================================================

UX PRINCIPLES

==================================================

Prioritize:

1. clarity

2. speed

3. minimal cognitive load

4. clean hierarchy

5. easy navigation

6. fast access to drilling

7. excellent mobile experience

The most important user journey is:

Home

→ Start Drill

→ Answer Question

→ See Explanation

→ Next Question

The second most important journey is:

Learn

→ SKD

→ TIU

→ Material

→ Practice

→ Question

The third:

Drill

→ Custom Drill

→ Select Materials

→ Start

→ Question

Make these flows extremely smooth.

==================================================

FINAL REQUIREMENT

==================================================

Do NOT stop after creating a landing page.

Build the COMPLETE CLICKABLE PROTOTYPE described above.

I want to be able to click through the application and experience the UI/UX from Home all the way to answering a question.

Focus heavily on visual polish, spacing, typography, interaction states, responsive behavior, and overall product feel.

This is a prototype first.

Do not over-engineer the backend.

Do not add authentication.

Do not add a database yet.

Do not add unnecessary features.

Build the prototype so that it is easy to iterate on visually later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/099a1e7f-9b43-454e-af27-c86416b12dec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
