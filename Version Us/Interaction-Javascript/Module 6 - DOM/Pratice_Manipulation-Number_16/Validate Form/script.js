// Função para alternar entre telas
function switchForm(activeFormId) {
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => {
        form.style.display = 'none'; // Oculta todos os formulários
        form.classList.remove('active'); // Remove a classe .active
    });

    const activeForm = document.getElementById(activeFormId);
    if (activeForm) {
        activeForm.style.display = 'block'; // Exibe o formulário ativo
        activeForm.classList.add('active'); // Adiciona a classe .active
    }
}

// Função para exibir mensagens no popup
function showPopup(message, color = 'black') {
    const popup = document.querySelector('.popup');
    const popupMessage = document.querySelector('.pair');

    if (!popup || !popupMessage) return; // Garante que os elementos existam

    popupMessage.textContent = message; // Define a mensagem
    popupMessage.style.color = color; // Define a cor da mensagem
    popup.style.display = 'block'; // Mostra o popup
    popup.classList.add('show'); // Adiciona a classe .show

    // Esconde o popup após 3 segundos
    setTimeout(() => {
        popup.style.display = 'none'; // Oculta o popup
        popup.classList.remove('show'); // Remove a classe .show
    }, 3000);
}

// Eventos para alternar telas
document.getElementById('criarConta')?.addEventListener('click', () => {
    switchForm('cadastro');
});

document.getElementById('voltarLogin')?.addEventListener('click', () => {
    switchForm('login');
});

// Simulação de login
document.querySelector('form[name="login"]')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('login_email')?.value;
    const senha = document.getElementById('login_senha')?.value;

    if (!email || !senha) {
        showPopup('Por favor, preencha todos os campos.', 'red');
        return;
    }

    // Simulação de verificação de login
    showPopup('Login bem-sucedido!', 'green');
    // Aqui você pode adicionar lógica para redirecionar o usuário ou fazer uma chamada ao backend.
});

// Simulação de cadastro
document.querySelector('form[name="cadastro"]')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome')?.value;
    const email = document.getElementById('email')?.value;
    const senha = document.getElementById('senha')?.value;
    const confirmarSenha = document.getElementById('confirmar_senha')?.value;

    if (!nome || !email || !senha || !confirmarSenha) {
        showPopup('Por favor, preencha todos os campos.', 'red');
        return;
    }

    if (senha !== confirmarSenha) {
        showPopup('As senhas não coincidem!', 'red');
        return;
    }

    // Simulação de cadastro bem-sucedido
    showPopup('Cadastro realizado com sucesso!', 'green');
    switchForm('login'); // Redireciona para a tela de login após o cadastro
});