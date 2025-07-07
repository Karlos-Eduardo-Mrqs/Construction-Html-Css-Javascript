# Observação 👁️

- [Leia a Parte 2!](../Arrays-Número_12/Procura.md)

---

## 🗺️ Mapas JavaScript

O objeto `Map` em JavaScript contém pares de valores-chave e **preserva a ordem de inserção** original. Ele aceita **qualquer tipo de dado** como chave ou valor — incluindo objetos, números, strings e até `NaN`.

Essa flexibilidade o torna ideal para gerenciar dados estruturados de forma dinâmica e performática.

---

## 💡 Quando usar Maps?

Use `Map` quando:

- Precisa armazenar pares chave-valor com **chaves únicas**;
- As **chaves não são conhecidas em tempo de desenvolvimento**;
- Deseja **acesso eficiente** e métodos específicos para manipular os dados.

> 🔑 Diferente de objetos comuns (`{}`), as chaves de um `Map` podem ser de **qualquer tipo**.

![Exemplo Visual de Map](https://github.com/user-attachments/assets/fa3d65b7-7a6e-4470-baa0-581b0fd9f9ef)

---

### 🧱 Estrutura de um Mapa

Um `Map` é criado e preenchido da seguinte forma:

```javascript
const mapa = new Map();
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");
```

![imagem](https://github.com/user-attachments/assets/b7d9cdb8-7f81-4ea7-9719-1eb23bc5bf2e)

---

## 🔧 Métodos de Manipulação

- **`Map.set(key, value)`**  
  Adiciona ou atualiza um par chave-valor no mapa.  
  ![imagem](https://github.com/user-attachments/assets/08f56ca6-1229-44f8-9d0c-ee26d318e458)

- **`Map.delete(key)`**  
  Remove um item do mapa com base na chave fornecida.  
  ![imagem](https://github.com/user-attachments/assets/8f61724f-6d5b-47fc-9f9f-2fa29243ac2e)

- **`Map.clear()`**  
  Remove **todos os elementos** do mapa.  
  ![imagem](https://github.com/user-attachments/assets/4f958353-4e1f-4ca1-9c17-895b8d48b925)

- **`Map.size`**  
  Retorna o número total de pares no mapa.  
  ![imagem](https://github.com/user-attachments/assets/d7dae3b5-c97c-4995-a421-880f9fdd8cfe)

---

## 🎯 Métodos de Seleção

- **`Map.values()`**  
  Retorna um **iterador com os valores** do mapa.  
  ![imagem](https://github.com/user-attachments/assets/a5c279d8-9086-4e0b-abd6-83b7671f79e0)

- **`Map.entries()`**  
  Retorna um iterador com os **pares `[chave, valor]`**.  
  ![imagem](https://github.com/user-attachments/assets/76bd37f7-beea-44ab-9e15-727f805d3dd8)

- **`Map.keys()`**  
  Retorna um **iterador com as chaves** do mapa.  
  ![imagem](https://github.com/user-attachments/assets/60d8a9b4-4956-4c67-918a-2eeed85982a1)

---

## 🔍 Métodos de Pesquisa

- **`Map.get(key)`**  
  Retorna o **valor associado** à chave fornecida.  
  ![imagem](https://github.com/user-attachments/assets/c944e6b5-b5a4-491f-935c-666dc7dad1ea)

- **`Map.has(key)`**  
  Retorna `true` se a chave existe no mapa, ou `false` caso contrário.  
  ![imagem](https://github.com/user-attachments/assets/17c61f0c-2d0e-45a6-ba82-f93d4312ebe2)

---

## Próximo Capítulo

- [Próximo capítulo](../Datas-Número_13/Datas.md)
