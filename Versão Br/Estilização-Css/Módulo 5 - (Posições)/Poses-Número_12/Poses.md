# Observação 👁️

* 📌 [Leia o Número\_11 antes de continuar](../Flutuante-Número_11/Flutuante.md)

---

## 🎯 Posições Específicas – `position`

Anteriormente, aprendemos a usar o `float` para alinhar elementos lateralmente. Agora veremos como **posicionar elementos em qualquer lugar da tela**.

---

## 🧭 Entendendo com o Plano Cartesiano

A lógica do `position` pode ser comparada a um plano cartesiano:

![istockphoto-1363110242-612x612](https://github.com/user-attachments/assets/4b7711b3-54a0-469c-8a2b-ac40c46825d5)

* **Eixo X**: representa a **largura**
* **Eixo Y**: representa a **altura**

![image](https://github.com/user-attachments/assets/504f6847-3ce8-49f7-90ba-19ddecd833b9)

---

## 📦 Exemplo Prático

Vamos usar `position` em conjunto com `top`, `left`, `right` e `bottom` para mover a `Box4`:

```css
.box4 {
  position: absolute;
  top: 0px;
  right: 0px;
}
```

![image](https://github.com/user-attachments/assets/a9ddbf77-5a07-45da-a018-a183a78adcce)

### 📐 Regras do posicionamento absoluto

| Direção  | Valor menor       | Valor maior       |
| -------- | ----------------- | ----------------- |
| `top`    | Sobe              | Desce             |
| `bottom` | Desce             | Sobe              |
| `right`  | Vai para direita  | Vai para esquerda |
| `left`   | Vai para esquerda | Vai para direita  |

---

## 🔄 Tipos de `position`

### 🔸 `static`

* Padrão do navegador (sem movimentação manual)

### 🔸 `absolute`

* Posiciona com base no **elemento pai ou no `body`**
* **Sai do fluxo** do layout

### 🔸 `relative`

* Mantém a posição original, mas pode ser deslocado
* Serve como **referência para elementos `absolute` dentro dele**

#### ✅ Exemplo: Posicionar `.boxD` dentro de `.boxC`

Se `.boxD` for `absolute`, ela sai do fluxo. Se a `.boxC` for `relative`, ela servirá como base:

```css
.boxC {
  position: relative;
}
.boxD {
  position: absolute;
  top: 0;
  right: 0;
}
```

![image](https://github.com/user-attachments/assets/28d092d1-2ba5-4821-9b39-1e145d729a6a)

---

### 🔸 `fixed`

* Fixa o elemento na tela, mesmo com rolagem
* Muito usado em menus e cabeçalhos

```css
.box2 {
  position: fixed;
  top: 0;
  left: 0;
}
```

![image](https://github.com/user-attachments/assets/939f2f0e-f3fd-4b71-9769-89823d7f3325)

---

### 🔸 `sticky`

* Mistura de `relative` e `fixed`
* O elemento **fica parado** quando atinge determinada posição

```css
.box {
  position: sticky;
  top: 0;
}
```

![image](https://github.com/user-attachments/assets/478e5c12-75be-4efe-826e-c6cffd069ca9)

---

## ✅ Próximo Conteúdo

➡️ [Continua no Número\_13](../Eixos_X,Y,Z-Número_13/Eixos.md)
