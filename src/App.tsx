import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificatesGallery } from './components/CertificatesGallery';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Bar with Download CV & smooth scrolling */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Sections strictly in requested sequence */}
      <main className="flex-grow">
        {/* 1. HERO Section */}
        <HeroSection onOpenCV={() => setIsCVOpen(true)} />

        {/* 2. ABOUT ME Section */}
        <AboutSection />

        {/* 3. EDUCATION Section */}
        <EducationSection />

        {/* 4. SKILLS Section (Categorized into 4 disciplines) */}
        <SkillsSection />

        {/* 5. TRAINING & PROFESSIONAL DEVELOPMENT Section */}
        <ExperienceSection />

        {/* 6. LICENSES & CERTIFICATIONS Section (with Lightbox & Ongoing Training) */}
        <CertificatesGallery />

        {/* 7. PROJECTS / CASE STUDIES Section (Selected Projects gallery) */}
        <ProjectsSection />

        {/* 8. CONTACT Section (Let's Connect with quick action buttons & CV) */}
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
