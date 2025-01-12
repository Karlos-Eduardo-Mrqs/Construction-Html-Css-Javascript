# Observação 
## Unidades de comprimento
As unidades de comprimento absoluto não são influenciadas por outros fatores no cálculo do seu comprimento. Ao utilizá-los, o tamanho final calculado corresponde exatamente ao valor declarado. Exemplos de valores absolutos são: 

- centímetros centímetros;
- mm milímetros;
- em polegadas;
- pixels pixels;
- pontos pontos;
- pc pica. 

As unidades de comprimento relativo têm seu comprimento final afetado por outros fatores. Eles são usados ​​quando precisamos dimensionar as dimensões do elemento. Exemplos de valores relativos são:
- em: 1em é o tamanho da fonte do elemento;
- rem: 1rem é o tamanho da fonte do elemento acima na hierarquia de elementos;
- vw: 1vw é 1% da largura da janela do navegador;
- vh: 1vh é 1% da altura da janela do navegador;
- vmin: 1vmin é 1% do menor tamanho da janela do navegador;
- vmax: 1vmax é 1% da maior dimensão da janela do navegador;
- %: calcula o tamanho relativo ao elemento pai;
## Transformar
A propriedade CSS transform permite girar, dimensionar, inclinar ou traduzir um elemento. Modifica o espaço de coordenadas do modelo de formatação visual CSS.

- nenhuma: Define que não deve haver transformação;
###Matriz 
- matriz: (n,n,n,n,n,n) Define uma transformação 2D, utilizando uma matriz de seis valores;	
![imagem](https://github.com/user-attachments/assets/8ef99df8-2c00-4793-b63f-baab59b01204)

### Traduzir
- translate(x,y) Define uma tradução 2D	
![imagem](https://github.com/user-attachments/assets/7100cbac-e8fd-4bae-9e9c-1ae16259ada0)

### Escala
- scale(x,y) Define uma transformação de escala 2D	
![imagem](https://github.com/user-attachments/assets/6b9264f9-9af2-481f-85ee-bdf855a1f1a3)

### Girar
- rotate(ângulo) Define uma rotação 2D, o ângulo é especificado no parâmetro
![imagem](https://github.com/user-attachments/assets/3310f718-bea5-4933-abe2-d772b94080a3)

- rotateX(angle) Define uma rotação 3D ao longo do eixo X
![imagem](https://github.com/user-attachments/assets/6773687a-7479-46db-8d1a-bcaabfbecbda)

- rotateY(ângulo) Define uma rotação 3D ao longo do eixo Y	
![imagem](https://github.com/user-attachments/assets/420f88e9-1725-4e61-9a05-fa9490f730a9)

- rotateZ(angle) Define uma rotação 3D ao longo do eixo Z
![imagem](https://github.com/user-attachments/assets/583f3ac4-10e0-40d7-ab2e-ead437559657)

### Inclinação
- skew(x-angle,y-angle) Define uma transformação de inclinação 2D ao longo dos eixos X e Y	
![imagem](https://github.com/user-attachments/assets/cb5ce734-ba2a-4c53-9cf8-cdc8791be5fc)

- skewX(angle) Define uma transformação de inclinação 2D ao longo do eixo X	
![imagem](https://github.com/user-attachments/assets/9f16d1fd-1488-4fd8-9a40-6c4ee980c8b1)

- skewY(angle) Define uma transformação de inclinação 2D ao longo do eixo Y	
![imagem](https://github.com/user-attachments/assets/688f0122-307b-41d2-9ee8-d856fc847807)

### 3D
- perspective(n) Define uma vista em perspectiva para um elemento transformado em 3D
- array3d (n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) Define uma transformação 3D, usando uma matriz 4x4 de 16 valores
- rotate3d(x,y,z,angle) Define uma rotação 3D
- scale3d(x,y,z) Define uma transformação de escala 3D
- translate3d(x,y,z) Define uma tradução 3D