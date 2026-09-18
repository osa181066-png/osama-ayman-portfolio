import React, { useState, useRef } from 'react';
import { ArrowRight, Download, ExternalLink, MapPin, GraduationCap, Sparkles, Camera, Check, Upload } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV }) => {
  const [profileImg, setProfileImg] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('osama_profile_image_custom') || PERSONAL_INFO.profileImage;
    }
    return PERSONAL_INFO.profileImage;
  });
  const [isPermanentlyFixed, setIsPermanentlyFixed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('osama_photo_fixed') === 'true';
    }
    return false;
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setProfileImg(result);
        localStorage.setItem('osama_profile_image_custom', result);
        localStorage.setItem('osama_photo_fixed', 'true');
        setIsPermanentlyFixed(true);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 6000);

        // Stream binary file directly to server to overwrite public/images/osama-ayman.jpg permanently
        fetch('/api/upload-avatar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/octet-stream' },
          body: file,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Profile photo permanently saved to server assets:', data);
          })
          .catch((err) => console.log('Notice saving avatar:', err));
      }
    };
    reader.readAsDataURL(file);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Ambience & Minimal Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Information Column */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            {/* Academic Track Pill */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs font-mono mb-6 shadow-sm shadow-blue-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Zagazig University • Faculty of Commerce • 4th Year</span>
            </div>

            {/* Candidate Name */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-3"
            >
              OSAMA AYMAN
            </h1>

            {/* Professional Subtitles */}
            <div id="hero-role-wrapper" className="mb-6 space-y-1">
              <h2
                id="hero-primary-title"
                className="text-2xl sm:text-3xl font-heading font-semibold text-slate-200"
              >
                Business Administration Student
              </h2>
              <p
                id="hero-pillars-subtitle"
                className="text-lg sm:text-xl font-medium text-blue-400 font-sans tracking-wide"
              >
                {PERSONAL_INFO.heroSubtitle}
              </p>
            </div>

            {/* Short Introduction */}
            <p
              id="hero-intro"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action Buttons: VIEW MY WORK, DOWNLOAD CV, LINKEDIN */}
            <div
              id="hero-action-buttons"
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Button 1: VIEW MY WORK */}
              <button
                id="hero-view-work-btn"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Button 2: DOWNLOAD CV */}
              <button
                id="hero-download-cv-btn"
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>DOWNLOAD CV</span>
              </button>

              {/* Button 3: LINKEDIN */}
              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <span>LINKEDIN</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>

            {/* Location & Status Meta */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                Graduation: Class of {PERSONAL_INFO.expectedGraduation}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Internships & Projects
              </span>
            </div>
          </div>

          {/* Profile Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Portrait Frame */}
              <div
                id="hero-portrait-card"
                className="relative rounded-3xl bg-slate-900 p-2 sm:p-2.5 border border-slate-800 shadow-2xl overflow-hidden group"
              >
                {/* Hidden File Input for Direct Photo Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="hero-photo-picker"
                  aria-label="Upload profile photo"
                />

                <div 
                  className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 cursor-pointer"
                  onDoubleClick={() => fileInputRef.current?.click()}
                  title={isPermanentlyFixed ? "Osama Ayman - Portfolio" : "انقر لاختيار صورتك الحقيقية لتثبيتها بشكل دائم"}
                >
                  <img
                    src={profileImg}
                    alt="Osama Ayman - Business Administration Student"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Photo Setup Action - disappears once permanently fixed */}
                  {!isPermanentlyFixed && (
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        type="button"
                        id="change-photo-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 text-slate-200 hover:text-white text-xs font-semibold shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer animate-pulse hover:animate-none"
                        title="اختر صورتك الحقيقية لتثبيتها نهائياً لجميع من يفتح الرابط"
                      >
                        <Camera className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                        <span>تثبيت صورتك الحقيقية للجميع</span>
                      </button>
                    </div>
                  )}

                  {/* Confirmation Toast if just updated */}
                  {uploadSuccess && (
                    <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-950/90 border border-emerald-500/80 text-emerald-200 text-xs font-medium shadow-2xl backdrop-blur-md animate-in fade-in duration-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>تم تثبيت صورتك الحقيقية بنجاح ودائماً لكل الزوار!</span>
                    </div>
                  )}

                  {/* Subtle lighting gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/85 p-3 rounded-xl border border-slate-800/90 text-white z-10">
                    <div>
                      <span className="block font-heading font-bold text-white text-sm">
                        Osama Ayman
                      </span>
                      <span className="block text-[11px] text-blue-400 font-mono">
                        Zagazig Univ • Commerce
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-blue-600 text-white font-semibold">
                      Senior 2027
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
