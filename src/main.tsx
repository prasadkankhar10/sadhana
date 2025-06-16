import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { scheduleTodayReminders } from './utils/notifications';

// Register service worker for PWA/notifications
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((err) => {
      // eslint-disable-next-line no-console
      console.warn('Service worker registration failed:', err);
    });
  });
}

// Schedule today's reminders on app load
scheduleTodayReminders();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
);
