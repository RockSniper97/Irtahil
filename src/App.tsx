import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import ResponsiveWrapper from './components/ResponsiveWrapper';
import Header from './components/Header';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import PreviewMode from './pages/PreviewMode';
import LoginPage from './pages/LoginPage';
import UserPreferences from './pages/UserPreferences';
import Dashboard from './pages/Dashboard';
import TripPlanner from './pages/TripPlanner';
import ARExperience from './pages/ARExperience';
import SmartGuide from './pages/SmartGuide';
import Emergency from './pages/Emergency';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <ResponsiveWrapper>
            <div className="min-h-screen bg-[#4a2c1d] text-white flex flex-col">
              <Header />
              <div className="flex flex-1">
                <Navigation />
                <main className="flex-1 lg:ml-0 flex flex-col">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/preview" element={<PreviewMode />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/preferences" element={<UserPreferences />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/trip-planner" element={<TripPlanner />} />
                    <Route path="/ar-experience" element={<ARExperience />} />
                    <Route path="/smart-guide" element={<SmartGuide />} />
                    <Route path="/emergency" element={<Emergency />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          </ResponsiveWrapper>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;