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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGChile');
var totalChile = document.createElement('p');
var text = document.createTextNode('Hay ' + activeChile + ' estudiantes activas y ' + inactiveChile + ' estudiantes inactivas');
totalChile.appendChild(text);
container.appendChild(totalChile);

var namesActiveChile = totalactiveChile;
console.log(namesActiveChile);
var activeNamesChile = document.createTextNode('Estudiantes activas: '+ namesActiveChile);
var listActiveNamesChile = document.createElement('p');
listActiveNamesChile.appendChild(activeNamesChile);
container.appendChild(listActiveNamesChile);

var namesInactiveChile = totalinactiveChile;
var inactiveNamesChile = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile);
var listInactiveNamesChile = document.createElement('p');
listInactiveNamesChile.appendChild(inactiveNamesChile);
container.appendChild(listInactiveNamesChile);

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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGChile');
var totalChileTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeChileTwo + ' estudiantes activas y ' + inactiveChileTwo + ' estudiantes inactivas');
totalChileTwo.appendChild(textTwo);
containerTwo.appendChild(totalChileTwo);

var namesActiveChile2 = totalactiveChile2;
console.log(namesActiveChile2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesActiveChile2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var namesInactiveChile2 = totalinactiveChile2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);
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
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerThree= document.getElementById('thirdGChile');
var totalChileThree = document.createElement('p');
var textThree = document.createTextNode('Hay ' + activeChileThree + ' estudiantes activas y ' + inactiveChileThree + ' estudiantes inactivas');
totalChileThree.appendChild(textThree);
containerThree.appendChild(totalChileThree);

var namesActiveChile3 = totalactiveChile3;
console.log(namesActiveChile3);
var activeNames3 = document.createTextNode('Estudiantes activas: '+ namesActiveChile3);
var listActiveNames3 = document.createElement('p');
listActiveNames3.appendChild(activeNames3);
containerThree.appendChild(listActiveNames3);

var namesInactiveChile3 = totalinactiveChile3;
var inactiveNames3 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveChile3);
var listInactiveNames3 = document.createElement('p');
listInactiveNames3.appendChild(inactiveNames3);
containerThree.appendChild(listInactiveNames3);
});