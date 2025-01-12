# Spacing 
Spacing is the act of opening or having an opening between two elements. Where we can define it externally or internally.
![artigo-como-usar-as-propriedades-margin-e-padding-css-24409](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c6299b7e-9462-46a5-9359-235a42e64581)

## Extern Spacing
As we can see from the image, we have two elements responsible for the external spacing, that is, on the outside; being them:

### [Border (I said this on link) ](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Styling-Css/Module%202%20-%20(Appearance)/Bordes-Number_06/Border.md)

### Margin
Translate for margem. It is responsible for the spacing around the element on the outside, let's see the
following example:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4b29163b-a04f-41e3-8d37-385a256162a9)

We have two div boxes glued together, both simply 500px high and wide with opposite colors. Now we want to take the boxes and separate them so they don't stick together. To do this, we will use the ``margin`` command, to declare the margin space that both will have; remembering that the two have different classifications, the white box being **section** and the blue box being **box2**;

#### Assignments with Margin
Notice when we apply the 20px margin to both boxes:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9cae2951-ef54-4916-a641-83c265a6cd17)

Now both are spaced 20px apart, preventing them from joining together. Just like the border, the margin can be declared on different sides, and can only be for the top, right, left or bottom. Being represented by the terms top, right, left and bottom, respectively:(``margin-left: 20px ; margin-top: 15px; ; margin-right: 20px ; margin-bottom:20px; ``).Furthermore, we can declare all sides using only the margin like this: ``margin: 20px 15px 15px 20px;``. By assigning this margin to the blue box and inspecting it(**The 20px went to the top and bottom of the box.**):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/88d22cbb-90bc-4818-ab07-a787267060ed)

We will notice that he declared each margin in a clockwise direction, being 20px from the top, 15px to the right, 15px to the bottom and ending with 20px to the left. This will change depending on how many numbers you enter, if you put it like this: ``margin: 20px 15px 20px ; ``.The 15px went to the left and right:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/597bf5df-57e8-4a57-a135-a3ff6f5209da)

Furthermore, when we put it this way: ``margin: 20px 15px;``. The top and bottom side are 20px and the left and right are 15px. In conclusion, putting only one size value for the margin, all sides are equal, that is, if you add the margin with 20px only: ``margin: 20px;``, they will be identical:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/16d5adf6-0e07-43f1-ae88-6d488d74e080)

## Intern Spacing

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d5eb547-ac9e-4b7d-9f16-6cac2eef17d8)

Looking at the image again, we have only one element for this internal function, that is, on the inside; he being the padding.

### Padding
Translating to portuguese preenchimento. It is responsible for the spacing of the element on the inside, let's see the following example. We have a white box with 500px width and height, with white color and a 20px margin. However, notice how the text is stuck to the top of the box:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7a5a694b-9913-41cf-8f9f-78b99f502030)

To remove this text, we use the ``padding`` command, to declare how much padding the content will have; remembering that lea is classified as section.

#### Assignments With Padding
Notice when we apply the padding to 50px. See how the text was further away from the side. Just like the margin, the padding can be declared on different sides, and can only be for the top, right, left or bottom:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/020323ec-4bed-4a0f-8b0c-61ab65f71e21)

**Being represented by the terms top, right, left and bottom, respectively:(``padding-left: 20px ; padding-top: 15px; ; padding-right: 20px ; padding-bottom:15px ; ``).** Moreover, we can declare all sides using only padding like this: ``padding: 30px 50px 50px 30px;``. By assigning this padding to the white box and inspecting it,We will notice that he declared each padding in a clockwise direction, with 30px from the top, 50px to the right, 50px to the bottom and ending with 30px to the left:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2ad46b15-399f-4243-b5a0-b790827478f2)

**This will change depending on how many numbers you enter, if you put it like this:``padding: 50px 20px 50px; ``.The 50px went to the top and bottom of the box. The 20px went to the left and right:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/460e63aa-e429-4d68-abf0-35fa0f5b4fea)

**Furthermore, when we put it this way: ``padding: 20px 15px;``. The top and bottom side are 20px and the left and right are 15px.**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/711316e6-f5d9-465f-bdbb-7032b724825d)

And in conclusion, putting only one size value for the margin, all sides are equal, that is, if you add the margin with 20px only:``margin: 20px;``, they will be identical.

### [width and heigth are cited in that past](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Styling-Css/Module%202%20-%20(Appearance)/Layouts-Number_03/Layout.md)
