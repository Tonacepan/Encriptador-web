//Función que encripta un texto con el cifrado César
function encriptarcesar(texto, desplazamiento) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (caracter.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);

            if (codigo >= 65 && codigo <= 90) {
                caracter = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                caracter = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }

        resultado += caracter;
    }

    return resultado;
}

// Función que desencripta un texto en el cifrado César
function desencriptarcesar(texto, desplazamiento) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (caracter.match(/[a-z]/i)) {
            let codigo = texto.charCodeAt(i);

            if (codigo >= 65 && codigo <= 90) {
                caracter = String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                caracter = String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
            }
        }

        resultado += caracter;
    }

    return resultado;
}