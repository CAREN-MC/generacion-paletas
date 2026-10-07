const boton = document.getElementById("generarBtn");
const selector= document.getElementById("cantidad");
const paleta = document.getElementById("paleta");

    function aHex(numero)  {
        let texto = numero.toString(16);

        if (texto.length < 2)  {
            texto= "0" + texto;
        } 
        return texto; 
    }
    
    function hslAHex(h, s, l) {
    s = s / 100;
    l = l / 100;
    const a = s * Math.min(l, 1 - l);

    function canal(n) {
        const k = (n + h / 30) % 12;
        const valor = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * valor);
    }

    return "#" + aHex(canal(0)) + aHex(canal(8)) + aHex(canal(4));
}


boton.addEventListener("click", function () {
    const cantidad = Number(selector.value);

paleta.innerHTML ="";

    for (let i = 0; i < cantidad; i++) {
        const caja = document.createElement("div");
        caja.classList.add("color");
        const luminosidad = Math.floor(Math.random() * 41) + 40;
        const matiz = Math.floor(Math.random() * 361);
        const hex = hslAHex(matiz, 80, luminosidad);
        caja.textContent = hex;
        caja.style.backgroundColor = hex;
        paleta.appendChild(caja);
        }
});
