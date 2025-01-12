# Javascript Numbers Methods And Properties
JavaScript numbers are primitive data types, and, unlike other programming languages, you don’t need to declare different numeric types like int, float, etc. JavaScript numbers are always stored in double-precision 64-bit binary format (IEEE 754).

## 1. Number Properties
- **EPSILON:** Represents the smallest difference between 1 and the smallest floating-point number greater than 1. ``console.log(Number.EPSILON); // Output: 2.220446049250313e-16``
- **MAX_VALUE:** Represents the largest positive number possible in JavaScript. ``console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308``
- **MIN_VALUE:** Represents the smallest positive number possible in JavaScript (close to zero, but not zero). ``console.log(Number.MIN_VALUE); // Output: 5e-324``
- **MAX_SAFE_INTEGER:** Represents the maximum safe integer in JavaScript (2^53 - 1). ``console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991``
- **MIN_SAFE_INTEGER:** Represents the minimum safe integer in JavaScript (-(2^53 - 1)). ``console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991``
- **POSITIVE_INFINITY:** Represents positive infinity. Returned on overflow. ``console.log(Number.POSITIVE_INFINITY); // Output: Infinity``
- **NEGATIVE_INFINITY:** Represents negative infinity. Returned on overflow. ``console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity``
- **NaN:** Represents a "Not-a-Number" value, typically used for invalid number computations. ``console.log(Number.NaN); // Output: NaN``

## 2. Conversion Methods
- **toString():** Converts a number to a string.
![image](https://github.com/user-attachments/assets/ed25b0c0-f5ba-42ec-83df-32f8c8c019fc)

- **Number():** Converts a JavaScript variable or expression into a number.
![image](https://github.com/user-attachments/assets/c9c92a10-d2b6-4b4a-a1d5-acd711d70416)

- **parseInt(string, radix):** Parses a string and returns an integer of the specified radix (the base in mathematical numeral systems).
![image](https://github.com/user-attachments/assets/956f7522-6d8e-4f75-8529-69d87f932f5a)

- **parseFloat():** Parses a string and returns a floating-point number.
![image](https://github.com/user-attachments/assets/33bffa79-c083-4c49-a873-0cf3d596e121)

## 3. Number Formatting Methods
- **toExponential(fractionDigits):** Converts a number to exponential notation (a string).
![image](https://github.com/user-attachments/assets/ffc0b07f-f479-4bf6-a693-7b7b244e8101)

- **toFixed(digits):** Formats a number using fixed-point notation.
![image](https://github.com/user-attachments/assets/4dc8334c-5c21-46ff-a8ce-91c93c3bd520)

- **toPrecision(precision):** Formats a number to a specified length.
![image](https://github.com/user-attachments/assets/583d43e5-f15a-4d8c-8673-862e221d3e5a)

## 4. Value Methods
- **valueOf():** Returns the primitive value of a number object.
![image](https://github.com/user-attachments/assets/ebeba10b-6135-4eef-849b-7b40a85c666d)

These methods and properties provide various functionalities to work with numbers in JavaScript, including conversion, formatting, and mathematical computations.
# [Continue Part 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Numbers-Number_11/Math.md)
