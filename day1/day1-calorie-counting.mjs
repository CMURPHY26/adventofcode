import fs from 'fs';
const input = fs.readFileSync('./input.mjs', {encoding:'utf8', flag:'r'});

const elves = input.split('\n\n');

let totalCalories = 0;

for(const elf of elves) {
    const elfTotal = elf.split('\n').reduce((total, calories) => total + Number(calories), 0);
    totalCalories = Math.max(totalCalories, elfTotal);
}

console.log(totalCalories);