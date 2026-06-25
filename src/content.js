// Bilingual content for Soumahoro Hassane portfolio.
export const CONTENT = {
  fr: {
    nav: { about: "À propos", projects: "Projets", skills: "Stack", contact: "Contact", cta: "Me contacter" },
    hero: {
      location: "Abidjan, Cocody — Côte d'Ivoire",
      first: "Soumahoro",
      last: "Hassane",
      roles: [
        "Développeur Fullstack React / Node.js",
        "Développeur d'applications web",
        "Expert Backend & API REST",
        "Créateur de produits numériques",
      ],
      tagline: "Je construis des applications web robustes — du backend à l'interface.",
      description: "4 ans d'expérience sur des projets à fort impact avec Orange Côte d'Ivoire et SAG Corporation. De la conception de l'architecture jusqu'à la mise en production.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Me contacter",
      ctaCv: "Télécharger le CV",
      open: "Disponible — ouvert aux opportunités",
      stats: [
        { value: "4+", label: "Années d'expérience" },
        { value: "4", label: "Projets livrés" },
        { value: "3", label: "Entreprises clientes" },
        { value: "100%", label: "Mis en production" },
      ],
      clients: ["Orange CI", "SAG Corporation"],
    },
    projects: {
      kicker: "Projets",
      title: "Ce que j'ai construit.",
      lead: "Des produits réels, déployés et utilisés — pas des démos.",
      groups: [
        { label: "Projets personnels", items: ["tradingai", "nexus"] },
        { label: "Expériences professionnelles", items: ["sodeca", "orange"] },
      ],
      demoCta: "Demander un accès",
    },
    skills: {
      kicker: "Stack technique",
      title: "Les outils que je maîtrise.",
      lead: "Une stack fullstack moderne, du front au déploiement.",
    },
    about: {
      kicker: "Parcours",
      title: "Développeur passionné par les produits qui fonctionnent.",
      body: [
        "Diplômé de l'ESATIC (Licence 3) et de l'ISCAT, j'ai acquis une expérience concrète sur des projets à fort impact pour Orange Côte d'Ivoire et SAG Corporation.",
        "Autonome et rigoureux, je suis à l'aise aussi bien en équipe qu'en solo — de la conception de l'architecture jusqu'à la mise en production.",
      ],
      infoTitle: "Informations",
      info: [
        { label: "Localisation", value: "Abidjan, Cocody — Côte d'Ivoire" },
        { label: "Disponibilité", value: "CDD · CDI · Stage rémunéré" },
        { label: "Mode de travail", value: "Présentiel ou télétravail" },
        { label: "Email", value: "hassanesoumahoro6@gmail.com", href: "mailto:hassanesoumahoro6@gmail.com" },
        { label: "Téléphone", value: "+225 07 67 15 67 49", href: "tel:+2250767156749" },
      ],
      expTitle: "Expérience professionnelle",
    },
    contact: {
      kicker: "Contact",
      title: "Parlons de votre prochain projet.",
      lead: "Disponible pour un CDD, CDI ou stage rémunéré à Abidjan ou en télétravail. Réponse garantie sous 24h.",
      cta: "Envoyer un email",
    },
    footer: { rights: "Tous droits réservés.", built: "Conçu & développé par Hassane" },
    period: {},
  },
  en: {
    nav: { about: "About", projects: "Work", skills: "Stack", contact: "Contact", cta: "Get in touch" },
    hero: {
      location: "Abidjan, Cocody — Ivory Coast",
      first: "Soumahoro",
      last: "Hassane",
      roles: [
        "Fullstack Developer · React / Node.js",
        "Web Application Developer",
        "Backend & REST API Expert",
        "Digital Product Builder",
      ],
      tagline: "I build robust web applications — from the backend to the interface.",
      description: "4 years of experience on high-impact projects with Orange Ivory Coast and SAG Corporation. From architecture design all the way to production.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch",
      ctaCv: "Download CV",
      open: "Available — open to opportunities",
      stats: [
        { value: "4+", label: "Years of experience" },
        { value: "4", label: "Projects shipped" },
        { value: "3", label: "Client companies" },
        { value: "100%", label: "Shipped to production" },
      ],
      clients: ["Orange CI", "SAG Corporation"],
    },
    projects: {
      kicker: "Work",
      title: "What I've built.",
      lead: "Real products, deployed and in use — not demos.",
      groups: [
        { label: "Personal projects", items: ["tradingai", "nexus"] },
        { label: "Professional experience", items: ["sodeca", "orange"] },
      ],
      demoCta: "Request access",
    },
    skills: {
      kicker: "Tech stack",
      title: "The tools I master.",
      lead: "A modern fullstack toolkit, from front-end to deployment.",
    },
    about: {
      kicker: "Background",
      title: "A developer driven by products that actually work.",
      body: [
        "A graduate of ESATIC (Bachelor's, year 3) and ISCAT, I gained hands-on experience on high-impact projects for Orange Ivory Coast and SAG Corporation.",
        "Independent and rigorous, I'm comfortable working both in a team and solo — from architecture design to production deployment.",
      ],
      infoTitle: "Information",
      info: [
        { label: "Location", value: "Abidjan, Cocody — Ivory Coast" },
        { label: "Availability", value: "Fixed-term · Permanent · Paid internship" },
        { label: "Work mode", value: "On-site or remote" },
        { label: "Email", value: "hassanesoumahoro6@gmail.com", href: "mailto:hassanesoumahoro6@gmail.com" },
        { label: "Phone", value: "+225 07 67 15 67 49", href: "tel:+2250767156749" },
      ],
      expTitle: "Professional experience",
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk about your next project.",
      lead: "Available for a fixed-term, permanent contract or paid internship in Abidjan or remote. Guaranteed reply within 24h.",
      cta: "Send an email",
    },
    footer: { rights: "All rights reserved.", built: "Designed & built by Hassane" },
    period: {},
  },

  // Language-agnostic data, with bilingual fields where needed
  projectData: {
    tradingai: {
      number: "01", accent: "#10b981", url: "app.tradingai.dev", hasDemo: true,
      images: [
        "/screenshots/tradingai/01_dashboard.png",
        "/screenshots/tradingai/02_scanner.png",
        "/screenshots/tradingai/04_analytics.png",
      ],
      tag: { fr: "Projet personnel", en: "Personal project" },
      status: { fr: "En production · VPS dédié", en: "Live · Dedicated VPS" },
      title: { fr: "TradingAI — Dashboard de trading", en: "TradingAI — Trading dashboard" },
      desc: {
        fr: "Dashboard de trading alimenté par des algorithmes d'analyse automatique. Signaux en temps réel, rapports quotidiens Telegram, visualisations de marché et suivi de performance.",
        en: "Trading dashboard powered by automated analysis algorithms. Real-time signals, daily Telegram reports, market visualisations and performance tracking.",
      },
      stack: ["Python", "Node.js", "React", "PostgreSQL"],
    },
    nexus: {
      number: "02", accent: "#7c3aed", url: "nexus-crm.app", hasDemo: true,
      images: [
        "/screenshots/nexus/public_01_home.png",
        "/screenshots/nexus/admin_01_dashboard.png",
        "/screenshots/nexus/admin_03_crm.png",
        "/screenshots/nexus/public_04_solutions.png",
        "/screenshots/nexus/admin_07_analytics.png",
        "/screenshots/nexus/public_06_tarifs.png",
      ],
      tag: { fr: "Projet personnel", en: "Personal project" },
      status: { fr: "En cours · Local", en: "In progress · Local" },
      title: { fr: "NEXUS — Application métier", en: "NEXUS — Line-of-business application" },
      desc: {
        fr: "Application métier complète : CRM de prospection, pipeline de scraping automatisé, devis éditables, gestion des closers, suivi des commissions et site public.",
        en: "Full line-of-business application: prospecting CRM, automated scraping pipeline, editable quotes, closer management, commission tracking and public website.",
      },
      stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    sodeca: {
      number: "03", accent: "#3b82f6", url: "sodeca.sag-corp.net", hasDemo: false,
      images: [],
      tag: { fr: "SAG Corporation", en: "SAG Corporation" },
      status: { fr: "Avr. 2024 — Oct. 2025", en: "Apr. 2024 — Oct. 2025" },
      title: { fr: "SODECA / ENERCA — Gestion des branchements", en: "SODECA / ENERCA — Connection management" },
      desc: {
        fr: "Application web de gestion complète du processus de branchement pour la SODECA (eau) et l'ENERCA (énergie) en République Centrafricaine.",
        en: "Web application managing the full connection workflow for SODECA (water) and ENERCA (energy) in the Central African Republic.",
      },
      stack: ["Node.js", "Angular", "PostgreSQL"],
    },
    orange: {
      number: "04", accent: "#f97316", url: "tracabilite.orange.ci", hasDemo: false,
      images: [],
      tag: { fr: "Orange Côte d'Ivoire", en: "Orange Ivory Coast" },
      status: { fr: "Jan. 2023 — Déc. 2023", en: "Jan. 2023 — Dec. 2023" },
      title: { fr: "Traçabilité des produits de rente", en: "Cash-crop traceability" },
      desc: {
        fr: "Application mobile de traçabilité couvrant la chaîne complète — de la production à la consommation — avec les équipes Orange Côte d'Ivoire.",
        en: "Mobile traceability app covering the full chain — from production to consumption — with the Orange Ivory Coast teams.",
      },
      stack: ["Flutter", "Node.js", "MongoDB"],
    },
  },

  skillCats: [
    { label: { fr: "Frontend", en: "Frontend" }, techs: [
      { name: "React", color: "#61DAFB" }, { name: "Angular", color: "#DD0031" },
      { name: "Flutter", color: "#02569B" }, { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#06B6D4" }, { name: "Bootstrap", color: "#7952B3" },
    ]},
    { label: { fr: "Backend", en: "Backend" }, techs: [
      { name: "Node.js", color: "#339933" }, { name: "Express", color: "#cccccc" },
      { name: "PHP", color: "#777BB4" }, { name: "Python", color: "#3776AB" },
      { name: "ASP.NET", color: "#512BD4" },
    ]},
    { label: { fr: "Bases de données", en: "Databases" }, techs: [
      { name: "PostgreSQL", color: "#4169E1" }, { name: "MySQL", color: "#4479A1" },
      { name: "MongoDB", color: "#47A248" }, { name: "Cassandra", color: "#1287B1" },
    ]},
    { label: { fr: "DevOps & Outils", en: "DevOps & Tools" }, techs: [
      { name: "GitHub", color: "#cccccc" }, { name: "GitLab", color: "#FC6D26" },
      { name: "Docker", color: "#2496ED" }, { name: "Vercel", color: "#cccccc" },
      { name: "Render", color: "#46E3B7" }, { name: "OVH", color: "#123F6D" },
      { name: "cPanel", color: "#FF6C2C" }, { name: "Jira", color: "#0052CC" },
    ]},
  ],

  timeline: [
    {
      accent: "#8b5cf6",
      period: { fr: "Nov. 2025 — Présent", en: "Nov. 2025 — Present" },
      role: { fr: "Développeur Web Freelance", en: "Freelance Web Developer" },
      company: "Freelance — Abidjan",
      tasks: {
        fr: ["Conception et développement de sites web pour clients", "Automatisation de processus métier : scraping, workflows, API", "Stack : React, Node.js, Tailwind CSS"],
        en: ["Design and development of websites for clients", "Business process automation: scraping, workflows, APIs", "Stack: React, Node.js, Tailwind CSS"],
      },
    },
    {
      accent: "#3b82f6",
      period: { fr: "Avr. 2024 — Oct. 2025", en: "Apr. 2024 — Oct. 2025" },
      role: { fr: "Développeur Fullstack", en: "Fullstack Developer" },
      company: "SAG Corporation",
      tasks: {
        fr: ["Application web de gestion des branchements SODECA / ENERCA", "Stack : Node.js, Angular, PostgreSQL", "Déploiement et maintenance en production"],
        en: ["Web app for SODECA / ENERCA connection management", "Stack: Node.js, Angular, PostgreSQL", "Production deployment and maintenance"],
      },
    },
    {
      accent: "#f97316",
      period: { fr: "Jan. 2023 — Déc. 2023", en: "Jan. 2023 — Dec. 2023" },
      role: { fr: "Développeur Mobile", en: "Mobile Developer" },
      company: "Orange Côte d'Ivoire",
      tasks: {
        fr: ["Application de traçabilité des produits de rente", "Stack : Flutter, Node.js, MongoDB", "Chaîne complète : production → consommation"],
        en: ["Cash-crop traceability application", "Stack: Flutter, Node.js, MongoDB", "Full chain: production → consumption"],
      },
    },
    {
      accent: "#64748b",
      period: { fr: "Nov. 2021 — Oct. 2022", en: "Nov. 2021 — Oct. 2022" },
      role: { fr: "Développeur Web", en: "Web Developer" },
      company: "Terrabo — Abidjan",
      tasks: {
        fr: ["Application web interne de gestion des fiches de besoin", "Stack : PHP, Bootstrap, MySQL", "Développé et déployé en autonomie complète"],
        en: ["Internal web app for managing request forms", "Stack: PHP, Bootstrap, MySQL", "Fully developed and deployed independently"],
      },
    },
  ],

  social: {
    github: "https://github.com/Hassane220-tech",
    email: "hassanesoumahoro6@gmail.com",
    phone: "+225 07 67 15 67 49",
  },
};
