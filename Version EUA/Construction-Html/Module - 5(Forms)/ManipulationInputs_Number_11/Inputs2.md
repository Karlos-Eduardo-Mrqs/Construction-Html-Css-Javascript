# Note 👁️

- [Read Number_10 before continuing](../StructureOfForm_Number_10/Inputs.md)

---

## 🎯 Advanced Input Types in Forms

In this module, we'll explore selectable inputs, alternative buttons, and special input types.
These elements enrich the user experience and increase the interactivity of forms.

- ``🔲 checkbox`` – **Multiple Selections**

Allows the user to select more than one option.

```html
<input type="checkbox" name="terms" id="term">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a55165bc-9242-4ed6-a282-8bff5f47a939)

- ``⚪ radio`` – **Single Selection**

Allows you to select only one option within a group.

```html
<input type="radio" name="accepted" id="yes">
<input type="radio" name="accepted" id="no">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e17fed6e-5578-4887-8bba-50c9179819d9)

> 📌 All related radios must have the same name. Otherwise ⬇️

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/31753079-8474-4922-97be-a3e9736a59f8)

- ``🔽 select`` – **List of Options**

Creates a box with selectable options.

```html
<select name="options" id="options"> 
<option value="op1">Option 1</option> 
<option value="op2">Option 2</option>
</select>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d98c1e49-94aa-4cd4-a5b0-0611bfa830af)

## 🧰 Types of Buttons

- ``🔘 submit, reset and image``

```html
<input type="submit" value="send">
<input type="reset" value="clear">
<input type="image" src="/Construção-Html/Modulo - 3(Navigação e Mídia)/MidiasVisuaisEasMusicais_Número_08/images/image4.jpg">
```

- ``submit``: Submits the form.
- ``reset:`` Clears all fields.
- ``image:`` Uses an image as a button, functioning as a ``submit``.

## 📂 Alternative Input Types

- ``📁 file`` - **File Upload**

Allows the user to upload images, videos, or documents.

```html
<input type="file" name="arquivo" id="file" accept=".mp3,.mp4,.png" multiple>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/69faa58a-b15f-4e73-8290-69749f5a5886)

- ``🎨 color`` – **Color Picker**

Opens a palette for the user to choose a color.

```html
<input type="color" name="color" id="color">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/44d193e9-4bdc-460c-bbcb-fa30fd2be1e0)

- ``🎚️ range`` – **Value Range**

Creates a slider bar to choose values between a minimum and maximum.

```html
<input type="range" name="volume" min="0" max="100" step="5">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/06c76384-f781-481b-96b9-deea5851ead0)

- ``🙈 hidden`` – **Invisible Field**

Submits a value without the user seeing it. Useful for identifiers and tokens.

```html
<input type="hidden" name="codigo" value="XYZ123">
```

## ⚙️ Additional Attributes

| Attribute | Function |
| ------------- | --------------------------------------------------------------------- |
| `multiple` | Allows multiple selections (`select`) or multiple files (`file`). |
| `accept` | Defines the accepted file types (`file`). |
| `min` / `max` | Defines the minimum/maximum limits for `number`, `date`, `range`, etc. |
| `step` | Defines the increment step (`range`, `number`). |
| `required` | Makes field entry mandatory. |
| `disabled` | Disables the field (no interaction). |
| `readonly` | Read-only (not editable, but visible). |
| `value` | Defines an initial value for the field. |

## 🗂️ Grouping Fields

Use the ``<fieldset>`` and ``<legend>`` tags to visually organize parts of the form:

```html
<fieldset>
<legend>Personal Data</legend>
<label for="nome">Nome:</label>
<input type="text" id="nome">
</fieldset>
```

Visual example 📸:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1eff2f5e-6a80-4fce-a4c9-d1af423c2136)

## 📌 Tip

> 🔐 Hidden fields are useful for submitting invisible data, such as Internal IDs or codes, without interfering with the interface.

## 🚀 Continued

- [Continued in Module 6](../../Module%20-%206(Developing%20In%20Web)/Structure_Number_12/Structure.md)
