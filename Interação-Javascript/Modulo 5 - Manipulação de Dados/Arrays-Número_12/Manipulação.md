# Métodos Com Arrays 
O objeto Array, assim como acontece com arrays em outras linguagens de programação, permite armazenar uma coleção de vários itens sob um único nome de variável e possui membros para realizar operações comuns de array.

## Métodos de acesso e informações
1. **Array.length** Retorna o número de elementos do array.
![imagem](https://github.com/user-attachments/assets/61ed6110-de81-4764-8a9d-ca60749c7381)

2. **Array.at(index)** Retorna o elemento para a posição especificada.
![imagem](https://github.com/user-attachments/assets/d13eb41e-cb94-41e7-abf6-1ce91ab030e0)

3. **Array.toString()** Converte o array em uma string, com elementos separados por vírgulas.
![imagem](https://github.com/user-attachments/assets/a31f9ff2-a3a9-4804-b82b-9539d2da54f9)

4. **Array.join(separator)** Une todos os elementos do array em uma string, usando um separador especificado.
![imagem](https://github.com/user-attachments/assets/8e1b6c24-9660-4a8c-9c1e-4fe55f90c28c)

## Métodos de criação e modificação
1. **Array.push(element1, element2, ...)** Adiciona um ou mais elementos ao final do array.
![imagem](https://github.com/user-attachments/assets/1261080c-1658-4943-bd1b-91760c6531f9)

2. **Array.unshift(element1, element2, ...)** Adicionei um ou mais elementos ao início do array.
![imagem](https://github.com/user-attachments/assets/d8f6d339-19c6-46f6-8983-09b24fa634c2)

3. **Array.splice(start, deleteCount, item1, item2, ...)** Adiciona, remove ou substitui elementos dentro do array:
- start: índice no qual começa a modificação;
- deleteCount: Número de elementos a serem removidos do índice inicial;
- item1, item2, ...: elementos que serão adicionados ao array a partir do índice inicial;
![imagem](https://github.com/user-attachments/assets/e3a5d122-fb48-46b6-b3d9-ab6c4ccdea1c)

4. **Array.concat(array2, array3, ...)** Une dois ou mais arrays e retorna um novo array.
![imagem](https://github.com/user-attachments/assets/b786d3aa-32be-4aa1-b7cc-80c9a8c03778)

### Lógica Dos Arrays
![image](https://github.com/user-attachments/assets/7b535e5e-d48b-4448-8ddc-64aed2ffd782)
## Métodos de cópia e transformação
1. **Array.slice(start, end)** Retorna uma cópia superficial de uma parte do array sem modificar o original.
![imagem](https://github.com/user-attachments/assets/74ffb34a-5936-401e-b566-6c0c5577707c)

2. **Array.flat(profundidade)** Encontre uma matriz de matrizes em uma matriz plana.
![imagem](https://github.com/user-attachments/assets/5f7937e5-c14d-4c5a-9fdd-06ecc884558e)

3. **Array.copyWithin(destination, start, end)** Copia uma parte do array para outro local dentro do mesmo array:
- target: o índice no qual a cópia dos elementos começará a ser inserida. Se o alvo for negativo, conta a partir do final do array;
- start (opcional): índice de onde a cópia deve começar. Se o início for negativo, conta a partir do final. O valor padrão é 0;
- fim (opcional): índice onde a cópia deve terminar (não inclusivo). Se o final for negativo, conta a partir do final. O valor padrão é o tamanho da matriz;
![imagem](https://github.com/user-attachments/assets/39af0e6b-c3b6-46f5-b999-ce8ce1625451)

## Métodos de exclusão
1. **Array.delete(index)** Remove um elemento do array, deixando o índice indefinido (não recomendado).
![imagem](https://github.com/user-attachments/assets/7a81d27b-eb7e-4daf-999a-2cd45015bb00)

2. **Array.pop()** Remova o último elemento do array.
![imagem](https://github.com/user-attachments/assets/fcb9bff1-ce35-4f38-85ab-8ac7dd3f5b06)

3. **Array.shift()** Remova o primeiro elemento do array.
![imagem](https://github.com/user-attachments/assets/963c16a3-b1b1-472e-b6b0-003550b361a5)

# [Continue na Parte 2 !](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/Test/Intera%C3%A7%C3%A3o-Javascript/Modulo%205%20-%20Manipula%C3%A7%C3%A3o%20de%20Dados/Arrays-N%C3%BAmero_12/Procura.md)
