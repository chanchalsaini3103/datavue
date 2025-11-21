import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import SupportSection from './components/SupportSection';
import WorkflowZigZag from './components/WorkflowZigZag';
import "aos/dist/aos.css";
import AOS from "aos";
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <WorkflowZigZag />
      <PricingSection />
      <Testimonials />
      <SupportSection />
    </>
  );
}

export default App;
