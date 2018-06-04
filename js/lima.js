//*******  ESTUDIANTES ACTIVAS E INACTIVAS DE LIMA   *******

var firstGenLima = document.getElementById('firstGLima');

firstGenLima.addEventListener('click', function(){
var studentsLima = data.LIM['2016-2'].students;
console.log(studentsLima);
var activeLima = 0;
var inactiveLima = 0;
var totalactiveLima = [];
var totalinactiveLima = [];
for(var i = 0; i < studentsLima.length; i++){
    if(studentsLima[i]['active'] == true){
        activeLima ++;
        totalactiveLima.push(studentsLima[i]['name']);

        scoreHSE=0;
        scoreTech = 0;
        for (var j = 0; j < studentsLima[i]['sprints'].length; j++) {
            scoreTech += studentsLima[i]['sprints'][j]['score']['tech'];
            scoreHSE += studentsLima[i]['sprints'][j]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE);
            console.log("puntaje TECH " + scoreTech);
             var totalScore = scoreTech + scoreHSE;
             console.log(totalScore);  
           }
        
    } else {
        inactiveLima++;
        totalinactiveLima.push(studentsLima[i]['name']);
    }
}

//*******  OBTENER CANTIDAD Y PORCENTAJES DE ESTUDIANTES   *******

var totalStudents = activeLima + inactiveLima;

var activePercent = Math.round(activeLima * 100 / totalStudents);
console.log(activePercent);

var inactivePercent = Math.round(inactiveLima * 100 / totalStudents);
console.log(inactivePercent);


// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGLima');
var totalLima1 = document.createElement('p');
var text = document.createTextNode('Hay ' + activeLima + ' estudiantes activas y ' + inactiveLima + ' estudiantes inactivas');
totalLima1.appendChild(text);
container.appendChild(totalLima1);

var containerActive = document.createElement('p');
var textActive = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercent + '%');
containerActive.appendChild(textActive);
container.appendChild(containerActive);

var namesActiveLima = totalactiveLima;
console.log(namesActiveLima);
var activeNamesLima = document.createTextNode('Estudiantes activas: '+ namesActiveLima);
var listActiveNamesLima = document.createElement('p');
listActiveNamesLima.appendChild(activeNamesLima);
container.appendChild(listActiveNamesLima);

var containerInactive = document.createElement('p');
var textInactive = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercent + '%');
containerInactive.appendChild(textInactive);
container.appendChild(containerInactive);

var namesInactiveLima = totalinactiveLima;
var inactiveNamesLima = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima);
var listInactiveNamesLima = document.createElement('p');
listInactiveNamesLima.appendChild(inactiveNamesLima);
container.appendChild(listInactiveNamesLima);

//*******  OBTENER PROMEDIOS DE JEDIS Y TEACHERS   *******

var proms = data.LIM['2016-2'].ratings;
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
     var containerRatingJ = document.getElementById('firstGLima');
     containerJedi.appendChild(jediText);
     containerRatingJ.appendChild(containerJedi);

     var teacherText = document.createTextNode('El promedio del teacher es: ' + teacherTotal);
     var containerTeacher = document.createElement('p');
     var containerRatingT = document.getElementById('firstGLima');
     containerTeacher.appendChild(teacherText);
     containerRatingT.appendChild(containerTeacher);
});


// ******* SEGUNDA GENERACION LIMA  *******
var secondGenLima = document.getElementById('secondGLima');

secondGenLima.addEventListener('click', function(){
var studentsLimaTwo = data.LIM['2017-1'].students;

var activeLimaTwo = 0;
var inactiveLimaTwo = 0;
var totalactiveLima2 = [];
var totalinactiveLima2 = [];
for(var h = 0; h < studentsLimaTwo.length; h++){
    if(studentsLimaTwo[h]['active'] == true){
        activeLimaTwo ++;
        totalactiveLima2.push(studentsLimaTwo[h]['name']);

        scoreHSE2 = 0;
        scoreTech2 = 0;

        for (var k = 0; k < studentsLimaTwo[h]['sprints'].length; k++) {
            scoreTech2 += studentsLimaTwo[h]['sprints'][k]['score']['tech'];
            scoreHSE2 += studentsLimaTwo[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE2);
            console.log("puntaje TECH " + scoreTech2);
             var totalScore2 = scoreTech2 + scoreHSE2;
             console.log(totalScore2);  
           }
    } else {
        inactiveLimaTwo ++;
        totalinactiveLima2.push(studentsLimaTwo[h]['name']);
        // console.log('inactiveAre');
    }
}

var totalStudentsTwo = activeLimaTwo + inactiveLimaTwo;

var activePercentTwo = Math.round(activeLimaTwo * 100 / totalStudentsTwo);

var inactivePercentTwo = Math.round(inactiveLimaTwo * 100 / totalStudentsTwo);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGLima');
var totalLimaTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeLimaTwo + ' estudiantes activas y ' + inactiveLimaTwo + ' estudiantes inactivas');
totalLimaTwo.appendChild(textTwo);
containerTwo.appendChild(totalLimaTwo);

var containerActiveTwo = document.createElement('p');
var textActiveTwo = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentTwo + '%');
containerActiveTwo.appendChild(textActiveTwo);
containerTwo.appendChild(containerActiveTwo);

var namesActiveLima2 = totalactiveLima2;
console.log(namesActiveLima2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesActiveLima2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var containerInactiveTwo = document.createElement('p');
var textInactiveTwo = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentTwo + '%');
containerInactiveTwo.appendChild(textInactiveTwo);
containerTwo.appendChild(containerInactiveTwo);

var namesInactiveLima2 = totalinactiveLima2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);

var promsTwo = data.LIM['2017-1'].ratings;
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
     var containerRatingJ2 = document.getElementById('secondGLima');
     containerJedi2.appendChild(jediText2);
     containerRatingJ2.appendChild(containerJedi2);

     var teacherText2 = document.createTextNode('El promedio del teacher es: ' + teacherTotal2);
     var containerTeacher2 = document.createElement('p');
     var containerRatingT2 = document.getElementById('secondGLima');
     containerTeacher2.appendChild(teacherText2);
     containerRatingT2.appendChild(containerTeacher2);
});

// ******* TERCERA GENERACION LIMA  *******
var thirdGenLima = document.getElementById('thirdGLima');

thirdGenLima.addEventListener('click', function(){
var studentsLimaThree = data.LIM['2017-2'].students;

var activeLimaThree = 0;
var inactiveLimaThree = 0;
var totalactiveLima3 = [];
var totalinactiveLima3 = [];
for(var h = 0; h < studentsLimaThree.length; h++){
    if(studentsLimaThree[h]['active'] == true){
        activeLimaThree ++;
        totalactiveLima3.push(studentsLimaThree[h]['name']);

        scoreHSE3 = 0;
        scoreTech3 = 0;

        for (var k = 0; k < studentsLimaThree[h]['sprints'].length; k++) {
            scoreTech3 += studentsLimaThree[h]['sprints'][k]['score']['tech'];
            scoreHSE3 += studentsLimaThree[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE3);
            console.log("puntaje TECH " + scoreTech3);
             var totalScore3 = scoreTech3 + scoreHSE3;
             console.log(totalScore3);  
           }
    } else {
        inactiveLimaThree ++;
        totalinactiveLima3.push(studentsLimaThree[h]['name']);
        // console.log('inactiveAre');
    }
}
var totalStudentsThree = activeLimaThree + inactiveLimaThree;

var activePercentThree = Math.round(activeLimaThree * 100 / totalStudentsThree);

var inactivePercentThree = Math.round(inactiveLimaThree * 100 / totalStudentsThree);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerThree= document.getElementById('thirdGLima');
var totalLimaThree = document.createElement('p');
var textThree = document.createTextNode('Hay ' + activeLimaThree + ' estudiantes activas y ' + inactiveLimaThree + ' estudiantes inactivas');
totalLimaThree.appendChild(textThree);
containerThree.appendChild(totalLimaThree);

var containerActiveThree = document.createElement('p');
var textActiveThree = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentThree + '%');
containerActiveThree.appendChild(textActiveThree);
containerThree.appendChild(containerActiveThree);

var namesActiveLima3 = totalactiveLima3;
console.log(namesActiveLima3);
var activeNames3 = document.createTextNode('Estudiantes activas: '+ namesActiveLima3);
var listActiveNames3 = document.createElement('p');
listActiveNames3.appendChild(activeNames3);
containerThree.appendChild(listActiveNames3);

var containerInactiveThree = document.createElement('p');
var textInactiveThree = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentThree + '%');
containerInactiveThree.appendChild(textInactiveThree);
containerThree.appendChild(containerInactiveThree);

var namesInactiveLima3 = totalinactiveLima3;
var inactiveNames3 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima3);
var listInactiveNames3 = document.createElement('p');
listInactiveNames3.appendChild(inactiveNames3);
containerThree.appendChild(listInactiveNames3);

var promsThree = data.LIM['2017-2'].ratings;
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
     var containerRatingJ3 = document.getElementById('thirdGLima');
     containerJedi3.appendChild(jediText3);
     containerRatingJ3.appendChild(containerJedi3);

     var teacherText3 = document.createTextNode('El promedio del teacher es: ' + teacherTotal3);
     var containerTeacher3 = document.createElement('p');
     var containerRatingT3 = document.getElementById('thirdGLima');
     containerTeacher3.appendChild(teacherText3);
     containerRatingT3.appendChild(containerTeacher3);
});