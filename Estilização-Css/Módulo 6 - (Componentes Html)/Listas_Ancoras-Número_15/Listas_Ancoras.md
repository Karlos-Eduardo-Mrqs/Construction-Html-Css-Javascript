# Estilização De Âncoras e Listas 
Nesse módulo, aprenderemos a fazer estilizações com os componentes html, começando pelas listas e âncoras.

##   Âncoras 
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

## Listas

![image](https://github.com/user-attachments/assets/c8c2bcbd-1752-4599-b2ca-51f0bb6c7c32)

Nessa segunda página, temos uma divisória chamada .box, com um lista não ordenada classificada como .list, dentro dessa lista temos seis itens classificados com .item. Sabendo disso, aplicamos um plano de fundo com a cor azul na .list e um plano de fundo colorido pelo coral na classe .item:

![image](https://github.com/user-attachments/assets/e4ed809f-cd4f-471b-a264-ee5d42eebd13)

### List-Style
Com esse atributo no css, podemos modificar o estilo de uma lista. Modificando seus pontos de organização,conhecidos como marcadores, se eles ficaram junto ou fora do texto e até adicionar uma imagem como 
marcador da lista.

#### List-Style-Position
Estilo de posição da lista, aqui podemos dizer se os marcadores ficam de fora(outside) ou dentro dos tópicos da lista(inside). 

1. inside: ![image](https://github.com/user-attachments/assets/78626046-efb7-40cd-88f6-c3c8b6258914)
2. outside: ![image](https://github.com/user-attachments/assets/6bd6de8b-ef2c-41a5-923f-14facf2e81db)

#### List-Style-Type
Estilo de Tipo da Lista, temos a possibilidade de alterar o marcador da lista. Assim como os cursores da âncora, existem ínumeros tipos de marcadores, [clique aqui para visualizar os demais tipos de marcadores !](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

#### List-Style-Image
Estilo de Imagem da Lista, podemos adicionar uma imagem como o nosso principal marcador. Por exemplo, queremos que o nosso marcador seja essa estrela:![img icons8](https://github.com/user-attachments/assets/eca30719-cd28-4b3e-93ee-5a333ab212c4). Para isso, faremos da seguinte maneira : `` list-style-image:url(link da imagem)``.Ademais, caso incluirmos ``list-style:inside url(link da imagem) disc ``, ficará com o mesmo resultado: 

![image](https://github.com/user-attachments/assets/927fe037-3a6e-48ed-9b63-694f285c8c13)

## Css Final Da Lista
```
html{
    background-color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

.box{
    padding: 30px;
}

.list{
    color: aliceblue;
    background-color: cornflowerblue;
    list-style: outside url(https://img.icons8.com/?size=30&id=LlgB5a8aAr0G&format=png&color=000000);
}

.item{
    background-color:coral;
}
```
