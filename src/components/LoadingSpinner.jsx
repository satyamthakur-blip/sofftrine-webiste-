import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-sm font-medium text-slate-600">Loading...</p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
