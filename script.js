//Seletores
const input = document.querySelector("#input-texto");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");

//Esconde a div-aparece da tela

document.getElementById("div-aparece").style.display = 'none';
inputverificar();

//Encriptando o texto(id)

document.getElementById("btn-criptografar").onclick = (e) => {
    e.preventDefault();
    const textEncriptado = encriptar(input.value.toLowerCase());
    mensagem.value = textEncriptado;
    input.value = "";
    aparece();
}

//Desencriptando o texto(id)

document.getElementById("btn-descriptografar").onclick = (e) => {
    e.preventDefault();
    const textoDecriptado = decodificar(input.value);
    mensagem.value = textoDecriptado;
    input.value = "";
    aparece();
}

//Copiar texto

document.getElementById("btn-copiar").onclick = (e) => {
    e.preventDefault();
    const mensagem = document.querySelector("#mensagem");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = "";
}

//Encripta o texto
function encriptar(stringEncriptada){
    let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecriptada = stringDecriptada.toLowerCase();
    for(let i=0; i<matrixCode.length; i++){
        if(stringDecriptada.includes(matrixCode[i][1])){
            stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1],matrixCode[i][0]);
        }
    }
    return stringDecriptada;
}