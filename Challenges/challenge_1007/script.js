const input = require('fs').readFileSync('./dev/stdin', 'utf8');
const lines = input.split('\n');

const firstValue = Number(lines.shift())
const secondValue = Number(lines.shift())

const thirdValue = Number(lines.shift())
const fourthValue = Number(lines.shift())

const diff = (firstValue * secondValue) - (thirdValue * fourthValue)


console.log(`DIFERENCA = ${diff}`)
