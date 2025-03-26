# Guia para Compreensão: JavaScript para o Formulário Dinâmico

Este documento explica a funcionalidade do JavaScript no formulário dinâmico, que inclui alternar entre as telas de login e cadastro, validar entradas do usuário e exibir mensagens por meio de um popup. O objetivo é oferecer uma compreensão clara de como o JavaScript interage com o HTML e CSS para criar uma experiência de usuário fluida.

---

## **1. Visão Geral do JavaScript**
O código JavaScript gerencia as seguintes funcionalidades principais:

- Alternar entre as telas de **Login** e **Cadastro**.
- Validar entradas do usuário em ambos os formulários.
- Exibir mensagens de sucesso ou erro usando um popup.
- Simular envios de formulário (ex.: login e cadastro).

---

## **2. Funções Principais**

### **2.1. Alternando Entre Telas**

A função `switchForm` alterna entre as telas de **Login** e **Cadastro** manipulando a classe `.active`.

```javascript
function switchForm(activeFormId) {
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => {
        form.style.display = 'none'; // Esconde todos os formulários
        form.classList.remove('active'); // Remove a classe .active
    });

    const activeForm = document.getElementById(activeFormId);
    if (activeForm) {
        activeForm.style.display = 'block'; // Exibe o formulário ativo
        activeForm.classList.add('active'); // Adiciona a classe .active
    }
}
```
### Explicação

- **Esconder Todos os Formulários**: Inicialmente, todos os formulários são ocultados usando `display: none`.
- **Exibir o Formulário Ativo**: O formulário correspondente ao `activeFormId` é exibido usando `display: block` e marcado como ativo com a classe `.active`.
- **Verificação de Segurança**: O `if (activeForm)` garante que apenas formulários válidos sejam manipulados.

### **2.2. Exibindo Mensagens com o Popup**
A função `showPopup` exibe mensagens no popup com cores personalizadas (ex.: vermelho para erros, verde para sucessos).

```javascript
function showPopup(message, color = 'black') {
    const popup = document.querySelector('.popup');
    const popupMessage = document.querySelector('.pair');

    if (!popup || !popupMessage) return; // Garante que os elementos existam

    popupMessage.textContent = message; // Define o texto da mensagem
    popupMessage.style.color = color; // Define a cor da mensagem
    popup.style.display = 'block'; // Exibe o popup
    popup.classList.add('show'); // Adiciona a classe .show para animações

    // Oculta o popup após 3 segundos
    setTimeout(() => {
        popup.style.display = 'none'; // Oculta o popup
        popup.classList.remove('show'); // Remove a classe .show
    }, 3000);
}
```

### Explicação
- **Cores Personalizadas**: O parâmetro `color` permite definir diferentes cores para mensagens de sucesso (verde) ou erro (vermelho).
- **Timeout**: O popup desaparece automaticamente após 3 segundos usando `setTimeout`.
- **Animação**: A classe `.show` aciona transições suaves para a aparição do popup.

### **2.3. Simulando Envios de Formulários**
**Envio do Formulário de Login**: O formulário de login valida as entradas do usuário e simula um login bem-sucedido.

```javascript
  document.querySelector('form[name="login"]').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('login_email')?.value;
    const senha = document.getElementById('login_senha')?.value;

    if (!email || !senha) {
        showPopup('Preencha todos os campos.', 'red'); // Mensagem de erro
        return;
    }

    showPopup('Login realizado com sucesso!', 'green'); // Mensagem de sucesso
});
```

### Explicação
- **Validação**: Garante que todos os campos estejam preenchidos.
- **Tratamento de Erros**: Exibe mensagens de erro apropriadas para campos ausentes.
- **Mensagem de Sucesso**: Simula um login bem-sucedido com uma mensagem verde e retorna à tela de login.

### **2.4. Eventos de Clique nos Botões**
Os botões para alternar entre as telas são controlados usando `event listeners`.
```javascript
document.getElementById('criarConta')?.addEventListener('click', () => {
    switchForm('cadastro'); // Alterna para a tela de cadastro
});

document.getElementById('voltarLogin')?.addEventListener('click', () => {
    switchForm('login'); // Alterna para a tela de login
});
```

### Explicação
- **Alternando Telas**: A função `switchForm` é chamada quando o usuário clica em "Criar Conta" ou "Voltar ao Login".
- **Optional Chaining (`?.`)**: Garante que o código não lançará erros se os elementos não existirem.

---

## **3. Conclusão**
O código JavaScript fornece a interatividade e a lógica necessária para o formulário dinâmico. Ele gerencia:

1. Alternar entre telas.
2. Validar entradas do usuário.
3. Exibir mensagens de sucesso e erro via popup.
4. Simular envios de formulário.

Este guia deve ajudar a compreender como o JavaScript se integra ao HTML e CSS para criar uma interface funcional e amigável ao usuário.