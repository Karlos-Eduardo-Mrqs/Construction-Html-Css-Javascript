# Layouts
Chegamos no segundo módulo de Estilização Css. Aqui falaremos sobre como alterar e controlar a aparência de uma Página Web. 

# Display 
Começando pelo Display, caso você tenha visto "Construção-Html", falamos sobre o Display relembrando ... 
É uma propriedade/atributo dentro do css capaz de moldar a maneira que uma tag se comporta dentro da Página. Por Exemplo:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/de06ca82-cefa-4ead-9b95-7686b06bf04c)

## Comparação Dos Displays
Temos esses três elementos dentro da página. Uma Div, Um Parágrafo e Um Span(Texto 1). Quando inspecionamos cada um deles: 

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0eb0d2bc-bcc5-4f56-a8d1-b58ae68c1b06)

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6b06106b-1ac1-4318-96bf-13f607caf31d)

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d096f58-167b-4c3f-9f8b-71008111e860)

Podemos perceber que dentro de cada elemento, se comporta de uma maneira diferente. Onde o Texto 1, ocupa o espaço do tamanho do Texto e O Bloco Div e Parágrafo ocupam uma linha inteira da página, não importando seu tamanho. Concluindo, os blocos do Parágrafo e Div, são Block(Ocupam a linha inteira) e o Texto 1 é inline(ocupa o espaço que o texto possui). 

## Tipos de Displays
- **block: Ocupa uma linha inteira da página. Porém, aceita modificações de Altura e Largura(Explica depois). Visto logo acima.**
- **inline: Ocupa somente o tamanho que texto possui. Porém, proíbe as alterações de Altura e Largura(Explica depois). Visto logo acima.**
- **inline-block: Depois será falado ! Não agora.**

# Height e Width
Indo para os atributos width e height, traduzindo ficaria como "Altura e Largura". Podemos manipular a altura e largura dos componentes em Html. Observe quando atribuímos a Largura da Div para 500px. Ou seja, toda a área destacada da cor azul é ocupada pela Div:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d9294f68-7e5f-481f-9218-da7e164d2cd1)

E se colocarmos essa Div, com 300px de Altura ? Deixando dessa maneira, essa div com 500 x 300 . Esquerda = Altura e Direita = Largura;:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/680ca42b-ae9c-4738-825c-3d5afcbaee3d)

Agora, vamos atribuir 200px de altura para o span:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

Ué?!? Não funcionou, porque? Simples, naturalmente o span possui um display inline, ou seja, "na linha", ocupando somente o espaço do texto; mesmo que você **"aumente o tamanho do texto"**, isso não seria uma boa solução. Mesmo se atribuirmos uma largura de 350px:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

O Texto 1, continua com as mesmas características. **Para essa situação utilizamos um tipo de Display chamado "inline-block": um tipo de display que mistura as ações do Display inline e block;Podendo assim, não tendo restrições com a modificação de altura e largura.Olha a mensagem !:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/04f49f65-6623-47ae-be56-051286a21353)

# Min e Max
Dentro dos atributos width e Height, podemos atribuir a eles um máximo e mínimo espaço. Por exemplo:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9c4467fa-62d3-4d1f-9a88-e8c039f29b6f)

Imagine que estamos construindo uma página Html e estamos declarando que cada bloco(que são Div) possuirá um conteúdo. E dentro desses blocos, estão **classificados** como **Divisão_1**, e quero que sua **largura máxima seja 300px; sendo que naturalmente ele possui uma largura de 200px. O que vai acontecer ?:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2a69153d-6c53-4d78-890e-ee468e27dd70)

Simples, ele vai continuar o mesmo valor de largura, contanto que ela só poderá chegar até os 300px.**Podemos notar isso, quando naturalmente aplicamos a largura para 310px, Veja isso:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/663e827a-08a4-4e9e-9e1b-3670167f2207)

Ele não mudou para 310px, por conta que o deixamos o layout ter no mínimo 300px de largura.

Manipulando agora **o mínimo de largura para 300px, Atente-se na imagem:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5303cf89-0636-4d92-82fa-57028cd5f9a5)
Mesmo sabendo que ele já possui uma largura de 200px, ele mudou para 300px. Por conta, do mínimo de largura exigido pelo layout é de 300px. Por isso ele trocou para 300px.Com esse mesmo exemplo, faremos o mínimo e máximo de altura.** Aplicamos a Classe Divisão_1 com uma altura de 350px; com seu máximo sendo somente 400px. Olha só:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3af5e071-5cb8-40d9-8bbc-3515d4c8d218)

**Ele ainda deixou a altura como 350px.Mas veja o que acontece, quando mudamos a altura para 200px e seu máximo seja 250px e adicionamos mais elementos na classe:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5873953a-f843-475d-a9c0-45c66cb356ea)

**Ele não pega todos os elementos, por ter o máximo de 250px. Então, ele respeitará o limite solicitado. O mesmo acontece ao atribuirmos um mínimo de altura de 240px:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd15fb6a-d2dd-409d-a526-795c986ad350)
**Isso se aplica com a largura mínima. Não alterando o que naturalmente foi atribuído para o mínimo solicitado.**
