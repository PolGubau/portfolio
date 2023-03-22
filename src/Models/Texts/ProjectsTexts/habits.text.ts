import { IProject } from "src/Interfaces";
import { tagsMobile } from "src/utils/Tags";

export const habitsText: IProject = {
  id: 11,
  title: "Habits",
  path: "Habits",
  year: 2023,
  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: 50, y: 70 },

  textColor: "#000",
  width: 220,
  backgroundColor: "#FFC8C8",
  pathToImg: "/Habits/0.webp",
  tags: ["React", "Ant Design", "Admin Panel", "TypeScript"],
  invisibleTags: [
    ...tagsMobile,
    "App",
    "Aplicación",
    "Mobile",
    "SCRUD",
    "Notes",
    "TodoList",
    "todo",
    "2022",
  ],

  description: {
    English:
      "Habits is a Tracking App for your daily habits. You can create habits, track them and see your progress. You can also create private habits and share them with your friends. Under the hood, it uses React, Ant Design, PostgreSQL and NodeJS. It is a full-stack application. Under development.",
    Spanish:
      "Habits es una aplicación para rastrear tus hábitos diarios. Puedes crear hábitos, rastrearlos y ver tu progreso. También puedes crear hábitos privados y compartirlos con tus amigos. Por debajo, usa React, Ant Design, PostgreSQL y NodeJS. Es una aplicación full-stack. En desarrollo.",
    Catalan:
      "Habits és una aplicació per rastrejar els teus hàbits diaris. Pots crear hàbits, rastrejar-los i veure el teu progrés. També pots crear hàbits privats i compartir-los amb els teus amics. Per sota, usa React, Ant Design, PostgreSQL i NodeJS. És una aplicació full-stack. En desenvolupament.",
  },
  githubLink: "https://github.com/PolGubau/habits",
  link: "https://habitss.vercel.app/",
};
