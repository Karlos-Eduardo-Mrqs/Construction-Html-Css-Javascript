# Observação 👁️

- 📌 [Leia o Número\_04](../Paleta_De_Cores-Número_04/Paleta.md)

---

## 🌟 O que é Preenchimento?

O **preenchimento** (ou `background`) é usado para:

- Criar espaços visuais com **cores** 🎨;
- Inserir **imagens** 🖼️ como fundo;
- Deixar áreas **transparentes** 👻;
- Controlar visualmente cada parte da página!

Vamos explorar tudo isso com exemplos visuais! 👇

---

## 🎨 Preenchimento com Cores

Temos uma página com fundo cinza (`background-color: gray`) e duas caixas:

🔷 Uma `div.box` azul com `150px x 150px`:

![box azul](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3d24476c-6b08-462d-b34e-265b563627ce)

🔴 Uma `div.box-2` vermelha com `350px x 350px` ao lado da anterior:

![box vermelha](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a8553b0c-3f97-4b39-a4d8-f030314b9f81)

📦 Dentro da `box-2`, temos a `box-21` verde com `100px x 100px`:

![box verde](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d1cca5a1-66ae-41e9-ba9e-530e026d3f69)

🟡 Por fim, uma `box-21a` amarela com `60px x 60px`, também dentro da anterior:

![box amarela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f7c32a2-78b1-4ad7-8dfd-bf58b27db8a6)

Todas **ocupam seu próprio espaço**, com os textos visivelmente bem posicionados.

---

## 👻 Fundo Transparente

Quer tornar a caixa invisível, mas ainda presente na estrutura da página?

Use:

```css
.box-2 {
  background: transparent;
}
```

🔍 Veja o efeito ao inspecionar o elemento:

![box transparente](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/66bbab1e-461f-4070-b987-66162eb2969b)

🖱️ Também funciona com botões! Por exemplo:

```css
button {
  background: transparent;
}
```

![botão transparente](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5562c82f-35f8-44b5-8cfe-30242526c903)

---

## 🖼️ Preenchimento com Imagens

Página com caixa branca (`600px x 500px`) sobre fundo cinza:

![estrutura](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2f90ef4e-1892-4c54-9acc-10fdfb03cb7a)

### 📌 `background-image`

Adicionando imagem como fundo:

```css
.box {
  background-image: url("images/image.png");
}
```

![imagem padrão](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8ffb7a0d-c5b3-45a4-8003-b99a9a209dc8)

### 🔁 `background-repeat`

Controla a repetição da imagem:

```css
background-repeat: no-repeat; /* outras opções abaixo */
```

- `repeat`: repete a imagem (padrão)
- `no-repeat`: mostra uma única vez
- `repeat-x`: repete só na horizontal
- `repeat-y`: repete só na vertical
- `space`: repete conforme o espaço disponível

![sem repetição](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd72af32-6693-48b0-8603-73bb34020610)

### 📏 `background-size`

Controla o **tamanho** da imagem:

```css
background-size: cover;
```

- `auto`: tamanho original
- `contain`: ajusta sem cortar
- `cover`: cobre toda a caixa

![background cover](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f939704d-239e-4b28-8e9f-91222b2d0db0)

### 🎯 `background-position`

Posiciona a imagem dentro da caixa:

```css
background-position: top center;
```

- `top top`
- `top center`
- `bottom center`
- `center center`, etc.

![posição da imagem](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1d0b63f9-c373-4c51-8fdc-b326a0912ec4)

### 🧩 Duas imagens numa `div`?

Sim, mas o ideal é usar **divs filhas**:

Exemplo com `box-21` como filha da `box`, exibindo uma segunda imagem sem repetição, posicionada no topo da imagem anterior:

![duas imagens](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9ed49fa5-77fd-409c-9f2c-cc2522345dd6)

---

## ✅ Próximo Conteúdo

➡️ [Continua no Número\_06 – Bordas](../Bordas-Número_06/Borda.md)
