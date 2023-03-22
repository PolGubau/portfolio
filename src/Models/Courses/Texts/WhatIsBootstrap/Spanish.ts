export const Spanish = `# **Una introducción a Bootstrap**

Bootstrap es un marco front-end popular que se utiliza para crear sitios web receptivos y móviles. Fue desarrollado originalmente por Twitter y se lanzó como un proyecto de código abierto en 2011. Bootstrap es conocido por su facilidad de uso, compatibilidad entre navegadores y gran comunidad.

## **Primeros pasos con Bootstrap**

Bootstrap se basa en HTML, CSS y JavaScript. Para comenzar con Bootstrap, debe incluir los archivos CSS y JavaScript de Bootstrap en su archivo HTML:

\`\`\`html
<!DOCTYPEhtml>
<html lang="es">
<cabeza>
   <juego de caracteres meta="UTF-8">
   <title>Mi sitio web Bootstrap</title>
   <enlace rel="hoja de estilo" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</cabeza>
<cuerpo>

   <!-- Tu contenido va aquí -->

   <secuencia de comandos src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></secuencia de comandos>
   <secuencia de comandos src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></secuencia de comandos>
</cuerpo>
</html>

\`\`\`

En este ejemplo, incluimos el archivo Bootstrap CSS de un CDN y el archivo Bootstrap JavaScript junto con jQuery.

## **Los conceptos básicos de Bootstrap**

El núcleo de Bootstrap es su sistema de grillas y sus clases CSS. El sistema de cuadrícula se utiliza para crear un diseño receptivo para su sitio web. Las clases CSS se utilizan para dar estilo a sus elementos HTML.

### **El sistema de rejilla**

El sistema de cuadrícula en Bootstrap se basa en un diseño de 12 columnas. Para crear una cuadrícula, utiliza las clases **\`row\`** y **\`col\`**:

\`\`\`html
<div class="contenedor">
   <div clase="fila">
     <div class="col-sm-6">Columna 1</div>
     <div class="col-sm-6">Columna 2</div>
   </div>
</div>

\`\`\`

En este ejemplo, creamos una cuadrícula con dos columnas. La clase **\`container\`** se utiliza para contener la cuadrícula. La clase **\`row\`** se utiliza para crear una fila en la cuadrícula. La clase **\`col-sm-6\`** se usa para crear una columna que ocupa 6 de 12 columnas en pantallas pequeñas y superiores.

### **Clases CSS**

Bootstrap viene con una gran cantidad de clases CSS que puede usar para diseñar sus elementos HTML. Aquí hay unos ejemplos:

\`\`\`html
<button class="btn btn-primary">Botón principal</button>
<button class="btn btn-secundario">Botón secundario</button>

<div class="alert alert-success">Mensaje de éxito</div>
<div class="alert alerta-peligro">Mensaje de error</div>

<nav class="barra de navegación barra de navegación-expand-lg barra de navegación-luz bg-luz">
   <a class="navbar-brand" href="#">Mi sitio web</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación ">
     <span class="navbar-toggler-icon"></span>
   </botón>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="elemento de navegación activo">
         <a class="nav-link" href="#">Inicio</a>
       </li>
       <li class="elemento de navegación">
         <a class="nav-link" href="#">Acerca de</a>
       </li>
       <li class="elemento de navegación">
         <a class="nav-link" href="#">Contacto</a>
       </li>
     </ul>
   </div>
</nav>

\`\`\`

En este ejemplo, usamos la clase **\`btn\`** para crear botones, la clase **\`alert\`** para crear mensajes y la clase **\`navbar\`** para crear una barra de navegación.

## **Componentes**
Bootstrap también proporciona una serie de componentes preconstruidos que puede usar en su sitio web. Aquí hay unos ejemplos:

### **Carrusel**
El componente Carrusel le permite crear una presentación de diapositivas de imágenes o contenido.

\`\`\`html
<div id="carruselExampleIndicators" class="diapositiva del carrusel" data-ride="carrusel">
   <ol class="carrusel-indicadores">
     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
   </ol>
   <div class="carrusel-interior">
     <div class="carrusel-elemento activo">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1" alt="Primera diapositiva">
     </div>
     <div class="elemento-carrusel">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2" alt="Segunda diapositiva">
     </div>
     <div class="elemento-carrusel">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3" alt="Tercera diapositiva">
     </div>
   </div>
   <a class="carrusel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span class="carrusel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Anterior</span>
   </a>
   <a class="carrusel-control-siguiente" href="#carruselExampleIndicators" role="button" data-slide="siguiente">
     <span class="carrusel-control-siguiente-icono" aria-hidden="true"></span>
     <span class="sr-only">Siguiente</span>
   </a>
</div>

\`\`\`

En este ejemplo, usamos la clase **\`carrusel\`** para crear un carrusel. La clase **\`carousel-indicators\`** se utiliza para crear los indicadores de diapositivas. La clase **\`carousel-inner\`** se utiliza paracontienen las diapositivas. La clase **\`carousel-item\`** se usa para crear cada diapositiva. Las clases **\`carousel-control-prev\`** y **\`carousel-control-next\`** se utilizan para crear los botones anterior y siguiente.

### **Modales**

El componente Modal le permite crear una ventana emergente que muestra contenido.

\`\`\`html
<!-- Modo de activación del botón -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
   Lanzar modo de demostración
</botón>

<!-- Modales -->
<div class="desvanecimiento modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="contenido-modal">
       <div class="encabezado-modal">
         <h5 class="modal-title" id="exampleModalLabel">Título modal</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&veces;</span>
         </botón>
       </div>
       <div class="cuerpo-modal">
         Este es el cuerpo modal.
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secundario" data-dismiss="modal">Cerrar</button>
         <button type="button" class="btn btn-primary">Guardar cambios</button>
       </div>
     </div>
   </div>
</div>

\`\`\`

En este ejemplo, usamos la clase **\`modal\`** para crear un modal. Las clases **\`modal-header\`**, **\`modal-body\`** y **\`modal-footer\`** se utilizan para crear el encabezado, el cuerpo y el pie de página de el modal.

### **Acordeón**

El componente Acordeón le permite crear una sección de contenido contraíble.

\`\`\`html
<div id="acordeón">
   <div clase="tarjeta">
     <div class="card-header" id="headingOne">
       <h5 clase="mb-0">
         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Artículo de grupo plegable n.º 1
         </botón>
       </h5>
     </div>

     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
       <div class="cuerpo-de-tarjeta">
         Este es el contenido del primer acordeón.
       </div>
     </div>
   </div>
   <div clase="tarjeta">
     <div class="card-header" id="headingTwo">
       <h5 clase="mb-0">
         <button class="btn btn-link colapsado" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Artículo de grupo plegable n.º 2
         </botón>
       </h5>
     </div>
     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
       <div class="cuerpo-de-tarjeta">
         Este es el contenido del segundo acordeón.
       </div>
     </div>
   </div>
   <div clase="tarjeta">
     <div class="card-header" id="headingThree">
       <h5 clase="mb-0">
         <button class="btn btn-link colapsado" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           Artículo de grupo plegable n.º 3
         </botón>
       </h5>
     </div>
     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
       <div class="cuerpo-de-tarjeta">
         Este es el contenido del tercer acordeón.
       </div>
     </div>
   </div>
</div>

\`\`\`

En este ejemplo, usamos la clase **\`card\`** para crear una tarjeta. La clase **\`card-header\`** se utiliza para crear el encabezado de la tarjeta. La clase **\`card-body\`** se utiliza para crear el cuerpo de la tarjeta. La clase **\`collapse\`** se usa para crear una sección contraíble. La clase **\`show\`** se usa para mostrar la sección contraíble de forma predeterminada.



[Consulte la documentación de Bootstrap para obtener más información sobre los componentes de Bootstrap.](https://getbootstrap.com/docs/4.0/components/)

*[Haga clic aquí para ver la documentación de Bootstrap.](https://getbootstrap.com/docs/4.0/)*

`;
