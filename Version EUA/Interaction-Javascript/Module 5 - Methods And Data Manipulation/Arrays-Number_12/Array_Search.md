# Note 👁️

- [Read Part 1!](Array_Manipulation.md)

---

## 🔍 Array Search Methods

### 🔢 Index Search Methods

These methods return the index (position) of an element in the array, or -1 if the element is not found.

- Array.indexOf(element_name)
Returns the first index at which the specified element was found in the array. Returns -1 if not found.
![image](https://github.com/user-attachments/assets/52464b93-ab05-4e79-8a49-0fd1cd6d9e7a)

- **`Array.lastIndexOf(element_name)`**
Returns the **last index** at which the specified element was found in the array. Returns `-1` if not found.
![image](https://github.com/user-attachments/assets/3ad951af-3f41-4b6a-9cc7-fd748be2d827)

---

### 🔍 Value Lookup Methods

These methods return the **value of an element** that satisfies a specific condition.

- **`Array.find(callback(element, index, array), thisArg)`**
Returns the **first element** of the array that satisfies the test function. Returns `undefined` if none is found.
![image](https://github.com/user-attachments/assets/4435ec0a-17b3-4106-89c5-53d62ccd8b31)

- **`Array.findIndex(callback_function(element, index, array))`**
Returns the **index of the first element** that satisfies the test function. Otherwise, returns `-1`.
![image](https://github.com/user-attachments/assets/b1fdf074-b5ba-4b52-92c2-3c40161a8a93)

---

### ✅ Existence Checking Methods

These methods check for the **presence of an element** within the array.

- **`Array.includes(element, fromIndex)`**
Tests whether a specific element exists in the array and returns `true` or `false`.

![image](https://github.com/user-attachments/assets/1b971c83-11ec-4799-8946-21aabadb5fcb)

---

## 📎 Keep learning

- [Continue to Part 3!](Array_Map.md)
