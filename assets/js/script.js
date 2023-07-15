function verificarPangrama(frase) {
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    var fraseLowerCase = frase.toLowerCase();

    for (var i = 0; i < alfabeto.length; i++) {
        if (fraseLowerCase.indexOf(alfabeto[i]) === -1) {
            return false;
        }
    }
    return true;
}

function exibirResultado(ehPangrama) {
    var pangramaMsg = document.getElementById('pangramaMsg');
    var naoPangramaMsg = document.getElementById('naoPangramaMsg');

    if (ehPangrama) {
        pangramaMsg.classList.remove('dNone');
        naoPangramaMsg.classList.add('dNone');
    } else {
        pangramaMsg.classList.add('dNone');
        naoPangramaMsg.classList.remove('dNone');
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var frase = document.getElementById('frase').value;
    var ehPangrama = verificarPangrama(frase);
    exibirResultado(ehPangrama);
});

