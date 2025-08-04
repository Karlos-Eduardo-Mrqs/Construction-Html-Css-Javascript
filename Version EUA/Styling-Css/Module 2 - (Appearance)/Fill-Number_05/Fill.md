# Note 👁️

- 📌 [Read Number\_04](../ColorPalette-Number_04/Pallet.md)

---

## 🌟 What is Fill?

**Fill** (or `background`) is used to:

- Create visual spaces with **colors** 🎨;
- Insert **images** 🖼️ as a background;
- Make **transparent** areas 👻;
- Visually control each part of the page!

Let's explore all of this with visual examples! 👇

---

## 🎨 Color Fill

We have a page with a gray background (`background-color: gray`) and two boxes:

🔷 A blue `div.box` measuring `150px x 150px`:

![blue box](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3d24476c-6b08-462d-b34e-265b563627ce)

🔴 A red `div.box-2` measuring `350px x 350px` next to the previous one:

![box red](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a8553b0c-3f97-4b39-a4d8-f030314b9f81)

📦 Inside `box-2`, we have the green `box-21` with `100px x 100px`:

![green box](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d1cca5a1-66ae-41e9-ba9e-530e026d3f69)

🟡 Finally, a yellow `box-21a` with `60px x 60px`, also inside the previous one:

![yellow box](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f7c32a2-78b1-4ad7-8dfd-bf58b27db8a6)

They all occupy their own space, with the text clearly positioned.

---

## 👻 Transparent Background

Want to make the box invisible, but still present in the page structure?

Use:

```css
.box-2 {
background: transparent;
}
```

🔍 See the effect when inspecting the element:

![transparent box](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/66bbab1e-461f-4070-b987-66162eb2969b)

🖱️ It also works with buttons! For example:

```css
button {
background: transparent;
}
```

![transparent button](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5562c82f-35f8-44b5-8cfe-30242526c903)

---

## 🖼️ Image Padding

Page with white box (`600px x 500px`) on background gray:

![structure](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2f90ef4e-1892-4c54-9acc-10fdfb03cb7a)

### 📌 `background-image`

Adding image as background:

```css
.box {
background-image: url("images/image.png");
}
```

![default image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8ffb7a0d-c5b3-45a4-8003-b99a9a209dc8)

### 🔁 `background-repeat`

Controls the repetition of the image:

```css
background-repeat: no-repeat; /* other options below */
```

- `repeat`: repeats the image (default)
- `no-repeat`: shows only once
- `repeat-x`: repeats only horizontally
- `repeat-y`: repeats only vertically
- `space`: repeats according to available space

![no repeat](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd72af32-6693-48b0-8603-73bb34020610)

### 📏 `background-size`

Controls the image **size**:

```css
background-size: cover;
```

- `auto`: original size
- `contain`: adjusts without cropping
- `cover`: covers the entire box

![background cover](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f939704d-239e-4b28-8e9f-91222b2d0db0)

### 🎯 `background-position`

Positions the image inside the box:

```css
background-position: top center;
```

- `top top`
- `top center`
- `bottom center`
- `center center`, etc.

![image position](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1d0b63f9-c373-4c51-8fdc-b326a0912ec4)

### 🧩 Two images in a `div`?

Yes, but ideally you should use **child divs**:

Example with `box-21` as a child of `box`, displaying a second image without repeating, positioned on top of the previous image:

![two images](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9ed49fa5-77fd-409c-9f2c-cc2522345dd6)

---

## ✅ Next Content

➡️ [Continued at Number\_06 – Borders](../Borders-Number_06/Border.md)
