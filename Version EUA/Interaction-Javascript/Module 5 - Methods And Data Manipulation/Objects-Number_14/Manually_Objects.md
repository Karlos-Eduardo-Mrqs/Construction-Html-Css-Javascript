# Note 👁️

- [Read part one first](../Dates-Number_13/Date.md)

---

## 🧱 Objects in JavaScript

Objects in JavaScript are **collections of key-value pairs**, where:

- The **key** is a string (or symbol) that identifies the property.
- The **value** can be any data type: `string`, `number`, `array`, `function`, `object`, etc.

> ✅ Objects allow you to **organize complex data** and represent **real entities with attributes and behaviors**.

---

## ✍️ Manual Way to Create Objects

JavaScript offers **several ways to create objects**, each suited to different contexts. Below, you can see the most common methods:

---

### 🔸 Object Literal

The simplest and most direct form:

```js
const animal = {
name: "Lion",
type: "Mammal",
species: "Feline"
};
```

> 📌 Widely used to store data or model simple entities.

![image](https://github.com/user-attachments/assets/27c2ce3e-603f-42e6-8e03-b29ca9ebf3f5)

---

### 🔸 Using `new Object()`

More explicit form, using the `Object` constructor:

```js
const person = new Object();
person.name = "Carlos";
person.age = 25; ```

> 📌 Useful when you want greater control or prototype inheritance.

![image](https://github.com/user-attachments/assets/2ca632b3-88db-4a7a-8a4f-90b5cb20c12e)

---

### 🔸 Constructor Functions

Ideal for creating **multiple instances of objects with the same structure**:

```js
function Pessoa(nome, idade) {
this.nome = nome;
this.idade = idade;
}

const aluno = new Pessoa("Maria", 22);
```

> 📌 Pattern prior to the introduction of classes (`class`) in ES6.

![image](https://github.com/user-attachments/assets/fca70436-91aa-48bf-8c55-417e5dac6d23)

---

## 🛠️ Access and Modify Objects Manually

### 🔹 Access Properties

You can access property values with:

```js
object.property;
object["property"];
```

Example:

```js
const animal = {
name: "Cat",
type: "Mammal"
};

console.log(animal.name); // "Cat"
console.log(animal["type"]); // "Mammal"
```

![image](https://github.com/user-attachments/assets/58759399-f8ed-4719-aed9-05a2be3ca17b)

---

### 🔹 Using `for...in`

Iterate through all keys of an object:

```js
for (let key in animal) {
console.log(`${key}: ${animal[key]}`);
}
```

> 🧩 Useful for dynamic iteration over objects.

![image](https://github.com/user-attachments/assets/02f4bbb1-1eeb-44f3-b7bf-49b6944df290)

---

### 🔹 Modify Properties

You can **reassign values** directly:

```js
animal.name = "Tiger";
animal.type = "Feline";
```

> ✏️ The object is mutable: properties can be changed at any time.

![image](https://github.com/user-attachments/assets/f3bdf589-ce73-4494-8904-2d82cb229e56)

---

📘 **Next step:** Object-related methods, such as `Object.keys()`, `Object.values()`, `hasOwnProperty()`, etc.

---

## Next Chapter

- 📎 [Go to Part 2 → Object Methods](Methods_Objects.md)
