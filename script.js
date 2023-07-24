const quizData = [
    {
        question: 'How old is Ohemaa?', 
        a:'10',
        b:'35',
        c:'21',
        d:'16',
        correct: 'c'
    },
    {
        question:'What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'JavaScript',
        d:'Python',
        correct:'c'
    },
    {
        question:'Who is the president of USA?',
        a:'Florin Pop',
        b:'Donald Trump',
        c:'Joe Biden',
        d:'Ivan Saldano',
        correct:'c'
    },
    {
        question:'What does HTML stand for?',
        a:'HyperText Markup Language',
        b:'Cascading Style Sheets',
        c:'HyperText Transfer Protocol',
        d:'Application Programming Interface',
        correct:'a',
        
    },
    {
        question:'What year was JavaScript launched?',
        a:'1996',
        b:'1995',
        c:'2000',
        d:'1974',
        correct:'b'
        
    }
    
]

let currentQuiz = 0//Math.floor (Math.random() * 4)
let score = 0
const quizEl = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btnEl = document.getElementById('submitBtn')
const paraEl = document.getElementById('para')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')





loadQuiz()

function loadQuiz(){

    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]
     
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    
}

function getSelected(){
    let answer = undefined
    
   answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
            answer = answerEl.id
       }
   })
    if (answer===undefined){
        alert('Pick an answer')
        // paraEl.innerHTML = `Pick an answer`
    }
   return answer
}


function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false
    })
}


btnEl.addEventListener('click',()=>{
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quizEl.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly</h2>
            
            <button onclick= "location.reload()">Done</button>`
        }
    }
})
