import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('transportation');
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState(null);

  const transportationData = [
    {
      id: 1,
      name: 'HSL Metro',
      description: 'Helsinki metro sistemi',
      price: '2.80€',
      duration: '5-15 dk',
      icon: '🚇',
      color: '#dc3545',
      routes: ['Merkez → Espoo', 'Merkez → Vantaa', 'Merkez → Helsinki Havalimanı'],
      details: {
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop',
        description: 'Helsinki metro sistemi, Finlandiya\'nın tek metro sistemidir. 1982 yılında açılan sistem, şu anda 2 hat ve 25 istasyondan oluşmaktadır. Metro, Helsinki merkezi ile Espoo ve Vantaa banliyölerini birbirine bağlar.',
        operatingHours: '05:30 - 23:30',
        frequency: '3-5 dakika',
        accessibility: 'Tüm istasyonlar engelli erişimine uygun',
        tips: [
          'Metro kartı ile seyahat edin',
          'Yoğun saatlerde kalabalık olabilir',
          'Havalimanına direkt bağlantı var',
          'Gece yarısından sonra otobüs servisleri'
        ]
      }
    },
    {
      id: 2,
      name: 'HSL Tramvay',
      description: 'Şehir içi tramvay ağı',
      price: '2.80€',
      duration: '10-25 dk',
      icon: '🚊',
      color: '#28a745',
      routes: ['Merkez → Kallio', 'Merkez → Töölö', 'Merkez → Punavuori'],
      details: {
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop',
        description: 'Helsinki tramvay sistemi, şehrin en eski toplu taşıma araçlarından biridir. 1891 yılından beri hizmet veren sistem, şehir merkezinde 10 hat üzerinde çalışmaktadır. Tramvaylar, şehrin tarihi dokusunu keşfetmek için idealdir.',
        operatingHours: '05:00 - 01:00',
        frequency: '5-10 dakika',
        accessibility: 'Yeni tramvaylar engelli erişimine uygun',
        tips: [
          'Senate Meydanı\'ndan başlayan rotalar',
          'Tarihi binaları görmek için ideal',
          'Market Meydanı\'na kolay erişim',
          'Yaz aylarında açık tramvaylar'
        ]
      }
    },
    {
      id: 3,
      name: 'HSL Otobüs',
      description: 'Şehir içi ve banliyö otobüsleri',
      price: '2.80€',
      duration: '15-45 dk',
      icon: '🚌',
      color: '#007bff',
      routes: ['Merkez → Espoo', 'Merkez → Vantaa', 'Merkez → Kauniainen'],
      details: {
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Helsinki otobüs ağı, şehrin en kapsamlı toplu taşıma sistemidir. 100\'den fazla hat ile şehrin her köşesine ulaşım sağlar. Gece otobüsleri ile 24 saat hizmet verir.',
        operatingHours: '24 saat (gece otobüsleri)',
        frequency: '5-15 dakika',
        accessibility: 'Tüm otobüsler engelli erişimine uygun',
        tips: [
          'Gece otobüsleri mevcut',
          'Banliyölere direkt bağlantı',
          'Havalimanı otobüsleri',
          'Turistik rotalar mevcut'
        ]
      }
    },
    {
      id: 4,
      name: 'Taksi',
      description: 'Şehir içi taksi hizmeti',
      price: '5-15€',
      duration: '10-30 dk',
      icon: '🚕',
      color: '#ffc107',
      routes: ['Merkez → Helsinki Havalimanı', 'Merkez → Herhangi bir yer'],
      details: {
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
        description: 'Helsinki\'de taksi hizmeti oldukça güvenilir ve temizdir. Tüm taksiler sarı renkte olup, ücretler metre ile hesaplanır. Havalimanı transferleri için özel taksi servisleri mevcuttur.',
        operatingHours: '24 saat',
        frequency: 'Anında',
        accessibility: 'Engelli erişimli taksiler mevcut',
        tips: [
          'Uber ve Bolt uygulamaları kullanılabilir',
          'Havalimanı transferleri için önceden rezervasyon',
          'Gece ücretleri daha yüksek',
          'Kredi kartı ile ödeme kabul edilir'
        ]
      }
    },
    {
      id: 5,
      name: 'Yürüyüş',
      description: 'Merkez içi yürüyüş',
      price: 'Ücretsiz',
      duration: '5-30 dk',
      icon: '🚶',
      color: '#6f42c1',
      routes: ['Senate Meydanı → Market Meydanı', 'Merkez → Töölö'],
      details: {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        description: 'Helsinki merkezi, yürüyüş için mükemmel bir şehirdir. Temiz hava, güvenli sokaklar ve güzel manzaralar ile yürüyüş keyifli bir deneyimdir. Şehrin ana cazibe merkezleri birbirine yakın mesafededir.',
        operatingHours: '24 saat',
        frequency: 'Sürekli',
        accessibility: 'Engelli erişimli yollar mevcut',
        tips: [
          'Kış aylarında buzlu yollara dikkat',
          'Yürüyüş rotaları işaretlenmiş',
          'Parklar ve yeşil alanlar',
          'Tarihi binaları keşfetmek için ideal'
        ]
      }
    }
  ];

  const museumsData = [
    {
      id: 1,
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
      ageRange: 'Tüm yaşlar',
      details: {
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
        description: 'Suomenlinna, Helsinki\'nin güneyindeki adalarda yer alan 18. yüzyıldan kalma deniz kalesidir. UNESCO Dünya Mirası Listesi\'nde yer alan kale, Finlandiya\'nın en önemli tarihi yapılarından biridir. Kale, İsveç döneminde Rusya\'ya karşı savunma amacıyla inşa edilmiştir.',
        history: '1748 yılında İsveç kralı I. Adolf tarafından inşa edilmeye başlanan kale, 1808-1809 Finlandiya Savaşı sırasında Ruslara teslim olmuştur. 1918 yılında Finlandiya bağımsızlığını kazandıktan sonra kale Finlandiya ordusunun kontrolüne geçmiştir.',
        exhibitions: [
          'Suomenlinna Müzesi - Kale tarihi',
          'Ehrensvärd Müzesi - Kale komutanının evi',
          'Oyuncak Müzesi - Çocuklar için',
          'Denizcilik Müzesi - Denizcilik tarihi'
        ],
        activities: [
          'Rehberli kale turları',
          'Deniz manzarası fotoğraf çekimi',
          'Tarihi yapıları keşfetme',
          'Restoran ve kafelerde yemek'
        ],
        tips: [
          'Adaya feribot ile ulaşım (HSL kartı geçerli)',
          'Yaz aylarında kalabalık olabilir',
          'Rahat ayakkabı giyin',
          'Hava durumuna göre plan yapın'
        ]
      }
    },
    {
      id: 2,
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
      ageRange: '4+ yaş',
      details: {
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        description: 'Heureka, Finlandiya\'nın en büyük bilim merkezidir. İnteraktif sergiler, planetaryum ve bilim gösterileri ile bilimi eğlenceli bir şekilde öğrenmeyi sağlar. Özellikle çocuklar için tasarlanmış sergiler bulunmaktadır.',
        exhibitions: [
          'İnsan Vücudu Sergisi',
          'Uzay ve Gezegenler',
          'Teknoloji ve Robotlar',
          'Doğa ve Çevre'
        ],
        activities: [
          'İnteraktif bilim deneyleri',
          'Planetaryum gösterileri',
          'Bilim atölyeleri',
          'Robot yarışmaları'
        ],
        tips: [
          'En az 3-4 saat ayırın',
          'Çocuklar için özel programlar',
          'Planetaryum için ayrı bilet gerekli',
          'Hafta sonları kalabalık olabilir'
        ]
      }
    },
    {
      id: 3,
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
      ageRange: '5+ yaş',
      details: {
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
        description: 'Kiasma, Finlandiya\'nın modern sanat müzesidir. 1998 yılında açılan müze, çağdaş sanat eserlerini sergiler. Müze binası, Amerikalı mimar Steven Holl tarafından tasarlanmıştır.',
        exhibitions: [
          'Finlandiya Çağdaş Sanatı',
          'Uluslararası Modern Sanat',
          'Video ve Dijital Sanat',
          'Enstalasyon Sanatı'
        ],
        activities: [
          'Rehberli turlar',
          'Çocuk sanat atölyeleri',
          'Sanatçı söyleşileri',
          'Film gösterimleri'
        ],
        tips: [
          'Çarşamba günleri ücretsiz giriş',
          'Çocuklar için özel programlar',
          'Müze mağazasından hediyelik eşya',
          'Kafe ve restoran mevcut'
        ]
      }
    },
    {
      id: 4,
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
      ageRange: 'Tüm yaşlar',
      details: {
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        description: 'Seurasaari Açık Hava Müzesi, Finlandiya\'nın geleneksel mimarisini ve kültürünü sergiler. Ada üzerinde 87 geleneksel bina bulunmaktadır. Bu binalar, Finlandiya\'nın farklı bölgelerinden toplanmıştır.',
        history: 'Müze, 1909 yılında kurulmuştur. Ada üzerindeki binalar, 17. yüzyıldan 20. yüzyıla kadar olan dönemi kapsar. Her bina, kendi orijinal yerinden adaya taşınmıştır.',
        buildings: [
          'Geleneksel çiftlik evleri',
          'Kilise ve şapeller',
          'Değirmenler',
          'Depo ve ahırlar'
        ],
        activities: [
          'Rehberli turlar',
          'Geleneksel el sanatları gösterileri',
          'Doğa yürüyüşleri',
          'Yaz festivalleri'
        ],
        tips: [
          'Yaz aylarında ideal',
          'Rahat ayakkabı giyin',
          'Fotoğraf çekimi için izin gerekli',
          'Piknik yapabilirsiniz'
        ]
      }
    },
    {
      id: 5,
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
      ageRange: '12+ yaş',
      details: {
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        description: 'Ateneum, Finlandiya\'nın en önemli sanat müzesidir. 1887 yılında açılan müze, Finlandiya\'nın en büyük sanat koleksiyonuna sahiptir. Müze, 18. yüzyıldan günümüze kadar olan sanat eserlerini sergiler.',
        collection: [
          'Finlandiya Klasik Sanatı',
          'Uluslararası Sanat',
          'Modern Sanat Koleksiyonu',
          'Çizim ve Grafik Sanatı'
        ],
        artists: [
          'Akseli Gallen-Kallela',
          'Albert Edelfelt',
          'Helene Schjerfbeck',
          'Hugo Simberg'
        ],
        activities: [
          'Rehberli turlar',
          'Sanat tarihi dersleri',
          'Geçici sergiler',
          'Müze mağazası'
        ],
        tips: [
          'Cuma günleri 18:00-20:00 ücretsiz',
          'Rezervasyon önerilir',
          'Fotoğraf çekimi yasak',
          'Kafe mevcut'
        ]
      }
    },
    {
      id: 6,
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
      ageRange: '3+ yaş',
      details: {
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
        description: 'Helsinki Şehir Müzesi, şehrin tarihini ve kültürünü sergiler. Müze, Helsinki\'nin kuruluşundan günümüze kadar olan gelişimini anlatır. İnteraktif sergiler ve çocuk dostu aktiviteler bulunmaktadır.',
        exhibitions: [
          'Helsinki\'nin Kuruluşu',
          'Endüstriyel Dönem',
          'Modern Helsinki',
          'Gelecek Vizyonu'
        ],
        activities: [
          'İnteraktif sergiler',
          'Çocuk oyun alanları',
          'Tarihi kostüm deneme',
          'Şehir planlama oyunları'
        ],
        tips: [
          'Çocuklar için özel programlar',
          'İnteraktif sergiler',
          'Ücretsiz giriş',
          'Merkezi konum'
        ]
      }
    }
  ];

  const closeModal = () => {
    setSelectedMuseum(null);
    setSelectedTransport(null);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>🏛️ Helsinki Rehberi</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Ulaşım ve Kültür Rehberi</p>
      </header>
      
      <main style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '30px',
          gap: '10px'
        }}>
          <button
            onClick={() => setActiveTab('transportation')}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: activeTab === 'transportation' ? '#4CAF50' : 'rgba(255,255,255,0.2)',
              color: 'white'
            }}
          >
            🚌 Ulaşım
          </button>
          <button
            onClick={() => setActiveTab('museums')}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: activeTab === 'museums' ? '#4CAF50' : 'rgba(255,255,255,0.2)',
              color: 'white'
            }}
          >
            🏛️ Müzeler
          </button>
        </div>

        {/* Content */}
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {activeTab === 'transportation' && (
            <div>
              <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>🚌 Helsinki Ulaşım Seçenekleri</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
                {transportationData.map((transport) => (
                  <div 
                    key={transport.id}
                    onClick={() => setSelectedTransport(transport)}
                    style={{ 
                      background: '#f8f9fa', 
                      padding: '20px', 
                      borderRadius: '10px', 
                      border: `2px solid ${transport.color}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      ':hover': { transform: 'translateY(-5px)' }
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                      <span style={{ fontSize: '2rem', marginRight: '15px' }}>{transport.icon}</span>
                      <div>
                        <h3 style={{ color: transport.color, margin: '0 0 5px 0' }}>{transport.name}</h3>
                        <p style={{ margin: 0, color: '#666' }}>{transport.description}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontWeight: 'bold', color: '#28a745' }}>💶 {transport.price}</span>
                      <span style={{ color: '#666' }}>⏱️ {transport.duration}</span>
                    </div>
                    <div>
                      <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#666' }}>
                        <strong>Rotalar:</strong>
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#666' }}>
                        {transport.routes.map((route, index) => (
                          <li key={index}>{route}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ 
                      marginTop: '15px', 
                      padding: '8px', 
                      background: transport.color, 
                      color: 'white', 
                      borderRadius: '5px',
                      textAlign: 'center',
                      fontSize: '0.9rem'
                    }}>
                      Detayları görmek için tıklayın
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'museums' && (
            <div>
              <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>🏛️ Helsinki Müzeleri</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
                {museumsData.map((museum) => (
                  <div 
                    key={museum.id}
                    onClick={() => setSelectedMuseum(museum)}
                    style={{ 
                      background: '#f8f9fa', 
                      padding: '20px', 
                      borderRadius: '10px', 
                      border: '2px solid #e9ecef',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                      <span style={{ fontSize: '2rem', marginRight: '15px' }}>{museum.image}</span>
                      <div>
                        <h3 style={{ color: '#333', margin: '0 0 5px 0' }}>{museum.name}</h3>
                        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{museum.description}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontWeight: 'bold', color: '#28a745' }}>💶 Yetişkin: {museum.price}</span>
                      <span style={{ color: '#007bff' }}>👶 Çocuk: {museum.childPrice}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ color: '#666' }}>⭐ {museum.rating}</span>
                      <span style={{ color: '#666' }}>🕐 {museum.hours}</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#666' }}>
                        <strong>Öne Çıkanlar:</strong>
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {museum.highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            style={{
                              background: '#e3f2fd',
                              color: '#1976d2',
                              padding: '2px 8px',
                              borderRadius: '10px',
                              fontSize: '0.8rem'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    {museum.childFriendly && (
                      <div style={{ 
                        background: '#e8f5e8', 
                        color: '#2e7d32', 
                        padding: '5px 10px', 
                        borderRadius: '5px',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        marginBottom: '10px'
                      }}>
                        👶 Çocuk Dostu
                      </div>
                    )}
                    <div style={{ 
                      background: '#6f42c1', 
                      color: 'white', 
                      padding: '8px', 
                      borderRadius: '5px',
                      textAlign: 'center',
                      fontSize: '0.9rem'
                    }}>
                      Detayları görmek için tıklayın
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Museum Modal */}
      {selectedMuseum && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              ×
            </button>
            
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '3rem', marginRight: '20px' }}>{selectedMuseum.image}</span>
                <div>
                  <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{selectedMuseum.name}</h2>
                  <p style={{ margin: 0, color: '#666' }}>{selectedMuseum.description}</p>
                </div>
              </div>
              
              <img 
                src={selectedMuseum.details.image} 
                alt={selectedMuseum.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}
              />
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>📖 Açıklama</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>{selectedMuseum.details.description}</p>
              </div>
              
              {selectedMuseum.details.history && (
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: '#333', marginBottom: '10px' }}>📚 Tarih</h3>
                  <p style={{ lineHeight: '1.6', color: '#666' }}>{selectedMuseum.details.history}</p>
                </div>
              )}
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>🎯 Sergiler</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                    {selectedMuseum.details.exhibitions?.map((exhibition, index) => (
                      <li key={index}>{exhibition}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>🎨 Aktiviteler</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                    {selectedMuseum.details.activities?.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>💡 İpuçları</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                  {selectedMuseum.details.tips?.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '15px', 
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    <strong>Adres:</strong> {selectedMuseum.address}
                  </p>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    <strong>Çalışma Saatleri:</strong> {selectedMuseum.hours}
                  </p>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    <strong>Yaş Aralığı:</strong> {selectedMuseum.ageRange}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: '5px 0', color: '#28a745', fontWeight: 'bold' }}>
                    Yetişkin: {selectedMuseum.price}
                  </p>
                  <p style={{ margin: '5px 0', color: '#007bff', fontWeight: 'bold' }}>
                    Çocuk: {selectedMuseum.childPrice}
                  </p>
                  <p style={{ margin: '5px 0', color: '#ffc107', fontWeight: 'bold' }}>
                    ⭐ {selectedMuseum.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Transportation Modal */}
      {selectedTransport && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              ×
            </button>
            
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '3rem', marginRight: '20px' }}>{selectedTransport.icon}</span>
                <div>
                  <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{selectedTransport.name}</h2>
                  <p style={{ margin: 0, color: '#666' }}>{selectedTransport.description}</p>
                </div>
              </div>
              
              <img 
                src={selectedTransport.details.image} 
                alt={selectedTransport.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px'
                }}
              />
              
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>📖 Açıklama</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>{selectedTransport.details.description}</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>🕐 Çalışma Saatleri</h4>
                  <p style={{ color: '#666' }}>{selectedTransport.details.operatingHours}</p>
                </div>
                <div>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>⏱️ Sıklık</h4>
                  <p style={{ color: '#666' }}>{selectedTransport.details.frequency}</p>
                </div>
                <div>
                  <h4 style={{ color: '#333', marginBottom: '10px' }}>♿ Erişilebilirlik</h4>
                  <p style={{ color: '#666' }}>{selectedTransport.details.accessibility}</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>🚌 Popüler Rotalar</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                  {selectedTransport.routes.map((route, index) => (
                    <li key={index}>{route}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#333', marginBottom: '10px' }}>💡 İpuçları</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
                  {selectedTransport.details.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '15px', 
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    <strong>Ücret:</strong> {selectedTransport.price}
                  </p>
                  <p style={{ margin: '5px 0', color: '#666' }}>
                    <strong>Süre:</strong> {selectedTransport.duration}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ 
                    background: selectedTransport.color, 
                    color: 'white', 
                    padding: '5px 15px', 
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {selectedTransport.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <footer style={{
        marginTop: '30px',
        textAlign: 'center',
        color: 'white',
        opacity: 0.8
      }}>
        <p>Made with ❤️ in Helsinki</p>
      </footer>
    </div>
  );
}

export default App; 