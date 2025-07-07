# Observação 👁️

📌 [Leia o Módulo 2 antes de continuar](../../Módulo%202%20-%20(Aparência)/Bordas-Número_06/Borda.md)

---

## 🧩 O que é Espaçamento?

Espaçamento é a **distância** entre elementos ou entre o conteúdo e as bordas de um elemento.

Ele pode ser de **dois tipos**:

* 🔲 **Externo**: controlado por `margin`
* 🟦 **Interno**: controlado por `padding`

![esquema de espaçamento](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c6299b7e-9462-46a5-9359-235a42e64581)

---

## ⛔ Espaçamento Externo – `margin`

A margem define o espaço **fora** da borda do elemento. Útil para afastar elementos uns dos outros.

### ✅ Exemplo Prático

Temos duas `divs` lado a lado, coladas:

![caixas coladas](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4b29163b-a04f-41e3-8d37-385a256162a9)

Ao aplicar `margin: 20px`:

```css
.section, .box2 {
  margin: 20px;
}
```

![caixas espaçadas](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9cae2951-ef54-4916-a641-83c265a6cd17)

### 🧠 Formas de escrever `margin`

* **4 valores (sentido horário):**

```css
margin: 20px 15px 15px 20px;  /* Topo, Direita, Baixo, Esquerda */
```

![margin 4 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/88d22cbb-90bc-4818-ab07-a787267060ed)

* **3 valores:**

  ```css
  margin: 20px 15px 20px;
  /* Topo, Laterais, Baixo */
  ```

  ![margin 3 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/597bf5df-57e8-4a57-a135-a3ff6f5209da)

* **2 valores:**

  ```css
  margin: 20px 15px;
  /* Vertical (top/bottom), Horizontal (left/right) */
  ```

  ![margin 2 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/16d5adf6-0e07-43f1-ae88-6d488d74e080)

* **1 valor:**

  ```css
  margin: 20px; /* todos os lados */
  ```

---

## 🔳 Espaçamento Interno – `padding`

O `padding` define o espaço **dentro** da borda do elemento. Ou seja, entre a borda e o conteúdo (texto, imagem, etc).

### ✅ Exemplo Prático

Observe o texto grudado no topo da caixa:

![sem padding](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/7a5a694b-9913-41cf-8f9f-78b99f502030)

Ao aplicar `padding: 50px`:

```css
.section {
  padding: 50px;
}
```

![com padding](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/020323ec-4bed-4a0f-8b0c-61ab65f71e21)

### 🧠 Formas de escrever `padding`

* **4 valores (sentido horário):**

  ```css
  padding: 30px 50px 50px 30px;
  ```

  ![padding 4 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2ad46b15-399f-4243-b5a0-b790827478f2)

* **3 valores:**

  ```css
  padding: 50px 20px 50px;
  ```

  ![padding 3 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/460e63aa-e429-4d68-abf0-35fa0f5b4fea)

* **2 valores:**

  ```css
  padding: 20px 15px;
  ```

  ![padding 2 valores](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/711316e6-f5d9-465f-bdbb-7032b724825d)

* **1 valor:**

  ```css
  padding: 20px;
  ```

---

## 🔗 Extra: `width` e `height`

📦 Para definir **largura** e **altura** de elementos:

[Leia mais sobre Layout (width e height)](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%202%20-%20%28Apar%C3%AAncia%29/Layouts-N%C3%BAmero_03/Layout.md)

---

## ✅ Próximo Conteúdo

➡️ [Continua no Número\_08](../Contenção%20-%20Número_08/contenção.md)
