export const person = {
  name: "Kyaw Ye Lin",
  title: "Software Engineer",
  email: "kyawyelin@proton.me",
  phone: "+95 9 976 923 404",
  birth: "August 11, 2003",
  location: "Myanmar",
  linkedIn: "https://www.linkedin.com/in/kyaw-ye-lin-730212210",
} as const

export const summary = `Results-driven software and blockchain developer with extensive experience in mobile
development, blockchain integration, and firmware. I work well across cross-functional teams and ship
scalable, well-tested systems. I focus on performance, clear interfaces, and maintainable code—and I pick up
new stacks quickly when a project needs it.`

export const experience = [
  {
    id: "lom",
    company: "LOMTech",
    role: "Backend Developer",
    period: "Nov 2025 — Present",
    highlights: [
      "Shipping a warehouse management system (WMS) with Node.js, AdonisJS, and TypeScript.",
      "Designing MySQL schemas and managing data with Lucid ORM.",
      "Building REST APIs for inventory, stock movement, and order processing, including core business workflows.",
    ],
  },
  {
    id: "dirace",
    company: "DIRACE Technology (Daiwa Institute of Research)",
    role: "Senior Blockchain Engineer",
    period: "May 2024 — Oct 2025",
    highlights: [
      "Leading smart contract and blockchain initiatives with a security-first mindset.",
      "Integrating on-chain features into enterprise products, balancing privacy and verifiability.",
      "Tuning throughput, finality, and security trade-offs for distributed applications.",
    ],
  },
  {
    id: "gnext",
    company: "G-Next Myanmar",
    role: "Web Developer",
    period: "Jul 2023 — Apr 2024",
    highlights: [
      "Building a mobile warehouse app with reliable offline flows and performant data sync.",
      "Collaborating with a UK-holdings partner on a blockchain-based social product.",
      "Implementing auth and on-chain features while managing scalability concerns.",
    ],
  },
  {
    id: "first-ict",
    company: "First ICT Solution",
    role: "Software Engineer",
    period: "Dec 2021 — Jun 2023",
    highlights: [
      "HR and learning management systems that simplified day-to-day operations.",
      "Warehouse and POS products that improved stock accuracy and service speed for clients.",
    ],
  },
  {
    id: "mkk",
    company: "MKK 3D Printing Service",
    role: "Embedded Engineer",
    period: "Nov 2020 — Apr 2021",
    highlights: [
      "Arduino and embedded features delivering tailored behavior for end users.",
      "Firmware repair and tuning for 3D printers, improving stability and user experience.",
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
    name: "Languages",
    items: [
      "Solidity",
      "Go",
      "JavaScript",
      "TypeScript",
      "Haskell",
      "Rust",
      "C / C++",
      "Python",
      "PHP",
    ],
  },
  {
    name: "Front end",
    items: ["React"],
  },
  {
    name: "Back end",
    items: ["Gin", "Express", "Nest", "Laravel", "Node.js", "AdonisJS"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Oracle Cloud", "DigitalOcean", "Railway", "Git / GitHub", "Docker"],
  },
] as const

export const certifications = [
  {
    title: "Software Engineering: Software Design and Project Management",
    org: "The Hong Kong University of Science and Technology (Coursera)",
    url: "https://coursera.org/verify/BBSGBKFZ2QFB",
  },
  {
    title: "Oracle Cloud Infrastructure — Foundation Associate",
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
    name: "Blockchain Lure",
    url: "https://www.blockchain-lures.com/",
    description: "A social product built on Solana—on-chain identity, feeds, and transparent interactions.",
  },
  {
    name: "Nura",
    url: "https://github.com/kyawyelin284/nura",
    description:
      "A small, statically typed functional language: closures, ADTs, pattern matching, TCO, GC, a REPL, and a stdlib—built to learn and teach language design.",
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
