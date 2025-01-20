//submit de formulario
const submitFunction = (event) => {
    
    if(!validarFormulario()){
        event.preventDefault() //previene actualización de la web
    }else{
        event.preventDefault() //previene actualización de la web
        alert(
            'Los datos enviados fueron \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) //escucha envío

//validar formulario

function validarFormulario(){

    //valida textos
    const camposTexto = document.querySelectorAll('input[type="text"]');
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

    //valida email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //Regex valida formato de email
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electrónico válido')
    }

    //valida edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad')

    if(edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 para registrarte')
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad)
    }

    //valida actividad

    const actividad = document.getElementById('actividad')
    const erroractividad = document.getElementById('actividad')

    if(actividad.value == ''){
        mostrarError(erroractividad, 'Por favor, selecciona una actividad')
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad)
    }

    //valida estudios

    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio)
    }

    //valida aceptar términos

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones')
        validacionCorrecta = false;
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta //devuelve si el formulario completo es o no válido

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento, mensaje) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}