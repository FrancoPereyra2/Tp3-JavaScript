function informacionTexto(cadena){
    if(cadena === cadena.toLowerCase()){
        document.write(`La frase "${cadena}" esta en minusculas <br>`);
    }else if(cadena === cadena.toUpperCase()){
        document.write(`La frase "${cadena}" esta en mayusculas <br>`);
    }else{
        document.write(`La frase "${cadena}" esta en mayusculas y minusculas <br>`);
    }
}

informacionTexto("Hola mundo");
informacionTexto("adios mundo");
informacionTexto("BUENAS TARDES");