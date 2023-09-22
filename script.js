const weapons = ['rock', 'paper', 'scissors'];
let pScore = 0,
    eScore = 0;

function getComputerChoice(array){
    return array[Math.floor(Math.random() * array.length)]
};


function oneRound(enemy) {
    let player = prompt("Choose your weapon: rock, paper or scissors").toLowerCase();
    if (player === enemy) {
        return 0
    }else if (player === 'rock' && enemy === 'scissors'){
        return 1
    }else if (player === 'rock' && enemy === 'paper'){
        return 2
    }else if (player === 'paper' && enemy === 'scissors'){
        return 2
    }else if (player === 'paper' && enemy === 'rock'){
        return 1
    }else if (player === 'scissors' && enemy === 'rock'){
        return 2
    }else if (player === 'scissors' && enemy === 'paper'){
        return 1
    }
};

function game(){
    for (let i = 1; i < 6; i++){
        let x = oneRound(getComputerChoice(weapons))
        if (x === 1){
            pScore += 1
            console.log(`Your score: ${pScore} Enemy : ${eScore}`)
        }else if (x === 2){
            eScore +=1
            console.log(`Your score: ${pScore} Enemy : ${eScore}`)
        }else{
            console.log('Tie')
            console.log(`Your score: ${pScore} Enemy : ${eScore}`)
        }  
    }
    

    if (pScore > eScore){
        return `You have won! Your score: ${pScore} Enemy : ${eScore}`
    }else if (eScore > pScore){
        return `You have lost! Your score: ${pScore} Enemy : ${eScore}` 
    }
}

console.log(game())

