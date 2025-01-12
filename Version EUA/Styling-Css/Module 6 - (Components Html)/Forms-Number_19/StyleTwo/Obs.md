# Observation 
## Length Units
Absolute length units are not influenced by other factors when calculating their length. When using them, the final computed size corresponds exactly to the declared value. Examples of absolute values ​​are: 

- cm centimeters;
- mm millimeters;
- in inches;
- px pixels;
- pt points;
- pc pica . 

Relative length units have their final length affected by other factors. They are used when we need to scale the dimensions of the element. Examples of relative values ​​are:

- em: 1em is once the font-size of the element;
- rem: 1rem is once the font-size of the element above in the element hierarchy;
- vw: 1vw is 1% of the browser window width;
- vh: 1vh is 1% of the browser window height;
- vmin: 1vmin is 1% of the smallest size of the browser window;
- vmax: 1vmax is 1% of the largest dimension of the browser window;
- %: calculates the size relative to the parent element;

## Transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

- none: Defines that there should be no transformation;
### Matriz 
- matrix: (n,n,n,n,n,n)	Defines a 2D transformation, using a matrix of six values;	
![image](https://github.com/user-attachments/assets/8ef99df8-2c00-4793-b63f-baab59b01204)

### Translate
- translate(x,y)	Defines a 2D translation	
![image](https://github.com/user-attachments/assets/7100cbac-e8fd-4bae-9e9c-1ae16259ada0)

### Scale
- scale(x,y)	Defines a 2D scale transformation	
![image](https://github.com/user-attachments/assets/6b9264f9-9af2-481f-85ee-bdf855a1f1a3)

### Rotate
- rotate(angle)	Defines a 2D rotation, the angle is specified in the parameter
![image](https://github.com/user-attachments/assets/3310f718-bea5-4933-abe2-d772b94080a3)
	
- rotateX(angle)	Defines a 3D rotation along the X-axis	
![image](https://github.com/user-attachments/assets/6773687a-7479-46db-8d1a-bcaabfbecbda)

- rotateY(angle)	Defines a 3D rotation along the Y-axis	
![image](https://github.com/user-attachments/assets/420f88e9-1725-4e61-9a05-fa9490f730a9)

- rotateZ(angle)	Defines a 3D rotation along the Z-axis
![image](https://github.com/user-attachments/assets/583f3ac4-10e0-40d7-ab2e-ead437559657)

### Skew
- skew(x-angle,y-angle)	Defines a 2D skew transformation along the X- and the Y-axis	
![image](https://github.com/user-attachments/assets/cb5ce734-ba2a-4c53-9cf8-cdc8791be5fc)

- skewX(angle)	Defines a 2D skew transformation along the X-axis	
![image](https://github.com/user-attachments/assets/9f16d1fd-1488-4fd8-9a40-6c4ee980c8b1)

- skewY(angle)	Defines a 2D skew transformation along the Y-axis	
![image](https://github.com/user-attachments/assets/688f0122-307b-41d2-9ee8-d856fc847807)

### 3D
- perspective(n)	Defines a perspective view for a 3D transformed element
- matrix3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	Defines a 3D transformation, using a 4x4 matrix of 16 values
- rotate3d(x,y,z,angle)	Defines a 3D rotation
- scale3d(x,y,z)	Defines a 3D scale transformation
- translate3d(x,y,z)	Defines a 3D translation	
