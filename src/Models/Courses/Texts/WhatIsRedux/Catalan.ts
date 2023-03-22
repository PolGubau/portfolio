export const Catalan = `
# **Redux**

Redux és una **biblioteca de JavaScript popular** per gestionar l'estat de l'aplicació. Va ser desenvolupat per Dan Abramov i Andrew Clark i és àmpliament utilitzat per desenvolupadors de tot el món. Redux és un projecte de codi obert i té una gran comunitat de col·laboradors.

## **Què és l'estat?**

A React, l'estat és un objecte JavaScript que conté dades rellevants per a un component. Per exemple, un component que representa una llista d'elements pot tenir una matriu d'elements en el seu estat. Aleshores, el component pot representar la llista d'elements utilitzant la matriu en estat.

## **Què és Redux?**

Redux és una biblioteca de gestió d'estats per a aplicacions JavaScript. Sovint s'utilitza amb React, però també es pot utilitzar amb altres biblioteques de visualitzacions com ara Angular i Vue. Redux es pot utilitzar amb una varietat d'eines de creació, com ara Webpack i Parcel.

## **Per què utilitzar Redux?**

Hi ha moltes raons per les quals potser voldreu utilitzar Redux a la vostra aplicació. Aquests són alguns dels motius més comuns:

- **Gestió de l'estat previsible:** Redux facilita el raonament sobre com afecten els canvis d'estat a la vostra aplicació.
- **Gestió de l'estat centralitzada:** Redux facilita la gestió de l'estat de tota la vostra aplicació en una sola ubicació.
- **Comunitat gran:** Redux té una gran comunitat de col·laboradors i usuaris, i és àmpliament utilitzat per desenvolupadors de tot el món.

## **Fundaments de Redux**

Redux es basa en la idea d'una **botiga**. La botiga és un objecte que conté l'estat de l'aplicació. La botiga es crea mitjançant la funció **createStore**, que proporciona Redux.

Aquí teniu un exemple de com crear una botiga amb la funció **createStore**:

\`\`\`js
importar { createStore } des de 'redux';

const store = createStore();
\`\`\`

La botiga té tres mètodes importants:

- **getState:** Retorna l'estat actual de l'aplicació.
- **dispatch:** us permet enviar accions per canviar l'estat de l'aplicació.
- **subscriure:** us permet registrar una funció de devolució de trucada que es trucarà cada vegada que canviï l'estat de l'aplicació.

Aquí teniu un exemple de com utilitzar el mètode **getState**:

\`\`\`js
const state = store.getState();
\`\`\`

Aquí teniu un exemple de com utilitzar el mètode **dispatch**:

\`\`\`js
store.dispatch({ tipus: 'INCREMENT'});
\`\`\`

Aquí teniu un exemple de com utilitzar el mètode **subscriure**:

\`\`\`js
store.subscribe(() => {
   console.log('L'estat ha canviat.');
});
\`\`\`

## **Reductors**

La botiga manté l'estat de l'aplicació, però com s'actualitza realment l'estat? Aquí és on entren els **reductors**.

Un reductor és una funció que s'encarrega d'actualitzar l'estat de l'aplicació. Sempre que truqueu a **store.dispatch** per enviar una acció, la botiga cridarà a la funció reductora i li passarà dos arguments:

- **L'estat actual de l'aplicació.** Aquest és el primer argument que es passa a la funció reductora.
- **L'acció que es va enviar.** Aquest és el segon argument que es passa a la funció reductora.

La funció reductora s'encarrega de retornar el nou estat de l'aplicació. Aquí teniu un exemple de funció reductora:

\`\`\`js
reductor de funció (estat, acció) {
   // Calcula i retorna el nou estat de l'aplicació
}
\`\`\`

Podeu passar la funció reductora a la funció **createStore** per crear la botiga:

\`\`\`js
importar { createStore } des de 'redux';

const store = createStore(reductor);
\`\`\`

## **Accions**

A Redux, les **accions** són objectes JavaScript senzills que representen una intenció de canviar l'estat de l'aplicació. Les accions es creen mitjançant creadors d'accions, que són simplement funcions que retornen accions. Aquí teniu un exemple de creador d'accions:

\`\`\`js
funció incrementActionCreator() {
   tornar {
     tipus: "INCREIMENT"
   };
}
\`\`\`

Podeu enviar accions per canviar l'estat de l'aplicació mitjançant el mètode **store.dispatch**:

\`\`\`js
store.dispatch(incrementActionCreator());
\`\`\`

## **Tipus d'acció**

Les accions són objectes de JavaScript senzills, de manera que es poden crear mitjançant literals d'objecte. Tanmateix, és una bona idea definir constants de cadena per als vostres tipus d'acció. Això ajuda a evitar errors tipogràfics i facilita compartir tipus d'acció entre diferents mòduls. Aquí teniu un exemple de com definir tipus d'acció mitjançant constants de cadena:

\`\`\`js
const INCREMENT = 'INCREIMENT';
const DECREMENT = 'DIMINUIR';
\`\`\`

Aquí teniu un exemple de com utilitzar els tipus d'acció en un creador d'accions:

\`\`\`js
funció incrementActionCreator() {
   tornar {
     tipus: INCREMENT
   };
}
\`\`\`

## **Creadors d'acció**

A Redux, els **creadors d'accions** són funcions que retornen accions. Els creadors d'accions normalment es defineixen mitjançant la funció d'ajuda **actionCreator** proporcionada per Redux. Aquí teniu un exemple de com definir un creador d'accions mitjançant la funció d'ajuda **actionCreator**:

\`\`\`js
importa { actionCreator } des de 'redux';

const incrementActionCreator = actionCreator(INCREMENT);
\`\`\`

Aquí teniu un exemple de com utilitzar el creador d'accions:

\`\`\`js
store.dispatch(incrementActionCreator ());
\`\`\`

## **Reductors**

A Redux, els **reductors** són funcions que s'encarreguen d'actualitzar l'estat de l'aplicació. Els reductors es defineixen normalment mitjançant la funció d'ajuda **reductor** proporcionada per Redux. Aquí teniu un exemple de com definir un reductor mitjançant la funció auxiliar **reductor**:

\`\`\`js
importar { reductor } de 'redux';

const counterReducer = reductor (0, {
   [INCREIMENT]: (estat, acció) => estat + 1,
   [DECRECIÓ]: (estat, acció) => estat - 1
});
\`\`\`

Aquí teniu un exemple de com utilitzar la funció reductora:

\`\`\`js
const state = counterReducer(0, incrementActionCreator());
\`\`\`

## **Redux middleware**

A Redux, **middleware** és el codi que es troba entre la botiga i els reductors. El programari intermedi es pot utilitzar per interceptar accions enviades, realitzar una mica de lògica i després enviar accions noves.

Redux inclou diverses funcions de middleware integrades:

- **applyMiddleware:** us permet aplicar diverses funcions de middleware a la botiga.
- **bindActionCreators:** us permet vincular diversos creadors d'accions al mètode **dispatch** de la botiga.
- **combineReducers:** us permet combinar diversos reductors en una única funció reductora.
- **compose:** us permet compondre diverses funcions en una única funció.

Aquí teniu un exemple de com utilitzar la funció de middleware **applyMiddleware**:

\`\`\`js
importar { createStore, applyMiddleware } de 'redux';

const store = createStore (reductor, applyMiddleware (middleware1, middleware2));
\`\`\`

Aquí teniu un exemple de com utilitzar la funció de programari intermediari **bindActionCreators**:

\`\`\`js
importar { bindActionCreators } des de 'redux';

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
\`\`\`

Aquí teniu un exemple de com utilitzar la funció de programari intermedi **combineReducers**:

\`\`\`js
importar { combineReducers } de 'redux';

const rootReducer = combinarReductors({
   comptador: contrareductor,
   tots: tots Reductor
});
\`\`\`

Aquí teniu un exemple de com utilitzar la funció de middleware **compose**:

\`\`\`js
importar { redactar } des de 'redux';

const composedFunction = compose (func1, func2, func3);
\`\`\`

## **Redux DevTools**

Redux DevTools és una extensió del navegador per a Chrome i Firefox que proporciona eines per depurar aplicacions Redux. Us permet inspeccionar l'estat de la vostra aplicació en qualsevol moment, veure un historial d'accions enviades i fins i tot "viatge en el temps" a qualsevol estat anterior de l'aplicació.

Aquí teniu un exemple de com utilitzar Redux DevTools:

\`\`\`js
importar { createStore, applyMiddleware } de 'redux';
importar { composeWithDevTools } des de 'redux-devtools-extension';

const store = createStore(reductor, composeWithDevTools(aplicarMiddleware(middleware)));
\`\`\`

## **Redux Thunk**

Redux Thunk és una funció de middleware per a Redux que us permet escriure creadors d'accions que retornin una funció en lloc d'una acció. El thunk es pot utilitzar per retardar l'enviament d'una acció, o per enviar només si es compleix una determinada condició. La funció interna rep els mètodes de botiga **dispatch** i **getState** com a paràmetres.

Aquí teniu un exemple de com utilitzar Redux Thunk:

\`\`\`js
importar { createStore, applyMiddleware } de 'redux';
importar thunk de 'redux-thunk';

const store = createStore (reductor, applyMiddleware (thunk));
\`\`\`

Aquí teniu un exemple de com escriure un creador d'accions que retorna una funció:

\`\`\`js
funció incrementAsync() {
   retorn (dispatch, getState) => {
     setTimeout(() => {
       dispatch(incrementActionCreator());
     }, 1000);
   };
}
\`\`\`

`;
