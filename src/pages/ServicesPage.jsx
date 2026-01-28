import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Cpu, Database, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Server,
      title: 'Enterprise Software Development',
      description: 'Build scalable backend systems, APIs, and microservices architectures for mission-critical applications.',
      features: [
        'Custom enterprise application development',
        'Microservices architecture design',
        'API development and integration',
        'Legacy system modernization',
        'Performance optimization',
        'Scalability engineering'
      ],
      technologies: ['Node.js', 'Python', 'Java', 'Go', '.NET', 'GraphQL']
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Deploy production ML pipelines, predictive models, and automation systems that reduce operational overhead.',
      features: [
        'Custom ML model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'ML ops and model deployment',
        'AI-powered automation'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'MLflow', 'Kubernetes', 'Python']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design and manage cloud environments on AWS, Azure, and GCP with infrastructure-as-code practices.',
      features: [
        'Cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Multi-cloud architecture',
        'Cost optimization',
        'Disaster recovery planning',
        'Cloud security hardening'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation', 'Docker']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Implement zero-trust architectures, penetration testing, and compliance frameworks to protect critical assets.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Zero-trust architecture',
        'Compliance management (SOC 2, HIPAA)',
        'Incident response planning',
        'Security training'
      ],
      technologies: ['SIEM', 'EDR', 'WAF', 'IDS/IPS', 'Vault', 'CrowdStrike']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Architect data warehouses, ETL pipelines, and real-time analytics platforms for data-driven decision making.',
      features: [
        'Data warehouse design',
        'ETL/ELT pipeline development',
        'Real-time data processing',
        'Data lake architecture',
        'Business intelligence solutions',
        'Data quality management'
      ],
      technologies: ['Snowflake', 'Databricks', 'Apache Spark', 'Airflow', 'dbt', 'PostgreSQL']
    },
    {
      icon: Lock,
      title: 'DevOps & Automation',
      description: 'Optimize CI/CD workflows, containerization strategies, and deployment automation to accelerate delivery cycles.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and observability',
        'GitOps implementation',
        'Release management'
      ],
      technologies: ['Kubernetes', 'Jenkins', 'GitLab CI', 'Ansible', 'Prometheus', 'Grafana']
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white pt-24">
      <SEOHead 
        title="Our Services - Softtrine | Software Development & IT Solutions"
        description="Explore our comprehensive IT services: custom software development, cloud infrastructure, AI/ML solutions, cybersecurity, data engineering, and DevOps consulting."
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
              Enterprise technology solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT services engineered for scale, security, and performance. We partner with enterprises to deliver mission-critical systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 rounded-3xl border-2 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'border-blue-400 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 shadow-2xl scale-[1.02]' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Content */}
                <div>
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg"
                    animate={{ 
                      rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white stroke-[1.5]" />
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Technologies */}
                <div>
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100 shadow-lg">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Tech Stack</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="group/tech relative px-4 py-2.5 bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-lg text-slate-700 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:scale-110 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 cursor-default"
                          >
                            <span className="relative z-10">{tech}</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-indigo-100/0 group-hover/tech:from-blue-100/50 group-hover/tech:to-indigo-100/50 rounded-lg transition-all duration-300"></div>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center bg-slate-900 rounded-2xl p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your technology infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default ServicesPage;
