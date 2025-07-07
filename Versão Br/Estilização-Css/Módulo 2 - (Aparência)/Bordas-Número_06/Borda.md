# Observação 👁️

📌 [Leia o Número\_05](../Preenchimento-Número_05/Preenchimento.md)

---

## ✏️ O que são Bordas?

As **bordas** são contornos que decoram e delimitam elementos na página. Elas podem ser sólidas, pontilhadas, invisíveis, arredondadas e muito mais.

Vamos entender como aplicar estilos incríveis usando `border`, `border-radius`, `opacity`, `visibility` e muito mais! 😎

## 📦 Exemplo Base

Vamos usar esta `div.box` com:

* Largura: `500px`
* Altura: `600px`
* Cor de fundo: azul

![box azul com borda](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/690148e6-123c-437d-b4f4-056b9d5f8eed)

---

## 🧩 Atributos de Borda

### 🔸 `border-style`

Define o **estilo** da borda:

* `solid`: Sólida
* `dashed`: Tracejada
* `dotted`: Pontilhada
* `double`: Dupla
* `groove`, `ridge`, `inset`, `outset`: Efeitos 3D
* `none`, `hidden`, `unset`, `initial`, `inherit`: Invisível ou redefinida

### 🔸 `border-color`

Define a **cor da borda**.

### 🔸 `border-width`

Define a **espessura da borda** (ex: `10px`).

### ✅ Exemplo

```css
.box {
  border: red solid 10px;
}
```

![borda vermelha](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b15ad609-04a0-4ab1-a0be-0905a2326fe4)

---

## ↕️ Bordas por Direção

Você pode aplicar a borda em **lados específicos**:

* `border-top`
* `border-bottom`
* `border-left`
* `border-right`

Exemplo:

```css
.box {
  border-left: none;
}
```

---

## 🔵 Arredondando Cantos

### 🔸 `border-radius`

Controla o **arredondamento** dos cantos. Quanto maior o valor, mais arredondado o canto.

```css
.box {
  border-radius: 200px;
}
```

![canto arredondado](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d67e71de-ef48-4952-937b-91d0cde81923)

### 🧠 Combinações de `border-radius`

* **1 valor** – aplica em todos os cantos:

```css
  border-radius: 15px;
```

* **2 valores** – aplica em pares opostos:

```css
  border-radius: 15px 50px;
```

(superior esquerdo e inferior direito) / (superior direito e inferior esquerdo)

* **3 valores** – combina superior/inferior:

```css
  border-radius: 15px 50px 30px;
```

(superior esquerdo) / (superior direito e inferior esquerdo) / (inferior direito)

* **4 valores** – controla cada canto:

```css
  border-radius: 15px 50px 30px 5px;
```

  (cima esquerdo, cima direito, baixo direito, baixo esquerdo)

---

## 🎁 Bônus: Transparência e Visibilidade

### 🔸 `opacity`

Controla a **transparência** de um elemento:

```css
.box {
  opacity: 0.5; /* meio transparente */
}
```

* `0`: invisível
* `1`: opaco (visível)
* Valores entre `0` e `1`: níveis de transparência
* Também aceita: `inherit`, `unset`, `initial`

### 🔸 `visibility`

Controla a **visibilidade real** (sem afetar layout):

```css
.box {
  visibility: hidden; /* some da tela */
}
```

* `visible`: aparece normalmente
* `hidden`: some, mas mantém espaço
* `collapse`: usado para linhas de tabela

🔁 Dica: use `display: none;` para **remover totalmente** o elemento da tela.

---

## ✅ Próximo Conteúdo

➡️ [Continua no Módulo 3 – Espaçamento](../../Módulo%203%20-%20(Espaçamento)/Interno_E_Externo-Número_07/InternoExterno.md)
