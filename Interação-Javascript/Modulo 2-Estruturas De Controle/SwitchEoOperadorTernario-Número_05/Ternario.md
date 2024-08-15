- Operador Ternário:
O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

![imagem](https://github.com/user-attachments/assets/019ef20a-cf20-40ca-aa79-1ab4cda51fa3)

# Prática Com O Operador Ternário 
Assim como na prática do Swicth, vamos usar um documento html para ter a interação do usuário. A prática aplicada será a seguinte, o usuário vai inserir a idade, então o algoritmo fará o seguinte:
- A idade está entre 1 á 5 anos: alertaremos que o usuário é um bebê ! ;
- A idade está entre 6 á 10 anos: alertaremos que o usuário é uma criança ! ;
- A idade está entre 10 á 14 anos: alertaremos que o usuário é um prê-adolescente ! ;
- A idade está entre 15 á 18 anos: alertaremos que o usuário é um adolescente ! ;
- A idade é maior do que 18 anos: alertaremos que o usuário é um adulto ! ; 

## Documento Html 
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

## Documento Javascript 
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

## Observação Do Documento Javascript 
Atente-se, como o código ficou mais légivel, ficando mais simples de se ler e enteder. Olha a diferença usando o comando IF e Ternario:

![Captura de tela 2024-08-15 120148](https://github.com/user-attachments/assets/a7e438ab-c6f3-4564-90cd-13a7916ad887)
