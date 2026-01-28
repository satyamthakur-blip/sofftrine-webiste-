import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionLabel from './SectionLabel';

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const caseStudies = [
    {
      title: 'Financial Services Platform',
      industry: 'Fintech',
      challenge: 'Legacy infrastructure causing 15-minute transaction delays',
      solution: 'Migrated to microservices architecture with event-driven processing',
      results: [
        'Transaction time reduced to <2 seconds',
        '99.99% uptime achieved',
        '$2M annual cost savings',
      ],
      tech: ['AWS', 'Kubernetes', 'PostgreSQL', 'Redis'],
      metric: '93%',
      metricLabel: 'Faster',
    },
    {
      title: 'Healthcare Data Platform',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance gaps and data silos across 50+ facilities',
      solution: 'Built unified data lake with zero-trust security architecture',
      results: [
        'HIPAA compliant data pipeline',
        '10x faster analytics queries',
        'Consolidated 12 legacy systems',
      ],
      tech: ['Azure', 'Databricks', 'Terraform', 'Snowflake'],
      metric: '10x',
      metricLabel: 'Performance',
    },
    {
      title: 'E-commerce ML Pipeline',
      industry: 'Retail',
      challenge: 'Manual fraud detection missing 40% of fraudulent transactions',
      solution: 'Real-time ML fraud detection with automated decision engine',
      results: [
        '95% fraud detection accuracy',
        '$8M fraud losses prevented annually',
        'Sub-100ms inference latency',
      ],
      tech: ['Python', 'TensorFlow', 'Apache Kafka', 'MongoDB'],
      metric: '95%',
      metricLabel: 'Accuracy',
    },
  ];

  return (
    <section className="relative py-6 md:py-10 lg:py-12 px-6 lg:px-8 bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-transparent to-slate-50/30"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <SectionLabel className="text-center">Case Studies</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Real results for real businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Selected examples of infrastructure and software projects we've delivered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white border border-slate-200 rounded-lg p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Industry Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-slate-400 uppercase tracking-widest">
                  {study.industry}
                </span>
                <div className="flex items-center gap-2 text-slate-900">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-2xl font-bold">{study.metric}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">{study.metricLabel} improvement</p>

              {/* Challenge */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Challenge</p>
                <p className="text-slate-600 leading-[1.75] text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Solution</p>
                <p className="text-slate-600 leading-[1.75] text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Results</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
