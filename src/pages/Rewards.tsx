import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Gift, Star, Trophy, Target, Camera, MapPin } from 'lucide-react';

const Rewards: React.FC = () => {
  const { t } = useLanguage();

  const userStats = {
    totalPoints: 1250,
    currentLevel: 'Explorer',
    nextLevel: 'Adventurer',
    pointsToNext: 250,
    placesVisited: 8,
    arExperiences: 12,
    tripsCompleted: 3
  };

  const badges = [
    {
      id: 'first-visit',
      name: 'First Steps',
      description: 'Visited your first location',
      icon: '🎯',
      earned: true,
      points: 50
    },
    {
      id: 'ar-explorer',
      name: 'AR Explorer',
      description: 'Used AR experience 10 times',
      icon: '📱',
      earned: true,
      points: 100
    },
    {
      id: 'culture-lover',
      name: 'Culture Enthusiast',
      description: 'Visited 5 cultural sites',
      icon: '🏛️',
      earned: true,
      points: 150
    },
    {
      id: 'nature-seeker',
      name: 'Nature Seeker',
      description: 'Explored 3 natural locations',
      icon: '🌿',
      earned: false,
      points: 200
    },
    {
      id: 'photo-master',
      name: 'Photo Master',
      description: 'Shared 20 photos',
      icon: '📸',
      earned: false,
      points: 100
    },
    {
      id: 'local-expert',
      name: 'Local Expert',
      description: 'Completed all Al Dhahirah experiences',
      icon: '🎓',
      earned: false,
      points: 500
    }
  ];

  const rewards = [
    {
      id: 'discount-10',
      name: '10% Discount',
      description: 'Local restaurants and shops',
      cost: 500,
      type: 'discount',
      available: true
    },
    {
      id: 'souvenir',
      name: 'Traditional Souvenir',
      description: 'Handcrafted Omani item',
      cost: 800,
      type: 'physical',
      available: true
    },
    {
      id: 'guide-tour',
      name: 'Private Guide Tour',
      description: '2-hour guided experience',
      cost: 1200,
      type: 'experience',
      available: true
    },
    {
      id: 'premium-access',
      name: 'Premium AR Content',
      description: 'Exclusive AR experiences',
      cost: 1000,
      type: 'digital',
      available: false
    }
  ];

  const recentActivities = [
    { action: 'Visited Ibri Fort', points: 50, time: '2 hours ago' },
    { action: 'Completed AR experience', points: 25, time: '1 day ago' },
    { action: 'Shared photo at Wadi Damm', points: 15, time: '2 days ago' },
    { action: 'Used Smart Guide', points: 10, time: '3 days ago' }
  ];

  const progressPercentage = ((userStats.totalPoints % 500) / 500) * 100;

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://arabiandaily.com/wp-content/uploads/2023/01/ee-min-1.jpeg')`
        }}
      />
      
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{t('rewards')}</h1>
            <p className="text-gray-300">Earn points and unlock exclusive rewards for exploring Al Dhahirah</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 text-center">
              <Gift className="h-12 w-12 text-[#a47149] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white">{userStats.totalPoints}</h3>
              <p className="text-gray-300 text-sm">Total Points</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 text-center">
              <Star className="h-12 w-12 text-[#a47149] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white">{userStats.currentLevel}</h3>
              <p className="text-gray-300 text-sm">Current Level</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 text-center">
              <MapPin className="h-12 w-12 text-[#a47149] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white">{userStats.placesVisited}</h3>
              <p className="text-gray-300 text-sm">Places Visited</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 text-center">
              <Camera className="h-12 w-12 text-[#a47149] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white">{userStats.arExperiences}</h3>
              <p className="text-gray-300 text-sm">AR Experiences</p>
            </div>
          </div>
          
          {/* Progress to Next Level */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Progress to {userStats.nextLevel}</h2>
              <span className="text-[#a47149] font-medium">{userStats.pointsToNext} points to go</span>
            </div>
            <div className="w-full bg-black/30 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-[#a47149] to-[#4a2c1d] h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-gray-300 text-sm">Keep exploring to unlock new rewards and features!</p>
          </div>
          
          {/* Badges */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Achievement Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge) => (
                <div 
                  key={badge.id}
                  className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                    badge.earned 
                      ? 'border-[#a47149] bg-[#a47149]/10' 
                      : 'border-[#a47149]/30 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className={`text-lg font-semibold mb-2 ${badge.earned ? 'text-[#a47149]' : 'text-gray-400'}`}>
                      {badge.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{badge.description}</p>
                    <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
                      badge.earned 
                        ? 'bg-[#a47149] text-white' 
                        : 'bg-black/30 text-gray-400 border border-gray-600'
                    }`}>
                      <Trophy className="h-3 w-3" />
                      <span>{badge.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Rewards Store */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30">
              <h2 className="text-xl font-bold text-white mb-4">Rewards Store</h2>
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div key={reward.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{reward.name}</h3>
                      <p className="text-gray-400 text-sm">{reward.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-[#a47149] font-bold mb-2">{reward.cost} pts</div>
                      <button
                        disabled={!reward.available || userStats.totalPoints < reward.cost}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          reward.available && userStats.totalPoints >= reward.cost
                            ? 'bg-[#a47149] hover:bg-[#4a2c1d] text-white'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {reward.available ? 'Redeem' : 'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-[#a47149]/20 last:border-b-0">
                    <div>
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                    <span className="text-[#a47149] font-medium">+{activity.points} pts</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[#a47149]/20 rounded-lg border border-[#a47149]/30">
                <h3 className="text-[#a47149] font-medium mb-2">Earn More Points</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Target className="h-3 w-3" />
                    <span>Visit new locations (+50 pts)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-3 w-3" />
                    <span>Use AR experiences (+25 pts)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-3 w-3" />
                    <span>Share photos (+15 pts)</span>
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

export default Rewards;