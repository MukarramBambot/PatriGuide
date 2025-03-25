import React from "react";
import { Building2, Navigation, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">About PatriGuide</h1>
          
          <div className="mb-12">
            {/* ✅ Updated Image Path */}
            <img
              src="/assets/img/Campus_about.jpeg"
              alt="Patrician College Campus"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Welcome to PatriGuide, your smart navigation companion at Patrician College. Our system is designed to help students, staff, and visitors navigate the campus efficiently and effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h2 className="text-xl font-semibold dark:text-white">Our Campus</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Patrician College boasts modern facilities spread across multiple blocks, each dedicated to different academic departments and activities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Navigation className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h2 className="text-xl font-semibold dark:text-white">Smart Navigation</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Our interactive map and AI-powered chatbot help you find the shortest route to your destination within the campus.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h2 className="text-xl font-semibold dark:text-white">Accessibility</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                PatriGuide supports multiple languages and provides voice navigation to ensure everyone can use it effectively.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h2 className="text-xl font-semibold dark:text-white">24/7 Assistance</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Our virtual assistant is available round the clock to help you with directions and campus information.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To provide a seamless navigation experience that helps our community explore and utilize campus facilities efficiently, making every visit to Patrician College a pleasant experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
