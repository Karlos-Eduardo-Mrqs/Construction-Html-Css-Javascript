let Hello = ()=>{
    console.log("That 'is arrow function !");
}

console.log(Hello);

let variavel = ()=>{
    // Ação a ser executada;
};

let mult = (a, b) => a * b; 

function mult(a,b){
    return a * b;
}

function* contador() {
    yield 1;
    yield 2;
    yield 3;
}
  
const contagem = contador();
console.log(contagem.next().value); // 1
console.log(contagem.next().value); // 2
console.log(contagem.next().value); // 3
console.log(contagem.next().value); // undefined (fim da contagem)