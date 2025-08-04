# Note 👁️

- [Read Module 3 before continuing](../Module%20-%203(Navigation%20and%20Media)/LinksEasÂncoras_Number_07/LinksEasAncoras.md)

---

## Tables ⏹️

Within HTML, we can create tables. These are lists that have two dimensions: rows and columns. They present data in a more organized and visual way.

## 🎯 Example of a table we will build

We will use the following images as a **reference**: first, the **students** table, then the **teachers** table.

![TableExample](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/076d9f07-f3b6-435b-a5f0-4bc7f43996dc)

> ⚠️ **Attention:** For now, we will focus only on the table structure. The visual part (styling with attributes) will be covered later.

---

## 🔨 Step-by-Step Construction for Students (Part 1)

### Step 1: Starting the Table

We start with the following **basic tags**:

- `<table>`: Starts the table;
- `<caption>`: Defines the table title.

![ExampleTable](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9a3e93c4-a3b1-4c45-9042-c1b743d46b8c)

### Step 2: Creating the Header

- ``<thead>``: Starts the table header;
- ``<tr>``: Creates a row;
- ``<th>``: Defines the column titles (header cells).

![ExampleTable2](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/964f5b5e-00b1-4ae0-9a58-5d45b48fee8c)

### Code completed until the Header is built

```html
<table>
<caption>Students</caption>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Class</th>
<th>Shift</th>
</tr>
</thead>
</table>
```

---

## 📦 Step-by-Step Student Construction (Part 1)

Now, we add the table content, that is, the student data. We use the following tags:

- ``<tbody>``: Starts the table body;
- ``<tr>``: Creates a new row;
- ``<td>``: Defines the data for each cell (regular cells).

![ExamploCorpoTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/64f89971-c38b-4f25-a11e-c066ad3c66fa)

### ✅ Final Result (so far)

> To add more rows, simply copy and paste the ``<tr>...</tr>`` block inside the ``<tbody>`` and change the data as needed:

```html
<table>
<caption>Students</caption>
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Class</th>
<th>Shift</th>
</tr>
</thead>
<tbody>
<tr>
<td>Carlos</td>
<td>17</td>
<td>1201</td>
<td>Morning</td>
</tr>
</tbody>
</table>
```

### Final Illustration of the Constructed Table

Note: to create the other data, "CTRL+C" in the TBody TR, "CTRL+V" below the first TR. Changing the data only.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f96549d1-4082-4ad6-9555-b878a1667a60)

### ✍️ Conclusion

1. The table was constructed with the basic structures;
2. It's already working correctly and displays the data;
3. The visual aspects (such as borders, alignment, and colors) will be covered in Part 2.

---

## 💡 Continued

- [Continue to Part 2](./StylingTable.md)
