/* 
condicao ? verdadeira : falsa;

switch(condicao){
    case coisa1:
        "Caso a coisa 1 seja verdadeira";
    break;
    case coisa2:
        "Caso a coisa 2 seja verdadeira";
    break;
    case coisa3:
        "Caso a coisa 3 seja verdadeira";
    break;
    
    default:
        "Caso a coisa1,coisa2 e coisa3 sejam falsas";
    break;
}

*/

alert("Seja Bem Vindo Usuário !");
let senha = prompt("Digite a sua senha, para reconhece-lo: ");
let alerta ;
switch(senha){
    case "Admin478":
        alerta = "Então, você é um admininstrador" ;
    break;
    
    case "Profe564":
        alerta = "Então, você é um professor" ;
    break;
    
    case "Aluno231":
        alerta = "Então, você é um aluno";
    break;
    
    default:
        alerta = "Então, você não tem uma senha e terá que contatar o suporte";
    break;
}

alert(alerta);