# Observação 👁️

- [Leia as Ancoras.md antes de continuar](../Listas_Ancoras-Número_15/Ancoras.md)

---

## Listas

![Exemplo de lista](https://github.com/user-attachments/assets/c8c2bcbd-1752-4599-b2ca-51f0bb6c7c32)

Nesta página, temos uma divisória chamada `.box`, com uma lista **não ordenada** classificada como `.list`.  

Dentro dela, há seis itens classificados como `.item`.  

Aplicamos plano de fundo azul na `.list` e coral nos itens `.item`:

![Lista estilizada](https://github.com/user-attachments/assets/e4ed809f-cd4f-471b-a264-ee5d42eebd13)

---

## Propriedade `list-style`

Com essa propriedade no CSS, podemos modificar o estilo dos marcadores das listas, como:

- Tipo do marcador;
- Posição (dentro ou fora do texto);
- Substituir o marcador por uma imagem personalizada.

---

### `list-style-position`

Define se os marcadores ficam **dentro** ou **fora** do texto da lista.

1. `inside`  
![Marcador dentro (inside)](https://github.com/user-attachments/assets/78626046-efb7-40cd-88f6-c3c8b6258914)

2. `outside`  
![Marcador fora (outside)](https://github.com/user-attachments/assets/6bd6de8b-ef2c-41a5-923f-14facf2e81db)

---

### `list-style-type`

Define o tipo do marcador da lista.  

Existem inúmeros tipos, como círculos, quadrados, números, letras, etc.  

Confira todos os tipos disponíveis na documentação oficial da MDN:  

[Tipos de marcadores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

---

### `list-style-image`

Permite usar uma imagem como marcador da lista.  

Por exemplo, para usar essa estrela como marcador:  

![Ícone estrela](https://github.com/user-attachments/assets/eca30719-cd28-4b3e-93ee-5a333ab212c4)  

O CSS para isso seria:  

```css
list-style-image: url(link-da-imagem);
```

![image](https://github.com/user-attachments/assets/927fe037-3a6e-48ed-9b63-694f285c8c13)

## Css Final Da Lista

```css
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

Também é possível combinar com list-style-position e tipo padrão:

```css
list-style: inside url(link-da-imagem) disc;
```

---

## ✅ Próximo Capítulo

- [Continue no Número_16](../Inputs-Número_16/inputs.md)
