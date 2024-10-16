// Função para trocar a tela de boas-vindas para o formulário
function goToForm() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("formScreen").style.display = "block";
}

// Função para avaliar os sintomas e definir a cor da pulseira
function evaluatePatient() {
    const symptoms = document.querySelectorAll('input[name="symptoms"]:checked');
    let severity = 0;

    // Soma os valores dos sintomas para calcular a gravidade
    symptoms.forEach(symptom => {
        severity += parseInt(symptom.value);
    });

    let cor = "";
    let descricao = "";
    let imagemPulseira = "";

    // Determina a cor da pulseira com base na gravidade dos sintomas
    if (severity >= 5) {
        cor = "vermelho";
        descricao = "Vemelho(Emergência)";
        imagemPulseira = "images/pulseira vermelha.webp";  // Caminho da imagem da pulseira vermelha
    } else if (severity >= 3) {
        cor = "laranja";
        descricao = "Laranja(Muito urgente)";
        imagemPulseira = "images/pulseira laranja.jpg";  // Caminho da imagem da pulseira laranja
    } else if (severity >= 2) {
        cor = "amarelo";
        descricao = "Amarelo(Urgente)";
        imagemPulseira = "images/pulseira amarela.jpg";  // Caminho da imagem da pulseira amarela
    } else if (severity === 1) {
        cor = "verde";
        descricao = "Verde(Pouco urgente)";
        imagemPulseira = "images/pulseira verde.jpg";  // Caminho da imagem da pulseira verde
    } else {
        cor = "azul";
        descricao = "Azul(Não urgente)";
        imagemPulseira = "images/pulseira azul.jpg";  // Caminho da imagem da pulseira azul
    }

    // Exibe o modal com a cor e a imagem da pulseira
    document.getElementById("corPulseira").innerText = descricao;
    const pulseiraVisual = document.getElementById("pulseiraVisual");
    pulseiraVisual.style.backgroundColor = cor;

    // Adiciona a imagem correspondente da pulseira no modal
    pulseiraVisual.innerHTML = `<img src="${imagemPulseira}" alt="Pulseira ${cor}" style="width: 100px; height: 50px;">`;

    openModal();
}

// Função para abrir o modal
function openModal() {
    const modal = document.getElementById("modalResultado");
    modal.style.display = "block";

    // Função para fechar o modal quando o botão de fechar for clicado
    document.getElementById("closeModal").onclick = function () {
        modal.style.display = "none";
    };

    // Função para fechar o modal quando clicar fora da área do modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}
