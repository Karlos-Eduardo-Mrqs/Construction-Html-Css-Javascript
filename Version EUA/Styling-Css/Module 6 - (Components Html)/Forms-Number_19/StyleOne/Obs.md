# Note 👁️

- [Read the 1st style first](../StyleOne/Forms.md)

---

## Bonus Note

These commands are part of **Flexbox**, a powerful CSS layout tool that makes it easy to arrange and align elements within a flexible container. Let's look at each of them in detail:

---

## `display: flex;`

This command transforms the element into a flexible container, allowing its children (the flex items) to be arranged according to Flexbox layout rules. It creates a flex context for the child elements, allowing them to be controlled by properties such as `flex-direction`, `justify-content`, and others.

---

## `justify-content: center;`

This property aligns the flex items horizontally within the flexible container, along the main axis. In Flexbox, the main axis is determined by the `flex-direction` property.

- If the direction is `row` (default), the main axis will be horizontal.
- If it is `column`, it will be vertical.

The `center` value centers the flex items in the middle of the main axis.

Other common `justify-content` values:

- **flex-start:** Aligns items to the start of the main axis.
- **flex-end:** Aligns items to the end of the main axis.
- **space-between:** Distributes items with equal space between them.
- **space-around:** Distributes items with equal space around each item.

---

## `flex-direction: column;`

This property sets the direction of the main axis when arranging items within the container.

- The `column` value arranges items vertically (top to bottom).
- If not specified, the default direction is `row` (horizontal, left to right).

Other possible values:

- **row:** Items arranged horizontally (default).
- **row-reverse:** Items arranged horizontally, but in the reverse direction (from right to left).
- **column-reverse:** Items arranged vertically from bottom to top.

---

Items will be arranged vertically and centered horizontally within the container.

These three properties are essential for working with Flexbox, allowing for flexible, centered, and adaptable organization for web layouts.

---

## ✅ Next Chapter

- [2nd style](../StyleTwo/Forms.md)
