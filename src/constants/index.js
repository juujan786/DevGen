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
  healthpluscost,
  spritwhisper,
  quiz,
  postfordollars
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "UI/UX Designing",
    icon: backend,
  },
  {
    title: "Project Management",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Highly recommend! He provided an excellent service.He went above and beyond expectations.",
    name: "sw1111",
    designation: "Fiver",
    company: "Client",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Phenomenal developer. Extremely talented at what he does, and was very consistent with communicating with me. I had a huge project with multiple moving parts, and he did a fantastic job developing it.",
    name: "staceywojcik",
    designation: "Fiver",
    company: "Client",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Worked with him on multiple projects. He is very dedicated to the work given and also presents the work with great quality.",
    name: "swarnabha1101",
    designation: "Fiver",
    company: "Client",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Used for multiple projects all with great outcomes. Listens to feedback and is on time. Happy to recommend!",
    name: "bernardkmensah",
    designation: "Fiver",
    company: "Client",
    image: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7ca0bbd79bd1e545c62600310ee0d208-1573765777962/84644dcc-0aa1-405c-bbe1-2038aa8cf260.jpg",
  },
];

const projects = [
  {
    name: "Health Plus Cost",
    description:"a web-based application that enables users to easily search for hospitals and doctors based on their geographical region. The application utilizes Google Maps integration to display the locations of these medical facilities, providing users with a visual representation of their proximity. Additionally, users can determine the distance to each facility, facilitating informed decision-making when choosing healthcare options.",
     
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
    image: healthpluscost,
    source_code_link: "https://www.healthpluscost.com/",
  },
  {
    name: "Learning Platform for Courses",
    description:
    "A dynamic web application where instructors can effortlessly upload spiritual courses for students to purchase. This platform also allows students to book live sessions, fostering interactive learning experiences and direct engagement with instructors. Through seamless course purchasing and live session booking, the application facilitates a comprehensive and enriching spiritual education journey.",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: spritwhisper,
    source_code_link: "https://www.spiritwhispers1111.com/",
  },
   {
    name: "Quiz App",
    description:
      " a dynamic web-based application that offers users the opportunity to engage in a variety of quizzes, facilitating knowledge assessment and growth. Upon completion, the app provides users with their respective scores, enhancing the learning experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://dief-1.vercel.app/",
  },
   {
    name: "Post for Dollars",
    description:
      "PostforDollars is a platform, where posters and businesses seamlessly connect for a win-win partnership. Posters showcase businesses on their social media, and businesses reward them for the exposure they deserve.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: postfordollars,
    source_code_link: "https://www.postfordollars.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
