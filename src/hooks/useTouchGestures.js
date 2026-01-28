import { useEffect } from 'react';

const useTouchGestures = (ref, options = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    threshold = 50, // Minimum distance for swipe
    restraint = 100, // Maximum perpendicular distance
    allowedTime = 500, // Maximum time for swipe
  } = options;

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e) => {
      const touch = e.changedTouches[0];
      touchStartX = touch.pageX;
      touchStartY = touch.pageY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const touchEndX = touch.pageX;
      const touchEndY = touch.pageY;
      const touchEndTime = Date.now();

      const elapsedTime = touchEndTime - touchStartTime;
      if (elapsedTime > allowedTime) return;

      const distanceX = touchEndX - touchStartX;
      const distanceY = touchEndY - touchStartY;
      const absDistanceX = Math.abs(distanceX);
      const absDistanceY = Math.abs(distanceY);

      // Horizontal swipe
      if (absDistanceX >= threshold && absDistanceY <= restraint) {
        if (distanceX < 0) {
          onSwipeLeft?.(e);
        } else {
          onSwipeRight?.(e);
        }
      }
      // Vertical swipe
      else if (absDistanceY >= threshold && absDistanceX <= restraint) {
        if (distanceY < 0) {
          onSwipeUp?.(e);
        } else {
          onSwipeDown?.(e);
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold, restraint, allowedTime]);
};

export default useTouchGestures;

// Pull to refresh hook
export const usePullToRefresh = (onRefresh) => {
  useEffect(() => {
    let startY = 0;
    let currentY = 0;
    let refreshing = false;

    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].pageY;
      }
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && !refreshing) {
        currentY = e.touches[0].pageY;
        const pullDistance = currentY - startY;

        if (pullDistance > 100) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = async () => {
      if (window.scrollY === 0 && !refreshing) {
        const pullDistance = currentY - startY;

        if (pullDistance > 100) {
          refreshing = true;
          await onRefresh?.();
          refreshing = false;
        }
      }
      startY = 0;
      currentY = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onRefresh]);
};

// Long press hook
export const useLongPress = (callback, ms = 500) => {
  let timeout;

  const handleTouchStart = () => {
    timeout = setTimeout(() => {
      callback?.();
    }, ms);
  };

  const handleTouchEnd = () => {
    clearTimeout(timeout);
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchEnd, // Cancel on move
  };
};
