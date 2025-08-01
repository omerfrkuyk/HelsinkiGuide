import React, { useState } from 'react';
import { MapPin, Clock, Euro, Star, Users } from 'lucide-react';

const MuseumsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const museumsData = [
    {
      name: 'Suomenlinna Kalesi',
      description: 'UNESCO Dünya Mirası Listesi\'nde yer alan deniz kalesi',
      price: 'Ücretsiz',
      childPrice: 'Ücretsiz',
      address: 'Suomenlinna, Helsinki',
      hours: '09:00-18:00',
      rating: 4.8,
      childFriendly: true,
      category: 'tarih',
      image: '🏰',
      highlights: ['Kale turu', 'Deniz manzarası', 'Tarihi yapılar', 'Müze gezisi'],
      ageRange: 'Tüm yaşlar'
    },
    {
      name: 'Helsinki Şehir Müzesi',
      description: 'Helsinki\'nin tarihini keşfedin',
      price: 'Ücretsiz',
      childPrice: 'Ücretsiz',
      address: 'Aleksanterinkatu 16',
      hours: '11:00-17:00',
      rating: 4.5,
      childFriendly: true,
      category: 'tarih',
      image: '🏛️',
      highlights: ['İnteraktif sergiler', 'Çocuk aktiviteleri', 'Şehir tarihi'],
      ageRange: '3+ yaş'
    },
    {
      name: 'Kiasma Modern Sanat Müzesi',
      description: 'Modern ve çağdaş sanat eserleri',
      price: '18€',
      childPrice: 'Ücretsiz',
      address: 'Mannerheiminaukio 2',
      hours: '10:00-20:30',
      rating: 4.3,
      childFriendly: true,
      category: 'sanat',
      image: '🎨',
      highlights: ['Modern sanat', 'İnteraktif sergiler', 'Çocuk atölyeleri'],
      ageRange: '5+ yaş'
    },
    {
      name: 'Heureka Bilim Merkezi',
      description: 'Bilim ve teknolojiyi eğlenceli şekilde öğrenin',
      price: '22€',
      childPrice: '16€',
      address: 'Tiedepuisto 1, Vantaa',
      hours: '10:00-17:00',
      rating: 4.9,
      childFriendly: true,
      category: 'bilim',
      image: '🔬',
      highlights: ['İnteraktif deneyler', 'Planetaryum', 'Bilim gösterileri'],
      ageRange: '4+ yaş'
    },
    {
      name: 'Seurasaari Açık Hava Müzesi',
      description: 'Geleneksel Fin mimarisi ve kültürü',
      price: '8€',
      childPrice: 'Ücretsiz',
      address: 'Seurasaari, Helsinki',
      hours: '11:00-17:00',
      rating: 4.6,
      childFriendly: true,
      category: 'kültür',
      image: '🏡',
      highlights: ['Geleneksel evler', 'Doğa yürüyüşü', 'Kültürel etkinlikler'],
      ageRange: 'Tüm yaşlar'
    },
    {
      name: 'Ateneum Sanat Müzesi',
      description: 'Finlandiya\'nın en önemli sanat koleksiyonu',
      price: '20€',
      childPrice: 'Ücretsiz',
      address: 'Kaivokatu 2',
      hours: '10:00-18:00',
      rating: 4.4,
      childFriendly: false,
      category: 'sanat',
      image: '🖼️',
      highlights: ['Klasik sanat', 'Fin sanatçıları', 'Geçici sergiler'],
      ageRange: '12+ yaş'
    }
  ];

  const filters = [
    { id: 'all', name: 'Tümü', icon: '🏛️' },
    { id: 'childFriendly', name: 'Çocuk Dostu', icon: '👶' },
    { id: 'free', name: 'Ücretsiz', icon: '🆓' },
    { id: 'science', name: 'Bilim', icon: '🔬' },
    { id: 'art', name: 'Sanat', icon: '🎨' }
  ];

  const getFilteredMuseums = () => {
    switch (selectedFilter) {
      case 'childFriendly':
        return museumsData.filter(museum => museum.childFriendly);
      case 'free':
        return museumsData.filter(museum => museum.price === 'Ücretsiz');
      case 'science':
        return museumsData.filter(museum => museum.category === 'bilim');
      case 'art':
        return museumsData.filter(museum => museum.category === 'sanat');
      default:
        return museumsData;
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
              selectedFilter === filter.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            <span>{filter.icon}</span>
            <span>{filter.name}</span>
          </button>
        ))}
      </div>

      {/* Museums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredMuseums().map((museum, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="text-4xl mb-3">{museum.image}</div>
              <h3 className="text-xl font-bold mb-2">{museum.name}</h3>
              <p className="text-blue-100 text-sm">{museum.description}</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Price and Rating */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Euro className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-600">
                      Yetişkin: {museum.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-blue-600">
                      Çocuk: {museum.childPrice}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">{museum.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{museum.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{museum.hours}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Yaş Aralığı:</span> {museum.ageRange}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Öne Çıkanlar:</h4>
                <div className="flex flex-wrap gap-1">
                  {museum.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Child Friendly Badge */}
              {museum.childFriendly && (
                <div className="flex items-center space-x-2 text-green-600">
                  <span className="text-lg">👶</span>
                  <span className="font-medium text-sm">Çocuk Dostu</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <h3 className="text-lg font-bold text-green-800 mb-3">🎯 Müze Ziyaret İpuçları</h3>
        <ul className="space-y-2 text-green-700">
          <li>• Çoğu müze Pazartesi günleri kapalıdır</li>
          <li>• Helsinki Card ile birçok müzeye ücretsiz giriş</li>
          <li>• Çocuklar genellikle ücretsiz girebilir</li>
          <li>• Yaz aylarında açık hava müzeleri ideal</li>
          <li>• Rezervasyon önerilir (özellikle hafta sonları)</li>
        </ul>
      </div>
    </div>
  );
};

export default MuseumsSection; 