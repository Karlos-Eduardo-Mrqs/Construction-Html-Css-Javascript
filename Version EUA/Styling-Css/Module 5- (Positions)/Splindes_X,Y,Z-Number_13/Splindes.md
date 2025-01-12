# Viewing Position
We have reached the final part of CSS positioning, View Position. Where this part is a direct continuation of [Positions-Number_12](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Styling-Css/Module%205-%20(Positions)/Position-Number_12/Positions.md).

# Cartesian Plane
Summarizing what was said in the previous practice, In the Cartesian plane we have two axes X and Y. Within the Styling, that is, in the css they are represented as X being width and Y being height. However, we have a third, which is the z axis, demonstrating the user's view in relation to the monitor and the size of the screen. As in this image, we can say that Z is the user's outside view, Y is the height and X is the width:

![image](https://github.com/user-attachments/assets/83e7933c-fe6a-4d63-8f19-b2a481d992be)

# Z-Index

![image](https://github.com/user-attachments/assets/d09cd865-4941-4df2-9a02-fc3ed7bf7a91)

On this page, we can see that we have three dividing boxes, classified as boxes. Let's make an adjustment where the Box3 box overlaps the two Box boxes. Did you notice how the Box2 box is further forward than the Box1 and Box3 boxes?

![image](https://github.com/user-attachments/assets/5d969c5f-d953-4fdb-b28f-a111a20c42fd)

This happens because of a command called ``z-index``, where it "defines a hierarchy of importance", the higher the z-index number, the further forward this object will be. Now, what will happen if we apply z-index: 3 to Box1 and z-index: 4 to Box3?

![image](https://github.com/user-attachments/assets/b399590f-8579-48da-8508-dce9932b3a33)

As you can see, Box3 has the highest number of z-axis among the others; making it stand out from the other Box dividers. Note, when the z-index of all elements is the same, they will all have the same importance, that is, in order of creation Top-Down(From top to bottom).
