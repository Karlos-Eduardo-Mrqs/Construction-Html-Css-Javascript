# Containment 
In this chapter we will learn how to deal with content containment.
 
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4192dd64-b140-49ca-9707-446cc1db1741)

We will use this example page, having two boxes classified as box(blue) and box2(white); having 20px padding and 30px margin and 150px in height and width;

# Box Size
In CSS, we have the ability to actually manipulate the size of the box with the ``box-sizing`` command;To demonstrate this, we will use the border-box in the box and in box2, it will be the content-box. Which can be of the following types:

- border-box:
The value is standard, depending on the height and width, not depending on the border and padding;

- content-box:
The value is variable, depending on all aspects of the previous type, including content and margin;

- initial, unset:
Standard value;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a85ababc-5744-4756-9b43-700d2ba1ac67)

Notice how the boxes are different, even with the same measurements of height, width, filling and margin.

## Diferences Content-Box And Border-Box

### Content-box(In white box)
Element size is calculated based on the content, without considering borders and padding. For example, if you set ``width: 100px and padding-left: 50px``, the total size of the element will be 150px.  

### Border-box(In Blue box)
Element size is calculated considering content, borders, and padding. For example, if you set width: 100px and padding-left: 50px, the final size of the element will be 100px,but the inside of the element will only have 50px of space.

# Limitation Control
Within CSS, we can limit the amount of content that will appear on the screen or even how it will appear.
In other words, it defines what happens to content that has passed the limit of a partition or any other object.
Thanks to the ``overflow`` command, it can be:
- self:
Automatic, generates a scroll bar in the right corner, moving up and down;

- hidden:
Hidden, it disappears with the content that goes beyond the object’s limits;

- scroll:
Scrolling, similar to auto, with the addition of another lower scroll bar, moving side to side;

- visible:
Visible, all content that exceeds the object's limitations will be clear to the user;

## Illustration
To do this example, we will use four dividers; each with different classes (box1,box2,box3,box4; respectively).Where each of these partitions will have a different overflow ("limitation"). With blue = auto, white = hidden, red = scroll and green = visible:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

Furthermore, we can say that the left side will have one limitation and the bottom side another, with the commands ``overflow-x⬅️ or ➡️ and overflow-y⬆️ or ⬇️``. types of overflow.

# Blank space 

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

Using these same boxes from the previous example. Let's assign a command called ``white-space``, translating to white space it is used to manipulate the way the content will be displayed in an empty space. Having the types:

- wrap, pre-wrap:
"Wrap" and "Pre-Wrap" leave the text all messy and tangled;
- normal:
Normal, Standard;
- nowrap:
"Don't Wrap", leaves all your text in a single space;

To exemplify this, each of the four boxes will have a different white space (Blue = wrap, White = pre-wrap, Red = nowrap and Green = normal):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/127f2b3f-dc54-491a-b6ae-aa41863478c1)