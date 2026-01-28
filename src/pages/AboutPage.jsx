import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former CTO at Fortune 500 tech company. 15+ years in enterprise software.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      bio: 'Cloud architect with expertise in scalable infrastructure. Ex-Google engineer.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI/ML Lead',
      bio: 'PhD in Machine Learning. Published researcher and industry innovator.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
    {
      name: 'David Park',
      role: 'Security Director',
      bio: 'Cybersecurity expert with CISSP and CEH certifications. Former government consultant.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is our success. We build long-term partnerships.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation-Driven',
      description: 'Leveraging cutting-edge technology to solve complex problems.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality Obsessed',
      description: 'Excellence in every line of code, every deployment, every interaction.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Mindset',
      description: 'Serving clients worldwide with 24/7 support and local expertise.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Uptime SLA' },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white pt-24">
      <SEOHead 
        title="About Us - Softtrine | Our Story & Team"
        description="Learn about Softtrine's mission to deliver world-class IT solutions. Meet our expert team and discover our values."
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">About Softtrine</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
            Building the Future of Enterprise Technology
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're a team of passionate engineers, designers, and strategists dedicated to transforming businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-slate-600">
              <p>
                Founded in 2015, Softtrine emerged from a simple observation: enterprises needed technology partners who truly understood their challenges, not just vendors selling products.
              </p>
              <p>
                Our founders, seasoned engineers from leading tech companies, came together with a vision to build a consultancy that combined technical excellence with genuine partnership. We started with a single client and a commitment to quality over quantity.
              </p>
              <p>
                Today, we serve Fortune 500 companies and fast-growing startups alike, delivering solutions that drive real business value. Our team has grown, but our principles remain unchanged: deliver excellence, build for the long term, and always put our clients first.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced professionals committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your technology infrastructure and drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
