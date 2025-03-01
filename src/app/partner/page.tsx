"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Calendar, Users, Clock, Award, MapPin } from 'lucide-react';
import StatCard from '../components/partner/StatCard';
import Image from 'next/image';


// Sample data
const recentBookings = [
  { id: 1, customerName: 'Rahul Sharma', turfName: 'Green Field', date: '2025-03-01', time: '18:00-19:00', amount: 1200, status: 'confirmed' },
  { id: 2, customerName: 'Priya Patel', turfName: 'Green Field', date: '2025-03-01', time: '19:00-20:00', amount: 1200, status: 'pending' },
  { id: 3, customerName: 'Amit Kumar', turfName: 'Sports Arena', date: '2025-03-02', time: '17:00-18:00', amount: 1500, status: 'confirmed' },
];

const topTurfs = [
  { id: 1, name: 'Green Field', location: 'Andheri West', bookings: 28, rating: 4.7, image: '/uploads/IM1.jpg' },
  { id: 2, name: 'Sports Arena', location: 'Malad East', bookings: 22, rating: 4.5, image: '/uploads/IM2.jpg' },
];
 function PartnerHome() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>TurfBook Partner | Dashboard</title>
        <meta name="description" content="Manage your turf bookings and operations with TurfBook Partner" />
      </Head>
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-800 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="md:flex md:items-center md:justify-between"
            >
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome back, <span className="text-green-300">Partner</span></h1>
                <p className="text-lg md:text-xl mb-6 text-gray-200">Manage your turfs, bookings, and business all in one place.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/partner/turfs">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Add New Turf <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                  <Link href="/partner/bookings">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md flex items-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                    >
                      View Bookings <Calendar className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 md:mt-0 md:w-2/5"
              >
                <Image 
                  src="/uploads/IM2.jpg" 
                  alt="TurfBook Partner Dashboard"
                  width={600}
                  height={400} 
                  className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      
        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <motion.div variants={fadeIn}>
              <StatCard 
                title="Total Bookings" 
                value="158" 
                trend="+12%" 
                icon={<Calendar className="h-6 w-6 text-green-600" />} 
                color="bg-gradient-to-br from-green-50 to-green-100"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <StatCard 
                title="Revenue" 
                value="₹48,500" 
                trend="+8%" 
                icon={<TrendingUp className="h-6 w-6 text-blue-600" />} 
                color="bg-gradient-to-br from-blue-50 to-blue-100"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <StatCard 
                title="New Users" 
                value="34" 
                trend="+24%" 
                icon={<Users className="h-6 w-6 text-purple-600" />} 
                color="bg-gradient-to-br from-purple-50 to-purple-100"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <StatCard 
                title="Avg. Booking Time" 
                value="78 min" 
                trend="+5%" 
                icon={<Clock className="h-6 w-6 text-orange-600" />} 
                color="bg-gradient-to-br from-orange-50 to-orange-100"
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Recent Bookings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Bookings</h2>
            <Link href="/partner/bookings">
              <button className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turf</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <motion.tr 
                      key={booking.id}
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                      className="transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.turfName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{new Date(booking.date).toLocaleDateString('en-IN')}</div>
                        <div className="text-sm text-gray-500">{booking.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">₹{booking.amount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'}`}
                        >
                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/partner/bookings/${booking.id}`}>
                          <button className="text-blue-600 hover:text-blue-900">Details</button>
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
        
        {/* Performance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Top Performing Turfs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topTurfs.map((turf) => (
              <motion.div 
                key={turf.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/partner/turfs/${turf.id}`}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image 
                          src={turf.image} 
                          alt={turf.name}
                          width={300} 
                          height={200} 
                          className="h-48 md:h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{turf.name}</h3>
                            <p className="text-gray-600 flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1" /> {turf.location}
                            </p>
                          </div>
                          <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                            <Award className="h-4 w-4 text-blue-600 mr-1" />
                            <span className="text-blue-700 text-sm font-medium">Top Rated</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-500 text-sm">Bookings (30 days)</p>
                            <p className="text-gray-900 font-semibold text-lg">{turf.bookings}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-gray-500 text-sm">Rating</p>
                            <p className="text-gray-900 font-semibold text-lg flex items-center">
                              {turf.rating} 
                              <svg className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center">
                            View Details <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quick Actions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/partner/turfs/new">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:border-green-200 transition-all duration-200"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-medium">Add New Turf</h3>
              </motion.div>
            </Link>
            
            <Link href="/partner/bookings/manage">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:border-blue-200 transition-all duration-200"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 font-medium">Manage Bookings</h3>
              </motion.div>
            </Link>
            
            <Link href="/partner/analytics">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:border-purple-200 transition-all duration-200"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-gray-900 font-medium">View Analytics</h3>
              </motion.div>
            </Link>
            
            <Link href="/partner/profile">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:border-orange-200 transition-all duration-200"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-gray-900 font-medium">Edit Profile</h3>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default PartnerHome