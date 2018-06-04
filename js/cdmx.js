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
    
    }
}

//*******  OBTENER CANTIDAD Y PORCENTAJES DE ESTUDIANTES   *******

var totalStudents = activeCdmx + inactiveCdmx;

var activePercent = Math.round(activeCdmx * 100 / totalStudents);

var inactivePercent = Math.round(inactiveCdmx * 100 / totalStudents);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES  *******
var container = document.getElementById('firstGCdmx');
var totalCdmx1 = document.createElement('p');
var text = document.createTextNode('Hay ' + activeCdmx + ' estudiantes activas y ' + inactiveCdmx + ' estudiantes inactivas');
totalCdmx1.appendChild(text);
container.appendChild(totalCdmx1);

var containerActive = document.createElement('p');
var textActive = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercent + '%');
containerActive.appendChild(textActive);
container.appendChild(containerActive);

var namesActiveCdmx = totalactiveCdmx;
console.log(namesActiveCdmx);
var activeNamesCdmx = document.createTextNode('Estudiantes activas: '+ namesActiveCdmx);
var listActiveNamesCdmx = document.createElement('p');
listActiveNamesCdmx.appendChild(activeNamesCdmx);
container.appendChild(listActiveNamesCdmx);

var containerInactive = document.createElement('p');
var textInactive = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercent + '%');
containerInactive.appendChild(textInactive);
container.appendChild(containerInactive);

var namesInactiveCdmx = totalinactiveCdmx;
var inactiveNamesCdmx = document.createTextNode('Estudiantes inactivas: '+ namesInactiveCdmx);
var listInactiveNamesCdmx = document.createElement('p');
listInactiveNamesCdmx.appendChild(inactiveNamesCdmx);
container.appendChild(listInactiveNamesCdmx);

//*******  OBTENER PROMEDIOS DE JEDIS Y TEACHERS   *******

var proms = data.CDMX['2017-1'].ratings;

var promJedi = 0;
var promTeacher = 0;

for(var p = 0; p < proms.length; p++){
     promJedi += (proms[p]['jedi'])/proms.length;
     var jediTotal = promJedi.toFixed(1);
    //  console.log(jediTotal);

     promTeacher += (proms[p]['teacher'])/proms.length;
     var teacherTotal = promTeacher.toFixed(1);
    //  console.log(teacherTotal);
  }
     var jediText = document.createTextNode('El promedio del jedi es: ' + jediTotal);
     var containerJedi = document.createElement('p');
     var containerRatingJ = document.getElementById('firstGen');
     containerJedi.appendChild(jediText);
     containerRatingJ.appendChild(containerJedi);

     var teacherText = document.createTextNode('El promedio del teacher es: ' + teacherTotal);
     var containerTeacher = document.createElement('p');
     var containerRatingT = document.getElementById('firstGen');
     containerTeacher.appendChild(teacherText);
     containerRatingT.appendChild(containerTeacher);
});


// ******* SEGUNDA GENERACION CDMX  *******
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

var totalStudentsTwo = activeCdmxTwo + inactiveCdmxTwo;

var activePercentTwo = Math.round(activeCdmxTwo * 100 / totalStudentsTwo);

var inactivePercentTwo = Math.round(inactiveCdmxTwo * 100 / totalStudentsTwo);

// ******* IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES *******
var containerTwo = document.getElementById('secondGCdmx');
var totalTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeCdmxTwo + ' estudiantes activas y ' + inactiveCdmxTwo + ' estudiantes inactivas');
totalTwo.appendChild(textTwo);
containerTwo.appendChild(totalTwo);

var containerActiveTwo = document.createElement('p');
var textActiveTwo = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentTwo + '%');
containerActiveTwo.appendChild(textActiveTwo);
containerTwo.appendChild(containerActiveTwo);

var namesActiveCdmx2 = totalactiveCdmx2;
console.log(namesActiveCdmx2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesActiveCdmx2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var containerInactiveTwo = document.createElement('p');
var textInactiveTwo = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentTwo + '%');
containerInactiveTwo.appendChild(textInactiveTwo);
containerTwo.appendChild(containerInactiveTwo);

var namesInactiveCdmx2 = totalinactiveCdmx2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesInactiveCdmx2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);

var promsTwo = data.CDMX['2017-2'].ratings;
// console.log(promsTwo);
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
     var containerRatingJ2 = document.getElementById('secondGen');
     containerJedi2.appendChild(jediText2);
     containerRatingJ2.appendChild(containerJedi2);

     var teacherText2 = document.createTextNode('El promedio del teacher es: ' + teacherTotal2);
     var containerTeacher2 = document.createElement('p');
     var containerRatingT2 = document.getElementById('secondGen');
     containerTeacher2.appendChild(teacherText2);
     containerRatingT2.appendChild(containerTeacher2);
});