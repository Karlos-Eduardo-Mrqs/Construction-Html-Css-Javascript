# Mídias Musicais E Visuais
Aprenderemos hoje, como manipular arquivos de vídeo, áudio e imagem dentro de nossas páginas. Vamos lá .

# Imagem
Começando pelo arquivo de imagem, utilizamos a tag `` <img/> ``. Junto dela, **possuímos os principais atributos**:
- **src:** Define o nome do arquivo/imagem que vai ser usada.
- **width:** Largura de Pixels que a imagem vai possuir, ou seja, sua espessura.
- **height:** Altura de Pixels que a imagem vai possuir, ou seja, sua altura.
- **title:** Têm a função de exibir um texto explicativo, dizendo o que era para ser mostrado, Por exemplo:;

![ExemploImg](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eb3d3b19-4512-4c87-a3d5-665444783f9c)
## Tipos de Imagens
Em tipos de imagens possuímos **"JPEG,JPG,SVG,PNG,BMP** e entre outros formatos.
- [Entre no link abaixo, para saber os demais formatos](https://www.futuraexpress.com.br/blog/formatos-de-imagem/)

## Referências de Imagens e Dicas
Ao desenvolver projetos maiores, temos "certa dificuldade" em encontrar as imagens, principalmente para o Design. Logo adiante, temos três links de confiança para você buscar por:
- [ícones](https://www.flaticon.com/br/);
- [imagens SVG](https://www.w3schools.com/graphics/svg_reference.asp);
- [imagens-e-icones](https://fontawesome.com/);

##  Âncora e imagens
Você pode usar imagens em conjunto de âncoras(**Podendo citar alguém ou um artigo pela imagem. Igualmente ao arquivo imagens.html**),logo abaixo está a estrutura:

```
<a href="https://www.youtube.com/@alanzoka/videos" title="Canal Do Alanzoka" target="_blank">
        <img src="im.jpg" width="350" alt="Imagem Do Alanzoka" />
    </a>
```

# Música
Já na manipulação de áudios, músicas e relacionados. Usamos a TAG ``<audio> </audio> ``, assim como as imagens, ela precisa de alguns atributos como:
- **controls:** Define os controles de iniciar,pausar,baixar. Ou seja, controles de interação.
- **src:** Mesma função nas imagens, tendo a diferença de definir o áudio que vai ser usado.
- **type:** O tipo de arquivo/tipo do arquivo. Exemplo: "áudio/mp3".

## Tipos de arquivos de áudio
O mais conhecido sem dúvida é o **"MP3**. [Porém existem outros tipos de arquivo no link fixado aqui](https://frahm.com.br/formatos-de-audio/) .

- Estrutura Final: ``<audio controls src="e o-pix-nada-ainda.mp3" type="audio/mp3"> ``

# Vídeos
Finalizando na manipulação de vídeos, gifs e relacionados;usamos a tag ``<vídeo> </vídeo>``. Assim como as imagens e áudios, ele precisa de alguns atributos como:
- **controls:** Define os controles de iniciar,pausar,baixar ... Ou seja, controles de interação.
- **src:** Mesma função nos áudios, tendo a diferença de definir o vídeo que vai ser usado.
- **type:** O tipo de arquivo/tipo do arquivo. Exemplo: "vídeo/mp4" .
- **width:** Largura de Pixels que o vídeo vai possuir, ou seja, sua espessura.
- **height:** Altura de Pixels que o vídeo vai possuir, ou seja, sua altura.

## Estrutura Final:
`` <video controls src="ApertouOPlay.mp4" type="video/mp4" width="1024" height="768"> </video> ``

## Tipos de Arquivos de Vídeo
O mais conhecido sem dúvida é o **"MP4**. [Porém existem outros tipos de arquivo no link fixado aqui]([https://frahm.com.br/formatos-de-audio/](https://mailchimp.com/pt-br/resources video-formats/)) .

## Outras Tags relacionadas
Existe outra forma de você utilizar vídeos dentro do html. Utilizando as TAGS `` <iframe> </iframe> E <embed> </embed>  ``.

### Iframe X Embed
![ExemploVideoEmbled](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4d08bf9b-0d9a-4f04-8d6d-e857d85fbbc8)

Logo acima foi utilizado a tag **EMBED**. Que não é tão utilizado, por conta da sua caixa preta ao redor do vídeo e de não possibilitar a tela cheia. Além disso,seus botões de controle são pequenos, fazendo que "dificulte" a interação e visualmente é "feio".

![ExemploIframe](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/91d691cc-bc65-42ad-bfe9-8a806ff229f9)

Acima usamos a tag **IFRAME**. Que é mais utilizada, onde até mesmo pelo Youtube, você pode pegar esse Iframe.Siga passo a passo, **Entre no Youtube; Escolha o Vídeo; Clique em Compartilhar e depois Incorporar; Copie o Código Iframe e pronto "CTRL+C NO YOUTUBE E CTRL+V NO VISUAL STUDIO**.