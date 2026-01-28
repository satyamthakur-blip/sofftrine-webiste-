// Google Analytics 4 Helper Functions

// Initialize GA4
export const initGA = (measurementId) => {
  if (typeof window === 'undefined') return;
  
  // Create script tag for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
    anonymize_ip: true, // GDPR compliance
  });
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', 'engagement', `${buttonName} - ${location}`);
};

// Track CTA clicks
export const trackCTAClick = (ctaName) => {
  trackEvent('cta_click', 'conversion', ctaName);
};

// Track outbound links
export const trackOutboundLink = (url) => {
  trackEvent('outbound_link', 'engagement', url);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

// Track file downloads
export const trackFileDownload = (fileName) => {
  trackEvent('file_download', 'engagement', fileName);
};

// Track video plays
export const trackVideoPlay = (videoName) => {
  trackEvent('video_play', 'engagement', videoName);
};

// Track search queries
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'engagement', searchTerm);
};

// Update consent mode
export const updateConsent = (analyticsEnabled, marketingEnabled) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('consent', 'update', {
    analytics_storage: analyticsEnabled ? 'granted' : 'denied',
    ad_storage: marketingEnabled ? 'granted' : 'denied',
  });
};

// Set user properties
export const setUserProperty = (propertyName, value) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('set', 'user_properties', {
    [propertyName]: value,
  });
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackCTAClick,
  trackOutboundLink,
  trackScrollDepth,
  trackFileDownload,
  trackVideoPlay,
  trackSearch,
  updateConsent,
  setUserProperty,
};
