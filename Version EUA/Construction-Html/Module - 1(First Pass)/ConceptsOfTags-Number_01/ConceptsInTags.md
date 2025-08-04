# Observation 👁️

- [Read the Introduction before continuing](Introduction.md)

---

## What are Tags and Blocks? 🤔

**Tags** are fundamental elements of HTML, known as **blocks** that wrap and organize the content.  
A basic example would be:

```html
<tag> Content </tag>
```

As you can see, the tag has an **opening**, a **closing**, and the content is placed between them.

### Difference between Tags and Plain Text

What is the difference between the two examples below?

```html
<p>Text 1</p>      vs      Text 2
```

The answer is simple:

- **"Text 1"** is wrapped by the `<p>` tag, which is used to define a **paragraph**.  

- **"Text 2"** is **outside any tag**, meaning it’s **floating in the HTML structure**, without the encapsulation that a tag provides.

> Tags ensure that the content is recognized and displayed correctly by browsers.

---

### Display

*Remember the example mentioned earlier?*  
Besides the difference in structure (with or without a tag), there is also a difference in **visual behavior**, called **display**.

#### Examples and Concept

**Display** determines how an HTML element will be rendered on the screen — whether it takes up the entire line, sits next to others, and so on. Example:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

The `<p>` tags have, by default, the behavior **display: block**, which means each paragraph takes up **the entire width of the line**.

That’s why "Paragraph 1" and "Paragraph 2" appear **one below the other**. Now see this example:

```html
Text 1 Text 2
```

Since there's no tag defining its behavior, the texts are displayed on the **same line**, side by side.

This is typical behavior for elements with **display: inline**, which **do not force line breaks**. A common inline tag is `<span>`, used to highlight specific parts of a text without affecting the content flow.

---

## 💡 **Practical Tip:**

To see how each element behaves on the page, open your browser, press `CTRL + SHIFT + I` to open Developer Tools, click the select icon (↖️), and pick the desired element. This will show the display type and other applied properties.

---

## 💡 Continue

- [Continues in Number_02](../StructOfHtml-Number_02/Structure.md)
