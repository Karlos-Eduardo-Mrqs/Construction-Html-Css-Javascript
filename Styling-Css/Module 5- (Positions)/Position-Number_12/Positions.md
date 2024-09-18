# Specific Positions
In the previous practice, we learned how to work with the floating position, moving the objects only to the left, right and none of them, leaving the object overlapping. Now, we will learn how to move the objects to any corner or direction you want.

# Cartesian Plane?

![istockphoto-1363110242-612x612](https://github.com/user-attachments/assets/4b7711b3-54a0-469c-8a2b-ac40c46825d5)

The manipulation of positions within css, can we say that it is something similar to the Cartesian Plane, having the x position, being represented by the width and the y axis, representing the height, and the z position? We won't talk about this guy now, after finishing this practice, we'll just talk about him.But, you ask yourself, how is a page similar to a Cartesian plane? Look that:

![image](https://github.com/user-attachments/assets/504f6847-3ce8-49f7-90ba-19ddecd833b9)

Of course it's not 100% aligned, but it's understandable. As we see in this image, the height represents Y and the width represents X; when we pick up an object. Note, ignore the crooked lines; as we can see a height of 600px and width of 600px and look how this is representing the x and y axes:

![image](https://github.com/user-attachments/assets/a6877519-2511-489a-a59e-3f006e9cf107)

# Position

![image](https://github.com/user-attachments/assets/5a03088c-575e-4329-b81f-5b552e541708)

With our web page ready, let's see in practice how to manipulate the position of objects. Let's suppose we want the Box4 box to be at the top of the page and next to the Box1 box. We can do this with the ``position: command together with the top, left, rigth and bottom commands.`` Having the following types:

1. Static: Static position, is a default position, where if you do not define it, the position will be this;

2. Absolute: Absolute Position, is an alterable position, and you can change it with the commands `` top: Up, left: Left, Right: Right and Bottom: Down ``. To leave this box up and to the side, we will use this type of position, using the top commands to raise the object up and right to move it to the right. Let's see the result:

![image](https://github.com/user-attachments/assets/a9ddbf77-5a07-45da-a018-a183a78adcce)

### Variables POSITIONS

**- TOP:**
The lower the TOP number on Absolute, the higher it goes; The higher the TOP number on the Absolute, the further it drops;

**- BOTTOM:**
The lower the BOTTOM number on the Absolute, the further it drops; The higher the BOTTOM number on Absolute, the more it goes up;

**- RIGHT:**
The lower the RIGHT number on the Absolute, the more it goes to the right; The higher the RIGHT number on the Absolute, the more it goes to the left;

**- LEFT:**
The lower the LEFT number on the Absolute, the more it goes to the left; The higher the LEFT number on the Absolute, the more it goes to the right;

## Relative 
Let's look at our page image again:

![image](https://github.com/user-attachments/assets/5a03088c-575e-4329-b81f-5b552e541708)

We have Box3 with simply four elements within it, of these elements, we want box D to be at the top next to box C, when we apply the top and absolute position:

![image](https://github.com/user-attachments/assets/d3f0facb-ea70-498e-bda6-1f9a860b54b8)

Box D was above Box1, why? When we apply absolute position and manipulate its "vectors", it considers the entire page as position reference and disregards box C.

So that box D can be manipulated within box C, we will use Relative Position. Being a position that respects its entire surroundings and area, making all objects within it use the positional vectors reference box C; Note when we apply this position in box C and manipulate box D, with 0px on the Top and Right.
**Additionally, TOP,BOTTOM,RIGHT,LEFT POSITIONS; work in the same way as absolute position, having to take into account who you will use as a reference to control the content internally:**

![image](https://github.com/user-attachments/assets/28d092d1-2ba5-4821-9b39-1e145d729a6a)

## Fixed
Fixed Position, fixing or even trapping the object in one position, for example, on our page we want our Box2 box to be at the top of the screen and when we drag it down, it will remain in the place it left. Even dragging the screen down, the Box2 box remained in that exact position;**Used in navigation bars or similar.**

![image](https://github.com/user-attachments/assets/939f2f0e-f3fd-4b71-9769-89823d7f3325)

## Sticky
Glued position, unlike the fixed position, this position can appear on the screen in a glued way; appearing when the object disappears, being visible again for reading. Look this,It is similar to the fixed one, but it is stuck to the screen as it is not visible on the screen:

![image](https://github.com/user-attachments/assets/478e5c12-75be-4efe-826e-c6cffd069ca9)
