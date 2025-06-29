import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { t } = useLanguage();
  const { login, register } = useAuth();
  const navigate = useNavigate();
  
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.email, formData.password, formData.name);
      }
      navigate('/preferences');
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 sm:px-6">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 44, 29, 0.9), rgba(74, 44, 29, 0.9)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/fe/b4/21/caption.jpg?w=500&h=400&s=1')`
        }}
      />
      
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#a47149]/30">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
            <img 
              src="/2ارتحل.png" 
              alt="Irtahil Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-white">Welcome to Irtahil</h1>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              {isLogin ? 'Sign in to continue your journey' : 'Create your account to get started'}
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 bg-black/30 border border-[#a47149]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#a47149] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#a47149] hover:bg-[#4a2c1d] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? 'Please wait...' : (isLogin ? t('signIn') : t('signUp'))}
            </button>
          </form>
          
          {/* Social Login */}
          <div className="mt-4 sm:mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#a47149]/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/40 text-gray-300">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 sm:py-3 px-4 border border-[#a47149]/30 rounded-lg bg-black/30 text-sm font-medium text-gray-300 hover:bg-black/50 transition-colors">
                <span>Google</span>
              </button>
              <button className="w-full inline-flex justify-center py-2 sm:py-3 px-4 border border-[#a47149]/30 rounded-lg bg-black/30 text-sm font-medium text-gray-300 hover:bg-black/50 transition-colors">
                <span>Apple</span>
              </button>
            </div>
          </div>
          
          {/* Toggle */}
          <div className="mt-4 sm:mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[#a47149] hover:text-white transition-colors"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
          
          {/* Back to Home */}
          <div className="mt-3 sm:mt-4 text-center">
            <Link 
              to="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;