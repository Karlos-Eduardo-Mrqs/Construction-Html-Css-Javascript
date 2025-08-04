# Note 👁️

- 📝 [Read Issue 14 before continuing](../Normalizes-Number_14/Normalize.md)

---

## Styling Anchors and Lists

Learn how to style HTML components, starting with **lists** and **anchors**.

---

## Anchors

> Let's get started!

---

### Basic Structure

```css
html {
background-color: #999;
font-family: Arial, Helvetica, sans-serif;
margin: 0;
}

body {
color: black;
font-size: 16px;
}

.box {
padding: 20px;
}
```

### Step 1: Remove underline and set color to black

Apply to the .link class:

![image](https://github.com/user-attachments/assets/548e96e2-6830-442f-b73a-269129067f71)

### Step 2: Style link as a button

- Red background
- Larger font
- Larger padding

![image](https://github.com/user-attachments/assets/52cb24af-2bfa-4bbe-91e1-9eb63d6f03c8)

Now to finish, let's add a rounded border to the Button:

![image](https://github.com/user-attachments/assets/05c4f1ea-6aa3-4b98-bc8e-9ece9fbc7f88)

### Step 3: Rounding Borders

- ``border-radius`` to create rounded corners

---

## Custom Cursor

In CSS, you can change the mouse cursor. Examples of the main cursors:

![CSS-Custom-Cursors1](https://github.com/user-attachments/assets/de4409c6-95e1-4890-8299-f8b28ca69e0f)

### Pseudo-class :hover

Used to change the style when the mouse hovers over the element.

In the example, it changes the background and text colors.

![image](https://github.com/user-attachments/assets/bddb66c9-a3ce-4285-a19d-8a59da3075f0)

## Anchor Final Css(.link)

```css
html{ 
background-color:#999; 
font-family: Arial, Helvetica, sans-serif; 
margin: 0;
}

body{ 
color: black; 
font-size: 16px;
}

.box{ 
padding: 20px;
}

.link{ 
color: inherit; 
text-decoration: none; 
background-color: crimson; 
padding: 10px 30px; 
font-size: 30px; 
border-radius: 50px; 
cursor: pointer;
}

.link:hover{
background-color: black;
color: aliceblue;
}
```

---

## ✅ Next Chapter

- [Styling Lists!](../ListsAndAnchors-Number_15/Lists.md)
