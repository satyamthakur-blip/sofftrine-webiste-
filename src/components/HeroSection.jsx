import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90dvh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-32 md:pb-20">
      {/* Layered gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/40 via-transparent to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-100/10 via-transparent to-transparent"></div>
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 w-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold sm:leading-[1.15] md:leading-[1.15] lg:leading-[1.15] text-slate-900 mb-4 sm:mb-5 md:mb-6"
              role="heading"
              aria-level="1"
            >
              Building secure,{' '}
              <span className="relative inline-block">
                <span className="text-gradient relative z-10">scalable</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer z-0"></span>
              </span>, and intelligent IT solutions.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-xl"
            >
              We partner with enterprises to engineer software and infrastructure
              that drive efficiency and growth.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white text-base font-semibold rounded-xl hover:bg-slate-800 active:scale-95 hover:md:scale-105 hover:shadow-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-slate-900/50 min-h-[58px] w-full sm:w-auto touch-manipulation"
                aria-label="Navigate to contact page"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 text-base font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-900 active:scale-95 hover:md:scale-105 hover:shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-slate-300 min-h-[58px] w-full sm:w-auto touch-manipulation"
                aria-label="View our services"
              >
                Our services
              </Link>
            </motion.div>

            {/* Trust Indicators - Hidden on mobile to reduce clutter */}
            <motion.div variants={itemVariants} className="hidden md:flex flex-wrap items-center gap-6 lg:gap-8 pt-6 md:pt-8 border-t border-slate-200 mt-8 md:mt-10 lg:mt-12">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5" role="img" aria-label="Client avatars">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white"></div>
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white"></div>
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 border-2 border-white"></div>
                </div>
                <p className="text-[10px] md:text-sm text-slate-600 font-medium">Trusted by 50+ enterprises</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 md:w-5 h-3.5 md:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-[10px] md:text-sm text-slate-600 font-medium">10+ years delivering excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Visual Anchor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Radial gradient orbs with floating animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Primary gradient orb */}
                <motion.div 
                  animate={{ 
                    y: [-10, 10, -10],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute w-3/4 h-3/4 bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-purple-400/30 rounded-full blur-3xl"
                ></motion.div>
                
                {/* Secondary gradient orb */}
                <motion.div 
                  animate={{ 
                    y: [10, -10, 10],
                    x: [-5, 5, -5],
                    scale: [1, 1.08, 1]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute w-2/3 h-2/3 bg-gradient-to-tr from-cyan-300/20 via-blue-300/15 to-indigo-300/20 rounded-full blur-2xl translate-x-8 -translate-y-8"
                ></motion.div>
                
                {/* Accent orb */}
                <motion.div 
                  animate={{ 
                    x: [5, -5, 5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute w-1/2 h-1/2 bg-gradient-to-bl from-slate-300/25 via-blue-200/15 to-transparent rounded-full blur-xl -translate-x-6 translate-y-6"
                ></motion.div>
              </div>

              {/* Geometric structure overlay with breathing animation - Hidden on mobile */}
              <div className="absolute inset-0 hidden lg:flex items-center justify-center">
                <motion.svg 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full opacity-20" 
                  viewBox="0 0 400 400" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-slate-300" />
                  <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1.5" className="text-slate-300" />
                  
                  {/* Concentric circles with pulse */}
                  <motion.circle 
                    animate={{ r: [120, 128, 120], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" 
                  />
                  <motion.circle 
                    animate={{ r: [80, 85, 80], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500" 
                  />
                  <motion.circle 
                    animate={{ r: [40, 44, 40], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    cx="200" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-500" 
                  />
                  
                  {/* Corner accents with glow */}
                  <motion.circle 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    cx="200" cy="80" r="5" fill="currentColor" className="text-blue-500" 
                  />
                  <motion.circle 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    cx="320" cy="200" r="5" fill="currentColor" className="text-indigo-500" 
                  />
                  <motion.circle 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    cx="200" cy="320" r="5" fill="currentColor" className="text-purple-500" 
                  />
                  <motion.circle 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    cx="80" cy="200" r="5" fill="currentColor" className="text-blue-500" 
                  />
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
