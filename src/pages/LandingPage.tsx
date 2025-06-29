import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, MapPin, Camera, Bot } from 'lucide-react';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.6), rgba(74, 44, 29, 0.6)), url('https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160115-1-1024x465.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-3 sm:px-4 lg:px-6 text-center py-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <img 
              src="/2ارتحل.png" 
              alt="Irtahil Logo" 
              className="h-32 w-32 xs:h-40 xs:w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 mx-auto mb-2 sm:mb-3 lg:mb-4 object-contain"
            />
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Irtahil</h1>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
            {t('welcomeTitle')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto px-3 sm:px-4">
            Discover the hidden treasures of Al Dhahirah region with AR experiences, 
            AI-powered trip planning, and emergency support at your fingertips.
          </p>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 max-w-5xl mx-auto px-2 sm:px-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
              <Camera className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#a47149] mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-2">AR Experiences</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300">Immerse yourself in history with augmented reality at ancient sites</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30">
              <Bot className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#a47149] mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-2">AI Trip Planning</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300">Let our smart assistant create personalized itineraries for you</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-[#a47149]/30 sm:col-span-2 lg:col-span-1">
              <MapPin className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#a47149] mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-2">Emergency Support</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300">Stay safe with 24/7 emergency assistance and location sharing</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link
            to={isAuthenticated ? "/dashboard" : "/preview"}
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#a47149] hover:bg-[#4a2c1d] text-white px-6 xs:px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6 sm:mb-8 lg:mb-16"
          >
            <span>{t('getStarted')}</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </Link>
          
          {/* Featured Destinations */}
          <div className="px-2 sm:px-4">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8">Featured Destinations in Al Dhahirah</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160940-1024x535.jpg"
                    alt="Ibri Fort"
                    className="w-full h-28 xs:h-32 sm:h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4">
                    <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white">{t('ibriFort')}</h4>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://farm5.staticflickr.com/4782/40590229011_c4f867588a_c.jpg"
                    alt="Bat Tombs"
                    className="w-full h-28 xs:h-32 sm:h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4">
                    <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white">{t('batTombs')}</h4>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer sm:col-span-2 lg:col-span-1">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://exploretraveloasis.com/wp-content/uploads/2024/06/Wadi-Damm-Pools-4.jpg"
                    alt="Wadi Damm"
                    className="w-full h-28 xs:h-32 sm:h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4">
                    <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white">{t('wadiDamm')}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;