# SADHANA

A playful, open-source discipline and consistency app. Built with React, Tailwind CSS, Firebase, and Vite.

## Features

- Ritual/task creator
- Time-block scheduler
- Streak tracker
- Daily journal
- Habit analytics
- Account deletion
- Public roadmap & feedback

## Tech Stack

- React + Vite + Tailwind CSS
- Firebase (Google Auth, Firestore)
- PWA support

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up Firebase (see `/src/firebase/README.md`)
4. Run locally: `npm run dev`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT

---

# Complete Project Documentation

A playful, open-source discipline and consistency app.  
**Built with React, Tailwind CSS, Firebase, and Vite.**

---

## Table of Contents

- [Project Vision & Journey](#project-vision--journey)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [PWA & Mobile Experience](#pwa--mobile-experience)
- [Notifications & Reminders](#notifications--reminders)
- [Analytics & Insights](#analytics--insights)
- [Time-Block Scheduler](#time-block-scheduler)
- [Daily Journal](#daily-journal)
- [Developer Tools & Cheat Menu](#developer-tools--cheat-menu)
- [Design & Micro-Interactions](#design--micro-interactions)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Project Vision & Journey

Sadhana was born from the desire to make discipline, habit-tracking, and self-improvement fun, beautiful, and accessible.  
The journey included:

- **Playful, hand-drawn UI:** Inspired by notebooks and doodles, every component uses the Patrick Hand font, dashed borders, and animated effects.
- **Mobile-first, PWA:** Designed to work offline, installable on any device, with a custom “Add to Home Screen” prompt.
- **No-backend advanced notifications:** All reminders and notifications are scheduled and managed on-device, with playful content and alarm-like features.
- **Micro-interactions everywhere:** Confetti, sparkles, bounces, and wiggles make every action feel rewarding.
- **Developer empowerment:** A built-in cheat menu for rapid testing, date overrides, and data resets.
- **Accessibility and polish:** Every detail, from tap targets to error handling, is crafted for a delightful, accessible experience.

---

## Features

- **Ritual/Task Creator:** Add, edit, and delete habits with a single click.
- **Time-Block Scheduler:** Plan your day with color-coded, icon-enhanced time blocks.
- **Streak Tracker:** Visualize your consistency and keep your streak alive.
- **Daily Journal:** Reflect and write about your day, with rich text support.
- **Habit Analytics:** Multiple chart types, calendar heatmap, and weekly trends.
- **Advanced Reminders:** Per-habit, alarm-like notifications with sound, vibration, and playful messages.
- **PWA Support:** Works offline, installable, and mobile-optimized.
- **Account Deletion:** Full data wipe for privacy.
- **Developer Cheat Menu:** For rapid testing and debugging.
- **Public Roadmap & Feedback:** Open to community ideas and improvements.

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Doodle.css, Patrick Hand font
- **Backend:** Firebase (Google Auth, Firestore)
- **PWA:** Service Worker, Web Manifest, Offline support
- **Charts:** Chart.js, react-chartjs-2, react-calendar-heatmap
- **Testing:** Jest, React Testing Library

---

## PWA & Mobile Experience

- **Installable:** Custom “Add to Home Screen” prompt with playful UI.
- **Offline-first:** All features work without a network connection.
- **Touch-friendly:** Large tap targets, responsive modals, and mobile-optimized layouts.
- **Vibration & Sound:** Notifications use device vibration and sound for maximum impact.
- **Permission Guidance:** Friendly messages and guides if notifications are blocked.

---

## Notifications & Reminders

- **Per-habit Reminders:** Set a custom time, sound, and vibration for each habit.
- **No backend required:** All reminders are scheduled locally using the Notification API.
- **Playful Content:** Randomized, motivational titles and messages.
- **Test Notification:** Instantly preview how reminders will look and sound.
- **Snooze & Actions:** (Where supported) Notifications can be snoozed or marked as done directly.
- **Persistence:** Reminders are saved in localStorage and re-scheduled on app load.

---

## Analytics & Insights

- **Pie, Bar, Line, Radar, Polar, Scatter Charts:** Visualize completions, streaks, and consistency.
- **Calendar Heatmap:** See your habit history at a glance.
- **Weekly Trends:** Track completions per week for the last 12 weeks.
- **Perfect Day Confetti:** Celebrate when all habits are completed in a day.

---

## Time-Block Scheduler

- **Drag-and-drop blocks:** Plan your day with color, icons, and notes.
- **Overlap detection:** Prevents conflicting time blocks.
- **Repeat options:** Daily, weekly, or one-time routines.
- **Firestore sync:** All schedules are saved per user and per day.

---

## Daily Journal

- **Rich text editor:** Write, format, and reflect on your day.
- **Autosave:** Never lose your thoughts.
- **Notebook style:** Hand-drawn lines and playful UI.

---

## Developer Tools & Cheat Menu

- **Quick actions:** Reset habits, mark all done, add test data, clear reminders.
- **Date override:** Test streaks and analytics for any date.
- **Full data wipe:** For privacy and rapid prototyping.
- **Visible counts:** See number of habits and reminders at a glance.

---

## Design & Micro-Interactions

- **Hand-drawn, notebook style:** Every component uses playful fonts, dashed borders, and doodle effects.
- **Confetti, sparkles, and bounces:** Celebrate every achievement.
- **Animated progress bars and badges:** Make progress feel rewarding.
- **Responsive and accessible:** Works beautifully on all devices.

---

## Getting Started

1. **Clone the repo:**  
   `git clone https://github.com/yourusername/sadhana.git`
2. **Install dependencies:**  
   `npm install`
3. **Set up Firebase:**  
   - Create a Firebase project.
   - Enable Google Auth and Firestore.
   - Copy your config to `/src/firebase/firebase.ts`.
4. **Run locally:**  
   `npm run dev`
5. **Build for production:**  
   `npm run build`

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for code style, UI/UX, and communication guidelines.

---

## License

MIT

---

## 📊 Sadhana App Architecture Diagram

```mermaid
flowchart TD
  %% User and Entry Points
  User([User 👤])
  Mobile[Mobile Device 📱]
  Desktop[Desktop/Laptop 💻]
  User -->|Accesses| App[App UI (React + Vite)]
  Mobile -->|PWA Install| PWA[PWA Shell]
  Desktop -->|PWA Install| PWA

  %% App Core
  App -->|Auth| Auth[Google Auth (Firebase)]
  App -->|Firestore| Firestore[(Firestore DB)]
  App -->|Service Worker| SW[Service Worker]
  App -->|Manifest| Manifest[Web Manifest]
  App -->|Doodle.css| Doodle[Doodle.css Styles]
  App -->|Patrick Hand| Font[Handwritten Font]
  App -->|Cheat Menu| CheatMenu[Developer Cheat Menu 🛠️]

  %% Features
  App -->|Habits| Habits[HabitList.tsx]
  App -->|Scheduler| Scheduler[TimeBlockScheduler.tsx]
  App -->|Journal| Journal[DailyJournal.tsx]
  App -->|Analytics| Analytics[HabitAnalytics.tsx]
  App -->|Reminders| Reminders[notifications.ts]
  App -->|Dark Mode| DarkMode[DarkModeToggle.tsx]

  %% Reminders/Notifications
  Reminders -->|Schedules| LocalNotif[Local Notification API]
  Reminders -->|Saves| LocalStorage[(localStorage)]
  Reminders -->|Service Worker| SW
  SW -->|Triggers| LocalNotif
  LocalNotif -->|Sound/Vibrate| Device[Device Hardware]

  %% Analytics
  Analytics -->|Charts| ChartJS[Chart.js, react-chartjs-2]
  Analytics -->|Heatmap| Heatmap[react-calendar-heatmap]

  %% PWA
  PWA -->|Offline| SW
  PWA -->|Manifest| Manifest
  PWA -->|Add to Home| A2HS[Add to Home Screen Prompt]

  %% Data Flow
  Habits -->|CRUD| Firestore
  Scheduler -->|CRUD| Firestore
  Journal -->|CRUD| Firestore

  %% Developer Tools
  CheatMenu -->|Reset/Add Test Data| Firestore
  CheatMenu -->|Override Date| App

  %% User Feedback
  App -->|Confetti/Sparkle| UI[Micro-Interactions 🎉✨]
  App -->|Accessibility| A11y[Accessibility Features ♿]

  %% External
  App -->|Testing| Jest[Jest, React Testing Library]

  %% Legend
  classDef storage fill:#f9f,stroke:#333,stroke-width:2px;
  class Firestore,LocalStorage storage;
  classDef service fill:#bbf,stroke:#333,stroke-width:2px;
  class SW,Manifest service;
  classDef ui fill:#efe,stroke:#333,stroke-width:2px;
  class App,Habits,Analytics,Journal,Scheduler,Reminders,CheatMenu,DarkMode,UI,A2HS,Font,Doodle ui;
```

---

## Every Detail Matters

- **Patrick Hand font:** Sets the playful, handwritten tone for the whole app.
- **Doodle.css:** Custom CSS for dashed borders, notebook lines, and animated effects.
- **Sparkle images:** Used for habit completion celebrations.
- **Service Worker:** Enables offline use and advanced notifications.
- **Manifest & Icons:** Ensures a polished PWA install experience.
- **Testing:** Even the dark mode toggle is tested!
- **Accessibility:** Keyboard navigation, ARIA labels, and color contrast are considered.
- **Error handling:** Friendly messages for every possible failure.
- **Cheat Menu:** Empowers developers and testers to rapidly iterate and debug.

---

**Sadhana is more than a habit tracker—it's a celebration of progress, playfulness, and personal growth. Every pixel, sound, and interaction is designed to make discipline delightful.**

---
