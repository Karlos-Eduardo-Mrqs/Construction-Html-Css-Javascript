# Quotes In Html
Within Html, we can "reference" text that has already been created on our website using the tag `` <blockquote> </blockquote>``, its structure being like this:
``` 
  <blockquote cite="https://g1.globo.com/economia/noticia/2024/06/20/dolar-ibovespa.ghtml">
        The previous day, the North American currency advanced 0.15%, quoted at R$5.4417, renewing its highest level since January 2023. The main stock index on the Brazilian stock exchange closed with an increase of 0.53% , at 120,261 points.
  </blockquote>
```
# Tag Address
Also, we can mention addresses with the ``<address> </address> `` tag, the structure being like this:
```
  <address>
        Rua São Agostinho Número 67, Centro <br>
        São Paulo/SP <br>
        CEP: 010100-00 
    </address>
```
## Attribute Concept
Did you notice that next to the `` <blockquote> `` tag, there is a term called "cite" (Which defines, where I got this text from).This term is called attribute, where a tag can have a new function or characteristics, for example:

![ExemplosDeAtributo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/e7296dd7-996c-49fa-9103-8ae7e76a262e)

We can model attributes to make tags and blocks behave the way we want. As seen above, changing the color of the paragraph to blue.

# Text's For Quotes
## Tag q (Short Quotes)
This tag are used to define short quotes within a paragraph. The browser usually adds quotation marks around the content:

``<q>Imagination is more important than knowledge.</q>``

## Tag bdo (Bi-Directional Override)
The this tag allows us to override the text directionality (for example, changing text from left-to-right to right-to-left):

``<bdo dir="rtl">This text will be displayed right-to-left.</bdo>``

## Tag abbr (Abbreviation)
This tag defines an abbreviation or acronym, and we can provide a tooltip with the full form of the term using the title attribute:

`` <abbr title="World Health Organization">The WHO</abbr> was founded in 1948. ``