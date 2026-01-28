import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import SkipLinks from './components/SkipLinks'
import CookieConsent from './components/CookieConsent'
import LiveChat from './components/LiveChat'
import ExitIntentPopup from './components/ExitIntentPopup'
import InstallBanner from './components/InstallBanner'
import OfflineBanner from './components/OfflineBanner'
import PageLoader from './components/PageLoader'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GetStartedPage = lazy(() => import('./pages/GetStartedPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
import { useLenis } from './hooks/useLenis'
import usePageTitle from './hooks/usePageTitle'
import useAnalytics from './hooks/useAnalytics'
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts'
import PageTransition from './components/PageTransition'
import LiveRegion from './components/LiveRegion'

function AppContent() {
  useLenis();
  usePageTitle();
  useAnalytics();
  useKeyboardShortcuts();
  const location = useLocation();
  
  return (
    <>
      <SkipLinks />
      <OfflineBanner />
      <CookieConsent />
      <BackToTop />
      <LiveChat />
      <ExitIntentPopup />
      <InstallBanner />
      <LiveRegion />
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  )
}

export default App
