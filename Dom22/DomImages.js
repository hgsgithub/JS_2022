// Visualización del número de imagen(es) del documento 
document.write("Número de imagen(es) del documento : " + document.images.length + "<br />");
console.log(document.images)
// Visualización identificador de la primera imagen 
document.write("Identificador de la primera imagen : " + document.images[0].id + "<br />");

// Visualización del atributo border de la segunda imagen 
document.write("Atributo border de la segunda imagen : " + document.images[1].border + "<br />");

// Visualización del atributo src de la tercera imagen 
document.write("Atributo src de la tercera imagen : " + document.images[2].src + "<br />");

// Visualización de los atributos width y height de la cuarta imagen 
document.write("Atributo width de la cuarta imagen : " + document.images[3].width + "<br />");
document.write("Atributo height de la cuarta imagen : " + document.images[3].height + "<br />");

//Ejemplos añadidos con getElement
var longImg = document.getElementById("parrafo") // devuelve el parrafo
       longImg.innerHTML="Puedes modificar la imagen "+ document.images[2].id //Modifica imagen 3

boton.onclick = function (){    // es una funcion anónima se puede hacer así
    var imagen1 = document.getElementById("PBASUS");
    imagen1.height="300";
        } 
boton1.onclick = function (){    // es una funcion anónima se puede hacer así
    var imagen1 = document.getElementById("PBASUS");
    imagen1.height="150";
                } 
