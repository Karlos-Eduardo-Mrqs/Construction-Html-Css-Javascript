# JavaScript Date Methods
JavaScript provides various methods to manipulate and retrieve date and time information. These methods allow you to set and get different components of a date object, such as the day, month, year, hours, minutes, seconds, and milliseconds.

# When I Use Date?
JavaScript does not have date type data. However, you can use the Date object and its methods to work with data and times in your applications. The Date object has a large number of methods for setting, retrieving, and manipulating data. He doesn't have any property.

# New Date()
new Date() in JavaScript is a constructor that creates a new data object. This object represents a point in time and is based on the number of milliseconds since January 1, 1970 00:00:00 UTC (the "Unix Epoch").

## Uses and examples of new Date()
### No Arguments:
When new Date() is called without arguments, it creates a data object as the current data and time.
![image](https://github.com/user-attachments/assets/73e0aca8-1ed2-4ce8-b5fe-fcebd78461c5)

### With a Data String:
Accepts a string of data in the format recognized by the Date Time String Format standard, such as "YYYY-MM-DD".

![image](https://github.com/user-attachments/assets/2a40bbec-bf74-4950-82b1-387948155971)

### With Numeric Parameters (Year, Month, Day, Hours, Minutes, Seconds, Milliseconds):
Months start from 0 (January is 0, February is 1, etc.), so the number 7 represents August.
![image](https://github.com/user-attachments/assets/beb8e140-2d20-4949-a1a3-1543eec8cae1)

### With the Timestamp in Milliseconds:
Creates a data based on the number of milliseconds since the "Unix Epoch".
![image](https://github.com/user-attachments/assets/52982617-8868-4834-a972-e06b645344e5)

## Set Methods
- **setDate(day):** Sets the day of the month (1-31).
- **setFullYear(year, month, day):** Sets the full year, and optionally the month and day.
- **setHours(hour):** Sets the hour of the day (0-23).
- **setMilliseconds(ms):** Sets the milliseconds (0-999).
- **setMinutes(minute):** Sets the minutes (0-59).
- **setMonth(month):** Sets the month (0-11).
- **setSeconds(second):** Sets the seconds (0-59).
- **setTime(milliseconds):** Sets the time in milliseconds since January 1, 1970.

## Get Methods
- **getFullYear():** Retrieves the full year (e.g., 2024).
- **getMonth():** Retrieves the month (0-11).
- **getDate():** Retrieves the day of the month (1-31).
- **getDay():** Retrieves the weekday (0-6; Sunday is 0).
- **getHours():** Retrieves the hour (0-23).
- **getMinutes():** Retrieves the minutes (0-59).
- **getSeconds():** Retrieves the seconds (0-59).
- **getMilliseconds():** Retrieves the milliseconds (0-999).
- **getTime():** Retrieves the time in milliseconds since January 1, 1970.

## Date Formats
- **ISO Date:** "2015-03-25" (International standard format).
- **Short Date:** "03/25/2015" (U.S. format).
- **Long Date:** "Mar 25 2015" or "25 Mar 2015" (varies by region).
- **toISOString():** Returns the date in ISO 8601 format (YYYY-MM-DDTHH:mm.sssZ). It is useful for working with APIs that expect dates in this format.
- **toUTCString():** Converts the date to a string in UTC format (ex: "Wed, 14 Jun 2017 07:00:00 GMT").
- **toLocaleDateString():** Returns the date part (day, month, year) as a string, formatted according to the specified language and regional conventions.
- **toLocaleTimeString():** Returns the time portion (hours, minutes, seconds) as a string, formatted according to the specified language and regional conventions.
- **toLocaleString():** Returns the date and time as a string, formatted according to the specified language and regional conventions.

These methods and formats enable precise control and manipulation of dates and times in JavaScript applications.
# [Examples are located in script documment](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Dates-Number_13/script.js)
