import fs from 'fs';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const strategyGuide = input.split('\n').map(round => round.split(" "));

const DRAW = 3;
const WIN = 6;

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const calculateHand = (hand) => {
    if( hand === "A" || hand === "X") {
        return ROCK
    } else if (hand === "B" || hand === "Y") {
        return PAPER
    } else {
        return SCISSORS;
    }
}

const calculateScore = (guide) => {
    let totalScore = 0;

    for(let round of guide) {
        let score = 0;

        const opponentHand = round[0];
        const recomendedHand = round[1];

        switch(opponentHand) {
            case 'A': 
                switch(recomendedHand) {
                    case 'X':
                        score += calculateHand('C');
                    break;
                    case 'Y':
                        score += DRAW;
                        score += calculateHand('A');
                    break;
                    case 'Z':
                        score += WIN;
                        score += calculateHand('B');
                    break;
                }
            break;
            case 'B':
                switch(recomendedHand) {
                    case 'X':
                        score += calculateHand('A');
                    break;
                    case 'Y':
                        score += DRAW;
                        score += calculateHand('B');
                    break;
                    case 'Z':
                        score += WIN;
                        score += calculateHand('C');
                    break;
                }
            break;
            case 'C':
                switch(recomendedHand) {
                    case 'X':
                        score += calculateHand('B');
                    break;
                    case 'Y':
                        score += DRAW;
                        score += calculateHand('C');
                    break;
                    case 'Z':
                        score += WIN;
                        score += calculateHand('A');
                    break;
                }
            break;  
        }
       
        totalScore += score;
    }

    return totalScore;
}

console.log(calculateScore(strategyGuide));