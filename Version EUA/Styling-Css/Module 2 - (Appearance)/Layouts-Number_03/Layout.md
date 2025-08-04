# 👁️ Note

* [Read Module 1 before continuing](../../Module%201%20-%20(First%20Passes)/)

---

## 🧱 Layouts

Welcome to **Module 2** of our CSS journey! In this module, you'll learn how to control the **visual appearance** of your page with styles that completely transform the layout.

---

## 📐 Display — Element Behavior

The `display` attribute is essential in CSS! It defines how an element will be rendered on the page.

![Example with Display](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/de06ca82-cefa-4ead-9b95-7686b06bf04c)

Let's compare three elements: a div, a p (paragraph), and a span:

![Inspection - Div](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0eb0d2bc-bcc5-4f56-a8d1-b58ae68c1b06)
![Inspection - Paragraph](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6b06106b-1ac1-4318-96bf-13f607caf31d)
![Inspection - Span](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d096f58-167b-4c3f-9f8b-71008111e860)

🔎 Notice:

* **DIV and Paragraph** use `display: block;`, taking up the entire line.
* **SPAN** uses `display: inline;`, taking up only the content space.

---

## 🧾 Display Types

| Type | Description |
| -------------- | ------------------------------------------------------------------------- |
| `block` | Takes up the entire line. Allows for custom height/width. |
| `inline` | Takes up only the necessary space. **Does** not accept height/width. |
| `inline-block` | Combines the best of both: takes up only what is necessary, **but** allows for adjustment. |

---

## 📏 Height and Width (`height` and `width`)

You can define the **size** of elements with `width` and `height`.

🟦 Example: Div with `width: 500px`

![Div 500px width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d9294f68-7e5f-481f-9218-da7e164d2cd1)

🔹 Now with `height: 300px`

![Div 500x300](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/680ca42b-ae9c-4738-825c-3d5afcbaee3d)

But what if we apply this to a `span`?

![Span with height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

❌ It doesn't work because `span` is `inline`. To do this, we use:

✅ `display: inline-block;`

![Display inline-block](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/04f49f65-6623-47ae-be56-051286a21353)

---

## 📐 Minimum and Maximum (`min-width`, `max-width`, `min-height`, `max-height`)

We control the size **limits** with these properties:

📦 Div with width `200px`, but `max-width: 300px;`

![max-width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9c4467fa-62d3-4d1f-9a88-e8c039f29b6f)

🔍 Even if we try `width: 310px`, it doesn't go beyond 300px:

![forced width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/663e827a-08a4-4e9e-9e1b-3670167f2207)

🧱 Already with `min-width: 300px`, even if it's `200px`, the minimum value will be 300px:

![min-width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5303cf89-0636-4d92-82fa-57028cd5f9a5)

🔻 It works with height too!

📏 `height: 350px;` with `max-height: 400px`:

![max-height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3af5e071-5cb8-40d9-8bbc-3515d4c8d218)

If we set `height: 500px;`, it will be **limited**:

![heights restricted](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5873953a-f843-475d-a9c0-45c66cb356ea)

🔒 With `min-height: 240px`, it will be **forced** to occupy at least this size:

![min-height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd15fb6a-d2dd-409d-a526-795c986ad350)

---

## 👉 Next Content

[Continued on Number_04](../ColorPalette-Number_04/Pallet.md)
