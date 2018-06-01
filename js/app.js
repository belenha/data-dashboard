/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var morado = Object.keys(data);
console.log(morado);

// Se pide un nombre de usuario y una contraseña para poder ingresar

var firsStep = document.getElementById('send');

function validar(){
    var usname = document.getElementById('name').value;
    var passw = document.getElementById('password').value;

    if(usname.length != 0 && passw === 'laboratoria'){
        // alert ('hola ' + usname);
        var hide = document.getElementById('login');
        hide.style.display = 'none';

        var newName = document.createTextNode(usname);
        var hiName = document.getElementById('helloName');
        hiName.appendChild(newName);
        hiName.style.display = 'block';

    }
    else{
        alert('Ingresa tu nombre y contraseña :)');
    }
};

firsStep.addEventListener('click',validar);