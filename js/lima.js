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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGLima');
var totalLima1 = document.createElement('p');
var text = document.createTextNode('Hay ' + activeLima + ' estudiantes activas y ' + inactiveLima + ' estudiantes inactivas');
totalLima1.appendChild(text);
container.appendChild(totalLima1);

var namesActiveLima = totalactiveLima;
console.log(namesActiveLima);
var activeNamesLima = document.createTextNode('Estudiantes activas: '+ namesActiveLima);
var listActiveNamesLima = document.createElement('p');
listActiveNamesLima.appendChild(activeNamesLima);
container.appendChild(listActiveNamesLima);

var namesInactiveLima = totalinactiveLima;
var inactiveNamesLima = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima);
var listInactiveNamesLima = document.createElement('p');
listInactiveNamesLima.appendChild(inactiveNamesLima);
container.appendChild(listInactiveNamesLima);
// total.id=('hide');
// total.style.display = 'block';
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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGLima');
var totalLimaTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeLimaTwo + ' estudiantes activas y ' + inactiveLimaTwo + ' estudiantes inactivas');
totalLimaTwo.appendChild(textTwo);
containerTwo.appendChild(totalLimaTwo);

var namesActiveLima2 = totalactiveLima2;
console.log(namesActiveLima2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesActiveLima2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var namesInactiveLima2 = totalinactiveLima2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);
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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerThree= document.getElementById('thirdGLima');
var totalLimaThree = document.createElement('p');
var textThree = document.createTextNode('Hay ' + activeLimaThree + ' estudiantes activas y ' + inactiveLimaThree + ' estudiantes inactivas');
totalLimaThree.appendChild(textThree);
containerThree.appendChild(totalLimaThree);

var namesActiveLima3 = totalactiveLima3;
console.log(namesActiveLima3);
var activeNames3 = document.createTextNode('Estudiantes activas: '+ namesActiveLima3);
var listActiveNames3 = document.createElement('p');
listActiveNames3.appendChild(activeNames3);
containerThree.appendChild(listActiveNames3);

var namesInactiveLima3 = totalinactiveLima3;
var inactiveNames3 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveLima3);
var listInactiveNames3 = document.createElement('p');
listInactiveNames3.appendChild(inactiveNames3);
containerThree.appendChild(listInactiveNames3);
});