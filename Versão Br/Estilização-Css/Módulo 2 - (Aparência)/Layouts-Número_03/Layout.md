# 👁️ Observação

* [Leia o Módulo 1 antes de continuar](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/tree/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%201%20-%20%28Primeiros%20Passos%29)

---

## 🧱 Layouts

Bem-vindo ao **Módulo 2** da nossa jornada com CSS! Neste módulo, você aprenderá a controlar a **aparência visual** da sua página com estilos que transformam completamente o layout.

---

## 📐 Display — Comportamento dos Elementos

O atributo `display` é essencial no CSS! Ele define **como um elemento será renderizado na página**.

![Exemplo com Display](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/de06ca82-cefa-4ead-9b95-7686b06bf04c)

Vamos comparar 3 elementos: uma `div`, um `p` (parágrafo) e um `span`:

![Inspeção - Div](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0eb0d2bc-bcc5-4f56-a8d1-b58ae68c1b06)
![Inspeção - Parágrafo](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6b06106b-1ac1-4318-96bf-13f607caf31d)
![Inspeção - Span](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d096f58-167b-4c3f-9f8b-71008111e860)

🔎 Perceba:

* **DIV e Parágrafo** usam `display: block;`, ocupando toda a linha.
* **SPAN** usa `display: inline;`, ocupando apenas o espaço do conteúdo.

---

## 🧾 Tipos de Display

| Tipo           | Descrição                                                                 |
| -------------- | ------------------------------------------------------------------------- |
| `block`        | Ocupa toda a linha. Permite altura/largura personalizadas.                |
| `inline`       | Ocupa apenas o espaço necessário. **Não** aceita altura/largura.          |
| `inline-block` | Mistura o melhor dos dois: ocupa só o necessário, **mas** permite ajuste. |

---

## 📏 Altura e Largura (`height` e `width`)

Você pode definir o **tamanho** dos elementos com `width` (largura) e `height` (altura).

🟦 Exemplo: Div com `width: 500px`

![Div 500px largura](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d9294f68-7e5f-481f-9218-da7e164d2cd1)

🔹 Agora com `height: 300px`

![Div 500x300](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/680ca42b-ae9c-4738-825c-3d5afcbaee3d)

Mas e se aplicarmos isso a um `span`?

![Span com height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/fbee455c-4174-41b9-ab51-3b7642d11a57)

❌ Não funciona, pois `span` é `inline`. Para isso, usamos:

✅ `display: inline-block;`

![Display inline-block](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/04f49f65-6623-47ae-be56-051286a21353)

---

## 📐 Mínimo e Máximo (`min-width`, `max-width`, `min-height`, `max-height`)

Controlamos os **limites** de tamanho com essas propriedades:

📦 Div com largura `200px`, mas `max-width: 300px;`

![max-width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9c4467fa-62d3-4d1f-9a88-e8c039f29b6f)

🔍 Mesmo se tentarmos `width: 310px`, ele não ultrapassa 300px:

![width forçado](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/663e827a-08a4-4e9e-9e1b-3670167f2207)

🧱 Já com `min-width: 300px`, mesmo que esteja com `200px`, o valor mínimo será 300px:

![min-width](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5303cf89-0636-4d92-82fa-57028cd5f9a5)

🔻 Com altura também funciona!

📏 `height: 350px;` com `max-height: 400px`:

![max-height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3af5e071-5cb8-40d9-8bbc-3515d4c8d218)

Se colocarmos `height: 500px;`, ele será **limitado**:

![alturas restritas](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5873953a-f843-475d-a9c0-45c66cb356ea)

🔒 Com `min-height: 240px`, ele será **obrigado** a ocupar ao menos esse tamanho:

![min-height](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/dd15fb6a-d2dd-409d-a526-795c986ad350)

---

## 👉 Próximo Conteúdo

[Continua no Número_04](../Paleta_De_Cores-Número_04/Paleta.md)
