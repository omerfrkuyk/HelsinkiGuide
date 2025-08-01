import React from 'react';
import { MapPin, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Helsinki Rehberi</h1>
              <p className="text-blue-100 text-sm">Ulaşım ve Kültür Rehberi</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-100">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Finlandiya'nın Kalbi</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 