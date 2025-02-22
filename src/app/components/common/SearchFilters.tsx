"use client"

import { useState } from 'react';

export default function SearchFilters() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Popular locations data
  const popularLocations = [
    { city: 'Mumbai', areas: ['Andheri', 'Bandra', 'Juhu', 'Powai'] },
    { city: 'Delhi', areas: ['Rohini', 'Dwarka', 'Vasant Kunj', 'Pitampura'] },
    { city: 'Bangalore', areas: ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield'] }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Enhanced Location Filter */}
        <div className="relative md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 pl-10"
              onFocus={() => setShowLocationDropdown(true)}
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            
            {/* Location Dropdown */}
            {showLocationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100">
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Popular Locations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {popularLocations.map((location) => (
                      <div key={location.city} className="space-y-2">
                        <h5 className="text-sm font-medium text-gray-900">{location.city}</h5>
                        <div className="space-y-1">
                          {location.areas.map((area) => (
                            <button
                              key={area}
                              className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                              onClick={() => {
                                // Handle location selection
                                setShowLocationDropdown(false);
                              }}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t px-4 py-3 bg-gray-50 rounded-b-lg">
                  <button
                    className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center"
                    onClick={() => setShowLocationDropdown(false)}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Use current location
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sport Type Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Sport Type</label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white">
            <option value="">All Sports</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white">
            <option value="">All Prices</option>
            <option value="0-1000">Under ₹1000</option>
            <option value="1000-2000">₹1000 - ₹2000</option>
            <option value="2000+">Above ₹2000</option>
          </select>
        </div>
      </div>

      {/* Applied Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          Mumbai
          <button className="ml-1 hover:text-green-900">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          Football
          <button className="ml-1 hover:text-green-900">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}