import React from "react";
import { Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/img/Campus_img.jpg" // ✅ Corrected Image Path
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Explore Patrician College with Smart Navigation!
          </h1>
          <p className="text-2xl mb-10 leading-relaxed">
            Find your way around campus easily with our intelligent navigation system.
            Available in English, தமிழ், and हिंदी.
          </p>
          <button
            onClick={() => navigate("/campus-map")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg flex items-center space-x-3 transform transition hover:scale-105 text-xl"
          >
            <Navigation size={24} />
            <span>Start Navigation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
