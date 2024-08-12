/*
if(condicao){
    "Se a condição seja verdadeira"
}

if(condicao){
    "Se a condição seja verdadeira."
}else{
    "Se a condição seja falsa."
}

if(condicao1){
    "Se a condição 1 seja verdadeira"
}else if(condicao2){
    "Se a condição 2 seja verdadeira"
}else{
    "Se a condição 1 e condição 2 sejam falsas"
}
*/
alert("Bem Vindo Aluno !");

let num1 = prompt("Digite um número :");
let num2 = prompt("Digite outro número :");
const media = (num1+num2)/2;
let alerta;

if(media < 6){
    alerta = "A média ficou abaixo !";
}else{
    alerta = "A média ficou acima !"; 
}

alert(alerta);