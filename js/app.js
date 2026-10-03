const boton = document.getElementById("generarBtn");
const selector= document.getElementById("cantidad");

boton.addEventListener("click", function () {
    const cantidad = selector.value;
    console.log (cantidad);
});