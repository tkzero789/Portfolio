import placeHolder from "../assets/images/placeholder.webp";
import PocketSKy from "../assets/images/PocketSky/pocketsky-project.webp";
import BaySide from "../assets/images/Bayside/bayside-project.webp";

const data = [
  {
    name: "BaySide Hospital",
    type: "Website",
    url: "https://bayside-hospital.onrender.com/home",
    github: "https://github.com/tkzero789/Hospital",
    image: BaySide,
    slug: "bayside-hospital",
    description:
      "This website streamlines healthcare by offering appointment scheduling, a symptom checker, health news blog, and an admin dashboard for hospital management.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SCSS",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    name: "Issuefy",
    type: "Website",
    url: "https://lifeinsureease.in/",
    github: "https://github.com/DevRohit06/insurance-website",
    image: PocketSKy,
    slug: "lifeinsureease",
    description:
      "This is an Insurance website made using Astro, Reactjs and Tailwind css. ",
    tech: ["HTML", "Javascript", "Css", "Tailwind css", "Astro", "Reactjs"],
  },
  {
    name: "PocketSky",
    type: "Website",
    url: "https://main--brilliant-klepon-275efd.netlify.app/",
    github: "https://github.com/tkzero789/PocketSky",
    image: PocketSKy,
    slug: "pocket-sky",
    description:
      "A simple weather app with search features, unit conversion, and essential forecast information.",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "DocAid",
    type: "Website",
    url: "https://doc-aid.vercel.app/",
    github: "https://github.com/DevRohit06/DocAid",
    image: placeHolder,
    slug: "docaid",
    description: "Website template for Health related businesses",
    tech: ["HTML", "Javascript", "CSS", "Tailwind css", "ReactJS"],
  },
];

export function getData() {
  return data;
}
