import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
          </div>
          
          <p className="text-slate-600 mb-8">Last updated: January 27, 2026</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing and using Softtrine's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
              <p className="text-slate-700 leading-relaxed">
                Softtrine provides IT consulting, software development, cloud infrastructure, DevOps, security, and data engineering services. The specific scope of services will be defined in separate service agreements or statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Obligations</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to any part of our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Our Content</h3>
              <p className="text-slate-700 leading-relaxed">
                All content on our website, including text, graphics, logos, and software, is the property of Softtrine or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">Client Work</h3>
              <p className="text-slate-700 leading-relaxed">
                Ownership of deliverables and intellectual property created as part of our services will be specified in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur interest charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
              <p className="text-slate-700 leading-relaxed">
                Both parties agree to keep confidential all non-public information disclosed during the engagement. Detailed confidentiality terms will be outlined in separate Non-Disclosure Agreements (NDAs) or service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-slate-700 leading-relaxed">
                We strive to provide high-quality services, but we make no warranties, express or implied, regarding the accuracy, reliability, or completeness of our services. Our services are provided "as is" and "as available" without warranty of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed">
                To the maximum extent permitted by law, Softtrine shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify and hold harmless Softtrine from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                Either party may terminate services with written notice as specified in the service agreement. We reserve the right to suspend or terminate your access to our services immediately if you breach these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms of Service shall be governed by the laws of the State of California, USA. Any disputes shall be resolved through binding arbitration in San Francisco, California, except that either party may seek injunctive relief in court.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-lg">
                <p className="text-slate-700"><strong>Email:</strong> legal@softtrine.com</p>
                <p className="text-slate-700 mt-2"><strong>Address:</strong> Softtrine Technologies, 123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
