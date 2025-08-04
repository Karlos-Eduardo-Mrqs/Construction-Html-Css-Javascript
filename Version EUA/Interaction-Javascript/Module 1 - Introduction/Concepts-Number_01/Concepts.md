# Note 👁️

- [Read the introduction first!](Introduction.md)

---

## Front-End

We finally arrive at JavaScript, the technology that brings interaction to our websites. It works in conjunction with HTML and CSS, forming the three main technologies used to build the Front-End — the visual and interactive part of websites.

This relationship can be represented by the image below:

![Front-End: HTML, CSS, and JavaScript](https://github.com/user-attachments/assets/f74f1228-6f55-4285-82da-824d46c794b4)

---

### Analogies to Understand the Front-End

1. **Structure (Skeleton):**
The skeleton is the foundation of our body, just as **HTML** is the structure that builds all the content on the page.

2. **Coloring (Clothing and Appearance):**
Clothing, eye color, size, and other characteristics are like the "paint" of the body — just as **CSS** defines the style and visual appearance of pages.

3. **Interaction (Brain):**
Our brain, organs, and nervous system control communication and interaction — similarly, **JavaScript** is responsible for making pages dynamic and interactive.

---

## Implementing JavaScript in HTML

JavaScript can be added to an HTML document in two ways: **internal** or **external** — similar to CSS.

### 1. Internal

To include JavaScript code directly in HTML, we use the `<script>` tag. It can be placed inside the `<head>` or `<body>`, as needed.

Example:

```html
<script>
alert("Hello, World!");
</script>
```

![image](https://github.com/user-attachments/assets/7b58b6ee-a4c0-4653-b2bc-97c2e9d7ce25)
You can add it to either the body or the head, as you prefer.

### 2. External

To add an external JavaScript file, use the ``<script>`` tag with the ``src`` attribute pointing to the ``.js`` file. This helps keep the code organized and reusable.

```html
<script src="script.js"></script>
```

![image](https://github.com/user-attachments/assets/e885aad6-35c7-473d-a8c7-80b3bc0f1adc)

---

## Bonus: Break the "Hello, World!" curse

Legend has it that every successful programmer begins their learning process by displaying the message "Hello, World!".

To do this, use the command:

```js
console.log("Hello, World!");
```

This command prints the message to the browser console, which can be opened with the shortcut: ``CTRL + Shift + I``.

![image](https://github.com/user-attachments/assets/6173f36d-607c-4290-92f8-96414a046408)

If you prefer to display an alert on the screen, use:

```js
alert("Hello, World!");
```

![image](https://github.com/user-attachments/assets/53c01b9a-b13d-4891-a154-e76a3aa00916)

---

## Bonus 2: Running JavaScript in the VSCode Terminal

Did you know you can run your JavaScript code directly in the VSCode terminal? Here's how:

**1. Installing Node.js**
First, we need Node.js. Go to the [node.js](https://nodejs.org/pt) website and install it. Be careful, just follow the installation instructions; don't modify anything. At the end, you'll see this screen:

![image](https://github.com/user-attachments/assets/34322da6-5cb5-400e-ad0c-da46470a6717)
Type the command "node," which will execute Javascript commands.

**2. Installing VsCode**
Next, if you don't have Visual Studio Code, go to [Visual Studio Code.com](https://code.visualstudio.com/). Follow the installation instructions and let's get started:
![image](https://github.com/user-attachments/assets/2c04ec27-4712-4bc8-bb95-9f839c681b60)

**3. Additional Extensions**
Now that VsCode is installed, we'll need to install extensions for programming languages, for example (Javascript, Python, C#, C++, and others), which are helpers used to help you debug these codes in the terminal, code.runner.

![image](https://github.com/user-attachments/assets/287744d6-75b2-426c-8256-58c4a78c86bd)

---

## Next Chapter

- [Continue to the next chapter](../Variables-Number_02/Variables.md)
