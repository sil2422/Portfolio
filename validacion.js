function chequearFormulario(){
    let nombre = document.querySelector(".formcontacto__input__nombre").value;
    let email = document.querySelector(".formcontacto__input__email").value;
    let asunto = document.querySelector(".formcontacto__input")
    let mensaje = document.querySelector(".formcontacto__textarea").value;
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ((email == "") || (nombre == "") || (mensaje == "") || (asunto == "")) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        formularioCompleto = false;
        return;
    }
    else if ( !expr.test(email) ){                              //COMPRUEBA MAIL
        alert('Error: La dirección de correo "' + email + '" es incorrecta.');
        formularioCompleto = false;
        return;
    }
    else{
        formularioCompleto = true;
    };
}