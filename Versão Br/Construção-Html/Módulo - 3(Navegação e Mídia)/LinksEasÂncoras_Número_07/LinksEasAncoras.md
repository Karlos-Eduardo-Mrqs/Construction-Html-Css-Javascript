# Observação 👁️

- [Leia o Módulo 2 antes de continuar](../../Módulo%20-%202(Manipulação%20De%20Textos)/HeadingsEosParagrafos-Número_04/HeadsEosParagrafos.md)

---

## Links e Âncoras

Chegamos na manipulação de links e âncoras. Com esses conceitos, podemos navegar entre várias páginas ou dentro da mesma página.

### Conceitos

Um link conecta um ponto a outro, ou seja, faz referência a outro documento. O mesmo vale para as âncoras. Um exemplo prático que usamos muito é a Wikipédia:

![ExemploDeAncoras](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/06ad7f4a-0be0-42e9-9630-353355451419)

Note que os links aparecem em azul e sublinhados. Ao clicar, você é direcionado para outra página — no caso, uma explicação sobre uma espécie de dinossauro.

## Atributos e Estrutura

A estrutura básica de um link é:

```html
<a href="Pagina2.html">Próxima página</a>
```

Entre as tags ``<a></a>``, fica o texto clicável (sublinhado e azul por padrão).

**Principais atributos:**

1. **href:** Lugar que diz qual arquivo ele vai alternar;
2. **title:** Onde "descreve" para onde você vai;
3. **target:** Traduzindo para alvo, podendo esse link abrir em outra página ou na mesma página.

## Dica do Visual Studio Code

No atributo href, para evitar erros no caminho do arquivo, use o atalho **Ctrl + Espaço** para auto completar os nomes e pastas.

![ExemploDeCTRL+Espaço](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/bc2abd64-6a4a-4326-829a-6dc5b34c3eff)

Este atributo não é muito utilizado, mas pode ser essencial dependendo da situação. Ele aparece como uma dica (tooltip) quando você deixa o mouse 🖱️ sobre o link.

![ExemploDeTitle](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/41c7af92-a62f-4b81-aabe-eeaed2d705c1)

Quando navegamos em uma página, muitas vezes não queremos que o visitante saia do nosso site. Para evitar isso, usamos o atributo target="_blank", que faz o link abrir em outra aba ou janela.

```html
<a href="Pagina2.html" target="_blank">Próxima página</a>
```

> Use esse recurso principalmente quando o link levar para fora do seu site principal. Por exemplo, "Próxima Página" está no seu site, mas "Google" não está, entendeu?

![ExemploDeAncorasPT2](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/7dca0a40-b29c-4eea-b2a6-08e76f8160d8)

---

## Bônus

Você sabia que pode criar âncoras para sua própria página, como um sumário interativo?

![ExemploLoremzo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/3d8b7ba3-d011-43cf-a068-ccae8ce41860)

## Atributo Id e Sumário

Podemos fazer isso graças ao atributo id, que pode ser usado em qualquer tag para identificá-la de forma única.

Por exemplo, para um título:

```html
<h1 id="Primeiro-Título">Título 1</h1>
```

Para chamar essa tag dentro da página, usamos:

```html
<a href="#Primeiro-Título">Título</a>
```

## Formatação de Um Sumário

```html
<h1>Página Do Lorenzo</h1>
    <p> Sumário
        <ul>
            <li> <a href="#parágrafo-1">Lorem ipsum</a> </li>
            <li> <a href="#parágrafo-3">Sed quibusdam</a> </li>
            <li> <a href="#parágrafo-6">que quem negue</a></li>
        </ul>
    </p>
```

---

## 💡 Continuação

- [Continua no Número_08](../MidiasVisuaisEasMusicais_Número_08/Midias.md)
