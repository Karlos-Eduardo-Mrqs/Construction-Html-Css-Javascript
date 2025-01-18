
# [Return #Part1](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/HtmlAndCss.md)
# Explanation of JavaScript Code
This code deals with creating and manipulating a dynamic list, where the user can add or remove items. It also provides visual feedback in a message area and uses a pop-up window to confirm deletion of all list items.

## Rules 
The rules will be as follows:
1. There will be a common list to store or for the user to enter;
2. The items on the list will be different, that is, no items will be the same;
3. When clicking on the add button, the message and item will be selected within the list;
4. When you click on the delete button, the popup will appear;
5. The message will be informative for each user action;

Taking that into account, let's get started!

# Rule Number #1
``` 
let List = [];
let mensagem = document.querySelector(".message");
mensagem.style.display = "none";
```
Here, a List array is initialized to store the list items. The message variable selects an HTML element with the .message class, which will be used to display temporary messages. Initially, the message is hidden with message.style.display = "none".

## Rule Number #2, #3 and #5
``` 
function Adicionar() {
    let nome = document.getElementById("nome");
    let NomeValido = nome.value !== "";
    let pair = document.createElement("p");
    let Item = document.createElement("li");
    let List_Box = document.querySelector("#list");
```

This function will be executed when clicking on the add button, its steps are as follows: 
1. The name entered by the user is obtained through the name input field.
2. It checks if the name is not empty (ValidName).
3. HTML elements p and li are dynamically created to display messages and add items to the list, respectively.

```
if (NomeValido) {
        let ItemIgual = List.includes(nome.value);
        if (!ItemIgual) {
            Item.innerText = nome.value;
            List.push(nome.value);
            List_Box.appendChild(Item);
            pair.innerText = `O nome está válido!`;
        } else {
            pair.innerText = `O nome já existe.`;
        }
    } else {
        pair.innerText = `O nome é inválido!`;
    }
```

Here, it is checked if the name already exists in the list, using List.includes (making the list check if it already has that name). If the name is unique, it is added to the List array and the ul element of the list. Otherwise, an appropriate message is displayed.
``` 
    nome.value = "";
    mensagem.appendChild(pair);
    mensagem.style.display = "block";
    setTimeout(() => {
        if (mensagem.contains(pair)) {
            mensagem.removeChild(pair);
            mensagem.style.display = "none";
        }
    }, 2000);
}
```
After adding the item or displaying the error message, the text field is cleared. The temporary message is displayed for 2 seconds and then disappears. This is done with the setTimeout function (causing the message to be displayed in a short period of time).

# Rule Number #4
``` 
function Deletar() {
    let mensagem = document.querySelector(".message");
    let pair = document.createElement("p");
    let pop = document.querySelector(".popup");
    let backPop= document.querySelector("#popup-back"); 
    let SimDel = document.querySelector(".popup button[value='Sim']");
    let NaoDel = document.querySelector(".popup button[value='Nao']");
```
In the Delete() function, elements of the confirmation interface are selected, such as the pop-up and the "Yes" and "No" buttons. The pop-up is initially displayed for the user to decide whether to remove all items from the list.
``` 
  pop.style.display = "block";
    backPop.style.display = "block";
    SimDel.onclick = ()=>{
        let List_Box = document.querySelector("#list");
        let List_Itens = document.getElementsByTagName("li");
        if(List_Itens.length > 0){
            let Array_Itens = Array.from(List_Itens);
            Array_Itens.forEach((Item)=>{
                List_Box.removeChild(Item);
            })
            List = [];
            pair.innerText = "Todos Os itens foram removidos !";
            mensagem.appendChild(pair);
            setTimeout(() => {
                if (mensagem.contains(pair)) {
                    mensagem.removeChild(pair);
                }}, 2000);           
            pop.style.display = "none";
            backPop.style.display = "none";
        } else {
            pop.style.display = "none";
            backPop.style.display = "none";
        }
    }
```
If the user confirms the removal by clicking "Yes", all list items are removed both visually (using removeChild()) and from the List array. A success message is displayed for 2 seconds. Afterwards, the pop-up is hidden again. If the user clicks "No", the pop-up is simply closed without removing the items.
``` 
  NaoDel.onclick = ()=>{
        pop.style.display = "none";
        backPop.style.display = "none";
    }
}
```