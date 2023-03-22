export const English = `
# **Typescript**

Typescript is a **superset of JavaScript** that adds **static typing** to the language. It was developed by Microsoft and is widely used by developers around the world. Typescript is an open-source project and has a large community of contributors.

![https://i.stack.imgur.com/X6xWb.gif](https://i.stack.imgur.com/X6xWb.gif)
## **What is static typing?**

In JavaScript, variables are **dynamically typed**. This means that the type of a variable is determined at runtime. For example, the following code is valid in JavaScript:

\`\`\`js
let message = 'Hello world';
message = 123;
\`\`\`

In this example, the variable **message** is first assigned a string and then reassigned a number. This is valid in JavaScript because the type of **message** is determined at runtime. However, this can cause bugs in your code because you might not expect **message** to be reassigned to a number.

Typescript adds **static typing** to the language. This means that the type of a variable is determined at compile time. For example, the following code is invalid in Typescript:

\`\`\`ts
let message = 'Hello world';
message = 123;
\`\`\`

In this example, the variable **message** is first assigned a string and then reassigned a number. This is invalid in Typescript because the type of **message** is determined at compile time. This means that Typescript will throw an error if you try to reassign **message** to a number.

## **Typescript features**

Typescript adds many new features to JavaScript, including:

- **Interfaces:** Interfaces allow you to define the shape of an object.
- **Classes:** Classes allow you to define classes and methods.
- **Generics:** Generics allow you to define functions that work with a variety of types.
- **Enums:** Enums allow you to define a set of named constants.

## **Typescript vs JavaScript**

JavaScript and Typescript are very similar. In fact, Typescript is a superset of JavaScript, which means that all valid JavaScript code is also valid Typescript code. However, there are some differences between the two languages. Here are some of the most important differences:

- **Static typing:** Typescript adds static typing to the language. This means that the type of a variable is determined at compile time.
- **Optional types:** Typescript allows you to define optional types using the **?** operator. This means that a variable can be assigned a value of any type, or it can be assigned the value **undefined**.
- **Type assertions:** Typescript allows you to use **type assertions** to tell the compiler that a variable has a specific type. Type assertions are similar to type casts in other languages.
- **Interfaces:** Typescript allows you to define interfaces to define the shape of an object.

## **Why use Typescript?**

There are many reasons why you might want to use Typescript in your application. Here are some of the most common reasons:

- **Better code completion:** Typescript provides better code completion than JavaScript.
- **Better type checking:** Typescript provides better type checking than JavaScript.
- **Large community:** Typescript has a large community of contributors and users, and is widely used by developers around the world.

## **Typescript vs Flow**

Typescript and Flow are two popular static typing systems for JavaScript. Both are widely used by developers around the world. Both Typescript and Flow are open-source projects and have large communities of contributors.

The main difference between Typescript and Flow is that Typescript is a superset of JavaScript, while Flow is a **static type checker** for JavaScript. This means that all valid JavaScript code is also valid Typescript code, but not all valid JavaScript code is valid Flow code.`;
