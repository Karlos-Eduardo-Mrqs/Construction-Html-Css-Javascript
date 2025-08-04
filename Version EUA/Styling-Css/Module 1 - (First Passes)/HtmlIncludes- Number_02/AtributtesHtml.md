# Note 👁️

- 📌 [Read Issue 01 before continuing](../IntrodutoriesConcepts-%20Number_01/FormattingConcepts.md)

---

## 🎯 Assigning CSS to HTML

We use CSS to apply style and design to web pages. But how do we connect CSS to HTML?

### 📎 Attribution Methods

#### 1.🔹 `<style>` Tag

We can use the `<style>` tag in the `<head>` or `<body>` of the HTML document:

```html
<style>
p { color: red; }
</style>
```

#### 2.🔹 Inline CSS

As the name suggests, CSS is applied directly to the HTML tag line using the style attribute:

```html
<p style="color: brown;">Paragraph 1</p>
```

#### 3. 🔹 External File (Import or Link)

You can also keep CSS separate from HTML by importing an external .css file.

- Via import:

```html
<style>
@import url("styles.css");
</style>
```

Via link (most recommended):

```html
<link rel="stylesheet" href="styles.css">
```

---

## 🧭 Priority Hierarchy (highest to lowest)

1. Inline CSS
2. External CSS (link or @import)
3. ``<style>`` tag in the document

> 🎯 Tip: Prefer external CSS to keep your code cleaner, more organized, and reusable.

## 📎 Continued

- [Continued in Module 2](../../Module%202%20-%20(Appearance)/Layouts-Number_03/Layout.md)
