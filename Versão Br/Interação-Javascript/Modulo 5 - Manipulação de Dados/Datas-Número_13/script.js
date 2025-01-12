const Data = new Date("2024-05-28");
const Num_Data = new Date(2019,5,18,23,45,0,321);
const Date_Time = new Date(0);
console.log(Date_Time);
// Create a new date object for demonstration
const now = new Date();

// 1. getFullYear(): Retrieves the full year (e.g., 2024)
console.log(now.getFullYear()); // Example output: 2023

// 2. getMonth(): Retrieves the month (0-11)
console.log(now.getMonth()); // Example output: 11 (December)

// 3. getDate(): Retrieves the day of the month (1-31)
console.log(now.getDate()); // Example output: 31

// 4. getDay(): Retrieves the weekday (0-6; Sunday is 0)
console.log(now.getDay()); // Example output: 0 (Sunday)

// 5. getHours(): Retrieves the hour (0-23)
console.log(now.getHours()); // Example output: 13

// 6. getMinutes(): Retrieves the minutes (0-59)
console.log(now.getMinutes()); // Example output: 45

// 7. getSeconds(): Retrieves the seconds (0-59)
console.log(now.getSeconds()); // Example output: 30

// 8. getMilliseconds(): Retrieves the milliseconds (0-999)
console.log(now.getMilliseconds()); // Example output: 250

// 9. getTime(): Retrieves the time in milliseconds since January 1, 1970
console.log(now.getTime()); // Example output: 1699999999999 (milliseconds)

const exampleDate = new Date("2024-03-25T12:00:00");

// 1. ISO Date: "2015-03-25" (International standard format)
console.log(exampleDate.toISOString().split('T')[0]); // Output: "2024-03-25"

// 2. Short Date: "03/25/2024" (U.S. format)
const shortDate = exampleDate.toLocaleDateString("en-US");
console.log(shortDate); // Output: "3/25/2024"

// 3. Long Date: "Mar 25 2024" or "25 Mar 2024" (varies by region)
const longDateUS = exampleDate.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' });
console.log(longDateUS); // Output: "Mar 25, 2024"

const longDateUK = exampleDate.toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' });
console.log(longDateUK); // Output: "25 Mar 2024"

// Create a new date object for demonstration
const date = new Date();

// 1. setDate(day): Sets the day of the month (1-31)
date.setDate(15);
console.log(date); // Example output: "Sat Jan 15 2022 12:34:56 GMT+0000 (UTC)"

// 2. setFullYear(year, month, day): Sets the full year, optionally month and day
date.setFullYear(2023, 11, 31); // Sets to December 31, 2023
console.log(date); // Example output: "Sun Dec 31 2023 12:34:56 GMT+0000 (UTC)"

// 3. setHours(hour): Sets the hour of the day (0-23)
date.setHours(20); // Sets time to 8 PM
console.log(date); // Example output: "Sun Dec 31 2023 20:34:56 GMT+0000 (UTC)"

// 4. setMilliseconds(ms): Sets the milliseconds (0-999)
date.setMilliseconds(500);
console.log(date); // Example output: "Sun Dec 31 2023 20:34:56.500 GMT+0000 (UTC)"

// 5. setMinutes(minute): Sets the minutes (0-59)
date.setMinutes(45);
console.log(date); // Example output: "Sun Dec 31 2023 20:45:56.500 GMT+0000 (UTC)"

// 6. setMonth(month): Sets the month (0-11)
date.setMonth(5); // Sets month to June (months are 0-based)
console.log(date); // Example output: "Thu Jun 31 2023 20:45:56.500 GMT+0000 (UTC)"

// 7. setSeconds(second): Sets the seconds (0-59)
date.setSeconds(30);
console.log(date); // Example output: "Thu Jun 31 2023 20:45:30.500 GMT+0000 (UTC)"

// 8. setTime(milliseconds): Sets the time in milliseconds since January 1, 1970
date.setTime(1609459200000); // Sets date to January 1, 2021
console.log(date); // Example output: "Fri Jan 01 2021 00:00:00 GMT+0000 (UTC)"