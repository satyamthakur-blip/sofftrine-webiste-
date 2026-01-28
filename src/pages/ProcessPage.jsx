import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, ArrowRight, Target, Zap, Shield } from 'lucide-react';

const ProcessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const phases = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze existing systems, technical debt, and infrastructure constraints. This phase establishes clear requirements and identifies critical dependencies before any development begins.',
      activities: [
        'Stakeholder interviews and requirements gathering',
        'Technical infrastructure audit',
        'Security and compliance review',
        'Risk assessment and mitigation planning',
        'Budget and timeline estimation',
        'Technology stack recommendations'
      ],
      deliverables: [
        'Detailed project scope document',
        'Technical architecture proposal',
        'Implementation roadmap',
        'Resource allocation plan'
      ]
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'System design decisions are made with security, scalability, and maintainability as core principles. We document technical specifications and establish development workflows.',
      activities: [
        'High-level system architecture design',
        'Database schema and data modeling',
        'API and integration design',
        'Security architecture planning',
        'Infrastructure and deployment strategy',
        'Development workflow setup'
      ],
      deliverables: [
        'Technical specification documents',
        'Architecture diagrams and flowcharts',
        'Security and compliance framework',
        'Development environment setup'
      ]
    },
    {
      number: '03',
      title: 'Implementation & Delivery',
      description: 'Code is built incrementally with continuous testing and integration. Production deployments follow strict change management protocols to minimize risk.',
      activities: [
        'Agile development sprints (2-week cycles)',
        'Continuous integration and automated testing',
        'Code reviews and quality assurance',
        'Performance and load testing',
        'Security testing and vulnerability scanning',
        'Documentation and knowledge transfer'
      ],
      deliverables: [
        'Production-ready codebase',
        'Automated test suite',
        'Deployment pipelines',
        'Technical documentation',
        'Training materials'
      ]
    },
    {
      number: '04',
      title: 'Deployment & Launch',
      description: 'Controlled rollout to production with monitoring, validation, and immediate support to ensure smooth transition.',
      activities: [
        'Deployment strategy execution',
        'Production environment validation',
        'Performance monitoring setup',
        'User acceptance testing',
        'Rollback procedures preparation',
        'Post-launch support'
      ],
      deliverables: [
        'Deployed production system',
        'Monitoring dashboards',
        'Incident response procedures',
        'Launch report and metrics'
      ]
    },
    {
      number: '05',
      title: 'Support & Optimization',
      description: 'Continuous monitoring, maintenance, and iterative improvements based on real-world usage and feedback.',
      activities: [
        '24/7 production monitoring',
        'Performance optimization',
        'Bug fixes and patches',
        'Feature enhancements',
        'Security updates',
        'Scalability improvements'
      ],
      deliverables: [
        'Monthly performance reports',
        'Regular security updates',
        'Feature enhancement releases',
        'SLA compliance reports'
      ]
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Clear Communication',
      description: 'Regular status updates, transparent reporting, and collaborative decision-making throughout the project lifecycle.'
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Iterative development with 2-week sprints, allowing for flexibility and continuous feedback integration.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing, code reviews, and security scanning at every stage to ensure enterprise-grade quality.'
    }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Our Process</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
              How we work
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured engineering process focused on reducing risk and delivering reliable systems that scale with your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Principles */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Core principles</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every project is guided by these fundamental principles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Phases */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top hidden lg:block"
          />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index + 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 * index + 0.7 }}
                  className="absolute left-[1.875rem] top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-500 hidden lg:block z-10"
                />

                <div className="lg:ml-20 bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-bold text-slate-200">{phase.number}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{phase.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center bg-slate-900 rounded-2xl p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized plan for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Schedule a discovery call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default ProcessPage;
