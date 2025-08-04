# Note 👁️

- [Read the previous chapter](../../Module%205%20-%20Methods%20And%20Data%20Manipulation/)

---

## Introduction to the Document Object Model (DOM)

The Document Object Model (DOM) in JavaScript is a programming interface that represents HTML and XML documents as a tree of objects. With the DOM, developers can manipulate the structure, style, and content of a document, allowing web pages to be dynamic and interactive. The DOM provides methods for accessing, adding, modifying, and deleting elements, attributes, and events in a document, making it a fundamental part of web development.

![maxresdefault](https://github.com/user-attachments/assets/9c00d22e-b4cc-4047-bdf8-6928fa08df83)

A web page is a document. This document can be displayed in a browser window or as HTML source code. But in both cases, it is the same document. The DOM (Document Object Model) represents this same document so that it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language like JavaScript.

## Document Object

The `document` object in JavaScript is an interface that represents the HTML or XML structure loaded in the web page, and is an essential part of the DOM (Document Object Model). It serves as the "portal" for interacting with the elements on the page. Using `document`, you can access, manipulate, and modify virtually anything in HTML, such as elements, attributes, text, events, etc.

## Main functions of the document object

- **Access page elements:** The `document` object allows you to select and manipulate HTML elements. Examples include:
- **Create new elements:** You can create new HTML elements and add them to the page;
- **Manipulate content:** Allows you to change the textual or HTML content of elements;
- **Manage events:** The `document` object is essential for managing user interaction events with the page;
- **Navigate the DOM:** The `document` object allows you to navigate and search for nodes (elements and other types) in the DOM tree, such as parents, children, and siblings of an element;

## DOM Tree

![1_mMmuOhNytgqP7lrU9HPTpw](https://github.com/user-attachments/assets/3d2149e5-9014-4bbb-b995-5f4cae299b2c)

Every web page is, in a sense, a tree. This is because we can view a web page as a tree, with a root as the HTML element and its children as the HEAD and BODY elements, which, in turn, also have child elements, and so on.

## Elements in the DOM

Elements that do not have children are called leaf nodes, such as the TITLE, STYLE, SCRIPT, LI, H1, P, and TD elements shown above. Note that Text is the text within an element. The `<TD>` node, for example, is also considered a node, but of a different type (text). This tree structure is how the browser organizes HTML markup.

This is how the web browser interprets an HTML document. The tree is always read from left to right, so we see the original web page. Properly closing elements, using current tags, and avoiding obsolete tags helps browsers display a web page correctly.

## Relationship with HTML, CSS, and JS

JavaScript uses the DOM to connect to HTML, and to do so, it is necessary to insert the `<script>` tag in the HTML file. JavaScript code can be written within the `<script>` tag or inserted into an external file.

![1_1Gh0_hx4rVTiAcJKge1KQA](https://github.com/user-attachments/assets/282acfe9-2ad9-4146-bb24-5fbbec0d3556)

## Conclusion

This introduction to the DOM shows how JavaScript can be used to access and modify elements of a web page. The DOM is fundamental to building dynamic and interactive pages, allowing you to manipulate content, styles, and even events directly with JavaScript code.

---

## Next Chapter

- [DOM Manipulation](Manipulation.md)
