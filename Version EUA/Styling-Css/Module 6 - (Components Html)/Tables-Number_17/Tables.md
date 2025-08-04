# Note 👁️

- [Read Number_16 before continuing](../Inputs-Number_16/inputs.md)

---

## Styles with Tables

In this chapter, we'll style an HTML table.

## Reference Table

![Reference Table 1](https://github.com/user-attachments/assets/768076cd-fb8b-4c5e-8e65-a332179729f3)

![Reference Table 2](https://github.com/user-attachments/assets/75125165-eff0-4cd9-b288-82b845321962)

---

## Example to be styled

We will use this reference table to make the table below look like this:

![Table to style](https://github.com/user-attachments/assets/f028ef37-b682-4733-88ba-d9f9a82054c3)

---

## Styling of Table

### Caption (title)

- Font size: 15px
- Padding: 10px horizontal and 60px vertical
- Font with greater emphasis

![Stylized caption](https://github.com/user-attachments/assets/32e6363f-ac69-470b-9d95-f9d2f830b22c)

---

### Table

- Centered text
- Width: 100%
- Height: 200px

![Centered table](https://github.com/user-attachments/assets/b65eff78-445f-4a21-aa39-12e537ba1195)
![Table with height](https://github.com/user-attachments/assets/9d2832ed-abd7-450f-b128-de8736990f49)

---

### Thead (header)

- Dark red background
- Height: 40px
- Width: 20px
- Font: 16px

![Styled header](https://github.com/user-attachments/assets/49c36dba-31f9-4a21-93cb-5cc0350b86ba)

---

### Alternate rows

- Rows 1, 3, 5 with white background

![Rows with background white](https://github.com/user-attachments/assets/d4c2bd64-e3a6-49fc-ad2e-7b22ad09388e)

---

### Footer

- Border at the top and bottom

![Footer with borders](https://github.com/user-attachments/assets/d311688a-8cc6-4623-b8e9-707f3334e9fb)

- Total aligned to the right, next to the number of cars

![Total aligned](https://github.com/user-attachments/assets/1ba4d97a-7b3b-4a0b-bf78-1929942b593d)

---

### Hover Effect

- When hovering mouse, the line changes to a red background

![Hover on line](https://github.com/user-attachments/assets/e3b9adff-25eb-4e0d-bec9-cc4f0d074807)

---

## Final CSS

```css
html { 
background-color: #333; 
margin: 0;
}

body { 
color: aliceblue; 
font-size: 16px; 
font-family: Arial, Helvetica, sans-serif;
}

.table-car2 caption { 
font-weight: bold; 
font-size: 15px; 
padding: 10px 15px;
}

.table-car2 { 
text-align: center; 
width: 100%; 
height: 200px; 
border-collapse: collapse; 
font-family: Arial, Helvetica, sans-serif;
}

.Car-head th { 
background-color: darkred; 
font-size: 16px; 
width: 20px; 
height: 40px;
}

.Car-body .linne { 
background-color: #555;
}

.Car-foot { 
border-top: solid 1px darkred; 
border-bottom: 3px solid darkred; 
text-align: end;
}

.Car-foot .Total-Car { 
text-align: end;
}

.Car-body tr:hover td { 
background-color: red;
}
```

---

## ✅ Next Chapter

- [▶️ Continued at Number 18](../ScrollBar-Number_18/ScrollBar.md)
  