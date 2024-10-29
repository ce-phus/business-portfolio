import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    eshop,
    hoobank,
    oiti,
    python,
    postgresql,facebook, instagram, linkedin, twitter
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FullStack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Static Websites",
      company_name: "Brochure Websites, Landing Pages",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Fast",
      points: [
        "Brochure Websites: Simple websites designed to showcase basic information about a business, such as its services, contact details, and location.",
        "Landing Pages: Single-page websites designed to capture leads or promote specific products or services. They often include a call-to-action (CTA) to encourage user interaction.",
        "Websites designed to showcase the work or accomplishments of individuals or businesses, such as artists, photographers, or designers.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Unique Features",
      company_name: "Portfolio Websites",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Reliable",
      points: [
        "Clean and minimalist design.",
        "Fast loading times.",
        "Responsive design for optimal viewing on various devices.",
        "Easy-to-update content"
      ],
    },
    {
      title: "Dynamic Webistes",
      company_name: "E-commerce Websites, CMS",
      icon: shopify,
      iconBg: "#383E56",
      date: "Efficient",
      points: [
        "E-commerce Websites: Websites with functionalities for online transactions, product catalog management, shopping cart, and secure payment gateways.",
        "Web Applications: Interactive websites with dynamic content and user interactivity, often featuring functionalities like user authentication, real-time updates, and database integration. Additionally, I offer SEO performance consultancy to optimize your website's visibility and ranking on search engines, increasing organic traffic and maximizing your online presence.",
        "Content Management Systems (CMS): Websites with backend systems allowing users to easily manage and update content, such as blogs, news articles, or events."
      ],
    },
    {
      title: "Unique Features",
      company_name: "SEO",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Convenient",
      points: [
        "Customizable user interfaces tailored to specific business needs.",
        "Database integration for storing and managing dynamic content.",
        "User authentication and role-based access control.",
        "Integration with third-party services such as payment gateways, social media platforms, or APIs.",
        "SEO performance consultancy to enhance visibility and ranking on search engines, driving organic traffic and improving online presence."
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "E-shop",
      description:
        "Developed a full-stack e-commerce website application using Django for the backend and Next.js 13 for the frontend. This project showcases my expertise in integrating powerful frameworks to create seamless user experiences. I successfully integrated payment integration with M-pesa, enhancing the user's purchasing journey. With a focus on delivering a visually appealing UI, the website boasts a sleek and intuitive design that ensures a smooth navigation experience for users.",
      tags: [
        {
          name: "nextjs13",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "redux/postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: eshop,
      source_code_link: "https://github.com/",
    },
    {
      name: "Bank App",
      description:
        "Designed and developed a modern banking application utilizing React for its frontend framework, Vite for rapid development, and Tailwind CSS for sleek styling. This project highlights my ability to create intuitive user interfaces that prioritize usability and aesthetics",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/",
    },
    {
      name: "Modern Farm App",
      description:
        "Developed a modern farming application using Next.js 13 and Tailwind CSS, showcasing a sleek and intuitive user interface. Leveraging Next.js for its server-side rendering capabilities and Tailwind CSS for streamlined styling, the app offers a seamless user experience. With a focus on usability and aesthetics, the farming app provides farmers with essential tools for managing crops, monitoring livestock, and tracking agricultural data.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: oiti,
      source_code_link: "https://github.com/",
    },
  ];

   const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/cephus_ltd/profilecard/?igsh=dmViaW1sd3E4YTRk",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/profile.php?id=61566025144308",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://linkedin.com/in/peter-nakitare-315840226/",
    },
  ];
  
  
  export { services, technologies, experiences, projects, socialMedia };
  