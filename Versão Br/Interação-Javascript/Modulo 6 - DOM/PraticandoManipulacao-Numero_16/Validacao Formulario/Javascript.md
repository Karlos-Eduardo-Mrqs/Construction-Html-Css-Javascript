# Observação 👁️

- [Leia a parte da construção primeiro](HtmlEoCss.md)

---

## Guia de Compreensão: JavaScript para o Formulário Dinâmico

Este documento explica a funcionalidade JavaScript do formulário dinâmico, que inclui alternar entre as telas de login e cadastro, validar as entradas do usuário e exibir mensagens por meio de um pop-up. O objetivo é fornecer uma compreensão clara de como o JavaScript interage com o HTML e o CSS para criar uma experiência fluida para o usuário.

---

### Visão Geral do JavaScript

O código JavaScript gerencia as seguintes funcionalidades principais:

- Alternar entre as telas de **Login** e **Cadastro**.
- Validar as entradas do usuário em ambos os formulários.
- Exibir mensagens de sucesso ou erro usando um pop-up.
- Simular envios de formulário (por exemplo, login e cadastro).

### Funções Principais

### Alternando entre Telas

A função `switchForm` alterna entre as telas de **Login** e **Registro** manipulando a classe `.active`.

```javascript
function switchForm(activeFormId) {
const forms = document.querySelectorAll('.form-content');
forms.forEach(form => {
form.style.display = 'none'; // Oculta todos os formulários
form.classList.remove('active'); // Remove a classe .active
});

const activeForm = document.getElementById(activeFormId);
if (activeForm) {
activeForm.style.display = 'block'; // Exibe o formulário ativo
activeForm.classList.add('active'); //Adiciona a classe .active
}
}
```

### Explicação

- Ocultando todos os formulários: Inicialmente, todos os formulários são ocultados usando display: none.

- Exibindo o formulário ativo: O formulário correspondente ao activeFormId é exibido usando display: block e marcado como ativo com a classe .active.

- Verificação de segurança: O if (activeForm) garante que apenas formulários válidos sejam manipulados.

#### Exibindo mensagens com o pop-up

A função showPopup exibe mensagens no pop-up com cores personalizáveis (por exemplo, vermelho para erros, verde para sucesso).

```javascript
function showPopup(message, color = 'black') {
const popup = document.querySelector('.popup');
const popupMessage = document.querySelector('.pair');

if (!popup || !popupMessage) return; // Garante a existência dos elementos

popupMessage.textContent = message; // Define o texto da mensagem
popupMessage.style.color = color; // Define a cor da mensagem
popup.style.display = 'block'; // Exibe o pop-up
popup.classList.add('show'); // Adiciona a classe .show para animações

// Oculta o pop-up após 3 segundos
setTimeout(() => {
popup.style.display = 'none'; // Oculta o pop-up
popup.classList.remove('show'); // Remove a classe .show
}, 3000);
}
```

### ExplicaçãoExibição

- Cores personalizáveis: O parâmetro color permite definir cores diferentes para mensagens de sucesso (verde) ou erro (vermelho).
- Tempo limite: O pop-up é ocultado automaticamente após 3 segundos usando setTimeout.
- Animação: A classe .show aciona transições suaves para a aparência do pop-up.

### Simulando Envios de Formulários

Envio do Formulário de Login. O formulário de login valida as entradas do usuário e simula um login bem-sucedido.

```javascript
document.querySelector('form[name="login"]').addEventListener('submit', function (e) {
e.preventDefault(); // Impede o envio padrão do formulário

const email = document.getElementById('login_email')?.value;
const password = document.getElementById('login_senha')?.value;

if (!email || !password) {
showPopup('Preencha todos os campos.', 'red'); // Mensagem de erro
return;
}

showPopup('Login bem-sucedido!', 'green'); // Mensagem de sucesso
});
```

### Explicação Envios

- Validação: Garante que todos os campos sejam preenchidos e que as senhas correspondam.
- Tratamento de Erros: Exibe mensagens de erro apropriadas para campos ausentes ou senhas incompatíveis.
- Mensagem de Sucesso: Simula um cadastro bem-sucedido com uma mensagem verde de sucesso e retorna para a tela de login.

#### Eventos de Clique de Botão

Os botões para alternar entre telas são controlados por ouvintes de eventos.

```javascript
document.getElementById('criarAccount')?.addEventListener('click', () => {
switchForm('registration'); // Alterna para a tela de cadastro
});

document.getElementById('returnLogin')?.addEventListener('click', () => {
switchForm('login'); // Alterna para a tela de login
});
```

### Explicação Eventos de Clique

- Troca de Telas: A função switchForm é chamada quando o usuário clica em "Criar Conta" ou "Voltar ao Login".

- Encadeamento Opcional (?.): Garante que o código não gere erros caso os elementos não existam.

## Conclusão

O código JavaScript fornece a interatividade e a lógica necessárias para o formulário dinâmico. Ele lida com:

1. Alternar entre telas.
2. Validar entradas do usuário.
3. Exibir mensagens de sucesso e erro por meio de um pop-up.
4. Simular envios de formulário.

Este guia deve ajudá-lo a entender como o JavaScript se integra ao HTML e ao CSS para criar uma interface funcional e amigável.
