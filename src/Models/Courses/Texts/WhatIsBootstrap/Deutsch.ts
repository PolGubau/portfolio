export const Deutsch = `# **Eine Einführung in Bootstrap**

Bootstrap ist ein beliebtes Front-End-Framework, das zum Erstellen von responsiven und Mobile-First-Websites verwendet wird. Es wurde ursprünglich von Twitter entwickelt und 2011 als Open-Source-Projekt veröffentlicht. Bootstrap ist bekannt für seine Benutzerfreundlichkeit, Cross-Browser-Kompatibilität und große Community.

## **Erste Schritte mit Bootstrap**

Bootstrap basiert auf HTML, CSS und JavaScript. Um mit Bootstrap zu beginnen, müssen Sie die Bootstrap-CSS- und -JavaScript-Dateien in Ihre HTML-Datei einfügen:

\`\`\`html
<!DOCTYPE html>
<htmllang="de">
<Kopf>
   <meta charset="UTF-8">
   <title>Meine Bootstrap-Website</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<Körper>

   <!-- Ihr Inhalt gehört hierher -->

   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>

\`\`\`

In diesem Beispiel schließen wir die Bootstrap-CSS-Datei aus einem CDN und die Bootstrap-JavaScript-Datei zusammen mit jQuery ein.

## **Die Grundlagen von Bootstrap**

Das Herzstück von Bootstrap sind sein Grid-System und seine CSS-Klassen. Das Rastersystem wird verwendet, um ein ansprechendes Layout für Ihre Website zu erstellen. Die CSS-Klassen werden verwendet, um Ihre HTML-Elemente zu stylen.

### **Das Gittersystem**

Das Rastersystem in Bootstrap basiert auf einem 12-Spalten-Layout. Um ein Raster zu erstellen, verwenden Sie die Klassen **\`row\`** und **\`col\`**:

\`\`\`html
<div class="container">
   <div class="row">
     <div class="col-sm-6">Spalte 1</div>
     <div class="col-sm-6">Spalte 2</div>
   </div>
</div>

\`\`\`

In diesem Beispiel erstellen wir ein Raster mit zwei Spalten. Die Klasse **\`container\`** wird verwendet, um das Grid zu enthalten. Die Klasse **\`row\`** wird verwendet, um eine Zeile im Raster zu erstellen. Die Klasse **\`col-sm-6\`** wird verwendet, um eine Spalte zu erstellen, die auf kleinen Bildschirmen und darüber 6 von 12 Spalten einnimmt.

### **CSS-Klassen**

Bootstrap wird mit einer großen Anzahl von CSS-Klassen geliefert, mit denen Sie Ihre HTML-Elemente stylen können. Hier sind einige Beispiele:

\`\`\`html
<button class="btn btn-primary">Primäre Schaltfläche</button>
<button class="btn btn-secondary">Sekundärer Button</button>

<div class="alert alert-success">Erfolgsmeldung</div>
<div class="alert alert-danger">Fehlermeldung</div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="#">Meine Website</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Schaltet die Navigation um ">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item aktiv">
         <a class="nav-link" href="#">Startseite</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Über</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#">Kontakt</a>
       </li>
     </ul>
   </div>
</nav>

\`\`\`

In diesem Beispiel verwenden wir die Klasse **\`btn\`** zum Erstellen von Schaltflächen, die Klasse **\`alert\`** zum Erstellen von Nachrichten und die Klasse **\`navbar\`** zum Erstellen eine Navigationsleiste.

## **Komponenten**
Bootstrap bietet auch eine Reihe vorgefertigter Komponenten, die Sie auf Ihrer Website verwenden können. Hier sind einige Beispiele:

### **Karussell**
Mit der Karussell-Komponente können Sie eine Diashow mit Bildern oder Inhalten erstellen.

\`\`\`html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
   <ol class="Karussell-Indikatoren">
     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
   </ol>
   <div class="carousel-inner">
     <div class="carousel-item active">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1" alt="Erste Folie">
     </div>
     <div class="carousel-item">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2" alt="Zweite Folie">
     </div>
     <div class="carousel-item">
       <img class="d-block w-100" src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3" alt="Dritte Folie">
     </div>
   </div>
   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Zurück</span>
   </a>
   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Weiter</span>
   </a>
</div>

\`\`\`

In diesem Beispiel verwenden wir die Klasse **\`Karussell\`**, um ein Karussell zu erstellen. Die Klasse **\`carousel-indicators\`** wird verwendet, um die Schiebeindikatoren zu erstellen. Das **\`Karussell-Innere\`** class wird verwendet, um die Folien aufzunehmen. Die Klasse **\`carousel-item\`** wird verwendet, um jede Folie zu erstellen. Die Klassen **\`carousel-control-prev\`** und **\`carousel-control-next\`** werden verwendet, um die Schaltflächen „Zurück“ und „Weiter“ zu erstellen.

### **Modal**

Mit der Modal-Komponente können Sie ein Popup-Fenster erstellen, das Inhalte anzeigt.

\`\`\`html
<!-- Tastenauslöser modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
   Starten Sie das Demo-Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Modaler Titel</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         Dies ist der Modalkörper.
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
         <button type="button" class="btn btn-primary">Änderungen speichern</button>
       </div>
     </div>
   </div>
</div>

\`\`\`

In diesem Beispiel verwenden wir die Klasse **\`modal\`**, um ein Modal zu erstellen. Die Klassen **\`modal-header\`**, **\`modal-body\`** und **\`modal-footer\`** werden verwendet, um die Kopf-, Haupt- und Fußzeile von zu erstellen das Modal.

### **Akkordeon**

Mit der Accordion-Komponente können Sie einen zusammenklappbaren Inhaltsbereich erstellen.

\`\`\`html
<div id="akkordeon">
   <div class="karte">
     <div class="card-header" id="headingOne">
       <h5 class="mb-0">
         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Reduzierbares Gruppenelement Nr. 1
         </button>
       </h5>
     </div>

     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
       <div class="Kartenkörper">
         Dies ist der Inhalt des ersten Akkordeons.
       </div>
     </div>
   </div>
   <div class="karte">
     <div class="card-header" id="headingTwo">
       <h5 class="mb-0">
         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Reduzierbarer Gruppenartikel Nr. 2
         </button>
       </h5>
     </div>
     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
       <div class="Kartenkörper">
         Dies ist der Inhalt des zweiten Akkordeons.
       </div>
     </div>
   </div>
   <div class="karte">
     <div class="card-header" id="headingThree">
       <h5 class="mb-0">
         <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           Reduzierbarer Gruppenartikel Nr. 3
         </button>
       </h5>
     </div>
     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
       <div class="Kartenkörper">
         Dies ist der Inhalt des dritten Akkordeons.
       </div>
     </div>
   </div>
</div>

\`\`\`

In diesem Beispiel verwenden wir die Klasse **\`card\`**, um eine Karte zu erstellen. Die Klasse **\`card-header\`** wird verwendet, um den Header der Karte zu erstellen. Die Klasse **\`card-body\`** wird verwendet, um den Hauptteil der Karte zu erstellen. Die Klasse **\`collapse\`** wird verwendet, um einen zusammenklappbaren Abschnitt zu erstellen. Die Klasse **\`show\`** wird standardmäßig verwendet, um den zusammenklappbaren Abschnitt anzuzeigen.



[Weitere Informationen zu den Bootstrap-Komponenten finden Sie in der Bootstrap-Dokumentation.](https://getbootstrap.com/docs/4.0/components/)

*[Klicken Sie hier, um die Bootstrap-Dokumentation anzuzeigen.](https://getbootstrap.com/docs/4.0/)*

`;
