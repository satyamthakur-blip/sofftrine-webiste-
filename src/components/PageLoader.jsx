import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-slate-600 font-medium">Loading...</p>
      </motion.div>
    </div>
  );
};

export default PageLoader;
