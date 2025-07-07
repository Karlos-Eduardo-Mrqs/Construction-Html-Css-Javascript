# Observação 👁️

- 📌 [Leia o Número_01 antes de continuar](../Conceitos_Introdutorios-%20Número_01/Conceitos_Formatação.md)

---

## 🎯 Atribuindo CSS ao HTML

Usamos o CSS para aplicar estilo e design às páginas web. Mas como conectamos o CSS ao HTML?

### 📎 Formas de Atribuição

#### 1.🔹 Tag `<style>`  

Podemos usar a tag `<style>` no `<head>` ou no `<body>` do documento HTML:

```html
   <style>
     p { color: red; }
   </style>
```

#### 2.🔹 CSS Inline

Como o nome sugere, o CSS é aplicado diretamente na linha da tag HTML, usando o atributo style:

```html
<p style="color: brown;">Parágrafo 1</p>
```

#### 3. 🔹 Arquivo Externo (Importação ou Link)

Você também pode manter o CSS separado do HTML, importando um arquivo .css externo.

- Via importação:

```html
<style>
  @import url("styles.css");
</style>
```

Via link (forma mais recomendada):

```html
<link rel="stylesheet" href="styles.css">
```

---

## 🧭 Hierarquia de Prioridade (de maior para menor)

1. CSS Inline
2. CSS Externo (link ou @import)
3. Tag ``<style>`` no documento

> 🎯 Dica: prefira CSS externo para manter seu código mais limpo, organizado e reutilizável.  

## 📎 Continuação

- [Continua no Módulo 2](../../Módulo%202%20-%20(Aparência)/Layouts-Número_03/Layout.md)
