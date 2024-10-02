function goToForm() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('formScreen').style.display = 'block';
}

function evaluatePatient() {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    let totalPriority = 0;

    checkboxes.forEach((checkbox) => {
        totalPriority += parseInt(checkbox.value);
    });

    let priorityText;
    let priorityColor;

    if (totalPriority <= 1) {
        priorityText = "Verde (Atendimento pode aguardar)";
        priorityColor = "green";
    } else if (totalPriority <= 3) {
        priorityText = "Amarelo (Atendimento em breve)";
        priorityColor = "yellow";
    } else if (totalPriority <= 5) {
        priorityText = "Laranja (Atendimento urgente)";
        priorityColor = "orange";
    } else {
        priorityText = "Vermelho (Atendimento imediato)";
        priorityColor = "red";
    }

    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `A cor da pulseira é <span style="color:${priorityColor}">${priorityText}</span>`;
    
    const modal = document.getElementById('resultModal');
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = "none";
}
