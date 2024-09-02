# Posições Específicas
Na prática anterior, aprendemos a mexer com a posição flutuante, movimentando os objetos somente para a esquerda,direita e nenhum deles, deixando o objeto sobreposto.
Agora, aprenderemos a como movimentar os objetos para qualquer canto ou direção que quiser.

# Plano Cartesiano ?
![istockphoto-1363110242-612x612](https://github.com/user-attachments/assets/4b7711b3-54a0-469c-8a2b-ac40c46825d5)

A manipulação de posições dentro do css, podemos dizer que é algo semelhante ao Plano cartesiano, possuindo a posição x, sendo representado pela largura e o eixo y, representando a altura, e a posição z? Não falaremos sobre esse cara agora, terminando essa prática, falaremos somente dele. Mas, você se pergunta, como uma página se assemelha com um plano cartesiano?:

![image](https://github.com/user-attachments/assets/504f6847-3ce8-49f7-90ba-19ddecd833b9)

Claro que não está 100% alinhado, porém dá para entender. Como vemos nessa imagem, a altura representa o Y e a largura representa o X; quando pegarmos um objeto.Observação, ignore as linhas tortas; como podemos ver uma altura de 600px e largura de 600px e olhe como isso está representando os eixos x e y:

![image](https://github.com/user-attachments/assets/a6877519-2511-489a-a59e-3f006e9cf107)

# Position
![image](https://github.com/user-attachments/assets/5a03088c-575e-4329-b81f-5b552e541708)

Com nossa página web pronta, vamos ver na prática, como manipular a posição dos objetos. Vamos supor que queremos que a caixa Box4, fique na parte superior da página e ao lado da caixa Box1.
Podemos fazer isso com o comando ``position: em conjunto dos comandos top,left,right e bottom .`` Tendo os seguintes tipos:

## Static
Posição estática, é uma posição padrão, onde caso você não defina, a posição será esta;

## Absolute
Posição Absoluta, é uma posição alterável, podendo alterar ela com os comandos `` top: Para cima , left: Para Esquerda , Right: Para Esquerda e Bottom: Para Baixo ``. 
Para deixarmos essa caixa para cima e ao lado, usaremos esse tipo de posição, usando os comandos top, para elevar o objeto para cima e right para movimentar para direita. Vejamos o resultado:

![image](https://github.com/user-attachments/assets/a9ddbf77-5a07-45da-a018-a183a78adcce)

### POSIÇÔES TOP,BOTTOM,RIGHT,LEFT
1. TOP: 
Quanto menor o número TOP no Absolute, mais ele sobe; Quanto maior o número TOP no Absolute, mais ele desce;

2. BOTTOM:
Quanto menor o número BOTTOM no Absolute, mais ele desce; Quanto maior o número BOTTOM no Absolute, mais ele sobe;

3. RIGHT:
Quanto menor o número RIGHT no Absolute, mais ele vai para direita; Quanto maior o número RIGHT no Absolute, mais ele vai para esquerda;

4. LEFT:
Quanto menor o número LEFT no Absolute, mais ele vai para esquerda; Quanto maior o número LEFT no Absolute, mais ele vai para direita;

## Relative 
Vamos olhar a imagem de nossa página novamente:

![image](https://github.com/user-attachments/assets/5a03088c-575e-4329-b81f-5b552e541708)

Temos o Box3 com simplesmente, quatro elementos consigo, desses elementos, queremos que a caixa D, fique no topo ao lado da caixa C, ao aplicarmos o topo e posição absoluta.A caixa D, ficou por cima da caixa Box1, por quê? Quando aplicamos a posição absoluta e manipulamos seus "vetores", ele considera como referência de posição a página toda e desconsidera a caixa C:

![image](https://github.com/user-attachments/assets/d3f0facb-ea70-498e-bda6-1f9a860b54b8)

Para que a caixa D possa ser manipulada dentro da caixa C, usaremos a Posição Relativa. Sendo uma posição que respeita todo o seu entorno e área, fazendo que todos os objetos dentro dele, usem os 
Vetores posicionais referenciam a caixa C; Note quando aplicarmos essa posição na caixa C e manipularmos a caixa D, com 0px no Top e Right. **Além disso, POSIÇÕES TOP,BOTTOM,RIGHT,LEFT funcionam da mesma maneira que a posição absoluta, tendo que levar em conta, quem você usará como referência para controlar o conteúdo internamente:**

![image](https://github.com/user-attachments/assets/28d092d1-2ba5-4821-9b39-1e145d729a6a)

## Fixed
Posição Fixa, fixando ou até mesmo prendendo o objeto em uma posição, por exemplo, na nossa página queremos que a nossa caixa Box2, fique na parte superior da tela e quando arrastar-lá para baixo, ele se manterá, no local que deixou. Mesmo arrastando a tela para baixo, a caixa Box2, se manteve naquela exata posição;**Usado em barras de navegação ou semelhantes**:

![image](https://github.com/user-attachments/assets/939f2f0e-f3fd-4b71-9769-89823d7f3325)

## Sticky
Posição colada, diferentemente da posição fixa, essa posição ele pode aparecer na tela de forma grudada; aparecendo quando o objeto desaparecer, sendo visível novamente para a leitura. Sendo semelhante com a fixa, porém fica grudada com a tela ao não ser visível na tela:

![image](https://github.com/user-attachments/assets/478e5c12-75be-4efe-826e-c6cffd069ca9)
