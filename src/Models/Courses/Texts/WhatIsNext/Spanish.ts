export const Spanish = `# **Introducción**

Next.js es un poderoso marco **basado en React** que facilita la creación de aplicaciones web rápidas y escalables. En esta publicación de blog, exploraremos algunas de las características clave de Next.js y cómo se pueden usar para crear aplicaciones web ricas y dinámicas. Esta publicación de blog está dirigida a lectores técnicos que desean ponerse al día con Next.js rápidamente, por lo que incluiremos muchos ejemplos de codificación e información práctica.

# Características clave de Next.js

## Representación del lado del servidor (SSR)

Next.js proporciona un enfoque único para la representación del lado del servidor (SSR) que facilita su implementación en cualquier proyecto. Con Next.js, SSR está habilitado de manera predeterminada, lo que significa que todas las páginas se procesan en el servidor a menos que se marquen explícitamente como procesadas por el cliente.

Cuando un cliente solicita una página, Next.js **obtendrá los datos necesarios y generará una página HTML en el servidor**. Esto permite que la página se represente por completo y se devuelva al cliente, lo que mejora el tiempo de carga inicial y el rendimiento general de la aplicación.

Uno de los beneficios clave de SSR es la mejora de la optimización de motores de búsqueda (SEO), ya que los motores de búsqueda pueden rastrear e indexar fácilmente el contenido de la página. Además, SSR proporciona una mejor accesibilidad y compatibilidad para clientes que no utilizan JavaScript.

#
#
#

\`\`\`jsx
importar React desde 'react';
importar { getServerSideProps } desde 'siguiente';

función Inicio ({datos}) {
   devolver (
     <div>
       <h1>{datos.título}</h1>
       <p>{datos.descripción}</p>
     </div>
   );
}

exportar la función asíncrona getServerSideProps() {
   const res = await fetch('https://api.example.com/data');
   datos constantes = esperar res.json();

   devolver {
     accesorios: {
       datos,
     },
   };
}

exportar Inicio predeterminado;
\`\`\`

En este ejemplo, estamos usando **\`getServerSideProps\`** para obtener datos de una API y pasarlos al componente **\`Home\`** como accesorios. Cuando se solicita la página, Next.js obtendrá los datos y presentará el componente en el servidor antes de enviarlo al cliente.




## **División automática de código**

Next.js incluye una característica poderosa llamada división automática de código, que le permite dividir el código de su aplicación en partes más pequeñas. Esto significa que solo se carga el código que se requiere para una página en particular, lo que reduce el tiempo de carga inicial de la aplicación y mejora el rendimiento.

De forma predeterminada, Next.js dividirá automáticamente el código en función de las rutas de la página, lo que significa que cada página solo cargará el código que necesita. Esto facilita la creación de aplicaciones a gran escala que se pueden cargar de forma rápida y eficiente.

## **Generación de sitios estáticos (SSG)**

Next.js brinda soporte para la generación de sitios estáticos (SSG), lo que le permite renderizar previamente las páginas en el momento de la compilación y servirlas como archivos estáticos. Esto puede resultar en tiempos de carga aún más rápidos para el usuario final, ya que el contenido de la página se entrega directamente desde el servidor.

Con SSG, Next.js generará páginas HTML estáticas para cada página de su aplicación en el momento de la compilación, según los datos disponibles en ese momento. Este enfoque puede ser particularmente útil para aplicaciones con contenido en gran medida estático, como blogs o páginas de destino.



\`\`\`jsx
importar React desde 'react';
importar { getStaticProps } desde 'siguiente';

función Inicio ({datos}) {
   devolver (
     <div>
       <h1>{datos.título}</h1>
       <p>{datos.descripción}</p>
     </div>
   );
}

exportar la función asíncrona getStaticProps() {
   const res = await fetch('https://api.example.com/data');
   datos constantes = esperar res.json();

   devolver {
     accesorios: {
       datos,
     },
   };
}

exportar Inicio predeterminado;
\`\`\`


En este ejemplo, usamos **getStaticProps** para obtener datos de una API y pasarlos al componente **Inicio** como accesorios. Next.js generará una página HTML estática en el momento de la compilación que incluye los datos obtenidos. Cuando se solicita la página, el HTML pregenerado se envía al cliente, lo que resulta en cargas de página más rápidas y un mejor rendimiento.



## **Rutas API**

Next.js incluye un sistema de enrutamiento de API incorporado, que le permite crear fácilmente puntos finales de API para su aplicación. Con las rutas API, puede definir funciones sin servidor que se pueden usar para obtener datos, manipular datos o realizar otras operaciones de back-end.

Las rutas API se pueden usar para crear API RESTful y GraphQL, lo que facilita la creación de una funcionalidad del lado del servidor flexible y escalable. Además, las rutas API se pueden usar para conectarse a API externas, lo que le permite crear aplicaciones complejas que pueden interactuar con una variedad de servicios.


\`\`\`jsx
// paginas/api/hola.js
exportar controlador de función predeterminado (req, res) {
   res.status(200).json({mensaje: '¡Hola, mundo!' });
}
\`\`\`
En este ejemplo, estamos creando un extremo de API en **/api/hello** que devuelve una respuesta JSON con un mensaje de saludo simple. La función **handler** recibe un objeto **req** (solicitud) y **res** (respuesta) que se pueden usar para manejar solicitudes entrantes y enviar respuestas.

## **Complementos Next.js**

Next.js incluye un poderoso sistema de complementos, que le permite ampliar la funcionalidad del marco con facilidad. Hay muchos complementos disponibles que pueden hayude con tareas como la optimización del rendimiento, la optimización de imágenes y más.

Los complementos se pueden instalar usando npm o yarn, y se pueden integrar fácilmente en su aplicación con una configuración mínima. Esto facilita agregar funcionalidad adicional a su aplicación Next.js sin tener que escribir código complejo.



## **Sitios web famosos que usan Next.js**

- [x] **Hulu** - Servicio de transmisión de video
- [x] **Twitch**: plataforma de transmisión en vivo para juegos y deportes electrónicos
- [x] **Nike** - Marca de ropa y accesorios deportivos
- [x] **Documentos GitHub** - Documentación para la plataforma GitHub
- [x] **Documentos de TypeScript** - Documentación para el lenguaje TypeScript


## **Más lectura**

Si está interesado en obtener más información sobre Next.js, aquí hay algunos recursos para consultar:

- La documentación de Next.js: **[https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)**
- Un tutorial sobre cómo crear un blog con Next.js: **[https://nextjs.org/learn/basics/create-nextjs-app](https://nextjs.org/learn/basics/create-nextjs- aplicación)**
- El blog oficial de Next.js: **[https://nextjs.org/blog/](https://nextjs.org/blog/)**

# **Conclusión**

Next.js es un marco poderoso que ofrece una gama de características y beneficios para crear aplicaciones web rápidas y escalables. Su representación del lado del servidor, la división automática de código y la generación de sitios estáticos lo convierten en una excelente opción para crear aplicaciones web de alto rendimiento. Su sistema de enrutamiento API incorporado también facilita la creación de funciones sin servidor y la conexión a API externas. Si está buscando crear una aplicación web rápida y escalable, definitivamente vale la pena considerar Next.js.
`;
