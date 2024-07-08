# Manipulação De Cores
Aprenderemos nesse cápitulo, como modificar e manipular as cores usando o css. 

# Background-Color
Usamos o comando **Background-Color, para alterar a cor de fundo de algum objeto ou até mesmo da própria página. Observe:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6cc3bdea-0d38-4d8b-8433-d171456b09cf)
Temos essa página html com dois paragrafos. Cada um com uma id única; vamos supor que queremos que o **Páragrafo 1, tenha que ter o fundo azul, sabendo
que sua identificação é Par1. Como atribuiremos esse fundo? Assim:**
```
#Par1{
    background-color: blue;
}
```
Olhe agora o resultado:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c7b84127-4b72-4a69-9e98-e76f1ac2e9bf)
Agora queremos que o **Segundo Paragrafo seja da cor vermelha, sabendo que sua identificação é Par2. Formateremos isso, da mesma maneira que fizemos anteriormente com
o Primeiro Paragrafo, veja só:**
```
#Par2{
    background-color: red;
}
```
Resultado:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eee43cb2-5d83-4a30-bebd-d48e012bb7e7)

## Outras formas de atribuir fundo
Podemos utilizar, outras maneiras de atribuir o fundo. Sendo elas:
- Atráves do Corpo Da Página: Manipulando a cor do fundo da página, atribuindo-a assim: `` html{ background-color: black; } ``. Fazendo que toda a sua página fique da cor preta:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/bdcf54d4-0237-4f15-9d64-8a53cab9b34e)

### Código Hexadecimal
Os códigos hexadecimais são uma forma de declarar cores. Os códigos hexadecimais são compostos por seis letras ou números precedidos por um #.
#### Composição Hexadecimal 
**0 ... 9 depois disso A,B,C,D,E,F(sendo representados pelos números 10 ... 15 respectivamente).** Por exemplo, se colocarmos o código hexadecimal - #568 no corpo da página:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/76204efe-4396-4490-85aa-4e051688abc6)
Ele mudará a cor preta, para uma cor cinza.

### Outros códigos hexadecimais
##### rgb(Red , Green , Blue) :
Com a mistura das cores Vermelho, Verde e Azul, Podemos criar uma nova cor. Sendo manipulada dessa maneira rgb( 0 ... 255 , 0 ... 255 , 0 ... 255) . Na primeira casa representa a cor vermelha, a segunda o verde e terceira o azul. Exemplo, quando colocamos esse código rgb(245,133,89) no Paragrafo 1:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1e14327d-bdad-4a21-8a4d-27e97dbeb787)
Foi criada uma nova cor, misturando as cores vermelha,verde e azul. De acordo com a Intensidade de cada uma delas.
Pórem, o rgb pode ser feito da mesma maneira que o código hexadecimal, observe a formatação #116699. Onde os dois primeiros números são a cor vermelha, os outros dois no meio são a cor verde e os dois ultimos são a cor azul. Veja o resultado, quando aplicamos esse código no segundo parágrafo:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c8ec17b4-41f4-4c56-804e-5f2a8e16580e)
##### Visibilidade
Com o rgba(Red, Green, Blue e Alfa) . Conseguimos dizer, qual será a visibilidade que a cor vai possuir, pegando esse mesmo código #116699 e no final adicionando 00, ficando assim #11669933 . Resultado:
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1f983546-f2b3-42e2-a82e-99a65a228dcb)
O fundo desaparece dentro da página. Agora, adicionando FF(representando o número 15). #116699FF :
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a430fd87-f1f5-4a4b-a1d4-6ae239e42ff8)
A Cor de fundo do paragrafo dois, esta mais destacada. Podendo támbem usar o rgba(), funcionando da mesma maneira que o rgb. Diferenciando o número final, sendo a transparência/nitidez de um objeto.

##### HSL
O hsl(Tom, Saturação , luminosidade) . É usado para criação de cores, não sendo tão usado assim. Sendo esse comando, "auxiliado" pela Matiz.
Matiz é a forma como a maioria de nós percebe e nomeia uma cor – usando as cores do arco-íris (vermelho, laranja, verde, azul, etc.). [Consulte a roda de cores](https://www.xrite.com/pt-pt/blog/color-attributes-hue-chroma#:~:text=O%20que%20%C3%A9%20matiz%3F,de%20um%20tom%20para%20outro.), para ver como as cores mudam de um tom para outro.
