# [Read Introduction First](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Manipulation-Number_15/Introduction.md)
# Manipulation of Elements in the DOM
By manipulating the DOM, it is possible to create, modify and remove elements from the web page, in addition to changing their attributes and styles. These procedures are performed using the properties and methods provided by the DOM.

## Finding HTML Elements With DOM
These methods allow you to select specific HTML elements in the DOM tree for further manipulation.

1. **document.getElementById(id_name):** Finds an element by its ID; 
![image](https://github.com/user-attachments/assets/5c06f880-71b6-4008-a38b-0be59c49e51d)

2. **document.getElementsByTagName(Tag_name):** Finds elements by tag name; 
![image](https://github.com/user-attachments/assets/6e26ad42-9c39-4d38-9450-dae6c09200c0)

3. **document.getElementsByClassName(Class_name):** Finds elements by class name; 
![image](https://github.com/user-attachments/assets/0cb7b196-158b-44a1-af5d-c823ee54350d)

4. **document.querySelector(.selector or #selector):** Returns the first element that matches the CSS selector;
![image](https://github.com/user-attachments/assets/6700623e-8345-4e4d-96ea-05c53a65004e)
![image](https://github.com/user-attachments/assets/eee167f9-f36d-49f2-81b6-9f49da1724bd)

5. **document.querySelectorAll(selector):** Returns all elements that match the CSS selector; 
![image](https://github.com/user-attachments/assets/3d914f38-208d-4cbb-b6c8-f5a6cd85e96c)
![image](https://github.com/user-attachments/assets/f909ac84-4347-4445-b065-a5172e102ae7)

## Changing HTML Elements With DOM
These properties and methods allow you to modify the content, attributes, and style of HTML elements. ``<p id='paragraph' name='name'></p>``

1. **element.innerHTML = new HTML content** Changes the internal HTML content of an element;
![image](https://github.com/user-attachments/assets/ce3f2dc8-9aa8-4817-8c75-faec2915077c)
![image](https://github.com/user-attachments/assets/47c44aa7-91d2-428d-a0f4-d1704e154e04)

2. **document.write(text):** Writes directly to the HTML output stream (generally not recommended).
![image](https://github.com/user-attachments/assets/483d820f-5a35-475d-93ff-8bdcd3504afd)

3. **element.textContent = new text** Changes only the internal text of an element;
![image](https://github.com/user-attachments/assets/8a496012-a05f-439c-a75f-a600eadaa47e)

4. **element.attribute = new value** Changes the value of an attribute of an HTML element;
![image](https://github.com/user-attachments/assets/7a0ee6c8-0257-4ef1-a1f7-9672b57d197f)
![image](https://github.com/user-attachments/assets/e24b18f9-0b06-474f-86f4-a863c835ff29)

5. **element.style.property = new style** Changes the style of an HTML element;
![image](https://github.com/user-attachments/assets/2e44f14d-ad48-4af4-995a-d255c1651777)
![image](https://github.com/user-attachments/assets/32d3f684-c87e-4836-8dce-f3437f91547b)

## Adding HTML Elements With DOM
These methods allow you to create new elements. `` <div id='Box'> </div> ``

1. **document.createElement(element):** Creates a new HTML element. 
![image](https://github.com/user-attachments/assets/16bfac47-d2cb-402f-8a39-c27fa6f25ea5)

2. **document.appendChild(element):** Adds a new HTML element as a child of another element. 
![image](https://github.com/user-attachments/assets/f6f3be45-fc06-4024-b85a-f07e5ec97d09)

3. **document.insertBefore(new, existing):** Inserts a new HTML element before an existing element. 
![image](https://github.com/user-attachments/assets/a3a707e5-e124-4683-b47e-8c46584effee)
![image](https://github.com/user-attachments/assets/d791ea37-74ca-418f-9185-548d52db99a9)

## Replace and Deleting HTML Elements With DOM
These methods allow you to remove elements or replace them in the DOM tree.

1. **document.removeChild(element):** Removes an HTML element from the DOM tree. 
![image](https://github.com/user-attachments/assets/b2afbbfd-b321-40cb-987c-f90fd873c030)
![image](https://github.com/user-attachments/assets/d65f75da-81e9-49c3-a287-c9b513713393)

2. **document.replaceChild(new, old):** Replaces one HTML element with another. 
![image](https://github.com/user-attachments/assets/0c82576b-0309-48cc-8603-7cde7f47ad58)

3. **element.removeAttribute(attribute):** Removes an attribute from an HTML element.
![image](https://github.com/user-attachments/assets/409df0eb-b60c-42ac-9967-37c119f00e5b)
![image](https://github.com/user-attachments/assets/574ab498-e4d0-49b8-9e62-8c111aacf558)

## Working with Attributes with DOM
Class manipulation is crucial for dynamically styling elements:

1. **element.getAttribute(attribute):** Gets the value of an attribute of an HTML element. 
![image](https://github.com/user-attachments/assets/1110ad33-3095-4c0c-a1f8-d1c49140c5ca)

2. **element.setAttribute(attribute, value)** Sets or changes the value of an attribute of an HTML element;
![image](https://github.com/user-attachments/assets/2b6b6b31-fe6f-4d3f-b10c-fcbc9bf24276)
![image](https://github.com/user-attachments/assets/cd9b2eca-d07e-4672-af2c-66710dc26b92)
