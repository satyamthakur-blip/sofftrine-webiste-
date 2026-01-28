import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Tawk.to widget script
    // Replace YOUR_PROPERTY_ID with your actual Tawk.to property ID
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add script to document
    document.body.appendChild(script);
    
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LiveChat;
