# Note 👁️

- [Read the first part](../Numbers-Number_11/Numbers.md)

---

## Math Object

The `Math` object in JavaScript is a built-in object that provides properties and methods for performing mathematical operations.
> ❗ It is not a constructor — you **cannot create instances** of `Math`.

---

## 🔢 Math Object Properties

| Property | Description | Example | Output |
| -------------- | ---------------------------- | -------------- | -------------------- |
| `Math.PI` | Value of π | `Math.PI` | `3.141592653589793` |
| `Math.E` | Base of natural logarithms | `Math.E` | `2.718281828459045` |
| `Math.LN10` | Natural logarithm of 10 | `Math.LN10` | `2.302585092994046` |
| `Math.LN2` | Natural logarithm of 2 | `Math.LN2` | `0.6931471805599453` |
| `Math.LOG10E` | Euler log in base 10 | `Math.LOG10E` | `0.4342944819032518` |
| `Math.LOG2E` | Euler log in base 2 | `Math.LOG2E` | `1.4426950408889634` |
| `Math.SQRT1_2` | Square root of ½ | `Math.SQRT1_2` | `0.7071067811865476` |
| `Math.SQRT2` | Square root of 2 | `Math.SQRT2` | `1.4142135623730951` |

---

## 🛠️ Math Object Methods

### 🎯 Rounding

| Method | Description | Example | Output |
| --------------- | ----------------------------- | ----------------- | ------ |
| `Math.abs(x)` | Returns absolute value | `Math.abs(-7.25)` | `7.25` |
| `Math.ceil(x)` | Rounds up | `Math.ceil(4.2)` | `5` |
| `Math.floor(x)` | Rounds down | `Math.floor(4.9)` | `4` |
| `Math.round(x)` | Rounds to the nearest integer | `Math.round(4.5)` | `5` |
| `Math.trunc(x)` | Removes decimal part | `Math.trunc(4.9)` | `4` |

---

### ⚡ Powers and Roots

| Method | Description | Example | Output |
| ---------------- | ----------------------------- | ---------------- | ----- |
| `Math.pow(a, b)` | `a` raised to the power of `b` | `Math.pow(2, 3)` | `8` |
| `Math.sqrt(x)` | Square root of `x` | `Math.sqrt(16)` | `4` |
| `Math.cbrt(x)` | Cubic root of `x` | `Math.cbrt(27)` | `3` |

---

### 📉 Minimums, Maximums, and Randomness

| Method | Description | Example | Expected Output |
| ------------------ | ---------------------------- | ----------------------- | -------------- |
| `Math.min(...val)` | Smallest value between arguments | `Math.min(3, 5, -2, 8)` | `-2` |
| `Math.max(...val)` | Largest value between arguments | `Math.max(3, 5, -2, 8)` | `8` |
| `Math.random()` | Random number between 0 and 1 | `Math.random()` | `~0.0–0.999` |

---

### 📐 Trigonometry

| Method | Description | Example | Expected Output |
| ------------------ | -------------------------- | ----------------------- | --------------- |
| `Math.sin(x)` | Sine of `x` (radians) | `Math.sin(Math.PI / 2)` | `1` |
| `Math.cos(x)` | Cosine of `x` (radians) | `Math.cos(Math.PI)` | `-1` |
| `Math.tan(x)` | Tangent of `x` (radians) | `Math.tan(Math.PI / 4)` | `1` |
| `Math.asin(x)` | Arc sine of `x` | `Math.asin(1)` | `~1.5708 (π/2)` |
| `Math.acos(x)` | Arc cosine of `x` | `Math.acos(0)` | `~1.5708 (π/2)` |
| `Math.atan(x)` | Arctangent of `x` | `Math.atan(1)` | `~0.7854 (π/4)` |
| `Math.atan2(y, x)` | Arctangent of `y/x` | `Math.atan2(1, 1)` | `~0.7854 (π/4)` |

---

### 📊 Logarithms and Exponentials

| Method | Description | Example | Output |
| --------------- | -------------------------- | ------------------ | ---------- |
| `Math.log(x)` | Natural logarithm of `x` | `Math.log(Math.E)` | `1` |
| `Math.log10(x)` | Log in base 10 | `Math.log10(100)` | `2` |
| `Math.log2(x)` | Log to base 2 | `Math.log2(8)` | `3` |
| `Math.exp(x)` | `e` raised to the `x` power | `Math.exp(1)` | `2.718...` |

---

## Next Chapter

- [Continued in the next chapter](../Arrays-Number_12/Array_Manipulation.md)
