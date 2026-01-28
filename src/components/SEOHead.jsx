import { useEffect } from 'react';

const SEOHead = ({ 
  title = "Softtrine - Software Development & IT Solutions",
  description = "Transform your business with cutting-edge software development, cloud infrastructure, AI/ML solutions, and cybersecurity services. Expert team delivering scalable enterprise solutions.",
  keywords = "software development, cloud infrastructure, AI solutions, cybersecurity, data engineering, DevOps, enterprise software, IT consulting",
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', window.location.href, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Softtrine');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  }, [title, description, keywords, ogImage, ogType, twitterCard]);

  return null;
};

export default SEOHead;
