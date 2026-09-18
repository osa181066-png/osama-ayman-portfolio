import React from 'react';
import {
  Award,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Clock,
  Layers,
} from 'lucide-react';
import { TRAINING_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="training"
      className="py-24 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>04 / Practical Growth</span>
          </div>
          <h2
            id="training-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Training & Professional Development
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Practical diplomas, corporate programs, courses and ongoing learning.
          </p>
        </div>

        {/* Training Cards Grid */}
        <div
          id="training-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TRAINING_DATA.map((item, index) => {
            const isOngoing = item.status === 'Ongoing';

            return (
              <div
                key={item.id}
                id={`training-card-${index + 1}`}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                  isOngoing
                    ? 'bg-gradient-to-b from-blue-950/40 to-slate-950 border-blue-500/50 shadow-blue-950/30'
                    : 'bg-slate-900/80 border-slate-800/90 hover:border-blue-500/40'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">
                      {item.type}
                    </span>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isOngoing
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                          : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isOngoing ? 'bg-amber-400' : 'bg-emerald-400'
                        }`}
                      />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-400 font-medium mb-4">
                    <span>{item.organization}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  {/* Key Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {item.bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acquired Skills Footer */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                    Core Competencies Acquired
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.acquiredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
