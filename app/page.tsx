import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import GetInTouchSection from "./components/GetInTouchSection";
import FooterSection from "./components/FooterSection";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
       {/* Skills Scroll Bar */}
      <div className="absolute bottom-0 w-full">
      </div>
      <GetInTouchSection />
      <FooterSection />
      <FloatingContact />
    </div>
  );
}
