# Formulários de estilo
neste capítulo, abordaremos o estilo de formulários, chamados de formulários com css. Nota: Este capítulo possui três capítulos com formulários. Parte Um (StyleOne) até que haja peças (serão reveladas mais cedo).

# Página de exemplo
![imagem](https://github.com/user-attachments/assets/24328d81-c33b-472e-8fd0-aac0431d2e64)

**Com esta página. O fundo tem um gradiente linear, com ele podemos usar duas cores misturadas ao mesmo tempo. (plano de fundo:gradiente linear:cor1,cor2).**

# Estrutura HTML
Agora, vamos entender como o HTML é organizado. Tendo no início do corpo uma divisória chamada box, abaixo temos um form-box para o formulário e uma classificação para o título h2, no final do formulário temos duas classificações de botões, uma para submit(.send) e outro para limpar (.clear) o formulário. Entendendo isso, mãos à obra!

## Estilo .Box
Começando pelo divisor de caixa, colocaremos uma borda de 3px, com coloração preta e sólida, largura de 700px e posição fixa:
![imagem](https://github.com/user-attachments/assets/1babc3c8-b62c-4dfd-bb57-8dde25782a47)

Após atribuir a posição fixa, o topo ficará 8% em relação à página e 25% à esquerda. Finalizando com arredondamento da borda:
![imagem](https://github.com/user-attachments/assets/af4c414f-2ca0-4cc0-b0de-45ea9879431d)
## Estilo .Form-Box
Para a caixa divisória do formulário, usaremos um fundo branco, ela será flexionada, sua direção será por coluna, sua largura será automática e sua largura máxima será fit-content (faz com que um elemento tenha apenas o tamanho necessário para conter seu conteúdo). Finalizando com arredondamento de 10px e preenchimento inicial: 
![imagem](https://github.com/user-attachments/assets/a876c633-73f5-44d6-9908-4f776d4152b7)

## Estilo .Form-Box Entrada e TextArea
Indo para dentro da caixa do formulário, sua largura será de 100% e sua altura será de 48px. As bordas das entradas e da área de texto serão removidas durante a renderização. O tamanho da fonte será 16px, a margem inferior será 16px e por fim, um arredondamento de 15px: 
![imagem](https://github.com/user-attachments/assets/6ba0b265-4277-4d81-b9d1-6df67cf92096)

Concluindo com um título alinhado ao centro aumentando o tamanho da fonte para 24px. Além disso, com a área de texto com 180px de altura:
![imagem](https://github.com/user-attachments/assets/cb253ea0-c59f-4a2d-b1ae-89389587a535)

## Estilo do botão .Form-Box
Agora chegamos aos botões, usaremos 100% de largura, 1px preto e borda sólida, fonte 18px com negrito e cor preta. Finalizando com arredondamento de 10px e margem inferior de 5px:
![imagem](https://github.com/user-attachments/assets/373516aa-b543-4cd4-8f98-ad7309b1f88d)

Para o botão enviar, terá um efeito de pressionamento de botão, será destacado com a cor verde, além de um efeito de transição com 0,5s(``transition:0.5s;``):

![imagem](https://github.com/user-attachments/assets/c714fbf5-0fe8-4dc0-a864-39c339ca6da1)

O mesmo acontece com o botão de limpeza, com a cor de destaque vermelha:
![imagem](https://github.com/user-attachments/assets/bfbb0c63-8cbf-479f-bd6d-589ea4f4988d)

# Flexível
- **display: flex;** - Define o container flexível;
- **justify-content: center;** - Centraliza os itens horizontalmente;
- **flex-direction: column;** - Organiza os itens verticalmente;