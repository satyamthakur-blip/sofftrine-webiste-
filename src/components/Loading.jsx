import { motion } from 'framer-motion';

// Spinner Loading Component
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className={`${sizes[size]} ${className} border-blue-600 border-t-transparent rounded-full animate-spin`} />
  );
};

// Full Page Loader
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <Spinner size="lg" className="mx-auto mb-4" />
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

// Skeleton Loader for Cards
export const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-slate-200 rounded-xl h-64 mb-4" />
      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-slate-200 rounded w-1/2" />
    </div>
  );
};

// Skeleton Loader for Service Cards
export const SkeletonServiceCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border border-slate-200 rounded-2xl p-8 animate-pulse"
    >
      <div className="w-16 h-16 bg-slate-200 rounded-xl mb-6" />
      <div className="h-6 bg-slate-200 rounded w-3/4 mb-4" />
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-4 bg-slate-200 rounded w-5/6" />
        <div className="h-4 bg-slate-200 rounded w-4/6" />
      </div>
      <div className="h-10 bg-slate-200 rounded w-1/3" />
    </motion.div>
  );
};

// Skeleton Loader for Text Content
export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-slate-200 rounded" 
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
};

// Loading Button
export const LoadingButton = ({ children, loading, className = '', ...props }) => {
  return (
    <button 
      {...props} 
      disabled={loading}
      className={`relative ${className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner size="sm" className="border-white border-t-transparent" />
        </span>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
    </button>
  );
};

// Progress Bar
export const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
      />
    </div>
  );
};

export default {
  Spinner,
  PageLoader,
  SkeletonCard,
  SkeletonServiceCard,
  SkeletonText,
  LoadingButton,
  ProgressBar
};
