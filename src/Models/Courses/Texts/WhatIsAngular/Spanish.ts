export const Spanish = `
# **Una introducción a Angular**

Angular es un marco de aplicación web popular que se utiliza para crear aplicaciones de una sola página (SPA) dinámicas e interactivas. Fue desarrollado por Google y lanzado por primera vez en 2010. Angular es conocido por su solidez, escalabilidad y facilidad de uso.

## **Empezando con Angular**

Antes de sumergirnos en Angular, analicemos rápidamente qué es y por qué es importante. Angular es un marco de JavaScript que se utiliza para crear aplicaciones web. Se basa en el patrón arquitectónico Model-View-Controller (MVC), que separa los datos, la presentación y la lógica de control de una aplicación.

Angular es importante porque simplifica el proceso de creación de aplicaciones web. Con Angular, puede crear código modular y mantenible que se puede probar y escalar fácilmente. Angular también viene con muchas funciones y herramientas integradas que facilitan la creación de aplicaciones complejas.

## **Los fundamentos de Angular**

En el núcleo de Angular está el módulo. Un módulo es un contenedor para un grupo de componentes, directivas, conductos y servicios relacionados. Para crear un módulo en Angular, usa el decorador **\`@NgModule\`**:

\`\`\`mecanografiado
importar {NgModule} desde '@angular/core';

@MóduloNg({
   declaraciones: [ /* componentes, directivas y conductos */ ],
   importaciones: [ /* otros módulos */ ],
   proveedores: [ /* servicios */ ],
   bootstrap: [ /* componente raíz */ ]
})
clase de exportación AppModule { }

\`\`\`

En este ejemplo, definimos un módulo llamado **\`AppModule\`**. La propiedad **\`declarations\`** es donde enumera todos los componentes, directivas y conductos que pertenecen al módulo. La propiedad **\`imports\`** es donde enumera todos los demás módulos de los que depende el módulo. La propiedad **\`providers\`** es donde enumera todos los servicios que proporciona el módulo. La propiedad **\`bootstrap\`** es donde especifica el componente raíz de la aplicación.

## **Componentes**

Los componentes son los componentes básicos de las aplicaciones de Angular. Un componente es una clase de TypeScript que contiene los datos y el comportamiento de una parte de la interfaz de usuario. Para crear un componente en Angular, utiliza el decorador **\`@Component\`**:

\`\`\`mecanografiado
importar {Componente} desde '@angular/core';

@Componente({
   selector: 'raíz de la aplicación',
   plantilla: '<h1>¡Hola, Angular!</h1>'
})
exportar clase AppComponent { }

\`\`\`

En este ejemplo, definimos un componente llamado **\`AppComponent\`**. La propiedad **\`selector\`** es donde especifica la etiqueta HTML o el atributo al que se adjuntará el componente. La propiedad **\`template\`** es donde especifica el marcado HTML del componente.

Para usar **\`AppComponent\`** en su HTML, simplemente agregue la etiqueta HTML o el atributo especificado en la propiedad **\`selector\`**:

\`\`\`html
<raíz de la aplicación></raíz de la aplicación>

\`\`\`

## **Servicios**

Los servicios se utilizan para proporcionar funcionalidad que se puede compartir entre componentes. Un servicio es una clase de TypeScript que contiene los datos y el comportamiento de un servicio en particular. Para crear un servicio en Angular, utiliza el decorador **\`@Injectable\`**:

\`\`\`mecanografiado
importar { Inyectable } desde '@angular/core';

@Inyectable({
   proporcionado en: 'raíz'
})
exportar clase DataService {
   obtener datos() {
     devuelve 'Algunos datos';
   }
}

\`\`\`

En este ejemplo, definimos un servicio llamado **\`DataService\`**. La propiedad **\`providedIn\`** es donde especifica el inyector raíz de la aplicación. El método **\`getData\`** es un método simple que devuelve algunos datos.

Para usar **\`DataService\`** en un componente, simplemente inyéctelo en el constructor del componente:

\`\`\`mecanografiado
importar {Componente} desde '@angular/core';
importar { DataService } desde './data.service';

@Componente({
   selector: 'raíz de la aplicación',
   plantilla: '{{ datos }}'
})
exportar clase AppComponent {
   datos: cadena;

   constructor (servicio de datos privado: servicio de datos) {
     estos.datos

\`\`\`

## **Inyección de dependencia**

La inyección de dependencia es un patrón de diseño que permite que una clase solicite dependencias de fuentes externas en lugar de crearlas ella misma. En Angular, la inyección de dependencia se usa para proporcionar nuevas instancias de servicios a los componentes.

Para inyectar un servicio en un componente, simplemente agréguelo como un parámetro en el constructor del componente:

\`\`\`mecanografiado
importar {Componente} desde '@angular/core';
importar { DataService } desde './data.service';

@Componente({
   selector: 'raíz de la aplicación',
   plantilla: '{{ datos }}'
})
exportar clase AppComponent {
   datos: cadena;

   constructor (servicio de datos privado: servicio de datos) {
     this.data = dataService.getData();
   }
}

\`\`\`

En este ejemplo, inyectamos **\`DataService\`** en **\`AppComponent\`**. El parámetro **\`dataService\`** se completa automáticamente con una instancia de la clase **\`DataService\`**. Luego usamos el método **\`getData\`** para obtener los datos del servicio y asignarlos a la propiedad **\`data\`**.

## **Plantillas**

Una plantilla es una vista que se utiliza para mostrar datos en la interfaz de usuario. En Angular, las plantillas se escriben usando un lenguaje de plantillas llamado HTML. HTML es un lenguaje de marcado que se utiliza para describir la estructura de una página web.

Para crear una plantilla en Angular, simplemente usa el marcado HTML:

\`\`\`html
<h1>¡Hola, Angular!</h1>

\`\`\`

En este ejemplo, creamos una plantilla simple que contiene un encabezado.

## **El enlace de datos**

El enlace de datos es el proceso de sincronización de datos entre la clase de componente y la plantilla. Hay cuatro formas de enlace de datos en Angular:

* **Interpolación:** la interpolación le permite mostrar datos en la plantilla.
* **Enlace de propiedad:** El enlace de propiedad le permite establecer el valor de las propiedades en la plantilla.
* **Enlace de eventos:** El enlace de eventos le permite escuchar eventos en la plantilla.
* **Enlace de datos bidireccional:** El enlace de datos bidireccional le permite vincular el valor de las propiedades en la plantilla a la clase de componente.

## Conclusión
  
En este artículo, aprendimos sobre Angular y cómo comenzar con él. También aprendimos sobre los conceptos básicos de Angular, incluidos módulos, componentes, servicios, inyección de dependencia, plantillas y enlace de datos.

## **Otras lecturas**

* [Documentación angular] (https://angular.io/docs)
* [Tutorial angular](https://angular.io/tutorial)
* [Hoja de trucos de Angular] (https://angular.io/guide/cheatsheet)
* [Guía de estilo angular] (https://angular.io/guide/styleguide)
* [CLI angular] (https://cli.angular.io/)
* [Material angular] (https://material.angular.io/)
      

`;
