import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Compass, Navigation2 } from 'lucide-react';

interface MapMarker {
  id: number;
  name: string;
  description: string;
  x: number;
  y: number;
}

const markers: MapMarker[] = [
  { id: 1, name: 'A Block', description: 'Department of Computer Application & Computer Science', x: 10, y: 30 },
  { id: 2, name: 'B Block', description: 'Department of Commerce', x: 32, y: 48 },
  { id: 3, name: 'C Block', description: 'Department of Business Administration & HRM', x: 52, y: 55 },
  { id: 4, name: 'D Block', description: 'School of Media Studies & Library', x: 45, y: 75 },
  { id: 5, name: 'E Block', description: 'Department of English & Psychology', x: 78, y: 85 },
  { id: 6, name: 'OAT', description: 'Open Air Theatre', x: 34, y: 25 },
];

export default function Map() {
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setScale(1);

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1920px]">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b bg-gray-50 dark:bg-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-semibold dark:text-white">Interactive Campus Map</h2>
          <div className="flex space-x-4">
            <button onClick={handleZoomIn} className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
              <ZoomIn size={24} className="dark:text-white" />
            </button>
            <button onClick={handleZoomOut} className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
              <ZoomOut size={24} className="dark:text-white" />
            </button>
            <button onClick={handleReset} className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg">
              <Compass size={24} className="dark:text-white" />
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          <div className="relative w-full" style={{ transform: `scale(${scale})`, transformOrigin: 'center', transition: 'transform 0.3s ease' }}>
            <img
              src="/assets/img/Campus_Map.png"
              alt="Patrician College Campus Map"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Markers */}
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: `scale(${1/scale})` }}
              onMouseEnter={() => setActiveMarker(marker)}
              onMouseLeave={() => setActiveMarker(null)}
            >
              <div className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                <Navigation2 size={24} className="animate-pulse" />
              </div>

              {activeMarker?.id === marker.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{marker.name}</h4>
                  <p className="text-base text-gray-600 dark:text-gray-300 mt-2">{marker.description}</p>
                  <button
                    onClick={() => setShowDirections(true)}
                    className="mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center"
                  >
                    <Navigation2 size={18} />
                    <span>Get Directions</span>
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Directions Modal */}
          {showDirections && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full mx-4">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Getting Directions</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Use your current location to get directions to {activeMarker?.name}?
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowDirections(false)}
                    className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowDirections(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Navigate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
