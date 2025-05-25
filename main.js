const form = document.getElementById('Contatos');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroContato = document.getElementById('número-contato');

    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNúmeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNúmeroContato.value = '';
}); 