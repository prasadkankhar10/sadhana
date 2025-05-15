import React from 'react';
import { useAuth } from '../../firebase/AuthProvider';
import DarkModeToggle from '../common/DarkModeToggle';

const Navbar: React.FC = () => {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-sky-200 dark:bg-gray-800 shadow">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-sky-700 dark:text-sky-200">🌟 SADHANA</span>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        {user ? (
          <>
            <span className="text-sky-900 dark:text-sky-100 font-medium">{user.displayName}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
              onClick={signOutUser}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded transition"
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
