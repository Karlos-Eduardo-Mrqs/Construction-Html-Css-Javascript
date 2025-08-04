# Note 👁️

- [Read the previous chapter](../Arrays-Number_12/Maps.md)

---

## 🗓️ JavaScript Date Methods

JavaScript provides several methods for manipulating and retrieving date and time information. These methods allow you to set and get different components of a Date object, such as day, month, year, hours, minutes, seconds, and milliseconds.

---

### ❓ When do I use the date?

JavaScript doesn't have a specific data type for dates. However, you can use the Date object and its methods to work with dates and times in your applications.

> ℹ️ The Date object doesn't have any direct properties, only methods for setting, retrieving, and manipulating values.

---

## 🆕 `new Date()`

`new Date()` in JavaScript is a **constructor** that creates a new date object based on the **number of milliseconds since January 1, 1970 00:00:00 UTC** (called the **Unix Epoch**).

### ✅ Examples of using `new Date()`

#### ➤ No arguments

Creates a `Date` object with the **current date and time**:

![image](https://github.com/user-attachments/assets/73e0aca8-1ed2-4ce8-b5fe-fcebd78461c5)

---

#### ➤ With a date string

Accepts a string like `"YYYY-MM-DD"`:

![image](https://github.com/user-attachments/assets/2a40bbec-bf74-4950-82b1-387948155971)

---

#### ➤ With numeric parameters

```javascript
new Date(year, month, day, hour, minutes, seconds, milliseconds)
```

> 🗓️ **Attention:** Months range from `0` (January) to `11` (December).

![image](https://github.com/user-attachments/assets/beb8e140-2d20-4949-a1a3-1543eec8cae1)

---

#### ➤ With timestamp (milliseconds)

Creates a date based on the number of **milliseconds since 01/01/1970**:

![image](https://github.com/user-attachments/assets/52982617-8868-4834-a972-e06b645344e5)

---

## 🔧 Methods for Defining Components

| Method | Description |
|----------------------|---------------------------------------------|
| `setDate(day)` | Sets the **day of the month** (1–31) |
| `setFullYear(y,m,d)` | Sets the **year**, **month**, and **day** |
| `setHours(hour)` | Sets the **hour** (0–23) |
| `setMilliseconds(ms)` | Sets the **milliseconds** (0–999) |
| `setMinutes(min)` | Sets the **minutes** (0–59) |
| `setMonth(month)` | Sets the **month** (0–11) |
| `setSeconds(sec)` | Sets the **seconds** (0–59) |
| `setTime(ms)` | Sets the time in **milliseconds since 1970** |

---

## 🔍 Methods for Getting Components

| Method | Description |
|-------------------------|-------------------------------------------------|
| `getFullYear()` | Returns the **full year** (e.g., 2024) |
| `getMonth()` | Returns the **month** (0–11) |
| `getDate()` | Returns the **day of the month** (1–31) |
| `getDay()` | Returns the **day of the week** (0–6, Sunday = 0) |
| `getHours()` | Returns the **hours** (0–23) |
| `getMinutes()` | Returns the **minutes** (0–59) |
| `getSeconds()` | Returns the **seconds** (0–59) |
| `getMilliseconds()` | Returns the **milliseconds** (0–999) |
| `getTime()` | Returns the **timestamp** in milliseconds |

---

## 📆 Date Formats

| Format | Example | Description | |------------------------|----------------------------------|-------------------------------------------------|
| **ISO** | `"2015-03-25"` | International Standard (`YYYY-MM-DD`) |
| **Short (US)** | `"03/25/2015"` | American Standard |
| **Long (Brazil)** | `"March 25, 2015"` | Regional Standard |

---

## 🧪 Date Conversion Methods

| Method | Description |
|-------------------------|--------------------------------------------------------------------------|
| `toISOString()` | Returns date in **ISO 8601** format → `YYYY-MM-DDTHH:mm:ss.sssZ` |
| `toUTCString()` | Converts to **UTC format** → `"Wed, 14 Jun 2017 07:00:00 GMT"` |
| `toLocaleDateString()` | Returns **only the date** formatted according to the language/region |
| `toLocaleTimeString()` | Returns **only the time** formatted according to the language/region |
| `toLocaleString()` | Returns the formatted local **date and time** |

---

> ✅ These methods and formats are essential for accurate and standardized date and time handling in modern JavaScript applications.

---

## Next Chapter

- [Continued in the next chapter](../Objects-Number_14/Manually_Objects.md)
