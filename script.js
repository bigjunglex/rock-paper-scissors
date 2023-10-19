const weapons = ['rock', 'paper', 'scissors'];
let pScore = 0,
    eScore = 0;
const result  = document.getElementById("result");

    document.getElementById("reset").addEventListener("click", function(){
        pScore = 0
        eScore = 0
        result.textContent = `RESET! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    });


    document.getElementById("rock").addEventListener("click", function() {
        if (pScore <= 5 && eScore <= 5){
            oneRound(weapons[0])};
    });
    document.getElementById("paper").addEventListener("click", function() {
        if (pScore <= 5 && eScore <= 5){
            oneRound(weapons[1])};
    });
    document.getElementById("scissors").addEventListener("click", function() {
        if (pScore <= 5 && eScore <= 5){
            oneRound(weapons[2])};
    });

function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)]
};


function oneRound(player) {
    if (player === getComputerChoice(weapons)) {
        return result.textContent = `draw! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'rock' && getComputerChoice(weapons) === 'scissors'){
        pScore += 1
        return result.textContent = `you won! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'rock' && getComputerChoice(weapons) === 'paper'){
        eScore += 1
        return result.textContent = `you lose! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'paper' && getComputerChoice(weapons) === 'scissors'){
        eScore += 1
        return result.textContent = `you lose! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'paper' && getComputerChoice(weapons) === 'rock'){
        pScore += 1
        return result.textContent = `you won! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'scissors' && getComputerChoice(weapons) === 'rock'){
        eScore += 1
        return result.textContent = `you lose! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }else if (player === 'scissors' && getComputerChoice(weapons) === 'paper'){
        pScore += 1
        return result.textContent = `you won! Current score: You --> ${pScore} : ${eScore} <-- Enemy`
    }

    if (eScore === 5) {
        result.textContent = "---- YOU HAVE LOST ----"
    }else if (pScore === 5) {
        result.textContent = "---- YOU HAVE WON ----"
    }
};

