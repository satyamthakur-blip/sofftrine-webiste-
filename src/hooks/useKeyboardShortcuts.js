import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../components/Toast';

const useKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Check if user is typing in an input/textarea
      const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(
        document.activeElement.tagName
      );

      // Cmd/Ctrl + K for search (already handled by SearchModal)
      // Skip other shortcuts when typing
      if (isTyping && e.key !== 'Escape') return;

      // Keyboard shortcuts with Alt key
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            e.preventDefault();
            navigate('/');
            toast.info('Navigated to Home');
            break;
          case 's':
            e.preventDefault();
            navigate('/services');
            toast.info('Navigated to Services');
            break;
          case 'b':
            e.preventDefault();
            navigate('/blog');
            toast.info('Navigated to Blog');
            break;
          case 'c':
            e.preventDefault();
            navigate('/contact');
            toast.info('Navigated to Contact');
            break;
          case 'a':
            e.preventDefault();
            navigate('/about');
            toast.info('Navigated to About');
            break;
          case 'f':
            e.preventDefault();
            navigate('/faq');
            toast.info('Navigated to FAQ');
            break;
          default:
            break;
        }
      }

      // Escape to close modals/clear focus
      if (e.key === 'Escape') {
        document.activeElement?.blur();
      }

      // Question mark to show shortcuts help
      if (e.key === '?' && !isTyping) {
        e.preventDefault();
        showShortcutsHelp();
      }

      // Arrow keys for navigation (when not typing)
      if (!isTyping) {
        if (e.key === 'ArrowLeft' && e.shiftKey) {
          e.preventDefault();
          window.history.back();
        }
        if (e.key === 'ArrowRight' && e.shiftKey) {
          e.preventDefault();
          window.history.forward();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, toast]);

  const showShortcutsHelp = () => {
    const shortcuts = `
Keyboard Shortcuts:
━━━━━━━━━━━━━━━━━━
Navigation:
  Alt + H → Home
  Alt + S → Services  
  Alt + B → Blog
  Alt + C → Contact
  Alt + A → About
  Alt + F → FAQ

Search:
  Cmd/Ctrl + K → Open Search

Navigation:
  Shift + ← → Back
  Shift + → → Forward
  Esc → Clear focus/Close modals

Help:
  ? → Show this help
    `.trim();

    alert(shortcuts);
  };
};

export default useKeyboardShortcuts;
