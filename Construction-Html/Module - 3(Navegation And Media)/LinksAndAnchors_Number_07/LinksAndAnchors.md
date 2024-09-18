# Links And Anchors
We now come to manipulating Links and anchors. Together with these two concepts, we can browse two or more pages on a single page.

## Concepts 
__A connection from one point to another, a link is a reference to another document, this same concept applies to anchors.__ A site that we can use as an example is Wikipedia. Do you notice that the links are highlighted in blue? When you click on these blue words, you are directed to another page; where in this case, the page will direct you to an explanation of a species of dinosaurs. Watch:

![ExemploDeAncoras](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/06ad7f4a-0be0-42e9-9630-353355451419)

## Attributes and Structure
Its structure is done like this:``<a href="Page2.html">Next page</a>``.It works as follows, between opening and closing, *the text is underlined in blue*, just as it is on Wikipedia. Along with its attributes:
1. **href:** Which says which file it will switch to;
2. **title:** Where "describes" where you are going;
3. **target:** Translating to target, this link can open on another page or on the same page;

# Explicity Attributes
## First Attribute
**In the 1st attribute, sometimes we get the wrong path/url of the page to access them, correct? Sometimes we waste some time with this. But, not when we have Visual Studio Code for this, using the shortcut "CTRL+Space Key", we can create the path/url more easily**.

![ExemploDeCTRL+Espaço](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/bc2abd64-6a4a-4326-829a-6dc5b34c3eff)

## Second Attribute
**Going to the 2nd attribute, it's not exactly used a lot. However, it's "necessary" depending on the situation, appearing only when you leave the 🖱️ on top of the anchor.**

![ExemploDeTitle](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/41c7af92-a62f-4b81-aabe-eeaed2d705c1)

## Third Attribute
**Going to the 3rd attribute, when we navigate a page, we don't want our visitor to leave our page, right? To do this, we use this attribute in this way `` <a href="Pagina2.html" target="_blank">Next page</a> ``, making the link open on the other page (Remember, use this in case leave your main website). For example ("Next Page", is still on your website. "Google" is no longer there, understand?):**

![ExemploDeAncorasPT2](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/7dca0a40-b29c-4eea-b2a6-08e76f8160d8)

# Completing Bonus 
**Finally for a bonus,did you know that you can create anchors for your own page, making something similar to a summary? No?!? Then look below:**

![ExemploLoremzo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/3d8b7ba3-d011-43cf-a068-ccae8ce41860)

**We can do this thanks to an attribute called id, an attribute that can be used by any TAG as a form of identification, differentiating each TAG that uses this attribute, see the formatting of this attribute that is simple in TAG H1: `< h1 id="Primeiro-Titulo"> Titulo1</h1>`.This formatting applies to ALL TAGS**.Finally, how do I call this tag within my page? Simple, just do this: `` <a href="#nome-da-id"> Title <a/> ``. Note, to test the summary, click on the "Summary.html" file in that folder and test it.

## Formatting a Summary
```
<h1>Página Do Loremzo</h1>
    <p> Súmario 
        <ul>
            <li> <a href="#paragrafo-1">Lorem ipsum</a> </li>
            <li> <a href="#paragrafo-3">Sed quibusdam</a> </li>
            <li> <a href="#paragrado-6">quo quam neque</a></li>
        </ul>
    </p>
```