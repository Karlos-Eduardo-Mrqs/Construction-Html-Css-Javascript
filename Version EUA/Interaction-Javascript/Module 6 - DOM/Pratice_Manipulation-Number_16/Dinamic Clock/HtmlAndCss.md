# Practice with DOM (Dinamic Clock)
Programmers, this is an interactive project, using only html, css and javascript. To organize the explanation, part one structure with HTML, part two styling with CSS and finally JavaScript for interaction and adjustments. Okay, let's rock, baby!

# HTML Structure 

## .fundo
The .fundo class serves as the main container of the dynamic clock project. It wraps the entire structure and ensures proper alignment and styling of its child elements. With the help of CSS, it is styled to occupy the full viewport and center the clock display, creating an aesthetically pleasing layout. 

## .img-icone
With the img tag being classified with img-icon. It will be added as if it were an icon, depending on the time within the system and helping of Css.

## .relogio, .data-completa, .hora
With the div tag classified as clock. The full date 'January 19, 2025' will be included there along with the time 'HH:MM:SS', this being assigned by js and styled with css.

# [HTML Document]()

# Styling the Dynamic Clock: CSS Documentation  

Below is the detailed explanation of the CSS used for styling the **Dynamic Clock** project. Each section covers specific styling applied to elements for a responsive and visually appealing design.  
---

### 1. **Resetting Default Margins and Padding**  
- Resets all default margins and padding for consistent styling across browsers.  
- Enables the use of `box-sizing: border-box` to include padding and borders in element dimensions.  ---

### 2. **Styling the Body**  
- Uses a clean and modern font for readability.  
- Centers the content vertically and horizontally using Flexbox.  
- Sets a light gray background (`#f2f2f2`) to contrast with the content.  
- Makes the page height 100% of the viewport.
![image](https://github.com/user-attachments/assets/fb6fd30e-230e-4f42-8eb4-8eda9c1937ef)

### 3. **Main Container: `.fundo`**  
- Centers the text and adds padding for spacing.  
- Sets a white background with rounded corners (`border-radius: 15px`).  
- Applies a subtle shadow for a 3D effect.  
- Limits the width to `500px` for responsiveness.  
- Adds a smooth background color transition for dynamic changes.  ---
![image](https://github.com/user-attachments/assets/5d379252-caf4-4f54-8c77-d23d0a895c27)

### 4. **Clock Icon: `.img-icone`**  
- Creates a circular clock icon with `border-radius: 50%`.  
- Ensures the image fits the container using `object-fit: cover`.  
- Adds a light shadow to enhance the design.  ---
![image](https://github.com/user-attachments/assets/a4fd6362-ee8f-4333-a8ca-c93cec2c2729)

### 5. **Clock Display: `.relogio`**  
- Displays the clock with bold text and `letter-spacing` for clarity.  
- Positions it below the clock icon with a `20px` margin.  ---
![image](https://github.com/user-attachments/assets/a4fd6362-ee8f-4333-a8ca-c93cec2c2729)

### 6. **Date Display: `.data-completa`**  
- Uses a smaller font size to differentiate the date from the time.  
- Sets a lighter gray color (`#777`) for a subtle appearance.  ---
![image](https://github.com/user-attachments/assets/a4fd6362-ee8f-4333-a8ca-c93cec2c2729)

### 7. **Time Display: `.hora`**  
- Increases the font size for prominence.  
- Uses bold styling for better visibility.  ---
![image](https://github.com/user-attachments/assets/a4fd6362-ee8f-4333-a8ca-c93cec2c2729)

### 8. **Dynamic Background Colors**  
- Changes the `.fundo` background dynamically based on the time of day:  
  - **Morning:** Soft peach color (`#ffecd2`).  
  - **Afternoon:** Warm orange color (`#ffba08`).  
  - **Evening:** Deep purple color (`#5617ae`).  
  - **Night:** Dark blue-gray (`#2c3e50`).  ---
![image](https://github.com/user-attachments/assets/a4fd6362-ee8f-4333-a8ca-c93cec2c2729)

### 9. **Footer Styling**  
- Adds the developer’s name in a smaller font below the clock.  
- Positions it with a `20px` margin.  ---
![image](https://github.com/user-attachments/assets/7e9fe409-04b8-4bf9-a020-350e85f076bf)

### 10. **Dynamic Font Colors**  
- Adjusts text color dynamically for better visibility depending on the background:  
- **Daytime:** Dark text (`#333`).  
- **Nighttime:** Light text (`#fff`).  
![image](https://github.com/user-attachments/assets/5a872b79-1811-40b8-91ce-5dc0a6dcf95f)

### 11. **Responsive Design**  

#### Medium Screens (768px and below)  
- Reduces element sizes to fit medium-sized screens.  
![image](https://github.com/user-attachments/assets/7c2df899-b92f-4860-8310-5b177d007340)

#### Small Screens (480px and below)  
- Further reduces element sizes for small screens like mobile devices.  
This CSS ensures that the **Dynamic Clock** is both visually appealing and responsive across all devices!
![image](https://github.com/user-attachments/assets/888ab388-b2e7-4ad3-845d-7207a267f685)

# [Part#2]()