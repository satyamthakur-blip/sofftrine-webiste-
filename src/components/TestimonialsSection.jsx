import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechVentures Inc',
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=3b82f6&color=fff&size=128',
      content: 'Softtrine transformed our legacy infrastructure into a modern, scalable cloud-native system. Their expertise in AWS and DevOps practices cut our deployment time by 80%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Engineering',
      company: 'FinanceHub',
      image: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=6366f1&color=fff&size=128',
      content: 'The team\'s attention to security and compliance was exceptional. They helped us achieve SOC 2 certification while modernizing our entire tech stack.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      company: 'HealthTech Solutions',
      image: 'https://ui-avatars.com/api/?name=Emily+Watson&background=8b5cf6&color=fff&size=128',
      content: 'Working with Softtrine felt like having an extension of our own team. They delivered a HIPAA-compliant data platform that scaled seamlessly as we grew.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-6 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8 bg-slate-50">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it—here's what our clients say
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-10 lg:p-12 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-500/20 mb-4 md:mb-6" />
              
              {/* Rating stars */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 border-t border-slate-100">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-base md:text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-xs md:text-sm text-slate-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                </div>
              </div>

              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
