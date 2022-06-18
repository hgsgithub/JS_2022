// trabajar con eventos.
// Cuando pulsemos el boton, indicar que se ha hecho click
var boton1=document.getElementById("boton");
boton1.addEventListener("click", function() {
    console.log("has hecho click")

});

// Cuando pasemos el ratón por el boton, indicar que se ha detectado el ratón

boton1.addEventListener("mouseover", function() {
    console.log("has detectado el ratón")

});

// Cuando el deje de estar encima del boton, indicar que el ratón está fuera.
boton1.addEventListener("mouseout", function() {
    console.log("fuera ratón")

});

// Cuando se cargue el documento, indicar que el documento está cargado
window.addEventListener("load", function(){
    console.log("has cargado el documento")
})
// Cuando redimensionemos la ventana, indicar que se ha modificado la ventana
window.addEventListener("resize", function(){
    console.log("has modificado la página")
})