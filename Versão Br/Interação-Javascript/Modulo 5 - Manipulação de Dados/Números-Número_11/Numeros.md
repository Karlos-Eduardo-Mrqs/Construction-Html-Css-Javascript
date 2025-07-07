# Observação 👁️

- [Leia o capítulo anterior primeiro](../Strings-Número_10/BuscaComStrings.md)

---

## 📊 Métodos e Propriedades de Números em JavaScript

Os **números em JavaScript** são tipos primitivos e, diferente de outras linguagens como C ou Java, não exigem a distinção entre `int`, `float`, etc.

> ⚙️ Todos os números em JavaScript são armazenados em **formato de ponto flutuante de 64 bits** (IEEE 754).

---

## 🔐 1. Propriedades Numéricas

- **`Number.EPSILON`**  
Retorna a menor diferença entre 1 e o menor número maior que 1.  

```js
  console.log(Number.EPSILON); // 2.220446049250313e-16
```

- **`Number.MAX_VALUE`**  
Maior número representável.  

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

- **`Number.MIN_VALUE`**  
Menor valor positivo representável.  

```js
console.log(Number.MIN_VALUE); // 5e-324
```

- **`Number.MAX_SAFE_INTEGER`**  
Maior número inteiro seguro.  

```js
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

- **`Number.MIN_SAFE_INTEGER`**  
Menor número inteiro seguro.  

```js
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

- **`Number.POSITIVE_INFINITY`**  
Representa infinito positivo.  

```js
console.log(Number.POSITIVE_INFINITY); // Infinity
```

- **`Number.NEGATIVE_INFINITY`**  
Representa infinito negativo.  
  
```js
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

- **`Number.NaN`**  
Valor ``Not-a-Number`` usado em resultados inválidos.  

```js
  console.log(Number.NaN); // NaN
```

---

## 🔄 2. Métodos de Conversão

- **`toString()`**  
  Converte um número em string.  
  ![imagem](https://github.com/user-attachments/assets/ed25b0c0-f5ba-42ec-83df-32f8c8c019fc)

- **`Number()`**  
  Converte string/boolean/outros em número.  
  ![imagem](https://github.com/user-attachments/assets/c9c92a10-d2b6-4b4a-a1d5-acd711d70416)

- **`parseInt(string, radix)`**  
  Converte string para inteiro.  
  ![imagem](https://github.com/user-attachments/assets/956f7522-6d8e-4f75-8529-69d87f932f5a)

- **`parseFloat()`**  
  Converte string para número decimal.  
  ![imagem](https://github.com/user-attachments/assets/33bffa79-c083-4c49-a873-0cf3d596e121)

---

## 🎯 3. Métodos de Formatação

- **`toExponential(fractionDigits)`**  
  Converte número para notação exponencial.  
  ![imagem](https://github.com/user-attachments/assets/ffc0b07f-f479-4bf6-a693-7b7b244e8101)

- **`toFixed(digits)`**  
  Formata número com casas decimais fixas.  
  ![imagem](https://github.com/user-attachments/assets/4dc8334c-5c21-46ff-a8ce-91c93c3bd520)

- **`toPrecision(precisão)`**  
  Formata número com precisão definida.  
  ![imagem](https://github.com/user-attachments/assets/583d43e5-f15a-4d8c-8673-862e221d3e5a)

---

## 🧱 4. Método de Valor

- **`valueOf()`**  
  Retorna o valor primitivo de um objeto Number.  
  ![imagem](https://github.com/user-attachments/assets/ebeba10b-6135-4eef-849b-7b40a85c666d)

---

## ✅ Conclusão

Essas propriedades e métodos são fundamentais para manipular, converter e formatar números em JavaScript. Entender essas funções permite criar cálculos mais seguros, padronizados e eficientes.

---

## Próximo Capítulo

- [📘Continue para a Parte 2 — Métodos da Classe Math](../Números-Número_11/Math.md)
