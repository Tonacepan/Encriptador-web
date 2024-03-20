//variables principales 
let texto = "";
let desplazamiento = 0;
let resultado = "";
let textoModificado = "";
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
//Función para validar que el texto sea solo letras minúsculas
function validarMinusculas(event) {
    texto = event.target.value;
    // Remplaza cualquier carácter que no sea una letra minúscula por una cadena vacía
    textoModificado = texto.replace(/[^a-z]/g, '');
    event.target.value = textoModificado;
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

//Función para encriptar el texto
function btnencrypt() {
    texto = document.getElementById('entrada').value;
    desplazamiento = parseInt(document.getElementById('clave').value);
    resultado = encriptarcesar(texto, desplazamiento);
    
    document.getElementById('salida').removeAttribute('onlyread', 'false');
    console.log(resultado);
    document.getElementById('salida').textContent = resultado;
    document.getElementById('salida').setAttribute('onlyread', 'true');
}

//Función para desencriptar el texto
function btndecrypt() {
    texto = document.getElementById('entrada').value;
    desplazamiento = parseInt(document.getElementById('clave').value);
    resultado = desencriptarcesar(texto, desplazamiento);
    document.getElementById('salida').removeAttribute('onlyread', 'false');
    console.log(resultado);
    document.getElementById('salida').textContent = resultado;
    document.getElementById('salida').setAttribute('onlyread', 'true');
}

//Función para limpiar el texto
function btnclear() {
    document.getElementById('entrada').value = "";
    document.getElementById('clave').value = "";
    document.getElementById('salida').removeAttribute('onlyread', 'false');
    document.getElementById('salida').textContent = "";
    document.getElementById('salida').setAttribute('onlyread', 'true');
}

//Función para copiar el texto
function btncopy() {
    let copyText = document.getElementById("salida");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
}