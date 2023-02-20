const regUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regPass = /^(?=.*\d)[a-zA-Z\d]{6,10}$/;


const validation = (user)=>{

    const errors = {};
    if (user.username==='') {
        errors.username= 'No puede dejar el campo vacío.'; 
    }
    if (user.username.length>35) {
        errors.username= 'Excediste el número de caracteres permitido.'; 
    }
    if (!regUser.test(user.username)) {
        errors.username= 'Formato no válido, ingrese un correo.';
    }
    if (!regPass.test(user.password)) {
        errors.password= 'Contraseña insegura.';
    }

    return errors;
}

export default validation;