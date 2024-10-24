import PocketSKy from "../assets/images/PocketSky/pocketsky-project.webp";
import BaySide from "../assets/images/Bayside/bayside-project.webp";
import Dime from "../assets/images/Dime/dime-project.webp";

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
    name: "Dime",
    type: "Website",
    url: "https://dime-mu.vercel.app/",
    github: "https://github.com/tkzero789/dime",
    image: Dime,
    slug: "dime",
    description:
      "Budgeting app helps users manage their finances effortlessly. Track spending, set goals, and get personalized financial tips from an AI assistant to improve money management skills.",
    tech: [
      "Next.js",
      "Clerk.js",
      "Neon",
      "OpenAI",
      "Tailwind CSS",
      "shadcn/ui",
    ],
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
];

export function getData() {
  return data;
}
