# Observação 👁️

- [Leia o capítulo anterior](../Arrays-Número_12/Mapas.md)

---

## 🗓️ Métodos de Data JavaScript

JavaScript fornece diversos métodos para **manipular e recuperar informações de data e hora**. Esses métodos permitem definir e obter diferentes componentes de um objeto `Date`, como dia, mês, ano, horas, minutos, segundos e milissegundos.

---

### ❓ Quando eu uso a data?

JavaScript **não possui um tipo de dado específico para datas**. Porém, você pode usar o **objeto `Date`** e seus métodos para trabalhar com datas e horários em seus aplicativos.

> ℹ️ O objeto `Date` **não possui propriedades diretas**, apenas métodos para definir, recuperar e manipular valores.

---

## 🆕 `new Date()`

O `new Date()` em JavaScript é um **construtor** que cria um novo objeto de data baseado no **número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC** (chamado de **Época Unix**).

### ✅ Exemplos de uso de `new Date()`

#### ➤ Sem argumentos

Cria um objeto `Date` com a **data e hora atual**:

![imagem](https://github.com/user-attachments/assets/73e0aca8-1ed2-4ce8-b5fe-fcebd78461c5)

---

#### ➤ Com uma string de data

Aceita uma string como `"AAAA-MM-DD"`:

![imagem](https://github.com/user-attachments/assets/2a40bbec-bf74-4950-82b1-387948155971)

---

#### ➤ Com parâmetros numéricos

```javascript
new Date(ano, mês, dia, horas, minutos, segundos, milissegundos)
```

> 🗓️ **Atenção:** Os meses vão de `0` (janeiro) a `11` (dezembro).

![imagem](https://github.com/user-attachments/assets/beb8e140-2d20-4949-a1a3-1543eec8cae1)

---

#### ➤ Com timestamp (milissegundos)

Cria uma data baseada no número de **milissegundos desde 01/01/1970**:

![imagem](https://github.com/user-attachments/assets/52982617-8868-4834-a972-e06b645344e5)

---

## 🔧 Métodos para Definir Componentes

| Método               | Descrição                                   |
|----------------------|---------------------------------------------|
| `setDate(day)`       | Define o **dia do mês** (1–31)              |
| `setFullYear(y,m,d)` | Define o **ano**, **mês** e **dia**         |
| `setHours(hour)`     | Define a **hora** (0–23)                    |
| `setMilliseconds(ms)`| Define os **milissegundos** (0–999)         |
| `setMinutes(min)`    | Define os **minutos** (0–59)                |
| `setMonth(month)`    | Define o **mês** (0–11)                     |
| `setSeconds(sec)`    | Define os **segundos** (0–59)               |
| `setTime(ms)`        | Define o tempo em **milissegundos desde 1970** |

---

## 🔍 Métodos para Obter Componentes

| Método                  | Descrição                                       |
|-------------------------|-------------------------------------------------|
| `getFullYear()`         | Retorna o **ano completo** (ex: 2024)          |
| `getMonth()`            | Retorna o **mês** (0–11)                        |
| `getDate()`             | Retorna o **dia do mês** (1–31)                |
| `getDay()`              | Retorna o **dia da semana** (0–6, domingo = 0) |
| `getHours()`            | Retorna as **horas** (0–23)                    |
| `getMinutes()`          | Retorna os **minutos** (0–59)                  |
| `getSeconds()`          | Retorna os **segundos** (0–59)                 |
| `getMilliseconds()`     | Retorna os **milissegundos** (0–999)           |
| `getTime()`             | Retorna o **timestamp** em milissegundos       |

---

## 📆 Formatos de Data

| Formato               | Exemplo                         | Descrição                                       |
|------------------------|----------------------------------|-------------------------------------------------|
| **ISO**                | `"2015-03-25"`                   | Padrão internacional (`YYYY-MM-DD`)             |
| **Abreviada (EUA)**    | `"03/25/2015"`                   | Padrão americano                                |
| **Longa (Brasil)**     | `"25 de março de 2015"`          | Padrão regional                                 |

---

## 🧪 Métodos de Conversão de Data

| Método                  | Descrição                                                                 |
|-------------------------|---------------------------------------------------------------------------|
| `toISOString()`         | Retorna data no formato **ISO 8601** → `YYYY-MM-DDTHH:mm:ss.sssZ`         |
| `toUTCString()`         | Converte para **formato UTC** → `"Wed, 14 Jun 2017 07:00:00 GMT"`         |
| `toLocaleDateString()`  | Retorna **apenas a data** formatada conforme o idioma/região              |
| `toLocaleTimeString()`  | Retorna **apenas a hora** formatada conforme o idioma/região              |
| `toLocaleString()`      | Retorna a **data e hora** local formatada                                 |

---

> ✅ Esses métodos e formatos são essenciais para manipulação precisa e padronizada de datas e horas em aplicações JavaScript modernas.

---

## Próximo Capítulo 

- [Continua no próximo capítulo](../Objetos-Número_14/Manual.md)
