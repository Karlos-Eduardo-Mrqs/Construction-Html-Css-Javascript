# Observação 👁️

- [Leia a introdução primeiro!](Introducao.md)

---

## Front-End

Chegamos finalmente ao **JavaScript**, a tecnologia que traz interação aos nossos sites. Ele trabalha em conjunto com **HTML** e **CSS**, formando as três tecnologias principais usadas para construir o **Front-End** — a parte visual e interativa dos sites.

Essa relação pode ser representada pela imagem abaixo:

![Front-End: HTML, CSS e JavaScript](https://github.com/user-attachments/assets/f74f1228-6f55-4285-82da-824d46c794b4)

---

### Analogias para entender o Front-End

1. **Estrutura (Esqueleto):**  
   O esqueleto é a base do nosso corpo, assim como o **HTML** é a estrutura que constrói todo o conteúdo da página.

2. **Coloração (Roupas e aparência):**  
   As roupas, cor dos olhos, tamanho e outras características são como a "pintura" do corpo — assim como o **CSS** define o estilo e a aparência visual das páginas.

3. **Interação (Cérebro):**  
   Nosso cérebro, órgãos e sistema nervoso controlam a comunicação e interação — da mesma forma, o **JavaScript** é responsável por tornar as páginas dinâmicas e interativas.

---

## Implementação do JavaScript em HTML

O JavaScript pode ser adicionado a um documento HTML de duas formas: **interna** ou **externa** — semelhante ao CSS.

### 1. Interna

Para incluir código JavaScript diretamente no HTML, usamos a tag `<script>`. Ela pode ficar dentro do `<head>` ou no `<body>`, conforme a necessidade.

Exemplo:

```html
<script>
  alert("Olá, Mundo!");
</script>
```

![image](https://github.com/user-attachments/assets/7b58b6ee-a4c0-4653-b2bc-97c2e9d7ce25)
Podendo adiciona-la tanto na parte do body(corpo) ou no head(cabeçalho), como preferir.

### 2. Externa

Para adicionar um arquivo JavaScript externo, usa-se a tag ``<script>`` com o atributo ``src`` apontando para o arquivo ``.js``. Isso ajuda a manter o código organizado e reutilizável.

```html
<script src="script.js"></script>
```

![image](https://github.com/user-attachments/assets/e885aad6-35c7-473d-a8c7-80b3bc0f1adc)

---

## Bônus: Quebre a maldição do "Olá, Mundo!"

Diz a lenda que todo programador bem-sucedido começa seu aprendizado exibindo a mensagem "Olá, Mundo!".

Para isso, use o comando:

```js
console.log("Olá, Mundo !");
```

Esse comando imprime a mensagem no console do navegador, que pode ser aberto com o atalho: ``CTRL + Shift + I``.

![image](https://github.com/user-attachments/assets/6173f36d-607c-4290-92f8-96414a046408)

Se preferir mostrar um alerta na tela, use:

```js
alert("Olá, Mundo!");
```

![image](https://github.com/user-attachments/assets/53c01b9a-b13d-4891-a154-e76a3aa00916)

---

## Bônus 2:Executando JavaScript no terminal do VSCode

Sabia que você pode executar seus códigos JavaScript diretamente no terminal do VSCode? Veja como:

**1. Instalação do Node.js**
De imediato, precisamos do Node.js, acesse o site [node.js](https://nodejs.org/pt) e instale-o. Atenção, apenas siga as instruções de instalação, não modifique nada. Ao final será mostrado essa tela aqui:

![image](https://github.com/user-attachments/assets/34322da6-5cb5-400e-ad0c-da46470a6717)
Digite o comando "node", fazendo assim, que realize comandos Javascript.

**2. Instalação do VsCode**
Em seguida, para caso você não tenha o Visual Studio Code, acesso o site [Visual Studio Code.com](https://code.visualstudio.com/). Siga as instruções de instalação e vamos em frente:
![image](https://github.com/user-attachments/assets/2c04ec27-4712-4bc8-bb95-9f839c681b60)

**3. Extensões adicionais**
Agora com o VsCode instalado, teremos que instalar extensões das linguagens de programação, exemplo(Javascript,Python,C#,C++ e entre outras), auxiliares sendo usadas para te ajudar a debugar esses códigos no terminal, code.runner.

![image](https://github.com/user-attachments/assets/287744d6-75b2-426c-8256-58c4a78c86bd)

---

## Próximo Capítulo

- [Continue no próximo capítulo](../Variáveis_Número-02/variaveis.md)
