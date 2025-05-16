import React from 'react';
import { AuthProvider } from './firebase/AuthProvider';
import Layout from './components/layout/Layout';
import HabitList from './components/habits/HabitList';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <HabitList />
      </Layout>
    </AuthProvider>
  );
}

export default App;
