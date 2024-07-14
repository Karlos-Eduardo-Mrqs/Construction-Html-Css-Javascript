# Tipos de Fontes 
Estámos agora no módulo 4, vamos aprender a modificar os tipos de fontes.

# font-family 
![image](https://github.com/user-attachments/assets/f3e121ae-5a5f-40ae-bae2-e3b423d839dd)
Temos essa página de exemplo, caso você não modifique o estilo da fonte, o padrão será a Times New Roman:
![0_QBGG7EdJWTMq6goC](https://github.com/user-attachments/assets/0181afd3-a366-475e-8f60-40ad967cdfb3)
Podemos perceber que essa fonte possuí certas 'pontas de acabamentos', onde as letras possuem pontas. Sendo elas encontradas no T,N,A e entre outras; resumindo, as pontas chamam-se serif, e dentro das fontes elas possuem padrões, tendo serif ou não.
**Aquelas que possuem pontas, serif e as que não possuem serif são san-serif, veja a diferença:** 
![BP-Serif-SansSerif-Graphic1-862x518](https://github.com/user-attachments/assets/725a3018-c9e3-444c-82f9-079a9e05476c)
***
Agora vamos dizer que eu quero que a caixa com a cor bege, mostrada logo acima, fique com a fonte verdana, para fazer isso é simples: ``font-family:Verdana, Geneva, Tahoma, sans-serif; `` ou no Visual Studio(CTRL+Espaço+Escrever a Fonte que deseja):
![image](https://github.com/user-attachments/assets/500c317c-eb99-4491-a90c-4acc406d924f)

## Importando Fontes Personalizadas
Dentro do Visual Studio Code, possuem ínumeras fontes. Mas, é claro que não tem todas, e ás vezes queremos uma personalizada; para pegarmos uma personalizada, 
buscaremos um site chamado [Google Fontes](https://fonts.google.com/)  e podemos puxar a fonte personalizada de duas maneiras:
1. Tag Link: Ao escolher a fonte desejada, **clique em GetCode e depois Get Embed Code. Ao escolher a opção link, só copiar o código e cola-ló acima da tag link do css**;
2. Import: Ao escolher a fonte desejada, **clique em GetCode e depois Get Embed Code. Ao escolher a opção @import, só copiar o código e cola-ló no começo do arquivo.css**;

# font-weight
![image](https://github.com/user-attachments/assets/a5fa6b36-db57-44ff-b536-1b4de0ebd112)
Com essa página de exemplo, podemos definir a espessura ou grossura que a fonte vai possuir; observação, temos fontes que não possuem variações de espessura, por isso, vamos usar uma fonte chamada POPINS, que possue todas as variantes.
Essas variantes são do nível 1 até 9, onde quanto maior o nível for, mais destacada a palavra ou letra fica e quanto menor o oposto ocorre, ficando mais sombreada. Na imagem abaixo, podemos notar isso, sendo algo semelhante com um efeito degrâde:
![image](https://github.com/user-attachments/assets/82df9c33-58a6-44dc-a204-5c46326ade53)
Além disso, ele também possui quatro tipos padrões como **("lighter","normal","bold","bolder"), na imagem será representado na ordem respectivamente falado anteriormente:**
![image](https://github.com/user-attachments/assets/c783058d-b167-4434-8cd9-f6e04d1dbb01)

# font-style
- italic ou oblique: _Deixa o texto com uma curva para a direita;_
- normal: Mantém o texto padrão do jeito que esta; 
