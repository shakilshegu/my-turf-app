import React, { ReactNode } from 'react';

interface AuthContainerProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  type: 'user' | 'partner'; 
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children, title, subtitle, type }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Left side - Image/Background */}
      <div className="hidden lg:block lg:w-1/2 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/800/1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
          <h1 className="text-4xl font-bold mb-4">TurfBook</h1>
          <p className="text-xl mb-6 max-w-md text-center">
            {type === 'user' 
              ? 'Find and book the perfect sports venue for your next game.' 
              : 'Manage your sports facilities and grow your business with us.'}
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg max-w-md">
            <p className="text-lg italic">
              {type === 'user'
                ? '"The easiest way to book sports facilities in your area!"'
                : '"TurfBook helped increase our bookings by 40% in just three months!"'}
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;