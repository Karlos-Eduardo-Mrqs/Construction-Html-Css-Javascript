# Note 👁️

📌 [Read Number\_05](../Fill-Number_05/Fill.md)

---

## ✏️ What are Borders?

Borders are outlines that decorate and delimit elements on the page. They can be solid, dotted, invisible, rounded, and more.

Let's learn how to apply amazing styles using `border`, `border-radius`, `opacity`, `visibility`, and more! 😎

## 📦 Base Example

Let's use this `div.box` with:

* Width: `500px`
* Height: `600px`
* Background color: blue

![blue box with border](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/690148e6-123c-437d-b4f4-056b9d5f8eed)

---

## 🧩 Border Attributes

### 🔸 `border-style`

Sets the **style** of the border:

* `solid`: Solid
* `dashed`: Dashed
* `dotted`: Dotted
* `double`: Double
* `groove`, `ridge`, `inset`, `outset`: 3D effects
* `none`, `hidden`, `unset`, `initial`, `inherit`: Invisible or reset

### 🔸 `border-color`

Sets the **border color**.

### 🔸 `border-width`

Sets the **border thickness** (e.g., `10px`).

### ✅ Example

```css
.box {
border: red solid 10px;
}
```

![red border](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b15ad609-04a0-4ab1-a0be-0905a2326fe4)

---

## ↕️ Borders by Direction

You can apply the border to **specific sides**:

* `border-top`
* `border-bottom`
* `border-left`
* `border-right`

Example:

```css
.box {
border-left: none;

}
```

---

## 🔵 Rounding Corners

### 🔸 `border-radius`

Controls the **roundness** of the corners. The higher the value, the rounder the corner.

```css
.box {
border-radius: 200px;
}
```

![rounded corner](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d67e71de-ef48-4952-937b-91d0cde81923)

### 🧠 `border-radius` combinations

* **1 value** – applies to all corners:

```css
border-radius: 15px;
```

* **2 values** – applies to opposite pairs:

```css
border-radius: 15px 50px;
```

(top left and bottom right) / (top right and bottom left)

* **3 values** – combines top/bottom:

```css
border-radius: 15px 50px 30px;
```

(top left) / (top right and bottom left) / (bottom right)

* **4 values** – controls each corner:

```css
border-radius: 15px 50px 30px 5px;
```

(top left, top right, bottom right, bottom left)

---

## 🎁 Bonus: Transparency and Visibility

### 🔸 `opacity`

Controls the **transparency** of an element:

```css
.box {
opacity: 0.5; /* half-transparent */
}
```

* `0`: invisible
* `1`: opaque (visible)
* Values between `0` and `1`: transparency levels
* Also accepts: `inherit`, `unset`, `initial`

### 🔸 `visibility`

Controls **actual visibility** (without affecting layout):

```css
.box {
visibility: hidden; /* disappears from the screen */
}
```

* `visible`: appears normally
* `hidden`: disappears, but maintains space
* `collapse`: used for table rows

🔁 Tip: use `display: none;` to **completely** remove the element from the screen.

---

## ✅ Next Content

➡️ [Continued in Module 3 – Spacing](../../Module%203%20-%20(Spacing)/InternAndExtern-Number_07/InternExtern.md)
