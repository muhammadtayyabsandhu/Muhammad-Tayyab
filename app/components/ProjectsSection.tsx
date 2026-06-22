"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

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
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging app with group chats, media sharing, typing indicators, and online status built with Socket.io.",
    image: "/projects/chat.jpg",
    technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 5,
    title: "AI-Powered Blog Platform",
    description:
      "A modern blogging platform with AI-generated content suggestions, rich text editor, SEO optimization, and user analytics.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "TypeScript"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 6,
    title: "Portfolio & CMS Dashboard",
    description:
      "A custom content management system with an admin dashboard for managing projects, blogs, and client testimonials.",
    image: "/projects/cms.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 theme-section-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[#902CB8] text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold theme-text">
              Featured Projects
            </h2>
          </div>
          <p className="theme-text-dimmed text-base max-w-md">
            A selection of projects I&apos;ve built — from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative theme-card rounded-2xl overflow-hidden"
            >
              {/* Top accent line — only visible on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#902CB8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden" style={{ background: 'var(--bg-card-inner)' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>

                {/* Links Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/80 transition-all duration-300"
                      aria-label="Live Project"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Project number */}
                <span className="text-[#902CB8]/50 text-xs font-mono tracking-wider mb-3 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold theme-text mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="theme-text-dimmed text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 theme-card-inner text-[11px] font-medium rounded-md theme-text-muted"
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
        <div className="mt-14 text-center">
          <a
            href="https://github.com/muhammadtayyabsandhu"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 px-7 py-3.5 bg-[#902CB8] hover:bg-[#7b25a0] text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#902CB8]/20"
          >
            <FaGithub className="w-4.5 h-4.5" />
            View All Projects on GitHub
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
