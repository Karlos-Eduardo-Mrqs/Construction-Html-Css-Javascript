# [Leia o Número_01 antes de continuar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%201%20-%20(Primeiros%20Passos)/Conceitos_Introdutorios-%20N%C3%BAmero_01/Conceitos_Formata%C3%A7%C3%A3o.md)

# Atribuindo No Html
Usamos o Css para estilização e design dentro de nossas páginas. Mas, como atribuímos ele para o Html?
## Formas de Atribuição
1. **Tag style:** Podemos utilizar a tag style, dentro do cabeçalho(head) ou no corpo(body) ``<style>p{color: red;}</style> ``;
2. **Inline:** Traduzindo ficaria algo como "NA LINHA", onde você pode inserir o próprio css dentro da tag html. Usando o atributo style. Dessa forma:``<p style="color: brown;"> Parágrafo 1 </p>``
3. **Importação e Link:** Podemos usar o css de forma externa, ou seja, em arquivos separados. Importando-os dentro da tag style ou com a tag link. Podendo fazer dessas duas maneiras:

- Importação:``<style> @import url(styles.css); </style>``
- Link: ``<link rel="stylesheet" href="styles.css"> ``

## Hierarquia De Importância:
1. Inline;
2. Importação ou Link ;
3. ``<style> </style> ``;

# [Continua no Módulo 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/tree/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%202%20-%20(Apar%C3%AAncia))