import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from './SectionLabel';

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze existing systems, technical debt, and infrastructure constraints. This phase establishes clear requirements and identifies critical dependencies before any development begins.',
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'System design decisions are made with security, scalability, and maintainability as core principles. We document technical specifications and establish development workflows.',
    },
    {
      number: '03',
      title: 'Implementation & Delivery',
      description: 'Code is built incrementally with continuous testing and integration. Production deployments follow strict change management protocols to minimize risk.',
    },
  ];

  return (
    <section id="process" className="relative py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-slate-50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20"
        >
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Our approach
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl">
            Structured engineering process focused on reducing risk and delivering reliable systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Progress Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top hidden md:block"
          />
          
          <div className="space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * index + 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-4 md:gap-8 lg:gap-12 pb-10 md:pb-16 border-b border-slate-200 last:border-0 relative"
              >
                {/* Animated Circle on Timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 * index + 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-[1.375rem] md:left-[1.875rem] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-4 border-blue-500 hidden md:block z-10"
                />
                
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent leading-none cursor-default hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
