"use client";

import Image from "next/image";
import { MdDateRange } from "react-icons/md";

interface ExperienceItem {
  id: number;
  dateRange: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  certificate?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    dateRange: "Jan 2026 - March 2026",
    title: "Full Stack Developer Intern",
    company: "Elite Tech",
    description:
      "Worked on developing and maintaining web applications using React.js and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
    certificate: "/certificates/elite-tech.jpg",
  },
  {
    id: 2,
    dateRange: "April 2026 - June 2026",
    title: "Junior Full Stack Developer",
    company: "Tech Solutions",
    description:
      "Developed responsive web applications and worked on backend optimization. Implemented REST APIs and database optimization techniques.",
    skills: ["React.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 3,
    dateRange: "July 2026 - Present",
    title: "Full Stack Developer",
    company: "Digital Innovations",
    description:
      "Leading development of scalable web applications. Mentoring junior developers and implementing best practices for code quality and performance.",
    skills: ["Next.js", "Node.js", "MongoDB", "TypeScript", "DevOps"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            2 Years of professional experience building web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#902CB8] via-[#902CB8]/50 to-transparent md:transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-6 h-6 bg-[#902CB8] rounded-full transform -translate-x-2.5 md:-translate-x-3 border-4 border-black"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  } md:w-1/2`}
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-[#902CB8]/50 transition-all duration-300">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <MdDateRange className="w-4 h-4 text-[#902CB8]" />
                      <span className="text-sm text-[#902CB8] font-medium">
                        {exp.dateRange}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <p className="text-[#902CB8] font-semibold mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full border border-gray-700 hover:border-[#902CB8]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Image */}
                    {exp.certificate && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500 mb-2">Certificate</p>
                        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                          <Image
                            src={exp.certificate}
                            alt={`${exp.company} Certificate`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#902CB8]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#902CB8]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
