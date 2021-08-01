---
title: JS Cheatsheet
---

Published on August 1, 2021

## Var, Let and Const

[Javascript ES6](https://www.w3schools.com/Js/js_es6.asp) introduced two new keywords to define variables, `let` and `const`. Previously, the keyword `var` was the only way to do so. `let` and `const` were introduced because there were issues with `var` which made it error-prone and hard to debug.

|                                   | `var`              | `let`            | `const`          |
| --------------------------------- | ------------------ | ---------------- | ---------------- |
| Scope                             | Global or Function | Block scope `{}` | Block scope `{}` |
| Must be initialized when declared | No                 | No               | Yes              |
| Can use before initialization     | Yes                | No               | No               |
| Can be redeclared                 | Yes                | No               | No               |
| Can be updated                    | Yes                | Yes              | No               |
| Hoisted to start of scope         | Yes                | Yes              | Yes              |

Avoid using `var` because it is either global or function scope, and a declaration and assignment of a `var` can easily be redeclared or updated unknowingly in another function. Furthermore, a `var` is initialized with `undefined` and can be used even before being assigned a value.

On the other hand, `let` and `const` are block scope, and cannot be redeclared. Additionally, `const` cannot be updated. Both `let` and `const` also cannot be used before initialization, and will throw `Reference error` rather than return `undefined` like `var`.

:::note Quote

"Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution." - Sarah Chima Atuonwu, [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

:::

## Resources

- [Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
