# Prática com DOM (Relógio Dinâmico)

> **"Transforme seu navegador em um relógio dinâmico e estiloso!"**  
> Aprenda a criar um relógio interativo que muda de cor conforme o horário do dia utilizando HTML, CSS e JavaScript.

Programadores, este é um projeto interativo, utilizando apenas HTML, CSS e JavaScript. Para organizar a explicação, a parte um aborda a estrutura com HTML, a parte dois a estilização com CSS e, por fim, o JavaScript para interatividade e ajustes. Ok, vamos nessa, baby!

# Estrutura HTML

## .fundo
A classe `.fundo` serve como o contêiner principal do projeto de relógio dinâmico. Ela envolve toda a estrutura e garante o alinhamento e a estilização adequada dos elementos filhos. Com a ajuda do CSS, ela é configurada para ocupar toda a viewport e centralizar a exibição do relógio, criando um layout visualmente agradável.

## .img-icone
A tag `img` é classificada com `.img-icone`. Ela será adicionada como se fosse um ícone, dependendo do horário dentro do sistema, com a ajuda do CSS.

## .relogio, .data-completa, .hora
A tag `div` classificada como `.relogio` irá incluir a data completa "19 de janeiro de 2025" junto com o horário "HH:MM:SS", sendo atribuídos pelo JavaScript e estilizados com CSS.

# [Documento HTML](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Dinamic%20Clock/index.html)

# Estilizando o Relógio Dinâmico: Documentação CSS

Abaixo está a explicação detalhada do CSS usado para estilizar o projeto **Relógio Dinâmico**. Cada seção aborda uma estilização específica aplicada aos elementos para um design responsivo e visualmente atraente.

---

### 1. **Resetando Margens e Preenchimentos Padrão**
- Redefine todas as margens e preenchimentos padrão para uma estilização consistente entre navegadores.
- Habilita o uso de `box-sizing: border-box` para incluir preenchimentos e bordas nas dimensões dos elementos.

---

### 2. **Estilizando o Body**
- Utiliza uma fonte moderna e limpa para melhor legibilidade.
- Centraliza o conteúdo vertical e horizontalmente usando Flexbox.
- Define um fundo cinza claro (`#f2f2f2`) para contrastar com o conteúdo.
- Faz com que a altura da página ocupe 100% da viewport.

### 3. **Contêiner Principal: `.fundo`**
- Centraliza o texto e adiciona preenchimento para espaçamento.
- Define um fundo branco com cantos arredondados (`border-radius: 15px`).
- Aplica uma sombra suave para um efeito 3D.
- Limita a largura a `500px` para garantir a responsividade.
- Adiciona uma transição suave de cor de fundo para mudanças dinâmicas.

### 4. **Ícone do Relógio: `.img-icone`**
- Cria um ícone circular de relógio com `border-radius: 50%`.
- Garante que a imagem se ajuste ao contêiner usando `object-fit: cover`.
- Adiciona uma sombra suave para melhorar o design.

### 5. **Exibição do Relógio: `.relogio`**
- Exibe o relógio com texto em negrito e espaçamento entre letras (`letter-spacing`) para clareza.
- Posiciona-o abaixo do ícone do relógio com uma margem de `20px`.

### 6. **Exibição da Data: `.data-completa`**
- Utiliza um tamanho de fonte menor para diferenciar a data da hora.
- Define uma cor cinza mais clara (`#777`) para uma aparência sutil.

### 7. **Exibição da Hora: `.hora`**
- Aumenta o tamanho da fonte para maior destaque.
- Utiliza texto em negrito para melhor visibilidade.

### 8. **Cores de Fundo Dinâmicas**
- Altera o fundo da classe `.fundo` dinamicamente com base no horário do dia:
  - **Manhã:** Um tom suave e acolhedor para começar o dia (`#ffecd2`).
  - **Tarde:** Cores vibrantes que trazem energia (`#ffba08`).
  - **Noite:** Um roxo profundo que remete ao descanso (`#5617ae`).
  - **Madrugada:** Um azul escuro que simula o céu estrelado (`#2c3e50`).

### 9. **Estilização do Rodapé**
- Adiciona o nome do desenvolvedor em uma fonte menor abaixo do relógio.
- Posiciona-o com uma margem de `20px`.

### 10. **Cores de Fonte Dinâmicas**
- Ajusta a cor do texto dinamicamente para melhor visibilidade conforme o fundo:
  - **Durante o dia:** Texto escuro (`#333`).
  - **Durante a noite:** Texto claro (`#fff`).

### 11. **Design Responsivo**

#### Telas Médias (768px e abaixo)
- Reduz os tamanhos dos elementos para se ajustarem a telas médias.

#### Telas Pequenas (480px e abaixo)
- Reduz ainda mais os tamanhos dos elementos para dispositivos pequenos, como smartphones.

Este CSS garante que o **Relógio Dinâmico** seja visualmente atraente e responsivo em todos os dispositivos!

# [Documento CSS](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Dinamic%20Clock/style.css)

# [Ir para a Parte 2](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Version%20EUA/Interaction-Javascript/Module%206%20-%20DOM/Pratice_Manipulation-Number_16/Dinamic%20Clock/Javascript.md)

