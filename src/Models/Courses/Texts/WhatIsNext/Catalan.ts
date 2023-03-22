export const Catalan = `# **Introducció**

Next.js és un potent marc **basat en React** que facilita la creació d'aplicacions web ràpides i escalables. En aquesta publicació del bloc, explorarem algunes de les característiques clau de Next.js i com es poden utilitzar per crear aplicacions web riques i dinàmiques. Aquesta publicació del bloc està adreçada a lectors tècnics que vulguin posar-se al dia ràpidament amb Next.js, de manera que inclourem molts exemples de codificació i informació pràctica.

# Característiques clau de Next.js

## Representació del costat del servidor (SSR)

Next.js ofereix un enfocament únic per a la representació del costat del servidor (SSR) que facilita la seva implementació en qualsevol projecte. Amb Next.js, SSR està habilitat de manera predeterminada, el que significa que totes les pàgines es representen al servidor tret que es marquin explícitament com a renderitzades pel client.

Quan un client sol·licita una pàgina, Next.js **obté les dades necessàries i generarà una pàgina HTML al servidor**. Això permet que la pàgina es mostri completament i es torni al client, millorant el temps de càrrega inicial i el rendiment general de l'aplicació.

Un dels avantatges clau de SSR és la millora de l'optimització de motors de cerca (SEO), ja que els motors de cerca poden rastrejar i indexar fàcilment el contingut de la pàgina. A més, SSR ofereix una millor accessibilitat i suport per als clients que no són JavaScript.

#
#
#

\`\`\`jsx
importar Reaccionar des de "reaccionar";
importar { getServerSideProps } de 'següent';

funció Inici ({ dades }) {
   tornar (
     <div>
       <h1>{data.title}</h1>
       <p>{data.description}</p>
     </div>
   );
}

exportar la funció asíncrona getServerSideProps() {
   const res = await fetch('https://api.example.com/data');
   const data = await res.json();

   tornar {
     atrezzo: {
       dades,
     },
   };
}

exportar Inici predeterminat;
\`\`\`

En aquest exemple, estem utilitzant **\`getServerSideProps\`** per obtenir dades d'una API i passar-les al component **\`Home\`** com a accessoris. Quan es sol·licita la pàgina, Next.js recuperarà les dades i representarà el component al servidor abans d'enviar-lo al client.




## **Divisió automàtica del codi**

Next.js inclou una funció potent anomenada divisió automàtica de codi, que us permet dividir el codi de l'aplicació en fragments més petits. Això vol dir que només es carrega el codi que es requereix per a una pàgina concreta, reduint el temps de càrrega inicial de l'aplicació i millorant el rendiment.

De manera predeterminada, Next.js dividirà automàticament el codi en funció de les rutes de la pàgina, el que significa que cada pàgina només carregarà el codi que necessita. Això facilita la creació d'aplicacions a gran escala que es poden carregar de manera ràpida i eficient.

## **Generació de llocs estàtics (SSG)**

Next.js ofereix suport per a la generació de llocs estàtics (SSG), cosa que us permet renderitzar les pàgines prèviament en temps de creació i servir-les com a fitxers estàtics. Això pot provocar temps de càrrega encara més ràpids per a l'usuari final, ja que el contingut de la pàgina es publica directament des del servidor.

Amb SSG, Next.js generarà pàgines HTML estàtiques per a cada pàgina de la vostra aplicació en el moment de la creació, en funció de les dades disponibles en aquell moment. Aquest enfocament pot ser especialment útil per a aplicacions amb contingut en gran part estàtic, com ara blocs o pàgines de destinació.



\`\`\`jsx
importar Reaccionar des de "reaccionar";
importar { getStaticProps } de 'següent';

funció Inici ({ dades }) {
   tornar (
     <div>
       <h1>{data.title}</h1>
       <p>{data.description}</p>
     </div>
   );
}

exportar la funció asíncrona getStaticProps() {
   const res = await fetch('https://api.example.com/data');
   const data = await res.json();

   tornar {
     atrezzo: {
       dades,
     },
   };
}

exportar Inici predeterminat;
\`\`\`


En aquest exemple, estem utilitzant **getStaticProps** per obtenir dades d'una API i passar-les al component **Home** com a accessoris. Next.js generarà una pàgina HTML estàtica en el moment de la creació que inclou les dades obtingudes. Quan es sol·licita la pàgina, l'HTML pregenerat s'envia al client, el que resulta en una càrrega de pàgina més ràpida i un rendiment millorat.



## **Rutes API**

Next.js inclou un sistema d'encaminament API integrat, que us permet crear fàcilment punts finals d'API per a la vostra aplicació. Amb les rutes API, podeu definir funcions sense servidor que es poden utilitzar per obtenir dades, manipular dades o realitzar altres operacions de backend.

Les rutes d'API es poden utilitzar per crear API RESTful i GraphQL, cosa que facilita la creació de funcionalitats flexibles i escalables del costat del servidor. A més, les rutes API es poden utilitzar per connectar-se a API externes, cosa que us permet crear aplicacions complexes que poden interactuar amb una varietat de serveis.


\`\`\`jsx
// pages/api/hello.js
exporta el gestor de funcions predeterminat (req, res) {
   res.status(200).json({ missatge: 'Hola, món!' });
}
\`\`\`
En aquest exemple, estem creant un punt final de l'API a **/api/hello** que retorna una resposta JSON amb un missatge de salutació senzill. La funció **handler** rep un objecte **req** (sol·licitud) i **res** (resposta) que es pot utilitzar per gestionar les sol·licituds entrants i enviar respostes.

## **Connectors Next.js**

Next.js inclou un potent sistema de connectors, que us permet ampliar la funcionalitat del marc amb facilitat. Hi ha molts plugins ns disponibles que poden ajudar amb tasques com ara l'optimització del rendiment, l'optimització d'imatges i molt més.

Els connectors es poden instal·lar mitjançant npm o yarn i es poden integrar fàcilment a la vostra aplicació amb una configuració mínima. Això fa que sigui fàcil afegir funcionalitats addicionals a la vostra aplicació Next.js sense haver d'escriure codi complex.



## **Llocs web famosos que utilitzen Next.js**

- [x] **Hulu** - Servei de transmissió de vídeo
- [x] **Twitch** - Plataforma de transmissió en directe per a jocs i esports
- [x] **Nike** - Marca de roba i accessoris esportius
- [x] **GitHub Docs** - Documentació per a la plataforma GitHub
- [x] **TypeScript Docs** - Documentació per al llenguatge TypeScript


## **Més lectura**

Si esteu interessats a obtenir més informació sobre Next.js, aquí teniu alguns recursos per consultar:

- La documentació de Next.js: **[https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)**
- Un tutorial sobre com crear un bloc amb Next.js: **[https://nextjs.org/learn/basics/create-nextjs-app](https://nextjs.org/learn/basics/create-nextjs- aplicació)**
- El bloc oficial de Next.js: **[https://nextjs.org/blog/](https://nextjs.org/blog/)**

# **Conclusió**

Next.js és un marc potent que ofereix una sèrie de funcions i avantatges per crear aplicacions web ràpides i escalables. La seva representació al costat del servidor, la divisió automàtica del codi i la generació de llocs estàtics el converteixen en una opció fantàstica per crear aplicacions web d'alt rendiment. El seu sistema d'encaminament d'API integrat també facilita la creació de funcions sense servidor i la connexió a API externes. Si voleu crear una aplicació web ràpida i escalable, val la pena tenir en compte Next.js.
`;
