/*
function Pessoa(){
    // Ação será desenvolvida
}

function Nome(){

}

function Pessoa(nome){
    this.nome = nome;
}

const humano = new Pessoa("Seu nome aqui");
console.log(humano);


function globalFunction() {
    console.log(this); // Em um navegador, isso imprime o objeto `window`
}
    
globalFunction();
    

const pessoa = {
    nome: 'Alice',
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }};
    pessoa.saudacao(); // "Olá, meu nome é Alice"

    const objeto = {
        nome: 'Charlie',
        saudacao: function() {
            const functionCaptureName = () => {
                console.log(this.nome); // `this` refere-se ao `objeto`, não à arrow function
                };
                functionCaptureName();
                }
                };
                
                objeto.saudacao(); // "Charlie"
                function mostrarMensagem(mensagem) {
                    console.log(`${mensagem}, meu nome é ${this.nome}`);
                }
                    
                const pessoa = { nome: 'Ana' };
                
                const mostrarMensagemAna = mostrarMensagem.bind(pessoa, 'Oi');
                mostrarMensagemAna(); // "Oi, meu nome é Ana"
                
                function calcularArea(largura, altura) {
                    console.log(`A área é ${largura * altura}`);
                    }
                    
                    const dimensoes = { largura: 5, altura: 10 };
                    
                    // Usando call para calcular a área com as dimensões fornecidas
                    calcularArea.call(null, dimensoes.largura, dimensoes.altura); // "A área é 50"
                    
                    
                    function somar(a, b, c) {
                        console.log(`A soma é ${a + b + c}`);
                    }
                    
                    const numeros = [1, 2, 3];
                    
                    // Usando apply para somar os números fornecidos
                    somar.apply(null, numeros); // "A soma é 6"
*/