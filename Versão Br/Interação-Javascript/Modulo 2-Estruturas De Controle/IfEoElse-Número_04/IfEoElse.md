# Observação 👁️

- [Leia o módulo 1 primeiro](../../Modulo%201-Introdução/)

---

## Estruturas De Controle

As estruturas condicionais são recursos oferecidos pelas linguagens para que seja possível verificar uma condição e alterar o fluxo de execução do algoritmo. Assim, é possível definir uma ação específica para diferentes cenários e obter exatamente o resultado esperado durante o desenvolvimento de um site ou de uma aplicação.

---

## Por que é necessário usar as condicionais?

O uso das estruturas condicionais é praticamente indispensável na maioria dos projetos, já que elas são capazes de realizar diferentes funções de forma prática. Elas permitem, por exemplo, controlar o conteúdo que será exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas.

---

## Estrutura Condicional If, Else If e Else

- **If:**  
Você pode usar o `if` em JavaScript para especificar um código que deverá ser executado quando a condição for verdadeira.

![image](https://github.com/user-attachments/assets/68c08bad-4035-4c0c-af43-5ef28cc9beba)

- **If / Else:**  
Especifica um bloco de código para ser executado caso a condição seja verdadeira e outro bloco caso seja falsa.

![image](https://github.com/user-attachments/assets/33a2bc66-b5a3-417d-b754-43a0e41f1e58)

- **If / Else If / Else:**  
Permite testar múltiplas condições sequenciais. Se a primeira for falsa, testa a próxima condição, e assim por diante.

![image](https://github.com/user-attachments/assets/3ae37d6b-e366-454b-8d50-189d61c5c876)

---

## Prática com a Estrutura If

Vamos usar um arquivo HTML para interação com o usuário. O usuário irá digitar duas notas e ver a média. Se a média for menor que 6, será exibido um alerta informando que a média está abaixo do esperado; caso contrário, indicará que a média está acima.

### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Média de Notas</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

---

### Arquivo Javascript

Vamos usar uma função denominada prompt() . Essa função faz com que apareça um prompt parecido com um terminal, Observe:

![image](https://github.com/user-attachments/assets/9fb8cf1d-79a2-4fd6-b864-ac6d1cdfc1f3)

![image](https://github.com/user-attachments/assets/e2e9b11d-b281-4501-a55c-f1029d9ebfc2)

Faremos isso duas vezes, para a primeira e a segunda nota. No final, usaremos a função alert() para mostrar a média calculada na tela:

### Resultado Final

![image](https://github.com/user-attachments/assets/b09fe694-402b-4c93-8fad-0ff0a3da999a)

![image](https://github.com/user-attachments/assets/7f5b80d8-68d2-4b56-a81f-c06118e3fb0a)

![image](https://github.com/user-attachments/assets/98d6f8d6-2551-410e-9c37-6de5d30d18bf)

![image](https://github.com/user-attachments/assets/c198995e-38f4-4496-ba7a-54e13dfc4963)

---

## Próximo Capítulo

- [Continua no próximo capítulo](../SwitchEoOperadorTernario-Número_05/Switch.md)
