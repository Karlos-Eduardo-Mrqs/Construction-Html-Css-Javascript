// Declarando variáveis
let idade = 18;
let fruta = "Uva"
const Nome = "Carlos Eduardo" 
//console.log(`Nome -> ${Nome} Fruta Favorita -> ${fruta} -> Idade ->  ${idade}` )

// Tipos De Dados

//string ("" ou '' ou ´´)
let nombre = 'Marco Asêncio'; 
let nombre1 = `Carlos Henrique`;
let nombre2 = "João Pedro";
//console.log(nombre,nombre1,nombre2);
// Números
let idade1 = 19
let preco = 765.50
let peso = 63.8
//console.log(idade1,preco,peso)
// Booleano 

let Trabalhando = false
let Estudante = true
//console.log(Trabalhando,Estudante)

//Null e Indefined
let Futuro = undefined
let TenhoCarro = null
//console.log(Futuro,TenhoCarro)
// Variáveis Compostas 

let frutas = ["Limão","Banana","Maçã","Uva","Laranja","Tomate","Manga","Maracuja","Morango","Melancia"]
const CasasVetor = [0,1,2,3,4,5,6,7,8,9]
//console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4],frutas[5],frutas[6],frutas[7],frutas[8],frutas[9])

// Objetos

const pessoa = { nome: "Carlos Eduardo", idade:19, hobby:"Programar", peso: 63.8 }
console.log(`Pessoa_01: Nome -> ${pessoa.nome} -> | Idade -> ${pessoa.idade} -> | Hobby -> ${pessoa.hobby} -> | Peso -> ${pessoa.peso}`)
const Carro = {ano:1984, modelo:"Fiat_Uno", EmProducao:false , cor:["Prata","Vermelho","Branco"]}
let NomeDoCarro = Carro.modelo
let AnoDoCarro = Carro.ano
let Producao = Carro.EmProducao 
let Cores = Carro.cor[0]
/*
    console.log(`Dados do Carro -> Nome do carro ${NomeDoCarro} -> Ano de Lançamento -> ${AnoDoCarro} -> Está em Produção -> ${Producao} -> Cores Disponíveis ->${Carro.cor[0],Carro.cor[1],Carro.cor[2]} `)
*/ 