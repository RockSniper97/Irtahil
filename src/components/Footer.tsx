import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#492d1e] border-t border-[#a47149] px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 mt-auto mb-16 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img 
                src="/2ارتحل.png" 
                alt="Irtahil Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#a47149]">Irtahil</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">
              Explore Oman like never before with AR experiences and AI-powered trip planning.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#a47149] mb-2 sm:mb-3 text-sm sm:text-base">Quick Links</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link to="/dashboard" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('home')}
              </Link>
              <Link to="/trip-planner" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('tripPlanner')}
              </Link>
              <Link to="/ar-experience" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('arViewer')}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#a47149] mb-2 sm:mb-3 text-sm sm:text-base">Support</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link to="/emergency" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('emergency')}
              </Link>
              <a href="#" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('contact')}
              </a>
              <a href="#" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                Help Center
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#a47149] mb-2 sm:mb-3 text-sm sm:text-base">Legal</h3>
            <div className="space-y-1 sm:space-y-2">
              <a href="#" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                {t('about')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#a47149] mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © 2025 Irtahil. All rights reserved. Made with ❤️ for Oman tourism.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;