import fs from 'fs';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const elves = input.split('\n\n');

let totalCalories = 0;

const elvesTotalsArray = [];

for(const elf of elves) {
    const elfTotal = elf.split('\n').reduce((total, calories) => total + Number(calories), 0);
    totalCalories = Math.max(totalCalories, elfTotal);
    elvesTotalsArray.push(elfTotal);
}

elvesTotalsArray.sort((a,b) => b - a);

console.log(totalCalories);
console.log(elvesTotalsArray.slice(0,3).reduce((a,b) => a + b));
