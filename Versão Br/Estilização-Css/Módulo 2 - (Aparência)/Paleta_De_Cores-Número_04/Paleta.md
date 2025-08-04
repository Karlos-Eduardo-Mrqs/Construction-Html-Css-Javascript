# 🎨 Manipulação de Cores

📌 [Leia o Número\_03 antes de continuar](../Layouts-Número_03/Layout.md)

---

## 🌈 Introdução

Neste capítulo, vamos aprender como **alterar cores** no CSS e deixar seu site muito mais **vivo, criativo e visualmente atrativo**.

---

## 🧱 `background-color`

A propriedade `background-color` é utilizada para **alterar a cor de fundo** de qualquer elemento HTML — até mesmo do corpo da página.

### 🔹 Exemplo Básico

Temos dois parágrafos com IDs diferentes:

📄 Queremos deixar o parágrafo 1 com fundo azul:

```css
#Par1 {
  background-color: blue;
}
```

![Par1 Azul](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c7b84127-4b72-4a69-9e98-e76f1ac2e9bf)

📄 Agora, o parágrafo 2 com fundo vermelho:

```css
#Par2 {
  background-color: red;
}
```

![Par2 Vermelho](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eee43cb2-5d83-4a30-bebd-d48e012bb7e7)

---

## 🖥️ Outras Formas de Atribuir Fundo

### 1. 💻 Corpo da Página

```css
html {
  background-color: black;
}
```

![Página Preta](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/bdcf54d4-0237-4f15-9d64-8a53cab9b34e)

### 2. #️⃣ Códigos Hexadecimais

* Exemplo: `#568`
* Formato: `#RRGGBB`
* Letras de A a F representam números de 10 a 15

```css
html {
  background-color: #568;
}
```

![Hexadecimal](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/76204efe-4396-4490-85aa-4e051688abc6)

### 3. 🎨 RGB – Red, Green, Blue

Cada valor vai de `0 a 255`, permitindo misturas:

```css
#Par1 {
  background-color: rgb(245,133,89);
}
```

![RGB Cor](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1e14327d-bdad-4a21-8a4d-27e97dbeb787)

Você também pode usar hexadecimal equivalente:

```css
#Par2 {
  background-color: #116699;
}
```

![Hexadecimal RGB](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c8ec17b4-41f4-4c56-804e-5f2a8e16580e)

### 4. ✨ Transparência – RGBA e Hex com Alpha

Use `rgba()` para controlar a visibilidade da cor.

```css
#Par2 {
  background-color: rgba(17, 102, 153, 0.2);
}
```

Ou em hexadecimal com alpha:

* `#11669933` → mais transparente
* `#116699FF` → opaco

![Transparente](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1f983546-f2b3-42e2-a82e-99a65a228dcb)
![Opaco](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a430fd87-f1f5-4a4b-a1d4-6ae239e42ff8)

### 5. 🎡 HSL – Hue, Saturation, Lightness

```css
p {
  background-color: hsl(210, 50%, 50%);
}
```

* **Hue**: tom da cor (0 a 360)
* **Saturation**: saturação da cor (0% a 100%)
* **Lightness**: luminosidade (0% a 100%)

[🎨 Veja a roda de cores e entenda o HSL](https://www.xrite.com/pt-pt/blog/color-attributes-hue-chroma#:~:texto%20que%20%C3%A9%20matiz%3F,de%20um%20tom%20para%20outro.)

---

## ✅ Próximo Conteúdo

➡️ [Continua no Número\_05 – Preenchimento](../Preenchimento-Número_05/Preenchimento.md)
