export const Deutsch = `
# **Redux**

Redux ist eine **beliebte JavaScript-Bibliothek** zur Verwaltung des Anwendungsstatus. Sie wurde von Dan Abramov und Andrew Clark entwickelt und wird von vielen Entwicklern auf der ganzen Welt verwendet. Redux ist ein Open-Source-Projekt und hat eine große Gemeinschaft von Mitwirkenden.

## **Was ist ein Zustand?**

In React ist der Status ein JavaScript-Objekt, das für eine Komponente relevante Daten enthält. Zum Beispiel könnte eine Komponente, die eine Liste von Elementen wiedergibt, ein Array von Elementen in ihrem Zustand haben. Die Komponente kann dann die Liste der Elemente mit Hilfe des Arrays im Status darstellen.

## **Was ist Redux?**

Redux ist eine Zustandsverwaltungsbibliothek für JavaScript-Anwendungen. Sie wird häufig mit React verwendet, kann aber auch mit anderen View-Bibliotheken wie Angular und Vue eingesetzt werden. Redux kann mit einer Vielzahl von Build-Tools verwendet werden, darunter Webpack und Parcel.

## **Warum Redux verwenden?**

Es gibt viele Gründe, warum Sie Redux in Ihrer Anwendung verwenden möchten. Hier sind einige der häufigsten Gründe:

- **Vorhersagbare Zustandsverwaltung:** Redux macht es einfach, darüber nachzudenken, wie sich Zustandsänderungen auf Ihre Anwendung auswirken.
- **Zentrales Zustandsmanagement:** Redux macht es einfach, den Zustand Ihrer gesamten Anwendung an einem einzigen Ort zu verwalten.
- **Große Community:** Redux hat eine große Community von Mitwirkenden und Nutzern und wird von Entwicklern auf der ganzen Welt verwendet.

## **Redux-Grundlagen**

Redux ist auf der Idee eines **Stores** aufgebaut. Der Store ist ein Objekt, das den Zustand der Anwendung enthält. Der Store wird mit der Funktion **createStore** erstellt, die von Redux bereitgestellt wird.

Hier ist ein Beispiel, wie man einen Store mit der Funktion **createStore** erstellt:

*js*.
import { createStore } from 'redux';

const store = createStore();
\`\`\`

Der Store hat drei wichtige Methoden:

- **getState:** Gibt den aktuellen Zustand der Anwendung zurück.
- **dispatch:** Ermöglicht das Versenden von Aktionen, um den Zustand der Anwendung zu ändern.
- **subscribe:** Ermöglicht es Ihnen, eine Callback-Funktion zu registrieren, die jedes Mal aufgerufen wird, wenn sich der Zustand der Anwendung ändert.

Hier ist ein Beispiel für die Verwendung der Methode **getState**:

*js
const state = store.getState();
\`\`\`

Hier ist ein Beispiel für die Verwendung der Methode **dispatch**:

\`\`\`js
store.dispatch({ type: 'INCREMENT' });
\`\`\`

Hier ist ein Beispiel für die Verwendung der **subscribe**-Methode:

\`\`\`js
store.subscribe(() => {
  console.log('Der Zustand hat sich geändert.');
});
\`\`\`

## **Reduzierer**

Der Store enthält den Zustand der Anwendung, aber wie wird der Zustand tatsächlich aktualisiert? Hier kommen **Reduzierer** ins Spiel.

Ein Reducer ist eine Funktion, die für die Aktualisierung des Zustands der Anwendung verantwortlich ist. Immer wenn Sie **store.dispatch** aufrufen, um eine Aktion zu versenden, ruft der Store die Reducer-Funktion auf und übergibt ihr zwei Argumente:

- **Der aktuelle Zustand der Anwendung.** Dies ist das erste Argument, das an die Reducer-Funktion übergeben wird.
- **Die Aktion, die versandt wurde.** Dies ist das zweite Argument, das an die Reducer-Funktion übergeben wird.

Die Reducer-Funktion ist für die Rückgabe des neuen Zustands der Anwendung verantwortlich. Hier ist ein Beispiel für eine Reduzierfunktion:

\`\`\`js
function reducer(state, action) {
  // Berechnet den neuen Zustand der Anwendung und gibt ihn zurück
}
\`\`\`

Sie können die Funktion reducer an die Funktion **createStore** übergeben, um den Speicher zu erstellen:

\`\`\`js
import { createStore } von 'redux';

const store = createStore(reducer);
\`\`\`

## **Aktionen**

In Redux sind **Actions** einfache JavaScript-Objekte, die eine Absicht darstellen, den Zustand der Anwendung zu ändern. Aktionen werden mit Action Creators erstellt, die einfach Funktionen sind, die Aktionen zurückgeben. Hier ist ein Beispiel für einen Action Creator:

\`\`\`js
function incrementActionCreator() {
  return {
    Typ: 'INCREMENT'
  };
}
\`\`\`

Mit der Methode **store.dispatch** können Sie Aktionen versenden, um den Zustand der Anwendung zu ändern:

\`\`\`js
store.dispatch(incrementActionCreator());
\`\`\`

## **Aktionstypen**

Aktionen sind einfache JavaScript-Objekte und können daher mit Objektliteralen erstellt werden. Es ist jedoch eine gute Idee, String-Konstanten für Ihre Aktionstypen zu definieren. Dies hilft, Tippfehler zu vermeiden und erleichtert die gemeinsame Nutzung von Aktionstypen in verschiedenen Modulen. Hier ein Beispiel für die Definition von Aktionstypen unter Verwendung von Stringkonstanten:

\`\`\`js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
\`\`\`

Hier ist ein Beispiel für die Verwendung der Aktionstypen in einem Action Creator:

\`\`\`js
function incrementActionCreator() {
  return {
    Typ: INCREMENT
  };
}
\`\`\`


## **Aktionsersteller**

In Redux sind **Action Creators** Funktionen, die Aktionen zurückgeben. Aktionsersteller werden typischerweise mit der von Redux bereitgestellten Hilfsfunktion **actionCreator** definiert. Hier ist ein Beispiel, wie man einen Action Creator mit der Hilfsfunktion **actionCreator** definiert:

*js*.
importiere { actionCreator } von 'redux';

const incrementActionCreator = actionCreator(INCREMENT);
\`\`\`

Hier ist ein Beispiel für die Verwendung des Action Creators:

\`\`\`js
store.dispatch(incrementActionCreator());
\`\`\`

## **Reduzierer**

In Redux sind **Reduzierer** Funktionen, die für die Aktualisierung des Zustands der Anwendung verantwortlich sind. Reducers werden typischerweise mit der von Redux bereitgestellten Hilfsfunktion **reducer** definiert. Hier ist ein Beispiel, wie man einen Reducer mit der **reducer**-Helper-Funktion definiert:

**reducer** js
importiere { reducer } von 'redux';

const counterReducer = reducer(0, {
  [INCREMENT]: (state, action) => state + 1,
  [DECREMENT]: (state, action) => state - 1
});
\`\`\`

Hier ist ein Beispiel für die Verwendung der Reduzierfunktion:

\`\`\`js
const state = counterReducer(0, incrementActionCreator());
\`\`\`

## **Redux-Middleware**

In Redux ist **Middleware** der Code, der zwischen dem Speicher und den Reduzierern sitzt. Middleware kann verwendet werden, um gesendete Aktionen abzufangen, eine gewisse Logik auszuführen und dann neue Aktionen zu senden.

Redux verfügt über mehrere eingebaute Middleware-Funktionen:

- **applyMiddleware:** Ermöglicht es Ihnen, mehrere Middleware-Funktionen auf den Store anzuwenden.
- **bindActionCreators:** Ermöglicht es, mehrere Action Creators an die **dispatch**-Methode des Stores zu binden.
- **combineReducers:** Ermöglicht es Ihnen, mehrere Reducer zu einer einzigen Reducer-Funktion zu kombinieren.
- **compose:** Ermöglicht es Ihnen, mehrere Funktionen zu einer einzigen Funktion zusammenzufassen.

Hier ist ein Beispiel für die Verwendung der Middleware-Funktion **applyMiddleware**:

**js
importiere { createStore, applyMiddleware } von 'redux';

const store = createStore(reducer, applyMiddleware(middleware1, middleware2));
\`\`\`

Hier ist ein Beispiel für die Verwendung der Middleware-Funktion **bindActionCreators**:

\`\`\`js
importiere { bindActionCreators } von 'redux';

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
\`\`\`

Hier ist ein Beispiel für die Verwendung der Middleware-Funktion **combineReducers**:

\`\`\`js
importiere { combineReducers } von 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});
\`\`\`

Hier ist ein Beispiel für die Verwendung der Middleware-Funktion **compose**:

\`\`\`js
importiere { compose } von 'redux';

const composedFunction = compose(func1, func2, func3);
\`\`\`

## **Redux DevTools**

Redux DevTools ist eine Browsererweiterung für Chrome und Firefox, die Werkzeuge zum Debuggen von Redux-Anwendungen bereitstellt. Sie ermöglicht es Ihnen, den Zustand Ihrer Anwendung zu jedem beliebigen Zeitpunkt zu überprüfen, eine Historie der ausgeführten Aktionen einzusehen und sogar eine "Zeitreise" zu einem früheren Zustand der Anwendung zu unternehmen.

Hier ist ein Beispiel für die Verwendung von Redux DevTools:

\js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware)));
\`\`\`

## **Redux Thunk**

Redux Thunk ist eine Middleware-Funktion für Redux, die es erlaubt, Action Creators zu schreiben, die eine Funktion statt einer Action zurückgeben. Der Thunk kann verwendet werden, um das Versenden einer Aktion zu verzögern, oder um sie nur dann zu versenden, wenn eine bestimmte Bedingung erfüllt ist. Die innere Funktion erhält die Speichermethoden **dispatch** und **getState** als Parameter.

Hier ist ein Beispiel für die Verwendung von Redux Thunk:

**js**.
importiere { createStore, applyMiddleware } von 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
\`\`\`

Hier ist ein Beispiel dafür, wie man einen Action Creator schreibt, der eine Funktion zurückgibt:

\`\`\`js
function incrementAsync() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(incrementActionCreator());
    }, 1000);
  };
}
\`\`\`


`;
