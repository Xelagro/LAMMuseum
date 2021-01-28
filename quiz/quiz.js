function check() { 
    var c=0; 
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;

    var results=document.getElementById('results');
    var quiz=document.getElementById("quiz");

    if(q1=="Rustig") {c++}
    if(q2=="Rood") {c++}
    if(q3=="Hond") {c++}
    if(q4=="Amerika") {c++}
    if(q5=="Klasiek") {c++}
    if(q6=="Casual") {c++}
    if(q7=="Gamen") {c++}
    if(q8=="Vliegen") {c++}
    if(q9=="MC Donalds") {c++}
    if(q10=="Actie") {c++}

    
    quiz.style.display="none";
       results.textContent='${c}';
}