# Observação 👁️

- [Leia o 1º estilo primeiro](../1ºEstilo/Forms.md)

---

## 📄 Estilizando Formulários (Parte 2)

Ok, programadores, vamos voltar ao estilo dos formulários.

## 🖼️ Página de exemplo

![imagem](https://github.com/user-attachments/assets/845efcad-d205-4eea-b13b-d986fcadcf44)

Esta página é um formulário de criação e possui uma imagem das diferenças da parte um (onde são apenas comuns).

---

## 🧱 Estrutura HTML

Indo para a estrutura do conteúdo, há um paralelogramo classificado como divisor vazio para a parte inferior. Posteriormente, temos dois divisores: a primeira classe é `.container` e a segunda é `.form-box`, que contém o formulário.

Dentro do formulário, há uma divisão de entradas chamada `.input-box`, com um título de nível dois, e três seções de grupo:

- `.grupo-1` para nome e sobrenome
- `.grupo-2` para email
- `.grupo-3` para senha e repetição de senha

Finalizamos com outra divisão de botões, incluindo os links de Termos de Uso e Criação de Conta.

---

## 🎨 Estilizando com `*`

Usando o seletor `*`, podemos estilizar todos os elementos, zerando margens e preenchimentos. O box-sizing será `border-box` e a fonte principal será `Georgia`.

![imagem](https://github.com/user-attachments/assets/5c381485-c23d-4612-8fa2-cc046e945ccb)

---

## 🧍 Estilização do `body`

O corpo será estilizado com display `flex`, centralizando horizontal e verticalmente, e com altura mínima de `100vh`.

![imagem](https://github.com/user-attachments/assets/4d587f53-5c97-44de-9f14-3f3a1e3ff899)

---

## 🟩 Estilo `.paralelogramo`

- Cor de fundo: `rgb(3, 158, 3)`
- Posição absoluta
- Largura: 1000px
- Altura: 600px
- Largura máxima: `70vw`
- Arredondamento: 10px
- Sombra: `5px 5px 15px`
- Transformação: `skew(-3.5deg)`
- `z-index: -1` para sobreposição

![imagem](https://github.com/user-attachments/assets/1577156c-babc-4e87-8725-9fc39f5cfc01)

---

## 🧊 Estilo `.container`

- Fundo branco
- Padding: `30px` (vertical) e `50px` (horizontal)
- Arredondamento: 10px
- Box-shadow igual ao paralelogramo
- Largura máxima: `100vw`

![imagem](https://github.com/user-attachments/assets/96822058-39e3-4339-b32c-bb9816e91628)

---

## 🧾 Estilo `.form-box`

- Posição relativa
- Largura e altura ajustáveis ao conteúdo (`fit-content`)
- Arredondamento: 10px

### h2 (título)

- Alinhamento central
- Margem: `40px` (vertical) e `10px` (horizontal)

![imagem](https://github.com/user-attachments/assets/d8fba187-4677-4a79-895b-e4a7c214372b)

---

## 📦 Estilo `.grupo-1`, `.grupo-2`, `.grupo-3`

- `.grupo-1`: display flex
- `.grupo-2`: padding `20px` em todos os lados
- `.grupo-3`: padding superior `20px` e também display flex

![imagem](https://github.com/user-attachments/assets/ffb4e86d-4087-47c0-b8ca-8534a6663ad5)

---

## 🔤 Estilo `.inputs-box`

- Margens: `5px` (top/bottom) e `10px` (left/right)
- Largura: `80%`
- Altura: `30px`
- Sem bordas
- Fonte: tamanho `18px`, peso `700`
- Placeholder em letras maiúsculas

![imagem](https://github.com/user-attachments/assets/e9ef1f00-f65a-468f-a380-f3441af848c8)

---

## 🔗 Estilo `.button a`

- Display block
- Margem superior `20px`
- Fonte `20px`
- Largura `100%`
- Altura `35px`
- Padding lateral `10px`
- Sem decoração de texto
- Cor preta
- Margin-bottom `10px`
- Text-align center
- Arredondamento `10px`
- Efeito hover:
  - Cor do texto branca
  - Fundo cinza escuro
  - Transição de `0.5s`

![imagem](https://github.com/user-attachments/assets/d150adfd-3d98-40f6-acfd-0fd527620c05)

---

## 🔘 Estilo `.button button`

- Largura `100%`
- Altura `40px`
- Sem bordas
- Arredondamento `10px`
- Fonte: `20px`
- Margin-top `30px`
- Cursor pointer
- Efeito hover igual ao link

![imagem](https://github.com/user-attachments/assets/cff7da9a-f3e2-4d2b-8105-7ecdf653fd57)

---

## 🖼️ Estilizando a imagem

- Altura: `450px`
- Largura: `350px`
- Margem automática em cima/baixo e `40px` nos lados
- Arredondamento `10px`
- Sombra igual ao paralelogramo

![imagem](https://github.com/user-attachments/assets/b0dd3a48-11d3-4452-b367-2ba615485e7c)

---

## ✅ Próximo Capítulo

- [Continue no Número_20](../../BarraDeNavegacao-Número_20/NavBar.md)

- [💡BÔNUS – Atributos não mencionados](./Obs.md)
