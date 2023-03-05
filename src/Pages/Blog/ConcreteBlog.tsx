import ReactMarkdown from "react-markdown";

const ConcreteBlog = () => {
  const markdown = `
  # **React**

React is a **popular JavaScript library** for building user interfaces. It was developed by Facebook and is widely used by developers around the world. React is an open-source project and has a large community of contributors.

## **Components**

One of the core concepts in React is **components**. Components are **reusable building blocks** that can be used to create user interfaces. React provides a simple and efficient way to create components using a syntax called JSX. JSX is a syntax that allows you to write HTML-like code in your JavaScript files. Here is an example:


In this example, we define a **Button** component that takes in **prop** as an argument. The component returns a button element with an **onClick** event handler and a label that is passed in as a prop.

## **Virtual DOM**

React uses a **virtual DOM** to optimize rendering performance. The virtual DOM is a lightweight representation of the actual DOM. When changes are made to the virtual DOM, React determines the most efficient way to update the actual DOM. This makes React very fast and efficient.

## **React Hooks**

React also introduced **hooks** in version 16.8. Hooks are functions that allow you to use React features, such as state and lifecycle methods, in functional components. Here is an example:


In this example, we use the **useState** hook to create state in a functional component. We also define an event handler that updates the state when a button is clicked.

Overall, React is a powerful and flexible library for building user interfaces. It has a large and supportive community, and continues to evolve with new features and improvements.`;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default ConcreteBlog;
