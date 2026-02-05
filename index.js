const targetScore = document.getElementsByClassName("target-score")
const players = document.getElementsByClassName("player")
const scores = document.getElementsByClassName("score")
const totalScores = document.getElementsByClassName("total-score")
const hold = document.getElementById("hold")
const roll = document.getElementById("roll")
const hold2 = document.getElementById("hold2")
const roll2 = document.getElementById("roll2")



hold.textContent = "Hold"
roll.textContent = "Roll"
hold2.textContent = "Hold"
roll2.textContent = "Roll"



let player1
let player2
let score = [0]
let totalScore = [0]




scores[0].textContent= `score: ${score}`
scores[1].textContent= `score: ${score}`
totalScores[0].textContent= `total: ${totalScore}`
totalScores[1].textContent= `total: ${totalScore}`



function getRandDice(player) {
    const side1 = Math.floor(Math.random() * 6 + 1)
    const side2 = Math.floor(Math.random() * 6 + 1)
    if (side1 == side2) {
        if (player1) {
            score = [0]                  
            getRandDice(player2)
        }
        
        if (player2) {
            score = [0]
            getRandDice(player1)
        }
    }
    else score.push(side1 + side2)
    return { side1, side2 };
}



function RollOrHold() {
    if (hold || hold2) {
        hold.addEventListener("click", (e) => {
            const target = e.target
            if (player1) {



            }
            if (player2) {
                getRandDice(player1)
            }
        })
        hold2.addEventListener("click", (e) => {
            if (player1) {
                getRandDice(player2)
            }
            if (player2) {
                getRandDice(player1)
            }
        })
    }


    if (roll || roll2) {
        roll.addEventListener("click", (e) => {
            const target = e.target
            console.log("target roll", target);

        })
        roll2.addEventListener("click", (e) => {
            return
        })
    }
}



function winner() {
    if (totalScore[100]) {
        return "we have a winner!"
    }
}


RollOrHold()
console.log(getRandDice(player1));
console.log(score);


