# Formulários 
Neste módulo, aprenderemos a estruturar um formulário. Onde seria uma forma do usuário interagir com o nosso site, colocando os seus dados e o html recebendo-os. Um exemplo que podemos citar de formulário, seria o cadastro e login; sendo necessário preenchê-los para confirmar sua identidade ou criar uma nova.

## Estrutura De Um Formulário
**`` <form> Tag que inicia o nosso formulário </form>``;**

### Atributos necessários para o "FORM"
**action: Indica para qual página os dados são enviados;**
**method: "Método/Maneira" que os dados são enviados pelo action. Podendo ele ser pelo corpo da página(POST) ou pela url dá Página(GET)**

### Label
**`` <label> Informa ao usuário, o que ele deve digitar no input </label> ``;**

### Atributo Mais Usado Pelo Label

**for: indicado pelo "identificação(id)", qual é o input de "conexão"**

### Input
**``<input/> Como o próprio nome diz, é a entrada/interação que o usuário vai ter com o formulário;``**

### Botões
**``<button> Tag usada para enviar ou apagar os dados </button>``;**
Os tipos do botão, podem ser denominados pelo atributo type, podendo ser eles:_
- *submit: Botão de Envio O Formulário;*
- *reset: Botão de Apagar/Resetar O Formulário;*
- *button: Botão Normal;*

# Código Final: 
```
<form action="FormularioEnviado.html" method="get">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        <button type="submit"> Enviar</button>
    </form>
```
# [Inputs.md](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Constru%C3%A7%C3%A3o-Html/Modulo%20-%205(Formul%C3%A1rios)/EstruturaDoFormul%C3%A1rio_N%C3%BAmero_10/Inputs.md)
