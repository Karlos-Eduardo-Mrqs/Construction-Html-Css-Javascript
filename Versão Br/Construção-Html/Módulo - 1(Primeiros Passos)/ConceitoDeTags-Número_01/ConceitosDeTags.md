# Observação 👁️

- [Leia a Introdução antes de continuar](Introdução.md)

---

## O que são Tags e Blocos? 🤔

As **tags** são elementos fundamentais do HTML, conhecidas como **blocos** que envolvem e organizam o conteúdo.  
Um exemplo básico seria:  

```html
<tag> Conteúdo </tag>
```

Como você pode ver, a tag possui uma **abertura**, um **fechamento** e o conteúdo é inserido entre ambas.

### Diferença entre Tags e Textos comuns

Qual seria a diferença entre os dois trechos abaixo?

```html
<p>Texto 1</p>      vs      Texto 2
```

A resposta é simples:  

- O **"Texto 1"** está envolvido pela tag `<p>`, usada para definir um **parágrafo**.  

- Já o **"Texto 2"** está **fora de qualquer tag**, ou seja, está **solto na estrutura do HTML**, sem o encapsulamento que uma tag proporciona.

> As tags garantem que o conteúdo seja reconhecido e exibido de forma correta pelos navegadores.

---

### Display

*Lembra do exemplo citado anteriormente?*  
Além da diferença de estrutura (com ou sem tag), existe também a diferença de **comportamento visual**, chamada **display**.

#### Exemplos e Conceito

O **display** determina como um elemento HTML será exibido na tela — se ocupará toda a linha, ficará ao lado de outros, entre outros comportamentos. Exemplo:

```html
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
```

As tags `<p>` têm, por padrão, o comportamento **display: block**, o que significa que cada parágrafo ocupa **toda a largura da linha**.  

Por isso, os textos "Parágrafo 1" e "Parágrafo 2" aparecem um **abaixo do outro**. Agora veja esse exemplo:

```html
Texto 1 Texto 2
```

Como não há nenhuma tag definindo seu comportamento, os textos são exibidos na **mesma linha**, um ao lado do outro.  

Esse é o comportamento típico de elementos com **display: inline**, que **não forçam quebra de linha**. Um exemplo de tag inline é a `<span>`, usada para destacar partes específicas de um texto sem afetar o fluxo do conteúdo.

---

## 💡 **Dica prática:**

Para visualizar como cada elemento se comporta na página, abra o navegador, pressione `CTRL + SHIFT + I` para abrir as ferramentas de desenvolvedor, clique no ícone de seleção (↖️) e selecione o elemento desejado. Isso mostrará o tipo de display e outras propriedades aplicadas.

---

# 💡 Continuação

- [Continua no Número_02](../EstruturaDoHtml-Número_02/Estrutura.md)