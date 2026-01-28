import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SectionLabel from './SectionLabel';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your typical engagement model?',
      answer: 'We work on fixed-scope projects, retained partnerships, and staff augmentation. Most clients start with a 2-week discovery phase to establish requirements, then move to either a fixed-price delivery or ongoing retainer. We prioritize long-term relationships over one-off projects.',
    },
    {
      question: 'How do you handle security and compliance?',
      answer: 'Security is embedded in every phase. We follow industry standards (SOC 2, ISO 27001, HIPAA where applicable), conduct regular security audits, implement zero-trust architectures, and maintain detailed audit trails. All code goes through security scanning before deployment.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We focus on proven enterprise technologies: AWS, Azure, GCP for cloud; Python, Node.js, Go for backend; PostgreSQL, MongoDB for databases; Kubernetes for orchestration; and modern frameworks for frontend. We choose tools based on your constraints, not trends.',
    },
    {
      question: 'Do you provide ongoing support after delivery?',
      answer: 'Yes. We offer managed services, 24/7 monitoring, incident response, and proactive maintenance. Most clients opt for a support retainer that includes SLA-backed response times, regular updates, and performance optimization.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'It depends on scope. A migration or integration project might take 8-16 weeks. Building a new platform from scratch typically requires 4-9 months. We provide detailed timelines after discovery and break large projects into phased deliverables with monthly releases.',
    },
    {
      question: 'What size companies do you work with?',
      answer: 'We primarily serve mid-market to enterprise clients (50-5000+ employees) with complex technical requirements. Our sweet spot is organizations undergoing digital transformation, scaling infrastructure, or replacing legacy systems.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white to-indigo-50/10"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-16 text-center"
        >
          <SectionLabel className="text-center">FAQ</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Common questions
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg p-4 md:p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span className="text-base md:text-lg font-semibold text-slate-900 pr-2 md:pr-4 leading-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <motion.div
                    initial={false}
                    className="text-slate-600 leading-relaxed md:leading-relaxed text-sm md:text-base mt-3 md:mt-4"
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 leading-[1.75] mt-4 pt-4 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center bg-slate-50 border border-slate-200 rounded-lg p-8"
        >
          <p className="text-slate-900 font-semibold mb-2 text-lg">Still have questions?</p>
          <p className="text-slate-600 mb-6">We're here to help. Get in touch with our team.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
