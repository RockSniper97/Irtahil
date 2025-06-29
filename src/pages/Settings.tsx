import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { 
  User, 
  Globe, 
  Bell, 
  Shield, 
  MessageSquare, 
  Home,
  Edit,
  Save
} from 'lucide-react';

const Settings: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+968 9123 4567',
    preferences: user?.preferences || []
  });

  const [notifications, setNotifications] = useState({
    tripReminders: true,
    emergencyAlerts: true,
    rewardUpdates: false,
    marketingEmails: false
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would update the user profile
  };

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160115-1-1024x465.jpg')`
        }}
      />
      
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{t('settings')}</h1>
            <p className="text-gray-300">Manage your account and preferences</p>
          </div>
          
          {/* Profile Section */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                <User className="h-6 w-6 text-[#a47149]" />
                <span>Profile Information</span>
              </h2>
              <button
                onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                className="flex items-center space-x-2 bg-[#a47149] hover:bg-[#4a2c1d] text-white px-4 py-2 rounded-lg transition-colors"
              >
                {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                <span>{isEditing ? 'Save' : 'Edit'}</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none disabled:opacity-60"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none disabled:opacity-60"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none disabled:opacity-60"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Travel Preferences</label>
                <div className="flex flex-wrap gap-2">
                  {['Cultural', 'Adventure', 'Family', 'Nature'].map((pref) => (
                    <span
                      key={pref}
                      className={`px-3 py-1 rounded-full text-sm ${
                        userInfo.preferences.includes(pref.toLowerCase())
                          ? 'bg-[#a47149] text-white'
                          : 'bg-black/30 text-gray-400 border border-[#a47149]/30'
                      }`}
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Language & Region */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Globe className="h-6 w-6 text-[#a47149]" />
              <span>Language & Region</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Language</h3>
                  <p className="text-gray-400 text-sm">Choose your preferred language</p>
                </div>
                <button
                  onClick={toggleLanguage}
                  className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-6 py-2 rounded-lg transition-colors"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Region</h3>
                  <p className="text-gray-400 text-sm">Al Dhahirah, Oman</p>
                </div>
                <span className="text-[#a47149] text-sm">Current</span>
              </div>
            </div>
          </div>
          
          {/* Notifications */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Bell className="h-6 w-6 text-[#a47149]" />
              <span>Notification Preferences</span>
            </h2>
            
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {key === 'tripReminders' && 'Get notified about upcoming trips and activities'}
                      {key === 'emergencyAlerts' && 'Receive important safety and emergency notifications'}
                      {key === 'rewardUpdates' && 'Updates about points, badges, and rewards'}
                      {key === 'marketingEmails' && 'Promotional offers and new features'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-[#a47149]' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Privacy & Security */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#a47149]" />
              <span>Privacy & Security</span>
            </h2>
            
            <div className="space-y-4">
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Change Password</h3>
                <p className="text-gray-400 text-sm">Update your account password</p>
              </button>
              
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Privacy Settings</h3>
                <p className="text-gray-400 text-sm">Manage your data and privacy preferences</p>
              </button>
              
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Download My Data</h3>
                <p className="text-gray-400 text-sm">Export your account data and activity</p>
              </button>
            </div>
          </div>
          
          {/* Support & Feedback */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-[#a47149]" />
              <span>Support & Feedback</span>
            </h2>
            
            <div className="space-y-4">
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Help Center</h3>
                <p className="text-gray-400 text-sm">Find answers to common questions</p>
              </button>
              
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Send Feedback</h3>
                <p className="text-gray-400 text-sm">Help us improve Irtahil</p>
              </button>
              
              <button className="w-full text-left p-4 bg-black/30 rounded-lg border border-[#a47149]/30 hover:border-[#a47149] transition-colors">
                <h3 className="text-white font-medium">Contact Support</h3>
                <p className="text-gray-400 text-sm">Get help from our support team</p>
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 bg-black/60 hover:bg-black/80 text-white px-6 py-3 rounded-lg border border-[#a47149]/30 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;