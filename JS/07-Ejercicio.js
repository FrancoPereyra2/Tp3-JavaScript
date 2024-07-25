const numero = parseInt(prompt('Ingresa un numero para multiplicar:'))

function tablaMultiplicar(numero) {
    for(let i = 1; i <= 10; i++){
        document.write(`${numero} x ${i} = ${numero * i} <br>`)
    }
}

tablaMultiplicar(numero)