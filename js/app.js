
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

        // Se muestra el nombre que el usuario ingreso
        var newName = document.createTextNode(usname);
        var hiName = document.getElementById('helloName');
        hiName.appendChild(newName);
        hiName.style.display = 'block';

        // se muestra el listado con las sedes
        // var showlist = document.getElementById('sede');
        // showlist.style.display = 'block';

    }
    else{
        alert('Ingresa tu nombre y contraseña :)');
    }
};

firsStep.addEventListener('click',validar);

// *********** total estudiantes en generacion 1 de arequipa  ***********

// var studentsAre = data.AQP['2016-2'].students.length;
// console.log(studentsAre);

// // var quantityAre = studentsAre.value;
// var numberArequipa = document.createTextNode(studentsAre);

// var showare = document.getElementById('areq');
// showare.appendChild(numberArequipa);

// ***********  estudiantes activas AREQUIPA   ***********
// var studentsAre = data.AQP['2016-2'].students;
// console.log(studentsAre);


// var firstG = document.getElementById('firstGen');

// firstG.addEventListener('click', function(){
// var studentsAre = data.AQP['2016-2'].students;
// // console.log(studentsAre);
// var activeAre = 0;
// var inactiveAre = 0;
// var totalactive = [];
// var totalinactive = [];
// for(var i = 0; i < studentsAre.length; i++){
//     if(studentsAre[i]['active'] == true){
//         activeAre ++;
//         totalactive.push(studentsAre[i]['name']);
//         // console.log(totalactive);
//         // console.log(totalactive[0].sprints[0].score.tech);

//         scoreHSE=0;
//         scoreTech = 0;

//         for (var j = 0; j < studentsAre[i]['sprints'].length; j++) {
//             scoreTech += studentsAre[i]['sprints'][j]['score']['tech'];
//             scoreHSE += studentsAre[i]['sprints'][j]['score']['hse'];
//             console.log("puntaje HSE " + scoreHSE);
//             console.log("puntaje TECH " + scoreTech);
//              var totalScore = scoreTech + scoreHSE;
//              console.log(totalScore);  
//            }
        
//     } else {
//         inactiveAre ++;
//         totalinactive.push(studentsAre[i]['name']);
//         // console.log(totalinactive);
//         // totalinactive.push(studentsAre[i]['active'] != true);
//         // console.log(totalinactive);
//         // var estuinactiva = studentsAre[i].name;
//         // console.log ( estuinactiva);
//     }
// }

// var container = document.getElementById('firstGen');
// var total = document.createElement('p');
// var text = document.createTextNode('Hay ' + activeAre + ' estudiantes activas y ' + inactiveAre + ' estudiantes inactivas');
// total.appendChild(text);
// container.appendChild(total);

// var namesAreActive = totalactive;
// console.log(namesAreActive);
// var activeNames = document.createTextNode('Estudiantes activas '+ namesAreActive);
// var listActiveNames = document.createElement('p');
// listActiveNames.appendChild(activeNames);
// container.appendChild(listActiveNames);


// var namesAreInactive = totalinactive;
// var inactiveNames = document.createTextNode('Estudiantes inactivas '+ namesAreInactive);
// var listInactiveNames = document.createElement('p');
// listInactiveNames.appendChild(inactiveNames);
// container.appendChild(listInactiveNames);
// // total.id=('hide');
// total.style.display = 'block';
// });

// // var stuPoints = data.AQP['2016-2'].students[0].sprints[0].score.hse;
// // console.log(stuPoints);



// // ***** SEGUNDA GENERACION AREQUIPA******
// var secondG = document.getElementById('secondGen');

// secondG.addEventListener('click', function(){
// var studentsAreTwo = data.AQP['2017-1'].students;

// var activeAreTwo = 0;
// var inactiveAreTwo = 0;
// for(var j = 0; j < studentsAreTwo.length; j++){
//     if(studentsAreTwo[j]['active'] == true){
//         activeAreTwo ++;
//         // console.log(activeAre);
//     } else {
//         inactiveAreTwo ++;
//         // console.log('inactiveAre');
//     }
// }
// var containerTwo = document.getElementById('secondGen');
// var totalTwo = document.createElement('p');
// var textTwo = document.createTextNode('Hay ' + activeAreTwo + ' estudiantes activas y ' + inactiveAreTwo + ' estudiantes inactivas');
// totalTwo.appendChild(textTwo);
// containerTwo.appendChild(totalTwo);
// // total.id=('hide');
// totalTwo.style.display = 'block';
// });
