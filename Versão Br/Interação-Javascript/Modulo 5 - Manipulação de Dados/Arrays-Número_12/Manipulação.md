# Observação 👁️

- [Leia o capítulo anterior](../Números-Número_11/Math.md)

---

## 🧮 Métodos Com Arrays

O objeto `Array`, assim como acontece com arrays em outras linguagens de programação, permite armazenar uma coleção de vários itens sob um único nome de variável e possui membros para realizar operações comuns com arrays.

---

### 🔎 Métodos de Acesso e Informações

1. **`Array.length`**  
   Retorna o número de elementos do array.  
   ![imagem](https://github.com/user-attachments/assets/61ed6110-de81-4764-8a9d-ca60749c7381)

2. **`Array.at(index)`**  
   Retorna o elemento da posição especificada.  
   ![imagem](https://github.com/user-attachments/assets/d13eb41e-cb94-41e7-abf6-1ce91ab030e0)

3. **`Array.toString()`**  
   Converte o array em uma string, com elementos separados por vírgulas.  
   ![imagem](https://github.com/user-attachments/assets/a31f9ff2-a3a9-4804-b82b-9539d2da54f9)

4. **`Array.join(separator)`**  
   Une todos os elementos do array em uma string, usando um separador especificado.  
   ![imagem](https://github.com/user-attachments/assets/8e1b6c24-9660-4a8c-9c1e-4fe55f90c28c)

---

## 🧱 Métodos de Criação e Modificação

1. **`Array.push(element1, element2, ...)`**  
   Adiciona um ou mais elementos ao final do array.  
   ![imagem](https://github.com/user-attachments/assets/1261080c-1658-4943-bd1b-91760c6531f9)

2. **`Array.unshift(element1, element2, ...)`**  
   Adiciona um ou mais elementos ao início do array.  
   ![imagem](https://github.com/user-attachments/assets/d8f6d339-19c6-46f6-8983-09b24fa634c2)

3. **`Array.splice(start, deleteCount, item1, item2, ...)`**  
   Adiciona, remove ou substitui elementos dentro do array:  
   - `start`: índice no qual começa a modificação  
   - `deleteCount`: número de elementos a serem removidos  
   - `item1, item2...`: elementos que serão adicionados  
   ![imagem](https://github.com/user-attachments/assets/e3a5d122-fb48-46b6-b3d9-ab6c4ccdea1c)

4. **`Array.concat(array2, array3, ...)`**  
   Une dois ou mais arrays e retorna um novo array.  
   ![imagem](https://github.com/user-attachments/assets/b786d3aa-32be-4aa1-b7cc-80c9a8c03778)

### 💡 Lógica dos Arrays

![image](https://github.com/user-attachments/assets/7b535e5e-d48b-4448-8ddc-64aed2ffd782)

---

## 🔁 Métodos de Cópia e Transformação

1. **`Array.slice(start, end)`**  
   Retorna uma cópia superficial de uma parte do array sem modificá-lo.  
   ![imagem](https://github.com/user-attachments/assets/74ffb34a-5936-401e-b566-6c0c5577707c)

2. **`Array.flat(profundidade)`**  
   "Achata" arrays aninhados em uma única estrutura plana.  
   ![imagem](https://github.com/user-attachments/assets/5f7937e5-c14d-4c5a-9fdd-06ecc884558e)

3. **`Array.copyWithin(destination, start, end)`**  
   Copia uma parte do array para outro local dentro do mesmo array:  
   - `destination`: índice onde a cópia será inserida  
   - `start` (opcional): índice onde a cópia começa  
   - `end` (opcional): índice onde a cópia termina (não incluso)  
   ![imagem](https://github.com/user-attachments/assets/39af0e6b-c3b6-46f5-b999-ce8ce1625451)

---

## 🗑️ Métodos de Exclusão

1. **`delete array[index]`**  
   Remove um elemento do array, deixando o índice como `undefined` (⚠️ não recomendado).  

   ![imagem](https://github.com/user-attachments/assets/7a81d27b-eb7e-4daf-999a-2cd45015bb00)

2. **`Array.pop()`**  
   Remove o último elemento do array.  

   ![imagem](https://github.com/user-attachments/assets/fcb9bff1-ce35-4f38-85ab-8ac7dd3f5b06)

3. **`Array.shift()`**  
   Remove o primeiro elemento do array.  

   ![imagem](https://github.com/user-attachments/assets/963c16a3-b1b1-472e-b6b0-003550b361a5)

---

## Próximo Capítulo

- [Continue na Parte 2!](../Arrays-Número_12/Procura.md)
