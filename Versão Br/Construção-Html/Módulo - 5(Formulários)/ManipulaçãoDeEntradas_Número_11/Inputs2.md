# Observação 👁️

- [Leia o Número_10 antes de continuar](../EstruturaDoFormulário_Número_10/Inputs.md)

---

## 🎯 Tipos de Entradas Avançadas em Formulários

Neste módulo, vamos explorar entradas de seleção, botões alternativos e tipos especiais de input.
São elementos que enriquecem a experiência do usuário e aumentam a interatividade dos formulários.

- ``🔲 checkbox`` – **Múltiplas Seleções**

Permite ao usuário marcar mais de uma opção.

```html
<input type="checkbox" name="termos" id="termo">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/a55165bc-9242-4ed6-a282-8bff5f47a939)

- ``⚪ radio`` – **Seleção Única**

Permite escolher apenas uma opção dentro de um grupo.

```html
<input type="radio" name="aceito" id="sim">
<input type="radio" name="aceito" id="nao">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/e17fed6e-5578-4887-8bba-50c9179819d9)

> 📌 Todos os radio relacionados devem ter o mesmo name. Senão ⬇️

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/31753079-8474-4922-97be-a3e9736a59f8)

- ``🔽 select`` – **Lista de Opções**

Cria uma caixa com opções selecionáveis.

```html
<select name="opcoes" id="opcoes">
  <option value="op1">Opção 1</option>
  <option value="op2">Opção 2</option>
</select>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/d98c1e49-94aa-4cd4-a5b0-0611bfa830af)

## 🧰 Tipos de Botões

- ``🔘 submit, reset e image``

```html
<input type="submit" value="enviar">
<input type="reset" value="limpar">
<input type="image" src="/Construção-Html/Modulo - 3(Navegação e Mídia)/MidiasVisuaisEasMusicais_Número_08/images/image4.jpg">
```

- ``submit``: Envia o formulário.
- ``reset:`` Limpa todos os campos.
- ``image:`` Usa uma imagem como botão, funcionando como um ``submit``.

## 📂 Tipos de Entrada Alternativa

- ``📁 file`` -  **Envio de Arquivos**

Permite ao usuário enviar imagens, vídeos ou documentos.

```html
<input type="file" name="arquivo" id="file" accept=".mp3,.mp4,.png" multiple>
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/69faa58a-b15f-4e73-8290-69749f5a5886)

- ``🎨 color`` – **Seletor de Cor**

Abre uma paleta para o usuário escolher uma cor.

```html
<input type="color" name="cor" id="cor">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/44d193e9-4bdc-460c-bbcb-fa30fd2be1e0)

- ``🎚️ range`` – **Faixa de Valores**

Cria uma barra deslizante para escolher valores entre um mínimo e máximo.

```html
<input type="range" name="volume" min="0" max="100" step="5">
```

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/06c76384-f781-481b-96b9-deea5851ead0)

- ``🙈 hidden`` – **Campo Invisível**

Envia um valor sem que o usuário veja. Útil para identificadores e tokens.

```html
<input type="hidden" name="codigo" value="XYZ123">
```

## ⚙️ Atributos Adicionais

| Atributo      | Função                                                                |
| ------------- | --------------------------------------------------------------------- |
| `multiple`    | Permite múltiplas seleções (`select`) ou múltiplos arquivos (`file`). |
| `accept`      | Define os tipos de arquivos aceitos (`file`).                         |
| `min` / `max` | Define os limites mínimo/máximo para `number`, `date`, `range`, etc.  |
| `step`        | Define o passo do incremento (`range`, `number`).                     |
| `required`    | Torna o preenchimento obrigatório.                                    |
| `disabled`    | Desabilita o campo (sem interação).                                   |
| `readonly`    | Apenas leitura (não editável, mas visível).                           |
| `value`       | Define um valor inicial para o campo.                                 |

## 🗂️ Agrupamento de Campos

Utilize as tags ``<fieldset>`` e ``<legend>`` para organizar visualmente partes do formulário:

```html
<fieldset>
  <legend>Dados Pessoais</legend>
  <label for="nome">Nome:</label>
  <input type="text" id="nome">
</fieldset>
```

Exemplo visual 📸:

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/1eff2f5e-6a80-4fce-a4c9-d1af423c2136)

## 📌 Dica

> 🔐 Campos hidden são úteis para enviar dados invisíveis, como IDs ou códigos internos, sem interferir na interface.

## 🚀 Continuação

- [Continua no Módulo 6](../../Módulo%20-%206(Modelando%20na%20Web)/Estrutura_Número_12/Estrutura.md)
