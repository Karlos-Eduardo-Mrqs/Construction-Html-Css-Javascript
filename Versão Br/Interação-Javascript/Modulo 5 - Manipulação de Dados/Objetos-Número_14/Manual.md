# Observação 👁️

- [Leia a parte um primeiro](../Datas-Número_13/Datas.md)

---

## 🧱 Objetos em JavaScript

Objetos em JavaScript são **coleções de pares chave-valor**, onde:

- A **chave** é uma string (ou símbolo) que identifica a propriedade.
- O **valor** pode ser qualquer tipo de dado: `string`, `number`, `array`, `function`, `object`, etc.

> ✅ Os objetos permitem **organizar dados complexos** e representar **entidades reais com atributos e comportamentos**.

---

## ✍️ Forma Manual para Criar Objetos

JavaScript oferece **diversas formas de criar objetos**, cada uma adequada a diferentes contextos. Abaixo, você confere os métodos mais comuns:

---

### 🔸 Objeto Literal

A forma mais simples e direta:

```js
const animal = {
  nome: "Leão",
  tipo: "Mamífero",
  especie: "Felino"
};
```

> 📌 Muito usada para armazenar dados ou modelar entidades simples.

![imagem](https://github.com/user-attachments/assets/27c2ce3e-603f-42e6-8e03-b29ca9ebf3f5)

---

### 🔸 Usando `new Object()`

Forma mais explícita, utilizando o construtor `Object`:

```js
const pessoa = new Object();
pessoa.nome = "Carlos";
pessoa.idade = 25;
```

> 📌 Útil quando se deseja maior controle ou herança de protótipos.

![imagem](https://github.com/user-attachments/assets/2ca632b3-88db-4a7a-8a4f-90b5cb20c12e)

---

### 🔸 Funções Construtoras

Ideal para criar **múltiplas instâncias de objetos com a mesma estrutura**:

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const aluno = new Pessoa("Maria", 22);
```

> 📌 Padrão anterior à introdução das classes (`class`) no ES6.

![imagem](https://github.com/user-attachments/assets/fca70436-91aa-48bf-8c55-417e5dac6d23)

---

## 🛠️ Acessar e Modificar Objetos Manualmente

### 🔹 Acessar Propriedades

Você pode acessar valores de propriedades com:

```js
objeto.propriedade;
objeto["propriedade"];
```

Exemplo:

```js
const animal = {
  nome: "Gato",
  tipo: "Mamífero"
};

console.log(animal.nome);        // "Gato"
console.log(animal["tipo"]);     // "Mamífero"
```

![imagem](https://github.com/user-attachments/assets/58759399-f8ed-4719-aed9-05a2be3ca17b)

---

### 🔹 Usando `for...in`

Percorre todas as chaves de um objeto:

```js
for (let chave in animal) {
  console.log(`${chave}: ${animal[chave]}`);
}
```

> 🧩 Útil para iteração dinâmica em objetos.

![imagem](https://github.com/user-attachments/assets/02f4bbb1-1eeb-44f3-b7bf-49b6944df290)

---

### 🔹 Modificar Propriedades

Você pode **reatribuir valores** diretamente:

```js
animal.nome = "Tigre";
animal.tipo = "Felino";
```

> ✏️ O objeto é mutável: as propriedades podem ser alteradas a qualquer momento.

![imagem](https://github.com/user-attachments/assets/f3bdf589-ce73-4494-8904-2d82cb229e56)

---

📘 **Próximo passo:** métodos associados a objetos, como `Object.keys()`, `Object.values()`, `hasOwnProperty()`, etc.

---

## Próximo Capítulo

- 📎 [Vá para a Parte 2 → Métodos de Objetos](../Objetos-Número_14/Métodos.md)
