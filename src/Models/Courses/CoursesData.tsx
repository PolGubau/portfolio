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
    English: "Beginner",
    Spanish: "Principiante",
    Catalan: "Principiant",
  },
  Intermediate: {
    English: "Intermediate",
    Spanish: "Intermedio",
    Catalan: "Intermedi",
  },
  Advanced: {
    English: "Advanced",
    Spanish: "Avanzado",
    Catalan: "Avançat",
  },
};

const courseData: IBlogData[] = [
  {
    id: "course-0",
    name: {
      English: "What is React?",
      Spanish: "¿Qué es React?",
      Catalan: "Què és React?",
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
      English: "What is Redux?",
      Spanish: "¿Qué es Redux?",
      Catalan: "Què és Redux?",
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
      English: "What is Typescript?",
      Spanish: "¿Qué es Typescript?",
      Catalan: "Què és Typescript?",
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
      English: "What is Figma?",
      Spanish: "¿Qué es Figma?",
      Catalan: "Què és Figma?",
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
      English: "What is Next.js?",
      Spanish: "¿Qué es Next.js?",
      Catalan: "Què és Next.js?",
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
      English: "What is Material Design?",
      Spanish: "¿Qué es Material Design?",
      Catalan: "Què és Material Design?",
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
      English: "JavaScript: Beginner's Guide",
      Spanish: "JavaScript: Guía para Principiantes",
      Catalan: "JavaScript: Guia per a Principiants",
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
      English: "What is Vue?",
      Spanish: "¿Qué es Vue?",
      Catalan: "Què és Vue?",
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
  // {
  //   id: "course-4",
  //   name: {
  //     English: "What is Angular?",
  //     Spanish: "¿Qué es Angular?",
  //     Catalan: "Què és Angular?",
  //   },
  //   path: "what-is-angular",
  //   tags: ["Angular", "JavaScript", "Frontend"],
  //   icon: <TbBrandAngular />,
  //   color: "#dd1b16",
  //   content: WhatIsAngular,
  //   author: "Pol Gubau Amores",
  //   level: levels.Beginner,
  //   date: "2023-16-03",
  // },
  // {
  //   id: "course-5",
  //   name: {
  //     English: "What is Bootstrap?",
  //     Spanish: "¿Qué es Bootstrap?",
  //     Catalan: "Què és Bootstrap?",
  //   },
  //   path: "what-is-bootstrap",
  //   tags: ["Bootstrap", "CSS", "UI"],
  //   icon: <TbBrandBootstrap />,
  //   color: "#563d7c",
  //   content: WhatIsBootstrap,
  //   author: "Pol Gubau Amores",
  //   level: levels.Beginner,
  //   date: "2023-16-03",
  // },
  {
    id: "course-7",
    name: {
      English: "What is Adobe XD?",
      Spanish: "¿Qué es Adobe XD?",
      Catalan: "Què és Adobe XD?",
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
  // {
  //   id: "course-8",
  //   name: {
  //     English: "What is Sketch?",
  //     Spanish: "¿Qué es Sketch?",
  //     Catalan: "Què és Sketch?",
  //   },
  //   path: "what-is-sketch",
  //   tags: ["Sketch", "Design", "UI"],
  //   icon: <TbBrandSketch />,
  //   color: "#ff9a00",
  //   content: WhatIsSketch,
  //   author: "Pol Gubau Amores",
  //   level: levels.Beginner,
  //   date: "2023-16-03",
  // },
  // {
  //   id: "course-10",
  //   name: {
  //     English: "What is Gatsby?",
  //     Spanish: "¿Qué es Gatsby?",
  //     Catalan: "Què és Gatsby?",
  //   },
  //   path: "what-is-gatsby",
  //   tags: ["Gatsby", "React", "Frontend"],
  //   icon: <TbBrandGatsby />,
  //   color: "#663399",
  //   content: WhatIsGatsby,
  //   author: "Pol Gubau Amores",
  //   level: levels.Beginner,
  //   date: "2023-18-03",
  // },
];

export default courseData;
