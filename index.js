const targetScore = document.getElementsByClassName("target-score")
const playNow = document.getElementById("play-now")
const players = document.getElementsByClassName("player")
const scores = document.getElementsByClassName("score")
const totalScores = document.getElementsByClassName("total-score")
const hold = document.getElementsByClassName("hold")
const roll = document.getElementsByClassName("roll")

hold[0].textContent = "Hold"
roll[0].textContent = "Roll"
hold[1].textContent = "Hold"
roll[1].textContent = "Roll"

const player = [players[0], players[1]]

let score = 0
let totalScore = 0

scores[1].textContent = `score: ${score}`
scores[0].textContent = `score: ${score}`
totalScores[0].textContent = `total: ${totalScore}`
totalScores[1].textContent = `total: ${totalScore}`


function whoPlayNow(play) {
    if (play == player[0]) {
        playNow.textContent = "player 1 play now"
    }
    if (play == player[1]) {
        playNow.textContent = "player 2 play now"
    }
}


function notDuble(dice1, dice2, player) {
    if (dice1 == dice2) {
        score = 0
        player[-1]
    }
    else {
        score += dice1 + dice2
        scores[player] = score
        totalScore += score
    }
}


function getRandDice(player) {
    const side1 = Math.floor(Math.random() * 6 + 1)
    const side2 = Math.floor(Math.random() * 6 + 1)
    notDuble(side1, side2, player)
    const sum = side1 + side2
    return sum
}



function rollOrHold() {
    hold[0].addEventListener("click", (e) => {
        let target = e.target
        target = player[1]
        getRandDice(target)

    })
    hold[1].addEventListener("click", (e) => {
        let target = e.target
        target = player[0]
        getRandDice(target)

    })
    roll[0].addEventListener("click", (e) => {

        scores[0].textContent = getRandDice(players[0])
        
    })

    roll[1].addEventListener("click", (e) => {

        score = getRandDice(players[1])
        scores[1].textContent = score
        
    })

}


function winner() {
    if (totalScore = 50) {
        return true
    }
}


function startGame() {
    whoPlayNow(players[0])
    rollOrHold()
}

startGame()

