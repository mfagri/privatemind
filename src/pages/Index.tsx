import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import ToolsSection from "@/components/ToolsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivacySection from "@/components/PrivacySection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <ToolsSection />
        <TestimonialsSection />
        <PrivacySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
