let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')

const userInput = document.querySelector("#guess")

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.guess-counter')


const lowhi = document.querySelector("#lowOrHi")

const startOver = document.querySelector('.resultparas')



const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame =true

if(playGame){
    submit.addEventListener('click',(event)=>{
        event.preventDefault()
        let val = parseInt(userInput.value)
        console.log(val);
        validateGuess(val);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please add a valid number")
    }
    else if(guess<=0){
        alert("Enter a number greater than 1")
    }
    else if(guess>100){
        alert("Enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over! Random Number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess===random){
        displayMessage("You Guessed it right")
        endGame()
    }
    else if (guess<random){
        displayMessage("Number is too low")
    }
    else if(guess>random){
        displayMessage("Number is too high")
    }
}


function displayGuess(guess){
    userInput.value=""
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    if(numGuess>=6){
        remaining.style.color = "crimson"
    }
    remaining.innerHTML = `${11-numGuess}`
}


function displayMessage(message){
    if(message=="You Guessed it right")
        {
            lowhi.style.color="Green"
        }
    lowhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function  newGame(){
    console.log(document.querySelector('.button'))
    document.querySelector('.button').addEventListener('click',(event)=>{
        random = parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML = ``
        lowhi.innerHTML = ``
        remaining.style.color = 'white'
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

