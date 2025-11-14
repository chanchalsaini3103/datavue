import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQ';
import ContactSection from './components/ContactSection';
import ClientReviews from './components/ClientReviews';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <TeamSection />
     
     
      
      <Testimonials />
       <FAQ />
        <ContactSection />
      {/* maybe a footer too */}
    </>
  );
}

export default App;
