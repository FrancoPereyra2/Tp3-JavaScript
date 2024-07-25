function numero(){
    let numero = prompt('Ingrese un numero');
    let resultado = '';
    if(resultado = (numero % 2) == 0){
        document.write(`El numero ${numero} es par`)
    }else{
        document.write(`El numero ${numero} es impar`)
    }
}
numero()