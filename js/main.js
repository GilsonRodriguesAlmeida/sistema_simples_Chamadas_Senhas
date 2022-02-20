const valorSenha = document.querySelector("#senha");
let senhaNormal = localStorage.getItem('senhaNormal');
let senhaPreferencial = localStorage.getItem('senhaPreferencial');
let ultimaSenha = localStorage.getItem('ultimaSenha');
let audio = new Audio('audio/senha.mp3');

//checar se é primeiro acesso ao localStorage
if (!senhaNormal) {
    senhaNormal = 0;
}
if (!senhaPreferencial) {
    senhaPreferencial = 0;
}
if (!ultimaSenha) {
    ultimaSenha = 'N';
}

mostrarSenha();

//Tela html
window.addEventListener('keydown', function(e) {
    if(e.key == 'n' || e.key == 'N') {
        senhaNormal ++;
        ultimaSenha = "N";
        audio.play();
    } else if (e.key == 'p' || e.key == 'P') {
        senhaPreferencial ++;
        ultimaSenha = "P";
        audio.play();
    } else if (e.key == 'r' || e.key == 'R') {
        ultimaSenha = "N";
        senhaNormal = 0;
        senhaPreferencial = 0;
    }

    localStorage.setItem('senhaNormal', senhaNormal);
    localStorage.setItem('senhaPreferencial', senhaPreferencial);
    localStorage.setItem('ultimaSenha', ultimaSenha);

    mostrarSenha();

});

//Mostra os dados na tela
function mostrarSenha() {
    if (ultimaSenha == "N") {
        valorSenha.innerHTML = "N" + parseInt(senhaNormal).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    } else {
        valorSenha.innerHTML = "P" + parseInt(senhaPreferencial).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }
}