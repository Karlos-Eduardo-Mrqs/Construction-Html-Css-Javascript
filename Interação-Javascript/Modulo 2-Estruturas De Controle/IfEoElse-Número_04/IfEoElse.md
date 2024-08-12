# Estruturas De Controle
As estruturas condicionais são recursos oferecidos pelas linguagens para que seja possível verificar uma condição e alterar o fluxo de execução do algoritmo. Assim, é possível definir uma ação específica para diferentes cenários e obter exatamente o resultado esperado durante o desenvolvimento de um site ou de uma aplicação.

# Porque é nescessário usar as condicionais ?
O uso das estruturas condicionais é praticamente indispensável na maioria dos projetos, já que elas são capazes de realizar diferentes funções de forma prática. Elas permitem, por exemplo, controlar o conteúdo que será exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas.

## Estrutura Condicional If, Else If e Else

- **If:**
Você poderá usar o IF em JavaScript para especificar um código que deverá ser executado imediatamente após a condição retorne como verdadeira.

![image](https://github.com/user-attachments/assets/68c08bad-4035-4c0c-af43-5ef28cc9beba)

- **If / Else:**
Especificando um bloco de código para ser executado caso a condição seja verdadeira.

![image](https://github.com/user-attachments/assets/33a2bc66-b5a3-417d-b754-43a0e41f1e58)

- **If / Else If / Else:**
Você poderá usar o else if para especificar uma nova condição, caso as primeiras condições sejam falsas.

![image](https://github.com/user-attachments/assets/3ae37d6b-e366-454b-8d50-189d61c5c876)

## Práticas com a Estrutura If
Usáremos um arquivo html para que o usuário interagir, faremos o seguinte, o usuário irá digitar duas notas e ver a média, se a média for menor que 6, ele vai alertar que a média ficou abaixo, senão, a média ficou acima.

### Arquivo Html
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

### Arquivo Javascript 
Vamos usar uma função denominada prompt() . Essa função faz com que apareça um prompt parecido com um terminal, Observe:

![image](https://github.com/user-attachments/assets/9fb8cf1d-79a2-4fd6-b864-ac6d1cdfc1f3)

![image](https://github.com/user-attachments/assets/e2e9b11d-b281-4501-a55c-f1029d9ebfc2)

Faremos isso duas vezes, para a primeira nota e a segunda nota. No final terá um alerta, dizendo a média total do aluno. Para o alerta, teremos que usar a função alert(), que teremos um aviso na tela. Esse aviso, será apresentado no começo do Resultado Final.

### Resultado Final 
![image](https://github.com/user-attachments/assets/b09fe694-402b-4c93-8fad-0ff0a3da999a)
![image](https://github.com/user-attachments/assets/7f5b80d8-68d2-4b56-a81f-c06118e3fb0a)
![image](https://github.com/user-attachments/assets/98d6f8d6-2551-410e-9c37-6de5d30d18bf)
![image](https://github.com/user-attachments/assets/c198995e-38f4-4496-ba7a-54e13dfc4963)
