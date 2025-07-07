# Observação 👁️

- [Leia o capítulo anterior primeiro !](../ArcosEasGeradoras-Número_08/ArcosGeradoras.md)

---

## Função de Construção

As funções construtoras são declaradas e definidas como qualquer outra expressão ou declaração, a forma como são utilizadas é a mesma. A diferença está mais no caso de uso e no que ela retorna. Uma pequena observação é que normalmente o nome das funções construtoras começa com a primeira letra maiúscula, por exemplo:

![imagem](https://github.com/user-attachments/assets/496724b6-3287-4acd-82a0-348c27c1f214)

Neste exemplo, estamos criando uma função construtora que criará um objeto `Person`.

---

## Invocação do Construtor

A principal diferença entre a função construtora e uma função comum é a forma como ela é invocada. Enquanto as funções comuns precisam apenas ser nomeadas e chamadas com parênteses, **as funções construtoras precisam ser invocadas com a palavra reservada `new`**:

![imagem](https://github.com/user-attachments/assets/4c6bd152-f6eb-4b61-a033-8a9a75daadb8)

Utilizar funções construtoras pode ser um recurso muito útil, pois podemos criar objetos de forma simplificada:

![imagem](https://github.com/user-attachments/assets/add62e4e-45a7-495f-8b23-341329776e62)

---

## Termo `new`

Quando usamos a palavra-chave `new` para invocar uma função, o JavaScript nos bastidores cria automaticamente um novo objeto para nós. Esse objeto pode ser referenciado por meio de `this`.

Quando realizamos `this.nome = name`, estamos adicionando uma nova propriedade chamada `name` ao objeto recém-criado, onde o valor da propriedade será o valor informado no parâmetro da função.

---

## Termo `this`

O termo `this` em JavaScript refere-se ao **contexto de execução atual**, ou seja, ao objeto ao qual o código está associado no momento da execução. O valor de `this` pode variar dependendo de **como a função é chamada** e **onde é usada**. Aqui estão algumas das principais maneiras como `this` é usado:

---

## 1. **Função Global**

Quando você usa `this` em uma função que não está associada a nenhum objeto, `this` se refere ao **objeto global**. Em um ambiente de navegador, esse objeto global é `window`.

![imagem](https://github.com/user-attachments/assets/38961df5-1176-4eaf-9607-f6f0cece22b6)

---

## 2. **Métodos de Objeto**

Quando `this` é usado dentro do método de um objeto, refere-se ao **objeto que chamou o método**.

![imagem](https://github.com/user-attachments/assets/f699fa80-2c14-4bc0-8df6-34ec88345b62)

---

## 3. **Função Construtora**

Dentro de uma função construtora, `this` refere-se ao **novo objeto que está sendo criado**.

![imagem](https://github.com/user-attachments/assets/add62e4e-45a7-495f-8b23-341329776e62)

---

## 4. **Função de Seta**

As funções de seta têm um comportamento diferente para `this`. Elas **não têm `this` próprio**. Em vez disso, **herdam `this` do contexto onde foram definidas**.

![imagem](https://github.com/user-attachments/assets/e7312aa5-12a1-4a98-8de2-8d99b9eafb15)

---

## Como controlar `this`?

Os métodos **`bind`**, **`call`** e **`apply`** em JavaScript são usados para **controlar o valor de `this`** nas funções. Eles permitem definir explicitamente o contexto (ou seja, `this`) no qual a função deve ser executada. Vamos detalhar cada um deles:

---

### 🔗 `bind()`

Cria uma nova função com `this` definido para um valor específico.

![imagem](https://github.com/user-attachments/assets/bddb8fd7-45f0-4627-8dd0-5e967dad2869)

Com uma nova função (`showMessageAna`), `this` será fixado ao objeto `pessoa` e ao argumento `'Hi'` pré-definido. Quando `showMessageAna` é chamado, ele usa `this` como a `pessoa` e imprime a mensagem.

---

### 📞 `call()`

Invoca uma função **imediatamente** com `this` e argumentos especificados.

![imagem](https://github.com/user-attachments/assets/eb3c0edb-2dcc-40a1-be93-2f0397927fa8)

Chama a função `calculaArea` com `this` definido como `null` (não usado neste caso) e passa `largura` e `altura` como argumentos.

---

### 📤 `apply()`

Invoca uma função **imediatamente**, com `this` e argumentos **fornecidos como um array**.

![imagem](https://github.com/user-attachments/assets/ccb934c5-3602-47bf-8674-484d382bf38d)

Chama a função `add` com `this` definido como `null` (não usado neste caso) e passa os argumentos numéricos como uma matriz.

---

## 🧠 Resumo

- ✅ Use `bind()` quando precisar **criar uma nova função** com `this` fixo e argumentos pré-definidos.

- ✅ Use `call()` quando quiser **chamar uma função imediatamente**, passando argumentos **um por um**.

- ✅ Use `apply()` quando quiser **chamar uma função imediatamente**, passando os argumentos **em um array**.

---

## Próximo Módulo

- [Continua no próximo módulo](../../Modulo%205%20-%20Manipulação%20de%20Dados/Strings-Número_10/Strings.md)
