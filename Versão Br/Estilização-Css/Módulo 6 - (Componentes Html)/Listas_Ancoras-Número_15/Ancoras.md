# Observação 👁️

- 📝 [Leia o Número_14 antes de continuar](../Normalização-Número_14/Normalização.md)

---

## Estilização de Âncoras e Listas

Aprender a estilizar componentes HTML, começando por **listas** e **âncoras**.

---

## Âncoras

> Vamos colocar a mão na massa!

---

### Estrutura base

```css
html {
    background-color: #999;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

body {
    color: black;
    font-size: 16px;
}

.box {
    padding: 20px;
}
```

### Passo 1: Retirar sublinhado e definir cor preta

Aplicar na classe .link:

![image](https://github.com/user-attachments/assets/548e96e2-6830-442f-b73a-269129067f71)

### Passo 2: Estilizar link como botão

- Fundo vermelho
- Fonte maior
- Padding maior

![image](https://github.com/user-attachments/assets/52cb24af-2bfa-4bbe-91e1-9eb63d6f03c8)

Agora para finalizar, vamos adicionar um arredondamento no botão:

![image](https://github.com/user-attachments/assets/05c4f1ea-6aa3-4b98-bc8e-9ece9fbc7f88)

### Passo 3: Arredondar bordas

- ``border-radius`` para deixar cantos arredondados

---

## Cursor personalizado

No CSS é possível mudar o cursor do mouse. Exemplos dos principais cursores:

![CSS-Custom-Cursors1](https://github.com/user-attachments/assets/de4409c6-95e1-4890-8299-f8b28ca69e0f)

### Pseudo-classe :hover

Serve para alterar o estilo quando o mouse passa sobre o elemento.

No exemplo, muda cor do fundo e do texto.

![image](https://github.com/user-attachments/assets/bddb66c9-a3ce-4285-a19d-8a59da3075f0)

## Css Final Da  âncora(.link)

```css
html{
    background-color:#999;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

body{
    color: black;
    font-size: 16px;
}

.box{
    padding: 20px;
}

.link{
    color: inherit;
    text-decoration: none;
    background-color: crimson;
    padding: 10px 30px;
    font-size: 30px;
    border-radius: 50px;
    cursor: pointer;    
}

.link:hover{
    background-color: black;
    color: aliceblue;  
}
```

---

## ✅ Próximo Capítulo

- [Estilizando Listas !](../Listas_Ancoras-Número_15/Listas.md)
