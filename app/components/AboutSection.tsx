import { Code2, Smartphone, Cloud } from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: Code2,
      title: "Website Development",
      description: "Building responsive and modern websites",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Creating powerful mobile applications",
    },
    {
      icon: Cloud,
      title: "Website Hosting",
      description: "Reliable hosting solutions",
    },
  ];

  const stats = [
    {
      number: "120",
      symbol: "+",
      label: "Completed\nProjects",
    },
    {
      number: "95",
      symbol: "%",
      label: "Client\nsatisfaction",
    },
    {
      number: "10",
      symbol: "+",
      label: "Years of\nexperience",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start bg-gradient-to-br from-slate-900 via-black to-slate-900">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services Timeline */}
          <div className="flex gap-8">
          {/* Timeline Line */}
          <div className="relative flex flex-col items-center w-12">
            {/* Top line segment */}
            <div className="w-1 h-24 bg-gradient-to-b from-[#902CB8] to-[#902CB8]"></div>

            {/* Timeline items with icons */}
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex flex-col items-center w-full">
                  {/* Circle with icon */}
                  <div className="w-12 h-12 rounded-full bg-[#902CB8] flex items-center justify-center border-4 border-slate-900 relative z-20 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Line segment after circle (except last) */}
                  {index < services.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-[#902CB8] to-[#902CB8]"></div>
                  )}
                </div>
              );
            })}

            {/* Bottom line segment */}
            <div className="w-1 h-24 bg-gradient-to-b from-[#902CB8] to-transparent"></div>
          </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-12 pt-0">
              {services.map((service, index) => {
                return (
                  <div key={index} className="flex flex-col items-start justify-center h-24">
                    <h3 className="text-xl font-light text-white">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - About and Stats */}
          <div>
            {/* About Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I started my software journey from photography. Through that, I learned to
                love the process of creating from scratch. Since then, this has led me to
                software development as it fulfills my love for learning and building things.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-white">
                      {stat.number}
                    </span>
                    <span className="text-3xl text-[#902CB8] font-bold ml-1">
                      {stat.symbol}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
