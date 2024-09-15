# [Leia a primeira parte!](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And%20Data %20Manipulação/Objects-Number-14/Manually_Objects.md)

# Métodos com objetos
Métodos são funções que são propriedades de objetos. Eles permitem que os objetos executem ações ou comportamentos relacionados aos dados que contêm. Aqui está uma visão geral de como definir e usar métodos com objetos.

## Métodos de Criação e Construção
Esses métodos são usados ​​para criar novos objetos e realizar operações envolvendo propriedades do objeto. Eles fornecem maneiras de configurar cadeias de protótipos e mesclar propriedades de objetos com eficiência.

- **Object.create(proto):** Cria um novo objeto com o protótipo especificado.
![imagem](https://github.com/user-attachments/assets/2bdd084d-59ca-468f-bf21-756ea44e62a7)

- **Object.assign(target, ...sources):** Copia todas as propriedades enumeráveis ​​de um ou mais objetos de origem para um objeto de destino.
![imagem](https://github.com/user-attachments/assets/15f0a23d-ac5a-46a1-90eb-75df67efa525)

## Métodos de acesso e iteração
Esses métodos são projetados para facilitar o acesso e a iteração das propriedades de objetos JavaScript. Eles permitem a recuperação eficiente de nomes de propriedades, valores e pares de valores-chave, facilitando o trabalho com objetos em diversos cenários.

- **Object.keys(obj):** Retorna um array contendo todas as propriedades enumeráveis ​​do próprio objeto (sem as herdadas).
![imagem](https://github.com/user-attachments/assets/139f30f9-d909-49c1-b439-dea59c3e5707)

- **Object.values(obj):** Retorna um array contendo todos os valores das propriedades enumeráveis ​​do próprio objeto.
![imagem](https://github.com/user-attachments/assets/81006bac-59c0-4e61-b444-444d2aaff062)

- **Object.entries(obj):** Retorna uma matriz de pares [chave, valor] das propriedades enumeráveis ​​do próprio objeto.
![imagem](https://github.com/user-attachments/assets/457d16d7-04f0-43d4-8f8c-babb6b102d33)

## Métodos de definição e configuração
Esses métodos são projetados para facilitar o acesso e a iteração das propriedades de objetos JavaScript. Eles permitem a recuperação eficiente de nomes de propriedades, valores e pares de valores-chave, facilitando o trabalho com objetos em diversos cenários.

- **Object.defineProperty(obj, prop, descriptor):** Define uma nova propriedade ou modifica uma existente em um objeto.
![imagem](https://github.com/user-attachments/assets/90d89da1-cd2d-4ebe-a30b-ec37b0444aa6)

- **Object.defineProperties(obj, props):** Define várias novas propriedades ou modifica propriedades existentes em um objeto.
![imagem](https://github.com/user-attachments/assets/89e68cd5-73c0-4239-8f8c-c9667143f4a5)

## Métodos de manipulação de propriedades
Esses métodos são usados ​​para interagir e manipular as propriedades de objetos JavaScript, permitindo que os desenvolvedores inspecionem e controlem atributos de propriedade, como enumerabilidade, configurabilidade e muito mais.

- **Object.getOwnPropertyDescriptor(obj, prop):** Retorna o descritor de propriedade para uma propriedade específica do objeto.
![imagem](https://github.com/user-attachments/assets/40769c1d-6af7-45d4-a006-fd3aaf5e6959)

- **Object.getOwnPropertyDescriptors(obj):** Retorna todos os descritores de propriedades do próprio objeto.
![imagem](https://github.com/user-attachments/assets/b92fa5cc-8d5d-49d2-9eb4-488e07590b48)

- **Object.hasOwnProperty(prop):** Retorna um booleano indicando se o objeto possui a propriedade especificada como própria (não herdada).
![imagem](https://github.com/user-attachments/assets/8178b993-0f78-41ba-ba3d-a104b9579397)

- **Object.propertyIsEnumerable(prop):** Retorna um booleano que indica se a propriedade especificada é enumerável.
![imagem](https://github.com/user-attachments/assets/7615b49b-d335-4416-bb11-5ecc3e0b5a86)

## Métodos de prototipagem e herança
Os métodos de prototipagem e herança em JavaScript fornecem maneiras de interagir com o protótipo de um objeto, permitindo que os desenvolvedores gerenciem herança e cadeias de protótipos. 

- **Object.getPrototypeOf(obj):** Retorna o protótipo (objeto interno [[Prototype]]) do objeto especificado.
![imagem](https://github.com/user-attachments/assets/96cb885b-6a14-4cc0-a900-ff606592f024)

- **Object.setPrototypeOf(obj, proto):** Define o protótipo (objeto interno [[Prototype]]) do objeto especificado.
![imagem](https://github.com/user-attachments/assets/5b4e93dd-0ff3-4b41-b711-b256b0d5eb8f)

## Métodos de Congelamento
Os métodos JavaScript Object.preventExtensions(), Object.seal() e Object.freeze() servem para restringir as maneiras pelas quais os objetos podem ser modificados. Esses métodos diferem em seus níveis de restritividade, proporcionando vários níveis de imutabilidade e controle de extensibilidade.

- **Object.preventExtensions(obj):** Impede que novas propriedades sejam adicionadas ao objeto.
![imagem](https://github.com/user-attachments/assets/7ca324d9-12c9-407c-8a67-e18a2676df33)

- **Object.isExtensible(obj):** Retorna um booleano indicando se novas propriedades podem ser adicionadas ao objeto.
![imagem](https://github.com/user-attachments/assets/95c2f223-8b6d-4331-9665-2a22fd3f9aae)

- **Object.seal(obj):** Sela um objeto, evitando a adição ou remoção de propriedades (propriedades existentes podem ser modificadas).
![imagem](https://github.com/user-attachments/assets/0f94a7c9-dcb8-49b3-82a7-8296faa64561)

- **Object.isSealed(obj):** Retorna um booleano inferior se o objeto estiver selado.
![imagem](https://github.com/user-attachments/assets/3f074526-e7fd-4e09-ba76-c8a75a59c893)

- **Object.freeze(obj):** Congela um objeto, evitando a adição, remoção ou modificação de propriedades (torna o objeto imutável).
![imagem](https://github.com/user-attachments/assets/4b5ecce1-693c-4d68-b343-5c0c1747df73)

- **Object.isFrozen(obj):** Retorna um valor booleano se o objeto estiver congelado.
![imagem](https://github.com/user-attachments/assets/c7d3ca25-caaf-4286-b082-2f15976971b7)

## Métodos de teste e verificação
Esses métodos são usados ​​para testar ou verificar certas condições sobre objetos e suas propriedades em JavaScript. Eles fornecem uma maneira de garantir que os objetos estejam em conformidade com condições específicas ou de validar o estado do objeto durante o tempo de execução.

- **Object.is(valor1, valor2):** Determina se dois valores são iguais.
![imagem](https://github.com/user-attachments/assets/45661b52-3455-44dd-9b3b-e54c0f832843)

- **Object.toString():** retorna uma string que representa o objeto.
![imagem](https://github.com/user-attachments/assets/69a2bae4-7d85-425b-a358-2f5e8f8be24e)

## Métodos Utilitários
Os métodos utilitários em JavaScript são projetados para fornecer funções úteis para trabalhar com objetos. Eles oferecem conveniência na transformação e manipulação de estruturas de dados, como arrays ou objetos, em outros formatos.

- **Object.fromEntries(iterable):** Transforma uma lista de pares [chave, valor] em um objeto.
![imagem](https://github.com/user-attachments/assets/83c9512c-4cb3-445f-95ff-aacf6ef8c659)