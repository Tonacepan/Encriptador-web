//variables principales 
let texto = "";
let desplazamiento = 0;
let resultado = "";
//Función para asignar el texto de salida
function asignartexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.textContent = texto;
    return;
}
//Función para encriptar el texto
function encriptarcesar(texto, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 + desplazamiento) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 + desplazamiento) % 26 + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}

//Función para desencriptar el texto
function desencriptarcesar(texto, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 - desplazamiento + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}

function btnencrypt() {
    texto = document.getElementById('entrada').value;
    desplazamiento = parseInt(document.getElementById('clave').value);
    resultado = encriptarcesar(texto, desplazamiento);
    document.getElementById('resultado').removeAttribute('onlyread', 'false');
    console.log(resultado);
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('resultado').setAttribute('onlyread', 'true');
}

function btndecrypt() {
    texto = document.getElementById('entrada').value;
    desplazamiento = parseInt(document.getElementById('clave').value);
    resultado = desencriptarcesar(texto, desplazamiento);
    document.getElementById('resultado').removeAttribute('onlyread', 'false');
    console.log(resultado);
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('resultado').setAttribute('onlyread', 'true');
}