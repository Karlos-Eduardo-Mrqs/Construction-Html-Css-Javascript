# Observação 👁️

- [Leia o Número_16 antes de continuar](../Inputs-Número_16/inputs.md)

---

## Estilos com Tabelas

Neste capítulo, vamos estilizar uma tabela HTML.

## Tabela Referência

![Tabela referência 1](https://github.com/user-attachments/assets/768076cd-fb8b-4c5e-8e65-a332179729f3)  

![Tabela referência 2](https://github.com/user-attachments/assets/75125165-eff0-4cd9-b288-82b845321962)

---

## Exemplo a ser estilizado

Usaremos essa tabela de referência para deixar a tabela abaixo semelhante:

![Tabela para estilizar](https://github.com/user-attachments/assets/f028ef37-b682-4733-88ba-d9f9a82054c3)

---

## Estilização da Tabela

### Caption (título)

- Fonte tamanho 15px  
- Padding: 10px horizontal e 60px vertical  
- Fonte com maior destaque  

![Caption estilizado](https://github.com/user-attachments/assets/32e6363f-ac69-470b-9d95-f9d2f830b22c)

---

### Tabela

- Texto centralizado  
- Largura: 100%  
- Altura: 200px  

![Tabela centralizada](https://github.com/user-attachments/assets/b65eff78-445f-4a21-aa39-12e537ba1195)  
![Tabela com altura](https://github.com/user-attachments/assets/9d2832ed-abd7-450f-b128-de8736990f49)

---

### Thead (cabeçalho)

- Fundo vermelho escuro  
- Altura: 40px  
- Largura: 20px  
- Fonte: 16px  

![Cabeçalho estilizado](https://github.com/user-attachments/assets/49c36dba-31f9-4a21-93cb-5cc0350b86ba)

---

### Linhas alternadas

- Linhas 1, 3, 5 com fundo branco  

![Linhas com fundo branco](https://github.com/user-attachments/assets/d4c2bd64-e3a6-49fc-ad2e-7b22ad09388e)

---

### Tfoot (rodapé)

- Borda no topo e na parte inferior  

![Rodapé com bordas](https://github.com/user-attachments/assets/d311688a-8cc6-4623-b8e9-707f3334e9fb)

- Total alinhado à direita, próximo ao número de carros  

![Total alinhado](https://github.com/user-attachments/assets/1ba4d97a-7b3b-4a0b-bf78-1929942b593d)

---

### Efeito de hover

- Ao passar o mouse, a linha muda para fundo vermelho  

![Hover na linha](https://github.com/user-attachments/assets/e3b9adff-25eb-4e0d-bec9-cc4f0d074807)

---

## CSS Final

```css
html {
    background-color: #333;
    margin: 0;
}

body {
    color: aliceblue;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.table-car2 caption {
    font-weight: bold;
    font-size: 15px;
    padding: 10px 15px;
}

.table-car2 {
    text-align: center;
    width: 100%;
    height: 200px;
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
}

.Car-head th {
    background-color: darkred;
    font-size: 16px;
    width: 20px;
    height: 40px;
}

.Car-body .linne {
    background-color: #555;
}

.Car-foot {
    border-top: solid 1px darkred;
    border-bottom: 3px solid darkred;
    text-align: end;
}

.Car-foot .Total-Car {
    text-align: end;
}

.Car-body tr:hover td {
    background-color: red;
}
```

---

## ✅ Próximo Capítulo

- [▶️ Continua no Número_18](../BarraDeRolagem-Número_18/BarraDeRolagem.md)
