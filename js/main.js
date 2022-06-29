const ball = document.querySelector('.magic__img')
const input = document.querySelector('.magic__input')
const answer = document.querySelector('.magic__answer')
const error = document.querySelector('.magic__error')

const answers = ['Tak','Nie chcesz znać odpowiedzi na to pytanie','Raczej nie','Nie','Raczej tak','Nie wiem','Zdecydowanie nie','Zdecydowanie tak','Nie potrafię odpowiedzieć na to pytanie','Nie']


const moveBall = () => {
    
    ball.classList.add('move-animation')
    setTimeout(checkInputValue,1000)
}


const checkInputValue = () => {
    if(input.value !== '' && input.value.indexOf('?')!== -1){
        error.classList.remove('is--display')
        error.textContent = ''
        showAnswer()
    }else if(input.value !== '' && input.value.indexOf('?') === -1){
        answer.classList.remove('is--display')
        answer.textContent = ''
        error.textContent = 'Pytanie musi kończyć się znakiem zapytania!'
        error.classList.add('is--display')
    }else{
        answer.classList.remove('is--display')
        answer.textContent = ''
        error.textContent = 'Najpierw musisz zadać pytanie!'
        error.classList.add('is--display')
    }

    ball.classList.remove('move-animation')
}

const showAnswer = () => {
    const index = Math.floor(Math.random() *10)
    answer.classList.add('is--display')
    answer.innerHTML = `<span class="magic__answer-span">Odpowiedź: </span> ${answers[index]}`
}




ball.addEventListener('click',moveBall)