# Observação 👁️

- [Leia a parte um antes de continuar](../CitaçãoDeEndereçosEasListas-Número_06/CitaçãoDeEndereçosEasListas.md)

---

## Listas Ordenadas e Não Ordenadas

No HTML, podemos criar dois tipos principais de listas:

- Listas Ordenadas (numeradas)
- Listas Não Ordenadas (com marcadores/pontinhos)

### Listas Ordenadas

Para listas ordenadas, utilizamos a tag ``<ol>`` (ordered list) contendo os itens listados com a tag ``<li>`` (list item).

```html
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```

### Listas Não Ordenadas

Para listas não ordenadas, utilizamos a tag ``<ul>`` (unordered list) contendo os itens com a tag ``<li>``.

```html
    <ul>
        <li>Item 4 </li>
        <li>Item 5</li>
        <li>Item 6</li>
    </ul>
```

### SubListas

Além das listas simples, podemos criar sublistas — listas dentro de listas.

![ExemploDeSubListas](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/baa57203-51bf-4fa5-8845-c25d50b355ce)

- No item 1 há uma sublista ordenada.
- No item 4 há uma sublista não ordenada.

**Atenção:**

- Nas sublistas não ordenadas, os marcadores mudam a cada nova lista criada (diferentes tipos de ponteiros).

- Nas sublistas ordenadas, a numeração continua padrão sem alteração.

#### Estrutura De Uma Sub Lista Ordenada e Não Ordenada

```html
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

---

## 💡 Continuação

- [Continua no Módulo 3](../../Módulo%20-%203(Navegação%20e%20Mídia)/LinksEasÂncoras_Número_07/LinksEasAncoras.md)
