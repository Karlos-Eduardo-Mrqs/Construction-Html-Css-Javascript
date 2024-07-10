# Espaçamento 
O Espaçamento é o ato de abrir ou ter abertura entre dois elementos. Onde podemos defini-lo externamente ou internamente.
![artigo-como-usar-as-propriedades-margin-e-padding-css-24409](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c6299b7e-9462-46a5-9359-235a42e64581)

## Espaçamento Externo
Como podemos ver pela imagem, temos dois elementos resposáveis pelo espaçamento externo, ou seja, na parte de fora; sendo eles:

### [Border](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/blob/main/Estilizacao-Css/Modulo%202%20-%20(Aparencia)/Bordas-N%C3%BAmero_06/Borda.md)

### margin
Traduzindo para margem. É Responsável pelo espaçamento ao redor do elemento na parte de fora, vejamos o exemplo a seguir:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4b29163b-a04f-41e3-8d37-385a256162a9)
Temos duas caixas div coladas uma na outra, tendo as duas com simplesmente, 500px de altura e largura com cores opostas. Queremos agora, pegar as caixas e separa-las para não ficarem grudadas.
Para isso, usaremos o comando ``margin``, para declarar o espaço de margem que ambas vão possuir; lembrando que as duas tem classificações diferentes, sendo a caixa branca **section** e a caixa azul como **box2**;
#### Atribuições com Margin
Observe quando aplicarmos a margem de 20px para ambas as caixas:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9cae2951-ef54-4916-a641-83c265a6cd17)
Agora ambas estão espaçadas com 20px uma da outra, fazendo que elas não se juntem. **Assim como o border, a margem pode ser declarada em lados diferentes, podendo ser somente para o topo, direita, esquerda ou para baixo. 
Sendo representados pelos termos top,right,left and bottom, respectivamente:(``margin-left: 20px ; margin-top: 15px; ; margin-right: 20px ; margin-bottom:20px; ``)**. 
Além disso, podemos declarar todos os lados usando somente o margin dessa maneira : ``margin: 20px 15px 15px 20px;``. Ao atribuir essa margem para a caixa azul e inspeciona-la:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/88d22cbb-90bc-4818-ab07-a787267060ed)
**Notaremos que ele declarou cada margem em sentido horário, sendo 20px do topo , 15px para a direita, 15px para baixo e finalizando com 20px para esquerda.
Isso mudará dependendo de quantos números você coloque, caso coloque assim:``margin: 20px 15px 20px; ``:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/597bf5df-57e8-4a57-a135-a3ff6f5209da)
**Os 20px foram para a parte superior e inferior da caixa. Já os 15px foram para a esquerda e direita. Ademais, quando colocarmos desta forma: ``margin: 20px 15px;``:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/16d5adf6-0e07-43f1-ae88-6d488d74e080)
O topo e o lado inferior, estão com 20px e a esquerda e direita ficaram com 15px. É concluindo, colocando somente um valor de tamanho para a margem, todos os lados são iguais, ou seja, se adicionar a margem com  20px somente:``margin: 20px;``, elas ficaram identicas.

## Espaçamento Interno
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d5eb547-ac9e-4b7d-9f16-6cac2eef17d8)
Observando a imagem novamente, temos somente um elemento para essa função interna, ou seja, na parte de dentro; sendo ele:

### padding
Traduzindo para preenchimento. É responsável pelo espaçamento do elemento na parte de dentro, vejamos o exemplo a seguir:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7a5a694b-9913-41cf-8f9f-78b99f502030)
Temos uma caixa branca com 500px de largura e altura, com a cor branca e possue 20px de margem. Pórem, observe como o texto está grudado na parte superior da caixa. 
Para afastar esse texto, utilizamos o comando ``padding``, para declarar o quanto de preenchimento o conteúdo vai possuir; lembrando que lea está classificada como section.

#### Atribuições Com Padding
Observe quando aplicarmos o preenchimento para 50px:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/020323ec-4bed-4a0f-8b0c-61ab65f71e21)
Veja como o texto ficou mais afastado da lateral.**Assim como o margin, o preenchimento pode ser declarado em lados diferentes, podendo ser somente para o topo, direita, esquerda ou para baixo. 
Sendo representados pelos termos top,right,left and bottom, respectivamente:(``padding-left: 20px ; padding-top: 15px; ; padding-right: 20px ; padding-bottom:15px ; ``)**.
Além disso, podemos declarar todos os lados usando somente o padding dessa maneira : ``padding: 30px 50px 50px 30px;``. Ao atribuir esse preenchimento para a caixa branca e inspeciona-la:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2ad46b15-399f-4243-b5a0-b790827478f2)
**Notaremos que ele declarou cada preenchimento em sentido horário, sendo 30px do topo , 50px para a direita, 50px para baixo e finalizando com 30px para esquerda.**
**Isso mudará dependendo de quantos números você coloque, caso coloque assim:``padding: 50px 20px 50px; ``:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/460e63aa-e429-4d68-abf0-35fa0f5b4fea)
**Os 50px foram para a parte superior e inferior da caixa. Já os 20px foram para a esquerda e direita. Ademais, quando colocarmos desta forma: ``padding: 20px 15px;``:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/711316e6-f5d9-465f-bdbb-7032b724825d)
O topo e o lado inferior, estão com 20px e a esquerda e direita ficaram com 15px. E concluindo, colocando somente um valor de tamanho para a margem, todos os lados são iguais, ou seja, se adicionar a margem com  20px somente:``margin: 20px;``, elas ficaram identicas.

### [width e heigth](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/blob/main/Estilizacao-Css/Modulo%202%20-%20(Aparencia)/Layouts-N%C3%BAmero_03/Layout.md)
