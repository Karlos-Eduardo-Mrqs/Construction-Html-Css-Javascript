# Note 👁️

- 📌 [Read Issue \_07 before continuing](../InternAndExtern-Number_07/InternExtern.md)

---

## 🔒 Containment

In this chapter, we'll learn how to handle content containment.

### 📏 Box Size – `box-sizing`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4192dd64-b140-49ca-9707-446cc1db1741)

We'll use this example page, with two boxes:

- `.box` (blue) with `box-sizing: border-box`
- `.box2` (white) with `box-sizing: content-box`

Both with:

- `150px` height and width
- `20px` padding
- `30px` margin`

### 🔄 Difference between values

- 🟦 `border-box`: the total size **includes** border and padding. (Smallest interior)
- ◻️ `content-box`: The total size **adds** the content with border and padding. (Largest exterior)
- ⚙️ `initial` and `unset`: Default/resettable values.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a85ababc-5744-4756-9b43-700d2ba1ac67)

---

## 📉 Limit Control – `overflow`

We can control how content that **exceeds** the element's bounds will be handled:

| Value | Effect |
| --------- | ------------------------------------------------------------------------ |
| `auto` | Adds automatic scroll bar (vertical/horizontal if needed) |
| `hidden` | Hides overflow content |
| `scroll` | Adds fixed scroll bars (always visible) |
| `visible` | Overflow content is visible |

### 🎨 Visual Example

We will use 4 dividers:

1. 🔵 `box1` = `overflow: auto`
2. ⚪ `box2` = `overflow: hidden`
3. 🔴 `box3` = `overflow: scroll`
4. 🟢 `box4` = `overflow: visible`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

### ↔️ Specific Directions

- `overflow-x`: horizontal
- `overflow-y`: vertical

Example:

```css
overflow-x: scroll;
overflow-y: hidden;
```

---

## 🧾 White Space – `white-space`

Controls how spaces and line breaks are handled in text content:

| Value | Effect |
| ---------- | ------------------------------------------------- |
| `normal` | Automatic spaces and line breaks |
| `nowrap` | Text does not wrap (stays on a single line) |
| `wrap` | Text wraps normally when it reaches the limit |
| `pre-wrap` | Keeps spaces and automatically wraps lines |

> 📦 Application in the same boxes:

- 🔵 Blue = `wrap`
- ⚪ White = `pre-wrap`
- 🔴 Red = `nowrap`
- 🟢 Green = `normal`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/127f2b3f-dc54-491a-b6ae-aa41863478c1)

---

## ✅ Next Content

➡️ [Continued in Module 4 – Styles_Fonts](../../Module%204%20-%20(Styling%20Fonts)/Types-Number_09/Types.md)
