//submit de formulario
const submitFunction = (event) => {
    event.preventDefault() //previene actualización de la web
    validarFormulario()
}

document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha envío

//validar formulario

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) //Toma error + id con la primer letra en mayúscula
        if(campo.ariaValueMax.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido')
            validacionCorrecta = false
        }else if(campo.ariaValueMax.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento, mensaje) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}