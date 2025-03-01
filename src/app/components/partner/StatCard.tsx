"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon, color }) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`${color} rounded-xl p-6 shadow-md border border-gray-100`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
          <div className="flex items-center mt-1">
            <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </span>
            <TrendingUp className={`h-3 w-3 ml-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
          </div>
        </div>
        <div className="p-2 rounded-lg bg-white bg-opacity-60 backdrop-blur-sm">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;