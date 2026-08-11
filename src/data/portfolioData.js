import React from 'react';
import votingImg from '../assets/voting_system.jpg';
import healthImg from '../assets/health_ai.jpg';
import foodImg from '../assets/food_wastage.jpg';

export const personalInfo = {
  name: "Sudeep Krishna T K",
  initials: "SK",
  title: "Full Stack Developer | React.js | Node.js | JavaScript | Python | SQL | REST APIs | Building Scalable Web Applications",
  tagline: "Full Stack Developer | React.js | Node.js | JavaScript | Python | SQL | REST APIs | Building Scalable Web Applications",
  shortIntro: "Hello, I'm",
  description: "Computer Science graduate passionate about building scalable, responsive, and user-focused web applications. Experienced in full-stack development, REST APIs, databases, and modern JavaScript technologies, with a strong interest in AI-assisted software development.",
  aboutHeading: "Curious. Consistent.\nCommitted to Code.", // Kept from original to preserve layout if used, though text replaces main content.
  aboutText: "I'm a Computer Science graduate and Full Stack Developer based in Bengaluru, India, passionate about building reliable, scalable, and user-friendly software applications.\n\nMy development experience spans frontend and backend technologies including React.js, JavaScript, Node.js, Express.js, Python, PHP, SQL, and REST APIs. I enjoy turning ideas into functional products, solving technical problems, and continuously learning modern software engineering practices.\n\nI have worked on web development projects and gained practical experience through internship and project-based development. I am particularly interested in full-stack development, backend engineering, AI-assisted development, and building products that solve real-world problems.\n\nI'm currently looking for opportunities where I can contribute to a professional engineering team, strengthen my software engineering skills, and grow as a developer.",
  location: "Bengaluru, India",
  experienceLevel: "Early-Career",
  focus: "Full-Stack Development",
  email: "sudeepkrishnatk@gmail.com",
  phone: "+91 6369221774",
  socials: {
    linkedin: "https://www.linkedin.com/in/sudeep-krishna-b65b37332", 
    github: "https://github.com/sudeepkrishnatk",
    email: "mailto:sudeepkrishnatk@gmail.com"
  }
};

export const skills = {
  frontend: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Responsive Web Design" }
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Python" },
    { name: "PHP" },
    { name: "REST APIs" }
  ],
  databases: [
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "SQL" }
  ],
  programming: [
    { name: "C" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "PHP" }
  ],
  tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Postman" },
    { name: "XAMPP" }
  ],
  development: [
    "API Integration",
    "Authentication",
    "Database Management",
    "Debugging",
    "Responsive Design",
    "Git Version Control",
    "AI-Assisted Development"
  ]
};

export const experience = [
  {
    role: "Web Development Intern",
    company: "CODTECH IT SOLUTIONS PRIVATE LIMITED",
    location: "Hyderabad, India",
    period: "Jun 2025 – Aug 2025",
    responsibilities: [
      "Developed and deployed responsive, database-driven web applications using HTML, CSS, JavaScript, PHP, and MySQL, ensuring seamless cross-browser compatibility.",
      "Engineered secure backend functionality, integrating databases and implementing robust user authentication features.",
      "Streamlined website performance through rigorous debugging and testing, successfully reducing page load times by 15-20%.",
      "Collaborated effectively with cross-functional development teams to analyze technical requirements and resolve complex software issues."
    ]
  }
];

export const projects = [
  {
    title: "ONLINE VOTING SYSTEM",
    description: "Web-based college committee enrollment and voting system designed to manage student registration, committee selection, voting, and administrative monitoring.",
    features: [
      "Student registration",
      "Secure authentication",
      "Committee selection",
      "Maximum three committee selections",
      "Vote confirmation",
      "Duplicate prevention",
      "Undo vote",
      "Admin dashboard",
      "Participation tracking",
      "MySQL integration",
      "Session management",
      "Password hashing"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/sudeepkrishnatk/online-voting", 
    liveUrl: "", 
    image: votingImg
  },
  {
    title: "AI-POWERED PERSONAL HEALTH ASSISTANT",
    description: "Educational AI application that calculates BMI and predicts diabetes risk using a Random Forest machine learning model.",
    features: [
      "BMI calculation",
      "Data preprocessing",
      "Random Forest model",
      "Model training",
      "Prediction",
      "Interactive chatbot interface"
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Tkinter", "Machine Learning"],
    github: "https://github.com/sudeepkrishnatk/health-assistant",
    liveUrl: "",
    image: healthImg
  },
  {
    title: "FOOD WASTAGE REDUCTION SYSTEM",
    description: "Role-based web application connecting donors, NGOs, volunteers and administrators to manage food donations efficiently.",
    features: [
      "Donor management",
      "NGO management",
      "Volunteer management",
      "Admin dashboard",
      "Donation workflow",
      "Donation status tracking",
      "Authentication",
      "Role-based access",
      "Donation history"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sudeepkrishnatk/food-wastage",
    liveUrl: "",
    image: foodImg
  }
];

export const education = [
  {
    degree: "B.Sc. Computer Science & Mathematics",
    institution: "Kristu Jayanti (Deemed to be University)",
    location: "Bengaluru, Karnataka",
    period: "2023 – 2026"
  }
];

export const certifications = [
  {
    name: "Introduction to Python",
    issuer: "Infosys",
    year: "2023"
  },
  {
    name: "Introduction to Operating Systems",
    issuer: "NPTEL",
    year: "2025"
  },
  {
    name: "Fundamentals of Artificial Intelligence",
    issuer: "Wadhwani Foundation",
    year: "2026"
  }
];
