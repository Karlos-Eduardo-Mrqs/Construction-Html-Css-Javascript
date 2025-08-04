# Note 👁️

- [Read part one before continuing](../AddressCitationsAndLists-Module_06/AddressCitationsAndLists.md)

---

## Ordered and Unordered Lists

In HTML, we can create two main types of lists:

- Ordered Lists (numbered)
- Unordered Lists (with bullets/dots)

### Ordered Lists

For ordered lists, we use the `<ol>` tag (ordered list) containing list items with the `<li>` tag (list item).

```html
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```

### Unordered Lists

For unordered lists, we use the ``<ul>`` tag (unordered list) containing items with the ``<li>`` tag.

```html
<ul>
        <li>Item 4 </li>
        <li>Item 5</li>
        <li>Item 6</li>
    </ul>
```

### SubLists

Besides simple lists, we can create sublists — lists inside lists.

![ExemploDeSubListas](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/baa57203-51bf-4fa5-8845-c25d50b355ce)

- Item 1 contains an ordered sublist.
- Item 4 contains an unordered sublist.

**Note:**

In unordered sublists, the bullet styles change with each new list created (different pointer types).

In ordered sublists, numbering continues normally without changes.

#### Structure of an ordered and unordered sublist

```html
<h1> Lista Ordenada </h1>
 <ol>
        <li>
            Item 1
            <ol>
                <li>Sub Item 1.1</li>
                <li>Sub Item 1.2</li>
                <li>Sub Item 1.3</li>
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
                <li>Sub Item 1.1</li>
                <li>Sub Item 1.2</li>
                <li>Sub Item 1.3</li>
            </ul>
        </li>
</ul>
```

---

## Continue 💡

- [Continues in Modules 3](../../Module%20-%203(Navegation%20And%20Media)/LinksAndAnchors_Number_07/LinksAndAnchors.md)
