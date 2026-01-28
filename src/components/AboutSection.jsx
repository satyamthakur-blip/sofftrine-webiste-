import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from './SectionLabel';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-8 bg-slate-50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Built on engineering principles
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Founder Bio - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                Sanjay Vitkare
              </h3>
              <p className="text-lg text-slate-500 mb-6">
                Founder & Principal Engineer
              </p>
              <div className="h-px w-16 bg-slate-300 mx-auto"></div>
            </div>

            <div className="space-y-6 text-slate-600 leading-[1.75]">
              <p className="text-xl text-slate-900 text-center">
                Softtrine was founded on a principle: build systems that work, last, and scale.
              </p>
              
              <p>
                With over a decade of experience architecting enterprise infrastructure 
                and leading technical teams, I've seen firsthand what separates resilient 
                systems from fragile ones. The difference isn't tools or frameworks—it's 
                discipline, clarity, and engineering rigor.
              </p>
              
              <p>
                We don't chase trends or over-engineer solutions. Every decision is 
                evaluated against real constraints: performance, security, maintainability, 
                and total cost of ownership. Our clients trust us because we treat their 
                systems like our own.
              </p>
              
              <p>
                Before founding Softtrine, I led infrastructure teams at global enterprises 
                across finance, healthcare, and SaaS—shipping mission-critical systems that 
                process billions of transactions and serve millions of users.
              </p>

              <p className="text-slate-500 text-center pt-6 border-t border-slate-200 italic">
                Engineering is about making deliberate trade-offs. We help you make the right ones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
