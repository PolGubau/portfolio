export const Catalan = `
# **Typescript**

Typescript és un **superconjunt de JavaScript** que afegeix **escriptura estàtica** a l'idioma. Va ser desenvolupat per Microsoft i és àmpliament utilitzat per desenvolupadors de tot el món. Typescript és un projecte de codi obert i té una gran comunitat de col·laboradors.

![https://i.stack.imgur.com/X6xWb.gif](https://i.stack.imgur.com/X6xWb.gif)
## **Què és l'escriptura estàtica?**

A JavaScript, les variables s'escriuen **dinàmicament**. Això vol dir que el tipus d'una variable es determina en temps d'execució. Per exemple, el codi següent és vàlid en JavaScript:

\`\`\`js
let message = 'Hola món';
missatge = 123;
\`\`\`

En aquest exemple, a la variable **missatge** se li assigna primer una cadena i després se'l reassigna un número. Això és vàlid a JavaScript perquè el tipus de **missatge** es determina en temps d'execució. Tanmateix, això pot provocar errors al vostre codi perquè potser no espereu que **missatge** es torni a assignar a un número.

Typescript afegeix **escriptura estàtica** a l'idioma. Això vol dir que el tipus d'una variable es determina en temps de compilació. Per exemple, el codi següent no és vàlid a Typescript:

\`\`\`ts
let message = 'Hola món';
missatge = 123;
\`\`\`

En aquest exemple, a la variable **missatge** se li assigna primer una cadena i després se'l reassigna un número. Això no és vàlid a Typescript perquè el tipus de **missatge** es determina en temps de compilació. Això vol dir que Typescript generarà un error si intenteu reassignar **missatge** a un número.

## **Funcions de mecanografia**

Typescript afegeix moltes funcions noves a JavaScript, com ara:

- **Interfícies:** Les interfícies us permeten definir la forma d'un objecte.
- **Classes:** Les classes us permeten definir classes i mètodes.
- **Genèrics:** els genèrics us permeten definir funcions que funcionen amb una varietat de tipus.
- **Enumeracions:** Les enumeracions us permeten definir un conjunt de constants anomenades.

## **Typescript vs JavaScript**

JavaScript i Typescript són molt semblants. De fet, Typescript és un superconjunt de JavaScript, el que significa que tot el codi JavaScript vàlid també és un codi Typescript vàlid. Tanmateix, hi ha algunes diferències entre les dues llengües. Aquestes són algunes de les diferències més importants:

- **Escriptura estàtica:** La mecanografia afegeix l'escriptura estàtica a l'idioma. Això vol dir que el tipus d'una variable es determina en temps de compilació.
- **Tipus opcionals:** Typescript us permet definir tipus opcionals mitjançant l'operador **?**. Això vol dir que a una variable se li pot assignar un valor de qualsevol tipus, o se li pot assignar el valor **indefinit**.
- **Type assertions:** Typescript us permet utilitzar **type assertions** per dir al compilador que una variable té un tipus específic. Les afirmacions de tipus són similars a les versions de tipus en altres idiomes.
- **Interfícies:** Typescript us permet definir interfícies per definir la forma d'un objecte.

## **Per què utilitzar Typescript?**

Hi ha moltes raons per les quals potser voldreu utilitzar Typescript a la vostra aplicació. Aquests són alguns dels motius més comuns:

- **Millor finalització del codi:** Typescript proporciona una millor finalització del codi que JavaScript.
- **Millor verificació de tipus:** Typescript proporciona una millor comprovació de tipus que JavaScript.
- **Comunitat gran:** Typescript té una gran comunitat de col·laboradors i usuaris, i és àmpliament utilitzat pels desenvolupadors de tot el món.

## **Typescript vs Flow**

Typescript i Flow són dos sistemes d'escriptura estàtica populars per a JavaScript. Tots dos són àmpliament utilitzats per desenvolupadors de tot el món. Tant Typescript com Flow són projectes de codi obert i tenen grans comunitats de col·laboradors.

La diferència principal entre Typescript i Flow és que Typescript és un superconjunt de JavaScript, mentre que Flow és un **controlador de tipus estàtic** per a JavaScript. Això vol dir que tot el codi JavaScript vàlid també és codi Typescript vàlid, però no tots els codis JavaScript vàlids són codi de flux vàlid.`;
