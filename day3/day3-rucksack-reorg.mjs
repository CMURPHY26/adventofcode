import fs from 'fs';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const rucksacks = input.split('\n').map(rucksack => [
    rucksack.slice(0, (rucksack.length / 2)), 
    rucksack.slice((rucksack.length / 2), rucksack.length)
]);

let commonItems = [];

for(let rucksack of rucksacks) {
    let commonItem;

    rucksack[0].split('').forEach( item => {
        if(rucksack[1].includes(item)) {
            commonItem = item;  
        }
    });

    commonItems.push(commonItem);
}

const priorities = {} 
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, i) => {
    priorities[letter] = Number(i + 1);
});


console.log(commonItems.reduce((total, item) => {
    return total + priorities[item];
}, 0))