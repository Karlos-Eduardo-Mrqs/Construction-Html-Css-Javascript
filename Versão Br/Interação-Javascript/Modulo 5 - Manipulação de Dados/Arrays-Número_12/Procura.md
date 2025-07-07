# Observação 👁️

- [Leia a Parte 1!](../Arrays-Número_12/Manipulação.md)

---

## 🔍 Métodos de Pesquisa com Array

### 🔢 Métodos de Pesquisa de Índice

Esses métodos retornam o índice (posição) de um elemento no array ou `-1` se o elemento não for encontrado.

- **`Array.indexOf(element_name)`**  
  Retorna o **primeiro índice** no qual o elemento especificado foi encontrado no array. Retorna `-1` se não for encontrado.  
  ![imagem](https://github.com/user-attachments/assets/52464b93-ab05-4e79-8a49-0fd1cd6d9e7a)

- **`Array.lastIndexOf(element_name)`**  
  Retorna o **último índice** no qual o elemento especificado foi encontrado no array. Retorna `-1` se não for encontrado.  
  ![imagem](https://github.com/user-attachments/assets/3ad951af-3f41-4b6a-9cc7-fd748be2d827)

---

### 🔍 Métodos de Pesquisa de Valor

Esses métodos retornam o **valor de um elemento** que satisfaça uma condição específica.

- **`Array.find(callback(element, index, array), thisArg)`**  
  Retorna o **primeiro elemento** do array que satisfaz a função de teste. Retorna `undefined` se nenhum for encontrado.  
  ![imagem](https://github.com/user-attachments/assets/4435ec0a-17b3-4106-89c5-53d62ccd8b31)

- **`Array.findIndex(callback_function(element, index, array))`**  
  Retorna o **índice do primeiro elemento** que satisfaz a função de teste. Caso contrário, retorna `-1`.  
  ![imagem](https://github.com/user-attachments/assets/b1fdf074-b5ba-4b52-92c2-3c40161a8a93)

---

### ✅ Métodos de Verificação de Existência

Esses métodos verificam a **presença de um elemento** dentro do array.

- **`Array.includes(element, fromIndex)`**  
  Testa se um elemento específico existe no array e retorna `true` ou `false`.  
  ![imagem](https://github.com/user-attachments/assets/1b971c83-11ec-4799-8946-21aabadb5fcb)

---

## 📎 Continue aprendendo

- [Continue a Parte 3!](../Arrays-Número_12/Mapas.md)
