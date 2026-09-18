export type SkillCategory = 'MARKETING & STRATEGY' | 'BUSINESS & ANALYSIS' | 'TOOLS' | 'COMMUNICATION';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  highlight: string;
  context: string;
  tags?: string[];
}

export interface ProjectGalleryImage {
  url: string;
  title: string;
  caption?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  objective: string;
  targetAudience: string;
  consumerInsight?: string;
  strategy: string;
  creativeIdea?: string;
  execution: string[];
  channels: string[];
  resultsAndKpis?: string[];
  budgetAndMedia?: { channel: string; allocation: string; detail: string }[];
  timelineRollout?: { phase: string; days: string; deliverables: string }[];
  swot?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  marketData?: { [key: string]: string | number }[];
  visualHighlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  galleryImages: ProjectGalleryImage[];
  fileAttachment: string;
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  fileLabel: string;
  caseStudy: ProjectCaseStudy;
  tags: string[];
  themeColor: string;
  badge: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: string;
  description: string;
  skills: string[];
  image: string;
  fileUrl?: string;
  badgeText: string;
}

export interface OngoingTrainingItem {
  id: string;
  title: string;
  organization: string;
  status: 'Ongoing';
  description: string;
  focusAreas: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  status: 'Completed' | 'Ongoing';
  summary: string;
  bulletPoints: string[];
  acquiredSkills: string[];
}

export interface EducationTimelineItem {
  year: string;
  stage: string;
  focus: string;
  status: 'Completed' | 'Current';
}

export interface EducationDetail {
  institution: string;
  faculty: string;
  major: string;
  currentYear: string;
  expectedGraduation: string;
  location: string;
  summary: string;
  timeline: EducationTimelineItem[];
  keyCompetencies: string[];
}

