import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from './SectionLabel';
import { useCountUp } from '../hooks/useCountUp';

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '10+', label: 'Years of Experience', countTo: 10, suffix: '+' },
    { value: '50+', label: 'Enterprise Clients', countTo: 50, suffix: '+' },
    { value: '99.9%', label: 'Uptime Guarantee', countTo: 99.9, suffix: '%', decimals: 1 },
    { value: '24/7', label: 'Support Available', countTo: 0, suffix: '', isSpecial: true },
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'SaaS Platforms',
    'E-commerce',
    'Manufacturing',
    'Technology',
  ];

  return (
    <section className="relative py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-transparent to-slate-50/30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-50/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <SectionLabel className="text-slate-600 mb-4 md:mb-6">Trusted by enterprises</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Proven track record
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Delivering mission-critical systems for organizations across multiple industries.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-12 mb-12 md:mb-20">
          {stats.map((stat, index) => {
            const AnimatedStat = () => {
              const count = useCountUp(stat.countTo, 2000, isInView);
              
              if (stat.isSpecial) {
                return <span>24/7</span>;
              }
              
              return (
                <span>
                  {stat.decimals ? count.toFixed(stat.decimals) : count}{stat.suffix}
                </span>
              );
            };

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center group cursor-default relative bg-white border border-slate-200 rounded-xl p-4 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-500"
              >
                {/* Gradient accent on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 transition-all duration-300 group-hover:text-blue-600">
                  <AnimatedStat />
                </div>
                <div className="text-sm text-slate-600 mb-3">
                  {stat.label}
                </div>
                
                {/* Progress bar */}
                {!stat.isSpecial && (
                  <motion.div
                    className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: stat.decimals ? '99%' : '100%' } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.1 * index + 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-slate-200 pt-16"
        >
          <p className="text-sm text-slate-600 mb-8 text-center">
            INDUSTRIES WE SERVE
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + 0.05 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 text-sm hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
