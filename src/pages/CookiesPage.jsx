import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Cookie Policy</h1>
          </div>
          
          <p className="text-slate-600 mb-8">Last updated: January 27, 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                Softtrine uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. Cookies help us improve our website and deliver a better, more personalized service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Essential Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Analytics Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our website's functionality and content. These cookies collect information anonymously.
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-2">
                <li>Google Analytics: Tracks user behavior and site performance</li>
                <li>Session duration and page views</li>
                <li>Traffic sources and navigation patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Functionality Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Marketing Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                These cookies track your online activity to help us deliver more relevant advertising or limit how many times you see an ad. They remember that you visited our website and share this information with advertising partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We may use third-party services that also use cookies. These include:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>LinkedIn:</strong> Social media integration and marketing</li>
                <li><strong>Twitter:</strong> Social media integration</li>
                <li><strong>Content Delivery Networks (CDNs):</strong> Performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookie Duration</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Session Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                Temporary cookies that expire when you close your browser. They are used to maintain your session and remember your actions during a single browsing session.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Persistent Cookies</h3>
              <p className="text-slate-700 leading-relaxed">
                These cookies remain on your device for a set period (ranging from days to years) and are activated each time you visit our website. They remember your preferences and actions across multiple sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. How to Control Cookies</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Browser Settings</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>Delete all cookies from your browser</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Clear cookies when you close your browser</li>
              </ul>

              <div className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-slate-700 mb-2"><strong>Browser-specific instructions:</strong></p>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Options → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy → Cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Opt-Out Tools</h3>
              <p className="text-slate-700 leading-relaxed">
                For analytics cookies, you can opt out using these tools:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-2">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Network Advertising Initiative opt-out page</li>
                <li>Digital Advertising Alliance opt-out page</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                If you disable or reject cookies, some parts of our website may become inaccessible or not function properly. You may not be able to use certain features or receive personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Please review this page periodically for the latest information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-lg">
                <p className="text-slate-700"><strong>Email:</strong> privacy@softtrine.com</p>
                <p className="text-slate-700 mt-2"><strong>Address:</strong> Softtrine Technologies, 123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPage;
