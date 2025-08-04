# Note 👁️

- [Read part one before continuing](./Forms.md)

---

## ⌨️ Inputs

Inputs are the fields where the user interacts with a form, filling in information such as name, email, number, date, etc.

### 🧩 Input Types

Next, we'll look at the main types of input fields, grouped by category.

Most form fields are defined by the ``<input>`` tag and its type attribute, which determines the accepted data type. Here are the main types:

- "text" - A standard text box:

![Screenshot 2024-06-24 111922](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e6a6f8cc-cbdf-4e21-821c-fdc5ed2ecee3)

- "number" - Only Numbers:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/17075fd9-fbbf-4e76-8eeb-299902b69a8d)

- ``email`` - Email address field:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/714fa144-e613-4e3f-abfd-ba90893ddbf5)

- ``tel`` - To enter phone numbers Phone:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/412ae986-f7bb-40ed-ad81-d2f953737808)

- ``search`` - Search field:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b9fbee08-4de0-4a2c-b986-ae3a35dacc29)

- ``url`` - For links (addresses) web):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/58c2aa7f-e0fe-440a-a04d-747c31ae5b22)

- ``password`` - Password field (hides the text):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3f3d53ed-e6cf-4e8c-a6a7-0c92e0a6cfe5)

- ``textarea`` - Text area (larger block of input):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/ed80b31a-a5ef-4731-84bd-07e02725cc6c)

## 📅 Date and Time Inputs

- ``date`` - Date selection:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/154d5e1c-bae1-4c11-90ac-721aa7d65388)

- ``datetime-local`` - Date and time local:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/ba830fc1-119a-4e0e-97e7-df039ba7be0c)

- ``time`` - Time only:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e61d8923-2b6a-4db2-b000-91ac6102709a)

- ``month`` - Choose a month and Year:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3afba312-24f1-409b-930d-6f9efefe17ad)

- ``week`` - Choosing the week of the year:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/013f097a-bae8-4fae-aa4a-5cefb72d6164)

## Global Attributes for Inputs

| Attribute | Function |
| ------------- | ----------------------------------------------------------------- |
| `name` | Defines the field name (used to send data). |
| `id` | Defines the field's unique identifier (connection to `<label>`). |
| `type` | Defines the input type (`text`, `email`, `number`, etc.). |
| `placeholder` | Displays a tooltip within the field (e.g., "Enter your name"). |
| `rows` | Number of rows (used only in `<textarea>`). |
| `min`/`max` | Defines the minimum and maximum values for numeric or date fields. |
| `pattern` | Regular expression to validate the entered value. |

> 📞 Validating a phone number with a pattern

```html
<input type="tel" pattern="^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$">
```

- [Explanation of the pattern format](https://pt.stackoverflow.com/questions/46672/como-fazer-uma-express%C3%A3o-regular-para-telefone-celular).

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5efd7067-5d20-44a6-b0ee-10455b3e6cbc)

---

## 💡 Continuation

- [Continued in Number_11](../ManipulationInputs_Number_11/Inputs2.md)
