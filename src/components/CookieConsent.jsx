import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initGA, updateConsent } from '../utils/analytics';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, non-toggleable
    analytics: false,
    marketing: false,
  });
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const saved = JSON.parse(consent);
      setPreferences(saved);
      
      // Initialize analytics if previously accepted
      if (saved.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics 4
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    initGA(measurementId);
    updateConsent(true, preferences.marketing);
    console.log('Analytics initialized with GA4');
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    initializeAnalytics();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setPreferences(rejected);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    if (preferences.analytics) {
      initializeAnalytics();
    }
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={() => setIsVisible(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[9999]"
          >
            <div className="bg-white border border-slate-200 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-white" />
                  <h3 className="text-white font-semibold text-lg">Cookie Settings</h3>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  You can manage your preferences below or read our{' '}
                  <Link to="/cookies" className="text-blue-600 hover:underline font-medium">
                    Cookie Policy
                  </Link>
                  .
                </p>

                {/* Quick Actions */}
                {!showDetails && (
                  <div className="space-y-3">
                    <button
                      onClick={handleAcceptAll}
                      className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Accept All Cookies
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                      >
                        Reject All
                      </button>
                      <button
                        onClick={() => setShowDetails(true)}
                        className="flex-1 bg-white border-2 border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:border-slate-900 transition-colors"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                )}

                {/* Detailed Preferences */}
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">Necessary Cookies</h4>
                        <p className="text-sm text-slate-600">
                          Required for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-slate-900 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">Analytics Cookies</h4>
                        <p className="text-sm text-slate-600">
                          Help us understand how visitors interact with our website.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className="ml-4"
                        aria-label="Toggle analytics cookies"
                      >
                        <div
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.analytics ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                        </div>
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-1">Marketing Cookies</h4>
                        <p className="text-sm text-slate-600">
                          Used to deliver personalized advertisements relevant to you.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className="ml-4"
                        aria-label="Toggle marketing cookies"
                      >
                        <div
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.marketing ? 'bg-slate-900 justify-end' : 'bg-slate-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                        </div>
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setShowDetails(false)}
                        className="flex-1 bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
