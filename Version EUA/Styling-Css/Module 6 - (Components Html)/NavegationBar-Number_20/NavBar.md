# Note 👁️

- [Read number 19 first](../Forms-Number_19/2ndStyle/Forms.md)

---

## 📌 Navigation Bar

**The navigation bar** is one of the most important elements of a website or system.
It helps users access different sections or pages quickly and efficiently.

---

## ✅ Why use a Navigation Bar?

A well-designed navigation bar offers:

- **Ease of navigation:** Direct access to the main sections.
- **User-friendly design:** Improves the user experience.
- **Improved aesthetics:** Makes the interface visually appealing.

---

## 📊 Types of Navigation Bars

### 1. Sidebars

- Positioned vertically on the left or right side. - Ideal for systems or dashboards with multiple options.

![Sidebars](https://github.com/user-attachments/assets/b7a930a6-14d4-4a84-8f7f-41c22291b385)

### 2. Horizontal Bars

- These appear at the top of the page.
- Used on sites with simpler navigation.

![Horizontal Bar](https://github.com/user-attachments/assets/ba76c0f0-9083-4700-bde3-f36fbfb4499f)

---

## 💻 Example Web Page

Simple page with fixed sidebar and content sections:

### 🔹 Navigation Bar (Sidebar)

- Uses the `<nav>` tag
- Contains a list (`<ul>` → `<li>` → `<a>`)
- Links are placeholders (with `#`)

### 🔸 Main Content (`<main>`)

- **Title and Introduction:** `<h1>` with paragraph
- **About the Site:** Section with `<h2>`
- **Example Image:** Displayed responsively
- **Project Goal:** Final Layout Explanation

---

## 🎨 CSS for Fixed Navigation Bar

### ``<body>`` Style

- Arial Font
- Light Gray Background `#f4f4f4`
- Top Margin `60px`

![Body](https://github.com/user-attachments/assets/15f8ffb8-d157-47ba-a22b-9aa8a9c2dfd4)

---

### ``<nav>`` Style

- `position: fixed`
- `top: 0`, `left: 0`
- `width: 100%`
- Background Color `#895647`
- `z-index: 1000`

![Bar Fixed](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

---

### Nav List + Links

- `list-style: none`
- `display: flex`, `justify-content: center`
- `margin: 0 10px` on items
- Links:
- White color, no underline
- Bold, padding, `border-radius: 5px`
- `:hover` effect with `background: burlywood`

![Nav Links](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

---

### Nav Style `<main>`

- `text-align: center`
- `padding: 20px`
- `margin-top: 80px`

![Main](https://github.com/user-attachments/assets/a9fa599a-3fd0-4ebe-b0fc-6c5d61951c4e)

---

## 🧭 CSS for Fixed Sidebar

This layout creates a **fixed and responsive sidebar**, with content that adapts.

---

## 🔄 Reset CSS

Resets margins, padding, and sets `box-sizing: border-box`.

![Reset](https://github.com/user-attachments/assets/069bc1a0-cc05-49a0-b3aa-f0e9b0af0d29)

### ``<body>``Style

- Arial Font
- #f4f4f4 Background

![Body Style](https://github.com/user-attachments/assets/27a299ee-e00f-409a-a9aa-7b65290119c2)

---

## Sidebar

- Position: fixed, left: 0, top: 0
- Total Height: 100vh
- Initial Width: 100px
- Smooth Transition to Animation

![Sidebar](https://github.com/user-attachments/assets/beb0fedb-7c39-422a-9f8d-c8e4c09c444b)

---

## Sidebar Hover

- Expands to 250px when mouse hovers

![Sidebar Hover](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

---

## Sidebar Menu

- `list-style: none`
- Items fill the entire width

![Menu Sidebar](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

---

## Menu Links

- `display: block`, `padding: 10px`
- White color, no underline
- `border-radius: 5px`
- Hover transition

![Links Menu](https://github.com/user-attachments/assets/95390e81-2b01-42a8-8f51-fd535fb630c5)

---

## Hover on Links

- Background color changes to `burlywood`

![Hover Links](https://github.com/user-attachments/assets/be47d595-b753-4592-8474-25af6bb47d31)

---

## Main Content (`<main>`)

- `margin-left: 100px`
- Smooth transition to match sidebar expansion

![Main Margin](https://github.com/user-attachments/assets/923f96b8-8ac5-47d2-9e8c-e72ea519ad1d)

---

## Headings

- Dark, readable color
![Titles](https://github.com/user-attachments/assets/9bed4fc3-fbad-4896-a076-80f45ca039d2)

---

## Paragraphs

- Lighter color
- `line-height: 1.6`
- `margin-bottom: 20px`
![Paragraphs](https://github.com/user-attachments/assets/ef5160d3-38b5-45b2-b067-113556a24576)

---

## Images

- `width: 100%`, `max-width: 600px`
- `border-radius: 10px`, `margin-top: 20px`
![Images](https://github.com/user-attachments/assets/b52b7a49-136a-4136-b635-b0da7952a6ff)

---
