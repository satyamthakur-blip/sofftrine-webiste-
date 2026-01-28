import { Linkedin, Twitter, Github, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative py-16 px-6 lg:px-8 bg-slate-900 text-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-950/8 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-10 md:mb-12 pb-10 md:pb-12 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Stay Updated</h3>
            <p className="text-slate-400 mb-5 md:mb-6 text-sm md:text-base">
              Subscribe to our newsletter for the latest insights on technology and innovation.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 md:py-3.5 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-300 text-sm md:text-base min-h-[58px]"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 md:py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm md:text-base min-h-[58px] w-full sm:w-auto touch-manipulation"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="mb-3">
              <Logo className="[&_span]:text-white" />
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Softtrine. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our GitHub projects"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@softtrine.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors duration-200"
              aria-label="Email us at hello@softtrine.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
