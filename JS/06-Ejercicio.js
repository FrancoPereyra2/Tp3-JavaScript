const ladoA = parseInt(prompt('Ingresa un lado de un rectangulo:'));
const ladoB = parseInt(prompt('Ingresa otro lado de un rectangulo:'));
let perimetro = 2 * (ladoA + ladoB);
function mostrarPerimetro(perimetro) {
    document.write(`El perimetro ingresado es ${perimetro}`)
}
mostrarPerimetro(perimetro)