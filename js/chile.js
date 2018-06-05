//*******  ESTUDIANTES ACTIVAS E INACTIVAS DE CHILE   *******

var firstGenChile = document.getElementById('firstGChile');

firstGenChile.addEventListener('click', function(){
var studentsChile = data.SCL['2016-2'].students;
console.log(studentsChile);
var activeChile = 0;
var inactiveChile = 0;
var totalactiveChile = [];
var totalinactiveChile = [];
for(var i = 0; i < studentsChile.length; i++){
    if(studentsChile[i]['active'] == true){
        activeChile ++;
        totalactiveChile.push(studentsChile[i]['name']);

        scoreHSE=0;
        scoreTech = 0;
        for (var j = 0; j < studentsChile[i]['sprints'].length; j++) {
            scoreTech += studentsChile[i]['sprints'][j]['score']['tech'];
            scoreHSE += studentsChile[i]['sprints'][j]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE);
            console.log("puntaje TECH " + scoreTech);
            var totalScore = scoreTech + scoreHSE;
            console.log(totalScore);  
           }
        
    } else {
        inactiveChile++;
        totalinactiveChile.push(studentsChile[i]['name']);
    }
}

//*******  OBTENER CANTIDAD Y PORCENTAJES DE ESTUDIANTES   *******

var totalStudents = activeChile + inactiveChile;

var activePercent = Math.round(activeChile * 100 / totalStudents);
// console.log(activePercent);

var inactivePercent = Math.round(inactiveChile * 100 / totalStudents);
// console.log(inactivePercent);


// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGChile');
var totalChile = document.createElement('p');
var text = document.createTextNode('Hay ' + activeChile + ' estudiantes activas y ' + inactiveChile + ' estudiantes inactivas');
totalChile.appendChild(text);
container.appendChild(totalChile);

var space = document.createElement('br');
container.appendChild(space);

var containerActive = document.createElement('p');
var textActive = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercent + '%');
containerActive.appendChild(textActive);
container.appendChild(containerActive);

var space2 = document.createElement('br');
container.appendChild(space2);

var namesActiveChile = totalactiveChile;
console.log(namesActiveChile);
var activeNamesChile = document.createTextNode('Estudiantes activas: '+ namesActiveChile);
var listActiveNamesChile = document.createElement('p');
listActiveNamesChile.appendChild(activeNamesChile);
container.appendChild(listActiveNamesChile);

var space3 = document.createElement('br');
container.appendChild(space3);

var containerInactive = document.createElement('p');
var textInactive = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercent + '%');
containerInactive.appendChild(textInactive);
container.appendChild(containerInactive);

var space4 = document.createElement('br');
container.appendChild(space4);

var namesInactiveChile = totalinactiveChile;
var inactiveNamesChile = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile);
var listInactiveNamesChile = document.createElement('p');
listInactiveNamesChile.appendChild(inactiveNamesChile);
container.appendChild(listInactiveNamesChile);

var space5 = document.createElement('br');
container.appendChild(space5);

//*******  OBTENER PROMEDIOS DE JEDIS Y TEACHERS   *******

var proms = data.SCL['2016-2'].ratings;
console.log(proms);
var promJedi = 0;
var promTeacher = 0;

for(var p = 0; p < proms.length; p++){
    promJedi += (proms[p]['jedi'])/proms.length;
    var jediTotal = promJedi.toFixed(1);
    console.log(jediTotal);

    promTeacher += (proms[p]['teacher'])/proms.length;
    var teacherTotal = promTeacher.toFixed(1);
    console.log(teacherTotal);
  }
    var jediText = document.createTextNode('El promedio del jedi es: ' + jediTotal);
    var containerJedi = document.createElement('p');
    var containerRatingJ = document.getElementById('firstGChile');
    containerJedi.appendChild(jediText);
    containerRatingJ.appendChild(containerJedi);

    var space6 = document.createElement('br');
    container.appendChild(space6);

    var teacherText = document.createTextNode('El promedio del teacher es: ' + teacherTotal);
    var containerTeacher = document.createElement('p');
    var containerRatingT = document.getElementById('firstGChile');
    containerTeacher.appendChild(teacherText);
    containerRatingT.appendChild(containerTeacher);

});

// ******* SEGUNDA GENERACION CHILE  *******
var secondGenChile = document.getElementById('secondGChile');

secondGenChile.addEventListener('click', function(){
var studentsChileTwo = data.SCL['2017-1'].students;

var activeChileTwo = 0;
var inactiveChileTwo = 0;
var totalactiveChile2 = [];
var totalinactiveChile2 = [];
for(var h = 0; h < studentsChileTwo.length; h++){
    if(studentsChileTwo[h]['active'] == true){
        activeChileTwo ++;
        totalactiveChile2.push(studentsChileTwo[h]['name']);

        scoreHSE2 = 0;
        scoreTech2 = 0;

        for (var k = 0; k < studentsChileTwo[h]['sprints'].length; k++) {
            scoreTech2 += studentsChileTwo[h]['sprints'][k]['score']['tech'];
            scoreHSE2 += studentsChileTwo[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE2);
            console.log("puntaje TECH " + scoreTech2);
            var totalScore2 = scoreTech2 + scoreHSE2;
            console.log(totalScore2);  
           }
    } else {
        inactiveChileTwo ++;
        totalinactiveChile2.push(studentsChileTwo[h]['name']);

    }
}

var totalStudentsTwo = activeChileTwo + inactiveChileTwo;

var activePercentTwo = Math.round(activeChileTwo * 100 / totalStudentsTwo);

var inactivePercentTwo = Math.round(inactiveChileTwo * 100 / totalStudentsTwo);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGChile');
var totalChileTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeChileTwo + ' estudiantes activas y ' + inactiveChileTwo + ' estudiantes inactivas');
totalChileTwo.appendChild(textTwo);
containerTwo.appendChild(totalChileTwo);

var space = document.createElement('br');
containerTwo.appendChild(space);

var containerActiveTwo = document.createElement('p');
var textActiveTwo = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentTwo + '%');
containerActiveTwo.appendChild(textActiveTwo);
containerTwo.appendChild(containerActiveTwo);

var space2 = document.createElement('br');
containerTwo.appendChild(space2);

var namesActiveChile2 = totalactiveChile2;
console.log(namesActiveChile2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesActiveChile2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var space3 = document.createElement('br');
containerTwo.appendChild(space3);

var containerInactiveTwo = document.createElement('p');
var textInactiveTwo = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentTwo + '%');
containerInactiveTwo.appendChild(textInactiveTwo);
containerTwo.appendChild(containerInactiveTwo);

var space4 = document.createElement('br');
containerTwo.appendChild(space4);

var namesInactiveChile2 = totalinactiveChile2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);

var space5 = document.createElement('br');
containerTwo.appendChild(space5);

var promsTwo = data.SCL['2017-1'].ratings;
console.log(promsTwo);
var promJedi2 = 0;
var promTeacher2 = 0;

for(var q = 0; q < promsTwo.length; q++){
    promJedi2 += (promsTwo[q]['jedi'])/promsTwo.length;
    var jediTotal2 = promJedi2.toFixed(1);
    console.log(jediTotal2);

    promTeacher2 += (promsTwo[q]['teacher'])/promsTwo.length;
    var teacherTotal2 = promTeacher2.toFixed(1);
    console.log(teacherTotal2);
  }
    var jediText2 = document.createTextNode('El promedio del jedi es: ' + jediTotal2);
    var containerJedi2 = document.createElement('p');
    var containerRatingJ2 = document.getElementById('secondGChile');
    containerJedi2.appendChild(jediText2);
    containerRatingJ2.appendChild(containerJedi2);

    var space6 = document.createElement('br');
    containerTwo.appendChild(space6);

    var teacherText2 = document.createTextNode('El promedio del teacher es: ' + teacherTotal2);
    var containerTeacher2 = document.createElement('p');
    var containerRatingT2 = document.getElementById('secondGChile');
    containerTeacher2.appendChild(teacherText2);
    containerRatingT2.appendChild(containerTeacher2);
});

// ******* TERCERA GENERACION CHILE  *******
var thirdGenChile = document.getElementById('thirdGChile');

thirdGenChile.addEventListener('click', function(){
var studentsChileThree = data.SCL['2017-2'].students;

var activeChileThree = 0;
var inactiveChileThree = 0;
var totalactiveChile3 = [];
var totalinactiveChile3 = [];
for(var h = 0; h < studentsChileThree.length; h++){
    if(studentsChileThree[h]['active'] == true){
        activeChileThree ++;
        totalactiveChile3.push(studentsChileThree[h]['name']);

        scoreHSE3 = 0;
        scoreTech3 = 0;

        for (var k = 0; k < studentsChileThree[h]['sprints'].length; k++) {
            scoreTech3 += studentsChileThree[h]['sprints'][k]['score']['tech'];
            scoreHSE3 += studentsChileThree[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE3);
            console.log("puntaje TECH " + scoreTech3);
            var totalScore3 = scoreTech3 + scoreHSE3;
            console.log(totalScore3);  
           }
    } else {
        inactiveChileThree ++;
        totalinactiveChile3.push(studentsChileThree[h]['name']);

    }
}
var totalStudentsThree = activeChileThree + inactiveChileThree;

var activePercentThree = Math.round(activeChileThree * 100 / totalStudentsThree);

var inactivePercentThree = Math.round(inactiveChileThree * 100 / totalStudentsThree);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerThree= document.getElementById('thirdGChile');
var totalChileThree = document.createElement('p');
var textThree = document.createTextNode('Hay ' + activeChileThree + ' estudiantes activas y ' + inactiveChileThree + ' estudiantes inactivas');
totalChileThree.appendChild(textThree);
containerThree.appendChild(totalChileThree);

var space = document.createElement('br');
containerThree.appendChild(space);

var containerActiveThree = document.createElement('p');
var textActiveThree = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentThree + '%');
containerActiveThree.appendChild(textActiveThree);
containerThree.appendChild(containerActiveThree);

var space2 = document.createElement('br');
containerThree.appendChild(space2);

var namesActiveChile3 = totalactiveChile3;
console.log(namesActiveChile3);
var activeNames3 = document.createTextNode('Estudiantes activas: '+ namesActiveChile3);
var listActiveNames3 = document.createElement('p');
listActiveNames3.appendChild(activeNames3);
containerThree.appendChild(listActiveNames3);

var space3 = document.createElement('br');
containerThree.appendChild(space3);

var containerInactiveThree = document.createElement('p');
var textInactiveThree = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentThree + '%');
containerInactiveThree.appendChild(textInactiveThree);
containerThree.appendChild(containerInactiveThree);

var space4 = document.createElement('br');
containerThree.appendChild(space4);

var namesInactiveChile3 = totalinactiveChile3;
var inactiveNames3 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile3);
var listInactiveNames3 = document.createElement('p');
listInactiveNames3.appendChild(inactiveNames3);
containerThree.appendChild(listInactiveNames3);

var space5 = document.createElement('br');
containerThree.appendChild(space5);

var promsThree = data.SCL['2017-2'].ratings;
console.log(promsThree);
var promJedi3 = 0;
var promTeacher3 = 0;

for(var n = 0; n < promsThree.length; n++){
    promJedi3 += (promsThree[n]['jedi'])/promsThree.length;
    var jediTotal3 = promJedi3.toFixed(1);
    console.log(jediTotal3);

    promTeacher3 += (promsThree[n]['teacher'])/promsThree.length;
    var teacherTotal3 = promTeacher3.toFixed(1);
    console.log(teacherTotal3);
  }
    var jediText3 = document.createTextNode('El promedio del jedi es: ' + jediTotal3);
    var containerJedi3 = document.createElement('p');
    var containerRatingJ3 = document.getElementById('thirdGChile');
    containerJedi3.appendChild(jediText3);
    containerRatingJ3.appendChild(containerJedi3);

    var space6 = document.createElement('br');
    containerThree.appendChild(space6);

    var teacherText3 = document.createTextNode('El promedio del teacher es: ' + teacherTotal3);
    var containerTeacher3 = document.createElement('p');
    var containerRatingT3 = document.getElementById('thirdGChile');
    containerTeacher3.appendChild(teacherText3);
    containerRatingT3.appendChild(containerTeacher3);
});