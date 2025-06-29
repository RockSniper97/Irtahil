import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const UserPreferences: React.FC = () => {
  const { t } = useLanguage();
  const { setUserPreferences } = useAuth();
  const navigate = useNavigate();
  
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const tripTypes = [
    {
      id: 'cultural',
      label: t('cultural'),
      icon: '🏛️',
      description: 'Explore historical sites, museums, and cultural heritage'
    },
    {
      id: 'adventure',
      label: t('adventure'),
      icon: '🧗',
      description: 'Hiking, climbing, and outdoor activities'
    },
    {
      id: 'family',
      label: t('family'),
      icon: '👨‍👩‍👧‍👦',
      description: 'Family-friendly activities and attractions'
    },
    {
      id: 'nature',
      label: t('nature'),
      icon: '🌿',
      description: 'Natural landscapes, wadis, and wildlife'
    }
  ];

  const togglePreference = (id: string) => {
    setSelectedPreferences(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    setUserPreferences(selectedPreferences);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 sm:px-6">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.9), rgba(74, 44, 29, 0.9)), url('https://arabiandaily.com/wp-content/uploads/2023/01/ee-min-1.jpeg')`
        }}
      />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#a47149]/30">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              What kind of trip do you like?
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Select your interests to help us personalize your Oman experience
            </p>
          </div>
          
          {/* Trip Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {tripTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => togglePreference(type.id)}
                className={`cursor-pointer p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedPreferences.includes(type.id)
                    ? 'border-[#a47149] bg-[#a47149]/20'
                    : 'border-[#a47149]/30 bg-black/30 hover:border-[#a47149]/60'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{type.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{type.label}</h3>
                  <p className="text-gray-300 text-sm">{type.description}</p>
                </div>
                
                {selectedPreferences.includes(type.id) && (
                  <div className="mt-3 sm:mt-4 text-center">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-[#a47149] rounded-full">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Continue Button */}
          <div className="text-center">
            <button
              onClick={handleContinue}
              disabled={selectedPreferences.length === 0}
              className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              Continue to Dashboard
            </button>
            
            {selectedPreferences.length === 0 && (
              <p className="text-gray-400 text-sm mt-2">
                Please select at least one preference to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;