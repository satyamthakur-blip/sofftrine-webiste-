import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-8 md:py-12 lg:py-16 px-6 lg:px-16 min-h-[30vh] md:min-h-[35vh] lg:min-h-[40vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
            Let's build something
            <br />
            <span className="text-gradient relative inline-block">
              <span className="relative z-10">extraordinary</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
            </span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Ready to take your technology to the next level?
          </p>
          <Link
            to="/get-started"
            className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-slate-900 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-slate-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden min-h-[58px]"
          >
            <span className="relative z-10">Get started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
