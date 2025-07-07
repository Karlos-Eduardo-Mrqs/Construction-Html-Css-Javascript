# Observação 👁️

- [Leia o módulo anterior antes de começar](../../Modulo%204%20-%20Funções/Construtoras-Número_09/Construtoras.md)

---

## Métodos de String JavaScript

Sequências de caracteres constituem **strings** em JavaScript. Elas são tratadas como tipos de dados simples. Ao invocar métodos de string, o JavaScript converte automaticamente a string primitiva em um objeto string, permitindo o uso de diversos métodos embutidos.

---

## 1. Métodos de Medição e Recuperação de Caracteres

- **`length`**: Retorna o comprimento de uma string.  
![imagem](https://github.com/user-attachments/assets/d3c13bfe-171c-47e4-88c1-bde61e718306)

- **`charAt(index)`**: Retorna o caractere na posição especificada.  
  ![imagem](https://github.com/user-attachments/assets/75e9318b-84ee-446b-a41d-190370f9c788)

- **`charCodeAt(index)`**: Retorna o código Unicode do caractere especificado.  
  ![imagem](https://github.com/user-attachments/assets/a5dd416c-673b-49e9-bb98-1c6bebc51485)

---

## 2. Métodos de Extração de Strings

- **`slice(start, end)`**: Extrai parte de uma string e retorna uma nova string.  
  ![imagem](https://github.com/user-attachments/assets/dd7b4765-252c-4706-9510-9caddb7a669a)  
  Exemplos com diferentes parâmetros:  
  ![imagem](https://github.com/user-attachments/assets/d1fdfc9f-7175-431b-9437-ce61d3e837b8)  
  ![imagem](https://github.com/user-attachments/assets/cfa798a5-ae5e-4e9c-804f-4dc2829f7a0e)

- **`substring(start, end)`**: Similar a `slice()`, porém **não aceita índices negativos**.  
  ![imagem](https://github.com/user-attachments/assets/38a2478d-d17a-44b3-b465-84fbf634a80e)

- Ilustração:
  ![imagem](https://github.com/user-attachments/assets/157d4e22-1460-49ab-9ece-895f6a844502)

---

## 3. Métodos de Conversão de Caso

- **`toLowerCase()`** e **`toUpperCase()`**: Convertem strings para minúsculas e maiúsculas, respectivamente.  
  ![imagem](https://github.com/user-attachments/assets/091412e3-949a-40a4-963d-b43abc214a18)

---

## 4. Métodos de Concatenação de Strings

- **`concat(string1, string2, ...)`**: Junta duas ou mais strings.  
  ![imagem](https://github.com/user-attachments/assets/59bb39fe-3657-4023-8f46-461c2bfe31de)

- Também é possível usar o operador `+` para unir strings:  
  ![imagem](https://github.com/user-attachments/assets/bf57b525-ebdf-4b20-b0f2-792aebc106e8)

---

## 5. Métodos de Remoção de Espaços em Branco

- **`trim()`**: Remove espaços no início e no fim da string.  
  ![imagem](https://github.com/user-attachments/assets/46d81370-efd2-43f4-a89c-f45c77d43862)

- **`trimStart()`**: Remove espaços **apenas no início**.  
  ![imagem](https://github.com/user-attachments/assets/a85bdb9d-3572-4b27-a885-5416444a751a)

- **`trimEnd()`**: Remove espaços **apenas no final**.  
  ![imagem](https://github.com/user-attachments/assets/5b244241-0b33-4967-bfe9-6d583fa9ebe0)

---

## 6. Métodos de Preenchimento

- **`padStart(targetLength, padString)`**: Preenche o início da string até alcançar o comprimento desejado.
- **`padEnd(targetLength, padString)`**: Preenche o final da string.

  ![imagem](https://github.com/user-attachments/assets/1d2f76c6-e9a9-454e-9ef7-638194ecaebb)

---

## 7. Método de Repetição

- **`repeat(count)`**: Repete a string o número de vezes especificado.  
  ![imagem](https://github.com/user-attachments/assets/ff911e4f-df7f-4081-9705-a94472839dae)

---

## 8. Métodos de Substituição de Strings

- **`replace(searchValue, newValue)`**: Substitui a **primeira ocorrência** de `searchValue` por `newValue`.  
  ![imagem](https://github.com/user-attachments/assets/35468e09-fbc7-4906-9a7f-29efb6cf57fb)

---

## Próximo capítulo

- [Continuando Parte 2](../Strings-Número_10/BuscaComStrings.md)
