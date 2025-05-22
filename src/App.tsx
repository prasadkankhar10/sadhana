import React from 'react';
import { AuthProvider } from './firebase/AuthProvider';
import Layout from './components/layout/Layout';
import HabitList from './components/habits/HabitList';
import TimeBlockScheduler from './components/habits/TimeBlockScheduler';
import './index.css';

function App() {
  const [tab, setTab] = React.useState<'habits' | 'schedule'>('habits');
  return (
    <AuthProvider>
      <Layout>
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-center gap-4 mb-6 mt-2">
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'habits' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
              onClick={() => setTab('habits')}
            >
              Habits
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold transition-colors focus:outline-none ${tab === 'schedule' ? 'bg-sky-400 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'}`}
              onClick={() => setTab('schedule')}
            >
              Time-blocks
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-b-lg shadow p-2 sm:p-4">
            {tab === 'habits' ? <HabitList /> : <TimeBlockScheduler />}
          </div>
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;
