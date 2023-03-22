export const Spanish = `
# **Reducción**

Redux es una **biblioteca de JavaScript popular** para administrar el estado de la aplicación. Fue desarrollado por Dan Abramov y Andrew Clark y es ampliamente utilizado por desarrolladores de todo el mundo. Redux es un proyecto de código abierto y tiene una gran comunidad de colaboradores.

## **¿Qué es el estado?**

En React, el estado es un objeto de JavaScript que contiene datos relevantes para un componente. Por ejemplo, un componente que representa una lista de elementos puede tener una matriz de elementos en su estado. Luego, el componente puede representar la lista de elementos usando la matriz en el estado.

## **¿Qué es Redux?**

Redux es una biblioteca de gestión de estado para aplicaciones de JavaScript. A menudo se usa con React, pero también se puede usar con otras bibliotecas de vistas como Angular y Vue. Redux se puede usar con una variedad de herramientas de compilación, incluidos Webpack y Parcel.

## **¿Por qué usar Redux?**

Hay muchas razones por las que podría querer usar Redux en su aplicación. Estas son algunas de las razones más comunes:

- **Administración de estado predecible:** Redux facilita el razonamiento sobre cómo los cambios en el estado afectan su aplicación.
- **Administración de estado centralizada:** Redux facilita la administración del estado de toda su aplicación en una sola ubicación.
- **Gran comunidad:** Redux tiene una gran comunidad de colaboradores y usuarios, y es ampliamente utilizado por desarrolladores de todo el mundo.

## **Fundamentos de Redux**

Redux se basa en la idea de una **tienda**. La tienda es un objeto que contiene el estado de la aplicación. La tienda se crea utilizando la función **createStore**, que proporciona Redux.

Aquí hay un ejemplo de cómo crear una tienda usando la función **createStore**:

\`\`\`js
importar {createStore} desde 'redux';

const tienda = createStore();
\`\`\`

La tienda tiene tres métodos importantes:

- **getState:** Devuelve el estado actual de la aplicación.
- **dispatch:** Le permite enviar acciones para cambiar el estado de la aplicación.
- **suscribirse:** Le permite registrar una función de devolución de llamada que se llamará cada vez que cambie el estado de la aplicación.

Aquí hay un ejemplo de cómo usar el método **getState**:

\`\`\`js
const estado = store.getState();
\`\`\`

Aquí hay un ejemplo de cómo usar el método **dispatch**:

\`\`\`js
store.dispatch({ tipo: 'INCREMENTO' });
\`\`\`

Aquí hay un ejemplo de cómo usar el método de **suscripción**:

\`\`\`js
tienda.subscribe(() => {
   console.log('El estado ha cambiado.');
});
\`\`\`

## **Reductores**

La tienda mantiene el estado de la aplicación, pero ¿cómo se actualiza realmente el estado? Aquí es donde entran los **reductores**.

Un reductor es una función que se encarga de actualizar el estado de la aplicación. Siempre que llame a **store.dispatch** para enviar una acción, la tienda llamará a la función reducer y le pasará dos argumentos:

- **El estado actual de la aplicación.** Este es el primer argumento que se pasa a la función reducer.
- **La acción que se envió.** Este es el segundo argumento que se pasa a la función reducer.

La función reducer se encarga de devolver el nuevo estado de la aplicación. Aquí hay un ejemplo de una función reductora:

\`\`\`js
función reductor(estado, acción) {
   // Calcular y devolver el nuevo estado de la aplicación
}
\`\`\`

Puede pasar la función reducer a la función **createStore** para crear la tienda:

\`\`\`js
importar {createStore} desde 'redux';

const store = createStore(reductor);
\`\`\`

## **Acciones**

En Redux, las **acciones** son objetos simples de JavaScript que representan la intención de cambiar el estado de la aplicación. Las acciones se crean utilizando creadores de acciones, que son simplemente funciones que devuelven acciones. Aquí hay un ejemplo de un creador de acciones:

\`\`\`js
función incrementoAcciónCreador() {
   devolver {
     tipo: 'INCREMENTO'
   };
}
\`\`\`

Puede enviar acciones para cambiar el estado de la aplicación utilizando el método **store.dispatch**:

\`\`\`js
store.dispatch(incrementActionCreator());
\`\`\`

## **Tipos de acción**

Las acciones son objetos simples de JavaScript, por lo que se pueden crear usando literales de objetos. Sin embargo, es una buena idea definir constantes de cadena para sus tipos de acción. Esto ayuda a evitar errores tipográficos y facilita compartir tipos de acción entre diferentes módulos. Aquí hay un ejemplo de cómo definir tipos de acción usando constantes de cadena:

\`\`\`js
const INCREMENTO = 'INCREMENTO';
const DECREMENTO = 'DECREMENTO';
\`\`\`

Aquí hay un ejemplo de cómo usar los tipos de acción en un creador de acciones:

\`\`\`js
función incrementoAcciónCreador() {
   devolver {
     tipo: INCREMENTO
   };
}
\`\`\`

## **Creadores de acciones**

En Redux, los **creadores de acciones** son funciones que devuelven acciones. Los creadores de acciones generalmente se definen mediante la función auxiliar **actionCreator** proporcionada por Redux. Este es un ejemplo de cómo definir un creador de acciones usando la función auxiliar **actionCreator**:

\`\`\`js
importar {actionCreator} desde 'redux';

const incrementActionCreator = actionCreator(INCREMENTO);
\`\`\`

Aquí hay un ejemplo de cómo usar el creador de acciones:

\`\`\`js
store.dispatch(incrementActionCreator());
\`\`\`

## **Reductores**

En Redux, los **reductores** son funciones que se encargan de actualizar el estado de la aplicación. Los reductores generalmente se definen utilizando la función auxiliar **reductor** proporcionada por Redux. Aquí hay un ejemplo de cómo definir un reductor usando la función auxiliar **reductor**:

\`\`\`js
importar {reductor} de 'redux';

const contadorReductor = reductor(0, {
   [INCREMENTO]: (estado, acción) => estado + 1,
   [DECREMENTO]: (estado, acción) => estado - 1
});
\`\`\`

Aquí hay un ejemplo de cómo usar la función de reducción:

\`\`\`js
const state = counterReducer(0, incrementActionCreator());
\`\`\`

## **Middleware Redux**

En Redux, **middleware** es un código que se encuentra entre la tienda y los reductores. El middleware se puede usar para interceptar acciones enviadas, realizar alguna lógica y luego enviar nuevas acciones.

Redux viene con varias funciones de middleware integradas:

- **applyMiddleware:** Le permite aplicar múltiples funciones de middleware a la tienda.
- **bindActionCreators:** Le permite vincular múltiples creadores de acciones al método de **despacho** de la tienda.
- **combineReducers:** Le permite combinar múltiples reductores en una sola función de reductor.
- **componer:** Le permite componer múltiples funciones en una sola función.

Aquí hay un ejemplo de cómo usar la función de middleware **applyMiddleware**:

\`\`\`js
importar {createStore, applyMiddleware} de 'redux';

const store = createStore(reductor, applyMiddleware(middleware1, middleware2));
\`\`\`

Este es un ejemplo de cómo usar la función de middleware **bindActionCreators**:

\`\`\`js
importar { bindActionCreators } de 'redux';

const bindActionCreators = bindActionCreators(actionCreators, store.dispatch);
\`\`\`

Este es un ejemplo de cómo usar la función de middleware **combineReducers**:

\`\`\`js
importar {combinedReducers} de 'redux';

const rootReducer = combineReducers({
   contador: contadorreductor,
   todos: todosReductor
});
\`\`\`

Aquí hay un ejemplo de cómo usar la función de middleware **compose**:

\`\`\`js
importar {componer} desde 'redux';

const función compuesta = componer (func1, func2, func3);
\`\`\`

## **Herramientas de desarrollo Redux**

Redux DevTools es una extensión de navegador para Chrome y Firefox que proporciona herramientas para depurar aplicaciones Redux. Le permite inspeccionar el estado de su aplicación en cualquier momento, ver un historial de acciones enviadas e incluso "viajar en el tiempo" a cualquier estado anterior de la aplicación.

Aquí hay un ejemplo de cómo usar Redux DevTools:

\`\`\`js
importar {createStore, applyMiddleware} de 'redux';
importar {composeWithDevTools} desde 'redux-devtools-extension';

const store = createStore(reductor, composeWithDevTools(applyMiddleware(middleware)));
\`\`\`

## **Problema de Redux**

Redux Thunk es una función de middleware para Redux que le permite escribir creadores de acciones que devuelven una función en lugar de una acción. El thunk puede usarse para retrasar el envío de una acción, o para enviar solo si se cumple una determinada condición. La función interna recibe los métodos de almacenamiento **dispatch** y **getState** como parámetros.

Aquí hay un ejemplo de cómo usar Redux Thunk:

\`\`\`js
importar {createStore, applyMiddleware} de 'redux';
importar thunk desde 'redux-thunk';

const store = createStore(reductor, applyMiddleware(thunk));
\`\`\`

Aquí hay un ejemplo de cómo escribir un creador de acciones que devuelve una función:

\`\`\`js
función incrementoAsync() {
   return (despacho, getState) => {
     establecerTiempo de espera(() => {
       despacho(incrementarAcciónCreador());
     }, 1000);
   };
}
\`\`\`

`;
