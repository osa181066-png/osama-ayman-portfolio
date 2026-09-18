import React from 'react';
import {
  Briefcase,
  TrendingUp,
  Users,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillarIcons = [
    <Briefcase className="w-6 h-6 text-blue-400" key="ba" />,
    <TrendingUp className="w-6 h-6 text-sky-400" key="mkt" />,
    <Users className="w-6 h-6 text-indigo-400" key="hr" />,
    <GraduationCap className="w-6 h-6 text-teal-400" key="cl" />,
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>01 / Profile Overview</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Committed to transforming academic foundations into real-world business impact.
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Narrative - Exact requested text */}
          <div className="lg:col-span-8 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutMeText.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-200">
                {paragraph}
              </p>
            ))}

            {/* Practical highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Customer-centric campaign planning</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Competitive benchmarking & research</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Organizational behavior & team dynamics</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Advanced spreadsheet & digital tools</span>
              </div>
            </div>
          </div>

          {/* Quick Stats / Highlights Box */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              Profile Summary
            </h3>

            <div className="space-y-4 text-sm">
              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-slate-400 text-xs block">University</span>
                <span className="font-semibold text-white block">
                  Zagazig University (Faculty of Commerce)
                </span>
              </div>

              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-slate-400 text-xs block">Specialization</span>
                <span className="font-semibold text-white block">
                  Business Administration (4th Year)
                </span>
              </div>

              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-slate-400 text-xs block">Graduation Expected</span>
                <span className="font-semibold text-emerald-400 block font-mono">
                  Class of 2027
                </span>
              </div>

              <div>
                <span className="text-slate-400 text-xs block">Primary Interests</span>
                <span className="font-semibold text-blue-300 block">
                  Marketing • Human Resources • Business
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Professional Visual Pillars */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Core Strategic Focus Areas
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Four fundamental pillars shaping Osama’s academic rigor and practical projects.
            </p>
          </div>

          <div
            id="about-pillars-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ABOUT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                id={`about-pillar-${idx + 1}`}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 group-hover:bg-blue-950/30 transition-colors">
                    {pillarIcons[idx]}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
