//*******  ESTUDIANTES ACTIVAS E INACTIVAS DE CDMX   *******

var firstGenCdmx = document.getElementById('firstGCdmx');

firstGenCdmx.addEventListener('click', function(){
var studentsCdmx = data.CDMX['2017-1'].students;
console.log(studentsCdmx);
var activeCdmx = 0;
var inactiveCdmx = 0;
var totalactiveCdmx = [];
var totalinactiveCdmx = [];
for(var i = 0; i < studentsCdmx.length; i++){
    if(studentsCdmx[i]['active'] == true){
        activeCdmx ++;
        totalactiveCdmx.push(studentsCdmx[i]['name']);
        // console.log(totalactiveCdmx);
        // console.log(totalactiveCdmx[0].sprints[0].score.tech);

        scoreHSE=0;
        scoreTech = 0;

        for (var j = 0; j < studentsCdmx[i]['sprints'].length; j++) {
            scoreTech += studentsCdmx[i]['sprints'][j]['score']['tech'];
            scoreHSE += studentsCdmx[i]['sprints'][j]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE);
            console.log("puntaje TECH " + scoreTech);
             var totalScore = scoreTech + scoreHSE;
             console.log(totalScore);  
           }
        
    } else {
        inactiveCdmx ++;
        totalinactiveCdmx.push(studentsCdmx[i]['name']);
        // console.log(totalinactive);
        // totalinactive.push(studentsAre[i]['active'] != true);
        // console.log(totalinactive);
        // var estuinactiva = studentsAre[i].name;
        // console.log ( estuinactiva);
    }
}
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGCdmx');
var totalCdmx1 = document.createElement('p');
var text = document.createTextNode('Hay ' + activeCdmx + ' estudiantes activas y ' + inactiveCdmx + ' estudiantes inactivas');
totalCdmx1.appendChild(text);
container.appendChild(totalCdmx1);

var namesActiveCdmx = totalactiveCdmx;
console.log(namesActiveCdmx);
var activeNamesCdmx = document.createTextNode('Estudiantes activas '+ namesActiveCdmx);
var listActiveNamesCdmx = document.createElement('p');
listActiveNamesCdmx.appendChild(activeNamesCdmx);
container.appendChild(listActiveNamesCdmx);

var namesInactiveCdmx = totalinactiveCdmx;
var inactiveNamesCdmx = document.createTextNode('Estudiantes inactivas '+ namesInactiveCdmx);
var listInactiveNamesCdmx = document.createElement('p');
listInactiveNamesCdmx.appendChild(inactiveNamesCdmx);
container.appendChild(listInactiveNamesCdmx);
// total.id=('hide');
// total.style.display = 'block';
});


// ******* SEGUNDA GENERACION AREQUIPA  *******
var secondGenCdmx = document.getElementById('secondGCdmx');

secondGenCdmx.addEventListener('click', function(){
var studentsCdmxTwo = data.CDMX['2017-2'].students;

var activeCdmxTwo = 0;
var inactiveCdmxTwo = 0;
var totalactiveCdmx2 = [];
var totalinactiveCdmx2 = [];
for(var h = 0; h < studentsCdmxTwo.length; h++){
    if(studentsCdmxTwo[h]['active'] == true){
        activeCdmxTwo ++;
        totalactiveCdmx2.push(studentsCdmxTwo[h]['name']);
        // console.log(totalactive2);
        scoreHSE2 = 0;
        scoreTech2 = 0;

        for (var k = 0; k < studentsCdmxTwo[h]['sprints'].length; k++) {
            scoreTech2 += studentsCdmxTwo[h]['sprints'][k]['score']['tech'];
            scoreHSE2 += studentsCdmxTwo[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE2);
            console.log("puntaje TECH " + scoreTech2);
             var totalScore2 = scoreTech2 + scoreHSE2;
             console.log(totalScore2);  
           }
    } else {
        inactiveCdmxTwo ++;
        totalinactiveCdmx2.push(studentsCdmxTwo[h]['name']);
        // console.log('inactiveAre');
    }
}
// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGCdmx');
var totalTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeCdmxTwo + ' estudiantes activas y ' + inactiveCdmxTwo + ' estudiantes inactivas');
totalTwo.appendChild(textTwo);
containerTwo.appendChild(totalTwo);
// total.id=('hide');
// totalTwo.style.display = 'block';

var namesActiveCdmx2 = totalactiveCdmx2;
console.log(namesActiveCdmx2);
var activeNames2 = document.createTextNode('Estudiantes activas '+ namesActiveCdmx2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var namesInactiveCdmx2 = totalinactiveCdmx2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas '+ namesInactiveCdmx2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);
// total.id=('hide');
// total.style.display = 'block';
});