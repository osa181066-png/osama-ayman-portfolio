import {
  Project,
  Certificate,
  OngoingTrainingItem,
  TrainingItem,
  SkillItem,
  EducationDetail,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Osama Ayman',
  title: 'Business Administration Student | Marketing & Human Resources Enthusiast',
  heroSubtitle: 'Marketing • Human Resources • Business',
  university: 'Zagazig University',
  faculty: 'Faculty of Commerce',
  specialization: 'Business Administration',
  currentYear: '4th Year',
  expectedGraduation: '2027',
  location: 'Mit Ghamr, Dakahlia, Egypt',
  phone: '01030758682',
  email: 'osamaayman222220@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/osama-ayman-a70426366/',
  profileImage: '/images/osama-ayman.jpg?v=20260917',
  cvFile: '/documents/osama-ayman-cv.pdf',
  heroIntro:
    'Business Administration student at Zagazig University with a strong interest in Marketing and Human Resources, developing practical skills through training, certifications, academic projects and real-world case studies.',
  aboutMeText: [
    'I am a fourth-year Business Administration student at the Faculty of Commerce, Zagazig University, expected to graduate in 2027.',
    'I am interested in Marketing and Human Resources, with a focus on understanding customers, developing marketing ideas, analyzing markets and connecting business thinking with practical solutions.',
    'Through academic projects, professional training and certifications, I have developed practical experience in campaign planning, competitor analysis, business concepts, research and digital tools.',
  ],
};

export const ABOUT_PILLARS = [
  {
    title: 'Business Administration',
    badge: 'Core Specialization',
    description:
      'Grounded in organizational management, business strategy, operational workflows, and evaluating business model feasibility.',
  },
  {
    title: 'Marketing',
    badge: 'Strategic Focus',
    description:
      'Passionate about customer psychology, brand messaging, 360° campaign architecture, and multichannel promotional strategies.',
  },
  {
    title: 'Human Resources',
    badge: 'People & Culture',
    description:
      'Focusing on talent dynamics, team collaboration, motivation, organizational behavior, and workplace efficiency.',
  },
  {
    title: 'Continuous Learning',
    badge: 'Professional Growth',
    description:
      'Consistently advancing through professional diplomas, global accredited certifications, and intensive corporate programs.',
  },
];

export const EDUCATION_DATA: EducationDetail = {
  institution: 'Zagazig University',
  faculty: 'Faculty of Commerce',
  major: 'Business Administration',
  currentYear: '4th Year',
  expectedGraduation: '2027',
  location: 'Mit Ghamr / Zagazig, Egypt',
  summary:
    'Pursuing a comprehensive Bachelor of Commerce degree specializing in Business Administration, combining marketing strategy, human resources, organizational management, and quantitative decision-making.',
  timeline: [
    {
      year: 'Year 1 (2023 - 2024)',
      stage: 'Commerce & Business Foundations',
      focus: 'Principles of management, financial accounting, microeconomics, and commercial law fundamentals.',
      status: 'Completed',
    },
    {
      year: 'Year 2 (2024 - 2025)',
      stage: 'Marketing & Managerial Economics',
      focus: 'Consumer behavior fundamentals, macroeconomic environments, business statistics, and operational management.',
      status: 'Completed',
    },
    {
      year: 'Year 3 (2025 - 2026)',
      stage: 'Human Resources & Market Research',
      focus: 'Organizational behavior, HR planning, market analysis methodologies, and corporate finance.',
      status: 'Completed',
    },
    {
      year: 'Year 4 (2026 - 2027)',
      stage: 'Strategic Administration & Senior Capstone',
      focus: 'Advanced strategic administration, contemporary marketing management, and graduation business analysis.',
      status: 'Current',
    },
  ],
  keyCompetencies: [
    'Strategic Business Management',
    'Integrated Marketing Communications',
    'Human Resources Fundamentals',
    'Market & Competitor Analysis',
    'Commercial Data Evaluation',
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // 1. MARKETING & STRATEGY
  {
    name: 'Marketing',
    category: 'MARKETING & STRATEGY',
    highlight: '360° Campaigns, Brand Positioning & 4Ps Strategy',
    context: 'Developed comprehensive campaign frameworks for Juhayna Classic, Subway Egypt, and Alex Bank.',
    tags: ['Brand Strategy', 'Product Positioning', 'Value Proposition'],
  },
  {
    name: 'Market Research',
    category: 'MARKETING & STRATEGY',
    highlight: 'Consumer Surveys, Trend Identification & Field Insights',
    context: 'Conducted field research and quantitative survey analysis to uncover consumer pain points in Egyptian FMCG.',
    tags: ['Primary Research', 'Secondary Data', 'Audience Profiling'],
  },
  {
    name: 'Competitor Analysis',
    category: 'MARKETING & STRATEGY',
    highlight: 'SWOT, Benchmarking & Market Gap Discovery',
    context: 'Executed exhaustive competitor research comparing McDonald’s, KFC, and Burger King across Egypt.',
    tags: ['SWOT Matrix', 'Competitive Benchmarks', 'Market Gap Mapping'],
  },
  {
    name: 'Customer Behavior',
    category: 'MARKETING & STRATEGY',
    highlight: 'Decision Journey Mapping & Psychological Triggers',
    context: 'Analyzed purchasing friction, self-expression motivation, and dietary lifestyle trends across Gen Z and families.',
    tags: ['Buyer Personas', 'Journey Mapping', 'Consumer Psychology'],
  },
  {
    name: 'Campaign Planning',
    category: 'MARKETING & STRATEGY',
    highlight: 'Budget Allocation, Phased Timelines & On-Ground POSM',
    context: 'Structured multi-channel 90-day rollouts with OOH billboards, experiential sampling, and digital ads.',
    tags: ['Media Planning', 'Activation Design', 'Rollout Roadmaps'],
  },

  // 2. BUSINESS & ANALYSIS
  {
    name: 'Business Administration',
    category: 'BUSINESS & ANALYSIS',
    highlight: 'Organizational Workflows, Operations & Strategy',
    context: 'Core major at Zagazig University reinforced by specialized diploma qualification from Creativa Innovation Hub.',
    tags: ['Strategic Planning', 'Operations', 'Business Modeling'],
  },
  {
    name: 'Human Resources',
    category: 'BUSINESS & ANALYSIS',
    highlight: 'Team Coordination, Organizational Behavior & Training',
    context: 'Studied organizational frameworks, talent engagement strategies, and performance motivation models.',
    tags: ['Organizational Behavior', 'Team Development', 'People Management'],
  },
  {
    name: 'Basic Data Analysis',
    category: 'BUSINESS & ANALYSIS',
    highlight: 'Descriptive Metrics, Trend Analysis & Verification',
    context: 'Applied Google Sheets and Excel analytics to social media followings, sales projections, and campaign KPIs.',
    tags: ['Data Cleaning', 'KPI Tracking', 'Descriptive Statistics'],
  },
  {
    name: 'Problem Solving',
    category: 'BUSINESS & ANALYSIS',
    highlight: 'Root-Cause Diagnosis & Pragmatic Solutions',
    context: 'Identified real-world frictions in banking accessibility (Alex Ahalina) and QSR customization.',
    tags: ['Analytical Thinking', 'Operational Improvement', 'Decision Logic'],
  },

  // 3. TOOLS
  {
    name: 'Microsoft Excel',
    category: 'TOOLS',
    highlight: 'Formulas, PivotTables, VLOOKUP/XLOOKUP & Summary Tables',
    context: 'Built full competitive comparison models, media budgeting tables, and performance metric sheets.',
    tags: ['PivotTables', 'Formulas & Functions', 'Data Tables', 'Dashboards'],
  },
  {
    name: 'Microsoft Word',
    category: 'TOOLS',
    highlight: 'Executive Proposals, Business Documentation & Briefs',
    context: 'Prepared professional campaign briefs, research documentation, and structured business case studies.',
    tags: ['Executive Briefs', 'Documentation', 'Formal Reports'],
  },

  // 4. COMMUNICATION
  {
    name: 'Communication',
    category: 'COMMUNICATION',
    highlight: 'Clear Articulation, Active Listening & Stakeholder Dialogue',
    context: 'Honed through collegiate team defense, corporate customer roleplay at CIB, and academic collaborations.',
    tags: ['Professional Dialogue', 'Client Empathy', 'Executive Writing'],
  },
  {
    name: 'Presentation',
    category: 'COMMUNICATION',
    highlight: 'Storytelling, Pitch Decks & Visual Synthesis',
    context: 'Designed and defended high-impact marketing decks and strategic business proposals.',
    tags: ['Slide Architecture', 'Data Storytelling', 'Public Speaking'],
  },
  {
    name: 'Teamwork',
    category: 'COMMUNICATION',
    highlight: 'Cross-functional Collaboration & Shared Accountability',
    context: 'Coordinated student group projects, brainstorming sessions, and competitive hackathon exercises.',
    tags: ['Collaboration', 'Peer Mentoring', 'Consensus Building'],
  },
  {
    name: 'Creative Thinking',
    category: 'COMMUNICATION',
    highlight: 'Unconventional Ideas & Relatable Consumer Hooks',
    context: 'Conceived viral campaign concepts such as Subway “Made My Way” and Juhayna beachside sampling pods.',
    tags: ['Ideation', 'Lateral Thinking', 'Creative Strategy'],
  },
];

export const TRAINING_DATA: TrainingItem[] = [
  {
    id: 'trg-creativa-ba',
    title: 'Business Administration Diploma',
    organization: 'Creativa Innovation Hub Zagazig',
    location: 'Zagazig, Sharkia, Egypt',
    period: 'Comprehensive Program',
    type: 'Professional Diploma',
    status: 'Completed',
    summary:
      'Rigorous government-backed innovation hub diploma covering strategic organizational management, business model formulation, agile operations, and leadership.',
    bulletPoints: [
      'Mastered strategic analysis frameworks (SWOT, PESTLE, Value Chain) tailored to emerging Egyptian enterprises.',
      'Constructed practical Business Model Canvases (BMC) and operational roadmaps for localized business initiatives.',
      'Collaborated in intensive workshop teams to analyze and solve operational bottleneck case studies.',
    ],
    acquiredSkills: ['Strategic Management', 'Business Model Canvas', 'Operations Strategy', 'Leadership'],
  },
  {
    id: 'trg-creativa-mkt',
    title: 'Marketing Diploma',
    organization: 'Creativa Innovation Hub Zagazig',
    location: 'Zagazig, Sharkia, Egypt',
    period: 'Specialized Program',
    type: 'Professional Diploma',
    status: 'Completed',
    summary:
      'In-depth specialization addressing modern marketing methodologies, integrated brand positioning, digital distribution channels, and analytical campaign evaluation.',
    bulletPoints: [
      'Formulated 360-degree marketing campaign strategies with clearly defined customer personas and value propositions.',
      'Analyzed customer journey funnels, engagement benchmarks, and multi-channel promotional strategies.',
      'Constructed comprehensive media allocation plans and creative briefs for commercial launches.',
    ],
    acquiredSkills: ['Brand Positioning', 'Campaign Planning', 'Consumer Insights', 'Marketing Strategy'],
  },
  {
    id: 'trg-excel-course',
    title: 'Excel Practical Course',
    organization: 'Professional Training Academy',
    location: 'Egypt',
    period: 'Practical Course',
    type: 'Technical Program',
    status: 'Completed',
    summary:
      'Hands-on technical curriculum dedicated to Microsoft Excel as a strategic business decision tool, covering data cleansing, formulas, PivotTables, and summary dashboard creation.',
    bulletPoints: [
      'Built dynamic analytical spreadsheets utilizing XLOOKUP, nested logical functions, and conditional formulas.',
      'Engineered interactive summary tables with PivotTables and slicers for rapid executive visibility.',
      'Applied quantitative data modeling techniques to sales projections and competitor benchmark sheets.',
    ],
    acquiredSkills: ['Advanced Excel', 'Data Cleansing', 'PivotTables', 'Spreadsheet Modeling'],
  },
  {
    id: 'trg-cib-genai',
    title: 'Generative AI Summer Internship Program',
    organization: 'Commercial International Bank (CIB Egypt)',
    location: 'Corporate Academy / Egypt',
    period: 'Summer Program',
    type: 'Corporate Internship',
    status: 'Completed',
    summary:
      'Intensive training program hosted by Commercial International Bank focusing on corporate banking practices, digital innovation, and practical applications of Generative AI in business.',
    bulletPoints: [
      'Explored enterprise use cases of Generative AI in banking operations, workflow automation, and financial analysis.',
      'Studied retail banking mechanisms, compliance standards, and digital banking customer engagement.',
      'Participated in practical business simulation scenarios evaluating modern digital service models.',
    ],
    acquiredSkills: ['Generative AI in Business', 'Corporate Banking Basics', 'Digital Automation', 'Customer Analysis'],
  },
  {
    id: 'trg-deip-ongoing',
    title: 'Digital Egypt Youth / DEIP',
    organization: 'Rwad Misr Digital (DEPI / MCIT)',
    location: 'Egypt (Ongoing Program)',
    period: 'Current / Active Cohort',
    type: 'Government Initiative',
    status: 'Ongoing',
    summary:
      'Currently participating in the flagship Digital Egypt Innovation Pioneers (DEIP / Rwad Misr Digital) program, advancing practical competencies in digital marketing, analytics, and business strategy.',
    bulletPoints: [
      'Actively enrolled in modern digital business tracks under the auspices of Egypt’s MCIT.',
      'Executing practical marketing assignments including deep competitive benchmarks and market research.',
      'Collaborating with fellow university scholars across Egypt on real-world business case studies.',
    ],
    acquiredSkills: ['Digital Marketing Foundations', 'Market Benchmarking', 'Competitive Research', 'Digital Tools'],
  },
  {
    id: 'trg-hp-life',
    title: 'Professional Development & Digital Learning',
    organization: 'HP LIFE (HP Foundation)',
    location: 'Global Online Learning',
    period: 'Credentialed Modules',
    type: 'Professional Development',
    status: 'Completed',
    summary:
      'Completed international business and digital literacy modules through the HP LIFE program, covering strategic communication, data-driven decisions, and foundational entrepreneurship.',
    bulletPoints: [
      'Completed applied learning modules on data science, analytics, and strategic business metrics.',
      'Explored customer identification, target audience profiling, and digital communication tools.',
      'Acquired practical techniques for structuring executive proposals and commercial presentations.',
    ],
    acquiredSkills: ['Business Analytics', 'Digital Learning', 'Commercial Communication', 'Entrepreneurship'],
  },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-creativa-mkt',
    title: 'Marketing Diploma',
    issuer: 'Creativa Zagazig',
    date: 'Credential Awarded',
    category: 'Marketing',
    description:
      'Professional diploma verifying mastery in 360° campaign strategy, brand positioning, consumer journey mapping, and media planning.',
    skills: ['Marketing Strategy', 'Campaign Architecture', 'Brand Positioning', 'Consumer Insights'],
    image: '/certificates/cert-creativa-mkt.svg',
    fileUrl: '/certificates/cert-creativa-mkt.svg',
    badgeText: 'Verified Diploma',
  },
  {
    id: 'cert-creativa-ba',
    title: 'Business Administration Diploma',
    issuer: 'Creativa Zagazig',
    date: 'Credential Awarded',
    category: 'Management',
    description:
      'Comprehensive qualification in organizational management, business modeling, operational workflows, and commercial leadership.',
    skills: ['Strategic Planning', 'Operations', 'Business Modeling', 'Leadership'],
    image: '/certificates/cert-creativa-ba.svg',
    fileUrl: '/certificates/cert-creativa-ba.svg',
    badgeText: 'Verified Diploma',
  },
  {
    id: 'cert-google-fpm',
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Credential Awarded',
    category: 'Project Management',
    description:
      'Accredited certification covering project lifecycles, project documentation, agile principles, and stakeholder communication.',
    skills: ['Project Management', 'Agile Principles', 'Documentation', 'Stakeholder Communication'],
    image: '/certificates/cert-google-fpm.svg',
    fileUrl: '/certificates/cert-google-fpm.svg',
    badgeText: 'Google Certified',
  },
  {
    id: 'cert-google-init',
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    date: 'Credential Awarded',
    category: 'Project Management',
    description:
      'Credential validating competency in crafting project charters, defining scope, establishing measurable OKRs, and managing stakeholder expectations.',
    skills: ['Project Charters', 'Scope Definition', 'SMART Goals', 'Stakeholder Analysis'],
    image: '/certificates/cert-google-init.svg',
    fileUrl: '/certificates/cert-google-init.svg',
    badgeText: 'Google Certified',
  },
  {
    id: 'cert-google-plan',
    title: 'Project Planning: Putting It All Together',
    issuer: 'Google',
    date: 'Credential Awarded',
    category: 'Project Management',
    description:
      'Certification validating work breakdown structures (WBS), risk management frameworks, milestone scheduling, and project budgeting.',
    skills: ['Work Breakdown Structure', 'Risk Management', 'Milestones', 'Budget Planning'],
    image: '/certificates/cert-google-plan.svg',
    fileUrl: '/certificates/cert-google-plan.svg',
    badgeText: 'Google Certified',
  },
  {
    id: 'cert-coursera-sheets',
    title: 'Data Analysis Foundations with Google Sheets',
    issuer: 'Coursera Project Network',
    date: 'Credential Awarded',
    category: 'Data Analytics',
    description:
      'Practical credential validating spreadsheet data manipulation, logical formulas, PivotTable analysis, and data-driven business visualization.',
    skills: ['Google Sheets', 'PivotTables', 'Formulas', 'Data Visualization'],
    image: '/certificates/cert-coursera-sheets.svg',
    fileUrl: '/certificates/cert-coursera-sheets.svg',
    badgeText: 'Verified Credential',
  },
  {
    id: 'cert-hplife-analytics',
    title: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    date: 'Credential Awarded',
    category: 'Data Analytics',
    description:
      'International credential certifying core principles of commercial data science, descriptive statistics, and data-backed business reporting.',
    skills: ['Business Analytics', 'Data Interpretation', 'Descriptive Statistics', 'Reporting'],
    image: '/certificates/cert-hplife-analytics.svg',
    fileUrl: '/certificates/cert-hplife-analytics.svg',
    badgeText: 'HP LIFE Verified',
  },
  {
    id: 'cert-cib-genai',
    title: 'Generative AI Summer Internship Program',
    issuer: 'CIB',
    date: 'Program Completed',
    category: 'AI & Banking',
    description:
      'Corporate certification honoring successful completion of the CIB Summer Internship focused on Generative AI applications and digital banking operations.',
    skills: ['Generative AI', 'Banking Operations', 'Digital Transformation', 'Commercial Innovation'],
    image: '/certificates/cert-cib-genai.svg',
    fileUrl: '/certificates/cert-cib-genai.svg',
    badgeText: 'CIB Corporate',
  },
];

export const ONGOING_TRAINING: OngoingTrainingItem[] = [
  {
    id: 'ongoing-deip',
    title: 'Digital Egypt Youth / DEIP (Rwad Misr Digital)',
    organization: 'Ministry of Communications and Information Technology (MCIT)',
    status: 'Ongoing',
    description:
      'Currently participating in the prestigious DEIP / Rwad Misr Digital initiative, focusing on digital marketing, market benchmarking, and business strategies.',
    focusAreas: [
      'Digital Marketing Strategy',
      'Market & Competitor Benchmarking',
      'Data-Driven Decision Making',
      'Applied Business Projects',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  // --------------------------------------------------
  // PROJECT 01: Juhayna Classic — Summer Campaign
  // --------------------------------------------------
  {
    id: 'juhayna-summer-campaign',
    title: 'Juhayna Classic — Summer Campaign',
    category: 'FMCG • Marketing Campaign • Creative Strategy',
    description:
      'A 360° summer marketing campaign concept for Juhayna Classic covering customer insight, target audience, campaign strategy, creative direction, media planning, sampling and retail activation.',
    coverImage: '/projects/juhayna-cover.jpg',
    badge: '360° Campaign Deck',
    themeColor: '#0284c7',
    fileAttachment: '/documents/juhayna-case-study.pdf',
    fileType: 'PDF',
    fileLabel: 'juhayna-case-study.pdf',
    galleryImages: [
      {
        url: '/projects/juhayna-cover.jpg',
        title: 'Campaign Key Visual & Summer Product Range',
        caption: 'Juhayna Classic 100% natural fruit juice portfolio: Orange, Mango, and Cocktail packs in summer coastal setting.',
      },
      {
        url: '/projects/juhayna-sampling.jpg',
        title: 'Beachside Sampling & Brand Activation',
        caption: 'On-ground beach activations deployed at North Coast & Ain Sokhna highway gates engaging vacationers.',
      },
    ],
    caseStudy: {
      overview:
        'Developed a holistic summer marketing campaign concept for Juhayna Classic fruit juice range (Orange, Mango, Cocktail, Guava, Apple). The strategy positions Juhayna as Egypt’s ultimate, trusted natural summer hydration choice, combining emotional summer storytelling with high-impact highway billboards, beach sampling, and supermarket retail POSM.',
      problem:
        'During high summer temperatures, beverage demand peaks, but market competition intensifies rapidly against soft drinks, flavored waters, and local juices. Juhayna required a compelling campaign that reminds consumers of natural juice quality and motivates immediate trial across all family members.',
      objective:
        'Drive summer volume sales across Egyptian governorates, elevate top-of-mind brand recall for Juhayna Classic as the go-to summer refreshment, and encourage consumers to sample diverse flavors across individual and family pack sizes.',
      targetAudience:
        'Demographics: Ages 7 to 50, both male and female, nationwide across all Egyptian governorates. Lifestyles: Families, university students, commuting professionals, and travelers seeking natural cold refreshment during hot summer days.',
      consumerInsight:
        '"In the summer, I seek a cold, natural-tasting juice that I can genuinely trust, which refreshes me and is loved by every member of my family."',
      strategy:
        'Deploy the unified campaign message: "Your summer is sweeter with Juhayna Classic" (صيفك أحلى مع جهينة كلاسيك). Grounded in 4 pillars: natural refreshing taste, family suitability, wide availability, and affordable multi-tier pricing (235ml for 10 EGP on-the-go & 1L for 38 EGP family consumption).',
      creativeIdea:
        'A lighthearted, refreshing creative concept showing how Juhayna Classic turns intense summer heat moments into fun, energetic memories. Supported by lively character animations (sunglasses-wearing juice cartons surfing and relaxing) and relatable everyday Egyptian summer situations.',
      execution: [
        'Mass Sampling at Ain Sokhna & North Coast toll gates offering complimentary chilled 235ml cartons to arriving beach travelers.',
        'High-Impact Out-Of-Home (OOH) unmissable billboards situated on key desert and coastal travel highways.',
        'Eye-catching Supermarket In-Store POSM displays and branded retail end-caps in major hypermarkets.',
        'Targeted digital campaign across Facebook, Instagram, TikTok, and YouTube with interactive summer contests.',
      ],
      channels: [
        'Out-Of-Home (OOH) Billboards on Sokhna & Sahel highways',
        'Experiential Product Sampling Pods',
        'In-Store POSM Displays & Retail Activation',
        'Digital & Social Media (Meta, TikTok, YouTube)',
      ],
      budgetAndMedia: [
        {
          channel: 'Paid Digital Media (Meta & TikTok Reach, Video Ads)',
          allocation: '40%',
          detail: 'Broad demographic reach, interactive video reels, and delivery app promotions.',
        },
        {
          channel: 'Prime OOH Billboards & Travel Corridors',
          allocation: '25%',
          detail: 'High-visibility billboard placement on Cairo-Alex, North Coast, and Ain Sokhna routes.',
        },
        {
          channel: 'Beach & Gate Sampling Activations',
          allocation: '20%',
          detail: 'Direct consumer sampling booths, chilled distribution teams, and branded merchandise.',
        },
        {
          channel: 'In-Store Retail Merchandising & POSM',
          allocation: '15%',
          detail: 'End-cap supermarket chillers, POS banners, and special multi-pack offers.',
        },
      ],
      resultsAndKpis: [
        'Targeted 25 Million EGP campaign media allocation benchmark',
        'Over 100,000 chilled samples distributed across coastal travel gates',
        'Projected 20%+ increase in retail checkout velocity during peak summer months',
      ],
      visualHighlights: [
        'Individual 235ml Pack: 10 EGP (Easy on-the-go refreshment)',
        'Family 1L Pack: 38 EGP (Daily household consumption & sharing)',
        'Tone of Voice: Refreshing, Joyful, Family-Friendly, Full of Energy',
      ],
    },
    tags: ['FMCG Marketing', '360° Campaign', 'Summer Activation', 'Retail POSM', 'Creative Strategy'],
  },

  // --------------------------------------------------
  // PROJECT 02: Subway Egypt — Made My Way
  // --------------------------------------------------
  {
    id: 'subway-made-my-way',
    title: 'Subway Egypt — Made My Way',
    category: 'QSR • 360° Marketing Campaign • Strategy',
    description:
      'An integrated 360° campaign concept built around customization, self-expression and giving customers control over their food choices.',
    coverImage: '/projects/subway-cover.jpg',
    badge: 'Integrated 360° Strategy',
    themeColor: '#16a34a',
    fileAttachment: '/documents/subway-case-study.docx',
    fileType: 'DOCX',
    fileLabel: 'subway-case-study.docx',
    galleryImages: [
      {
        url: '/projects/subway-cover.jpg',
        title: 'Campaign Visual Identity: Subway Made My Way',
        caption: 'Hero campaign artwork emphasizing 100% personalized submarine sandwich ingredients and self-expression.',
      },
      {
        url: '/projects/subway-activation.jpg',
        title: 'University Campus Build Battle Activation',
        caption: '60-second sandwich build competition engaging Egyptian university students and creating viral social content.',
      },
    ],
    caseStudy: {
      overview:
        'A comprehensive 360-degree marketing campaign concept designed to reposition Subway Egypt from an unexciting "diet food" perception into an empowering, craveable quick-service brand. The campaign celebrates individual choice, allowing customers to take control in a busy world where other decisions are often made for them.',
      problem:
        'Subway in Egypt suffered from a restrictive "diet food" perception, weaker craveability compared to fried chicken and burger QSRs, aggressive price competition, and strong customer loyalty to traditional Egyptian fast food.',
      objective:
        'Revitalize brand relevance among Gen Z, gym enthusiasts, and working professionals; boost delivery and dine-in orders by +25%; and increase unaided brand awareness by +20% over 90 days.',
      targetAudience:
        'Gen Z (16-24) seeking self-expression; Working Professionals (25-35) looking for quick, guilt-free lunches; Gym Members/Athletes desiring high-protein functional fuel; and University Students wanting affordable customization.',
      consumerInsight:
        '"In Egypt, life is full of other people’s decisions. Food is one of the few decisions still fully in your hands."',
      strategy:
        'Reposition Subway’s build-your-own sandwich counter as a daily moment of autonomy. Main Tagline: "Subway. Made My Way." Supporting Lines: "No one decides but you" • "Fresh, your way" • "You’re the chef — we just help."',
      creativeIdea:
        'Dramatize everyday situations where Egyptians lose control over their choices (traffic, unsolicited advice, family decisions) and contrast them with the empowering, sensory freedom of walking into Subway and dictating every single ingredient.',
      execution: [
        'University Build Battle: 60-second campus competitions where student teams build the most creative sub for peer votes and campus discounts.',
        'Mall Mood Wall: Interactive touchscreen kiosk where shoppers select their mood and receive a matching custom sandwich recipe recommendation.',
        'Guerrilla Street Art & Kiosks: "Who decided this?" interactive installations dramatizing everyday loss of choice.',
        'Creator Tiers: Gym creators co-creating "The Gym Bro Sub" (high protein/low carb), Gen Z comedy skits, and AR TikTok filters ("Sub Decision Maker").',
      ],
      channels: [
        'Paid Digital (TikTok, Meta Performance Ads, Google Search, Waze Ads)',
        'Prime OOH Billboards (New Cairo, Sheikh Zayed, Heliopolis)',
        'Influencer Marketing (Fitness, Food Reviewers, Comedy Creators)',
        'Subway Mobile App Incentives & Delivery Aggregators',
      ],
      swot: {
        strengths: [
          'Global trust & high food quality standards',
          '100% ingredient customization and freshly baked bread',
          'Alignment with growing health and fitness awareness in Egypt',
        ],
        weaknesses: [
          'Narrow "diet food / unexciting" consumer perception',
          'Perceived weaker craveability compared to fried QSR options',
          'Historically limited youth engagement on TikTok/Reels',
        ],
        opportunities: [
          'Strong alignment with Gen Z customization and TikTok food trends',
          'Rapid growth of Egyptian delivery apps and dark-store orders',
          'Co-branded high-protein fitness menu items',
        ],
        threats: [
          'Aggressive market price competition and inflation pressures',
          'Deep consumer loyalty to established local shawarma/koshary',
          'Rising ingredient supply costs',
        ],
      },
      budgetAndMedia: [
        { channel: 'Paid Digital Media (TikTok, Reels, Meta Ads, Waze)', allocation: '40%', detail: 'Reach, app installs, and delivery orders.' },
        { channel: 'OOH & On-Ground Activations', allocation: '25%', detail: 'Billboards, campus build battles, and interactive mall walls.' },
        { channel: 'Influencer Marketing', allocation: '20%', detail: 'Fitness creators, food reviewers, and Gen Z comedy partnerships.' },
        { channel: 'Promotions, Loyalty & Discounts', allocation: '15%', detail: 'App first-order discounts, creator codes, and referral perks.' },
      ],
      timelineRollout: [
        { phase: 'Teaser Phase', days: 'Days 1–10', deliverables: '"Who decided this?" mystery content, unbranded street interviews, guerrilla teaser billboards.' },
        { phase: 'Official Launch', days: 'Days 11–20', deliverables: 'Hero campaign film launch, major influencer wave, OOH billboard reveals.' },
        { phase: 'Amplification', days: 'Days 21–45', deliverables: 'TikTok #MadeMyWay challenge launch, University Build Battle roadshow.' },
        { phase: 'Conversion Push', days: 'Days 46–65', deliverables: 'App promo discounts, Mall Mood Wall deployments, delivery aggregator deals.' },
        { phase: 'Continuity & Loyalty', days: 'Days 66–80', deliverables: 'App loyalty rewards push, creator signature sub menu integration.' },
        { phase: 'Advocacy & Recap', days: 'Days 81–90', deliverables: 'Challenge winners announcement, campaign recap video, results release.' },
      ],
      resultsAndKpis: [
        '+20% Unaided Brand Awareness target over 90 days',
        '+25% Delivery & Dine-in Order Volume growth',
        '3,000,000+ Organic TikTok and Instagram Video Views',
        '10,000+ Content challenge entries generated by consumers',
        '+40% Subway mobile loyalty app registrations',
      ],
    },
    tags: ['QSR Marketing', 'Brand Repositioning', '360° Strategy', 'SWOT Analysis', '90-Day Rollout'],
  },

  // --------------------------------------------------
  // PROJECT 03: McDonald's — Competitor Analysis
  // --------------------------------------------------
  {
    id: 'mcdonalds-competitor-analysis',
    title: "McDonald's — Competitor Analysis",
    category: 'Research • Excel • Competitor Analysis',
    description:
      'A competitor analysis project organized around market research, competitor comparison, social media analysis and strategic action planning.',
    coverImage: '/projects/mcdonalds-cover.jpg',
    badge: 'Market Research & Excel Model',
    themeColor: '#ea580c',
    fileAttachment: '/documents/mcdonalds-competitor-analysis.xlsx',
    fileType: 'XLSX',
    fileLabel: 'mcdonalds-competitor-analysis.xlsx',
    galleryImages: [
      {
        url: '/projects/mcdonalds-cover.jpg',
        title: "McDonald's vs KFC vs Burger King Dashboard",
        caption: 'Executive competitive landscape comparing locations, pricing, service mix, customer care, and digital performance.',
      },
    ],
    caseStudy: {
      overview:
        'An in-depth competitive benchmarking analysis evaluating McDonald’s Egypt against direct QSR rivals KFC and Burger King. The project synthesized location footprints, pricing structures, multichannel customer support lines, social media engagement metrics, and identified clear strategic gaps.',
      problem:
        'Despite dominant market leadership and massive social media followings, McDonald’s Egypt faces customer service inconsistencies between branches, growing price sensitivity among middle-class consumers, and underutilized digital channels like YouTube.',
      objective:
        'Structure a rigorous competitive matrix using Microsoft Excel, benchmark digital followings against actual customer conversion, uncover unexploited channel opportunities, and formulate an actionable strategic roadmap.',
      targetAudience:
        'QSR brand management, marketing strategists, digital community managers, and retail operations teams operating in the Egyptian fast-food sector.',
      strategy:
        'Benchmarked the three giants across four primary pillars: Physical Reach & Services, Customer Care & Hotlines, Social Media Performance (Facebook/Instagram/YouTube), and SWOT Profiles. Converted findings into a prioritized Strategic Action Plan with measurable KPIs.',
      execution: [
        'Location & Service Matrix: McDonald’s (100+ branches established since 1994, McCafé, 24h McDelivery, Drive-thru) vs KFC (broad national coverage, delivery focus) vs Burger King (urban concentration, fewer drive-thrus).',
        'Customer Care Comparison: McDonald’s 19991 with 24h WhatsApp automated bot (01209719991) and app order tracking vs KFC 19019 with WhatsApp vs Burger King 16977 with lower app rating (~2.7/5).',
        'Social Media Metrics Benchmark: McDonald’s (1M+ Instagram followers, 3,421 posts) vs KFC (114k followers) vs Burger King (49k followers). Identified that post frequency is comparable (~15-25/month), proving the real opportunity lies in conversion, not vanity reach.',
        'Channel Gap Discovery: YouTube is virtually inactive for all three brands in Egypt, representing a major first-mover opportunity for McDonald’s Shorts and behind-the-scenes content.',
      ],
      channels: ['Microsoft Excel Data Modeling', 'Social Media Analytics (Meta & Instagram)', 'Customer Service Audit', 'Competitive Matrix'],
      swot: {
        strengths: [
          'McDonald’s: Strong brand trust, unmatched geographical footprint, rapid delivery, diversified menu (McBreakfast & McCafé).',
          'KFC: Sharp specialization in crispy fried chicken, competitive family bucket deals.',
          'Burger King: Distinct signature product (The Whopper), daring and witty social media tone.',
        ],
        weaknesses: [
          'McDonald’s: Relatively higher pricing perception, service speed variance between high-traffic branches.',
          'KFC: Less diverse overall menu offerings, lower social media follower count.',
          'Burger King: Narrower branch presence in secondary cities, high dependency on a single hero item.',
        ],
        opportunities: [
          'McDonald’s: First-mover dominance on Egyptian YouTube Shorts and creator-driven foodie content.',
          'Direct in-app ordering discounts to bypass aggregator commission fees.',
          'Value-oriented meal tier communications to combat inflation perception.',
        ],
        threats: [
          'High price sensitivity and consumer budget reallocation.',
          'Intense local street-food competition offering larger portions at lower costs.',
          'Global commodity supply chain volatility.',
        ],
      },
      resultsAndKpis: [
        'Identified YouTube as an untapped zero-competition channel for Egyptian QSRs',
        'Formulated 5-point Action Plan prioritizing Service Consistency (CSAT), App Conversion, and Local Content',
        'Structured complete Excel benchmark model capturing 10+ operational dimensions',
      ],
      visualHighlights: [
        'Instagram Followers: McDonald’s (1,000,000+) vs KFC (114,000) vs Burger King (49,000)',
        'Customer Service Hotline: McDonald’s 19991 | KFC 19019 | Burger King 16977',
        'Strategic Action Priority: High priority on converting massive social reach directly to app delivery orders',
      ],
    },
    tags: ['Competitor Analysis', 'Excel Modeling', 'QSR Market Research', 'Social Media Audit', 'Strategic Action Plan'],
  },

  // --------------------------------------------------
  // PROJECT 04: Alex Ahalina — Banking Concept
  // --------------------------------------------------
  {
    id: 'alex-ahalina-banking',
    title: 'Alex Ahalina — Banking Concept',
    category: 'Banking • Business Idea • Customer Experience',
    description:
      'A customer-focused banking concept designed around helping younger customers support elderly parents through pension-deposit notifications and more accessible ATM experiences.',
    coverImage: '/projects/alex-ahalina-cover.jpg',
    badge: 'Customer Experience & Inclusion',
    themeColor: '#2563eb',
    fileAttachment: '/documents/alex-ahalina-banking-concept.pdf',
    fileType: 'PDF',
    fileLabel: 'alex-ahalina-banking-concept.pdf',
    galleryImages: [
      {
        url: '/projects/alex-ahalina-cover.jpg',
        title: 'Alex Ahalina Mobile App & ATM Concept',
        caption: 'Caregiver notification dashboard and simplified high-contrast ATM interface for senior citizen family members.',
      },
    ],
    caseStudy: {
      overview:
        'A human-centered banking concept created for Bank of Alexandria (Alex Bank) addressing intergenerational family financial care. The initiative enables adult children to digitally support and monitor elderly parents’ pension receipts, offering automated deposit alerts, zero-fee linked family sub-accounts, and a simplified high-accessibility ATM interface.',
      problem:
        'Millions of elderly Egyptian pensioners endure exhausting queues at bank branches and post offices on the first of each month, often making repeated visits simply to check if their government pension has cleared. Meanwhile, younger adult children worry about their parents navigating crowded ATMs, forgotten PINs, and potential card retention.',
      objective:
        'Bridge the digital divide between tech-savvy adult children and elderly parents, eliminate unnecessary branch trips for pension verification, and position Alex Bank as the most compassionate, family-oriented bank in Egypt.',
      targetAudience:
        'Primary Users: Working-age sons and daughters (22-45) who manage family logistics. Beneficiaries: Elderly parents (60+) receiving monthly government or private pensions across Egyptian governorates.',
      consumerInsight:
        '"I want to protect my elderly parents from standing in long queues and struggling with complicated screens, without taking away their dignity and financial independence."',
      strategy:
        'Apply the 4Ps framework to create a dual-experience banking solution: "Alex Ahalina" (Family Care Banking). An empathetic mobile layer for the child paired with an ultra-intuitive, senior-friendly ATM mode for the parent.',
      creativeIdea:
        '"Caring for those who raised us should be effortless." Transforming monthly pension anxiety into a peaceful, instant notification on the child’s phone: "Mom’s pension has arrived."',
      execution: [
        'Instant Pension Alerts: Automated WhatsApp and SMS notification triggered the second government pension funds hit the account, notifying the caregiver child immediately.',
        'Accessible ATM Senior Mode: When an Ahalina-flagged debit card is inserted into any Alex Bank ATM, the screen switches automatically to high-contrast oversized fonts, simplified 3-button choices (Cash, Balance, Receipt), and optional voice guidance.',
        'Guardian Safety Guard: Real-time fraud detection and daily cash withdrawal threshold alerts sent to the designated family caregiver.',
        'Zero-Fee Family Transfers: Instant, frictionless digital transfers between caregiver accounts and parent accounts with zero transaction fees.',
      ],
      channels: [
        'Alex Bank Mobile Banking Application',
        'Nationwide ATM Network (Accessibility UI Update)',
        'Branch Customer Service Desks & Senior Ambassador Pods',
        'Community Financial Literacy & Family Awareness Campaigns',
      ],
      resultsAndKpis: [
        'Projected 70% reduction in unnecessary in-branch inquiry visits by senior pensioners',
        'Targeted adoption of 50,000+ linked family caregiver accounts within the first year',
        'Substantial increase in retail customer satisfaction (CSAT) and family brand loyalty',
      ],
      visualHighlights: [
        'Product: Linked caregiver sub-account + Senior-accessible ATM interface',
        'Price: 100% free service for Alex Bank pension account holders',
        'Place: Available at 300+ Alex Bank branches and 1,000+ nationwide ATMs',
        'Promotion: Empathy-driven Ramadan and Mother’s Day family campaign',
      ],
    },
    tags: ['Retail Banking', 'Customer Experience (CX)', 'Financial Inclusion', '4Ps Marketing', 'Service Innovation'],
  },
];
