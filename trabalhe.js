(function(){ //funcao que gera os valores de cada letra do captcha
    const fonts = ["cursive", "sans-serif", "sans", "monospace"];
    let captchaValue = ""
    function gerarCaptcha(){
        let value = btoa(Math.random()*10000000000);
        //Corta a string para ter entre 5 e 10 caracteres.
        value = value.substring(0,5+Math.random()*5)
        captchaValue = value;
    }
    //funcao que seta as caracteristicas do captcha
    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotacao = 20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span 
            style="transform:rotate(${rotacao}deg);
            font-family:${fonts[font]}"
            >${char}</span>`;

        }).join("");
        document.querySelector(".captcha .preview").innerHTML = html;
    }

    //funcao que da inicio ao captcha e chama as demais funcoes
    function inciarCaptcha(){
        document.querySelector(".captcha .captcha-refresh").addEventListener
        ("click", function(){
            gerarCaptcha();
            setCaptcha();
        });
        gerarCaptcha();
            setCaptcha();
    }
    inciarCaptcha();

    document.querySelector("#btncadastro").addEventListener("click", function(){
        let inputCaptchaValue = document.querySelector(".captcha-form input").value;
        if(inputCaptchaValue === captchaValue){
            alert("cadastro Concluido");
        }else{
            alert("captcha invalido");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function() {
        let value = cpfInput.value;

        // Remove todos os caracteres que não são dígitos
        value = value.replace(/\D/g, '');

        // Limita o valor a 11 caracteres
        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        // Adiciona a formatação de pontos e hífen
        if (value.length > 6) {
            value = value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
        } else if (value.length > 3) {
            value = value.slice(0, 3) + '.' + value.slice(3, 6) + (value.length > 6 ? '.' + value.slice(6) : '');
        } else if (value.length > 3) {
            value = value.slice(0, 3) + '.' + value.slice(3, 6);
        }

        // Atualiza o valor do input com a formatação
        cpfInput.value = value;
    });
});