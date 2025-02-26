"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Clock, X, ChevronDown, Filter, Sliders, Star } from 'lucide-react';

export default function SearchFilters() {
  // State management
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([
    { id: 1, type: 'location', value: 'Mumbai' },
    { id: 2, type: 'sport', value: 'Football' }
  ]);
  const [dateFilter, setDateFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or map
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);
  const [sliderValue, setSliderValue] = useState(1500);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const dropdownRef = useRef(null);
  
  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event:any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animate filter addition/removal
  const addFilter = (type:any, value:any) => {
    setIsAnimating(true);
    const newFilter = { id: Date.now(), type, value };
    setSelectedFilters([...selectedFilters, newFilter]);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const removeFilter = (id:any) => {
    setSelectedFilters(selectedFilters.filter(filter => filter.id !== id));
  };

  // Popular locations data
  const popularLocations = [
    { city: 'Mumbai', areas: ['Andheri', 'Bandra', 'Juhu', 'Powai'] },
    { city: 'Delhi', areas: ['Rohini', 'Dwarka', 'Vasant Kunj', 'Pitampura'] },
    { city: 'Bangalore', areas: ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield'] }
  ];
  
  // Trending locations with rating
  const trendingLocations = [
    { name: 'Green Park Turf', area: 'Bandra', rating: 4.8, price: '₹1,200/hr' },
    { name: 'Urban Kicks Arena', area: 'Andheri', rating: 4.6, price: '₹900/hr' },
    { name: 'Premier Football Ground', area: 'Juhu', rating: 4.9, price: '₹1,500/hr' },
  ];

  return (
    <div className="rounded-xl overflow-hidden">
      {/* Primary Filter Bar */}
      <div className="bg-white p-6 rounded-t-xl shadow-md border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Location Selector - Larger on desktop */}
          <div className="lg:col-span-5 relative" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to play?"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                onFocus={() => setShowLocationDropdown(true)}
              />
              <MapPin className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              
              {/* Styled dropdown with animation */}
              {showLocationDropdown && (
                <div className="absolute z-30 w-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 animate-fadeIn">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-700">Popular Locations</h4>
                      <button 
                        onClick={() => setShowLocationDropdown(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {popularLocations.map((location) => (
                        <div key={location.city} className="space-y-2">
                          <h5 className="text-sm font-medium text-gray-900 flex items-center">
                            <MapPin size={14} className="mr-1 text-green-600" />
                            {location.city}
                          </h5>
                          <div className="space-y-1">
                            {location.areas.map((area) => (
                              <button
                                key={area}
                                className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                                onClick={() => {
                                  addFilter('location', `${location.city} - ${area}`);
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
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Trending Turfs</h4>
                      <div className="space-y-3">
                        {trendingLocations.map((loc, index) => (
                          <div 
                            key={index}
                            className="p-2 rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center cursor-pointer"
                            onClick={() => {
                              addFilter('turf', loc.name);
                              setShowLocationDropdown(false);
                            }}
                          >
                            <div>
                              <p className="font-medium text-gray-800">{loc.name}</p>
                              <p className="text-xs text-gray-500">{loc.area}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-yellow-500">
                                <Star size={14} className="fill-current" />
                                <span className="ml-1 text-sm">{loc.rating}</span>
                              </div>
                              <p className="text-xs font-medium text-green-600">{loc.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t px-4 py-3 bg-gray-50 rounded-b-lg">
                    <button
                      className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center"
                      onClick={() => {
                        addFilter('location', 'Current Location');
                        setShowLocationDropdown(false);
                      }}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Use my current location
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Date Picker */}
          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
              <Calendar className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          {/* Sport Type Selector */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Sport
            </label>
            <div className="relative">
              <select className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none">
                <option value="">All Sports</option>
                <option value="football">Football</option>
                <option value="cricket">Cricket</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="badminton">Badminton</option>
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Search Button */}
          <div className="lg:col-span-2 flex items-end">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center font-medium">
              <Search className="mr-2 h-5 w-5" />
              Search
            </button>
          </div>
        </div>
        
        {/* Advanced Filter Toggle */}
        <div className="mt-4 flex justify-between items-center">
          <button 
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1.5"
            onClick={() => setIsAdvancedFilter(!isAdvancedFilter)}
          >
            <Sliders className="h-4 w-4" />
            {isAdvancedFilter ? 'Hide' : 'Show'} advanced filters
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isAdvancedFilter ? 'rotate-180' : ''}`} />
          </button>
          
          <div className="flex space-x-2">
            <button 
              className={`px-2 py-1 rounded ${viewMode === 'grid' ? 'bg-gray-200 text-gray-800' : 'text-gray-500'}`}
              onClick={() => setViewMode('grid')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <button 
              className={`px-2 py-1 rounded ${viewMode === 'map' ? 'bg-gray-200 text-gray-800' : 'text-gray-500'}`}
              onClick={() => setViewMode('map')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Advanced Filters Section */}
      <div className={`bg-gray-50 px-6 py-4 border-b border-gray-200 transition-all duration-300 overflow-hidden ${isAdvancedFilter ? 'max-h-96' : 'max-h-0 py-0 px-6 border-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range (per hour)
            </label>
            <div className="px-2">
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">₹500</span>
                <span className="text-sm font-medium text-green-600">₹{sliderValue}</span>
                <span className="text-xs text-gray-500">₹5000</span>
              </div>
            </div>
          </div>
          
          {/* Time Slots */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Slot
            </label>
            <div className="relative">
              <select className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none">
                <option value="">Any time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
                <option value="night">Night (8 PM - 12 AM)</option>
              </select>
              <Clock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          {/* Amenities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 h-4 w-4" />
                <span className="text-sm text-gray-700">Changing Room</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 h-4 w-4" />
                <span className="text-sm text-gray-700">Parking</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 h-4 w-4" />
                <span className="text-sm text-gray-700">Floodlights</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 h-4 w-4" />
                <span className="text-sm text-gray-700">Refreshments</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Applied Filters Section with Animation */}
      {selectedFilters.length > 0 && (
        <div className="bg-white px-6 py-3 rounded-b-xl shadow-sm">
          <div className="flex items-center">
            <Filter className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600 mr-3">Applied Filters:</span>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <span 
                  key={filter.id} 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 ${isAnimating ? 'animate-pulse' : ''}`}
                >
                  {filter.value}
                  <button 
                    className="ml-1.5 hover:text-green-900 focus:outline-none"
                    onClick={() => removeFilter(filter.id)}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              {selectedFilters.length > 0 && (
                <button 
                  className="text-xs text-gray-500 hover:text-gray-700 underline"
                  onClick={() => setSelectedFilters([])}
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}