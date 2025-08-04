# Observação 👁️

- [Leia o Módulo 4 antes de continuar](../../Módulo%20-%204(Tabelas)/TabelasPrt1.md)

---

## Formulários 📝

Neste módulo, aprenderemos a estruturar um formulário em HTML, que é uma das principais formas de interação entre o usuário e o site. Por meio dele, o usuário pode inserir dados, como em páginas de cadastro, login, pesquisas, entre outros.

### 🔧 Estrutura básica de um formulário

Todo formulário começa com a tag ``<form>``, que é o contêiner onde os campos e botões são inseridos.

```html
<form action="" method="">
  <!-- Campos do formulário aqui -->
</form>
```

#### Atributos necessários para o "FORM"

- **``action:``** Indica para qual página os dados são enviados;**
- **``method:``** "Método/Maneira" que os dados são enviados pelo action.
  - **``GET:``** envia os dados pela URL (mais visível, usado para buscas).
  - **``POST:``** envia os dados pelo corpo da requisição (mais seguro, usado em cadastros, senhas, etc).

## 🏷️ Label

A tag ``<label>`` serve para informar ao usuário o que ele deve preencher em determinado campo.

```html
<label for="nome">Nome:</label>
```

### Atributo Mais Usado Pelo Label

O atributo ``for`` conecta o ``<label>`` a um campo ``<input>`` que tem um id correspondente.

```html
<input type="text" id="nome" />
```

> Dessa forma, ao clicar no texto do ``<label>``, o cursor vai diretamente para o campo.

## ⌨️ Input

A tag ``<input>`` representa campos de entrada, como nome, e-mail, senha, etc.

```html
<input type="text" id="nome" name="nome" />
```

> Existem vários tipos de input, que serão explicados no próximo módulo.

## 🔘 Botões

A tag ``<button>`` é utilizada para enviar, apagar ou realizar outras ações dentro do formulário.

```html
<button type="submit">Enviar</button>
```

### 📌 Tipos mais comuns

- ``submit:`` envia os dados do formulário;
- ``reset:`` limpa todos os campos preenchidos;
- ``button:`` botão genérico, que pode ser usado com JavaScript, por exemplo.

---

## 💡 Continuação

- [Continua na parte 2](./Inputs.md)
