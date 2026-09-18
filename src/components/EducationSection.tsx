import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>02 / Academic Milestones</span>
          </div>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Formal undergraduate academic qualification in Business Administration.
          </p>
        </div>

        {/* Primary Academic Card */}
        <div
          id="education-primary-card"
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-12 relative overflow-hidden"
        >
          {/* Subtle Corner Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block">
                  Bachelor of Commerce
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {EDUCATION_DATA.institution}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1.5 rounded-xl bg-blue-950/80 border border-blue-700/50 text-blue-300 font-mono text-xs font-semibold">
                {EDUCATION_DATA.currentYear} (Senior)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 font-mono text-xs font-semibold">
                Graduation: {EDUCATION_DATA.expectedGraduation}
              </span>
            </div>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800 text-sm">
            <div>
              <span className="text-slate-400 text-xs font-mono block mb-1">Faculty</span>
              <span className="font-semibold text-slate-100 text-base">
                {EDUCATION_DATA.faculty}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-xs font-mono block mb-1">Specialization</span>
              <span className="font-semibold text-blue-300 text-base">
                {EDUCATION_DATA.major}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-xs font-mono block mb-1">Location</span>
              <span className="font-medium text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                {EDUCATION_DATA.location}
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {EDUCATION_DATA.summary}
          </p>

          {/* Core Competencies Pills */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
              Academic Competencies & Focus
            </span>
            <div className="flex flex-wrap gap-2.5">
              {EDUCATION_DATA.keyCompetencies.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Year Academic Progression Timeline */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Undergraduate Progression</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              2023 — 2027 Timeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EDUCATION_DATA.timeline.map((item, index) => (
              <div
                key={item.year}
                className={`p-5 rounded-2xl border transition-all duration-200 ${
                  item.status === 'Current'
                    ? 'bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-900/20'
                    : 'bg-slate-900/70 border-slate-800/90'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {item.year}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                      item.status === 'Current'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-white text-base mb-2">
                  {item.stage}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
