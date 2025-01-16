# NavBar

The **navbar** is one of the most important elements of a website or system. It serves as a navigation tool, helping users access different sections or pages quickly and efficiently.

## Why Use a Navbar?
A well-designed navbar provides:
- **Ease of navigation:** Direct access to key sections.
- **User-friendly design:** Improves the user experience.
- **Enhanced aesthetics:** Makes the interface visually appealing.

## What Are the Types of Navbars?

Navbars can be categorized into two main types: 

### 1. Sidebars
- Positioned vertically on the left or right side of the page.
- Ideal for applications with multiple navigation options.
![image](https://github.com/user-attachments/assets/b7a930a6-14d4-4a84-8f7f-41c22291b385)

### 2. Navbars
- Positioned at the top of the page.
- Commonly used for websites with fewer navigation options.
![image](https://github.com/user-attachments/assets/ba76c0f0-9083-4700-bde3-f36fbfb4499f)
---
# Web Page Example
This web page is a simple demonstration of a site with a fixed sidebar navigation bar, along with content sections describing the site, a sample image, and the project objective.

## Navigation Bar (Sidebar)
The navigation bar (``<nav>``) is positioned as a fixed sidebar on the page. It contains an unordered list (``<ul>``) with list items (``<li>``) that each contain anchor tags (``<a>``) for navigation links. The links are placeholders and currently do not lead to any specific pages, as they are marked with #.

### Main Content
- **Main Section:** The main content of the page is wrapped inside a <main> tag. It contains the following sections:
- **Title and Introduction:** The ``<h1>`` tag introduces the website, followed by a brief introductory paragraph.
- **About the Site:** A description in an ``<h2>`` section that explains the purpose of the site. The sidebar expands and contracts when the user hovers over it, revealing additional options.
- **Image Example:** An example image (LogoGit.png) is displayed with responsive styling applied, so it adjusts to the width of the container without exceeding 600px.
- **Project Objective:** The project goal is outlined in the last section, explaining the objective of creating a simple and functional layout with a focus on usability and responsive design.

# Fixed Navigation Bar CSS Explanation
This CSS is used to style a fixed navigation bar (`nav`) and the main content of the page (`main`). The layout ensures that the navigation bar stays at the top of the page when the user scrolls, and the content below the navigation is adjusted accordingly to prevent overlap.

## Body Styling
- **Font and Background:** The body of the page uses the Arial font and a light gray background color (#f4f4f4).
- **Margin Top:** The margin-top is set to 60px to create space for the fixed navigation bar that will appear at the top of the page. This ensures that the content does not overlap with the navbar.
![image](https://github.com/user-attachments/assets/15f8ffb8-d157-47ba-a22b-9aa8a9c2dfd4)

## Navigation Bar Styling
- **Position Fixed:** The position: fixed property ensures that the navigation bar stays fixed at the top of the page when the user scrolls.
- **Top and Left:** Setting top: 0 and left: 0 places the navigation bar at the top-left corner of the page.
- **Width and Background:** The navigation bar spans the full width of the page (width: 100%) and has a brown color background (#895647).
- **Padding:** The padding: 10px 0 adds vertical space inside the navbar to make the links more comfortable to click.
- **Z-Index:** The z-index: 1000 ensures that the navigation bar stays above other content, even if the content has elements with higher stacking order.
![image](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

## Navbar List and Links Styling
- **Unordered List:** The list-style: none removes the default bullet points from the list items (``<li>``).
- **Flexbox:** The display: flex property is used to create a flexible layout for the list items, and justify-content: center ensures that the items are horizontally centered within the navbar.
- **List Items Margin:** Each list item (``<li>``) has horizontal margins of 10px on both sides to create space between the links.
- **Anchor Tags Styling:** The anchor tags (``<a>``) inside the list items are styled with:
- **White Text: The color:** white makes the link text white.
- **No Underline:** The text-decoration: none removes the default underline from the links.
- **Bold Font:** The font-weight: bold makes the text bold.
- **Padding:** The padding: 10px 20px adds space inside each link to make them more clickable.
- **Rounded Corners:** The border-radius: 5px gives the links rounded corners.
- **Hover Effect:** When the user hovers over a link, the background color changes to burlywood, giving a visual cue that the link is interactive.
![image](https://github.com/user-attachments/assets/ea871c4b-ffa1-4038-acc9-9f7134c64415)

## Main Content Styling
- **Text Alignment:** The text-align: center centers the content inside the main section.
- **Padding:** The padding: 20px adds space inside the main content to make it less cramped.
- **Margin Top:** The margin-top: 80px compensates for the height of the fixed navigation bar, ensuring the content starts below the navbar.
![image](https://github.com/user-attachments/assets/a9fa599a-3fd0-4ebe-b0fc-6c5d61951c4e)

# [DocumentNavBar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Styling-Css/Module%206%20-%20(Components%20Html)/NavegationBar-Number_20/navbar.css)

# Fixed SideBar CSS Explanation
This CSS is used to style a fixed navigation bar (``nav``) and the main content of the page (``main``). The layout ensures that the navigation bar stays at the top of the page when the user scrolls, and the content below the navigation is adjusted accordingly to prevent overlap. This CSS is designed to create a simple, responsive layout with a fixed sidebar and main content next to it. Below, I explain the key parts of the code.

## Margin and Padding Reset
This block of code resets margins and padding for all elements on the page and sets the box-sizing property to border-box. This ensures that any border or padding is included in the total dimensions of the element, preventing layout issues.
![image](https://github.com/user-attachments/assets/069bc1a0-cc05-49a0-b3aa-f0e9b0af0d29)

## Body Style
Here, the body of the page is styled with the Arial font, and the background color is set to #f4f4f4, providing a clean and modern design.
![image](https://github.com/user-attachments/assets/27a299ee-e00f-409a-a9aa-7b65290119c2)

## Sidebar Style
The sidebar is fixed to the left side of the screen (position: fixed) and occupies the full height of the window (height: 100vh). Its initial width is set to 100px, and it has a smooth transition when its width changes.
![image](https://github.com/user-attachments/assets/beb0fedb-7c39-422a-9f8d-c8e4c09c444b)

## Hover Effect
When the user hovers over the sidebar, it expands to 250px, revealing more navigation options.
![image](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

## Sidebar Menu Style
The sidebar menu removes the default list bullets and ensures the items occupy the full width of the sidebar.
![image](https://github.com/user-attachments/assets/4992f335-9222-495b-8b12-04ad75973f9a)

## Menu Links
The menu links are styled to occupy the full width of their container (display: block), with padding adjusted for better interaction. The background color and text style are configured to make the items visible and attractive. The borders are rounded, and a smooth transition is applied to the background color when hovered over.
![image](https://github.com/user-attachments/assets/95390e81-2b01-42a8-8f51-fd535fb630c5)

## Hover Effect on Links
When the user hovers over the links, the background color changes to burlywood, providing a visual effect when interacting.
![image](https://github.com/user-attachments/assets/be47d595-b753-4592-8474-25af6bb47d31)

## Main Content Style
The main content (main) starts with a margin-left of 100px to make space for the sidebar. A smooth transition is applied to adjust this space when the sidebar is expanded.
![image](https://github.com/user-attachments/assets/fc6de4a6-a2dc-43d5-b8fd-22e741c0221d)

## Content Adjustment When Sidebar Expands
When the sidebar is expanded (on hover), the main content adjusts its left margin to 250px, creating a fluid layout.
![image](https://github.com/user-attachments/assets/584d5cb4-d073-4bd8-aa0c-7653da74a906)

## Content Inside the Main Area
The main content area (.content) is centered and limited to a maximum width of 1200px. It has a white background, rounded corners, and a subtle shadow to make it stand out from the rest of the page.
![image](https://github.com/user-attachments/assets/9bed4fc3-fbad-4896-a076-80f45ca039d2)

## Title Style
Titles inside the content area (h1, h2) have a dark color for good contrast and readability.
![image](https://github.com/user-attachments/assets/9bed4fc3-fbad-4896-a076-80f45ca039d2)

## Paragraph Style
Paragraphs have a softer color and increased line spacing (line-height: 1.6), making the text easier to read. There is also bottom margin between paragraphs.
![image](https://github.com/user-attachments/assets/ef5160d3-38b5-45b2-b067-113556a24576)

## Image Style
Images inside the content area are resized to occupy 100% of the available width, but with a maximum width of 600px. They also have rounded corners and top margin.
![image](https://github.com/user-attachments/assets/b52b7a49-136a-4136-b635-b0da7952a6ff)

# [DocumentSideBar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Styling-Css/Module%206%20-%20(Components%20Html)/NavegationBar-Number_20/sidebar.css)
