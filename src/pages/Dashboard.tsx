import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { 
  MapPin, 
  Camera, 
  Bot, 
  Gift, 
  AlertTriangle,
  Calendar,
  TrendingUp,
  Star
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const features = [
    {
      title: t('myTrips'),
      icon: MapPin,
      path: '/trip-planner',
      description: 'Plan and manage your trips',
      color: 'bg-blue-500'
    },
    {
      title: t('arViewer'),
      icon: Camera,
      path: '/ar-experience',
      description: 'Explore with augmented reality',
      color: 'bg-purple-500'
    },
    {
      title: t('smartGuide'),
      icon: Bot,
      path: '/smart-guide',
      description: 'AI-powered travel assistant',
      color: 'bg-green-500'
    },
    {
      title: t('rewards'),
      icon: Gift,
      path: '/rewards',
      description: 'Earn points and rewards',
      color: 'bg-yellow-500'
    },
    {
      title: t('emergency'),
      icon: AlertTriangle,
      path: '/emergency',
      description: '24/7 emergency support',
      color: 'bg-red-500'
    },
    {
      title: t('calendar'),
      icon: Calendar,
      path: '/trip-planner',
      description: 'View your scheduled trips',
      color: 'bg-indigo-500'
    }
  ];

  const recentActivities = [
    { action: 'Visited Ibri Fort AR Experience', time: '2 hours ago', points: '+50 points' },
    { action: 'Completed trip to Bat Tombs', time: '1 day ago', points: '+100 points' },
    { action: 'Used Smart Guide at Wadi Damm', time: '3 days ago', points: '+25 points' }
  ];

  return (
    <div className="min-h-screen relative pb-20 lg:pb-0">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160115-1-1024x465.jpg')`
        }}
      />
      
      <div className="relative z-10 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('welcomeBack')}, {user?.name}!
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              {t('readyToExplore')}
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('totalPoints')}</p>
                  <p className="text-lg sm:text-2xl font-bold text-white">1,250</p>
                </div>
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#a47149]" />
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('placesVisited')}</p>
                  <p className="text-lg sm:text-2xl font-bold text-white">8</p>
                </div>
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#a47149]" />
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('arExperiences')}</p>
                  <p className="text-lg sm:text-2xl font-bold text-white">12</p>
                </div>
                <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-[#a47149]" />
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">{t('currentLevel')}</p>
                  <p className="text-lg sm:text-2xl font-bold text-white">Explorer</p>
                </div>
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#a47149]" />
              </div>
            </div>
          </div>
          
          {/* Main Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.path}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30 hover:border-[#a47149] transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${feature.color}`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#a47149] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{t('recentActivity')}</h2>
              <div className="space-y-3 sm:space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-[#a47149]/20 last:border-b-0">
                    <div>
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                    <span className="text-[#a47149] text-sm font-medium">{activity.points}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recommended Places */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{t('recommendedForYou')}</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img 
                    src="https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160940-1024x535.jpg"
                    alt="Ibri Fort"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">{t('ibriFort')}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Historical fortress</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-gray-400 text-xs">4.8</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img 
                    src="https://exploretraveloasis.com/wp-content/uploads/2024/06/Wadi-Damm-Pools-4.jpg"
                    alt="Wadi Damm"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">{t('wadiDamm')}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Natural pools</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-gray-400 text-xs">4.7</span>
                    </div>
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

export default Dashboard;