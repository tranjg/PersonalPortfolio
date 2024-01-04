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
  nextjs,
  graphql,
  git,
  figma,
  docker,
  kineticvision,
  title,
  refractlabs,
  carrent,
  jobit,
  tripguide,
  threejs,
  usbank,
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
    title: "Frontend Developer",
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
    title: "Music Developer",
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software + Solutions Co-Op",
    company_name: "Kinetic Vision",
    icon: kineticvision,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2023",
    points: [
      "Executed software modifications with precision, ensuring strict adherence to design specifications.",
      "Collaborated seamlessly with Fortune 500 organizations, leading teams for effective project integration.",
      "Played a key role in implementing cost-saving measures, preserving over $100,000 in client revenue.",
      "Achieved project milestones consistently within tight timelines, demonstrating effective leadership.",
      "Fostered productive partnerships through open communication with stakeholders, optimizing team performance.",
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
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Showcased versatility by expertly employing a broad spectrum of libraries and tools.",
      "Spearheaded end-to-end development of high-value products across diverse client industries.",
      "Navigated both front-end and back-end intricacies to ensure seamless integration of technical solutions.",
      "Translated client objectives into effective technical strategies, aligning seamlessly with project goals.",
      "Achieved consistent success in meeting project milestones and exceeding client expectations.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company_name: "US Bank",
    icon: usbank,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Nov 2020",
    points: [
      "Exhibited a remarkable data entry speed of 80 words per minute, surpassing the team's expectations.",
      "Maintained an unwavering commitment to accuracy, ensuring error-free data processing.",
      "Proficiently mastered the software tools essential to the role, optimizing workflow and minimizing processing times.",
      "Actively engaged in continuous learning and skill refinement to stay at the forefront of data entry best practices.",
    ],
  },
];

const projects = [
  {
    name: "Book Banker",
    description:
      "My senior capstone project for the University of Cincinnati. It is a proof of concept application developed to help book banks efficently track inventory and lend books that could save book banks about an hour per book, along with providing a storefront for customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "keystone",
        color: "orange-text-gradient",
      },
    ],
    image: undefined,
    source_code_link: "https://github.com/tranjg/book-banker",
  },
  {
    name: "You're It!",
    description:
      "A digital recreation of the game Tag using the Phaser engine. It is played by two players on the same keyboard.",
    tags: [
      {
        name: "phaserjs",
        color: "blue-text-gradient",
      },
    ],
    image: undefined,
    source_code_link: "https://github.com/tranjg/youre-it",
  },
  {
    name: "Let It Float",
    description:
      "A webapp that creates floating balloons all written in vanilla JavaScript.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: undefined,
    source_code_link: "https://github.com/tranjg/let-it-float",
  },
];

export { services, technologies, experiences, projects };
