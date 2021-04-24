const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const firstValue = Number(lines.shift())
const secondValue = Number(lines.shift())
const thirdValue = Number(lines.shift())

const average = ((firstValue * 2) + (secondValue * 3) + (thirdValue * 5)) / 10

console.log(`MEDIA = ${average}`)
