import React, { useState } from 'react';
import { Search, MapPin, Building2, Phone, Clock, History, Navigation } from 'lucide-react';

const markers = [
  { id: 1, name: 'A Block', description: 'Department of Computer Application & Computer Science', x: 10, y: 30 },
  { id: 2, name: 'B Block', description: 'Department of Commerce', x: 32, y: 48 },
  { id: 3, name: 'C Block', description: 'Department of Business Administration & HRM', x: 52, y: 55 },
  { id: 4, name: 'D Block', description: 'School of Media Studies & Library', x: 45, y: 75 },
  { id: 5, name: 'E Block', description: 'Department of English & Psychology', x: 78, y: 85 },
  { id: 6, name: 'OAT', description: 'Open Air Theatre', x: 34, y: 25 },
];

const campusKnowledge = {
  entrance: { name: 'Main Entrance (A Block Side)', x: 10, y: 30 },
  facilities: {
    'Library': { location: 'D Block', directions: 'Walk straight past B Block and reach D Block on your right.' },
    'Cafeteria': { location: 'Near OAT', directions: 'Walk towards the Open Air Theatre, the Cafeteria is beside it.' },
    'Exam Halls': { location: 'Various Blocks', directions: 'Exam halls are located in multiple blocks. Please check the exam notice for details.' },
    'Admin Block': { location: 'A Block', directions: 'The Admin Block is right at the entrance of A Block.' },
  }
};

export default function SearchSection() {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [directions, setDirections] = useState<string | null>(null);

  const allLocations = [...markers.map(m => m.name), ...Object.keys(campusKnowledge.facilities)];

  const filteredSuggestions = allLocations.filter(location =>
    location.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (location: string) => {
    setSearchText(location);
    setSelectedLocation(location);
    setShowSuggestions(false);

    if (!recentSearches.includes(location)) {
      setRecentSearches(prev => [location, ...prev].slice(0, 5));
    }

    generateDirections(location);
  };

  const generateDirections = (destination: string) => {
    const entrance = campusKnowledge.entrance;
    const destinationInfo = markers.find(m => m.name === destination) || campusKnowledge.facilities[destination];

    if (destinationInfo) {
      setDirections(`Start at the Main Entrance near A Block. ${destinationInfo.directions}`);
    } else {
      setDirections('Location not found. Please select a valid destination.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for locations, departments, or facilities..."
            className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none pl-14 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          
          {showSuggestions && (searchText || recentSearches.length > 0) && (
            <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              {searchText && filteredSuggestions.length > 0 && (
                <div className="p-2">
                  <div className="flex items-center px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                    <Search size={16} className="mr-2" />
                    <span>Suggestions</span>
                  </div>
                  {filteredSuggestions.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(location)}
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors dark:text-white"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
              
              {recentSearches.length > 0 && (
                <div className="p-2 border-t dark:border-gray-700">
                  <div className="flex items-center px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                    <History size={16} className="mr-2" />
                    <span>Recent Searches</span>
                  </div>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center dark:text-white"
                    >
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {search}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {selectedLocation && directions && (
          <div className="mt-8 bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 flex items-center">
              <Navigation className="mr-2" size={20} />
              Directions to {selectedLocation}
            </h3>
            <p className="mt-2 text-blue-600 dark:text-blue-400">{directions}</p>
          </div>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(campusKnowledge.facilities).map((dest, index) => (
              <button
                key={index}
                onClick={() => handleSearch(dest)}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-105 dark:bg-gray-800 dark:text-white"
              >
                <MapPin size={24} className="text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-gray-700 dark:text-gray-300">{dest}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
