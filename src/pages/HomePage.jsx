import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ApproachSection from '../components/ApproachSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import TrustSection from '../components/TrustSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ClientLogosSection from '../components/ClientLogosSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import SectionDivider from '../components/SectionDivider'
import WaveDivider from '../components/WaveDivider'
import SEOHead from '../components/SEOHead'
import StructuredData from '../components/StructuredData'

const HomePage = () => {
  return (
    <main id="main-content">
      <SEOHead 
        title="Softtrine - Software Development & IT Solutions"
        description="Transform your business with cutting-edge software development, cloud infrastructure, AI/ML solutions, and cybersecurity services. Expert team delivering scalable enterprise solutions."
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <HeroSection />
      <ClientLogosSection />
      <SectionDivider className="py-2 md:py-4" />
      <ServicesSection />
      <WaveDivider />
      <ApproachSection />
      <SectionDivider className="py-2 md:py-4" />
      <CaseStudiesSection />
      <TrustSection />
      <WaveDivider flip />
      <TestimonialsSection />
      <SectionDivider className="py-2 md:py-4" />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
