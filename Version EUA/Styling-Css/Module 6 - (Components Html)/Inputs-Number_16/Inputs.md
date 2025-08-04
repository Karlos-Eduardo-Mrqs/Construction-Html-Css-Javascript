# Note 👁️

- [Read Issue 15 before continuing](../ListsAndAnchors-Number_15/Lists.md)

---

## Styling Entries

In this chapter, we'll cover styling entries, called CSS entries.

## Example Page

![Example Page](https://github.com/user-attachments/assets/fdf6458e-53e4-4133-bb3d-7caf03324232)

---

## Initial Adjustments

Let's improve the page by changing the behavior of the blocked element on the screen, setting its width to 100% and the font color to black:

![Width 100% and color black](https://github.com/user-attachments/assets/a554bc79-1a1f-4a6d-9212-b7eeec9da236)

---

## Alignment and Spacing

We noticed that the options are misaligned with the message and name fields.

We apply a 10px padding and adjust the box size to the box's edge:

![Padding applied](https://github.com/user-attachments/assets/a6cb2348-6fcf-4687-8a54-f444a747c7dd)

---

## Adjusting the text area height

Let's increase the text area height to 200px:

![Larger text area](https://github.com/user-attachments/assets/4bbd78a9-232f-44c0-aa76-aa2a56d333e3)

---

## `resize` property

CSS has a `resize` attribute that controls how the text area can be resized.

We can enable resizing:

- To both sides (`both`) — default;
- Only horizontally (`horizontal`);
- Only vertically (`vertical`);
- Or block it completely (`none`).

---

## Styling the button

Let's focus on the button now:

- Remove the border;
- Apply a green background, as it's a submit button.

![Button with green background](https://github.com/user-attachments/assets/c0f24730-a4b3-4d80-ac68-f75222a9e9b4)

---

## Adjustments to the button

- Increase the font to 16px;
- Apply padding of 10px (top and bottom) and 60px (sides);
- Add rounded edges with a 30px radius.

![Button with padding and rounded border](https://github.com/user-attachments/assets/b313a339-aad9-436a-8b40-68f02b7b9a13)

---

## Centering the button

Finally, we center the button with `text-align: center`:

![Centered button](https://github.com/user-attachments/assets/fc8b3cf3-2f0b-4c79-a59f-03af35e5ce40)

---

## Bonus: Styling the button's placeholder and hover

- We can style the placeholder using the `input::placeholder` pseudocode.
- We can also change the button's style when it has focus or when the mouse hovers (`button:hover`), changing the color and cursor.

![Example placeholder and hover](https://github.com/user-attachments/assets/657a4b20-6b96-4f73-967d-bb2d1ccd7645)

- [**CSS Final**](../Inputs-Number_16/style.css)

---

## ✅ Next Chapter

- ▶️ [Continues on Number_17](../Tables-Number_17/Tables.md)
