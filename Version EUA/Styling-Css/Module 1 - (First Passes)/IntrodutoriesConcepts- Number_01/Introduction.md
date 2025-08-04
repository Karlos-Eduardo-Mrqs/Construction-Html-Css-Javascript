# 🎨 What is CSS?

CSS (Cascading Style Sheets) is the language used to style elements written in markup languages like HTML. It separates content from its visual representation, allowing you to apply colors, fonts, spacing, alignment, positioning, and even animations.

Think of CSS as the **visual decoration** of your website. With it, you can change text and background colors, adjust fonts and spacing between elements, create responsive layouts, and much more.

---

## 📜 Historical Summary

CSS was created by the **W3C (World Wide Web Consortium)** in 1996. At the time, HTML wasn't designed to include visual formatting—its focus was solely on structuring content.

With the introduction of tags like `<font>` in HTML version 3.2, many problems arose: each element had to be styled manually, which made websites difficult to maintain. To solve this, CSS was born — separating **structure (HTML)** from **style (CSS)**.

---

## 🧩 CSS Evolution

### 📘 CSS1 (1996)

- Introduced basic properties for fonts, colors, backgrounds, and text alignment;
- Support for simple selectors to apply styles to elements.

### 📗 CSS2 (1998)

- Introduced more sophisticated layouts with positioning and floating;
- Pseudoclasses and pseudo-elements;
- Support for media (print, screen);
- Internationalization (e.g., bidirectional text).

### 📕 CSS2.1

- Fixes and adjustments to CSS2 to standardize across browsers;
- Improved box model;
- Inclusion of modern properties such as `rgba()` and `hsl()`.

### 📙 CSS3 (2010 – current)

- CSS modularization (Flexbox, Grid, Animations, Typography, etc.);
- Advanced selectors (nth-child, attribute selectors);
- Gradients, shadows, multiple background images;
- 2D transformations, animations, transitions;
- Media queries and responsive design;
- CSS variables (--name: value).

### ⚠️ CSS4 (in proposal)

- Continuity of CSS3 with improvements to existing modules;
- Not an official new version, but rather a continuous evolution.

### 🔮 CSS5 (future)

- Still in concept, CSS5 represents ideas and improvements that may emerge over time.

> 🔎 **Important:** CSS does not evolve like closed-source software. It grows through modules individually approved by the W3C.

---

## 📂 Types of CSS

### 🔹 1. Inline CSS

Directly styles the element with the `style` attribute:

```html
<p style="color: red;">Text in red</p>
```

**✅ Useful for quick testing or styling a single item.**
**❌ Difficult to maintain and not reusable.**

### 🔹 2. Internal CSS

Inserted within the HTML document itself, in the ``<style>`` tag:

```html
<head>
<style>
body { background-color: lightblue; }
</style>
</head>
```

**✅ Useful for single documents or quick prototypes.**
**❌ Increases page size and doesn't allow reuse between files.**

### 🔹 3. External CSS

Created in a separate .css file and imported with the ``<link>`` tag:

```html
<link rel="stylesheet" href="style.css">
```

**✅ Best practice. Clean, reusable, and easier-to-maintain code.**
**✅ Styles can be applied to multiple pages.**

## 📌 CSS3 Highlights

With CSS3, developers and designers gained more freedom and flexibility to create modern interfaces:

- Rounded corners (border-radius)
- Shadows (box-shadow, text-shadow)
- Gradients (linear-gradient, radial-gradient)
- Transitions and animations (transition, @keyframes)
- Responsive layouts with Flexbox and CSS Grid
- Typography with @font-face and external fonts
- Adaptive design with Media Queries

---

## ✅ What did you learn?

- What is CSS and its importance in separating structure and style. - How CSS has evolved since its inception to the advanced features of CSS3.
- The differences between Inline, Internal, and External CSS, along with their uses and advantages.
- The main modern features of CSS3, such as Flexbox, Grid, animations, and media queries.
- How to apply CSS in practice to create visually appealing and responsive pages.

🎯 **Ready to apply all this to your own projects? Continue your journey!**

## 📘 Reference

- [Hostinger](https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css#Estilos_CSS_Interno_Externo_e_Inline)

## 📖 Keep Learning

- 👉 [Proceed to Part 2: CSS Formatting Concepts](../HtmlIncludes-%20Number_02/AtributtesHtml.md)
