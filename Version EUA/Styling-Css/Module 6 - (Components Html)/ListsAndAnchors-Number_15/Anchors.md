# Anchor Styling 
In this module, we will learn how to style HTML components, starting with lists and anchors.

## Anchors 

![image](https://github.com/user-attachments/assets/85e7b2ec-3f97-4de4-b28a-513ed8cdbd84)

With this page, we’re going to get our hands dirty; On this page, we have a box divider and inside it an anchor classified as .link, with the following css:

```
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
    
}
```

## Class anchor .link
With that in mind, let's remove the anchor line and color it black. To do this, we use directly in the .link class:

![image](https://github.com/user-attachments/assets/548e96e2-6830-442f-b73a-269129067f71)

Next, we will resemble this link as a button, placing the background color red, increasing the font and padding. Also directly in the .link class:

![image](https://github.com/user-attachments/assets/52cb24af-2bfa-4bbe-91e1-9eb63d6f03c8)

Now to finish, let's add rounding to the button:

![image](https://github.com/user-attachments/assets/05c4f1ea-6aa3-4b98-bc8e-9ece9fbc7f88)

### Cursor class .link
Within Css, we can modify the type of cursor that the mouse has, for example the default cursor is ↖️, however, there are many types so the image below shows all the main cursors most used:

![CSS-Custom-Cursors1](https://github.com/user-attachments/assets/de4409c6-95e1-4890-8299-f8b28ca69e0f)

## CSS PseudoCode class .link
A CSS pseudo-element is a keyword added to a selector that allows you to style a specific part of the selected element. This will be explained shortly, at the moment we will apply a call :hover; where when focused, it will change the color of the font and background:

![image](https://github.com/user-attachments/assets/bddb66c9-a3ce-4285-a19d-8a59da3075f0)

## Final Css From Anchor (.link)
```
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
