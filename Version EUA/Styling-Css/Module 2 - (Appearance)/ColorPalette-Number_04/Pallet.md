# 🎨 Color Manipulation

📌 [Read Issue 03 before continuing](../Layouts-Number_03/Layout.md)

---

## 🌈 Introduction

In this chapter, we'll learn how to change colors in CSS and make your website much more vibrant, creative, and visually appealing.

---

## 🧱 `background-color`

The `background-color` property is used to **change the background color** of any HTML element — even the page body.

### 🔹 Basic Example

We have two paragraphs with different IDs:

📄 We want to make paragraph 1 have a blue background:

```css
#Par1 {
background-color: blue;
}
```

![Par1 Azul](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c7b84127-4b72-4a69-9e98-e76f1ac2e9bf)

📄 Now, paragraph 2 with a red background:

```css
#Par2 {
background-color: red;
}
```

![Red Par2](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eee43cb2-5d83-4a30-bebd-d48e012bb7e7)

---

## 🖥️ Other Ways to Set a Background

### 1. 💻 Page Body

```css
html {
background-color: black;
}
```

![Black Page](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/bdcf54d4-0237-4f15-9d64-8a53cab9b34e)

### 2. #️⃣ Hexadecimal Codes

* Example: `#568`
* Format: `#RRGGBB`
* Letters A through F represent numbers 10 through 15

```css
html {
background-color: #568;
}
```

![Hexadecimal](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/76204efe-4396-4490-85aa-4e051688abc6)

### 3. 🎨 RGB – Red, Green, Blue

Each value ranges from 0 to 255, allowing for mixing:

```css
#Par1 {
background-color: rgb(245,133,89);
}
```

![RGB Color](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1e14327d-bdad-4a21-8a4d-27e97dbeb787)

You can also use the hexadecimal equivalent:

```css
#Par2 {
background-color: #116699;
}
```

![RGB Hexadecimal](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c8ec17b4-41f4-4c56-804e-5f2a8e16580e)

### 4. ✨ Transparency – RGBA and Hex with Alpha

Use `rgba()` to control color visibility.

```css
#Par2 {
background-color: rgba(17, 102, 153, 0.2);
}
```

Or in hexadecimal with alpha:

* `#11669933` → more transparent
* `#116699FF` → opaque

![Transparent](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1f983546-f2b3-42e2-a82e-99a65a228dcb)
![Opaque](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a430fd87-f1f5-4a4b-a1d4-6ae239e42ff8)

### 5. 🎡 HSL – Hue, Saturation, Lightness

```css
p { 
background-color: hsl(210, 50%, 50%);
}
```

* **Hue**: color tone (0 to 360)
* **Saturation**: color saturation (0% to 100%)
* **Lightness**: lightness (0% to 100%)

[🎨 See the color wheel and understand HSL](https://www.xrite.com/pt-pt/blog/color-attributes-hue-chroma#:~:text%20that%20%C3%A9%20hue%3F,from%20one%20tone%20to%20another.)

---

## ✅ Next Content

[➡️ Continued in Number\_05 – Fill](../Fill-Number_05/Fill.md)
