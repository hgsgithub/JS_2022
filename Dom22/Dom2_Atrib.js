// <p><a id="toGoogle" href="https://google.es" class="enlace">Google</a></p>
// Cambiar de la línea anterior, la clase poner "enlaceuni10", href = "https://twitter.com"
// Cambiar el texto="Twitter" y si no hay titulo crearlo = "Ahora voy a Twitter"
let link =document.getElementById("toGoogle");

link.className="enlaceuni10";
link.setAttribute("href", "https://twitter.com");
link.textContent="Twitter"

if(!link.hasAttribute("title")){
    link.title="Ahora vamos a Twitter"
}

// Crear un estilo para normalDiv
// border, ancho="200px", padding="50px", color="white", backgroundColor="cyan"
let div = document.getElementById("normalDiv")
div.style.boxSizing="border-box"
div.style.maxWidth="200px"
div.style.padding ="50px"
div.style.color="white"
div.style.background="cyan"

let link1 =document.getElementById("toGoogle1")
let ValorAt=link.getAttribute("title")
console.log(ValorAt)
console.log(link)
console.log(link1)





