# Observação Bônus
Esses comandos são parte do Flexbox, uma poderosa ferramenta de layout do CSS que facilita a organização e o alinhamento dos elementos dentro de um container flexível. Vamos ver cada um deles em detalhes:

## display: flex;
Este comando transforma o elemento em um container flexível, permitindo que seus filhos (os itens flex) sejam organizados de acordo com as regras de layout do Flexbox. Ele cria um contexto flex para os elementos filhos, permitindo que eles sejam controlados por propriedades como flex-direction, justify-content, entre outras.

## justify-content: center;
Esta propriedade alinha os itens flex horizontalmente no container flexível, ao longo do eixo principal. No Flexbox, o eixo principal é determinado pela propriedade flex-direction. Se a direção for row (padrão), o eixo principal será horizontal. Se for column, será vertical. O valor center centraliza os itens flex no meio do eixo principal. Outros valores comuns de justify-content:

- **flex-start:** Alinha os itens ao início do eixo principal.
- **flex-end:** Alinha os itens ao final do eixo principal. 
- **space-between:** Distribui os itens com espaço igual entre eles.
- **space-around:** Distribui os itens com espaço igual ao redor de cada item.

## flex-direction: column;
Esta propriedade define a direção do eixo principal ao organizar os itens dentro do container. O valor column organiza os itens verticalmente (de cima para baixo). Se não for especificada, a direção padrão é row (horizontal, da esquerda para a direita). Outros valores:

- **row:** Itens organizados horizontalmente (padrão). 
- **row-reverse:** Itens organizados horizontalmente, mas na direção inversa (da direita para a esquerda).
- **column-reverse:** Itens organizados verticalmente de baixo para cima.

Os itens serão organizados verticalmente e estarão centralizados horizontalmente no container.Essas três propriedades são fundamentais para trabalhar com Flexbox, permitindo uma organização flexível, centrada e adaptável para layouts web.