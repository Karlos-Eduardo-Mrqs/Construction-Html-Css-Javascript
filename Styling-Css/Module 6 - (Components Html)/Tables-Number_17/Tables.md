# Styles with Tables
In this chapter on HTML component styles, we will style an HTML table.

## Reference Table
![image](https://github.com/user-attachments/assets/768076cd-fb8b-4c5e-8e65-a332179729f3)
![image](https://github.com/user-attachments/assets/75125165-eff0-4cd9-b288-82b845321962)

Using this reference table, let's make the table below look similar to the one above, notice:
![image](https://github.com/user-attachments/assets/f028ef37-b682-4733-88ba-d9f9a82054c3)

## Table Styling 
To avoid getting lost in too many details, we will start the style with the title part.

## Caption
In the table title, we will apply a font size of 15px with 10px horizontal and 60px vertical padding and greater emphasis with the font:

![image](https://github.com/user-attachments/assets/32e6363f-ac69-470b-9d95-f9d2f830b22c)

## Table 
In the table, it will be assigned a centralized position:

![image](https://github.com/user-attachments/assets/b65eff78-445f-4a21-aa39-12e537ba1195)

### Size of Table
Width 100% and a height of 200px:

![image](https://github.com/user-attachments/assets/9d2832ed-abd7-450f-b128-de8736990f49)

### Thead Of Table
Going to the header, a dark red background, a height of 40px and width 20px with a 16px font size:

![image](https://github.com/user-attachments/assets/49c36dba-31f9-4a21-93cb-5cc0350b86ba)

Going back to the total table, we will add 1,3,5 with a white background:

![image](https://github.com/user-attachments/assets/d4c2bd64-e3a6-49fc-ad2e-7b22ad09388e)

## Tfoot
Moving to the footer, we'll apply a border to the top and bottom of the footer:

![image](https://github.com/user-attachments/assets/d311688a-8cc6-4623-b8e9-707f3334e9fb)

We will place the total in the corner next to the number of cars:

![image](https://github.com/user-attachments/assets/1ba4d97a-7b3b-4a0b-bf78-1929942b593d)

## Hover Effect
And to finaly, let's add one hover effect on background color red:
![image](https://github.com/user-attachments/assets/e3b9adff-25eb-4e0d-bec9-cc4f0d074807)

# Styling Css
```
html{
    background-color: #333;
    margin: 0;
}

body{
    color: aliceblue;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.table-car2 caption{
    font-weight: bold;
    font-size: 15px;
    padding:10px 15px;
}

.table-car2{
    text-align: center;
    width: 100%;
    height: 200px;
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
}

.Car-head th{
    background-color: darkred;
    font-size: 16px;
    width: 20px;
    height: 40px;
}

.Car-body .linne{
    background-color: #555;
}

.Car-foot{
    border-top:solid 1px darkred;
    border-bottom: 3px solid darkred;
    text-align: end;
}

.Car-foot .Total-Car{
    text-align: end;
}

.Car-body tr:hover td{
    background-color: red;
}
```