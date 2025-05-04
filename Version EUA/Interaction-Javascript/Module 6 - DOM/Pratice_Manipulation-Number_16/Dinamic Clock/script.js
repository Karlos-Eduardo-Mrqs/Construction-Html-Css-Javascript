document.addEventListener("DOMContentLoaded", () => {
    const data = new Date();
    const body = document.body;
    
    // Selecionando elementos
    const fundo = document.querySelector('.fundo');
    const imagemRelogio = document.querySelector('.img-icone');
    const horaElement = document.querySelector('.hora');
    const dataCompleta = document.querySelector('.data-completa');

    // Função para formatar números com dois dígitos
    const formatarNumero = (numero) => (numero < 10 ? `0${numero}` : numero);

    // Definir a data completa no formato brasileiro sem o dia da semana
    const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(data);

    dataCompleta.textContent = dataFormatada;
    // Função para atualizar o horário
    const atualizarRelogio = () => {
        const dataAtualizada = new Date();
        const hora = formatarNumero(dataAtualizada.getHours());
        const minuto = formatarNumero(dataAtualizada.getMinutes());
        const segundo = formatarNumero(dataAtualizada.getSeconds());
        horaElement.textContent = `${hora}:${minuto}:${segundo}`;
    };

    // Determinar o período do dia e ajustar a classe e imagem de fundo
    const horaAtual = data.getHours();
    if (horaAtual >= 6 && horaAtual < 12) {
        fundo.classList.add('morning');
        body.style.background = '#fffce9';
        imagemRelogio.src = 'images/Manha.png'; // Imagem para o relógio de manhã
        imagemRelogio.alt = 'Imagem do período da manhã';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        fundo.classList.add('afternoon');
        body.style.background = '#eac466';
        imagemRelogio.src = 'images/Tarde.png'; // Imagem para o relógio da tarde
        imagemRelogio.alt = 'Imagem do período da tarde';
    } else if (horaAtual >= 18 && horaAtual < 21) {
        fundo.classList.add('evening');
        body.style.background = '#6a4c93';
        imagemRelogio.src = 'images/Anoitecendo.png'; // Imagem para o entardecer
        imagemRelogio.alt = 'Imagem do período do entardecer';
    } else {
        fundo.classList.add('night');
        body.style.background = '#14477a';
        imagemRelogio.src = 'images/Noite.png'; // Imagem para o relógio da noite
        imagemRelogio.alt = 'Imagem do período da noite';
    }
    // Atualizar o relógio a cada segundo
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
});