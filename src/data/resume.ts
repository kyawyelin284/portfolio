export const person = {
  name: "Kyaw Ye Lin",
  title: "Software Engineer",
  email: "kyawyelin@proton.me",
  phone: "+959 976 923 404",
  birth: "August 11, 2003",
  location: "Myanmar",
  linkedIn: "https://www.linkedin.com/in/kyaw-ye-lin-730212210",
} as const

export const summary = `Results-driven Software, Blockchain, and AI Developer with extensive experience in mobile development, decentralized systems, intelligent AI automation, and firmware development. I lead cross-functional teams and deliver scalable solutions by merging advanced language models with web3 technologies—designing custom applications, optimizing backend architecture, and enhancing user experiences while adapting quickly to emerging tech stacks.`

export const experience = [
  {
    id: "blue-dragon",
    company: "Blue Dragon",
    role: "AI Engineer",
    period: "Nov 2025 — Present",
    tags: ["Python", "AWS", "Docker", "TypeScript"],
    description:
      "Architected backend systems and DevOps pipelines for T-Station and ChartPlus AI. Built AI chatbots for medical diagnostics and customer consultation, with secure cloud infrastructure for real-time model inference and large-scale data processing.",
    highlights: [
      "Architected and maintained backend systems and DevOps pipelines for T-Station and ChartPlus AI platforms.",
      "Built AI chatbots specialized in medical diagnostics (ChartPlus) and customer consultation (T-Station), focusing on high-accuracy response generation and medical record analysis.",
      "Implemented secure, scalable cloud infrastructure to support real-time AI model inference and large-scale data processing.",
    ],
  },
  {
    id: "dirace",
    company: "DIRACE Technology (Daiwa Institute of Research)",
    role: "Senior Blockchain Engineer",
    period: "May 2024 — Oct 2025",
    tags: ["Solidity", "Rust", "Go", "TypeScript"],
    description:
      "Led blockchain development projects and designed secure, scalable smart contracts. Integrated on-chain features into enterprise products while addressing scalability, transaction speed, and security for decentralized applications.",
    highlights: [
      "Led blockchain development projects, designing secure and scalable smart contracts.",
      "Collaborated with teams to integrate blockchain features into enterprise solutions, ensuring secure transactions and user privacy.",
      "Addressed scalability, transaction speed, and security issues for decentralized applications.",
    ],
  },
  {
    id: "gnext",
    company: "G-Next Myanmar",
    role: "Web Developer",
    period: "Jul 2023 — Apr 2024",
    tags: ["React", "Solidity", "JavaScript", "Node.js"],
    description:
      "Developed a mobile warehouse management app and collaborated with a UK-holdings partner on a blockchain-based social platform. Integrated blockchain features with a focus on scalability, security, and user authentication.",
    highlights: [
      "Developed a mobile app for warehouse management, ensuring functionality and performance.",
      "Collaborated with a UK-holdings company to develop a blockchain-based social media platform, enhancing data security and transparency.",
      "Integrated blockchain features, addressing scalability and user authentication challenges.",
    ],
  },
  {
    id: "first-ict",
    company: "First ICT Solution",
    role: "Software Engineer",
    period: "Dec 2021 — Jun 2023",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    description:
      "Designed and delivered HR and learning management systems, warehouse management software, and restaurant POS solutions that streamlined operations and improved inventory and sales workflows for clients.",
    highlights: [
      "Designed and developed HR Management and Learning Management Systems to streamline operations.",
      "Built Warehouse Management software to optimize inventory control and logistics.",
      "Created POS solutions for restaurants, improving order management and sales tracking.",
    ],
  },
  {
    id: "mkk",
    company: "MKK 3D Printing Service",
    role: "Embedded Engineer",
    period: "Nov 2020 — Apr 2021",
    tags: ["C / C++", "Arduino", "Firmware"],
    description:
      "Built Arduino-based embedded features and optimized 3D printer firmware, improving performance, reliability, and user experience while reducing downtime through close collaboration with the engineering team.",
    highlights: [
      "Spearheaded the development of various Arduino projects, contributing to enhanced functionality and customization options for end-users.",
      "Executed detailed firmware repair and optimization tasks for 3D printers, leading to significant improvements in performance, reliability, and user experience.",
      "Collaborated with the engineering team to troubleshoot complex issues and implement innovative solutions, reducing downtime and maintenance costs.",
    ],
  },
] as const

export const education = [
  {
    school: "Government Technical Institute (G.T.I) — Shwepyithar",
    credential: "Diploma in Mechanical Engineering (first year)",
    period: "Jan 2020 — Apr 2020",
  },
  {
    school: "West Yangon University",
    credential: "Bachelor of English (first year)",
    period: "Jan 2020 — Apr 2020",
  },
] as const

export const skillGroups = [
  {
    name: "Programming Languages",
    items: [
      "Solidity",
      "Go",
      "JavaScript",
      "TypeScript",
      "Haskell",
      "Rust",
      "C",
      "C++",
      "Python",
      "PHP",
    ],
  },
  {
    name: "Cloud Technologies",
    items: ["Amazon Web Service (AWS)", "Oracle", "Digital Ocean", "Railway"],
  },
  {
    name: "Front-end Technologies",
    items: ["React"],
  },
  {
    name: "Back-end Technologies",
    items: ["Gin", "Express", "Nest", "Laravel"],
  },
  {
    name: "Other Technologies",
    items: ["Git and GitHub", "Docker"],
  },
] as const

export const certifications = [
  {
    title: "Software Engineering: Software Design and Project Management",
    org: "The Hong Kong University of Science and Technology (Coursera)",
    url: "https://coursera.org/verify/BBSGBKFZ2QFB",
  },
  {
    title: "Oracle Certified Cloud Infrastructure Foundation Associate",
    org: "Oracle University",
    url:
      "https://catalog-education.oracle.com/ords/certview/share%20badge?id=A25F004AEFA6F01707F373F2A62A0CB12C5FA981DD9EEBB8A908307046B9EE09",
  },
  {
    title: "Data Management and Analysis (CRA Training)",
    org: "Huawei",
    url: "http://shixizhi.huawei.com/t/lcripj",
  },
] as const

export const projects = [
  {
    name: "T-Station",
    url: "https://www.tstation.com/",
    tags: ["Python", "TypeScript", "AWS"],
    description:
      "Designed and deployed an intelligent AI agent to enhance customer engagement and streamline service bookings. The agent uses NLP to assist users in selecting tires, managing maintenance appointments, and providing real-time technical support.",
  },
  {
    name: "Hankook Tire",
    url: "https://www.hankooktire.com/",
    tags: ["Go", "React", "Docker"],
    description:
      "Spearheaded core backend development and server architecture optimization for Hankook Tire's global digital platform—high availability, multi-region scalability, and a real-time AI chatbot for customer assistance.",
  },
  {
    name: "Blockchain Lure",
    url: "https://www.blockchain-lures.com/",
    tags: ["Solidity", "React", "Web3"],
    description:
      "Blockchain-based platform focused on secure, transparent digital interactions and decentralized data ownership.",
  },
  {
    name: "Nura",
    url: "https://github.com/kyawyelin284/nura",
    tags: ["Rust", "Haskell", "Compilers"],
    description:
      "Designed and implemented Nura, a custom-built programming language focused on simplicity—covering lexical analysis, parsing, and execution logic to demonstrate deep expertise in low-level systems programming and language design.",
  },
] as const

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const
