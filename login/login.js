

// Lo que queremos es que si un usuario se va a registrar, se meta al formulario de registro
// el cual tiene la clase register-form/ entonces vamos a crear un formulario register form 
// se  supone que aca tenemos el formulario de registro, en caso de que no, se procede a colocarle desde el html un nombre



// tomar el segundo formulario y a este se le hace el login
const authForm=document.forms['form-auth']



//El siguiente escucha es el otro boton
authForm.addEventListener('submit', AutenticarUsuario);


function AutenticarUsuario(event){
	event.preventDefault();
	const password = authForm['password'].value;
	const username = authForm['username'].value;
	alert('Por favor verifica tu información')
	
}

