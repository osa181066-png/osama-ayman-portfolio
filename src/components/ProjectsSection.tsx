import React, { useState } from 'react';
import {
  FileText,
  ExternalLink,
  Layers,
  ArrowRight,
  TrendingUp,
  Download,
  Eye,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'XLSX':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'DOCX':
        return <FileText className="w-4 h-4 text-blue-400" />;
      case 'PDF':
      default:
        return <FileText className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-slate-100 border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Exact requested Title & Subtitle */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-mono font-medium mb-3">
            <span>06 / Practical Work</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight"
          >
            Selected Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Academic, training-based and practical marketing & business projects.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${index + 1}`}
              className="rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Visual Cover Frame */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-800"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-950/85 backdrop-blur-md text-blue-300 border border-slate-700/70">
                      Project 0{index + 1}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-600/90 backdrop-blur-md text-white">
                      {project.badge}
                    </span>
                  </div>

                  {/* Overlaid Title on Cover */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono text-blue-400 tracking-wider uppercase block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: VIEW CASE STUDY and OPEN PROJECT FILE */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/80 mt-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5">
                  {/* Button 1: VIEW CASE STUDY */}
                  <button
                    id={`project-${index + 1}-view-case-study`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-600/20"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                  </button>

                  {/* Button 2: OPEN PROJECT FILE */}
                  <a
                    id={`project-${index + 1}-open-file`}
                    href={project.fileAttachment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200"
                  >
                    {getFileIcon(project.fileType)}
                    <span className="truncate">
                      {project.fileType === 'XLSX' ? 'OPEN EXCEL FILE' : 'OPEN PROJECT FILE'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
