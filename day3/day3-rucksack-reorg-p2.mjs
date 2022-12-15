import fs from 'fs';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const rucksacks = input.split('\n');

let commonItems = [];

for(let i = 0; i < rucksacks.length; i+=3) {
    let commonItem;

    rucksacks[i].split('').forEach( item => {
        if(rucksacks[i+1].includes(item) && rucksacks[i+2].includes(item)) {
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