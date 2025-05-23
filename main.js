const form = document.getElementById('Contatos');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroContato = document.getElementById('número-contato');

    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNúmeroContato.value}</td>`;
    linha += `</tr>`;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

    alert(`Contato: ${inputNomeContato.value} - Número: ${inputNúmeroContato.value}`)
}); 