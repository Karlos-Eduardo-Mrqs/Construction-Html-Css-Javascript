# [Return Part One For Continue](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Strings-Number_10/Strings.md)

# Search and Verification Methods in Strings
Strings often involve searching for specific values ​​or checking for patterns. Here are some of the main categories and methods for these tasks:

## 1. Index search methods
These methods are used to return the index of the first or last occurrence of a specified value in a string. If the value is not found, returns -1.

- **String.indexOf(value):** Returns the index of the first occurrence of a specified value. 
![image](https://github.com/user-attachments/assets/f30200f4-e46f-4663-a360-58aee3fe2ea6)

- **String.lastIndexOf(value):** Returns the index of the last occurrence of a specified value.
![image](https://github.com/user-attachments/assets/978d4d10-dcfe-4412-a2f3-63c6bdbbbeeb)

## 2. Regular Expression Search Method
Use regular expressions to check for specific patterns within a string. If there is no match, returns -1.

- **String.search(value):** Returns the index of the first match for a regular expression. 
![image](https://github.com/user-attachments/assets/a55da8bf-b37c-48fe-b0aa-7f6ac934213f)

## 3. Pattern Matching Methods
These methods return all pattern matches in a string, using regular expressions.

- **String.match():** Returns an array with all matches found or null if no matches were found.
![image](https://github.com/user-attachments/assets/04c886a3-e920-48c1-be92-8d7c79834999)

- **String.matchAll():** Returns an iterator with all matches found using a regular expression with the "g" (global) flag.
![image](https://github.com/user-attachments/assets/055ae045-62da-408f-b72d-1af56728a5b2)

## 4. Substring checking methods
Check if there is a specific substring within the main string. Returning true or false.

- **String.includes(value):** Check whether a string contains a specified value. 
![image](https://github.com/user-attachments/assets/805f0235-cc26-4bbb-a2a9-67cdad40a1c6)

- **String.startsWith(value):** Checks whether a string starts with a specified value. 
![image](https://github.com/user-attachments/assets/92be932a-dd6e-4d84-bfb2-34d88647a516)

- **String.endsWith(value):** Check whether a string ends with a specified value. 
![image](https://github.com/user-attachments/assets/0ecab528-7d23-41eb-9321-188487f71b03)

These methods are essential in many string manipulation operations, providing an efficient and practical way to perform searches and verifications.
