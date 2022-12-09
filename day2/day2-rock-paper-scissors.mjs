import fs from 'fs';
const input = fs.readFileSync('./input.mjs', {encoding:'utf8', flag:'r'});

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

        if (
            recomendedHand === "X" && opponentHand === "A" ||
            recomendedHand === "Y" && opponentHand === "B" ||
            recomendedHand === "Z" && opponentHand === "C"
        ) {
            score += DRAW;
            score += calculateHand(recomendedHand);
        } else if (
            recomendedHand === "X" && opponentHand === "C" ||
            recomendedHand === "Y" && opponentHand === "A" ||
            recomendedHand === "Z" && opponentHand === "B"
        ) {
            score += WIN;
            score += calculateHand(recomendedHand);
        } else {
            score += calculateHand(recomendedHand);
        }
       
        totalScore += score;
    }

    return totalScore;
}

console.log(calculateScore(strategyGuide));