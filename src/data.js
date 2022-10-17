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
    date: "2021-November -- Till NOW",
    iconsSrc: <IoCodeWorking />,
    title: "R-bit Learing",
    location: "Chitkara University, Punjab",
    description:
      "Full Stack developer,  Project Management, Team Leading",
  },
  {
    id: 2,
    date: "2020-December",
    iconsSrc: <IoCodeWorking />,
    title: "Techfest",
    location: "IIT Mumbai(remote)",
    description:
      "ML model to predict the financial results next month",
  },
  {
    id: 3,
    date: "2022- feb -- TILL NOW",
    iconsSrc: <IoCodeWorking />,
    title: "MEchBots",
    location: "Chitakara University",
    description:
      "web Head, Team Leader, Fronted Web dev",
  },
  {
    id: 4,
    date: "2020-JAN 2020-DEC",
    iconsSrc: <IoCodeWorking />,
    title: "Tech Support",
    location: "Fatehabad , Harayana",
    description:
      "Designer , TechSupport, Payment Gateway management",
  },
  {
    id: 5,
    date: "2020 January - 2020 march",
    iconsSrc: <IoCodeWorking />,
    title: "Cars and Bikes Worlds",
    location: "Ratia ,Harayana",
    description:
      "Full Stack Developer , Designer",
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
    link: "www.linkedin.com/in/tanshul-narang",
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
