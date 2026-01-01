import AboutSection from "@/components/AboutSection";
import ArchitectureGallerySection from "@/components/ArchitectureGallerySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTASection from "@/components/CTASection";
import DifferenceSection from "@/components/DifferenceSection";
import EngineeringBuildsSection from "@/components/EngineeringBuildsSection";
import EngineeringNotesSection from "@/components/EngineeringNotesSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <DifferenceSection />
        <CaseStudiesSection />
        <EngineeringBuildsSection />
        <EngineeringNotesSection />
        <ArchitectureGallerySection />
        <AboutSection />
        <CTASection />
      </main>
    </div>
  );
}
