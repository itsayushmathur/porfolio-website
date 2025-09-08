// services.js
const servicesData = [
  {
    id: "frontend",
    title: "Frontend Development",
    points: [
      {
        title: "Responsive Web Applications",
        desc: "Develop scalable, mobile-responsive applications using React.js and modern patterns for smooth UX across devices."
      },
      {
        title: "Optimized Performance",
        desc: "Focus on bundle-splitting, lazy-loading, memoization and critical rendering path improvements to reduce load times."
      },
      {
        title: "Custom Dashboards",
        desc: "Build data-driven dashboards and integrate embedded Power BI/visualizations for centralized business insights."
      }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    points: [
      {
        title: "Modern Interfaces",
        desc: "Design clean, accessible interfaces using Material-UI and utility-first approaches (Tailwind) to speed up iterations."
      },
      {
        title: "Mobile-First Design",
        desc: "Mobile-first responsive layouts and touch-friendly patterns that maintain parity across breakpoints."
      },
      {
        title: "Interactive Prototypes",
        desc: "Clickable prototypes and flows to validate interactions before implementation."
      }
    ]
  },
  {
    id: "digital-art",
    title: "Digital Art & Design",
    points: [
      {
        title: "Sketching & Illustrations",
        desc: "Custom sketches and illustrations to strengthen product storytelling and visual identity."
      },
      {
        title: "Graphic Assets",
        desc: "Create banners, icons, and marketing assets that align with brand guidelines."
      },
      {
        title: "Creative UI Elements",
        desc: "Artful UI elements that enhance aesthetics while keeping usability intact."
      }
    ]
  },
//   {
//     id: "fullstack",
//     title: "Fullstack Development",
//     points: [
//       {
//         title: "End-to-end Features",
//         desc: "Implement feature complete flows from DB to UI using Node/Express or Spring Boot with React frontend."
//       },
//       {
//         title: "Auth & Payments",
//         desc: "Integrate authentication (Clerk, OAuth) and payment workflows (Razorpay) securely into product flows."
//       },
//       {
//         title: "Deployment & Release",
//         desc: "Assist with CI/CD (GitHub Actions), deployments to Vercel / Netlify and basic containerization with Docker."
//       }
//     ]
//   },
  {
    id: "api",
    title: "API Integration & Backend",
    points: [
      {
        title: "Robust API Contracts",
        desc: "Collaborate with backend teams to define stable contracts, graceful error handling and client-side resiliency."
      },
      {
        title: "Data Handling",
        desc: "Efficient data fetching patterns (SW/React Query, Axios), caching strategies and pagination for large datasets."
      },
      {
        title: "Datastores",
        desc: "Practical experience integrating MySQL and MongoDB driven services with performant queries and indexes."
      }
    ]
  },
  {
    id: "testing",
    title: "Testing & Quality",
    points: [
      {
        title: "Unit & Integration Tests",
        desc: "Write Jest-driven unit tests and component tests to ensure regressions are caught early."
      },
      {
        title: "TDD Mindset",
        desc: "Apply test-driven development practices for critical flows to improve reliability and design."
      },
      {
        title: "Code Quality",
        desc: "Use Devtools and linting to raise code quality and reduce technical debt."
      }
    ]
  }
];

export default servicesData;
