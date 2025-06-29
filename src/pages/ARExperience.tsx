import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Camera, Play, Volume2, Info, MapPin } from 'lucide-react';

const ARExperience: React.FC = () => {
  const { t } = useLanguage();
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const arSites = [
    {
      id: 'ibri-fort',
      name: t('ibriFort'),
      nameAr: 'قلعة عبري',
      image: 'https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160940-1024x535.jpg',
      description: 'Experience the rich history of this 17th-century fortress through immersive AR',
      features: ['3D Historical Reconstruction', 'Audio Narration', 'Interactive Timeline'],
      duration: '15-20 minutes'
    },
    {
      id: 'bat-tombs',
      name: t('batTombs'),
      nameAr: 'مقابر بات',
      image: 'https://farm5.staticflickr.com/4782/40590229011_c4f867588a_c.jpg',
      description: 'Discover the UNESCO World Heritage Bronze Age burial sites',
      features: ['Archaeological Visualization', 'Historical Context', 'Virtual Excavation'],
      duration: '10-15 minutes'
    },
    {
      id: 'wadi-damm',
      name: t('wadiDamm'),
      nameAr: 'وادي ضم',
      image: 'https://exploretraveloasis.com/wp-content/uploads/2024/06/Wadi-Damm-Pools-4.jpg',
      description: 'Explore the geological formations and natural pools with AR guidance',
      features: ['Geological Information', 'Wildlife Spotting', 'Safety Guidelines'],
      duration: '20-25 minutes'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/fe/b4/21/caption.jpg?w=500&h=400&s=1')`
        }}
      />
      
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{t('arViewer')}</h1>
            <p className="text-gray-300">Immerse yourself in history with augmented reality experiences</p>
          </div>
          
          {!selectedSite ? (
            /* Site Selection */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {arSites.map((site) => (
                <div key={site.id} className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#a47149]/30 hover:border-[#a47149] transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={site.image}
                      alt={site.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#a47149] text-white px-3 py-1 rounded-full text-sm font-medium">
                        AR Ready
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{site.name}</h3>
                      <p className="text-[#a47149] text-sm">{site.nameAr}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4">{site.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {site.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#a47149] rounded-full" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Camera className="h-4 w-4" />
                        <span className="text-sm">Duration: {site.duration}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedSite(site.id)}
                      className="w-full bg-[#a47149] hover:bg-[#4a2c1d] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Camera className="h-5 w-5" />
                      <span>Start AR Experience</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* AR Experience View */
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#a47149]/30 overflow-hidden">
                {/* AR Viewer */}
                <div className="relative bg-black h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-24 w-24 text-[#a47149] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">AR Experience Active</h3>
                    <p className="text-gray-300 mb-6">
                      Point your device at {arSites.find(s => s.id === selectedSite)?.name} to begin
                    </p>
                    
                    {/* AR Controls */}
                    <div className="flex items-center justify-center space-x-4">
                      <button className="bg-[#a47149] hover:bg-[#4a2c1d] text-white p-3 rounded-full transition-colors">
                        <Play className="h-6 w-6" />
                      </button>
                      <button className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full border border-[#a47149]/30 transition-colors">
                        <Volume2 className="h-6 w-6" />
                      </button>
                      <button className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full border border-[#a47149]/30 transition-colors">
                        <Info className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* AR Overlay Elements */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-[#a47149]/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">Recording</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-[#a47149]/30">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-[#a47149]" />
                      <span className="text-white text-sm">Al Dhahirah</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#a47149]/30">
                    <span className="text-white text-sm">Tap objects to learn more</span>
                  </div>
                </div>
                
                {/* Information Panel */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Historical Information</h3>
                      <div className="space-y-3">
                        <div className="bg-black/30 rounded-lg p-4 border border-[#a47149]/30">
                          <h4 className="text-[#a47149] font-medium mb-2">Construction Period</h4>
                          <p className="text-gray-300 text-sm">Built in the 17th century during the Ya'aruba dynasty</p>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 border border-[#a47149]/30">
                          <h4 className="text-[#a47149] font-medium mb-2">Architectural Style</h4>
                          <p className="text-gray-300 text-sm">Traditional Omani fortress architecture with defensive features</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">AR Features</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#a47149] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">1</span>
                          </div>
                          <span className="text-gray-300">3D reconstruction of original structure</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#a47149] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">2</span>
                          </div>
                          <span className="text-gray-300">Audio narration in multiple languages</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#a47149] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">3</span>
                          </div>
                          <span className="text-gray-300">Interactive timeline of events</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedSite(null)}
                      className="bg-black/60 hover:bg-black/80 text-white px-6 py-2 rounded-lg border border-[#a47149]/30 transition-colors"
                    >
                      Back to Sites
                    </button>
                    <button className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-6 py-2 rounded-lg transition-colors">
                      Share Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ARExperience;