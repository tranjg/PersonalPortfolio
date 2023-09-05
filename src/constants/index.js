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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      title: "Software + Solutions Co-Op",
      company_name: "Kinetic Vision",
      icon: kineticvision,
      iconBg: "#383E56",
      date: "April 2022 - May 2023",
      points: [
        "Proficiently executed software modifications, meticulously adhering to design specifications.",
        "Collaborated with renowned Fortune 500 organizations, ensuring seamless project integration.",
        "Played a pivotal role in identifying and implementing cost-saving measures, surpassing $10,000 in total client revenue preservation.",
        "Consistently achieved project milestones and deliverables within stringent timelines.",
        "Maintained open lines of communication with stakeholders, fostering productive and collaborative partnerships.",
      ],
    },
    {
      title: "Junior Layout Designer",
      company_name: "Title Magazine",
      icon: title,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Dec 2022",
      points: [
        "Collaborated closely with a dynamic creative team, fostering a synergistic work environment",
        "Contributed creative insights and design expertise to multiple projects within the magazine's scope",
        "Designed captivating spreads that seamlessly integrated content and visuals, elevating overall aesthetic",
        "Utilized graphic design skills to enhance storytelling, engagement, and reader experience",
        "Ensured alignment with project goals and deadlines, consistently delivering high-quality design assets",
      ],
    },
    {
      title: "Fullstack Developer Intern",
      company_name: "Refract Labs",
      icon: refractlabs,
      iconBg: "#383E56",
      date: "Jan 2021 - Aug 2021",
      points: [
        "Demonstrated versatility by adeptly utilizing a broad spectrum of libraries and tools.",
        "Led end-to-end development of high-value products, spanning diverse client industries.",
        "Successfully navigated both front-end and back-end intricacies, ensuring seamless integration.",
        "Translated client objectives into effective technical solutions, aligning with project goals.",
        "Consistently met project milestones and delivered outcomes that exceeded client expectations.",
        "Developed a custom UI library that increased developer productivity and code reuse.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };