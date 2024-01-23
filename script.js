// Antonio Macena

//TODO - import do modulo está freezando o script
/*
import  { _chave }  from './chave.js';
*/

/* modificada para atender os requisitos de criptografia do desafio.
let _chaveOld = [
    { key: '0', value: 'A' },
    { key: '1', value: 'C' },
    { key: '2', value: 'E' },
    { key: '3', value: 'f' },
    { key: '4', value: 'R' },
    { key: '5', value: 'g' },
    { key: '6', value: 'k' },
    { key: '7', value: 'l' },
    { key: '8', value: 'i' },
    { key: '9', value: 'L' },
    { key: 'A', value: 'r' },
    { key: 'B', value: 'o' },
    { key: 'C', value: 'M' },
    { key: 'D', value: 'b' },
    { key: 'E', value: 'h' },
    { key: 'F', value: 'D' },
    { key: 'G', value: 'p' },
    { key: 'H', value: 'q' },
    { key: 'I', value: 'v' },
    { key: 'J', value: '1' },
    { key: 'K', value: 'S' },
    { key: 'L', value: 'O' },
    { key: 'M', value: 't' },
    { key: 'N', value: 'j' },
    { key: 'O', value: '7' },
    { key: 'P', value: 'a' },
    { key: 'Q', value: '4' },
    { key: 'R', value: 'F' },
    { key: 'S', value: 'U' },
    { key: 'T', value: '5' },
    { key: 'U', value: 'I' },
    { key: 'V', value: 'z' },
    { key: 'W', value: 'u' },
    { key: 'X', value: '?' },
    { key: 'Y', value: 'n' },
    { key: 'Z', value: '2' },
    { key: 'a', value: 'Ç' },
    { key: 'b', value: 'V' },
    { key: 'c', value: '0' },
    { key: 'd', value: 'Q' },
    { key: 'e', value: '9' },
    { key: 'f', value: 'z' },
    { key: 'g', value: 'H' },
    { key: 'h', value: '6' },
    { key: 'i', value: 'x' },
    { key: 'j', value: 'w' },
    { key: 'k', value: 'ç' },
    { key: 'l', value: 'e' },
    { key: 'm', value: 'J' },
    { key: 'n', value: '3' },
    { key: 'o', value: 'N' },
    { key: 'p', value: 'W' },
    { key: 'q', value: 'd' },
    { key: 'r', value: 'K' },
    { key: 's', value: 'X' },
    { key: 't', value: 'c' },
    { key: 'u', value: 'y' },
    { key: 'v', value: 's' },
    { key: 'w', value: 'B' },
    { key: 'x', value: 'm' },
    { key: 'y', value: 'P' },
    { key: 'z', value: '8' },
    { key: 'ç', value: 'T' },
    { key: 'Ç', value: 'Y' },
    { key: '?', value: 'G' }

];
*/

let _chave = [    //chave dentro dos parametros
    { key: 'e', value: "enter" },
    { key: 'i', value: "imes" },
    { key: 'a', value: "ai" },
    { key: 'o', value: 'ober' },
    { key: 'u', value: "ufat" },

];
/*  modificada para atender os requisitos de criptografia do desafio.
function cifrarOld(strEntrada) {
    let strSaida ="";
    
    for (let c of strEntrada){
        let foradaChave = false;
        _chave.forEach( x => {
            if(c==x.key){
                strSaida = strSaida + x.value;
                foradaChave = true;
            }
        });  
        if(!foradaChave) {
            strSaida = strSaida + c;
        }
    }
    return strSaida;

}
*/

function cifrar(strEntrada) { //dentro dos parametros
    let strSaida ="";
    
    for (let c of strEntrada){
        let foradaChave = false;
        _chave.forEach( x => {
            if(c==x.key){
                strSaida = strSaida + x.value;
                foradaChave = true;
            }
        });  
        if(!foradaChave) {
            strSaida = strSaida + c;
        }
    }
    return strSaida;

}

/*modificada para atender os requisitos de criptografia do desafio.
function deCifrar_Old(strEntrada) {
    let strSaida ="";
    for (let c of strEntrada){
        let foradaChave = false;
        _chave.forEach( x => {
            if(c==x.value){
                strSaida = strSaida + x.key;
                foradaChave = true;
            }
        });
        if(!foradaChave) {
            strSaida = strSaida + c;
        }
    }
    return strSaida;

}
*/

function deCifrar(strEntrada) { //dentro dos parametros
   
    let strSaidaDecifrado = strEntrada;
    for (let c of _chave) {
        strSaidaDecifrado = strSaidaDecifrado.replaceAll(c.value, c.key);
    }
    return strSaidaDecifrado;

}

function codificar() {
    let inputText = document.getElementById("inputBox").value;
    if (inputText.trim() === "") {
        alert("Nenhum Texto a ser Codificado, Digite seu texto!");
        return;
    }
    let resultBox = document.getElementById("resultBox");
    resultBox.textContent = cifrar(inputText.trim());
}

function deCodificar() {
    let inputText = document.getElementById("inputBox").value;
    if (inputText.trim() === "") {
        alert("Nenhum Texto a ser Decodificado, Digite seu texto!");
        return;
    }
    let resultBox = document.getElementById("resultBox");
    resultBox.textContent = deCifrar(inputText.trim());
}

function copiar() {
    let resultBox = document.getElementById("resultBox");
    let copiaTexto = resultBox.textContent;
    if (copiaTexto.trim() === "") {
        alert("Não há texto a ser copiado!");
        return;
    }
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = copiaTexto;

    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("Erro ao copiar texto: ", err);
    } finally {
        document.body.removeChild(tempTextarea);
    }

}

