# Observação 👁️

- 📌 [Leia o Número\_07 antes de continuar](../Interno_E_Externo-Número_07/InternoExterno.md)

---

## 🔒 Contenção

Neste capítulo aprenderemos a ver como lidar com a contenção do seu conteúdo.

### 📏 Tamanho da Caixa – `box-sizing`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4192dd64-b140-49ca-9707-446cc1db1741)

Usaremos essa página de exemplo, com duas caixas:

- `.box` (azul) com `box-sizing: border-box`
- `.box2` (branca) com `box-sizing: content-box`

Ambas com:

- `150px` de altura e largura
- `20px` de `padding`
- `30px` de `margin`

### 🔄 Diferença entre os valores

- 🟦 `border-box`: o tamanho total **inclui** borda e preenchimento. (Interior menor)
- ◻️ `content-box`: o tamanho total **soma** o conteúdo com borda e preenchimento. (Exterior maior)
- ⚙️ `initial` e `unset`: valores padrões/resetáveis.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a85ababc-5744-4756-9b43-700d2ba1ac67)

---

## 📉 Controle de Limitações – `overflow`

Podemos controlar como o conteúdo que **ultrapassa os limites** do elemento será tratado:

| Valor     | Efeito                                                                   |
| --------- | ------------------------------------------------------------------------ |
| `auto`    | Adiciona barra de rolagem automática (vertical/horizontal se necessário) |
| `hidden`  | Oculta o conteúdo excedente                                              |
| `scroll`  | Adiciona barras de rolagem fixa (sempre visível)                         |
| `visible` | Conteúdo excedente fica visível                                          |

### 🎨 Exemplo Visual

Usaremos 4 divisórias:

1. 🔵 `box1` = `overflow: auto`
2. ⚪ `box2` = `overflow: hidden`
3. 🔴 `box3` = `overflow: scroll`
4. 🟢 `box4` = `overflow: visible`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/96adc5e6-aab0-4509-9e1d-35c1de556327)

### ↔️ Direções específicas

- `overflow-x`: horizontal
- `overflow-y`: vertical

Exemplo:

```css
overflow-x: scroll;
overflow-y: hidden;
```

---

## 🧾 Espaço em Branco – `white-space`

Controla como os espaços e quebras de linha são tratados no conteúdo textual:

| Valor      | Efeito                                            |
| ---------- | ------------------------------------------------- |
| `normal`   | Espaços e quebras de linha automáticas            |
| `nowrap`   | O texto não quebra linha (fica em uma só linha)   |
| `wrap`     | O texto quebra normalmente quando atinge o limite |
| `pre-wrap` | Mantém espaços e quebra linhas automaticamente    |

> 📦 Aplicação nas mesmas caixas:

- 🔵 Azul = `wrap`
- ⚪ Branca = `pre-wrap`
- 🔴 Vermelha = `nowrap`
- 🟢 Verde = `normal`

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/127f2b3f-dc54-491a-b6ae-aa41863478c1)

---

## ✅ Próximo Conteúdo

➡️ [Continua no Módulo 4 – Estilos de Fontes](../../Módulo%204%20-%20(Estilos%20De%20Fontes)/Tipos-Número_09/Tipos.md)
