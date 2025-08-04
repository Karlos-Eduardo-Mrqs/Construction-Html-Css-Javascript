# Note 👁️

* 📌 [Read Number 11 before continuing](../Float-Number_11/Float.md)

---

## 🎯 Specific Positions – `position`

Previously, we learned how to use `float` to align elements laterally. Now we'll see how to **position elements anywhere on the screen**.

---

## 🧭 Understanding the Cartesian Plane

The logic of `position` can be compared to a Cartesian plane:

![istockphoto-1363110242-612x612](https://github.com/user-attachments/assets/4b7711b3-54a0-469c-8a2b-ac40c46825d5)

* **X-axis**: represents the **width**
* **Y-axis**: represents the **height**

![image](https://github.com/user-attachments/assets/504f6847-3ce8-49f7-90ba-19ddecd833b9)

---

## 📦 Practical Example

Let's use `position` in conjunction with `top`, `left`, `right`, and `bottom` to move `Box4`:

```css
.box4 {
position: absolute;
top: 0px;
right: 0px;
}
```

![image](https://github.com/user-attachments/assets/a9ddbf77-5a07-45da-a018-a183a78adcce)

### 📐 Absolute Positioning Rules

| Direction | Smallest Value | Largest Value |
| -------- | ----------------- | ----------------- |
| `top` | Move Up | Move Down |
| `bottom` | Move Down | Move Up |
| `right` | Move Right | Move Left |
| `left` | Move Left | Go Right |

---

## 🔄 `Position` Types

### 🔸 `static`

* Browser default (no manual movement)

### 🔸 `absolute`

* Positions based on the **parent element or the `body`**
* **Leaves the layout flow**

### 🔸 `relative`

* Maintains the original position, but can be moved
* Serves as a **reference for `absolute` elements within it**

#### ✅ Example: Position `.boxD` inside `.boxC`

If `.boxD` is `absolute`, it leaves the flow. If `.boxC` is `relative`, it serves as the base:

```css
.boxC {
position: relative;
}
.boxD {
position: absolute;
top: 0;
right: 0;
}
```

![image](https://github.com/user-attachments/assets/28d092d1-2ba5-4821-9b39-1e145d729a6a)

---

### 🔸 `fixed`

* Fixes the element to the screen, even when scrolling
* Often used in menus and headers

```css
.box2 {
position: fixed;
top: 0;
left: 0;
}
```

![image](https://github.com/user-attachments/assets/939f2f0e-f3fd-4b71-9769-89823d7f3325)

---

### 🔸 `sticky`

* Mix of `relative` and `fixed`
* The element **stays still** when it reaches a certain position

```css
.box {
position: sticky;
top: 0;
}
```

![image](https://github.com/user-attachments/assets/478e5c12-75be-4efe-826e-c6cffd069ca9)

---

## ✅ Next Content

➡️ [Continues at Number\_13](../Splindes_X,Y,Z-Number_13/Splindes.md)
