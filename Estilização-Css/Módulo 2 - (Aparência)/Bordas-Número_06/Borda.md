# Bordas 
Dentro do css podemos utilizar as bordas para "enfeitar" um objeto ou até mesmo decorá-lo com elas. Usaremos essa caixa(div) de exemplo, sendo ela classificada como box; tem 500px de largura e 600px de altura, sendo destacado com a cor azul:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/690148e6-123c-437d-b4f4-056b9d5f8eed)
## Atributos de uma borda
Sabendo disso, podemos usar a borda com o comando border, onde ele possui alguns atributos:
- **border-style** Podemos dar um estilo único para a nossa borda, com ela podendo ser:

1. solid: Borda Sólida;
2. dashed: Borda Espaçada;
3. dotted: Borda Pontilhada;
4. double: Borda Dupla ;
5. groove, ridge , inset, outset: Bordas com efeitos de três dimensões ;
6. inherit, initial, unset,none:Bordas invisíveis ou escondidas; 

- **border-color:** Aplica a cor que a borda vai possuir.
- **border-width:** Aplica a largura que a borda vai possuir. Sabendo de tudo isso, vamos fazer uma borda da cor vermelha, com estilo sólido com 10px de largura(``.box{ border:red solid 10px;}``):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b15ad609-04a0-4ab1-a0be-0905a2326fe4)

## Atributos adicionais

- **Direção da borda:** Você pode indicar, qual é o lado que vai possuir borda ou não . Sendo eles, top - para cima ; bottom - para baixo ; left - para a esquerda ; right - para a direita. Usando border e em seguida o lado que desejar, exemplo: (``border-left: none;``) .

- **Arredondamento:** Podemos transformar uma simples caixa quadrada em um círculo, graças ao comando **border-radius**.Quanto maior o número, mais arredondado fica, observe quando atribuímos 200px :

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d67e71de-ef48-4952-937b-91d0cde81923)

- **Definição e Rodada de Uso:** A propriedade border-radius define o raio dos cantos do elemento. Esta propriedade pode ter de um a quatro valores. Aqui estão as regras:

1. Quatro valores - raio da borda: 15px 50px 30px 5px; 
O primeiro valor se aplica ao canto superior esquerdo, o segundo valor se aplica ao canto superior direito, o terceiro valor se aplica ao canto inferior direito e o quarto valor se aplica ao canto inferior esquerdo;
2. Três valores - raio da borda: 15px 50px 30px;
O primeiro valor aplica-se ao canto superior esquerdo, o segundo valor aplica-se aos cantos superior direito e inferior esquerdo e o terceiro valor aplica-se ao canto inferior direito;
3. Dois valores - raio da borda: 15px 50px;
O primeiro valor aplica-se aos cantos superior esquerdo e inferior direito e o segundo valor aplica-se aos cantos superior direito e inferior esquerdo;
4. Um valor - raio da borda: 15px;
O valor se aplica a todos os quatro cantos, que são arredondados igualmente;

# Bônus
Como bônus para encerrar esse módulo, falaremos sobre os comandos **visibility e opacity**:
- **opacity:** Traduzindo para opacidade, é um comando específico usado para um objeto ser transparente;

1. Tipos de Opacidade:

- **0 até 1.0:** Quanto menor for o número, ele fica invisível, com efeito de um fantasma, por exemplo. Quanto maior o número for, mais ele fica nítido.
- **initial,inherit,unset:** Aparece normalmente;

- **visibility:** Traduzindo para visibilidade, é um comando específico observação do usuário. Podendo ele ser visto ou não;

2. Tipos de Visibilidade
- unset, inherit, initial, visible: Aparecem normalmente para o usuário;
- invisible, hidden: Somem da tela do usuário;
- display: none, hidden; somem da tela do usuário também.