# Note 👁️

- [Read the previous chapter first](../Strings-Number_10/Search_Strings.md)

---

## 📊 Number Methods and Properties in JavaScript

**Numbers in JavaScript** are primitive types and, unlike other languages like C or Java, do not require the distinction between `int`, `float`, etc.

> ⚙️ All numbers in JavaScript are stored in **64-bit floating-point format** (IEEE 754).

---

## 🔐 1. Number Properties

- **`Number.EPSILON`**
Returns the smallest difference between 1 and the smallest number greater than 1.

```js
console.log(Number.EPSILON); // 2.220446049250313e-16
```

- **`Number.MAX_VALUE`**
Largest representable number.

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

- **`Number.MIN_VALUE`**
Smallest representable positive value.

```js
console.log(Number.MIN_VALUE); // 5e-324
```

- **`Number.MAX_SAFE_INTEGER`**
Largest safe integer.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

- **`Number.MIN_SAFE_INTEGER`**
Smallest safe integer.

```js
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

- **`Number.POSITIVE_INFINITY`**
Represents positive infinity.

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
```

- **`Number.NEGATIVE_INFINITY`**
Represents negative infinity.

```js
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

- **`Number.NaN`**
``Not-a-Number`` value used for invalid results.

```js
console.log(Number.NaN); // NaN
```

---

## 🔄 2. Conversion Methods

- **`toString()`**
Converts a number to a string.
![image](https://github.com/user-attachments/assets/ed25b0c0-f5ba-42ec-83df-32f8c8c019fc)

- **`Number()`**
Converts string/boolean/other to a number.
![image](https://github.com/user-attachments/assets/c9c92a10-d2b6-4b4a-a1d5-acd711d70416)

- **`parseInt(string, radix)`**
Converts a string to an integer.
![image](https://github.com/user-attachments/assets/956f7522-6d8e-4f75-8529-69d87f932f5a)

- **`parseFloat()`**
Converts a string to a decimal number.
![image](https://github.com/user-attachments/assets/33bffa79-c083-4c49-a873-0cf3d596e121)

---

## 🎯 3. Formatting Methods

- **`toExponential(fractionDigits)`**
Converts a number to exponential notation.
![image](https://github.com/user-attachments/assets/ffc0b07f-f479-4bf6-a693-7b7b244e8101)

- **`toFixed(digits)`**
Formats a number with fixed decimal places. ![image](https://github.com/user-attachments/assets/4dc8334c-5c21-46ff-a8ce-91c93c3bd520)

- **`toPrecision(precision)`**
Formats a number with a defined precision.
![image](https://github.com/user-attachments/assets/583d43e5-f15a-4d8c-8673-862e221d3e5a)

---

## 🧱 4. Value Method

- **`valueOf()`**
Returns the primitive value of a Number object.
![image](https://github.com/user-attachments/assets/ebeba10b-6135-4eef-849b-7b40a85c666d)

---

## ✅ Conclusion

These properties and methods are fundamental for manipulating, converting, and formatting numbers in JavaScript. Understanding these functions allows you to create safer, more standardized, and efficient calculations.

---

## Next Chapter

- [📘Continue to Part 2 — Math Class Methods](Math.md)
