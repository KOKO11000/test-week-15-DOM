const targetScore = document.getElementsByClassName("target-score")
const players = document.getElementsByClassName("player")
const scores = document.getElementsByClassName("score")
const totalScores = document.getElementsByClassName("total-score")
const hold = document.getElementsByClassName("hold")
const roll = document.getElementsByClassName("roll")


hold[0].textContent = "Hold"
roll[0].textContent = "Roll"
hold[1].textContent = "Hold"
roll[1].textContent = "Roll"

// const player = [players[0], players[1]]

let score = 0
let totalScore = 0

const player = {
    player0: {
        score,
        totalScore
    },
    player1: {
        score,
        totalScore
    }
}


scores[0].textContent = `score: ${score}`
scores[1].textContent = `score: ${score}`
totalScores[0].textContent = `total: ${totalScore}`
totalScores[1].textContent = `total: ${totalScore}`


function notDuble(dice1, dice2, player) {
    if (dice1 == dice2) {
        score = 0
        player[-1]
    }
    else {
        score += dice1 + dice2
        scores[player].textContent= score
        totalScore += score
        
    }
}


function getRandDice(player) {
    const side1 = Math.floor(Math.random() * 6 + 1)
    const side2 = Math.floor(Math.random() * 6 + 1)
    notDuble(side1, side2)
    // return { side1, side2 };
}



function RollOrHold() {
    hold[0].addEventListener("click", (e) => {
        let target = e.target
        console.log(target);
        target = player["player1"]
        getRandDice(target)

    })
    hold[1].addEventListener("click", (e) => {
        let target = e.target
        console.log(target);
        target = player["player0"]
        getRandDice(target)

    })
    roll[0].addEventListener("click", (e) => {
        let target = e.target
        target = player["player1"]
        getRandDice(target)
    })
    roll[1].addEventListener("click", (e) => {
        let target = e.target
        target = player["player1"]
        getRandDice(target)
    })

}


function winner() {
    if (totalScore = [50]) {
        return "we have a winner!"
    }
}




console.log(getRandDice(player0));
RollOrHold()


