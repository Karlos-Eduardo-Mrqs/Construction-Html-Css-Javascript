# Introduction to the Document Object Model (DOM)
The Document Object Model (DOM) in JavaScript is a programming interface that represents HTML and XML documents as a tree of objects. With the DOM, developers can manipulate the structure, style, and content of a document, allowing web pages to be dynamic and interactive. The DOM provides methods for accessing, adding, modifying, and deleting elements, attributes, and events in a document, making it a fundamental piece of web development.

![maxresdefault](https://github.com/user-attachments/assets/9c00d22e-b4cc-4047-bdf8-6928fa08df83)

A web page is a document. This document can be displayed in the browser window or as the HTML source. But it is the same document in both cases. The DOM (Document Object Model) represents the same document so that it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language like JavaScript.

# Document object
The document object in JavaScript is an interface that represents the HTML or XML structure loaded on the web page, being an essential part of the DOM model (Document Object Model). It serves as the "gateway" for interacting with page elements. Through document, you can access, manipulate and modify practically anything in HTML, such as elements, attributes, texts, events, etc.

## Main functions of the document object
- **Access page elements:** Document allows you to select and manipulate HTML elements. Examples include;
- **Create new elements:** You can create new HTML elements and add them to the page;
- **Manipulate content:** It is possible to change the textual or HTML content of elements;
- **Manage events:** The document is essential for managing user interaction events with the page;
- **Browse the DOM:** Document allows browsing and searching for nodes (elements and other types) in the DOM tree, such as parents, children and siblings of an element;

# DOM tree
![1_mMmuOhNytgqP7lrU9HPTpw](https://github.com/user-attachments/assets/3d2149e5-9014-4bbb-b995-5f4cae299b2c)
Every web page is in some way a tree. This is due to the fact that we can see a Web page as a tree, with a root as the HTML element and its children as the HEAD and BODY, which in turn also have child elements and so on.

## Elements in the DOM
Elements that do not have children are called leaf nodes, such as the TITLE, STYLE, SCRIPT, LI, H1, P, TD elements demonstrated above. Note that Text is text that is inside an element. The node <TD> for example is also considered a node, but a node of a different type (text type). This tree structure is the way the browser organizes HTML markup, this is how the Web browser sees an HTML document. The tree is always read from left to right, so we will have the original web page. Closing elements correctly, using current tags and avoiding outdated tags help browsers display a web page correctly.

# Relationship with Html, Css and Js
JavaScript uses the DOM to connect to HTML, and to do so, you need to insert the script tag into the HTML file. JavaScript code can be written within the script tag or inserted into an external file. 

![1_1Gh0_hx4rVTiAcJKge1KQA](https://github.com/user-attachments/assets/282acfe9-2ad9-4146-bb24-5fbbec0d3556)

# Conclusion
This introduction to the DOM shows how JavaScript can be used to access and modify elements of a web page. The DOM is critical for building dynamic, interactive pages, allowing you to manipulate content, styles, and even events directly with JavaScript code.

# [Manipulation Dom](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Manipulation-Number_15/Manipulation.md)
