# Observação 👁️

- [Leia a construção antes](HtmlEoCss.md)

---

## Explicação do Código JavaScript

Este código trata da criação e manipulação de uma lista dinâmica, onde o usuário pode adicionar ou remover itens. Ele também fornece um feedback visual em uma área de mensagem e utiliza uma janela pop-up para confirmar a exclusão de todos os itens da lista.

## Regras

As regras serão as seguintes:

1. Haverá uma lista comum para armazenar ou para o usuário inserir itens;
2. Os itens da lista serão diferentes, ou seja, não haverá itens repetidos;
3. Ao clicar no botão de adicionar, a mensagem e o item serão selecionados dentro da lista;
4. Ao clicar no botão de deletar, o pop-up será exibido;
5. A mensagem será informativa para cada ação do usuário.

Levando isso em conta, vamos começar!

### Regra Número_#1

```javascript
let List = [];
let mensagem = document.querySelector(".message");
mensagem.style.display = "none";
```

Aqui, um array `List` é inicializado para armazenar os itens da lista. A variável `mensagem` seleciona um elemento HTML com a classe `.message`, que será usado para exibir mensagens temporárias. Inicialmente, a mensagem é escondida com `mensagem.style.display = "none"`.

### Regras Número #2, #3 e #5

```javascript
function Adicionar() {
    let nome = document.getElementById("nome");
    let NomeValido = nome.value !== "";
    let pair = document.createElement("p");
    let Item = document.createElement("li");
    let List_Box = document.querySelector("#list");
```

Essa função será executada ao clicar no botão de adicionar. Suas etapas são as seguintes:

1. O nome inserido pelo usuário é obtido através do campo de entrada `nome`.
2. Verifica se o nome não está vazio (`NomeValido`).
3. Elementos HTML `p` e `li` são criados dinamicamente para exibir mensagens e adicionar itens à lista, respectivamente.

```javascript
if (NomeValido) {
        let ItemIgual = List.includes(nome.value);
        if (!ItemIgual) {
            Item.innerText = nome.value;
            List.push(nome.value);
            List_Box.appendChild(Item);
            pair.innerText = `O nome está válido!`;
        } else {
            pair.innerText = `O nome já existe.`;
        }
    } else {
        pair.innerText = `O nome é inválido!`;
    }
```

Aqui, verifica-se se o nome já existe na lista, usando `List.includes` (fazendo a lista verificar se já possui aquele nome). Se o nome for único, ele é adicionado ao array `List` e ao elemento `ul` da lista. Caso contrário, uma mensagem apropriada é exibida.

```javascript
    nome.value = "";
    mensagem.appendChild(pair);
    mensagem.style.display = "block";
    setTimeout(() => {
        if (mensagem.contains(pair)) {
            mensagem.removeChild(pair);
            mensagem.style.display = "none";
        }
    }, 2000);
}
```

Depois de adicionar o item ou exibir a mensagem de erro, o campo de texto é limpo. A mensagem temporária é exibida por 2 segundos e, em seguida, desaparece. Isso é feito com a função `setTimeout` (fazendo a mensagem aparecer por um curto período).

### Regra Número_#4

```javascript
function Deletar() {
    let mensagem = document.querySelector(".message");
    let pair = document.createElement("p");
    let pop = document.querySelector(".popup");
    let backPop = document.querySelector("#popup-back"); 
    let SimDel = document.querySelector(".popup button[value='Sim']");
    let NaoDel = document.querySelector(".popup button[value='Nao']");
```

Na função `Deletar()`, elementos da interface de confirmação são selecionados, como o pop-up e os botões "Sim" e "Não". O pop-up é exibido inicialmente para o usuário decidir se deseja remover todos os itens da lista.

```javascript
  pop.style.display = "block";
    backPop.style.display = "block";
    SimDel.onclick = () => {
        let List_Box = document.querySelector("#list");
        let List_Itens = document.getElementsByTagName("li");
        if (List_Itens.length > 0) {
            let Array_Itens = Array.from(List_Itens);
            Array_Itens.forEach((Item) => {
                List_Box.removeChild(Item);
            });
            List = [];
            pair.innerText = "Todos os itens foram removidos!";
            mensagem.appendChild(pair);
            setTimeout(() => {
                if (mensagem.contains(pair)) {
                    mensagem.removeChild(pair);
                }
            }, 2000);           
            pop.style.display = "none";
            backPop.style.display = "none";
        } else {
            pop.style.display = "none";
            backPop.style.display = "none";
        }
    };
```

Se o usuário confirmar a remoção clicando em "Sim", todos os itens da lista são removidos tanto visualmente (usando `removeChild()`) quanto do array `List`. Uma mensagem de sucesso é exibida por 2 segundos. Em seguida, o pop-up é ocultado novamente. Se o usuário clicar em "Não", o pop-up é simplesmente fechado sem remover os itens.

```javascript
  NaoDel.onclick = () => {
        pop.style.display = "none";
        backPop.style.display = "none";
    };
}
```
