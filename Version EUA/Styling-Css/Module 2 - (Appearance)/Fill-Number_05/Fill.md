# Fill 
Padding is used to create space around the content of an element, within any defined border. We will now learn how to do this, with colors and images with css.

## Fill With Colors

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7b2ffe71-d5c5-41d0-ad51-0ab1a8661c87)

Let's use this example page, we use the background to apply the gray color to the main background of the page, that is, to the entire html. When we create a div, classified as a box, with 150px height and width with the color blue. Note that in the image below, it only occupies one square:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3d24476c-6b08-462d-b34e-265b563627ce)

When we build another separate div, with a class called box-2, with 350px height and width with the color red. Note that in the image below, it is next to the blue square and only occupies that space:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a8553b0c-3f97-4b39-a4d8-f030314b9f81)

As in the old saying, "to each his own". They all have their own corner, note that when we create a section inside box-2 classified as box-21, with 100px height and width with the color green. Even overlapping box-2, it has its space 
within it:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d1cca5a1-66ae-41e9-ba9e-530e026d3f69)

This becomes clear when we insert texts into them. To make sure they have their respective space, we will create a fourth box, inside box-21, it will be another section, classified as box-21a, measuring 60px in height and width with the color yellow. Look at how the texts behave... Of course, if you increase the texts, you will be on top. But, they will be within their spaces:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f7c32a2-78b1-4ad7-8dfd-bf58b27db8a6)

### Invisible
Furthermore, we can make the boxes transparent with `` background:transparent; ``. Let's see what will happen when we attribute this in box-2:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/66bbab1e-461f-4070-b987-66162eb2969b)

Whether it is invisible or transparent as you prefer, box-2 will not be clear. When inspecting it, only its size and the area of ​​occupation will be clear, that is, its Display.This also happens, with the buttons when we insert their background as transparent. When we classify it with button, and add its background as transparent, it will look like this:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5562c82f-35f8-44b5-8cfe-30242526c903)

## Fill With Images

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2f90ef4e-1892-4c54-9acc-10fdfb03cb7a)

We can use images as background, we will use this page as an example. With a gray background along with a white box measuring 600px wide and 500px high.

### Background-Image
We will use the background-image command here to add the image, below is its syntax that will be added to the div called box:**``.box{ background-image: url(images/image.png); }``**.When we use this command, let's see what happens:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8ffb7a0d-c5b3-45a4-8003-b99a9a209dc8)

### Background-Image Your Types
We noticed that the image was repeated, to prevent this from happening we will use the **background-repeat command, to manipulate how the image will be repeated like this:``.box{ background-repeat: repeat format;}, which could be: ``** 
**At the end, we will use an example, so as not to repeat the no-repeat:**
- repeat: the image repeats itself;
- no-repeat: the image appears normally, not repeating itself;
- repeat-x: The image repeats only horizontally;
- repeat-y: The image repeats only vertically;
- space: The image repeats itself depending on the space it will occupy;
- initial: The image remains in the default;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd72af32-6693-48b0-8603-73bb34020610)

### Background-Size Your Types
However, the image was small, we can use **background-size, to control its size like this:``.box{ background-size: size; It could be}``. In the end, we will use the example cover to fill the entire box:**
- auto: Default image size;
- contain: Contained size, until the image is visible without being enlarged;
- cover: Side size that the image will stretch to its limit;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f939704d-239e-4b28-8e9f-91222b2d0db0)

### Background-Position Your Types
Now the image has been "cropped" and the mountain does not appear completely. To do this, we use the **background-position command, positioning the image like this:``.box{background-position: position; It could be} ``**
At the end, we will use the top center as an example, so that the image is centered:
- top top: Starting from the right at the top and ending at the left at the top;
- top center: Starting from the right at the top and ending at the left in the center;
- top bottom: Starting from the right at the top and ending on the left at the bottom corner of the image;
- Variations: These can vary from center bottom, bottom center and other variations thereof;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1d0b63f9-c373-4c51-8fdc-b326a0912ec4)

### Two images inside a div?
Yes, it is possible to insert two images into a div. **However, it is a very specific situation**, and it is recommended that you create an "affiliated div" for this. For example, I will create another box called box-21, which will contain another image.After that, we will add 80px in height and width with no repetition, being positioned at the top of the mountain.See the result now:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9ed49fa5-77fd-409c-9f2c-cc2522345dd6)
