import GridLines from "@/components/common/GridLines";
import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";
import FaqSection from "@/components/Home/FaqSection";
import HeroSection from "@/components/Home/HeroSection";
import InfoSection from "@/components/Home/InfoSection";
import OfferSection from "@/components/Home/OfferSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ServicesSection from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="bg-dark-bg relative">
        <GridLines />
        <InfoSection />
        <PortfolioSection />
        <OfferSection />
      </div>
      <AboutSection />
      <div className="bg-dark-bg">
        <ServicesSection />
        <FaqSection />
      </div>
      <ContactSection />
    </main>
  );
}
