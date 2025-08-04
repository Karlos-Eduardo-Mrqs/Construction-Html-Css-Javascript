# Note 👁️

- [Read the Introduction before continuing](../IntrodutoriesConcepts-%20Number_01/)

---

## 🎨 CSS Basics

CSS is a powerful tool that allows you to create various visual effects and layouts without the need for more complex languages like JavaScript. When used in moderation, it provides a great experience for developers and users.

## 🧱 CSS Structure Format

CSS works with **rules**. Each rule has:

- A **selector** (who will be styled)
- A **instruction block** (how it will be styled)

### 🧾 Syntax

```html
<style>
selector {
property: value;
property: value;
}
</style>
```

## Practical Example

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0f148e54-9e32-4891-a7a8-23c13ee276fa)

We have this sample HTML, we can tell all paragraphs to be blue. How do we do that? Simple:
``<style> p{color: blue;} </style>``

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/294a315f-afa5-4eae-b2e4-c3a36c5da837)

Making all ``<p> </p>`` tags blue. Now, what about Text 4? It's a ``<span> </span>`` tag, and let's suppose I want to give this tag a red background. How will we assign this background? Simple: ``<style>span{background-color: red;}</style>``

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2977944f-fecf-45e9-8d6a-723661d236ab)

## 📌 Calling Methods

In addition to calling elements by their tags (p, span, h1, etc.), we can also use:

- ID (unique identifier)
- Class (general classification)

### 🔖 Using ID

The ID is unique. No other element on the page should have the same one. Let's suppose Text 4 has an ID called Span1 and I want to make Span1's color magenta. How do we style this? Simple:

```html
<span id="meuSpan">Text</span>

<style>
#meuSpan { color: magenta; }
</style>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eef2c3f9-09ec-4780-b724-72d54d8e6ce4)

### 🗂️ Using Class

A class can be applied to multiple elements at the same time. For example, imagine that all paragraphs have a class called ParGrf1, and all those with this class will have a black background and white font color.

```html
<p class="highlight">Text 1</p>
<p class="highlight">Text 2</p>

<style>
.highlight {
background-color: black;
color: white;
}
</style>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6c2033ce-eda8-49db-b832-fd6e52af48a7)

---

## 📎 Continued

- [Continued in Number_02](../Inserindo_No_Html-%20Número_02/AtribuindoNoHtml.md)
