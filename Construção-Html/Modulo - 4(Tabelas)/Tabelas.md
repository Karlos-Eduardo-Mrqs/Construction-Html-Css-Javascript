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
- **width: Já foi citado anteriomente no modulo 3. Para ajustar largura; No final, ficou assim**
