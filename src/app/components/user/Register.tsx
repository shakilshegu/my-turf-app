"use client "
import { useState } from "react";
import AuthContainer from "./AuthConatiner";
import { Mail, Lock, User, ArrowRight, Key, ChevronRight } from 'lucide-react';


const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    
    return (
      <AuthContainer 
        title={isLogin ? "Welcome Back!" : "Create Account"} 
        subtitle={isLogin ? "Sign in to continue to TurfBook" : "Get started with your TurfBook account"}
        type="user"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {/* Toggle Switch */}
          <div className="flex border border-gray-200 rounded-lg mb-8">
            <button 
              className={`w-1/2 py-3 text-sm font-medium rounded-lg ${isLogin ? 'bg-green-500 text-white' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button 
              className={`w-1/2 py-3 text-sm font-medium rounded-lg ${!isLogin ? 'bg-green-500 text-white' : 'text-gray-500'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                {isLogin && (
                  <a href="#" className="text-sm text-green-600 hover:text-green-500">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} className="ml-2" />
            </button>
            
            {isLogin ? (
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button 
                  type="button"
                  className="text-green-600 font-medium hover:text-green-500"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button 
                  type="button"
                  className="text-green-600 font-medium hover:text-green-500"
                  onClick={() => setIsLogin(true)}
                >
                  Sign in
                </button>
              </p>
            )}
          </form>
        </div>
      </AuthContainer>
    );
  };
  
  export default UserAuth