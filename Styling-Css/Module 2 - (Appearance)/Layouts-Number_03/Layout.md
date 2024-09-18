# Layout's
We have arrived at the second Css Styling module. Here we will talk about how to change and control the appearance of a Web Page.

# Display 
Starting with Display, if you have seen "Construction-Html", we talk about Display, which remembering... It is a property/attribute within the css capable of shaping the way a tag behaves within the Page. For example:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/de06ca82-cefa-4ead-9b95-7686b06bf04c)

We have these three elements within the page. One Div, One Paragraph and One Span (Text 1). When we inspect each of them:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0eb0d2bc-bcc5-4f56-a8d1-b58ae68c1b06)
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6b06106b-1ac1-4318-96bf-13f607caf31d)
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d096f58-167b-4c3f-9f8b-71008111e860)

We can see that within each element, it behaves in a different way. Where Text 1 occupies the space of the Text size and The Div and Paragraph Block occupy an entire line of the page, regardless of their size. In conclusion, the Paragraph and Div blocks are Block (occupying the entire line) and Text 1 is inline (occupying the space that the text has). 
## Types of Displays
- **block:** 
It takes up an entire line of the page. However, it accepts changes in Height and Width (Explain later). Seen just above.

- **inline:** 
It only occupies the size of the text. However, it prohibits changes to Height and Width (Explain later). 
right up.

- **inline-block:** 
Then it will be talked about! Not now.

# Height and Width
Going to the width and height attributes, translated as "Height and Width". We can manipulate the height and width of components in Html. Notice when we set the Div Width to 500px:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d9294f68-7e5f-481f-9218-da7e164d2cd1)

## Application Height And Width
In other words, the entire area highlighted in blue is occupied by the Div. What if we place this Div, with 300px Height.Leaving this div with 500 x 300. Left = Height and Right = Width;

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/680ca42b-ae9c-4738-825c-3d5afcbaee3d)

## Application Height And Width In Span
Now, let's assign 200px height to the span:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

Huh?!? It didn't work, why? Simple, naturally the span has an inline display, that is, "on the line", occupying only the text space; Even if you **"increase the text size"**, that wouldn't be a good solution. Even if we assign a width of 350px:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

**Text 1 continues with its same characteristics. For this situation we use a type of Display called "inline-block": a type of display that mixes the actions of inline and block Display;**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/04f49f65-6623-47ae-be56-051286a21353)

# Min and Max
Within the width and height attributes, we can assign them a maximum and minimum space. For example:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9c4467fa-62d3-4d1f-9a88-e8c039f29b6f)

Imagine that we are building an Html page and we are declaring that each block (which are Div) will have content. And within these blocks, they are **classified** as **Division_1**, and I want their maximum width to be 300px; **naturally it has a width of 200px. What will happen ? Simple, it will remain the same width value, as long as it can only reach 300px**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2a69153d-6c53-4d78-890e-ee468e27dd70)

## Application Min and Max
**We can notice this when we naturally apply the width to 310px, see this. It didn't change to 310px, because we made the layout at least 300px wide.**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/663e827a-08a4-4e9e-9e1b-3670167f2207)

**Now manipulating the minimum width to 300px, pay attention to the image. Even though it already has a width of 200px, it changed to 300px. Due to the fact that the minimum width required by the layout is 300px. That's why he switched to 300px.**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5303cf89-0636-4d92-82fa-57028cd5f9a5)

With this same example, we will make **the minimum and maximum height.** We will apply the *Class Division_1* with a **height of 350px; with its maximum being only 400px. Just look:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3af5e071-5cb8-40d9-8bbc-3515d4c8d218)

It still left the height as 350px. But see what happens, when we change the height to 200px and its maximum is 250px and we add more elements to the class. It doesn't take all the elements, as it has a maximum of 250px. Then, it will respect the requested limit:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5873953a-f843-475d-a9c0-45c66cb356ea)

The same happens when we assign a minimum height of 240px. **This applies to the minimum width; no changing what was naturally assigned to the minimum requested.**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd15fb6a-d2dd-409d-a526-795c986ad350)