import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 text-slate-400 border-t border-slate-800/80 py-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Identity Info */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1 font-semibold">
              Official Portfolio Record
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight">
              OSAMA AYMAN
            </h3>
            <p className="text-sm font-medium text-slate-300 mt-1">
              Business Administration • Marketing • Human Resources
            </p>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Faculty of Commerce • Zagazig University • Expected Graduation 2027
            </p>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Email</span>
            </a>

            <a
              id="footer-phone-link"
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Osama Ayman. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with professional precision for Osama Ayman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
