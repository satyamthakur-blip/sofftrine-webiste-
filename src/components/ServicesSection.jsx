import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Cpu, Database, Lock } from 'lucide-react';
import SectionLabel from './SectionLabel';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Server,
      title: 'Enterprise Software Development',
      description: 'Build scalable backend systems, APIs, and microservices architectures for mission-critical applications.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Deploy production ML pipelines, predictive models, and automation systems that reduce operational overhead.',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design and manage cloud environments on AWS, Azure, and GCP with infrastructure-as-code practices.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Implement zero-trust architectures, penetration testing, and compliance frameworks to protect critical assets.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Architect data warehouses, ETL pipelines, and real-time analytics platforms for data-driven decision making.',
    },
    {
      icon: Lock,
      title: 'DevOps & Automation',
      description: 'Optimize CI/CD workflows, containerization strategies, and deployment automation to accelerate delivery cycles.',
    },
  ];

  return (
    <section id="services" className="relative py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-white">
      {/* Gentle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-blue-50/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl">
            Enterprise technology solutions engineered for scale, security, and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFirstRow = index < 3;
            
            return (
              <Link to="/services" key={service.title} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group cursor-pointer relative bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full"
                >
                {/* Gradient accent on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:via-indigo-50/30 group-hover:to-purple-50/20 rounded-xl transition-all duration-500 -z-10"></div>
                
                {/* Minimal left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content wrapper with subtle hover effect */}
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  {/* Simple icon - no background */}
                  <div className="mb-5 relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Icon className={`w-8 h-8 stroke-[1.5] transition-all duration-500 relative z-10 ${
                      isFirstRow
                        ? 'text-slate-900 group-hover:text-blue-600'
                        : 'text-slate-700 group-hover:text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className={`text-xl mb-3 transition-colors duration-300 leading-tight ${
                    isFirstRow
                      ? 'font-semibold text-slate-900'
                      : 'font-semibold text-slate-800'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className="leading-[1.75] text-slate-600 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Minimal arrow indicator */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="w-8 h-px bg-slate-300 group-hover:bg-blue-600 group-hover:w-12 transition-all duration-300"></span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
