# Note 👁️

- [Read Anchors.md before continuing](../ListsAndAnchors-Number_15/Anchors.md)

---

## Lists

![Example list](https://github.com/user-attachments/assets/c8c2bcbd-1752-4599-b2ca-51f0bb6c7c32)

On this page, we have a divider called `.box`, with an **unordered** list labeled `.list`.

Inside it, there are six items labeled `.item`.

We applied a blue background to the `.list` and a coral background to the `.item` items:

![Stylished list](https://github.com/user-attachments/assets/e4ed809f-cd4f-471b-a264-ee5d42eebd13)

---

## `list-style` Property

With this CSS property, we can modify the style of the list bullets, such as:

- Bullet type;
- Position (inside or outside the text);
- Replace the bullet with a custom image.

---

### `list-style-position`

Defines whether the bullets are **inside** or **outside** the list text.

1. `inside`
![Inside marker](https://github.com/user-attachments/assets/78626046-efb7-40cd-88f6-c3c8b6258914)

2. `outside`
![Outside marker](https://github.com/user-attachments/assets/6bd6de8b-ef2c-41a5-923f-14facf2e81db)

---

### `list-style-type`

Sets the type of list marker.

There are numerous types, such as circles, squares, numbers, letters, etc.

Check out all the available types in the official MDN documentation:

[CSS Marker Types](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

---

### `list-style-image`

Allows you to use an image as a list marker.

For example, to use this star as a marker:

![Star Icon](https://github.com/user-attachments/assets/eca30719-cd28-4b3e-93ee-5a333ab212c4)

The CSS for this would be:

```css
list-style-image: url(image-link);
```

![image](https://github.com/user-attachments/assets/927fe037-3a6e-48ed-9b63-694f285c8c13)

## Css End Of List

```css
html{ 
background-color: gray; 
font-family: Arial, Helvetica, sans-serif; 
font-size: 16px;
}

.box{ 
padding: 30px;
}

.list{ 
color: aliceblue; 
background-color: cornflowerblue; 
list-style: outside url(https://img.icons8.com/?size=30&id=LlgB5a8aAr0G&format=png&color=000000);
}

.item{ 
background-color:coral;
}
```

You can also combine it with list-style-position and default type:

```css
list-style: inside url(image-link) disc;
```

---

## ✅ Next Chapter

- [Continue at Number 16](../Inputs-Number_16/Inputs.md)
