# Styling Forms
this chapter, we will cover the styling of forms, called forms with css . Note: This chapters have three chapters with forms. Part One(StyleOne) until there are parts(Will are revelead early).

# Example Page
![image](https://github.com/user-attachments/assets/24328d81-c33b-472e-8fd0-aac0431d2e64)

**With this page.The background have one linear-gradient, with it we can use two colors mixed at once. (background:linear-gradient:color1,color2).**

# Html Structure
Now, let's understand how HTML is organized. Having at the beginning of the body a divider called box, below we have a form-box for the form and a classification for the h2 title, at the end of the form we have two button classifications, one for submitting(.send) and another for clearing(.clear) the form. Understanding this, get to work!

## Styling .Box
Starting with the box divider, we will place a 3px border, with black and solid coloring, 700px width and fixed position:
![image](https://github.com/user-attachments/assets/1babc3c8-b62c-4dfd-bb57-8dde25782a47)

After assigning the fixed position, the top will be 8% in relation to the page and 25% to the left. Finishing with rounding the edge:
![image](https://github.com/user-attachments/assets/af4c414f-2ca0-4cc0-b0de-45ea9879431d)

## Styling .Form-Box
For the form divider box, we will use a white background, it will be flexed, its direction will be by column, its width will be automatic and its maximum-width will be fit-content (makes an element only the size necessary to contain its content) . Finishing with 10px rounding and initial padding: 
![image](https://github.com/user-attachments/assets/a876c633-73f5-44d6-9908-4f776d4152b7)

## Styling .Form-Box Input And TextArea
Going to the inside of the form box, its width will be 100% and its height will be 48px. The borders of the inputs and textarea will be removed during rendering. The font size will be 16px, the bottom margin will be 16px and finally, a rounding of 15px: 
![image](https://github.com/user-attachments/assets/6ba0b265-4277-4d81-b9d1-6df67cf92096)

Concluding with a center-aligned title increasing the font size to 24px. Furthermore, with the text area 180px high:
![image](https://github.com/user-attachments/assets/cb253ea0-c59f-4a2d-b1ae-89389587a535)

## Styling .Form-Box Button
Now we come to the buttons, we will use 100% width, 1px black and solid border, 18px font with bold and black color. Finishing with rounding of 10px and bottom margin of 5px:
![image](https://github.com/user-attachments/assets/373516aa-b543-4cd4-8f98-ad7309b1f88d)

For the send button, it will have a button press effect, it will highlight with green color, in addition with a transition effect with 0.5s(``transition:0.5s;``):

![image](https://github.com/user-attachments/assets/c714fbf5-0fe8-4dc0-a864-39c339ca6da1)

The same happens with the cleaning button, with the highlight color being red:
![image](https://github.com/user-attachments/assets/bfbb0c63-8cbf-479f-bd6d-589ea4f4988d)

# Flex
- **display: flex;** - Defines the flexible container;
- **justify-content: center;** - Centers items horizontally;
- **flex-direction: column;** - Arranges items vertically;