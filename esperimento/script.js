document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const contactsTableBody = document.querySelector('#contactsTable tbody');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados dos campos do formulário
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && phone && email) {
            addContact(name, phone, email);
            clearForm();
            sortContacts();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function addContact(name, phone, email) {
        // Cria uma nova linha para a tabela
        const newRow = document.createElement('tr');

        // Cria e adiciona as células na nova linha
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        `;

        contactsTableBody.appendChild(newRow);
    }

    function clearForm() {
        // Limpa os campos do formulário
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
    }

    function sortContacts() {
        const rows = Array.from(contactsTableBody.querySelectorAll('tr'));

        // Ordena as linhas pela coluna "Nome"
        rows.sort((a, b) => {
            const nameA = a.querySelector('td').textContent.toLowerCase();
            const nameB = b.querySelector('td').textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Reinsere as linhas na tabela em ordem
        rows.forEach(row => contactsTableBody.appendChild(row));
    }
});
