# Conditional Structure Switch e o Operador Ternario
- Swicth:
Você pode usar o switch para selecionar um de muitos blocos de códigos, de acordo com sua condição.

![image](https://github.com/user-attachments/assets/7cfae8a4-d73d-4a63-9936-ac1a39d3fe63)

- Operador Ternário:
O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

![image](https://github.com/user-attachments/assets/019ef20a-cf20-40ca-aa79-1ab4cda51fa3)

## Prática com o Swicth
Faremos um reconhecimento de usuário, atráves do switch, apresentaremos ao usuário, um comite de boas vindas, para o programa reconhecer o usuário, teremos três senhas, uma do professor, uma do aluno e outra do adminstrador e no final, teremos quatro condições:
1. Caso a senha seja "Admin478" : O programa vai alertar que você é um admininstrador;
2. Caso a senha seja "Profe564" : O programa vai alertar que você é um professor;
3. Caso a senha seja "Aluno231" : O programa vai alertar que você é um aluno;
4. Caso não seja nenhuma dessas senhas : O programa vai alertar que você não tem uma senha e terá que contatar o suporte;

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
Vamos apresentar o usuário, um alerta("Seja Bem Vindo") . Depois o sistema irá pedir a senha, para reconhecer o usuário.Depois, usando a senha, iremos identificar a sua hierarquia(Admin,Professor e Aluno);
### Resultado Para O Admin 
![image](https://github.com/user-attachments/assets/8ef00737-f49b-4632-8554-1cf4681d890b)
![image](https://github.com/user-attachments/assets/dbda6071-9a97-4c6d-bf8e-cf43e6b319f6)
![image](https://github.com/user-attachments/assets/c3a60feb-b760-4466-837e-a38077bd2425)

### Resultado Para O Professor
![image](https://github.com/user-attachments/assets/affbd8fe-f0b5-427b-bbed-2b2cfeca8530)
![image](https://github.com/user-attachments/assets/8e30bc2b-4b48-493c-87ce-4a81d2b1b817)
![image](https://github.com/user-attachments/assets/892b6334-6027-4533-9f52-9c6883e29780)

### Resultado Para o Aluno
![image](https://github.com/user-attachments/assets/606a7941-6581-4bd2-a2da-366f472a46cf)
![image](https://github.com/user-attachments/assets/858d320a-dd39-4e31-aa78-2490e0721205)
![image](https://github.com/user-attachments/assets/4d70ee9f-c282-4ee7-ac81-dc2d9d9dd760)

### Resultado para o Desconhecido 
![image](https://github.com/user-attachments/assets/606a7941-6581-4bd2-a2da-366f472a46cf)
![image](https://github.com/user-attachments/assets/9d5a9d06-0818-4a0c-8022-58c22ef496ff)
![image](https://github.com/user-attachments/assets/6e3d0205-cde6-448b-9cea-9332f2e06f6a)
