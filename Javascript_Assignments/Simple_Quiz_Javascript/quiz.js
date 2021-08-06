const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const A = document.getElementById("A");

const B = document.getElementById("B");

const C = document.getElementById("C");

const D = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

let timer = document.getElementById("stopwatch");
var t;
let questions = [
    {
        question: "What is the capital of India ?",
        A:"Mumbai",
        B:"Chennai",
        C:"Delhi",
        D:"Pune",
        correct:"C",
        answered:"K"
        
    },
    {
        question: "What is the national animal of India ?",
        A:"Tiger",
        B:"Lion",
        C:"Horse",
        D:"Bull",
        correct:"A",
        answered:"K"

    },
    {
        question: "What is the national flower of India ?",
        A:"Lily",
        B:"Rose",
        C:"Hibiscus",
        D:"Lotus",
        correct:"D",
        answered:"K"
    },
    {
        question: "What is the national bird of India ?",
        A:"Crow",
        B:"Peacock",
        C:"Eagle",
        D:"Pigeon",
        correct:"B",
        answered:"K"
    },
    {
        question: "Where is the Red fort ?",
        A:"Delhi",
        B:"Mumbai",
        C:"Pune",
        D:"Amritsar",
        correct:"A",
        answered:"K"
    },
    {
        question: "What is the financial capital of India?",
        A:"Mumbai",
        B:"Delhi",
        C:"Chennai",
        D:"Kolkata",
        correct:"A",
        answered:"K"
    },
    {
        question: "What is the national sport of India ?",
        A:"Football",
        B:"Cricket",
        C:"Kabaddi",
        D:"Hockey",
        correct:"D",
        answered:"K"
    },
    {
        question: "When did India get independence ?",
        A:"1920",
        B:"1947",
        C:"1950",
        D:"1965",
        correct:"B",
        answered:"K"
    },
    
    {
        question: "Where is the Golden Temple ?",
        A:"Chennai",
        B:"Kolkata",
        C:"Amritsar",
        D:"Lucknow",
        correct:"C",
        answered:"K"
    },
    {
        question: "Who is the captain of Indian cricket team ?",
        A:"K.Dev",
        B:"Virat Kohli",
        C:"MS.Dhoni",
        D:"R.Sharma",
        correct:"B",
        answered:"K"
    },
]

const lastQuestion = questions.length - 1;
let currentQuestion = 0;
let score = 0;
let lastcorrect = true;
let already_answered = ['K','K','K','K','K','K','K','K','K','K'];
let score_test = [0,0,0,0,0,0,0,0,0,0];

function showQuestion(){
    document.getElementById('A').style.background = "white";
    document.getElementById('A').style.color = "black";
    document.getElementById('B').style.background = "white";
    document.getElementById('B').style.color = "black";
    document.getElementById('C').style.background = "white";
    document.getElementById('C').style.color = "black";
    document.getElementById('D').style.background = "white";
    document.getElementById('D').style.color = "black";

    if(already_answered[currentQuestion] !== 'K' ){
        
        document.getElementById(already_answered[currentQuestion]).style.background = "yellowgreen";
    document.getElementById(already_answered[currentQuestion]).style.color = "white";
    }
    
    
    let q = questions[currentQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    A.innerHTML = q.A;
    B.innerHTML = q.B;
    C.innerHTML = q.C;
    D.innerHTML = q.D;
}

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    document.getElementById("note").style.display = "note";   
    document.getElementById("reset").style.display = "block";
    startTimer();
    showQuestion();
    quiz.style.display = "block";
    document.getElementById("qs").style.display = "block";
    
}

function checkAnswer(answer){
    document.getElementById(currentQuestion).style.background = "rgb(59, 179, 226)"
    document.getElementById(currentQuestion).style.color = "white"
    
    
    already_answered[currentQuestion] = answer;
    if( answer === questions[currentQuestion].correct){
        score++;
        score_test[currentQuestion] = 1;
        answerIsCorrect();
        lastcorrect = true;
    }else{
        score_test[currentQuestion] = 0;
        lastcorrect = false;
        answerIsWrong();
    }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;

        showQuestion();
    }else{
        clearTimeout(t);
        showscore();
    }
}

function answerIsCorrect(){
    console.log("Correct");
}

function answerIsWrong(){
    console.log("incorrect");
}

function showscore(){
    scoreDiv.style.display = "block";
    
    var count1 = 0;
    for(let i=0;i<score_test.length ;i++){
        if(score_test[i]===1){
                count1 += 1;
            }
    }
    
    
    scoreDiv.innerHTML += "<p>Your Score "+ count1 +"/10</p>";
    note.style.display = "none";
}

var min = 9;
var seconds = 60;
var stop = true;

function startTimer(){
    if(stop==true){
        stop = false;
        startwatch();
    }
}
function resetTimer(){
    if(stop==false){
        stop = true;
        currentQuestion = 0;
        already_answered = ['K','K','K','K','K','K','K','K','K','K'];
        timer.innerHTML = '10:00';
        min = 9;
        seconds = 60;
        score = 0;
        quiz.style.display = "none";
        start.style.display = "block";
        document.getElementById("reset").style.display = "none";
        document.getElementById("qs").style.display = "none";
        cleartabs();
        // startwatch();
    }
}
function cleartabs(){
    for(let i=0;i<score_test.length;i++){
        document.getElementById(i).style.background = "white"
        document.getElementById(i).style.color = "black"
        document.getElementById(i).onmouseover = function() 
            {
                this.style.background = "yellowgreen";
                this.style.color = "white";
            }
        document.getElementById(i).onmouseout = function() 
            {
                this.style.background = "white";
                this.style.color = "black";
            }
    }
}
function startwatch(){
    if(stop==false){
        seconds = parseInt(seconds);
        min = parseInt(min);
        seconds -= 1;

        if(seconds == 0){
            min -= 1;
            seconds = 60;
        }
        if(min == -1){
            timer.style.color = "red";
        }

        if (seconds < 10 || seconds == 0) {
            seconds = '0' + seconds;
          }
        if (min < 10 || min == 0) {
            min = '0' + min;
          }
        timer.innerHTML = min + ':' + seconds;

        t = setTimeout("startwatch()", 1000);
    }
}

function back(){
    if(lastcorrect === false){
        
        currentQuestion -= 1;
        showQuestion();
    }
    else{
        score -= 1;
        currentQuestion -= 1;
        showQuestion();
    }
}
function next(){
    if(currentQuestion <= questions.length - 2){
        
        currentQuestion += 1;
        showQuestion();
    }
   
}
function submit(){
    if(confirm('Are you sure you want to submit?')){
    showscore();
    clearTimeout(t);
    }
    else{
        showQuestion();
    }    

}

function traverse(option){
    currentQuestion = option;
    showQuestion();
}

