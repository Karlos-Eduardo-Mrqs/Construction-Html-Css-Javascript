# Note 👁️

- [Read Module 2 before continuing](../../Module%20-%202(Manipulation%20With%20Texts)/CitacionOfAddress-Number_06/CitacionOfAddress.md)

---

## Links and Anchors

We've now come to the manipulation of links and anchors. With these concepts, we can navigate between multiple pages or within the same page.

### Concepts

A link connects one point to another, that is, it references another document. The same goes for anchors. A practical example we use a lot is Wikipedia:

![ExamploDeAncoras](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/06ad7f4a-0be0-42e9-9630-353355451419)

Note that the links appear in blue and underlined. Clicking takes you to another page—in this case, an explanation about a species of dinosaur.

## Attributes and Structure

The basic structure of a link is:

```html
<a href="Page2.html">Next page</a>
```

Between the ``<a></a>`` tags is the clickable text (underlined and blue by default).

**Main attributes:**

1. **href:** Where it indicates which file it will switch to;
2. **title:** Where it "describes" where you're going;
3. **target:** Translating to target, this link can open on another page or on the same page.

## Visual Studio Code Tip

In the href attribute, to avoid errors in the file path, use the shortcut **Ctrl + Space** to auto-complete names and folders.

![ExamploDeCTRL+Espaço](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/bc2abd64-6a4a-4326-829a-6dc5b34c3eff)

This attribute is not used often, but it can be essential depending on the situation. It appears as a tooltip when you hover your mouse 🖱️ over the link.

![ExampleTitle](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/41c7af92-a62f-4b81-aabe-eeaed2d705c1)

When browsing a page, we often don't want the visitor to leave our site. To avoid this, we use the target="_blank" attribute, which makes the link open in another tab or window.

```html
<a href="Page2.html" target="_blank">Next Page</a>
```

> Use this feature mainly when the link leads outside your main site. For example, "Next Page" is on your site, but "Google" isn't, got it?

![ExamploDeAncorasPT2](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/7dca0a40-b29c-4eea-b2a6-08e76f8160d8)

---

## Bonus

Did you know you can create anchors for your own page, like an interactive table of contents?

![ExampleLoremzo](https://github.com/Karlos-Eduardo-Mrqs/Trabalhos_Operacionais/assets/172524894/3d8b7ba3-d011-43cf-a068-ccae8ce41860)

## Id Attribute and Summary

We can do this thanks to the id attribute, which can be used in any tag to uniquely identify it.

For example, for a title:

```html
<h1 id="First-Title">Title 1</h1>
```

To call this tag within the page, we use:

```html
<a href="#First-Title">Title</a>
```

## Formatting a Table of Contents

```html
<h1>Lorenzo's Page</h1>
<p> Table of Contents
<ul>
<li> <a href="#paragraph-1">Lorem ipsum</a> </li>
<li> <a href="#paragraph-3">Sed quibusdam</a> </li>
<li> <a href="#paragraph-6">que quem degue</a></li>
</ul>
</p>
```

---

## 💡 Continuation

- [Continued in Number_08](../MediaVIsualsAndMusics_Number_08/Medias.md)
