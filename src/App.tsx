import React from 'react';
import { AuthProvider } from './firebase/AuthProvider';
import Layout from './components/layout/Layout';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
