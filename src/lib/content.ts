export type Language = 'en' | 'hi';

export interface CapabilityItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  scopeDesc: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  category: 'surveys' | 'data' | 'manpower';
  categoryLabel: string;
  scopeTag: string;
  title: string;
  desc: string;
  metricLabel: string;
  status: string;
}

export interface JobItem {
  id: string;
  title: string;
  dept: string;
  deptKey: 'Strategy' | 'Research' | 'Analytics' | 'Field' | 'Media';
  type: string;
  location: string;
  desc: string;
}

export interface SiteContent {
  topStrip: {
    announcement: string;
    linkText: string;
  };
  nav: {
    brandName: string;
    brandSub: string;
    links: { label: string; href: string; badge?: string }[];
    phone: string;
    connectBtn: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    p1Bold: string;
    p1Rest: string;
    p2: string;
    taglineBold: string;
    btnServices: string;
    btnConnect: string;
    metrics: {
      val: string;
      label: string;
      sub: string;
    }[];
  };
  about: {
    badge: string;
    heading: string;
    headingHighlight: string;
    p1: string;
    p2: string;
    philosophyLabel: string;
    philosophyQuote: string;
    visionMissionBadge: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    values: string[];
  };
  capabilities: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subhead: string;
    viewScopeBtn: string;
    highlightBadge: string;
    highlightScopeBtn: string;
    highlightRosterBtn: string;
    pillars: CapabilityItem[];
  };
  navyBanner: {
    badge: string;
    headingLine1: string;
    headingHighlight: string;
    desc: string;
    btnBriefing: string;
    btnPhone: string;
  };
  expertise: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subhead: string;
    cards: { title: string; desc: string }[];
  };
  methodology: {
    badge: string;
    heading: string;
    headingHighlight: string;
    flow: string;
    steps: { num: string; phase: string; title: string; desc: string }[];
  };
  projects: {
    badge: string;
    heading: string;
    headingHighlight: string;
    filterLabels: { all: string; surveys: string; data: string; manpower: string };
    cards: ProjectItem[];
  };
  careers: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subheadBold: string;
    subheadLight: string;
    searchPlaceholder: string;
    deptFilters: { key: string; label: string }[];
    applyBtn: string;
    jobs: JobItem[];
    rosterTitle: string;
    rosterDesc: string;
    rosterBtn: string;
  };
  contact: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subhead: string;
    phoneLabel: string;
    phoneVal: string;
    emailLabel: string;
    emailVal: string;
    webLabel: string;
    webVal: string;
    hqLabel: string;
    hqVal: string;
    formTitle: string;
    formSub: string;
    fields: {
      name: string;
      namePlaceholder: string;
      org: string;
      orgPlaceholder: string;
      designation: string;
      designationPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: string[];
      location: string;
      locationPlaceholder: string;
      details: string;
      detailsPlaceholder: string;
      submitBtn: string;
      submittingText: string;
    };
  };
  footer: {
    brandName: string;
    tagline: string;
    desc: string;
    navHeading: string;
    servicesHeading: string;
    contactHeading: string;
    navLinks: { label: string; href: string }[];
    servicesList: string[];
    contactLines: string[];
    copyright: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    backToTop: string;
  };
  modals: {
    capability: {
      badgePrefix: string;
      deliverablesHeading: string;
      commissionBtn: string;
    };
    apply: {
      badge: string;
      subhead: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      expLabel: string;
      expOptions: string[];
      locationLabel: string;
      locationPlaceholder: string;
      portfolioLabel: string;
      portfolioPlaceholder: string;
      resumeLabel: string;
      resumePrompt: string;
      noteLabel: string;
      notePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
    };
    toast: {
      enquirySuccessTitle: string;
      enquirySuccessBody: string;
      applySuccessTitle: string;
      applySuccessBody: string;
    };
  };
}

export const contentData: Record<Language, SiteContent> = {
  en: {
    topStrip: {
      announcement: 'PAN India Ground Research & Manpower Deployment Active across 14+ States',
      linkText: 'View Active Openings →',
    },
    nav: {
      brandName: 'KAUTILYA',
      brandSub: 'Research & Consulting',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Capabilities', href: '#services' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Methodology', href: '#methodology' },
        { label: 'Projects', href: '#projects' },
        { label: 'Careers', href: '#careers', badge: 'Hiring' },
      ],
      phone: '+91 7900595639',
      connectBtn: 'Connect With Us',
      langToggle: 'हिन्दी',
    },
    hero: {
      badge: 'Where Political Intelligence Meets Strategic Execution',
      titleLine1: 'Understanding Politics. Building Strategies.',
      titleLine2: '',
      titleHighlight: 'Delivering Impact.',
      p1Bold: 'Kautilya Research & Consulting (KRAC)',
      p1Rest:
        ' delivers integrated solutions across political strategy, election management, statistical research, big data analytics, media intelligence, and grassroots field operations.',
      p2: 'We combine strategic thinking, ground-level intelligence, research-driven insights and professional execution to help political organisations and public representatives navigate complex political environments.',
      taglineBold: 'Our Expertise. Your Strategic Advantage.',
      btnServices: 'Explore Our Services',
      btnConnect: 'Connect With Us',
      metrics: [
        { val: '500+', label: 'Constituency Studies', sub: 'Vidhan & Lok Sabha' },
        { val: '10M+', label: 'Interviews Conducted', sub: 'CAPI & CATI Verified' },
        { val: '10,000+', label: 'Field Investigators', sub: 'PAN India Database' },
        { val: '28+', label: 'States & Union Territories', sub: 'Regional Linguistic Depth' },
      ],
    },
    about: {
      badge: 'About Kautilya Research & Consulting',
      heading: 'Strategy Begins with Understanding the ',
      headingHighlight: 'Ground Reality.',
      p1: "In today's dynamic political environment, informed decisions require more than conventional approaches. They demand reliable research, a deeper understanding of public sentiment, strong organisational capabilities and effective execution.",
      p2: 'At KRAC, we bring together political consultants, research professionals, data analysts, campaign managers and field operations teams to deliver comprehensive consulting solutions. From constituency-level assessments to large-scale research projects and campaign operations, we focus on transforming information into actionable intelligence.',
      philosophyLabel: 'Our Philosophy',
      philosophyQuote:
        '"We believe that every effective strategy begins with understanding. Understanding people, identifying challenges, analysing information and executing solutions form the foundation of our consulting philosophy."',
      visionMissionBadge: 'Vision & Mission',
      visionTitle: 'Vision:',
      visionText:
        'To emerge as a trusted and leading political consulting and research organisation in India, recognised for strategic excellence, research capabilities, innovation and effective execution.',
      missionTitle: 'Mission:',
      missionText:
        'To empower political organisations, public representatives and institutions with credible research, actionable intelligence, strategic consultation and professional operational solutions.',
      valuesTitle: 'Our 7 Core Values',
      values: [
        'Integrity & Professional Ethics',
        'Research & Accuracy',
        'Strategic Thinking',
        'Innovation & Technology',
        'Professional Excellence',
        'Accountability & Transparency',
        'Unwavering Commitment to Execution',
      ],
    },
    capabilities: {
      badge: 'Integrated Capabilities',
      heading: 'Comprehensive Consulting & ',
      headingHighlight: 'Research Solutions.',
      subhead: 'From constituency assessments to large-scale ground deployment and digital war rooms.',
      viewScopeBtn: 'View Complete Scope',
      highlightBadge: 'Specialized Hiring & Deployment',
      highlightScopeBtn: 'View Detailed Scope',
      highlightRosterBtn: 'Join Manpower Network',
      pillars: [
        {
          id: '01',
          num: '01',
          title: 'Political Consulting & Election Strategy',
          shortDesc: 'Developing strategic frameworks, constituency assessments and customised campaign plans.',
          bullets: [
            'Election strategy and campaign planning',
            'Assembly & constituency-level assessments',
            'Political landscape & candidate assessments',
            'Strategic monitoring and post-campaign evaluation',
          ],
          scopeDesc:
            'We provide strategic consulting solutions designed to address the evolving requirements of political organisations and electoral assignments.',
          deliverables: [
            'Election strategy and campaign planning',
            'Assembly and constituency-level assessments',
            'Political landscape analysis',
            'Candidate and organisational assessments',
            'Campaign coordination across grassroots networks',
            'Strategic monitoring and evaluation',
          ],
        },
        {
          id: '02',
          num: '02',
          title: 'Political Research & Opinion Polls',
          shortDesc: 'Conducting structured surveys, public opinion research, voter feedback studies and constituency-level assessments.',
          bullets: [
            'Public opinion surveys & voter feedback',
            'Candidate assessment & perception surveys',
            'Governance & public issue assessments',
            'Pre & post-election comparative studies',
          ],
          scopeDesc:
            'Research is fundamental to understanding political environments and public perspectives.',
          deliverables: [
            'Public opinion surveys',
            'Constituency-level research',
            'Voter feedback studies',
            'Political perception research',
            'Candidate assessment surveys',
            'Governance and public issue assessments',
            'Pre-election and post-election studies',
            'Exit poll research, subject to applicable legal requirements',
          ],
        },
        {
          id: '03',
          num: '03',
          title: 'Data Analytics & Intelligence',
          shortDesc: 'Transforming raw information into meaningful insights through data collection, verification, analysis and reporting.',
          bullets: [
            'Multi-tier data cleaning and verification',
            'Booth-level micro-data analysis',
            'Constituency database management',
            'Interactive visual research dashboards',
          ],
          scopeDesc:
            'We transform collected information into structured databases, meaningful analysis and actionable insights.',
          deliverables: [
            'Data collection and processing',
            'Data cleaning and verification',
            'Booth-level data analysis',
            'Constituency database management',
            'Survey data analytics',
            'Research dashboards',
            'Data visualisation and reporting',
            'Information management systems',
          ],
        },
        {
          id: '04',
          num: '04',
          title: 'Ground Operations & Booth Management',
          shortDesc: 'Building operational capabilities through field teams, booth-level research, volunteer coordination and execution.',
          bullets: [
            'Ground team rapid deployment',
            'Booth-level organisational research',
            'Volunteer network coordination',
            'Local stakeholder and influencer mapping',
          ],
          scopeDesc:
            'We support large-scale ground operations through structured planning, professional manpower and field-level coordination.',
          deliverables: [
            'Ground team deployment',
            'Booth-level organisational research',
            'Field activity coordination',
            'Volunteer network management',
            'Local stakeholder research',
            'Field monitoring and reporting',
            'Constituency-level operational support',
          ],
        },
        {
          id: '05',
          num: '05',
          title: 'Media & Digital Communication',
          shortDesc: 'Delivering digital media strategies, content development, creative production, social media management and monitoring.',
          bullets: [
            'Narrative buildup & message framing',
            'Social media management & creative ads',
            'High-impact video editing & design',
            'Media monitoring & reputation checks',
          ],
          scopeDesc:
            'We provide integrated digital communication and media management services.',
          deliverables: [
            'Social media management',
            'Digital campaign planning',
            'Content strategy and development',
            'Graphic design and creative production',
            'Video editing and production',
            'Media monitoring',
            'Digital reputation and communication assessment',
            'Performance reporting & narrative buildup',
          ],
        },
        {
          id: '06',
          num: '06',
          title: 'War Room & Campaign Management',
          shortDesc: 'Establishing structured monitoring systems, centralised coordination and campaign execution frameworks.',
          bullets: [
            'War room planning and physical setup',
            'Centralised campaign coordination',
            'Daily activity & progress tracking',
            'Incident monitoring and rapid escalation',
          ],
          scopeDesc:
            'We establish structured campaign monitoring and coordination systems to support effective project execution.',
          deliverables: [
            'War room planning and setup',
            'Centralised campaign coordination',
            'Daily activity monitoring',
            'Field reporting systems',
            'Campaign progress tracking',
            'Issue monitoring and escalation',
            'Strategic review and reporting',
          ],
        },
        {
          id: '07',
          num: '07',
          title: 'PAN India Research & Manpower Solutions',
          shortDesc: 'Deploying specialised research professionals, field investigators, survey executives and project teams across different regions of India.',
          bullets: [
            'CATI – Telephonic Interviewing',
            'CAPI – Tablet Personal Surveys',
            'Audit & GPS/Voice QC Protocols',
            'Bilingual Teams in 14+ States',
          ],
          scopeDesc:
            'We provide scalable research and manpower support for projects across different regions of India.',
          deliverables: [
            'CATI – Computer Assisted Telephonic Interviewing',
            'CAPI – Computer Assisted Personal Interviewing',
            'Face-to-face field surveys',
            'Large-scale data collection',
            'Data verification and quality control',
            'Regional language research teams',
            'Survey executives and field investigators',
            'Project-based manpower deployment',
          ],
        },
      ],
    },
    navyBanner: {
      badge: 'Research-Led. Strategy-Driven. Execution-Focused.',
      headingLine1: 'Gain Actionable Clarity in Your ',
      headingHighlight: 'Target Constituencies.',
      desc: 'Let our political research and consulting team analyze baseline voter sentiments, organizational capacity, and demographic matrices to structure your path forward.',
      btnBriefing: 'Request Confidential Briefing',
      btnPhone: 'Direct Line: +91 7900595639',
    },
    expertise: {
      badge: 'Our Expertise',
      heading: 'Integrated Capabilities Across ',
      headingHighlight: 'Multiple Domains.',
      subhead: 'KRAC combines specialised knowledge, professional manpower and operational systems to deliver comprehensive solutions.',
      cards: [
        {
          title: 'Political Intelligence',
          desc: 'Understanding political environments through structured research and analytical assessments.',
        },
        {
          title: 'Electoral Research',
          desc: 'Conducting constituency-level studies, public opinion research and field assessments.',
        },
        {
          title: 'Data & Analytics',
          desc: 'Managing, processing and interpreting large-scale research datasets into actionable intelligence.',
        },
        {
          title: 'Grassroots Operations',
          desc: 'Supporting field-level coordination, constituency operations and booth-level assessments.',
        },
        {
          title: 'Media Intelligence',
          desc: 'Monitoring media developments, analysing communication trends and supporting media strategies.',
        },
        {
          title: 'Campaign Execution',
          desc: 'Integrating planning, manpower, coordination and real-time performance monitoring.',
        },
      ],
    },
    methodology: {
      badge: 'Our Methodology',
      heading: 'A Structured Approach to ',
      headingHighlight: 'Effective Execution.',
      flow: 'Understand → Research → Analyse → Strategise → Execute → Evaluate',
      steps: [
        {
          num: '01 / DISCOVERY',
          phase: 'DISCOVERY',
          title: 'Discovery & Assessment',
          desc: 'Understanding project objectives, requirements, geography, caste/demographic dynamics, and operational challenges.',
        },
        {
          num: '02 / RESEARCH',
          phase: 'RESEARCH',
          title: 'Research & Intelligence',
          desc: 'Conducting field research, structured questionnaires, sample stratification, and public opinion surveys.',
        },
        {
          num: '03 / ANALYTICS',
          phase: 'ANALYTICS',
          title: 'Data Processing & Analysis',
          desc: 'Validating information, algorithmic data cleaning, organizing booth datasets and developing predictive insights.',
        },
        {
          num: '04 / STRATEGY',
          phase: 'STRATEGY',
          title: 'Strategic Planning',
          desc: 'Preparing customised strategies, message framing, digital dissemination, and operational booth mobilization plans.',
        },
        {
          num: '05 / OPERATIONS',
          phase: 'OPERATIONS',
          title: 'Deployment & Execution',
          desc: 'Mobilising professionals, establishing war room coordination, and executing grassroots campaign activities.',
        },
        {
          num: '06 / REVIEW',
          phase: 'REVIEW',
          title: 'Monitoring & Evaluation',
          desc: 'Tracking progress, conducting quality checks, auditing turnout data, and delivering structured performance reviews.',
        },
      ],
    },
    projects: {
      badge: 'Execution Experience',
      heading: 'Research, Operations & ',
      headingHighlight: 'Consulting Experience.',
      filterLabels: {
        all: 'All Projects',
        surveys: 'Ground Surveys',
        data: 'Data & Tech',
        manpower: 'Manpower',
      },
      cards: [
        {
          id: 'p1',
          category: 'surveys',
          categoryLabel: 'Constituency Assessment',
          scopeTag: 'Vidhan Sabha',
          title: 'Assembly-Level Ground Perception Studies',
          desc: 'Structured face-to-face sample surveys conducted across 40+ assembly constituencies evaluating anti-incumbency, candidate favorability, and welfare delivery.',
          metricLabel: 'Sample: 65,000+ Interviews',
          status: 'Delivered',
        },
        {
          id: 'p2',
          category: 'manpower',
          categoryLabel: 'PAN India Manpower',
          scopeTag: 'Multi-State',
          title: 'Large-Scale Field Investigator Mobilization',
          desc: 'Rapid deployment of 500+ verified survey executives and bilingual supervisors across Northern and Western states within 72 hours of project signoff.',
          metricLabel: '500+ On-Ground Staff',
          status: 'Completed',
        },
        {
          id: 'p3',
          category: 'data',
          categoryLabel: 'Analytics & Intelligence',
          scopeTag: 'Constituency Suite',
          title: 'Booth-Level Voter Profiling & Dashboard',
          desc: 'Integration of 1,200+ polling booth voting histories with current demographic assessments and live visualization dashboards for core strategy rooms.',
          metricLabel: '1,200+ Booths Mapped',
          status: 'Active',
        },
        {
          id: 'p4',
          category: 'surveys',
          categoryLabel: 'Telephonic Polling',
          scopeTag: 'Statewide',
          title: 'CATI Telephonic Sentiment Tracking',
          desc: 'Multi-wave telephonic polling across 5 regional dialects with instant audio quality audits, assessing real-time reaction to newly declared policies.',
          metricLabel: '150,000+ Calls',
          status: 'Delivered',
        },
        {
          id: 'p5',
          category: 'data',
          categoryLabel: 'War Room & Media',
          scopeTag: '24/7 Operations',
          title: 'Centralized Campaign War Room Setup',
          desc: 'Physical and digital setup of command centers tracking daily field schedules, viral narrative trends, fake news counters, and candidate travel.',
          metricLabel: 'Daily Leadership Reports',
          status: 'Standard',
        },
        {
          id: 'p6',
          category: 'manpower',
          categoryLabel: 'Quality Audit',
          scopeTag: 'Verification',
          title: 'High-Integrity Ground Data Verification',
          desc: 'Independent audit and telephonic back-check protocols on large third-party datasets, purging invalid submissions and certifying clean insights.',
          metricLabel: '99.4% Accuracy Target',
          status: 'Continuous',
        },
      ],
    },
    careers: {
      badge: 'Careers at KRAC',
      heading: 'Build Your Career With ',
      headingHighlight: 'KRAC.',
      subheadBold: 'Be Part of a Team That Turns Research into Action.',
      subheadLight: 'We offer opportunities for individuals interested in political consulting, research, analytics, communication, technology and field operations.',
      searchPlaceholder: 'Search position (e.g. Consultant, Analyst, Field)...',
      deptFilters: [
        { key: 'all', label: 'All Roles' },
        { key: 'Strategy', label: 'Strategy' },
        { key: 'Research', label: 'Research & Surveys' },
        { key: 'Analytics', label: 'Data Analytics' },
        { key: 'Field', label: 'Field Operations' },
        { key: 'Media', label: 'Media & Creative' },
      ],
      applyBtn: 'Apply For Position',
      jobs: [
        {
          id: 'j1',
          title: 'Political Consultant',
          dept: 'Strategy',
          deptKey: 'Strategy',
          type: 'Full-Time',
          location: 'New Delhi / Regional Deployment',
          desc: 'Develop constituency assessment plans, coordinate campaign managers, analyze local political dynamics, and prepare candidate briefings.',
        },
        {
          id: 'j2',
          title: 'Research Associate / Senior RA',
          dept: 'Research',
          deptKey: 'Research',
          type: 'Full-Time',
          location: 'State Capitals / On-Site',
          desc: 'Design survey tools and structured questionnaires, lead Focus Group Discussions (FGDs), supervise field quotas, and synthesize research reports.',
        },
        {
          id: 'j3',
          title: 'Data Analyst',
          dept: 'Analytics',
          deptKey: 'Analytics',
          type: 'Full-Time',
          location: 'Hybrid / Central Office',
          desc: 'Process survey datasets with Python/SQL, manage booth databases, build regression models on voting history, and create interactive BI dashboards.',
        },
        {
          id: 'j4',
          title: 'Campaign Manager',
          dept: 'Strategy',
          deptKey: 'Strategy',
          type: 'Full-Time',
          location: 'Assembly Field HQ',
          desc: 'Oversee day-to-day candidate scheduling, coordinate volunteer cadence, manage rally setups, and ensure seamless war room alignment.',
        },
        {
          id: 'j5',
          title: 'Ground Research Executive',
          dept: 'Field Operations',
          deptKey: 'Field',
          type: 'Project Based',
          location: 'Multiple Indian States',
          desc: 'Administer tablet-based CAPI surveys in villages and urban wards, record voter issues, adhere to sampling routes, and ensure high-integrity interviews.',
        },
        {
          id: 'j6',
          title: 'Social Media & Content Writer',
          dept: 'Media',
          deptKey: 'Media',
          type: 'Full-Time',
          location: 'New Delhi / Central Desk',
          desc: 'Draft sharp political communications in English and Hindi, script video reels, supervise visual creatives, and monitor digital conversations.',
        },
      ],
      rosterTitle: 'Looking for other roles?',
      rosterDesc: 'We regularly hire Graphic Designers, Video Editors, CATI Tele-surveyors, and Regional Coordinators across 14+ Indian states.',
      rosterBtn: 'Submit Resume to General Network →',
    },
    contact: {
      badge: "Let's Discuss Your Next Project",
      heading: 'Initiate a Strategic ',
      headingHighlight: 'Consultation.',
      subhead: 'Whether you require political consulting, research solutions, data analytics, campaign management or large-scale field operations, KRAC is ready to understand your requirements.',
      phoneLabel: 'Phone / Helpline',
      phoneVal: '+91 7900595639',
      emailLabel: 'Official Correspondence',
      emailVal: 'Careers@krac.co.in',
      webLabel: 'Official Web Domain',
      webVal: 'krac.co.in / www.kautilyaresearch.com',
      hqLabel: 'Headquarters',
      hqVal: 'New Delhi & Regional Consulting Hubs',
      formTitle: 'Send Us an Enquiry',
      formSub: 'Complete the form below. Our consulting team will connect with you under strict non-disclosure confidence.',
      fields: {
        name: 'Full Name *',
        namePlaceholder: 'Shri Rajesh Sharma',
        org: 'Organisation Name',
        orgPlaceholder: 'Political Organisation / Institution',
        designation: 'Designation',
        designationPlaceholder: 'e.g. Campaign In-charge / Secretary',
        email: 'Email Address *',
        emailPlaceholder: 'contact@domain.com',
        phone: 'Contact Number *',
        phonePlaceholder: '+91 98765 43210',
        service: 'Service Required *',
        servicePlaceholder: 'Select Primary Capability',
        serviceOptions: [
          '01. Political Consulting & Strategy',
          '02. Political Research & Opinion Polls',
          '03. Data Analytics & Intelligence',
          '04. Ground Operations & Booth Management',
          '05. Media & Digital Communication',
          '06. War Room & Campaign Setup',
          '07. PAN India Manpower Deployment',
        ],
        location: 'Project Location / Constituency Scope *',
        locationPlaceholder: 'e.g. Uttar Pradesh, Maharashtra, or specific assembly / parliamentary seat',
        details: 'Project Details & Objectives *',
        detailsPlaceholder: 'Brief description of the consulting requirement, approximate timeline, and goals...',
        submitBtn: 'Submit Confidential Enquiry',
        submittingText: 'Transmitting Brief...',
      },
    },
    footer: {
      brandName: 'KAUTILYA RESEARCH & CONSULTING',
      tagline: 'Where Political Intelligence Meets Strategic Execution.',
      desc: 'Multidisciplinary political consulting and research organisation delivering integrated solutions across political strategy, election management, research, data analytics, media intelligence and grassroots operations.',
      navHeading: 'Navigation',
      servicesHeading: 'Core Services',
      contactHeading: 'Direct Contact',
      navLinks: [
        { label: 'About Us', href: '#about' },
        { label: 'Capabilities', href: '#services' },
        { label: 'Methodology', href: '#methodology' },
        { label: 'Projects', href: '#projects' },
        { label: 'Careers', href: '#careers' },
      ],
      servicesList: [
        'Election Strategy',
        'Public Opinion Polls',
        'Data Analytics',
        'Ground Operations',
        'War Room Command',
        'PAN India Manpower',
      ],
      contactLines: [
        'Email: Careers@krac.co.in',
        'Phone: 7900595639',
        'Web: krac.co.in',
        'Offices: New Delhi & State Desks',
      ],
      copyright: '© 2026 Kautilya Research & Consulting. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      disclaimer: 'Disclaimer',
      backToTop: '↑ Back to Top',
    },
    modals: {
      capability: {
        badgePrefix: 'CAPABILITY',
        deliverablesHeading: 'Detailed Deliverables:',
        commissionBtn: 'Commission Consulting Desk →',
      },
      apply: {
        badge: 'KRAC Talent Acquisition',
        subhead: 'Submit your profile to KRAC Talent Acquisition.',
        nameLabel: 'Full Legal Name *',
        namePlaceholder: 'Aarav Sharma',
        emailLabel: 'Email Address *',
        emailPlaceholder: 'name@domain.com',
        phoneLabel: 'Mobile / WhatsApp *',
        phonePlaceholder: '+91 98765 43210',
        expLabel: 'Total Experience',
        expOptions: ['Fresher / Graduate', '1 – 2 Years', '3 – 5 Years', '5+ Years (Lead)'],
        locationLabel: 'Current Location *',
        locationPlaceholder: 'e.g. Lucknow / Delhi / Patna',
        portfolioLabel: 'LinkedIn Profile / Portfolio URL',
        portfolioPlaceholder: 'https://linkedin.com/in/username',
        resumeLabel: 'Upload Resume (PDF, DOCX) *',
        resumePrompt: 'Click to attach CV (Max 10MB)',
        noteLabel: 'Brief Note / Past Campaign Experience',
        notePlaceholder: 'Mention previous research, consulting or field projects...',
        submitBtn: 'Submit Application',
        submittingBtn: 'Submitting Application...',
      },
      toast: {
        enquirySuccessTitle: 'Enquiry Received',
        enquirySuccessBody: 'Our consulting team has received your brief and will connect shortly under strict confidence.',
        applySuccessTitle: 'Application Logged',
        applySuccessBody: 'Your credentials have been forwarded to Careers@krac.co.in.',
      },
    },
  },
  hi: {
    topStrip: {
      announcement: '14+ राज्यों में पैन इंडिया ग्राउंड रिसर्च एवं मैनपावर संचालन सक्रिय',
      linkText: 'सक्रिय नियुक्तियाँ देखें →',
    },
    nav: {
      brandName: 'कौटिल्य',
      brandSub: 'रिसर्च एंड कंसल्टिंग',
      links: [
        { label: 'हमारे बारे में', href: '#about' },
        { label: 'प्रमुख सेवाएँ', href: '#services' },
        { label: 'विशेषज्ञता', href: '#expertise' },
        { label: 'कार्यप्रणाली', href: '#methodology' },
        { label: 'परियोजनाएँ', href: '#projects' },
        { label: 'करियर', href: '#careers', badge: 'नियुक्ति' },
      ],
      phone: '+91 7900595639',
      connectBtn: 'संपर्क करें',
      langToggle: 'English',
    },
    hero: {
      badge: 'जहां राजनीतिक समझ और रणनीतिक क्रियान्वयन का मिलन होता है',
      titleLine1: 'राजनीतिक समझ। रणनीतिक सोच।',
      titleLine2: '',
      titleHighlight: 'प्रभावी क्रियान्वयन।',
      p1Bold: 'कौटिल्य रिसर्च एंड कंसल्टिंग (KRAC)',
      p1Rest:
        ' एक प्रोफेशनल राजनीतिक परामर्श एवं अनुसंधान संगठन है, जो चुनावी रणनीति, राजनीतिक शोध, डेटा एनालिटिक्स, अभियान प्रबंधन, मीडिया एवं जमीनी स्तर पर संचालन के क्षेत्र में व्यापक सेवाएँ प्रदान करता है।',
      p2: 'हम रणनीतिक सोच, जमीनी अनुभव, शोध आधारित जानकारी और पेशेवर क्रियान्वयन को एक साथ जोड़कर राजनीतिक संगठनों और जनप्रतिनिधियों को जटिल राजनीतिक परिदृश्यों में प्रभावी समाधान प्रदान करते हैं।',
      taglineBold: 'हमारी विशेषज्ञता। आपकी रणनीतिक बढ़त।',
      btnServices: 'हमारी सेवाएँ देखें',
      btnConnect: 'संपर्क करें',
      metrics: [
        { val: '500+', label: 'निर्वाचन क्षेत्र अध्ययन', sub: 'विधानसभा एवं लोकसभा' },
        { val: '10M+', label: 'सर्वेक्षण साक्षात्कार', sub: 'CAPI एवं CATI सत्यापित' },
        { val: '10,000+', label: 'फील्ड अन्वेषक', sub: 'पैन इंडिया डेटाबेस' },
        { val: '28+', label: 'राज्य एवं केंद्र शासित प्रदेश', sub: 'क्षेत्रीय भाषाई समझ' },
      ],
    },
    about: {
      badge: 'कौटिल्य रिसर्च एंड कंसल्टिंग के बारे में',
      heading: 'रणनीति की शुरुआत जमीनी वास्तविकताओं को ',
      headingHighlight: 'समझने से होती है।',
      p1: 'आज के गतिशील राजनीतिक वातावरण में, सही निर्णय लेने के लिए पारंपरिक तरीकों से अधिक की आवश्यकता होती है। इसके लिए विश्वसनीय शोध, जनभावना की गहरी समझ, संगठनात्मक क्षमता और प्रभावी क्रियान्वयन जरूरी है।',
      p2: 'KRAC एक बहुआयामी कंसल्टिंग संगठन है, जो राजनीतिक अनुसंधान, चुनावी रणनीति, डेटा विश्लेषण, अभियान प्रबंधन और जमीनी स्तर पर संचालन में विशेषज्ञता रखता है। हमारा उद्देश्य राजनीतिक संगठनों एवं जनप्रतिनिधियों को विश्वसनीय शोध, रणनीतिक परामर्श और प्रभावी क्रियान्वयन के माध्यम से सहयोग प्रदान करना है।',
      philosophyLabel: 'हमारा दर्शन',
      philosophyQuote:
        '"हमारा मानना है कि एक प्रभावी रणनीति की शुरुआत सही जानकारी और जमीनी वास्तविकताओं को समझने से होती है। जनता को समझना, चुनौतियों की पहचान करना, सूचनाओं का विश्लेषण और समाधान का क्रियान्वयन ही हमारे परामर्श दर्शन की नींव है।"',
      visionMissionBadge: 'विज़न एवं मिशन',
      visionTitle: 'हमारा विजन:',
      visionText:
        'भारत में एक विश्वसनीय एवं अग्रणी राजनीतिक परामर्श और अनुसंधान संगठन के रूप में स्थापित होना, जो रणनीतिक उत्कृष्टता, शोध क्षमता, नवाचार और प्रभावी क्रियान्वयन के लिए पहचाना जाए।',
      missionTitle: 'हमारा मिशन:',
      missionText:
        'राजनीतिक संगठनों, जनप्रतिनिधियों एवं संस्थानों को विश्वसनीय शोध, डेटा आधारित विश्लेषण, रणनीतिक परामर्श और पेशेवर संचालन के माध्यम से बेहतर निर्णय लेने में सहयोग प्रदान करना।',
      valuesTitle: 'हमारे 7 मूलभूत मूल्य',
      values: [
        'निष्ठा एवं पेशेवर नैतिकता',
        'शोध एवं सटीकता',
        'रणनीतिक सोच',
        'नवाचार एवं प्रौद्योगिकी',
        'पेशेवर उत्कृष्टता',
        'जवाबदेही एवं पारदर्शिता',
        'क्रियान्वयन के प्रति अटूट प्रतिबद्धता',
      ],
    },
    capabilities: {
      badge: 'हमारी प्रमुख सेवाएँ',
      heading: 'व्यापक राजनीतिक परामर्श एवं ',
      headingHighlight: 'अनुसंधान समाधान।',
      subhead: 'निर्वाचन क्षेत्र आकलन से लेकर जमीनी स्तर पर तैनाती और डिजिटल वॉर रूम प्रबंधन तक।',
      viewScopeBtn: 'विस्तृत विवरण देखें',
      highlightBadge: 'विशेषज्ञ भर्ती एवं फील्ड तैनाती',
      highlightScopeBtn: 'विस्तृत कार्यक्षेत्र देखें',
      highlightRosterBtn: 'मैनपावर नेटवर्क से जुड़ें',
      pillars: [
        {
          id: '01',
          num: '01',
          title: 'राजनीतिक परामर्श एवं चुनावी रणनीति',
          shortDesc: 'रणनीतिक ढाँचे का विकास, निर्वाचन क्षेत्र का आकलन और अनुकूलित चुनाव अभियान योजना।',
          bullets: [
            'चुनाव रणनीति एवं समग्र अभियान योजना',
            'विधानसभा एवं निर्वाचन क्षेत्र स्तर का आकलन',
            'राजनीतिक परिदृश्य एवं उम्मीदवार विश्लेषण',
            'रणनीतिक निगरानी एवं मूल्यांकन',
          ],
          scopeDesc:
            'हम राजनीतिक संगठनों और चुनावी अभियानों की बदलती आवश्यकताओं को पूरा करने के लिए रणनीतिक परामर्श समाधान प्रदान करते हैं।',
          deliverables: [
            'चुनाव रणनीति और अभियान योजना',
            'विधानसभा और निर्वाचन क्षेत्र स्तर का आकलन',
            'राजनीतिक परिदृश्य विश्लेषण',
            'उम्मीदवार और संगठनात्मक मूल्यांकन',
            'जमीनी नेटवर्क में अभियान समन्वय',
            'रणनीतिक निगरानी और निरंतर मूल्यांकन',
          ],
        },
        {
          id: '02',
          num: '02',
          title: 'राजनीतिक अनुसंधान एवं जनमत सर्वेक्षण',
          shortDesc: 'संरचित सर्वेक्षण, जनमत अनुसंधान, मतदाता प्रतिक्रिया अध्ययन और निर्वाचन क्षेत्र स्तर का मूल्यांकन।',
          bullets: [
            'जनमत सर्वेक्षण एवं मतदाता फीडबैक अध्ययन',
            'उम्मीदवार छवि एवं स्वीकार्यता सर्वेक्षण',
            'प्रशासन एवं लोक कल्याणकारी योजनाओं का प्रभाव',
            'चुनाव पूर्व और चुनाव पश्चात तुलनात्मक अध्ययन',
          ],
          scopeDesc:
            'राजनीतिक वातावरण और जनता के दृष्टिकोण को समझने के लिए अनुसंधान मौलिक आधार है।',
          deliverables: [
            'जनमत सर्वेक्षण (Public Opinion Surveys)',
            'निर्वाचन क्षेत्र स्तर पर शोध अध्ययन',
            'मतदाता प्रतिक्रिया एवं फीडबैक अध्ययन',
            'राजनीतिक धारणा एवं नैरेटिव अनुसंधान',
            'उम्मीदवार आकलन सर्वेक्षण',
            'शासन और जनमुद्दों का मूल्यांकन',
            'चुनाव पूर्व एवं चुनाव पश्चात अध्ययन',
            'लागू कानूनी नियमों के अधीन एग्जिट पोल शोध',
          ],
        },
        {
          id: '03',
          num: '03',
          title: 'डेटा एनालिटिक्स एवं राजनीतिक विश्लेषण',
          shortDesc: 'कच्ची सूचनाओं को संरचित डेटाबेस, सटीक विश्लेषण और प्रभावी निर्णयों में बदलना।',
          bullets: [
            'डेटा संग्रह, सफाई और बहुस्तरीय सत्यापन',
            'बूथ-स्तरीय माइक्रो डेटा विश्लेषण',
            'निर्वाचन क्षेत्र डेटाबेस प्रबंधन',
            'इंटरैक्टिव विजुअल रिसर्च डैशबोर्ड',
          ],
          scopeDesc:
            'हम एकत्रित जानकारी को संरचित डेटाबेस, सार्थक विश्लेषण और कार्यसाधक रणनीतियों में रूपांतरित करते हैं।',
          deliverables: [
            'डेटा संग्रह और प्रसंस्करण (Processing)',
            'डेटा क्लीनिंग और बहुस्तरीय सत्यापन',
            'बूथ-स्तरीय डेटा विश्लेषण',
            'निर्वाचन क्षेत्र डेटाबेस प्रबंधन',
            'सर्वेक्षण डेटा एनालिटिक्स',
            'रियल-टाइम रिसर्च डैशबोर्ड',
            'डेटा विजुअलाइजेशन और रिपोर्टिंग',
            'सूचना प्रबंधन प्रणालियाँ (MIS)',
          ],
        },
        {
          id: '04',
          num: '04',
          title: 'जमीनी स्तर पर संचालन एवं बूथ प्रबंधन',
          shortDesc: 'फील्ड टीमों, बूथ-स्तरीय शोध, स्वयंसेवक समन्वय और जमीनी क्रियान्वयन द्वारा परिचालन क्षमता का निर्माण।',
          bullets: [
            'ग्राउंड टीमों की त्वरित तैनाती',
            'बूथ-स्तरीय संगठनात्मक अनुसंधान',
            'स्वयंसेवक और कार्यकर्ता समन्वय',
            'स्थानीय प्रभावशाली व्यक्तियों का मैपिंग',
          ],
          scopeDesc:
            'हम संरचित योजना, पेशेवर कार्यबल और फील्ड-स्तरीय समन्वय के माध्यम से बड़े पैमाने पर जमीनी संचालन को मजबूती देते हैं।',
          deliverables: [
            'ग्राउंड टीम की त्वरित तैनाती',
            'बूथ-स्तरीय संगठनात्मक शोध',
            'फील्ड गतिविधियों का समन्वय',
            'स्वयंसेवक नेटवर्क प्रबंधन',
            'स्थानीय हितधारकों और इन्फ्लुएंसर्स का अध्ययन',
            'फील्ड निगरानी और दैनिक रिपोर्टिंग',
            'निर्वाचन क्षेत्र स्तर पर परिचालन सहायता',
          ],
        },
        {
          id: '05',
          num: '05',
          title: 'मीडिया एवं डिजिटल कम्युनिकेशन',
          shortDesc: 'डिजिटल मीडिया रणनीतियाँ, सामग्री विकास, क्रिएटिव उत्पादन, सोशल मीडिया प्रबंधन और मीडिया मॉनिटरिंग।',
          bullets: [
            'नैरेटिव निर्माण और संदेश निर्धारण',
            'सोशल मीडिया प्रबंधन और लक्षित अभियान',
            'प्रभावशाली वीडियो संपादन और ग्राफिक डिजाइन',
            'मीडिया मॉनिटरिंग एवं प्रतिष्ठा मूल्यांकन',
          ],
          scopeDesc:
            'हम एकीकृत डिजिटल संचार और मीडिया प्रबंधन सेवाएँ प्रदान करते हैं।',
          deliverables: [
            'सोशल मीडिया प्रबंधन',
            'डिजिटल अभियान योजना और क्रियान्वयन',
            'कंटेंट रणनीति और आक्रामक लेखन',
            'ग्राफिक डिजाइन और क्रिएटिव उत्पादन',
            'उच्च गुणवत्ता वीडियो संपादन और प्रोडक्शन',
            'मीडिया मॉनिटरिंग और समाचार विश्लेषण',
            'डिजिटल प्रतिष्ठा एवं संचार प्रभाव आकलन',
            'दैनिक प्रदर्शन रिपोर्ट और नैरेटिव सुदृढ़ीकरण',
          ],
        },
        {
          id: '06',
          num: '06',
          title: 'वॉर रूम एवं अभियान प्रबंधन',
          shortDesc: 'प्रभावी परियोजना क्रियान्वयन के लिए संरचित निगरानी प्रणालियाँ और केंद्रीकृत वॉर रूम समन्वय।',
          bullets: [
            'वॉर रूम की भौतिक एवं तकनीकी स्थापना',
            'केंद्रीकृत चुनाव अभियान समन्वय',
            'दैनिक गतिविधि और फील्ड प्रगति ट्रैकिंग',
            'घटना निगरानी और त्वरित प्रतिक्रिया प्रणाली',
          ],
          scopeDesc:
            'हम प्रभावी परियोजना क्रियान्वयन के लिए संरचित अभियान निगरानी और समन्वय प्रणाली स्थापित करते हैं।',
          deliverables: [
            'वॉर रूम की समग्र योजना और सेटअप',
            'केंद्रीकृत चुनाव अभियान समन्वय',
            'दैनिक गतिविधियों की निगरानी',
            'फील्ड रिपोर्टिंग प्रणालियाँ',
            'अभियान की प्रगति ट्रैकिंग',
            'समस्या निगरानी और त्वरित समाधान',
            'रणनीतिक समीक्षा और नेतृत्व रिपोर्टिंग',
          ],
        },
        {
          id: '07',
          num: '07',
          title: 'PAN India रिसर्च एवं मैनपावर सेवाएँ',
          shortDesc: 'भारत के विभिन्न राज्यों में विशेष शोध पेशेवरों, फील्ड अन्वेषकों और सर्वेक्षण टीमों की बड़े पैमाने पर तैनाती।',
          bullets: [
            'CATI – टेलीफोनिक जनमत साक्षात्कार',
            'CAPI – टैबलेट आधारित व्यक्तिगत सर्वेक्षण',
            'जीपीएस व ऑडियो आधारित गुणवत्ता सत्यापन',
            '14+ राज्यों में बहुभाषी स्थानीय टीमें',
          ],
          scopeDesc:
            'हम भारत के विभिन्न क्षेत्रों में परियोजनाओं के लिए स्केलेबल शोध और मैनपावर सहायता प्रदान करते हैं।',
          deliverables: [
            'CATI – कंप्यूटर असिस्टेड टेलीफोनिक इंटरव्यूइंग',
            'CAPI – कंप्यूटर असिस्टेड पर्सनल इंटरव्यूइंग',
            'प्रत्यक्ष आमने-सामने फील्ड सर्वेक्षण',
            'बड़े पैमाने पर डेटा संग्रह',
            'डेटा सत्यापन और गुणवत्ता नियंत्रण',
            'क्षेत्रीय भाषाई अनुसंधान टीमें',
            'सर्वेक्षण अधिकारी और फील्ड अन्वेषक',
            'परियोजना आधारित पेशेवर मैनपावर तैनाती',
          ],
        },
      ],
    },
    navyBanner: {
      badge: 'शोध-आधारित। रणनीति-निर्देशित। क्रियान्वयन-केंद्रित।',
      headingLine1: 'अपने लक्षित निर्वाचन क्षेत्रों में ',
      headingHighlight: 'स्पष्ट बढ़त प्राप्त करें।',
      desc: 'हमारी राजनीतिक शोध एवं कंसल्टिंग टीम को मतदाता भावनाओं, संगठनात्मक क्षमता और सामाजिक समीकरणों का विश्लेषण कर आपकी रणनीति तैयार करने दें।',
      btnBriefing: 'गोपनीय परामर्श अनुरोध करें',
      btnPhone: 'सीधी हेल्पलाइन: +91 7900595639',
    },
    expertise: {
      badge: 'हमारी विशेषज्ञता',
      heading: 'विविध क्षेत्रों में ',
      headingHighlight: 'एकीकृत विशेषज्ञता।',
      subhead: 'KRAC समग्र समाधान प्रदान करने के लिए विशेष ज्ञान, पेशेवर कार्यबल और तकनीकी प्रणालियों का समन्वय करता है।',
      cards: [
        {
          title: 'राजनीतिक समझ',
          desc: 'संरचित अनुसंधान और विश्लेषणात्मक मूल्यांकन के माध्यम से राजनीतिक परिदृश्यों और जमीनी समीकरणों को समझना।',
        },
        {
          title: 'चुनावी अनुसंधान',
          desc: 'निर्वाचन क्षेत्र स्तर के गहन अध्ययन, जनमत शोध और मतदाताओं की प्राथमिकताओं का जमीनी आकलन।',
        },
        {
          title: 'डेटा एवं एनालिटिक्स',
          desc: 'बड़े पैमाने पर चुनावी और जनसांख्यिकीय डेटासेट का प्रबंधन, प्रसंस्करण और सटीक रणनीतिक विश्लेषण।',
        },
        {
          title: 'जमीनी संचालन',
          desc: 'फील्ड-स्तरीय समन्वय, निर्वाचन क्षेत्र संचालन, स्वयंसेवक प्रबंधन और बूथ-स्तरीय आकलन का क्रियान्वयन।',
        },
        {
          title: 'मीडिया विश्लेषण',
          desc: 'मीडिया विकास पर निरंतर नजर, संचार प्रवृत्तियों का विश्लेषण और लक्षित डिजिटल नैरेटिव का निर्माण।',
        },
        {
          title: 'अभियान क्रियान्वयन',
          desc: 'रणनीतिक योजना, कुशल मैनपावर, सुव्यवस्थित समन्वय और वास्तविक समय प्रदर्शन निगरानी का संपूर्ण एकीकरण।',
        },
      ],
    },
    methodology: {
      badge: 'हमारी कार्यप्रणाली',
      heading: 'प्रभावी क्रियान्वयन के लिए एक ',
      headingHighlight: 'संरचित दृष्टिकोण।',
      flow: 'समझना → शोध करना → विश्लेषण करना → रणनीति बनाना → क्रियान्वयन करना → मूल्यांकन करना',
      steps: [
        {
          num: '01 / समझना',
          phase: 'आकलन',
          title: 'समझना एवं आकलन',
          desc: 'परियोजना के उद्देश्यों, आवश्यकताओं, भूगोल, सामाजिक-जातिगत समीकरणों और परिचालन चुनौतियों को समझना।',
        },
        {
          num: '02 / शोध',
          phase: 'अनुसंधान',
          title: 'शोध एवं सूचना संकलन',
          desc: 'फील्ड रिसर्च, संरचित प्रश्नावली, सटीक नमूना चयन और जनमत सर्वेक्षणों का पेशेवर संचालन।',
        },
        {
          num: '03 / विश्लेषण',
          phase: 'एनालिटिक्स',
          title: 'डेटा प्रसंस्करण एवं विश्लेषण',
          desc: 'डेटा की सत्यता जांचना, एल्गोरिद्मिक शुद्धि, बूथ डेटाबेस का निर्माण और पूर्वानुमानित अंतर्दृष्टि विकसित करना।',
        },
        {
          num: '04 / रणनीति',
          phase: 'रणनीति',
          title: 'रणनीतिक योजना निर्माण',
          desc: 'अनुकूलित राजनीतिक रणनीति, संदेश निर्धारण (Framing), डिजिटल रणनीति और बूथ लामबंदी योजना तैयार करना।',
        },
        {
          num: '05 / संचालन',
          phase: 'तैनाती',
          title: 'तैनाती एवं क्रियान्वयन',
          desc: 'पेशेवर टीमों को तैनात करना, वॉर रूम समन्वय स्थापित करना और जमीनी स्तर पर गतिविधियों का संचालन करना।',
        },
        {
          num: '06 / समीक्षा',
          phase: 'मूल्यांकन',
          title: 'निगरानी एवं मूल्यांकन',
          desc: 'प्रगति को ट्रैक करना, गुणवत्ता ऑडिट, मतदान रुझान विश्लेषण और संरचित प्रदर्शन रिपोर्ट तैयार करना।',
        },
      ],
    },
    projects: {
      badge: 'संचालन अनुभव',
      heading: 'अनुसंधान, संचालन एवं ',
      headingHighlight: 'परामर्श अनुभव।',
      filterLabels: {
        all: 'सभी परियोजनाएँ',
        surveys: 'जमीनी सर्वेक्षण',
        data: 'डेटा एवं तकनीक',
        manpower: 'मैनपावर',
      },
      cards: [
        {
          id: 'p1',
          category: 'surveys',
          categoryLabel: 'निर्वाचन क्षेत्र आकलन',
          scopeTag: 'विधानसभा स्तर',
          title: 'विधानसभा स्तर पर जनधारणा अध्ययन',
          desc: '40+ विधानसभा क्षेत्रों में सरकार विरोधी लहर, उम्मीदवार की लोकप्रियता और कल्याणकारी योजनाओं की जमीनी हकीकत का व्यापक सर्वेक्षण।',
          metricLabel: 'सैंपल: 65,000+ साक्षात्कार',
          status: 'सफलतापूर्वक पूर्ण',
        },
        {
          id: 'p2',
          category: 'manpower',
          categoryLabel: 'पैन इंडिया मैनपावर',
          scopeTag: 'बहु-राज्य',
          title: 'व्यापक स्तर पर फील्ड अन्वेषकों की लामबंदी',
          desc: 'प्रोजेक्ट स्वीकृति के 72 घंटों के भीतर उत्तरी और पश्चिमी राज्यों में 500+ सत्यापित सर्वेक्षण अधिकारियों और बहुभाषी पर्यवेक्षकों की त्वरित तैनाती।',
          metricLabel: '500+ फील्ड स्टाफ',
          status: 'पूर्ण',
        },
        {
          id: 'p3',
          category: 'data',
          categoryLabel: 'एनालिटिक्स एवं विश्लेषण',
          scopeTag: 'बूथ इंटेलिजेंस',
          title: 'बूथ स्तर पर मतदाता प्रोफाइलिंग एवं डैशबोर्ड',
          desc: '1,200+ मतदान केंद्रों के ऐतिहासिक मतदान रिकॉर्ड और वर्तमान जनसांख्यिकीय विश्लेषण का केंद्रीय वॉर रूम के लिए लाइव डैशबोर्ड एकीकरण।',
          metricLabel: '1,200+ बूथ मैप किए गए',
          status: 'सक्रिय',
        },
        {
          id: 'p4',
          category: 'surveys',
          categoryLabel: 'टेलीफोनिक सर्वेक्षण',
          scopeTag: 'राज्यव्यापी',
          title: 'CATI टेलीफोनिक जनमत ट्रैकिंग',
          desc: '5 क्षेत्रीय बोलियों में त्वरित ऑडियो गुणवत्ता ऑडिट के साथ बहु-चरणीय टेलीफोनिक पोलिंग, जिससे नई घोषित नीतियों पर जनप्रतिक्रिया मापी गई।',
          metricLabel: '150,000+ कॉल्स',
          status: 'पूर्ण',
        },
        {
          id: 'p5',
          category: 'data',
          categoryLabel: 'वॉर रूम एवं मीडिया',
          scopeTag: '24/7 संचालन',
          title: 'केंद्रीय चुनाव वॉर रूम स्थापना',
          desc: 'दैनिक फील्ड कार्यक्रमों, वायरल नैरेटिव, फेक न्यूज काउंटर और उम्मीदवार दौरों की निगरानी हेतु कमांड सेंटर की स्थापना।',
          metricLabel: 'दैनिक नेतृत्व रिपोर्ट्स',
          status: 'मानक प्रक्रिया',
        },
        {
          id: 'p6',
          category: 'manpower',
          categoryLabel: 'गुणवत्ता ऑडिट',
          scopeTag: 'डेटा सत्यापन',
          title: 'उच्च गुणवत्ता जमीनी डेटा सत्यापन',
          desc: 'बड़े तृतीय-पक्ष डेटासेट पर स्वतंत्र ऑडिट और टेलीफोनिक बैक-चेक प्रोटोकॉल, जिससे अमान्य डेटा को हटाकर शुद्ध परिणाम प्रमाणित किए गए।',
          metricLabel: '99.4% सटीकता लक्ष्य',
          status: 'निरंतर सक्रिय',
        },
      ],
    },
    careers: {
      badge: 'KRAC में करियर',
      heading: 'अपना करियर बनाएँ ',
      headingHighlight: 'KRAC के साथ।',
      subheadBold: 'शोध को परिणाम में बदलने वाली टीम का हिस्सा बनें।',
      subheadLight: 'हम राजनीतिक परामर्श, शोध, एनालिटिक्स, संचार, प्रौद्योगिकी और फील्ड संचालन में रुचि रखने वालों के लिए रोमांचक अवसर प्रदान करते हैं।',
      searchPlaceholder: 'पद खोजें (उदा. सलाहकार, विश्लेषक, फील्ड, मीडिया)...',
      deptFilters: [
        { key: 'all', label: 'सभी पद' },
        { key: 'Strategy', label: 'रणनीति' },
        { key: 'Research', label: 'शोध एवं सर्वेक्षण' },
        { key: 'Analytics', label: 'डेटा एनालिटिक्स' },
        { key: 'Field', label: 'फील्ड संचालन' },
        { key: 'Media', label: 'मीडिया एवं क्रिएटिव' },
      ],
      applyBtn: 'आवेदन करें',
      jobs: [
        {
          id: 'j1',
          title: 'राजनीतिक सलाहकार (Political Consultant)',
          dept: 'रणनीति',
          deptKey: 'Strategy',
          type: 'फुल-टाइम',
          location: 'नई दिल्ली / क्षेत्रीय तैनाती',
          desc: 'निर्वाचन क्षेत्र आकलन योजना तैयार करना, अभियान प्रबंधकों का समन्वय, स्थानीय राजनीतिक समीकरणों का विश्लेषण और उम्मीदवार ब्रीफिंग तैयार करना।',
        },
        {
          id: 'j2',
          title: 'रिसर्च एसोसिएट / सीनियर RA',
          dept: 'शोध',
          deptKey: 'Research',
          type: 'फुल-टाइम',
          location: 'राज्य मुख्यालय / ऑन-साइट',
          desc: 'सर्वेक्षण टूल्स और संरचित प्रश्नावली तैयार करना, फोकस ग्रुप चर्चाओं (FGD) का नेतृत्व करना और शोध रिपोर्ट तैयार करना।',
        },
        {
          id: 'j3',
          title: 'डेटा विश्लेषक (Data Analyst)',
          dept: 'एनालिटिक्स',
          deptKey: 'Analytics',
          type: 'फुल-टाइम',
          location: 'हाइब्रिड / केंद्रीय कार्यालय',
          desc: 'Python/SQL द्वारा सर्वेक्षण डेटासेट को संसाधित करना, बूथ डेटाबेस का प्रबंधन और इंटरैक्टिव विजुअल डैशबोर्ड तैयार करना।',
        },
        {
          id: 'j4',
          title: 'अभियान प्रबंधक (Campaign Manager)',
          dept: 'रणनीति',
          deptKey: 'Strategy',
          type: 'फुल-टाइम',
          location: 'विधानसभा फील्ड हेडक्वार्टर',
          desc: 'उम्मीदवार के दैनिक कार्यक्रमों का प्रबंधन, कार्यकर्ताओं का समन्वय, रैलियों का आयोजन और वॉर रूम के साथ सहज तालमेल सुनिश्चित करना।',
        },
        {
          id: 'j5',
          title: 'ग्राउंड रिसर्च एग्जीक्यूटिव (Field Executive)',
          dept: 'फील्ड संचालन',
          deptKey: 'Field',
          type: 'परियोजना आधारित',
          location: 'विभिन्न भारतीय राज्य',
          desc: 'गाँवों और शहरी वार्डों में टैबलेट-आधारित CAPI सर्वेक्षण संचालित करना, मतदाताओं के मुद्दों को दर्ज करना और उच्च-सटीकता सुनिश्चित करना।',
        },
        {
          id: 'j6',
          title: 'सोशल मीडिया एवं कंटेंट राइटर',
          dept: 'मीडिया',
          deptKey: 'Media',
          type: 'फुल-टाइम',
          location: 'नई दिल्ली / केंद्रीय डेस्क',
          desc: 'हिंदी और अंग्रेजी में प्रभावशाली राजनीतिक संचार का आलेखन, वीडियो रील्स की पटकथा तैयार करना और डिजिटल विमर्श पर नजर रखना।',
        },
      ],
      rosterTitle: 'अन्य भूमिकाओं की तलाश है?',
      rosterDesc: 'हम 14+ भारतीय राज्यों में ग्राफिक डिजाइनरों, वीडियो संपादकों, CATI टेली-सर्वेक्षकों और क्षेत्रीय समन्वयकों की नियमित भर्ती करते हैं।',
      rosterBtn: 'सामान्य नेटवर्क में बायोडाटा जमा करें →',
    },
    contact: {
      badge: 'अपनी अगली परियोजना पर चर्चा करें',
      heading: 'रणनीतिक परामर्श ',
      headingHighlight: 'प्रारंभ करें।',
      subhead: 'चाहे आपको राजनीतिक परामर्श, अनुसंधान समाधान, डेटा एनालिटिक्स, अभियान प्रबंधन या जमीनी संचालन की आवश्यकता हो, KRAC आपकी आवश्यकताओं को समझने के लिए तत्पर है।',
      phoneLabel: 'फोन / हेल्पलाइन',
      phoneVal: '+91 7900595639',
      emailLabel: 'आधिकारिक पत्राचार',
      emailVal: 'Careers@krac.co.in',
      webLabel: 'आधिकारिक वेब डोमेन',
      webVal: 'krac.co.in / www.kautilyaresearch.com',
      hqLabel: 'मुख्यालय',
      hqVal: 'नई दिल्ली एवं क्षेत्रीय परामर्श केंद्र',
      formTitle: 'पूछताछ भेजें',
      formSub: 'नीचे दिया गया फॉर्म भरें। हमारी कंसल्टिंग टीम पूर्ण गैर-प्रकटीकरण गोपनीयता (Non-Disclosure Confidence) के तहत आपसे संपर्क करेगी।',
      fields: {
        name: 'पूरा नाम *',
        namePlaceholder: 'श्री राजेश शर्मा',
        org: 'संगठन का नाम',
        orgPlaceholder: 'राजनीतिक दल / संगठन / संस्था',
        designation: 'पद / दायित्व',
        designationPlaceholder: 'उदा. चुनाव प्रभारी / महासचिव / प्रत्याशी',
        email: 'ईमेल पता *',
        emailPlaceholder: 'contact@domain.com',
        phone: 'संपर्क नंबर *',
        phonePlaceholder: '+91 98765 43210',
        service: 'आवश्यक सेवा *',
        servicePlaceholder: 'प्राथमिक सेवा का चयन करें',
        serviceOptions: [
          '01. राजनीतिक परामर्श एवं चुनावी रणनीति',
          '02. राजनीतिक अनुसंधान एवं जनमत सर्वेक्षण',
          '03. डेटा एनालिटिक्स एवं राजनीतिक विश्लेषण',
          '04. जमीनी स्तर पर संचालन एवं बूथ प्रबंधन',
          '05. मीडिया एवं डिजिटल कम्युनिकेशन',
          '06. वॉर रूम एवं अभियान प्रबंधन',
          '07. PAN India रिसर्च एवं मैनपावर सेवाएँ',
        ],
        location: 'परियोजना स्थान / निर्वाचन क्षेत्र *',
        locationPlaceholder: 'उदा. उत्तर प्रदेश, महाराष्ट्र, अथवा विशिष्ट विधानसभा / लोकसभा सीट',
        details: 'परियोजना विवरण एवं उद्देश्य *',
        detailsPlaceholder: 'परामर्श की आवश्यकता, संभावित समय-सीमा और लक्ष्यों का संक्षिप्त विवरण...',
        submitBtn: 'गोपनीय पूछताछ सबमिट करें',
        submittingText: 'भेजा जा रहा है...',
      },
    },
    footer: {
      brandName: 'कौटिल्य रिसर्च एंड कंसल्टिंग',
      tagline: 'जहां राजनीतिक समझ और रणनीतिक क्रियान्वयन का मिलन होता है।',
      desc: 'राजनीतिक रणनीति, चुनाव प्रबंधन, अनुसंधान, डेटा एनालिटिक्स, मीडिया इंटेलिजेंस और जमीनी संचालन में एकीकृत समाधान प्रदान करने वाला बहु-विषयक राजनीतिक परामर्श संगठन।',
      navHeading: 'नेविगेशन',
      servicesHeading: 'प्रमुख सेवाएँ',
      contactHeading: 'सीधा संपर्क',
      navLinks: [
        { label: 'हमारे बारे में', href: '#about' },
        { label: 'प्रमुख सेवाएँ', href: '#services' },
        { label: 'कार्यप्रणाली', href: '#methodology' },
        { label: 'परियोजनाएँ', href: '#projects' },
        { label: 'करियर', href: '#careers' },
      ],
      servicesList: [
        'चुनावी रणनीति',
        'जनमत सर्वेक्षण',
        'डेटा एनालिटिक्स',
        'जमीनी संचालन',
        'वॉर रूम कमांड',
        'पैन इंडिया मैनपावर',
      ],
      contactLines: [
        'ईमेल: Careers@krac.co.in',
        'फोन: 7900595639',
        'वेब: krac.co.in',
        'कार्यालय: नई दिल्ली एवं राज्य डेस्क',
      ],
      copyright: '© 2026 कौटिल्य रिसर्च एंड कंसल्टिंग। सर्वाधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'नियम एवं शर्तें',
      disclaimer: 'अस्वीकरण',
      backToTop: '↑ वापस ऊपर जाएं',
    },
    modals: {
      capability: {
        badgePrefix: 'सेवा विवरण',
        deliverablesHeading: 'प्रमुख परिणाम एवं कार्यक्षेत्र:',
        commissionBtn: 'कंसल्टिंग डेस्क से जुड़ें →',
      },
      apply: {
        badge: 'KRAC प्रतिभा भर्ती',
        subhead: 'KRAC टैलेंट एक्विजिशन को अपनी प्रोफाइल सबमिट करें।',
        nameLabel: 'पूरा कानूनी नाम *',
        namePlaceholder: 'आरव शर्मा',
        emailLabel: 'ईमेल पता *',
        emailPlaceholder: 'name@domain.com',
        phoneLabel: 'मोबाइल / व्हाट्सएप *',
        phonePlaceholder: '+91 98765 43210',
        expLabel: 'कुल अनुभव',
        expOptions: ['फ्रेशर / स्नातक', '1 – 2 वर्ष', '3 – 5 वर्ष', '5+ वर्ष (लीड)'],
        locationLabel: 'वर्तमान स्थान *',
        locationPlaceholder: 'उदा. लखनऊ / दिल्ली / पटना',
        portfolioLabel: 'लिंक्डइन प्रोफाइल / पोर्टफोलियो URL',
        portfolioPlaceholder: 'https://linkedin.com/in/username',
        resumeLabel: 'बायोडाटा अपलोड करें (PDF, DOCX) *',
        resumePrompt: 'CV संलग्न करने के लिए क्लिक करें (अधिकतम 10MB)',
        noteLabel: 'संक्षिप्त विवरण / पूर्व अभियान अनुभव',
        notePlaceholder: 'पिछले अनुसंधान, परामर्श या फील्ड परियोजनाओं का उल्लेख करें...',
        submitBtn: 'आवेदन सबमिट करें',
        submittingBtn: 'आवेदन सबमिट हो रहा है...',
      },
      toast: {
        enquirySuccessTitle: 'पूछताछ प्राप्त हुई',
        enquirySuccessBody: 'हमारी कंसल्टिंग टीम को आपका अनुरोध प्राप्त हो गया है और हम शीघ्र ही पूर्ण गोपनीयता के साथ संपर्क करेंगे।',
        applySuccessTitle: 'आवेदन दर्ज किया गया',
        applySuccessBody: 'आपका विवरण Careers@krac.co.in पर अग्रेषित कर दिया गया है।',
      },
    },
  },
};
