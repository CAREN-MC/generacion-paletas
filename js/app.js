const boton = document.getElementById("generarBtn");
const selector= document.getElementById("cantidad");
const paleta = document.getElementById("paleta");


boton.addEventListener("click", function () {
    const cantidad = Number(selector.value);

paleta.innerHTML ="";

    for (let i = 0; i < cantidad; i++) {
        const caja = document.createElement("div");
        caja.classList.add("color");
        caja.textContent = "Color";
        paleta.appendChild(caja);
    }
});
