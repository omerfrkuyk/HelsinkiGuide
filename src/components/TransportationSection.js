import React, { useState } from 'react';
import { Bus, Train, Tram, Car, Walking, Euro } from 'lucide-react';

const TransportationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const transportationData = {
    public: [
      {
        name: 'HSL Metro',
        description: 'Helsinki metro sistemi',
        price: '2.80€',
        duration: '5-15 dk',
        icon: <Train className="w-6 h-6" />,
        routes: ['Merkez → Espoo', 'Merkez → Vantaa', 'Merkez → Helsinki Havalimanı'],
        color: 'bg-red-500'
      },
      {
        name: 'HSL Tramvay',
        description: 'Şehir içi tramvay ağı',
        price: '2.80€',
        duration: '10-25 dk',
        icon: <Tram className="w-6 h-6" />,
        routes: ['Merkez → Kallio', 'Merkez → Töölö', 'Merkez → Punavuori'],
        color: 'bg-green-500'
      },
      {
        name: 'HSL Otobüs',
        description: 'Şehir içi ve banliyö otobüsleri',
        price: '2.80€',
        duration: '15-45 dk',
        icon: <Bus className="w-6 h-6" />,
        routes: ['Merkez → Espoo', 'Merkez → Vantaa', 'Merkez → Kauniainen'],
        color: 'bg-blue-500'
      }
    ],
    private: [
      {
        name: 'Taksi',
        description: 'Şehir içi taksi hizmeti',
        price: '5-15€',
        duration: '10-30 dk',
        icon: <Car className="w-6 h-6" />,
        routes: ['Merkez → Helsinki Havalimanı', 'Merkez → Herhangi bir yer'],
        color: 'bg-yellow-500'
      },
      {
        name: 'Yürüyüş',
        description: 'Merkez içi yürüyüş',
        price: 'Ücretsiz',
        duration: '5-30 dk',
        icon: <Walking className="w-6 h-6" />,
        routes: ['Senate Meydanı → Market Meydanı', 'Merkez → Töölö'],
        color: 'bg-purple-500'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'Tümü', icon: '🚌' },
    { id: 'public', name: 'Toplu Taşıma', icon: '🚇' },
    { id: 'private', name: 'Özel', icon: '🚗' }
  ];

  const getFilteredData = () => {
    if (selectedCategory === 'all') {
      return [...transportationData.public, ...transportationData.private];
    }
    return transportationData[selectedCategory] || [];
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-blue-50'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Transportation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredData().map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className={`${item.color} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Euro className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-600">{item.price}</span>
                </div>
                <span className="text-sm text-gray-500">{item.duration}</span>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Popüler Rotalar:</h4>
                <ul className="space-y-1">
                  {item.routes.map((route, routeIndex) => (
                    <li key={routeIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-bold text-blue-800 mb-3">💡 Ulaşım İpuçları</h3>
        <ul className="space-y-2 text-blue-700">
          <li>• HSL kartı ile tüm toplu taşıma araçlarını kullanabilirsiniz</li>
          <li>• 24 saatlik bilet 8€, 7 günlük bilet 32€</li>
          <li>• Çocuklar 7 yaşına kadar ücretsiz seyahat edebilir</li>
          <li>• Metro ve tramvaylar gece yarısına kadar çalışır</li>
          <li>• HSL uygulamasından gerçek zamanlı bilgi alabilirsiniz</li>
        </ul>
      </div>
    </div>
  );
};

export default TransportationSection; 