const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const value = input.split('\n');

const valorA = parseFloat(value.shift())
const valorB = parseFloat(value.shift())

const media = ((valorA * 3.5) + (valorB * 7.5)) / 11
console.log(`MEDIA = ${media.toFixed(5)}`)