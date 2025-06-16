// Utility for advanced notifications and reminders (no backend)
// Handles permission, scheduling, and playful notification content

export type HabitReminder = {
  habitId: number;
  habitName: string;
  time: string; // 'HH:MM' 24h format
};

// Request notification permission
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) return 'denied';
  let perm = Notification.permission;
  if (perm === 'default') {
    perm = await Notification.requestPermission();
  }
  return perm;
}

// Show a playful notification (with optional sound/vibrate)
export function showHabitNotification(
  habitName: string,
  opts?: { sound?: boolean; vibrate?: boolean },
) {
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;
  const playfulTitles = [
    `Time for "${habitName}"!`,
    `Don't forget: ${habitName}!`,
    `✨ ${habitName} Reminder! ✨`,
    `Let's do: ${habitName}`,
    `Sadhana time: ${habitName}`,
  ];
  const playfulBodies = [
    'Keep your streak alive! 💪',
    'You got this! 🌟',
    'Notebook says: It’s habit time!',
    'A little progress every day!',
    'Your future self thanks you!',
  ];
  const title = playfulTitles[Math.floor(Math.random() * playfulTitles.length)];
  const body = playfulBodies[Math.floor(Math.random() * playfulBodies.length)];
  const icon = '/icon-192.png';
  new Notification(title, {
    body,
    icon,
    badge: icon,
    tag: `habit-${habitName}`,
  });
  if (opts?.sound) {
    try {
      const audio = new Audio(
        'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
      );
      audio.play();
    } catch {
      // ignore
    }
  }
  if (opts?.vibrate && navigator.vibrate) {
    navigator.vibrate([100, 30, 100]);
  }
}

// Show a test notification for UI/UX feedback
export function showTestNotification() {
  showHabitNotification('Test Habit', { sound: true, vibrate: true });
}

// Save reminders to localStorage
export function saveReminders(reminders: HabitReminder[]) {
  localStorage.setItem('habitReminders', JSON.stringify(reminders));
}

// Load reminders from localStorage
export function loadReminders(): HabitReminder[] {
  try {
    const data = localStorage.getItem('habitReminders');
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Schedule notifications for today (runs on app load)
export function scheduleTodayReminders() {
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;
  const reminders = loadReminders();
  const now = new Date();
  reminders.forEach((rem) => {
    const [h, m] = rem.time.split(':').map(Number);
    const notifTime = new Date();
    notifTime.setHours(h, m, 0, 0);
    if (notifTime < now) return; // skip past times
    const ms = notifTime.getTime() - now.getTime();
    setTimeout(
      () =>
        showHabitNotification(rem.habitName, { sound: true, vibrate: true }),
      ms,
    );
  });
}

// For service worker push (future-proof, not used without backend)
export function showSWNotification(data: { title: string; body: string }) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.showNotification(data.title, {
        body: data.body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
      });
    });
  }
}

// Mobile Add to Home Screen prompt logic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function showAddToHomeScreenPrompt(
  setShowPrompt: (show: boolean) => void,
) {
  let deferredPrompt: Event | null = null;
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt = e;
    setShowPrompt(true);
  });
  return async () => {
    if (deferredPrompt && 'prompt' in deferredPrompt) {
      // @ts-expect-error: beforeinstallprompt event
      deferredPrompt.prompt();
      // @ts-expect-error: beforeinstallprompt event
      const { outcome } = await deferredPrompt.userChoice;
      setShowPrompt(false);
      deferredPrompt = null;
      return outcome;
    }
    return null;
  };
}
