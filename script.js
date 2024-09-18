function evaluatePatient() {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const dob = document.getElementById('dob').value;
    const allergies = document.getElementById('allergies').value;
    const history = document.getElementById('history').value;
    
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    let totalPriority = 0;

    checkboxes.forEach((checkbox) => {
        totalPriority += parseInt(checkbox.value);
    });

    const resultDiv = document.getElementById('result');
    
    let priorityColor;
    let priorityText;

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

    resultDiv.innerHTML = `
        <h3>Resultado da Avaliação</h3>
        <p><strong>Nome Completo:</strong> ${name}</p>
        <p><strong>Peso:</strong> ${weight} kg</p>
        <p><strong>Data de Nascimento:</strong> ${dob}</p>
        <p><strong>Alergias:</strong> ${allergies}</p>
        <p><strong>Histórico familiar:</strong> ${history}</p>
        <p><strong>Resultado (cor):</strong> <span style="color:${priorityColor}">${priorityText}</span></p>
    `;
}
