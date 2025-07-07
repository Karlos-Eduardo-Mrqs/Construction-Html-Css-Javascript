# Observação 👁️

- [Leia o capítulo anterior](../../Modulo%205%20-%20Manipulação%20de%20Dados/Objetos-Número_14/Métodos.md)

---

## Introdução ao Modelo de Objeto de Documento (DOM)

O Modelo de Objeto de Documento (DOM) em JavaScript é uma interface de programação que representa documentos HTML e XML como uma árvore de objetos. Com o DOM, os desenvolvedores podem manipular a estrutura, o estilo e o conteúdo de um documento, permitindo que as páginas da web sejam dinâmicas e interativas. O DOM fornece métodos para acessar, adicionar, modificar e excluir elementos, atributos e eventos em um documento, tornando-o uma peça fundamental no desenvolvimento web.

![maxresdefault](https://github.com/user-attachments/assets/9c00d22e-b4cc-4047-bdf8-6928fa08df83)

Uma página da web é um documento. Esse documento pode ser exibido na janela do navegador ou como o código-fonte HTML. Mas, em ambos os casos, é o mesmo documento. O DOM (Modelo de Objeto de Documento) representa o mesmo documento para que ele possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.

## Objeto document

O objeto `document` em JavaScript é uma interface que representa a estrutura HTML ou XML carregada na página da web, sendo uma parte essencial do modelo DOM (Modelo de Objeto de Documento). Ele serve como o "portal" para interagir com os elementos da página. Por meio do `document`, você pode acessar, manipular e modificar praticamente qualquer coisa no HTML, como elementos, atributos, textos, eventos, etc.

## Principais funções do objeto document

- **Acessar elementos da página:** O `document` permite selecionar e manipular elementos HTML. Exemplos incluem:
- **Criar novos elementos:** É possível criar novos elementos HTML e adicioná-los à página;
- **Manipular conteúdo:** Permite alterar o conteúdo textual ou HTML de elementos;
- **Gerenciar eventos:** O `document` é essencial para gerenciar eventos de interação do usuário com a página;
- **Navegar pelo DOM:** O `document` permite navegar e pesquisar nós (elementos e outros tipos) na árvore DOM, como pais, filhos e irmãos de um elemento;

## Árvore DOM

![1_mMmuOhNytgqP7lrU9HPTpw](https://github.com/user-attachments/assets/3d2149e5-9014-4bbb-b995-5f4cae299b2c)

Toda página da web é, de certa forma, uma árvore. Isso ocorre porque podemos ver uma página da web como uma árvore, com uma raiz como o elemento HTML e seus filhos como o HEAD e o BODY, que, por sua vez, também possuem elementos filhos e assim por diante.

## Elementos na DOM

Elementos que não possuem filhos são chamados de nós folha, como os elementos TITLE, STYLE, SCRIPT, LI, H1, P, TD demonstrados acima. Observe que Text é o texto que está dentro de um elemento. O nó `<TD>`, por exemplo, também é considerado um nó, mas de um tipo diferente (tipo texto). Essa estrutura de árvore é a forma como o navegador organiza a marcação HTML. Assim, o navegador da web interpreta um documento HTML. A árvore é sempre lida da esquerda para a direita, para que tenhamos a página da web original. Fechar elementos corretamente, usar tags atuais e evitar tags obsoletas ajuda os navegadores a exibirem uma página da web corretamente.

## Relação com HTML, CSS e JS

O JavaScript usa o DOM para se conectar ao HTML e, para isso, é necessário inserir a tag `<script>` no arquivo HTML. O código JavaScript pode ser escrito dentro da tag `<script>` ou inserido em um arquivo externo.

![1_1Gh0_hx4rVTiAcJKge1KQA](https://github.com/user-attachments/assets/282acfe9-2ad9-4146-bb24-5fbbec0d3556)

## Conclusão

Essa introdução ao DOM mostra como o JavaScript pode ser usado para acessar e modificar elementos de uma página da web. O DOM é fundamental para construir páginas dinâmicas e interativas, permitindo que você manipule conteúdo, estilos e até eventos diretamente com o código JavaScript.

---

## Próximo Capítulo

- [Manipulação DOM](../Manipulacao-Numero_15/Manipulacao.md)
