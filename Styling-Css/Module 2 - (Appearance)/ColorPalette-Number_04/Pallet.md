# Color Manipulation
In this chapter, we will learn how to modify and manipulate colors using CSS.

# Background-Color
We use the **Background-Color command to change the background color of an object or even the page itself. Watch:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6cc3bdea-0d38-4d8b-8433-d171456b09cf)

We have this HTML page with two paragraphs. Each with a unique id; Let's suppose we want **Paragraph 1 to have a blue background, knowing that its identification is Par1. How will we allocate this fund? Like this:**
``#Par1 {background-color: blue;}``.Now look at the result:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c7b84127-4b72-4a69-9e98-e76f1ac2e9bf)

Now we want the **Second Paragraph to be red, knowing that its identification is Par2. We will format this, the same way we did previously with the First Paragraph, see:**``#Par2 {background-color: red;}``.Result:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eee43cb2-5d83-4a30-bebd-d48e012bb7e7)

## Other ways to allocate funds
We can use other ways to allocate the fund. Being them is Through the Page Body.

Manipulating the page background color, assigning it like this:`` html{ background-color: black; } ``. Making your entire page black:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/bdcf54d4-0237-4f15-9d64-8a53cab9b34e)

# Hexadecimal Code
Hexadecimal codes are a way of declaring colors. Hexadecimal codes are made up of six letters or numbers preceded by a #.

## Hexadecimal Composition 
**0 ... 9 after that A,B,C,D,E,F(being represented by the numbers 10 ... 15 respectively).** For example, if we put the hexadecimal code - #568 in the body of the page . It will change the black color, to a gray color:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/76204efe-4396-4490-85aa-4e051688abc6)

### rgb(Red, Green, Blue) 
By mixing the colors Red, Green and Blue, we can create a new color. Being manipulated this way rgb( 0 ... 255 , 0 ... 255 , 0 ... 255) . The first house represents the color red, the second green and the third blue. Example, when we put this code rgb(245,133,89) in Paragraph 1:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1e14327d-bdad-4a21-8a4d-27e97dbeb787)

#### RGB(Red,Green,Blue) Example
A new color was created, mixing the colors red, green and blue. According to the Intensity of each of them.
However, the rgb can be done in the same way as the hexadecimal code, observe the #116699 formatting. Where the first two numbers are the color red, the other two in the middle are the color green and the last two are the color blue. See the result when we apply this code in the second paragraph:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c8ec17b4-41f4-4c56-804e-5f2a8e16580e)

##### Visibility
With rgba(Red, Green, Blue and Alpha) . We can tell what visibility the color will have, taking this same code #116699 and at the end adding 00, resulting in #11669933. Result, The background disappears within the page:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1f983546-f2b3-42e2-a82e-99a65a228dcb)

Now, adding FF(representing the number 15)= #116699FF. The background color in paragraph two is more highlighted. You can also use rgba(), working in the same way as rgb. Differentiating the final number, being the transparency/sharpness of an object.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a430fd87-f1f5-4a4b-a1d4-6ae239e42ff8)

###### HSL
The hsl(Hue, Saturation, luminosity) . It is used to create colors, but is not used that much. This command is "assisted" by Matiz.Hue is the way most of us perceive and name a color – using the colors of the rainbow (red, orange, green, blue, etc).[See the color wheel](https://www.canva.com/colors/color-wheel/), to see how the colors change from one tone to another.
