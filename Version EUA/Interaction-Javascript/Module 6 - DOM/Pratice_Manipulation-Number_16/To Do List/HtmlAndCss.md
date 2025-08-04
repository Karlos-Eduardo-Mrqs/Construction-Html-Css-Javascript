# DOM Practice (List Project)

Programmers, this is an interactive project, using only HTML, CSS, and JavaScript. To organize the explanation, we'll start with the HTML structure (Part 1), then the CSS style (Part 2), and finally, JavaScript for interaction and adjustments. Let's go, baby!

---

## HTML Structure

### .popup-back and .popup

Starting with the project's skeleton, we have two dividers called `popup-back` and `popup`. Together with JavaScript, these elements create pop-ups, which display messages on the screen. `popup-back` is the background of the pop-up, while `popup` contains the message ("Do you want to delete all items?") and two buttons for interaction.

### .container and .message

All list content and input fields are located inside a divider called `container`. Below it, there's a clause called `.message`, which will be handled by JavaScript.

### .input, .list-box, and .list

The input fields, where the user interacts and enters list items, are in the `.input` section. It includes a text box, a label (`label="name"`), and two buttons: one to add items and another to clear the entire list. The `.list-box` section separates the content below the unordered list (`ul`), similar to the relationship between `popup-back` and `popup`.

- **[HTML Document](index.html)**

---

## CSS Structure

### Body

In the body of the page, we set margins and padding to 0, box-sizing to `border-box`, background color to `rgb(14, 142, 255`, font "Lucida", display `flex`, center alignment (horizontal and vertical), and a minimum height of `100vh`.

### .Container

In the `.container` class, we use `flex` display, column direction, center alignment, a maximum width of 800px, appropriate margins and padding, a white background, rounded edges, and a soft shadow.

### .Input

The `.input` section is set to relative position, `flex` display (in a column), a maximum width of 500px, rounded edges, and a soft shadow. The background is `rgb(234, 234, 234)` and there is a bottom margin for spacing.

### .input Components

- **label:** Absolute position, 18px font, gray color, capitalization, and smooth transition on hover.

- **input:** Full width, rounded edges, top margin, and bold font.

- **button:** Borders, fixed height, smooth transition, and color change on hover.

### .Message

The `.message` class defines the area where messages are displayed. It has thin edges, a white background, bold font, and a fixed size for width and height, with hidden overflow.

### #list-box

The `list-box` identity defines a section with a white background, rounded edges, a smooth shadow, and appropriate margins.

#### List-box Components

- **li:** List style removed, text in uppercase, spacing, and text truncation when necessary.

### .Popup

The `.popup` element is initially invisible. It is centered on the screen with a relative position, light background, rounded edges, shadow, and text alignment. It has stylized buttons with borders, fixed heights, and hover animation.

### .Popup-Back

Finally, the `.popup-back` element covers the entire screen with a darkened background to highlight the pop-up. Initially, it is hidden (`display: none`).

- **[CSS Document](style.css)**

---

## Final Result

![Final Result](https://github.com/user-attachments/assets/4f92e168-76bc-4548-9e8c-5c7dd63208f3)

---

- **[Part 2](Javascript.md)**
