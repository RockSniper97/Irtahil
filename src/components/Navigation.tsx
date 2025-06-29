import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  MapPin, 
  Bot, 
  Calendar, 
  AlertTriangle, 
  User,
  Camera,
  Gift,
  Menu,
  X
} from 'lucide-react';

const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  if (!isAuthenticated || location.pathname === '/' || location.pathname === '/login' || location.pathname === '/preview' || location.pathname === '/preferences') {
    return null;
  }

  const navItems = [
    { path: '/dashboard', icon: Home, label: t('home') },
    { path: '/trip-planner', icon: MapPin, label: t('tripPlanner') },
    { path: '/smart-guide', icon: Bot, label: t('aiAssistant') },
    { path: '/ar-experience', icon: Camera, label: t('arViewer') },
    { path: '/rewards', icon: Gift, label: t('rewards') },
    { path: '/emergency', icon: AlertTriangle, label: t('emergency') },
    { path: '/settings', icon: User, label: t('profile') },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block w-64 bg-[#4b2d1e] border-r border-[#a47149] min-h-screen p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-[#a47149] text-white' 
                    : 'text-[#a47149] hover:bg-[#4a2c1d] hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Button - Positioned higher */}
      <button
        onClick={() => setIsMobileNavOpen(true)}
        className="lg:hidden fixed bottom-20 right-4 z-50 bg-[#a47149] hover:bg-[#4a2c1d] text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Navigation Overlay */}
      {isMobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-72 bg-[#4b2d1e] border-r border-[#a47149] p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#a47149]">Navigation</h2>
              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="text-[#a47149] hover:text-white transition-colors p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-[#a47149] text-white' 
                        : 'text-[#a47149] hover:bg-[#4a2c1d] hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#4b2d1e] border-t border-[#a47149] px-1 py-1 z-40 safe-area-pb">
        <div className="flex items-center justify-around">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-1 py-2 rounded-lg transition-colors min-w-0 ${
                  isActive 
                    ? 'text-[#a47149]' 
                    : 'text-gray-400 hover:text-[#a47149]'
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs font-medium truncate max-w-full">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;