# Entradas de estilo
Neste capítulo, abordaremos o estilo das entradas, chamadas entradas com css

# Página de exemplo

![imagem](https://github.com/user-attachments/assets/fdf6458e-53e4-4133-bb3d-7caf03324232)

Usaremos esta página aqui para melhorá-la e torná-la mais bonita. Começaremos então a modificar o comportamento do elemento da tela que está sendo bloqueado, sua largura para 100% e a cor da fonte para preto:

![imagem](https://github.com/user-attachments/assets/a554bc79-1a1f-4a6d-9212-b7eeec9da236)

Observando os três elementos, vemos que as opções estão desalinhadas com os campos de mensagens e nomes, usaremos um padding de 10px e o tamanho da caixa para a borda da caixa:

![imagem](https://github.com/user-attachments/assets/a6cb2348-6fcf-4687-8a54-f444a747c7dd)

A seguir, vamos aumentar a altura da área de texto para 200px:

![imagem](https://github.com/user-attachments/assets/4bbd78a9-232f-44c0-aa76-aa2a56d333e3)

# Rezize o atributo
Dentro do css, temos um atributo chamado `` resize: resize type; `` onde podemos manipular como a área de texto se move. Por exemplo, neste campo podemos movê-lo horizontalmente e verticalmente, ou seja, para cima e para baixo, para a esquerda e para a direita. Danificando as dimensões dos demais campos, isso não ocorre quando utilizamos o redimensionamento.

## Tipos de redimensionamento
- both:
Padrão, move a caixa de texto para todos os lados;
- horizontal:
Move-se horizontalmente, ou seja, para a esquerda e para a direita;
- vertical:
Move-se verticalmente, ou seja, para cima e para baixo;
- none:
Bloqueia o movimento da caixa de texto;

# Botão 
Agora focando no estilo do botão, vamos remover sua borda e aplicar um fundo verde, por se tratar de um botão de envio:

![imagem](https://github.com/user-attachments/assets/c0f24730-a4b3-4d80-ac68-f75222a9e9b4)

Como sua fonte é pequena, vamos aumentá-la para 16px, dar um padding de 10px (superior e inferior) 60px (lado esquerdo e direito) finalizando com um arredondamento de 30px:

![imagem](https://github.com/user-attachments/assets/b313a339-aad9-436a-8b40-68f02b7b9a13)

Para fechar o botão, vamos centralizá-lo com text-align:center :

![imagem](https://github.com/user-attachments/assets/fc8b3cf3-2f0b-4c79-a59f-03af35e5ce40)

## Bônus
Além disso, podemos aplicar estilo ao placeholder (as mensagens sombreadas no campo de entrada nome e área de texto), utilizando um pseudocódigo chamado input:placeholder, fazendo com que apenas o placeholder de entrada seja estilizado. Concluindo, com outro comando visto no anterior capítulo, botão:hover, alterando o botão quando focado ou pressionado com o ponteiro (que também será alterado para ponteiro):

![imagem](https://github.com/user-attachments/assets/657a4b20-6b96-4f73-967d-bb2d1ccd7645)

# Final css
```
html{
    background-color: #999;
    margin: 0;
}

.box{
    color: aliceblue;
}

.form-group{
    margin-bottom: 15px;
}

label,input,textarea,select{
    display: block;
    width: 100%;
    box-sizing:border-box;
    padding: 10px;
    color: black;
}

textarea{
    height: 200px;
    resize: none;
}

button{
    border: none;
    background-color: darkgreen;
    color: aliceblue;
    font-size: 16px;
    padding: 10px 60px;
    border-radius: 30px;
}

.form-action{
    text-align: center;
}

input::placeholder{
    color: red;
}

button:hover{
    background-color: rgb(1, 255, 1);
    cursor: pointer;
}
```
