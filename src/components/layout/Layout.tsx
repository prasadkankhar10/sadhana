import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
