# Observação 👁️

- [Leia o capítulo anterior para continuar](../DeclaraçõesEasExpressões-Número_07/DeclaraçõesExpressões.md)

---

## Funções de Seta (Arrow Functions)

Em termos simples, uma **função de seta** é uma forma mais concisa de escrever uma função em JavaScript. Ela otimiza a escrita do seu código, tornando-o mais limpo e aumentando a legibilidade. As arrow functions são especialmente úteis para **funções de callback** ou funções pequenas e rápidas.

![imagem](https://github.com/user-attachments/assets/4abb9907-662a-484a-9cce-4ec456ce7e91)

Como você pode ver, a criação de funções de seta serve para facilitar a criação e utilização de funções em JavaScript. Elas são uma **forma reduzida das expressões de função** (`function expressions`).

## Diferença entre Função Convencional e Arrow Function

Abaixo, veja um exemplo da diferença entre a forma tradicional e a forma com função de seta:

![imagem](https://github.com/user-attachments/assets/e48f3109-aae1-4ad7-9bc8-ac7b6907359d)

## Sintaxe Básica de Arrow Function

```js
// Função tradicional
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Arrow function equivalente
const saudacao = (nome) => `Olá, ${nome}!`;
```

---

## Funções do Gerador

Funções geradoras são funções especiais que permitem pausar e retomar a execução do código. Elas são úteis para gerar sequências de valores sob demanda, especialmente em estruturas como laços e iterações assíncronas.

![imagem](https://github.com/user-attachments/assets/91b93755-51c2-43a0-9ef2-da20dbd47d7b)

## O que está acontecendo?

A função contador é uma função geradora porque é declarada com o asterisco (``function* contador()``).

Cada ``yield`` pausa a execução da função e retorna um valor. A função pode ser retomada posteriormente usando ``.next()``.

```js
function* contador() {
  yield 1;
  yield 2;
  yield 3;
}

const count = contador();

console.log(count.next().value); // 1
console.log(count.next().value); // 2
console.log(count.next().value); // 3
console.log(count.next().value); // undefined (fim)
```

---

### Rendimento(Yield)

O rendimento é o que torna as funções do gerador especiais. Ele permite pausar a função em pontos específicos, retornar valores e então retomar a execução exatamente de onde você parou. Isso é útil para criar sequências de valores ou controlar fluxos de trabalho complexos.

### Sequências de rendimento

1. Primeiro rendimento: Quando count.next() é chamado pela primeira vez, a execução da função contador começa e para no primeiro rendimento, retornando 1.

2. Segundo rendimento: A execução é retomada com o próximo next(), que avança a função para o próximo rendimento, retornando 2.

3. Terceiro rendimento: O processo se repete, retornando 3.

4. Rendimento final: Após o último rendimento, a função termina e o próximo next() retorna indefinido, indicando que a sequência terminou.

---

## Próximo Capítulo

- [Continua no próximo capítulo](../Construtoras-Número_09/Construtoras.md)
