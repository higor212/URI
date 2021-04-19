const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const firstValue = Number(lines.shift())
const secondValue = Number(lines.shift())

const media = ((firstValue * 3.5) + (secondValue * 7.5)) / 11
console.log(`MEDIA = ${media.toFixed(5)}`)
