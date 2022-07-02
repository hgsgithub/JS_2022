let form = null;

document.addEventListener('DOMContentLoaded', e => {
    form = document.getElementById('formulario');
    form.addEventListener('submit', envioForm);
});

function envioForm(e) {
    e.preventDefault();
    const deportes = Array.from(form.deportes)
        .filter (function (a){  //sin arrow
            console.log("filtro "+a.checked)
            return a.checked
                   
        })
        /*.filter(input => input.checked) // con arrow
            input.checked
          })*/
        .map(input => input.value);
        console.log("Long.Array creada "+ deportes.length)
        console.log(deportes)
    document.getElementById('envio').textContent = `Nombre: ${document.forms[0].name},
    Deportes: ${deportes}`;

    
    } 
    