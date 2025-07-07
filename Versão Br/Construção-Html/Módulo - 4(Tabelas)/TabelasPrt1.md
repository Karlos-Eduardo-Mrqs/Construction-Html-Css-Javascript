# Observação 👁️

- [Leia o Módulo 3 antes de continuar](../Módulo%20-%203(Navegação%20e%20Mídia)/LinksEasÂncoras_Número_07/LinksEasAncoras.md)

---

## Tabelas ⏹️

Dentro do Html, podemos criar tabelas. Onde estão listas que possuem duas dimensões linhas e colunas. Apresentando os dados de maneira mais organizada e visual.

## 🎯 Exemplo de tabela que vamos construir

Usaremos as seguintes imagens como **referência**: primeiro, a tabela de **alunos**, depois a de **professores**.

![ExemploDeTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/076d9f07-f3b6-435b-a5f0-4bc7f43996dc)

> ⚠️ **Atenção:** Por enquanto vamos focar apenas na estrutura da tabela. A parte visual (estilização com atributos) será tratada mais adiante.

---

## 🔨 Construção Passo a Passo Alunos (Parte 1)

### Etapa 1: Iniciando a tabela

Começamos com as seguintes **tags básicas**:

- `<table>`: Inicia a tabela;
- `<caption>`: Define o título da tabela.

![ExemploTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9a3e93c4-a3b1-4c45-9042-c1b743d46b8c)

### Etapa 2: Criando o cabeçalho

- ``<thead>``: Inicia o cabeçalho da tabela;
- ``<tr>``: Cria uma linha;
- ``<th>``: Define os títulos das colunas (células de cabeçalho).

![ExemploTabela2](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/964f5b5e-00b1-4ae0-9a58-5d45b48fee8c)

### Código feito até a construção do Cabeçalho

```html
<table>
        <caption>Alunos</caption>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
                <th>Turno</th>
            </tr>
        </thead>
    </table>
```

---

## 📦 Construção Passo a Passo Alunos (Parte 1)

Agora, adicionamos o conteúdo da tabela, ou seja, os dados dos alunos. Usamos as seguintes tags:

- ``<tbody>``: Inicia o corpo da tabela;
- ``<tr>``: Cria uma nova linha;
- ``<td>``: Define os dados de cada célula (células comuns).

![ExemploCorpoTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/64f89971-c38b-4f25-a11e-c066ad3c66fa)

### ✅ Resultado Final (até aqui)

> Para adicionar mais linhas, basta copiar e colar o bloco ``<tr>...</tr>`` dentro do ``<tbody>`` e trocar os dados conforme necessário:

```html
<table>
        <caption>Alunos</caption>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
                <th>Turno</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Carlos</td>
                <td>17</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>
        </tbody>
    </table>
```

### Ilustração Final Da Tabela Construída

Observação, para fazer os outros dados "CTRL+C" no TR do TBody,"CTRL+V" embaixo do primeiro TR. Mudando os dados somente.

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f96549d1-4082-4ad6-9555-b878a1667a60)

### ✍️ Conclusão

1. A tabela foi construída com as estruturas básicas;
2. Já está funcionando corretamente e exibe os dados;
3. A parte visual (como bordas, alinhamento e cores) será feita na Parte 2.

---

# 💡 Continuação

- [Continue para a Parte 2](./TabelaPrt2.md)
