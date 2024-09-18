# Ordered and Unordered Lists
In Html, we can create two types of lists, ordered (with numbers) and unordered (with dots).
## Ordered Lists 
In ordered lists we use the `` <ol> </ol> `` tag along with the ``<li> </li> `` tag, which defines the list items. See its structure below: 
```
  <ol>
      <li>Item 1</li> 
      <li>Item 2</li>
      <li>Item 3</li>
  </ol>
```
## Unordered Lists
In unordered lists, we use the `` <ul> </ul> `` tag along with the ``<li> </li> `` tag, which defines the list items. See its structure below:
  ```
<ul>
        <li>Item 4 </li>
        <li>Item 5</li>
        <li>Item 6</li>
    </ul>
  ```
## SubLists 
![ExemploDeSubListas](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/baa57203-51bf-4fa5-8845-c25d50b355ce)

We not only have ordered and unordered lists. We also have sublists, which is a list within another list. Note in up.We can notice that in *"item 1 "* we have an ordered sublist and in *"item 4"* we have an unordered sublist. The difference is in *item 4*, when we create more than one unordered list, we can notice that its pointer changes. **Happening every time we create a new one**. **As for item 1, it remains the same. Not changing your pointer**.

### Structure of an ordered and unordered sublist 
```
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
# Description Lists
In addition to ordered and unordered lists, we also have description lists, which are useful for defining terms and their descriptions. That list you use ``<dl></dl>`` for initial, ``<dt></dt>``, for title of description and ``<dd></dd>`` to item this list:

### Structure of Description Lists
```
<dl>
    <dt>HTML</dt>
    <dd>Uma linguagem de marcação.</dd>
    
    <dt>CSS</dt>
    <dd>Uma folha de cascata.</dd>
    
    <dt>JavaScript</dt>
    <dd>Uma linguagem de programação.</dd>
</dl>
```