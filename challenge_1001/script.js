var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var values = input.split('\n');

const valorA = parseInt(values.shift());
const valorB = parseInt(values.shift());

const soma = valorA + valorB;

console.log('X = ' + soma)