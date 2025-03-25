import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'hi', label: 'हिंदी' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 dark:bg-gray-800 dark:text-white">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/img/Patics_Logo.png" 
              alt="Patrician College Logo" 
              className="h-16 w-16"
            />
            <div className="flex flex-col">
              <span className="text-blue-600 text-xl font-bold dark:text-blue-400">Patrician College</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">of Arts and Science</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/about') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
            >
              About
            </Link>
            <Link 
              to="/campus-map" 
              className={`text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/campus-map') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
            >
              Campus Map
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/contact') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
            >
              Contact
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                <Globe size={20} />
                <span>{languages.find(l => l.code === currentLang)?.label}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block dark:bg-gray-700">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/about') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/campus-map" 
                className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/campus-map') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Campus Map
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${isActive('/contact') && 'text-blue-600 font-semibold dark:text-blue-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="border-t pt-4 dark:border-gray-700">
                <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">Select Language</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left py-2 text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}