let form = null;

document.addEventListener('DOMContentLoaded', e => {
    form = document.getElementById('formulario');
    form.addEventListener('submit', envioForm);
});

function envioForm(e) {
    e.preventDefault();
    const deportes = Array.from(form.deportes)
        .filter (function (a){  //sin arrow
            return a.checked
            console.log(a.checked)
        })
        /*.filter(input => input.checked) // con arrow
            input.checked
          })*/
        .map(input => input.value);
    
    document.getElementById('envio').textContent = `Nombre: ${document.forms[0].name},
    Deportes: ${deportes}`;
    }