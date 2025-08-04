# Note 👁️

- [Read Part 2!](Array_Search.md)

---

## 🗺️ JavaScript Maps

The `Map` object in JavaScript contains key-value pairs and preserves the original insertion order. It accepts any data type as a key or value — including objects, numbers, strings, and even NaN.

This flexibility makes it ideal for managing structured data dynamically and efficiently.

---

## 💡 When to use Maps?

Use `Map` when:

- You need to store key-value pairs with unique keys;
- The keys are not known at development time;
- You want efficient access and specific methods to manipulate the data.

> 🔑 Unlike common objects (`{}`), the keys of a `Map` can be of **any type**.

![Visual Example of a Map](https://github.com/user-attachments/assets/fa3d65b7-7a6e-4470-baa0-581b0fd9f9ef)

---

### 🧱 Structure of a Map

A `Map` is created and populated as follows:

```javascript
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
```

![image](https://github.com/user-attachments/assets/b7d9cdb8-7f81-4ea7-9719-1eb23bc5bf2e)

---

## 🔧 Manipulation Methods

- **`Map.set(key, value)`**
Adds or updates a key-value pair in the map.
![image](https://github.com/user-attachments/assets/08f56ca6-1229-44f8-9d0c-ee26d318e458)

- **`Map.delete(key)`**
Removes an item from the map based on the provided key.
![image](https://github.com/user-attachments/assets/8f61724f-6d5b-47fc-9f9f-2fa29243ac2e)

- **`Map.clear()`**
Removes **all elements** from the map.
![image](https://github.com/user-attachments/assets/4f958353-4e1f-4ca1-9c17-895b8d48b925)

- **`Map.size`**
Returns the total number of pairs in the map. ![image](https://github.com/user-attachments/assets/d7dae3b5-c97c-4995-a421-880f9fdd8cfe)

---

## 🎯 Selection Methods

- **`Map.values()`**
Returns an **iterator with the values** of the map.
![image](https://github.com/user-attachments/assets/a5c279d8-9086-4e0b-abd6-83b7671f79e0)

- **`Map.entries()`**
Returns an iterator with the **`[key, value]`** pairs.
![image](https://github.com/user-attachments/assets/76bd37f7-beea-44ab-9e15-727f805d3dd8)

- **`Map.keys()`**
Returns an **iterator with the keys** of the map.
![image](https://github.com/user-attachments/assets/60d8a9b4-4956-4c67-918a-2eeed85982a1)

---

## 🔍 Search Methods

- **`Map.get(key)`**
Returns the **value associated** with the provided key.
![image](https://github.com/user-attachments/assets/c944e6b5-b5a4-491f-935c-666dc7dad1ea)

- **`Map.has(key)`**
Returns `true` if the key exists in the map, or `false` otherwise.
![image](https://github.com/user-attachments/assets/17c61f0c-2d0e-45a6-ba82-f93d4312ebe2)

---

## Next Chapter

- [Next Chapter](../Dates-Number_13/Date.md)
