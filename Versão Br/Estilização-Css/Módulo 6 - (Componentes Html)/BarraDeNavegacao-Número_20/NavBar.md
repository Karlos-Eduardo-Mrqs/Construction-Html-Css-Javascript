# Observação 👁️

- [Leia o número_19 antes](../Formulários-Número_19/2ºEstilo/Forms.md)

---

## 📌 Barra de Navegação

**A barra de navegação** é um dos elementos mais importantes de um site ou sistema.  
Ela ajuda os usuários a acessar diferentes seções ou páginas de forma rápida e eficiente.

---

## ✅ Por que usar uma Barra de Navegação?

Uma barra de navegação bem projetada oferece:

- **Facilidade de navegação:** Acesso direto às seções principais.  
- **Design amigável:** Melhora a experiência do usuário.  
- **Estética aprimorada:** Torna a interface visualmente atraente.  

---

## 📊 Tipos de Barras de Navegação

### 1. Barras Laterais

- Posicionadas verticalmente no lado esquerdo ou direito.
- Ideais para sistemas ou dashboards com várias opções.
  
![Barras Laterais](https://github.com/user-attachments/assets/b7a930a6-14d4-4a84-8f7f-41c22291b385)

### 2. Barras Horizontais

- Ficam no topo da página.
- Usadas em sites com navegação mais simples.

![Barra Horizontal](https://github.com/user-attachments/assets/ba76c0f0-9083-4700-bde3-f36fbfb4499f)

---

## 💻 Exemplo de Página Web

Página simples com barra lateral fixa e seções de conteúdo:

### 🔹 Barra de Navegação (Sidebar)

- Utiliza a tag `<nav>`
- Contém uma lista (`<ul>` → `<li>` → `<a>`)
- Links são placeholders (com `#`)

### 🔸 Conteúdo Principal (`<main>`)

- **Título e Introdução:** `<h1>` com parágrafo  
- **Sobre o Site:** Seção com `<h2>`  
- **Imagem Exemplo:** Exibida com responsividade  
- **Objetivo do Projeto:** Explicação final do layout  

---

## 🎨 CSS para Barra de Navegação Fixa

### Estilo do `<body>`

- Fonte Arial  
- Fundo cinza claro `#f4f4f4`  
- Margem superior `60px`  

![Body](https://github.com/user-attachments/assets/15f8ffb8-d157-47ba-a22b-9aa8a9c2dfd4)

---

### Estilo da `<nav>`

- `position: fixed`  
- `top: 0`, `left: 0`  
- `width: 100%`  
- Cor de fundo `#895647`  
- `z-index: 1000`  

![Barra Fixa](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

---

### Lista da Nav + Links

- `list-style: none`  
- `display: flex`, `justify-content: center`  
- `margin: 0 10px` nos itens  
- Links:
  - Cor branca, sem sublinhado  
  - Negrito, padding, `border-radius: 5px`  
  - Efeito `:hover` com `background: burlywood`  

![Links Nav](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

---

### Estilo do `<main>`

- `text-align: center`  
- `padding: 20px`  
- `margin-top: 80px`  

![Main](https://github.com/user-attachments/assets/a9fa599a-3fd0-4ebe-b0fc-6c5d61951c4e)

---

## 🧭 CSS para Sidebar Fixa

Este layout cria uma **barra lateral fixa e responsiva**, com conteúdo que se adapta.

---

## 🔄 Reset CSS

Zera margens, padding e define `box-sizing: border-box`.

![Reset](https://github.com/user-attachments/assets/069bc1a0-cc05-49a0-b3aa-f0e9b0af0d29)

### Estilo do `<body>`

- Fonte Arial  
- Fundo `#f4f4f4`  

![Estilo Corpo](https://github.com/user-attachments/assets/27a299ee-e00f-409a-a9aa-7b65290119c2)

---

## Sidebar

- `position: fixed`, `left: 0`, `top: 0`  
- Altura total: `100vh`  
- Largura inicial: `100px`  
- Transição suave para animação

![Sidebar](https://github.com/user-attachments/assets/beb0fedb-7c39-422a-9f8d-c8e4c09c444b)

---

## Hover da Sidebar

- Expande para `250px` quando o mouse passa

![Hover Sidebar](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

---

## Menu Sidebar

- `list-style: none`  
- Itens ocupam toda a largura

![Menu Sidebar](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

---

## Links do Menu

- `display: block`, `padding: 10px`  
- Cor branca, sem sublinhado  
- `border-radius: 5px`  
- Transição no hover

![Links Menu](https://github.com/user-attachments/assets/95390e81-2b01-42a8-8f51-fd535fb630c5)

---

## Hover nos Links

- Cor de fundo muda para `burlywood`

![Hover Links](https://github.com/user-attachments/assets/be47d595-b753-4592-8474-25af6bb47d31)

---

## Conteúdo Principal (`<main>`)

- `margin-left: 100px`  
- Transição suave para acompanhar expansão da sidebar

![Main Margin](https://github.com/user-attachments/assets/923f96b8-8ac5-47d2-9e8c-e72ea519ad1d)

---

## Títulos

- Cor escura, legível  
![Títulos](https://github.com/user-attachments/assets/9bed4fc3-fbad-4896-a076-80f45ca039d2)

---

## Parágrafos

- Cor mais clara  
- `line-height: 1.6`  
- `margin-bottom: 20px`  
![Parágrafos](https://github.com/user-attachments/assets/ef5160d3-38b5-45b2-b067-113556a24576)

---

## Imagens

- `width: 100%`, `max-width: 600px`  
- `border-radius: 10px`, `margin-top: 20px`  
![Imagens](https://github.com/user-attachments/assets/b52b7a49-136a-4136-b635-b0da7952a6ff)

---
