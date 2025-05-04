# [Return Part One](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Dinamic%20Clock/HtmlAndCss.md)

# Documentation of JavaScript Code: Date, Time, and Background Update
This document explains, step by step, how the JavaScript code dynamically updates the date, time, and changes the background and icon based on the time of day.
---

## **Code Structure**

### **1. Initial Setup**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const data = new Date();
    const body = document.body;
```
- **`DOMContentLoaded`**: Ensures the script runs only after the DOM is fully loaded.
- **`data`**: Creates a `Date` object to access the current date and time.
- **`body`**: Selects the `<body>` element to later modify its style.---

### **2. Selecting HTML Elements**
```javascript
    const fundo = document.querySelector('.fundo');
    const imagemRelogio = document.querySelector('.img-icone');
    const horaElement = document.querySelector('.hora');
    const dataCompleta = document.querySelector('.data-completa');
```
- Uses **`querySelector`** to select DOM elements to be manipulated:
  - `.fundo`: Adjusts the background based on the time of day.
  - `.img-icone`: Changes the clock icon image.
  - `.hora`: Displays the current time.
  - `.data-completa`: Displays the formatted date.---

### **3. Number Formatting Function**
```javascript
    const formatarNumero = (numero) => (numero < 10 ? `0${numero}` : numero);
```
- This function formats numbers less than 10 by adding a leading zero to ensure a two-digit format.---

### **4. Displaying the Date in Brazilian Format**
```javascript
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(data);

    dataCompleta.textContent = dataFormatada;
```
- **`Intl.DateTimeFormat`**: Formats the date in Brazilian format (dd of month in full yyyy).
- Sets the formatted text in the `.data-completa` element.---

### **5. Updating the Clock**
```javascript
    const atualizarRelogio = () => {
        const dataAtualizada = new Date();
        const hora = formatarNumero(dataAtualizada.getHours());
        const minuto = formatarNumero(dataAtualizada.getMinutes());
        const segundo = formatarNumero(dataAtualizada.getSeconds());
        horaElement.textContent = `${hora}:${minuto}:${segundo}`;
    };
```
- **`atualizarRelogio`**:
  - Retrieves the current hours, minutes, and seconds.
  - Uses `formatarNumero` to ensure two-digit formatting.
  - Updates the `.hora` element with the current time.---

### **6. Changing Background and Image Based on Time of Day**
```javascript
    const horaAtual = data.getHours();
    if (horaAtual >= 6 && horaAtual < 12) {
        fundo.classList.add('morning');
        body.style.background = '#fffce9';
        imagemRelogio.src = 'images/Manha.png';
        imagemRelogio.alt = 'Morning period image';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        fundo.classList.add('afternoon');
        body.style.background = '#eac466';
        imagemRelogio.src = 'images/Tarde.png';
        imagemRelogio.alt = 'Afternoon period image';
    } else if (horaAtual >= 18 && horaAtual < 21) {
        fundo.classList.add('evening');
        body.style.background = '#6a4c93';
        imagemRelogio.src = 'images/Anoitecendo.png';
        imagemRelogio.alt = 'Evening period image';
    } else {
        fundo.classList.add('night');
        body.style.background = '#14477a';
        imagemRelogio.src = 'images/Noite.png';
        imagemRelogio.alt = 'Night period image';
    }
```
- Determines the **time of day** based on the current hour:
  - **Morning (6 AM to 12 PM)**: Class `morning`, light background, and morning image.
  - **Afternoon (12 PM to 6 PM)**: Class `afternoon`, yellow background, and afternoon image.
  - **Evening (6 PM to 9 PM)**: Class `evening`, purple background, and evening image.
  - **Night (9 PM to 6 AM)**: Class `night`, dark blue background, and night image.
- Sets the `alt` attribute for images to improve accessibility. ---

### **7. Real-Time Clock Update**
```javascript
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
});
```
- **`atualizarRelogio`**: Runs when the page loads to display the initial time.
- **`setInterval`**: Updates the clock every second. ---

## **Summary**

- **Functionality**:
  - Dynamically updates the date and time in Brazilian format.
  - Changes the background and clock image based on the time of day.
  - Updates the clock in real-time.

- **Improvements**:
  - Modular and easy-to-understand code.
  - Accessibility improvements with `alt` attributes.

- **Dependencies**:
  - Images for different times of the day (`images/Manha.png`, etc.).
