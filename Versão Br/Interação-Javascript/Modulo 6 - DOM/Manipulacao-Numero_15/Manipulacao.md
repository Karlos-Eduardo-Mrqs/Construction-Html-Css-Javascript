# [Leia a Introdução Primeiro](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Manipulation-Number_15/Introduction.md)

# Manipulação de Elementos no DOM
Ao manipular o DOM, é possível criar, modificar e remover elementos da página web, além de alterar seus atributos e estilos. Esses procedimentos são realizados utilizando as propriedades e métodos fornecidos pelo DOM.

## Encontrando Elementos HTML Com DOM
Esses métodos permitem selecionar elementos HTML específicos na árvore do DOM para manipulação posterior.

1. **document.getElementById(id_name):** Encontra um elemento pelo seu ID; 
![image](https://github.com/user-attachments/assets/5c06f880-71b6-4008-a38b-0be59c49e51d)

2. **document.getElementsByTagName(Tag_name):** Encontra elementos pelo nome da tag; 
![image](https://github.com/user-attachments/assets/6e26ad42-9c39-4d38-9450-dae6c09200c0)

3. **document.getElementsByClassName(Class_name):** Encontra elementos pelo nome da classe; 
![image](https://github.com/user-attachments/assets/0cb7b196-158b-44a1-af5d-c823ee54350d)

4. **document.querySelector(.seletor ou #seletor):** Retorna o primeiro elemento que corresponde ao seletor CSS;
![image](https://github.com/user-attachments/assets/6700623e-8345-4e4d-96ea-05c53a65004e)
![image](https://github.com/user-attachments/assets/eee167f9-f36d-49f2-81b6-9f49da1724bd)

5. **document.querySelectorAll(seletor):** Retorna todos os elementos que correspondem ao seletor CSS; 
![image](https://github.com/user-attachments/assets/3d914f38-208d-4cbb-b6c8-f5a6cd85e96c)
![image](https://github.com/user-attachments/assets/f909ac84-4347-4445-b065-a5172e102ae7)

## Alterando Elementos HTML Com DOM
Essas propriedades e métodos permitem modificar o conteúdo, os atributos e o estilo dos elementos HTML. ``<p id='paragrafo' name='nome'></p>``

1. **element.innerHTML = novo conteúdo HTML:** Altera o conteúdo interno HTML de um elemento;
![image](https://github.com/user-attachments/assets/ce3f2dc8-9aa8-4817-8c75-faec2915077c)
![image](https://github.com/user-attachments/assets/47c44aa7-91d2-428d-a0f4-d1704e154e04)

2. **document.write(texto):** Escreve diretamente no fluxo de saída HTML (geralmente não recomendado).
![image](https://github.com/user-attachments/assets/483d820f-5a35-475d-93ff-8bdcd3504afd)

3. **element.textContent = novo texto:** Altera apenas o texto interno de um elemento;
![image](https://github.com/user-attachments/assets/8a496012-a05f-439c-a75f-a600eadaa47e)

4. **element.attribute = novo valor:** Altera o valor de um atributo de um elemento HTML;
![image](https://github.com/user-attachments/assets/7a0ee6c8-0257-4ef1-a1f7-9672b57d197f)
![image](https://github.com/user-attachments/assets/e24b18f9-0b06-474f-86f4-a863c835ff29)

5. **element.style.propriedade = novo estilo:** Altera o estilo de um elemento HTML;
![image](https://github.com/user-attachments/assets/2e44f14d-ad48-4af4-995a-d255c1651777)
![image](https://github.com/user-attachments/assets/32d3f684-c87e-4836-8dce-f3437f91547b)

## Adicionando Elementos HTML Com DOM
Esses métodos permitem criar novos elementos. `` <div id='Caixa'> </div> ``

1. **document.createElement(element):** Cria um novo elemento HTML. 
![image](https://github.com/user-attachments/assets/16bfac47-d2cb-402f-8a39-c27fa6f25ea5)

2. **document.appendChild(element):** Adiciona um novo elemento HTML como filho de outro elemento. 
![image](https://github.com/user-attachments/assets/f6f3be45-fc06-4024-b85a-f07e5ec97d09)

3. **document.insertBefore(novo, existente):** Insere um novo elemento HTML antes de um elemento existente. 
![image](https://github.com/user-attachments/assets/a3a707e5-e124-4683-b47e-8c46584effee)
![image](https://github.com/user-attachments/assets/d791ea37-74ca-418f-9185-548d52db99a9)

## Substituindo e Excluindo Elementos HTML Com DOM
Esses métodos permitem remover elementos ou substituí-los na árvore do DOM.

1. **document.removeChild(element):** Remove um elemento HTML da árvore do DOM. 
![image](https://github.com/user-attachments/assets/b2afbbfd-b321-40cb-987c-f90fd873c030)
![image](https://github.com/user-attachments/assets/d65f75da-81e9-49c3-a287-c9b513713393)

2. **document.replaceChild(novo, antigo):** Substitui um elemento HTML por outro. 
![image](https://github.com/user-attachments/assets/0c82576b-0309-48cc-8603-7cde7f47ad58)

3. **element.removeAttribute(atributo):** Remove um atributo de um elemento HTML.
![image](https://github.com/user-attachments/assets/409df0eb-b60c-42ac-9967-37c119f00e5b)
![image](https://github.com/user-attachments/assets/574ab498-e4d0-49b8-9e62-8c111aacf558)

## Trabalhando com Atributos no DOM
A manipulação de classes é essencial para estilizar elementos dinamicamente:

1. **element.getAttribute(atributo):** Obtém o valor de um atributo de um elemento HTML. 
![image](https://github.com/user-attachments/assets/1110ad33-3095-4c0c-a1f8-d1c49140c5ca)

2. **element.setAttribute(atributo, valor):** Define ou altera o valor de um atributo de um elemento HTML;
![image](https://github.com/user-attachments/assets/2b6b6b31-fe6f-4d3f-b10c-fcbc9bf24276)
![image](https://github.com/user-attachments/assets/cd9b2eca-d07e-4672-af2c-66710dc26b92)