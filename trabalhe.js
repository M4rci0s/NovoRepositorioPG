(function(){ //funcao que gera os valores de cada letra do captcha
    const fonts = ["cursive", "sans-serif", "sans", "monospace"];
    let captchaValue = ""
    function gerarCaptcha(){
        let value = btoa(Math.random()*10000000000);
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
            alert("cadastro Concluido")
        }else{
            alert("captcha invalido")
        }
    });
})();