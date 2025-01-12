# Types of Fonts 
We are now in module 4, we will learn how to modify font types.

# font-family

![image](https://github.com/user-attachments/assets/f3e121ae-5a5f-40ae-bae2-e3b423d839dd)
We have this example page, if you don't change the font style, the default will be Times New Roman.You can see that this font has certain 'finishing points', where the letters have points. They are found in T, N, A and among others; In short, the tips are called serif, and within the fonts they have patterns, whether they have a serif or not.

![0_QBGG7EdJWTMq6goC](https://github.com/user-attachments/assets/0181afd3-a366-475e-8f60-40ad967cdfb3)

**Those that have ends, serif and those that do not have serif are san-serif, see the difference:**

![BP-Serif-SansSerif-Graphic1-862x518](https://github.com/user-attachments/assets/725a3018-c9e3-444c-82f9-079a9e05476c)

Now let's say that I want the box with the beige color, shown above, to have the verdana font, to do this is simple: ``font-family:Verdana, Geneva, Tahoma, sans-serif; `` or in Visual Studio (CTRL+Space+Write the font you want):

![image](https://github.com/user-attachments/assets/500c317c-eb99-4491-a90c-4acc406d924f)

## Importing Custom Fonts
Within Visual Studio Code, they have numerous sources. But, of course, there aren't all of them, and sometimes we want a personalized one; To get a custom font, we will look for a website called [Google Fonts](https://fonts.google.com/) and we can pull the custom font in two ways:
1. Tag Link: When choosing the desired font:
**Click on GetCode and then Get Embed Code. When choosing the link option, just copy the code and paste it above the css link tag**;
2. Import: 
**When choosing the desired font, click GetCode and then Get Embed Code. When choosing the @import option, just copy the code and paste it at the beginning of the .css file** ;

# font-weight

![image](https://github.com/user-attachments/assets/a5fa6b36-db57-44ff-b536-1b4de0ebd112)

With this example page, we can define how thick the font will be; Note, we have fonts that do not have thickness variations, so we will use a font called POPINS, which has all the variants.
These variants are from level 1 to 9, where the higher the level, the more highlighted the word or letter becomes and the lower the opposite occurs, becoming more shaded. In the image below, we can see this, being something similar with a gradient effect:

![image](https://github.com/user-attachments/assets/82df9c33-58a6-44dc-a204-5c46326ade53)

In addition, it also has four standard types such as **("lighter","normal","bold","bolder"), in the image it will be represented in the order mentioned previously:**

![image](https://github.com/user-attachments/assets/c783058d-b167-4434-8cd9-f6e04d1dbb01)

# font-style
- italic or oblique: 
_Leaves the text with a curve to the right;_
- normal: 
_Keeps the default text as it is;_
