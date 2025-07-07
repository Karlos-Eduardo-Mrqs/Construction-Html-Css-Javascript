# Observação 👁️

- [Leia a Introdução antes de continuar](../Conceitos_Introdutorios-%20Número_01/introducao.md)

---

## 🎨 Conceitos Básicos de CSS

O CSS é uma ferramenta poderosa que permite criar diversos efeitos visuais e layouts sem a necessidade de linguagens mais complexas como JavaScript. Quando usado com moderação, proporciona uma ótima experiência para desenvolvedores e usuários.

## 🧱 Formato da Estrutura CSS

O CSS funciona com **regras**. Cada regra tem:

- Um **seletor** (quem será estilizado)
- Um **bloco de instruções** (como será estilizado)

### 🧾 Sintaxe

```html
<style>
    seletor {
        propriedade: valor;
        propriedade: valor;
    }
</style>
```

## Exemplo Prático

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/0f148e54-9e32-4891-a7a8-23c13ee276fa)

Temos esse html de exemplo, podemos dizer que todos os parágrafos fiquem da cor azul, Como fazemos isso ? Simples:
``<style> p{color: blue;} </style>``

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/294a315f-afa5-4eae-b2e4-c3a36c5da837)

Fazendo que todas as  tags ``<p> </p>``, fossem caracterizadas pela cor azul. Agora, e o Texto 4? É uma tag ``<span> </span>`` e vamos supor que eu quero deixar essa tag, com um fundo com a cor vermelha, Como iremos atribuir esse fundo ? Simples: ``<style>span{background-color: red;}</style>``

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2977944f-fecf-45e9-8d6a-723661d236ab)

## 📌 Métodos de Chamada

Além de chamar elementos pela tag (p, span, h1, etc), também podemos usar:

- ID (identificador único)
- Class (classificação geral)

### 🔖 Usando ID

O id é único. Nenhum outro elemento na página deve ter o mesmo. Vamos supor que o Texto 4, tenha uma ID chamada de Span1 e quero deixar a cor do Span1 Magenta, Como estilizaremos isso? Simples:

```html
<span id="meuSpan">Texto</span>

<style>
    #meuSpan { color: magenta; }
</style>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eef2c3f9-09ec-4780-b724-72d54d8e6ce4)

### 🗂️ Usando Class

A class pode ser aplicada a vários elementos ao mesmo tempo.Por exemplo, imagine que todos os parágrafos possuem uma classe chamada ParGrf1, e todos que possuem essa classe terão seu fundo de cor preta e a cor da fonte para branco.

```html
<p class="destaque">Texto 1</p>
<p class="destaque">Texto 2</p>

<style>
    .destaque {
        background-color: black;
        color: white;
    }
</style>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/6c2033ce-eda8-49db-b832-fd6e52af48a7)

---

## 📎 Continuação

- [Continua no Número_02](../Inserindo_No_Html-%20Número_02/AtribuindoNoHtml.md)
