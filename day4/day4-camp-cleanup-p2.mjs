import fs from 'fs';
import _ from 'lodash';
const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

const pairs = input.split('\n').map( pair => pair.split(','));

// console.log(pairs);

const isOverlapped = (sectionRange1, sectionRange2) => {

}

let pairCoverageTotal = pairs.reduce((accumulator, current) => {
    let firstPairSectionRange = _.range(Number(current[0].split('-')[0]), Number(current[0].split('-')[1]));

    let secondPairSectionRange = _.range(Number(current[1].split('-')[0]),Number(current[1].split('-')[1]));

    console.log(firstPairSectionRange)
    console.log(secondPairSectionRange)
    // if(isContained(firstPairSectionRange[0], firstPairSectionRange[1], secondPairSectionRange[0], secondPairSectionRange[1])) {
    //     accumulator++;
    // }

    // return accumulator;
}, 0);

console.log(pairCoverageTotal);
