// *********** total estudiantes en generacion 1 de arequipa  ***********

// var studentsAre = data.AQP['2016-2'].students.length;
// console.log(studentsAre);

// // var quantityAre = studentsAre.value;
// var numberArequipa = document.createTextNode(studentsAre);

// var showare = document.getElementById('areq');
// showare.appendChild(numberArequipa);

// ***********  ESTUDIANTES ACTIVAS E INACTIVAS AREQUIPA   ***********

var firstG = document.getElementById('firstGen');

firstG.addEventListener('click', function(){
var studentsAre = data.AQP['2016-2'].students;
// console.log(studentsAre);
var activeAre = 0;
var inactiveAre = 0;
var totalactive = [];
var totalinactive = [];
for(var i = 0; i < studentsAre.length; i++){
    if(studentsAre[i]['active'] == true){
        activeAre ++;
        totalactive.push(studentsAre[i]['name']);
        // console.log(totalactive);
        // console.log(totalactive[0].sprints[0].score.tech);

        scoreHSE=0;
        scoreTech = 0;

        for (var j = 0; j < studentsAre[i]['sprints'].length; j++) {
            scoreTech += studentsAre[i]['sprints'][j]['score']['tech'];
            scoreHSE += studentsAre[i]['sprints'][j]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE);
            console.log("puntaje TECH " + scoreTech);
             var totalScore = scoreTech + scoreHSE;
             console.log(totalScore);
           }

    } else {
        inactiveAre ++;
        totalinactive.push(studentsAre[i]['name']);
    }
}

//*******  OBTENER CANTIDAD Y PORCENTAJES DE ESTUDIANTES   *******

var totalStudents = activeAre + inactiveAre;

var activePercent = Math.round(activeAre * 100 / totalStudents);

var inactivePercent = Math.round(inactiveAre * 100 / totalStudents);

// ***** IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA PRIMERA GENERACION CON SUS NOMBRES
var container = document.getElementById('firstGen');
var total = document.createElement('p');
var text = document.createTextNode('Hay ' + activeAre + ' estudiantes activas y ' + inactiveAre + ' estudiantes inactivas');
total.appendChild(text);
container.appendChild(total);

var containerActive = document.createElement('p');
var textActive = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercent + '%');
containerActive.appendChild(textActive);
container.appendChild(containerActive);

var namesAreActive = totalactive;
console.log(namesAreActive);
var activeNames = document.createTextNode('Estudiantes activas: '+ namesAreActive);
var listActiveNames = document.createElement('p');
listActiveNames.appendChild(activeNames);
container.appendChild(listActiveNames);

var containerInactive = document.createElement('p');
var textInactive = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercent + '%');
containerInactive.appendChild(textInactive);
container.appendChild(containerInactive);

var namesAreInactive = totalinactive;
var inactiveNames = document.createTextNode('Estudiantes inactivas: '+ namesAreInactive);
var listInactiveNames = document.createElement('p');
listInactiveNames.appendChild(inactiveNames);
container.appendChild(listInactiveNames);

//*******  OBTENER PROMEDIOS DE JEDIS Y TEACHERS   *******

var proms = data.AQP['2016-2'].ratings;
// console.log(proms);
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

// ***** SEGUNDA GENERACION AREQUIPA******
var secondG = document.getElementById('secondGen');

secondG.addEventListener('click', function(){
var studentsAreTwo = data.AQP['2017-1'].students;

var activeAreTwo = 0;
var inactiveAreTwo = 0;
var totalactive2 = [];
var totalinactive2 = [];
for(var h = 0; h < studentsAreTwo.length; h++){
    if(studentsAreTwo[h]['active'] == true){
        activeAreTwo ++;
        totalactive2.push(studentsAreTwo[h]['name']);
        // console.log(totalactive2);
        scoreHSE2 = 0;
        scoreTech2 = 0;

        for (var k = 0; k < studentsAreTwo[h]['sprints'].length; k++) {
            scoreTech2 += studentsAreTwo[h]['sprints'][k]['score']['tech'];
            scoreHSE2 += studentsAreTwo[h]['sprints'][k]['score']['hse'];
            console.log("puntaje HSE " + scoreHSE2);
            console.log("puntaje TECH " + scoreTech2);
             var totalScore2 = scoreTech2 + scoreHSE2;
             console.log(totalScore2);
           }
    } else {
        inactiveAreTwo ++;
        totalinactive2.push(studentsAreTwo[h]['name']);
        // console.log('inactiveAre');
    }
}

var totalStudentsTwo = activeAreTwo + inactiveAreTwo;

var activePercentTwo = Math.round(activeAreTwo * 100 / totalStudentsTwo);

var inactivePercentTwo = Math.round(inactiveAreTwo * 100 / totalStudentsTwo);

// ***** IMPRIMIENDO LAS ESTUDIANTES ACTIVAS, INACTIVAS DE LA SEGUNDA GENERACION CON SUS NOMBRES
var containerTwo = document.getElementById('secondGen');
var totalTwo = document.createElement('p');
var textTwo = document.createTextNode('Hay ' + activeAreTwo + ' estudiantes activas y ' + inactiveAreTwo + ' estudiantes inactivas');
totalTwo.appendChild(textTwo);
containerTwo.appendChild(totalTwo);

var containerActiveTwo = document.createElement('p');
var textActiveTwo = document.createTextNode('El porcentaje de estudiantes activas es: ' + activePercentTwo + '%');
containerActiveTwo.appendChild(textActiveTwo);
containerTwo.appendChild(containerActiveTwo);

var namesAreActive2 = totalactive2;
console.log(namesAreActive2);
var activeNames2 = document.createTextNode('Estudiantes activas: '+ namesAreActive2);
var listActiveNames2 = document.createElement('p');
listActiveNames2.appendChild(activeNames2);
containerTwo.appendChild(listActiveNames2);

var containerInactiveTwo = document.createElement('p');
var textInactiveTwo = document.createTextNode('El porcentaje de estudiantes inactivas es: ' + inactivePercentTwo + '%');
containerInactiveTwo.appendChild(textInactiveTwo);
containerTwo.appendChild(containerInactiveTwo);

var namesAreInactive2 = totalinactive2;
var inactiveNames2 = document.createTextNode('Estudiantes inactivas: '+ namesAreInactive2);
var listInactiveNames2 = document.createElement('p');
listInactiveNames2.appendChild(inactiveNames2);
containerTwo.appendChild(listInactiveNames2);

var promsTwo = data.AQP['2017-1'].ratings;
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
     var containerRatingJ2 = document.getElementById('secondGen');
     containerJedi2.appendChild(jediText2);
     containerRatingJ2.appendChild(containerJedi2);

     var teacherText2 = document.createTextNode('El promedio del teacher es: ' + teacherTotal2);
     var containerTeacher2 = document.createElement('p');
     var containerRatingT2 = document.getElementById('secondGen');
     containerTeacher2.appendChild(teacherText2);
     containerRatingT2.appendChild(containerTeacher2);
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    
