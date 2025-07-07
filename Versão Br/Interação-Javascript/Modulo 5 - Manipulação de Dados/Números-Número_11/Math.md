# Observação 👁️

- [Leia a primeira parte](../Números-Número_11/Numeros.md)

---

## Objeto Matemático

O objeto `Math` em JavaScript é um objeto integrado que fornece propriedades e métodos para realizar operações matemáticas.  
> ❗ Não é um construtor — você **não pode criar instâncias** de `Math`.

---

## 🔢 Propriedades do Objeto Math

| Propriedade    | Descrição                    | Exemplo        | Saída                |
| -------------- | ---------------------------- | -------------- | -------------------- |
| `Math.PI`      | Valor de π                   | `Math.PI`      | `3.141592653589793`  |
| `Math.E`       | Base dos logaritmos naturais | `Math.E`       | `2.718281828459045`  |
| `Math.LN10`    | Logaritmo natural de 10      | `Math.LN10`    | `2.302585092994046`  |
| `Math.LN2`     | Logaritmo natural de 2       | `Math.LN2`     | `0.6931471805599453` |
| `Math.LOG10E`  | Log de Euler na base 10      | `Math.LOG10E`  | `0.4342944819032518` |
| `Math.LOG2E`   | Log de Euler na base 2       | `Math.LOG2E`   | `1.4426950408889634` |
| `Math.SQRT1_2` | Raiz quadrada de ½           | `Math.SQRT1_2` | `0.7071067811865476` |
| `Math.SQRT2`   | Raiz quadrada de 2           | `Math.SQRT2`   | `1.4142135623730951` |

---

## 🛠️ Métodos do Objeto Math

### 🎯 Arredondamento

| Método          | Descrição                     | Exemplo           | Saída  |
| --------------- | ----------------------------- | ----------------- | ------ |
| `Math.abs(x)`   | Retorna valor absoluto        | `Math.abs(-7.25)` | `7.25` |
| `Math.ceil(x)`  | Arredonda para cima           | `Math.ceil(4.2)`  | `5`    |
| `Math.floor(x)` | Arredonda para baixo          | `Math.floor(4.9)` | `4`    |
| `Math.round(x)` | Arredonda para o mais próximo | `Math.round(4.5)` | `5`    |
| `Math.trunc(x)` | Remove parte decimal          | `Math.trunc(4.9)` | `4`    |

---

### ⚡ Potenciação e Raiz

| Método           | Descrição                     | Exemplo          | Saída |
| ---------------- | ----------------------------- | ---------------- | ----- |
| `Math.pow(a, b)` | `a` elevado à potência de `b` | `Math.pow(2, 3)` | `8`   |
| `Math.sqrt(x)`   | Raiz quadrada de `x`          | `Math.sqrt(16)`  | `4`   |
| `Math.cbrt(x)`   | Raiz cúbica de `x`            | `Math.cbrt(27)`  | `3`   |

---

### 📉 Mínimos, Máximos e Aleatoriedade

| Método             | Descrição                    | Exemplo                 | Saída esperada |
| ------------------ | ---------------------------- | ----------------------- | -------------- |
| `Math.min(...val)` | Menor valor entre argumentos | `Math.min(3, 5, -2, 8)` | `-2`           |
| `Math.max(...val)` | Maior valor entre argumentos | `Math.max(3, 5, -2, 8)` | `8`            |
| `Math.random()`    | Número aleatório entre 0 e 1 | `Math.random()`         | `~0.0–0.999`   |

---

### 📐 Trigonometria

| Método             | Descrição                  | Exemplo                 | Saída esperada  |
| ------------------ | -------------------------- | ----------------------- | --------------- |
| `Math.sin(x)`      | Seno de `x` (radianos)     | `Math.sin(Math.PI / 2)` | `1`             |
| `Math.cos(x)`      | Cosseno de `x` (radianos)  | `Math.cos(Math.PI)`     | `-1`            |
| `Math.tan(x)`      | Tangente de `x` (radianos) | `Math.tan(Math.PI / 4)` | `1`             |
| `Math.asin(x)`     | Arco seno de `x`           | `Math.asin(1)`          | `~1.5708 (π/2)` |
| `Math.acos(x)`     | Arco cosseno de `x`        | `Math.acos(0)`          | `~1.5708 (π/2)` |
| `Math.atan(x)`     | Arco tangente de `x`       | `Math.atan(1)`          | `~0.7854 (π/4)` |
| `Math.atan2(y, x)` | Arco tangente de `y/x`     | `Math.atan2(1, 1)`      | `~0.7854 (π/4)` |

---

### 📊 Logaritmos e Exponenciais

| Método          | Descrição                  | Exemplo            | Saída      |
| --------------- | -------------------------- | ------------------ | ---------- |
| `Math.log(x)`   | Logaritmo natural de `x`   | `Math.log(Math.E)` | `1`        |
| `Math.log10(x)` | Log na base 10             | `Math.log10(100)`  | `2`        |
| `Math.log2(x)`  | Log na base 2              | `Math.log2(8)`     | `3`        |
| `Math.exp(x)`   | `e` elevado à potência `x` | `Math.exp(1)`      | `2.718...` |

---

## Próximo Capítulo

- [Continua no próximo capítulo](../Arrays-Número_12/Manipulação.md)
