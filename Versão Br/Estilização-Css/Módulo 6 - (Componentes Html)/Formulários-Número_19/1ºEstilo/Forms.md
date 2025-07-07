# Observação 👁️

- [Leia o número_18 antes](../../BarraDeRolagem-Número_18/BarraDeRolagem.md)

---

## Formulários de estilo

Neste capítulo, abordaremos o estilo de formulários, chamados de formulários com CSS.  
**Nota:** Este capítulo possui três partes com formulários: Parte Um (StyleOne) até que haja peças (serão reveladas mais cedo).

---

## Página de exemplo

![Página de formulário com fundo gradiente](https://github.com/user-attachments/assets/24328d81-c33b-472e-8fd0-aac0431d2e64)

> O fundo tem um gradiente linear, permitindo misturar duas cores ao mesmo tempo.  
> Exemplo: `background: linear-gradient(cor1, cor2);`

---

## Estrutura HTML

No início do corpo, temos uma divisória `.box`, abaixo uma `.form-box` que contém o formulário e um título `<h2>`.  
No final do formulário, há dois botões: um para enviar (`.send`) e outro para limpar (`.clear`).

---

## Estilo `.box`

- Borda sólida preta de 3px  
- Largura fixa de 700px  
- Posição fixa  
- Topo a 8% da página  
- Esquerda a 25% da página  
- Bordas arredondadas  

![Estilo da .box com borda e posição fixa](https://github.com/user-attachments/assets/1babc3c8-b62c-4dfd-bb57-8dde25782a47)  
![Posicionamento e arredondamento da .box](https://github.com/user-attachments/assets/af4c414f-2ca0-4cc0-b0de-45ea9879431d)

---

## Estilo `.form-box`

- Fundo branco  
- Display flexível (`display: flex`)  
- Direção da flexão em coluna (`flex-direction: column`)  
- Largura automática  
- Largura máxima: `fit-content` (tamanho necessário para o conteúdo)  
- Bordas arredondadas de 10px  
- Preenchimento inicial  

![Estilo da .form-box](https://github.com/user-attachments/assets/a876c633-73f5-44d6-9908-4f776d4152b7)

---

## Estilo das entradas e textarea dentro de `.form-box`

- Largura 100%  
- Altura 48px  
- Bordas removidas  
- Fonte tamanho 16px  
- Margem inferior 16px  
- Bordas arredondadas 15px  

![Entradas e textarea estilizados](https://github.com/user-attachments/assets/6ba0b265-4277-4d81-b9d1-6df67cf92096)

---

## Título e área de texto

- Título centralizado (`text-align: center`)  
- Fonte do título aumentada para 24px  
- Área de texto com altura 180px  

![Título e textarea](https://github.com/user-attachments/assets/cb253ea0-c59f-4a2d-b1ae-89389587a535)

---

## Estilo dos botões em `.form-box`

- Largura 100%  
- Borda preta sólida 1px  
- Fonte 18px em negrito  
- Cor da fonte preta  
- Bordas arredondadas 10px  
- Margem inferior 5px  

![Botões estilizados](https://github.com/user-attachments/assets/373516aa-b543-4cd4-8f98-ad7309b1f88d)

---

### Botão Enviar (`.send`)

- Destaque com fundo verde  
- Efeito de transição suave em 0,5s (`transition: 0.5s;`)  
- Efeito ao pressionar (hover/focus)  

![Botão enviar com efeito verde](https://github.com/user-attachments/assets/c714fbf5-0fe8-4dc0-a864-39c339ca6da1)

---

### Botão Limpar (`.clear`)

- Destaque com fundo vermelho  
- Efeito de transição suave em 0,5s (`transition: 0.5s;`)  
- Efeito ao pressionar (hover/focus)  

![Botão limpar com efeito vermelho](https://github.com/user-attachments/assets/bfbb0c63-8cbf-479f-bd6d-589ea4f4988d)

---

## Flexbox resumido

- **`display: flex;`** — Define o container como flexível  
- **`justify-content: center;`** — Centraliza os itens horizontalmente  
- **`flex-direction: column;`** — Organiza os itens verticalmente  

---

Quer que eu gere o código CSS correspondente para essa estilização?  
Ou um exemplo HTML para testar?

---

## ✅ Próximos Capítulos

- [2º estilo](../2ºEstilo/Forms.md)

- [💡BÔNUS – Atributos não mencionados](./Obs.md)
