# DOM Practice (Dynamic Clock)

> **"Turn your browser into a dynamic and stylish clock!"**
> Learn how to create an interactive clock that changes color depending on the time of day using HTML, CSS, and JavaScript.

Programmers, this is an interactive project, using only HTML, CSS, and JavaScript. To organize the explanation, part one covers the structure with HTML, part two the styling with CSS, and finally, JavaScript for interactivity and adjustments. Okay, let's go, baby!

## HTML Structure

### .fundo

The `.fundo` class serves as the main container for the dynamic clock project. It wraps the entire structure and ensures proper alignment and styling of child elements. With the help of CSS, it is configured to occupy the entire viewport and center the clock display, creating a visually pleasing layout.

### .img-icon

The `img` tag is classified as `.img-icon`. It will be added as an icon, depending on the time within the system, with the help of CSS.

### .clock, .full-date, .time

The `div` tag classified as `.clock` will include the full date "January 19, 2025" along with the time "HH:MM:SS," which will be assigned by JavaScript and styled with CSS.

- **[HTML Document](index.html)**

## Styling the Dynamic Clock: CSS Documentation

Below is a detailed explanation of the CSS used to style the **Dynamic Clock** project. Each section covers a specific style applied to elements for a responsive and visually appealing design.

---

1. **Resetting Default Margins and Padding**
   - Resets all default margins and padding for consistent styling across browsers.
   - Enables the use of `box-sizing: border-box` to include padding and borders in the element dimensions.

2. **Styling the Body**
   - Uses a clean, modern font for better readability.
   - Centers the content vertically and horizontally using Flexbox.
   - Sets a light gray background (#f2f2f2) to contrast with the content.
   - Makes the page height 100% of the viewport.

3. **Main Container: .fundo**
   - Centers the text and adds padding for spacing.
   - Sets a white background with rounded corners (border-radius: 15px).
   - Applies a soft shadow for a 3D effect.
   - Limits the width to 500px to ensure responsiveness.
   - Adds a smooth background color transition for dynamic changes.

4. **Clock Icon: .img-icone**
   - Creates a circular clock icon with border-radius: 50%. - Ensures the image fits within the container using `object-fit: cover`.
   - Adds a soft shadow to enhance the design.

5. **Clock Display: `.clock`**
   - Displays the clock with bold text and letter-spacing for clarity.
   - Positions it below the clock icon with a `20px` margin.

6. **Date Display: `.full-date`**
   - Uses a smaller font size to differentiate the date from the time.
   - Sets a lighter gray color (`#777`) for a subtle appearance.

7. **Time Display: `.hour`**
   - Increases the font size for greater prominence.
   - Uses bold text for better visibility.

8. **Dynamic Background Colors**
   - Dynamically changes the background of the `.fundo` class based on the time of day:
   - **Morning:** A soft, welcoming tone to start the day (`#ffecd2`).
   - **Afternoon:** Vibrant colors that bring energy (`#ffba08`).
   - **Night:** A deep purple that evokes rest (`#5617ae`).
   - **Dawn:** A dark blue that simulates a starry sky (`#2c3e50`).

9. **Footer Styling**
   - Adds the developer's name in a smaller font below the clock.
   - Positions it with a `20px` margin.

10. **Dynamic Font Colors**
    - Dynamically adjusts the text color for better visibility depending on the background:
    - **During the day:** Dark text (`#333`).
    - **During the night:** Light text (`#fff`).

11. **Responsive Design**

- Medium Screens (768px and below)
  - Reduces element sizes to fit medium screens.

- Small Screens (480px and below)
  - Further reduces element sizes for small devices, such as smartphones.

This CSS ensures that the **Dynamic Clock** is visually appealing and responsive on all devices!

- [CSS Document](style.css)

- [Go to Part 2](Javascript.md)
