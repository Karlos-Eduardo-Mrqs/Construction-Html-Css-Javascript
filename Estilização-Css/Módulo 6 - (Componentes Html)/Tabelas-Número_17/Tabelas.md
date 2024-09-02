# Estilos com Tabelas
Nesse capítulo de estilos de componentes html, vamos estilizar uma tabela do html.

## Tabela Referência
![image](https://github.com/user-attachments/assets/768076cd-fb8b-4c5e-8e65-a332179729f3)
![image](https://github.com/user-attachments/assets/75125165-eff0-4cd9-b288-82b845321962)

Usando essa tabela de referência, vamos fazer que a tabela abaixo, fique parecida com a de cima, observe:
![image](https://github.com/user-attachments/assets/f028ef37-b682-4733-88ba-d9f9a82054c3)

## Estilização Da Tabela 
Para não ficarmos perdidos com muitos detalhes, iremos iniciar o estilo pela parte do titulo(caption). 

## Caption
No titulo da tabela, aplicaremos o tamanho da fonte de 15px com preenchimento de 10px horizontal e 60px vertical e maior destaque com a fonte:
![image](https://github.com/user-attachments/assets/32e6363f-ac69-470b-9d95-f9d2f830b22c)
## Tabela 
Na tabela, será atribuido uma posição centralizada :
![image](https://github.com/user-attachments/assets/b65eff78-445f-4a21-aa39-12e537ba1195)
Largura 100% e uma altura de 200px:
![image](https://github.com/user-attachments/assets/9d2832ed-abd7-450f-b128-de8736990f49)
## Thead
Indo para o cabeçalho, um fundo vermelho escuro, uma altura de 40px e largura 20px com 16px de tamanho da fonte:
![image](https://github.com/user-attachments/assets/49c36dba-31f9-4a21-93cb-5cc0350b86ba)
Voltando para a tabela total, iremos adicionar na 1,3,5 com um fundo de cor branca:
![image](https://github.com/user-attachments/assets/d4c2bd64-e3a6-49fc-ad2e-7b22ad09388e)
## Tfoot
Indo para o rodapé, aplicaremos uma borda no topo e na parte inferior do rodapé:
![image](https://github.com/user-attachments/assets/d311688a-8cc6-4623-b8e9-707f3334e9fb)
Posicionaremos o total para o canto junto do número de carros:
![image](https://github.com/user-attachments/assets/1ba4d97a-7b3b-4a0b-bf78-1929942b593d)
## Efeito de Hover
![image](https://github.com/user-attachments/assets/e3b9adff-25eb-4e0d-bec9-cc4f0d074807)

# Estilo De Css
```
html{
    background-color: #333;
    margin: 0;
}

body{
    color: aliceblue;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.table-car2 caption{
    font-weight: bold;
    font-size: 15px;
    padding:10px 15px;
}

.table-car2{
    text-align: center;
    width: 100%;
    height: 200px;
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
}

.Car-head th{
    background-color: darkred;
    font-size: 16px;
    width: 20px;
    height: 40px;
}

.Car-body .linne{
    background-color: #555;
}

.Car-foot{
    border-top:solid 1px darkred;
    border-bottom: 3px solid darkred;
    text-align: end;
}

.Car-foot .Total-Car{
    text-align: end;
}

.Car-body tr:hover td{
    background-color: red;
}
```
