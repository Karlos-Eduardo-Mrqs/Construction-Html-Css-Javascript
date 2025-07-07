# Observação 👁️

- [Leia a parte um antes](./TabelasPrt1.md)

---

## Melhorando A Tabela Alunos

Agora que já construímos a tabela de alunos, vamos aplicar o design da imagem de referência, deixando-a mais agradável visualmente:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f046efe-e8cc-42b9-9032-940e9a0fccc6)

### 🧩 Personalizando o ``<caption>``

Começamos formatando o título da tabela usando o atributo ``style`` na tag ``<caption>``. Atributos utilizados:

```html
<caption style="font-family: Lucida Sans;"><b>Alunos</b></caption>
```

- ``font-family``: define a fonte usada (ex: Lucida Sans);
- A tag ``<b>``: deixa o título em **negrito**.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f67d1852-6130-41d8-be63-c52d7f79e61c)

### 🧱 Estilizando a ``<table>``

Na tag ``<table>``, adicionamos os seguintes atributos:

```html
<table border="1" cellpadding="10" cellspacing="0" width="500">
```

- ``border``: define a borda da tabela;
- ``cellpadding``: espaço interno da célula;
- ``cellspacing``: espaçamento entre células;
- ``width``: largura da tabela.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/03ac2e50-d099-4341-9ff2-2a66a748da77)

### 🎨 Formatando o ``<thead>``

Vamos aplicar estilo ao cabeçalho usando também o atributo ``style``:

```html
<thead style="background-color: #333; color: white; font-size: 16px;">
```

- ``background-color``: define a cor de fundo;
- ``color``: define a cor do texto;
- ``font-size``: ajusta o tamanho da fonte.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/569811a2-9fcb-4cfc-9271-2a48b49426be)

## 🏁 Bônus: Rodapé com ``<tfoot>``

Podemos adicionar um rodapé à tabela com a tag ``<tfoot>``:

```html
<tfoot>
  <tr>
    <td colspan="3"> Total:</td>
    <td> 6</td>
  </tr>
</tfoot>
```

- O atributo ``colspan="3"`` faz com que a célula ocupe três colunas, alinhando corretamente com os dados.

> Atributo ``colspan`` faz com que o conteúdo ocupe várias colunas (nesse caso, 4).

### 🆚 Comparativo: com e sem colspan

> **sem ``colspan``**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2d3f2699-18d5-4228-9812-b4684e113dd0)

> **com ``colspan``**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/93c426ca-1247-440d-8c2f-228e4dd3c7ca)

## 💻 Código Html

- [Código Final](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Constru%C3%A7%C3%A3o-Html/M%C3%B3dulo%20-%204(Tabelas)/)

---

## Desafio

Falta uma tabela: a dos Professores!

### 🧠 Sua missão

Utilizando os conhecimentos deste módulo, replique a tabela dos professores com a mesma estrutura e formatação usada na tabela de alunos.

**📷 Modelo da tabela dos professores:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/82aabe57-181d-4af8-9da4-0b88f76d3b07)

> ❓Dúvidas? Abra uma Issue no repositório e eu te ajudo!

## 🔎 Extras

- [Guia de tabelas em HTML - HomeHost](https://www.homehost.com.br/blog/criar-sites/tabela-html/)

> 📌 Nota: Corrigimos um detalhe — os dados do aluno Carlos haviam sido esquecidos na primeira versão. 😅

---

# 💡 Continuação

- [Continua no Módulo 5](../Módulo%20-%205(Formulários)/EstruturaDoFormulário_Número_10/Forms.md)
