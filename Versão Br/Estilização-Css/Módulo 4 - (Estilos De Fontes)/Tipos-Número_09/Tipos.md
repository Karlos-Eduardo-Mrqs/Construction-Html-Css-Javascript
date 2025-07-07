# Observação 👁️

* 📌 [Leia o Módulo 3 antes de continuar](../../Módulo%203%20-%20(Espaçamento)/Contenção-Número_08/contenção.md)

---

## 🔤 `font-family`

![image](https://github.com/user-attachments/assets/f3e121ae-5a5f-40ae-bae2-e3b423d839dd)

Por padrão, se não for especificado o estilo da fonte, o navegador usa **Times New Roman**:

![0\_QBGG7EdJWTMq6goC](https://github.com/user-attachments/assets/0181afd3-a366-475e-8f60-40ad967cdfb3)

### 🧬 Diferença entre `serif` e `sans-serif`

* `serif`: fontes com **pontas decorativas** (ex: Times New Roman)
* `sans-serif`: fontes **sem essas pontas** (ex: Arial, Verdana)

![BP-Serif-SansSerif-Graphic1-862x518](https://github.com/user-attachments/assets/725a3018-c9e3-444c-82f9-079a9e05476c)

### 📦 Exemplo prático

Para aplicar a fonte **Verdana** à caixa bege:

```css
font-family: Verdana, Geneva, Tahoma, sans-serif;
```

Ou, no Visual Studio Code:

> CTRL + Espaço + Nome da fonte desejada

![image](https://github.com/user-attachments/assets/500c317c-eb99-4491-a90c-4acc406d924f)

---

## 🌐 Importando Fontes Personalizadas

Você pode usar fontes externas com o [Google Fonts](https://fonts.google.com/):

### 1️⃣ Via `<link>`

* Copie o código `link` gerado e cole **acima da sua tag `<link>` de CSS** no HTML.

### 2️⃣ Via `@import`

* Copie o código `@import` e cole **no início do seu CSS**.

---

## 🏋️‍♂️ `font-weight`

Controla a **espessura** ou **peso** da fonte.

![image](https://github.com/user-attachments/assets/a5fa6b36-db57-44ff-b536-1b4de0ebd112)

### Exemplo com a fonte `Poppins`

Ela possui variantes de `100` até `900`. Quanto maior, mais forte e escura fica a fonte:

![image](https://github.com/user-attachments/assets/82df9c33-58a6-44dc-a204-5c46326ade53)

### Valores textuais

* `lighter`
* `normal`
* `bold`
* `bolder`

Exemplo visual das quatro variações:

![image](https://github.com/user-attachments/assets/c783058d-b167-4434-8cd9-f6e04d1dbb01)

---

## ✨ `font-style`

Define o **estilo** do texto:

| Valor     | Efeito                                   |
| --------- | ---------------------------------------- |
| `normal`  | Mantém o texto padrão                    |
| `italic`  | Inclina o texto para a direita (itálico) |
| `oblique` | Semelhante ao `italic` (menos utilizado) |

---

## ✅ Próximo Conteúdo

* ➡️ [Continue no Número\_10 – Decoração](../Decoração-Número_10/Decoração.md)
