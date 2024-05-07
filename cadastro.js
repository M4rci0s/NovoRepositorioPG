var btncadastre = document.querySelector("#btncadastre");

btncadastre.addEventListener("click", function () {
    location.href = "cadastro.html";
});

var senha = document.getElementById("senha");
var msg = document.getElementById("mensagem");
var msgreal = document.getElementById("mensagemreal");

senha.addEventListener('input', () => {
    if (senha.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }
    if (senha.value.length < 4) {
        msgreal.innerHTML = "fraca";
    }
    else if (senha.value.length >= 4 && senha.value.length < 8) {
        msgreal.innerHTML = "média";
    }
    else if (senha.value.length >= 8) {
        msgreal.innerHTML = "forte";
    }
});

function cadastro() {
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin@admin.com" && senha == "admin" && senha.value.length >= 4) {
        location.href = "novapag.html";
    }
    if (senha.value.length < 4) {
        alert('Sua senha é fraca, digite uma com mais de 4 caracteres!');
    }
    else if (login == "" && senha == "") {
        alert('Os campos devem ser preenchidos');
    }
}