# [Retorne a Parte Um para Continuar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Intera%C3%A7%C3%A3o-Javascript/Modulo%205%20-%20Manipula%C3%A7%C3%A3o%20de%20Dados/Strings-N%C3%BAmero_10/Strings.md)

# Métodos de pesquisa e verificação em strings
As strings geralmente envolvem a busca por valores específicos ou a verificação de padrões. Aqui estão algumas das principais categorias e métodos para essas tarefas:

## 1. Métodos de pesquisa de índice
Esses métodos são usados ​​para retornar o índice da primeira ou última ocorrência de um valor especificado em uma string. Se o valor não for encontrado, retorna -1.

- **String.indexOf(value):** Retorna o índice da primeira ocorrência de um valor especificado.
![imagem](https://github.com/user-attachments/assets/f30200f4-e46f-4663-a360-58aee3fe2ea6)

- **String.lastIndexOf(value):** Retorna o índice da última ocorrência de um valor especificado.
![imagem](https://github.com/user-attachments/assets/978d4d10-dcfe-4412-a2f3-63c6bdbbbeeb)

## 2. Método de pesquisa de expressão regular
Use expressões regulares para verificar padrões específicos em uma string. Se não houver correspondência, retorna -1.

- **String.search(value):** Retorna o índice da primeira correspondência de uma expressão regular.
![imagem](https://github.com/user-attachments/assets/a55da8bf-b37c-48fe-b0aa-7f6ac934213f)

## 3. Métodos de correspondência de padrões
Esses métodos retornam todas as correspondências de padrões em uma string, usando expressões regulares.

- **String.match():** Retorna um array com todas as correspondências encontradas ou nulo se nenhuma correspondência for encontrada.
![imagem](https://github.com/user-attachments/assets/04c886a3-e920-48c1-be92-8d7c79834999)

- **String.matchAll():** Retorna um iterador com todas as correspondências encontradas usando uma expressão regular com o sinalizador "g" (global).
![imagem](https://github.com/user-attachments/assets/055ae045-62da-408f-b72d-1af56728a5b2)

## 4. Métodos de verificação de substring
Verifique se existe uma substring específica na string principal. Retornando verdadeiro ou falso.

- **String.includes(value):** Verifique se uma string contém um valor especificado.
![imagem](https://github.com/user-attachments/assets/805f0235-cc26-4bbb-a2a9-67cdad40a1c6)

- **String.startsWith(value):** Verifica se uma string começa com um valor especificado.
![imagem](https://github.com/user-attachments/assets/92be932a-dd6e-4d84-bfb2-34d88647a516)

- **String.endsWith(value):** Verifique se uma string termina com um valor especificado.
![imagem](https://github.com/user-attachments/assets/0ecab528-7d23-41eb-9321-188487f71b03)

Esses métodos são essenciais em muitas operações de manipulação de strings, fornecendo uma maneira eficiente e prática de realizar buscas e verificações.