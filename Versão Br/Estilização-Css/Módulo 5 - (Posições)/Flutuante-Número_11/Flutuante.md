# Observação 👁️

- 📌 [Leia o Módulo 4 antes de continuar](../../Módulo%204%20-%20(Estilos%20De%20Fontes)/Decoração-Número_10/Decoração.md)

---

## 📦 Posição Flutuante – `float`

Aprenderemos agora a manipular **posições flutuantes** de elementos no CSS.

## 📘 Exemplo Inicial

Temos quatro caixas com a mesma classe `box`. A propriedade `float` pode ser utilizada para controlar o alinhamento lateral desses elementos:

```css
float: left;
```

| Valor   | Efeito                            |
| ------- | --------------------------------- |
| `left`  | Posiciona o elemento à esquerda   |
| `right` | Posiciona o elemento à direita    |
| `none`  | Remove o posicionamento flutuante |

![image](https://github.com/user-attachments/assets/3fa946c3-9b3c-43f9-8d5b-930480e37e97)

---

## 🎯 Variações Visuais do `float`

### 🔹 1. Todos os elementos à esquerda

```css
.box {
  float: left;
}
```

![image](https://github.com/user-attachments/assets/4fdd58ef-e03c-493e-8b64-65484447a3a1)

### 🔸 2. Todos os elementos à direita

```css
.box {
  float: right;
}
```

![image](https://github.com/user-attachments/assets/3900bbb7-d558-4ba0-badd-670ff60304e6)

### 🔹 3. Dois à esquerda e dois à direita

```css
.box1, .box2 {
  float: left;
}
.box3, .box4 {
  float: right;
}
```

![image](https://github.com/user-attachments/assets/394d4232-48db-454b-9fae-7b71a68cbe4b)

### 🔸 4. Três flutuando à esquerda, um fixo

```css
.box1, .box2, .box3 {
  float: left;
}
.box4 {
  float: none;
}
```

![image](https://github.com/user-attachments/assets/bedcb8f6-78bc-4bea-bdd6-f3bb33eaf5e4)

Você pode criar diversas variações combinando os tipos de `float` com `width`, `margin`, `padding` e `display` para organizar seu layout.

---

## ✅ Próximo Conteúdo

- ➡️ [Continua no Número\_12 – Posições](../Poses-Número_12/Poses.md)
