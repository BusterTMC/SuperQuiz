const data = [
    {
        question: "Who painted the Mona Lisa??",
        a: "Vincent van Gogh",
        b: "Papblo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "c",
    },
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "Monaco",
        c: "Marseille",
        d: "Nice",
        correct: "a",
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Makalu",
        d: "Lhotse",
        correct: "b",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Saturn",
        b: "Uranus",
        c: "Neptune",
        d: "Jupiter",
        correct: "d",
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        a: "J.R.R. Tolkien",
        b: "Charles Dickens",
        c: "Lev Tolstoj",
        d: "William Shakespeare",
        correct: "d",
    },
    {
        question: "What is the capital city of Australia?",
        a: "Perth",
        b: "Canberra",
        c: "Melbourne",
        d: "Sydney",
        correct: "b",
    },
    {
        question: "What is the primary language spoken in Brazil?",
        a: "French",
        b: "Spanish",
        c: "Portuguese",
        d: "English",
        correct: "c"
    },
    {
        question: "Who is known as the inventor of the lightbulb?",
        a: "Thomas Edison",
        b: "Nikola Tesla",
        c: "Alexander Graham Bell",
        d: "Albert Einstein",
        correct: "a",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian",
        b: "Atlantic",
        c: "Pacific",
        d: "Arctic",
        correct: "c",
    },
    
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
deselectAnswers()

const currentQuizData = data[currentQuiz]

questionEl.innerText = currentQuizData.question
optionA.innerText = currentQuizData.a
optionB.innerText = currentQuizData.b
optionC.innerText = currentQuizData.c
optionD.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach((answerEL) =>(
        answerEL.checked = false
    ))
}

function getSelected() { 
    let answer

    answerEls.forEach((answerEL) =>{ 
        if(answerEL.checked){ 
            answer = answerEL.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () =>{ 
    const answer = getSelected()


    if(answer){ 
        if(answer === data[currentQuiz].correct){ 
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length){ 
            loadQuiz()
        }
        else{ 
            quiz.innerHTML = `
            <h2>You Answered ${score}/${data.length} Questions Correctly</h2>

            <button onclick="location.reload()">Play Again!</button>
            
            `
        }
    }
})