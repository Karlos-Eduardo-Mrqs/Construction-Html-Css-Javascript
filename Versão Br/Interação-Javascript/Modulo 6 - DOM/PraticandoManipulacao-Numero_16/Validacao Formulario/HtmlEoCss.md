# Guia de Compreensão: HTML e CSS do Formulário Dinâmico

Este documento explica a estrutura e o estilo de um formulário dinâmico que inclui telas de login e cadastro, além de um pop-up para exibição de mensagens. O objetivo é fornecer uma compreensão clara de como o HTML e o CSS são organizados e como interagem.

---

## Estrutura HTML

### Estrutura Geral

O HTML define a estrutura básica do formulário dinâmico, apresentando duas telas principais: **Login** e **Cadastro**. Ele também inclui um **pop-up** para exibir mensagens importantes ao usuário.

```html
<div class="popup">
<p class="pair"></p>
</div>
<div class="box">
<!-- Tela de Cadastro -->
<div id="cadastro" class="form-content">
<form method="post" name="cadastro">
...
</form>
</div>

<!-- Tela de Login -->
<div id="login" class="form-content active">
<form action="Send.php" method="post" name="login">
...
</form>
</div>
</div>
```

## Elementos Principais

- .popup: Um contêiner fixo no canto superior direito da tela, usado para exibir mensagens importantes.

- .box: O contêiner principal que envolve as telas de login e de cadastro.

- form-content: Cada tela (login e cadastro) é encapsulada em uma div com a classe .form-content.

- A classe .active determina qual formulário é visível.

- A classe .Input-Container: Cada campo de entrada possui um rótulo associado que flutua sobre o campo quando o usuário interage com ele.

## Estilo CSS

### Estilos Globais

```css
O CSS define estilos globais para garantir consistência e responsividade.
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Arial, sans-serif;
}

body {
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #f0f0f0;
}
```

- Redefinir Margens e Padding: Remove o espaçamento padrão dos elementos para evitar inconsistências.
- Centralização: O corpo centraliza o conteúdo na tela.
- Plano de fundo: Define um fundo cinza suave (#f0f0f0) para contraste.

### Estilo do Contêiner Principal

O .box é o contêiner principal que envolve as telas de login e cadastro.

```css
.box {
background-color: #fff;
padding: 30px;
border-radius: 10px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
max-width: 480px;
width: 100%;
position: relative;
}
```

- Fundo Branco: Proporciona contraste com o fundo cinza.
- Sombra e Cantos Arredondados: Adiciona um toque moderno e profissional.
- Responsividade: O max-width garante que o formulário se adapte bem a telas menores.

### Alternando entre Telas

Os formulários são alternados usando as classes .form-content e .active.

```css
.form-content {
display: none; /* Inicialmente oculta todos os formulários */
width: 100%;
text-align: center;
}

.form-content.active {
display: block; /* Exibe o formulário ativo */
}
```

- Ocultação Inicial: Todos os formulários começam ocultos (display: none).
- Exibição Ativa: A classe .active define display: block para exibir o formulário selecionado.

### Estilo de Input-Container

Os campos de entrada e seus rótulos têm um design moderno e interativo.

```css
    .input-container {
        position: relative;
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 15px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
    }

    input:focus {
        border-color: #66CDAA;
    }

    label {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        font-size: 16px;
        color: #999;
        pointer-events: none;
        transition: all 0.3s ease;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        top: -10px;
        left: 10px;
        font-size: 12px;
        color: #66CDAA;
    }
```

- Posicionamento Relativo: O rótulo é posicionado dentro da entrada usando position: absolute.
- Rótulos Flutuantes: Quando o usuário foca ou preenche um campo, o rótulo flutua sobre a entrada.
- Transições Suaves: As mudanças na posição e na cor dos rótulos são animadas para aprimorar a experiência do usuário.

### Estilo dos Botões

Os botões têm um design limpo e moderno, com animações de foco.

```css
button {
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
background-color: #66CDAA;
color: white;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;
}

button:hover {
background-color: #06dd95;
}
```

- Botões responsivos: ocupam toda a largura disponível (largura: 100%).
- Interação: a cor de fundo muda suavemente ao passar o mouse.

### Estilo do Pop-up

O pop-up é usado para exibir mensagens importantes, como erros ou confirmações.

```css
.popup {
display: none;
position: fixed;
top: 20px;
right: 20px;
background-color: snow;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
padding: 10px 20px;
border-radius: 5px;
z-index: 1000;
opacity: 0;
visibility: hidden;
transform: translateY(-20px);
transition: all 0.3s ease-in-out;
}

.popup.show {
display: block;
opacity: 1;
visibility: visible;
transform: translateY(0);
}
```

- Posicionamento fixo: o pop-up permanece visível no canto superior direito.
- Animação de entrada: usa opacidade, visibilidade e transformação para criar uma transição suave.

---

## Documentações

- **[Html](index.html)**
- **[Css](style.css)**
- **[Parte 2](Javascript.md)**
