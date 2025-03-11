// Função para exibir ou esconder campos de entrada conforme os toggles
function atualizarCampos() {
    document.getElementById('quantidadeInput').style.display = document.getElementById('toggleQuantidade').checked ? 'block' : 'none';
    document.getElementById('nomesInput').style.display = document.getElementById('toggleNomes').checked ? 'block' : 'none';
}

// Função para sortear conforme a opção selecionada
function sortear() {
    let resultado = '';

    if (document.getElementById('toggleQuantidade').checked) {
        const quantidade = parseInt(document.querySelector('.input-quantidade').value);
        const numeros = document.querySelector('.input-numeros').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        
        if (isNaN(quantidade) || quantidade <= 0 || numeros.length < quantidade) {
            exibirResultado('Por favor, insira uma quantidade válida e números suficientes.');
            return;
        }
        resultado = numeros.sort(() => Math.random() - 0.5).slice(0, quantidade).join(', ');
    } else if (document.getElementById('toggleNomes').checked) {
        const quantidadeNomes = parseInt(document.querySelector('.input-quantidade-nomes').value);
        const nomes = document.querySelector('.input-nomes').value.split(',').map(n => n.trim()).filter(n => n);
        
        if (isNaN(quantidadeNomes) || quantidadeNomes <= 0 || nomes.length < quantidadeNomes) {
            exibirResultado('Por favor, insira uma quantidade válida e nomes suficientes.');
            return;
        }
        resultado = nomes.sort(() => Math.random() - 0.5).slice(0, quantidadeNomes).join(', ');
    } else {
        const min = parseInt(document.querySelector('.input-min').value);
        const max = parseInt(document.querySelector('.input-max').value);
        
        if (isNaN(min) || isNaN(max) || min >= max) {
            exibirResultado('Por favor, insira valores válidos.');
            return;
        }
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    exibirResultado(`Resultado: ${resultado}`);
    limparCampos();
}

// Função para exibir o resultado
function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = mensagem;
    resultadoDiv.style.display = 'block';
}

// Função para limpar os campos após o sorteio
function limparCampos() {
    document.querySelector('.input-min').value = '';
    document.querySelector('.input-max').value = '';
    document.querySelector('.input-quantidade').value = '';
    document.querySelector('.input-numeros').value = '';
    document.querySelector('.input-quantidade-nomes').value = '';
    document.querySelector('.input-nomes').value = '';
}