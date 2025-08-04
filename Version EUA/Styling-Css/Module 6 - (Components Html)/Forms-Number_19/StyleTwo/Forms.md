# Note 👁️

- [Read the 1st style first](../1ºEstilo/Forms.md)

---

## 📄 Styling Forms (Part 2)

Okay, programmers, let's get back to styling forms.

## 🖼️ Example Page

![image](https://github.com/user-attachments/assets/845efcad-d205-4eea-b13b-d986fcadcf44)

This page is a creation form and has an image of the differences from part one (where they are only common).

---

## 🧱 HTML Structure

Moving to the content structure, there is a parallelogram classified as an empty divider for the bottom. Next, we have two dividers: the first class is `.container` and the second is `.form-box`, which contains the form.

Inside the form, there is an input divider called `.input-box`, with a second-level title, and three group sections:

- `.group-1` for first and last names
- `.group-2` for email
- `.group-3` for password and password retry

We finish with another button divider, including the Terms of Use and Account Creation links.

---

## 🎨 Styling with `*`

Using the `*` selector, we can style all elements, zeroing margins and padding. The box-sizing will be `border-box` and the main font will be `Georgia`.

![image](https://github.com/user-attachments/assets/5c381485-c23d-4612-8fa2-cc046e945ccb)

---

## 🧍 Body Styling

The body will be styled with a flex display, centered horizontally and vertically, and with a minimum height of 100vh.

![image](https://github.com/user-attachments/assets/4d587f53-5c97-44de-9f14-3f3a1e3ff899)

---

## 🟩 `.parallelogram` style

- Background color: `rgb(3, 158, 3)`
- Absolute position
- Width: 1000px
- Height: 600px
- Max-width: `70vw`
- Roundness: 10px
- Shadow: `5px 5px 15px`
- Transform: `skew(-3.5deg)`
- `z-index: -1` for Overlay

![image](https://github.com/user-attachments/assets/1577156c-babc-4e87-8725-9fc39f5cfc01)

---

## 🧊 `.container` style

- White background
- Padding: `30px` (vertical) and `50px` (horizontal)
- Rounding: 10px
- Box shadow equal to parallelogram
- Max width: `100vw`

![image](https://github.com/user-attachments/assets/96822058-39e3-4339-b32c-bb9816e91628)

---

## 🧾 `.form-box` style

- Relative position
- Adjustable width and height content (`fit-content`)
- Rounding: 10px

### h2 (title)

- Center alignment
- Margin: `40px` (vertical) and `10px` (horizontal)

![image](https://github.com/user-attachments/assets/d8fba187-4677-4a79-895b-e4a7c214372b)

---

## 📦 Style `.group-1`, `.group-2`, `.group-3`

- `.group-1`: display flex
- `.group-2`: padding `20px` on all sides
- `.group-3`: top padding `20px` and also display flex

![image](https://github.com/user-attachments/assets/ffb4e86d-4087-47c0-b8ca-8534a6663ad5)

---

## 🔤 `.inputs-box` style

- Margins: `5px` (top/bottom) and `10px` (left/right)
- Width: `80%`
- Height: `30px`
- No borders
- Font: size `18px`, weight `700`
- Placeholder in uppercase letters

![image](https://github.com/user-attachments/assets/e9ef1f00-f65a-468f-a380-f3441af848c8)

---

## 🔗 `.button a` style

- Display block
- Top margin `20px`
- Font `20px`
- Width `100%`
- Height `35px`
- Side padding `10px`
- No text decoration
- Color black
- Margin-bottom `10px`
- Text-align center
- Rounding `10px`
- Hover effect:
- Text color white
- Background dark gray
- Transition `0.5s`

![image](https://github.com/user-attachments/assets/d150adfd-3d98-40f6-acfd-0fd527620c05)

---

## 🔘 `.button button` style

- Width `100%`
- Height `40px`
- No borders
- Rounding `10px`
- Font: `20px`
- Margin-top `30px`
- Cursor pointer
- Hover effect like the link

![image](https://github.com/user-attachments/assets/cff7da9a-f3e2-4d2b-8105-7ecdf653fd57)

---

## 🖼️ Styling the image

- Height: `450px`
- Width: `350px`
- Automatic margin on top/bottom and `40px` on the sides
- Rounding `10px`
- Shadow like the parallelogram

![image](https://github.com/user-attachments/assets/b0dd3a48-11d3-4452-b367-2ba615485e7c)

---

## ✅ Next Chapter

- [Continue to Issue 20](../../NavegationBar-Number_20/NavBar.md)

- [💡BONUS – Unmentioned Attributes](./Obs.md)
