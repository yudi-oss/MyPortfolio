// ✏️ Edit everything here. Your whole site reads from this file.

export const data = {
  name: "Yudina Magar",
  role: "Front-End Developer",
  location: "Kathmandu, Nepal",
  email: "hello@yoursite.com", // ✏️ your real email
  phone: "+00 000 000 0000", // ✏️ your real phone
  address: "Your street, City, Country", // ✏️
  available: true,

  resume: {
    // ✏️ drop your PDF at public/resume.pdf (or change this path)
    file: "/resume.pdf",
    intro:
      "I'm a front-end developer and IT student in Kathmandu. I like taking a design and turning it into something that feels fast, clear and easy to use — and I'm just as happy fiddling with spacing until it looks right as I am shipping a new feature. Currently working at Tecobit, building real products for real clients.",
  },

  hero: {
    eyebrow: "Portfolio — 2026",
    lines: ["Building", "Modern Web", "Experiences"],
    image: "/me.png",
    blurb:
      "Front-end developer & IT student crafting fast, accessible interfaces with React, Next.js and a keen eye for detail.",
  },

  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "Figma",
    "Responsive Design",
  ],

  about: {
    title: "Who is Yudina Magar?",
    image: "/about.png",
    paragraphs: [
      "I'm a Front-End Developer and Information Technology student passionate about building modern web applications. I enjoy transforming ideas into user-friendly digital experiences through clean code, thoughtful design, and continuous learning.",
      "From responsive layouts to animated interfaces, I care about the details that make a product feel effortless — performance, accessibility, and typography included.",
    ],
    stats: [
      { value: 3, suffix: "+", label: "Projects shipped" },
      { value: 2, suffix: "", label: "Years building" },
      { value: 15, suffix: "+", label: "Technologies used" },
      { value: 100, suffix: "%", label: "Commitment" },
    ],
  },

  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools",
      items: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Chrome DevTools"],
    },
  ],

  background: [
    {
      period: "2026 — Present",
      title: "Front-End Developer",
      place: "Tecobit Technology Pvt. Ltd.",
      kind: "work" as const,
      items: [
        "Build and ship client websites — landing pages, dashboards and booking flows — from mockup to production",
        "Work side by side with designers and senior devs: pair on tricky UI, review each other's code, squish bugs before clients see them",
      ],
    },
    {
      period: "2024 — Present",
      title: "B.Sc. Information Technology",
      place: "University",
      kind: "education" as const,
      items: ["Learning the theory behind the code — software engineering, web tech and a lot of late-night assignments"],
    },
    {
      period: "2022 — 2024",
      title: "Science",
      place: "Vishwa Adarsha College",
      kind: "education" as const,
      items: ["Maths, physics and computer science — where the whole coding thing started"],
    },
  ],

  workTitle: "Selected Work",
  work: [
    {
      image: "/hotel.png",
      title: "Hotel Booking System",
      caption:
        "A modern hotel reservation platform with room booking and MongoDB integration.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yudi-oss/Hotel-Booking-System",
    },
    {
      image: "/school.png",
      title: "School Management Website",
      caption:
        "A responsive school website with academic pages and contact forms.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/yudi-oss/CrestWood-Academy",
    },
    {
      image: "/weather.png",
      title: "Weather Application",
      caption:
        "A real-time weather application that fetches live weather data using external APIs and displays forecasts in a clean user interface.",
      tags: ["JavaScript", "REST API"],
      link: "https://github.com/yudi-oss/Weather-app",
    },
  ],

  quote: "Great interfaces live where clean code meets thoughtful design.",

  contactTitle: ["Let's build", "something great."],

  socials: [
    { label: "GitHub", href: "https://github.com/yudi-oss" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", }, // ✏️ your LinkedIn
    { label: "Instagram", href: "https://www.instagram.com/your-handle", }, // ✏️ your Instagram
    { label: "WhatsApp", href: "https://wa.me/0000000000", }, // ✏️ your WhatsApp number (country code, no + or spaces)
  ],
};

export type PortfolioData = typeof data;
