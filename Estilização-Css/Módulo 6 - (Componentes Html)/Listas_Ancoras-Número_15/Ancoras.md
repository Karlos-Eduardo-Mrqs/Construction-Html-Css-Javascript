# Estilização De Âncoras e Listas 
Nesse módulo, aprenderemos a fazer estilizações com os componentes html, começando pelas listas e âncoras.
## Âncoras 
![image](https://github.com/user-attachments/assets/85e7b2ec-3f97-4de4-b28a-513ed8cdbd84)

Com essa página, vamos colocar mão na massa; nessa página, temos uma divisória box e dentro dela uma âncora classificada como .link, com o seguinte css:
```
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
```
Com isso em mente, vamos retirar a linha da âncora e colorir ela com a cor preta. Para isso usamos o diretamente na classe .link:

![image](https://github.com/user-attachments/assets/548e96e2-6830-442f-b73a-269129067f71)

Logo em seguida, vamos assemelhar esse link como um botão, colocando a cor vermelha de fundo, aumentando a fonte e preenchimento. Também diretamente na classe .link:

![image](https://github.com/user-attachments/assets/52cb24af-2bfa-4bbe-91e1-9eb63d6f03c8)

Agora para finalizar, vamos adicionar um arredondamento no botão:

![image](https://github.com/user-attachments/assets/05c4f1ea-6aa3-4b98-bc8e-9ece9fbc7f88)
### Cursor
Dentro do Css, podemos modificar o tipo do cursor que o mouse têm, por exemplo o cursor padrão é ↖️, porém, existem muitos tipos por isso, a imagem abaixo está todos os principais cursores mais usados:

![CSS-Custom-Cursors1](https://github.com/user-attachments/assets/de4409c6-95e1-4890-8299-f8b28ca69e0f)
### PseudoCódigo Css
Um pseudo-elemento CSS é uma palavra-chave adicionada a um seletor que permite que você utilize uma parte específica do elemento selecionado. Será explicado isso em breve, no momento aplicamos um chamado :hover; onde quando focado, ele mudará de cor da letra e do fundo:

![image](https://github.com/user-attachments/assets/bddb66c9-a3ce-4285-a19d-8a59da3075f0)
## Css Final Da  âncora(.link)
```
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

# [Estilizando Listas !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%206%20-%20(Componentes%20Html)/Listas_Ancoras-N%C3%BAmero_15/Listas.md)