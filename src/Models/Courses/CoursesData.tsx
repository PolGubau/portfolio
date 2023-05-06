import {
  TbBrandAdobe,
  TbBrandAngular,
  TbBrandBootstrap,
  TbBrandFigma,
  TbBrandGatsby,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandSketch,
  TbBrandTypescript,
  TbBrandVue,
} from "react-icons/tb";
import { SiMaterialdesign } from "react-icons/si";

import { ITextByLanguage } from "src/Interfaces";
import WhatIsVue from "./Texts/WhatIsVue";
import WhatIsAdobeXD from "./Texts/WhatIsAdobeXD";
import WhatIsReact from "./Texts/WhatIsReact";
import WhatIsRedux from "./Texts/WhatIsRedux";
import WhatIsNext from "./Texts/WhatIsNext";
import WhatIsTypescript from "./Texts/WhatIsTypescript";
import WhatIsFigma from "./Texts/WhatIsFigma";
import JS_BeginnersGuide from "./Texts/JS_BeginnersGuide";
import WhatIsMaterialDesign from "./Texts/WhatIsMaterialDesign";
import WhatIsAngular from "./Texts/WhatIsAngular";
import WhatIsBootstrap from "./Texts/WhatIsBootstrap";
import WhatIsSketch from "./Texts/WhatIsSketch";
import WhatIsGatsby from "./Texts/WhatIsGatsby";

export interface IBlogData {
  id: string;
  name: ITextByLanguage;
  path: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
  content: ITextByLanguage;
  author: string;
  level: ITextByLanguage;
  date: string;
}

const levels: {
  Beginner: ITextByLanguage;
  Intermediate: ITextByLanguage;
  Advanced: ITextByLanguage;
} = {
  Beginner: {
    en: "Beginner",
    es: "Principiante",
    ca: "Principiant",
    de: "Anfänger",
  },
  Intermediate: {
    en: "Intermediate",
    es: "Intermedio",
    ca: "Intermedi",
    de: "Mittelstufe",
  },
  Advanced: {
    en: "Advanced",
    es: "Avanzado",
    ca: "Avançat",
    de: "Fortgeschritten",
  },
};

const courseData: IBlogData[] = [
  {
    id: "course-0",
    name: {
      en: "What is React?",
      es: "¿Qué es React?",
      ca: "Què és React?",
      de: "Was ist React?",
    },
    path: "WhatIsReact",
    tags: ["React", "JavaScript", "Frontend"],
    icon: <TbBrandReact />,
    color: "#61dafb",
    content: WhatIsReact,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-05-03",
  },

  {
    id: "course-1",
    name: {
      en: "What is Redux?",
      es: "¿Qué es Redux?",
      ca: "Què és Redux?",
      de: "Was ist Redux?",
    },
    path: "what-is-redux",
    tags: ["Redux", "JavaScript", "Frontend"],
    icon: <TbBrandRedux />,
    color: "#764abc",
    content: WhatIsRedux,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-2",
    name: {
      en: "What is Typescript?",
      es: "¿Qué es Typescript?",
      ca: "Què és Typescript?",
      de: "Was ist Typescript?",
    },
    path: "what-is-typescript",
    tags: ["TypeScript", "JavaScript", "Frontend"],
    icon: <TbBrandTypescript />,
    color: "#007acc",
    content: WhatIsTypescript,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-9",
    name: {
      en: "What is Figma?",
      es: "¿Qué es Figma?",
      ca: "Què és Figma?",
      de: "Was ist Figma?",
    },
    path: "what-is-figma",
    tags: ["Figma", "Design", "UI"],
    icon: <TbBrandFigma />,
    color: "#f24e1e",
    content: WhatIsFigma,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-18-03",
  },
  {
    id: "course-11",
    name: {
      en: "What is Next.js?",
      es: "¿Qué es Next.js?",
      ca: "Què és Next.js?",
      de: "Was ist Next.js?",
    },
    path: "what-is-nextjs",
    tags: ["Server-Rendered", "React", "Frontend"],
    icon: <TbBrandNextjs />,
    color: "#000000",
    content: WhatIsNext,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-18-03",
  },
  {
    id: "course-6",
    name: {
      en: "What is Material Design?",
      es: "¿Qué es Material Design?",
      ca: "Què és Material Design?",
      de: "Was ist Material Design?",
    },
    path: "what-is-material-design",
    tags: ["Material Design", "UI", "Interface"],
    icon: <SiMaterialdesign />,
    color: "#0081cb",
    content: WhatIsMaterialDesign,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-12",
    name: {
      en: "JavaScript: Beginner's Guide",
      es: "JavaScript: Guía para Principiantes",
      ca: "JavaScript: Guia per a Principiants",
      de: "JavaScript: Anfängerleitfaden",
    },
    path: "what-is-js",
    tags: ["Javascript", "Website", "Frontend"],
    icon: <TbBrandJavascript />,
    color: "#f7df1e",
    content: JS_BeginnersGuide,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-19-03",
  },
  {
    id: "course-3",
    name: {
      en: "What is Vue?",
      es: "¿Qué es Vue?",
      ca: "Què és Vue?",
      de: "Was ist Vue?",
    },
    path: "what-is-vue",
    tags: ["Vue", "JavaScript", "Frontend"],
    icon: <TbBrandVue />,
    color: "#41b883",
    content: WhatIsVue,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-4",
    name: {
      en: "What is Angular?",
      es: "¿Qué es Angular?",
      ca: "Què és Angular?",
      de: "Was ist Angular?",
    },
    path: "what-is-angular",
    tags: ["Angular", "JavaScript", "Frontend"],
    icon: <TbBrandAngular />,
    color: "#dd1b16",
    content: WhatIsAngular,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-5",
    name: {
      en: "What is Bootstrap?",
      es: "¿Qué es Bootstrap?",
      ca: "Què és Bootstrap?",
      de: "Was ist Bootstrap?",
    },
    path: "what-is-bootstrap",
    tags: ["Bootstrap", "CSS", "UI"],
    icon: <TbBrandBootstrap />,
    color: "#563d7c",
    content: WhatIsBootstrap,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-7",
    name: {
      en: "What is Adobe XD?",
      es: "¿Qué es Adobe XD?",
      ca: "Què és Adobe XD?",
      de: "Was ist Adobe XD?",
    },
    path: "what-is-adobe-xd",
    tags: ["UI", "Design", "Prototype"],
    icon: <TbBrandAdobe />,
    color: "#ff61f6",
    content: WhatIsAdobeXD,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-8",
    name: {
      en: "What is Sketch?",
      es: "¿Qué es Sketch?",
      ca: "Què és Sketch?",
      de: "Was ist Sketch?",
    },
    path: "what-is-sketch",
    tags: ["Sketch", "Design", "UI"],
    icon: <TbBrandSketch />,
    color: "#ff9a00",
    content: WhatIsSketch,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-16-03",
  },
  {
    id: "course-10",
    name: {
      en: "What is Gatsby?",
      es: "¿Qué es Gatsby?",
      ca: "Què és Gatsby?",
      de: "Was ist Gatsby?",
    },
    path: "what-is-gatsby",
    tags: ["Gatsby", "React", "Frontend"],
    icon: <TbBrandGatsby />,
    color: "#663399",
    content: WhatIsGatsby,
    author: "Pol Gubau Amores",
    level: levels.Beginner,
    date: "2023-18-03",
  },
];

export default courseData;
