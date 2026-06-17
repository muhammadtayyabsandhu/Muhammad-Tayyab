import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStackSection from "./components/TechStackSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <AboutSection />
       {/* Skills Scroll Bar */}
      <div className="absolute bottom-0 w-full">
      </div>
    </div>
  );
}
