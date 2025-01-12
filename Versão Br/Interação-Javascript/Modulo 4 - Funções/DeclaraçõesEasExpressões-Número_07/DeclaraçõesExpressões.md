# Procedimentos
É uma estrutura que agrupa um conjunto de comandos que são executados quando o procedimento é chamado. Procedimentos são rotinas (fragmentos ou módulos) de programas que podem executar uma tarefa definida pelo programador. Temos também a função que retorna um valor (por exemplo, uma função que calcula raiz quadrada retorna um número)

## Quais são as diferenças? 
![1_dqABRmyYhz7boiQAbaRP9Q](https://github.com/user-attachments/assets/7a511566-78c2-440e-a997-0621a364979c)

Nas funções, você tem uma entrada de usuário e sua impressão, ou seja, saída. Porém, o procedimento lê apenas algo, como você pode visualizar a imagem.

# Tipos de funções em Javascript 

## 1. Declaração de funções
A forma mais básica de definir funções em JavaScript é através da declaração de função, toda declaração de função começa com a palavra reservada e obrigatória function, veja este exemplo:

![imagem](https://github.com/user-attachments/assets/610137f1-e9f8-4745-8c28-5e340ee70c2c)

Nessas funções, há três partes importantes:
- O nome da função (Não possui símbolos, apenas aceita o sublinhado do i(_) );
- Os parâmetros(Um parâmetro em uma função é uma variável que define um valor específico durante a definição da função. Por exemplo, os dois números têm uma soma.);
- A chamada (Apenas escreva o nome da função, de sua preferência, console.log(Function_Name() ) );

## 2. Expressão de funções
Uma expressão de função ocorre quando você cria uma função e a atribui a uma variável. Só existe após a linha em que a expressão foi executada, pois a função é criada no momento da atribuição à variável.

![imagem](https://github.com/user-attachments/assets/f488d91c-9548-4083-8a29-2b769a7b1e96)

Nessas funções, há três partes importantes:
- O nome da função (Não possui símbolos, apenas aceita o sublinhado do i(_) );
- Os parâmetros(Um parâmetro em uma função é uma variável que define um valor específico durante a definição da função. Por exemplo, os dois números têm uma multiplicação.);
- A chamada (Apenas escreva o nome da variável em console.log(Variable_Name() ) );

### Expressão X Declaração
- Elevação: as declarações de função são elevadas e podem ser chamadas antes de sua linha de definição, enquanto as expressões de função não podem.
- Flexibilidade: Expressões de Função podem ser anônimas e usadas em tempo de execução, o que permite mais flexibilidade.

# Hosting
Hoisting é um comportamento JavaScript no qual as declarações de variáveis ​​​​e funções são "movidas" para o topo de seu escopo (global ou função) antes que o código seja executado.Contudo, este é um comportamento conceitual; Na prática, o que acontece é que o JavaScript trata as declarações como se estivessem no topo, mesmo que apareçam em outro lugar do código.

## Hosting nos exemplos citados
As funções declaradas usando function são totalmente elevadas ao topo do escopo, incluindo o corpo da função. Isso significa que essas funções podem ser chamadas antes de serem declaradas no código.Nas funções de expressões ocorre apenas a declaração da variável (com var), mas a função só estará disponível após a linha em que está definida. Com let ou const, tentar acessar antes da declaração resulta em erro.
![maxresdefault](https://github.com/user-attachments/assets/5bf77ca5-0dd0-4f8b-8951-7464871bce53)