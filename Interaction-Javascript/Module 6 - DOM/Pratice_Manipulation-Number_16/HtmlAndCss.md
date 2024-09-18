# Practice with DOM (list project)
Programmers, this is an interactive project, using only html, css and javascript. To organize the explanation, part one structure with HTML, part two styling with CSS and finally JavaScript for interaction and adjustments. Okay, let's rock, baby!

# HTML Structure 
![image](https://github.com/user-attachments/assets/f44f81bf-0429-4867-8124-a1a3fd53358d)

## .popup-back and .popup
Starting with the project skeleton. First we have two dividers called popup-back and popup, with them and javascript, we introduce how to have a popup. Where are the surprise messages on your screen. But popup-back is your background and popups are content with two buttons and a message ("Do you want to delete all items?")  

## .container, .message
All list content and entries are located in a divider called a container. below this message clause called .message; this divisor will be returned again with Javascript.

## .input , .list-box and .list 
The entries, that is, where the user interacts and writes the article, with a text box, label="name" and two buttons, one to add item and the other to clear the entire list; this division is responsible for the .input section. Now the list box has divided the bottom list from the unordered list; This case is similar to pop-up-back and pop-up.

# [HTML Document](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_ManipulationNumber_16/index.html)

# CSS Structure 

## Body
In the body, we will assign margin and padding equal to 0, box size is border box, background color is rgb(14, 142, 255) , font family is Lucida, display flex, justify content and align items are central and finally modify on the min-heigh 100vh body:

![image](https://github.com/user-attachments/assets/f31afc72-b597-4e12-aae2-1d548a40b726)

## .Container
Going to the .container class, display flex, column direction, alignment of items in the center, width 100%, maximum width at 800px, margin and padding at 20px, 10px with border radius, white background; completion box-shadow 0 4px(top) 8px(right,bottom) rgba(0, 0, 0, 0.1) :

![image](https://github.com/user-attachments/assets/590e2946-9bf1-46ff-bc93-eba90ebaca58)

## .Input
In the section classified as .input, the position is relative, displays flex, direction in column, 100% for width, maximum width 500px, 15px for padding, background rgb(234, 234, 234) , its border radius is 10px, the background is that rgb(234, 234, 234), box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), concluding with a margin in the lower 20px:
![image](https://github.com/user-attachments/assets/10297caa-d405-42ef-be7c-eccf1b7457eb)

### Components.input
- **label:** position is absolute , 55px in top and 15px in left, 18px font-size and our color is gray and your transform is uppercase, don't have pointer-events and transition with 0.4s ease:
![image](https://github.com/user-attachments/assets/680f3d67-0828-4f24-8a85-74b8c52bf1fa)

- **input:** 100% for width, 12px in padding, box-sizing is border-box, don't have outline, 10px in border-radius, 1px solid rgb(0, 140, 255) into border, 30px in top-margin, weight is bolder and 14px font-size:
![image](https://github.com/user-attachments/assets/c4ec1532-a846-4f83-9c87-d088764eda49)

- **button:** 1.5px solid black for border, 40px in height, 10px in border radius, 16px into font-size, 10px in top-margin, 100% in width, 0.3s ease into transition and our cursor is pointer :
![image](https://github.com/user-attachments/assets/5b8a1e42-61b3-41ef-a7f2-c068a289bc6b)

- **button:hover :** Background is rgb(0, 135, 180), color is color: #fff and transition 0.5s:
![image](https://github.com/user-attachments/assets/f57a07cd-265d-44ac-8fcd-1ddb93c050a9)

- **input:focus + label :** 40px in top, color is rgb(19, 124, 215), background is #fff, font-size are 10px finalize padding 0(top,bottom) 5px(left,right) :
![image](https://github.com/user-attachments/assets/a9779a69-41a9-4100-9129-9e115ec12ec0)

## .Message
Go to divider class .message, 10px into top-margin, 100% on width, 300px on max-width, 40px on height, 1px solid black into border, background is #fff, weight bolder for font, text-align center, 15px on font-size and overflow is hidden:
![image](https://github.com/user-attachments/assets/a02af83b-d1a8-4212-bce7-2ba67334c687)

## "#list-box"
Go to identity list-box, 92% on width, background #fff, border-radius are 10px, 20px on padding, 10px in top-margin, box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) :
![image](https://github.com/user-attachments/assets/056ed922-3206-45e6-92e4-97401f540c5c)

### Component list-box
- **li :** Don't have list-style, overflow is hidden, text-transform is uppercase, nowrap for white-space, text-overflow is ellipsis, 10px bottom-margin:
![image](https://github.com/user-attachments/assets/f8cfc029-4119-4f84-a651-111ecfe5949d)

## .Popup
Now the final element for style, hidden for display, position are relative, 40% for top and 50% for left, transform are translate(-50%,-%50), display is flex, text-align and justify content are center , font-family is Gill Sans, whitesmoke are background , 500px for width, 50px in height, 20px in padding, 10px in margin, box-shadow:1px 1px 2px 1px rgb(99, 99, 99), z-index is 2 , 5px are border-radius :
![image](https://github.com/user-attachments/assets/bb45a0c4-85d7-4d63-b545-f7550bc76c68)

### Components .Popup
- **button:** 15px in left-margin, weight are bolder, 15% for width, 40px for height, 1px solid black on border and 10px in border-radius:
 ![image](https://github.com/user-attachments/assets/2bd87d58-0130-4a77-8e26-44d2e85d0988)

- **button:hover :** background rgb(0, 106, 255), color is aliceblue, weight is bolder:
![image](https://github.com/user-attachments/assets/70f45248-cd82-46b9-8787-03d4d6277cc2)

## .Popup-Back
And for close css, display is none, position is absolute, background is black, 100% on width and height, z-index 1 and border-radius is 5px:
![image](https://github.com/user-attachments/assets/9e54d9a7-3728-453c-9287-e5ba7c83bdb2)

# [Document Css](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/style.css)

# Final Result
![image](https://github.com/user-attachments/assets/4f92e168-76bc-4548-9e8c-5c7dd63208f3)

# [Part#2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Javascript.md)