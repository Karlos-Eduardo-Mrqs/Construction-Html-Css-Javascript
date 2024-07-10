# Bordas 
Dentro do css podemos utilizar as bordas para "enfeitar" um objeto ou até mesmo decora-lo com elas:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/690148e6-123c-437d-b4f4-056b9d5f8eed)
Usaremos essa caixa(div) de exemplo, sendo ela classificada como box; tem 500px de largura e 600px de altura, sendo destacado com a cor azul.
## Atributos de uma borda
Sabendo disso, podemos usar a borda com o comando **border**, onde ele possui alguns atributos:
### border-style
Podemos dar um estilo único para a nossa borda, com ela podendo ser:
 - solid: Borda Sólida; 
 - dashed: Borda Espaçada;
 - dotted: Borda Pontilhada;
 - double: Borda Dupla ;
 - groove, ridge , inset, outset: Bordas com efeitos de três dimensões ;
 - inherit, initial, unset,none:Bordas invisíveis ou escondidas; 
### border-color
Aplica a cor que a borda vai possuir
### border-width
Aplica a largura que a borda vai possuir 

Sabendo de tudo isso, vamos fazer uma borda da cor vermelha, com estilo sólido com 10px de largura(``.box{ border: red solid 10px ; } ``):
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b15ad609-04a0-4ab1-a0be-0905a2326fe4)

### Atributos adicionais 
- Direção da borda: você pode indicar, qual é o lado que vai possuir borda ou não . Sendo eles:
(top - para cima ; bottom - para baixo ; left - para a esquerda ; right - para a direita . Usando border e em seguida o lado que desejar, exemplo: ``border-left: none; ``) .
- Arredondar: Podemos transformar uma simples caixa quadrada em um círculo, graças ao comando **border-radius**.Quanto maior o número, mais arredondado fica, observe quando atribuimos 200px :
- ![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d67e71de-ef48-4952-937b-91d0cde81923)
[Além disso, assim como podemos dizer qual direção tem borda ou não, o mesmo ocorre com o arredondamento, sendo eles:](https://www.w3schools.com/cssref/css3_pr_border-radius.php)

# Bônus 
Como bônus para encerrar esse modulo, falaremos sobre os comandos **visibility e opacity**
1. opacity: Traduzindo para opacidade, é um comando específico usado para um objeto ser transparente;
## Tipos de Opacidade
- 0 até 1.0: Quanto menor for o número, ele fica invísivel, com efeito de um fantasma por exemplo. Quanto maior o número for, mais ele fica nítido.
- initial,inherit,unset: Aparece normalmente;
2. visibility: Traduzindo para visibilidade, é um comando espécifico observação do usuário. Podendo ele ser visto ou não;
## Tipos de Visibilidade
- unset, inherit, initial, visible: Aparecem normalmente para o usuário ;
- invisible, hidden: Somem da tela do usuário;
- display: none, hidden; somem da tela do usuário também.