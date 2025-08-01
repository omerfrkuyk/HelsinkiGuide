import React from 'react';
import { Heart, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Helsinki Rehberi
            </h3>
            <p className="text-gray-300 text-sm">
              Helsinki'yi keşfetmek için ihtiyacınız olan her şey. 
              Ulaşım, müzeler ve daha fazlası.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🚌 Ulaşım Bilgileri</li>
              <li>🏛️ Müzeler</li>
              <li>🎫 Bilet Satın Al</li>
              <li>🗺️ Harita</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@helsinkirehberi.fi
              </div>
              <p>Helsinki, Finlandiya</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in Helsinki
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 