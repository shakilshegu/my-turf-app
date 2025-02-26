"use client";

import { useState } from 'react';
import UserAuth from '../components/user/Register';
import PartnerAuth from '../components/partner/Register';


const AuthPage = () => {
  const [showingComponent, setShowingComponent] = useState('user');
  
  return (
    <div>
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-md">
        <div className="flex p-1">
          <button
            className={`px-4 py-2 text-sm font-medium rounded ${
              showingComponent === 'user' ? 'bg-green-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => setShowingComponent('user')}
          >
            User View
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded ${
              showingComponent === 'partner' ? 'bg-green-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => setShowingComponent('partner')}
          >
            Partner View
          </button>
        </div>
      </div>
      {showingComponent === 'user' ? <UserAuth /> : <PartnerAuth />}
    </div>
  );
};

export default AuthPage;