export const profile = {
  name: 'Yashaswi Srivastava',
  role: 'Full Stack Software Developer',
  tagline: 'Backend-learning engineer building reliable APIs, scalable .NET systems, and AI-powered workflows.',
  location: 'Mumbai, Maharashtra, India',
  email: 'yashaswi26022006@gmail.com',
  emailAlt: 'yashaswi1102@gmail.com',
  phone: '+91 8957582028',
  phoneAlt: '+91 8850719145',
  resumeUrl: '/Yashaswi_Srivastava_Resume.pdf',
  socials: {
    github: 'https://github.com/YashaswiSrivastava1706',
    linkedin: 'https://linkedin.com/',
    leetcode: 'https://leetcode.com/u/Yavi_1706/',
  },
  typewriter: [
    'Full Stack Software Developer',
    '.NET / C# Backend Engineer',
    'React + Node Frontend Builder',
    'GenAI & RAG Enthusiast',
    'Azure DevOps & CI/CD Practitioner',
  ],
};

export const stats = [
  { num: '3+', lbl: 'Years of Experience' },
  { num: 'AI-Ready', lbl: 'Workflow Automations' },
  { num: '24/7', lbl: 'Production deployment support' },
  { num: 'Optimized', lbl: '.NET Backend Systems' },
];

export const aboutHighlights = [
  {
    icon: '⚡',
    title: 'Performance Obsessed',
    text: 'Cut report generation 12s → 3.5s and reduced API latency ~30% on production workflows.',
  },
  {
    icon: '🛠️',
    title: 'End-to-End Ownership',
    text: 'Requirement analysis, design, deployment, and production support — full lifecycle.',
  },
  {
    icon: '🤖',
    title: 'GenAI Integrations',
    text: 'LLMs, RAG pipelines, prompt engineering integrated into enterprise backends.',
  },
  {
    icon: '☁️',
    title: 'Cloud & CI/CD',
    text: 'Azure DevOps pipelines that reduced deployment failures by ~40%.',
  },
];

export const experience = [
  {
    role: 'Full Stack Software Developer',
    company: 'Jio Platforms Ltd.',
    where: 'Navi Mumbai, India',
    when: 'Nov 2023 – Present',
    bullets: [
      'Designed and developed scalable backend APIs for the Jio Home Delivery platform supporting 150,000+ daily deliveries.',
      'Refactored critical execution paths and optimized API workflows, reducing latency by ~30%.',
      'Re-architected reporting modules, cutting report generation from 12s to 3.5s (~70% improvement).',
      'Built role-based access control for admin, store, and rider operations.',
      'Implemented Azure DevOps CI/CD pipelines, reducing deployment failures by ~40%.',
      'Optimized SQL queries, indexes, and stored procedures (~50% faster DB performance).',
      'Integrated AI-driven automation components into backend workflows.',
    ],
    stack: ['ASP.NET MVC', 'Web API', 'C#', 'MySQL', 'Azure', 'CI/CD', 'Microservices'],
  },
  {
    role: 'Java Developer',
    company: 'Nagarro Private Software Ltd.',
    where: 'Gurugram, India',
    when: 'Mar 2023 – Oct 2023',
    bullets: [
      'Developed and deployed 5+ Java Spring Boot microservices supporting B2B and B2C platforms.',
      'Built cloud-hosted backend services with AngularJS frontend integrations.',
      'Optimized service deployments and infrastructure usage, achieving ~20% cost savings.',
    ],
    stack: ['Java', 'Spring Boot', 'AngularJS', 'Node.js', 'React'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Ankur Web Technology',
    where: 'India',
    when: 'Jul 2022 – Sep 2022',
    bullets: [
      'Developed and optimized an e-commerce platform using PHP, JavaScript, AJAX, and MySQL.',
      'Improved mobile responsiveness and cross-browser compatibility, enhancing UX.',
    ],
    stack: ['PHP', 'JavaScript', 'AJAX', 'MySQL'],
  },
];

export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend & APIs',
    skills: [
      { name: 'C# / .NET', level: 92 },
      { name: 'ASP.NET MVC', level: 90 },
      { name: 'ASP.NET Web API', level: 90 },
      { name: '.NET Core', level: 85 },
      { name: 'Node.js', level: 78 },
      { name: 'Java (Spring Boot)', level: 72 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 88 },
      { name: 'ReactJS', level: 82 },
      { name: 'AngularJS', level: 75 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'Bootstrap', level: 85 },
      { name: 'AJAX', level: 82 },
    ],
  },
  {
    id: 'data',
    label: 'Databases',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'SQL Server', level: 88 },
      { name: 'Query Optimization', level: 85 },
      { name: 'Stored Procedures', level: 85 },
    ],
  },
  {
    id: 'ai',
    label: 'AI / GenAI',
    skills: [
      { name: 'LLM Integration', level: 80 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'RAG Pipelines', level: 75 },
      { name: 'Oracle Generative AI (Certified)', level: 82 },
      { name: 'Python (Data Basics)', level: 70 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', level: 82 },
      { name: 'Azure DevOps', level: 85 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Git', level: 90 },
    ],
  },
];

export const projects = [
  {
    title: 'Jio Home Delivery Platform',
    type: 'Internal',
    desc: 'Core delivery workflow modules for SIM & Fiber customers. Designed service layers and optimized SQL → 50% faster queries. Built role-based access and integrated automated job schedulers.',
    tech: ['ASP.NET', 'C#', 'MySQL', 'Azure', 'JavaScript'],
    links: { live: null, code: null },
    featured: true,
  },
  {
    title: 'Inventory Store and Management',
    type: 'Internal',
    desc: 'Centralized inventory platform with real-time tracking and request management. Built during my internship at Ankur Web Technology — reduced manual paperwork by ~80%.',
    tech: ['PHP', 'MySQL', 'AJAX', 'JavaScript'],
    links: { live: null, code: null },
    featured: true,
  },
  {
    title: 'Holiday Master',
    type: 'Full Stack',
    desc: 'Holiday & leave-master service to manage organizational holiday calendars, public holidays per region, and reusable holiday metadata for downstream apps.',
    tech: ['Spring Boot', 'REST API', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/HolidayMaster' },
  },
  {
    title: 'Product Review Platform',
    type: 'Full Stack',
    desc: 'REST API + Angular client for product reviews with auth, search, and admin moderation. Emphasizes coding conventions, security, and clean UX.',
    tech: ['Spring Boot', 'Angular', 'REST API', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/product_review' },
  },
  {
    title: 'Note Saver',
    type: 'Full Stack',
    desc: 'Notes app keeping the most recent 10 entries per user, hourly cleanup of older ones, length validations, and user-driven deletes.',
    tech: ['Java 8', 'Spring Boot', 'JPA', 'Angular'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/note_saver' },
  },
  {
    title: 'Result Management',
    type: 'Full Stack',
    desc: 'Web app where students view results by roll & DOB and teachers manage records — full CRUD with validation flows. Angular frontend + Node backend.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'HTML', 'CSS'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/result_management' },
  },
  {
    title: 'Blogging Thoughts',
    type: 'Web App',
    desc: 'A blogging platform for displaying posts, viewing details, adding/editing/deleting posts, and liking favourites. Uses Redux + Context API for state.',
    tech: ['React', 'Redux', 'Context API', 'Node.js'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Blogging_Thoughts' },
  },
  {
    title: 'Library Management',
    type: 'Web App',
    desc: 'Spring MVC + JSP web app exposing REST APIs (App 2) for authors & books with full CRUD via Hibernate. Showcases clean MVC + RESTful design.',
    tech: ['Spring MVC', 'Hibernate', 'JSP', 'REST'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Library_Management' },
  },
  {
    title: 'T-Shirt Shopping Companion',
    type: 'Web App',
    desc: 'Spring + Hibernate product search by Color, Size, Gender, and output preference. Dynamic CSV loading via threads, login + product search screens.',
    tech: ['Spring MVC', 'Hibernate', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Tshirt_companion' },
  },
];

export const githubProfileUrl = 'https://github.com/YashaswiSrivastava1706';

export const seedReviews = [
  {
    id: 'r1',
    name: 'Rohit M.',
    role: 'Engineering Manager',
    rating: 5,
    text: 'Yashaswi consistently ships clean, optimized backend code. His SQL & API tuning saved us real production minutes.',
    date: '2025-09-12',
  },
  {
    id: 'r2',
    name: 'Priya S.',
    role: 'Product Lead',
    rating: 5,
    text: 'Reliable end-to-end developer. Took ownership of complex modules and shipped with very few defects.',
    date: '2025-08-04',
  },
  {
    id: 'r3',
    name: 'Anand K.',
    role: 'Senior Architect',
    rating: 4,
    text: 'Strong .NET fundamentals and a clear thinker around system design. Great teammate to have on a delivery-heavy sprint.',
    date: '2025-06-18',
  },
];
