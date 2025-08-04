# Note 👁️

📌 [Read Module 2 before continuing](../../Module%202%20-%20(Appearance)/Borders-Number_06/Border.md)

---

## 🧩 What is Spacing?

Spacing is the **distance** between elements or between the content and the edges of an element.

It can be of **two types**:

* 🔲 **Outer**: controlled by `margin`
* 🟦 **Inner**: controlled by `padding`

![spacing scheme](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c6299b7e-9462-46a5-9359-235a42e64581)

---

## ⛔ Outer Spacing – `margin`

The margin defines the space **outside** the element's border. Useful for separating elements from each other.

### ✅ Practical Example

We have two `divs` side by side, glued together:

![glued boxes](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4b29163b-a04f-41e3-8d37-385a256162a9)

When applying `margin: 20px`:

```css
.section, .box2 {
margin: 20px;
}
```

![spaced boxes](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9cae2951-ef54-4916-a641-83c265a6cd17)

### 🧠 Ways to write `margin`

* **4 values (clockwise):**

```css
margin: 20px 15px 15px 20px; /* Top, Right, Bottom, Left */
```

![margin 4 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/88d22cbb-90bc-4818-ab07-a787267060ed)

* **3 values:**

```css
margin: 20px 15px 20px; /* Top, Sides, Bottom */
```

![margin 3 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/597bf5df-57e8-4a57-a135-a3ff6f5209da)

* **2 values:**

```css
margin: 20px 15px; /* Vertical (top/bottom), Horizontal (left/right) */
```

![margin 2 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/16d5adf6-0e07-43f1-ae88-6d488d74e080)

* **1 value:**

```css
margin: 20px; /* all sides */
```

---

## 🔳 Internal Spacing – `padding`

`padding` defines the space **inside** the element's border. That is, between the border and the content (text, image, etc.).

### ✅ Example

Notice the text stuck to the top of the box:

![no padding](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7a5a694b-9913-41cf-8f9f-78b99f502030)

When applying `padding: 50px`:

```css
.section {
padding: 50px;
}
```

![with padding](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/020323ec-4bed-4a0f-8b0c-61ab65f71e21)

### 🧠 Ways to write `padding`

* **4 values (clockwise):**

```css
padding: 30px 50px 50px 30px;
```

![padding 4 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2ad46b15-399f-4243-b5a0-b790827478f2)

* **3 values:**

```css
padding: 50px 20px 50px; 
```

![padding 3 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/460e63aa-e429-4d68-abf0-35fa0f5b4fea)

* **2 values:**

```css
padding: 20px 15px; ``` 

![padding 2 values](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/711316e6-f5d9-465f-bdbb-7032b724825d)

* **1 value:** 

```css 
padding: 20px; 
```

---

## 🔗 Extra: `width` and `height`

📦 To set the **width** and **height** of elements:

[Read more about Layout (width and height)](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%202%20-%20%28Apar%C3%AAncia%29/Layouts-N%C3%BAmero_03/Layout.md)

---

## ✅ Next Content

➡️ [Continues on Number\_08](../Containment-Number_08/Containment.md)
