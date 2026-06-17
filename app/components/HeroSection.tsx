import Image from "next/image";
import { SiReact, SiNodedotjs, SiNextdotjs, SiWebflow, SiWordpress } from "react-icons/si";
import { Code2 } from "lucide-react";

const borderGlowStyle = `
  // .hero-border-glow {
  //   position: relative;
  //   border-bottom: 1px solid #374151;
  // }
  
  // .hero-border-glow:hover {
  //   border-bottom-color: #902CB8;
  // }
`;

export default function HeroSection() {
  return (
    <>
      <style>{borderGlowStyle}</style>
      <section className="hero-border-glow relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* bg-gradient-to-br from-slate-900 via-black to-slate-900 */}
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-0 pt-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="w-full">
            <div className="mb-4">
              <p className="text-xl text-white font-light flex items-center gap-2">
                Hello <span className="w-3 h-3 rounded-full bg-[#902CB8]"></span>
              </p>
            </div>
            
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-[#902CB8] to-transparent"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-2">
                I'm Muhammad Tayyab
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Full-Stack Developer
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-lg text-gray-300">
                I build scalable web applications and high-converting websites
                that help businesses grow and succeed online.            
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <button className="px-6 py-3 bg-[#902CB8] text-white rounded font-medium hover:bg-red-600 transition whitespace-nowrap">
                Got a project?
              </button>
              <button className="px-6 py-3 border-2 border-[#902CB8] text-white rounded font-medium hover:bg-white hover:text-black transition whitespace-nowrap">
                My resume
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center lg:justify-end relative h-86 lg:h-screen">
            {/* Tech Icons Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Icon 1 - React */}
              <SiReact className="absolute top-10 left-10 w-20 h-20 opacity-20 text-[#902CB8] animate-pulse" />
              
              {/* Icon 2 - MongoDB */}
              <Code2 className="absolute top-26 right-12 w-24 h-24 opacity-30 text-[#902CB8]" />
              
              {/* Icon 3 - Node.js */}
              <SiNodedotjs className="absolute bottom-38 left-10 w-20 h-20 opacity-10 text-[#902CB8] animate-pulse" />
              
              {/* Icon 4 - Next.js */}
              <SiNextdotjs className="absolute top-4 right-28 w-20 h-20 opacity-15 text-[#902CB8]" />
              
              {/* Icon 5 - Webflow */}
              <SiWebflow className="absolute bottom-18 right-4 w-28 h-18 opacity-15 text-[#902CB8] " />
              
              {/* Icon 6 - WordPress */}
              <SiWordpress className="absolute top-100 left-1/4 w-20 h-20 opacity-15 text-[#902CB8]" />
            </div>

            {/* Profile Image */}
            <div className="relative w-full max-w-md z-10">
              <Image
                src="/profile.png"
                alt="Muhammad Tayyab"
                fill
                className="object-contain"
                priority
              />
            </div>

            

         
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
