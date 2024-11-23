import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/Cars.jpg";
import img2 from "./images/dashboard.jpg";
import img3 from "./images/electro.jpg";
import img4 from "./images/CryptoVerse.jpg";
import img5 from "./images/oneplus.jpg";


export const Experience = [
  {
    id: 1,
    date: "2024-July - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Software Developer Engineer 1",
    location: "Verizon",
    description:
      "Focused on improving Verizon’s billing system performance using Spring Boot, Oracle SQL, Apache MQ, React, and REST APIs.",
  },
  {
    id: 2,
    date: "2024-February - 2024-July",
    iconsSrc: <IoCodeWorking />,
    title: "Software Development Intern",
    location: "Verizon",
    description:
      "Worked on React.js, Spring Boot, Machine Learning, and Flask, contributing to Verizon's projects.",
  },
  {
    id: 3,
    date: "2024-January - 2024-April",
    iconsSrc: <IoCodeWorking />,
    title: "E-commerce Website",
    location: "Freelance Project",
    description: "Built a fully functional e-commerce platform with a referral system.",
  },
  {
    id: 4,
    date: "2023-November - 2024-January",
    iconsSrc: <IoCodeWorking />,
    title: "Business Management System",
    location: "Freelance Project",
    description: "Created a management system tailored for running a specific business.",
  },
  {
    id: 5,
    date: "2023-April",
    iconsSrc: <IoCodeWorking />,
    title: "Summit Hackathon Winner",
    location: "Online",
    description: "Developed a machine learning algorithm to detect anomalies in banking transactions.",
  },
  {
    id: 6,
    date: "2022-February - Present",
    iconsSrc: <IoCodeWorking />,
    title: "MEchBots",
    location: "Chitkara University",
    description: "Web Head, Team Leader, Frontend Web Developer.",
  },
  {
    id: 7,
    date: "2021-November - 2022-May",
    iconsSrc: <IoCodeWorking />,
    title: "R-bit Learning",
    location: "Chitkara University, Punjab",
    description: "Full Stack Developer, Project Management, Team Leading.",
  },
  {
    id: 8,
    date: "2020-December",
    iconsSrc: <IoCodeWorking />,
    title: "Techfest",
    location: "IIT Mumbai (Remote)",
    description: "Built an ML model to predict financial results for the next month.",
  },
  {
    id: 9,
    date: "2020-January - 2020-December",
    iconsSrc: <IoCodeWorking />,
    title: "Tech Support",
    location: "Fatehabad, Haryana",
    description: "Designer, Tech Support, Payment Gateway Management.",
  },
  {
    id: 10,
    date: "2020-January - 2020-March",
    iconsSrc: <IoCodeWorking />,
    title: "Cars and Bikes Worlds",
    location: "Ratia, Haryana",
    description: "Full Stack Developer, Designer.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Cars and Bikes Worlds",
    imageSrc: img1,
    techs: "Wix, SEO",
    github: "https://www.carsandbikeworld.com/",
  },
  {
    id: 2,
    name: "R-Bit Learning",
    imageSrc: img2,
    techs: "React Js, Tailwind CSS",
    github: "https://github.com/Rbit-1/Rbit",
  },
  {
    id: 3,
    name: "Electro HUB",
    imageSrc: img3,
    techs: "HTML, Java Script , CSS",
    github: "https://github.com/tans-hul/tanshul",
  },
  {
    id: 4,
    name: "Crypto World ",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "https://github.com/tans-hul/crypto_new",
  },
  {
    id: 5,
    name: "Oneplus",
    imageSrc: img5,
    techs: "HTML, BOOTSTRAP, JavaScrpit , CSS",
    github: "https://github.com/tans-hul/Oneplus.git",
  },

];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/tans-hul",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCNKsBbPglqrkFtJTYC_U_WQ",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tanshul-narang/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/+919728325625",
  },
];
