# [Leia a primeira parte primeiro!]()

# Objeto Matemático
O objeto Math em JavaScript é um objeto integrado que fornece propriedades e métodos para realizar operações matemáticas. Não é um construtor, o que significa que você não pode criar instâncias do objeto Math. Em vez disso, você usa diretamente seus métodos e propriedades para realizar cálculos matemáticos.

## Propriedades do objeto matemático
O objeto Math possui diversas propriedades que representam constantes matemáticas:
- **Math.PI:** Retorna o valor de π (pi) ≈ 3,14159. ``console.log(Math.PI) //3.141592653589793.``
- **Math.E:** Retorna o valor de Euler (base dos logaritmos naturais) ≈ 2,718. ``console.log(Math.E) //2.718281828459045.``
- **Math.LN10:** Retorna o logaritmo natural de 10 ≈ 2,302. ``console.log(Math.LN10) //2.302585092994046.``
- **Math.LN2:** Retorna o logaritmo natural de 2 ≈ 0,693.``console.log(Math.LN2) //0.6931471805599453.``
- **Math.LOG10E:** Retorna o logaritmo de Euler na base 10 ≈ 0,434. ``console.log(Math.LOG10E) //0.4342944819032518.``
- **Math.LOG2E:** Retorna o logaritmo de Euler na base 2 ≈ 1,442. ``console.log(Math.LOG2E) //1.4426950408889634.``
- **Math.SQRT1_2:** Retorna a raiz quadrada de 1/2 (ou √0,5) ≈ 0,707. ``console.log(Math.SQRT1_2) //0.7071067811865476.``
- **Math.SQRT2:** Retorna a raiz quadrada de 2 ≈ 1,414. ``console.log(Math.SQRT2) // 1.4142135623730951.``

## Métodos de objetos matemáticos
O objeto Math fornece uma variedade de métodos para realizar operações matemáticas, como arredondamento, potência, trigonometria e muito mais. Aqui estão alguns dos principais métodos:

### Arredondamento
- **Math.abs(x):** Retorna o valor absoluto de x.``console.log(Math.abs(-7.25)); //7.25.``
- **Math.ceil(x):** Arredonda x para o próximo número inteiro maior ou igual a.``console.log(Math.ceil(4.2)) //5.``
- **Math.floor(x):** Arredonda x para o próximo número inteiro menor ou igual a.``console.log(Math.floor(4.9)) //4.``
- **Math.round(x):** Arredonda x para o número inteiro mais próximo.``console.log(Math.round(4.5)) //5.``
- **Math.trunc(x):** Remove a parte decimal de x, retornando apenas a parte inteira.``console.log(Math.trunc(4.9)) //4.``

### Potenciação e Raiz
- **Math.pow(base, expoente):** Retorna a base elevada ao expoente.``console.log(Math.pow(2, 3)) //8.``
- **Math.sqrt(x):** Retorna a raiz quadrada de x.``console.log(Math.sqrt(16)) //4.``
- **Math.cbrt(x):** Retorna a raiz cúbica de x.``console.log(Math.cbrt(27)) //3``.

### Mínimo, Máximo e Aleatoriedade
- **Math.min(x1, x2, ..., xn):** Retorna o menor valor entre os argumentos fornecidos. ``console.log(Math.min(3, 5, -2, 8)) resulta em -2.``
- **Math.max(x1, x2, ..., xn):** Retorna o maior valor entre os argumentos fornecidos. ``console.log(Math.max(3, 5, -2, 8)) resulta em 8.``
- **Math.random():** Retorna um número pseudoaleatório entre 0 (inclusivo) e 1 (exclusivo). ``console.log(Math.random()) pode resultar em 0,756734231098.``

### Trigonometria
- **Math.sin(x):** Retorna o seno de x (em radianos).``console.log(Math.sin(Math.PI / 2)) //1.``
- **Math.cos(x):** Retorna o cosseno de x (em radianos). ``console.log(Math.cos(Math.PI)) //-1.``
- **Math.tan(x):** Retorna a tangente de x (em radianos).``console.log(Math.tan(Math.PI / 4)) // 1.``
- **Math.asin(x):** Retorna o arco seno de x (em radianos). ``console.log(Math.asin(1)) // (/ 2).``
- **Math.acos(x):** Retorna o arco cosseno de x (em radianos).``console.log(Math.acos(0)) //(/ 2).``
- **Math.atan(x):** Retorna o arco tangente de x (em radianos).``console.log(Math.atan(1)) // (/ 4).``
- **Math.atan2(y, x):** Retorna o arco tangente do quociente de seus argumentos. ``console.log(Math.atan2(1, 1)) // (/ 4.)``

### Logaritmos e Exponenciação
- **Math.log(x):** Retorna o logaritmo natural (base e) de x. ``console.log(Math.log(Math.E)) //1.``
- **Math.log10(x):** Retorna o logaritmo de x na base 10. ``console.log(Math.log10(100)) //2.``
- **Math.log2(x):** Retorna o logaritmo de x na base 2. ``console.log(Math.log2(8)); //3.``
- **Math.exp(x):** Retorna e elevado à potência de x. ``console.log(Math.exp(1)); //2.718281828459045.``