"use client";

import React from "react";
import {
  FaComments,
  FaPencilRuler,
  FaCode,
  FaFlask,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: FaComments,
    title: "Discovery",
    subtitle: "Requirement\nGathering",
    color: "#902CB8",
  },
  {
    id: 2,
    icon: FaPencilRuler,
    title: "Planning",
    subtitle: "UI/UX\nDesign",
    color: "#4353FF",
  },
  {
    id: 3,
    icon: FaCode,
    title: "Development",
    subtitle: "Code\n& Build",
    color: "#13AA52",
  },
  {
    id: 4,
    icon: FaFlask,
    title: "Testing",
    subtitle: "QA &\nBug Fixes",
    color: "#F59E0B",
  },
  {
    id: 5,
    icon: FaRocket,
    title: "Deployment",
    subtitle: "Go\nLive",
    color: "#EF4444",
  },
];

const styles = `
  @keyframes badge-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }
  @keyframes node-pop {
    0%   { opacity: 0; transform: translateY(20px) scale(0.8); }
    70%  { transform: translateY(-4px) scale(1.05); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes line-draw {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
  
  /* 
   * 5 steps = 4 gaps. 
   * Total animation 6s, 1.5s per gap (25%).
   */
  @keyframes move-dot {
    0% { left: 0%; opacity: 1; transform: scale(1); }
    24.5% { left: 100%; opacity: 1; transform: scale(1.2); }
    25% { left: 100%; opacity: 0; transform: scale(0.5); }
    99.9% { left: 100%; opacity: 0; }
    100% { left: 0%; opacity: 0; }
  }
  @keyframes move-dot-mobile {
    0% { top: 0%; opacity: 1; transform: scale(1); }
    24.5% { top: 100%; opacity: 1; transform: scale(1.2); }
    25% { top: 100%; opacity: 0; transform: scale(0.5); }
    99.9% { top: 100%; opacity: 0; }
    100% { top: 0%; opacity: 0; }
  }

  .wp-node {
    opacity: 0;
    animation: node-pop 0.55s ease forwards;
  }
  .wp-node:nth-child(1) { animation-delay: 0.1s; }
  .wp-node:nth-child(2) { animation-delay: 0.25s; }
  .wp-node:nth-child(3) { animation-delay: 0.4s; }
  .wp-node:nth-child(4) { animation-delay: 0.55s; }
  .wp-node:nth-child(5) { animation-delay: 0.7s; }

  .wp-line {
    animation: line-draw 0.6s ease forwards;
  }
  .wp-badge { animation: badge-pulse 2s ease-in-out infinite; }
  
  .dot-move {
    animation: move-dot 6s linear infinite;
    opacity: 0;
  }
  .dot-move-mobile {
    animation: move-dot-mobile 6s linear infinite;
    opacity: 0;
  }

  .wp-node-circle {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .wp-node-circle:hover {
    transform: scale(1.12) translateY(-4px);
  }
`;

export default function WorkProcessSection() {
  return (
    <section
      id="work-process"
      className="relative w-full py-24 theme-section-1 overflow-hidden"
    >
      <style>{styles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-card mb-6">
            <span className="w-2 h-2 bg-[#902CB8] rounded-full wp-badge block" />
            <span className="text-sm theme-text-muted font-medium">How I Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold theme-text mb-4">
            My Work Process
          </h2>
          <p className="theme-text-muted text-lg max-w-2xl mx-auto">
            A clear 5-step journey — from the first conversation to deployment. 
            Every project follows the same proven path.
          </p>
        </div>

        {/* ── SINGLE-ROW FLOW (desktop) ── */}
        <div className="hidden lg:block relative mt-16 mb-24 px-4">
          <div className="flex items-center justify-between w-full relative">
            
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              const nextStep = !isLast ? steps[i + 1] : null;

              return (
                <React.Fragment key={step.id}>
                  {/* NODE */}
                  <div className="wp-node relative z-10 flex flex-col items-center">
                    {/* Badge */}
                    <span
                      className="wp-badge absolute -top-10 text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white shadow-md"
                      style={{ background: step.color }}
                    >
                      Step {step.id}
                    </span>

                    {/* Circle */}
                    <div
                      className="wp-node-circle w-[72px] h-[72px] rounded-full flex items-center justify-center relative bg-gray-900"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${step.color}dd, ${step.color}99)`,
                        border: `3px solid ${step.color}`,
                        boxShadow: `0 0 22px ${step.color}55, 0 4px 16px rgba(0,0,0,0.3)`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="absolute -bottom-16 w-32 flex flex-col items-center">
                      <h3 className="text-sm font-bold theme-text mt-2 mb-0.5 text-center leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[11px] theme-text-muted text-center leading-tight whitespace-pre-line">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  {!isLast && nextStep && (
                    <div 
                      className="wp-line flex-1 h-[2px] relative overflow-visible mx-2 rounded-full"
                      style={{ background: `linear-gradient(to right, ${step.color}66, ${nextStep.color}66)` }}
                    >
                      {/* Moving Dot */}
                      <div
                        className="dot-move absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full z-20"
                        style={{
                          background: nextStep.color,
                          boxShadow: `0 0 12px ${nextStep.color}, 0 0 4px ${nextStep.color}`,
                          animationDelay: `${i * 1.5}s`,
                          marginLeft: "-7px"
                        }}
                      />

                      {/* Arrowhead */}
                      <svg
                        className="absolute -right-[2px] top-1/2 -translate-y-1/2 z-10"
                        width="14" height="14" viewBox="0 0 14 14"
                      >
                        <polygon points="0,0 14,7 0,14" fill={nextStep.color} />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          
          {/* START / END labels */}
          <div className="flex justify-between mt-24 px-4">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: steps[0].color }}>
              Start
            </span>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: steps[steps.length - 1].color }}>
              End
            </span>
          </div>
        </div>

        {/* ── MOBILE: vertical flow ── */}
        <div className="lg:hidden flex flex-col items-center gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const nextStep = !isLast ? steps[index + 1] : null;

            return (
              <div key={step.id} className="flex flex-col items-center w-full max-w-xs">
                
                {/* NODE */}
                <div className="wp-node flex flex-col items-center" style={{ opacity: 0 }}>
                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white mb-2 shadow-sm"
                    style={{ background: step.color }}
                  >
                    Step {step.id}
                  </span>
                  <div
                    className="wp-node-circle w-16 h-16 rounded-full flex items-center justify-center bg-gray-900"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${step.color}dd, ${step.color}99)`,
                      border: `3px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}55`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold theme-text mt-3 mb-0.5 text-center">
                    {step.title}
                  </h3>
                  <p className="text-xs theme-text-muted text-center whitespace-pre-line leading-tight">
                    {step.subtitle}
                  </p>
                </div>

                {/* CONNECTOR */}
                {!isLast && nextStep && (
                  <div 
                    className="wp-line relative flex flex-col items-center w-[2px] my-3 rounded-full" 
                    style={{ height: 44, background: `linear-gradient(to bottom, ${step.color}66, ${nextStep.color}66)` }}
                  >
                    {/* Moving Dot */}
                    <div
                      className="dot-move-mobile absolute left-1/2 w-3 h-3 rounded-full z-20"
                      style={{
                        transform: 'translateX(-50%)',
                        background: nextStep.color,
                        boxShadow: `0 0 10px ${nextStep.color}`,
                        animationDelay: `${index * 1.5}s`,
                        marginTop: "-6px"
                      }}
                    />
                    
                    {/* Arrowhead */}
                    <svg 
                      className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 z-10" 
                      width="14" height="14" viewBox="0 0 14 14" 
                      style={{ transform: 'translateX(-50%) rotate(90deg)' }}
                    >
                      <polygon points="0,0 14,7 0,14" fill={nextStep.color} />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Background blobs */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#902CB8]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#4353FF]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
