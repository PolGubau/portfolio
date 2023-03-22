export const Catalan = `
# **Una introducció a Angular**

Angular és un marc d'aplicacions web popular que s'utilitza per crear aplicacions d'una sola pàgina (SPA) dinàmiques i interactives. Va ser desenvolupat per Google i llançat per primera vegada el 2010. Angular és conegut per la seva robustesa, escalabilitat i facilitat d'ús.

## **Com començar amb Angular**

Abans de submergir-nos en Angular, parlem ràpidament de què és i per què és important. Angular és un marc de JavaScript que s'utilitza per crear aplicacions web. Es basa en el patró arquitectònic Model-View-Controller (MVC), que separa les dades, la presentació i la lògica de control d'una aplicació.

Angular és important perquè simplifica el procés de creació d'aplicacions web. Amb Angular, podeu crear codi modular i mantenible que es pot provar i escalar fàcilment. Angular també inclou moltes funcions i eines integrades que faciliten la creació d'aplicacions complexes.

## **Els conceptes bàsics d'Angular**

Al nucli d'Angular hi ha el mòdul. Un mòdul és un contenidor per a un grup de components, directives, canonades i serveis relacionats. Per crear un mòdul a Angular, feu servir el decorador **\`@NgModule\`**:

\`\`\`mecanografia
importa { NgModule } des de '@angular/core';

@NgModule({
   declaracions: [ /* components, directives i canonades */ ],
   importacions: [ /* altres mòduls */ ],
   proveïdors: [ /* serveis */ ],
   bootstrap: [ /* component arrel */ ]
})
exportar classe AppModule { }

\`\`\`

En aquest exemple, definim un mòdul anomenat **\`AppModule\`**. La propietat **\`declarations\`** és on es mostren tots els components, directives i canonades que pertanyen al mòdul. La propietat **\`imports\`** és on es mostren tots els altres mòduls dels quals depèn el mòdul. La propietat **\`providers\`** és on es mostren tots els serveis que ofereix el mòdul. La propietat **\`bootstrap\`** és on s'especifica el component arrel de l'aplicació.

## **Components**

Els components són els blocs de construcció de les aplicacions angulars. Un component és una classe TypeScript que conté les dades i el comportament d'una part de la interfície d'usuari. Per crear un component a Angular, feu servir el decorador **\`@Component\`**:

\`\`\`mecanografia
importar { Component } des de '@angular/core';

@component({
   selector: 'app-root',
   plantilla: '<h1>Hola, Angular!</h1>'
})
exportar classe AppComponent { }

\`\`\`

En aquest exemple, definim un component anomenat **\`AppComponent\`**. La propietat **\`selector\`** és on especifiqueu l'etiqueta o l'atribut HTML al qual s'adjuntarà el component. La propietat **\`plantilla\`** és on s'especifica el marcatge HTML del component.

Per utilitzar el **\`AppComponent\`** al vostre HTML, només heu d'afegir l'etiqueta o l'atribut HTML especificat a la propietat **\`selector\`**:

\`\`\`html
<app-root></app-root>

\`\`\`

## **Serveis**

Els serveis s'utilitzen per proporcionar funcionalitats que es poden compartir entre components. Un servei és una classe TypeScript que conté les dades i el comportament d'un servei concret. Per crear un servei a Angular, feu servir el decorador **\`@Injectable\`**:

\`\`\`mecanografia
importar { Injectable } des de '@angular/core';

@Injectable({
   proporcionada a: 'arrel'
})
exportar classe DataService {
   getData() {
     retornar 'Algunes dades';
   }
}

\`\`\`

En aquest exemple, definim un servei anomenat **\`DataService\`**. La propietat **\`providedIn\`** és on s'especifica l'injector arrel de l'aplicació. El mètode **\`getData\`** és un mètode senzill que retorna algunes dades.

Per utilitzar el **\`DataService\`** en un component, només cal injectar-lo al constructor del component:

\`\`\`mecanografia
importar { Component } des de '@angular/core';
importar { DataService } des de './data.service';

@component({
   selector: 'app-root',
   plantilla: "{{ dades }}"
})
exportar classe AppComponent {
   dades: cadena;

   constructor (servei de dades privat: servei de dades) {
     aquestes.dades

\`\`\`

## **Injecció de dependència**

La injecció de dependències és un patró de disseny que permet que una classe sol·liciti dependències de fonts externes en lloc de crear-les ella mateixa. A Angular, la injecció de dependències s'utilitza per proporcionar noves instàncies de serveis als components.

Per injectar un servei en un component, només cal afegir-lo com a paràmetre al constructor del component:

\`\`\`mecanografia
importar { Component } des de '@angular/core';
importar { DataService } des de './data.service';

@component({
   selector: 'app-root',
   plantilla: "{{ dades }}"
})
exportar classe AppComponent {
   dades: cadena;

   constructor (servei de dades privat: servei de dades) {
     this.data = dataService.getData();
   }
}

\`\`\`

En aquest exemple, injectem el **\`DataService\`** al **\`AppComponent\`**. El paràmetre **\`dataService\`** s'emplena automàticament amb una instància de la classe **\`DataService\`**. A continuació, utilitzem el mètode **\`getData\`** per obtenir les dades del servei i assignar-les a la propietat **\`data\`**.

## **Plantilles**

Una plantilla és una vista que s'utilitza per mostrar dades a la interfície d'usuari. A Angular, les plantilles s'escriuen amb un llenguatge de traducció anomenat HTML. HTML és un llenguatge de marques que s'utilitza per descriure l'estructura d'una pàgina web.

Per crear una plantilla a Angular, només cal que utilitzeu el marcatge HTML:

\`\`\`html
<h1>Hola, Angular!</h1>

\`\`\`

En aquest exemple, creem una plantilla senzilla que conté un encapçalament.

## **Enllaç de dades**

L'enllaç de dades és el procés de sincronització de dades entre la classe de component i la plantilla. Hi ha quatre formes d'enllaç de dades a Angular:

* **Interpolació:** La interpolació us permet mostrar dades a la plantilla.
* **Enllaç de propietats:** L'enllaç de propietats us permet establir el valor de les propietats a la plantilla.
* **Enllaç d'esdeveniments:** L'enllaç d'esdeveniments us permet escoltar esdeveniments a la plantilla.
* **Enllaç de dades bidireccional:** L'enllaç de dades bidireccional us permet vincular el valor de les propietats de la plantilla a la classe del component.

## Conclusió
  
En aquest article, hem après sobre Angular i com començar-hi. També vam conèixer els conceptes bàsics d'Angular, inclosos els mòduls, components, serveis, injecció de dependències, plantilles i vinculació de dades.

## **Per llegir més**

* [Documentació d'Angular](https://angular.io/docs)
* [Tutorial Angular](https://angular.io/tutorial)
* [Full de trucs angular] (https://angular.io/guide/cheatsheet)
* [Guia d'estil angular] (https://angular.io/guide/styleguide)
* [Angular CLI](https://cli.angular.io/)
* [Material angular](https://material.angular.io/)
      

`;
