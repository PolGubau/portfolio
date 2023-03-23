export const Catalan = `
# **Introducció a Vue.js**

Vue.js és un popular framework JavaScript per a la construcció dinterfícies dusuari. És un framework progressiu, cosa que significa que es pot utilitzar tant per a projectes petits com a gran escala. Vue.js és conegut per la seva simplicitat, flexibilitat i facilitat dús.

## **Començant amb Vue.js**

Abans de submergir-nos a Vue.js, discutirem ràpidament el que és i per què és important. Vue.js és un framework JavaScript que es fa servir per construir interfícies d'usuari. Va ser creat per Evan You i llançat per primera vegada el 2014. Vue.js és un framework de codi obert d'ús gratuït, i és mantingut per una gran comunitat de desenvolupadors.

Vue.js és important perquè simplifica el procés de creació d'interfícies d'usuari. Amb Vue.js, podeu crear interfícies d'usuari interactives i reactives amb el mínim esforç. Vue.js també és molt flexible i es pot integrar amb altres biblioteques i frameworks, com ara React i Angular.

## **Els fonaments de Vue.js**

Al nucli de Vue.js hi ha la instància de Vue. Aquest és l'objecte principal que representa la vostra aplicació Vue. La instància Vue es crea amb una simple crida a la funció Vue:

\`\`\`javascript
var app = new Vue({
   // opcions
})

\`\`\`

L'objecte options passat a la funció Vue és on defineixes les dades, mètodes i hooks del cicle de vida de la teva aplicació. Vet aquí un exemple:

\`\`\`javascript
var app = new Vue({
   el: '#app',
   dades: {
     missatge: 'Hola, Vue!'
   },
   mètodes: {
     reverseMessage: function () {
       this.message = this.message.split('').reverse().join('')
     }
   }
})
\`\`\`

En aquest exemple, definim una instància Vue amb una propietat **\`data\`** que conté una propietat **\`message\`**. També definim una propietat **methods** que conté un mètode **reverseMessage**. Quan s'anomena el mètode **reverseMessage**, s'inverteix la cadena **message**.

Per utilitzar la instància Vue en el vostre HTML, només heu d'afegir un atribut **id** a un element i establir el mateix valor que la propietat **el** de la instància Vue:

\`\`\`html
<div id="app">
   {{ message }}
   <button v-on:click="reverseMessage">Reverse Message</button>
</div>

\`\`\`

En aquest exemple, useu els dos curly braços syntax (**\`{{}}\`**) per a **\`message\`** property per a text content of the **\`div\`** element. We also use the **\`v-on\`** directive to bind the **\`click\`** event of the **\`button\`** element to the **\`reverseMessage\` ** method.

## **Directives**

Directives són els atributs especials que s'utilitzen per veure Vue.js data to your HTML. També teniu directives in Vue.js, such as **\`v-if\`**, **\`v-for\`**, and **\`v-on\`** .

El directiu directiu utilitza el conditionally render l'element basat en Boolean expression:

\`\`\`html
<div v-if="isShow">Teth element is shown if isShow is true.</div>

\`\`\`

El directive us permet renderar el llistat d'ítems basats en l'arrel:

\`\`\`html
<ul>
   <li v-for="item in items">{{ item }}</li>
</ul>

\`\`\`

Aquest directiu s'utilitza amb tot el que s'ha produït a mètode:

\`\`\`html
<button v-on:click="doSomething">Click me!</button>

\`\`\`

## **Components**

Components are way to reuse and organitza Vue.js code. A Vue.js component is simply a Vue instance with a **\`name\`** property:

\`\`\`javascript
Vue.component('my-component', {
   // options
})

\`\`\`

In the options object of a Vue.js component, you define the same properties as in a Vue instance: **\`data\`**, **\`methods\`**, **\`computed\`* *, **\`watch\`**, and **\`lifecycle hooks\`**.
`;
