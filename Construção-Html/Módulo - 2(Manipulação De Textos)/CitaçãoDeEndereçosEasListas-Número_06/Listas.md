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

Podemos notar que no *"item 1 "* temos uma sub lista ordenada e no *"item 4"* Temos uma sub lista não ordenada.**A diferença está no item 4, quando criamos mais de uma lista não ordenada, podemos perceber que seu ponteiro muda. Acontecendo a cada vez que criamos uma nova. Já no item 1, ele continua a mesma coisa. Não alterando seu ponteiro**.

# Estrutura De Uma Sub Lista Ordenada e Não Ordenada
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