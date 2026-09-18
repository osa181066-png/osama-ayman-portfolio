import React, { useState } from 'react';
import {
  TrendingUp,
  Briefcase,
  Wrench,
  MessageSquare,
  Sparkles,
  CheckCircle,
  Filter,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'ALL'>('ALL');

  const categories: { key: SkillCategory | 'ALL'; label: string; icon: React.ReactNode }[] = [
    { key: 'ALL', label: 'All Disciplines', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'MARKETING & STRATEGY', label: 'Marketing & Strategy', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { key: 'BUSINESS & ANALYSIS', label: 'Business & Analysis', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { key: 'TOOLS', label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
    { key: 'COMMUNICATION', label: 'Communication', icon: <MessageSquare className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills =
    selectedCategory === 'ALL'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>03 / Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Core Competencies & Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Structured practical capabilities applied across academic research, case studies, and corporate simulations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              id={`skill-card-${index + 1}`}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-400 px-2 py-0.5 rounded bg-blue-950/50 border border-blue-800/40">
                    {skill.category}
                  </span>
                  <span className="text-slate-500 text-xs font-mono">
                    #0{index + 1}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Key Highlight / Focus */}
                <p className="text-xs font-semibold text-slate-300 mb-3 flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{skill.highlight}</span>
                </p>

                {/* Practical Context */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.context}
                </p>
              </div>

              {/* Tags */}
              {skill.tags && (
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4 Summary Category Overview Boxes */}
        <div className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/60">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block mb-1">
              Category 01
            </span>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Marketing & Strategy
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Campaign architectures, consumer empathy, competitor positioning, and retail activations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/60">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block mb-1">
              Category 02
            </span>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Business & Analysis
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Business administration foundations, HR workflows, operational modeling, and problem diagnostics.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/60">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block mb-1">
              Category 03
            </span>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Tools
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Microsoft Excel formulas, PivotTables, data summaries, and executive Word documentation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/60">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block mb-1">
              Category 04
            </span>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Communication
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Public defense, pitch storytelling, active collaboration, and creative conceptualization.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
