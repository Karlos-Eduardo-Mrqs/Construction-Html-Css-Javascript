# Contenção 
Neste capítulo aprenderemos a ver como lidar com a contenção do seu conteúdo.
# Tamanho Da Caixa 
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4192dd64-b140-49ca-9707-446cc1db1741)

Usaremos essa página de exemplo, tendo duas caixas classificadas como box(azul) e box2(branca); possuindo 20px de preenchimento e 30px de margem e 150px em altura e largura. No Css, temos a capacidade de manipular o tamanho da caixa de fato com o comando ``box-sizing``. Para demonstrar isso, usaremos na box, o border-box e no box2, será o content-box:

- border-box: O valor é padrão, dependendo da altura e largura, não dependendo da borda e do preenchimento;
- content-box: O valor é variável, dependendo de todos os aspectos do tipo anterior, incluindo o conteúdo e margem;
- initial, unset: Valor Padrão;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a85ababc-5744-4756-9b43-700d2ba1ac67)

## Diferenças
Observe como as caixas estão diferentes, mesmo com as mesmas medidas de altura, largura, preenchimento e margem.

- **Content-box(Na caixa branca):** O tamanho do elemento é calculado com base no conteúdo, sem considerar as bordas e o preenchimento. Por exemplo, se definir width: 100px e padding-left: 50px, o tamanho total do elemento será 150px.  

- **Border-box(Na caixa Azul):** O tamanho do elemento é calculado considerando o conteúdo, as bordas e o preenchimento. Por exemplo, se definir width: 100px e padding-left: 50px, o tamanho final do elemento será 100px, mas o interior do elemento terá apenas 50px de espaço.

# Controle de Limitações
Dentro do Css, podemos limitar a quantidade de conteúdo que aparecerá na tela ou até mesmo como ele vai aparecer, ou seja, ele define o que ocorre com o conteúdo que passou do limite de uma divisória ou qualquer outro objeto. Graças ao comando ``overflow``, que ele pode ser:

- auto: Automático, gera uma barra de rolagem no canto direito, movimentando-se para cima e para baixo;
- hidden: Escondido, desaparece com o conteúdo que ultrapassa limites do objeto;
- scroll: Rolagem, semelhante ao auto, tendo como adição, outra barra de rolagem inferior, movimentando-se para os lados;
- visible: Visível, todo o conteúdo que ultrapassar a limitação do objeto, será nítido pelo usuário;

## Ilustração
Para fazer esse exemplo, usaremos quatro divisórias; cada uma com classes diferentes(box1,box2,box3,box4; respectivamente). Onde cada uma dessas divisórias terá um overflow("limitação") diferente. Sendo a azul = auto, branca = hidden , vermelha = scroll e verde = visible:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

Além disso, podemos dizer que o lado esquerdo vai ter uma limitação e o lado de baixo outra, com os comandos ``overflow-x⬅ ️ ou ➡ ️ e overflow-y⬆ ️ ou ⬇ ️``.Possuindo várias variações que desejar usar, com os 
tipos de overflow.

# Espaço em branco 
Usando essas mesmas caixas do exemplo anterior. Vamos atribuir um comando chamado ``white-space``, traduzindo para espaço em branco ele é utilizado para manipular a forma que o conteúdo será exibido em um espaço vazio.

- wrap, pre-wrap: "Enrolar" e "Pré-Enrolar", deixa o texto todo bagunçado e enrolado;
- normal: Normal, Padrão;
- nowrap:"Não Enrola", deixa todo o seu texto em um único espaço;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

Para exemplificar isso, cada uma das quatro caixas ficará com o espaço em branco diferente(Azul = wrap, Branca = pre-wrap, Vermelha = nowrap e Verde = normal):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/127f2b3f-dc54-491a-b6ae-aa41863478c1)