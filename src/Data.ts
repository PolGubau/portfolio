import { IProject } from "./Interfaces";
import {
  tagsDatabase,
  tagsDesign,
  tagsJS,
  tagsLogin,
  tagsMobile,
} from "./utils/Tags";
export const cardData: IProject[] = [
  {
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
    tags: ["React", "Ant Design", "Admin Pannel", "TypeScript"],
    invisibleTags: [
      ...tagsMobile,
      "App",
      "Aplicación",
      "Mobile",
      "scrud",
      "Notes",
      "TodoList",
      "todo",
      "2022",
    ],

    description: {
      English:
        "Stickies is an app to take notes and manage them. You can make private notes and classify them into categories.",
      Spanish:
        "Stickies es una app para tomar notas y manejarlas. Puedes hacer notas privadas y clasificarlas en categorías. ",
      Catalan:
        "Stickies és una app per prendre notes i manejar-les. Es poden fer notes privades i classificar-les en categories.",
    },
    githubLink: "https://github.com/PolGubau/habits",
    link: "https://habitss.vercel.app/",
  },
  {
    id: 10,
    title: "Stickies",
    path: "Stickies",
    year: 2022,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: -10, y: 20 },

    textColor: "#000",
    width: 320,
    backgroundColor: "#ffe9ab",
    pathToImg: "/Stickies/0.webp",
    tags: ["React", "React Icons", "Styled Components", "TypeScript"],
    invisibleTags: [
      ...tagsMobile,
      "App",
      "Aplicación",
      "Mobile",
      "scrud",
      "Notes",
      "TodoList",
      "todo",
      "2022",
    ],

    description: {
      English:
        "Stickies is an app to take notes and manage them. You can make private notes and classify them into categories.",
      Spanish:
        "Stickies es una app para tomar notas y manejarlas. Puedes hacer notas privadas y clasificarlas en categorías. ",
      Catalan:
        "Stickies és una app per prendre notes i manejar-les. Es poden fer notes privades i classificar-les en categories.",
    },
    githubLink: "https://github.com/PolGubau/stickies",
    link: "https://mystickies.vercel.app/",
  },
  {
    id: 9,
    title: "Cv Creator",
    path: "CvCreator",
    year: 2022,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    madeFor: {
      English: "Autonomous University of Barcelona",
      Spanish: "Universidad autónoma de Barcelona",
      Catalan: "Universitat autònoma de Barcelona",
    },
    pointOfInterest: { x: 30, y: 20 },

    textColor: "#000",
    width: 300,
    backgroundColor: "#abffe2",
    pathToImg: "/cvCreator/0.webp",
    tags: ["PHP", "MYSQL", "PDO", "CRUD", "DDBB"],
    invisibleTags: [
      ...tagsDatabase,
      ...tagsMobile,
      ...tagsLogin,
      "App",
      "Aplicación",
      "Mobile",
      "fullstack",
      "Red Social",
      "2022",
    ],

    description: {
      English:
        "Cv Creator is a tool to generate resumes in a web way, they are downloadable and each user can have infinite resumes.  ",
      Spanish:
        "Cv Creator es una herramienta para generar currículums de manera web, son descargables y cada usuario puede tener infinitos. ",
      Catalan:
        "Cv Creator és una eina per generar currículums de manera web, es poden descarregar i cada usuari pot tenir infinitat de currículums.",
    },
    githubLink: "https://github.com/PolGubau/uab-2022-Practica3",

    link: "https://pol-uab.alwaysdata.net/UAB/Web/3er/uab-2022-Practica3/",
  },
  {
    id: 8,
    title: "AskaQuest",
    path: "AskaQuest",
    year: 2022,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: -70, y: 10 },

    textColor: "#000",
    width: 270,
    backgroundColor: "#abd7ff",
    pathToImg: "/AskaQuest/0.webp",
    tags: ["Nextjs", "PostgreSQL", "TypeScript", "Vercel", "SWR"],
    invisibleTags: [
      ...tagsDatabase,
      ...tagsMobile,
      ...tagsLogin,
      ...tagsJS,
      "App",
      "Aplicación",
      "TS",
      "React",
      "Mobile",
      "fullstack",
      "localStorage",
      "Red Social",
      "2022",
    ],

    description: {
      English:
        "Dynamic web application made with NextJS and using a PostgreSQL database, consists of a social network of questions where users can create questions and answer them. The user can follow other users and view their questions, as well as add them as favorites. A login system, following and encryption in the Backend were developed.  ",
      Spanish:
        "Aplicación web dinámica hecha con NextJS y usando una base de datos PostgreSQL, consiste en una red social de preguntas donde los usuarios pueden crear preguntas y responderlas. El usuario puede seguir a otros usuarios y ver sus preguntas, así como agregarlas como favoritas. Un sistema de login, following y encriptación en el Backend se programó.",
      Catalan:
        "Aplicació web dinàmica feta amb NextJS i usant una base de dades PostgreSQL, consisteix en una xarxa social de preguntes on els usuaris poden crear preguntes i respondre-les. L'usuari pot seguir altres usuaris i veure les seves preguntes, així com agregar-les com a favorites. Un sistema de login, seguiment i encriptació al Backend va ser desenvolupat. ",
    },
    githubLink: "https://github.com/PolGubau/AskaQuest",

    link: "https://askaquest.vercel.app/",
  },
  {
    id: 7,
    path: "UABmedia",

    title: "UAB Mèdia",
    year: 2022,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: 30, y: 20 },

    textColor: "#000",
    width: 290,
    backgroundColor: "#faabff",
    pathToImg: "/UABMedia/0.webp",
    tags: ["PHP", "WebTV", "BOOTSTRAP", "JQUERY", "AWS"],
    invisibleTags: [
      ...tagsDatabase,
      ...tagsMobile,
      "UAB",
      "Autonoma",
      "amazon",
      "frontend",
      "comunicacio",
      "television",
      "radio",
      "Universidad",
      "2022",
    ],
    madeFor: {
      English: "Autonomous University of Barcelona",
      Spanish: "Universidad autónoma de Barcelona",
      Catalan: "Universitat autònoma de Barcelona",
    },
    description: {
      English:
        "Web and mobile application for viewing UAB Mèdia content. On this page you can see the news, television programs, radio and interviews in real time and on demand. You can also listen to the college radio.",
      Spanish:
        "Aplicación web y móvil para la visualización de contenidos de UAB Mèdia. En esta página se pueden ver las notícias, programas de televisión, de radio y entrevistes, tanto en tiempo real como a la carta. También escuchar la radio de la universidad.",
      Catalan:
        "Aplicació web i mòbil per a la visualització de continguts de la UAB Mèdia. En aquesta pàgina es poden veure les notícies, programes de televisió, de ràdio i entrevistes tant a temps real com a la carta. També escoltar la ràdio de la universitat.",
    },
    githubLink: "https://github.com/orgs/UABmedia/repositories",
    link: "https://uab.media/",
  },
  {
    id: 6,
    path: "NUWE",

    title: "NUWE",
    year: 2022,

    category: {
      English: "design",
      Spanish: "diseño",
      Catalan: "disseny",
    },
    pointOfInterest: { x: 20, y: 20 },

    textColor: "#000",
    width: 300,
    backgroundColor: "#c1ffab",
    pathToImg: "/NUWE/0.webp",
    tags: ["Figma", "Illustrator", "Photoshop"],
    invisibleTags: [...tagsDesign],
    madeFor: {
      English: "NUWE",
      Spanish: "NUWE",
      Catalan: "NUWE",
    },
    description: {
      English:
        "NUWE is a gamification company in hiring developers. I work here as a graphic designer and I carry the creatives of social networks, rollups... I visually capture the ideas of my jobmates.",
      Spanish:
        "NUWE es una empresa de gamificación en contratar desarrolladores. Trabajo aquí como diseñador gráfico y llevo las creatividades de redes sociales, rollups... Plasmar visualmente las ideas de mis compañeros.",
      Catalan:
        "NUWE és una empresa de gamificació en contractar desenvolupadors. Treballo aquí com a dissenyador gràfic i porto les creativitats de xarxes socials, rollups... Plasmar visualment les idees dels meus companys.",
    },
    figmaLink: "",

    link: "https://nuwe.io/",
  },
  {
    id: 5,
    path: "Rispot",

    title: "Rispot",
    year: 2022,

    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },

    pointOfInterest: { x: -100, y: 20 },

    textColor: "#000",
    width: 300,
    backgroundColor: "#abfeff",
    pathToImg: "/Rispot/0.webp",
    tags: ["PHP", "SQL", "JQUERY", "EXCEL"],
    invisibleTags: [
      ...tagsDatabase,
      ...tagsMobile,
      "fullstack",
      "frontend",
      "backend",
      "Rispot",
      "graphic",
      "stadistics",
      "excel",
      "pau",
      "backstage",
      "2022",
    ],

    madeFor: {
      English: "Rispot Reseller",
      Spanish: "Rispot Reseller",
      Catalan: "Rispot Reseller",
    },
    description: {
      English:
        "Rispot is a small product sales company. I have developed the entire internal database system and the 'backstage' of the website, where you can view the data of all sales and see their statistics.",
      Spanish:
        "Rispot es una pequeña empresa de venta de productos. He desarrollado todo el sistema de base de datos interno y 'Backstage' de la página web, donde se puede visualizar los datos de todas las ventas y ver estadísticas de estas.",
      Catalan:
        "Rispot és una petita empresa de venda de productes. He desenvolupat tot el sistema de la base de dades interna i 'Backstage' de la pàgina web, on es poden visualitzar les dades de totes les vendes i veure estadístiques d'aquestes.",
    },
    githubLink: "https://github.com/PolGubau/Rispot",

    link: "https://www.amazon.es/s?i=merchant-items&me=A1O24E5ASY81J5&rh=p_4%3ARISPOT",
  },
  {
    id: 4,
    path: "GubausAfternoons",

    title: "Gubau's Afternoons",
    year: 2020,

    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: 20, y: 60 },

    textColor: "#000",
    width: 200,
    backgroundColor: "#abbaff",
    pathToImg: "/GubauAfternoons/0.webp",
    tags: ["HTML", "SCSS", "JQUERY"],
    invisibleTags: [
      ...tagsMobile,
      "frontend",
      "Gubau",
      "GubauAfternoons",
      "Gubau'sAfternoons",
      "Gubau's",
      "Afternoons",
      "Portfolio",
      "black",
      "2020",
    ],
    description: {
      English:
        "Gubau's Afternoons shows where I spent my afternoons when I was in high school. I used it as a portfolio for two years and it's one of the pages that I have worked on the most. You can see in detail many projects that I have not shown here.",
      Spanish:
        "Gubau's Afternoons muestra en lo que gastaba mis tardes cuando iba al instituto. La usé de portfolio durante dos años y es una de las páginas que más he trabajado. Se pueden ver a detalle muchos proyectos que no he mostrado aquí.",
      Catalan:
        "Gubau's Afternoons mostra on gastava les tardes quan anava a l'institut. La vaig fer servir de portafoli durant dos anys i és una de les pàgines que més he treballat. Es poden veure detalladament molts projectes que no he mostrat aquí.",
    },
    githubLink: "https://github.com/PolGubau/gubauafternoons.com",

    link: "https://gubauafternoons.com/",
  },
  {
    id: 3,
    path: "Unbrushed",

    title: "Unbrushed",
    year: 2021,

    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },

    pointOfInterest: { x: -120, y: -80 },

    textColor: "#000",
    width: 500,
    backgroundColor: "#ffabd5",
    pathToImg: "/Unbrushed/0.webp",
    tags: ["PHP", "SQL", "JavaScript"],
    invisibleTags: [
      ...tagsMobile,
      ...tagsDatabase,
      "Helena",
      "Unbrushed",
      "2021",
      "fullstack",
      "frontend",
      "peluquería",
      "peluqueria",
      "MariaBD",
      "MySQL",
      "MPA",
      "MVC",
      "PHP",
      "SQL",
      "JavaScript",
      "JQUERY",
      "HTML",
      "CSS",
      "SCSS",
    ],
    madeFor: {
      English: "Unbrushed",
      Spanish: "Unbrushed",
      Catalan: "Unbrushed",
    },
    description: {
      English:
        "A dynamic portfolio for Unbrushed, where you can show the hairdressing sessions and their collaborations. The whole website is controlled from a different page where the database is modified. Both the frontend and the backend were created by me.",
      Spanish:
        "Un portafolio dinámico para Unbrushed, donde mostrar las sesiones de peluquería y sus colaboraciones. Toda la web se controla desde una página distinta donde se modifica la base de datos. Se creó tanto el frontend como el backend.",
      Catalan:
        "Un portafoli dinàmic per a Unbrushed, on mostrar les sessions de perruqueria i les seves col·laboracions. Tot el web es controla des d'una pàgina diferent on es modifica la base de dades. Es va crear tant el frontend com el backend.",
    },
    githubLink: "https://github.com/PolGubau/Unbrushed",

    link: "https://pol-uab.alwaysdata.net/Otros/Unbrushed_PHP/Code/",
  },
  {
    id: 2,
    path: "Skatla",

    title: "Škatla",
    year: 2021,
    category: {
      English: "design",
      Spanish: "diseño",
      Catalan: "disseny",
    },
    pointOfInterest: { x: 20, y: 0 },

    textColor: "#000000",
    width: 350,
    backgroundColor: "#ffdbab",
    pathToImg: "/Skatla/0.webp",
    tags: ["Indesign", "Illustrator", "Photoshop"],
    invisibleTags: [
      ...tagsMobile,
      ...tagsDesign,
      "Autonoma",
      "uab",
      "universidad",
      "diseño",
      "skatla",
      "design",
    ],
    madeFor: {
      English: "Škatla",
      Spanish: "Škatla",
      Catalan: "Škatla",
    },
    description: {
      English:
        "Škatla is a university project where we created an ecological packaging company, a lot of mockups and designs for social networks were made. Škatla creates boxes and merchandising at the customer's request. ",
      Spanish:
        "Škatla es un proyecto universitario donde creamos una empresa de packagings ecologicos, se realizaron cantidad de mockups y diseños para redes sociales. Škatla crea cajas y merchandising a demanda del cliente. ",
      Catalan:
        "Škatla és un projecte universitari on vam crear una empresa de Packagings ecològics, es van realitzar quantitat de mockups i dissenys per a xarxes socials. Škatla crea caixes i marxandatge a demanda del client.",
    },
    figmaLink: "",

    link: "https://www.instagram.com/skatlapack/",
  },
  {
    id: 1,
    path: "ThoseColors",

    title: "Those Colors",
    year: 2021,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: -30, y: 10 },

    textColor: "#000000",
    width: 300,
    backgroundColor: "#feffab",
    pathToImg: "/ThoseColors/0.webp",
    tags: ["PHP", "SASS"],
    invisibleTags: ["color", "gradient", "palette", "generator"],
    description: {
      English:
        "This is a website I made to practice checking the hexadecimal codes of colors and modifying them. It is written with vanilla PHP and can create color palettes with the color and amount you tell it.",
      Spanish:
        "Esta es una web que hice para practicar el control de los códigos hexadecimales de los colores y modificarlos. Está escrita con PHP vanilla y puede crear paletas de colores con el color y la cantidad que le digas. ",
      Catalan:
        "Aquesta és una web que vaig fer per practicar el control dels codis hexadecimals dels colors i modificar-los. Està escrita amb PHP vanilla i pot crear paletes de colors amb el color i la quantitat que li diguis.",
    },
    githubLink: "https://github.com/PolGubau/ThoseColors",

    link: "https://pol-uab.alwaysdata.net/Otros/ThoseColors/index.php",
  },
  {
    id: 0,
    path: "Memo",

    title: "Memo",
    year: 2021,
    category: {
      English: "web",
      Spanish: "web",
      Catalan: "web",
    },
    pointOfInterest: { x: 20, y: 50 },

    textColor: "#000000",
    width: 160,
    backgroundColor: "#e6abff",
    pathToImg: "/Memo/0.webp",
    tags: ["Javascript", "HTML", "CSS"],
    invisibleTags: ["localStorage", "memory", "notas", "notes", "todo"],

    description: {
      English:
        "This is a website that I completed with Javascript to practice using LocalStorage. It was forked from GitHub and I added features like changing the color of the Memos.",
      Spanish:
        "Esta es una web que completé con Javascript para practicar el uso del LocalStorage. Fue duplicada de GitHub y añadí funcionalidades como el cambio de color de los Memos.",
      Catalan:
        "Aquesta és una web que vaig completar amb Javascript per practicar l'ús del LocalStorage. Va ser duplicada de GitHub i vaig afegir funcionalitats com el canvi de color dels Memos.",
    },
    link: "https://pol-uab.alwaysdata.net/Otros/memo/",
  },
];
