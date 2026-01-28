export const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    faqs: [
      {
        question: 'What makes Softtrine different from other IT consulting firms?',
        answer: 'We combine deep technical expertise with a partnership approach. Our team has hands-on experience implementing solutions at Fortune 500 companies and innovative startups. We don\'t just consult - we build, deploy, and support your solutions end-to-end.',
      },
      {
        question: 'What industries do you serve?',
        answer: 'We work across multiple industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are adaptable to industry-specific compliance requirements like HIPAA, PCI-DSS, SOC 2, and GDPR.',
      },
      {
        question: 'Do you work with startups or only enterprises?',
        answer: 'We serve both startups and enterprises. For startups, we offer scalable solutions that grow with you. For enterprises, we handle complex migrations, integrations, and transformations at scale.',
      },
      {
        question: 'What is your pricing model?',
        answer: 'We offer flexible engagement models including fixed-price projects, time and materials, and retainer arrangements. Each engagement is customized based on scope, timeline, and your specific needs. Contact us for a detailed quote.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    faqs: [
      {
        question: 'What cloud platforms do you support?',
        answer: 'We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform. We help you choose the right platform based on your specific requirements, existing infrastructure, and strategic goals.',
      },
      {
        question: 'Can you help migrate our legacy systems to the cloud?',
        answer: 'Yes! Cloud migration is one of our core services. We follow a proven 6-phase methodology: assessment, planning, design, migration, optimization, and ongoing management. We minimize downtime and ensure data integrity throughout the process.',
      },
      {
        question: 'Do you provide AI/ML implementation services?',
        answer: 'Absolutely. Our AI/ML team helps with everything from use case identification and data preparation to model development, deployment, and monitoring. We specialize in practical business applications of AI including predictive analytics, NLP, and computer vision.',
      },
      {
        question: 'What cybersecurity services do you offer?',
        answer: 'We provide comprehensive security solutions including: security assessments and audits, penetration testing, security architecture design, compliance implementation (SOC 2, ISO 27001, HIPAA), incident response planning, and managed security services.',
      },
      {
        question: 'Do you offer DevOps transformation services?',
        answer: 'Yes. We help organizations adopt DevOps practices including CI/CD pipeline implementation, infrastructure as code, containerization (Docker/Kubernetes), monitoring and observability, and team training.',
      },
    ],
  },
  {
    id: 'process',
    title: 'Process & Timeline',
    faqs: [
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. Small implementations can take 2-4 weeks, while enterprise transformations typically range from 3-12 months. We provide detailed timelines during the planning phase.',
      },
      {
        question: 'What is your project methodology?',
        answer: 'We follow an agile methodology with 2-week sprints. This allows for regular feedback, iterative development, and flexibility to adapt as requirements evolve. For larger projects, we use a hybrid approach combining agile execution with structured planning.',
      },
      {
        question: 'How involved do we need to be during the project?',
        answer: 'We recommend active stakeholder involvement, especially during discovery, design reviews, and UAT. Typically, this means weekly check-ins and sprint reviews. We adapt to your availability while ensuring alignment.',
      },
      {
        question: 'What happens after the project is delivered?',
        answer: 'We provide comprehensive documentation, knowledge transfer, and training. We also offer ongoing support through managed services, retainer arrangements, or on-demand consulting as needed.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    faqs: [
      {
        question: 'Do you provide ongoing support after implementation?',
        answer: 'Yes. We offer various support tiers including 24/7 monitoring, incident response, regular maintenance, security patching, performance optimization, and continuous improvement services.',
      },
      {
        question: 'What are your SLAs for support?',
        answer: 'Our standard SLA includes 99.9% uptime guarantee, <15 minute response time for critical issues, <2 hour response for high-priority issues, and <24 hour response for normal priority. Custom SLAs are available.',
      },
      {
        question: 'Can you take over support for systems built by other vendors?',
        answer: 'Yes. We frequently take over support and enhancement for systems built by other teams. We start with a comprehensive assessment, documentation review, and knowledge transfer before assuming responsibility.',
      },
      {
        question: 'Do you offer training for our internal teams?',
        answer: 'Absolutely. We provide customized training programs including hands-on workshops, documentation, best practices guides, and ongoing mentorship to ensure your team can effectively manage and evolve the solutions.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    faqs: [
      {
        question: 'How do you ensure data security?',
        answer: 'We implement defense-in-depth security including encryption at rest and in transit, network segmentation, identity and access management, regular security audits, penetration testing, and 24/7 monitoring.',
      },
      {
        question: 'Are you compliant with industry regulations?',
        answer: 'We help clients achieve and maintain compliance with SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, and other frameworks. Our team includes certified compliance professionals who stay current with evolving regulations.',
      },
      {
        question: 'What is your approach to data privacy?',
        answer: 'We follow privacy-by-design principles, implement data minimization, maintain strict access controls, and ensure compliance with GDPR, CCPA, and other privacy regulations. We sign NDAs and can accommodate specific data residency requirements.',
      },
      {
        question: 'Do you perform background checks on your team?',
        answer: 'Yes. All team members undergo comprehensive background checks. For sensitive projects, we can provide additional vetting and security clearances as required.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Details',
    faqs: [
      {
        question: 'What programming languages and technologies do you work with?',
        answer: 'Our team is proficient in: Python, JavaScript/TypeScript, Java, Go, .NET, React, Node.js, Kubernetes, Docker, Terraform, PostgreSQL, MongoDB, Redis, Kafka, Elasticsearch, and many more modern technologies.',
      },
      {
        question: 'Can you integrate with our existing systems?',
        answer: 'Yes. We specialize in system integration using APIs, microservices, event-driven architectures, and ETL processes. We work with legacy systems, modern cloud-native applications, and everything in between.',
      },
      {
        question: 'How do you handle data migration?',
        answer: 'We follow a rigorous process: data assessment and profiling, migration strategy development, data cleansing and transformation, validation and testing, phased migration with rollback plans, and post-migration verification.',
      },
      {
        question: 'Do you support hybrid cloud and multi-cloud architectures?',
        answer: 'Absolutely. We design and implement hybrid cloud solutions that span on-premises and cloud environments, as well as multi-cloud strategies that leverage the strengths of different cloud providers.',
      },
    ],
  },
];

export const getAllFaqs = () => {
  return faqCategories.reduce((acc, category) => {
    return [...acc, ...category.faqs.map(faq => ({ ...faq, category: category.title }))];
  }, []);
};

export const getFaqsByCategory = (categoryId) => {
  const category = faqCategories.find(cat => cat.id === categoryId);
  return category ? category.faqs : [];
};

export const searchFaqs = (query) => {
  const allFaqs = getAllFaqs();
  const lowerQuery = query.toLowerCase();
  return allFaqs.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) || 
    faq.answer.toLowerCase().includes(lowerQuery)
  );
};
