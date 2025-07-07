# Observação 👁️

- [Leia a parte de loopings primeiro !](../../Modulo%203-Loopings/Loops-Número_06/Loops.md)

---

## Procedimentos

Procedimentos são estruturas que agrupam um conjunto de comandos que são executados quando o procedimento é chamado. São rotinas (fragmentos ou módulos) de programas que realizam uma tarefa definida pelo programador.

Temos também as funções, que diferem dos procedimentos pois **retornam um valor** (por exemplo, uma função que calcula raiz quadrada retorna um número).

---

### Quais são as diferenças?

![1_dqABRmyYhz7boiQAbaRP9Q](https://github.com/user-attachments/assets/7a511566-78c2-440e-a997-0621a364979c)

Nas funções, você tem uma **entrada (input)** e uma **saída (output)**, enquanto procedimentos normalmente executam uma ação sem retornar um valor.

---

## Tipos de funções em JavaScript

### 1. Declaração de funções

A forma mais básica de definir funções em JavaScript é através da declaração de função, que começa com a palavra reservada `function`. Exemplo:

![imagem](https://github.com/user-attachments/assets/610137f1-e9f8-4745-8c28-5e340ee70c2c)

Partes importantes:

- **Nome da função:** pode conter letras, números, sublinhado (_), mas não símbolos especiais.

- **Parâmetros:** variáveis que definem valores específicos para a função (ex: dois números para somar).

- **Chamada:** invocar a função pelo nome, por exemplo, `console.log(nomeDaFuncao())`.

---

### 2. Expressão de funções

Uma expressão de função ocorre quando você cria uma função e a atribui a uma variável. A função só existe a partir do momento em que a linha é executada. Exemplo:

![imagem](https://github.com/user-attachments/assets/f488d91c-9548-4083-8a29-2b769a7b1e96)

**Partes importantes:**

- **Nome da função:** pode ser anônima ou nomeada, geralmente omitida em expressões.

- **Parâmetros:** variáveis que definem valores, como na declaração.

- **Chamada:** invocar a função pelo nome da variável, ex: `console.log(nomeVariavel())`.

---

#### Expressão X Declaração

| Aspecto         | Declaração de Função                     | Expressão de Função                   |
|-----------------|-----------------------------------------|-------------------------------------|
| **Elevação**    | Funções são elevadas e podem ser chamadas antes da declaração | Apenas a variável é elevada; a função só existe após a definição |
| **Flexibilidade** | Menos flexível, nome fixo e declarativo | Pode ser anônima, usada em tempo de execução e atribuída a variáveis |

---

### Hoisting

Hoisting é um comportamento do JavaScript em que declarações de variáveis e funções são **"movidas" para o topo do escopo** (global ou local) antes da execução do código.

Na prática, o JavaScript trata o código como se todas as declarações estivessem no topo, mesmo que apareçam depois.

---

#### Hoisting nos exemplos citados

- **Funções declaradas com `function`** são totalmente elevadas, incluindo o corpo da função. Assim, podem ser chamadas antes da sua declaração no código.

- **Expressões de função:** apenas a declaração da variável (usando `var`) é elevada, mas a função só estará disponível após a linha de definição.

- Usando `let` ou `const`, tentar acessar a variável antes da declaração gera erro.

![maxresdefault](https://github.com/user-attachments/assets/5bf77ca5-0dd0-4f8b-8951-7464871bce53)

---

## Próximo Capítulo

- [Continua no próximo capítulo](../ArcosEasGeradoras-Número_08/ArcosGeradoras.md)
