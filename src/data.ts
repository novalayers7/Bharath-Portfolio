// All content comes from Bharath_Kumar_C_Portfolio_Content.docx. Nothing here is invented.

export const person = {
  name: "Bharath Kumar C",
  title: "Web Developer & Vibe Coder",
  location: "Tamil Nadu, India",
  experience: "1+ year",
  projects: "10+",
  company: "Nova Layers, Tiruppur",
  email: "bharathgowdacbk@gmail.com",
  phone: "+91 93454 10216",
  whatsapp: "https://wa.me/919345410216",
  instagram: "https://www.instagram.com/_bharath_kumarc",
  linkedin: "https://www.linkedin.com/in/bharathkumarc-cbk",
  summary:
    "I am a passionate Web Developer and Vibe Coder specializing in modern website development, custom e-commerce experiences, full-stack applications, and interactive web interfaces. I work with React, Next.js, Shopify, WordPress, Node.js, Supabase, and GSAP to transform ideas into functional, responsive, and visually engaging digital experiences.",
  summaryLong:
    "I combine creative thinking, technical problem-solving, and AI-assisted development workflows to build websites that prioritize user experience, performance, maintainability, and SEO fundamentals. I enjoy exploring new technologies, learning modern development techniques, and creating digital experiences that help businesses establish a strong online presence.",
  philosophy:
    "I believe great websites are built through a balance of creativity, technology, and purposeful execution. My approach is to understand the problem, explore the right solution, and create a digital experience that is visually engaging, technically sound, and easy to use. Every project is an opportunity to build something meaningful, improve my skills, and create a better experience for the people who use it.",
  motto: "Think creatively. Build intelligently. Keep improving.",
  connect:
    "Whether you need a modern business website, a custom Shopify storefront, a full-stack application, or an engaging interactive experience, I'm always interested in discussing new ideas and opportunities.",
  education: {
    degree: "Bachelor of Engineering (B.E.) — Computer Science and Engineering",
    school: "NGP Institute of Technology, Coimbatore, Tamil Nadu",
    year: "2025",
  },
};

export type Job = { org: string; role?: string; title?: string; place?: string; period?: string; points: string[]; blurb: string };

export const jobs: Job[] = [
  {
    org: "Nova Layers",
    role: "Web Developer",
    place: "Tiruppur, Tamil Nadu",
    period: "June 2026 – Present",
    blurb:
      "Working on modern websites, e-commerce experiences, and web applications with an emphasis on responsive design, interactive interfaces, custom development, and SEO. Alongside this role, I continue freelance web development and independent projects.",
    points: [
      "Develop and maintain modern, responsive websites.",
      "Build frontend interfaces using React and related technologies.",
      "Customize Shopify storefronts using Liquid, HTML, CSS, and JavaScript.",
      "Create interactive animations and transitions using GSAP.",
      "Work with Next.js and Supabase where required.",
      "Implement reusable components and responsive layouts.",
      "Apply on-page SEO and metadata optimization.",
      "Use Git and GitHub for version control and support deployment, testing, and maintenance.",
    ],
  },
  {
    org: "Freelance Web Developer",
    title: "Freelance Web Developer",
    blurb:
      "Alongside my role at Nova Layers, I’m also actively working on freelance web development projects, building websites and digital experiences for different needs.",
    points: [],
  },
  {
    org: "Applied Automation",
    role: "Web Developer",
    place: "Coimbatore, Tamil Nadu",
    period: "October 2025 – May 2026",
    blurb:
      "Worked on corporate and business websites using WordPress, focusing on professional presentation, responsive layouts, website customization, and usability.",
    points: [
      "Develop and customize WordPress websites and themes.",
      "Create responsive website layouts and page sections.",
      "Improve content structure, navigation, and frontend styling.",
      "Troubleshoot website and responsive design issues.",
      "Apply SEO fundamentals and metadata improvements.",
      "Support website maintenance and updates.",
    ],
  },
  {
    org: "PinSphere Solution",
    role: "Web Development Intern",
    place: "Coimbatore, Tamil Nadu",
    period: "6 months",
    blurb:
      "Gained practical experience in web development, frontend implementation, responsive design, debugging, and professional development workflows.",
    points: [
      "Develop web pages using HTML, CSS, and JavaScript.",
      "Implement responsive layouts and turn design concepts into functional interfaces.",
      "Troubleshoot frontend issues and learn collaborative development practices.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  url: string;
  role: string;
  summary: string;
  highlight?: string;
  contributions: string[];
  tech: string[];
  /** Local screenshots; projects without an identified screenshot retain a labelled placeholder. */
  images: string[];
  /** Source image ratios keep each screenshot uncropped in its display area. */
  imageRatios?: string[];
  tone: "ink" | "rust" | "sage" | "paper";
};

export const projects: Project[] = [
  {
    slug: "sheraera",
    title: "Sheraera",
    category: "Shopify e-commerce",
    url: "https://sheraera.com",
    role: "Shopify redesign and custom development",
    summary:
      "A custom Shopify redesign of an existing e-commerce website, refreshing its visual presentation and product browsing experience without changing the established brand.",
    contributions: [
      "Redesigned the existing storefront's visual presentation and layout.",
      "Built custom Shopify sections and functionality with Liquid.",
      "Customized the theme beyond standard settings to support the intended design.",
      "Reworked product listing and product presentation for the shopping experience.",
      "Implemented responsive layouts using HTML, CSS, and JavaScript.",
    ],
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    images: ["/img/works/shera%20homepage.png", "/img/works/sheraera%201.png", "/img/works/sheraera%202.png", "/img/works/sheraera%203.png"],
    imageRatios: ["1896 / 949", "1900 / 951", "1897 / 952", "1902 / 954"],
    tone: "ink",
  },
  {
    slug: "elysian-aether",
    title: "Elysian Aether",
    category: "Full-stack aviation education website",
    url: "https://elysianaether.com",
    role: "Full-stack website development",
    summary:
      "A full-stack aviation education website built with a modern frontend and a Supabase-backed application system for course information and student workflows.",
    contributions: [
      "Developed the website with React.js and a Next.js application architecture.",
      "Integrated Supabase for backend functionality and data management.",
      "Implemented student sign-in, login, and account experiences.",
      "Built an admin dashboard for application management.",
      "Structured aviation course information and student workflows.",
      "Deployed the website using Cloudflare.",
    ],
    tech: ["React.js", "Next.js", "Supabase", "Cloudflare"],
    images: ["/img/works/elysianaether%20homepage.png", "/img/works/elysian%201.png", "/img/works/elysian%202.png", "/img/works/elysian%203.png", "/img/works/elysian%204.png"],
    imageRatios: ["1896 / 949", "1900 / 949", "1899 / 949", "1896 / 951", "1911 / 949"],
    tone: "rust",
  },
  {
    slug: "70mm-teez-studio",
    title: "70MM Teez Studio",
    category: "Shopify e-commerce",
    url: "https://70mmteezstudio.com",
    role: "Shopify storefront design and development",
    summary:
      "A custom Shopify e-commerce website designed and developed from scratch, featuring a personalized T-shirt design flow where customers create or customize a design and order the product.",
    highlight: "Customers create or customize a T-shirt design directly on the website, then order the finished product.",
    contributions: [
      "Designed and developed the website from scratch using Shopify.",
      "Implemented custom Shopify functionality with Liquid, HTML, CSS, and JavaScript.",
      "Added supporting functionality for product customization and shopping.",
      "Set up payment integration without naming an unconfirmed provider.",
      "Handled domain purchasing and DNS configuration.",
    ],
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Payment integration", "Domain & DNS"],
    images: ["/img/works/70mmteez%20homepage.png", "/img/works/70mm%201.png", "/img/works/70mm%202.png", "/img/works/70mm%203.png"],
    imageRatios: ["1903 / 934", "1903 / 951", "1903 / 948", "1899 / 945"],
    tone: "paper",
  },
  {
    slug: "novalayers",
    title: "Novalayers",
    category: "Corporate website",
    url: "https://novalayers.in",
    role: "React frontend development and animation",
    summary:
      "A modern company website developed with React.js and enhanced with GSAP animations, transitions, and animated text effects.",
    contributions: [
      "Developed the frontend using React.js.",
      "Implemented GSAP-powered animations and smooth transitions.",
      "Added animated text effects and interactive visual details.",
      "Built responsive layouts for the website experience.",
    ],
    tech: ["React.js", "GSAP", "JavaScript", "HTML", "CSS"],
    images: ["/img/works/novalayers%20homepage.png", "/img/works/novalayers%201.png", "/img/works/novalayers%202.png", "/img/works/novalayers%203.png"],
    imageRatios: ["1897 / 949", "1918 / 949", "1894 / 952", "1896 / 952"],
    tone: "sage",
  },
  {
    slug: "novalayers-courses",
    title: "Nova Layers Course Website",
    category: "Course website",
    url: "https://course.novalayers.in",
    role: "React frontend development and animation",
    summary:
      "A course website developed with React.js, using GSAP-powered animation and text effects to present course content in a clear, responsive experience.",
    contributions: [
      "Developed the course website using React.js.",
      "Implemented GSAP animations, smooth transitions, and animated text effects.",
      "Structured course content into a clear and accessible website experience.",
      "Maintained responsive layouts across screen sizes.",
    ],
    tech: ["React.js", "GSAP", "JavaScript", "HTML", "CSS"],
    images: ["/img/works/course-novalyers.png", "/img/works/course%20novalayers%201.png", "/img/works/course%20novalayers%202.png"],
    imageRatios: ["1899 / 949", "1897 / 952", "1896 / 951"],
    tone: "ink",
  },
  {
    slug: "applied-automation",
    title: "Applied Automation Systems",
    category: "Corporate website / WordPress",
    url: "https://appliedautomation.co.in",
    role: "WordPress website development",
    summary:
      "Worked on a corporate website designed to present company information, services, and business capabilities through a professional online presence.",
    contributions: [
      "WordPress page development and customization.",
      "Responsive content layouts and website styling.",
      "Content organization and SEO-friendly page structure.",
    ],
    tech: ["WordPress", "HTML", "CSS", "SEO"],
    images: ["/img/works/applied-automation.png", "/img/works/applied%20automation%201.png", "/img/works/applied%20automation%202.png"],
    imageRatios: ["1899 / 951", "1896 / 945", "1899 / 946"],
    tone: "paper",
  },
  {
    slug: "ptss-global",
    title: "PTSS Global",
    category: "Corporate website / WordPress",
    url: "https://ptssglobal.com",
    role: "WordPress website development",
    summary:
      "Contributed to a corporate website project focused on presenting business information through organized page layouts, consistent styling, and a user-friendly browsing experience.",
    contributions: [
      "WordPress website customization.",
      "Responsive page development.",
      "Content structure, navigation, frontend styling, and SEO fundamentals.",
    ],
    tech: ["WordPress", "HTML", "CSS", "SEO"],
    images: ["/img/works/ptss.png", "/img/works/ptss%201.png", "/img/works/ptss%202.png"],
    imageRatios: ["1897 / 943", "1897 / 919", "1891 / 949"],
    tone: "sage",
  },
  {
    slug: "applied-controls",
    title: "Applied Controls",
    category: "Business website / WordPress",
    url: "https://appliedcontrols.in",
    role: "WordPress website development",
    summary:
      "Worked on a business website designed to present company information and services in a professional, accessible, and structured format.",
    contributions: [
      "WordPress page and theme customization.",
      "Responsive layouts and frontend styling.",
      "Content presentation, navigation improvements, and SEO fundamentals.",
    ],
    tech: ["WordPress", "HTML", "CSS", "SEO"],
    images: [],
    tone: "ink",
  },
  {
    slug: "redragon-canada",
    title: "Redragon Canada",
    category: "Website development",
    url: "https://redragon.ca",
    role: "Website development",
    summary:
      "Contributed to a website project involving WordPress development or customization, with a focus on frontend presentation, responsive behavior, and consistent styling.",
    contributions: [
      "Website page customization.",
      "Responsive layout refinements.",
      "Frontend styling, troubleshooting, content presentation, and website structure improvements.",
    ],
    tech: ["WordPress", "HTML", "CSS"],
    images: ["/img/works/redragon.png", "/img/works/redragon%201.png", "/img/works/redragon%202.png"],
    imageRatios: ["1897 / 948", "1903 / 948", "1890 / 946"],
    tone: "paper",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Responsive web design", "Component-based development"] },
  { group: "E-commerce Development", items: ["Shopify", "Shopify Liquid", "Custom Shopify themes", "Theme sections and templates", "Storefront customization", "WooCommerce"] },
  { group: "CMS and Website Development", items: ["WordPress", "WordPress theme customization", "Website maintenance", "Responsive website development"] },
  { group: "Animation and Interaction", items: ["GSAP", "GSAP ScrollTrigger", "CSS animations", "CSS transitions", "Scroll-based animations", "Micro-interactions"] },
  { group: "Backend and Database", items: ["Node.js", "Supabase", "API integration", "Database integration", "Authentication integration"] },
  { group: "AI-Assisted Development", items: ["AI-assisted coding", "Prompt engineering", "AI-assisted debugging", "Rapid prototyping", "Workflow optimization"] },
  { group: "Version Control and Deployment", items: ["Git", "GitHub", "Vercel", "Netlify", "Cloudflare", "Website deployment"] },
  { group: "SEO and Optimization", items: ["Semantic HTML", "Metadata optimization", "On-page SEO", "Image optimization", "Performance fundamentals"] },
];

export const services = [
  { name: "Custom Website Development", text: "Modern business websites, personal websites, landing pages, and professional online presences." },
  { name: "Shopify E-commerce Development", text: "Custom Shopify storefronts, Liquid theme customization, product pages, collection layouts, and e-commerce redesigns." },
  { name: "WordPress Development", text: "Business websites, WordPress page development, theme customization, and responsive layouts." },
  { name: "Full-Stack Web Development", text: "Web applications built using React, Next.js, Supabase, and appropriate APIs." },
  { name: "Animation and Interactive Websites", text: "GSAP animations, scroll effects, interactive interfaces, and polished transitions." },
  { name: "Website Optimization", text: "Responsive fixes, UI improvements, SEO fundamentals, and performance-focused refinements." },
];

export const approach = [
  { n: "01", name: "Discover", text: "Understand project goals, business requirements, target audience, and the intended user experience." },
  { n: "02", name: "Plan", text: "Define the website structure, content hierarchy, user journey, and appropriate technologies." },
  { n: "03", name: "Design", text: "Create a visually consistent interface with strong typography, thoughtful spacing, and responsive layouts." },
  { n: "04", name: "Develop", text: "Build the website using suitable technologies, reusable components, and maintainable code." },
  { n: "05", name: "Animate", text: "Introduce purposeful animations and interactions that enhance the experience without compromising performance." },
  { n: "06", name: "Optimize", text: "Review responsiveness, usability, accessibility, metadata, and website performance." },
  { n: "07", name: "Launch", text: "Test the website, deploy it to the appropriate platform, and verify important functionality." },
  { n: "08", name: "Improve", text: "Refine the experience through testing, feedback, and ongoing development." },
];

// Define / Design / Deliver groups the eight working-approach steps from the document.
export const ddd = [
  { word: "Define", steps: ["Discover", "Plan"], text: "Every project starts by understanding the goals, business requirements, target audience, and intended user experience, then defining the website structure, content hierarchy, user journey, and the right technologies." },
  { word: "Design", steps: ["Design"], text: "A visually consistent interface with strong typography, thoughtful spacing, and responsive layouts, so the structure planned in the first step becomes something people enjoy using." },
  { word: "Deliver", steps: ["Develop", "Animate", "Optimize", "Launch", "Improve"], text: "Built with reusable components and maintainable code, animated with purpose, reviewed for responsiveness, usability, accessibility, and performance, then tested, deployed, and refined through feedback." },
];

export const values = [
  { name: "Creativity Meets Technology", text: "I combine creative thinking with technical implementation to build websites that are visually engaging and functionally reliable." },
  { name: "Modern Development Mindset", text: "I work with modern frameworks, AI-assisted coding workflows, and development tools to explore solutions and improve efficiency." },
  { name: "Custom Solutions", text: "I focus on each project's requirements rather than relying on a one-size-fits-all approach." },
  { name: "Interactive Experiences", text: "I use animations, transitions, and interactive elements to make websites feel polished and engaging." },
  { name: "Responsive by Design", text: "I prioritize usability and visual consistency across mobile, tablet, and desktop screens." },
  { name: "Performance and SEO Awareness", text: "I consider website structure, metadata, responsive behavior, and performance fundamentals throughout development." },
  { name: "Attention to Detail", text: "I care about alignment, spacing, typography, navigation, and the small details that make a website feel complete." },
  { name: "Continuous Learning", text: "I continuously explore technologies, improve my workflow, and develop better approaches to solving web development challenges." },
];
