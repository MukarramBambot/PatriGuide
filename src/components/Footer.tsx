import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/img/Patics_Logo.png" 
                alt="Patrician College Logo" 
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">Patrician College</h3>
                <span className="text-sm text-gray-400">of Arts and Science</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin size={20} className="mr-2" />
                Canal Bank Road, Adyar, Chennai - 600020
              </p>
              <p className="flex items-center">
                <Phone size={20} className="mr-2" />
                +91 1234567890
              </p>
              <p className="flex items-center">
                <Mail size={20} className="mr-2" />
                info@patriciancollege.edu
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Campus Map</a></li>
              <li><a href="#" className="hover:text-white">Departments</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Patrician College of Arts and Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}