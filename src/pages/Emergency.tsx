import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, Phone, MapPin, Share2, HelpCircle, Guitar as Hospital, Shield, Navigation } from 'lucide-react';

const Emergency: React.FC = () => {
  const { t } = useLanguage();
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);
  const [locationShared, setLocationShared] = useState(false);

  const emergencyTypes = [
    {
      id: 'hospital',
      label: t('needHospital'),
      icon: Hospital,
      color: 'bg-red-500',
      description: 'Medical emergency or need immediate medical attention',
      action: 'Call Emergency Services'
    },
    {
      id: 'police',
      label: t('callPolice'),
      icon: Shield,
      color: 'bg-blue-500',
      description: 'Security emergency or need police assistance',
      action: 'Contact Police'
    },
    {
      id: 'lost',
      label: t('imLost'),
      icon: Navigation,
      color: 'bg-yellow-500',
      description: 'Lost or need navigation assistance',
      action: 'Get Directions'
    },
    {
      id: 'location',
      label: t('shareLocation'),
      icon: MapPin,
      color: 'bg-green-500',
      description: 'Share your current location with emergency contacts',
      action: 'Share Location'
    },
    {
      id: 'other',
      label: t('other'),
      icon: HelpCircle,
      color: 'bg-purple-500',
      description: 'Other emergency or assistance needed',
      action: 'Get Help'
    }
  ];

  const emergencyContacts = [
    { name: 'Emergency Services', number: '999', description: 'Police, Fire, Ambulance' },
    { name: 'Tourist Police', number: '24560099', description: 'Tourist assistance and support' },
    { name: 'Irtahil Support', number: '24567890', description: '24/7 travel assistance' }
  ];

  const handleEmergencySelect = (id: string) => {
    setSelectedEmergency(id);
    
    // Simulate emergency action
    if (id === 'location') {
      setLocationShared(true);
      setTimeout(() => setLocationShared(false), 3000);
    }
  };

  const shareLocation = () => {
    // In a real app, this would use geolocation API
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        console.log('Location shared:', position.coords);
        setLocationShared(true);
        setTimeout(() => setLocationShared(false), 3000);
      },
      (error) => {
        console.error('Location error:', error);
      }
    );
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.9), rgba(74, 44, 29, 0.9)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/fe/b4/21/caption.jpg?w=500&h=400&s=1')`
        }}
      />
      
      <div className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="h-12 w-12 text-red-500" />
              <h1 className="text-3xl font-bold text-white">{t('emergency')} Support</h1>
            </div>
            <p className="text-gray-300">24/7 emergency assistance for your safety and peace of mind</p>
          </div>
          
          {/* Emergency Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {emergencyTypes.map((emergency) => {
              const Icon = emergency.icon;
              return (
                <button
                  key={emergency.id}
                  onClick={() => handleEmergencySelect(emergency.id)}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30 hover:border-[#a47149] transition-all duration-300 group text-left"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${emergency.color}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#a47149] transition-colors">
                        {emergency.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{emergency.description}</p>
                  <div className="bg-[#a47149] text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                    {emergency.action}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Phone className="h-6 w-6 text-[#a47149]" />
                <span>Emergency Contacts</span>
              </h2>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                    <div>
                      <h3 className="text-white font-medium">{contact.name}</h3>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                    <a
                      href={`tel:${contact.number}`}
                      className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location Sharing */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-[#a47149]" />
                <span>Location Services</span>
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                  <h3 className="text-white font-medium mb-2">Current Location</h3>
                  <p className="text-gray-400 text-sm mb-3">Al Dhahirah Region, Oman</p>
                  <button
                    onClick={shareLocation}
                    className="w-full bg-[#a47149] hover:bg-[#4a2c1d] text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share with Emergency Contacts</span>
                  </button>
                </div>
                
                {locationShared && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 font-medium">Location shared successfully!</span>
                    </div>
                  </div>
                )}
                
                <div className="p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                  <h3 className="text-white font-medium mb-2">Safety Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#a47149] rounded-full" />
                      <span className="text-gray-300 text-sm">Real-time location tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#a47149] rounded-full" />
                      <span className="text-gray-300 text-sm">Emergency contact notifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#a47149] rounded-full" />
                      <span className="text-gray-300 text-sm">Voice-activated assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Safety Tips */}
          <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#a47149]/30">
            <h2 className="text-xl font-bold text-white mb-4">Safety Tips for Al Dhahirah Region</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                <h3 className="text-[#a47149] font-medium mb-2">Desert Safety</h3>
                <p className="text-gray-300 text-sm">Always carry extra water, inform others of your plans, and avoid traveling alone in remote areas.</p>
              </div>
              
              <div className="p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                <h3 className="text-[#a47149] font-medium mb-2">Weather Awareness</h3>
                <p className="text-gray-300 text-sm">Check weather conditions, especially during summer months. Seek shade during peak hours (11 AM - 4 PM).</p>
              </div>
              
              <div className="p-4 bg-black/30 rounded-lg border border-[#a47149]/30">
                <h3 className="text-[#a47149] font-medium mb-2">Communication</h3>
                <p className="text-gray-300 text-sm">Keep your phone charged and consider carrying a portable charger for extended trips.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;