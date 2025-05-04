const container = document.getElementById("container");
//console.log(container)
let paragrafos = document.getElementsByTagName("p");
//console.log(paragrafos);

const pairs = document.getElementsByClassName("par");
//console.log(pairs);

const section = document.querySelector("#container"); 
//console.log(section);

const paires = document.querySelectorAll("#paragrafos") ;
//console.log(paires);

let paragrafs = document.querySelectorAll("#paragrafos");
let i = 0;  
/*
for (let OnePair of paragrafs) {
    let small = document.createElement("small");
    small.textContent = `Texto Minusculo ${i}`;
    box.appendChild(small)
    OnePair.innerHTML = `Paragrafo[${i+1}]`;
    i++;
}
*/
let box = document.querySelector(".box");
box.setAttribute("style", "background:darkgreen; width:100%;");

let newElement = document.createElement('div');
newElement.textContent = "Novo Elemento Bacana";
newElement.style.fontSize = "20px";
newElement.style.color = "red";
let parent = document.getElementById('parent');
let existingElement = document.getElementById('child');
document.replaceChild(newElement, existingElement);

/*
*/

box.removeAttribute("style");
Title2.removeAttribute("style");

//container.id = "box-contain";

let Title2 = document.getElementById("Title2");
Title2.textContent = "Isso aqui é um Titulo nível 2";
Title2.style.color = "white"; 
//console.log(Title2);

//console.log(box)
document.write("Isso aqui é um texto comum");
//console.log(box.getAttribute("class"));