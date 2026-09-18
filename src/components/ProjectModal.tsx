import React, { useState } from 'react';
import {
  X,
  ArrowLeft,
  Download,
  ExternalLink,
  Target,
  Sparkles,
  Layers,
  TrendingUp,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Eye,
  Calendar,
  Users,
  PieChart,
  Lightbulb,
} from 'lucide-react';
import { Project, ProjectGalleryImage } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeLightboxImg, setActiveLightboxImg] = useState<ProjectGalleryImage | null>(null);

  if (!project) return null;

  const { caseStudy } = project;

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
    <>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          id="project-modal-content"
          className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-800 text-slate-100 flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Top Header with "← Back to Projects" and Close */}
          <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              id="modal-back-btn"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to Projects</span>
            </button>

            <div className="flex items-center gap-3">
              <a
                href={project.fileAttachment}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                {getFileIcon(project.fileType)}
                <span>Open Project File</span>
                <ExternalLink className="w-3 h-3 text-white/80" />
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Header: Title, Category & Badges */}
            <div className="border-b border-slate-800/80 pb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-blue-950 border border-blue-800/50 text-blue-300">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-300">
                  {project.badge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
                {project.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Overview */}
            {caseStudy.overview && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Executive Overview</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                  {caseStudy.overview}
                </p>
              </div>
            )}

            {/* Problem & Objective Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.problem && (
                <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <div className="flex items-center gap-2 text-amber-300 font-heading font-bold text-sm mb-2.5">
                    <Target className="w-4 h-4 text-amber-400" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {caseStudy.objective && (
                <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30">
                  <div className="flex items-center gap-2 text-blue-300 font-heading font-bold text-sm mb-2.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>The Objective</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {caseStudy.objective}
                  </p>
                </div>
              )}
            </div>

            {/* Target Audience & Consumer Insight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.targetAudience && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200 font-heading font-bold text-sm mb-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Target Audience</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {caseStudy.targetAudience}
                  </p>
                </div>
              )}

              {caseStudy.consumerInsight && (
                <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-300 font-heading font-bold text-sm mb-2">
                    <Lightbulb className="w-4 h-4 text-indigo-400" />
                    <span>Consumer Insight</span>
                  </div>
                  <blockquote className="text-xs sm:text-sm italic text-slate-200 leading-relaxed">
                    {caseStudy.consumerInsight}
                  </blockquote>
                </div>
              )}
            </div>

            {/* Strategy & Creative Idea */}
            <div className="space-y-4">
              {caseStudy.strategy && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
                    Core Strategy
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {caseStudy.strategy}
                  </p>
                </div>
              )}

              {caseStudy.creativeIdea && (
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    Big Creative Idea
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {caseStudy.creativeIdea}
                  </p>
                </div>
              )}
            </div>

            {/* SWOT Matrix (for Subway & McDonald's) */}
            {caseStudy.swot && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                  SWOT Analysis
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40">
                    <span className="text-xs font-bold text-emerald-400 block mb-2 font-mono">
                      STRENGTHS (S)
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.swot.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/40">
                    <span className="text-xs font-bold text-rose-400 block mb-2 font-mono">
                      WEAKNESSES (W)
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.swot.weaknesses.map((w, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-blue-900/40">
                    <span className="text-xs font-bold text-blue-400 block mb-2 font-mono">
                      OPPORTUNITIES (O)
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.swot.opportunities.map((o, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-900/40">
                    <span className="text-xs font-bold text-amber-400 block mb-2 font-mono">
                      THREATS (T)
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {caseStudy.swot.threats.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Execution Deliverables */}
            {caseStudy.execution && caseStudy.execution.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Execution Deliverables</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.execution.map((step, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="text-blue-400 font-mono font-bold mt-0.5">
                        0{i + 1}.
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Channels & Media Allocation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.channels && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Distribution Channels
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {caseStudy.channels.map((ch, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy.budgetAndMedia && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Budget & Media Allocation
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.budgetAndMedia.map((b, i) => (
                      <div key={i} className="border-b border-slate-800/80 pb-2 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between text-xs font-medium mb-1">
                          <span className="text-white">{b.channel}</span>
                          <span className="font-mono text-blue-400 font-bold">{b.allocation}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{b.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Timeline Rollout (Subway 90-day roadmap) */}
            {caseStudy.timelineRollout && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>90-Day Campaign Rollout</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {caseStudy.timelineRollout.map((phase, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-white font-heading">
                          {phase.phase}
                        </span>
                        <span className="text-[10px] font-mono text-blue-400">
                          {phase.days}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {phase.deliverables}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results / KPIs if available */}
            {caseStudy.resultsAndKpis && caseStudy.resultsAndKpis.length > 0 && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-950 to-slate-950 border border-blue-500/40">
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span>Strategic Results & Projected KPIs</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {caseStudy.resultsAndKpis.map((kpi, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery - Clickable images opening in full-screen image viewer/lightbox */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Project Visuals & Gallery (Click to Inspect)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 transition-all duration-200 hover:border-blue-500/60"
                      onClick={() => setActiveLightboxImg(img)}
                    >
                      <div className="aspect-video w-full overflow-hidden relative">
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium shadow-md flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Enlarge Visual</span>
                          </span>
                        </div>
                      </div>
                      <div className="p-3.5 bg-slate-900/90">
                        <h5 className="text-xs font-bold text-white mb-1">
                          {img.title}
                        </h5>
                        {img.caption && (
                          <p className="text-[11px] text-slate-400 line-clamp-2">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project File Call to Action Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  Attached Case Study File
                </span>
                <span className="font-heading font-bold text-white text-base block">
                  {project.fileLabel}
                </span>
                <span className="text-xs text-slate-400">
                  Direct verifiable case study document and data model.
                </span>
              </div>

              <a
                href={project.fileAttachment}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-blue-600/30"
              >
                {getFileIcon(project.fileType)}
                <span>OPEN FULL PROJECT FILE</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>

          {/* Modal Sticky Bottom Bar */}
          <div className="sticky bottom-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Projects
            </button>
            <span className="text-[11px] font-mono text-slate-500">
              Osama Ayman Portfolio • {project.title}
            </span>
          </div>

        </div>
      </div>

      {/* Internal Full-Screen Image Lightbox */}
      {activeLightboxImg && (
        <div
          id="image-lightbox-backdrop"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImg(null)}
        >
          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-white pb-3">
              <span className="text-sm font-semibold">
                {activeLightboxImg.title}
              </span>
              <button
                onClick={() => setActiveLightboxImg(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-h-[80vh] bg-black">
              <img
                src={activeLightboxImg.url}
                alt={activeLightboxImg.title}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {activeLightboxImg.caption && (
              <p className="text-xs text-slate-300 mt-3 text-center max-w-2xl">
                {activeLightboxImg.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
