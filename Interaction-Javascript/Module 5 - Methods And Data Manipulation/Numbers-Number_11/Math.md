# [Read Part One First !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Numbers-Number_11/Numbers.md)
# Math Object
The Math object in JavaScript is a built-in object that provides properties and methods to perform mathematical operations. It is not a constructor, which means you cannot create instances of the Math object. Instead, you directly use its methods and properties to perform mathematical calculations.

## Math Object Properties
The Math object has several properties that represent mathematical constants:
- **Math.PI:** Returns the value of π (pi) ≈ 3.14159. ``console.log(Math.PI) // 3.141592653589793.``
- **Math.E:** Returns the Euler value (base of natural logarithms) ≈ 2.718. ``console.log(Math.E) //2.718281828459045.``
- **Math.LN10:** Returns the natural logarithm of 10 ≈ 2.302. ``console.log(Math.LN10) //2.302585092994046.``
- **Math.LN2:** Returns the natural logarithm of 2 ≈ 0.693.``console.log(Math.LN2) //0.6931471805599453.``
- **Math.LOG10E:** Returns the Euler logarithm in base 10 ≈ 0.434. ``console.log(Math.LOG10E) //0.4342944819032518.``
- **Math.LOG2E:** Returns the Euler logarithm in base 2 ≈ 1.442. ``console.log(Math.LOG2E) //1.4426950408889634.``
- **Math.SQRT1_2:** Returns the square root of 1/2 (or √0.5) ≈ 0.707. ``console.log(Math.SQRT1_2) //0.7071067811865476.``
- **Math.SQRT2:** Returns the square root of 2 ≈ 1.414. ``console.log(Math.SQRT2) // 1.4142135623730951.``

## Math Object Methods
The Math object provides a variety of methods for performing mathematical operations, such as rounding, powering, trigonometry, and more. Here are some of the main methods:

### Rounding
- **Math.abs(x):** Returns the absolute value of x.``console.log(Math.abs(-7.25)); //7.25.``
- **Math.ceil(x):** Rounds x to the next integer greater than or equal to.``console.log(Math.ceil(4.2)) //5.``
- **Math.floor(x):** Rounds x to the next integer smaller than or equal to.``console.log(Math.floor(4.9)) //4.``
- **Math.round(x):** Rounds x to the nearest integer.``console.log(Math.round(4.5)) //5.``
- **Math.trunc(x):** Removes the decimal part of x, returning only the integer part.``console.log(Math.trunc(4.9)) //4.``

### Potentiation and Root
- **Math.pow(base, exponent):** Returns the base raised to the exponent.``console.log(Math.pow(2, 3)) //8.``
- **Math.sqrt(x):** Returns the square root of x.``console.log(Math.sqrt(16)) //4.``
- **Math.cbrt(x):** Returns the cube root of x.``console.log(Math.cbrt(27)) //3``.

### Minimum, Maximum And Randonness

- **Math.min(x1, x2, ..., xn):** Returns the smallest value among the given arguments. ``console.log(Math.min(3, 5, -2, 8)) results in -2.``
- **Math.max(x1, x2, ..., xn):** Returns the largest value among the given arguments. ``console.log(Math.max(3, 5, -2, 8)) results in 8.``
- **Math.random():** Returns a pseudorandom number between 0 (inclusive) and 1 (exclusive). ``console.log(Math.random()) can result in 0.756734231098.``

### Trigonometry
- **Math.sin(x):** Returns the sine of x (in radians).``console.log(Math.sin(Math.PI / 2)) //1.``
- **Math.cos(x):** Returns the cosine of x (in radians). ``console.log(Math.cos(Math.PI)) //-1.``
- **Math.tan(x):** Returns the tangent of x (in radians).``console.log(Math.tan(Math.PI / 4)) // 1.``
- **Math.asin(x):** Returns the arcsine of x (in radians). ``console.log(Math.asin(1))  // (/ 2).``
- **Math.acos(x):** Returns the arccosine of x (in radians).``console.log(Math.acos(0)) //(/ 2).``
- **Math.atan(x):** Returns the arctangent of x (in radians).``console.log(Math.atan(1)) // (/ 4).``
- **Math.atan2(y, x):** Returns the arctangent of the quotient of its arguments. ``console.log(Math.atan2(1, 1)) // (/ 4.)``

### Logarithms and Exponentiation
- **Math.log(x):** Returns the natural logarithm (base e) of x. ``console.log(Math.log(Math.E)) //1.``
- **Math.log10(x):** Returns the logarithm of x in base 10. ``console.log(Math.log10(100)) //2.``
- **Math.log2(x):** Returns the logarithm of x in base 2. ``console.log(Math.log2(8)); //3. ``
- **Math.exp(x):** Returns and raised to the power of x. ``console.log(Math.exp(1)); //2.718281828459045.``
