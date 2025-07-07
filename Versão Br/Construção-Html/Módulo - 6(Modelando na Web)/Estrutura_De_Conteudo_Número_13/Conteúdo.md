# Observação 👁️

- [Leia o Número_12 antes de continuar !](../Estrutura_Número_12/Estrutura.md)

---

## 🧱 Conteúdo das Páginas Web

No arquivo anterior (Estrutura-Número_12), você aprendeu como identificar blocos em páginas web. Agora, vamos aprofundar na estrutura principal que compõe qualquer site:

## 🧭 Cabeçalho (Header)

É a parte superior do site, onde geralmente estão:

- Menus de navegação (links de páginas)
- Logo
- Acesso à conta
- Suporte ou contato

**📸 Exemplo visual:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/8d58ea6e-dcb8-4f94-a7a7-1ef5560e7b17)

### 🏷️ Tags comuns

```html
<header>
  <nav>
    <a href="#">Início</a>
    <a href="pagina-2.html">Página 2</a>
  </nav>
</header>
```

- ``<header>`` : delimita o cabeçalho da página.
- ``<nav>`` : contém os links de navegação.

## 📄 Conteúdo (Main)

É a área central da página — onde está o conteúdo principal que o usuário vai ler, assistir ou interagir. Essa parte pode conter:

- Títulos, parágrafos, listas
- Imagens e vídeos
- Conteúdo secundário e lateral

**📸 Exemplo visual:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/673f6235-b253-4941-8a75-e3672b5a3519)

### Tags comuns🏷️

```html
<main>
  <div>
    <section>
      <h1>Cabeçalho, Conteúdo e o Rodapé</h1>
      <p>Conteúdo principal</p>
    </section>

    <section>
      <h2>Conteúdo Secundário</h2>
      <span>Mais conteúdo</span>
    </section>

    <aside>
      <h2>Conteúdo Complementar</h2>
      <p>Informações adicionais</p>
    </aside>
  </div>
</main>
```

- ``<main>`` : delimita o conteúdo principal.
- ``<section>`` : separa os blocos temáticos.
- ``<aside>`` : conteúdos complementares (lateral).
- ``<div>`` : bloco genérico para organização.

## 📬 Rodapé (Footer)

É a parte final da página, onde geralmente estão:

- Direitos autorais
- Informações da empresa
- Créditos
- Referências

**📸 Exemplo visual:**

![image](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/c490f5ad-5a2e-47d8-a01e-91b39236e28e)

### Tags comuns 🏷️

```html
<article>
  <header>Nossa Empresa</header>

  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quo voluptas fuga...
  </div>

  <footer>Carlos Eduardo</footer>
</article>

```

- ``<article>`` → bloco de conteúdo independente (ex: post, card).
- ``<footer>`` → rodapé geral ou específico de um artigo.

> 🔎 Dica: Um ``<article>`` pode conter seu próprio ``<header>`` e ``<footer>``!

---

## 🏁 Conclusão

Parabéns por ter chegado até aqui! 🎉
Você completou com sucesso o Módulo de Construção HTML e agora domina os fundamentos para criar páginas web bem estruturadas.

### ✅ O que você aprendeu ?

1. Como organizar a estrutura de uma página com HTML.
2. Como usar as tags certas para criar hierarquia e significado.
3. Como deixar o conteúdo mais claro, limpo e organizado.
4. Criar páginas com layout lógico e profissional.
5. Melhorar a leitura e a navegação para os usuários.
6. Aplicar estilos com CSS e dar vida ao seu design.

> Continue praticando e construindo — cada linha de código é um passo a mais na sua jornada como desenvolvedor!

## 🎁 Bônus

- [👉 Explore todas as tags HTML na W3Schools](https://www.w3schools.com/tags/default.asp)
