# Posição de visualização
Chegamos à parte final do posicionamento CSS, View Position. Onde esta parte é uma continuação direta de [Positions-Number_12](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Styling-Css/Module%205-%20 (Posições)/Posição-Número_12/Posições.md).
# Plano cartesiano
Resumindo o que foi dito na prática anterior, No plano cartesiano temos dois eixos X e Y. Dentro do Styling, ou seja, no css eles são representados como X sendo largura e Y sendo altura. Porém, temos um terceiro, que é o eixo z, demonstrando a visão do usuário em relação ao monitor e ao tamanho da tela. Assim como nesta imagem, podemos dizer que Z é a visão externa do usuário, Y é a altura e X é a largura:

![imagem](https://github.com/user-attachments/assets/83e7933c-fe6a-4d63-8f19-b2a481d992be)

# Índice Z
![imagem](https://github.com/user-attachments/assets/d09cd865-4941-4df2-9a02-fc3ed7bf7a91)

Nesta página podemos observar que temos três caixas divisórias, classificadas como caixas. Vamos fazer um ajuste onde a caixa Box3 se sobrepõe às duas caixas Box. Você notou como a caixa Box2 está mais à frente que as caixas Box1 e Box3?

![imagem](https://github.com/user-attachments/assets/5d969c5f-d953-4fdb-b28f-a111a20c42fd)

Isso acontece por causa de um comando chamado ``z-index``, onde ele "define uma hierarquia de importância", quanto maior o número do z-index, mais adiante este objeto estará. Agora, o que acontecerá se aplicarmos z-index: 3 à Box1 e z-index: 4 à Box3?

![imagem](https://github.com/user-attachments/assets/b399590f-8579-48da-8508-dce9932b3a33)

Como você pode ver, Box3 possui o maior número de eixos z entre os demais; destacando-se das demais divisórias Box. Observe que quando o índice z de todos os elementos for igual, todos eles terão a mesma importância, ou seja, na ordem de criação Top-Down(De cima para baixo).
