import React from 'react';
import Map from '../components/Map';
import SearchSection from '../components/SearchSection';

export default function CampusMapPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Campus Map
        </h1>

        {/* Search Section */}
        <div className="mb-6">
          <SearchSection />
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[700px] md:h-[800px] shadow-lg rounded-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </main>
  );
}
