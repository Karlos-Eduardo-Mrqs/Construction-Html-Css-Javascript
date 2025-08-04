# Note 👁️

- [Read the previous chapter to continue](../DeclarationAndExpressions-Number_07/DeclarationAndExpressions.md)

---

## Arrow Functions

Simply put, an arrow function is a more concise way to write a function in JavaScript. It optimizes your code, making it cleaner and increasing readability. Arrow functions are especially useful for callback functions or small, quick functions.

![image](https://github.com/user-attachments/assets/4abb9907-662a-484a-9cce-4ec456ce7e91)

As you can see, creating arrow functions makes it easier to create and use functions in JavaScript. They are a shortened form of function expressions.

## Difference Between a Conventional Function and an Arrow Function

Below, see an example of the difference between the traditional form and the arrow function form:

![image](https://github.com/user-attachments/assets/e48f3109-aae1-4ad7-9bc8-ac7b6907359d)

## Basic Arrow Function Syntax

```js
// Traditional Function
function salutation(name) {
return `Hello, ${name}!`;
}

// Equivalent Arrow Function
const salutation = (name) => `Hello, ${name}!`;
```

---

## Generator Functions

Generator functions are special functions that allow you to pause and resume code execution. They are useful for generating sequences of values on demand, especially in structures like loops and asynchronous iterations.

![image](https://github.com/user-attachments/assets/91b93755-51c2-43a0-9ef2-da20dbd47d7b)

## What's going on?

The counter function is a generator function because it is declared with an asterisk (``function* counter()``).

Each yield pauses the function's execution and returns a value. The function can be resumed later using ``.next()``.

```js
function* counter() {
yield 1;
yield 2;
yield 3;
}

const count = counter();

console.log(count.next().value); // 1
console.log(count.next().value); // 2
console.log(count.next().value); // 3
console.log(count.next().value); // undefined (end)
```

---

### Yield

Yield is what makes generator functions special. It allows you to pause the function at specific points, return values, and then resume execution exactly where you left off. This is useful for creating sequences of values or controlling complex workflows.

### Yield Sequences

1. First yield: When count.next() is called for the first time, execution of the counter function begins and stops at the first yield, returning 1.

2. Second yield: Execution resumes with the next next(), which advances the function to the next yield, returning 2.

3. Third yield: The process repeats, returning 3.

4. Final yield: After the last yield, the function terminates, and the next next() returns undefined, indicating that the sequence has ended.

---

## Next Chapter

- [Continued in the next chapter](../Constructions-Number_09/Construction.md)
