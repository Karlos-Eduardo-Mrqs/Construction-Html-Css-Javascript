# Note 👁️

- [Read issue 18 first](../../ScrollBar-Number_18/ScrollBar.md)

---

## Styling Forms

In this chapter, we'll cover styling forms, also known as CSS forms.
**Note:** This chapter has three parts with forms: Part One (StyleOne) until there are parts (will be revealed sooner).

---

## Example Page

![Form page with gradient background](https://github.com/user-attachments/assets/24328d81-c33b-472e-8fd0-aac0431d2e64)

> The background has a linear gradient, allowing you to blend two colors at the same time.
> Example: `background: linear-gradient(color1, color2);`

---

## HTML Structure

At the beginning of the body, we have a `.box` divider, below a `.form-box` containing the form and a `<h2>` heading.

At the end of the form, there are two buttons: one to send (`.send`) and one to clear (`.clear`).

---

## `.box` style

- 3px solid black border
- 700px fixed width
- Fixed position
- Top at 8% of the page
- Left at 25% of the page
- Rounded edges

![.box style with fixed border and position](https://github.com/user-attachments/assets/1babc3c8-b62c-4dfd-bb57-8dde25782a47)
![.box positioning and rounding](https://github.com/user-attachments/assets/af4c414f-2ca0-4cc0-b0de-45ea9879431d)

---

## `.form-box` style

- White background
- Flexible display (`display: flex`)
- Column flex direction (`flex-direction: column`)
- Auto-width
- Max-width: `fit-content` (size required for content)
- 10px rounded edges
- Initial padding

![.form-box style](https://github.com/user-attachments/assets/a876c633-73f5-44d6-9908-4f776d4152b7)

---

## Style of inputs and textarea inside `.form-box`

- Width 100%
- Height 48px
- Borders removed
- Font size 16px
- Bottom margin 16px
- Rounded edges 15px

![Inputs and textarea Styled](https://github.com/user-attachments/assets/6ba0b265-4277-4d81-b9d1-6df67cf92096)

---

## Title and Text Area

- Centered title (`text-align: center`)
- Title font increased to 24px
- Text area height 180px

![Title and Text Area](https://github.com/user-attachments/assets/cb253ea0-c59f-4a2d-b1ae-89389587a535)

---

## Button Style in `.form-box`

- 100% Width
- 1px solid black border
- 18px bold font
- Black font color
- Rounded edges 10px
- Bottom margin 5px

![Stylish buttons](https://github.com/user-attachments/assets/373516aa-b543-4cd4-8f98-ad7309b1f88d)

---

### Send button (`.send`)

- Highlighted with a green background
- Smooth transition effect in 0.5s (`transition: 0.5s;`)
- Effect on press (hover/focus)

![Send button with green effect](https://github.com/user-attachments/assets/c714fbf5-0fe8-4dc0-a864-39c339ca6da1)

---

### Clear button (`.clear`)

- Highlighted with a red background
- Smooth transition effect in 0.5s (`transition: 0.5s;`)
- Effect on press (hover/focus)

![Clear button with red effect](https://github.com/user-attachments/assets/bfbb0c63-8cbf-479f-bd6d-589ea4f4988d)

---

## Flexbox in a nutshell

- **`display: flex;`** — Sets the container to flexible
- **`justify-content: center;`** — Centers items horizontally
- **`flex-direction: column;`** — Arrange items vertically

---

Do you want me to generate the corresponding CSS code for this styling?

Or an HTML example to test?

---

## ✅ Next Chapters

- [2nd Style](../StyleTwo/Forms.md)

- [💡BONUS – Unmentioned Attributes](./)
