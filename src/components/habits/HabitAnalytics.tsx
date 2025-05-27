import React from 'react';
import { useAuth } from '../../firebase/AuthProvider';
import { db } from '../../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Bar, Pie, Line, Radar, PolarArea, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from 'chart.js';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
);

interface Habit {
  id: number;
  name: string;
  doneToday: boolean;
  streak: number;
  lastCompleted: string | null;
  history: string[];
}

const HabitAnalytics: React.FC = () => {
  const { user } = useAuth();

  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const habitsRef = collection(db, 'users', user.uid, 'habits');
    const unsub = onSnapshot(habitsRef, (snapshot) => {
      setHabits(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: typeof doc.id === 'string' ? parseInt(doc.id) : doc.id,
            name: data.name,
            doneToday: data.doneToday,
            streak: data.streak,
            lastCompleted: data.lastCompleted,
            history: data.history || [],
          } as Habit;
        }),
      );
      setLoading(false);
    });
    return () => unsub();
  }, [user]);

  // Analytics calculations
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce((acc, h) => acc + h.history.length, 0);
  const avgStreak =
    habits.length > 0
      ? Math.round(habits.reduce((acc, h) => acc + h.streak, 0) / habits.length)
      : 0;
  const bestStreak = Math.max(0, ...habits.map((h) => h.streak));
  const perfectDays = (() => {
    // Count days where all habits were completed
    const allDates = habits.flatMap((h) => h.history);
    const uniqueDates = Array.from(new Set(allDates));
    return uniqueDates.filter((date) =>
      habits.every((h) => h.history.includes(date)),
    ).length;
  })();

  // --- Analytics Data Preparation ---
  // 1. Pie chart: Completed vs Missed
  const totalPossible = habits.reduce(
    (acc, h) => acc + (h.history.length + (h.streak ? 0 : 1)),
    0,
  );
  const totalMissed = totalPossible - totalCompletions;
  const pieData = {
    labels: ['Completed', 'Missed'],
    datasets: [
      {
        data: [totalCompletions, totalMissed > 0 ? totalMissed : 0],
        backgroundColor: ['#38bdf8', '#f87171'],
        borderWidth: 2,
      },
    ],
  };
  // 2. Bar chart: Completions per habit
  const barData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Completions',
        data: habits.map((h) => h.history.length),
        backgroundColor: '#38bdf8',
        borderRadius: 8,
      },
    ],
  };
  // 3. Line chart: Streaks per habit
  const lineData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Current Streak',
        data: habits.map((h) => h.streak),
        borderColor: '#f59e42',
        backgroundColor: 'rgba(245,158,66,0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  // 4. Radar chart: Consistency per habit
  const radarData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Consistency %',
        data: habits.map((h) => {
          const daysTracked = h.history.length + (h.streak ? 0 : 1);
          return daysTracked > 0
            ? Math.round((h.history.length / daysTracked) * 100)
            : 0;
        }),
        backgroundColor: 'rgba(56,189,248,0.2)',
        borderColor: '#38bdf8',
        pointBackgroundColor: '#f59e42',
      },
    ],
  };
  // 5. Polar Area: Habit Additions (demo)
  const polarData = {
    labels: habits.map((h) => h.name),
    datasets: [
      {
        label: 'Habit Added',
        data: habits.map((h) => (h.id % 10) + 1),
        backgroundColor: [
          '#38bdf8',
          '#f59e42',
          '#f87171',
          '#a78bfa',
          '#34d399',
          '#fbbf24',
          '#f472b6',
        ],
      },
    ],
  };
  // 6. Calendar Heatmap: Completion days
  const allCompletionDates = habits.flatMap((h) => h.history);
  const dateCount: Record<string, number> = {};
  allCompletionDates.forEach((date) => {
    dateCount[date] = (dateCount[date] || 0) + 1;
  });
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 180); // last 6 months
  const heatmapValues = Array.from({ length: 181 }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const iso = d.toISOString().slice(0, 10);
    return { date: iso, count: dateCount[iso] || 0 };
  });
  // 7. Scatter Plot: Habit completions vs. streak
  const scatterData = {
    datasets: [
      {
        label: 'Habit Completions vs. Streak',
        data: habits.map((h) => ({ x: h.history.length, y: h.streak })),
        backgroundColor: '#f59e42',
      },
    ],
  };
  // 8. Time-based Trends: Completions per week (last 12 weeks)
  const weekLabels: string[] = [];
  const weekData: number[] = [];
  const now = new Date();
  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() - i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const label = `${weekStart.toISOString().slice(5, 10)}-${weekEnd.toISOString().slice(5, 10)}`;
    weekLabels.push(label);
    const count = allCompletionDates.filter((date) => {
      const d = new Date(date);
      return d >= weekStart && d <= weekEnd;
    }).length;
    weekData.push(count);
  }
  const timeTrendData = {
    labels: weekLabels,
    datasets: [
      {
        label: 'Completions per Week',
        data: weekData,
        backgroundColor: '#a78bfa',
        borderColor: '#7c3aed',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto p-2 sm:p-4 md:p-6 relative animate-fade-in-down bg-gradient-to-br from-[#fdf6e3] via-[#f5e9c6] to-[#e0d7c3] dark:from-[#23272e] dark:via-[#2d323c] dark:to-[#3b4252] border-[4px] border-black/60 rounded-[36px] shadow-xl font-hand"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, var(--journal-bg, #fdf6e3) 0px, var(--journal-bg, #fdf6e3) 31px, var(--journal-line, #e0d7c3) 32px, var(--journal-bg, #fdf6e3) 33px)',
        border: '4px solid #222',
        borderRadius: '36px',
        boxShadow: '0 8px 36px 0 rgba(60,40,10,0.13), 0 0 0 8px #f5e9c6',
        position: 'relative',
      }}
    >
      <style>{`
        :root {
          --journal-bg: #fdf6e3;
          --journal-line: #e0d7c3;
        }
        .dark :root, .dark body {
          --journal-bg: #23272e;
          --journal-line: #3b4252;
        }
        .font-hand { font-family: 'Patrick Hand', Caveat, Gloria Hallelujah, cursive; }
        .doodle-border { border: 2.5px dashed #222; border-radius: 18px; box-shadow: 0 2px 8px #e0d7c3; }
        .doodle-shadow { box-shadow: 0 4px 18px 0 #e0d7c3, 0 0 0 3px #f5e9c6; }
        .doodle-title { text-shadow: 2px 2px 0 #fffbe6, 4px 4px 0 #e0d7c3; }
        .doodle-underline { border-bottom: 2.5px dashed #f59e42; }
        .doodle-badge { background: #fffbe6; border: 2px solid #f59e42; border-radius: 12px; padding: 2px 10px; font-size: 0.9em; margin-left: 8px; }
        .doodle-heatmap rect { stroke: #222; stroke-width: 1.2; }
        .doodle-chart { background: #fffbe6; border: 2px dashed #a78bfa; border-radius: 18px; padding: 1.5rem 1rem; margin-bottom: 1.5rem; width: 100%; min-width: 0; }
        .dark .doodle-chart { background: #23272e; border-color: #7c3aed; }
        .doodle-metric { font-size: 2.2rem; font-weight: bold; color: #f59e42; text-shadow: 1px 1px 0 #fffbe6; }
        .dark .doodle-metric { color: #fbbf24; text-shadow: 1px 1px 0 #23272e; }
        @media (max-width: 900px) {
          .doodle-title { font-size: 2rem !important; }
        }
        @media (max-width: 640px) {
          .doodle-chart { padding: 0.5rem 0.1rem; margin-bottom: 1rem; }
          .doodle-metric { font-size: 1.2rem; }
          .doodle-title { font-size: 1.2rem !important; }
        }
        /* Responsive grid for charts */
        .doodle-charts-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 700px) {
          .doodle-charts-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 400px) {
          .doodle-badge { font-size: 0.7em; padding: 1px 6px; }
        }
      `}</style>
      {/* Animated Title */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 animate-fade-in-down text-center">
        <span className="text-3xl md:text-5xl font-extrabold text-sky-700 dark:text-sky-300 tracking-tight drop-shadow-xl uppercase select-none flex items-center gap-2 font-hand animate-wiggle doodle-title">
          <span>📊 Habit Analytics</span>
        </span>
        <span className="text-2xl md:text-4xl select-none animate-bounce">
          ✨
        </span>
      </div>
      {/* Micro-instructions */}
      <div className="mb-4 text-center text-base text-gray-600 dark:text-gray-300 font-hand animate-fade-in doodle-underline pb-2">
        <span>
          Track your progress, celebrate your streaks, and discover your habit
          patterns! <span className="ml-1">🎉</span>
        </span>
      </div>
      {/* Metrics Row */}
      {loading ? (
        <div className="text-center text-sky-400 font-semibold animate-fade-in">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-8 animate-fade-in-slow">
          <div className="bg-white dark:bg-gray-800 doodle-border p-2 sm:p-4 flex flex-col items-center animate-pop-in">
            <span className="doodle-metric animate-wiggle">{totalHabits}</span>
            <span className="text-xs text-gray-500 mt-1">Total Habits</span>
          </div>
          <div className="bg-white dark:bg-gray-800 doodle-border p-2 sm:p-4 flex flex-col items-center animate-pop-in">
            <span className="doodle-metric animate-wiggle">
              {totalCompletions}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Total Completions
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 doodle-border p-2 sm:p-4 flex flex-col items-center animate-pop-in">
            <span className="doodle-metric animate-wiggle">{avgStreak}</span>
            <span className="text-xs text-gray-500 mt-1">Avg Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 doodle-border p-2 sm:p-4 flex flex-col items-center animate-pop-in">
            <span className="doodle-metric animate-wiggle">{bestStreak}</span>
            <span className="text-xs text-gray-500 mt-1">Best Streak</span>
          </div>
          <div className="bg-white dark:bg-gray-800 doodle-border p-2 sm:p-4 flex flex-col items-center animate-pop-in col-span-2 sm:col-span-1">
            <span className="doodle-metric animate-wiggle">{perfectDays}</span>
            <span className="text-xs text-gray-500 mt-1">Perfect Days</span>
          </div>
        </div>
      )}
      {/* --- Analytics Charts --- */}
      {!loading && habits.length > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-sky-700 font-hand">
              Completion Ratio <span className="doodle-badge">Pie</span>
            </h3>
            <Pie data={pieData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-green-700 font-hand">
              Completions per Habit <span className="doodle-badge">Bar</span>
            </h3>
            <Bar data={barData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-yellow-700 font-hand">
              Streaks per Habit <span className="doodle-badge">Line</span>
            </h3>
            <Line data={lineData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-indigo-700 font-hand">
              Consistency Radar <span className="doodle-badge">Radar</span>
            </h3>
            <Radar data={radarData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-pink-700 font-hand">
              Habit Additions (Demo) <span className="doodle-badge">Polar</span>
            </h3>
            <PolarArea data={polarData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-orange-700 font-hand">
              Calendar Heatmap (Last 6 Months){' '}
              <span className="doodle-badge">Heatmap</span>
            </h3>
            <div className="doodle-heatmap overflow-x-auto">
              <CalendarHeatmap
                startDate={startDate}
                endDate={today}
                values={heatmapValues}
                classForValue={(value) => {
                  if (
                    !value ||
                    (typeof value === 'object' &&
                      'count' in value &&
                      value.count === 0)
                  )
                    return 'color-empty';
                  const count =
                    value && typeof value === 'object' && 'count' in value
                      ? value.count
                      : 0;
                  if (count < 2) return 'color-scale-1';
                  if (count < 4) return 'color-scale-2';
                  if (count < 6) return 'color-scale-3';
                  return 'color-scale-4';
                }}
                showWeekdayLabels
              />
            </div>
            <style>{`
              .color-empty { fill: #f3f4f6; }
              .color-scale-1 { fill: #bae6fd; }
              .color-scale-2 { fill: #38bdf8; }
              .color-scale-3 { fill: #0ea5e9; }
              .color-scale-4 { fill: #0369a1; }
            `}</style>
          </div>
          <div className="doodle-chart animate-pop-in w-full">
            <h3 className="text-lg font-bold mb-2 text-fuchsia-700 font-hand">
              Completions vs. Streak{' '}
              <span className="doodle-badge">Scatter</span>
            </h3>
            <Scatter data={scatterData} />
          </div>
          <div className="doodle-chart animate-pop-in w-full md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-purple-700 font-hand">
              Completions per Week (Last 12 Weeks){' '}
              <span className="doodle-badge">Line</span>
            </h3>
            <Line data={timeTrendData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitAnalytics;
