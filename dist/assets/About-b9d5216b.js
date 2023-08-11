import{s,m as d,R as c,L as l,g as r,j as e,G as k,W as V,u as x,r as I,a as C,b as z,c as u,S as p,d as L,e as S}from"./index-ddafb6e3.js";import{R as j}from"./react-markdown-451715e1.js";import{T as D,a as $,b as E,c as H,d as B,e as N,f as A,g as P,h as R,i as U,j as q,k as W}from"./index.esm-0ee0fd98.js";const G=s.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  overflow: visible;

  .greenCircle {
    position: absolute;
    border-radius: 50%;
    transform: translate(-60%, -80px);
    user-select: none;
    pointer-events: none;
    width: 1200px;
    aspect-ratio: 1/1;
    z-index: -2;

    background-color: ${({theme:a})=>a.colors.green};
  }
  .yellowCircle {
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    transform: translate(60%, 50%);
    user-select: none;
    z-index: -2;
    pointer-events: none;
    width: 1200px;
    aspect-ratio: 1/1;
    background-color: ${({theme:a})=>a.colors.yellow};
  }
  .firstBlob {
    margin-top: ${a=>a.smallerThanTablet?"10px":"165px"};
    height: ${a=>a.smallerThanTablet?"fit-content":"200px"};
    text-align: ${a=>a.smallerThanTablet?"center":"left"};
    width: ${a=>a.smallerThanTablet?"100%":"fit-content"};
    max-width: ${a=>a.smallerThanTablet?"100%":"70vw"};
    min-width: 60%;

    min-height: 100px;
    position: relative;
    display: flex;
    gap: 10px;
    padding: 20px;
    border-radius: 99px;

    border: 1px solid black;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(0, 0, 0, 0.2);
    justify-content: center;
    transition: 0.3s ease;
    align-items: center;
  }

  @keyframes appearFromLeft {
    0% {
      transform: translate(0 -200%);
    }
    to {
      transform: translate(0, 0);
    }
  }

  .descriptionAndDreams {
    margin-top: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
  }

  .blobsContainer {
    margin: ${a=>a.smallerThanTablet?"70px 0":"200px 0"};
    display: flex;
    flex-direction: column;
    gap: ${a=>a.smallerThanTablet?"20px":"0px"};
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        text-align: center;
        font-size: 2em;
        margin: 0;
        padding: 10px 20px;
        border-radius: 30px;
        background-color: rgba(0, 0, 180, 0.1);
        backdrop-filter: blur(5px);
        margin-bottom: 90px;
      }
    }
    @media screen and (max-width: 500px) {
      .title {
        h3 {
          font-size: 1.5em;
        }
      }
    }
  }
`,F=s(d.div)`
  width: 100%;
  display: flex;
  justify-content: ${a=>a.placed};

  article {
    position: relative;
    width: ${a=>a.width};
    /* height: ${a=>a.height}; */
    margin-top: ${a=>a.marginTop};
    border: 1px solid ${a=>a.color};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    align-items: center;
    border-radius: 90px;
    text-align: center;
    padding: 10px 30px 0 30px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    .titles {
      margin: 0;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      justify-content: center;
      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1.5rem;
        width: fit-content;
        padding: 0 5px;
        line-height: 1;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    .content {
      margin-bottom: 60px;
    }
    .date {
      position: absolute;
      bottom: 0;
      border: 1px solid ${a=>a.color};
      border-radius: 10px 10px 0 0;
      padding: 5px 10px;
      border-bottom: 0;
    }
  }
`,X=({blob:a})=>{const n=c(l),i=r(n.code,a.description),t=!!a.upperTitle;return e.jsx(F,{width:a.style.width,height:a.style.height,marginTop:a.style.marginTop,color:a.style.color,placed:a.placed,hasUpperTitle:t,className:"box b2",children:e.jsxs("article",{children:[e.jsxs("div",{className:"titles",children:[a.upperTitle&&e.jsx("p",{className:"upperTitle",children:a.upperTitle}),e.jsx("h3",{children:a.title})]}),e.jsx("p",{className:"content",children:i}),e.jsx("p",{className:"date",children:a.date})]})})},Y=s(d.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  article {
    padding: 10px;
    width: 100%;
    min-height: 50px;
    border: 1px solid ${a=>a.color};
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    background: ${({theme:a})=>a.colors.background};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    .titles {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;

      h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        padding: 0 5px;
        line-height: 1;
        font-weight: 600;
      }
    }
    .description {
      margin: 20px 0;
    }
  }
`,K=({blob:a})=>{const n=c(l),i=r(n.code,a.description);return e.jsx(Y,{color:a.style.color,hasUpperTitle:!0,children:e.jsxs("article",{children:[e.jsxs("div",{className:"titles",children:[a.upperTitle&&e.jsx("p",{className:"upperTitle",children:a.upperTitle}),e.jsx("h3",{children:a.title})]}),e.jsx(j,{className:"description",children:i}),e.jsx("p",{children:a.date})]})})},O=s.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;function J(a){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]})(a)}const _=V`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`,Q=s(d.div)`
  position: relative;
  display: flex;
  gap: 10px;
  color: ${({theme:a})=>a.colors.text};
  border-radius: 99px;
  border: 1px solid ${({theme:a})=>a.colors.text};
  width: fit-content;
  padding: 5px 10px;
  flex-direction: row;
  background: ${({theme:a})=>a.colors.opacity50.main};
  /* opacity to background */

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid ${({theme:a})=>a.colors.text};
  justify-content: center;
  transition: 0.3s ease;
  align-items: center;
  .line {
    position: absolute;
    left: -2%;
    width: 104%;
    height: 1px;
    background-color: ${({theme:a})=>a.colors.text};
    opacity: 0.2;
    display: flex;
  }

  .loadingIcon {
    animation: ${_} 1s linear infinite;
  }
`,e1=({dream:a})=>{const{breakpoints:n}=u,i=x(n.tablet),t=c(l),o=r(t.code,a.title),[b,m]=I.useState(!1),v={offscreen:{y:100,opacity:0},onscreen:{y:0,opacity:1,transition:{type:"spring",bounce:.5,duration:1}}},f={offscreen:{width:0},onscreen:{width:"104%",transition:{delay:.5,type:"spring",bounce:.5,duration:1}}};return e.jsx(d.li,{initial:i?"onscreen":"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:"all"},variants:v,onHoverStart:()=>{m(!0)},onHoverEnd:()=>{m(!1)},children:e.jsxs(Q,{done:a.status,children:[a.status==="done"&&e.jsxs(e.Fragment,{children:[e.jsx(d.div,{className:"line",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:"all"},variants:f}),e.jsx(C,{className:"done"})]}),a.status==="loading"&&e.jsx(J,{className:"loadingIcon"}),a.status==="false"&&e.jsx(z,{className:"notDone"}),e.jsx("span",{children:o})]})},a.id)},a1=[{id:1,title:{en:"Learn and work as a Graphic designer",es:"Aprender y trabajar como Diseñador Gráfico",ca:"Aprendre i treballar com a Dissenyador Gràfic",de:"Lernen und als Grafikdesigner arbeiten"},status:"done"},{id:2,title:{en:"Become a Software Developer",es:"Aprender de desarrollo de Software",ca:"Apendre de desenvolupador de Software",de:"Softwareentwickler werden"},status:"done"},{id:3,title:{en:"Work in small and international companies",es:"Trabajar en pequeñas y empresas internacionales",ca:"Treballar en petites i empreses internacionals",de:"In kleinen und internationalen Unternehmen arbeiten"},status:"done"},{id:4,title:{en:"Create a portfolio using React",es:"Crear un portfolio usando React",ca:"Crear un portfolio usant React",de:"Ein Portfolio mit React erstellen"},status:"done"},{id:5,title:{en:"Teach code to university students",es:"Enseñar código a estudiantes universitarios",ca:"Ensenyar codi a estudiants universitaris",de:"Code an Universitätsstudenten unterrichten"},status:"done"},{id:8,status:"done",link:"https://www.npmjs.com/package/pol-ui",title:{en:"Publish a .npm package",es:"Publicar un paquete .npm",ca:"Publicar un paquet .npm",de:"Ein .npm-Paket veröffentlichen"}},{id:6,title:{en:"Design fonts and publish them",es:"Diseñar tipografías y publicarlas",ca:"Dissenyar tipografies i publicar-les",de:"Schriftarten entwerfen und veröffentlichen"},status:"loading"},{id:7,title:{en:"Write a book",es:"Escribir un libro",ca:"Escriure un llibre",de:"Ein Buch schreiben"},status:"false"},{id:9,title:{en:"Create my UI library",es:" Crear mi librería de UI",ca:"Crear la meva llibreria de UI",de:"Meine UI-Bibliothek erstellen"},status:"false"},{id:10,title:{en:"Create a React Native app",es:"Crear una app con React Native",ca:"Crear una app amb React Native",de:"Eine React Native App erstellen"},status:"false"}],h={en:{mainTitle:"A pixel perfectionist, even though I work with vectors. 🎨👨‍💻",firstParagraph:`Software developer and UX designer with 5 years of experience.
    I have a strong background in web development and have worked on a variety of projects, from small websites to large-scale web applications.`,someTechnologies:"Some technologies I feel confident with:",dreamsTitle:"Dreams I've archived",studiesTitle:"Where I've learned from",partnersTitle:"Some organizations I've worked with"},es:{mainTitle:"Un perfeccionista a cada píxel, y eso que trabajo con vectores. 🎨👨‍💻",firstParagraph:`Desarrollador de software y diseñador UX con 5 años de experiencia.
    Tengo un sólido conocimiento en desarrollo web y he trabajado en una variedad de proyectos, desde pequeños sitios web hasta aplicaciones web de gran escala.`,someTechnologies:"Algunas tecnologías con las que me siento cómodo:",dreamsTitle:"Sueños que he cumplido",studiesTitle:"Donde he aprendido",partnersTitle:"Algunas empresas con las que he colaborado"},ca:{mainTitle:"Un perfeccionista a cada píxel, i això que treballo amb vectors. 🎨👨‍💻",firstParagraph:`Desenvolupador de software i dissenyador UX amb 5 anys d'experiència.
    Tinc un sòlid coneixement en desenvolupament web i he treballat en una varietat de projectes, des de petits llocs web fins a aplicacions web d'escala gran.`,someTechnologies:"Algunes tecnologies amb les que m'estic còmode:",dreamsTitle:"Somnis que he complert",studiesTitle:"D'on he après",partnersTitle:"Algunes empreses amb les que he col·laborat"},de:{mainTitle:"Ein Pixel-Perfektionist, obwohl ich mit Vektoren arbeite. 🎨👨‍💻",firstParagraph:`Softwareentwickler und UX-Designer mit 5 Jahren Erfahrung.
    Ich habe fundierte Kenntnisse in der Webentwicklung und habe an einer Vielzahl von Projekten gearbeitet, von kleinen Websites bis hin zu groß angelegten Webanwendungen.`,someTechnologies:"Einige Technologien, mit denen ich mich wohl fühle:",dreamsTitle:"Träume, die ich erreicht habe",studiesTitle:"Wo ich gelernt habe",partnersTitle:"Einige Unternehmen, mit denen ich zusammengearbeitet habe"}},t1=u.breakpoints,i1=()=>{const a=x(t1.tablet),n=c(l),i=r(n.code,h);return e.jsxs(O,{smallerThanTablet:a,children:[e.jsx("h3",{children:i.dreamsTitle}),e.jsx("ul",{children:a1.map(t=>e.jsx(e1,{dream:t},t.id))})]})},n1=s.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 1rem;
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #222;
      border-radius: 5px;
      aspect-ratio: 1/1;
      height: 100%;
      color: white;
    }
  }
`,s1=[e.jsx(D,{size:30}),e.jsx($,{size:30}),e.jsx(E,{size:30}),e.jsx(H,{size:30}),e.jsx(B,{size:30}),e.jsx(N,{size:30}),e.jsx(A,{size:30}),e.jsx(P,{size:30}),e.jsx(R,{size:30}),e.jsx(U,{size:30}),e.jsx(q,{size:30}),e.jsx(W,{size:30})],c1=()=>{const a=c(l),n=r(a.code,h);return e.jsxs(n1,{children:[e.jsx("p",{children:n.someTechnologies}),e.jsx("section",{children:s1.map((i,t)=>e.jsx("div",{children:i},t))})]})},l1=s.div`
  max-width: 90vw;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 1.2rem;
    font-weight: normal;
  }

  ul {
    height: 500px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`,r1=u.breakpoints,o1=()=>{const a=x(r1.tablet),n=c(l),i=r(n.code,h);return e.jsxs(l1,{smallerThanTablet:a,children:[e.jsx(j,{className:"description",children:i.firstParagraph}),e.jsx("div",{className:"logos",children:e.jsx(c1,{})})]})},d1=new Date().getFullYear(),g=a=>d1-a,h1=[{id:1,placed:"right",upperTitle:"Istituto",title:"Tecnico Superiore",description:{en:"Study an exchange program in Cosenza (Italy), made me discover robotics and programming. I trained on arduino and logic.",es:"Estudiar de intercambio en Cosenza (Italia), me hizo descubrir la robota y programación. Me formé sobre arduino y lógica. ",ca:"Estudiar d'intercanvi a Cosenza (Itàlia), em va fer descobrir la robotica i programació. Em vaig formar sobre arduino i lògica.",de:"Ein Austauschprogramm in Cosenza (Italien) zu studieren, hat mich Robotik und Programmierung entdecken lassen. Ich habe mich auf Arduino und Logik geschult."},date:"2018-2019",style:{color:"#fff700",height:"150px",width:"54%",marginTop:"0px"},flag:e.jsx(p,{})},{id:2,placed:"left",title:"LCI Barcelona",description:{en:"I took a course on interdisciplinary design, confirming my interest into graphics. I designed the graphic and physical campaign of the VIDA festival in team.",es:"Tomé un curso sobre diseño interdisciplinar, confirmando mi interés el diseño. Diseñé en equipo la campaña gráfica y física del festival VIDA.",ca:"Vaig pendre un curs sobre disseny interdisciplinari, confirmant el meu interès pel disseny. Vaig dissenyar en equip la campanya gràfica i física del festival VIDA.",de:"Ich habe einen Kurs in interdisziplinärem Design belegt, der mein Interesse an Grafik bestätigt hat. Ich habe die grafische und physische Kampagne des VIDA-Festivals im Team entworfen."},date:"2019-2020",style:{color:"#6f00ff",height:"190px",width:"49%",marginTop:"10px"},flag:e.jsx(p,{})},{id:3,placed:"right",upperTitle:"Universitat",title:"Autònoma de Barcelona",description:{en:"My main degree was Interactive Communication, chosen to keep learning coding from a visual point and design. I got 6 honor scholarships.",es:"Mi grado principal fue Comunicación Interactiva, elegido para poder seguir aprendiendo programación desde un punto visual y del diseño. Logré 6 matrículas de honor.",ca:"El meu grau principal va ser Comunicació Interactiva, escollit per poder seguir aprenent programació des d'un punt visual i del disseny. Vaig aconseguir 6 matrícules d'honor.",de:"Mein Hauptabschluss war Interaktive Kommunikation, der gewählt wurde, um weiterhin Programmierung aus einem visuellen und designtechnischen Blickwinkel zu lernen. Ich habe 6 Ehrenstipendien erhalten."},date:"2020-2024",style:{color:"#ff0051",height:"180px",width:"53%",marginTop:"0px"},flag:e.jsx(p,{})},{id:4,placed:"left",title:"Linnaeus Universitet",description:{en:"Erasmus+ program to Kalmar, Sweden. I took subjects of International Marketing and Business.",es:"Programa Eramus+ a Kalmar, Suecia. Cursé asignaturas de Márketing Internacional y Empresa.",ca:"Programa Eramus+ a Kalmar, Suècia. Vaig cursar assignatures de Màrqueting Internacional i Empresa.",de:"Erasmus + Programm nach Kalmar, Schweden. Ich habe Fächer des internationalen Marketings und der Wirtschaft belegt."},date:"2022-2023",style:{color:"#00eaff",height:"130px",width:"51%",marginTop:"25px"},flag:e.jsx(p,{})},{id:5,placed:"left",title:"NUWE",description:{en:`My main source of learning in terms of design, working more than ${g(2021)} years as main Graphic Designer of the company.`,es:`Mi principal fuente de aprendizaje en cuanto a diseño, trabajando más de ${g(2021)} años como principal Diseñador gáfico de la empresa. `,ca:`La meva principal font d'aprenentatge en matèria de disseny, treballant més de ${g(2021)} anys com a principal Dissenyador gràfic de l'empresa.`,de:`Meine Hauptlernquelle in Bezug auf Design, die seit mehr als ${g(2021)} Jahren als Hauptgrafikdesigner des Unternehmens arbeitet.`},date:"2021-act",style:{color:"#22ff00",height:"150px",width:"50%",marginTop:"100px"},flag:e.jsx(p,{})},{id:6,placed:"right",title:"Mesalvo Gmbh",description:{en:"Opportunity to create a web-based environment for international customers. As a Mid-Level Developer I have been able to learn and apply my knowledge in web application development. I work in a team as part of the Innovation Hub of Mesalvo Freiburg.",es:"Oportunidad de crear un entorno basado en tecnologías web para clientes internacionales. Como Desarrollador Mid-Level he podido aprender y aplicar mis conocimientos en el desarrollo de aplicaciones web. Trabajo en equipo como parte del Innovation Hub de Mesalvo Freiburg.",ca:"Oportunitat de crear un entorn basat en tecnologies web per a clients internacionals. Com a Desenvolupador Mid-Level he pogut aprendre i aplicar els meus coneixements en el desenvolupament d'aplicacions web. Treballo en equip com a part del Innovation Hub de Mesalvo Freiburg.",de:"Möglichkeit, eine webbasierte Umgebung für internationale Kunden zu schaffen. Als Mid-Level-Entwickler konnte ich mein Wissen in der Entwicklung von Webanwendungen lernen und anwenden. Ich arbeite als Teil des Innovation Hub von Mesalvo Freiburg im Team."},date:"2022-act",style:{color:"#22ffff",height:"220px",width:"60%",marginTop:"70px"},flag:e.jsx(L,{})}],p1=a=>e.jsx("svg",{width:178,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{d:"M19.044 16.894H7.509L10.717 4.34h5.042l3.285 12.554Zm2.941 11.625h3.705L18.662.775H7.852L.824 28.519H4.53l2.14-8.06h13.177l2.139 8.06Zm12.528 0H48.34v-3.565H38.218V.775h-3.705v27.744Zm48.013 0h3.705V.775h-5.806l-8.135 17.67h-1.605L62.55.774h-5.805v27.744h3.705V4.844l7.754 17.01h6.531l7.754-16.972.038 23.637Zm30.366-11.625h-11.535l3.247-12.554h5.041l3.247 12.554Zm2.941 11.625h3.705L112.51.775h-10.809l-7.028 27.744h3.705l2.139-8.06h13.177l2.139 8.06Zm18.946-24.18h9.281V.776h-22.306V4.34h9.281v24.179h3.705V4.339h.039Zm39.113 10.308c0 6.51-4.355 11.082-10.543 11.082-6.187 0-10.542-4.572-10.542-11.082 0-6.51 4.316-11.082 10.542-11.082 6.188 0 10.543 4.572 10.543 11.082Zm3.705 0C177.597 6.16 171.6 0 163.349 0c-8.25 0-14.247 6.161-14.247 14.647s5.997 14.647 14.247 14.647c8.251 0 14.248-6.161 14.248-14.647Z"})}),m1=a=>e.jsx("svg",{width:203,height:42,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsxs("g",{clipPath:"url(#a)",children:[e.jsx("path",{d:"m12.2 17.403 7.86-8.043 7.864 8.047 4.573-4.68L20.06 0 7.627 12.723l4.573 4.68ZM8.97 20.707l-4.574-4.68-4.573 4.68 4.573 4.68 4.574-4.68ZM12.203 24.008l7.86 8.042 7.863-8.046 4.576 4.677-.002.003L20.063 41.41 7.629 28.688l-.006-.006 4.58-4.674ZM35.723 25.391l4.574-4.68-4.573-4.68-4.574 4.68 4.573 4.68Z"}),e.jsx("path",{d:"M24.702 20.702h.002l-4.641-4.749-3.43 3.51-.394.403-.813.832-.006.006.006.007 4.637 4.745 4.64-4.749.003-.003-.004-.002ZM47.426 10.04h9.947c2.468 0 4.335.647 5.6 1.944.98 1.004 1.469 2.249 1.469 3.734v.062c0 .628-.076 1.182-.229 1.663a5.227 5.227 0 0 1-.61 1.302 4.925 4.925 0 0 1-.882 1.02 5.917 5.917 0 0 1-1.082.753c1.241.481 2.218 1.134 2.93 1.96.712.827 1.068 1.972 1.068 3.436v.063c0 1.004-.188 1.882-.566 2.636a5.086 5.086 0 0 1-1.622 1.882c-.704.502-1.551.878-2.54 1.13-.99.25-2.087.376-3.29.376H47.425V10.039Zm8.952 8.878c1.043 0 1.87-.183 2.483-.55.614-.365.92-.956.92-1.772v-.063c0-.731-.266-1.29-.797-1.678-.532-.387-1.298-.58-2.3-.58h-4.66v4.643h4.354Zm1.257 8.848c1.043 0 1.86-.193 2.453-.58.593-.388.89-.99.89-1.805v-.063c0-.732-.277-1.312-.829-1.741-.552-.428-1.44-.643-2.667-.643h-5.458v4.832h5.611ZM71.563 10.04h4.721V32h-4.722V10.04ZM83.434 10.04h4.353l10.056 13.522V10.039h4.661v21.962h-4.017L88.094 18.04V32h-4.66V10.04ZM116.802 9.879h4.354l9.198 22.119h-4.936l-1.963-4.926h-9.075l-1.962 4.926h-4.814l9.198-22.12Zm4.967 12.926-2.852-7.122-2.85 7.122h5.702ZM135.449 10.04h4.354l10.056 13.522V10.039h4.66v21.962h-4.016L140.109 18.04V32h-4.66V10.04ZM171.511 32.375c-1.575 0-3.036-.293-4.385-.878a10.76 10.76 0 0 1-3.495-2.4 10.94 10.94 0 0 1-2.299-3.593c-.552-1.38-.828-2.855-.828-4.424v-.062c0-1.57.276-3.038.828-4.409a11.348 11.348 0 0 1 2.299-3.608 10.648 10.648 0 0 1 3.526-2.447c1.369-.596 2.882-.894 4.538-.894 1.001 0 1.915.084 2.743.251a11.3 11.3 0 0 1 2.254.69 9.744 9.744 0 0 1 1.87 1.067c.572.419 1.104.879 1.594 1.38l-3.004 3.546c-.839-.774-1.692-1.38-2.56-1.82-.869-.439-1.845-.659-2.928-.659-.9 0-1.733.178-2.499.534a5.93 5.93 0 0 0-1.978 1.474 6.95 6.95 0 0 0-1.288 2.18 7.575 7.575 0 0 0-.459 2.652v.062a7.7 7.7 0 0 0 .459 2.667 7.039 7.039 0 0 0 1.273 2.196 5.946 5.946 0 0 0 1.962 1.49c.767.367 1.61.55 2.53.55 1.226 0 2.263-.23 3.111-.69.849-.46 1.692-1.088 2.53-1.883l3.005 3.106a15.815 15.815 0 0 1-1.717 1.631 9.917 9.917 0 0 1-4.262 2.024c-.839.178-1.778.267-2.82.267ZM185.867 10.04h16.158v4.298h-11.497v4.455h10.117v4.298h-10.117v4.612h11.651v4.298h-16.312V10.04Z"})]})}),g1=a=>e.jsx("svg",{width:172,height:36,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsxs("g",{clipPath:"url(#a)",children:[e.jsx("path",{d:"M12.367 18.236c.357.252.342.757.663 1.011l.163 1.12-.807 1.19c-1.028.538-2.556.774-3.51-.093-.54-.487-.68-1.192-.54-1.894l.38-1.026c.213-.147.5-.184.647-.435.503-.324 1.148-.254 1.724-.379.432.142 1.08-.09 1.28.506ZM9.704 24.821c.322 0 .554.237.858.181.434.162.379.688.83.816.341.681.555 1.426.735 2.162-.125.433.237.686.109 1.083l.128.074a3.13 3.13 0 0 1-.198 1.28c.07.76-.309 1.39-.632 2.04-.23.144-.34.56-.662.487-.58.181-.632 1.044-1.332.94-.448.34-1.063.14-1.603.16-.304-.16-.736-.124-.949-.397-.544-.215-1.026-.613-1.492-1.01-.182-.4-.594-.58-.647-1.028.16-.543-.183-1.032-.04-1.57l-.104-.902.339-1.554c.577-.309.411-1.008.99-1.226.36-.828 1.218-1.013 1.886-1.428.255-.05.557.092.757-.142.36-.056.703.327 1.027.034Z"}),e.jsx("path",{d:"M39.033.787c-.145 2.545-2.23 4.259-3.331 6.407-.462 1.28-1.58 2.037-2.371 3.195a20.547 20.547 0 0 0-2.013 2.38c.11.594.734.76 1.095 1.191.809.488.897 1.405 1.601 1.966.412 0 .412.615.865.543.953 1.03 1.726 2.092 2.513 3.212.127.397.326.791.667 1.081.631.921 1.152 1.896 1.798 2.835.094 1.046.972 1.748 1.24 2.726.398.522.559 1.136.92 1.66.556 1.227.936 2.505 1.599 3.682.126.269-.036.54-.178.739-.253.198-.447-.165-.741-.112-1.468-.54-2.876-1.315-4.24-2.144-1.406-1.139-2.952-1.948-4.335-3.14-.54-.145-.755-.776-1.255-1.03-1.334-.83-2.397-2.02-3.744-2.796-.61-.47-1.223-.918-1.835-1.407-.468-.056-.626-.597-1.078-.758-1.008-.613-1.922-1.464-2.947-2.042-.091.147 0 .361-.091.507-.684.669-.502 1.696-.993 2.437-.014 1.063-.754 1.843-1.056 2.777-.847 1.517-1.586 3.07-2.466 4.567-1.17 1.553-1.797 3.43-3.451 4.674-.36.451-.772.684-1.222.975-.199-.055-.487-.023-.541-.27-.198-.378.054-.96-.215-1.304.23-.52.088-1.114.197-1.693l-.088-.251c.018-.795.411-1.463.25-2.276.216-.504.305-1.065.356-1.623.258-.687.474-1.428.545-2.167.23-.433.32-.99.268-1.497.178-.466.215-1.03.703-1.372.07-.309 0-.613.051-.937.487-1.482 1.08-2.908 1.457-4.42 0-.11-.107-.144-.177-.166-1.062-.053-2.051.166-3.042-.105-1.62-.02-3.254-.237-4.797-.561-.632-.127-1.388-.054-1.962-.415-.378.016-.814.09-1.167-.108-.74-.363-1.64-.308-2.378-.705-.556.075-.95-.29-1.457-.342-.485.038-.754-.38-1.094-.651v-.16c.898-1.23 2.337-1.57 3.632-2.04 1.277-.398 2.699-.432 4.029-.705.844-.144 1.76.093 2.605-.056 1.528.039 3.003.29 4.515.329.505.071.97.306 1.474.285l-.019-.214-1.422-1.948c-.533-1.264-1.524-2.328-1.869-3.665-.322-.397-.018-.99-.271-1.424-.015-.2.147-.342.236-.506.307-.126.647.09.952-.108.92.217 1.763.54 2.68.72.953.38 1.925.76 2.77 1.392 1.06.755 2.34 1.244 3.162 2.416.22.2.558.235.843.16.254-.034.31-.34.545-.43 1.112-.704 2.372-1.098 3.472-1.876.442-.453 1.167-.506 1.433-1.12.345-.161.653-.378 1.011-.47.631-.448 1.259-.936 1.939-1.297.363-.038.649-.238.938-.432 1.114-.615 2.284-1.12 3.343-1.823.234-.632.934-.488 1.438-.632.251.055.594.018.704.342ZM51.803 30.65h118.92v-.466H51.803v.466Z"}),e.jsx("path",{d:"M51.803 31.092h118.92v-.463H51.803v.463ZM139.285 23.16c-.463.29-1.035.493-1.93.493-1.207 0-2.243-1.012-2.243-2.339 0-1.847 1.38-2.54 2.704-2.54.516 0 1.062.084 1.38.141l.089 4.245Zm-5.01-7.046c.72-1.067 1.441-1.528 2.851-1.528 1.955 0 2.07 1.73 2.07 3.29-.403 0-.891-.087-1.353-.087-2.618 0-5.525 1.185-5.525 4.246 0 2.136 1.928 3.35 3.886 3.35 1.265 0 2.187-.695 3.166-1.414.343.72 1.208 1.27 2.307 1.414l2.153-1.733-.432-.432c-.203.056-.46.117-.605.117-.633 0-.859-.38-.859-1.706V20.62c.028-1.645.109-3.145.109-4.185 0-2.888-2.185-3.582-4.745-3.582-1.352 0-2.502.175-3.713.52v2.742h.69ZM70.304 8.818h-1.237c-.914-2.786-3.809-3.882-6.348-3.882-5.135 0-7.26 4.146-7.26 9.122 0 8.352 6.022 9.773 8.47 9.773 2.394 0 4.544-1.036 5.847-3.11l.913.387-.913 3.287c-2.362.445-3.839.68-5.755.68-8.798 0-12.664-5.448-12.664-10.78 0-6.1 4.694-10.604 11.308-10.604 3.831 0 5.308.652 7.403 1.187l.236 3.94ZM73.65 16.1v-2.747c1.207-.346 2.36-.521 3.718-.521 2.563 0 4.754.696 4.754 3.587 0 1.044-.086 2.547-.116 4.195v1.013c0 1.331.23 1.708.869 1.708.141 0 .4-.058.602-.119l.433.436-2.16 1.736c-1.1-.142-1.963-.696-2.311-1.42-.977.724-1.901 1.42-3.167 1.42-1.96 0-3.891-1.217-3.891-3.36 0-3.063 2.911-4.247 5.534-4.247.459 0 .95.083 1.351.083 0-1.56-.114-3.295-2.073-3.295-1.414 0-2.133.462-2.855 1.531h-.688Zm5.616 2.806a7.84 7.84 0 0 0-1.384-.144c-1.323 0-2.708.697-2.708 2.546 0 1.331 1.043 2.344 2.25 2.344.893 0 1.47-.202 1.934-.49l-.092-4.255ZM88.604 12.863c0 1.22.116 3.763.116 6.135v4.224c0 .984.464 1.127 1.124 1.303v.579c-.863 0-1.726-.09-2.598-.09-.773 0-1.55.058-2.332.09v-.579c.693-.176 1.01-.32 1.01-1.303v-3.587c0-2.085-.17-3.243-.404-3.85-.23-.575-.519-.777-1.207-.896v-.578c1.325-.316 2.854-.866 3.716-1.448h.575Zm-1.41-4.886c.835 0 1.584.607 1.584 1.476 0 .867-.749 1.473-1.585 1.473s-1.586-.606-1.586-1.473c0-.87.75-1.476 1.586-1.476ZM91.282 24.527c.92-.144 1.526-.865 1.903-1.358l2.796-3.588-3.312-4.512c-.553-.724-.756-.925-1.59-1.304v-.578c.866.027 1.76.09 2.624.09.864 0 1.731-.061 2.592-.09v.578c-.344.171-.604.234-.604.666 0 .202.086.579.345.927l1.588 2.168 1.41-1.882c.287-.402.434-.75.434-.952 0-.548-.348-.755-.808-.927v-.578c.776.027 1.526.09 2.305.09.75 0 1.53-.061 2.28-.09v.578c-1.127.262-1.731.955-2.363 1.767l-2.453 3.124 3.115 4.338c.43.58 1.092 1.302 1.813 1.533v.58c-.862-.03-1.701-.088-2.563-.088-.867 0-1.704.057-2.566.088v-.58c.316-.03.576-.345.576-.638 0-.17-.23-.633-.463-.982l-1.555-2.226-1.558 2.109c-.177.262-.4.814-.4 1.073 0 .46.223.607.606.664v.58c-.751-.03-1.533-.088-2.282-.088-.63 0-1.239.057-1.87.088v-.58ZM105.4 16.1v-2.747a13.029 13.029 0 0 1 3.719-.521c2.566 0 4.759.696 4.759 3.587 0 1.044-.09 2.547-.118 4.195v1.013c0 1.331.231 1.708.864 1.708.145 0 .402-.058.606-.119l.433.436-2.168 1.736c-1.089-.142-1.952-.696-2.3-1.42-.981.724-1.905 1.42-3.168 1.42-1.962 0-3.898-1.217-3.898-3.36 0-3.063 2.91-4.247 5.536-4.247.464 0 .952.083 1.356.083 0-1.56-.113-3.295-2.074-3.295-1.415 0-2.135.462-2.854 1.531h-.693Zm5.621 2.806a7.827 7.827 0 0 0-1.383-.144c-1.328 0-2.708.697-2.708 2.546 0 1.331 1.04 2.344 2.246 2.344.893 0 1.475-.202 1.935-.49l-.09-4.255ZM121.446 6.56c0-.549.343-.578 1.148-.578 3.11 0 4.289 1.677 4.289 4.217 0 2.512-1.728 4.1-4.289 4.1-.373 0-.78-.026-1.291-.057l.143-7.683Zm-3.226 16.084c0 1.243-.372 1.675-1.642 1.819v.52h4.952c.402 0 .807.03 1.182.059.404.026.806.054 1.18.054 3.136 0 6.849-1.21 6.849-4.934 0-3.004-1.816-4.536-4.523-5.286v-.058c2.162-.693 4.175-2.281 4.175-4.736 0-3.755-3.86-5.14-7.079-5.14-.69 0-1.352.115-2.646.115-1.151 0-2.33-.116-3.77-.116v.637c.777.116 1.24.374 1.24 1.472 0 2.601.082 6.268.082 9.733v5.861Zm3.083-7.16c.6 0 1.06-.03 1.55-.03 2.76 0 4.375 1.963 4.375 4.592 0 2.222-1.467 4.013-3.944 4.013-1.781 0-1.981-.289-1.981-1.848v-6.728ZM144.301 14.856c.864 0 1.265.49 1.265 1.328 0 .923.145 2.485.145 4.158v2.831c0 .982-.345 1.095-1.065 1.355v.578c.808 0 1.637-.086 2.445-.086.834 0 1.642.057 2.476.085v-.577c-.775-.087-1.067-.317-1.067-1.355v-2.368c0-2.253.06-3.87.06-4.967 0-1.068 1.84-1.357 2.415-1.357 2.044 0 2.36 2.136 2.36 3.696v4.996c0 .982-.233 1.185-1.038 1.355v.578c.926 0 1.815-.086 2.733-.086.725 0 1.413.057 2.134.085v-.577c-.807-.227-1.038-.43-1.038-1.355v-6.122c0-2.454-1.123-4.16-3.97-4.16-1.21 0-2.504.724-3.511 1.387.031-.49.031-.951.057-1.442h-.575c-1.09.69-2.127 1.125-3.826 1.442v.578ZM170.709 24.498c-.861-.258-1.898-1.182-2.27-1.615l-4.349-5.112 2.217-2.34c.688-.722 1.64-1.386 2.675-1.675v-.576c-.717.056-1.437.087-2.158.087-.775 0-1.585-.03-2.361-.087v.575c.262.12.52.466.52.753 0 .32-.145.752-.75 1.358l-2.358 2.338V4.605h-.633c-1.036.778-2.385 1.384-3.828 1.76v.663c.719 0 1.381.695 1.443 1.878.084 1.098.23 3.264.23 4.94V23.2c0 .635-.23 1.154-1.095 1.299v.578a31.245 31.245 0 0 1 2.299-.086c.865 0 1.7.086 2.562.086v-.579c-.69-.144-.978-.487-.978-1.356v-3.958h.059l2.962 3.266c.491.547.835 1.215.835 1.529 0 .289-.204.52-.46.52v.578c.981 0 1.955-.086 2.933-.086.836 0 1.672.056 2.505.086v-.579Z"}),e.jsx("path",{d:"M51.803 31.092h118.92v-.463H51.803v.463Z"})]})}),x1=a=>e.jsxs("svg",{width:189,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{d:"M22.075 43.214c-.108-.037-2.674-.937-5.66-3.027-1.757-1.229-3.29-2.616-4.56-4.122-1.592-1.891-2.769-3.975-3.498-6.196-.75-2.284-1.18-4.887-1.28-7.735-.08-2.27.05-4.701.384-7.226.569-4.295 1.55-7.427 1.56-7.458l.056-.175.157-.084c.06-.032 1.5-.8 3.824-1.575a31.912 31.912 0 0 1 4.115-1.08 27.356 27.356 0 0 1 4.594-.49v-.004h.893v.004c1.49.029 3.034.193 4.594.49 1.368.261 2.752.624 4.115 1.08 2.324.776 3.764 1.543 3.824 1.575l.157.084.056.175c.01.03.992 3.163 1.56 7.458.334 2.525.463 4.956.384 7.226-.1 2.848-.53 5.45-1.28 7.735-.729 2.22-1.906 4.305-3.498 6.196-1.269 1.506-2.803 2.893-4.56 4.122-2.986 2.09-5.552 2.99-5.66 3.027l-.138.048-.139-.048Z",fill:"#191919"}),e.jsx("path",{d:"M22.229 3.594h-.893v.016c-1.382.05-2.803.212-4.238.486-1.387.264-2.79.632-4.17 1.093-2.359.788-3.83 1.572-3.891 1.605l-.315.169-.11.348c-.01.032-.257.815-.576 2.138a53.54 53.54 0 0 0-1.002 5.399c-.338 2.55-.468 5.007-.388 7.302.101 2.892.54 5.537 1.303 7.863.746 2.275 1.951 4.41 3.581 6.345 1.294 1.536 2.856 2.949 4.644 4.2 3.035 2.124 5.656 3.042 5.766 3.08l.277.096.277-.095c.11-.039 2.731-.957 5.767-3.081 1.787-1.251 3.35-2.664 4.643-4.2 1.63-1.935 2.835-4.07 3.581-6.345.764-2.326 1.202-4.972 1.303-7.863.08-2.295-.05-4.752-.387-7.302-.3-2.264-.71-4.186-1.003-5.4a34.541 34.541 0 0 0-.575-2.137l-.11-.348-.316-.17c-.06-.032-1.532-.816-3.89-1.604a32.334 32.334 0 0 0-4.17-1.093 28.024 28.024 0 0 0-4.238-.486v-.016h-.87Zm0 .896c7.003.007 12.766 3.098 12.766 3.098s3.893 12.302.666 22.138c-3.114 9.49-13.444 13.063-13.444 13.063s-10.33-3.572-13.444-13.063C5.546 19.89 9.44 7.588 9.44 7.588s5.763-3.091 12.767-3.098h.023",fill:"#000"}),e.jsx("path",{d:"M33.23 9.158c-2.5-1.195-5.394-1.763-7.58-2.033-1.979-.245-3.424-.245-3.424-.245s-1.445 0-3.425.245c-2.185.27-5.079.838-7.578 2.033 0 0-2.515 9.691-1.156 17.245.272 1.516.7 2.946 1.337 4.195a19.883 19.883 0 0 0 3.476 4.85c3.514 3.613 7.346 4.798 7.346 4.798s3.832-1.185 7.346-4.797a19.883 19.883 0 0 0 3.476-4.851c.636-1.249 1.065-2.68 1.337-4.195 1.358-7.554-1.156-17.245-1.156-17.245Z",fill:"#fff"}),e.jsx("path",{d:"M32.642 15.743c-1.766-5.148-4.647-9.345-4.647-9.345l-5.771-1.416v-.005l-.012.003-.01-.003v.005L16.43 6.398s-2.88 4.197-4.647 9.345c-1.766 5.148-2.256 9.205-2.256 9.205v3.58l1.74 4.813 6.195 6.099 4.762 1.623 4.738-1.623 6.196-6.1 1.74-4.812v-3.58s-.49-4.057-2.256-9.205",fill:"#191919"}),e.jsx("path",{d:"M33.465 26.102c-1.86 2.692-5.246 4.834-5.299 4.867 2.229-2.238 4.375-5.875 4.375-5.875-.109-2.993-1.278-7.945-4.029-13.82-.924-1.974-1.939-3.279-2.879-4.14-1.728-1.586-3.204-1.675-3.402-1.68h-.022c-.198.005-1.674.094-3.402 1.68-.94.861-1.955 2.166-2.88 4.14-2.75 5.875-3.92 10.827-4.028 13.82 0 0 2.146 3.637 4.374 5.875-.052-.033-3.437-2.175-5.298-4.867l-.903.31c.273 1.515.701 2.946 1.338 4.194a19.883 19.883 0 0 0 3.475 4.851c1.113-.331 3.107-1.137 3.128-2.669.028-1.93-3.152-5.064-3.831-7.47 0 0 2.994-11.774 8.003-11.778h.018v.002h.034v-.002h.018c5.009.004 8.003 11.778 8.003 11.778-.68 2.406-3.859 5.54-3.832 7.47.022 1.532 2.016 2.338 3.129 2.669a19.88 19.88 0 0 0 3.475-4.851c.636-1.248 1.065-2.679 1.337-4.195l-.902-.31Z",fill:"#fff"}),e.jsx("path",{d:"M17.898 21.05s.423.945.616 1.02c.35.137 2.597.137 2.597.137s-1.51-1.218-2.138-1.306a1.917 1.917 0 0 0-1.075.15ZM26.527 21.05s-.423.945-.616 1.02c-.35.137-2.597.137-2.597.137s1.51-1.218 2.138-1.306a1.917 1.917 0 0 1 1.075.15Z",fill:"#fff"}),e.jsx("path",{d:"M47.604 9.064c-.15.23-.806 3.41-.806 3.868 0 .114.687.229 1.493.229 1.074 0 1.492.114 1.492.4 0 .201-.657 4.04-1.492 8.48-.806 4.441-1.552 8.71-1.672 9.484l-.209 1.432 2.209-.086 2.179-.086 1.552-8.451c.836-4.641 1.672-9.024 1.82-9.74l.27-1.29 1.552-.086c1.7-.086 1.522.115 2.089-2.693.15-.745.209-1.432.12-1.518-.24-.23-10.448-.172-10.597.057ZM59.214 9.64c-.179.945-.865 4.526-2.806 15.212-.985 5.357-1.343 7.878-1.134 7.964.21.086 3.283.086 6.865.057l6.537-.085.537-1.777c.269-.974.568-1.89.657-2.005.09-.143.716-.2 1.403-.143l1.254.114-.12 1.92-.09 1.89 2.03.087c1.433.057 2.03-.03 2.12-.287.089-.2.268-3.925.477-8.25.18-4.327.388-9.598.507-11.69l.18-3.781h-2.567c-2.15 0-2.627.086-2.836.487-.15.286-.955 2.693-1.79 5.386-.837 2.664-2.329 7.449-3.344 10.571-.985 3.152-1.79 5.873-1.79 6.074 0 .2-.15.458-.33.573-.268.143-.298-.172-.148-1.175.119-.745.298-1.547.388-1.747.12-.287-.418-.401-2.358-.459l-2.478-.086.09-1.146c.06-.63.268-1.92.477-2.864l.358-1.72 1.91-.143c2.12-.172 1.97.029 2.478-3.237l.18-1.06H62.11l.388-2.378c.238-1.289.417-2.435.417-2.55 0-.114 1.105-.229 2.448-.286l2.477-.086.329-1.432c.716-2.951 1.074-2.722-4.18-2.722h-4.596l-.179.773Zm13.999 10.456c-.298 4.24-.358 4.527-1.194 4.527-.418 0-.746-.172-.746-.373 0-.515 1.85-6.79 2-6.79.06 0 .06 1.204-.06 2.636ZM81.57 9.21c-.06.2-.388 1.977-.746 3.953-.358 1.977-1.044 5.759-1.552 8.452-1.76 9.712-1.97 10.886-1.82 11.087.06.143.895.229 1.88.229h1.731l.627-3.237c.328-1.748.836-4.44 1.074-5.93.269-1.49.597-2.865.717-3.095.149-.229.179 2.464.09 5.96l-.15 6.36.806-.115c.776-.086.895-.344 2.746-5.816 2.388-7.076 2.209-6.56 2.358-6.417.06.086-.269 2.32-.776 4.985-.478 2.693-.955 5.414-1.075 6.102l-.179 1.203h1.85c1.613 0 1.852-.086 2.12-.659.15-.344.836-3.724 1.522-7.506.687-3.781 1.582-8.852 2.03-11.259.448-2.406.746-4.412.687-4.498-.269-.257-4.806-.143-4.955.115-.09.143-.985 2.693-1.97 5.644l-1.791 5.414.179-5.672.18-5.644h-2.717c-1.94 0-2.776.115-2.866.344ZM166.94 9.094c-2.597.86-3.403 2.55-4.776 10.228-1.612 8.88-1.761 10.113-1.373 11.459.448 1.662 1.462 2.149 4.417 2.149 3.105 0 4.388-.66 5.522-2.865.657-1.29 1.731-5.902 1.731-7.449 0-.172-.835-.286-1.94-.286-2.179 0-1.97-.258-2.537 3.151-.537 3.151-1.164 4.04-2.507 3.552-.657-.229-.627-.601.418-6.417 1.731-9.884 1.821-10.141 3.253-9.97.687.086.776.201.776 1.232 0 .63-.119 1.777-.238 2.521l-.239 1.376 2.03-.086 1.999-.086.418-2.149c.508-2.894.358-5.014-.507-5.816-.537-.544-1.015-.63-3.254-.687-1.432-.029-2.865.028-3.193.143ZM178.879 9.266c-2.268 1.003-3.433 3.438-3.433 7.19 0 1.863.359 2.608 3.135 6.36 1.074 1.462 1.193 1.806 1.134 3.152-.09 2.149-.627 3.094-1.731 3.094-.866 0-.896-.029-.896-1.432 0-.802.12-1.92.239-2.521l.239-1.06h-4.119l-.329 2.349c-.627 4.297-.507 5.013 1.135 6.073 1.104.688 4.745.63 6.268-.114 2.119-1.032 3.432-3.495 3.79-7.02.209-2.291-.179-3.351-2.238-6.101-1.94-2.579-2.537-4.011-2.269-5.386.209-1.146.747-1.633 1.672-1.49.746.086.865.83.448 2.865l-.239 1.089h1.91c2.298 0 2.269.028 2.507-3.438.15-2.149.09-2.521-.447-3.152-.538-.659-.836-.716-3.254-.802-1.761-.028-2.925.057-3.522.344ZM100.287 11.215c-.179 1.146-.687 3.897-1.075 6.102a913.514 913.514 0 0 0-1.641 8.882c-.478 2.664-.956 5.214-1.075 5.643l-.209.803h2.12c1.163 0 2.119-.058 2.119-.115 0-.287 1.253-7.334 1.522-8.566l.328-1.346h1.313c.717 0 1.314.057 1.314.143s-.329 1.92-.746 4.097c-.418 2.148-.806 4.354-.896 4.841l-.179.945h4.119l.478-2.664c.268-1.432.835-4.584 1.253-6.933.448-2.378 1.105-6.045 1.493-8.165.388-2.12.806-4.297.925-4.813l.209-.916h-2.149c-1.164 0-2.119.057-2.119.143 0 .286-1.224 7.477-1.403 8.079-.12.573-.358.659-1.493.659h-1.343l.179-.946c.269-1.232 1.373-7.448 1.373-7.735 0-.114-.925-.2-2.029-.2h-2.06l-.328 2.062ZM113.239 9.93c-.089.458-.567 3.123-1.074 5.959-.508 2.836-1.194 6.446-1.493 8.021-.537 2.579-1.492 8.222-1.492 8.595 0 .086 2.059.114 4.537.086l4.537-.086.238-1.29c.12-.715.299-1.575.388-1.919.15-.659.09-.659-2.387-.659-2.896 0-2.747.2-2.09-2.922.806-3.753.508-3.38 2.657-3.38h1.91l.209-1.376c.089-.744.269-1.604.328-1.919.149-.516.03-.573-1.552-.487-.925.057-1.791 0-1.91-.143-.12-.115-.03-1.404.268-2.808l.478-2.578 2.418-.086 2.447-.086.15-.917c.089-.516.268-1.346.388-1.862l.209-.917h-8.985l-.179.774ZM123.388 12.075c-.299 1.633-.866 4.698-1.224 6.818-1.254 6.933-2.268 12.462-2.448 13.093-.149.63-.089.659 1.941.659h2.089l.358-2.092c.746-4.354 1.493-7.764 1.761-8.021.388-.373 1.702-.03 1.94.515.09.23-.089 1.662-.418 3.152a55.252 55.252 0 0 0-.776 4.555l-.209 1.89h4.269v-1.002c0-.573.328-2.78.746-4.9.925-4.812.955-5.672.119-6.245-.626-.4-.626-.43.448-1.432 1.104-1.089 1.164-1.203 1.672-4.01.507-2.78.388-4.67-.299-5.33-.537-.515-.985-.572-5.014-.572h-4.388l-.567 2.922Zm5.94.602c.507.372.507.544.149 2.377-.448 2.32-.806 3.324-1.284 3.61-.477.287-1.641.287-1.82 0-.12-.2.835-5.128 1.164-6.016.179-.459 1.074-.43 1.791.029ZM136.223 9.782c-.149.66-.806 4.355-2.567 13.98-.478 2.751-1.015 5.645-1.194 6.39-.567 2.693-.895 2.52 4.239 2.435l4.536-.086.239-1.29c.12-.716.299-1.575.388-1.919.15-.659.09-.659-2.388-.659-2.895 0-2.746.2-2.089-2.922.806-3.81.537-3.438 2.567-3.323 1.97.086 1.761.286 2.239-2.063.089-.401.209-.945.298-1.232.149-.43-.06-.487-1.671-.487-1.164 0-1.851-.114-1.941-.372-.059-.172.12-1.433.388-2.78l.538-2.434 2.417-.086 2.418-.086.179-1.347c.12-.744.269-1.575.358-1.862.15-.458-.208-.487-4.328-.487-4.417 0-4.507 0-4.626.63ZM146.222 10.585c-.507 2.263-.507 2.292.985 2.292.746 0 1.403.115 1.493.258.089.114-.09 1.633-.388 3.352-.329 1.719-.985 5.386-1.493 8.136-.477 2.75-1.015 5.586-1.194 6.303-.179.716-.328 1.375-.328 1.49 0 .143.925.229 2.059.229h2.06l.478-2.522c.268-1.375.686-3.638.925-5.07.268-1.433.746-4.068 1.074-5.873.329-1.805.717-3.982.896-4.813l.298-1.49h3.224l.179-1.375c.119-.745.269-1.576.358-1.862.12-.459-.268-.487-5.074-.487h-5.223l-.329 1.432ZM157.594 12.791a722.301 722.301 0 0 1-1.403 7.678c-.388 2.206-.985 5.5-1.313 7.305-.328 1.805-.657 3.639-.746 4.068l-.15.803h2.06c1.463 0 2.089-.115 2.089-.373.03-.172.209-1.375.448-2.636.925-4.813 3.731-20.11 3.731-20.397 0-.058-.925-.086-2.03-.086h-2.059l-.627 3.638Z"})]}),u1=a=>e.jsx("svg",{width:199,height:27,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m173.921 9.695.06-.376a.53.53 0 0 0-.11-.428.529.529 0 0 0-.399-.187h-2.704a.519.519 0 0 0-.516.421l-.076.41-2.888 15.79a.526.526 0 0 0 .535.613l1.334-.02h1.254c.25 0 .458-.175.508-.415l1.982-9.8c.654-2.484 2.299-3.223 3.755-3.438.077-.01.371-.006.433-.046-.997 5.941-2.177 12.976-2.198 13.094a.523.523 0 0 0 .511.605h2.912a.513.513 0 0 0 .494-.366c.094-.286.79-4.323 1.208-6.748a9311.38 9311.38 0 0 1 4.521 6.875.522.522 0 0 0 .435.233l3.48.006a.565.565 0 0 0 .179-.034.552.552 0 0 0 .238.054l2.938-.02a.516.516 0 0 0 .508-.429l2.268-13.1 3.373-.005a.522.522 0 0 0 .513-.431l.454-2.644a.529.529 0 0 0-.112-.42.522.522 0 0 0-.401-.185h-3.322c.162-.934.754-4.381.754-4.381.003-.03.006-.06.006-.088a.508.508 0 0 0-.121-.336.512.512 0 0 0-.397-.185h-2.92a.523.523 0 0 0-.513.43l-.77 4.56c-.264.008-.536.013-.536.013l-.456.004-.483-.01a.518.518 0 0 0-.448.242.513.513 0 0 0-.428-.236l-2.674-.005h-.783a.533.533 0 0 0-.383.166s-2.689 3.083-4.118 4.63c.418-2.45 1.571-9.179 1.571-9.179.003-.031.007-.058.007-.09a.51.51 0 0 0-.124-.332.512.512 0 0 0-.397-.186l-2.909-.007a.518.518 0 0 0-.516.43c-.067.4-.369 2.191-.774 4.577a.134.134 0 0 0-.013-.02.508.508 0 0 0-.409-.179c-1.239.036-2.358.545-3.333 1.173Zm14.572 14.784c-1.198-1.925-4.697-7.543-5.005-8.04.405-.477 4.665-5.668 5.53-6.685l-.383 2.013a.525.525 0 0 0 .513.617h1.328c-.151.917-1.539 9.377-1.983 12.095Zm-99.881-6.72c-.608 2.12-2.615 4.138-4.575 4.613-1.498.199-2.598.058-3.364-.438-.806-.554-1.21-1.517-1.524-2.385a5.447 5.447 0 0 1-.082-.93c0-1.931 1.033-3.793 2.934-5.219 1.092-.765 2.576-1.053 3.878-.755.735.17 1.74.607 2.367 1.743.352.616.539 1.397.539 2.159 0 .421-.059.835-.173 1.211ZM73.8 4.127l-.629 3.414a.533.533 0 0 0 .112.434c.1.117.245.187.404.187h3.039a.52.52 0 0 0 .512-.428l.572-3.384a.542.542 0 0 0-.113-.428.527.527 0 0 0-.397-.19l-2.986-.025a.52.52 0 0 0-.514.42Zm-6.563 13.63c.113-.376.168-.79.168-1.211 0-.762-.184-1.543-.535-2.16-.63-1.135-1.634-1.572-2.37-1.742-1.299-.298-2.786-.01-3.879.755-1.897 1.426-2.934 3.288-2.934 5.219 0 .305.03.619.084.93.313.868.717 1.83 1.525 2.385.766.496 1.867.637 3.363.438 1.96-.475 3.966-2.493 4.578-4.614Zm-24.925-2.436 8.057-.076c-.062-.577-.366-1.117-1.003-1.755-.703-.602-1.666-.885-3.034-.893-1.481.207-3.212 1.182-4.02 2.724Zm122.109 2.436c-.606 2.12-2.613 4.139-4.574 4.614-1.5.199-2.599.058-3.361-.438-.809-.554-1.215-1.517-1.528-2.385a5.67 5.67 0 0 1-.083-.93c0-1.931 1.034-3.793 2.937-5.219 1.089-.765 2.577-1.053 3.878-.755.733.17 1.74.607 2.367 1.743.348.616.536 1.397.536 2.159 0 .421-.057.835-.172 1.211ZM.934 25.651v-.324a.37.37 0 0 1 .062-.095L22.646.276a.399.399 0 0 1 .296-.133h3.496a.394.394 0 0 1 .39.389c0 .025-.006.054-.01.08 0 0-2.712 13.395-3.216 15.817C25.309 14.5 37.911.275 37.911.275a.376.376 0 0 1 .29-.133h3.29a.389.389 0 0 1 .378.483l-3.453 14.023.079-.152c1.643-3.197 4.766-5.444 8.146-5.858.01-.002.024-.002.037-.002 3.057-.155 5.416 1.002 6.83 3.34.009.011.014.023.023.036.508 1.021.887 2.393.955 3.804.576-1.683 1.602-3.24 3.027-4.554 2.415-2.247 5.36-3.132 8.296-2.487.03.007.067.019.097.031l.273.118c.65.28 1.36.591 1.959 1.129a4149.79 4149.79 0 0 0 1.248-5.925.524.524 0 0 1 .511-.414h2.7a.53.53 0 0 1 .402.186c.1.12.14.277.114.43l-3.938 21.235a.523.523 0 0 1-.514.426l-2.678-.008a.525.525 0 0 1-.405-.184.52.52 0 0 1-.11-.43l.11-.59c-2.183 1.347-4.394 1.872-6.464 1.497-2.368-.471-4.573-2.787-5.017-5.268a10.434 10.434 0 0 1-.17-1.987.523.523 0 0 1-.35.136l-12.434.005a.563.563 0 0 0-.021.151c0 .19.065.437.15.719l.054.184c.59 1.45 2.006 2.36 3.613 2.321 1.597-.036 3.078-.801 4.392-2.272a.514.514 0 0 1 .387-.174h2.772c.18 0 .347.092.44.244.098.151.11.342.035.503-1.574 3.31-5.104 5.533-8.808 5.533-2.577-.1-4.74-1.355-5.944-3.452-.6-1.118-.883-2.505-.867-3.925l-1.626 6.607a.393.393 0 0 1-.382.3H31.83a.384.384 0 0 1-.305-.15.384.384 0 0 1-.076-.333c1.37-5.704 3.29-13.811 3.988-17.02-1.677 1.965-14.823 17.342-14.823 17.342a.379.379 0 0 1-.293.135l-2.962.026a.386.386 0 0 1-.306-.147.387.387 0 0 1-.08-.327c1.254-5.771 3.008-13.99 3.626-17.187C18.983 10.17 5.946 25.762 5.946 25.762a.401.401 0 0 1-.312.139c-1.012-.035-1.775-.03-2.66-.026H1.286a.38.38 0 0 1-.352-.224ZM169.24 8.89a.518.518 0 0 0-.399-.187h-2.701a.522.522 0 0 0-.511.413l-.208 1.022c-.6-.537-1.199-.882-2.056-1.215l-.269-.118a.67.67 0 0 0-.099-.031c-2.934-.645-5.881.24-8.296 2.487a11.306 11.306 0 0 0-2.724 3.78l3.55-14.417a.385.385 0 0 0-.071-.334.385.385 0 0 0-.306-.149h-3.289a.38.38 0 0 0-.293.133s-12.601 14.224-14.308 16.153c.503-2.422 3.314-15.817 3.314-15.817 0-.026.007-.055.007-.08a.376.376 0 0 0-.087-.246.395.395 0 0 0-.302-.143h-3.633a.395.395 0 0 0-.296.133l-18.147 20.96c-.304-3.051-1.756-6.374-1.756-6.374-2.433-4.984-7.844-6.599-10.913-3.74l-.021.004-.481.35c2.226-3.553 7.874-3.395 11.511.789 0 0 1.615 1.942 2.762 4.833.305-1.021.492-2.078.549-3.159-1.893-2.562-4.027-4.067-4.027-4.067-4.593-3.099-10.092-1.79-11.321 2.22l-.016.017-.238.542c.15-4.193 5.119-6.878 10.357-5.074 0 0 2.466.905 4.956 2.912-.034-.16-.067-.32-.111-.48a13.168 13.168 0 0 0-1.163-3c-2.904-1.258-5.478-1.492-5.478-1.492-5.529-.384-9.633 3.493-8.694 7.582l-.006.022.062.59c-1.964-3.707.994-8.513 6.433-9.574 0 0 2.524-.439 5.629.024a13.3 13.3 0 0 0-2.683-2.176c-3.113.365-5.435 1.443-5.435 1.443-4.977 2.43-6.595 7.844-3.737 10.916l.003.018.352.484c-3.555-2.229-3.394-7.877.786-11.512 0 0 1.954-1.63 4.859-2.782A13.176 13.176 0 0 0 106.6 0c-2.429 1.85-3.847 3.858-3.847 3.858-3.097 4.597-1.791 10.092 2.218 11.324l.015.014.545.242c-4.191-.151-6.876-5.12-5.072-10.362 0 0 .83-2.259 2.662-4.634a13.375 13.375 0 0 0-2.972 1.167c-1.183 2.823-1.404 5.28-1.404 5.28-.386 5.531 3.494 9.636 7.582 8.698l.018.005.595-.066c-3.707 1.968-8.517-.993-9.572-6.435 0 0-.424-2.43 0-5.46a13.428 13.428 0 0 0-2.297 2.872c.397 2.985 1.41 5.178 1.41 5.178 2.43 4.982 7.841 6.598 10.911 3.738l.023-.005.479-.348c-2.223 3.553-7.873 3.395-11.507-.789 0 0-1.863-2.329-2.837-5.04a.534.534 0 0 0-.115-.346.532.532 0 0 0-.405-.187h-2.698a.524.524 0 0 0-.513.413s-.207.315-.303.936c-.6-.538-1.309-.849-1.958-1.13l-.274-.117a.66.66 0 0 0-.098-.031c-2.932-.645-5.878.24-8.294 2.487-1.426 1.314-2.451 2.871-3.032 4.554l-.05.11 1.148-6.614a.526.526 0 0 0-.116-.423.528.528 0 0 0-.401-.185l-2.88.003a.526.526 0 0 0-.514.432l-2.975 16.23a.521.521 0 0 0 .515.613l3.035.009a.52.52 0 0 0 .516-.435l1.147-6.604c.012.042.022.07.022.07-.01.655.044 1.321.167 1.986.446 2.481 2.647 4.797 5.018 5.268 2.069.375 4.281-.15 6.465-1.498-.043.236-.112.592-.112.592a.536.536 0 0 0 .112.43.52.52 0 0 0 .404.183l2.678.008c.252 0 .47-.178.514-.426L92.91 12.79c1.764 2.096 4.072 3.885 4.072 3.885 4.592 3.101 10.088 1.792 11.317-2.216l.018-.017.239-.544c-.15 4.192-5.119 6.879-10.36 5.073 0 0-2.258-.83-4.639-2.663.02.087.038.177.06.265a13.422 13.422 0 0 0 1.221 3.104c2.77 1.14 5.158 1.356 5.158 1.356 5.526.386 9.631-3.494 8.692-7.583l.008-.021-.066-.593c1.966 3.707-.993 8.521-6.433 9.575 0 0-2.377.416-5.357.013a13.327 13.327 0 0 0 2.406 2.003c3.088-.373 5.376-1.438 5.376-1.438 4.979-2.428 6.598-7.844 3.739-10.913l-.006-.023-.349-.48c3.555 2.228 3.396 7.873-.785 11.512 0 0-1.994 1.656-4.941 2.811.813.274 1.648.469 2.494.58h1.205c2.477-1.867 3.921-3.919 3.921-3.919 3.1-4.595 1.793-10.094-2.216-11.322l-.017-.017-.542-.24c4.192.152 6.877 5.121 5.073 10.362 0 0-.901 2.452-2.899 4.94.162-.037.316-.07.475-.111a13.393 13.393 0 0 0 2.852-1.09c1.24-2.883 1.467-5.431 1.467-5.431.389-5.525-3.492-9.635-7.583-8.695l-.017-.005-.591.064c3.704-1.966 8.516.995 9.573 6.436 0 0 .611 2.498.154 5.457a6.64 6.64 0 0 1-.612 1.708c-.105.183-.235.4-.393.653l.004-.006c-.001.006-.008.012-.012.02-.003.008-.003.009-.003.014a.38.38 0 0 0 .333.58h1.685c.886-.004 1.647-.008 2.66.027a.405.405 0 0 0 .313-.139L134.258 8.24c-.618 3.196-2.371 11.416-3.626 17.187a.457.457 0 0 0-.007.083.389.389 0 0 0 .393.391l2.964-.026c.113 0 .22-.049.293-.135 0 0 13.142-15.377 14.824-17.342-.701 3.209-2.62 11.316-3.987 17.02a.31.31 0 0 0-.014.092.397.397 0 0 0 .392.39h3.506a.392.392 0 0 0 .381-.299l1.518-6.157.21-.866c.007.247.01.443.01.443-.006.656.048 1.322.171 1.987.442 2.481 2.647 4.797 5.014 5.268 2.069.375 4.283-.15 6.467-1.498l-.112.592a.534.534 0 0 0 .108.43.535.535 0 0 0 .404.183l2.68.008a.52.52 0 0 0 .515-.426l2.42-12.862.58-3.466a.504.504 0 0 0-.122-.346Z"})}),v1=a=>e.jsx("svg",{width:185,height:39,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.212.273c-4.272.833-7.34 2.485-10.529 5.666-6.062 6.05-7.403 14.962-3.4 22.608 2.613 4.993 7.069 8.488 12.79 10.03 1.244.336 2.09.41 4.845.422 3.734.017 5.225-.26 8.198-1.524 7.454-3.169 12.305-10.901 11.855-18.896C39.452 9.363 32.89 1.977 23.698.265c-1.912-.357-5.64-.352-7.486.008ZM14.11 11.436c.559.284 1.195 1.323 1.195 1.95 0 .188-.32 1.195-.71 2.238-.667 1.786-.69 1.923-.397 2.362.171.257.495.524.719.594.745.232 1.295-.36 1.848-1.987.77-2.273 1.846-3.079 3.307-2.479 1.099.45 1.397 1.06 1.243 2.538-.114 1.09-.08 1.29.268 1.633.455.446.958.498 1.445.148.186-.133.81-1.506 1.386-3.05 1.276-3.413 1.358-3.57 2.079-3.936.799-.406 1.406-.364 2.184.15 1.136.748 1.185 1.496.269 4.092-.77 2.183-.77 2.185-.384 2.605.577.625 1.686.425 2.565-.463.965-.976 1.99-1.212 3.123-.72 1.042.453 1.67 1.352 1.67 2.393.003 2.562-3.026 3.56-4.883 1.61-.56-.59-1.326-.782-2.397-.604-1.306.216-1.915 1.013-2.915 3.818-.883 2.473-1.376 3.216-2.324 3.498-.625.185-1.734-.22-2.202-.804-.558-.696-.5-1.665.216-3.596.407-1.096.57-1.817.486-2.147-.165-.644-.842-.955-1.525-.7-.419.156-.631.515-1.153 1.947-.75 2.06-1.356 2.704-2.544 2.704-1.523 0-2.487-1.475-1.994-3.052.248-.796-.049-1.451-.759-1.673-.843-.262-1.258.32-2.361 3.306-1.266 3.428-1.71 4.022-3.002 4.022-1.027 0-1.756-.539-2.095-1.548-.242-.719-.316-.486 2.81-8.86 1.855-4.967 2.068-5.43 2.676-5.832.765-.507 1.38-.551 2.156-.157ZM140.18 14.794l.05 14.795 1.118.06 1.117.06V0h-2.335l.05 14.794ZM54.8 8.976c-2.993.354-5.061 2.55-5.632 5.978-.135.81-.193 3.75-.158 7.96l.056 6.675h2.332l.097-7.472c.087-6.629.137-7.562.447-8.266.774-1.76 2.086-2.582 4.121-2.582 2.768 0 4.275 1.582 4.756 4.991.106.756.195 4.09.197 7.41l.004 6.038 1.118-.06 1.117-.06.105-7.172c.11-7.55.14-7.806 1.07-9.226 1.606-2.456 5.634-2.679 7.275-.404 1.01 1.402 1.055 1.762 1.166 9.53l.103 7.273 1.118.06 1.118.06v-7.074c0-4.406-.081-7.472-.216-8.13-.634-3.112-2.598-5.113-5.406-5.506-3.077-.432-5.666.69-7.211 3.126l-.296.466-.629-.995c-1.28-2.024-3.683-2.971-6.652-2.62Zm68.595.007c-3.81.427-7.204 3.655-8.145 7.745-.325 1.412-.33 4.001-.01 5.389a10.33 10.33 0 0 0 2.605 4.87c2.094 2.187 4.236 3 7.539 2.86 1.929-.081 2.207-.145 3.525-.813 1.297-.657 3.194-2.287 3.291-2.826.02-.113.086.601.146 1.587l.109 1.794h2.138V9.265h-2.138l-.057 1.756-.056 1.756-.89-1.014c-1.916-2.184-4.724-3.153-8.057-2.78Zm50.171-.001c-5.104.592-8.628 4.912-8.601 10.544.017 3.622 1.379 6.523 3.981 8.487 4.039 3.048 9.945 2.533 13.279-1.158 3.775-4.18 3.687-11.034-.194-15.024-2.209-2.27-5.092-3.24-8.465-2.85Zm-87.062.3c-2.447.674-4.9 2.746-6.02 5.082-2.981 6.223-.03 13.58 6.105 15.218 1.346.36 3.731.397 5.182.081 1.442-.313 3.238-1.252 4.412-2.304 1.121-1.006 2.237-2.552 2.102-2.912-.05-.13-.443-.441-.874-.689l-.785-.451-.407.676c-.224.372-.807 1.053-1.295 1.514-3.137 2.964-8.25 2.866-11.138-.215-1.214-1.295-2.144-3.583-2.157-5.307l-.005-.648h16.94l-.127-1.145c-.632-5.75-4.214-9.25-9.418-9.203-.807.008-1.938.144-2.515.303Zm19.804-.102c-3.031.448-4.667 2.132-4.658 4.794.007 2.33 1.012 3.686 4.369 5.904 3.113 2.056 3.791 2.874 3.79 4.57-.001 1.259-.549 2.165-1.607 2.657-.69.321-1.283.384-3.689.387l-2.868.005V29.628l2.09.126c5.717.345 8.502-1.442 8.49-5.446-.008-2.474-.954-3.721-4.783-6.304-2.684-1.812-3.273-2.457-3.414-3.743-.125-1.135.329-1.987 1.363-2.553.708-.388 1.134-.453 3.058-.473l2.235-.022.059-.926c.041-.631-.021-.952-.194-1.007-.578-.184-3.245-.247-4.241-.1Zm39.462.081c0 .079 5.72 15.098 7.287 19.132l.464 1.196h2.259l2.197-5.779c3.556-9.348 5.481-14.462 5.481-14.556 0-.049-.562-.088-1.249-.088h-1.25l-.382 1.046c-.21.575-1.342 3.646-2.516 6.824a1556.306 1556.306 0 0 0-2.688 7.322c-.305.85-.61 1.544-.677 1.544-.067 0-1.373-3.384-2.903-7.521-1.529-4.137-2.939-7.903-3.132-8.369l-.351-.846h-1.27c-.699 0-1.27.042-1.27.095Zm-54.36 2.3c2.154.682 3.903 2.71 4.509 5.226l.132.548H81.792l.132-.448c1.28-4.381 5.315-6.646 9.485-5.326Zm36.282.095c2.932 1.043 4.725 3.998 4.715 7.77-.013 5.03-2.884 8.178-7.427 8.144-2.192-.017-3.524-.538-5.031-1.968-4.554-4.322-2.782-12.451 3.083-14.137 1.255-.361 3.348-.275 4.66.191Zm49.966.083c3.225 1.237 5.004 4.31 4.816 8.322-.1 2.158-.831 3.948-2.17 5.322-2.801 2.87-7.431 3.005-10.318.3-1.272-1.191-1.922-2.279-2.333-3.901-.794-3.143.049-6.431 2.17-8.465.528-.506 1.235-1.066 1.57-1.244 1.84-.975 4.257-1.104 6.265-.334Z"})}),f1=a=>e.jsxs("svg",{width:179,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsxs("g",{children:[e.jsx("path",{d:"m17.898 13.171-.073.188c1.212.533 3.932 2.648 3.932 6.907 0 4.01-3.38 8.052-8.694 8.052-6.61 0-8.889-3.865-8.889-7.416 0-4.55 3.181-7.58 3.181-11.724a6.477 6.477 0 0 0-5.101-6.252l-.11.188a5.368 5.368 0 0 1 1.63 3.883C3.775 11.475 0 14.656 0 19.793c0 4.732 3.308 9.555 12.887 9.555 8.537 0 13.038-4.18 13.038-8.628-.006-3.817-2.738-7.046-8.027-7.549Z"}),e.jsx("path",{d:"M55.401 28.582 44.053 13.95v13.19l2.314.551v.606H41.09v-.606l1.89-.551V12.768a4.036 4.036 0 0 0-1.617-.92c-.23-.049-.54-.103-.54-.103v-.606h4.478l9.694 12.602V12.308l-2.314-.557v-.606h5.277v.606l-1.89.557v13.08c0 1.213.084 2.976.102 3.2l-.769-.006Zm23.726-9.319c0 6.06-4.241 9.573-8.876 9.573s-8.894-3.562-8.894-9.1 4.24-9.136 8.852-9.136a8.634 8.634 0 0 1 8.918 8.67v-.006Zm-2.95.91c0-4.454-2.666-8.774-6.29-8.774-3.853 0-5.592 3.726-5.592 7.713s2.2 8.93 6.338 8.93c3.89 0 5.543-3.938 5.543-7.87Zm6.616-7.877-1.818-.557v-.606h6.962v.606l-2.182.557 4.805 13.099 4.805-13.1-2.182-.556v-.606h5.15v.606l-1.817.557-6.017 16.328H88.96l-6.167-16.328Zm41.139 7.24h-1.103v-7.5c3.635 0 5.798.835 5.798 3.804-.018 2.206-1.908 3.696-4.695 3.696Zm31.148 8.155 2.423-.551V12.302l-2.423-.557v-.606h7.555v.606l-2.424.557V27.14l2.424.551v.606h-7.555v-.606Zm12.184-4.108h.478l1.606 3.696c.955.48 2.004.74 3.072.764 2.084 0 3.986-1.212 3.986-3.381 0-1.648-1.066-2.63-2.793-3.532l-1.708-.885c-2.042-1.06-4.084-2.563-4.084-4.98 0-2.63 1.818-4.66 5.708-4.66 1.366.014 2.723.237 4.023.66l.406 3.976h-.515l-1.485-3.187a5.153 5.153 0 0 0-2.514-.655c-1.969 0-3.308 1.212-3.308 2.89 0 1.521 1.011 2.478 2.744 3.375l2.024 1.054c2.763 1.43 4.071 2.757 4.071 5.21 0 3.03-2.841 4.914-6.373 4.914a15.212 15.212 0 0 1-4.902-.733l-.436-4.526Zm-70.04 4.108 1.945-.551 6.005-16.013 2.005-.515 6.198 16.522 1.945.557v.606h-7.355v-.606l2.49-.557-1.757-4.75h-6.604l-1.745 4.75 2.49.551v.606h-5.616v-.6Zm5.332-6.573h5.714l-2.836-7.659-2.878 7.659Zm24.841-1.212c.606-.152 4.005-1.018 4.005-4.241 0-2.587-1.981-4.593-6.865-4.593-3.029 0-6.058.067-6.44.079v.606l1.993.557v14.82l-1.993.557v.606h7.052v-.606l-2.314-.557v-6.701h1.993l5.096 7.876h4.513v-.606l-2.284-.605-4.756-7.192Zm14.893-7.877v15.11l-2.424.552v.606h7.555v-.606l-2.423-.551V12.035h4.077l1.345 2.896h.522l-.388-3.774h-13.82l-.388 3.774h.521l1.333-2.865 4.09-.037ZM13.002 22.935 15.425.04h-5.029l2.424 22.896h.182Z"})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"b",x1:-.006,y1:16.134,x2:25.919,y2:16.134,children:[e.jsx("stop",{offset:.3}),e.jsx("stop",{offset:.7})]})})]}),b1=a=>e.jsx("svg",{width:157,height:33,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("g",{clipPath:"url(#a)",fillRule:"evenodd",clipRule:"evenodd",children:e.jsx("path",{d:"M18.31 26.418V6.43l-4.512-2.406v21.063l-2.314 1.235V2.791L7.376.6C4.176-1.106.174 1.027.174 4.44v23.966c0 2.436 2.037 4.22 4.368 4.422V6.701c0-1.033.906-1.87 2.025-1.87h.404v27.61c.137-.058.272-.122.405-.193l10.934-5.83Zm2.315-1.234 9.227-4.92c3.201-1.706 3.201-5.973 0-7.68l-2.4-1.28v6.53l-2.315 1.235V10.07l-4.512-2.406v17.52ZM69.742 6.66l-.416.31v19.062l.351.232c.307.204 1.44.233 9.133.233 7.692 0 8.825-.029 9.132-.233l.352-.232v-9.444c0-8.96-.015-9.457-.29-9.691-.423-.362-1.22-.318-1.52.085-.214.29-.245 1.34-.248 8.394-.001 6.144-.05 8.15-.2 8.435-.108.205-.445.49-.748.634-.495.234-1.15.26-6.444.26-6.484.001-6.754-.032-7.216-.875-.216-.394-.248-1.5-.248-8.656V6.97l-.416-.31c-.23-.17-.504-.308-.61-.308-.108 0-.383.139-.612.309Zm26.627-.023c-.182.171-.33.462-.332.647-.002.427 7.398 18.6 7.717 18.952.316.348 1.325.348 1.642 0 .13-.144 1.385-3.082 2.788-6.529 2.774-6.814 2.846-6.939 3.978-6.939 1.122 0 1.198.132 3.965 6.94 1.523 3.745 2.676 6.372 2.866 6.528.174.143.511.26.749.26s.543-.117.679-.26c.135-.144 1.928-4.38 3.985-9.414 2.646-6.478 3.725-9.29 3.69-9.624-.063-.61-.688-.94-1.292-.68-.457.197-.259-.237-3.421 7.519-1.237 3.036-2.357 5.636-2.487 5.776-.419.452-1.205.609-1.825.364-.302-.119-.608-.306-.682-.417-.074-.111-1.316-3.09-2.762-6.619-2.296-5.607-2.68-6.441-3.046-6.611-.345-.16-.494-.16-.839 0-.367.17-.748.999-3.056 6.65-1.53 3.744-2.786 6.606-2.992 6.812-.645.649-1.919.526-2.44-.236-.131-.19-1.388-3.168-2.793-6.615-1.404-3.447-2.636-6.347-2.737-6.444-.374-.36-1.007-.389-1.355-.06Zm41.5.322c-.486.361-.539.883-.127 1.235.261.223 1.138.247 9.317.247h9.028l.246-.332c.337-.455.31-.666-.142-1.093l-.388-.366h-8.759c-8.621 0-8.765.005-9.175.31Zm-96.327.09c-.11.041-.306.268-.435.502-.355.649-.35 17.705.006 18.354.422.769 1.673.764 2.086-.008.15-.277.2-1.782.201-6.009.003-6.186-.003-6.15.956-6.525 1.115-.436 1.106-.444 6.801 5.712 7.125 7.702 6.836 7.422 7.672 7.422 1.234 0 1.17.524 1.17-9.713 0-8.929-.004-9.054-.327-9.442-.426-.512-1.214-.536-1.694-.054-.333.334-.34.447-.384 6.206l-.044 5.865-.517.435c-.59.498-1.262.566-1.91.194-.23-.133-2.801-2.823-5.714-5.977-6.73-7.288-6.505-7.066-7.15-7.05-.284.006-.606.045-.717.087Zm96.227 8.704c-.174.164-.316.432-.316.596 0 .165.142.433.316.597.308.292.526.299 9.216.299 9.788 0 9.488.028 9.488-.896 0-.923.3-.895-9.488-.895-8.69 0-8.908.007-9.216.299Zm-.093 9.176c-.334.48-.19 1.019.333 1.244.295.127 2.793.175 9.1.175h8.694l.397-.376c.293-.276.37-.464.29-.709-.238-.734.13-.706-9.49-.706h-9.066l-.258.372Z"})})}),w1=a=>e.jsx("svg",{width:170,height:30,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("g",{clipPath:"url(#a)",children:e.jsx("path",{d:"M22.481 13.627c-.071-1.07-.357-2.14-.928-3.068L16.7 2.066a7.282 7.282 0 0 1-.785-2.07l-.214.357a6.77 6.77 0 0 0 0 6.78l3.925 6.78a6.77 6.77 0 0 1 0 6.78l-.214.357a7.29 7.29 0 0 0-.785-2.07l-3.568-6.209-2.284-3.997a7.286 7.286 0 0 1-.785-2.07l-.214.358c-1.213 2.07-1.213 4.638 0 6.78l3.925 6.78a6.77 6.77 0 0 1 0 6.78l-.214.357a7.285 7.285 0 0 0-.785-2.07l-4.925-8.493c-.642-1.142-.927-2.427-.927-3.711C3.64 14.84 0 17.767 0 21.12c0 4.71 6.994 8.493 15.63 8.493 8.635 0 15.63-3.783 15.63-8.493.07-3.211-3.498-6.137-8.779-7.493Zm14.773 14.488c.072-1.213.215-1.998.571-2.997 1.642.785 3.783 1.142 5.353 1.142 2.712 0 4.282-.857 4.282-2.64 0-1.714-1.142-2.499-3.854-3.712l-1.498-.571c-2.784-1.213-4.64-2.783-4.64-5.852 0-3.355 2.356-5.496 7.066-5.496 1.927 0 3.711.286 5.353.857a11.197 11.197 0 0 1-.571 2.926c-1.57-.571-3.497-.857-4.853-.857-2.57 0-3.712 1-3.712 2.57 0 1.498 1.142 2.426 3.212 3.283l1.57.642c3.711 1.57 5.281 3.283 5.281 6.138 0 3.354-2.569 5.71-7.565 5.71-2.355 0-4.353-.358-5.995-1.143Zm29.333-14.06v14.703h-2.998l-.142-1.785c-.857 1.285-2.07 2.142-4.14 2.142-3.854 0-6.494-2.855-6.494-7.78 0-5.138 2.783-8.136 8.207-8.136 2.141.072 3.925.286 5.567.857Zm-3.212 11.348v-9.206c-.642-.143-1.427-.143-2.355-.143-3.354 0-4.924 2.07-4.924 5.353 0 2.997 1.213 5.138 4.068 5.138 1.356-.071 2.355-.5 3.211-1.142Zm19.77-6.494v9.849h-3.212V19.48c0-2.355-.785-3.426-3.997-3.426-.785 0-1.641.071-2.57.214v12.49h-3.21V14.056c2.069-.5 4.353-.857 5.852-.857 5.424.072 7.136 2.141 7.136 5.71Zm8.992 7.494c.928 0 1.855-.143 2.498-.429a35.252 35.252 0 0 1-.357 2.712c-.857.357-1.856.5-2.712.5-3.14 0-5.139-1.427-5.139-4.996V8.703c1-.357 2.213-.5 3.212-.5v5.567h5.139c-.072 1-.143 1.927-.286 2.784h-4.853v7.208c0 1.855.928 2.64 2.498 2.64Zm17.342-12.347v14.702h-2.997l-.143-1.785c-.856 1.285-2.069 2.142-4.139 2.142-3.854 0-6.495-2.855-6.495-7.78 0-5.138 2.784-8.136 8.208-8.136 2.141.072 3.854.286 5.566.857Zm-3.283 11.347v-9.206c-.642-.143-1.427-.143-2.355-.143-3.354 0-4.924 2.07-4.924 5.353 0 2.997 1.213 5.138 4.068 5.138 1.356-.071 2.426-.5 3.211-1.142Zm19.841-6.494v9.849h-3.283V19.48c0-2.355-.785-3.426-3.997-3.426-.785 0-1.641.071-2.569.214v12.49h-3.212V14.056c2.07-.5 4.354-.857 5.853-.857 5.424.072 7.208 2.141 7.208 5.71ZM142.38 8.203v20.555h-2.997l-.143-1.856c-.856 1.356-2.07 2.212-4.211 2.212-3.854 0-6.494-2.854-6.494-7.779 0-5.138 2.783-8.136 8.207-8.136.857 0 1.642.072 2.427.214V8.56c.999-.285 2.141-.357 3.211-.357Zm-3.211 17.2V16.34c-.857-.143-1.713-.286-2.57-.286-3.211 0-4.71 1.998-4.71 5.353 0 2.997 1.213 5.138 4.068 5.138 1.285-.071 2.355-.5 3.212-1.142Zm19.483-2.926h-10.348c.428 2.64 1.927 3.854 4.853 3.854 1.784 0 3.568-.357 5.139-1.142-.143.857-.286 1.998-.5 2.926-1.499.643-2.998.928-4.782.928-5.424 0-7.993-2.997-7.993-7.993 0-4.354 1.998-7.85 7.137-7.85 4.639 0 6.637 2.997 6.637 6.708 0 1 0 1.713-.143 2.57Zm-10.348-2.712h7.28c0-2.426-1.285-3.854-3.498-3.854-2.355.072-3.568 1.356-3.782 3.854ZM170 13.413c0 1-.143 2.141-.285 2.784-.786-.072-1.499-.143-2.427-.143-.785 0-1.57.071-2.355.143v12.56h-3.212V14.057c1.356-.5 3.711-.857 5.496-.857.927.072 2.069.072 2.783.214Z"})})}),Z1=a=>e.jsx("svg",{width:181,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:e.jsx("path",{d:"M77.562 5.422c0 2.064-1.22 3.07-3.263 3.07-2.053 0-3.252-.994-3.252-3.07V.673h1.68v4.75c0 .834.214 1.658 1.572 1.658 1.198 0 1.583-.524 1.583-1.659V.673h1.68v4.75ZM78.844 2.778h1.442v.771h.034c.383-.621 1.047-.92 1.69-.92 1.613 0 2.021.909 2.021 2.278v3.402h-1.52V5.185c0-.909-.267-1.36-.973-1.36-.823 0-1.176.462-1.176 1.585v2.899h-1.518V2.778ZM85.334 2.778h1.518v5.53h-1.518v-5.53Zm1.519-.855h-1.518V.67h1.518v1.252ZM91.163 8.309h-1.69L87.58 2.778h1.594l1.167 3.777h.02l1.165-3.777h1.509l-1.872 5.53ZM97.174 4.953c-.14-.771-.47-1.177-1.21-1.177-.962 0-1.24.75-1.26 1.177h2.47Zm-2.47.963c.04.963.51 1.4 1.358 1.4.61 0 1.102-.374 1.197-.716h1.337c-.428 1.306-1.337 1.86-2.588 1.86-1.745 0-2.824-1.198-2.824-2.909 0-1.657 1.145-2.92 2.824-2.92 1.882 0 2.79 1.583 2.684 3.285h-3.988ZM99.588 2.778h1.444v1.027h.02c.279-.695 1.029-1.177 1.766-1.177.105 0 .235.022.333.053v1.412a2.84 2.84 0 0 0-.547-.053c-1.111 0-1.499.802-1.499 1.775V8.31h-1.517V2.778ZM104.977 6.514c.01.664.566.932 1.166.932.438 0 .994-.172.994-.707 0-.46-.631-.62-1.721-.856-.878-.192-1.755-.503-1.755-1.476 0-1.411 1.22-1.776 2.407-1.776 1.208 0 2.322.407 2.438 1.766h-1.443c-.044-.59-.493-.75-1.039-.75-.342 0-.845.065-.845.514 0 .545.856.621 1.722.824.891.203 1.755.524 1.755 1.55 0 1.455-1.261 1.926-2.524 1.926-1.284 0-2.536-.481-2.599-1.947h1.444ZM109.639 2.778h1.519v5.53h-1.519v-5.53Zm1.52-.855h-1.519V.67h1.519v1.252ZM114.496 2.776h1.113v1.017h-1.113V6.53c0 .513.127.642.642.642.16 0 .31-.011.471-.043v1.187a5.9 5.9 0 0 1-.888.054c-.93 0-1.743-.215-1.743-1.316V3.793h-.919V2.776h.919V1.118h1.518v1.658ZM120.047 5.604c-.258.224-.793.235-1.262.321-.473.097-.9.258-.9.814 0 .565.439.706.93.706 1.188 0 1.232-.942 1.232-1.273v-.568Zm-3.511-1.123c.087-1.422 1.359-1.85 2.599-1.85 1.104 0 2.428.246 2.428 1.572v2.878c0 .502.057 1.005.193 1.23h-1.539a2.237 2.237 0 0 1-.108-.535c-.48.503-1.187.685-1.86.685-1.049 0-1.884-.525-1.884-1.66 0-1.25.944-1.549 1.884-1.678.93-.138 1.798-.107 1.798-.727 0-.652-.45-.75-.984-.75-.579 0-.952.236-1.008.835h-1.519ZM124.611 2.776h1.111v1.017h-1.111V6.53c0 .513.127.642.64.642.16 0 .312-.011.471-.043v1.187a5.904 5.904 0 0 1-.887.054c-.93 0-1.743-.215-1.743-1.316V3.793h-.92V2.776h.92V1.118h1.519v1.658ZM131.454 5.356h1.979l-.963-2.802h-.021l-.995 2.802Zm.16-4.685h1.722l2.858 7.638h-1.745l-.578-1.7h-2.855l-.601 1.7h-1.698L131.614.67ZM141.829 8.311h-1.443v-.77h-.032c-.387.62-1.05.92-1.692.92-1.615 0-2.021-.91-2.021-2.278V2.781h1.519v3.123c0 .91.268 1.358.973 1.358.825 0 1.178-.46 1.178-1.581v-2.9h1.518v5.53ZM145.178 2.776h1.111v1.017h-1.111V6.53c0 .513.126.642.641.642.159 0 .31-.011.47-.043v1.187a5.914 5.914 0 0 1-.889.054c-.927 0-1.744-.215-1.744-1.316V3.793h-.918V2.776h.918V1.118h1.522v1.658ZM149.86 7.317c1.038 0 1.348-.888 1.348-1.766 0-.888-.31-1.774-1.348-1.774-1.026 0-1.336.886-1.336 1.774 0 .878.31 1.766 1.336 1.766Zm-1.894-6.74h1.68l1.028 1.52h-1.06l-1.648-1.52Zm1.894 2.054c1.743 0 2.866 1.156 2.866 2.92 0 1.754-1.123 2.91-2.866 2.91-1.732 0-2.856-1.156-2.856-2.91 0-1.764 1.124-2.92 2.856-2.92ZM153.6 2.778h1.446v.771h.031a1.972 1.972 0 0 1 1.691-.92c1.615 0 2.022.909 2.022 2.278v3.402h-1.52V5.185c0-.909-.267-1.36-.974-1.36-.823 0-1.176.462-1.176 1.585v2.899h-1.52V2.778ZM162.521 7.317c1.039 0 1.347-.888 1.347-1.766 0-.888-.308-1.774-1.347-1.774-1.027 0-1.338.886-1.338 1.774 0 .878.311 1.766 1.338 1.766Zm0-4.686c1.742 0 2.866 1.156 2.866 2.92 0 1.754-1.124 2.91-2.866 2.91-1.733 0-2.857-1.156-2.857-2.91 0-1.764 1.124-2.92 2.857-2.92ZM166.305 2.778h1.435v.749h.021c.396-.568.972-.899 1.688-.899.696 0 1.318.256 1.617.921.321-.482.898-.92 1.67-.92 1.175 0 2.02.545 2.02 1.978v3.702h-1.519V5.175c0-.739-.065-1.35-.93-1.35-.856 0-1.016.707-1.016 1.402V8.31h-1.52V5.205c0-.641.044-1.38-.919-1.38-.298 0-1.028.194-1.028 1.274v3.21h-1.519V2.778ZM179.287 5.604c-.257.224-.792.235-1.262.321-.471.097-.899.258-.899.814 0 .565.439.706.931.706 1.189 0 1.23-.942 1.23-1.273v-.568Zm-3.509-1.123c.085-1.422 1.358-1.85 2.6-1.85 1.102 0 2.428.246 2.428 1.572v2.878c0 .502.053 1.005.193 1.23h-1.541a2.339 2.339 0 0 1-.108-.535c-.481.503-1.185.685-1.859.685-1.049 0-1.884-.525-1.884-1.66 0-1.25.943-1.549 1.884-1.678.93-.138 1.796-.107 1.796-.727 0-.652-.449-.75-.984-.75-.578 0-.952.236-1.006.835h-1.519ZM73.54 16.506c-.996 0-1.338.855-1.338 1.765 0 .865.396 1.775 1.338 1.775 1.004 0 1.304-.877 1.304-1.786 0-.899-.32-1.754-1.304-1.754Zm1.325 3.828h-.021c-.352.6-.972.857-1.68.857-1.667 0-2.48-1.433-2.48-2.963 0-1.487.822-2.866 2.45-2.866.65 0 1.292.278 1.647.822h-.011.021v-2.78h1.52v7.637h-1.446v-.707ZM81.283 17.682c-.138-.77-.47-1.176-1.208-1.176-.964 0-1.24.749-1.262 1.176h2.47Zm-2.47.963c.042.963.513 1.402 1.359 1.402.609 0 1.1-.375 1.198-.717h1.336c-.428 1.305-1.336 1.861-2.588 1.861-1.744 0-2.825-1.198-2.825-2.91 0-1.657 1.144-2.92 2.825-2.92 1.882 0 2.793 1.583 2.684 3.284h-3.989ZM87.818 19.736h1.797c.663 0 1.24-.215 1.24-1.006 0-.78-.492-1.093-1.208-1.093h-1.83v2.099Zm0-3.243h1.7c.588 0 1.026-.267 1.026-.908 0-.729-.556-.878-1.152-.878h-1.574v1.786Zm-1.68-3.09h3.594c1.455 0 2.44.47 2.44 1.893 0 .749-.375 1.272-1.039 1.594.93.267 1.401.983 1.401 1.936 0 1.55-1.316 2.213-2.695 2.213h-3.7v-7.637ZM97.002 18.334c-.256.225-.791.236-1.262.32-.471.098-.899.258-.899.815 0 .566.44.706.93.706 1.189 0 1.23-.942 1.23-1.274v-.567Zm-3.51-1.123c.087-1.422 1.36-1.85 2.6-1.85 1.102 0 2.429.245 2.429 1.572v2.877c0 .503.056 1.006.193 1.23h-1.541a2.27 2.27 0 0 1-.106-.534c-.481.502-1.189.685-1.862.685-1.05 0-1.885-.524-1.885-1.659 0-1.251.944-1.55 1.885-1.68.93-.138 1.797-.105 1.797-.728 0-.65-.449-.747-.984-.747-.577 0-.951.235-1.005.834h-1.52ZM99.805 15.508h1.443v1.028h.022c.277-.696 1.027-1.176 1.765-1.176.106 0 .235.02.331.052v1.413a2.727 2.727 0 0 0-.544-.055c-1.112 0-1.498.804-1.498 1.777v2.492h-1.52v-5.53ZM107.698 17.457c-.097-.62-.492-.951-1.124-.951-.974 0-1.294.984-1.294 1.796 0 .791.309 1.744 1.261 1.744.708 0 1.112-.45 1.209-1.124h1.465c-.192 1.467-1.209 2.27-2.663 2.27-1.669 0-2.79-1.177-2.79-2.836 0-1.723 1.026-2.995 2.822-2.995 1.305 0 2.504.684 2.599 2.096h-1.485ZM113.844 17.682c-.139-.77-.472-1.176-1.209-1.176-.963 0-1.241.749-1.262 1.176h2.471Zm-2.471.963c.043.963.513 1.402 1.358 1.402.61 0 1.101-.375 1.198-.717h1.337c-.427 1.305-1.337 1.861-2.588 1.861-1.745 0-2.824-1.198-2.824-2.91 0-1.657 1.145-2.92 2.824-2.92 1.882 0 2.791 1.583 2.684 3.284h-3.989ZM116.303 13.402h1.519v7.637h-1.519v-7.637ZM121.706 20.047c1.036 0 1.347-.889 1.347-1.765 0-.89-.311-1.775-1.347-1.775-1.028 0-1.338.886-1.338 1.775 0 .876.31 1.765 1.338 1.765Zm0-4.685c1.742 0 2.866 1.154 2.866 2.92 0 1.754-1.124 2.91-2.866 2.91-1.734 0-2.858-1.156-2.858-2.91 0-1.766 1.124-2.92 2.858-2.92ZM125.553 15.508h1.443v.771h.033c.385-.62 1.048-.92 1.69-.92 1.615 0 2.022.909 2.022 2.278v3.402h-1.519v-3.123c0-.91-.267-1.36-.972-1.36-.826 0-1.178.461-1.178 1.584v2.9h-1.519v-5.531ZM135.391 18.334c-.258.225-.792.236-1.261.32-.471.098-.9.258-.9.815 0 .566.438.706.931.706 1.189 0 1.23-.942 1.23-1.274v-.567Zm-3.508-1.123c.085-1.422 1.358-1.85 2.599-1.85 1.101 0 2.428.245 2.428 1.572v2.877c0 .503.054 1.006.192 1.23h-1.541a2.382 2.382 0 0 1-.106-.534c-.481.502-1.185.685-1.862.685-1.047 0-1.88-.524-1.88-1.659 0-1.251.94-1.55 1.88-1.68.932-.138 1.798-.105 1.798-.728 0-.65-.449-.747-.984-.747-.578 0-.954.235-1.005.834h-1.519ZM18.25.136h-5.465v12.817c0 2.92-1.07 4.145-3.549 4.145-2.639 0-3.772-1.256-3.772-4.177V.136H0v12.408c0 2.545.253 3.927.976 5.247 1.381 2.544 4.082 3.768 8.165 3.768 3.078 0 5.212-.629 6.783-2.073.944-.909 1.603-2.043 1.98-3.36.25-.974.346-1.886.346-3.55V.137Zm32.38 11.81h4.177c2.229 0 3.236.754 3.236 2.422 0 1.631-.976 2.385-3.11 2.385H50.63v-4.806Zm0-7.663h3.767c1.979 0 2.858.628 2.858 2.074 0 1.286-.974 2.009-2.732 1.978H50.63V4.283ZM45.16.136v20.92h10.712c2.544 0 4.21-.44 5.53-1.538 1.446-1.132 2.167-2.732 2.167-4.712 0-2.513-1.131-4.209-3.394-5.058l-.344-.125c1.822-.942 2.731-2.354 2.731-4.24 0-1.946-1.005-3.61-2.7-4.46-1.068-.532-2.481-.787-4.65-.787H45.16ZM33.881 1.824s.627 5.914.492 6.497c0 0-.135 1.432 2.017 6.586 2.151 5.153.76 1.614 2.553 5.69l.806 1.165.809-6.452c.13-2.33.09-6.14.09-6.14.131-.09.624-6.405.535-6.9-.089-.491-.046-2.194-.046-2.194-6.584-.27-8.064.268-8.064.268C28.235.03 22.813.03 22.813.03c-.313 1.122-.494 2.78-.447 3.316.044.539.134 1.345.044 2.733-.091 1.39.221 5.421.221 5.421l-.312-.086c.225 3.805-.088 9.63-.088 9.63h4.39c.223-.267 4.57-10.842 4.57-10.842 1.57-3.225 2.69-8.378 2.69-8.378Zm-3.496 11.022 4.03-.942.81.762-.449 1.434-4.391-1.254Z"})}),j1=s.section`
  margin: 50px 0 150px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      text-align: center;
      font-size: 2em;
      margin: 0;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: rgba(0, 0, 180, 0.1);
      backdrop-filter: blur(5px);
      margin-bottom: 40px;
    }
  }
  .logosGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    width: 70%;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    svg {
      fill: ${({theme:a})=>a.colors.text};
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #982a2a;
      border-radius: 5px;
      height: 100px;
      width: 100px;
    }
  }
`,y1=()=>{const a=c(l),n=r(a.code,h);return e.jsxs(j1,{children:[e.jsx("div",{className:"title",children:e.jsx("h3",{children:n.partnersTitle})}),e.jsxs("div",{className:"logosGrid",children:[e.jsx(m1,{}),e.jsx(x1,{}),e.jsx(p1,{}),e.jsx(w1,{}),e.jsx(u1,{}),e.jsx(g1,{}),e.jsx(v1,{}),e.jsx(Z1,{}),e.jsx(b1,{}),e.jsx(f1,{})]})]})},M1=s(d.h3)`
  margin: 0;
  animation: appearFromLeft 0.5s ease;
  margin-top: 100px;
  border: 1px solid white;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  perspective: 1000px;
  padding: 20px 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0);

  background-color: rgba(0, 0, 180, 0.1);

  font-size: 3em;
  @media screen and (max-width: 500px) {
    font-size: 2em;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.5em;
  }

  :hover {
    transform: scale(1.1);
    transition: 0.3s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`,T1=()=>{const a=c(l),n=r(a.code,h);return e.jsx(M1,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:S,exit:{opacity:0,x:-100},whileTap:{scale:.9},onMouseLeave:i=>{const t=i.target;t.style.transform="rotateY(0deg) rotateX(0deg)",t.style.transition="all 0.6s ease"},onMouseEnter:i=>{const t=i.target;t.style.transform="rotateY(0deg) rotateX(0deg)",t.style.transition="all 0.1s ease"},onMouseMove:i=>{const t=i.target,o=t.offsetLeft,b=t.offsetTop,m=i.pageX-o,v=i.pageY-b,f=t.offsetWidth,y=t.offsetHeight,w=40,Z=15,M=m/f*w-w/2,T=v/y*Z-Z/2;t.style.transform=`rotateY(${M}deg) rotateX(${T}deg)`,t.style.transition="all 0.1s ease"},children:n.mainTitle})},k1=u.breakpoints,V1=()=>{const a=x(k1.tablet),n=c(l),i=r(n.code,h);return e.jsxs(G,{smallerThanTablet:a,children:[e.jsx("div",{className:"greenCircle"}),e.jsx("div",{className:"yellowCircle"}),e.jsx(T1,{}),e.jsxs("section",{className:"descriptionAndDreams",children:[e.jsx(o1,{}),e.jsx(i1,{})]}),e.jsxs("section",{className:"blobsContainer",children:[e.jsx("div",{className:"title",children:e.jsxs("h3",{children:[i.studiesTitle," "]})}),h1.map((t,o)=>a?e.jsx(K,{blob:t},o):e.jsx(X,{blob:t},o))]}),e.jsx(y1,{})]})},I1=s.div`
  overflow: visible;
`,S1=()=>e.jsx(I1,{children:e.jsx(V1,{})});export{S1 as default};
