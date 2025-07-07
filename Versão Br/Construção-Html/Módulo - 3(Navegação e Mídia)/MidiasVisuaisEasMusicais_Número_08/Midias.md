# Observação 👁️

- [Leia o Número_07 antes de continuar](../LinksEasÂncoras_Número_07/LinksEasAncoras.md)

---

## Mídias Musicais E Visuais 🎛️

Neste módulo, aprenderemos como manipular imagens, áudios e vídeos em nossas páginas HTML. Vamos lá!

## Imagem 📠

Utilizamos a tag ``<img />`` com os seguintes atributos:

- **src:** Define o nome do arquivo/imagem que vai ser usada.
- **width:** Largura de Pixels que a imagem vai possuir, ou seja, sua espessura.
- **height:** Altura de Pixels que a imagem vai possuir, ou seja, sua altura.
- **title:** Têm a função de exibir um texto explicativo, dizendo o que era para ser mostrado.

```html
<img src="alanzoka.jpg" width="350" height="200" title="Imagem do Alanzoka" />
```

![ExemploImg](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eb3d3b19-4512-4c87-a3d5-665444783f9c)

### Tipos de Imagens

- **JPEG – Joint Photographic Experts Group**

> Formato de compactação com perdas, ideal para fotos com muitos detalhes e cores.

- **JPG – Joint Photographic Experts Group**

> Mesma coisa que JPEG, apenas uma variação de extensão (limitada a 3 letras em sistemas antigos, como o MS-DOS).

- **SVG – Scalable Vector Graphics**

> Imagem vetorial escalável baseada em XML, excelente para ícones, logotipos e ilustrações que precisam manter qualidade em qualquer tamanho.

- **PNG – Portable Network Graphics**

> Formato sem perdas, ótimo para imagens com fundo transparente e gráficos com poucos detalhes (como botões ou ícones).

- **BMP – Bitmap**

> Formato de imagem sem compressão, gerado pelo Windows. Ocupa muito espaço e é pouco usado na web.

- [outros formatos.](https://www.futuraexpress.com.br/blog/formatos-de-imagem/)

### Referências de Imagens e Dicas ⚓

Ao desenvolver projetos maiores, temos "certa dificuldade" em encontrar as imagens, principalmente para o Design. Logo adiante, temos três links de confiança para você buscar por:

- [ícones](https://www.flaticon.com/br/);

- [imagens SVG](https://www.w3schools.com/graphics/svg_reference.asp);

- [imagens-e-icones](https://fontawesome.com/);

## Âncora e imagens 🖇️

É possível usar imagens dentro de uma âncora (``<a>``):

```html
<a href="https://www.youtube.com/@alanzoka/videos" title="Canal Do Alanzoka" target="_blank">
        <img src="im.jpg" width="350" alt="Imagem Do Alanzoka" />
    </a>
```

## Música 🎼

Para reproduzir áudio, usamos a tag ``<audio></audio>`` com os atributos:

- **controls:** Define os controles de iniciar,pausar,baixar. Ou seja, controles de interação.
- **src:** Mesma função nas imagens, tendo a diferença de definir o áudio que vai ser usado.
- **type:** O tipo de arquivo/tipo do arquivo. Exemplo: "áudio/mp3".

```html
<audio controls src="musica.mp3" type="audio/mp3"></audio>
```

## Tipos de arquivos de áudio 🖇️

O mais conhecido sem dúvida é o **"MP3**. [Porém existem outros tipos de arquivo no link fixado aqui](https://frahm.com.br/formatos-de-audio/) .

## Vídeos 📷

A tag ``<video> </video>`` permite inserir vídeos com os seguintes atributos:

- **controls:** Define os controles de iniciar,pausar,baixar ... Ou seja, controles de interação.
- **src:** Mesma função nos áudios, tendo a diferença de definir o vídeo que vai ser usado.
- **type:** O tipo de arquivo/tipo do arquivo. Exemplo: "vídeo/mp4" .
- **width:** Largura de Pixels que o vídeo vai possuir, ou seja, sua espessura.
- **height:** Altura de Pixels que o vídeo vai possuir, ou seja, sua altura.

```html
<video controls src="ApertouOPlay.mp4" type="video/mp4" width="1024" height="768"></video>

```

### Tipos de Arquivos de Vídeo ⚓

O mais conhecido sem dúvida é o **"MP4**. [Porém existem outros tipos de arquivo no link fixado aqui](https://mailchimp.com/pt-br/resources/video-formats/)

## Outras Tags relacionadas

Existe outra forma de você utilizar vídeos dentro do html. Utilizando as TAGS ``<iframe> </iframe> E <embed> </embed>``.

### ▶️ Diferença entre ``<iframe>`` e ``<embed>``

#### Tag ``<embed>``

![ExemploVideoEmbled](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4d08bf9b-0d9a-4f04-8d6d-e857d85fbbc8)

A tag ``<embed>`` permite incorporar mídias, como vídeos e arquivos PDF, diretamente na página.

*⚠️ Desvantagens:*

- Apresenta uma moldura escura ao redor do vídeo;
- Não permite abrir em tela cheia;
- Os botões de controle são pequenos;
- Interface considerada menos amigável.

**Por isso, é menos utilizada atualmente para vídeos.**

#### Tag ``<iframe>``

![ExemploIframe](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/91d691cc-bc65-42ad-bfe9-8a806ff229f9)

A tag ``<iframe>`` é a mais recomendada quando queremos incorporar vídeos de plataformas externas, como o YouTube.

**💡 Como incorporar vídeos do YouTube com ``<iframe>``**

- Acesse o vídeo desejado no YouTube;
- Clique em Compartilhar;
- Depois, clique em Incorporar;
- Copie o código ``<iframe>`` que aparecer;
- Cole no seu HTML (ex: no Visual Studio Code).

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/ID_DO_VIDEO" title="YouTube video player" frameborder="0" allowfullscreen></iframe> 
```

✅ Use ``<iframe>`` para incorporar vídeos de forma profissional e com melhor experiência para o usuário.

> 💡 Dica Extra: No YouTube, escolha um vídeo e depois vá em **Compartilhar → Incorporar** e copie o código `<iframe>` para inserir facilmente um vídeo na sua página HTML.

---

# 💡 Continuação

- [Continua no Módulo 4](../../Módulo%20-%204(Tabelas)/TabelasPrt1.md)
