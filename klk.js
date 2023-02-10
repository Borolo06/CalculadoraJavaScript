let n1 = document.querySelector('.inputNumeroUno');
let n2 = document.querySelector('.inputNumeroDos');
let resultado = document.querySelector('.inputResultado');
//botones
let botonSuma = document.querySelector('.botonSuma');
let botonResta = document.querySelector('.botonResta');
let botonMultiplicacion = document.querySelector('.botonMultiplicacion');
let botonDivision = document.querySelector('.botonDivision');
let botonRaizCuadrada = document.querySelector('.botonRaizCuadrada');
let botonRaizCubica = document.querySelector('.botonRaizCubica');

botonSuma.addEventListener("click", () => {
    resultado.value = parseFloat((n1.value)) + parseFloat((n2.value));
});
botonResta.addEventListener("click", () => {
    resultado.value = parseFloat((n1.value)) - parseFloat((n2.value));
});
botonMultiplicacion.addEventListener("click", () => {
    resultado.value = parseFloat((n1.value)) * parseFloat((n2.value));
});
botonDivision.addEventListener("click", () => {
    resultado.value = parseFloat((n1.value)) / parseFloat((n2.value));
});
botonRaizCuadrada.addEventListener("click", () => {
    resultado.value = parseFloat((Math.sqrt(n1.value)));
    if (!n1.value) {
        resultado.value = parseFloat((Math.sqrt(n2.value)));
    }
});
botonRaizCubica.addEventListener("click", () => {
    resultado.value = parseFloat((Math.cbrt(n1.value)));
    if (!n1.value) {
        resultado.value = parseFloat((Math.cbrt(n2.value)));
    }
});
//||