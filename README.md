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

  %% Entry Points
  User("User 👤")
  Mobile("Mobile Device 📱")
  Desktop("Desktop/Laptop 💻")
  App("App UI: React + Vite")
  PWA("PWA Shell")

  User -->|Accesses| App
  Mobile -->|PWA Install| PWA
  Desktop -->|PWA Install| PWA

  %% App Core
  subgraph "Core App Services"
    Auth("🔐 Google Auth (Firebase)")
    Firestore("🗂️ Firestore DB")
    SW("🔁 Service Worker")
    Manifest("📝 Web Manifest")
    Doodle("🎨 Doodle.css Styles")
    Font("✍️ Handwritten Font (Patrick Hand)")
    CheatMenu("🛠️ Developer Cheat Menu")
  end

  App --> Auth
  App --> Firestore
  App --> SW
  App --> Manifest
  App --> Doodle
  App --> Font
  App --> CheatMenu

  %% Features
  subgraph "App Features"
    Habits("📋 HabitList.tsx")
    Scheduler("🕒 TimeBlockScheduler.tsx")
    Journal("📓 DailyJournal.tsx")
    Analytics("📊 HabitAnalytics.tsx")
    Reminders("🔔 notifications.ts")
    DarkMode("🌙 DarkModeToggle.tsx")
  end

  App --> Habits
  App --> Scheduler
  App --> Journal
  App --> Analytics
  App --> Reminders
  App --> DarkMode

  %% Reminders
  subgraph "Notifications System"
    LocalNotif("📳 Local Notification API")
    LocalStorage("💾 localStorage")
    Device("📱 Device Hardware")
  end

  Reminders -->|Schedules| LocalNotif
  Reminders -->|Saves| LocalStorage
  Reminders --> SW
  SW -->|Triggers| LocalNotif
  LocalNotif -->|Sound/Vibrate| Device

  %% Analytics
  subgraph "Analytics Tools"
    ChartJS("📈 Chart.js + react-chartjs-2")
    Heatmap("🔥 react-calendar-heatmap")
  end

  Analytics --> ChartJS
  Analytics --> Heatmap

  %% PWA Specific
  subgraph "PWA Support"
    A2HS("📌 Add to Home Screen Prompt")
  end

  PWA --> SW
  PWA --> Manifest
  PWA --> A2HS

  %% Data Flow to Firestore
  Habits -->|CRUD| Firestore
  Scheduler -->|CRUD| Firestore
  Journal -->|CRUD| Firestore

  %% Developer Tools
  CheatMenu -->|Reset/Add Test Data| Firestore
  CheatMenu -->|Override Date| App

  %% UI Feedback
  subgraph "User Feedback & UX"
    UI("🎉 Micro-Interactions (Confetti/Sparkle)")
    A11y("♿ Accessibility Features")
  end

  App --> UI
  App --> A11y

  %% External Testing
  Jest("🧪 Jest + React Testing Library")
  App --> Jest


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
