# Basic concepts 
Css is a very powerful tool that makes it possible to create different functionalities instead of using JavaScript or another heavier language. If used in moderation, CSS can provide a great experience for developers and users of web pages.

# Structure for CSS
As mentioned in the introduction, HTML and CSS are like "partners", one for the structure (Html) and the other for styling (Css). An HTML document is necessary to carry out the styling, where the STYLE tag will be inserted in the HEAD, therefore, it will be in the header. The Css structure will be explained below.

## Css Structure Formatting 
Within Css it is used as a set of rules. Where these rules need a "Selector" for styling and a statement block. Where the Selector represents the html tags, the instruction block are attributes that are inserted to assign to that specific tag. Watch:

```
    <style>
        seletor(tag_Html) {
            atributo: valor;
            atributo: valor;
        }
    </style>
```

## Explanation 
Before starting styling, we must first open the ``<style> tag to open Css </style> ``. Then we will choose which html tag will be styled and then which attribute it will receive.

### Practical example

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0f148e54-9e32-4891-a7a8-23c13ee276fa)

We have this example html, we can say that all paragraphs are blue, how do we do that? Simple:``<style> p { color: blue; } </style>``. Returning to Html, it looked like this:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/294a315f-afa5-4eae-b2e4-c3a36c5da837)

#### P Styling
Making all ``<p> </p> `` tags characterized by the color blue. Now, what about Text 4? It's a ``<span> </span>`` tag and let's suppose I want to leave this tag with a red background. How will we assign this background? Simple: ``<style>span{background-color: red;}</style>``. Going back to Html, it looked like this:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2977944f-fecf-45e9-8d6a-723661d236ab)

# Call Methods
As you can see from the Practical Example, css styles a tag by the tag name also mentioned in Paragraphs and Text 4. But, we can call them another way, **by the html attributes "id" and "class"**

## Id X Class

### Id
Known as the identification attribute, that is, all tags must have their own ID. To call it in the css is simple, let's assume that Text 4 has an ID called Span1 and I want to make the color of Span1 Magenta. How do we style this?:

#### Formatting Id

```
    <style>
        #Span1{
            color: magenta;
        }
    </style>
```

##### Result Page 
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eef2c3f9-09ec-4780-b724-72d54d8e6ce4)

### Class
Known as a classification attribute, that is, we can say that it is like a filter to include styles for countless HTML tags at once. Like this? For example, imagine that all paragraphs have a class called ParGrf1, and all that have this class have a black background and a white font color. Styling it this way:

#### Formatting Class

```
    <style>
        .ParGrf1{
            background-color: black;
            color:white;
        }
    </style>
```

##### Result Page
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6c2033ce-eda8-49db-b832-fd6e52af48a7)
