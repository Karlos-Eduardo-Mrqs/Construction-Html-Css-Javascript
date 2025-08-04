# Note 👁️

- [Read the previous module before starting](../../Modulo%204%20-%20Funções/Construtoras-Número_09/Construtoras.md)

---

## JavaScript String Methods

Sequences of specific characters are **strings** in JavaScript. They are treated as simple data types. When invoking string methods, JavaScript automatically converts a primitive string into a string object, allowing the use of several built-in methods.

---

## 1. Character Measurement and Retrieval Methods

- **`length`**: Returns the length of a string. ![image](https://github.com/user-attachments/assets/d3c13bfe-171c-47e4-88c1-bde61e718306)

- **`charAt(index)`**: Returns the character at the specified position.
![image](https://github.com/user-attachments/assets/75e9318b-84ee-446b-a41d-190370f9c788)

- **`charCodeAt(index)`**: Returns the Unicode code of the specified character.
![image](https://github.com/user-attachments/assets/a5dd416c-673b-49e9-bb98-1c6bebc51485)

---

## 2. String Extraction Methods

- **`slice(start, end)`**: Extracts part of a string and returns a new string.
![image](https://github.com/user-attachments/assets/dd7b4765-252c-4706-9510-9caddb7a669a)
Examples with different parameters:
![image](https://github.com/user-attachments/assets/d1fdfc9f-7175-431b-9437-ce61d3e837b8)
![image](https://github.com/user-attachments/assets/cfa798a5-ae5e-4e9c-804f-4dc2829f7a0e)

- **`substring(start, end)`**: Similar to `slice()`, but **does not accept negative indices**.

![image](https://github.com/user-attachments/assets/38a2478d-d17a-44b3-b465-84fbf634a80e)

- Illustration:
![image](https://github.com/user-attachments/assets/157d4e22-1460-49ab-9ece-895f6a844502)

---

## 3. Case Conversion Methods

- **`toLowerCase()`** and **`toUpperCase()`**: Convert strings to lowercase and uppercase, respectively.
![image](https://github.com/user-attachments/assets/091412e3-949a-40a4-963d-b43abc214a18)

---

## 4. String Concatenation Methods

- **`concat(string1, string2, ...)`**: Joins two or more strings.
![image](https://github.com/user-attachments/assets/59bb39fe-3657-4023-8f46-461c2bfe31de)

- You can also use the `+` operator to join strings:
![image](https://github.com/user-attachments/assets/bf57b525-ebdf-4b20-b0f2-792aebc106e8)

---

## 5. Whitespace Removal Methods

- **`trim()`**: Removes spaces from the beginning and end of the string.
![image](https://github.com/user-attachments/assets/46d81370-efd2-43f4-a89c-f45c77d43862)

- **`trimStart()`**: Removes spaces **only at the beginning**.
![image](https://github.com/user-attachments/assets/a85bdb9d-3572-4b27-a885-5416444a751a)

- **`trimEnd()`**: Removes spaces **only at the end**.
![image](https://github.com/user-attachments/assets/5b244241-0b33-4967-bfe9-6d583fa9ebe0)

---

## 6. Padding Methods

- **`padStart(targetLength, padString)`**: Pads the beginning of the string until it reaches the desired length.
- **`padEnd(targetLength, padString)`**: Pads the end of the string.

![image](https://github.com/user-attachments/assets/1d2f76c6-e9a9-454e-9ef7-638194ecaebb)

---

## 7. Repetition Method

- **`repeat(count)`**: Repeats a string the specified number of times.

![image](https://github.com/user-attachments/assets/ff911e4f-df7f-4081-9705-a94472839dae)

---

## 8. String Replacement Methods

- **`replace(searchValue, newValue)`**: Replaces the **first occurrence** of `searchValue` with `newValue`.
![image](https://github.com/user-attachments/assets/35468e09-fbc7-4906-9a7f-29efb6cf57fb)

---

## Next Chapter

- [Continuing Part 2](Search_Strings.md)
