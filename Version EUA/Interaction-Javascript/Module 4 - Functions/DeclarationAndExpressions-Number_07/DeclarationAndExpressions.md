# Procedures
It is a structure that groups a set of commands that are executed when the procedure is called. Procedures are routines (snippets or modules) of programs that can perform a task defined by the programmer. We also have the function that returns a value (for example, a function that calculates square root returns a number)

## What's Differences ? 
![1_dqABRmyYhz7boiQAbaRP9Q](https://github.com/user-attachments/assets/7a511566-78c2-440e-a997-0621a364979c)

Into functions, you have one input of user and your impression,in other words, output. However, the procedure readonly something, how you can view the image.

# Functions Types in Javascript 

## 1. Functions declaration
The most basic way to define functions in JavaScript is through the function declaration, every function declaration begins with the reserved and mandatory word function, look this example:

![image](https://github.com/user-attachments/assets/610137f1-e9f8-4745-8c28-5e340ee70c2c)

In that functions, have three importants parts:
- The name of function(Don't have simbols, only acepty i's underline(_) );
- The parameters(A parameter in a function is a variable that sets a specific value during the definition of the function. For example, the tow numbers have one sum.);
- The call(Only, write the name of function, your by preference, console.log(Function_Name() ) );

## 2. Functions expression
A Function Expression occurs when you create a function and assign it to a variable. Only existing after the line in which the expression was executed, because the function is created at the time of assignment to the variable.

![image](https://github.com/user-attachments/assets/f488d91c-9548-4083-8a29-2b769a7b1e96)

In that functions, have three importants parts:
- The name of function(Don't have simbols, only acepty i's underline(_) );
- The parameters(A parameter in a function is a variable that sets a specific value during the definition of the function. For example, the tow numbers have one multiply.);
- The call(Only, write the name of variable in console.log(Variable_Name() ) );

### Expression X Declaration
- Hoisting: Function Declarations are elevated and can be called before their definition line, while Function Expressions cannot.
- Flexibility: Function Expressions can be anonymous and used at runtime, which allows for more flexibility.

# Hoisting
Hoisting is a JavaScript behavior in which variable and function declarations are "moved" to the top of their scope (global or function) before the code is executed. However, this is conceptual behavior; In practice, what happens is that JavaScript treats declarations as if they were at the top, even if they appear elsewhere in the code.

## Hoisting In The Examples Cited
Functions declared using function are fully elevated to the top of the scope, including the function body. This means that these functions can be called before they are declared in the code.In expressions functions, only the variable declaration occurs (with var), but the function will only be available after the line in which it is defined. With let or const, trying to access before the declaration results in an error.
![maxresdefault](https://github.com/user-attachments/assets/5bf77ca5-0dd0-4f8b-8951-7464871bce53)

# [Go to Part 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%204%20-%20Functions/ArrowAndGenerator-Number_08/ArrowGenerator.md)
