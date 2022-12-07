import fs from 'fs';
const input = fs.readFileSync('./input.mjs', {encoding:'utf8', flag:'r'});

const elfs = input.split('\n\n');

let highestCount = 0;

for(let i = 0; i < elfs.length; i++) {
    const elf = elfs[i].split('\n');
    let elfTotal = 0;

    for(let i = 0; i < elf.length; i++) {
        elfTotal += Number(elf[i]);
    }

    if (elfTotal > highestCount) {
        highestCount = elfTotal;
    }
}

console.log(highestCount);