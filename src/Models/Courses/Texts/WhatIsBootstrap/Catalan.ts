export const Catalan = `# **Una introducció a Bootstrap**

Bootstrap és un marc de front-end popular que s'utilitza per crear llocs web responsius i per a mòbils. Va ser desenvolupat originalment per Twitter i es va publicar com a projecte de codi obert el 2011. Bootstrap és conegut per la seva facilitat d'ús, compatibilitat entre navegadors i gran comunitat.

## **Com començar amb Bootstrap**

Bootstrap es basa en HTML, CSS i JavaScript. Per començar amb Bootstrap, heu d'incloure els fitxers CSS i JavaScript de Bootstrap al vostre fitxer HTML:

\`\`\`html
<!DOCTYPE html>
<html lang="ca">
<cap>
   <meta charset="UTF-8">
   <title>El meu lloc web Bootstrap</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</cap>
<cos>

   <!-- El teu contingut va aquí -->

   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</cos>
</html>

\`\`\`

En aquest exemple, incloem el fitxer Bootstrap CSS d'un CDN i el fitxer Bootstrap JavaScript juntament amb jQuery.

## **Els conceptes bàsics de Bootstrap**

Al nucli de Bootstrap hi ha el seu sistema de graella i les seves classes CSS. El sistema de quadrícula s'utilitza per crear un disseny responsiu per al vostre lloc web. Les classes CSS s'utilitzen per dissenyar els vostres elements HTML.

### **El sistema de graella**

El sistema de quadrícula a Bootstrap es basa en un disseny de 12 columnes. Per crear una graella, feu servir les classes **\`row\`** i **\`col\`**:

\`\`\`html
<div class="contenidor">
   <div class="fila">
     <div class="col-sm-6">Columna 1</div>
     <div class="col-sm-6">Columna 2</div>
   </div>
</div>

\`\`\`

En aquest exemple, creem una graella amb dues columnes. La classe **\`container\`** s'utilitza per contenir la graella. La classe **\`row\`** s'utilitza per crear una fila a la graella. La classe **\`col-sm-6\`** s'utilitza per crear una columna que ocupa 6 de 12 columnes en pantalles petites i superiors.

### **Classes CSS**

Bootstrap inclou un gran nombre de classes CSS que podeu utilitzar per dissenyar els vostres elements HTML. Aquests són alguns exemples:

\`\`\`html
<button class="btn btn-primary">Botó principal</button>
<button class="btn btn-secondary">Botó secundari</button>

<div class="alert alert-success">Missatge d'èxit</div>
<div class="alert alert-danger">Missatge d'error</div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">El meu lloc web</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Commuta la navegació ">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item active">
         <a class="nav-link" href="#">Inici</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Quant a</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Contacte</a>
       </li>
     </ul>
   </div>
</nav>

\`\`\`

En aquest exemple, utilitzem la classe **\`btn\`** per crear botons, la classe **\`alert\`** per crear missatges i la classe **\`navbar\`** per crear una barra de navegació.

## **Components**
Bootstrap també ofereix una sèrie de components preconstruïts que podeu utilitzar al vostre lloc web. Aquests són alguns exemples:

### **Carrusel**
El component Carrusel us permet crear una presentació de diapositives d'imatges o contingut.

\`\`\`html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
   <ol class="carousel-indicators">
     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
   </ol>
   <div class="carousel-inner">
     <div class="carousel-item active">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1" alt="Primera diapositiva">
     </div>
     <div class="carousel-item">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2" alt="Segona diapositiva">
     </div>
     <div class="carousel-item">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3" alt="Tercera diapositiva">
     </div>
   </div>
   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Anterior</span>
   </a>
   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Següent</span>
   </a>
</div>

\`\`\`

En aquest exemple, utilitzem la classe **\`carrusel\`** per crear un carrusel. La classe **\`carousel-indicators\`** s'utilitza per crear els indicadors de diapositives. El **\`carrusel interior\`** classe s'utilitza per contenir les diapositives. La classe **\`carousel-item\`** s'utilitza per crear cada diapositiva. Les classes **\`carousel-control-prev\`** i **\`carousel-control-next\`** s'utilitzen per crear els botons anterior i següent.

### **Modal**

El component Modal us permet crear una finestra emergent que mostra contingut.

\`\`\`html
<!-- Botó activador modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
   Llançament de la demostració modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Títol modal</h5>
         <button type="button" class="tancar" data-dismiss="modal" aria-label="Tancar">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         Aquest és el cos modal.
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Tancar</button>
         <button type="button" class="btn btn-primary">Desa els canvis</button>
       </div>
     </div>
   </div>
</div>

\`\`\`

En aquest exemple, utilitzem la classe **\`modal\`** per crear un modal. Les classes **\`modal-header\`**, **\`modal-body\`** i **\`modal-footer\`** s'utilitzen per crear la capçalera, el cos i el peu de pàgina de el modal.

### **acordió**

El component d'acordió us permet crear una secció de contingut plegable.

\`\`\`html
<div id="acordió">
   <div class="card">
     <div class="card-header" id="headingOne">
       <h5 class="mb-0">
         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Element de grup plegable #1
         </button>
       </h5>
     </div>

     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#acordion">
       <div class="card-body">
         Aquest és el contingut del primer acordió.
       </div>
     </div>
   </div>
   <div class="card">
     <div class="card-header" id="headingTwo">
       <h5 class="mb-0">
         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Element de grup plegable núm. 2
         </button>
       </h5>
     </div>
     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#acordion">
       <div class="card-body">
         Aquest és el contingut del segon acordió.
       </div>
     </div>
   </div>
   <div class="card">
     <div class="card-header" id="headingThree">
       <h5 class="mb-0">
         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           Element de grup plegable #3
         </button>
       </h5>
     </div>
     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
       <div class="card-body">
         Aquest és el contingut del tercer acordió.
       </div>
     </div>
   </div>
</div>

\`\`\`

En aquest exemple, utilitzem la classe **\`card\`** per crear una targeta. La classe **\`card-header\`** s'utilitza per crear la capçalera de la targeta. La classe **\`card-body\`** s'utilitza per crear el cos de la targeta. La classe **\`collapse\`** s'utilitza per crear una secció plegable. La classe **\`show\`** s'utilitza per mostrar la secció plegable de manera predeterminada.



[Consulteu la documentació de Bootstrap per obtenir més informació sobre els components de Bootstrap.](https://getbootstrap.com/docs/4.0/components/)

*[Feu clic aquí per veure la documentació de Bootstrap.](https://getbootstrap.com/docs/4.0/)*

`;
