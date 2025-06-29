import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    tripPlanner: 'Trip Planner',
    aiAssistant: 'AI Assistant',
    calendar: 'Calendar',
    emergency: 'Emergency',
    profile: 'Profile',
    
    // Landing Page
    welcomeTitle: 'Explore Oman like never before',
    getStarted: 'Get Started',
    
    // Sites
    ibriFort: 'Ibri Fort',
    batTombs: 'Bat Tombs',
    wadiDamm: 'Wadi Damm',
    
    // Features
    myTrips: 'My Trips',
    arViewer: 'AR Viewer',
    smartGuide: 'Smart Guide',
    rewards: 'Rewards',
    
    // Trip Types
    cultural: 'Cultural',
    adventure: 'Adventure',
    family: 'Family',
    nature: 'Nature',
    
    // Emergency
    needHospital: 'Need Hospital',
    callPolice: 'Call Police',
    imLost: "I'm Lost",
    shareLocation: 'Share Location',
    other: 'Other',
    
    // Common
    signIn: 'Sign In',
    signUp: 'Sign Up',
    continueWithGoogle: 'Continue with Google',
    continueWithApple: 'Continue with Apple',
    email: 'Email',
    password: 'Password',
    settings: 'Settings',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    
    // Additional translations
    welcomeBack: 'Welcome back',
    readyToExplore: 'Ready to explore more of Al Dhahirah region?',
    totalPoints: 'Total Points',
    placesVisited: 'Places Visited',
    arExperiences: 'AR Experiences',
    currentLevel: 'Current Level',
    recentActivity: 'Recent Activity',
    recommendedForYou: 'Recommended for You',
    quickLinks: 'Quick Links',
    support: 'Support',
    legal: 'Legal',
    helpCenter: 'Help Center',
    termsOfService: 'Terms of Service',
    madeWithLove: 'Made with ❤️ for Oman tourism',
    
    // Trip Planner
    selectTravelDates: 'Select Your Travel Dates',
    availableLocations: 'Available Locations',
    generateItinerary: 'Generate Itinerary',
    calendarView: 'Calendar View',
    aiChatAssistant: 'AI Chat Assistant',
    mapPlanner: 'Map Planner',
    interactiveMap: 'Interactive Map',
    clickLocations: 'Click on locations to add them to your itinerary',
    autoGenerateRoute: 'Auto-Generate Route',
    planPerfectJourney: 'Plan your perfect journey through Al Dhahirah region',
    selectedDates: 'Selected',
    time: 'Time',
    activity: 'Activity',
    location: 'Location',
    duration: 'Duration',
    cost: 'Cost',
    askPlanTrip: 'Ask me to plan your trip: "Plan a one day visit to Ibri" or "Create a 2-day family itinerary"',
    
    // Smart Guide
    aiPoweredAssistant: 'Your AI-powered travel assistant for Al Dhahirah region',
    askAbout: 'Ask me about places, history, directions, or travel tips...',
    quickQuestions: 'Quick Questions',
    locationInfo: 'Location Info',
    realTimeHelp: 'Real-time Help',
    visualRecognition: 'Visual Recognition',
    getDetailedInfo: 'Get detailed information about any location in Al Dhahirah',
    assistanceAvailable: '24/7 assistance for your travel questions and needs',
    takePhotos: 'Take photos to identify landmarks and get instant information',
    
    // AR Experience
    arExperienceActive: 'AR Experience Active',
    pointDevice: 'Point your device at',
    toBegin: 'to begin',
    startArExperience: 'Start AR Experience',
    backToSites: 'Back to Sites',
    shareExperience: 'Share Experience',
    historicalInformation: 'Historical Information',
    arFeatures: 'AR Features',
    constructionPeriod: 'Construction Period',
    architecturalStyle: 'Architectural Style',
    
    // Emergency
    emergencySupport: 'Emergency Support',
    safetyAssistance: '24/7 emergency assistance for your safety and peace of mind',
    emergencyContacts: 'Emergency Contacts',
    locationServices: 'Location Services',
    currentLocation: 'Current Location',
    shareWithEmergency: 'Share with Emergency Contacts',
    locationSharedSuccess: 'Location shared successfully!',
    safetyFeatures: 'Safety Features',
    realTimeTracking: 'Real-time location tracking',
    emergencyNotifications: 'Emergency contact notifications',
    voiceActivated: 'Voice-activated assistance',
    safetyTips: 'Safety Tips for Al Dhahirah Region',
    desertSafety: 'Desert Safety',
    weatherAwareness: 'Weather Awareness',
    communication: 'Communication',
    
    // Rewards
    earnPoints: 'Earn points and unlock exclusive rewards for exploring Al Dhahirah',
    achievementBadges: 'Achievement Badges',
    rewardsStore: 'Rewards Store',
    progressTo: 'Progress to',
    pointsToGo: 'points to go',
    keepExploring: 'Keep exploring to unlock new rewards and features!',
    earnMorePoints: 'Earn More Points',
    visitNewLocations: 'Visit new locations',
    useArExperiences: 'Use AR experiences',
    sharePhotos: 'Share photos',
    
    // Settings
    manageAccount: 'Manage your account and preferences',
    profileInformation: 'Profile Information',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    travelPreferences: 'Travel Preferences',
    languageRegion: 'Language & Region',
    chooseLanguage: 'Choose your preferred language',
    region: 'Region',
    current: 'Current',
    notificationPreferences: 'Notification Preferences',
    tripReminders: 'Trip Reminders',
    emergencyAlerts: 'Emergency Alerts',
    rewardUpdates: 'Reward Updates',
    marketingEmails: 'Marketing Emails',
    privacySecurity: 'Privacy & Security',
    changePassword: 'Change Password',
    privacySettings: 'Privacy Settings',
    downloadMyData: 'Download My Data',
    supportFeedback: 'Support & Feedback',
    sendFeedback: 'Send Feedback',
    contactSupport: 'Contact Support',
    backToHome: 'Back to Home',
    signOut: 'Sign Out',
    edit: 'Edit',
    save: 'Save'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    tripPlanner: 'مخطط الرحلة',
    aiAssistant: 'المساعد الذكي',
    calendar: 'التقويم',
    emergency: 'الطوارئ',
    profile: 'الملف الشخصي',
    
    // Landing Page
    welcomeTitle: 'استكشف عُمان كما لم تفعل من قبل',
    getStarted: 'ابدأ الآن',
    
    // Sites
    ibriFort: 'قلعة عبري',
    batTombs: 'مقابر بات',
    wadiDamm: 'وادي ضم',
    
    // Features
    myTrips: 'رحلاتي',
    arViewer: 'عارض الواقع المعزز',
    smartGuide: 'الدليل الذكي',
    rewards: 'المكافآت',
    
    // Trip Types
    cultural: 'ثقافي',
    adventure: 'مغامرة',
    family: 'عائلي',
    nature: 'طبيعة',
    
    // Emergency
    needHospital: 'أحتاج مستشفى',
    callPolice: 'اتصل بالشرطة',
    imLost: 'أنا تائه',
    shareLocation: 'شارك موقعي',
    other: 'أخرى',
    
    // Common
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    continueWithGoogle: 'متابعة مع جوجل',
    continueWithApple: 'متابعة مع آبل',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    settings: 'الإعدادات',
    about: 'حول',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    
    // Additional translations
    welcomeBack: 'مرحباً بعودتك',
    readyToExplore: 'هل أنت مستعد لاستكشاف المزيد من منطقة الظاهرة؟',
    totalPoints: 'إجمالي النقاط',
    placesVisited: 'الأماكن المزارة',
    arExperiences: 'تجارب الواقع المعزز',
    currentLevel: 'المستوى الحالي',
    recentActivity: 'النشاط الأخير',
    recommendedForYou: 'موصى لك',
    quickLinks: 'روابط سريعة',
    support: 'الدعم',
    legal: 'قانوني',
    helpCenter: 'مركز المساعدة',
    termsOfService: 'شروط الخدمة',
    madeWithLove: 'صُنع بـ ❤️ للسياحة العُمانية',
    
    // Trip Planner
    selectTravelDates: 'اختر تواريخ سفرك',
    availableLocations: 'المواقع المتاحة',
    generateItinerary: 'إنشاء برنامج الرحلة',
    calendarView: 'عرض التقويم',
    aiChatAssistant: 'مساعد الدردشة الذكي',
    mapPlanner: 'مخطط الخريطة',
    interactiveMap: 'خريطة تفاعلية',
    clickLocations: 'انقر على المواقع لإضافتها إلى برنامج رحلتك',
    autoGenerateRoute: 'إنشاء المسار تلقائياً',
    planPerfectJourney: 'خطط لرحلتك المثالية عبر منطقة الظاهرة',
    selectedDates: 'المحدد',
    time: 'الوقت',
    activity: 'النشاط',
    location: 'الموقع',
    duration: 'المدة',
    cost: 'التكلفة',
    askPlanTrip: 'اطلب مني تخطيط رحلتك: "خطط لزيارة يوم واحد إلى عبري" أو "أنشئ برنامج رحلة عائلية لمدة يومين"',
    
    // Smart Guide
    aiPoweredAssistant: 'مساعدك الذكي المدعوم بالذكاء الاصطناعي لمنطقة الظاهرة',
    askAbout: 'اسألني عن الأماكن والتاريخ والاتجاهات أو نصائح السفر...',
    quickQuestions: 'أسئلة سريعة',
    locationInfo: 'معلومات الموقع',
    realTimeHelp: 'مساعدة فورية',
    visualRecognition: 'التعرف البصري',
    getDetailedInfo: 'احصل على معلومات مفصلة عن أي موقع في الظاهرة',
    assistanceAvailable: 'مساعدة متاحة على مدار الساعة لأسئلة واحتياجات سفرك',
    takePhotos: 'التقط صوراً لتحديد المعالم والحصول على معلومات فورية',
    
    // AR Experience
    arExperienceActive: 'تجربة الواقع المعزز نشطة',
    pointDevice: 'وجه جهازك نحو',
    toBegin: 'للبدء',
    startArExperience: 'ابدأ تجربة الواقع المعزز',
    backToSites: 'العودة للمواقع',
    shareExperience: 'شارك التجربة',
    historicalInformation: 'المعلومات التاريخية',
    arFeatures: 'ميزات الواقع المعزز',
    constructionPeriod: 'فترة البناء',
    architecturalStyle: 'الطراز المعماري',
    
    // Emergency
    emergencySupport: 'دعم الطوارئ',
    safetyAssistance: 'مساعدة طوارئ على مدار الساعة لسلامتك وراحة بالك',
    emergencyContacts: 'جهات اتصال الطوارئ',
    locationServices: 'خدمات الموقع',
    currentLocation: 'الموقع الحالي',
    shareWithEmergency: 'شارك مع جهات اتصال الطوارئ',
    locationSharedSuccess: 'تم مشاركة الموقع بنجاح!',
    safetyFeatures: 'ميزات الأمان',
    realTimeTracking: 'تتبع الموقع في الوقت الفعلي',
    emergencyNotifications: 'إشعارات جهات اتصال الطوارئ',
    voiceActivated: 'مساعدة مفعلة بالصوت',
    safetyTips: 'نصائح الأمان لمنطقة الظاهرة',
    desertSafety: 'أمان الصحراء',
    weatherAwareness: 'الوعي بالطقس',
    communication: 'التواصل',
    
    // Rewards
    earnPoints: 'اكسب نقاط واحصل على مكافآت حصرية لاستكشاف الظاهرة',
    achievementBadges: 'شارات الإنجاز',
    rewardsStore: 'متجر المكافآت',
    progressTo: 'التقدم إلى',
    pointsToGo: 'نقطة متبقية',
    keepExploring: 'استمر في الاستكشاف لفتح مكافآت وميزات جديدة!',
    earnMorePoints: 'اكسب المزيد من النقاط',
    visitNewLocations: 'زر مواقع جديدة',
    useArExperiences: 'استخدم تجارب الواقع المعزز',
    sharePhotos: 'شارك الصور',
    
    // Settings
    manageAccount: 'إدارة حسابك وتفضيلاتك',
    profileInformation: 'معلومات الملف الشخصي',
    fullName: 'الاسم الكامل',
    phoneNumber: 'رقم الهاتف',
    travelPreferences: 'تفضيلات السفر',
    languageRegion: 'اللغة والمنطقة',
    chooseLanguage: 'اختر لغتك المفضلة',
    region: 'المنطقة',
    current: 'الحالي',
    notificationPreferences: 'تفضيلات الإشعارات',
    tripReminders: 'تذكيرات الرحلة',
    emergencyAlerts: 'تنبيهات الطوارئ',
    rewardUpdates: 'تحديثات المكافآت',
    marketingEmails: 'رسائل التسويق',
    privacySecurity: 'الخصوصية والأمان',
    changePassword: 'تغيير كلمة المرور',
    privacySettings: 'إعدادات الخصوصية',
    downloadMyData: 'تحميل بياناتي',
    supportFeedback: 'الدعم والملاحظات',
    sendFeedback: 'إرسال ملاحظات',
    contactSupport: 'اتصل بالدعم',
    backToHome: 'العودة للرئيسية',
    signOut: 'تسجيل الخروج',
    edit: 'تعديل',
    save: 'حفظ'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};