import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';

const PreviewMode: React.FC = () => {
  const { t } = useLanguage();

  const featuredSites = [
    {
      name: t('ibriFort'),
      nameAr: 'قلعة عبري',
      image: 'https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160940-1024x535.jpg',
      description: 'Historic fort showcasing traditional Omani architecture and heritage',
      duration: '2-3 hours',
      rating: 4.8
    },
    {
      name: t('batTombs'),
      nameAr: 'مقابر بات',
      image: 'https://farm5.staticflickr.com/4782/40590229011_c4f867588a_c.jpg',
      description: 'UNESCO World Heritage site with ancient Bronze Age tombs',
      duration: '1-2 hours',
      rating: 4.9
    },
    {
      name: t('wadiDamm'),
      nameAr: 'وادي ضم',
      image: 'https://exploretraveloasis.com/wp-content/uploads/2024/06/Wadi-Damm-Pools-4.jpg',
      description: 'Natural pools and stunning rock formations in the desert',
      duration: '3-4 hours',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://arabiandaily.com/wp-content/uploads/2023/01/ee-min-1.jpeg')`
        }}
      />
      
      <div className="relative z-10 px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Discover Al Dhahirah Region
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              Get a glimpse of what awaits you in Oman's hidden treasures. 
              Sign in to unlock personalized experiences and AI-powered trip planning.
            </p>
            
            <Link
              to="/login"
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#a47149] hover:bg-[#4a2c1d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              <span>Sign in to personalize your trip</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          
          {/* Featured Sites Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredSites.map((site, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#a47149]/30 hover:border-[#a47149] transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={site.image}
                    alt={site.name}
                    className="w-full h-32 xs:h-36 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-xs sm:text-sm font-medium">{site.rating}</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{site.name}</h3>
                  <p className="text-[#a47149] text-sm font-medium mb-2 sm:mb-3">{site.nameAr}</p>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{site.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{site.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">Al Dhahirah</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Features Preview */}
          <div className="mt-12 sm:mt-14 lg:mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">What you'll get with Irtahil</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">🏛️</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">AR Experiences</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Interactive historical content</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">🤖</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">AI Trip Planning</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Personalized itineraries</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">🆘</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Emergency Support</h3>
                <p className="text-gray-300 text-xs sm:text-sm">24/7 safety assistance</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4">🎁</div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">Rewards System</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Earn points and discounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewMode;