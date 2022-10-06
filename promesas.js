const paises = ['mexico', 'holanda', 'argentina']

function mostrarPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 2000)
}

/*function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}
mostrarPaises();
nuevoPais('Alemania', mostrarPaises);*/

function IniciarCallbackHell() {
    setTimeout(() => {
        //agregar un nuevo pais
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Colombia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Bolivia', mostrarPaises)
            }, 3000)
        }, 3000)
    }, 3000)
}
IniciarCallbackHell()