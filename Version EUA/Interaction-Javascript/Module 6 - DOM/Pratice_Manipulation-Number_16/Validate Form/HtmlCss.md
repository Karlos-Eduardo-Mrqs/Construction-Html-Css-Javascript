# Guide to Understanding: HTML and CSS of the Dynamic Form

This document explains the structure and styling of a dynamic form that includes login and registration screens, along with a popup for displaying messages. The goal is to provide a clear understanding of how the HTML and CSS are organized and how they interact.

---

## HTML Structure

### General Structure

The HTML defines the basic structure of the dynamic form, featuring two main screens: **Login** and **Registration**. It also includes a **popup** to display important messages to the user.

```html
<div class="popup">
    <p class="pair"></p>
</div>
<div class="box">
    <!-- Registration Screen -->
    <div id="cadastro" class="form-content">
        <form method="post" name="cadastro">
            ...
        </form>
    </div>

    <!-- Login Screen -->
    <div id="login" class="form-content active">
        <form action="Send.php" method="post" name="login">
            ...
        </form>
    </div>
</div>
```

## Key Elements

- .popup : A fixed container in the top-right corner of the screen used to display important messages.

- .box : The main container that wraps both the login and registration screens.

- form-content : Each screen (login and registration) is encapsulated in a div with the class .form-content.

- The .active class determines which form is visible.

- Inputs and Labels : Each input field has an associated label that floats above the field when the user interacts with it.

## CSS Styling

### Global Styles

```css
CSS defines global styles to ensure consistency and responsiveness.
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
}
```

- Reset Margins and Padding : Removes default spacing from elements to avoid inconsistencies.
- Centering : The body centers the content on the screen.
- Background : Sets a soft gray background (#f0f0f0) for contrast.

### Main Container Styling

The .box is the main container that wraps the login and registration screens.

```css
.box {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    width: 100%;
    position: relative;
}
```

- White Background : Provides contrast against the gray background.
- Shadow and Rounded Corners : Adds a modern and professional touch.
- Responsiveness : The max-width ensures the form adapts well to smaller screens.

### Switching Between Screens

The forms are toggled using the .form-content and .active classes.

```css
.form-content {
    display: none; /* Initially hides all forms */
    width: 100%;
    text-align: center;
}

.form-content.active {
    display: block; /* Displays the active form */
}
```

- Initial Hiding : All forms start hidden (display: none).
- Active Display : The .active class sets display: block to show the selected form.

### Input and Label Styling

Input fields and their labels have a modern and interactive design.

```css
    .input-container {
        position: relative;
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 15px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
    }

    input:focus {
        border-color: #66CDAA;
    }

    label {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        font-size: 16px;
        color: #999;
        pointer-events: none;
        transition: all 0.3s ease;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        top: -10px;
        left: 10px;
        font-size: 12px;
        color: #66CDAA;
    }
```

- Relative Positioning : The label is positioned inside the input using position: absolute.
- Floating Labels : When the user focuses or fills a field, the label floats above the input.
- Smooth Transitions : Changes in position and color of the labels are animated to enhance the user experience.

### Button Styling

Buttons have a clean and modern design, with hover animations.

```css
    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #66CDAA;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #06dd95;
    }
```

- Responsive Buttons : They occupy the full available width (width: 100%).
- Interaction : The background color changes smoothly on hover.

### Popup Styling

The popup is used to display important messages, such as errors or confirmations.

```css
    .popup {
        display: none;
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: snow;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: all 0.3s ease-in-out;
    }

    .popup.show {
        display: block;
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
```

- Fixed Positioning : The popup stays visible in the top-right corner.
- Entrance Animation : Uses opacity, visibility, and transform to create a smooth transition

---

## Documentation

- **[Html](index.html)**
- **[Css](style.css)**
- **[Part 2](Javascript.md)**
