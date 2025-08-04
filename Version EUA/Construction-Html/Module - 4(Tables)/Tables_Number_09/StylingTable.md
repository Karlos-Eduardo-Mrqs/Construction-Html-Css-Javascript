# Note 👁️

- [Read part one first](./ConstructTable.md)

---

## Improving the Students Table

Now that we've built the students table, let's apply the design from the reference image, making it more visually pleasing:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f046efe-e8cc-42b9-9032-940e9a0fccc6)

### 🧩 Customizing the ``<caption>``

We start by formatting the table title using the style attribute on the ``<caption>`` tag. Attributes used:

```html
<caption style="font-family: Lucida Sans;"><b>Students</b></caption>
```

- ``font-family``: defines the font used (e.g., Lucida Sans);
- The ``<b>`` tag: makes the title **bold**.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f67d1852-6130-41d8-be63-c52d7f79e61c)

### 🧱 Styling the ``<table>``

In the ``<table>`` tag, we add the following attributes:

```html
<table border="1" cellpadding="10" cellspacing="0" width="500">
```

- ``border``: defines the table border;
- ``cellpadding``: internal cell space;
- ``cellspacing``: spacing between cells;
- ``width``: table width.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/03ac2e50-d099-4341-9ff2-2a66a748da77)

### 🎨 Formatting the ``<thead>``

Let's also style the header using the ``style`` attribute:

```html
<thead style="background-color: #333; color: white; font-size: 16px;">
```

- ``background-color``: sets the background color;
- ``color``: sets the text color;
- ``font-size``: adjusts the font size.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/569811a2-9fcb-4cfc-9271-2a48b49426be)

## 🏁 Bonus: Footer with ``<tfoot>``

We can add a footer to the table with the ``<tfoot>`` tag:

```html
<tfoot>
<tr>
<td colspan="3"> Total:</td>
<td> 6</td>
</tr>
</tfoot>
```

- The ``colspan="3"`` attribute makes the cell span three columns, aligning correctly with the data.

> The ``colspan`` attribute causes the content to span multiple columns (in this case, 4).

### 🆚 Comparison: with and without colspan

> **without ``colspan``**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2d3f2699-18d5-4228-9812-b4684e113dd0)

> **with ``colspan``**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/93c426ca-1247-440d-8c2f-228e4dd3c7ca)

## 💻 Code Html

- [Final Code](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Constru%C3%A7%C3%A3o-Html/M%C3%B3dulo%20-%204(Tables)/)

---

## Challenge

One table is missing: the Teachers' table!

### 🧠 Your mission

Using the knowledge from this module, replicate the Teachers' table with the same structure and formatting used in the Students' table.

**📷 Teachers' Table Template:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/82aabe57-181d-4af8-9da4-0b88f76d3b07)

> ❓Questions? Open an issue in the repository and I'll help you!

## 🔎 Extras

- [HTML Table Guide - HomeHost](https://www.homehost.com.br/blog/criar-sites/tabela-html/)

> 📌 Note: We fixed a detail — Carlos's student data had been left out in the first version. 😅

---

## 💡 Continued

- [Continued in Module 5](../../Module%20-%205(Forms)/StructureOfForm_Number_10/Forms.md)
