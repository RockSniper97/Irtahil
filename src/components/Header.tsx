import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Globe, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#492d1e] border-b border-[#a47149] px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
          <img 
            src="/2ارتحل.png" 
            alt="Irtahil Logo" 
            className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 object-contain"
          />
          <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#a47149]">Irtahil</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-[#a47149] hover:bg-[#4a2c1d] rounded-lg transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          
          {user ? (
            <div className="flex items-center space-x-3">
              <Link 
                to="/settings"
                className="flex items-center space-x-2 px-3 lg:px-4 py-2 bg-[#4a2c1d] hover:bg-[#a47149] rounded-lg transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="text-sm">{user.name}</span>
              </Link>
              <button
                onClick={logout}
                className="px-3 lg:px-4 py-2 text-sm text-[#a47149] hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className="px-4 lg:px-6 py-2 bg-[#a47149] hover:bg-[#4a2c1d] rounded-lg transition-colors font-medium text-sm lg:text-base"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#a47149] hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pb-3 border-t border-[#a47149]/30">
          <div className="flex flex-col space-y-2 pt-3">
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#a47149] hover:bg-[#4a2c1d] rounded-lg transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            
            {user ? (
              <>
                <Link 
                  to="/settings"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#4a2c1d] hover:bg-[#a47149] rounded-lg transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user.name}</span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 text-sm text-[#a47149] hover:text-white transition-colors border border-[#a47149]/30 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 bg-[#a47149] hover:bg-[#4a2c1d] rounded-lg transition-colors font-medium text-center"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;