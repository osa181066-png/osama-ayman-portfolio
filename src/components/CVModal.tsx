import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  ExternalLink,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  TRAINING_DATA,
  CERTIFICATES_DATA,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-dialog"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-300 text-slate-900 animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Top Bar */}
        <div className="sticky top-0 z-20 bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm sm:text-base">
              Curriculum Vitae • Osama Ayman
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/50">
              Verified Student CV
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvFile}
              download="Osama_Ayman_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
              title="Download PDF File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              id="cv-print-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              id="cv-close-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 text-slate-800 bg-white print:p-0">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-bold text-blue-700 mt-1">
                  Business Administration Student | Marketing & Human Resources Enthusiast
                </p>
              </div>
              <div className="text-xs text-slate-600 font-mono sm:text-right space-y-1">
                <p>{PERSONAL_INFO.location}</p>
                <p>Phone: {PERSONAL_INFO.phone}</p>
                <p>{PERSONAL_INFO.email}</p>
                <p>linkedin.com/in/osama-ayman-a70426366</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed font-normal">
              Fourth-year Business Administration undergraduate at Zagazig University (expected graduation 2027) with deep focus on Marketing and Human Resources. Experienced through academic projects, professional diplomas from Creativa Innovation Hub, accredited Google Project Management certifications, data analysis in Microsoft Excel, and intensive corporate training at Commercial International Bank (CIB).
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Education</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {EDUCATION_DATA.institution} — {EDUCATION_DATA.faculty}
                </h3>
                <p className="text-xs font-semibold text-blue-800">
                  Specialization: {EDUCATION_DATA.major} • 4th Year Senior
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Expected Graduation: {EDUCATION_DATA.expectedGraduation} • {EDUCATION_DATA.location}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Training & Diplomas */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Professional Training & Diplomas</span>
            </h2>
            <div className="space-y-3">
              {TRAINING_DATA.map((t) => (
                <div key={t.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{t.title}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{t.status}</span>
                  </div>
                  <p className="text-blue-800 font-medium text-[11px]">{t.organization}</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{t.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Practical Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-700" />
              <span>Selected Practical Projects</span>
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{p.title}</span>
                    <span className="text-blue-700 font-mono text-[11px]">{p.category}</span>
                  </div>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Grid */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-900 font-bold border-b border-slate-200 pb-1.5 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              <span>Core Skills & Tools</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-blue-900 block mb-1">Marketing & Strategy</span>
                <p className="text-slate-600 text-[11px]">360° Campaigns, Research, Competitor Analysis, Consumer Behavior</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-blue-900 block mb-1">Business & Analysis</span>
                <p className="text-slate-600 text-[11px]">Business Administration, Human Resources, Data Analysis, Problem Solving</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-blue-900 block mb-1">Software & Tools</span>
                <p className="text-slate-600 text-[11px]">Microsoft Excel (Formulas, PivotTables), Microsoft Word</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-blue-900 block mb-1">Communication</span>
                <p className="text-slate-600 text-[11px]">Presentation Decks, Professional Dialogue, Teamwork, Creative Ideation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
