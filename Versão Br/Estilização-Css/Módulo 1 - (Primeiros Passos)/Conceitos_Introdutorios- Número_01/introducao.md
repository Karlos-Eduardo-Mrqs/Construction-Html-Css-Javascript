# 🎨 O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para estilizar elementos escritos em linguagens de marcação como o HTML. Ele separa o conteúdo da representação visual, permitindo aplicar cores, fontes, espaçamentos, alinhamentos, posicionamentos e até animações.

Pense no CSS como a **decoração visual** do seu site. Com ele, é possível alterar a cor do texto e do fundo, ajustar fontes, espaçamento entre elementos, criar layouts responsivos e muito mais.

---

## 📜 Resumo Histórico

O CSS foi criado pelo **W3C (World Wide Web Consortium)** em 1996. Na época, o HTML não havia sido projetado para incluir formatações visuais — seu foco era apenas estruturar o conteúdo.

Com a introdução de tags como `<font>`, na versão 3.2 do HTML, surgiram muitos problemas: cada elemento precisava ser estilizado manualmente, o que tornava os sites difíceis de manter. Para resolver isso, nasceu o CSS — separando **estrutura (HTML)** de **estilo (CSS)**.

---

## 🧩 Evolução do CSS

### 📘 CSS1 (1996)

- Introduziu propriedades básicas para fontes, cores, planos de fundo e alinhamento de texto;
- Suporte a seletores simples para aplicar estilo aos elementos.

### 📗 CSS2 (1998)

- Introdução de layouts mais sofisticados com posicionamento e flutuação;
- Pseudoclasses e pseudoelementos;
- Suporte para mídia (impressão, tela);
- Internacionalização (ex: texto bidirecional).

### 📕 CSS2.1

- Correções e ajustes do CSS2 para padronizar entre navegadores;
- Melhoria no modelo de caixa;
- Inclusão de propriedades modernas como `rgba()` e `hsl()`.

### 📙 CSS3 (2010 – atual)

- Modularização do CSS (``Flexbox``, ``Grid``, ``Animações``, ``Tipografia``, etc.);
- Seletores avançados (`nth-child`, `attribute selectors`);
- Gradientes, sombras, múltiplas imagens de fundo;
- Transformações 2D, animações, transições;
- Consultas de mídia (``media queries``) e design responsivo;
- Variáveis CSS (`--nome: valor`).

### ⚠️ CSS4 (em proposta)

- Continuidade do CSS3 com melhorias em módulos existentes;
- Não é uma nova versão oficial, mas sim evolução contínua.

### 🔮 CSS5 (futuramente)

- Ainda em conceito, CSS5 representa ideias e aprimoramentos que podem surgir com o tempo.

> 🔎 **Importante:** CSS não evolui como software com versões fechadas. Ele cresce por meio de *módulos* aprovados individualmente pelo W3C.

---

## 📂 Tipos de CSS

### 🔹 1. CSS Inline

Estiliza diretamente o elemento com o atributo `style`:

```html
<p style="color: red;">Texto em vermelho</p>
```

**✅ Útil para testes rápidos ou estilizar um único item.**
**❌ Difícil de manter e não reutilizável.**

### 🔹 2. CSS Interno

Inserido dentro do próprio documento HTML, na tag ``<style>``:

```html
<head>
  <style>
    body { background-color: lightblue; }
  </style>
</head>
```

**✅ Útil para documentos únicos ou protótipos rápidos.**
**❌ Aumenta o tamanho da página e não permite reutilização entre arquivos.**

### 🔹 3. CSS Externo

Criado em um arquivo .css separado e importado com a tag ``<link>``:

```html
<link rel="stylesheet" href="estilo.css">
```

**✅ Melhor prática. Código limpo, reutilizável e mais fácil de manter.**
**✅ Estilo pode ser aplicado a múltiplas páginas.**

## 📌 Destaques do CSS3

Com o CSS3, desenvolvedores e designers ganharam mais liberdade e flexibilidade para criar interfaces modernas:

- Cantos arredondados (``border-radius``)
- Sombras (``box-shadow``, ``text-shadow``)
- Gradientes (``linear-gradient``, ``radial-gradient``)
- Transições e animações (``transition``, ``@keyframes``)
- Layouts responsivos com ``Flexbox`` e ``CSS Grid``
- Tipografia com ``@font-face`` e fontes externas
- Design adaptável com ``Media Queries``

---

## ✅ O que você aprendeu?

- O que é CSS e sua importância na separação entre estrutura e estilo.
- Como o CSS evoluiu desde sua criação até os recursos avançados do CSS3.
- As diferenças entre CSS Inline, Interno e Externo, com seus usos e vantagens.
- Os principais recursos modernos do CSS3, como Flexbox, Grid, animações e media queries.
- Como aplicar o CSS na prática para criar páginas visualmente atraentes e responsivas.

🎯 **Pronto para aplicar tudo isso em seus próprios projetos? Continue sua jornada!**

## 📘 Referência

- [Hostinger](https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css#Estilos_CSS_Interno_Externo_e_Inline)

## 📖 Continue Aprendendo

- 👉 [Avance para a Parte 2: Conceitos de Formatação com CSS](../Conceitos_Introdutorios-%20Número_01/Conceitos_Formatação.md)
