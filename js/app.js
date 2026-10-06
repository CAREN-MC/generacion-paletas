const boton = document.getElementById("generarBtn");
const selector= document.getElementById("cantidad");
const paleta = document.getElementById("paleta");


boton.addEventListener("click", function () {
    const cantidad = Number(selector.value);

paleta.innerHTML ="";

    for (let i = 0; i < cantidad; i++) {
        const caja = document.createElement("div");
        caja.classList.add("color");
        const luminosidad = Math.floor(Math.random() * 41) + 40;
        caja.textContent = "Color";
        caja.style.backgroundColor =`hsl(30, 80%,${luminosidad}%)`;
        paleta.appendChild(caja);
    }
});
