## Lists

![image](https://github.com/user-attachments/assets/c8c2bcbd-1752-4599-b2ca-51f0bb6c7c32)

On this second page, we have a divider called .box, with an unordered list classified as .list, within this list we have six items classified as .item. Knowing this, we will apply a blue background to the .list and a background background colored by coral in class .item:

![image](https://github.com/user-attachments/assets/e4ed809f-cd4f-471b-a264-ee5d42eebd13)

### List-Style
With this attribute in CSS, we can modify the style of a list. Modifying your organization points,
known as markers, whether they are next to or outside the text and even add an image as a marker 
from the list.

#### List-Style-Position
List position style, here we can tell if the markers are outside (outside) or inside the list topics (inside).
1. inside: 

![image](https://github.com/user-attachments/assets/78626046-efb7-40cd-88f6-c3c8b6258914)

2. outside: 

![image](https://github.com/user-attachments/assets/6bd6de8b-ef2c-41a5-923f-14facf2e81db)

#### List-Style-Type
List Type Style, we have the possibility to change the list marker. Just like anchor cursors, there are numerous types of markers, [click here to view the other types of markers!](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)

#### List-Style-Image
List Image Style, we can add an image as our main bullet. For example, we want our marker to be this star:![img icons8](https://github.com/user-attachments/assets/eca30719-cd28-4b3e-93ee-5a333ab212c4).To do this, we will do it as follows : ``list-style-image:url(image link)``.Result:

![image](https://github.com/user-attachments/assets/927fe037-3a6e-48ed-9b63-694f285c8c13)

Furthermore, if we include ``list-style:inside url(image link) disc ``, we will have the same result.

## Final List for List
```
html{
    background-color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

.box{
    padding: 30px;
}

.list{
    color: aliceblue;
    background-color: cornflowerblue;
    list-style: outside url(https://img.icons8.com/?size=30&id=LlgB5a8aAr0G&format=png&color=000000);
}

.item{
    background-color:coral;
}
```
