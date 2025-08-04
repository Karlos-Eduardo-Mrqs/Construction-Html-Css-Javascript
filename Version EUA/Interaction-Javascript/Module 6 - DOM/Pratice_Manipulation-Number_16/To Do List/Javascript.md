# Note 👁️

- [Read the build first](HtmlEoCss.md)

---

## JavaScript Code Explanation

This code creates and manipulates a dynamic list, where the user can add or remove items. It also provides visual feedback in a message area and uses a pop-up window to confirm the deletion of all items in the list.

## Rules

The rules will be as follows:

1. There will be a common list for storing or inserting items;
2. The list items will be different, meaning there will be no duplicate items;
3. Clicking the add button will select the message and item within the list;
4. Clicking the delete button will display a pop-up;
5. The message will be informative for each user action.

With that in mind, let's get started!

### Rule Number 1

```javascript
    let List = [];
    let message = document.querySelector(".message");
    message.style.display = "none";
```

Here, a `List` array is initialized to store the list items. The `message` variable selects an HTML element with the `.message` class, which will be used to display temporary messages. Initially, the message is hidden with `message.style.display = "none"`.

### Rules Number 2, #3, and #5

```javascript
function Add() {
    let name = document.getElementById("name");
    let ValidName = name.value !== "";
    let pair = document.createElement("p");
    let Item = document.createElement("li");
    let List_Box = document.querySelector("#list");
}
```

This function will be executed when the add button is clicked. Its steps are as follows:

1. The name entered by the user is obtained through the `name` input field.
2. Checks if the name is not empty (`ValidName`).
3. HTML elements `p` and `li` are dynamically created to display messages and add items to the list, respectively.

```javascript
    if (ValidName) {
        let ItemEqual = List.includes(name.value);
        if (!ItemEqual) {
            Item.innerText = name.value;
            List.push(name.value);
            List_Box.appendChild(Item);
            pair.innerText = `The name is valid!`;
        } else {
            pair.innerText = `The name already exists.`;
        }
    } else {
        pair.innerText = `The name is invalid!`;
    }
```

Here, we check whether the name already exists in the list using `List.includes` (making the list check if it already has that name). If the name is unique, it is added to the `List` array and to the `ul` element of the list. Otherwise, an appropriate message is displayed.

```javascript
    name.value = "";
    message.appendChild(pair);
    message.style.display = "block";
    setTimeout(() => {
        if (message.contains(pair)) {
        message.removeChild(pair);
        message.style.display = "none";
        }
    }, 2000);
```

After adding the item or displaying the error message, the text field is cleared. The temporary message is displayed for 2 seconds and then disappears. This is done with the `setTimeout` function (making the message appear for a short period).

### Rule Number 4

```javascript
function Delete() {
    let message = document.querySelector(".message");
    let pair = document.createElement("p");
    let pop = document.querySelector(".popup");
    let backPop = document.querySelector("#popup-back");
    let YesDel = document.querySelector(".popup button[value='Yes']");
    let NoDel = document.querySelector(".popup button[value='No']");
}
```

In the `Delete()` function, elements of the confirmation interface are selected, such as the pop-up and the "Yes" and "No" buttons. The pop-up is initially displayed for the user to decide whether to remove all items from the list.

```javascript
pop.style.display = "block"; 
backPop.style.display = "block"; 

SimDel.onclick = () => { 
    let List_Box = document.querySelector("#list"); 
    let List_Items = document.getElementsByTagName("li"); 

    if (List_Items.length > 0) { 
        let Array_Items = Array.from(List_Items); 
        
        Array_Items.forEach((Item) => { 
            List_Box.removeChild(Item); 
        }); 
        List = []; 
        pair.innerText = "All items have been removed!"; 
        message.appendChild(pair); 
        
        setTimeout(() => { 
            if (message.contains(pair)) { 
                message.removeChild(pair); 
            } 
        }, 2000);
        
            pop.style.display = "none";
            backPop.style.display = "none";
        } else {
            pop.style.display = "none";
            backPop.style.display = "none";
        }
};
```

If the user confirms the removal by clicking "Yes," all items in the list are removed both visually (using `removeChild()`) and from the `List` array. A success message is displayed for 2 seconds. Then, the pop-up is hidden again. If the user clicks "No," the pop-up simply closes without removing the items.

```javascript
    NaoDel.onclick = () => {
        pop.style.display = "none";
        backPop.style.display = "none";
    };
```
