# Conditional Structure With Ternary Operator
- Ternary Operator:
The conditional (ternary) operator is the only JavaScript operator that has three operations. This operator is often used as a shortcut for the if statement.
![image](https://github.com/user-attachments/assets/019ef20a-cf20-40ca-aa79-1ab4cda51fa3)
# Practice With The Ternary Operator 
Just like in Swicth's practice, we will use an HTML document to have user interaction. The practice applied will be as follows, the user will enter their age, then the algorithm will do the following:
- Age is between 1 and 5 years: we will alert that the user is a baby! ;
- Age is between 6 and 10 years old: we will alert you that the user is a child! ;
- Age is between 10 and 14 years old: we will alert you that the user is a pre-teen! ;
- Age is between 15 and 18 years old: we will alert you that the user is a teenager! ;
- Age is over 18 years old: we will alert you that the user is an adult! ;

## Document Html 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

## Document Javascript 
``` 
alert("Seja Bem Vindo Usuário");
let idade = prompt("Digite sua idade, para saber sua fase da vida :");
let mensagem =
(idade >= 1 && idade <= 5) ? "VOCÊ É UM BEBÊ !" :
(idade > 6 && idade <=10) ? "VOCÊ É UMA CRIÂNÇA !":
(idade > 10 && idade <=14) ? "VOCÊ É UM PRÊ-ADOLESCENTE !":
(idade > 14 && idade < 18) ? "VOCÊ É UM ADOLESCENTE !" :
"VOCÊ É UM ADULTO !"  ;
alert(mensagem);
```
## Javascript Document Observation 
Pay attention, as the code has become more readable, making it simpler to read and understand. Look at the difference using the IF and Ternario command:

![Captura de tela 2024-08-15 120148](https://github.com/user-attachments/assets/a7e438ab-c6f3-4564-90cd-13a7916ad887)

The decision whether or not to use the ternary operator in JavaScript will vary from developer to developer. I recommend using it with up to two conditions; more than that, it starts to lose its purpose of making the code more readable. We employ the ternary operator to directly assign the message based on the condition. This makes the code more concise and easier to understand, especially in simpler situations.