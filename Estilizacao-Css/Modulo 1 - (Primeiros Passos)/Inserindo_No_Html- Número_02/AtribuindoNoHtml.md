# Atribuindo No Html
Usamos o Css para estilização e design dentro de nossas páginas. Mas, como atribuimos ele para o Html? 

## Formas de Atribuição
- **Tag style:Podemos utilizar a tag style, dentro do cabeçalho(head) ou no corpo(body):**
```
 <style>
        p{
            color: red;
        }
</style> 
```

- **Inline: Traduzindo ficaria algo como "NA LINHA", onde você pode inserir o próprio css dentro da tag html. Usando o atributo style. Dessa forma:**
``<p style="color: brown;"> Paragrafo 1 </p>``

- **Importação e Link: Podemos usar o css de forma externa, ou seja, em arquivos separados. Importando-os dentro da tag style ou com a tag link. Podendo fazer dessas duas maneiras:**

1. Importação:``<style> @import url(styles.css); </style>``

2. Link: ``<link rel="stylesheet" href="styles.css"> ``

## Hierarquia De Importância:
1. Inline;
2. Importação ou Link ;
3. ``<style> </style> ``;