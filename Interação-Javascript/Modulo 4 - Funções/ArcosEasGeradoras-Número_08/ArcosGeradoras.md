# Funções de seta
Em termos simples, uma função de seta é uma maneira concisa de escrever uma função em JavaScript. Otimiza a escrita do seu código, tornando-o mais limpo, enxuto e aumentando a legibilidade. Veremos como podemos fazer essa otimização em alguns casos, alterando funções em arrow function em JavaScript.

![imagem](https://github.com/user-attachments/assets/4abb9907-662a-484a-9cce-4ec456ce7e91)

Como você pode ver, a criação de funções de seta serve para facilitar a criação e utilização de funções em JavaScript, ou seja, permitem a criação de funções de forma resumida. Em outras palavras, as funções de seta são simplificações para funções de expressão. Vamos ver a diferença com funções convencionais:

![imagem](https://github.com/user-attachments/assets/e48f3109-aae1-4ad7-9bc8-ac7b6907359d)

# Funções do Gerador
São funções especiais em JavaScript que permitem pausar e retomar a execução do código e são muito úteis para criar sequências de valores sob demanda. É útil para gerar sequências de valores ou para tarefas onde é necessário mais controle sobre a execução do código.

![imagem](https://github.com/user-attachments/assets/91b93755-51c2-43a0-9ef2-da20dbd47d7b)

## O que está acontecendo?
A função contador é uma Função Geradora porque possui o formato função*. Cada rendimento pausa a função e retorna o valor (1, 2, 3). Count é um objeto que controla a execução da função. Você chama count.next() para avançar para o próximo rendimento.

### Rendimento(Yield)
O rendimento é o que torna as funções do gerador especiais. Ele permite pausar a função em pontos específicos, retornar valores e então retomar a execução exatamente de onde você parou. Isso é útil para criar sequências de valores ou controlar fluxos de trabalho complexos.

### Sequências de rendimento

- Primeiro rendimento: Quando count.next() é chamado pela primeira vez, a execução da função contador começa e para no primeiro rendimento, retornando 1.

- Segundo rendimento: A execução é retomada com o próximo next(), que avança a função para o próximo rendimento, retornando 2.

- Terceiro rendimento: O processo se repete, retornando 3.

- Rendimento final: Após o último rendimento, a função termina e o próximo next() retorna indefinido, indicando que a sequência terminou.