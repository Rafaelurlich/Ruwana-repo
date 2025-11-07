# Ruwana — AI Painting Guidance App

Ruwana is an early-stage concept for a mobile companion that observes a physical painting session and
offers supportive, AI-assisted guidance. This repository contains a React Native (Expo) prototype
that visualises the core flow and tone described in the product requirements document.

## Highlights

- **Mode-aware guidance:** Switch between *Explore & Learn* and *Mindful Painting* to tailor the
  language and intensity of prompts.
- **Live session canvas:** A camera preview placeholder shows where real-time vision features will
  sit in future iterations.
- **Intent-driven suggestions:** Enter technical or emotional intents to see adaptive invitations and
  digital variation cards.
- **Reflection capture:** Log emotional and technical notes to build a gentle recap once the session
  wraps.

## Getting started

1. Install dependencies (requires Node.js and Expo CLI):

   ```bash
   npm install
   ```

2. Run the Expo development server:

   ```bash
   npm start
   ```

3. Open the project in the Expo Go app (iOS/Android) or a web browser to explore the interactive
   prototype. Camera functionality is currently mocked by a placeholder component.

## Project structure

```
.
├── App.tsx                 # Entry point controlling lightweight navigation
├── app.json                # Expo app configuration
├── assets/                 # Placeholder for icons and splash assets
├── src/
│   ├── components/         # Reusable UI components (buttons, cards, prompts)
│   ├── data/               # Static guidance and variation logic
│   ├── screens/            # Home, session, and summary screens
│   └── theme/              # Color, spacing, and typography tokens
└── tsconfig.json
```

## Future directions

- Integrate real camera capture with `expo-camera` and connect to computer vision services.
- Replace static heuristics with on-device or cloud inference for intent recognition and guidance
  generation.
- Persist session history, emotional tags, and time-lapse assets for returning users.
- Expand tone-of-voice system to support instructors and collaborative studio settings.

---

Built with curiosity for painters, instructors, and mindful creators exploring new ways to stay in
flow.
