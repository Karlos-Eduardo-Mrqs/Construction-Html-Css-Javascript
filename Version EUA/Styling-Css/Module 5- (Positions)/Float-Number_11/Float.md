# Note 👁️

- 📌 [Read Module 4 before continuing](../../Module%204%20-%20(Styling%20Fonts)/)

---

## 📦 Floating Position – `float`

We will now learn how to manipulate **floating positions** of elements in CSS.

## 📘 Initial Example

We have four boxes with the same `box` class. The `float` property can be used to control the lateral alignment of these elements:

```css
float: left;
```

| Value | Effect |
| ------- | --------------------------------- |
| `left` | Positions the element to the left |
| `right` | Positions the element to the right |
| `none` | Removes floating positioning |

![image](https://github.com/user-attachments/assets/3fa946c3-9b3c-43f9-8d5b-930480e37e97)

---

## 🎯 Visual Variations of `float`

### 🔹 1. All elements on the left

```css
.box {
float: left;
}
```

![image](https://github.com/user-attachments/assets/4fdd58ef-e03c-493e-8b64-65484447a3a1)

### 🔸 2. All elements on the right

```css
.box {
float: right;
}
```

![image](https://github.com/user-attachments/assets/3900bbb7-d558-4ba0-badd-670ff60304e6)

### 🔹 3. Two on the left and two on the right

```css
.box1, .box2 {
float: left;
}
.box3, .box4 {
float: right;
}
```

![image](https://github.com/user-attachments/assets/394d4232-48db-454b-9fae-7b71a68cbe4b)

### 🔸 4. Three floating on the left, one fixed

```css
.box1, .box2, .box3 {
float: left;
}
.box4 {
float: none;
}
```

![image](https://github.com/user-attachments/assets/bedcb8f6-78bc-4bea-bdd6-f3bb33eaf5e4)

You can create several variations by combining the `float` types with `width`, `margin`, `padding`, and `display` to organize your layout.

---

## ✅ Next Content

- ➡️ [Continued in Number 12 – Poses](../Position-Number_12/Positions.md)
