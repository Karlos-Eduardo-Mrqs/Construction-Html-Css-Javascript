
let List = [];
let mensagem = document.querySelector(".message");
mensagem.style.display = "none";
function Adicionar() {
    let nome = document.getElementById("nome");
    let NomeValido = nome.value !== ""; 
    let pair = document.createElement("p");
    let Item = document.createElement("li");
    let List_Box = document.querySelector("#list");
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

function Deletar() {
    let mensagem = document.querySelector(".message");
    let pair = document.createElement("p");
    let pop = document.querySelector(".popup");
    let backPop= document.querySelector("#popup-back"); 
    let SimDel = document.querySelector(".popup button[value='Sim']");
    let NaoDel = document.querySelector(".popup button[value='Nao']");
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
        }else{
            pop.style.display = "none";
            backPop.style.display = "none";
        }
    }
    NaoDel.onclick = ()=>{
        pop.style.display = "none";
        backPop.style.display = "none";
    }
}
