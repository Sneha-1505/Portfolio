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
  greeting: "Hi, I'm Sneha 👋",
  headline: 'Software Developer & AI/ML Enthusiast',
  intro:
    'B.Tech CSE student at Lovely Professional University with a minor in AI/ML. I build full-stack web apps and machine-learning systems — from a Flask finance tracker to a multilingual fact-checking pipeline for WhatsApp forwards.',
  primaryCta: { label: 'Get in touch', href: '#contact' },
  secondaryCta: { label: 'Browse projects', href: '#projects' },
  // TODO: add /public/profile.jpg, then set photo to '/profile.jpg'. Until then the "SM" initials show.
  photo: null,
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
    // TODO: screenshot of the demo UI or a pipeline diagram, 1600x1000 .webp
    image: null, // e.g. '/projects/truthlens.webp'
    imageAlt: 'TruthLens demo interface',
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
      github: null, // TODO: GitHub URL
      demo: 'https://mathvision1521.netlify.app/',
      demoLabel: 'Try the demo',
    },
    // TODO: input image → LaTeX output screenshot, 1600x1000 .webp
    image: null, // e.g. '/projects/math-ocr.webp'
    imageAlt: 'Handwritten expression converted to LaTeX',
    visual: {
      type: 'ocr',
      caption: 'Illustration: symbols are boxed, classified, then rebuilt as LaTeX',
      latex: '\\frac{x^{2}+1}{2}',
    },
  },
  {
    id: 'finance-assistant',
    featured: false,
    title: 'Finance Assistant — Expense Tracker & Budget Manager',
    summary:
      'A full-stack web app to track spending, set monthly budgets and see trends on interactive charts.',
    problem:
      'Keeping track of expenses and staying within budget is tedious without a simple, visual tool.',
    whatIDid: 'Built the whole app, front to back (Apr – May 2026).',
    howItWorksIntro: null,
    howItWorks: [
      'Users sign up and log in with JWT-based authentication.',
      'They add, edit and delete income and expense transactions through REST APIs.',
      'They set category-wise monthly budgets and get an alert at 80% of a budget.',
      'Dashboards with Chart.js show trends; data exports to CSV.',
    ],
    results:
      '42 unit tests, 18 REST API endpoint tests and end-to-end user journeys, with 87% backend code coverage.',
    stack: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'MySQL',
      'SQLite',
      'JavaScript',
      'Bootstrap',
      'Chart.js',
      'JWT',
      'REST APIs',
    ],
    links: {
      github: null, // TODO: GitHub URL
      demo: null,
    },
    // TODO: dashboard screenshot, 1600x1000 .webp
    image: null, // e.g. '/projects/finance-assistant.webp'
    imageAlt: 'Finance Assistant dashboard',
    visual: {
      type: 'budget',
      caption: 'Illustration: a category budget reaching the 80% alert',
      budgetLabel: 'Groceries budget',
      budgetPercent: 80,
      alert: '80% used',
    },
  },
];

export const journeySection = {
  title: 'Journey',
  subtitle: 'Training, hackathons and practice, newest first.',
  certificatesTitle: 'Certificates',
};

export const journey = [
  {
    when: 'Jun – Jul 2026',
    title: 'Job Ready DSA Boot Camp (C++)',
    organiser: 'Eduniketan Private Limited',
    line: 'Data structures, algorithms and LeetCode-based problem-solving.',
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
    date: 'Jul 2026',
    url: null, // TODO: certificate URL
  },
  {
    title: 'Generative AI',
    issuer: 'NASSCOM Skill Development Program, SFJ',
    date: 'Feb 2026',
    url: null, // TODO: certificate URL
  },
  {
    title: 'Programming using C++',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    url: null, // TODO: certificate URL
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
    'From there I moved to the web. My Finance Assistant project was my first full-stack app: REST APIs, JWT authentication, dashboards, and a proper test suite with 87% backend coverage.',
    "My AI/ML minor pulled me toward models that work on messy, real-world input — handwritten maths, and fact-checking forwards written in Hindi, Punjabi and Romanized text. I'm now looking for internships where I can build useful software and keep growing as an engineer.",
  ],
  educationTitle: 'Education',
};

export const education = [
  {
    institution: 'Lovely Professional University, Phagwara',
    programme: 'B.Tech, Computer Science & Engineering (minor: AI/ML)',
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
