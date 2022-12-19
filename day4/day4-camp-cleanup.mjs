import fs from 'fs';
import _ from 'lodash';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const pairs = input.split('\n').map( pair => pair.split(','));

// console.log(pairs);

const isContained = (array1Start,array1End,array2Start,array2End) => {
    if(
        (array1Start >= array2Start && array1End <= array2End) ||
        (array2Start >= array1Start && array2End <= array1End) ||
        (array1Start <= array2Start && array1End >= array2End) ||
        (array2Start <= array1Start && array2End >= array1End)
    ) {
        return true;
    }
}

let pairCoverageTotal = pairs.reduce((accumulator, current) => {
    let firstPairSectionRange = [Number(current[0].split('-')[0]), Number(current[0].split('-')[1])];

    let secondPairSectionRange = [Number(current[1].split('-')[0]),Number(current[1].split('-')[1])];

    if(isContained(firstPairSectionRange[0], firstPairSectionRange[1], secondPairSectionRange[0], secondPairSectionRange[1])) {
        accumulator++;
    }

    return accumulator;
}, 0);

console.log(pairCoverageTotal);
