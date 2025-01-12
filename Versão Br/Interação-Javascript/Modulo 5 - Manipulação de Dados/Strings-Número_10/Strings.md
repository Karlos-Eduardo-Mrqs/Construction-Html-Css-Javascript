# Métodos de string JavaScript
Sequências de caracteres constituem strings em JavaScript. Eles são tratados como tipos de dados simples. Ao invocar métodos de string em strings em JavaScript, as strings são automaticamente transformadas em objetos string.
## 1. Métodos de medição e recuperação de caracteres
- **lenght:** Retorna o comprimento de uma string.
![imagem](https://github.com/user-attachments/assets/d3c13bfe-171c-47e4-88c1-bde61e718306)

- **charAt(index):** Retorna o caractere em uma posição especificada.
![imagem](https://github.com/user-attachments/assets/75e9318b-84ee-446b-a41d-190370f9c788)

- **charCodeAt(index):** Retorna o Unicode do caractere em uma posição especificada.
![Captura de tela 2024-08-27 101703](https://github.com/user-attachments/assets/a5dd416c-673b-49e9-bb98-1c6bebc51485)

## 2. Métodos de extração de strings
- **slice(start, end):** Extrai uma parte de uma string e retorna a parte extraída em uma nova string.
![imagem](https://github.com/user-attachments/assets/dd7b4765-252c-4706-9510-9caddb7a669a)

Dependendo da forma como você atribui os parâmetros de uma fatia, você terá outros resultados. Por exemplo:
![imagem](https://github.com/user-attachments/assets/d1fdfc9f-7175-431b-9437-ce61d3e837b8)
![imagem](https://github.com/user-attachments/assets/cfa798a5-ae5e-4e9c-804f-4dc2829f7a0e)

- **substring(start, end):** Semelhante a slice(), mas não pode aceitar índices negativos.
![imagem](https://github.com/user-attachments/assets/38a2478d-d17a-44b3-b465-84fbf634a80e)
### Ilustração
![imagem](https://github.com/user-attachments/assets/157d4e22-1460-49ab-9ece-895f6a844502)

## 3. Métodos de conversão de caso
- **toLowerCase() e toUpperCase():** Uma string é convertida para maiúscula com toUpperCase(). Uma string é convertida para minúsculas com toLowerCase():
![imagem](https://github.com/user-attachments/assets/091412e3-949a-40a4-963d-b43abc214a18)

## 4. Métodos de concatenação de strings
- **concat(string1, string2, ...):** Une duas ou mais strings e retorna uma nova string.
![imagem](https://github.com/user-attachments/assets/59bb39fe-3657-4023-8f46-461c2bfe31de)

Ou, se preferir, você pode usar o operador "+" para unir as strings:
![imagem](https://github.com/user-attachments/assets/bf57b525-ebdf-4b20-b0f2-792aebc106e8)
## 5. Métodos de remoção de espaços em branco
- **trim():** Remove espaços em branco de ambos os lados de uma string.
![imagem](https://github.com/user-attachments/assets/46d81370-efd2-43f4-a89c-f45c77d43862)
- **trimStart():** Remove espaços em branco apenas do início de uma string.
![imagem](https://github.com/user-attachments/assets/a85bdb9d-3572-4b27-a885-5416444a751a)
- **trimEnd():** Remove espaços em branco apenas do final de uma string.
![imagem](https://github.com/user-attachments/assets/5b244241-0b33-4967-bfe9-6d583fa9ebe0)
## 6. Métodos de preenchimento
- **padStart(targetLength, padString):** Preenche a string atual com outra string (várias vezes, se necessário) até atingir o comprimento alvo, começando do início.
- **padEnd(targetLength, padString):** Preenche a string atual com outra string (várias vezes, se necessário) até atingir o comprimento alvo, começando pelo final.

![imagem](https://github.com/user-attachments/assets/1d2f76c6-e9a9-454e-9ef7-638194ecaebb)

## 7. Método de Repetição
- **repeat(count):** Retorna uma nova string com um número especificado de cópias da string em que foi chamada.
![imagem](https://github.com/user-attachments/assets/ff911e4f-df7f-4081-9705-a94472839dae)

## 8. Métodos de substituição de strings
- **replace(searchValue, newValue):** Substitui a primeira ocorrência de um valor especificado por outro valor em uma string.
![imagem](https://github.com/user-attachments/assets/35468e09-fbc7-4906-9a7f-29efb6cf57fb)

# [Continuando Parte 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Intera%C3%A7%C3%A3o-Javascript/Modulo%205%20-%20Manipula%C3%A7%C3%A3o%20de%20Dados/Strings-N%C3%BAmero_10/BuscaComStrings.md)
