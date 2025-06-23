function changePhoto(src) {
    document.getElementById('mainPhoto').src = src;
}

function validateCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('blur', () => {
        if (!validateCPF(cpfInput.value)) {
            alert('CPF inválido. Use o formato ddd.ddd.ddd-dd');
        }
    });

    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        if (!validateEmail(emailInput.value)) {
            alert('Email inválido.');
        }
    });

    document.getElementById('addUC').addEventListener('click', () => {
        const newUC = prompt("Digite o nome da nova UC:");
        if (newUC) {
            const li = document.createElement('li');
            li.textContent = newUC;
            document.getElementById('ucList').appendChild(li);
        }
    });

    document.getElementById('addDescription').addEventListener('click', () => {
        const desc = document.getElementById('newDescription').value;
        if (desc.trim()) {
            const p = document.createElement('p');
            p.textContent = desc;
            document.getElementById('personalProfile').appendChild(p);
            document.getElementById('newDescription').value = '';
        }
    });
});
