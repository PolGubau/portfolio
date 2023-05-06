export const Deutsch = `
# **Eine Einführung in Angular**

Angular ist ein beliebtes Webanwendungs-Framework, das zur Erstellung dynamischer und interaktiver Single-Page-Anwendungen (SPAs) verwendet wird. Es wurde von Google entwickelt und erstmals im Jahr 2010 veröffentlicht. Angular ist bekannt für seine Robustheit, Skalierbarkeit und Benutzerfreundlichkeit.

## **Einstieg in Angular**

Bevor wir uns mit Angular beschäftigen, sollten wir kurz erläutern, was es ist und warum es so wichtig ist. Angular ist ein JavaScript-Framework, das für die Entwicklung von Webanwendungen verwendet wird. Es basiert auf dem MVC-Architekturmuster (Model-View-Controller), das die Daten, die Präsentation und die Steuerungslogik einer Anwendung voneinander trennt.

Angular ist wichtig, weil es den Prozess der Erstellung von Webanwendungen vereinfacht. Mit Angular können Sie modularen und wartbaren Code erstellen, der leicht getestet und skaliert werden kann. Angular verfügt außerdem über viele integrierte Funktionen und Tools, die die Erstellung komplexer Anwendungen erleichtern.

## **Die Grundlagen von Angular**

Das Herzstück von Angular ist das Modul. Ein Modul ist ein Container für eine Gruppe verwandter Komponenten, Direktiven, Pipes und Dienste. Um ein Modul in Angular zu erstellen, verwenden Sie den **\`@NgModule\`** Dekorator:

**@NgModule**** Typescript
importiere { NgModule } von '@angular/core';

@NgModule({
  declarations: [ /* components, directives, and pipes */ ],
  imports: [ /* andere Module */ ],
  providers: [ /* Dienste */ ],
  bootstrap: [ /* Wurzelkomponente */ ]
})
export class AppModule { }

\`\`\`

In diesem Beispiel definieren wir ein Modul namens **\`AppModule\`**. In der Eigenschaft **\`Declarations\`** werden alle Komponenten, Direktiven und Pipes aufgelistet, die zu dem Modul gehören. In der Eigenschaft **\`Imports\`** werden alle anderen Module aufgelistet, von denen das Modul abhängt. In der Eigenschaft **\`providers\`** werden alle Dienste aufgelistet, die das Modul bereitstellt. Mit der Eigenschaft **\`bootstrap\`** geben Sie die Stammkomponente der Anwendung an.

## **Komponenten**

Komponenten sind die Bausteine von Angular-Anwendungen. Eine Komponente ist eine TypeScript-Klasse, die die Daten und das Verhalten eines Teils der Benutzeroberfläche enthält. Um eine Komponente in Angular zu erstellen, verwenden Sie den **\`@Component\`** Dekorator:

\Typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hallo, Angular!</h1>'
})
export class AppComponent { }

\`\`\`

In diesem Beispiel definieren wir eine Komponente namens **\`AppComponent\`**. In der Eigenschaft **\`Selektor\`** wird das HTML-Tag oder -Attribut angegeben, an das die Komponente angehängt werden soll. Mit der Eigenschaft **\`Vorlage\`** geben Sie das HTML-Markup der Komponente an.

Um die **\`AppComponent\`** in Ihrem HTML zu verwenden, fügen Sie einfach den HTML-Tag oder das Attribut hinzu, das in der Eigenschaft **\`Selektor\`** angegeben ist:

\`\`\`html
<app-root></app-root>

\`\`\`

## **Dienste**

Dienste werden verwendet, um Funktionen bereitzustellen, die von verschiedenen Komponenten gemeinsam genutzt werden können. Ein Service ist eine TypeScript-Klasse, die die Daten und das Verhalten eines bestimmten Services enthält. Um einen Service in Angular zu erstellen, verwendet man den **\`@Injectable\`** Dekorator:

\Typescript
importiere { Injectable } von '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return 'Einige Daten';
  }
}

\`\`\`

In diesem Beispiel definieren wir einen Dienst namens **\`DataService\`**. Über die Eigenschaft **\`providedIn\`** wird der Root-Injector der Anwendung angegeben. Die Methode **\`getData\`** ist eine einfache Methode, die einige Daten zurückgibt.

Um den **\`DataService\`** in einer Komponente zu verwenden, injizieren Sie ihn einfach in den Konstruktor der Komponente:

**DataService**** Typescript
import { Component } from '@angular/core';
importieren Sie { DataService } von './data.service';

@Component({
  selector: 'app-root',
  template: '{{ data }}'
})
export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data

\`\`\`

## **Abhängigkeitsinjektion**

Dependency Injection ist ein Entwurfsmuster, das es einer Klasse ermöglicht, Abhängigkeiten von externen Quellen anzufordern, anstatt sie selbst zu erstellen. In Angular wird Dependency Injection verwendet, um Komponenten neue Instanzen von Services zur Verfügung zu stellen.

Um einen Service in eine Komponente zu injizieren, fügt man ihn einfach als Parameter in den Konstruktor der Komponente ein:

\Typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';;

@Component({
  selector: 'app-root',
  template: '{{ data }}'
})
export class AppComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = dataService.getData();
  }
}

\`\`\`

In diesem Beispiel injizieren wir den **\`DataService\`** in die **\`AppComponent\`**. Der Parameter **\`DataService\`** wird automatisch mit einer Instanz der Klasse **\`DataService\`** gefüllt. Wir verwenden dann die Methode **\`getData\`**, um die Daten vom Dienst abzurufen und sie der Eigenschaft **\`data\`** zuzuweisen.

**Templates**

Ein Template ist eine Ansicht, die zur Anzeige von Daten in der Benutzeroberfläche verwendet wird.In Angular werden Vorlagen mit einer Vorlagensprache namens HTML geschrieben. HTML ist eine Auszeichnungssprache, die verwendet wird, um die Struktur einer Webseite zu beschreiben.

Um ein Template in Angular zu erstellen, verwenden Sie einfach HTML-Markup:

\`\`\`html
<h1>Hallo, Angular!</h1>

\`\`\`

In diesem Beispiel erstellen wir eine einfache Vorlage, die eine Überschrift enthält.

## **Datenbindung**

Datenbindung ist der Prozess der Synchronisierung von Daten zwischen der Komponentenklasse und der Vorlage. Es gibt vier Formen der Datenbindung in Angular:

* **Interpolation:** Interpolation ermöglicht es Ihnen, Daten in der Vorlage anzuzeigen.
* **Eigenschaftsbindung:** Die Eigenschaftsbindung ermöglicht es Ihnen, den Wert von Eigenschaften in der Vorlage festzulegen.
* **Ereignisbindung:** Mit der Ereignisbindung können Sie Ereignisse in der Vorlage abhören.
* **Bidirektionale Datenbindung:** Mit der bidirektionalen Datenbindung können Sie den Wert von Eigenschaften in der Vorlage an die Komponentenklasse binden.

## Abschluss
  
In diesem Artikel haben wir Angular kennengelernt und erfahren, wie man damit loslegt. Wir haben auch die Grundlagen von Angular gelernt, einschließlich Module, Komponenten, Dienste, Abhängigkeitsinjektion, Vorlagen und Datenbindung.

## **Weiterführende Literatur**

* [Angular-Dokumentation](https://angular.io/docs)
* [Angular-Tutorial](https://angular.io/tutorial)
* [Angular-Spickzettel](https://angular.io/guide/cheatsheet)
* [Angular-Styleguide](https://angular.io/guide/styleguide)
* [Angular-CLI](https://cli.angular.io/)
* [Winkelmaterial](https://material.angular.io/)
      

`;
