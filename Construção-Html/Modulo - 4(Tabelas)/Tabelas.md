# Tabelas
Dentro do Html, podemos criar tabelas. Onde são listas que possuem duas dimensões linhas e colunas. Apresentando os dados de maneira mais organizada e visual.
***
## Tabela Exemplo que iremos utilizar
![ExemploDeTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/076d9f07-f3b6-435b-a5f0-4bc7f43996dc)
***
Para construirmos na prática uma tabela em HTML, utilizaremos essas duas tabelas como referência.**Começando pelos alunos e depois os professores**. 
## Observeção
**Depois deixaremos a tabela similar a imagem com os atributos.Por enquanto, faremos a tabela primeiro e depois a organização **

### Construção Passo a Passo Alunos Parte 1
Para começar a tabela, iniciaremos com as tags:
- **``<table > </table> ``: Inicializa a nossa tabela.**
- **``<caption> </caption>``: Cria o título da tabela.**
![ExemploTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/9a3e93c4-a3b1-4c45-9042-c1b743d46b8c)
***
**Observe que no atual momento, não apareceu a tabela ainda**
- **``<thead> </thead> ``: Inicializa o cabeçalho da nossa tabela. _Junto do Thead, temos as tags:_**
- **``<tr> Define a Nossa linha </tr> e <th> Define a Nossa Celula/Valor como Titulo</th>``** 
![ExemploTabela2](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/964f5b5e-00b1-4ae0-9a58-5d45b48fee8c)
***
#### Código feito até a construção do Cabeçalho
```
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
### Construção Passo a Passo Alunos Parte 2
Agora, começaremos a criar o corpo de nossa tabela com as tags:
- **``<tbody> </tbody>``:Criaremos o corpo de nossa tabela e depois _dentro do tbody, usaremos as tags_:**
- **``<tr> Para definir a linha </tr> e <td> Para definir as celulas daquela linha </td>``**
![ExemploCorpoTabela](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/64f89971-c38b-4f25-a11e-c066ad3c66fa)
***
#### Código feito até a construção do Corpo
```
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
***
### Ilustração Final Da Tabela Construída(Observação, para fazer os outros dados "CRTL+C" no TR do TBody,"CTRL+V" embaixo do primeiro Tr. Mudando os dados somente. )
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f96549d1-4082-4ad6-9555-b878a1667a60)
***
## Melhorando A Tabela Alunos
Agora que a tabela foi criada, vamos fazer o mesmo Design que está aplicado na imagem de exemplo dos alunos
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8f046efe-e8cc-42b9-9032-940e9a0fccc6)
***
### Atributos para melhoria 
Começando pelo **CAPTION**, nosso título da tabela, usaremos o atributo **"STYLE"**, para modificar seu estilo usando:
- **font-family: Para modificar a sua fonte/letra para Lucida Sans;**
- **Utilizaremos a tag ``<b>`` dentro do caption, para deixa-lo em negrito; Deixando o Titulo, assim:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/f67d1852-6130-41d8-be63-c52d7f79e61c)
***
Indo agora para a nossa tabela, utilizaremos alguns atributos para a tag **TABLE** :
- **border: Aplicaremos a borda da tabela;**
- **cellpadding: Formata o espaço que a celula vai ter;**
- **cellspacing: Formato o espaço que as celulas terão em relação a tabela;**
- **width: Já foi citado anteriomente no modulo 3. Para ajustar largura; No final, ficou assim:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/03ac2e50-d099-4341-9ff2-2a66a748da77)
***
Agora com a tabela organizada, alteraremos o **Thead**, usando novamente o atributo **"style:"**
- **Background-Color: Muda a cor de fundo;**
- **Color: Muda a cor da letra/fonte;**
- **Font-size: Muda o tamanho da fonte; No final ficou assim:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/569811a2-9fcb-4cfc-9271-2a48b49426be)
*** 
# Bonus 
Para finalizar, podemos implementar mais coisas nessa tabela como rodápe.
***
## Tags Bonus 
1. **`` <tfoot> </tfoot> ``: Cria o rodápe da nossa tabela, depois usáremos a tag ``<tr> <td> </td> </tr>``:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/2d3f2699-18d5-4228-9812-b4684e113dd0)
***
Observe que na tabela ele criou o rodápe com os dois espaços corretamente. Porém, que tem dois espaços em branco, para resolver podemos usar **o atributo chamado 
"colspan" definindo quantas colunas uma celula em específico pode ocupar na tabela. Ficando assim:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/93c426ca-1247-440d-8c2f-228e4dd3c7ca)
***
## Código Final
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="2" cellpadding="10" cellspacing="0" width="500">
        <caption style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; color: black;"> 
            <b>
                Alunos    
            </b>
        </caption>
        <thead style="background-color: rgb(0, 179, 255); color: aliceblue; font-size: larger;">
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
                <th>Turno</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td>Jámille</td>
                <td>17</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>
            
            <tr>
                <td>Bárbara</td>
                <td>17</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>
            
            <tr>
                <td>Vitor</td>
                <td>16</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>
            
            <tr>
                <td>Carrlos</td>
                <td>17</td>
                <td>1201</td>
                <td>Manhã</td>
            </tr>

            <tr>
                <td>João</td>
                <td>18</td>
                <td>1301</td>
                <td>Manhã</td>
            </tr>
            
            <tr>
                <td>Enzo</td>
                <td>17</td>
                <td>1301</td>
                <td>Manhã</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"> Total:</td>
                <td> 6</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```
***
# Desáfio 
Está faltando uma tabela, a dos professores ! **O desafio é o seguinte, com os ensinamentos aqui, replique a tabela professores em HTML. Qualquer dúvida comente nas issues, ok ? Tabela dos professores, logo abaixo:**
![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/82aabe57-181d-4af8-9da4-0b88f76d3b07)
***
# [Bonus2](https://www.homehost.com.br/blog/criar-sites/tabela-html/)
***
# Atenção, no bonus eu corriji um erro, eu esqueci de colocar os dados do aluno Carlos ! Perdoem-me pelo erro .
