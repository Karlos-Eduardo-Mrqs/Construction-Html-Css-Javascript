# Prática com DOM (Projeto de Lista)

Programadores, este é um projeto interativo, utilizando apenas HTML, CSS e JavaScript. Para organizar a explicação, começamos com a estrutura em HTML (Parte 1), depois o estilo em CSS (Parte 2) e, por fim, JavaScript para interação e ajustes. Vamos nessa, baby!

---

## Estrutura HTML

### .popup-back e .popup

Começando com o esqueleto do projeto, temos dois divisores chamados `popup-back` e `popup`. Junto ao JavaScript, esses elementos criam os pop-ups, que exibem mensagens na tela. O `popup-back` é o fundo do pop-up, enquanto o `popup` contém a mensagem ("Deseja deletar todos os itens?") e dois botões para interação.

### .container e .message

Todo o conteúdo da lista e os campos de entrada estão localizados dentro de um divisor chamado `container`. Abaixo dele, há uma cláusula chamada `.message`, que será manipulada pelo JavaScript.

### .input, .list-box e .list

Os campos de entrada, onde o usuário interage e insere os itens da lista, estão na seção `.input`. Ela inclui uma caixa de texto, um rótulo (`label="name"`) e dois botões: um para adicionar itens e outro para limpar a lista inteira. A seção `.list-box` separa o conteúdo abaixo da lista não ordenada (`ul`), de forma semelhante à relação entre `popup-back` e `popup`.

### [Documento HTML](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_ManipulationNumber_16/index.html)

---

## Estrutura CSS

### Body

No corpo da página, definimos margens e preenchimento iguais a 0, box-sizing como `border-box`, cor de fundo como `rgb(14, 142, 255)`, fonte "Lucida", display `flex`, alinhamento ao centro (horizontal e vertical), e altura mínima de `100vh`.

### .Container

Na classe `.container`, usamos display `flex`, direção da coluna, alinhamento central, largura máxima de 800px, margens e preenchimentos apropriados, fundo branco, bordas arredondadas e uma sombra suave.

### .Input

A seção `.input` é configurada como posição relativa, display `flex` (em coluna), largura máxima de 500px, bordas arredondadas e sombra suave. O fundo é `rgb(234, 234, 234)` e há uma margem inferior para espaçamento.

#### Componentes de .input
- **label:** Posição absoluta, fonte de 18px, cor cinza, transformação para maiúsculas e transição suave ao focar.
- **input:** Largura total, bordas arredondadas, margem superior e fonte em negrito.
- **button:** Bordas, altura fixa, transição suave e mudança de cor ao passar o cursor (`hover`).

### .Message

A classe `.message` define a área onde as mensagens são exibidas. Ela tem bordas finas, fundo branco, fonte em negrito e um tamanho fixo para largura e altura, com transbordamento escondido.

### #list-box

A identidade `list-box` define uma seção com fundo branco, bordas arredondadas, sombra suave e margens adequadas.

#### Componentes de list-box
- **li:** Estilo de lista removido, texto em maiúsculas, espaçamento e truncamento de texto quando necessário.

### .Popup

O elemento `.popup` é inicialmente invisível. Ele é centralizado na tela com posição relativa, fundo claro, bordas arredondadas, sombra e alinhamento de texto. Ele possui botões estilizados com bordas, alturas fixas e animação ao passar o cursor.

### .Popup-Back

Para finalizar, o elemento `.popup-back` cobre toda a tela como fundo escurecido para destacar o pop-up. Inicialmente, está escondido (`display: none`).

### [Documento CSS](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/style.css)

---

## Resultado Final

![Resultado Final](https://github.com/user-attachments/assets/4f92e168-76bc-4548-9e8c-5c7dd63208f3)

---

### [Parte 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Javascript.md)
