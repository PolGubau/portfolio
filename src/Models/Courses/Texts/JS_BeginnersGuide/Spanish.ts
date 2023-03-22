export const Spanish = `# **JavaScript: una guía para principiantes**

JavaScript es un lenguaje de programación que se utiliza para agregar interactividad y comportamiento dinámico a los sitios web. Es un lenguaje potente y flexible que se ha convertido en una herramienta esencial para los desarrolladores web. En esta guía, cubriremos los conceptos básicos de JavaScript y brindaremos algunos ejemplos de cómo se puede usar en el desarrollo web.

## **Sintaxis básica**


JavaScript es un lenguaje de programación interpretado de alto nivel que se usa ampliamente en el desarrollo web. Es un lenguaje versátil que puede usarse tanto del lado del cliente como del lado del servidor, y se ha convertido en una herramienta esencial para crear aplicaciones web dinámicas e interactivas.

La sintaxis de JavaScript es relativamente fácil de aprender y comprender, especialmente para quienes están familiarizados con los conceptos de programación. Estos son algunos puntos clave sobre la sintaxis de JavaScript:

### **Variables**

En JavaScript, puede declarar variables utilizando las palabras clave **\`var\`**, **\`let\`** o **\`const\`**. **\`var\`** es la forma más antigua de declarar variables, mientras que **\`let\`** y **\`const\`** se introdujeron en ES6. **\`let\`** se usa para variables que se pueden reasignar, mientras que **\`const\`** se usa para variables que no se pueden reasignar.

Ejemplo:

\`\`\`javascript
var nombre = "Juan";
sea edad = 30;
constante pi = 3,14;
\`\`\`

### **Tipos de datos**

JavaScript tiene seis tipos de datos primitivos: **\`number\`**, **\`string\`**, **\`boolean\`**, **\`null\`**, **indefinido**, y **símbolo**. También tiene un tipo de datos complejo: **\`object\`**.

Ejemplo:

\`\`\`mecanografiado
sea num = 5; // número
let nombre = "Juan"; // cadena
let esVerdadero = verdadero; // booleano
dejar nada = nulo; // nulo
let desconocido = indefinido; // indefinido
let sym = Símbolo("foo"); // símbolo
let obj = { // objeto
   nombre: "Juan",
   edad: 30
};
\`\`\`

### **Operadores**

JavaScript admite una variedad de operadores, incluidos los operadores aritméticos, de asignación, de comparación, lógicos y bit a bit.

Ejemplo:

\`\`\`menos
sea a = 5;
sea b = 3;
sea c = a + b; // suma
sea d = a * b; // multiplicacion
sea e = a > b; // comparación
sea f = (a < b) || (a === b); // lógico
sea g = 0b1010 & 0b1100; // bit a bit
\`\`\`

### **Declaraciones condicionales**

JavaScript usa declaraciones **\`if\`**, **\`else if\`** y **\`else\`** para realizar la lógica condicional.

Ejemplo:

\`\`\`javascript
sea num = 5;
si (num > 0) {
   console.log("El número es positivo.");
} si no (num < 0) {
   console.log("El número es negativo.");
} demás {
   console.log("El número es cero.");
}
\`\`\`

### **Bucles**

JavaScript admite bucles **\`for\`**, **\`while\`** y **\`do-while\`** para operaciones iterativas.

Ejemplo:

\`\`\`javascript
para (sea i = 0; i < 5; i++) {
   consola.log(i);
}

sea j = 0;
mientras (j < 5) {
   consola.log(j);
   j++;
}

sea k = 0;
hacer {
   consola.log(k);
   k++;
} mientras (k < 5);
\`\`\`

### **Funciones**

Las funciones de JavaScript le permiten encapsular piezas de código reutilizables.

Ejemplo:

\`\`\`javascript
función decirHola(nombre) {
   console.log("¡Bienvenido, " + nombre + "!");
}

decirHola("Juan");
\`\`\`



# Usos de Javascript
JavaScript es un lenguaje de programación versátil que se puede usar para una **variedad de propósitos**, desde la creación de aplicaciones web y extensiones de navegador hasta la creación de aplicaciones móviles y de escritorio. Su principal caso de uso, sin embargo, es para secuencias de comandos del lado del cliente en la web, donde se utiliza para crear interfaces de usuario dinámicas e interactivas.

Uno de los casos de uso más populares de JavaScript es la **creación de aplicaciones web, tanto del lado del cliente como del lado del servidor**.

## **Lado del cliente vs. Lado del servidor**

JavaScript se puede usar tanto en el lado del cliente como en el lado del servidor.

### **Lado del cliente**

En el lado del cliente, JavaScript se puede usar para agregar interactividad a las páginas web, validar la entrada del usuario y realizar el procesamiento de datos en tiempo real. Por ejemplo, JavaScript se puede usar para crear formularios que se actualizan dinámicamente según la entrada del usuario o para crear visualizaciones de datos que cambian en respuesta a las interacciones del usuario.

Ejemplo de código javascript en el front-end:
\`\`\`javascript
botón const = document.querySelector('botón');
button.addEventListener('clic', () => {
   console.log('¡Me hiciste clic!');
});
\`\`\`
  


### **Lado del servidor**

En el lado del servidor, JavaScript se puede usar con tecnologías como Node.js para crear aplicaciones web que pueden manejar grandes cantidades de datos y solicitudes de usuarios. Esto puede incluir API web que proporcionan datos a otras aplicaciones, aplicaciones de chat en tiempo real y más.

Ejemplo de código javascript en el back-end:
\`\`\`javascript
const expreso = require('expreso');
const aplicación = express();

app.get('/', (requerido, res) => {
   res.send('¡Hola mundo!');
});

aplicación.escuchar(3000, () => {
   console.log('Servidor ejecutándose en el puerto 3000');
});
\`\`\`



JavaScript también se usa en la creación de aplicaciones móviles y de escritorio, utilizando marcos como React Native, Electron e Ionic. Estos marcos permiten a los desarrolladores crear aplicaciones similares a las nativas utilizando JavaScript y otras tecnologías web, sin la necesidad de un amplio conocimiento de las plataformas específicas.
lenguajes y marcos ic.




## **Desarrollo web**

JavaScript es el lenguaje de programación más popular para el desarrollo web y se utiliza para crear aplicaciones web dinámicas e interactivas. Se utiliza para agregar interactividad a las páginas web, validar la entrada del usuario y realizar el procesamiento de datos en tiempo real.

### **Páginas web dinámicas**

JavaScript se utiliza para crear páginas web dinámicas e interactivas. Por ejemplo, JavaScript se puede usar para crear formularios que se actualizan dinámicamente según la entrada del usuario o para crear visualizaciones de datos que cambian en respuesta a las interacciones del usuario.

### **API web**

JavaScript también se usa para crear API web que proporcionan datos a otras aplicaciones. Por ejemplo, la API de Twitter es una API web que permite a los desarrolladores acceder e interactuar con los datos de Twitter.

### **Aplicaciones en tiempo real**

JavaScript también se puede utilizar para crear aplicaciones en tiempo real, como aplicaciones de chat y juegos interactivos. Por ejemplo, el popular juego Agar.io es un juego en tiempo real que se basa en JavaScript para manejar las interacciones del usuario y actualizar el estado del juego en tiempo real.

## **Extensiones del navegador**

JavaScript también se puede usar para crear extensiones de navegador, que son pequeños programas que personalizan la experiencia del navegador. Las extensiones del navegador se pueden usar para agregar nuevas funciones al navegador, como bloqueadores de anuncios, administradores de contraseñas y más.

# ¿Por qué Javascript es tan popular?
JavaScript es el lenguaje de programación más popular del mundo y se utiliza para crear aplicaciones web dinámicas e interactivas. Se utiliza para agregar interactividad a las páginas web, validar la entrada del usuario y realizar el procesamiento de datos en tiempo real.

## **Popularidad**

JavaScript es el lenguaje de programación más popular del mundo y se utiliza para crear aplicaciones web dinámicas e interactivas. Se utiliza para agregar interactividad a las páginas web, validar la entrada del usuario y realizar el procesamiento de datos en tiempo real.

## **Desarrollo web**

JavaScript es el lenguaje de programación más popular para el desarrollo web y se utiliza para crear aplicaciones web dinámicas e interactivas. Se utiliza para agregar interactividad a las páginas web, validar la entrada del usuario y realizar el procesamiento de datos en tiempo real.

### **Páginas web dinámicas**

JavaScript se utiliza para crear páginas web dinámicas e interactivas. Por ejemplo, JavaScript se puede usar para crear formularios que se actualizan dinámicamente según la entrada del usuario o para crear visualizaciones de datos que cambian en respuesta a las interacciones del usuario.

### **API web**

Otro caso de uso popular para JavaScript es la creación de API web que proporcionan datos a otras aplicaciones. Por ejemplo, la API de Twitter es una API web que permite a los desarrolladores acceder e interactuar con los datos de Twitter.

### **Aplicaciones en tiempo real**

Las aplicaciones de chat y los juegos interactivos también son casos de uso populares para JavaScript. Por ejemplo, el popular juego Agar.io es un juego en tiempo real que se basa en JavaScript para manejar las interacciones del usuario y actualizar el estado del juego en tiempo real.

### **Extensiones del navegador**

Las extensiones del navegador son pequeños programas que personalizan la experiencia del navegador. Las extensiones del navegador se pueden usar para agregar nuevas funciones al navegador, como bloqueadores de anuncios, administradores de contraseñas y más.

### **Aplicaciones móviles y de escritorio**

JavaScript también se usa en la creación de aplicaciones móviles y de escritorio, utilizando marcos como React Native, Electron e Ionic. Estos marcos permiten a los desarrolladores crear aplicaciones similares a las nativas usando JavaScript y otras tecnologías web, sin la necesidad de un amplio conocimiento de los lenguajes y marcos específicos de la plataforma.

#Javascript moderno
JavaScript es un lenguaje de programación versátil que se puede utilizar para una variedad de propósitos, desde la creación de aplicaciones web y extensiones de navegador hasta la creación de aplicaciones móviles y de escritorio. Su principal caso de uso, sin embargo, es para secuencias de comandos del lado del cliente en la web, donde se utiliza para crear interfaces de usuario dinámicas e interactivas.

## Marcos

Los marcos de JavaScript son un conjunto de herramientas que le permiten crear aplicaciones web de manera más rápida y sencilla. Proporcionan un conjunto de componentes preconstruidos que puede usar para crear una aplicación web y manejar tareas comunes como enrutamiento, administración de estado y obtención de datos.

### **Reaccionar**

React es una biblioteca de JavaScript para crear interfaces de usuario. Se utiliza para crear aplicaciones web dinámicas e interactivas, y es uno de los marcos de JavaScript más populares.
Los casos de uso populares para React incluyen la creación de aplicaciones de una sola página (SPA), que son aplicaciones web que cargan una sola página HTML y actualizan dinámicamente el contenido a medida que el usuario interactúa con la aplicación.

\`\`\`javascript
importar React desde 'react';
importar ReactDOM desde 'react-dom';
  
Aplicación constante = () => {
   devolver (
     <div>
       <h1>¡Hola Mundo!</h1>
     </div>
   );
};
exportar la aplicación predeterminada;
\`\`\`
Arriba hay un componente React simple que muestra un encabezado en la página. Los componentes de React se escriben usando JSX, una sintaxis que le permite escribir código similar a HTML dentro de JavaScript.


Documentación: https://reactjs.org/docs/getting-started.html

**Angular**

Angular es un marco JavaScript de código abierto popular para crear aplicaciones web. Fue creado por Google y lanzado por primera vez en 2010 como AngularJS, y luego reescrito en TypeScript como Angular en 2016. Angular es conocido por su solidez, escalabilidad y capacidad para manejar aplicaciones complejas con facilidad. Sigue la arquitectura Model-View-Controller (MVC) y proporciona un conjunto completo de herramientas y funciones para crear aplicaciones web modernas y dinámicas. Algunas de las características clave de Angular incluyen enlace de datos bidireccional, inyección de dependencia, directivas y componentes. A menudo se compara con otros marcos de JavaScript populares como React y Vue, pero tiene sus propias ventajas y casos de uso únicos.

\`\`\`javascript
importar {Componente} desde '@angular/core';
  
@Componente({
   selector: 'raíz de la aplicación',
   templateUrl: './app.component.html',
   URL de estilo: ['./app.component.css']
})
exportar clase AppComponent {
   título = 'aplicación';
}
\`\`\`
Arriba hay un componente angular simple que muestra un encabezado en la página. Los componentes angulares se escriben con TypeScript, un superconjunto de JavaScript que le permite escribir código fuertemente tipado.

Documentación: https://angular.io/docs

### **Vue**

Vue.js (a menudo denominado Vue) es un marco JavaScript de código abierto para crear interfaces de usuario y aplicaciones de una sola página. Fue creado por Evan You y lanzado por primera vez en febrero de 2014. Vue es conocido por su simplicidad, facilidad de uso y flexibilidad, lo que lo convierte en una opción popular entre los desarrolladores de todos los niveles. Está diseñado para ser adoptado de forma incremental, lo que significa que los desarrolladores pueden usar tanto o tan poco del marco como lo necesiten. Vue a menudo se compara con otros marcos de JavaScript populares como React y Angular, pero tiene sus propias características y ventajas únicas.

\`\`\`javascript
<plantilla>
   <div id="aplicación">
     <h1>{{ mensaje }}</h1>
   </div>
</plantilla>
  
<script>
exportación predeterminada {
   nombre: 'aplicación',
   datos () {
     devolver {
       mensaje: '¡Hola Mundo!'
     }
   }
}
</script>
\`\`\`
Arriba hay un componente Vue simple que muestra un encabezado en la página. Los componentes de Vue se escriben utilizando plantillas similares a HTML y JavaScript.

Documentación: https://vuejs.org/v2/guide/




## **Sitios web famosos que usan JavaScript**

Algunos de los sitios web más populares del mundo utilizan mucho JavaScript. Aquí hay unos ejemplos:

- [x] **Facebook**: Facebook usa JavaScript para crear una interfaz de usuario dinámica e interactiva. El sitio utiliza una gran cantidad de código JavaScript personalizado para manejar interacciones como me gusta, comentarios y notificaciones.
- [x] **Google**: Google utiliza JavaScript para potenciar muchas de sus aplicaciones web, incluidas Gmail, Google Maps y Google Drive. Estas aplicaciones son altamente interactivas y dependen en gran medida de JavaScript para brindar una experiencia de usuario perfecta.
- [x] **Twitter**: Twitter usa JavaScript para crear una fuente en tiempo real de tweets y manejar interacciones como retweets, me gusta y respuestas.

## **Características avanzadas**

JavaScript es un lenguaje versátil que tiene muchas funciones avanzadas que lo convierten en una herramienta poderosa para el desarrollo web. Aquí hay unos ejemplos:

### **Aplicaciones de una sola página (SPA)**

Las aplicaciones de una sola página son aplicaciones web que cargan una sola página HTML y actualizan dinámicamente el contenido a medida que el usuario interactúa con la aplicación. Los marcos de JavaScript como Angular, React y Vue se usan comúnmente para construir SPA.

### **Representación del lado del servidor (SSR)**

La representación del lado del servidor es el proceso de generar HTML en el servidor y enviarlo al cliente, en lugar de depender de JavaScript para representar el contenido. Esto puede mejorar el rendimiento y el SEO. Next.js y Nuxt.js son marcos populares que admiten SSR.

### **Generadores de sitios estáticos (SSG)**

Los generadores de sitios estáticos son herramientas que generan páginas HTML estáticas en el momento de la compilación, en lugar de depender de un servidor para generar HTML dinámicamente. Esto puede mejorar el rendimiento y reducir los costos de hospedaje. Gatsby y Hugo son SSG populares que usan JavaScript.

## **Más recursos**

Si está interesado en obtener más información sobre JavaScript, aquí hay algunos recursos para consultar:

- **[Red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - Una guía completa de JavaScript de los creadores del navegador Firefox.
- **[JavaScript.info](https://javascript.info/)** - Un tutorial de JavaScript moderno y detallado.
- **[Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)** - Un curso práctico de JavaScript para principiantes.

En conclusión, JavaScript es un lenguaje poderoso y versátil que es esencial para el desarrollo web. Ya sea que esté creando un sitio web simple o una aplicación web compleja, JavaScript tiene las herramientas y características que necesita para hacer el trabajo.
`;