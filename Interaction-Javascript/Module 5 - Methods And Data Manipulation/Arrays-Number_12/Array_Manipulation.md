# Javascript Array Methods
The Array object, as with arrays in other programming languages, allows you to store a collection of multiple items under a single variable name and has members to perform common array operations.

## Access Methods and Information
1. **Array.length** Returns the number of elements in the array.
![image](https://github.com/user-attachments/assets/61ed6110-de81-4764-8a9d-ca60749c7381)

2. **Array.at(index)** Return the element to the specified position.
![image](https://github.com/user-attachments/assets/d13eb41e-cb94-41e7-abf6-1ce91ab030e0)

3. **Array.toString()** It converts the array to a string, with elements separated by commas.
![image](https://github.com/user-attachments/assets/a31f9ff2-a3a9-4804-b82b-9539d2da54f9)

4. **Array.join(separator)** Join all array elements into a string, using a specified separator.
![image](https://github.com/user-attachments/assets/8e1b6c24-9660-4a8c-9c1e-4fe55f90c28c)

## Creation and Modification Methods
1. **Array.push(element1, element2, ...)** Adds one or more elements to the end of the array.
![image](https://github.com/user-attachments/assets/1261080c-1658-4943-bd1b-91760c6531f9)

2. **Array.unshift(element1, element2, ...)** I added one or more elements to the beginning of the array.
![image](https://github.com/user-attachments/assets/d8f6d339-19c6-46f6-8983-09b24fa634c2)

3. **Array.splice(start, deleteCount, item1, item2, ...)** Adds, removes, or replaces elements within the array:
- start: index at which the modification begins;
- deleteCount: Number of elements to be removed from the start index;
- item1, item2, ...: elements that will be added to the array starting at the start index;
![image](https://github.com/user-attachments/assets/e3a5d122-fb48-46b6-b3d9-ab6c4ccdea1c)

4. **Array.concat(array2, array3, ...)** Joins two or more arrays and returns a new array.
![image](https://github.com/user-attachments/assets/b786d3aa-32be-4aa1-b7cc-80c9a8c03778)

### Logic of Array's
![image](https://github.com/user-attachments/assets/7b535e5e-d48b-4448-8ddc-64aed2ffd782)

## Copy and Transformation Methods
1. **Array.slice(start, end)** It returns a shallow copy of a part of the array without modifying the original.
![image](https://github.com/user-attachments/assets/74ffb34a-5936-401e-b566-6c0c5577707c)

2. **Array.flat(depth)** Find an array of arrays in a flat array.
![image](https://github.com/user-attachments/assets/5f7937e5-c14d-4c5a-9fdd-06ecc884558e)

3. **Array.copyWithin(destination, start, end)** Copies a part of the array to another location within the same array:
- target: the index at which the copy of the elements will begin to be inserted. If the target is negative, it counts from the end of the array;
- start (optional): index of where the copy should start. If the start is negative, it counts from the end. The default value is 0;
- end (optional): index where the copy should end (not inclusive). If the end is negative, it counts from the end. The default value is the size of the array;
![image](https://github.com/user-attachments/assets/39af0e6b-c3b6-46f5-b999-ce8ce1625451)

## Exclusion Methods
1. **Array.delete(index)** Remove an element from the array, leaving the index undefined (not recommended).
![image](https://github.com/user-attachments/assets/7a81d27b-eb7e-4daf-999a-2cd45015bb00)

2. **Array.pop()** Remove the last element from the array.
![image](https://github.com/user-attachments/assets/fcb9bff1-ce35-4f38-85ab-8ac7dd3f5b06)

3. **Array.shift()** Remove the first element from the array.
![image](https://github.com/user-attachments/assets/963c16a3-b1b1-472e-b6b0-003550b361a5)

# [Continue in Part 2 !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Arrays-Number_12/Array_Search.md)
