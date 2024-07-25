let ciudades = [];

while (true) {
    let ciudad = prompt("Ingresa el nombre de una ciudad (o cancela para terminar):");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

document.write("<p>Arreglo de ciudades: ");
for (let i = 0; i < ciudades.length; i++) {
    document.write(ciudades[i]);
    if (i < ciudades.length - 1) {
        document.write(", ");
    }
}
document.write("</p>");

document.write("<p>Longitud del arreglo: " + ciudades.length + "</p>");

if (ciudades.length > 0) {
    document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
}

if (ciudades.length > 2) {
    document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
}

if (ciudades.length > 0) {
    document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");
}

ciudades.push("París");

if (ciudades.length > 1) {
    document.write("<p>Ciudad en la segunda posición: " + ciudades[1] + "</p>");
}

if (ciudades.length > 1) {
    ciudades[1] = "Barcelona";
}

document.write("<h2>Arreglo de ciudades</h2>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.write("<li>Elemento: " + ciudades[i] + "</li>");
}
document.write("</ul>");
