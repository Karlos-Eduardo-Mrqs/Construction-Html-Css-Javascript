# 👁️ Note

- [Read Forms.md in StyleTwo First](../StyleTwo/Forms.md)

---

## 📏 Length Units

**Absolute** length units are not influenced by other factors when calculating their length. The final calculated size corresponds exactly to the declared value. Examples:

- `cm`: centimeters
- `mm`: millimeters
- `in`: inches
- `px`: pixels
- `pt`: points
- `pc`: picas

**Relative** length units have their final value affected by other factors. They are used when we need to size elements proportionally. Examples:

- `em`: 1em is the element's font size
- `rem`: 1rem is the root element's font size
- `vw`: 1vw is 1% of the browser window's width
- `vh`: 1vh is 1% of the browser window's height
- `vmin`: 1vmin is 1% of the viewport's smallest side
- `vmax`: 1vmax is 1% of the viewport's largest side
- `%`: Value relative to the parent element

---

## 🔄 Transform (`transform`)

The CSS `transform` property allows you to **rotate, scale, skew, or move** elements in space by modifying the CSS layout coordinate system.

### ✖️ None

- `none`: No transformation.

---

### 🧮 Matrix

- `matrix(n, n, n, n, n, n)`: Defines a 2D transformation using a matrix of six values.

![image](https://github.com/user-attachments/assets/8ef99df8-2c00-4793-b63f-baab59b01204)

---

### 📍 Translation

- `translate(x, y)`: Moves the element horizontally and vertically.

![image](https://github.com/user-attachments/assets/7100cbac-e8fd-4bae-9e9c-1ae16259ada0)

---

### 📐 Scale

- `scale(x, y)`: Increases or decreases the size of the element in the X and Y directions.

![image](https://github.com/user-attachments/assets/6b9264f9-9af2-481f-85ee-bdf855a1f1a3)

---

### 🔄 Rotation

- `rotate(angle)`: 2D rotation in the plane (in degrees, e.g., `rotate(45deg)`).

![image](https://github.com/user-attachments/assets/3310f718-bea5-4933-abe2-d772b94080a3)

- `rotateX(angle)`: 3D rotation on the X axis
![image](https://github.com/user-attachments/assets/6773687a-7479-46db-8d1a-bcaabfbecbda)

- `rotateY(angle)`: 3D rotation on the Y axis
![image](https://github.com/user-attachments/assets/420f88e9-1725-4e61-9a05-fa9490f730a9)

- `rotateZ(angle)`: 3D rotation on the Z-axis
![image](https://github.com/user-attachments/assets/583f3ac4-10e0-40d7-ab2e-ead437559657)

---

### 🪞 Skew

- `skew(x-angle, y-angle)`: 2D tilt on the X and Y axes
![image](https://github.com/user-attachments/assets/cb5ce734-ba2a-4c53-9cf8-cdc8791be5fc)

- `skewX(angle)`: Tilt only on the X axis
![image](https://github.com/user-attachments/assets/9f16d1fd-1488-4fd8-9a40-6c4ee980c8b1)

- `skewY(angle)`: Skew only on the Y axis
![image](https://github.com/user-attachments/assets/688f0122-307b-41d2-9ee8-d856fc847807)

---

## 🎥 3D Transformations

- `perspective(n)`: Sets the depth for 3D viewing.

- `matrix3d(n, n, ..., n)`: 4x4 matrix with 16 values for transforming 3D elements.

- `rotate3d(x, y, z, angle)`: Three-dimensional rotation around a vector in space.

- `scale3d(x, y, z)`: Scale in three dimensions.

- `translate3d(x, y, z)`: Translation in three dimensions.

---

## ✅ Next Chapter

- [Continued at issue 20](../../NavegationBar-Number_20/NavBar.md)
