const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write(`<ul>`);
for(let lista = 0; lista < meses.length; lista++){
    document.write(`<li>${meses[lista]}</li>`);
}
document.write(`</ul>`);