import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitle = {
  '/': 'Softtrine - Enterprise IT Solutions',
  '/services': 'Our Services - Softtrine',
  '/process': 'Our Process - Softtrine',
  '/contact': 'Contact Us - Softtrine',
  '/get-started': 'Get Started - Softtrine',
};

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitle[location.pathname] || 'Softtrine - Enterprise IT Solutions';
    document.title = title;
  }, [location]);
};

export default usePageTitle;
