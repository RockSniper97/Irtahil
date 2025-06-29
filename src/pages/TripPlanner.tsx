import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Map, Bot, Clock, MapPin, Star, Send } from 'lucide-react';

const TripPlanner: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'calendar' | 'ai' | 'map'>('calendar');

  const tabs = [
    { id: 'calendar', label: t('calendarView'), icon: Calendar },
    { id: 'ai', label: t('aiChatAssistant'), icon: Bot },
    { id: 'map', label: t('mapPlanner'), icon: Map }
  ];

  const availableLocations = [
    {
      name: t('ibriFort'),
      nameAr: 'قلعة عبري',
      image: 'https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160940-1024x535.jpg',
      duration: '2-3 hours',
      rating: 4.8,
      type: 'Cultural'
    },
    {
      name: t('batTombs'),
      nameAr: 'مقابر بات',
      image: 'https://farm5.staticflickr.com/4782/40590229011_c4f867588a_c.jpg',
      duration: '1-2 hours',
      rating: 4.9,
      type: 'Historical'
    },
    {
      name: t('wadiDamm'),
      nameAr: 'وادي ضم',
      image: 'https://exploretraveloasis.com/wp-content/uploads/2024/06/Wadi-Damm-Pools-4.jpg',
      duration: '3-4 hours',
      rating: 4.7,
      type: 'Nature'
    }
  ];

  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I can create detailed trip itineraries for Al Dhahirah region. Just tell me:\n\n• How many days? (1-7 days)\n• What interests you? (culture, nature, adventure)\n• Group size and type?\n\nExample: "Plan a one day visit to Ibri" or "Create 3-day family trip"' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages(prev => [
        ...prev,
        { type: 'user', message: chatInput },
        { type: 'bot', message: getAIResponse(chatInput) }
      ]);
      setChatInput('');
    }
  };

  // Create a proper HTML table component
  const ItineraryTable = ({ title, data }: { title: string, data: any[] }) => (
    <div className="mt-4">
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-black/30 rounded-lg border border-[#a47149]/30">
          <thead>
            <tr className="bg-[#a47149]/20 border-b border-[#a47149]/30">
              <th className="px-3 py-2 text-left text-white font-medium text-sm">{t('time')}</th>
              <th className="px-3 py-2 text-left text-white font-medium text-sm">{t('activity')}</th>
              <th className="px-3 py-2 text-left text-white font-medium text-sm">{t('location')}</th>
              <th className="px-3 py-2 text-left text-white font-medium text-sm">{t('duration')}</th>
              <th className="px-3 py-2 text-left text-white font-medium text-sm">{t('cost')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-[#a47149]/20 hover:bg-[#a47149]/10">
                <td className="px-3 py-2 text-gray-300 text-sm">{item.time}</td>
                <td className="px-3 py-2 text-gray-300 text-sm">{item.activity}</td>
                <td className="px-3 py-2 text-gray-300 text-sm">{item.location}</td>
                <td className="px-3 py-2 text-gray-300 text-sm">{item.duration}</td>
                <td className="px-3 py-2 text-[#a47149] text-sm font-medium">{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // 1 Day Itineraries
    if (lowerMessage.includes('one day') || lowerMessage.includes('1 day') || lowerMessage.includes('day trip')) {
      if (lowerMessage.includes('ibri')) {
        return `Here's your one-day Ibri itinerary:

**ONE DAY IBRI EXPERIENCE**
Total Cost: ~35 OMR per person`;
      } else {
        return `Here's your one-day Al Dhahirah highlights:

**ONE DAY AL DHAHIRAH HIGHLIGHTS**
Total Cost: ~45 OMR per person`;
      }
    }
    
    // 2 Day Itineraries
    else if (lowerMessage.includes('two day') || lowerMessage.includes('2 day') || lowerMessage.includes('weekend')) {
      return `Here's your 2-day Al Dhahirah adventure:

**TWO-DAY AL DHAHIRAH ADVENTURE**
Total Cost: ~80 OMR per person`;
    }
    
    // 3 Day Itineraries
    else if (lowerMessage.includes('three day') || lowerMessage.includes('3 day')) {
      return `Here's your 3-day comprehensive Al Dhahirah experience:

**THREE-DAY AL DHAHIRAH COMPLETE EXPERIENCE**
Total Cost: ~120 OMR per person`;
    }
    
    // 4 Day Itineraries
    else if (lowerMessage.includes('four day') || lowerMessage.includes('4 day')) {
      return `Here's your 4-day extended Al Dhahirah exploration:

**FOUR-DAY AL DHAHIRAH EXTENDED EXPLORATION**
Total Cost: ~160 OMR per person`;
    }
    
    // 5 Day Itineraries
    else if (lowerMessage.includes('five day') || lowerMessage.includes('5 day')) {
      return `Here's your 5-day ultimate Al Dhahirah journey:

**FIVE-DAY AL DHAHIRAH ULTIMATE JOURNEY**
Total Cost: ~200 OMR per person`;
    }
    
    // 6 Day Itineraries
    else if (lowerMessage.includes('six day') || lowerMessage.includes('6 day')) {
      return `Here's your 6-day comprehensive Al Dhahirah discovery:

**SIX-DAY AL DHAHIRAH COMPREHENSIVE DISCOVERY**
Total Cost: ~240 OMR per person`;
    }
    
    // 7 Day Itineraries
    else if (lowerMessage.includes('seven day') || lowerMessage.includes('7 day') || lowerMessage.includes('week')) {
      return `Here's your 7-day complete Al Dhahirah immersion:

**SEVEN-DAY AL DHAHIRAH COMPLETE IMMERSION**
Total Cost: ~280 OMR per person`;
    }
    
    // Themed Itineraries
    else if (lowerMessage.includes('family') || lowerMessage.includes('kids') || lowerMessage.includes('children')) {
      return `Here's your family-friendly Al Dhahirah itinerary:

**FAMILY-FRIENDLY AL DHAHIRAH ADVENTURE**
Suitable for all ages with safe activities`;
    }
    
    else if (lowerMessage.includes('cultural') || lowerMessage.includes('history') || lowerMessage.includes('fort')) {
      return `Here's your cultural & historical experience:

**CULTURAL & HISTORICAL AL DHAHIRAH TOUR**
Focus on heritage sites and traditions`;
    }
    
    else if (lowerMessage.includes('nature') || lowerMessage.includes('wadi') || lowerMessage.includes('swimming')) {
      return `Here's your nature adventure plan:

**NATURE & ADVENTURE AL DHAHIRAH EXPERIENCE**
Focus on natural attractions and outdoor activities`;
    }
    
    else {
      return `I can create detailed itineraries for:

📅 **Trip Durations:**
• 1 Day: Quick highlights tour
• 2 Days: Weekend getaway
• 3 Days: Comprehensive experience
• 4 Days: Extended exploration
• 5 Days: Ultimate journey
• 6 Days: In-depth discovery
• 7 Days: Complete immersion

🎯 **Trip Types:**
• Family trips (all ages)
• Cultural tours (history focus)
• Nature adventures (wadis & mountains)
• Photography tours
• Adventure trips

**Examples:**
• "Plan a 3-day cultural trip"
• "Create a 5-day family itinerary"
• "I want a 2-day nature adventure"

What would you like me to plan for you?`;
    }
  };

  // Sample itinerary data for different durations
  const oneDayIbriData = [
    { time: '8:00 AM', activity: 'Traditional Breakfast', location: 'Local Restaurant', duration: '1 hour', cost: '5 OMR' },
    { time: '9:00 AM', activity: 'Ibri Fort Tour', location: 'Ibri Fort', duration: '2.5 hours', cost: '1 OMR' },
    { time: '11:30 AM', activity: 'Coffee Break', location: 'Ibri Souq', duration: '30 mins', cost: '2 OMR' },
    { time: '12:00 PM', activity: 'Souq Shopping', location: 'Traditional Market', duration: '1 hour', cost: '10-20 OMR' },
    { time: '1:00 PM', activity: 'Lunch', location: 'Heritage Restaurant', duration: '1.5 hours', cost: '12 OMR' },
    { time: '2:30 PM', activity: 'Rest Time', location: 'Café', duration: '30 mins', cost: 'Free' },
    { time: '3:00 PM', activity: 'Bat Tombs Visit', location: 'UNESCO Site', duration: '2 hours', cost: '1 OMR' },
    { time: '5:00 PM', activity: 'Sunset Photos', location: 'Ibri Viewpoint', duration: '1 hour', cost: 'Free' }
  ];

  const oneDayHighlightsData = [
    { time: '7:30 AM', activity: 'Early Breakfast', location: 'Hotel', duration: '45 mins', cost: '6 OMR' },
    { time: '8:15 AM', activity: 'Ibri Fort Tour', location: 'Ibri Fort', duration: '2 hours', cost: '1 OMR' },
    { time: '10:15 AM', activity: 'Drive to Bat Tombs', location: 'En route', duration: '30 mins', cost: 'Fuel' },
    { time: '10:45 AM', activity: 'Bat Tombs Exploration', location: 'UNESCO Site', duration: '1.5 hours', cost: '1 OMR' },
    { time: '12:15 PM', activity: 'Lunch', location: 'Local Restaurant', duration: '1 hour', cost: '15 OMR' },
    { time: '1:15 PM', activity: 'Drive to Wadi Damm', location: 'Mountain Route', duration: '45 mins', cost: 'Fuel' },
    { time: '2:00 PM', activity: 'Wadi Swimming', location: 'Wadi Damm', duration: '2.5 hours', cost: 'Free' },
    { time: '4:30 PM', activity: 'Sunset Viewing', location: 'Mountain Viewpoint', duration: '1 hour', cost: 'Free' },
    { time: '5:30 PM', activity: 'Return Journey', location: 'Back to Ibri', duration: '45 mins', cost: 'Fuel' }
  ];

  const twoDayAdventureData = [
    // Day 1
    { time: 'Day 1 - 8:00 AM', activity: 'Welcome Breakfast', location: 'Heritage Hotel', duration: '1 hour', cost: '8 OMR' },
    { time: '9:00 AM', activity: 'Ibri Fort Deep Tour', location: 'Ibri Fort', duration: '3 hours', cost: '1 OMR' },
    { time: '12:00 PM', activity: 'Traditional Lunch', location: 'Local Restaurant', duration: '1.5 hours', cost: '15 OMR' },
    { time: '1:30 PM', activity: 'Ibri Souq Experience', location: 'Traditional Market', duration: '1.5 hours', cost: '20 OMR' },
    { time: '3:00 PM', activity: 'Bat Tombs Exploration', location: 'UNESCO Site', duration: '2 hours', cost: '1 OMR' },
    { time: '5:00 PM', activity: 'Yanqul Village Visit', location: 'Yanqul', duration: '2 hours', cost: 'Free' },
    { time: '7:00 PM', activity: 'Traditional Dinner', location: 'Heritage Restaurant', duration: '2 hours', cost: '20 OMR' },
    // Day 2
    { time: 'Day 2 - 7:00 AM', activity: 'Early Breakfast', location: 'Hotel', duration: '45 mins', cost: 'Included' },
    { time: '7:45 AM', activity: 'Journey to Wadi Damm', location: 'Mountain Route', duration: '1 hour', cost: 'Fuel' },
    { time: '8:45 AM', activity: 'Wadi Exploration', location: 'Wadi Damm', duration: '3 hours', cost: 'Free' },
    { time: '11:45 AM', activity: 'Mountain Picnic', location: 'Scenic Viewpoint', duration: '1.5 hours', cost: '10 OMR' },
    { time: '1:15 PM', activity: 'Swimming & Relaxation', location: 'Natural Pools', duration: '2 hours', cost: 'Free' },
    { time: '3:15 PM', activity: 'Hiking Trail', location: 'Mountain Path', duration: '1.5 hours', cost: 'Free' },
    { time: '4:45 PM', activity: 'Sunset Photography', location: 'Highest Point', duration: '1 hour', cost: 'Free' },
    { time: '5:45 PM', activity: 'Return Journey', location: 'Back to Ibri', duration: '1 hour', cost: 'Fuel' }
  ];

  const threeDayCompleteData = [
    // Day 1 - Cultural Focus
    { time: 'Day 1 - 8:00 AM', activity: 'Arrival & Breakfast', location: 'Heritage Hotel', duration: '1 hour', cost: '8 OMR' },
    { time: '9:00 AM', activity: 'Ibri Fort Complete Tour', location: 'Ibri Fort', duration: '3 hours', cost: '1 OMR' },
    { time: '12:00 PM', activity: 'Traditional Lunch', location: 'Local Restaurant', duration: '1.5 hours', cost: '15 OMR' },
    { time: '1:30 PM', activity: 'Ibri Cultural Center', location: 'Cultural Center', duration: '1 hour', cost: 'Free' },
    { time: '2:30 PM', activity: 'Traditional Crafts Workshop', location: 'Artisan Center', duration: '2 hours', cost: '25 OMR' },
    { time: '4:30 PM', activity: 'Ibri Souq Shopping', location: 'Traditional Market', duration: '1.5 hours', cost: '20 OMR' },
    { time: '6:00 PM', activity: 'Sunset at Fort', location: 'Ibri Fort Viewpoint', duration: '1 hour', cost: 'Free' },
    { time: '7:00 PM', activity: 'Welcome Dinner', location: 'Heritage Restaurant', duration: '2 hours', cost: '25 OMR' },
    
    // Day 2 - Historical & Archaeological
    { time: 'Day 2 - 8:00 AM', activity: 'Breakfast', location: 'Hotel', duration: '1 hour', cost: 'Included' },
    { time: '9:00 AM', activity: 'Bat Tombs Deep Exploration', location: 'UNESCO Site', duration: '2.5 hours', cost: '1 OMR' },
    { time: '11:30 AM', activity: 'Al Ayn Archaeological Site', location: 'Al Ayn', duration: '1.5 hours', cost: '1 OMR' },
    { time: '1:00 PM', activity: 'Picnic Lunch', location: 'Archaeological Park', duration: '1 hour', cost: '10 OMR' },
    { time: '2:00 PM', activity: 'Yanqul Village & Al Sulaif Fort', location: 'Yanqul', duration: '2.5 hours', cost: 'Free' },
    { time: '4:30 PM', activity: 'Dank Village & Falaj System', location: 'Dank', duration: '1.5 hours', cost: 'Free' },
    { time: '6:00 PM', activity: 'Traditional Tea Experience', location: 'Local Café', duration: '1 hour', cost: '5 OMR' },
    { time: '7:00 PM', activity: 'Dinner', location: 'Local Restaurant', duration: '1.5 hours', cost: '18 OMR' },
    
    // Day 3 - Nature & Adventure
    { time: 'Day 3 - 7:00 AM', activity: 'Early Breakfast', location: 'Hotel', duration: '45 mins', cost: 'Included' },
    { time: '7:45 AM', activity: 'Journey to Wadi Damm', location: 'Mountain Route', duration: '1 hour', cost: 'Fuel' },
    { time: '8:45 AM', activity: 'Wadi Damm Full Exploration', location: 'Natural Pools', duration: '4 hours', cost: 'Free' },
    { time: '12:45 PM', activity: 'Mountain Picnic', location: 'Scenic Viewpoint', duration: '1.5 hours', cost: '12 OMR' },
    { time: '2:15 PM', activity: 'Wadi Hawasina Visit', location: 'Wadi Hawasina', duration: '2 hours', cost: 'Free' },
    { time: '4:15 PM', activity: 'Photography Session', location: 'Multiple Viewpoints', duration: '1.5 hours', cost: 'Free' },
    { time: '5:45 PM', activity: 'Sunset Viewing', location: 'Mountain Peak', duration: '1 hour', cost: 'Free' },
    { time: '6:45 PM', activity: 'Return & Farewell Dinner', location: 'Special Restaurant', duration: '2 hours', cost: '30 OMR' }
  ];

  return (
    <div className="min-h-screen relative pb-20 lg:pb-0">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://arabiandaily.com/wp-content/uploads/2023/01/ee-min-1.jpeg')`
        }}
      />
      
      <div className="relative z-10 p-3 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('tripPlanner')}</h1>
            <p className="text-sm sm:text-base text-gray-300">{t('planPerfectJourney')}</p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 mb-6 sm:mb-8 bg-black/40 backdrop-blur-sm rounded-xl p-1 border border-[#a47149]/30">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-[#a47149] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-black/30'
                  }`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Tab Content */}
          {activeTab === 'calendar' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Calendar */}
              <div className="lg:col-span-2 bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{t('selectTravelDates')}</h2>
                <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {/* Calendar Header */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-gray-400 text-xs sm:text-sm font-medium py-1 sm:py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 5; // Start from previous month
                    const isCurrentMonth = day > 0 && day <= 31;
                    const isSelected = day === 15 || day === 16;
                    
                    return (
                      <button
                        key={i}
                        className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg text-xs sm:text-sm transition-colors ${
                          isSelected
                            ? 'bg-[#a47149] text-white'
                            : isCurrentMonth
                            ? 'text-white hover:bg-[#a47149]/30'
                            : 'text-gray-600'
                        }`}
                      >
                        {isCurrentMonth ? day : ''}
                      </button>
                    );
                  })}
                </div>
                
                <div className="text-center">
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{t('selectedDates')}: March 15-16, 2025</p>
                  <button className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
                    {t('generateItinerary')}
                  </button>
                </div>
              </div>
              
              {/* Available Locations */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{t('availableLocations')}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {availableLocations.map((location, index) => (
                    <div key={index} className="border border-[#a47149]/30 rounded-lg p-3 sm:p-4 hover:border-[#a47149] transition-colors cursor-pointer">
                      <img 
                        src={location.image}
                        alt={location.name}
                        className="w-full h-20 sm:h-24 object-cover rounded-lg mb-2 sm:mb-3"
                      />
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">{location.name}</h3>
                      <p className="text-[#a47149] text-xs sm:text-sm mb-2">{location.nameAr}</p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-gray-400">{location.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-gray-400">{location.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'ai' && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#a47149]/30 flex flex-col" style={{ height: 'calc(100vh - 300px)', minHeight: '400px', maxHeight: '600px' }}>
                {/* Chat Messages */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                  <div className="space-y-3 sm:space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs sm:max-w-md lg:max-w-4xl px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base whitespace-pre-line ${
                          msg.type === 'user' 
                            ? 'bg-[#a47149] text-white' 
                            : 'bg-black/60 text-gray-300 border border-[#a47149]/30'
                        }`}>
                          {msg.message}
                          {/* Show tables for specific responses */}
                          {msg.type === 'bot' && msg.message.includes('one-day Ibri itinerary') && (
                            <ItineraryTable title="One Day Ibri Experience" data={oneDayIbriData} />
                          )}
                          {msg.type === 'bot' && msg.message.includes('one-day Al Dhahirah highlights') && (
                            <ItineraryTable title="One Day Al Dhahirah Highlights" data={oneDayHighlightsData} />
                          )}
                          {msg.type === 'bot' && msg.message.includes('2-day Al Dhahirah adventure') && (
                            <ItineraryTable title="Two-Day Al Dhahirah Adventure" data={twoDayAdventureData} />
                          )}
                          {msg.type === 'bot' && msg.message.includes('3-day comprehensive Al Dhahirah experience') && (
                            <ItineraryTable title="Three-Day Al Dhahirah Complete Experience" data={threeDayCompleteData} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="p-4 sm:p-6 border-t border-[#a47149]/30">
                  <div className="flex space-x-2 sm:space-x-4">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={t('askPlanTrip')}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none text-sm sm:text-base"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors"
                    >
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'map' && (
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{t('interactiveMap')} - Al Dhahirah Region</h2>
              <div className="bg-black/60 rounded-lg flex items-center justify-center border border-[#a47149]/30" style={{ height: 'calc(100vh - 350px)', minHeight: '300px', maxHeight: '500px' }}>
                <div className="text-center p-4">
                  <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-[#a47149] mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{t('interactiveMap')}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{t('clickLocations')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 max-w-2xl">
                    {availableLocations.map((location, index) => (
                      <button
                        key={index}
                        className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm"
                      >
                        📍 {location.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 text-center">
                <button className="bg-[#a47149] hover:bg-[#4a2c1d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
                  {t('autoGenerateRoute')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;