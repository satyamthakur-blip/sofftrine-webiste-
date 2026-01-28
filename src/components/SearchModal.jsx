import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const services = [
  { title: 'Software Development', path: '/services', type: 'service' },
  { title: 'Cloud Infrastructure', path: '/services', type: 'service' },
  { title: 'AI & Machine Learning', path: '/services', type: 'service' },
  { title: 'Cybersecurity', path: '/services', type: 'service' },
  { title: 'DevOps & Automation', path: '/services', type: 'service' },
  { title: 'Data Engineering', path: '/services', type: 'service' },
];

const pages = [
  { title: 'Home', path: '/', type: 'page' },
  { title: 'Services', path: '/services', type: 'page' },
  { title: 'Process', path: '/process', type: 'page' },
  { title: 'Blog', path: '/blog', type: 'page' },
  { title: 'Contact', path: '/contact', type: 'page' },
  { title: 'Get Started', path: '/get-started', type: 'page' },
];

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Search logic
  const performSearch = useCallback((searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const allItems = [
      ...pages,
      ...services,
      ...blogPosts.map(post => ({
        title: post.title,
        path: `/blog/${post.slug}`,
        type: 'blog',
        excerpt: post.excerpt,
        category: post.category,
      })),
    ];

    const filtered = allItems.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(lowerQuery)) ||
      (item.category && item.category.toLowerCase().includes(lowerQuery))
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
  }, []);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Search on query change
  useEffect(() => {
    performSearch(query);
  }, [query, performSearch]);

  // Navigate and close
  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  // Close modal
  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'blog':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'service':
        return <Briefcase className="w-5 h-5 text-purple-600" />;
      default:
        return <ArrowRight className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
        <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-xs">
          {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}K
        </kbd>
      </button>

      {/* Mobile Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
        aria-label="Open search"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[9999] px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for pages, services, or blog posts..."
                    className="flex-1 outline-none text-slate-900 placeholder:text-slate-400"
                    autoFocus
                  />
                  <button
                    onClick={handleClose}
                    className="p-1 hover:bg-slate-100 rounded transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="py-2">
                      {results.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSelect(result.path)}
                          className="w-full flex items-start gap-4 px-6 py-3 hover:bg-slate-50 transition-colors text-left group"
                        >
                          <div className="mt-1">{getIcon(result.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {result.title}
                              </h3>
                              {result.type && (
                                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
                                  {result.type}
                                </span>
                              )}
                            </div>
                            {result.excerpt && (
                              <p className="text-sm text-slate-600 line-clamp-1">
                                {result.excerpt}
                              </p>
                            )}
                            {result.category && (
                              <p className="text-xs text-slate-500 mt-1">
                                {result.category}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="px-6 py-12 text-center text-slate-500">
                      <Search className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                      <p>No results found for "{query}"</p>
                      <p className="text-sm mt-2">Try searching for services, blog posts, or pages</p>
                    </div>
                  ) : (
                    <div className="px-6 py-12 text-center text-slate-500">
                      <Search className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                      <p>Start typing to search...</p>
                      <p className="text-sm mt-2">Search across all pages, services, and blog posts</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-slate-300 rounded">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-slate-300 rounded">Enter</kbd>
                      Select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-white border border-slate-300 rounded">Esc</kbd>
                    Close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchModal;
