# Note 👁️

- [Read the switch condition first](../SwitchEoOperadorTernario-Número_05/Switch.md)

---

## Ternary Operator

The conditional (ternary) operator is the only JavaScript operator that has three operands. This operator is often used as a shortcut for the `if` statement.

![image](https://github.com/user-attachments/assets/019ef20a-cf20-40ca-aa79-1ab4cda51fa3)

---

## Practice with the Ternary Operator

Just like in the `switch` practice, we will use an HTML document for user interaction. The practice applied will be as follows: the user will enter their age, then the algorithm will do the following:

- The age is between 1 and 5 years old: we will warn that the user is a baby!; - Age is between 6 and 10 years old: we will warn that the user is a child!;
- Age is between 10 and 14 years old: we will warn that the user is a pre-teen!;
- Age is between 15 and 18 years old: we will warn that the user is a teenager!;
- Age is over 18 years old: we will warn that the user is an adult!;

---

## HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```

## Javascript Document

```js
alert("Welcome User");
let age = prompt("Enter your age to find out your stage of life :");
let message =
(age >= 1 && age <= 5) ? "YOU ARE A BABY!" :
(age > 6 && age <= 10) ? "YOU ARE A CHILD!":
(age > 10 && age <= 14)? "YOU ARE A PRE-TEEN!":
(age > 14 && age < 18)? "YOU ARE A TEENAGER!":
"YOU ARE AN ADULT!";
alert(message);
```

---

## Javascript Document Attention

Note how the code has become more readable, making it easier to read and understand. See the difference between using the if statement and the ternary operator:

![Screenshot 2024-08-15 120148](https://github.com/user-attachments/assets/a7e438ab-c6f3-4564-90cd-13a7916ad887)

The decision to use the ternary operator in JavaScript varies from developer to developer. I recommend using it for up to two conditions; more than that, and it starts to lose its purpose of making the code more readable.

We use the ternary operator to directly assign the message based on the condition. This makes the code more concise and easier to understand, especially in simpler situations.

---

## Next Module

- [Continued in the next module](../../Module%203%20-%20Loopings/Loopings-Number_06/Loopings.md)
