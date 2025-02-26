"use client"
import { useState } from "react";
import AuthContainer from "../user/AuthConatiner";
import { ChevronRight, Lock, Mail, User } from "lucide-react";

const PartnerAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    return (
      <AuthContainer 
        title={isLogin ? "Partner Login" : "Register as Partner"} 
        subtitle={isLogin ? "Access your venue management dashboard" : "Start listing your sports facilities on TurfBook"}
        type="partner"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {/* Toggle Switch */}
          <div className="flex border border-gray-200 rounded-lg mb-8">
            <button 
              className={`w-1/2 py-3 text-sm font-medium rounded-lg ${isLogin ? 'bg-green-500 text-white' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Partner Login
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                    placeholder="Your Business Name"
                    required
                  />
                </div>
              </div>
            )}
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
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
                  placeholder="business@example.com"
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
            
            {!isLogin && (
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a> and <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
                  </label>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              {isLogin ? 'Sign In' : 'Register as Partner'}
              <ChevronRight size={18} className="ml-2" />
            </button>
            
            {isLogin ? (
              <p className="text-center text-sm text-gray-600">
                New partner?{' '}
                <button 
                  type="button"
                  className="text-green-600 font-medium hover:text-green-500"
                  onClick={() => setIsLogin(false)}
                >
                  Register here
                </button>
              </p>
            ) : (
              <p className="text-center text-sm text-gray-600">
                Already registered?{' '}
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

  export default PartnerAuth