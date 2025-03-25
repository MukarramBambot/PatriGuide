import React, { useState } from 'react';
import { Building2, ChevronDown, ChevronRight, Coffee, Car, BookOpen, Camera, Music, Users, Briefcase, GraduationCap, ShoppingBasket as Basketball, Trees as Tree, Theater, Ban as Bank, DoorOpen, ParkingCircle } from 'lucide-react';

interface Block {
  id: string;
  name: string;
  icon: React.ElementType;
  facilities: string[];
}

const blocks: Block[] = [
  {
    id: 'a-block',
    name: 'A Block',
    icon: Building2,
    facilities: [
      'Department of Computer Application & Computer Science',
      'Administrative & Academic Director\'s Office',
      'Principal\'s Office',
      'Computer Lab',
      'Micro Processor Lab',
      'Conference Hall'
    ]
  },
  {
    id: 'b-block',
    name: 'B Block',
    icon: Building2,
    facilities: [
      'Department of Commerce',
      'Auditorium',
      'Commerce Lab',
      'Vice Principal (Shift II)'
    ]
  },
  {
    id: 'c-block',
    name: 'C Block',
    icon: Building2,
    facilities: [
      'Department of Business Administration & HRM',
      'Fintan Hall',
      'Board Room',
      'Innovation Cell',
      'Well Being Centre',
      'Seeds Room',
      'Ignatius Hall'
    ]
  },
  {
    id: 'd-block',
    name: 'D Block',
    icon: Building2,
    facilities: [
      'Department of Computer Application & Computer Science (Shift II)',
      'Department of Commerce (Shift II)',
      'Department of Corporate Secretaryship (Shift II)',
      'Department of Accounting and Finance (Shift II)',
      'School of Media Studies',
      'Library',
      'Bro. Aloysius Recording Studio',
      'Green Matt Studio',
      'Bro. T Plus – Preview Theatre',
      'Bro. Thanickan – Photo Studio',
      'Director\'s Office & Accounts Office'
    ]
  },
  {
    id: 'e-block',
    name: 'E Block',
    icon: Building2,
    facilities: [
      'Department of English',
      'Department of Psychology',
      'Department of Data Science with CS',
      'Department of Mathematics',
      'Department of Accounting and Finance',
      'Department of Physical Education',
      'Counseling Room',
      'BMS Hall',
      'Exam Office',
      'Vice Principal (Shift I)',
      'Delany Hall',
      'Psychology Lab'
    ]
  }
];

const otherLocations = [
  { name: 'Basketball Court', icon: Basketball },
  { name: 'Patrician Garden', icon: Tree },
  { name: 'OAT (Open Air Theatre)', icon: Theater },
  { name: 'Student Cafeteria', icon: Coffee },
  { name: 'Canteen & Patrician Juice Center', icon: Coffee },
  { name: 'HDFC Bank Counter', icon: Bank }
];

const parkingAreas = [
  { name: 'Students Two-Wheeler Parking', icon: ParkingCircle },
  { name: 'Faculty Four-Wheeler Parking', icon: Car }
];

const entryPoints = [
  { name: 'College Main Gate', icon: DoorOpen },
  { name: 'College Gate 2', icon: DoorOpen },
  { name: 'Way to Parking', icon: ParkingCircle }
];

export default function BlocksSection() {
  const [openBlocks, setOpenBlocks] = useState<string[]>([]);

  const toggleBlock = (blockId: string) => {
    setOpenBlocks(prev =>
      prev.includes(blockId)
        ? prev.filter(id => id !== blockId)
        : [...prev, blockId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center dark:text-white">
        <Building2 className="mr-2 text-blue-600 dark:text-blue-400" />
        Main Areas & Blocks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map(block => (
          <div
            key={block.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
          >
            <button
              onClick={() => toggleBlock(block.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <block.icon className="text-blue-600 dark:text-blue-400" size={24} />
                <h3 className="text-xl font-semibold dark:text-white">{block.name}</h3>
              </div>
              {openBlocks.includes(block.id) ? (
                <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
              ) : (
                <ChevronRight className="text-gray-500 dark:text-gray-400" size={20} />
              )}
            </button>
            
            {openBlocks.includes(block.id) && (
              <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700">
                <ul className="space-y-2">
                  {block.facilities.map((facility, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      <ChevronRight size={16} className="mt-1 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Other Important Locations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
            <Building2 className="mr-2 text-blue-600 dark:text-blue-400" />
            Other Important Locations
          </h3>
          <ul className="space-y-3">
            {otherLocations.map((location, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <location.icon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>{location.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Parking Areas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
            <Car className="mr-2 text-blue-600 dark:text-blue-400" />
            Parking Areas
          </h3>
          <ul className="space-y-3">
            {parkingAreas.map((area, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <area.icon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>{area.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Entry/Exit Points */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
            <DoorOpen className="mr-2 text-blue-600 dark:text-blue-400" />
            Entry/Exit Points
          </h3>
          <ul className="space-y-3">
            {entryPoints.map((point, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <point.icon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>{point.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}