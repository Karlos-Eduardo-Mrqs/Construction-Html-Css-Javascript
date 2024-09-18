# [Read Part 1 First !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%204%20-%20Functions/DeclarationAndExpressions-Number_07/DeclarationAndExpressions.md)

# Arrow Functions
In simple terms, an arrow function is a concise way of writing a function in JavaScript. It optimizes the writing of your code, making it cleaner, leaner and increasing readability. We will see how we can do this optimization in some cases, changing functions in arrow function in JavaScript.

![image](https://github.com/user-attachments/assets/4abb9907-662a-484a-9cce-4ec456ce7e91)

As you can see, the creation of arrow functions is to facilitate the creation and use of functions in JavaScript, that is, they allow the creation of functions in a summarized way. In other words, arrow functions are simplifications for expression functions. Let's see the difference with conventional functions:

![image](https://github.com/user-attachments/assets/e48f3109-aae1-4ad7-9bc8-ac7b6907359d)

# Generator Functions
These are special functions in JavaScript that allow you to pause and resume code execution, and are very useful for creating sequences of values ​​on demand. It is useful for generating sequences of values ​​or for tasks where you need more control over code execution.

![image](https://github.com/user-attachments/assets/91b93755-51c2-43a0-9ef2-da20dbd47d7b)

## What is happening ?
The counter function is a Generator Function because it has the function* format. Each yield pauses the function and returns the value (1, 2, 3). Count is an object that controls the execution of the function. You call count.next() to advance to the next yield.

### Yield
Yield is what makes Generator Functions special. It allows you to pause the function at specific points, return values, and then resume execution exactly where you left off. This is useful for creating sequences of values ​​or controlling complex workflows.

### Yield Sequences
- First yield: When count.next() is called for the first time, the execution of the counter function starts and stops at the first yield, returning 1.

- Second yield: Execution resumes with the next next(), which advances the function to the next yield, returning 2.

- Third yield: The process repeats, returning 3.

- End Yield: After the last yield, the function ends, and the next next() returns undefined, indicating that the sequence has ended.

# [Go to Part 3](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%204%20-%20Functions/Constructions-Number_09/Construction.md)
