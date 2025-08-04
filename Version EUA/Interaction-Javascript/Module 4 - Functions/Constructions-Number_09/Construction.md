# Note 👁️

- [Read the previous chapter first!](../ArrowAndGenerator-Number_08/ArrowGenerator.md)

---

## Construction Function

Constructor functions are declared and defined like any other expression or statement; the way they are used is the same. The difference lies more in the use case and what they return. A small note is that constructor function names usually start with a capital letter, for example:

![image](https://github.com/user-attachments/assets/496724b6-3287-4acd-82a0-348c27c1f214)

In this example, we are creating a constructor function that will create a `Person` object.

---

## Constructor Invocation

The main difference between a constructor function and a regular function is how it is invoked. While ordinary functions only need to be named and called with parentheses, constructor functions need to be invoked with the keyword `new`:

![image](https://github.com/user-attachments/assets/4c6bd152-f6eb-4b61-a033-8a9a75daadb8)

Using constructor functions can be very useful, as we can create objects in a simplified way:

![image](https://github.com/user-attachments/assets/add62e4e-45a7-495f-8b23-341329776e62)

---

## Term `new`

When we use the `new` keyword to invoke a function, JavaScript automatically creates a new object for us behind the scenes. This object can be referenced using `this`.

When we execute `this.nome = name`, we are adding a new property called `name` to the newly created object, where the property value will be the value provided in the function parameter.

---

## Term `this`

The term `this` in JavaScript refers to the **current execution context**, that is, the object to which the code is associated at the time of execution. The value of `this` can vary depending on **how the function is called** and **where it is used**. Here are some of the main ways `this` is used:

---

## 1. **Global Function**

When you use `this` in a function that is not associated with any object, `this` refers to the **global object**. In a browser environment, this global object is `window`.

![image](https://github.com/user-attachments/assets/38961df5-1176-4eaf-9607-f6f0cece22b6)

---

## 2. **Object Methods**

When `this` is used inside an object's method, it refers to the **object that called the method**.

![image](https://github.com/user-attachments/assets/f699fa80-2c14-4bc0-8df6-34ec88345b62)

---

## 3. **Constructor Function**

Inside a constructor function, `this` refers to the **new object being created**.

![image](https://github.com/user-attachments/assets/add62e4e-45a7-495f-8b23-341329776e62)

---

## 4. Arrow Function

Arrow functions behave differently than `this`. They don't have their own `this`. Instead, they inherit `this` from the context where they were defined.

![image](https://github.com/user-attachments/assets/e7312aa5-12a1-4a98-8de2-8d99b9eafb15)

---

## How to control `this`?

The bind, call, and apply methods in JavaScript are used to control the value of `this` in functions. They allow you to explicitly define the context (i.e., `this`) in which the function should be executed. Let's detail each of them:

---

### 🔗 `bind()`

Creates a new function with `this` set to a specific value.

![image](https://github.com/user-attachments/assets/bddb8fd7-45f0-4627-8dd0-5e967dad2869)

With a new function (`showMessageAna`), `this` will be bound to the `person` object and the predefined `'Hi'` argument. When `showMessageAna` is called, it uses `this` as the `person` and prints the message.

---

### 📞 `call()`

Invokes a function **immediately** with `this` and specified arguments.

![image](https://github.com/user-attachments/assets/eb3c0edb-2dcc-40a1-be93-2f0397927fa8)

Calls the `calculateArea` function with `this` set to `null` (not used in this case) and passes `width` and `height` as arguments.

---

### 📤 `apply()`

Invokes a function **immediately**, with `this` and arguments **provided as an array**.

![image](https://github.com/user-attachments/assets/ccb934c5-3602-47bf-8674-484d382bf38d)

Calls the `add` function with `this` set to `null` (not used in this case) and passes the numeric arguments as an array.

---

## 🧠 Summary

- ✅ Use `bind()` when you need to create a new function with a fixed `this` and predefined arguments.

- ✅ Use `call()` when you want to immediately call a function, passing arguments one by one.

- ✅ Use `apply()` when you want to immediately call a function, passing arguments in an array.

---

## Next Module

- [Continued in the next module](../../Module%205%20-%20Methods%20And%20Data%20Manipulation/)
