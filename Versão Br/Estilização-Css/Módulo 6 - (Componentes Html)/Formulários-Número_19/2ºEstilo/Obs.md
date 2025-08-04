# 👁️ Observação

## 📏 Unidades de comprimento

As unidades de comprimento **absoluto** não são influenciadas por outros fatores no cálculo do seu comprimento. O tamanho final calculado corresponde exatamente ao valor declarado. Exemplos:

- `cm`: centímetros  
- `mm`: milímetros  
- `in`: polegadas  
- `px`: pixels  
- `pt`: pontos  
- `pc`: picas  

As unidades de comprimento **relativo** têm seu valor final afetado por outros fatores. Elas são usadas quando precisamos dimensionar elementos de forma proporcional. Exemplos:

- `em`: 1em é o tamanho da fonte do elemento  
- `rem`: 1rem é o tamanho da fonte do elemento raiz  
- `vw`: 1vw é 1% da largura da janela do navegador  
- `vh`: 1vh é 1% da altura da janela do navegador  
- `vmin`: 1vmin é 1% do menor lado da viewport  
- `vmax`: 1vmax é 1% do maior lado da viewport  
- `%`: valor relativo ao elemento pai  

---

## 🔄 Transformar (`transform`)

A propriedade CSS `transform` permite **girar, dimensionar, inclinar ou mover** elementos no espaço, modificando o sistema de coordenadas do layout CSS.

### ✖️ Nenhuma

- `none`: Sem transformação.

---

### 🧮 Matriz

- `matrix(n, n, n, n, n, n)`: Define uma transformação 2D usando uma matriz de seis valores.

![imagem](https://github.com/user-attachments/assets/8ef99df8-2c00-4793-b63f-baab59b01204)

---

### 📍 Translação

- `translate(x, y)`: Move o elemento nas direções horizontal e vertical.

![imagem](https://github.com/user-attachments/assets/7100cbac-e8fd-4bae-9e9c-1ae16259ada0)

---

### 📐 Escala

- `scale(x, y)`: Aumenta ou diminui o tamanho do elemento nas direções X e Y.

![imagem](https://github.com/user-attachments/assets/6b9264f9-9af2-481f-85ee-bdf855a1f1a3)

---

### 🔄 Rotação

- `rotate(ângulo)`: Rotação 2D no plano (em graus, ex: `rotate(45deg)`).

![imagem](https://github.com/user-attachments/assets/3310f718-bea5-4933-abe2-d772b94080a3)

- `rotateX(ângulo)`: Rotação 3D no eixo X  
![imagem](https://github.com/user-attachments/assets/6773687a-7479-46db-8d1a-bcaabfbecbda)

- `rotateY(ângulo)`: Rotação 3D no eixo Y  
![imagem](https://github.com/user-attachments/assets/420f88e9-1725-4e61-9a05-fa9490f730a9)

- `rotateZ(ângulo)`: Rotação 3D no eixo Z  
![imagem](https://github.com/user-attachments/assets/583f3ac4-10e0-40d7-ab2e-ead437559657)

---

### 🪞 Inclinação (Skew)

- `skew(x-angle, y-angle)`: Inclinação 2D nos eixos X e Y  
![imagem](https://github.com/user-attachments/assets/cb5ce734-ba2a-4c53-9cf8-cdc8791be5fc)

- `skewX(angle)`: Inclinação somente no eixo X  
![imagem](https://github.com/user-attachments/assets/9f16d1fd-1488-4fd8-9a40-6c4ee980c8b1)

- `skewY(angle)`: Inclinação somente no eixo Y  
![imagem](https://github.com/user-attachments/assets/688f0122-307b-41d2-9ee8-d856fc847807)

---

## 🎥 Transformações 3D

- `perspective(n)`: Define a profundidade para visualização em 3D.

- `matrix3d(n, n, ..., n)`: Matriz 4x4 com 16 valores para transformar elementos em 3D.

- `rotate3d(x, y, z, angle)`: Rotação tridimensional em torno de um vetor no espaço.

- `scale3d(x, y, z)`: Escala em três dimensões.

- `translate3d(x, y, z)`: Translação em três dimensões.

---

## ✅ Próximo Capítulo

- [Continua no número_20](../../BarraDeNavegacao-Número_20/NavBar.md)
