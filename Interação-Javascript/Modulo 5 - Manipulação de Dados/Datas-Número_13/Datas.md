# Métodos de data JavaScript
JavaScript fornece vários métodos para manipular e recuperar informações de data e hora. Esses métodos permitem definir e obter diferentes componentes de um objeto de data, como dia, mês, ano, horas, minutos, segundos e milissegundos.

# Quando eu uso a data?
JavaScript não possui dados de tipo de data. No entanto, você pode usar o objeto Date e seus métodos para trabalhar com dados e horas em seus aplicativos. O objeto Date possui um grande número de métodos para definir, recuperar e manipular dados. Ele não tem nenhuma propriedade.

# New Date()
The New Date() em JavaScript é um construtor que cria um novo objeto de dados. Este objeto representa um ponto no tempo e é baseado no número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC ("A Época Unix").

## Usos e exemplos de new Date()

### Sem argumentos:
Quando new Date() é chamado sem argumentos, ele cria um objeto de dados como os dados e a hora atuais.
![imagem](https://github.com/user-attachments/assets/73e0aca8-1ed2-4ce8-b5fe-fcebd78461c5)

### Com uma sequência de dados:
Aceita uma sequência de dados no formato reconhecido pelo padrão Date Time String Format, como "AAAA-MM-DD".

![imagem](https://github.com/user-attachments/assets/2a40bbec-bf74-4950-82b1-387948155971)

### Com parâmetros numéricos (ano, mês, dia, horas, minutos, segundos, milissegundos):
Os meses começam em 0 (janeiro é 0, fevereiro é 1, etc.), então o número 7 representa agosto.
![imagem](https://github.com/user-attachments/assets/beb8e140-2d20-4949-a1a3-1543eec8cae1)

### Com o carimbo de data/hora em milissegundos:
Cria dados com base no número de milissegundos desde a "Época Unix".
![imagem](https://github.com/user-attachments/assets/52982617-8868-4834-a972-e06b645344e5)

## Definina Com Os Métodos
- **setDate(day):** Define o dia do mês (1-31).
- **setFullYear(ano, mês, dia):** Define o ano completo e, opcionalmente, o mês e o dia.
- **setHours(hour):** Define a hora do dia (0-23).
- **setMilliseconds(ms):** Define os milissegundos (0-999).
- **setMinutes(minuto):** Define os minutos (0-59).
- **setMonth(mês):** Define o mês (0-11).
- **setSeconds(second):** Define os segundos (0-59).
- **setTime(milissegundos):** Define o tempo em milissegundos desde 1º de janeiro de 1970.

## Obtenha Com Os Métodos
- **getFullYear():** Recupera o ano completo (por exemplo, 2024).
- **getMonth():** Recupera o mês (0-11).
- **getDate():** Recupera o dia do mês (1-31).
- **getDay():** Recupera o dia da semana (0-6; domingo é 0).
- **getHours():** Recupera a hora (0-23).
- **getMinutes():** Recupera os minutos (0-59).
- **getSeconds():** Recupera os segundos (0-59).
- **getMilliseconds():** Recupera os milissegundos (0-999).
- **getTime():** Recupera o tempo em milissegundos desde 1º de janeiro de 1970.

## Formatos de data
- **Data ISO:** "2015-03-25" (formato padrão internacional).
- **Data abreviada:** "25/03/2015" (formato dos EUA).
- **Data longa:** "25 de março de 2015" ou "25 de março de 2015" (varia de acordo com a região).
- **toISOString():** Retorna a data no formato ISO 8601 (AAAA-MM-DDTHH:mm.sssZ). É útil para trabalhar com APIs que esperam datas neste formato.
- **toUTCString():** Converte a data em uma string no formato UTC (ex: "Quarta, 14 de junho de 2017 07:00:00 GMT").
- **toLocaleDateString():** Retorna a parte da data (dia, mês, ano) como uma string, formatada de acordo com o idioma especificado e as convenções regionais.
- **toLocaleTimeString():** Retorna a parte do tempo (horas, minutos, segundos) como uma string, formatada de acordo com o idioma especificado e as convenções regionais.
- **toLocaleString():** Retorna a data e a hora como uma string, formatada de acordo com o idioma especificado e as convenções regionais.

Esses métodos e formatos permitem controle e manipulação precisos de datas e horas em aplicativos JavaScript.

# [Os exemplos estão localizados no documento de script](https://github.com/Karlos-Eduardo-Mrqs/Construction-Html-Css-Javascript/blob/main/Interaction-Javascript/Module%205%20-%20Methods%20And %20Data%20Manipulation/Dates-Number_13/script.js)
