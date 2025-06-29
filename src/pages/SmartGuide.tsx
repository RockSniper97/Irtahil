import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Bot, Mic, Send, MapPin, Clock, Camera } from 'lucide-react';

const SmartGuide: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: `Hello! I'm your AI guide for Al Dhahirah region. Ask me about:
• Historical sites (Ibri Fort, Bat Tombs, Al Sulaif Fort)
• Natural attractions (Wadi Damm, Wadi Hawasina, Jebel Shams)
• Villages (Yanqul, Dank, Al Dhahirah)
• Directions and transportation
• Best times to visit
• Local customs and food

What would you like to know?`,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const quickQuestions = [
    "What's the history of Ibri Fort?",
    "How do I get to Bat Tombs?",
    "What's special about Wadi Damm?",
    "Tell me about Yanqul village",
    "Best time to visit Al Dhahirah?",
    "Where can I find traditional food?"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        type: 'user',
        message: inputMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const botResponse = {
          type: 'bot',
          message: getBotResponse(inputMessage),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Historical Sites
    if (lowerQuestion.includes('ibri fort') || lowerQuestion.includes('قلعة عبري')) {
      return `🏰 **Ibri Fort**

• Built: 17th century
• Hours: 8 AM - 6 PM
• Entry: 1 OMR
• Duration: 2-3 hours
• Best time: Early morning/late afternoon`;
    }
    
    else if (lowerQuestion.includes('bat tombs') || lowerQuestion.includes('مقابر بات')) {
      return `🏺 **Bat Tombs**

• UNESCO World Heritage site
• Age: 3000 BCE (Bronze Age)
• Hours: 8 AM - 5 PM
• Entry: 1 OMR
• Distance: 20 km from Ibri`;
    }
    
    else if (lowerQuestion.includes('al sulaif fort') || lowerQuestion.includes('sulaif') || lowerQuestion.includes('قلعة السليف')) {
      return `🏛️ **Al Sulaif Fort**

• Built: 18th century
• Location: Yanqul area
• Entry: Free
• Duration: 1-2 hours
• Features: Traditional architecture`;
    }
    
    // Natural Attractions
    else if (lowerQuestion.includes('wadi damm') || lowerQuestion.includes('وادي ضم')) {
      return `🏞️ **Wadi Damm**

• Natural swimming pools
• Free entry
• Best time: October-March
• Duration: 3-4 hours
• Distance: 45 min from Ibri`;
    }
    
    else if (lowerQuestion.includes('wadi hawasina') || lowerQuestion.includes('hawasina') || lowerQuestion.includes('وادي حواسينة')) {
      return `🌊 **Wadi Hawasina**

• Crystal clear pools
• Free entry
• Best time: Winter months
• Duration: 2-3 hours
• Distance: 1 hour from Ibri`;
    }
    
    else if (lowerQuestion.includes('jebel shams') || lowerQuestion.includes('شمس') || lowerQuestion.includes('mountain')) {
      return `⛰️ **Jebel Shams**

• Highest peak in Oman (3,009m)
• Grand Canyon views
• Camping available
• Duration: Full day
• Distance: 2 hours from Ibri`;
    }
    
    else if (lowerQuestion.includes('wadi ghul') || lowerQuestion.includes('ghul') || lowerQuestion.includes('وادي غول')) {
      return `🏔️ **Wadi Ghul**

• "Grand Canyon of Oman"
• Spectacular views
• Hiking trails
• Duration: 4-5 hours
• Distance: 1.5 hours from Ibri`;
    }
    
    // Villages and Towns
    else if (lowerQuestion.includes('yanqul') || lowerQuestion.includes('ينقل')) {
      return `🏘️ **Yanqul Village**

• Traditional Omani village
• Al Sulaif Fort nearby
• Local handicrafts
• Duration: 2-3 hours
• Distance: 30 min from Ibri`;
    }
    
    else if (lowerQuestion.includes('dank') || lowerQuestion.includes('دنك')) {
      return `🏡 **Dank Village**

• Agricultural village
• Date palm farms
• Traditional falaj system
• Duration: 1-2 hours
• Distance: 25 min from Ibri`;
    }
    
    else if (lowerQuestion.includes('al dhahirah') || lowerQuestion.includes('dhahirah') || lowerQuestion.includes('الظاهرة')) {
      return `🌆 **Al Dhahirah Region**

• Capital: Ibri
• Area: 44,924 km²
• Population: ~200,000
• Main attractions: Forts, wadis, mountains
• Best season: October-March`;
    }
    
    else if (lowerQuestion.includes('adam') || lowerQuestion.includes('آدم')) {
      return `🏘️ **Adam Town**

• Gateway to Jebel Shams
• Traditional souq
• Local restaurants
• Duration: 2-3 hours
• Distance: 1 hour from Ibri`;
    }
    
    // Archaeological Sites
    else if (lowerQuestion.includes('al ayn') || lowerQuestion.includes('العين')) {
      return `🏺 **Al Ayn Archaeological Site**

• Bronze Age settlement
• UNESCO World Heritage
• Ancient tombs
• Duration: 1-2 hours
• Distance: 25 km from Bat`;
    }
    
    else if (lowerQuestion.includes('hili') || lowerQuestion.includes('هيلي')) {
      return `🏛️ **Hili Archaeological Park**

• 4000-year-old settlement
• Bronze Age artifacts
• Visitor center
• Duration: 2 hours
• Distance: 45 min from Ibri`;
    }
    
    // Natural Features
    else if (lowerQuestion.includes('aflaj') || lowerQuestion.includes('falaj') || lowerQuestion.includes('أفلاج')) {
      return `💧 **Aflaj Irrigation System**

• Ancient water channels
• UNESCO World Heritage
• Still functioning today
• Best examples in Ibri area
• Free to visit`;
    }
    
    else if (lowerQuestion.includes('cave') || lowerQuestion.includes('كهف')) {
      return `🕳️ **Al Hoota Cave**

• Underground limestone cave
• Guided tours available
• Cool temperature year-round
• Duration: 1 hour
• Distance: 2 hours from Ibri`;
    }
    
    // General Information
    else if (lowerQuestion.includes('time') || lowerQuestion.includes('when') || lowerQuestion.includes('weather')) {
      return `🌤️ **Best Time to Visit**

• Peak season: October-March (20-30°C)
• Summer: Very hot (35-45°C)
• Best hours: 8 AM-6 PM (winter)
• Avoid: 11 AM-4 PM (summer)`;
    }
    
    else if (lowerQuestion.includes('food') || lowerQuestion.includes('restaurant') || lowerQuestion.includes('eat')) {
      return `🍽️ **Local Food**

• Shuwa: Slow-cooked lamb
• Majboos: Spiced rice with meat
• Qahwa: Omani coffee with dates
• Best restaurants: Ibri city center
• Price range: 5-25 OMR`;
    }
    
    else if (lowerQuestion.includes('custom') || lowerQuestion.includes('culture') || lowerQuestion.includes('tradition')) {
      return `🕌 **Local Customs**

• Dress modestly (cover shoulders/knees)
• Use right hand for eating/greeting
• Remove shoes in traditional places
• Greet with "As-salamu alaykum"
• Ask before photographing people`;
    }
    
    else if (lowerQuestion.includes('direction') || lowerQuestion.includes('how to get') || lowerQuestion.includes('transport')) {
      return `🚗 **Transportation**

• From Muscat: 2.5 hours
• Rental car: 25-40 OMR/day (recommended)
• Fuel stations: Every 20-30 km
• Ibri to Bat Tombs: 20 min
• Ibri to Wadi Damm: 45 min`;
    }
    
    else {
      return `I can help with information about:

🏰 **Historical Sites:**
Ibri Fort, Bat Tombs, Al Sulaif Fort

🏞️ **Natural Attractions:**
Wadi Damm, Wadi Hawasina, Jebel Shams, Wadi Ghul

🏘️ **Villages & Towns:**
Yanqul, Dank, Adam, Al Dhahirah

🏺 **Archaeological Sites:**
Al Ayn, Hili, Ancient settlements

💧 **Natural Features:**
Aflaj systems, caves, mountains

What specific place would you like to know about?`;
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="min-h-screen relative pb-20 lg:pb-0">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.8), rgba(74, 44, 29, 0.8)), url('https://around-oman.com/wp-content/uploads/2023/03/IMG_20230302_160115-1-1024x465.jpg')`
        }}
      />
      
      <div className="relative z-10 p-3 sm:p-4 lg:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('smartGuide')}</h1>
            <p className="text-sm sm:text-base text-gray-300">{t('aiPoweredAssistant')}</p>
          </div>
          
          {/* Chat Container */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-[#a47149]/30 flex flex-col mb-6 sm:mb-8" style={{ height: 'calc(100vh - 350px)', minHeight: '400px', maxHeight: '600px' }}>
            {/* Messages */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <div className="space-y-3 sm:space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs sm:max-w-md lg:max-w-lg ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                      {msg.type === 'bot' && (
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#a47149] rounded-full flex items-center justify-center">
                            <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <span className="text-gray-400 text-xs sm:text-sm">AI Guide</span>
                        </div>
                      )}
                      <div className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base whitespace-pre-line ${
                        msg.type === 'user' 
                          ? 'bg-[#a47149] text-white' 
                          : 'bg-black/60 text-gray-300 border border-[#a47149]/30'
                      }`}>
                        {msg.message}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {msg.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Input Area */}
            <div className="p-4 sm:p-6 border-t border-[#a47149]/30">
              <div className="flex space-x-2 sm:space-x-4">
                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 sm:p-3 rounded-lg transition-colors ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-black/30 text-gray-400 hover:text-white border border-[#a47149]/30'
                  }`}
                >
                  <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t('askAbout')}
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
          
          {/* Quick Questions */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t('quickQuestions')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="bg-black/40 backdrop-blur-sm border border-[#a47149]/30 hover:border-[#a47149] text-left p-3 sm:p-4 rounded-lg transition-all duration-300 group"
                >
                  <p className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm">{question}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30 text-center">
              <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-[#a47149] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t('locationInfo')}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{t('getDetailedInfo')}</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30 text-center">
              <Clock className="h-8 w-8 sm:h-12 sm:w-12 text-[#a47149] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t('realTimeHelp')}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{t('assistanceAvailable')}</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#a47149]/30 text-center sm:col-span-2 lg:col-span-1">
              <Camera className="h-8 w-8 sm:h-12 sm:w-12 text-[#a47149] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{t('visualRecognition')}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{t('takePhotos')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGuide;