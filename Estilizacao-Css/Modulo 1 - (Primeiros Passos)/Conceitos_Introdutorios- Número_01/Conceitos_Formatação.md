# Conceitos Básicos 
O Css é uma ferramenta muito potente que possibilita criar diversas funcionalidades ao invés de usar JavaScript ou outra linguagem mais pesada. Se usado com moderação, CSS pode viabilizar uma ótima experiência ao desenvolvedor e usuários das páginas web.

# Estrutura Para o Css
Como foi citado na introdução, o HTML e CSS são como se fossem "parceiros", um para a estrutura(Html) e outro para estilização(Css). Sendo nescessário, um documento html para fazer a estilização, onde será inserido a tag STYLE no HEAD, sendo assim, ficará no cabeçalho. Já a estrutura Css, será explicado logo abaixo.

## Formatação de Estrutura Css 
Dentro do Css é utilizado como um conjunto de regras. Onde essas regras precisam de um "Seletor" para estilização e um bloco de instrução. Onde o Seletor, representa as tags html, já o bloco de instrução, são atributos que são inseridos para atribuir naquela tag em espécifico. Observe:

```
    <style>
        seletor(tag_Html) {
            atributo: valor;
            atributo: valor;
        }
    </style>
```

## Explicação 
Antes de começar a estilização, devemos primeiramente abrir a tag ``<style> Para abrir o Css </style> ``. Depois escolheremos qual tag html será estilizada e depois que atributo ela vai receber.

### Exemplo Prático
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0f148e54-9e32-4891-a7a8-23c13ee276fa)
Temos esse html de exemplo, podemos dizer que todos os paragrafos fiquem da cor azul, Como fazemos isso ? Simples:
```
    <style>
        p{
            color: blue;
        }
    </style>
```
Retornando ao Html, ficou assim:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/294a315f-afa5-4eae-b2e4-c3a36c5da837)
Fazendo que todas as  tags ``<p> </p> ``, fossem caracterizadas pela cor azul. Agora, e o Texto 4? É uma tag ``<span> </span>`` e vamos supor que eu quero deixar essa tag, com um fundo com a cor vermelha, Como iremos atribuir esse fundo ? Simples: 
```
    <style>
        span{
            background-color: red;
        }
    </style>
```
Voltando para o Html, ficou assim:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2977944f-fecf-45e9-8d6a-723661d236ab)

#### Métodos De Chamada
Como você pode ver pelo Exemplo Prático, o css estiliza uma tag pelo nome da tag igualmente citado pelos Paragrafos e Texto 4. Mas, podemos chama-los de outra maneira, **pelos atributos html "id" e "class"**

#### Id X Class
- id: Conhecido como atributo de identificação, ou seja, todas as tags terão que ter sua própria ID. Para chama-la no css é simples, vamos supor que o Texto 4, tenha uma ID chamada de Span1 e quero deixar a cor do Span1 Magenta, Como estilizaremos isso? Simples:
```
    <style>
        #Span1{
            color: magenta;
        }
    </style>
```
Vejamos a nossa página, como ficou:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eef2c3f9-09ec-4780-b724-72d54d8e6ce4)

- class: Conhecido como atributo de classificação, ou seja, podemos dizer que ele é como se fosse um filtro para atribuir estilo para inúmeras tags html de uma vez. Como assim ? Por exemplo, imagine que todos os paragrafos possuem uma classe chamada ParGrf1, e todos que possuem essa classe terão seu fundo de cor preta e a cor da fonte para branco. Estilizando dessa maneira:

```
    <style>
        .ParGrf1{
            background-color: black;
            color:white;
        }
    </style>
```
Resultado:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6c2033ce-eda8-49db-b832-fd6e52af48a7)
