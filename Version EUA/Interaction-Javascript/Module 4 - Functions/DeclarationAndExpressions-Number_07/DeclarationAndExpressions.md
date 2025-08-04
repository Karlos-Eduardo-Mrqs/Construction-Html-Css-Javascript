# Note 👁️

- [Read the looping section first!](../../Module%203%20-%20Loopings/Loopings-Number_06/Loopings.md)

---

## Procedures

Procedures are structures that group a set of commands that are executed when the procedure is called. They are program routines (fragments or modules) that perform a task defined by the programmer.

We also have functions, which differ from procedures because they return a value (for example, a function that calculates square roots returns a number).

---

### What are the differences?

![1_dqABRmyYhz7boiQAbaRP9Q](https://github.com/user-attachments/assets/7a511566-78c2-440e-a997-0621a364979c)

Functions have an input and an output, while procedures typically perform an action without returning a value.

---

## Types of Functions in JavaScript

### 1. Function Declaration

The most basic way to define functions in JavaScript is through the function declaration, which begins with the keyword `function`. Example:

![image](https://github.com/user-attachments/assets/610137f1-e9f8-4745-8c28-5e340ee70c2c)

Important Parts:

- **Function Name:** Can contain letters, numbers, underscores (_), but not special symbols.

- **Parameters:** Variables that define specific values for the function (e.g., two numbers to add).

- **Call:** Invoke the function by name, for example, `console.log(functionName())`.

---

### 2. Function Expression

A function expression occurs when you create a function and assign it to a variable. The function only exists from the moment the line is executed. Example:

![image](https://github.com/user-attachments/assets/f488d91c-9548-4083-8a29-2b769a7b1e96)

**Important Parts:**

- **Function Name:** Can be anonymous or named, usually omitted in expressions.

- **Parameters:** Variables that define values, as in the declaration.

- **Call:** Invoke the function by variable name, e.g., `console.log(variableName())`.

---

#### Expression X Declaration

| Aspect | Function Declaration | Function Expression |
|-----------------|-----------------------------------------|------------------------------------|
| **Hoisting** | Functions are hoisted and can be called before the declaration | Only the variable is hoisted; the function only exists after the definition |
| **Flexibility** | Less flexible, fixed and declarative name | Can be anonymous, used at runtime, and assigned to variables |

---

### Hoisting

Hoisting is a JavaScript behavior in which variable and function declarations are **"moved" to the top of the scope** (global or local) before code execution.

In practice, JavaScript treats the code as if all declarations were at the top, even if they appear later.

---

#### Hoisting in the cited examples

- **Functions declared with `function`** are fully elevated, including the function body. Thus, they can be called before their declaration in the code.

- **Function expressions:** only the variable declaration (using `var`) is elevated, but the function will only be available after the definition line.

- Using `let` or `const`, attempting to access the variable before the declaration generates an error.

![maxresdefault](https://github.com/user-attachments/assets/5bf77ca5-0dd0-4f8b-8951-7464871bce53)

---

## Next Chapter

- [Continued in the next chapter](../ArrowAndGenerator-Number_08/ArrowGenerator.md)
