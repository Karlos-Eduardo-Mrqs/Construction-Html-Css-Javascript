# [Leia o Módulo 2 antes de continuar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/tree/main/Vers%C3%A3o%20Br/Constru%C3%A7%C3%A3o-Html/M%C3%B3dulo%20-%202(Manipula%C3%A7%C3%A3o%20De%20Textos))

# Links e Âncoras
Chegamos agora na manipulação de links e âncoras. Junto desses dois conceitos, podemos navegar duas ou mais páginas, em uma única página.

# Conceitos
Uma conexão de um ponto para outro, um link é uma referência a outro documento, esse mesmo conceito se aplica às âncoras.Um site que podemos usar esse exemplo, é o Wikipedia. Observe:

![ExemploDeAncoras](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/06ad7f4a-0be0-42e9-9630-353355451419)

Nota-se que os links estão destacados em azul? Ao clicar nessas palavras em azul, você é direcionado para outra página; onde neste caso, a página irá te direcionar para uma explicação de uma espécie de dinossauros.
## Atributos e Estrutura
Sua estrutura funciona dessa maneira: ``<a href="Pagina2.html">Próxima página</a>``. Funcionando da seguinte maneira, entre a abertura e fechamento fica *o texto sublinhado em azul*, assim como fica no Wikipedia.Juntamente dos seus atributos:
1. **href:** Lugar que diz qual arquivo ele vai alternar;
2. **title:** Onde "descreve" para onde você vai;
3. **target:** Traduzindo para alvo, podendo esse link abrir em outra página ou na mesma página.

## Bizu dos Atributos
No 1.atributo, às vezes nós erramos o caminho/url da página para acessá-las correto? Às vezes, perdemos certo tempo com isso. Mas, não quando temos Visual Studio Code para isso,**utilizando o atalho "CTRL+Tecla De Espaço", podemos fazer o caminho/url com mais facilidade**.
![ExemploDeCTRL+Espaço](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/bc2abd64-6a4a-4326-829a-6dc5b34c3eff)

Indo para o 2.atributo, ele não exatamente é muito utilizado porém, é "necessário" dependendo da situação.Aparecendo somente quando você deixa o 🖱️,em cima da ancora.

![ExemploDeTitle](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/41c7af92-a62f-4b81-aabe-eeaed2d705c1)

Indo para o 3º atributo, quando navegamos uma página, não queremos que o nosso visitante saia da nossa página, certo? Para isso utilizamos esse atributo dessa maneira ``<a href="Pagina2.html" target="_blank">Próxima página</a>``, fazendo que o link abra na outra página(Lembre-se, use isso para caso saia do seu site principal).Por exemplo(**"Próxima Página",está no seu site ainda.O "Google" já não está, entendeu ?**):
![ExemploDeAncorasPT2](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/7dca0a40-b29c-4eea-b2a6-08e76f8160d8)

# Bônus
**Finalizando para um bônus,*Você sabia que tem como você criar âncoras para sua própria página, fazendo algo parecido com um sumário?* Não ?!? Então olhe logo abaixo:**
![ExemploLoremzo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/3d8b7ba3-d011-43cf-a068-ccae8ce41860)
## Atributo Id e Sumário
**Podemos fazer isso graças á um atributo que se chama id, um atributo que pode ser utilizado por qualquer TAG como uma forma de identificação,diferenciando cada TAG que utiliza esse atributo, veja a formatação desse atributo que simples na TAG H1: `<h1 id="Primeiro-Título"> Título 1</h1>`.Essa formatação se aplica a TODAS AS TAGS**. Para finalizar, como eu chamo esta tag dentro da minha página ? Simples basta fazer isso `` <a href="#nome-da-id"> Titulo <a/> `` .

## Formatação de Um Sumário
```
<h1>Página Do Lorenzo</h1>
    <p> Sumário
        <ul>
            <li> <a href="#parágrafo-1">Lorem ipsum</a> </li>
            <li> <a href="#parágrafo-3">Sed quibusdam</a> </li>
            <li> <a href="#parágrafo-6">que quem negue</a></li>
        </ul>
    </p>
```

# [Continua no Número_08](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Vers%C3%A3o%20Br/Constru%C3%A7%C3%A3o-Html/M%C3%B3dulo%20-%203(Navega%C3%A7%C3%A3o%20e%20M%C3%ADdia)/MidiasVisuaisEasMusicais_N%C3%BAmero_08/Midias.md)