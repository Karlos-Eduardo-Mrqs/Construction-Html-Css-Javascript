# Observação 👁️

- [Leia o módulo 5 antes de começar](../../Módulo%205%20-%20(Posições)/Eixos_X,Y,Z-Número_13/Eixos.md)

---

## Padronização no CSS (Reset CSS)

O **Reset CSS** é uma técnica (ou conjunto de estilos CSS) projetada para **normalizar a estilização padrão dos elementos HTML** em todos os navegadores.  

O objetivo é criar uma base **consistente e previsível** para o desenvolvimento web, eliminando as variações de estilo padrão que cada navegador aplica individualmente.

---

## Como os navegadores interpretam?

Cada navegador possui sua própria apresentação padrão para os elementos HTML, o que pode gerar **conflitos de layout** em projetos web.  

Esse comportamento individualizado era (e ainda é) um desafio frequente para desenvolvedores front-end, já que cada navegador aplica estilos default diferentes.  

Apesar de ser uma técnica simples, chegar a um consenso sobre como "forçar" todos os navegadores a se comportarem da mesma forma não foi fácil.

---

## Como usar o Reset CSS?

Sabemos que o Reset CSS é uma folha de estilos como qualquer outra, e pode ser usada:

- Diretamente dentro do arquivo HTML;
- Ou importada a partir de um arquivo externo (recomendada para reaproveitamento em vários arquivos).

O mais comum é **adicionar o Reset CSS antes de iniciar a estilização do projeto**, para remover a formatação padrão dos navegadores.  

Se for inserido no meio do projeto, pode gerar problemas, pois o layout pode ter sido criado considerando os estilos padrão dos navegadores — não a base padronizada após o reset.

---

## Exemplo de arquivo Reset CSS

Você pode conferir um arquivo Reset CSS funcional neste link:  
[normalize.css no GitHub](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Vers%C3%A3o%20Br/Estiliza%C3%A7%C3%A3o-Css/M%C3%B3dulo%206%20-%20(Componentes%20Html)/Normaliza%C3%A7%C3%A3o-N%C3%BAmero_14/normilize.css)

---

## 🔗 **Próximo passo:**  

- [Continue no Número_15 - Listas e Âncoras](../Listas_Ancoras-Número_15/Ancoras.md)
