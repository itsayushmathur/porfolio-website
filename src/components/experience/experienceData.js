// experienceData.js

export const professionalExperience = [
  {
    role: "Software Engineer - Products",
    company: "Incture - Chandigarh",
    duration: "Jul 2025 - Present",
    points: [
      "Lead frontend delivery for selected modules; enforce component improvements, performance and best practices across the product.",
      "Mentoring 9 junior developers and interns on React patterns, debugging, and testing.",
      // "Collaborate with backend teams to design stable API contracts and resilient client-side integrations.",
      // Added from resume
      "Developed features for Walmart GTI following test-driven development (TDD), ensuring high code quality and reliability.",
      "Owned frontend architecture decisions for product modules and ensured consistent, reusable patterns across teams."
    ]
  },
  {
    role: "Associate Software Engineer - Web Developer",
    company: "Incture - Chandigarh",
    duration: "Aug 2023 - Jun 2025",
    points: [
      "Developed and maintained 18+ modules for the Employee Portal and VINGS platform boosting user engagement by 25%.",
      "Built a reusable component library used across modules to accelerate development and reduce bugs by 30%.",
      "Integrated 13 embedded Power BI reports into portal UI, reducing third-party tool usage and saving 20% operational costs.",
      "Worked closely with backend teams to ensure robust API contracts and graceful failure modes.",
      // Added from resume
      "Contributed to production-grade projects for global clients (e.g., Viatris) and ensured seamless deployments.",
      "Gained hands-on experience across the full software development lifecycle: design, implementation, testing, and deployment."
    ]
  },
  {
    role: "Associate Software Engineer Intern",
    company: "Incture - Chandigarh",
    duration: "Jan 2023 - Jul 2023",
    points: [
      "Designed 7+ UI components under senior developer guidance.",
      "Supported debugging, improving SonarQube quality by 30%, and participated in daily standups and code reviews.",
      // kept original wording and added one small resume-aligned point
      "Assisted with writing unit tests and improving component test coverage."
    ]
  }
];

export const technicalSkills = {
  // kept original frontend array and entries (unchanged) and appended new frontend-related skills
  frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Styled Components", level: "Intermediate" },
    { name: "Redux (State Management)", level: "Intermediate" },
    { name: "HTML5/CSS3", level: "Advanced" },
    // additions
    { name: "Next.js", level: "Beginner" },
    { name: "TypeScript", level: "Beginner" },
    { name: "Vite", level: "Intermediate" },
    { name: "Material UI (MUI)", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" }
  ],
  // kept original backend array and entries (unchanged) and appended new backend-related skills
  backend: [
    { name: "Core Java", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
    { name: "Express.js", level: "Beginner" },
    { name: "SpringBoot", level: "Beginner" },
    { name: "Hibernate", level: "Beginner" },
    // additions
  ],
  database: [
    { name: "MySQL", level: "Intermediate" },
    { name: "NoSQL", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
  ],
  // kept original miscellaneous array and entries (unchanged) and appended new tooling/other skills
  miscellaneous: [
    { name: "Chrome DevTools", level: "Advanced" },
    { name: "Debugging & Optimization", level: "Advanced" },
    { name: "Digital Art & Sketching", level: null },
    { name: "Git & Version Control", level: "Advanced" },
    // additions
    { name: "Postman / API testing", level: "Advanced" },
    { name: "Jest (Unit Testing)", level: "Beginner" },
    { name: "Test-Driven Development (TDD)", level: "Intermediate" },
    { name: "Recharts / Chart.js (Data Viz)", level: "Intermediate" }
  ],
  // kept original deployment array (unchanged) and appended CI/CD tools
  deployment: [
    { name: "Netlify", level: "Intermediate" },
    { name: "Vercel", level: "Intermediate" },
    // additions
    { name: "GitHub Actions (CI/CD)", level: "Beginner" },
    { name: "Docker", level: "Beginner" }
  ],
  // new categories added (do not remove existing keys)
  languages: [
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Java", level: "Entry" }
  ],
  frameworks_and_tools: [
    { name: "Redux Toolkit", level: "Intermediate" },
    { name: "React Hooks & Functional Components", level: "Advanced" },
    { name: "Next.js (SSR/SSG)", level: "Intermediate" },
    { name: "Vite (build tooling)", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "Razorpay (payments)", level: "Beginner" },
    { name: "Clerk (auth)", level: "Beginner" }
  ],
  testing_and_quality: [
    { name: "Jest", level: "Intermediate" },
    { name: "Unit & Integration Testing", level: "Intermediate" },
    { name: "TDD (Test-Driven Development)", level: "Intermediate" },
    { name: "SonarQube (code quality)", level: "Intermediate" }
  ],
  databases: [
    { name: "MongoDB", level: "Entry" },
    { name: "MySQL", level: "Intermediate" },
    { name: "NoSQL concepts", level: "Intermediate" }
  ],
  devtools: [
    { name: "Git", level: "Advanced" },
    { name: "Chrome DevTools", level: "Advanced" },
    { name: "Postman", level: "Advanced" },
    { name: "VS Code", level: "Advanced" }
  ]
};
