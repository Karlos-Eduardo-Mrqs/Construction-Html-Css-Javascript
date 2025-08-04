# Note 👁️

- [Return to Part One to Continue](Strings.md)

---

## 📌 String Search and Verification Methods

String searches often involve searching for specific values or checking for patterns. Below are some of the main categories and methods for these tasks:

---

### 🔍 1. Index Search Methods

These methods are used to return the index of the **first or last occurrence** of a specified value in a string.

If the value **is not found**, the method returns `-1`.

- **`String.indexOf(value)`**
Returns the index of the **first occurrence** of a specified value.

![image](https://github.com/user-attachments/assets/f30200f4-e46f-4663-a360-58aee3fe2ea6)

- **`String.lastIndexOf(value)`**
Returns the index of the **last occurrence** of a specified value.
![image](https://github.com/user-attachments/assets/978d4d10-dcfe-4412-a2f3-63c6bdbbbeeb)

---

### ⚙️ 2. Regular Expression Search Method

Use regular expressions to check for specific patterns in a string.
If there is no match, the method returns `-1`.

- **`String.search(value)`**
Returns the index of the **first match** of a regular expression.

![image](https://github.com/user-attachments/assets/a55da8bf-b37c-48fe-b0aa-7f6ac934213f)

---

### 📚 3. Pattern Matching Methods

These methods return all pattern matches in a string, using regular expressions.

- String.match()
Returns an array with all matches found, or null if none are found. ![image](https://github.com/user-attachments/assets/04c886a3-e920-48c1-be92-8d7c79834999)

- **`String.matchAll()`**
Returns an **iterator with all matches**, using a regular expression with the `"g"` (global) flag.
![image](https://github.com/user-attachments/assets/055ae045-62da-408f-b72d-1af56728a5b2)

---

### ✅ 4. Substring Checking Methods

Checks if a specific **substring** exists in the main string, returning `true` or `false`.

- **`String.includes(value)`**
Checks if a string contains a specified value.
![image](https://github.com/user-attachments/assets/805f0235-cc26-4bbb-a2a9-67cdad40a1c6)

- **`String.startsWith(value)`**
Checks if a string **starts** with the specified value.
![image](https://github.com/user-attachments/assets/92be932a-dd6e-4d84-bfb2-34d88647a516)

- **`String.endsWith(value)`**
Checks if a string **ends** with the specified value. ![image](https://github.com/user-attachments/assets/0ecab528-7d23-41eb-9321-188487f71b03)

---

## 🧾 Conclusion

These methods are essential in many string manipulation operations, providing efficient and practical ways to perform searches and checks within text.

🔗 Tip: Combine these methods with conditionals to filter, validate, or highlight information in JavaScript applications.

---

## Next Chapter

- [Continued in the next chapter](../Numbers-Number_11/Numbers.md)
