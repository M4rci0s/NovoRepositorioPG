
var btnDesc = document.querySelector("#btnDesc")
var boxDesc = document.querySelector("#boxDesc")
var btnEnviar = document.querySelector("#btnEnviar")
var txtDesc = document.querySelector("#txtDesc")

function funcDesc(){
    boxDesc.style.display = "block"
    btnEnviar.style.display = "block"
    btnDesc.style.display = "none"
}
// msg.style.display = "block";

function funcEnviar(){
    const valorDesc = boxDesc.value

    btnDesc.style.display = "block"
    btnEnviar.style.display = "none"
    boxDesc.style.display = "none"
    txtDesc.innerHTML = valorDesc
}