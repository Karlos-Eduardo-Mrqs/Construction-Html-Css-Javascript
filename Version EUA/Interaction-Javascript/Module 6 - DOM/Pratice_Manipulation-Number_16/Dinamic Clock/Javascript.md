# Note 👁️

- [Read the construction section first](HtmlCss.md)

---

## JavaScript Code Documentation: Date, Time, and Background Update

This document explains, step by step, how the JavaScript code dynamically updates the date, time, and changes the background and icon based on the time of day.

---

### Initial Setup

```javascript
document.addEventListener("DOMContentLoaded", () => {
const data = new Date();
const body = document.body;
```

- **`DOMContentLoaded`**: Ensures that the script is executed only after the DOM is completely loaded.
  - **`data`**: Creates a `Date` object to access the current date and time.
  - **`body`**: Selects the `<body>` element to later modify its style.

---

### Selecting HTML Elements

```javascript
const fundo = document.querySelector('.fundo');
const imagemRelogio = document.querySelector('.img-icone');
const horaElement = document.querySelector('.hora');
const dataCompleta = document.querySelector('.data-completa');
```

- Uses **`querySelector`** to select DOM elements to be manipulated:
  - `.fundo`: Adjusts the background according to the time of day.
  - `.img-icone`: Changes the image of the clock icon.
  - `.hora`: Displays the current time.
  - `.data-completa`: Displays the formatted date.

---

### Function to Format Numbers

```javascript
const formatarNumero = (number) => (number < 10 ? `0${number}` : number);
```

- This function formats numbers less than 10, adding a leading zero to ensure the two-digit format.

---

### Displaying the Date in Brazilian Format

```javascript
const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
day: '2-digit',
month: 'long',
year: 'numeric',
}).format(data);

dataCompleta.textContent = dataFormatada;
```

- **`Intl.DateTimeFormat`**: Formats the date in the Brazilian standard (month dd spelled out in yyyy).

- Defines the formatted text in the `.data-completa` element.

---

### Updating the Clock

```javascript
const actualizarRelogio = () => {
const dataAtualizada = new Date();
const hora = formatorNumero(dataAtualizada.getHours());
const minuto = formatorNumero(dataAtualizada.getMinutes());
const segundo = FormatNumber(UpdatedData.getSeconds());
horaElement.textContent = `${hora}:${minuto}:${segundo}`;
};
```

- **`updateClock`**:
  - Gets the current hours, minutes, and seconds.
  - Uses `formatarNumero` to ensure the two-digit format.
  - Updates the `.hora` element with the current time.

---

### Changing Background and Image Based on Time of Day

```javascript
const horaAtual = data.getHours();
if (horaAtual >= 6 && horaAtual < 12) {
fundo.classList.add('morning');
body.style.background = '#fffce9';
imagemRelogio.src = 'images/Manha.png';
imagemRelogio.alt = 'Image of the morning period';
} else if (horaAtual >= 12 && horaAtual < 18) {
fundo.classList.add('afternoon');
body.style.background = '#eac466';
imagemRelogio.src = 'images/Tarde.png';
imagemRelogio.alt = 'Image of the afternoon period'; } else if (currentTime >= 18 && currentTime < 21) {
background.classList.add('evening');
body.style.background = '#6a4c93';
clockImage.src = 'images/Anoitecendo.png';
clockImage.alt = 'Evening image';
} else {
background.classList.add('night');
body.style.background = '#14477a';
clockImage.src = 'images/Noite.png';
clockImage.alt = 'Night image';
}
```

- Determines the **time of day** based on the current time:
  - **Morning (6 a.m. to 12 p.m.)**: `morning` class, light background, and morning image.
  - **Afternoon (12 PM to 6 PM)**: `Afternoon` class, yellow background, and afternoon image.
  - **Dusk (6 PM to 9 PM)**: `Evening` class, purple background, and sunset image.
  - **Night (9 PM to 6 AM)**: `Night` class, dark blue background, and night image.
  - Sets the `alt` attribute on images to improve accessibility.

---

### Real-Time Clock Update

```javascript
updateClock();
setInterval(updateClock, 1000);
});
```

- **`updateClock`**: Executed when the page loads to display the initial time.
- **`setInterval`**: Updates the clock every second.

---

## Summary

- **Functionality**:
  - Dynamically updates the date and time in Brazilian format.
  - Changes the clock background and image according to the time of day.
  - Updates the clock in real time.

- **Improvements**:
  - Modular and easy-to-understand code.
  - Improved accessibility with the use of `alt` attributes.

- **Dependencies**:
  - Images for different times of day (`images/Manha.png`, etc.).
