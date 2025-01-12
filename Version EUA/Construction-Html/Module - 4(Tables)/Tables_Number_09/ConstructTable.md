# Tables
Within HTML, we can create tables. Where are lists that have two dimensions and columns. Presenting data in a more organized and visual way.
## Example table that we will use
![ExemploDeTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/076d9f07-f3b6-435b-a5f0-4bc7f43996dc)

To practically build a table in HTML, we will use these two tables as a reference. **Starting with the students and then the teachers .Observation, then we will make the table similar to the image with the attributes. For now, we will do the table first and then the organization:**
## Construction Step by Step Students Part 1
To start the table, we will start with the tags. In that moment, the table has not appeared yet:
- **``<table > </table> ``:**Initializes our table;
- **``<caption> </caption>``:**Creates the table title;
## Header of Table
- **``<thead> </thead> ``:**Initializes the header of our table;
- **``<tr> </tr> ``:**Defines Our line;
- **``<th> </th>``:**Defines Our Cell/Value as Title;

![ExemploTabela2](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/964f5b5e-00b1-4ae0-9a58-5d45b48fee8c)
# Code created until the construction of the Header
```
<table>
        <caption>Alunos</caption>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
                <th>Turno</th>
            </tr>
        </thead>
    </table>
```
# Construction Step by Step Students Part 2
Now, we will start creating the body of our table with the tags:
- **``<tbody> </tbody>``:** We will create the body of our table and then within tbody;
- **``<tr> </tr>``:** To define the line ;
- **``<td> </td>``:** To define the cells of that line ;

![ExemploCorpoTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/64f89971-c38b-4f25-a11e-c066ad3c66fa)
# Code made until the construction of the Body

```
<table>
        <caption>Alunos</caption>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
                <th>Turno</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Carlos</td>
                <td>17</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>
        </tbody>
    </table>
```

# Final Illustration of the Constructed Table 
Note, to make the other data "CRTL+C" in the TBody TR, "CTRL+V" under the first Tr. Changing the data only.
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f96549d1-4082-4ad6-9555-b878a1667a60)

# [Follows part 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Construction-Html/Module%20-%204(Tables)/Tables_Number_09/StylingTable.md)