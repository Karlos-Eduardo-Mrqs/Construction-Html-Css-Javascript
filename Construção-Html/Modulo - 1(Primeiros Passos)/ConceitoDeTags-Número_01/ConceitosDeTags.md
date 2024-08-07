# O que são Tags e Blocos ? 

As Tags são conhecidas como Blocos; onde todo o seu conteúdo é __"anexado"__ por elas. Por Exemplo:


```
<tag> Conteúdo </tag> 
```

_Como pode ver, a TAG possuí abertura e fechamento e seu conteúdo fica no meio._

# Diferença de Tags e Textos comuns

## Qual séria a diferença entre os textos abaixo ?

```
    <p> Texto1 </p> 
    Texto 2
```
Simples, o __"Texto 1"__ está coberto pela __tag p, conhecida como tag paragrafo.__ Ja o segundo, não possui bloco e está completamente
solto, sem nenhum __"combrimento da TAG"__.

# Display   
*Lembra do exemplo citaddo anteriormente ?* Então, além deles terem uma diferença de combrimento(de um texto estar entre a abertura e fechamento de uma tag), eles possuem uma outra divergência chamada de Display. 
## Exemplos e Conceito
O Display é o espaço que o conteúdo é exibido e como o conteúdo se comporta na tela, por exemplo:
    ```
        <p> Paragráfo 1 </p> 
        <p> Paragráfo 2 </p> 
    ``` 
    Na Tag "p", ele possuí por padrão o Display "Block", fazendo que o texto "Paragráfo 1" e "Paragráfo 2" ocupem uma linha inteira da página,
    ficando um abaixo do outro.Já quando utilizamos um texto normal dessa maneira:
    ```
        Texto 1
        Texto 2 
    ```
    Sem nenhuma TAG, os dois textos ficaram um do lado do outro, por possuirem por padrão o Display "Inline", isso também acontece com a TAG span, uma tag específica para textos. Para observar a diferença de displays basta abrir o documento, usar o atahlo "CTRL+SHIFT⬆️+I" procurar um icone↖️ e clicar no elemento desejado.