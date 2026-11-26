/**
 * ALL site content lives here. Components only read from this file.
 * Search for "TODO" to find every placeholder still to fill (also listed in TODO.md).
 * A value of `null` means "not added yet": the site hides that link or detail
 * instead of showing a broken or made-up one.
 */

export const site = {
  name: 'Sneha Mangwani',
  initials: 'SM',
  title: 'Sneha Mangwani — Software Developer & AI/ML Enthusiast',
  description:
    'B.Tech CSE student at LPU building full-stack web apps and AI/ML systems. Projects, skills and contact.',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const contact = {
  email: 'snehamangwani1505@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sneha-mangwani/',
  github: 'https://github.com/Sneha-1505',
  resume: '/resume.pdf',
  resumeLabel: 'Resume',
  linkedinText: 'linkedin.com/in/sneha-mangwani',
  githubText: 'github.com/Sneha-1505',
};

export const ui = {
  resume: 'Resume',
  themeToLight: 'Switch to light mode',
  themeToDark: 'Switch to dark mode',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  caseStudy: 'Case study',
  github: 'GitHub',
  closeModal: 'Close case study',
  copyEmail: 'Copy email',
  copied: 'Copied!',
  copyFailed: 'Copy failed. Email: ',
  backToTop: 'Back to top ↑',
  view: 'View',
  viewCertificate: 'View certificate',
  liveDemo: 'Live demo',
  opensNewTab: '(opens in a new tab)',
  techStack: 'tech stack',
  repositoryFor: 'repository for',
  skipToContent: 'Skip to content',
  socialLinks: 'Social links',
  illustration: 'Illustration',
  modal: {
    problem: 'Problem',
    whatIDid: 'What I did',
    howItWorks: 'How it works',
    results: 'Results',
    stack: 'Stack',
    links: 'Links',
  },
  social: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
};

export const hero = {
  greeting: "Hi, I'm Sneha",
  headline: 'Software Developer &\nAI/ML Enthusiast', // \n = intentional line break
  intro:
    'B.Tech CSE student at Lovely Professional University with a specialization in AI/ML. I build full-stack web apps and machine-learning systems — from a FastAPI finance assistant to a multilingual fact-checking pipeline for WhatsApp forwards.',
  primaryCta: { label: 'Get in touch', href: '#contact' },
  secondaryCta: { label: 'Browse projects', href: '#projects' },
  photo: '/profile-640.webp', // 640px; profile.jpg is the full-size edit
  photoSmall: '/profile-360.webp', // served to phones
  photoAlt: 'Portrait of Sneha Mangwani',
};

export const projectsSection = {
  title: 'Projects',
  subtitle: "Things I've built across full-stack and AI/ML.",
  moreLabel: 'More on GitHub →',
  moreHref: 'https://github.com/Sneha-1505',
};

export const projects = [
  {
    id: 'truthlens',
    featured: true,
    title: 'TruthLens',
    summary:
      'Multilingual fact-checking for WhatsApp forwards in English, Hindi and Punjabi — including Romanized text.',
    problem:
      'Misinformation spreads through forwarded messages, often in Hindi or Punjabi typed in Latin script, where most fact-checking tools fail. Romanized input is the main use case, not an edge case.',
    whatIDid:
      'Team project (3 members) for CSE472. I worked on the data and evaluation side and on the ML pipeline: dataset preparation and frozen splits, per-language and per-script evaluation, and the retrieval and verdict models.',
    howItWorksIntro: 'A message goes through a pipeline:',
    howItWorks: [
      'Detect the claim in the message (X-CLAIM).',
      'Normalize it into a clean, checkable statement.',
      'Match it against existing fact-checks (MultiClaim).',
      'Retrieve evidence with BGE-M3 embeddings, FAISS and BM25.',
      'Classify the verdict: Supported, Refuted, Conflicting, Not Enough Info or Not a Claim.',
      'Generate an explanation and check it against the evidence with NLI.',
    ],
    // TODO: add final numbers (e.g. "Recall@10 of X%, macro-F1 of Y").
    results:
      'Evaluated with Recall@1/5/10 and MRR for retrieval and macro-F1 for verdicts, reported per language and script.',
    stack: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'Sentence-Transformers',
      'BGE-M3',
      'FAISS',
      'BM25',
      'IndicXlit',
      'fastText',
      'FastAPI',
    ],
    links: {
      github: 'https://github.com/SoumiryaSarangi/TruthLens',
      demo: null,
    },
    image: '/projects/truthlens.webp',
    imageAlt: 'TruthLens marking a forwarded health claim as false, with the fact-check source and a ready-made reply',
    // Drawn illustration shown until a screenshot is added.
    visual: {
      type: 'pipeline',
      caption: 'Illustrative example of a forward moving through the pipeline',
      messageLabel: 'Forwarded',
      message: 'Kal se sabhi ATM 3 din band rahenge, aaj hi cash nikaal lo!',
      stages: ['Detect claim', 'Normalize', 'Match fact-checks', 'Retrieve evidence', 'Classify verdict', 'Explain + NLI check'],
      verdicts: ['Supported', 'Refuted', 'Conflicting', 'Not Enough Info', 'Not a Claim'],
      highlightVerdict: 'Refuted',
    },
  },
  {
    id: 'mausam',
    featured: true,
    title: 'Mausam — Personalized Weather App',
    summary:
      'A mobile weather app that shapes forecasts, alerts and advice around who you are and how your day looks, built for Smart India Hackathon 2026.',
    problem:
      'Generic weather apps show the same numbers to everyone. A farmer, a daily commuter and a parent planning a school run need very different answers from the same forecast.',
    // TODO: add your role in the team and how far the team got in SIH.
    whatIDid: 'Team project for Smart India Hackathon 2026 (Problem Statement 76), built in September 2026.',
    howItWorksIntro: null,
    howItWorks: [
      'Onboarding asks for a name, location, persona, daily routine and weather priorities.',
      'Live forecast, air-quality and marine data come from the Open-Meteo APIs for the chosen location.',
      'Eight personas, from farmer to commuter, change the home cards, alerts, what-to-carry tips and AI answers.',
      'Farmers get a crop sowing advisor that checks the weather against rules for each crop.',
      'A built-in weather assistant answers in English, Hindi and eight regional Indian languages, and a planner suggests the best times for the day.',
    ],
    results:
      'A working Expo app with a web build, live weather data, personalized alerts and an atmosphere view with precipitation, cloud and wind layers.',
    stack: [
      'React Native',
      'Expo',
      'Expo Router',
      'JavaScript',
      'Three.js',
      'Open-Meteo API',
      'Expo Notifications',
      'Node.js',
      'Express',
    ],
    links: {
      github: 'https://github.com/Sneha-1505/Mausam-Smart-Weather-App',
      demo: null,
    },
    image: '/projects/mausam.webp',
    imageAlt:
      'Three Mausam screens: a farmer’s home screen with live weather and an air-quality alert, the atmosphere radar, and persona selection',
    visual: null,
  },
  {
    id: 'math-ocr',
    featured: false,
    title: 'Handwritten Math OCR → LaTeX',
    summary: 'Turns a photo of a handwritten maths expression into LaTeX code.',
    problem:
      'Typing equations in LaTeX is slow; students and teachers write maths by hand far faster than they can typeset it.',
    whatIDid:
      'Built the full pipeline for my Machine Learning in Computer Vision course and presented it with a live demo.',
    howItWorksIntro: null,
    howItWorks: [
      'Preprocess the image and segment individual symbols with OpenCV.',
      'Classify each symbol with a CNN trained in PyTorch on the CROHME handwritten maths symbols dataset (Kaggle).',
      'Rebuild the expression from symbol positions and output LaTeX.',
    ],
    // TODO: add symbol accuracy (e.g. "X% on the test set").
    results: 'Runs on CPU only.',
    stack: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'CROHME'],
    links: {
      github: 'https://github.com/darkrazz1521/mathvision',
      demo: 'https://mathvision1521.netlify.app/',
      demoLabel: 'Try the demo',
    },
    image: '/projects/math-ocr.webp',
    imageAlt: 'MathVision converting handwritten E = mc² into rendered math and LaTeX code',
    visual: {
      type: 'ocr',
      caption: 'Illustration: symbols are boxed, classified, then rebuilt as LaTeX',
      latex: '\\frac{x^{2}+1}{2}',
    },
  },
  {
    id: 'finance-assistant',
    featured: false,
    title: 'FinMate AI — Personal Finance Assistant',
    summary:
      'A full-stack web app to track income and expenses, set budgets and savings goals, and see trends on interactive charts.',
    problem:
      'Keeping track of expenses and staying within budget is tedious without a simple, visual tool.',
    whatIDid: 'Built the whole app, front to back (Apr – May 2026).',
    howItWorksIntro: null,
    howItWorks: [
      'A FastAPI backend with SQLAlchemy and SQLite stores transactions, budgets and goals, with JWT authentication.',
      'The React dashboard shows income, expenses, savings, a monthly trend and a category split with Recharts.',
      'A financial health score and spending tips come from the user’s own data; an AI chat answers questions about it.',
      'Receipts can be uploaded to draft a transaction, and reports export to CSV.',
    ],
    results:
      'An expense-prediction helper built with pandas and scikit-learn, trained on a 3,000-row personal-finance dataset.',
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Recharts',
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'SQLite',
      'JWT',
      'scikit-learn',
      'REST APIs',
    ],
    links: {
      github: 'https://github.com/rrana344/Ai-personal-finance-assitant',
      demo: null,
    },
    image: '/projects/finance-assistant.webp',
    imageAlt:
      'FinMate AI dashboard with income, expense and savings totals, a monthly trend line and an expense split chart',
    visual: null,
  },
];

export const journeySection = {
  title: 'Journey',
  subtitle: 'Training, hackathons and practice, newest first.',
  certificatesTitle: 'Certificates',
  certificatesSubtitle: 'Courses I have completed.',
};

export const journey = [
  {
    when: 'Jun – Jul 2026',
    title: 'Job Ready DSA Boot Camp (C++)',
    organiser: 'Eduniketan Private Limited',
    line: 'Data structures, algorithms and LeetCode-based problem-solving.',
    certificateUrl: 'https://drive.google.com/file/d/1wbj3xyKwE3hBn4LKB-1LiLdw8KzGXB4h/view?usp=sharing',
  },
  {
    when: null, // TODO: date
    title: 'Code Storm — 36-hour hackathon',
    organiser: 'Spirit Organisation × Microsoft Student Ambassadors',
    line: 'Built under a 36-hour deadline with a team.',
  },
  {
    when: null, // TODO: date
    title: 'Code-A-Hunt 2.0',
    organiser: 'CodingBlocks LPU',
    line: 'State-level inter-university hackathon.',
  },
  {
    when: 'Ongoing',
    title: '100+ DSA problems solved',
    organiser: 'LeetCode and others',
    line: 'Steady practice in data structures and algorithms.',
  },
];

export const certificates = [
  {
    title: 'Database Management System — Part 1',
    issuer: 'Infosys Springboard',
    date: 'Aug 2026',
    url: 'https://drive.google.com/file/d/1wus-BLajVjeieqh8r7fQd3H4NeoNb6R4/view?usp=sharing',
  },
  {
    title: 'Generative AI',
    issuer: 'NASSCOM Skill Development Program, SFJ',
    date: 'Feb 2026',
    url: 'https://drive.google.com/file/d/1ngRuqVdp5TMWuDuSKkP6mbjtjtc3tcpV/view?usp=sharing',
  },
  {
    title: 'Programming using C++',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    url: 'https://drive.google.com/file/d/1h2zJTv-ycojPByRbwVRugff7BFCsEXVk/view?usp=sharing',
  },
];

export const skillsSection = {
  title: 'Skills',
  subtitle: 'Languages, frameworks and tools I use to ship.',
  also: 'Also: problem-solving, teamwork, project management, adaptability.',
};

// `icon` maps to a lucide icon in Skills.jsx: code | web | ai | data
export const skills = [
  { title: 'Languages', icon: 'code', items: ['C++', 'Python', 'Java', 'C', 'JavaScript'] },
  {
    title: 'Web & Backend',
    icon: 'web',
    items: ['React', 'Node.js', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'REST APIs', 'JWT', 'Chart.js'],
  },
  {
    title: 'AI / ML',
    icon: 'ai',
    items: [
      'PyTorch',
      'OpenCV',
      'Hugging Face Transformers',
      'Sentence-Transformers',
      'FAISS',
      'CNNs',
      'NLP & retrieval',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: 'data',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'SQLAlchemy', 'Git & GitHub', 'VS Code'],
  },
];

export const story = {
  title: 'My Story',
  // TODO for Sneha: read the story and change any line that doesn't sound like you.
  paragraphs: [
    'I started my B.Tech in Computer Science at Lovely Professional University in 2024, and C++ was where it clicked for me. Solving 100+ DSA problems and building an operating-systems simulator for page-replacement algorithms taught me to think about efficiency, not just correctness.',
    'From there I moved to the web. FinMate AI, my personal finance assistant, was my first full-stack app: a React dashboard, a FastAPI backend with REST APIs and JWT authentication, and charts that show where the money goes.',
    "My AI/ML specialization pulled me toward models that work on messy, real-world input — handwritten maths, and fact-checking forwards written in Hindi, Punjabi and Romanized text. I'm now looking for internships where I can build useful software and keep growing as an engineer.",
  ],
  educationTitle: 'Education',
  photo: {
    src: '/hosting.webp',
    alt: 'Sneha speaking at a podium in front of the Lovely Professional University emblem',
    caption: 'Hosting a CodingBlocks event.',
  },
};

export const education = [
  {
    institution: 'Lovely Professional University, Phagwara',
    programme: 'B.Tech, Computer Science & Engineering (specialization: AI/ML)',
    score: 'CGPA 8.23',
    years: 'Aug 2024 – present',
  },
  {
    institution: 'SF DAV Public School, Muzaffarnagar',
    programme: 'Intermediate (Class XII)',
    score: '88.8%',
    years: '2021 – 2023',
  },
  {
    institution: 'ST Thomas School, Muzaffarnagar',
    programme: 'Matriculation (Class X)',
    score: '95.6%',
    years: '2019 – 2021',
  },
];

export const cta = {
  title: 'Interested in working together?',
  line: "I'm open to internships and collaborations — let's talk.",
  primary: { label: 'Get in touch', href: '#contact' },
  secondary: { label: 'Browse projects', href: '#projects' },
};

export const footer = {
  contactTitle: 'Contact',
  contactLine: 'The fastest way to reach me is email.',
  navTitle: 'Navigate',
  // {year} is replaced automatically.
  copyright: '© {year} Sneha Mangwani. Built with React & Tailwind.',
};
