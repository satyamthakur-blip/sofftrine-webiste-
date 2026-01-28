import { useState, useEffect } from 'react';

let announcements = [];
let listeners = [];

export const announce = (message, priority = 'polite') => {
  const announcement = {
    message,
    priority,
    id: Date.now() + Math.random(),
    timestamp: Date.now(),
  };
  
  announcements = [...announcements, announcement];
  listeners.forEach(listener => listener(announcements));
  
  // Auto-clear after 3 seconds
  setTimeout(() => {
    announcements = announcements.filter(a => a.id !== announcement.id);
    listeners.forEach(listener => listener(announcements));
  }, 3000);
};

export const useAnnouncer = () => {
  const [currentAnnouncements, setCurrentAnnouncements] = useState(announcements);

  useEffect(() => {
    const listener = (newAnnouncements) => {
      setCurrentAnnouncements(newAnnouncements);
    };
    
    listeners.push(listener);
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return currentAnnouncements;
};

// Announce navigation changes
export const announceNavigation = (pageName) => {
  announce(`Navigated to ${pageName}`, 'assertive');
};

// Announce content loading
export const announceLoading = (isLoading, content = 'content') => {
  if (isLoading) {
    announce(`Loading ${content}...`, 'polite');
  } else {
    announce(`${content} loaded`, 'polite');
  }
};

// Announce form status
export const announceFormStatus = (status, message) => {
  const priority = status === 'error' ? 'assertive' : 'polite';
  announce(message, priority);
};

// Announce search results
export const announceSearchResults = (count, query) => {
  if (count === 0) {
    announce(`No results found for "${query}"`, 'polite');
  } else if (count === 1) {
    announce(`1 result found for "${query}"`, 'polite');
  } else {
    announce(`${count} results found for "${query}"`, 'polite');
  }
};
