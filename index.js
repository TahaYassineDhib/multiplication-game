const num1 = Math.floor(Math.random()*10) +1 
const num2 = Math.floor(Math.random()*10) +1 
const question = document.getElementById('question');
question.innerText = `what is ${num1} multiply by ${num2}?`;
const correctAnswer = num1 * num2;
const input = document.getElementById('input')
const scoreEle = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score')) ;
if (!score) {
        score: 10 ;
}
scoreEle.innerText = `score: ${score}`;

const formEle = document.getElementById('form');
formEle.addEventListener('submit', () => {
    const userAnswer = + input.value
    if (userAnswer == correctAnswer){
        score ++ ;
        upDateLocalStorafe();

    } else {
        score -- ;
        upDateLocalStorafe();
    }
})

function upDateLocalStorafe(){
    localStorage.setItem("score",JSON.stringify(score))
}
