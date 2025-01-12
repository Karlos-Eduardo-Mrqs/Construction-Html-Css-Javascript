# Styling Inputs
In this chapter, we will cover the styling of inputs, called inputs with css.

# Example Page

![image](https://github.com/user-attachments/assets/fdf6458e-53e4-4133-bb3d-7caf03324232)

We will use this page here to improve it and make it more beautiful. We will then start to modify the behavior of the screen element being blocked, its width to 100% and the font color to black:

![image](https://github.com/user-attachments/assets/a554bc79-1a1f-4a6d-9212-b7eeec9da236)

Looking at the three elements, we see that the options are misaligned with the messages and name fields, we will use a padding of 10px and the box size for the border box:

![image](https://github.com/user-attachments/assets/a6cb2348-6fcf-4687-8a54-f444a747c7dd)

Next, let's increase the height of the text area to 200px:

![image](https://github.com/user-attachments/assets/4bbd78a9-232f-44c0-aa76-aa2a56d333e3)

# Rezize attribute
Inside css, we have an attribute called `` resize: resize type; `` where we can manipulate how the text area moves. For example, in this field we can move it horizontally and vertically, that is, up and down, left and right. Damaging the dimensions of other fields, this does not occur when we use resize.

## Types of Resizing
- both:
Default, moves the text box to all sides;
- horizontal:
Moves horizontally, that is, left and right;
- vertical:
Moves vertically, that is, up and down;
- none:
Blocks movement of the text box;

# Button 
Now focusing on the styling of the button, we will remove its border and apply a green background, as it is a submit button:

![image](https://github.com/user-attachments/assets/c0f24730-a4b3-4d80-ac68-f75222a9e9b4)

As your font is small, we will increase it to 16px, give it a padding of 10px (top and bottom) 60px (left and right side) finishing with a rounding of 30px:

![image](https://github.com/user-attachments/assets/b313a339-aad9-436a-8b40-68f02b7b9a13)

To close the button, let's center this button with text-align:center :

![image](https://github.com/user-attachments/assets/fc8b3cf3-2f0b-4c79-a59f-03af35e5ce40)

## Bonus
Furthermore, we can apply style to the placeholder (the shaded messages in the input field name and textarea), using a pseudo-code called input:placeholder, causing only the input placeholder to be styled.Concluding, with another command seen in the previous chapter, button:hover, changing the button when focused or pressed with the pointer (which will also be changed to pointer):

![image](https://github.com/user-attachments/assets/657a4b20-6b96-4f73-967d-bb2d1ccd7645)

# Final Css
```
html{
    background-color: #999;
    margin: 0;
}

.box{
    color: aliceblue;
}

.form-group{
    margin-bottom: 15px;
}

label,input,textarea,select{
    display: block;
    width: 100%;
    box-sizing:border-box;
    padding: 10px;
    color: black;
}

textarea{
    height: 200px;
    resize: none;
}

button{
    border: none;
    background-color: darkgreen;
    color: aliceblue;
    font-size: 16px;
    padding: 10px 60px;
    border-radius: 30px;
}

.form-action{
    text-align: center;
}

input::placeholder{
    color: red;
}

button:hover{
    background-color: rgb(1, 255, 1);
    cursor: pointer;
}
```
