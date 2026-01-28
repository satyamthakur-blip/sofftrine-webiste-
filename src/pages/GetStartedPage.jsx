import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Calendar, Users, FileText } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const GetStartedPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to contact page with form data
    navigate('/contact', { state: { fromGetStarted: true, projectData: formData } });
  };

  const steps = [
    { number: 1, title: 'Project Details', icon: FileText },
    { number: 2, title: 'Your Information', icon: Users },
    { number: 3, title: 'Review & Submit', icon: Calendar }
  ];

  return (
    <main id="main-content" className="min-h-screen bg-white pt-24">
      <SEOHead 
        title="Get Started - Softtrine | Start Your Project Today"
        description="Begin your digital transformation journey with Softtrine. Tell us about your project and get a customized solution plan from our expert team."
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Let's get started
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us about your project and we'll create a customized plan to help you succeed.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 -z-10">
              <div 
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.number} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step >= s.number 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border-2 border-slate-200 text-slate-400'
                    }`}
                  >
                    {step > s.number ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${
                    step >= s.number ? 'text-slate-900' : 'text-slate-400'
                  }`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8">
          {/* Step 1: Project Details */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  What type of project are you looking for? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Software Development', 'Cloud Infrastructure', 'AI/ML Solutions', 'Cybersecurity', 'Data Engineering', 'DevOps'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.projectType === type
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  What's your budget range? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.budget === budget
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  When do you need it completed? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['ASAP', 'Short Term', 'Medium Term', 'Long Term'].map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.timeline === timeline
                          ? 'border-blue-600 bg-blue-50 text-blue-900'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Your Information */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project goals, challenges, and requirements..."
                ></textarea>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Review your information</h3>
              
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="text-sm font-semibold text-slate-600 mb-2">Project Type</h4>
                  <p className="text-slate-900">{formData.projectType}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="text-sm font-semibold text-slate-600 mb-2">Budget Range</h4>
                  <p className="text-slate-900">{formData.budget}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="text-sm font-semibold text-slate-600 mb-2">Timeline</h4>
                  <p className="text-slate-900">{formData.timeline}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="text-sm font-semibold text-slate-600 mb-2">Contact Information</h4>
                  <p className="text-slate-900">{formData.name} ({formData.email})</p>
                  <p className="text-slate-600">{formData.company}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="text-sm font-semibold text-slate-600 mb-2">Project Description</h4>
                  <p className="text-slate-700">{formData.description}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-900">
                  <strong>What happens next?</strong> Our team will review your submission and get back to you within 24 hours to schedule a discovery call.
                </p>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                step === 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Previous
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Submit Request
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default GetStartedPage;
