"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, and secure payment integration. Built with React and Node.js.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, user authentication, and team collaboration features.",
    image: "/projects/taskapp.jpg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for managing multiple social media accounts with real-time statistics and insights.",
    image: "/projects/dashboard.jpg",
    technologies: ["React.js", "Chart.js", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/projects/weather.jpg",
    technologies: ["Next.js", "TypeScript", "OpenWeather API", "Mapbox"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing some of my recent work and projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-[#902CB8]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#902CB8]/10"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#902CB8] hover:bg-white hover:text-[#902CB8] text-white rounded-full flex items-center justify-center transition-all duration-300 transform -translate-y-8 group-hover:translate-y-0"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#902CB8] hover:bg-white hover:text-[#902CB8] text-white rounded-full flex items-center justify-center transition-all duration-300 transform translate-y-8 group-hover:translate-y-0"
                      aria-label="Live Project"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#902CB8] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700 group-hover:border-[#902CB8]/50 group-hover:text-[#902CB8] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#902CB8] to-[#a83ec4] hover:from-[#7d1fa8] hover:to-[#9231b8] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#902CB8]/30"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#902CB8]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#902CB8]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
