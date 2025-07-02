import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../firebase/AuthProvider';

const Navbar: React.FC = () => {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  return (
    <nav className="w-full flex items-center justify-between px-4 py-2 bg-sky-200 shadow">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold text-sky-700">
          🌟 SADHANA
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sky-900 font-medium">{user.displayName}</span>
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
