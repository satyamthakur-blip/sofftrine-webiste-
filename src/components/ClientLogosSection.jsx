import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ClientLogosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Professional company placeholders - replace with actual SVG logos in production
  const companies = [
    'TechCorp',
    'DataFlow',
    'CloudNine',
    'SecureIT',
    'FinTech Pro',
    'HealthSync'
  ];

  return (
    <section className="relative py-6 md:py-10 lg:py-12 px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-slate-500 font-medium tracking-wide">
            TRUSTED BY LEADING ENTERPRISES
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
              }}
              className="flex items-center justify-center"
            >
              {/* Minimal text-based logo - replace with actual SVG logos */}
              <div className="text-slate-400 hover:text-slate-900 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation">
                <span className="text-xl md:text-2xl font-semibold tracking-tight">
                  {company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
