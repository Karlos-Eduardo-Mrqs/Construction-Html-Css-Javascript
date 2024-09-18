# JavaScript String Methods
Character sequences make up strings in JavaScript. They are handled like simple data types. When invoking string methods on strings in JavaScript, the strings are automatically transformed into string objects.

## 1. Measurement and Character Retrieval Methods
- **length:** Returns the length of a string.
![image](https://github.com/user-attachments/assets/d3c13bfe-171c-47e4-88c1-bde61e718306)

- **charAt(index):** Returns the character at a specified position.
![image](https://github.com/user-attachments/assets/75e9318b-84ee-446b-a41d-190370f9c788)

- **charCodeAt(index):** Returns the Unicode of the character at a specified position.
![Captura de tela 2024-08-27 101703](https://github.com/user-attachments/assets/a5dd416c-673b-49e9-bb98-1c6bebc51485)

## 2. String Extraction Methods
- **slice(start, end):** Extracts a part of a string and returns the extracted part in a new string.
![image](https://github.com/user-attachments/assets/dd7b4765-252c-4706-9510-9caddb7a669a)

Depending on the form in which you attribute the parameters of a slice, you have other results. For example:
![image](https://github.com/user-attachments/assets/d1fdfc9f-7175-431b-9437-ce61d3e837b8)
![image](https://github.com/user-attachments/assets/cfa798a5-ae5e-4e9c-804f-4dc2829f7a0e)

- **substring(start, end):** Similar to slice(), but cannot accept negative indices.
![image](https://github.com/user-attachments/assets/38a2478d-d17a-44b3-b465-84fbf634a80e)
### Illustration Example
![image](https://github.com/user-attachments/assets/157d4e22-1460-49ab-9ece-895f6a844502)

## 3. Case Conversion Methods
- **toLowerCase() and toUpperCase():** A string is converted to upper case with toUpperCase(). A string is converted to lower case with toLowerCase():
![image](https://github.com/user-attachments/assets/091412e3-949a-40a4-963d-b43abc214a18)

## 4. String Concatenation Methods
- **concat(string1, string2, ...):** Joins two or more strings and returns a new string.
![image](https://github.com/user-attachments/assets/59bb39fe-3657-4023-8f46-461c2bfe31de)

Or, if you prefer, you can use the operator "+" to join the strings :
![image](https://github.com/user-attachments/assets/bf57b525-ebdf-4b20-b0f2-792aebc106e8)

## 5. Whitespace Removal Methods
- **trim():** Removes whitespace from both sides of a string.
![image](https://github.com/user-attachments/assets/46d81370-efd2-43f4-a89c-f45c77d43862)
- **trimStart():** Removes whitespace only from the start of a string.
![image](https://github.com/user-attachments/assets/a85bdb9d-3572-4b27-a885-5416444a751a)
- **trimEnd():** Removes whitespace only from the end of a string.
![image](https://github.com/user-attachments/assets/5b244241-0b33-4967-bfe9-6d583fa9ebe0)

## 6. Padding Methods
- **padStart(targetLength, padString):** Pads the current string with another string (multiple times, if needed) until it reaches the target length, starting from the beginning.
- **padEnd(targetLength, padString):** Pads the current string with another string (multiple times, if needed) until it reaches the target length, starting from the end.

![image](https://github.com/user-attachments/assets/1d2f76c6-e9a9-454e-9ef7-638194ecaebb)

## 7. Repetition Method
- **repeat(count):** Returns a new string with a specified number of copies of the string it was called on.
![image](https://github.com/user-attachments/assets/ff911e4f-df7f-4081-9705-a94472839dae)

## 8. String Replacement Methods
- **replace(searchValue, newValue):** Replaces the first occurrence of a specified value with another value in a string.
![image](https://github.com/user-attachments/assets/35468e09-fbc7-4906-9a7f-29efb6cf57fb)

# [Continue in Part 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Strings-Number_10/Search_Strings.md)
