# Citações No Html
Dentro Do Html, podemos "referenciar" um texto que já foi criado no nosso site usando a tag `` <blockquote> </blockquote>``, sendo sua estrutura assim:

``` 
  <blockquote cite="https://g1.globo.com/economia/noticia/2024/06/20/dolar-ibovespa.ghtml">
        No dia anterior, a moeda norte-americana avançou 0,15%, cotada a R$5,4417, renovando o maior patamar desde janeiro de 2023. Já o principal índice acionário da bolsa de valores brasileira fechou com alta de 0,53%, aos 120.261 pontos.
  </blockquote>
```

## Tag Address
Também, podemos citar endereços com a tag ``<address> </address> `` sendo sua estrutura assim:

```
  <address>
        Rua São Agostinho Número 67, Centro <br>
        São Paulo/SP <br>
        CEP: 010100-00 
    </address>
```

## Conceito de Atributo 
Percebeu que ao lado da tag `` <blockquote> ``, tem um termo chamado "cite"(Que define de onde eu peguei esse texto). Esse termo chama-se atributo, onde uma tag pode possuir uma nova função ou características, 
por exemplo:
  
![ExemplosDeAtributo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/e7296dd7-996c-49fa-9103-8ae7e76a262e)
  
Podemos modelar atributos, para fazer que as tags/blocos se comportem da forma que desejamos. Como foi visto logo acima, mudando a cor do parágrafo para azul.

# Listas Ordenadas e Não Ordenadas
No Html, podemos criar dois tipos de listas, sendo elas ordenadas(com números) e não ordenadas(com pontinhos);

## Listas Ordenadas 
Nas listas ordenadas usamos a tag `` <ol> </ol> `` juntamente dentro dela a tag ``<li> </li> ``, que define os itens da lista. Veja sua estrutura logo abaixo: 

  ```
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
  ```

## Listas Não Ordenadas
Já nas listas não ordenadas usamos a tag `` <ul> </ul> `` juntamente dentro dela a tag ``<li> </li> ``, que define os itens da lista. Veja sua estrutura logo abaixo:

```
    <ul>
        <li>Item 4 </li>
        <li>Item 5</li>
        <li>Item 6</li>
    </ul>
```

## SubListas 
Não somente temos as listas ordenadas e não ordenadas. Temos também, as sublistas, que é uma lista dentro de outra lista, Observe:
![ExemploDeSubListas](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/baa57203-51bf-4fa5-8845-c25d50b355ce)

Podemos notar que no *"item 1 "* temos uma sub lista ordenada e no *"item 4"* Temos uma sub lista não ordenada.**As diferença está no item 4, quando criamos mais de uma lista não ordenada, podemos perceber que seu ponteiro muda. Acontecendo a cada vez que criamos uma nova. Já no item 1, ele continua a mesma coisa. Não alterando seu ponteiro**.

### Estrutura De Uma Sub Lista Ordenada e Não Ordenada 

```
<h1> Lista Ordenada </h1>
 <ol>
        <li>
            Item 1
            <ol>
                <li>Subitem 1.1</li>
                <li>Subitem 1.2</li>
                <li>Subitem 1.3</li>
            </ol>
        </li>
</ol>
<br>
<h1> Lista Não Ordenada </h1>
<br>
<ul>
        <li>
            Item 1
            <ul>
                <li>Subitem 1.1</li>
                <li>Subitem 1.2</li>
                <li>Subitem 1.3</li>
            </ul>
        </li>
</ul>
```
