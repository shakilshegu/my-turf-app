"use client"
import React, { useState, useRef } from 'react';
import { MapPin, X, Maximize, Minimize, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MapLocationPickerProps {
  address: string;
  onChange: (address: string, lat: number, lng: number) => void;
}

const MapLocationPicker: React.FC<MapLocationPickerProps> = ({ address, onChange }) => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [searchText, setSearchText] = useState(address);
  const [mapView, setMapView] = useState<'normal' | 'satellite'>('normal');
  const mapRef = useRef<HTMLDivElement>(null);

  const toggleMap = () => {
    setIsMapVisible(!isMapVisible);
    if (!isMapVisible) {
      // When opening map for the first time, try to geocode the current address
      if (address && coordinates.lat === 0 && coordinates.lng === 0) {
        // In a real app, geocode the address here
        // For demo, set some placeholder coordinates
        setCoordinates({ lat: 40.7128, lng: -74.0060 });
      }
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMapView = () => {
    setMapView(mapView === 'normal' ? 'satellite' : 'normal');
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // In a real implementation, this would capture actual map clicks
    // For demo purposes, we'll just simulate a location selection
    
    // Calculate relative position in the map container
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Convert to simulated lat/lng (this is just for demonstration)
      // In a real app, you'd get actual coordinates from the map API
      const newLat = 40.7128 + (y - rect.height / 2) / 1000;
      const newLng = -74.0060 + (x - rect.width / 2) / 1000;
      
      setCoordinates({ lat: newLat, lng: newLng });
      
      // Simulate reverse geocoding (getting address from coordinates)
      // In a real app, you'd call a geocoding service
      const newAddress = `Selected Location (${newLat.toFixed(4)}, ${newLng.toFixed(4)})`;
      setSearchText(newAddress);
      onChange(newAddress, newLat, newLng);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would geocode the search text here
    // For demo, just update the address
    onChange(searchText, coordinates.lat, coordinates.lng);
  };

  return (
    <div className="w-full">
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          name="address"
          id="address"
          required
          value={searchText}
          onChange={handleSearchChange}
          className="block w-full rounded-lg border-gray-300 pl-12 pr-12 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 hover:bg-white focus:bg-white transition-all duration-200"
          placeholder="123 Sports Avenue, City, Country"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="button"
            onClick={toggleMap}
            className="p-1 rounded-md bg-gray-100 text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200"
          >
            <MapPin className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isMapVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: isExpanded ? 400 : 250,
            width: isExpanded ? 'calc(100% + 200px)' : '100%',
            marginLeft: isExpanded ? -100 : 0
          }}
          transition={{ duration: 0.3 }}
          className="relative mt-2 rounded-lg overflow-hidden border border-gray-300 shadow-lg z-10"
          style={{ maxWidth: isExpanded ? 'calc(100% + 200px)' : '100%' }}
        >
          <div className="absolute top-0 left-0 right-0 bg-white p-2 flex justify-between items-center z-20 border-b border-gray-200">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="Search for a location"
                className="flex-1 border-gray-300 rounded-l-md text-sm py-1 px-2 focus:border-blue-500 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 text-sm"
              >
                Search
              </button>
            </form>
            <div className="flex items-center ml-2">
              <button 
                onClick={toggleMapView} 
                className="p-1 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-50 mr-1"
                title={`Switch to ${mapView === 'normal' ? 'satellite' : 'normal'} view`}
              >
                <Layers size={18} />
              </button>
              <button 
                onClick={toggleExpand} 
                className="p-1 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-50 mr-1"
              >
                {isExpanded ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
              <button 
                onClick={toggleMap} 
                className="p-1 rounded-md text-gray-500 hover:text-red-500 hover:bg-red-50"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {/* Map Container */}
          <div 
            ref={mapRef}
            onClick={handleMapClick}
            className="w-full h-full relative cursor-crosshair pt-10"
          >
            {/* Map view (normal or satellite) */}
            <div className="absolute inset-0 pt-10">
              {mapView === 'normal' ? (
                // Normal map view
                <Image 
                  src="/api/placeholder/600/300" 
                  alt="Normal map view" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(110%)' }}
                />
              ) : (
                // Satellite view
                <Image 
                  src="/api/placeholder/600/300" 
                  alt="Satellite map view" 
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(120%) contrast(120%)' }}
                />
              )}
            </div>
            
            {/* Controls overlay */}
            <div className="absolute top-16 right-4 bg-white rounded-md shadow-md p-1">
              <div className="flex flex-col space-y-1">
                <button 
                  className={`p-1 rounded text-sm ${mapView === 'normal' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setMapView('normal')}
                >
                  Map
                </button>
                <button 
                  className={`p-1 rounded text-sm ${mapView === 'satellite' ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setMapView('satellite')}
                >
                  Satellite
                </button>
              </div>
            </div>

            {/* Info overlay */}
            {coordinates.lat !== 0 && (
              <div className="absolute bottom-4 left-4 text-sm bg-white p-2 rounded shadow">
                <p className="font-medium">Location:</p>
                <p>{coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}</p>
              </div>
            )}
            
            {/* Location Marker */}
            {coordinates.lat !== 0 && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <MapPin size={32} className="text-red-500" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-red-500 animate-ping opacity-75"></div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MapLocationPicker;