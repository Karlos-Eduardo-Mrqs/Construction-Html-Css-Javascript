# O que são Tags e Blocos ?
As Tags são conhecidas como Blocos; onde todo o seu conteúdo é _"anexado"_ por elas. Por Exemplo: ``<tag> Conteúdo </tag> ``. Como pode ver, a TAG possui abertura, fechamento e seu conteúdo fica no meio._

# Diferença de Tags e Textos comuns
Qual seria a diferença entre os textos abaixo ?

``<p> Texto1 </p> X Texto 2``

__Simples, o "Texto 1"está coberto pela tag p, conhecida como tag parágrafo.Já o segundo, não possui bloco e está completamente solto, sem nenhum "comprimento da TAG"__.

# Display  
*Lembra do exemplo citado anteriormente ?* Então, além deles terem uma diferença de comprimento(de um texto estar entre a abertura e fechamento de uma tag), eles possuem uma outra divergência chamada de Display.

## Exemplos e Conceito
O Display é o espaço que o conteúdo é exibido e como o conteúdo se comporta na tela, por exemplo:
``<p> Parágrafo 1 </p> <p> Parágrafo 2 </p> ``

Na Tag "p", ele possui por padrão o Display "Block", fazendo que o texto "Parágrafo 1" e "Parágrafo 2" ocupem uma linha inteira da página, ficando um abaixo do outro.
Já quando utilizamos um texto normal dessa maneira: ``Texto 1 Texto 2 ``

Sem nenhuma TAG, os dois textos ficaram um do lado do outro, por possuírem por padrão o Display "Inline", isso também acontece com a TAG span, uma tag específica para textos. Para observar a diferença de displays basta abrir o documento, usar o atalho "CTRL+SHIFT⬆️+I" procurar um ícone↖️ e clicar no elemento desejado.