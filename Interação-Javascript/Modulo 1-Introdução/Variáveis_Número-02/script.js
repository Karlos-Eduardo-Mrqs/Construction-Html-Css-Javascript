// Declarando variáveis
let numero = 18;
let fruta = "Maça"
const Nome = "Carlos Eduardo" 

// Tipos De Dados

//string ("" ou '')
let nombre = 'Marco Asêncio'; 

// Números
let idade = 19
let preco = 765.50
let peso = 63.8

// Booleano 

let ProgramodorJunior = true
let Trabalhando = false

// Variáveis Compostas 

let frutas = ["Maçã","Uva","Laranja"]
let frutaEscolhida = frutas[0]

console.log(frutaEscolhida)

// Objetos

let pessoa = { nome: "Carlos Eduardo", idade:19, hobby:"Programar", peso: 63.8 }
let personal = pessoa.nome

let Carro = {ano:1984, modelo:"Fiat_Uno", EmProducao:false , cor:["Prata","Vermelho","Branco"]}
let NomeDoCarro = Carro.modelo
let AnoDoCarro = Carro.ano
let Producao = Carro.EmProducao 

console.log(`Dados do Carro -> Nome do carro ${NomeDoCarro} -> Ano de Lançamento -> ${AnoDoCarro} -> Está em Produção -> ${Producao} -> Cores Disponíveis ->${Carro.cor[0],Carro.cor[1],Carro.cor[2]} `)