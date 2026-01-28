import { useEffect, useState } from 'react';

// Detect if app is installed as PWA
export const useInstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (!installPrompt) return false;

    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      return true;
    }
    
    return false;
  };

  return { installPrompt, isInstalled, promptInstall };
};

// Detect network status
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get connection type if available
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      setConnectionType(connection?.effectiveType || 'unknown');

      const handleConnectionChange = () => {
        setConnectionType(connection?.effectiveType || 'unknown');
      };

      connection?.addEventListener('change', handleConnectionChange);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection?.removeEventListener('change', handleConnectionChange);
      };
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
};

// Add to home screen banner
export const useAddToHomeScreen = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { installPrompt, isInstalled } = useInstallPrompt();

  useEffect(() => {
    // Show banner if:
    // 1. App is not installed
    // 2. Install prompt is available
    // 3. User hasn't dismissed it recently
    const dismissed = localStorage.getItem('a2hs-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed, 10) : 0;
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    if (!isInstalled && installPrompt && (Date.now() - dismissedTime > sevenDays)) {
      setShowBanner(true);
    }
  }, [installPrompt, isInstalled]);

  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('a2hs-dismissed', Date.now().toString());
  };

  return { showBanner, dismissBanner, installPrompt };
};

// Haptic feedback (vibration)
export const useHapticFeedback = () => {
  const vibrate = (pattern = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  };

  const vibrateSuccess = () => vibrate([50, 50, 50]);
  const vibrateError = () => vibrate([100, 50, 100, 50, 100]);
  const vibrateLight = () => vibrate(10);
  const vibrateMedium = () => vibrate(50);
  const vibrateHeavy = () => vibrate(100);

  return {
    vibrate,
    vibrateSuccess,
    vibrateError,
    vibrateLight,
    vibrateMedium,
    vibrateHeavy,
  };
};

// Safe area insets for notched devices
export const useSafeArea = () => {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const getComputedSafeArea = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        top: parseInt(style.getPropertyValue('--sat') || '0', 10),
        bottom: parseInt(style.getPropertyValue('--sab') || '0', 10),
        left: parseInt(style.getPropertyValue('--sal') || '0', 10),
        right: parseInt(style.getPropertyValue('--sar') || '0', 10),
      };
    };

    setSafeArea(getComputedSafeArea());

    // Update on orientation change
    const handleResize = () => setSafeArea(getComputedSafeArea());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return safeArea;
};
