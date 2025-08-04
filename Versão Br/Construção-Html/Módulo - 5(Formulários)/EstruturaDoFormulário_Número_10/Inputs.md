# Observação 👁️

- [Leia a parte um antes de continuar](./Forms.md)

---

## ⌨️ Inputs (Entradas de Dados)

Os inputs são os campos onde o usuário interage com um formulário, preenchendo informações como nome, e-mail, número, data etc.

### 🧩 Tipos de Input

A seguir, veremos os principais tipos de campos de entrada (``input``), agrupados por categoria.

A maioria dos campos de formulário é definida pela tag ``<input>`` e seu atributo type, que determina o tipo de dado aceito. Veja a seguir os principais tipos:

- ``text`` - Uma caixa de texto padrão:

![Captura de tela 2024-06-24 111922](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e6a6f8cc-cbdf-4e21-821c-fdc5ed2ecee3)

- ``number`` - Apenas números:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/17075fd9-fbbf-4e76-8eeb-299902b69a8d)

- ``email`` - Campo para endereço de e-mail:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/714fa144-e613-4e3f-abfd-ba90893ddbf5)

- ``tel`` - Para inserir números de telefone:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/412ae986-f7bb-40ed-ad81-d2f953737808)

- ``search`` - Campo de pesquisa:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/b9fbee08-4de0-4a2c-b986-ae3a35dacc29)

- ``url`` - Para links (endereços web):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/58c2aa7f-e0fe-440a-a04d-747c31ae5b22)

- ``password`` - Campo de senha (oculta o texto):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3f3d53ed-e6cf-4e8c-a6a7-0c92e0a6cfe5)

- ``textarea`` - Área de texto (bloco maior de entrada):

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/ed80b31a-a5ef-4731-84bd-07e02725cc6c)

## 📅 Entradas de Data e Hora

- ``date`` - Seleção de data:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/154d5e1c-bae1-4c11-90ac-721aa7d65388)

- ``datetime-local`` - Data e hora local:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/ba830fc1-119a-4e0e-97e7-df039ba7be0c)

- ``time`` - Apenas hora:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e61d8923-2b6a-4db2-b000-91ac6102709a)

- ``month`` - Escolha de mês e ano:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/3afba312-24f1-409b-930d-6f9efefe17ad)

- ``week`` - Escolha da semana do ano:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/013f097a-bae8-4fae-aa4a-5cefb72d6164)

## Atributos Globais Para Os Inputs

| Atributo      | Função                                                            |
| ------------- | ----------------------------------------------------------------- |
| `name`        | Define o nome do campo (usado no envio dos dados).                |
| `id`          | Define a identificação única do campo (conexão com o `<label>`).  |
| `type`        | Define o tipo de input (`text`, `email`, `number`, etc).          |
| `placeholder` | Mostra uma dica dentro do campo (ex: "Digite seu nome").          |
| `rows`        | Quantidade de linhas (usado apenas em `<textarea>`).              |
| `min`/`max`   | Define o valor mínimo e máximo para campos numéricos ou de datas. |
| `pattern`     | Expressão regular para validar o valor digitado.                  |

> 📞 Validando um número de telefone com pattern

```html
<input type="tel" pattern="^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$">
```

- [Explicação do formato pattern](https://pt.stackoverflow.com/questions/46672/como-fazer-uma-express%C3%A3o-regular-para-telefone-celular).

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/5efd7067-5d20-44a6-b0ee-10455b3e6cbc)

---

## 💡 Continuação

- [Continua no Número_11](../ManipulaçãoDeEntradas_Número_11/Inputs2.md)
