
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  from: string;
  to: string;
};

export type Experience = {
  company: string;
  position: string;
  from: string;
  to: string;
  description: string[];
};

export type Skill = {
  name: string;
  level: number;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment processing capabilities.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    tags: ["Angular", "Firebase", "TypeScript", "Material UI"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  },
  {
    id: 3,
    title: "Fitness Tracking Dashboard",
    description: "Interactive dashboard for tracking workouts, nutrition, and progress toward fitness goals.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Vue.js", "Chart.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Web application that leverages AI to generate blog posts, social media content, and more.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Python", "Flask", "OpenAI API", "TailwindCSS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  },
  {
    id: 5,
    title: "Virtual Reality Tour App",
    description: "Immersive VR experience for exploring historical landmarks and tourist destinations.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1398&q=80",
    tags: ["Three.js", "WebXR", "React", "A-Frame"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  },
  {
    id: 6,
    title: "Climate Change Visualization",
    description: "Interactive data visualization tool showing climate change trends over the past century.",
    image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["D3.js", "React", "Python", "Data Analysis"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/username/project"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 85 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 65 },
  { name: "UI/UX Design", level: 60 },
  { name: "GraphQL", level: 60 },
  { name: "AWS", level: 55 }
];

export const experience: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    from: "Jan 2021",
    to: "Present",
    description: [
      "Led front-end development for a SaaS platform serving 100,000+ users",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 65%",
      "Mentored junior developers and conducted code reviews for team of 8"
    ]
  },
  {
    company: "Digital Solutions Co.",
    position: "Full Stack Developer",
    from: "Mar 2018",
    to: "Dec 2020",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs with Express and MongoDB",
      "Collaborated with UX designers to implement user-friendly interfaces",
      "Reduced server response time by 30% through database optimization"
    ]
  },
  {
    company: "Creative Web Studios",
    position: "Web Developer",
    from: "Jun 2016",
    to: "Feb 2018",
    description: [
      "Built custom WordPress themes and plugins for clients",
      "Created interactive web experiences using JavaScript and jQuery",
      "Optimized websites for SEO and accessibility compliance",
      "Managed hosting and deployment for 20+ client websites"
    ]
  }
];

export const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Master's Degree",
    field: "Computer Science",
    from: "2014",
    to: "2016"
  },
  {
    school: "State College",
    degree: "Bachelor's Degree",
    field: "Software Engineering",
    from: "2010",
    to: "2014"
  }
];
