# Métodos e propriedades de números Javascript
Os números JavaScript são tipos de dados primitivos e, ao contrário de outras linguagens de programação, você não precisa declarar diferentes tipos numéricos como int, float, etc. Os números JavaScript são sempre armazenados em formato binário de 64 bits de precisão dupla (IEEE 754).

## 1. Propriedades numéricas
- **EPSILON:** Representa a menor diferença entre 1 e o menor número de ponto flutuante maior que 1. ``console.log(Number.EPSILON); //Saída: 2.220446049250313e-16``
- **MAX_VALUE:** Representa o maior número positivo possível em JavaScript. ``console.log(Number.MAX_VALUE); // Saída: 1.7976931348623157e+308``
- **MIN_VALUE:** Representa o menor número positivo possível em JavaScript (próximo de zero, mas não zero). ``console.log(Número.MIN_VALUE); //Saída: 5e-324``
- **MAX_SAFE_INTEGER:** Representa o número inteiro seguro máximo em JavaScript (2^53 - 1). ``console.log(Number.MAX_SAFE_INTEGER); //Saída: 9007199254740991``
- **MIN_SAFE_INTEGER:** Representa o número inteiro seguro mínimo em JavaScript (-(2^53 - 1)). ``console.log(Number.MIN_SAFE_INTEGER); //Saída: -9007199254740991``
- **POSITIVE_INFINITY:** Representa o infinito positivo. Retornado no estouro. ``console.log(Número.POSITIVE_INFINITY); //Saída: Infinito``
- **NEGATIVE_INFINITY:** Representa o infinito negativo. Retornado no estouro. ``console.log(Número.NEGATIVE_INFINITY); //Saída: -Infinity``
- **NaN:** Representa um valor "Not-a-Number", normalmente usado para cálculos de números inválidos. ``console.log(Número.NaN); //Saída: NaN``
## 2. Métodos de conversão
- **toString():** Converte um número em uma string.
![imagem](https://github.com/user-attachments/assets/ed25b0c0-f5ba-42ec-83df-32f8c8c019fc)

- **Number():** Converte uma variável ou expressão JavaScript em um número.
![imagem](https://github.com/user-attachments/assets/c9c92a10-d2b6-4b4a-a1d5-acd711d70416)

- **parseInt(string, radix):** Analisa uma string e retorna um número inteiro da base especificada (a base em sistemas numéricos matemáticos).
![imagem](https://github.com/user-attachments/assets/956f7522-6d8e-4f75-8529-69d87f932f5a)

- **parseFloat():** Analisa uma string e retorna um número de ponto flutuante.
![imagem](https://github.com/user-attachments/assets/33bffa79-c083-4c49-a873-0cf3d596e121)

## 3. Métodos de formatação de números
- **toExponential(fractionDigits):** Converte um número em notação exponencial (uma string).
![imagem](https://github.com/user-attachments/assets/ffc0b07f-f479-4bf6-a693-7b7b244e8101)

- **toFixed(digits):** Formata um número usando notação de ponto fixo.
![imagem](https://github.com/user-attachments/assets/4dc8334c-5c21-46ff-a8ce-91c93c3bd520)

- **toPrecision(precisão):** Formata um número em um comprimento especificado.
![imagem](https://github.com/user-attachments/assets/583d43e5-f15a-4d8c-8673-862e221d3e5a)

## 4. Métodos de valor
- **valueOf():** Retorna o valor primitivo de um objeto numérico.
![imagem](https://github.com/user-attachments/assets/ebeba10b-6135-4eef-849b-7b40a85c666d)

# Conclusão
Esses métodos e propriedades fornecem diversas funcionalidades para trabalhar com números em JavaScript, incluindo conversão, formatação e cálculos matemáticos.

# [Continue Part 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data%20Manipulation/Numbers-Number_11/Math.md)
