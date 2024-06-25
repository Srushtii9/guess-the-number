let randomNumber = parseInt(Math.random()*100+1)
// console.log(randomNumber);
const submit= document.querySelector("#sbt")
const guessfield = document.querySelector("#guessfield")
const prevGuess = document.querySelector(".guesses")
const RemainingGuesses =document.querySelector(".RemainingGuesses")
const LowOrHigh = document.querySelector(".LowOrHigh")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')
let prev = []
let numOfGuesses= 1

let playGame= true

if (playGame) {
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(guessfield.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // to see if the eneterd num is >0 <101 number
    if (isNaN(guess)) {
       alert("Please enter a valid number") 
    }
    else if(guess<1){
        alert("Please enter number greater than 1") 

    }
    else if(guess>100){
        alert("Please enter number between 1 and 100")
    }
    else{
        prev.push(guess)
    }
    if (numOfGuesses===11) {
        displayGuess(guess)
        displayMessage(`Game over.Random number was ${randomNumber}`)
        endGame()
    } else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    // to print a message whether the entered num is low or high or..
    if (guess===randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess< randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess> randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
   guessfield.value ="" 
   prevGuess.innerHTML += `${ guess } ` //pushing the guesses
   numOfGuesses++
   RemainingGuesses.innerHTML = `${11-numOfGuesses}`
}

function displayMessage(message) {
    // dom ke sath manipulation here ex:display guess num, reducing the remaining guess etc
    LowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    guessfield.innerHTML=""
    guessfield.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame"> Start again</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame() {
    const newGame = document.querySelector("#newGame")
    newGame.addEventListener("click",function(e){
        randomNumber= parseInt(Math.random()*100+1)
        prev =[]
        numOfGuesses=1
        prevGuess.innerHTML=""
        RemainingGuesses.innerHTML=`${11-numOfGuesses}`
        guessfield.removeAttribute('disabled')
        startOver.removeChild(p)
    
        playGame=true
    })
}


