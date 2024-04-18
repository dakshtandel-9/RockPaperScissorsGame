let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector(".msg")
let userPoint = document.querySelector("#user-score")
let compPoint = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const option = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() *3)
    return option[randIdx]
}

const drawGame = () => {
    msg.innerText = "Game was draw"
    msg.style.backgroundColor = "black"
}

const showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        userScore++
        userPoint.innerText = userScore
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compPoint.innerText = compScore
        msg.innerText = `You Lose!! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice()

    if(userChoice === compChoice){
        drawGame()
    }else{
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true
        }if (userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true
        } else {
            userwin = compChoice === "rock" ? false :true
        }
        showWinner(userwin, userChoice, compChoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice  = choice.getAttribute("id")
        playGame(userChoice)
    })
})