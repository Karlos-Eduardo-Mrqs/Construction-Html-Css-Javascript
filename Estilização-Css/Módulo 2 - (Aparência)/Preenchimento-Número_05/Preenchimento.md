# Preenchimento 
O preenchimento é usado para criar espaço ao redor do conteúdo de um elemento, dentro de qualquer borda definida. Aprenderemos agora a fazer isso, com as cores e imagens com css.

## Preenchimento Com Cores 
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7b2ffe71-d5c5-41d0-ad51-0ab1a8661c87)

Vamos usar essa página de exemplo, utilizamos o background para aplicar a cor cinza de fundo principal da página, ou seja, no html todo. Quando criamos uma div, classificada como box, com 150px de altura e largura com a cor azul. observe que na imagem abaixo, ela só ocupa um quadrado:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3d24476c-6b08-462d-b34e-265b563627ce)

Ao construirmos outra div separada, com uma classe chamada box-2, com 350px de altura e largura com a cor vermelha. Observer que na imagem abaixo, ela está ao lado do quadrado azul e ocupa somente aquele espaço, como no velho ditado, "cada um no seu quadrado".:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a8553b0c-3f97-4b39-a4d8-f030314b9f81)

Todos eles possuem seu próprio canto, note que, quando criarmos uma seção dentro da box-2 classificada como box-21, com 100px de altura e largura com a cor verde. Mesmo sobrepondo a box-2, ela tem seu espaço dentro dela:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d1cca5a1-66ae-41e9-ba9e-530e026d3f69)

Isso fica nítido ao inserirmos textos nelas. Para termos certeza que elas têm seu respectivo espaço, criaremos uma quarta caixa, dentro da box-21, será outra seção, classificada como box-21a, possuindo 60px de altura e largura com a cor amarela. Olhe como os textos se comportam. Claro que se aumentar os textos, ficará por cima. Mas, estarão dentro de seus espaços.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f7c32a2-78b1-4ad7-8dfd-bf58b27db8a6) 

### Invisível
Além disso tudo, podemos deixar as caixas transparentes com o `` background:transparent; ``. Vejamos o que acontecerá ao atribuirmos isso na box-2:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/66bbab1e-461f-4070-b987-66162eb2969b)

Sendo ela invisível ou transparente como preferir, a box-2 não ficará nítida. Ao inspecioná-lá, ficará somente nítido somente o tamanho dela e a área de ocupação, ou seja, seu Display.Isso também acontece, com os botões ao inserirmos seu fundo como transparente. Ao classificarmos ele com button, e adicionar seu fundo como transparente, ele ficará assim:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5562c82f-35f8-44b5-8cfe-30242526c903)

## Preenchimento Com Imagens
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2f90ef4e-1892-4c54-9acc-10fdfb03cb7a)

Podemos usar imagens como fundo, usaremos essa página como exemplo. Com um fundo acinzentado juntamente de uma caixa branca de 600px de largura e 500 px de altura.

### Background - Image
Usaremos aqui o comando background-image, para adicionar a imagem, logo abaixo está sua sintaxe que será adicionada na div chamada box:**``.box{ background-image: url(images/image.png); } ``**.Ao usarmos esse comando, vejamos o que acontece:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8ffb7a0d-c5b3-45a4-8003-b99a9a209dc8)

### Background - Repeat
**Percebemos que a imagem se repetiu, para isso não ocorrer usaremos o comando background-repeat, para manipular como a imagem irá se repetir dessa forma:``.box{ background-repeat: formato de repetição;}, podendo ele ser: `` Usaremos de exemplo, para não se repetir o no-repeat:** 
- repeat: a imagem se repete;
- no-repeat: a imagem aparece normalmente, não se repetindo;
- repeat-x: A imagem se repete somente na horizontal;
- repeat-y:A imagem se repete somente na vertical;
- space:A imagem se repete dependendo do espaço que ela vai ocupar;
- initial: A imagem se mantém no padrão;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd72af32-6693-48b0-8603-73bb34020610)

### Background - Repeat
**Porém, a imagem ficou pequena, podemos usar o background-size, para controlar seu tamanho dessa forma:``.box{ background-size: tamanho; Podendo ele ser:}``
Usaremos o cover de exemplo, para preencher todo a caixa box:**
- auto: Tamanho padrão da imagem; 
- contain: Tamanho contido, até a imagem ser visível sem ser alargada;
- cover: Tamanho lateral que a imagem irá se esticar ao seu limite;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f939704d-239e-4b28-8e9f-91222b2d0db0)
 
### Background - Position
Para resolver o problema da imagem anterior, usaremos o comando **background-position, posicionando assim a imagem assim:``.box{background-position: posição; Podendo ela ser: } ``Usaremos de exemplo o top center, para que a imagem fique centralizada:**
- top top: Começando da direita no topo e terminando na esquerda no topo;
- top center: Começando da direita no topo e terminando na esquerda no centro;
- top bottom: Começando da direita no topo e terminando na esquerda no canto inferior da imagem;
- Variações: Podendo variar de center bottom, bottom center e entre outras variações do mesmo;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1d0b63f9-c373-4c51-8fdc-b326a0912ec4)

### Duas imagens dentro de uma div ?
Sim, é possível inserirmos em uma div, duas imagens.**Porém, é uma situação muito específica, sendo mais recomendado que crie uma "div afiliada" para isso. Por exemplo, criarei outra caixa chamada box-21, nele estará contido a outra imagem; após isso, adicionaremos 80px de altura e largura com nenhuma repetição sendo ela posicionada na parte superior da montanha.** Veja agora o resultado:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9ed49fa5-77fd-409c-9f2c-cc2522345dd6)
