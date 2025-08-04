# Note 👁️

- [Read Module 4 before continuing](../../Module%20-%204(Tables)/Tables_Number_09/ConstructTable.md)

---

## Forms 📝

In this module, we'll learn how to structure an HTML form, which is one of the main forms of interaction between users and websites. Through it, users can enter data, such as on registration pages, login pages, surveys, and more.

### 🔧 Basic Form Structure

Every form begins with the ``<form>`` tag, which is the container where fields and buttons are inserted.

```html
<form action="" method="">
<!-- Form fields here -->
</form>
```

#### Required attributes for the "FORM"

- **``action:``** Indicates which page the data is sent to;**
- **``method:``** "Method/Manner" the data is sent by the action.
- **``GET:``** sends the data via the URL (more visible, used for searches).
- **``POST:``** sends the data via the request body (more secure, used for registrations, passwords, etc.).

## 🏷️ Label

The ``<label>`` tag informs the user what to fill in a given field.

```html
<label for="nome">Nome:</label>
```

### Most Used Attribute for the Label

The ``for`` attribute connects the ``<label>`` to an ``<input>`` field that has a corresponding id.

```html
<input type="text" id="nome" />
```

> This way, when you click on the ``<label>`` text, the cursor goes directly to the field.

## ⌨️ Input

The ``<input>`` tag represents input fields, such as name, email, password, etc.

```html
<input type="text" id="nome" name="nome" />
```

> There are several types of input, which will be explained in the next module.

## 🔘 Buttons

The ``<button>`` tag is used to submit, delete, or perform other actions within the form.

```html
<button type="submit">Submit</button>
```

### 📌 Most common types

- ``submit:`` submits the form data;
- ``reset:`` clears all completed fields;
- ``button:`` generic button, which can be used with JavaScript, for example.

---

## 💡 Continued

- [Continued in part 2](./Inputs.md)
