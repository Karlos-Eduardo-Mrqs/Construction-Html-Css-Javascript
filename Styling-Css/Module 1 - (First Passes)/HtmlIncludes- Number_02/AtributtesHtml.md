# Assigning In Html
We use Css for styling and design within our pages. But, how do we assign it to Html? 

## Forms of Attribution
1. **Tag style:** 
We can use the style tag, inside the header (head) or in the body (body): ``<style> p {color: red;} </style> ``

2. **Inline:**
Translating it would be something like "Na Linha", where you can insert your own css within the html tag. Using the style attribute. That way:``<p style="color: brown;"> Paragrafo 1 </p>``

3. **Import and Link:**
We can use css externally, that is, in separate files. Importing them within the style tag or with the link tag. You can do it in two ways:``<style> @import url(styles.css); </style>`` and ``<link rel="stylesheet" href="styles.css">``;

### Import X Link
The ``<link>`` tag is used in the HTML file to reference a source as if it were an external file. The @import function is used in the CSS file to import a font as if it were an external style file.

## Importance Hierarchy:
1. Inline;
2. Import or Link;
3. ``<style> </style>``;  
