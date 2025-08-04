# Observação 👁️

- [Leia a parte de construção primeiro](HtmlCss.md)

---

## Documentação do Código JavaScript: Data, Hora e Atualização de Plano de Fundo

Este documento explica, passo a passo, como o código JavaScript atualiza dinamicamente a data, a hora e altera o plano de fundo e o ícone com base no horário do dia.  

---

### Configuração Inicial  

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const data = new Date();
    const body = document.body;
```

- **`DOMContentLoaded`**: Garante que o script seja executado apenas após o DOM estar completamente carregado.  
- **`data`**: Cria um objeto `Date` para acessar a data e hora atuais.  
- **`body`**: Seleciona o elemento `<body>` para posteriormente modificar seu estilo.  

---

### Selecionando Elementos HTML  

```javascript
    const fundo = document.querySelector('.fundo');
    const imagemRelogio = document.querySelector('.img-icone');
    const horaElement = document.querySelector('.hora');
    const dataCompleta = document.querySelector('.data-completa');
```

- Utiliza **`querySelector`** para selecionar elementos do DOM que serão manipulados:  
  - `.fundo`: Ajusta o plano de fundo conforme o horário do dia.  
  - `.img-icone`: Altera a imagem do ícone do relógio.  
  - `.hora`: Exibe a hora atual.  
  - `.data-completa`: Exibe a data formatada.  

---

### Função para Formatar Números  

```javascript
    const formatarNumero = (numero) => (numero < 10 ? `0${numero}` : numero);
```

- Esta função formata números menores que 10, adicionando um zero à esquerda para garantir o formato de dois dígitos.  

---

### Exibindo a Data no Formato Brasileiro  

```javascript
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(data);

    dataCompleta.textContent = dataFormatada;
```

- **`Intl.DateTimeFormat`**: Formata a data no padrão brasileiro (dd de mês por extenso de aaaa).  
- Define o texto formatado no elemento `.data-completa`.  

---

### Atualizando o Relógio  

```javascript
    const atualizarRelogio = () => {
        const dataAtualizada = new Date();
        const hora = formatarNumero(dataAtualizada.getHours());
        const minuto = formatarNumero(dataAtualizada.getMinutes());
        const segundo = formatarNumero(dataAtualizada.getSeconds());
        horaElement.textContent = `${hora}:${minuto}:${segundo}`;
    };
```

- **`atualizarRelogio`**:  
  - Obtém as horas, minutos e segundos atuais.  
  - Utiliza `formatarNumero` para garantir o formato de dois dígitos.  
  - Atualiza o elemento `.hora` com a hora atual.  

---

### Alterando Plano de Fundo e Imagem com Base no Horário do Dia  

```javascript
    const horaAtual = data.getHours();
    if (horaAtual >= 6 && horaAtual < 12) {
        fundo.classList.add('morning');
        body.style.background = '#fffce9';
        imagemRelogio.src = 'images/Manha.png';
        imagemRelogio.alt = 'Imagem do período da manhã';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        fundo.classList.add('afternoon');
        body.style.background = '#eac466';
        imagemRelogio.src = 'images/Tarde.png';
        imagemRelogio.alt = 'Imagem do período da tarde';
    } else if (horaAtual >= 18 && horaAtual < 21) {
        fundo.classList.add('evening');
        body.style.background = '#6a4c93';
        imagemRelogio.src = 'images/Anoitecendo.png';
        imagemRelogio.alt = 'Imagem do período da noite';
    } else {
        fundo.classList.add('night');
        body.style.background = '#14477a';
        imagemRelogio.src = 'images/Noite.png';
        imagemRelogio.alt = 'Imagem do período noturno';
    }
```

- Determina o **período do dia** com base na hora atual:  
  - **Manhã (6h às 12h)**: Classe `morning`, plano de fundo claro e imagem da manhã.  
  - **Tarde (12h às 18h)**: Classe `afternoon`, plano de fundo amarelo e imagem da tarde.  
  - **Anoitecendo (18h às 21h)**: Classe `evening`, plano de fundo roxo e imagem do entardecer.  
  - **Noite (21h às 6h)**: Classe `night`, plano de fundo azul escuro e imagem da noite.  
- Define o atributo `alt` nas imagens para melhorar a acessibilidade.  

---

### Atualização do Relógio em Tempo Real

```javascript
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
});
```

- **`atualizarRelogio`**: Executado ao carregar a página para exibir a hora inicial.  
- **`setInterval`**: Atualiza o relógio a cada segundo.  

---

## Resumo

- **Funcionalidade**:  
  - Atualiza dinamicamente a data e a hora no formato brasileiro.  
  - Altera o plano de fundo e a imagem do relógio conforme o horário do dia.  
  - Atualiza o relógio em tempo real.  

- **Melhorias**:  
  - Código modular e de fácil compreensão.  
  - Melhora da acessibilidade com o uso de atributos `alt`.  

- **Dependências**:  
  - Imagens para diferentes horários do dia (`images/Manha.png`, etc.).
