# Note 👁️

- [Read the previous chapter](../Numbers-Number_11/Math.md)

---

## 🧮 Methods with Arrays

The `Array` object, like arrays in other programming languages, allows you to store a collection of multiple items under a single variable name and has members for performing common array operations.

---

### 🔎 Access Methods and Information

- **`Array.length`**
Returns the number of elements in the array.
![image](https://github.com/user-attachments/assets/61ed6110-de81-4764-8a9d-ca60749c7381)

- **`Array.at(index)`**
Returns the element at the specified position.

![image](https://github.com/user-attachments/assets/d13eb41e-cb94-41e7-abf6-1ce91ab030e0)

- **`Array.toString()`**
Converts the array to a string, with elements separated by commas.
![image](https://github.com/user-attachments/assets/a31f9ff2-a3a9-4804-b82b-9539d2da54f9)

- **`Array.join(separator)`**
Joins all elements of the array into a string, using a specified separator.
![image](https://github.com/user-attachments/assets/8e1b6c24-9660-4a8c-9c1e-4fe55f90c28c)

---

## 🧱 Creation and Modification Methods

- **`Array.push(element1, element2, ...)`**
Adds one or more elements to the end of the array.
![image](https://github.com/user-attachments/assets/1261080c-1658-4943-bd1b-91760c6531f9)

- **`Array.unshift(element1, element2, ...)`**
Adds one or more elements to the beginning of the array.
![image](https://github.com/user-attachments/assets/d8f6d339-19c6-46f6-8983-09b24fa634c2)

- **`Array.splice(start, deleteCount, item1, item2, ...)`**
Adds, removes, or replaces elements within the array:

1. `start`: index at which the modification begins
2. `deleteCount`: number of elements to remove
3. `item1, item2...`: elements to be added

![image](https://github.com/user-attachments/assets/e3a5d122-fb48-46b6-b3d9-ab6c4ccdea1c)

1. **`Array.concat(array2, array3, ...)`**
Joins two or more arrays and returns a new array.
![image](https://github.com/user-attachments/assets/b786d3aa-32be-4aa1-b7cc-80c9a8c03778)

### 💡 Array Logic

![image](https://github.com/user-attachments/assets/7b535e5e-d48b-4448-8ddc-64aed2ffd782)

---

## 🔁 Copy and Transformation Methods

- **`Array.slice(start, end)`**
Returns a shallow copy of a portion of the array without modifying it.
![image](https://github.com/user-attachments/assets/74ffb34a-5936-401e-b566-6c0c5577707c)

- **`Array.flat(depth)`**
"Flattens" nested arrays into a single flat structure.
![image](https://github.com/user-attachments/assets/5f7937e5-c14d-4c5a-9fdd-06ecc884558e)

- **`Array.copyWithin(destination, start, end)`**
Copies a portion of the array to another location within the same array:

1. `destination`: index where the copy will be inserted
2. `start` (optional): index where the copy begins
3. `end` (optional): index where the copy ends (not included)
![image](https://github.com/user-attachments/assets/39af0e6b-c3b6-46f5-b999-ce8ce1625451)

---

## 🗑️ Deletion Methods

- **`delete array[index]`**
Removes an element from the array, leaving the index as `undefined` (⚠️ not recommended).

![image](https://github.com/user-attachments/assets/7a81d27b-eb7e-4daf-999a-2cd45015bb00)

- **`Array.pop()`**
Removes the last element from the array.

![image](https://github.com/user-attachments/assets/fcb9bff1-ce35-4f38-85ab-8ac7dd3f5b06)

- **`Array.shift()`**
Removes the first element from the array.

![image](https://github.com/user-attachments/assets/963c16a3-b1b1-472e-b6b0-003550b361a5)

---

## Next Chapter

- [Continue in Part 2!](Array_Search.md)
